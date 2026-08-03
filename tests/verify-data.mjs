import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const page = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const dictionaryText = fs.readFileSync(new URL('../区晋名字全部字库_可编辑.txt', import.meta.url), 'utf8');

function parseDictionary(text) {
  const sections = { 金字库: [], 水字库: [], 兄弟呼应字库: [] };
  const duplicates = { 金字库: [], 水字库: [], 兄弟呼应字库: [] };
  let current = null;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const header = line.match(/^【(.+)】$/);
    if (header) {
      current = header[1];
      continue;
    }
    if (!current || !sections[current]) continue;
    if ([...line].length !== 1 || !/\p{Script=Han}/u.test(line)) continue;
    if (sections[current].includes(line)) duplicates[current].push(line);
    else sections[current].push(line);
  }
  return { sections, duplicates };
}

const dataSource = source.slice(0, source.indexOf('const candidateMap'))
  .replace('const candidates =', 'globalThis.candidates =')
  .replace('const siblingCandidates =', 'globalThis.siblingCandidates =');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(dataSource, sandbox);

const { candidates, siblingCandidates } = sandbox;
const { sections } = parseDictionary(dictionaryText);
const errors = [];
const byChar = new Map(candidates.map((item) => [item.char, item]));
const goldChars = candidates.filter((item) => item.group === '金').map((item) => item.char);
const waterChars = candidates.filter((item) => item.group === '水').map((item) => item.char);
const siblingChars = siblingCandidates.map((item) => item.char);

if (byChar.size !== candidates.length) errors.push('金字库和水字库不能出现重复候选字。');
if (goldChars.join('') !== sections.金字库.join('')) errors.push('网页金字库与可编辑 TXT 不一致。');
if (waterChars.join('') !== sections.水字库.join('')) errors.push('网页水字库与可编辑 TXT 不一致。');
if (siblingChars.join('') !== sections.兄弟呼应字库.join('')) errors.push('网页兄弟呼应字库与可编辑 TXT 不一致。');
if (candidates.some((item) => item.char === '霖')) errors.push('霖字必须排除。');
if (!source.includes(`let selectedCharacter = '${goldChars[0]}'`)) errors.push('默认选中字应跟随金字库第一个字。');

if (page.includes('character-input') || page.includes('entry-section')) errors.push('Manual third-character input must be removed.');
if (page.includes('mandarin-speak') || source.includes('playMandarinAudio') || source.includes('translate.google.com/translate_tts')) errors.push('Mandarin speech button and online audio must be removed.');
if (!page.includes('cantonese-speak') || !source.includes('function speakCantonese')) errors.push('Cantonese speech control is missing.');
if (!source.includes('SpeechSynthesisUtterance(`欧晋${selectedCharacter}`)')) errors.push('Cantonese speech should use 欧晋X.');
if (!source.includes("'yue-hk'")) errors.push('Cantonese voice aliases are incomplete.');
if (!source.includes('window.speechSynthesis.cancel();')) errors.push('Speech must cancel an older utterance before selecting a new voice.');
if (!source.includes('speechStatus.textContent')) errors.push('Speech voice diagnostics are missing.');

for (const item of [...candidates, ...siblingCandidates]) {
  const meaning = Math.min(item.meaning, 25);
  const brother = Math.min(Math.round(item.brother * 1.5), 15);
  if (item.bazi > 30 || item.bazi < 0 || item.meaning < 0 || item.sound > 30 || item.sound < 0 || item.brother > 15 || item.brother < 0) {
    errors.push(`${item.char} exceeds a category maximum.`);
  }
  if (item.bazi + meaning + item.sound + brother > 100) errors.push(`${item.char} exceeds 100 points.`);
  for (const field of ['jyutping', 'meaningText', 'soundText', 'brotherText']) {
    if (!item[field]) errors.push(`${item.char} is missing ${field}.`);
  }
}

for (const expected of [
  ['风', '凯风'],
  ['瑞', '凯瑞'],
]) {
  const [character, phrase] = expected;
  const item = byChar.get(character) || siblingCandidates.find((candidate) => candidate.char === character);
  if (!item) errors.push(`Missing ${character}.`);
  else if (!item.brotherText.includes(phrase)) errors.push(`${character} does not have the expected brother-name association.`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Verified ${goldChars.length} 金 candidates, ${waterChars.length} 水 candidates, ${siblingChars.length} sibling candidates; scoring caps are valid.`);
