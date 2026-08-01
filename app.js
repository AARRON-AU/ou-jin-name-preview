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

function siblingItem(char, relationship, jyutping, phrase, meaningText, bazi, meaning, sound, brother) {
  return {
    char, group: '兄弟呼应', relationship, jyutping, bazi, meaning, sound, brother,
    meaningText, soundText: `Au1 Zeon3 ${jyutping}：${sound}`, brotherText: `“恺${char}”可联想到“${phrase}”。`
  };
}

const siblingCandidates = [
  siblingItem('旋', 'strong', 'Syun4', '凯旋', '旋有回环、周全与凯旋之意，利落而不失文气。', 30, 25, 27, 15),
  siblingItem('风', 'strong', 'Fung1', '凯风', '风取风度、教化与开阔气象，清雅有古意。', 30, 25, 29, 15),
  siblingItem('歌', 'strong', 'Go1', '凯歌', '歌有凯歌、歌咏之意，明朗有文化气息。', 18, 23, 28, 15),
  siblingItem('捷', 'related', 'Zit6', '凯捷', '捷有敏捷、胜捷之意，现代而有行动力。', 21, 23, 25, 12),
  siblingItem('乐', 'related', 'Lok6', '凯乐', '乐有喜乐、和乐之意，亲切开朗。', 17, 23, 26, 12),
  siblingItem('泽', 'related', 'Zaak6', '凯泽', '泽有润泽、恩泽之意，可联想到凯泽之名。', 30, 25, 27, 9),
  siblingItem('瑞', 'related', 'Seoi6', '凯瑞', '瑞有祥瑞之意，凯瑞是常见的吉祥组合。', 22, 24, 26, 9),
  siblingItem('模', 'strong', 'Mou4', '楷模', '模取楷模，寓意有标准、有榜样力量。', 18, 25, 24, 15),
  siblingItem('书', 'strong', 'Syu1', '楷书', '书取楷书，寓意端正、清晰、有文化底蕴。', 18, 25, 27, 15),
  siblingItem('体', 'related', 'Tai2', '楷体', '体取楷体，寓意端庄有形、持正守则。', 17, 22, 25, 12),
  siblingItem('法', 'related', 'Faat3', '楷法', '法取楷法，寓意有规范、有原则。', 17, 23, 24, 12),
  siblingItem('则', 'related', 'Zak1', '楷则', '则取楷则，寓意守正、可为准则。', 17, 24, 25, 12),
  siblingItem('切', 'strong', 'Cit3', '恺切', '切取恺切，寓意真诚恳切、待人坦荡。', 18, 24, 25, 15),
  siblingItem('悌', 'strong', 'Tai5', '恺悌', '悌指敬爱兄长、兄弟和睦，寓意非常直接。', 17, 25, 25, 15),
  siblingItem('然', 'strong', 'Jin4', '慨然', '然取慨然，寓意爽朗、慷慨、有担当。', 18, 24, 26, 15),
  siblingItem('叹', 'related', 'Taan3', '慨叹', '叹取慨叹，文字关联明确，但日常名字感较弱。', 17, 20, 24, 12),
  siblingItem('慷', 'strong', 'Hong2', '慷慨', '慷与慨组成慷慨，寓意大方、有气度。', 17, 25, 23, 15),
  siblingItem('愉', 'strong', 'Jyu4', '恺愉', '愉取恺愉，寓意和悦、愉快、心境开朗。', 18, 24, 27, 15),
  siblingItem('安', 'related', 'On1', '凯安', '安取凯安，寓意平安、安定，组合偏名字化。', 18, 24, 28, 9),
  siblingItem('宁', 'related', 'Ning4', '凯宁', '宁取凯宁，寓意安宁从容，组合偏名字化。', 18, 24, 26, 9),
  siblingItem('康', 'related', 'Hong1', '凯康', '康取凯康，寓意健康、安康，组合偏名字化。', 18, 24, 25, 9)
];

const allCandidates = [...siblingCandidates, ...candidates];
const candidateMap = new Map(allCandidates.map((item) => [item.char, item]));
const groups = ['金', '水', '兄弟呼应'];
const elements = {
  '金': '金 · 优先补益方向',
  '水': '水 · 优先补益方向',
  '兄弟呼应': '与“恺”组成词语或谐音'
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
const mandarinSpeak = document.querySelector('#mandarin-speak');
const cantoneseSpeak = document.querySelector('#cantonese-speak');
const speechStatus = document.querySelector('#speech-status');

const relationshipMap = new Map(siblingCandidates.filter((item) => item.brother > 0).map((item) => [item.char, item]));

const manualElementProfiles = new Map([
  ['海', { group: '水', label: '海水意象' }], ['江', { group: '水', label: '江河意象' }], ['河', { group: '水', label: '江河意象' }],
  ['涛', { group: '水', label: '水势意象' }], ['淼', { group: '水', label: '水势意象' }], ['浩', { group: '水', label: '浩水意象' }],
  ['鑫', { group: '金', label: '三金字形' }], ['金', { group: '金', label: '金字形' }], ['银', { group: '金', label: '金属意象' }],
  ['锋', { group: '金', label: '金属字形' }], ['钰', { group: '金', label: '金属字形' }]
]);

function makeEstimatedItem(character) {
  const relation = relationshipMap.get(character);
  const profile = manualElementProfiles.get(character);
  const elementName = profile?.group || '中性';
  const bazi = profile?.group === '水' ? 30 : profile?.group === '金' ? 28 : 18;
  const meaning = profile ? 22 : 20;
  const sound = 18;
  return {
    char: character,
    group: profile?.group || '未收录',
    relationship: relation?.relationship,
    jyutping: '待核对',
    bazi,
    meaning,
    sound,
    brother: relation?.brother || 0,
    meaningText: profile ? `该字未在精选字库中，但按“${profile.label}”归入${elementName}方向；寓意项采用保守基准 ${meaning}/25。` : `该字未在精选字库中，也未命中金水字形规则；寓意项采用保守中性基准 ${meaning}/25。`,
    soundText: `粤语读音尚未收录，因此音律项按基础 ${sound}/30 计分；请以本地家庭实际读音复核。`,
    brotherText: relation ? relation.brotherText : '暂未收录与“恺”组成词语或正向谐音的资料。',
    estimated: true,
    evidenceText: profile ? `八字项依据：${profile.label} → ${elementName}方向，${bazi}/30。` : `八字项依据：未命中金水字形规则，采用中性保守值 ${bazi}/30。`
  };
}

function buildCandidates() {
  groupContainer.innerHTML = groups.map((group, index) => {
    const source = group === '兄弟呼应' ? siblingCandidates : candidates;
    const items = source.filter((item) => item.group === group);
    const buttons = items.map((item) => {
      const relationship = group === '兄弟呼应' ? null : item.relationship || relationshipMap.get(item.char)?.relationship;
      const relationClass = relationship === 'strong' ? ' relationship-strong' : relationship === 'related' ? ' relationship-related' : '';
      return `<button class="candidate${relationClass}" type="button" data-char="${item.char}" aria-pressed="false" aria-label="选择 区晋${item.char}">${item.char}</button>`;
    }).join('');
    return `<details class="candidate-group"${index < 2 ? ' open' : ''}><summary><h3 class="group-title">${group}字 <span>${elements[group]}</span></h3></summary><div class="candidate-grid">${buttons}</div></details>`;
  }).join('');
}

function scoreRow(label, score, max) {
  const width = Math.round((score / max) * 100);
  return `<div class="score-row"><span class="score-label">${label}</span><span class="bar" aria-hidden="true"><i style="width:${width}%"></i></span><strong class="score-points">${score}/${max}</strong></div>`;
}

function setSelection(character) {
  const item = candidateMap.get(character) || (character ? makeEstimatedItem(character) : null);
  nameDisplay.textContent = `区晋${character || '□'}`;
  input.value = character;
  document.querySelectorAll('.candidate').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.char === character));
  });

  if (!item) {
    totalScore.textContent = '—';
    scoreOrb.setAttribute('aria-label', '请输入第三个字');
    reading.textContent = '粤语：待核对';
    badge.textContent = '待输入';
    breakdown.innerHTML = '';
    meaningText.textContent = '请输入一个汉字后查看评分。';
    soundText.textContent = '请输入一个汉字后查看评分。';
    brotherText.textContent = '请输入一个汉字后查看评分。';
    status.textContent = '请输入一个第三个字。';
    status.classList.remove('is-error');
    return;
  }

  const meaningScore = Math.min(item.meaning, 25);
  const brotherScore = Math.min(15, Math.round(item.brother * 1.5));
  const total = item.bazi + meaningScore + item.sound + brotherScore;
  totalScore.textContent = total;
  scoreOrb.setAttribute('aria-label', `总分 ${total} 分`);
  reading.textContent = `粤语：Au1 Zeon3 ${item.jyutping}`;
  badge.textContent = item.estimated ? '估算' : item.group;
  breakdown.innerHTML = [
    scoreRow('八字结合度', item.bazi, 30),
    scoreRow('寓意与气质', meaningScore, 25),
    scoreRow('粤语听感', item.sound, 30),
    scoreRow('与“恺”呼应', brotherScore, 15)
  ].join('');
  meaningText.textContent = item.estimated ? `${item.meaningText} ${item.evidenceText}` : item.meaningText;
  soundText.textContent = item.soundText;
  brotherText.textContent = item.brotherText;
  status.textContent = item.estimated ? '未收录：已按内置金水/中性规则给出可解释估算，粤语读音仍建议人工复核。' : '已收录：可查看完整评分依据。';
  status.classList.toggle('is-error', Boolean(item.estimated));
}

function speakName(language) {
  if (!('speechSynthesis' in window)) {
    status.textContent = '当前浏览器不支持语音朗读。';
    speechStatus.textContent = '当前浏览器不支持语音朗读。';
    status.classList.add('is-error');
    return;
  }
  const character = Array.from(input.value.trim())[0];
  if (!character) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(`欧晋${character}`);
  utterance.lang = language;
  const voices = window.speechSynthesis.getVoices();
  const aliases = language === 'zh-CN'
    ? ['zh-cn', 'cmn-hans-cn', 'cmn-cn', 'zh-hans-cn', 'zh-hans']
    : ['zh-hk', 'yue-hk', 'yue'];
  const preferred = voices.find((voice) => {
    const voiceLanguage = voice.lang.toLowerCase();
    const voiceName = voice.name.toLowerCase();
    const exactLanguage = aliases.some((alias) => voiceLanguage === alias || voiceLanguage.startsWith(`${alias}-`));
    const explicitlyWrong = language === 'zh-CN'
      ? /粤语|cantonese|yue|hong kong|香港|廣東/.test(voiceName)
      : /普通话|mandarin|mainland|simplified|中国大陆|普通話/.test(voiceName);
    return exactLanguage && !explicitlyWrong;
  });
  if (!preferred) {
    const message = language === 'zh-CN'
      ? '未检测到普通话语音，请在设备系统中安装中文（普通话）语音包。'
      : '未检测到粤语语音，请在设备系统中安装粤语语音包。';
    status.textContent = message;
    speechStatus.textContent = message;
    status.classList.add('is-error');
    return;
  }
  utterance.voice = preferred;
  speechStatus.textContent = `${language === 'zh-CN' ? '普通话' : '粤语'}：${preferred.name}（${preferred.lang}）`;
  status.classList.remove('is-error');
  window.speechSynthesis.speak(utterance);
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

mandarinSpeak.addEventListener('click', () => speakName('zh-CN'));
cantoneseSpeak.addEventListener('click', () => speakName('zh-HK'));

setSelection('旋');
