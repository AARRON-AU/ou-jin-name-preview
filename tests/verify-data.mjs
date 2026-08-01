import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const dataSource = source.slice(0, source.indexOf('const candidateMap'))
  .replace('const candidates =', 'globalThis.candidates =');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(dataSource, sandbox);

const { candidates } = sandbox;
const errors = [];
const byChar = new Map(candidates.map((item) => [item.char, item]));

if (candidates.length !== 40) errors.push(`Expected 40 candidates, found ${candidates.length}.`);
if (byChar.size !== 40) errors.push('Candidate characters must be unique.');

for (const item of candidates) {
  const total = item.bazi + item.meaning + item.sound + item.brother;
  if (item.bazi > 30 || item.meaning > 30 || item.sound > 30 || item.brother > 10) {
    errors.push(`${item.char} exceeds a category maximum.`);
  }
  if (total > 100) errors.push(`${item.char} exceeds 100 points.`);
}

for (const expected of [
  ['旋', 10, '凯旋'],
  ['风', 10, '凯风']
]) {
  const [character, brotherScore, phrase] = expected;
  const item = byChar.get(character);
  if (!item) errors.push(`Missing ${character}.`);
  else if (item.brother !== brotherScore || !item.brotherText.includes(phrase)) {
    errors.push(`${character} does not have the expected brother-name association.`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Verified ${candidates.length} candidates; 凯旋 / 凯风 associations and scoring caps are valid.`);
