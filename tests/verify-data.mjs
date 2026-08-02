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
const siblingCount = (source.match(/siblingItem\(/g) || []).length - 1;
if (siblingCount < 20) errors.push(`Expected at least 20 sibling candidates, found ${siblingCount}.`);
if (!source.includes('SpeechSynthesisUtterance(`欧晋${character}`)')) errors.push('Speech should use 欧晋X for both reading modes.');
if (source.includes("|| voices.find((voice) => voice.lang.toLowerCase().startsWith('zh'))")) errors.push('Speech must not fall back to an arbitrary Chinese voice.');
if (!source.includes("'cmn-hans-cn'") || !source.includes("'yue-hk'")) errors.push('Speech language aliases are incomplete.');
if (!source.includes('window.speechSynthesis.cancel();')) errors.push('Speech must cancel an older utterance before selecting a new voice.');
if (!source.includes('speechStatus.textContent')) errors.push('Speech voice diagnostics are missing.');
if (!source.includes('explicitlyMandarin')) errors.push('Mandarin voice name verification is missing.');

for (const item of candidates) {
  const total = item.bazi + item.meaning + item.sound + item.brother;
  const meaning = Math.min(item.meaning, 25);
  const brother = Math.min(item.brother * 1.5, 15);
  if (item.bazi > 30 || item.meaning < 0 || item.sound > 30 || item.brother > 15) {
    errors.push(`${item.char} exceeds a category maximum.`);
  }
  if (item.bazi + meaning + item.sound + brother > 100) errors.push(`${item.char} exceeds 100 points.`);
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
