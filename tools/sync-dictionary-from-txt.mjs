import fs from 'node:fs';
import vm from 'node:vm';

const textPath = '区晋名字全部字库_可编辑.txt';
const appPath = 'app.js';

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

function extractCurrentData(source) {
  const prefix = source.slice(0, source.indexOf('const candidateMap'))
    .replace('const candidates =', 'globalThis.candidates =')
    .replace('const siblingCandidates =', 'globalThis.siblingCandidates =');
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(prefix, sandbox);
  return {
    candidates: sandbox.candidates,
    siblingCandidates: sandbox.siblingCandidates,
  };
}

const brotherFallback = '暂未发现与“恺”构成的自然正向词语。';
const extras = {
  瑞: { char: '瑞', group: '金', relationship: 'related', jyutping: 'Seoi6', bazi: 29, meaning: 28, sound: 26, brother: 9, meaningText: '瑞有祥瑞、吉兆与安泰之意，传统姓名学常作金性参考。', soundText: 'Au1 Zeon3 Seoi6：尾调沉稳，字义吉祥但读音略收。', brotherText: '“恺瑞”可联想到“凯瑞”，属于人名式吉祥呼应。' },
  崇: { char: '崇', group: '金', jyutping: 'Sung4', bazi: 27, meaning: 27, sound: 25, brother: 0, meaningText: '崇有崇高、敬重与山岳气象之意，传统姓名学常作金性参考。', soundText: 'Au1 Zeon3 Sung4：鼻尾圆润，整体稳重有厚度。', brotherText: brotherFallback },
  韶: { char: '韶', group: '金', jyutping: 'Siu4', bazi: 27, meaning: 26, sound: 26, brother: 0, meaningText: '韶有美好时光、韶华与雅乐之意，传统姓名学常作金性参考。', soundText: 'Au1 Zeon3 Siu4：开口清亮，读感文雅柔和。', brotherText: brotherFallback },
  豪: { char: '豪', group: '水', jyutping: 'Hou4', bazi: 29, meaning: 28, sound: 27, brother: 0, meaningText: '豪有豪迈、才略与气度之意，传统姓名学常作水性参考。', soundText: 'Au1 Zeon3 Hou4：开口音舒展，响亮大气。', brotherText: brotherFallback },
  霏: { char: '霏', group: '水', jyutping: 'Fei1', bazi: 28, meaning: 26, sound: 27, brother: 0, meaningText: '霏有云气轻扬、文采流动之意，传统姓名学常作水性参考。', soundText: 'Au1 Zeon3 Fei1：高平调明快，整体轻盈顺口。', brotherText: brotherFallback },
};

const text = fs.readFileSync(textPath, 'utf8');
const source = fs.readFileSync(appPath, 'utf8');
const { sections, duplicates } = parseDictionary(text);
const current = extractCurrentData(source);
const currentByChar = new Map([...current.candidates, ...current.siblingCandidates].map((item) => [item.char, item]));

function candidateFor(char, group) {
  if (extras[char]) return { ...extras[char], group };
  const old = currentByChar.get(char);
  if (!old) throw new Error(`缺少新增字资料：${char}`);
  const item = { ...old, group };
  if (!item.brotherText) item.brotherText = brotherFallback;
  return item;
}

const siblingExtras = new Map(current.siblingCandidates.map((item) => [item.char, item]));
function siblingFor(char) {
  const old = siblingExtras.get(char) || extras[char];
  if (!old) throw new Error(`缺少兄弟呼应字资料：${char}`);
  return { ...old, group: '兄弟呼应', relationship: old.relationship || 'related' };
}

const candidates = [
  ...sections.金字库.map((char) => candidateFor(char, '金')),
  ...sections.水字库.map((char) => candidateFor(char, '水')),
];
const siblingCandidates = sections.兄弟呼应字库.map(siblingFor);

function jsValue(value) {
  return JSON.stringify(value, null, 2).replace(/^/gm, '  ');
}

const newBlock = `const candidates = ${jsValue(candidates)};\n\nconst siblingCandidates = ${jsValue(siblingCandidates)};\n\nconst allCandidates =`;
let updated = source.replace(/const candidates = [\s\S]*?\nconst allCandidates =/, newBlock);
updated = updated.replace(/let selectedCharacter = '[^']+';/, `let selectedCharacter = '${candidates[0]?.char || siblingCandidates[0]?.char || ''}';`);
fs.writeFileSync(appPath, updated, 'utf8');

console.log(`已同步：金 ${sections.金字库.length} 个，水 ${sections.水字库.length} 个，兄弟呼应 ${sections.兄弟呼应字库.length} 个。`);
for (const [group, chars] of Object.entries(duplicates)) {
  if (chars.length) console.log(`${group} 重复已忽略：${chars.join('、')}`);
}
