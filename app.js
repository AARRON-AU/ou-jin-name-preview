const candidates = [
  { char: '旋', group: '金', jyutping: 'Syun4', bazi: 30, meaning: 29, sound: 27, brother: 10, meaningText: '旋有回环、周全与凯旋之意，利落而不失文气。', soundText: 'Au1 Zeon3 Syun4：高—中—低的收束自然，尾音圆润。', brotherText: '“恺旋”谐音“凯旋”，是最完整、最直接的兄弟呼应。' },
  { char: '铎', group: '金', jyutping: 'Dok6', bazi: 30, meaning: 28, sound: 26, brother: 0, meaningText: '铎是大铃，取警醒、声名与担当之意。', soundText: 'Au1 Zeon3 Dok6：末字短促有力，整体稳重。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '钧', group: '金', jyutping: 'Gwan1', bazi: 29, meaning: 28, sound: 27, brother: 0, meaningText: '钧有权衡、均衡与尊贵之意，端正大方。', soundText: 'Au1 Zeon3 Gwan1：由中调转高平调，清朗易叫。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '铭', group: '金', jyutping: 'Ming4', bazi: 29, meaning: 28, sound: 28, brother: 0, meaningText: '铭为铭记、志铭，寓意有志且不忘本。', soundText: 'Au1 Zeon3 Ming4：鼻音收尾柔和，粤语读起来顺。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '铮', group: '金', jyutping: 'Zang1', bazi: 30, meaning: 28, sound: 26, brother: 0, meaningText: '铮取铮然、铮铮，意为正直、有骨气。', soundText: 'Au1 Zeon3 Zang1：发音清晰，精神感强。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '锐', group: '金', jyutping: 'Jeoi6', bazi: 29, meaning: 25, sound: 25, brother: 0, meaningText: '锐有敏锐、进取之意，风格偏现代果断。', soundText: 'Au1 Zeon3 Jeoi6：尾调下落干脆，辨识度高。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '锡', group: '金', jyutping: 'Sik1', bazi: 29, meaning: 27, sound: 26, brother: 0, meaningText: '锡有赐予、珍重之意，也有金属的坚实感。', soundText: 'Au1 Zeon3 Sik1：短音收束明显，叫名利落。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '铨', group: '金', jyutping: 'Cyun4', bazi: 29, meaning: 27, sound: 27, brother: 0, meaningText: '铨意为衡量、选拔，寓意思虑周全。', soundText: 'Au1 Zeon3 Cyun4：圆唇鼻尾，音色温和。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '钊', group: '金', jyutping: 'Ziu1', bazi: 29, meaning: 27, sound: 27, brother: 0, meaningText: '钊有勉励、远见之义，简练有朝气。', soundText: 'Au1 Zeon3 Ziu1：开口音明亮，呼叫感好。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '钰', group: '金', jyutping: 'Juk6', bazi: 29, meaning: 27, sound: 25, brother: 0, meaningText: '钰指珍宝，寓意珍贵、坚韧。', soundText: 'Au1 Zeon3 Juk6：末字入声短，读感干净。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '锴', group: '金', jyutping: 'Kaai2', bazi: 29, meaning: 27, sound: 26, brother: 0, meaningText: '锴为好铁，寓意坚实可造、品性优良。', soundText: 'Au1 Zeon3 Kaai2：开阔元音收尾，响亮不拗口。', brotherText: '“恺锴”同音相近，但不宜为凑呼应而重复音感。' },
  { char: '锟', group: '金', jyutping: 'Gwan1', bazi: 28, meaning: 25, sound: 25, brother: 0, meaningText: '锟指赤金，寓意珍贵、光彩。', soundText: 'Au1 Zeon3 Gwan1：节奏平稳，读音清楚。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '镕', group: '金', jyutping: 'Jung4', bazi: 28, meaning: 27, sound: 27, brother: 0, meaningText: '镕有融和、涵容之意，气质温厚。', soundText: 'Au1 Zeon3 Jung4：鼻音收束柔和，整体温润。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '锵', group: '金', jyutping: 'Coeng1', bazi: 28, meaning: 26, sound: 25, brother: 0, meaningText: '锵有金玉相击之声，寓意清越、有精神。', soundText: 'Au1 Zeon3 Coeng1：发音清脆，个性更鲜明。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '钟', group: '金', jyutping: 'Zung1', bazi: 28, meaning: 26, sound: 26, brother: 0, meaningText: '钟有专注、汇聚之义，寓意专一沉稳。', soundText: 'Au1 Zeon3 Zung1：鼻音收尾饱满，读感敦厚。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '锋', group: '金', jyutping: 'Fung1', bazi: 28, meaning: 25, sound: 27, brother: 0, meaningText: '锋寓意锋芒与进取，风格更有力量感。', soundText: 'Au1 Zeon3 Fung1：与姓氏首音形成呼应，清楚有力。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '风', group: '水', jyutping: 'Fung1', bazi: 30, meaning: 29, sound: 29, brother: 10, meaningText: '风取风度、教化与开阔气象，清雅有古意。', soundText: 'Au1 Zeon3 Fung1：三字起伏明快，叫起来清朗。', brotherText: '“恺风”谐音“凯风”，出自《诗经》，有温和仁厚之意。' },
  { char: '泓', group: '水', jyutping: 'Wang4', bazi: 30, meaning: 29, sound: 28, brother: 0, meaningText: '泓为深广清澈之水，寓意沉静、深厚。', soundText: 'Au1 Zeon3 Wang4：尾音舒展，整体温润安定。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '泽', group: '水', jyutping: 'Zaak6', bazi: 30, meaning: 28, sound: 27, brother: 0, meaningText: '泽指润泽、恩泽，寓意温厚有福。', soundText: 'Au1 Zeon3 Zaak6：入声结尾利索，整体清晰。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '湛', group: '水', jyutping: 'Zam6', bazi: 30, meaning: 29, sound: 26, brother: 0, meaningText: '湛有清澈、深厚、专注之意，内敛坚定。', soundText: 'Au1 Zeon3 Zam6：末字厚实，读感沉着。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '涵', group: '水', jyutping: 'Ham4', bazi: 30, meaning: 29, sound: 28, brother: 0, meaningText: '涵为涵养、包容，温润而有书卷气。', soundText: 'Au1 Zeon3 Ham4：节奏平和，听感斯文。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '淳', group: '水', jyutping: 'Seon4', bazi: 29, meaning: 28, sound: 28, brother: 0, meaningText: '淳有淳厚、纯正之意，气质朴实端方。', soundText: 'Au1 Zeon3 Seon4：圆唇音柔和，亲切好叫。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '渊', group: '水', jyutping: 'Jyun1', bazi: 30, meaning: 29, sound: 27, brother: 0, meaningText: '渊寓意深度、见识与格局，大气而不张扬。', soundText: 'Au1 Zeon3 Jyun1：尾音高平，音色明净。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '澜', group: '水', jyutping: 'Laan4', bazi: 29, meaning: 27, sound: 27, brother: 0, meaningText: '澜为大波，寓意胸怀与气象，画面感强。', soundText: 'Au1 Zeon3 Laan4：长元音舒展，音律自然。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '瀚', group: '水', jyutping: 'Hon6', bazi: 29, meaning: 28, sound: 26, brother: 0, meaningText: '瀚取浩瀚，寓意广阔博大、志向远大。', soundText: 'Au1 Zeon3 Hon6：收尾沉稳，力量感较强。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '源', group: '水', jyutping: 'Jyun4', bazi: 30, meaning: 28, sound: 27, brother: 0, meaningText: '源为源头、本源，寓意根基与生生不息。', soundText: 'Au1 Zeon3 Jyun4：鼻尾柔和，整体端正。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '浩', group: '水', jyutping: 'Hou6', bazi: 29, meaning: 28, sound: 27, brother: 0, meaningText: '浩有浩然、浩大之意，开朗大气。', soundText: 'Au1 Zeon3 Hou6：开口音有延展感，响亮自然。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '沛', group: '水', jyutping: 'Pui3', bazi: 29, meaning: 27, sound: 27, brother: 0, meaningText: '沛意为充沛、丰盛，寓意活力与丰足。', soundText: 'Au1 Zeon3 Pui3：去声收尾清晰，节奏轻快。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '潇', group: '水', jyutping: 'Siu1', bazi: 29, meaning: 27, sound: 28, brother: 0, meaningText: '潇有潇洒、清朗之意，气质自在清雅。', soundText: 'Au1 Zeon3 Siu1：开口感明亮，听感轻盈。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '澈', group: '水', jyutping: 'Cit3', bazi: 29, meaning: 28, sound: 26, brother: 0, meaningText: '澈为澄澈、通透，寓意明净真诚。', soundText: 'Au1 Zeon3 Cit3：短促清亮，辨识度强。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '清', group: '水', jyutping: 'Cing1', bazi: 29, meaning: 29, sound: 28, brother: 0, meaningText: '清有清明、清正与澄澈之义，简洁雅正。', soundText: 'Au1 Zeon3 Cing1：收束轻巧，整体很干净。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '润', group: '水', jyutping: 'Jeon6', bazi: 29, meaning: 29, sound: 27, brother: 0, meaningText: '润为润泽、温润，寓意温厚而有生机。', soundText: 'Au1 Zeon3 Jeon6：末调下落，声音温和稳妥。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '洋', group: '水', jyutping: 'Joeng4', bazi: 28, meaning: 26, sound: 27, brother: 0, meaningText: '洋有海洋、广大之意，开阔明朗。', soundText: 'Au1 Zeon3 Joeng4：尾音饱满，读感自然。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '航', group: '水', jyutping: 'Hong4', bazi: 28, meaning: 27, sound: 27, brother: 0, meaningText: '航寓意远行、方向与探索，现代感较强。', soundText: 'Au1 Zeon3 Hong4：节奏舒展，有向前感。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '沅', group: '水', jyutping: 'Jyun4', bazi: 28, meaning: 25, sound: 26, brother: 0, meaningText: '沅是水名，带有清润、源远的自然意象。', soundText: 'Au1 Zeon3 Jyun4：音律温和，但字义较偏古典。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '洵', group: '水', jyutping: 'Seon1', bazi: 28, meaning: 27, sound: 27, brother: 0, meaningText: '洵为诚然、真实，寓意诚信笃实。', soundText: 'Au1 Zeon3 Seon1：收尾轻柔，斯文易读。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '淮', group: '水', jyutping: 'Waai4', bazi: 28, meaning: 26, sound: 25, brother: 0, meaningText: '淮为水名，寓意沉稳、有地域山川之感。', soundText: 'Au1 Zeon3 Waai4：音节清楚，风格较厚重。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '沐', group: '水', jyutping: 'Muk6', bazi: 28, meaning: 27, sound: 26, brother: 0, meaningText: '沐有润泽、受恩与洗练之意，温暖清新。', soundText: 'Au1 Zeon3 Muk6：入声收尾简洁，现代感明显。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '澍', group: '水', jyutping: 'Syu6', bazi: 28, meaning: 25, sound: 24, brother: 0, meaningText: '澍为及时雨，寓意滋养、恩惠与生机。', soundText: 'Au1 Zeon3 Syu6：音色沉着，但“澍”较少见。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '溯', group: '水', jyutping: 'Sou3', bazi: 28, meaning: 26, sound: 25, brother: 0, meaningText: '溯有追本溯源、向上求索之意，理性有方向。', soundText: 'Au1 Zeon3 Sou3：元音开阔，收尾明快。', brotherText: '暂未发现与“恺”构成的自然正向词语。' }
];

const candidateMap = new Map(candidates.map((item) => [item.char, item]));
const groups = ['金', '水'];
const elements = {
  '金': '金 · 优先补益方向',
  '水': '水 · 优先补益方向'
};

const input = document.querySelector('#character-input');
const nameDisplay = document.querySelector('#name-display');
const reading = document.querySelector('#cantonese-reading');
const totalScore = document.querySelector('#total-score');
const scoreOrb = document.querySelector('.score-orb');
const status = document.querySelector('#input-status');
const groupContainer = document.querySelector('#candidate-groups');
const breakdown = document.querySelector('#score-breakdown');
const badge = document.querySelector('#element-badge');
const meaningText = document.querySelector('#meaning-text');
const soundText = document.querySelector('#sound-text');
const brotherText = document.querySelector('#brother-text');

function buildCandidates() {
  groupContainer.innerHTML = groups.map((group) => {
    const items = candidates.filter((item) => item.group === group);
    return `<div class="candidate-group"><h3 class="group-title">${group}字 <span>${elements[group]}</span></h3><div class="candidate-grid">${items.map((item) => `<button class="candidate" type="button" data-char="${item.char}" aria-pressed="false" aria-label="选择 区晋${item.char}">${item.char}</button>`).join('')}</div></div>`;
  }).join('');
}

function scoreRow(label, score, max) {
  const width = Math.round((score / max) * 100);
  return `<div class="score-row"><span class="score-label">${label}</span><span class="bar" aria-hidden="true"><i style="width:${width}%"></i></span><strong class="score-points">${score}/${max}</strong></div>`;
}

function setSelection(character) {
  const item = candidateMap.get(character);
  nameDisplay.textContent = `区晋${character || '□'}`;
  input.value = character;
  document.querySelectorAll('.candidate').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.char === character));
  });

  if (!item) {
    totalScore.textContent = '—';
    scoreOrb.setAttribute('aria-label', '待核对，暂不评分');
    reading.textContent = character ? '粤语：待核对' : '请输入一个第三个字';
    badge.textContent = '待核对';
    breakdown.innerHTML = '';
    meaningText.textContent = '该字未收录在本次筛选字库中，暂不对字义或五行作自动判断。';
    soundText.textContent = '请以当地家庭日常粤语发音为准；未核对读音时不提供音律分。';
    brotherText.textContent = '未核对“恺＋该字”是否能组成自然词语或正向谐音。';
    status.textContent = character ? '该字未收录：建议先核对粤语读音、字义与五行取向。' : '请输入一个已收录的第三个字。';
    status.classList.toggle('is-error', Boolean(character));
    return;
  }

  const total = item.bazi + item.meaning + item.sound + item.brother;
  totalScore.textContent = total;
  scoreOrb.setAttribute('aria-label', `总分 ${total} 分`);
  reading.textContent = `粤语：Au1 Zeon3 ${item.jyutping}`;
  badge.textContent = item.group;
  breakdown.innerHTML = [
    scoreRow('八字结合度', item.bazi, 30),
    scoreRow('寓意与气质', item.meaning, 30),
    scoreRow('粤语听感', item.sound, 30),
    scoreRow('与“恺”呼应', item.brother, 10)
  ].join('');
  meaningText.textContent = item.meaningText;
  soundText.textContent = item.soundText;
  brotherText.textContent = item.brotherText;
  status.textContent = '已收录：可查看完整评分依据。';
  status.classList.remove('is-error');
}

buildCandidates();
groupContainer.addEventListener('click', (event) => {
  const button = event.target.closest('.candidate');
  if (button) setSelection(button.dataset.char);
});

input.addEventListener('input', () => {
  const value = Array.from(input.value.trim())[0] || '';
  if (input.value !== value) input.value = value;
  setSelection(value);
});

setSelection('旋');
