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
  { char: '溯', group: '水', jyutping: 'Sou3', bazi: 28, meaning: 26, sound: 25, brother: 0, meaningText: '溯有追本溯源、向上求索之意，理性有方向。', soundText: 'Au1 Zeon3 Sou3：元音开阔，收尾明快。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },

  { char: '鑫', group: '金', jyutping: 'Jam1', bazi: 29, meaning: 26, sound: 24, brother: 0, meaningText: '鑫由三金组成，寓意兴盛、丰足与珍贵。', soundText: 'Au1 Zeon3 Jam1：鼻音收束圆润，整体厚实。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '锦', group: '金', jyutping: 'Gam2', bazi: 29, meaning: 28, sound: 27, brother: 0, meaningText: '锦有锦绣、华美与前程之意，明亮而有祝福感。', soundText: 'Au1 Zeon3 Gam2：上扬转折清晰，响亮好叫。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '钦', group: '金', jyutping: 'Jam1', bazi: 29, meaning: 27, sound: 25, brother: 0, meaningText: '钦有敬重、钦佩之意，寓意谦逊而有分量。', soundText: 'Au1 Zeon3 Jam1：鼻音柔和，读感稳重。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '铠', group: '金', jyutping: 'Hoi2', bazi: 28, meaning: 27, sound: 27, brother: 0, meaningText: '铠是护身之甲，寓意守护、坚毅与担当。', soundText: 'Au1 Zeon3 Hoi2：开口音明朗，节奏爽利。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '镇', group: '金', jyutping: 'Zan3', bazi: 28, meaning: 25, sound: 25, brother: 0, meaningText: '镇有安定、镇守之意，气质沉着可靠。', soundText: 'Au1 Zeon3 Zan3：短促有力，名字辨识度高。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '铸', group: '金', jyutping: 'Zyu3', bazi: 28, meaning: 27, sound: 25, brother: 0, meaningText: '铸有铸就、塑造之意，寓意脚踏实地成就自我。', soundText: 'Au1 Zeon3 Zyu3：圆唇收尾稳健，力量感较强。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '镜', group: '金', jyutping: 'Geng3', bazi: 27, meaning: 25, sound: 25, brother: 0, meaningText: '镜有明鉴、自省与清明之意，气质雅正。', soundText: 'Au1 Zeon3 Geng3：尾音清晰，读感利落。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '鉴', group: '金', jyutping: 'Gaam3', bazi: 27, meaning: 27, sound: 24, brother: 0, meaningText: '鉴有明察、借鉴与鉴照之意，寓意明辨笃行。', soundText: 'Au1 Zeon3 Gaam3：长元音沉稳，风格端庄。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '铿', group: '金', jyutping: 'Hang1', bazi: 27, meaning: 25, sound: 24, brother: 0, meaningText: '铿取铿锵之声，寓意坚定、清越、有精神。', soundText: 'Au1 Zeon3 Hang1：声母清楚，气质鲜明。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '铂', group: '金', jyutping: 'Bok6', bazi: 27, meaning: 25, sound: 24, brother: 0, meaningText: '铂是贵金属，寓意珍贵、纯净与坚韧。', soundText: 'Au1 Zeon3 Bok6：入声短促，叫名干净。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '银', group: '金', jyutping: 'Ngan4', bazi: 27, meaning: 26, sound: 25, brother: 0, meaningText: '银有明亮、珍贵与温润之意，气质清雅。', soundText: 'Au1 Zeon3 Ngan4：鼻尾舒展，音色温和。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '铜', group: '金', jyutping: 'Tung4', bazi: 26, meaning: 24, sound: 25, brother: 0, meaningText: '铜有坚实、古朴与和鸣之意，风格厚重。', soundText: 'Au1 Zeon3 Tung4：圆唇鼻尾饱满，读感敦厚。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '钢', group: '金', jyutping: 'Gong3', bazi: 26, meaning: 25, sound: 25, brother: 0, meaningText: '钢寓意坚强、刚正与抗压，力量感直接。', soundText: 'Au1 Zeon3 Gong3：音节短而有力，辨识度高。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '铁', group: '金', jyutping: 'Tit3', bazi: 25, meaning: 24, sound: 24, brother: 0, meaningText: '铁寓意坚毅、可靠与执行力，风格朴实。', soundText: 'Au1 Zeon3 Tit3：入声清脆，读起来利落。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '铬', group: '金', jyutping: 'Lok3', bazi: 26, meaning: 22, sound: 24, brother: 0, meaningText: '铬为金属名，取坚韧、耐久与清峻之感。', soundText: 'Au1 Zeon3 Lok3：短音收尾，节奏清楚。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '铣', group: '金', jyutping: 'Sai2', bazi: 26, meaning: 22, sound: 24, brother: 0, meaningText: '铣为金属名，字形清峻，寓意精进打磨。', soundText: 'Au1 Zeon3 Sai2：开口音明快，读感轻巧。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '铝', group: '金', jyutping: 'Leoi5', bazi: 25, meaning: 21, sound: 24, brother: 0, meaningText: '铝为轻质金属，取轻盈、坚韧与现代感。', soundText: 'Au1 Zeon3 Leoi5：尾音圆润，整体清晰。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '铱', group: '金', jyutping: 'Ji1', bazi: 26, meaning: 22, sound: 25, brother: 0, meaningText: '铱为稀有金属，寓意珍稀、坚定与独特。', soundText: 'Au1 Zeon3 Ji1：高平调明亮，短而清楚。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '钛', group: '金', jyutping: 'Taai3', bazi: 26, meaning: 24, sound: 25, brother: 0, meaningText: '钛寓意轻而坚、耐久有韧性，现代感鲜明。', soundText: 'Au1 Zeon3 Taai3：长元音开阔，读感爽朗。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '钨', group: '金', jyutping: 'Wu1', bazi: 25, meaning: 21, sound: 24, brother: 0, meaningText: '钨取坚硬、耐热与持久之意，风格少见。', soundText: 'Au1 Zeon3 Wu1：高平调圆润，但字较生僻。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '钼', group: '金', jyutping: 'Muk6', bazi: 25, meaning: 20, sound: 24, brother: 0, meaningText: '钼为金属名，取坚实、耐久与专注之感。', soundText: 'Au1 Zeon3 Muk6：入声收尾，节奏干净。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '钒', group: '金', jyutping: 'Faan4', bazi: 25, meaning: 21, sound: 25, brother: 0, meaningText: '钒为金属名，寓意坚韧、沉静与耐力。', soundText: 'Au1 Zeon3 Faan4：长元音舒展，读感稳。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '钴', group: '金', jyutping: 'Gu1', bazi: 25, meaning: 21, sound: 24, brother: 0, meaningText: '钴为金属名，取深沉、坚实与专一之感。', soundText: 'Au1 Zeon3 Gu1：圆唇高平，声音简洁。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '钕', group: '金', jyutping: 'Neoi5', bazi: 25, meaning: 20, sound: 23, brother: 0, meaningText: '钕为稀土金属，寓意稀有、专注与内在力量。', soundText: 'Au1 Zeon3 Neoi5：圆唇尾音特别，字较少见。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '钐', group: '金', jyutping: 'Saam1', bazi: 25, meaning: 20, sound: 24, brother: 0, meaningText: '钐为稀土金属，取沉稳、坚韧与独特之意。', soundText: 'Au1 Zeon3 Saam1：鼻尾清晰，整体沉着。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '钇', group: '金', jyutping: 'Gei2', bazi: 25, meaning: 20, sound: 23, brother: 0, meaningText: '钇为稀土金属，寓意稀珍、纯粹与专注。', soundText: 'Au1 Zeon3 Gei2：短音清楚，但字较生僻。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '钙', group: '金', jyutping: 'Koi3', bazi: 24, meaning: 20, sound: 24, brother: 0, meaningText: '钙取坚固、基础与成长所需之意，寓意踏实。', soundText: 'Au1 Zeon3 Koi3：开口音明快，名字感一般。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '钡', group: '金', jyutping: 'Bui3', bazi: 24, meaning: 20, sound: 24, brother: 0, meaningText: '钡为金属名，取沉稳、坚实与内敛之意。', soundText: 'Au1 Zeon3 Bui3：短促清楚，读感利落。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '镁', group: '金', jyutping: 'Mei5', bazi: 25, meaning: 21, sound: 24, brother: 0, meaningText: '镁为轻质金属，寓意轻盈、活力与韧性。', soundText: 'Au1 Zeon3 Mei5：圆唇收尾柔和，音色明亮。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '镍', group: '金', jyutping: 'Nip6', bazi: 24, meaning: 20, sound: 23, brother: 0, meaningText: '镍为金属名，取耐久、坚韧与可靠之意。', soundText: 'Au1 Zeon3 Nip6：入声短促，整体清楚。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '镧', group: '金', jyutping: 'Laan4', bazi: 25, meaning: 20, sound: 24, brother: 0, meaningText: '镧为稀土金属，寓意珍稀、深沉与有潜力。', soundText: 'Au1 Zeon3 Laan4：长元音舒展，读感温厚。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '镭', group: '金', jyutping: 'Leoi4', bazi: 25, meaning: 21, sound: 25, brother: 0, meaningText: '镭有光与能量的联想，寓意明亮、坚定。', soundText: 'Au1 Zeon3 Leoi4：圆唇鼻尾柔和，辨识度高。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '镐', group: '金', jyutping: 'Gou1', bazi: 25, meaning: 21, sound: 24, brother: 0, meaningText: '镐为金属器具名，寓意开拓、勤勉与力量。', soundText: 'Au1 Zeon3 Gou1：高平调清楚，叫名利落。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '铧', group: '金', jyutping: 'Waa4', bazi: 26, meaning: 23, sound: 25, brother: 0, meaningText: '铧为农具部件，寓意耕耘、开拓与收获。', soundText: 'Au1 Zeon3 Waa4：长元音舒展，声音温厚。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },

  { char: '冰', group: '水', jyutping: 'Bing1', bazi: 29, meaning: 26, sound: 27, brother: 0, meaningText: '冰有清澈、坚定与纯净之意，气质清爽。', soundText: 'Au1 Zeon3 Bing1：高平调明亮，听感清脆。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '江', group: '水', jyutping: 'Gong1', bazi: 30, meaning: 27, sound: 27, brother: 0, meaningText: '江有宽广、奔流与胸襟之意，大气自然。', soundText: 'Au1 Zeon3 Gong1：开口音饱满，读感开阔。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '河', group: '水', jyutping: 'Ho4', bazi: 29, meaning: 25, sound: 26, brother: 0, meaningText: '河寓意绵延、包容与源远流长，朴实稳重。', soundText: 'Au1 Zeon3 Ho4：长元音舒展，整体顺口。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '海', group: '水', jyutping: 'Hoi2', bazi: 30, meaning: 28, sound: 28, brother: 0, meaningText: '海有广阔、包容与远方之意，气象开朗。', soundText: 'Au1 Zeon3 Hoi2：起伏明快，呼叫感好。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '湖', group: '水', jyutping: 'Wu4', bazi: 28, meaning: 25, sound: 25, brother: 0, meaningText: '湖有宁静、深广与澄明之意，气质沉静。', soundText: 'Au1 Zeon3 Wu4：圆唇舒展，听感温润。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '洲', group: '水', jyutping: 'Zau1', bazi: 28, meaning: 26, sound: 27, brother: 0, meaningText: '洲有安定之地与辽阔视野之意，格局开阔。', soundText: 'Au1 Zeon3 Zau1：高平调清晰，尾音干净。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '浚', group: '水', jyutping: 'Zeon3', bazi: 29, meaning: 26, sound: 25, brother: 0, meaningText: '浚有疏通、深挖与不断进取之意，寓意通达。', soundText: 'Au1 Zeon3 Zeon3：同韵呼应明显，节奏紧凑。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '洁', group: '水', jyutping: 'Git3', bazi: 29, meaning: 27, sound: 25, brother: 0, meaningText: '洁有清白、纯净与自持之意，简洁雅正。', soundText: 'Au1 Zeon3 Git3：短促清晰，叫名利落。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '津', group: '水', jyutping: 'Zeon1', bazi: 28, meaning: 25, sound: 27, brother: 0, meaningText: '津有渡口、滋润与通达之意，寓意有助力。', soundText: 'Au1 Zeon3 Zeon1：高平收尾明亮，易于呼叫。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '洪', group: '水', jyutping: 'Hung4', bazi: 30, meaning: 25, sound: 26, brother: 0, meaningText: '洪有水势浩大、宽厚有力之意，气质大方。', soundText: 'Au1 Zeon3 Hung4：鼻尾饱满，声音稳重。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '涛', group: '水', jyutping: 'Tou4', bazi: 29, meaning: 27, sound: 26, brother: 0, meaningText: '涛有波涛、气势与勇往直前之意，力量感强。', soundText: 'Au1 Zeon3 Tou4：长元音舒展，读感有气势。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '浦', group: '水', jyutping: 'Pou2', bazi: 28, meaning: 24, sound: 25, brother: 0, meaningText: '浦为水边之地，寓意安定、相逢与包容。', soundText: 'Au1 Zeon3 Pou2：圆唇上扬，音色柔和。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '湘', group: '水', jyutping: 'Soeng1', bazi: 29, meaning: 26, sound: 27, brother: 0, meaningText: '湘为水名，带有清雅、悠远与山水意象。', soundText: 'Au1 Zeon3 Soeng1：高平调明亮，整体斯文。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '渤', group: '水', jyutping: 'But6', bazi: 28, meaning: 24, sound: 24, brother: 0, meaningText: '渤有海域辽阔之意，寓意胸怀广大、沉稳有力。', soundText: 'Au1 Zeon3 But6：入声收束，风格厚重。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '潮', group: '水', jyutping: 'Ciu4', bazi: 29, meaning: 26, sound: 27, brother: 0, meaningText: '潮有潮汐、趋势与生生不息之意，现代感鲜明。', soundText: 'Au1 Zeon3 Ciu4：圆唇舒展，叫起来清朗。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '潭', group: '水', jyutping: 'Taam4', bazi: 28, meaning: 25, sound: 25, brother: 0, meaningText: '潭有深沉、澄静与积蓄之意，气质内敛。', soundText: 'Au1 Zeon3 Taam4：鼻尾饱满，读感沉稳。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '澳', group: '水', jyutping: 'Ou3', bazi: 28, meaning: 24, sound: 25, brother: 0, meaningText: '澳有水湾、汇聚与开放之意，寓意包容通达。', soundText: 'Au1 Zeon3 Ou3：与姓氏同音起首，整体圆润。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '滔', group: '水', jyutping: 'Tou1', bazi: 29, meaning: 26, sound: 26, brother: 0, meaningText: '滔有水势盛大、才思充沛之意，气象开阔。', soundText: 'Au1 Zeon3 Tou1：高平调响亮，听感有力量。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '滨', group: '水', jyutping: 'Ban1', bazi: 28, meaning: 25, sound: 26, brother: 0, meaningText: '滨有水边、亲近自然与从容相伴之意。', soundText: 'Au1 Zeon3 Ban1：高平调清楚，节奏轻快。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '澄', group: '水', jyutping: 'Cing4', bazi: 29, meaning: 28, sound: 26, brother: 0, meaningText: '澄有澄明、清澈与沉静之意，气质通透。', soundText: 'Au1 Zeon3 Cing4：尾音柔和，读感雅正。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '澎', group: '水', jyutping: 'Paang4', bazi: 28, meaning: 24, sound: 25, brother: 0, meaningText: '澎有澎湃、充沛与开张之意，个性鲜明。', soundText: 'Au1 Zeon3 Paang4：长元音饱满，气势较强。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '湃', group: '水', jyutping: 'Baai3', bazi: 28, meaning: 24, sound: 25, brother: 0, meaningText: '湃取澎湃之势，寓意热情、活力与行动力。', soundText: 'Au1 Zeon3 Baai3：开口音明快，收尾有力。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '沧', group: '水', jyutping: 'Cong1', bazi: 28, meaning: 24, sound: 25, brother: 0, meaningText: '沧有沧海、深远与历练之意，格局沉着。', soundText: 'Au1 Zeon3 Cong1：高平调清朗，音色稳。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '汐', group: '水', jyutping: 'Zik6', bazi: 28, meaning: 25, sound: 25, brother: 0, meaningText: '汐为晚潮，寓意有节律、温柔与生生不息。', soundText: 'Au1 Zeon3 Zik6：入声短促，辨识度高。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '沁', group: '水', jyutping: 'Sam3', bazi: 29, meaning: 27, sound: 26, brother: 0, meaningText: '沁有渗入、清润与沁人之意，气质清新。', soundText: 'Au1 Zeon3 Sam3：鼻尾清楚，读感温润。', brotherText: '暂未发现与“恺”构成的自然正向词语。' },
  { char: '淼', group: '水', jyutping: 'Miu5', bazi: 29, meaning: 25, sound: 24, brother: 0, meaningText: '淼由三水组成，寓意水势广阔、胸襟深远。', soundText: 'Au1 Zeon3 Miu5：圆唇尾音柔和，字形有特色。', brotherText: '暂未发现与“恺”构成的自然正向词语。' }
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
  siblingItem('康', 'related', 'Hong1', '凯康', '康取凯康，寓意健康、安康，组合偏名字化。', 18, 24, 25, 9),
  siblingItem('文', 'related', 'Man4', '凯文', '文取凯文，属于常见的人名式呼应，寓意文雅有学养。', 18, 24, 27, 9),
  siblingItem('恩', 'related', 'Jan1', '凯恩', '恩取凯恩，属于人名式呼应，寓意感恩、仁厚。', 18, 24, 26, 9),
  siblingItem('伦', 'related', 'Leon4', '凯伦', '伦取凯伦，属于人名式呼应，寓意条理、伦常与端正。', 18, 23, 25, 9),
  siblingItem('利', 'related', 'Lei6', '凯利', '利取凯利，属于人名式呼应，寓意利落、顺遂与有成。', 18, 23, 26, 9),
  siblingItem('迪', 'related', 'Dik6', '凯迪', '迪取凯迪，属于人名式呼应，寓意启迪、进步与明达。', 18, 24, 25, 9),
  siblingItem('达', 'related', 'Daat6', '凯达', '达取凯达，属于人名式呼应，寓意通达、豁达与有成。', 18, 24, 25, 9),
  siblingItem('丰', 'related', 'Fung1', '凯丰', '丰取凯丰，属于人名式呼应，寓意丰足、宽厚与收获。', 18, 24, 26, 9),
  siblingItem('明', 'related', 'Ming4', '凯明', '明取凯明，属于人名式呼应，寓意明朗、明辨与智慧。', 18, 25, 27, 9),
  siblingItem('诚', 'related', 'Sing4', '凯诚', '诚取凯诚，属于人名式呼应，寓意真诚、守信与笃实。', 18, 25, 25, 9)
];

const allCandidates = [...siblingCandidates, ...candidates];
const candidateMap = new Map(allCandidates.map((item) => [item.char, item]));
const groups = ['金', '水', '兄弟呼应'];
const elements = {
  '金': '金 · 优先补益方向',
  '水': '水 · 优先补益方向',
  '兄弟呼应': '与“恺”组成词语或谐音'
};

const nameDisplay = document.querySelector('#name-display');
const reading = document.querySelector('#cantonese-reading');
const totalScore = document.querySelector('#total-score');
const scoreOrb = document.querySelector('.score-orb');
const groupContainer = document.querySelector('#candidate-groups');
const breakdown = document.querySelector('#score-breakdown');
const badge = document.querySelector('#element-badge');
const meaningText = document.querySelector('#meaning-text');
const soundText = document.querySelector('#sound-text');
const brotherText = document.querySelector('#brother-text');
const cantoneseSpeak = document.querySelector('#cantonese-speak');
const speechStatus = document.querySelector('#speech-status');
const voteAddCurrent = document.querySelector('#vote-add-current');
const voteProgress = document.querySelector('#vote-progress');
const voteSelection = document.querySelector('#vote-selection');
const voteSubmit = document.querySelector('#vote-submit');
const voteClear = document.querySelector('#vote-clear');
const voteStatus = document.querySelector('#vote-status');
const voteConfig = window.NAME_VOTE_CONFIG || { supabaseUrl: '', supabaseAnonKey: '', table: 'name_votes', storageKey: 'ou-jin-name-vote-v1' };
let selectedCharacter = '旋';
let voteChoices = [];

const relationshipMap = new Map(siblingCandidates.filter((item) => item.brother > 0).map((item) => [item.char, item]));

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
  const item = candidateMap.get(character);
  if (!item) return;

  selectedCharacter = character;
  nameDisplay.textContent = `区晋${character}`;
  document.querySelectorAll('.candidate').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.char === character));
  });

  const meaningScore = Math.min(item.meaning, 25);
  const brotherScore = Math.min(15, Math.round(item.brother * 1.5));
  const total = item.bazi + meaningScore + item.sound + brotherScore;
  totalScore.textContent = total;
  scoreOrb.setAttribute('aria-label', `总分 ${total} 分`);
  reading.textContent = `粤语：Au1 Zeon3 ${item.jyutping}`;
  badge.textContent = item.group;
  breakdown.innerHTML = [
    scoreRow('八字结合度', item.bazi, 30),
    scoreRow('寓意与气质', meaningScore, 25),
    scoreRow('粤语听感', item.sound, 30),
    scoreRow('与“恺”呼应', brotherScore, 15)
  ].join('');
  meaningText.textContent = item.meaningText;
  soundText.textContent = item.soundText;
  brotherText.textContent = item.brotherText;
  renderVoteSelection();
}

function hasSubmittedVote() {
  try {
    return window.localStorage.getItem(voteConfig.storageKey) === 'submitted';
  } catch {
    return false;
  }
}

function setVoteStatus(message, state = '') {
  voteStatus.textContent = message;
  voteStatus.classList.remove('is-error', 'is-success');
  if (state) voteStatus.classList.add(state);
}

function renderVoteSelection() {
  const submitted = hasSubmittedVote();
  const currentIsSelected = voteChoices.includes(selectedCharacter);
  voteProgress.textContent = `已选 ${voteChoices.length}/3`;
  document.querySelectorAll('.candidate').forEach((button) => {
    button.classList.toggle('vote-selected', voteChoices.includes(button.dataset.char));
  });
  voteSelection.innerHTML = voteChoices.length
    ? voteChoices.map((character) => `<span class="vote-chip">区晋${character}<button type="button" data-remove-vote="${character}" aria-label="移除区晋${character}"${submitted ? ' disabled' : ''}>×</button></span>`).join('')
    : '<span class="vote-empty">还没有选择。请先点击字库中的名字查看评分。</span>';
  voteAddCurrent.textContent = currentIsSelected ? `移除区晋${selectedCharacter}` : `加入区晋${selectedCharacter}`;
  voteAddCurrent.disabled = submitted || (!currentIsSelected && voteChoices.length >= 3);
  voteSubmit.disabled = submitted || voteChoices.length !== 3;
  voteClear.disabled = submitted || voteChoices.length === 0;
  if (submitted) {
    setVoteStatus('这台设备已经提交过投票，感谢参与。', 'is-success');
  }
}

function toggleVoteChoice() {
  if (hasSubmittedVote()) return;
  const index = voteChoices.indexOf(selectedCharacter);
  if (index >= 0) {
    voteChoices.splice(index, 1);
    setVoteStatus('已移除当前名字，请继续选择。');
  } else if (voteChoices.length >= 3) {
    setVoteStatus('最多只能选择 3 个名字。', 'is-error');
    return;
  } else {
    voteChoices.push(selectedCharacter);
    setVoteStatus(`已加入区晋${selectedCharacter}，还可以选择 ${3 - voteChoices.length} 个。`);
  }
  renderVoteSelection();
}

function removeVoteChoice(character) {
  if (hasSubmittedVote()) return;
  voteChoices = voteChoices.filter((item) => item !== character);
  setVoteStatus(`已移除区晋${character}。`);
  renderVoteSelection();
}

function clearVoteChoices() {
  if (hasSubmittedVote()) return;
  voteChoices = [];
  setVoteStatus('已清空选择，请重新挑选 3 个名字。');
  renderVoteSelection();
}

function createVoteId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `vote-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

async function submitVote() {
  if (hasSubmittedVote()) return;
  if (voteChoices.length !== 3) {
    setVoteStatus('请先选择 3 个不同的名字。', 'is-error');
    return;
  }
  if (!voteConfig.supabaseUrl || !voteConfig.supabaseAnonKey) {
    setVoteStatus('投票数据服务尚未配置，请联系发起人完成设置。', 'is-error');
    return;
  }

  voteSubmit.disabled = true;
  setVoteStatus('正在提交匿名投票……');
  const payload = {
    kind: 'ou-jin-name-vote',
    voteId: createVoteId(),
    selections: [...voteChoices],
    submittedAt: new Date().toISOString()
  };
  try {
    const endpoint = `${voteConfig.supabaseUrl.replace(/\/$/, '')}/rest/v1/${voteConfig.table || 'name_votes'}`;
    const response = await fetch(endpoint, {
      method: 'POST',
      cache: 'no-store',
      headers: {
        apikey: voteConfig.supabaseAnonKey,
        Authorization: `Bearer ${voteConfig.supabaseAnonKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal'
      },
      body: JSON.stringify({
        vote_id: payload.voteId,
        selection_1: payload.selections[0],
        selection_2: payload.selections[1],
        selection_3: payload.selections[2]
      })
    });
    if (!response.ok) throw new Error(`vote request failed: ${response.status}`);
    window.localStorage.setItem(voteConfig.storageKey, 'submitted');
    setVoteStatus('投票已提交，感谢你的选择！', 'is-success');
    renderVoteSelection();
  } catch {
    voteSubmit.disabled = false;
    setVoteStatus('提交失败，请检查网络后重试。', 'is-error');
  }
}

function speakCantonese() {
  if (!('speechSynthesis' in window)) {
    speechStatus.textContent = '当前浏览器不支持语音朗读。';
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(`欧晋${selectedCharacter}`);
  utterance.lang = 'zh-HK';
  const voices = window.speechSynthesis.getVoices();
  const aliases = ['zh-hk', 'yue-hk', 'yue'];
  const preferred = voices.find((voice) => {
    const voiceLanguage = voice.lang.toLowerCase();
    const voiceName = voice.name.toLowerCase();
    const exactLanguage = aliases.some((alias) => voiceLanguage === alias || voiceLanguage.startsWith(`${alias}-`));
    const explicitlyMandarin = /普通话|普通話|mandarin|mainland|simplified|中国大陆/.test(voiceName);
    return exactLanguage && !explicitlyMandarin;
  });
  if (!preferred) {
    speechStatus.textContent = '未检测到粤语语音，请在设备系统中安装粤语语音包。';
    return;
  }
  utterance.voice = preferred;
  speechStatus.textContent = `粤语：${preferred.name}（${preferred.lang}）`;
  window.speechSynthesis.speak(utterance);
}

buildCandidates();
groupContainer.addEventListener('click', (event) => {
  const button = event.target.closest('.candidate');
  if (button) setSelection(button.dataset.char);
});

cantoneseSpeak.addEventListener('click', speakCantonese);
voteAddCurrent.addEventListener('click', toggleVoteChoice);
voteSubmit.addEventListener('click', submitVote);
voteClear.addEventListener('click', clearVoteChoices);
voteSelection.addEventListener('click', (event) => {
  const button = event.target.closest('[data-remove-vote]');
  if (button) removeVoteChoice(button.dataset.removeVote);
});

setSelection('旋');
