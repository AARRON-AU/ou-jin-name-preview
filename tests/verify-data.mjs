import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const page = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const dataSource = source.slice(0, source.indexOf('const candidateMap'))
  .replace('const candidates =', 'globalThis.candidates =');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(dataSource, sandbox);

const { candidates } = sandbox;
const errors = [];
const byChar = new Map(candidates.map((item) => [item.char, item]));

if (candidates.length !== 160) errors.push(`Expected 160 candidates, found ${candidates.length}.`);
if (byChar.size !== 160) errors.push('Candidate characters must be unique.');
if (candidates.filter((item) => item.group === '金').length !== 80) errors.push('金字库 must contain 80 candidates.');
if (candidates.filter((item) => item.group === '水').length !== 80) errors.push('水字库 must contain 80 candidates.');
const goldChars = candidates.filter((item) => item.group === '金').map((item) => item.char);
const waterChars = candidates.filter((item) => item.group === '水').map((item) => item.char);
const goldPrefix = ['旋', '铎', '钧', '铭', '铮', '锐', '锡', '铨', '钊', '钰', '锴', '锟', '镕', '锵', '钟', '锋', '鑫', '锦', '钦', '铠', '镇', '铸', '镜', '鉴', '铿'];
const waterPrefix = ['风', '泓', '泽', '湛', '涵', '淳', '渊', '澜', '瀚', '源', '浩', '沛', '潇', '澈', '清', '润', '洋', '航', '沅', '洵', '淮', '沐', '澍', '溯', '冰'];
if (goldChars.slice(0, 25).join('') !== goldPrefix.join('')) errors.push('金字库前25个字必须保持不变。');
if (waterChars.slice(0, 25).join('') !== waterPrefix.join('')) errors.push('水字库前25个字必须保持不变。');
if (goldChars.slice(25).some((char) => /[金钅釒]/u.test(char))) errors.push('金字库后25个字不应硬性使用金字旁。');
if (waterChars.slice(25).some((char) => /[水氵]/u.test(char))) errors.push('水字库后25个字不应硬性使用三点水。');
if (candidates.some((item) => item.char === '霖')) errors.push('霖字必须排除。');
for (const feminine of ['诗', '静', '玥', '珊', '玲', '瑶', '琬', '雪', '露', '霞', '雯', '霏', '霓', '贝', '盈', '曼', '妍']) {
  if (byChar.has(feminine)) errors.push(`明显偏女性化字 ${feminine} 应已替换。`);
}
const siblingCount = source.split('siblingItem(').length - 2;
if (siblingCount !== 30) errors.push(`Expected 30 sibling candidates, found ${siblingCount}.`);
if (page.includes('character-input') || page.includes('entry-section')) errors.push('Manual third-character input must be removed.');
if (page.includes('mandarin-speak') || source.includes('playMandarinAudio') || source.includes('translate.google.com/translate_tts')) errors.push('Mandarin speech button and online audio must be removed.');
if (!page.includes('cantonese-speak') || !source.includes('function speakCantonese')) errors.push('Cantonese speech control is missing.');
if (!source.includes('SpeechSynthesisUtterance(`欧晋${selectedCharacter}`)')) errors.push('Cantonese speech should use 欧晋X.');
if (!source.includes("'yue-hk'")) errors.push('Cantonese voice aliases are incomplete.');
if (!source.includes('window.speechSynthesis.cancel();')) errors.push('Speech must cancel an older utterance before selecting a new voice.');
if (!source.includes('speechStatus.textContent')) errors.push('Speech voice diagnostics are missing.');

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

console.log(`Verified 80 金 candidates, 80 水 candidates, 30 sibling candidates; scoring caps are valid.`);
