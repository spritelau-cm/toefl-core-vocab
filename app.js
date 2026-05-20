const words = [
  { word: "abandon", phonetic: "/əˈbændən/", pos: "v.", cn: "放弃；遗弃", en: "to leave something behind or stop doing it", example: "The settlers had to abandon the site after the flood.", tag: "行为" },
  { word: "abstract", phonetic: "/ˈæbstrækt/", pos: "adj.", cn: "抽象的；理论上的", en: "based on ideas rather than physical things", example: "The lecture moved from concrete examples to abstract principles.", tag: "学术" },
  { word: "abundant", phonetic: "/əˈbʌndənt/", pos: "adj.", cn: "丰富的；充足的", en: "existing in large quantities", example: "The region has abundant rainfall during spring.", tag: "自然" },
  { word: "accommodate", phonetic: "/əˈkɑːmədeɪt/", pos: "v.", cn: "容纳；适应；提供住宿", en: "to provide space or adjust to a need", example: "The model was revised to accommodate new evidence.", tag: "行为" },
  { word: "accumulate", phonetic: "/əˈkjuːmjəleɪt/", pos: "v.", cn: "积累；聚集", en: "to gather or increase over time", example: "Sediment can accumulate at the bottom of a lake.", tag: "科学" },
  { word: "accurate", phonetic: "/ˈækjərət/", pos: "adj.", cn: "准确的；精确的", en: "correct and free from error", example: "Accurate measurements are essential in laboratory work.", tag: "学术" },
  { word: "adapt", phonetic: "/əˈdæpt/", pos: "v.", cn: "适应；改编", en: "to change in order to fit new conditions", example: "Plants adapt to dry climates in different ways.", tag: "生物" },
  { word: "adequate", phonetic: "/ˈædɪkwət/", pos: "adj.", cn: "足够的；合格的", en: "good enough for a particular purpose", example: "The shelter offers adequate protection from strong winds.", tag: "评价" },
  { word: "adjacent", phonetic: "/əˈdʒeɪsənt/", pos: "adj.", cn: "邻近的；毗连的", en: "next to or very near something", example: "The museum is adjacent to the university library.", tag: "空间" },
  { word: "advocate", phonetic: "/ˈædvəkeɪt/", pos: "v./n.", cn: "主张；拥护者", en: "to publicly support an idea or person", example: "Many researchers advocate a broader definition of intelligence.", tag: "观点" },
  { word: "aesthetic", phonetic: "/esˈθetɪk/", pos: "adj.", cn: "审美的；美学的", en: "related to beauty or artistic taste", example: "The building has both practical and aesthetic value.", tag: "艺术" },
  { word: "aggregate", phonetic: "/ˈæɡrɪɡət/", pos: "n./v.", cn: "总计；集合体；聚集", en: "a whole formed by many parts", example: "The report presents aggregate data from several surveys.", tag: "数据" },
  { word: "alter", phonetic: "/ˈɔːltər/", pos: "v.", cn: "改变；修改", en: "to make something different", example: "A small change in temperature can alter the reaction rate.", tag: "变化" },
  { word: "ambiguous", phonetic: "/æmˈbɪɡjuəs/", pos: "adj.", cn: "模糊的；有歧义的", en: "having more than one possible meaning", example: "The evidence remains ambiguous and requires further study.", tag: "学术" },
  { word: "analyze", phonetic: "/ˈænəlaɪz/", pos: "v.", cn: "分析；解析", en: "to examine something carefully", example: "Scientists analyze ice cores to study past climates.", tag: "学术" },
  { word: "anticipate", phonetic: "/ænˈtɪsɪpeɪt/", pos: "v.", cn: "预期；预料", en: "to expect something to happen", example: "Urban planners must anticipate future population growth.", tag: "时间" },
  { word: "arbitrary", phonetic: "/ˈɑːrbətreri/", pos: "adj.", cn: "任意的；武断的", en: "based on personal choice rather than reason", example: "The categories are not arbitrary but reflect clear patterns.", tag: "逻辑" },
  { word: "assert", phonetic: "/əˈsɜːrt/", pos: "v.", cn: "断言；坚称", en: "to state confidently", example: "The author asserts that trade shaped the city's culture.", tag: "观点" },
  { word: "assess", phonetic: "/əˈses/", pos: "v.", cn: "评估；评价", en: "to judge the value or quality of something", example: "The study assesses the long-term effects of pollution.", tag: "评价" },
  { word: "attribute", phonetic: "/əˈtrɪbjuːt/", pos: "v./n.", cn: "归因于；属性", en: "to regard something as caused by someone or something", example: "Researchers attribute the decline to habitat loss.", tag: "逻辑" },
  { word: "coherent", phonetic: "/koʊˈhɪrənt/", pos: "adj.", cn: "连贯的；一致的", en: "logical and well organized", example: "A coherent theory explains several observations at once.", tag: "学术" },
  { word: "coincide", phonetic: "/ˌkoʊɪnˈsaɪd/", pos: "v.", cn: "同时发生；相符", en: "to happen at the same time or match", example: "The migration season coincides with changes in food supply.", tag: "时间" },
  { word: "compile", phonetic: "/kəmˈpaɪl/", pos: "v.", cn: "汇编；收集", en: "to collect information from different sources", example: "The team compiled a database of fossil records.", tag: "数据" },
  { word: "complement", phonetic: "/ˈkɑːmplɪment/", pos: "v./n.", cn: "补充；补足物", en: "to add to something in a useful way", example: "Field observations complement laboratory experiments.", tag: "逻辑" },
  { word: "component", phonetic: "/kəmˈpoʊnənt/", pos: "n.", cn: "组成部分；部件", en: "one part of a larger whole", example: "Water is a major component of living cells.", tag: "科学" },
  { word: "comprehensive", phonetic: "/ˌkɑːmprɪˈhensɪv/", pos: "adj.", cn: "全面的；综合的", en: "including nearly everything", example: "The book offers a comprehensive history of jazz.", tag: "学术" },
  { word: "concentration", phonetic: "/ˌkɑːnsənˈtreɪʃn/", pos: "n.", cn: "浓度；集中", en: "the amount of a substance in a volume", example: "High carbon dioxide concentration affects ocean chemistry.", tag: "科学" },
  { word: "contemporary", phonetic: "/kənˈtempəreri/", pos: "adj.", cn: "当代的；同时期的", en: "belonging to the present time or same period", example: "Contemporary artists often combine digital and traditional media.", tag: "艺术" },
  { word: "contradict", phonetic: "/ˌkɑːntrəˈdɪkt/", pos: "v.", cn: "反驳；与...矛盾", en: "to say the opposite of something", example: "The new data contradict the earlier explanation.", tag: "逻辑" },
  { word: "controversy", phonetic: "/ˈkɑːntrəvɜːrsi/", pos: "n.", cn: "争议；争论", en: "public disagreement about an issue", example: "The discovery caused controversy among archaeologists.", tag: "观点" },
  { word: "conventional", phonetic: "/kənˈvenʃənl/", pos: "adj.", cn: "传统的；常规的", en: "usual or accepted by most people", example: "The invention challenged conventional ideas about flight.", tag: "社会" },
  { word: "convert", phonetic: "/kənˈvɜːrt/", pos: "v.", cn: "转换；转变", en: "to change from one form to another", example: "Solar cells convert sunlight into electricity.", tag: "科学" },
  { word: "crucial", phonetic: "/ˈkruːʃl/", pos: "adj.", cn: "关键的；至关重要的", en: "extremely important", example: "Timing is crucial for successful seed germination.", tag: "评价" },
  { word: "cultivate", phonetic: "/ˈkʌltɪveɪt/", pos: "v.", cn: "培养；耕种", en: "to grow crops or develop a quality", example: "Ancient communities cultivated corn for food.", tag: "生物" },
  { word: "decline", phonetic: "/dɪˈklaɪn/", pos: "v./n.", cn: "下降；衰退；拒绝", en: "to decrease or become weaker", example: "The population began to decline after the forest was cleared.", tag: "变化" },
  { word: "derive", phonetic: "/dɪˈraɪv/", pos: "v.", cn: "获得；源自", en: "to get something from a source", example: "The word derives from an ancient Greek term.", tag: "逻辑" },
  { word: "diminish", phonetic: "/dɪˈmɪnɪʃ/", pos: "v.", cn: "减少；削弱", en: "to become or make smaller", example: "The protective effect may diminish over time.", tag: "变化" },
  { word: "distinct", phonetic: "/dɪˈstɪŋkt/", pos: "adj.", cn: "明显不同的；清楚的", en: "clearly different or separate", example: "The two species have distinct feeding habits.", tag: "评价" },
  { word: "diverse", phonetic: "/daɪˈvɜːrs/", pos: "adj.", cn: "多样的；不同的", en: "including many different types", example: "Coral reefs support diverse forms of life.", tag: "自然" },
  { word: "dominant", phonetic: "/ˈdɑːmɪnənt/", pos: "adj.", cn: "占主导的；显性的", en: "more powerful or noticeable than others", example: "Grass became the dominant vegetation in the region.", tag: "自然" },
  { word: "elaborate", phonetic: "/ɪˈlæbərət/", pos: "adj./v.", cn: "复杂精细的；详述", en: "detailed and carefully developed", example: "The temple contains elaborate carvings.", tag: "艺术" },
  { word: "empirical", phonetic: "/ɪmˈpɪrɪkl/", pos: "adj.", cn: "实证的；基于观察的", en: "based on observation or experiment", example: "The claim needs empirical support.", tag: "学术" },
  { word: "enhance", phonetic: "/ɪnˈhæns/", pos: "v.", cn: "提高；增强", en: "to improve the quality or value of something", example: "Regular feedback can enhance student performance.", tag: "变化" },
  { word: "establish", phonetic: "/ɪˈstæblɪʃ/", pos: "v.", cn: "建立；确立", en: "to set up or prove something", example: "The experiment established a link between diet and growth.", tag: "学术" },
  { word: "estimate", phonetic: "/ˈestɪmət/", pos: "v./n.", cn: "估计；估算", en: "to make an approximate judgment", example: "Researchers estimate the age of the fossil at 2 million years.", tag: "数据" },
  { word: "evident", phonetic: "/ˈevɪdənt/", pos: "adj.", cn: "明显的；显然的", en: "easy to see or understand", example: "The influence of trade is evident in the pottery style.", tag: "评价" },
  { word: "expand", phonetic: "/ɪkˈspænd/", pos: "v.", cn: "扩大；扩张", en: "to become larger or more extensive", example: "The city expanded rapidly after the railway was built.", tag: "变化" },
  { word: "exploit", phonetic: "/ɪkˈsplɔɪt/", pos: "v.", cn: "利用；开发；剥削", en: "to use something for advantage", example: "Early humans learned to exploit local resources.", tag: "行为" },
  { word: "facilitate", phonetic: "/fəˈsɪlɪteɪt/", pos: "v.", cn: "促进；使便利", en: "to make an action or process easier", example: "Roads facilitated trade between distant towns.", tag: "社会" },
  { word: "fluctuate", phonetic: "/ˈflʌktʃueɪt/", pos: "v.", cn: "波动；起伏", en: "to rise and fall irregularly", example: "Temperatures fluctuate widely in desert environments.", tag: "变化" },
  { word: "fundamental", phonetic: "/ˌfʌndəˈmentl/", pos: "adj.", cn: "根本的；基础的", en: "forming a necessary base", example: "Energy flow is a fundamental concept in ecology.", tag: "学术" },
  { word: "hypothesis", phonetic: "/haɪˈpɑːθəsɪs/", pos: "n.", cn: "假说；假设", en: "an idea that can be tested", example: "The hypothesis explains why the stars appear to move.", tag: "学术" },
  { word: "impact", phonetic: "/ˈɪmpækt/", pos: "n./v.", cn: "影响；冲击", en: "a strong effect on something", example: "Agriculture had a major impact on human settlement.", tag: "社会" },
  { word: "implement", phonetic: "/ˈɪmplɪment/", pos: "v.", cn: "实施；执行", en: "to put a plan into action", example: "The school implemented a new reading program.", tag: "行为" },
  { word: "imply", phonetic: "/ɪmˈplaɪ/", pos: "v.", cn: "暗示；意味着", en: "to suggest without saying directly", example: "The results imply that water once existed there.", tag: "逻辑" },
  { word: "incentive", phonetic: "/ɪnˈsentɪv/", pos: "n.", cn: "激励；诱因", en: "something that encourages action", example: "Tax benefits provided an incentive for investment.", tag: "社会" },
  { word: "inevitable", phonetic: "/ɪnˈevɪtəbl/", pos: "adj.", cn: "不可避免的", en: "certain to happen", example: "Some soil erosion is inevitable after heavy rain.", tag: "逻辑" },
  { word: "inhibit", phonetic: "/ɪnˈhɪbɪt/", pos: "v.", cn: "抑制；阻碍", en: "to slow down or prevent a process", example: "Low temperatures inhibit the growth of bacteria.", tag: "科学" },
  { word: "infer", phonetic: "/ɪnˈfɜːr/", pos: "v.", cn: "推断；推论", en: "to reach a conclusion from evidence", example: "Readers can infer the climate from details in the passage.", tag: "逻辑" },
  { word: "instance", phonetic: "/ˈɪnstəns/", pos: "n.", cn: "例子；情况", en: "an example or case", example: "This painting is an instance of early realism.", tag: "学术" },
  { word: "integrate", phonetic: "/ˈɪntɪɡreɪt/", pos: "v.", cn: "整合；融入", en: "to combine parts into a whole", example: "The program integrates reading, speaking, and writing.", tag: "行为" },
  { word: "interpret", phonetic: "/ɪnˈtɜːrprət/", pos: "v.", cn: "解释；口译", en: "to explain the meaning of something", example: "Historians interpret documents in their cultural context.", tag: "学术" },
  { word: "intrinsic", phonetic: "/ɪnˈtrɪnzɪk/", pos: "adj.", cn: "内在的；固有的", en: "belonging naturally to something", example: "The material has intrinsic strength.", tag: "评价" },
  { word: "isolate", phonetic: "/ˈaɪsəleɪt/", pos: "v.", cn: "隔离；使孤立", en: "to separate from others", example: "Scientists isolated the chemical responsible for the smell.", tag: "科学" },
  { word: "maintain", phonetic: "/meɪnˈteɪn/", pos: "v.", cn: "维持；主张", en: "to keep something in a particular state", example: "The body maintains a stable internal temperature.", tag: "生物" },
  { word: "manipulate", phonetic: "/məˈnɪpjuleɪt/", pos: "v.", cn: "操纵；处理", en: "to control or handle skillfully", example: "The experiment manipulated light levels.", tag: "行为" },
  { word: "method", phonetic: "/ˈmeθəd/", pos: "n.", cn: "方法；方式", en: "a way of doing something", example: "The method is useful for comparing ancient climates.", tag: "学术" },
  { word: "occur", phonetic: "/əˈkɜːr/", pos: "v.", cn: "发生；出现", en: "to happen or exist", example: "Earthquakes occur frequently along fault lines.", tag: "自然" },
  { word: "offset", phonetic: "/ˈɔːfset/", pos: "v.", cn: "抵消；补偿", en: "to balance the effect of something", example: "Higher productivity offset the cost of new equipment.", tag: "逻辑" },
  { word: "perceive", phonetic: "/pərˈsiːv/", pos: "v.", cn: "感知；理解", en: "to notice or understand something", example: "People perceive color differently in low light.", tag: "心理" },
  { word: "persist", phonetic: "/pərˈsɪst/", pos: "v.", cn: "持续；坚持", en: "to continue to exist or keep doing something", example: "The drought persisted for several years.", tag: "时间" },
  { word: "perspective", phonetic: "/pərˈspektɪv/", pos: "n.", cn: "观点；视角", en: "a way of thinking about something", example: "The article offers a new perspective on urban growth.", tag: "观点" },
  { word: "phenomenon", phonetic: "/fəˈnɑːmɪnən/", pos: "n.", cn: "现象", en: "a fact or event that can be observed", example: "Volcanic lightning is a rare phenomenon.", tag: "自然" },
  { word: "plausible", phonetic: "/ˈplɔːzəbl/", pos: "adj.", cn: "似乎合理的；可信的", en: "reasonable and likely to be true", example: "The explanation is plausible but not proven.", tag: "逻辑" },
  { word: "precede", phonetic: "/prɪˈsiːd/", pos: "v.", cn: "先于；在...之前", en: "to happen before something", example: "A sharp drop in pressure often precedes a storm.", tag: "时间" },
  { word: "principle", phonetic: "/ˈprɪnsəpl/", pos: "n.", cn: "原则；原理", en: "a basic rule or belief", example: "The same principle applies to many ecosystems.", tag: "学术" },
  { word: "prohibit", phonetic: "/proʊˈhɪbɪt/", pos: "v.", cn: "禁止；阻止", en: "to officially forbid something", example: "The law prohibits hunting in protected areas.", tag: "社会" },
  { word: "promote", phonetic: "/prəˈmoʊt/", pos: "v.", cn: "促进；提升", en: "to encourage or support growth", example: "Wet conditions promote the spread of fungi.", tag: "变化" },
  { word: "proportion", phonetic: "/prəˈpɔːrʃn/", pos: "n.", cn: "比例；部分", en: "a part or share of a whole", example: "A large proportion of the population lived near rivers.", tag: "数据" },
  { word: "pursue", phonetic: "/pərˈsuː/", pos: "v.", cn: "追求；从事", en: "to try to achieve or continue an activity", example: "She decided to pursue research in marine biology.", tag: "行为" },
  { word: "random", phonetic: "/ˈrændəm/", pos: "adj.", cn: "随机的；任意的", en: "happening without a clear pattern", example: "The samples were selected in random order.", tag: "数据" },
  { word: "reinforce", phonetic: "/ˌriːɪnˈfɔːrs/", pos: "v.", cn: "加强；强化", en: "to make something stronger", example: "Examples reinforce the main argument.", tag: "变化" },
  { word: "release", phonetic: "/rɪˈliːs/", pos: "v./n.", cn: "释放；发布", en: "to let something out or make it available", example: "The plant releases seeds in late summer.", tag: "自然" },
  { word: "reluctant", phonetic: "/rɪˈlʌktənt/", pos: "adj.", cn: "不情愿的；勉强的", en: "unwilling to do something", example: "Officials were reluctant to change the policy.", tag: "心理" },
  { word: "rely", phonetic: "/rɪˈlaɪ/", pos: "v.", cn: "依赖；依靠", en: "to depend on someone or something", example: "Many animals rely on seasonal food sources.", tag: "行为" },
  { word: "resolve", phonetic: "/rɪˈzɑːlv/", pos: "v.", cn: "解决；决定", en: "to solve a problem or make a firm decision", example: "Additional evidence helped resolve the debate.", tag: "观点" },
  { word: "retain", phonetic: "/rɪˈteɪn/", pos: "v.", cn: "保留；保持", en: "to keep something", example: "The soil retains moisture after rainfall.", tag: "自然" },
  { word: "sequence", phonetic: "/ˈsiːkwəns/", pos: "n.", cn: "顺序；序列", en: "a set of things in a particular order", example: "The sequence of layers shows changes in the environment.", tag: "时间" },
  { word: "significant", phonetic: "/sɪɡˈnɪfɪkənt/", pos: "adj.", cn: "重要的；显著的", en: "important or large enough to be noticed", example: "The invention caused a significant shift in production.", tag: "评价" },
  { word: "simulate", phonetic: "/ˈsɪmjuleɪt/", pos: "v.", cn: "模拟；仿真", en: "to imitate conditions or processes", example: "The software simulates the movement of ocean currents.", tag: "科学" },
  { word: "source", phonetic: "/sɔːrs/", pos: "n.", cn: "来源；出处", en: "the origin of something", example: "Rivers were a reliable source of fresh water.", tag: "逻辑" },
  { word: "specify", phonetic: "/ˈspesɪfaɪ/", pos: "v.", cn: "明确说明；指定", en: "to state something clearly and exactly", example: "The assignment specifies three required readings.", tag: "学术" },
  { word: "stable", phonetic: "/ˈsteɪbl/", pos: "adj.", cn: "稳定的；牢固的", en: "not likely to change suddenly", example: "A stable climate allowed agriculture to spread.", tag: "自然" },
  { word: "strategy", phonetic: "/ˈstrætədʒi/", pos: "n.", cn: "策略；战略", en: "a plan for achieving a goal", example: "The species uses a survival strategy based on camouflage.", tag: "行为" },
  { word: "subsequent", phonetic: "/ˈsʌbsɪkwənt/", pos: "adj.", cn: "随后的；后来的", en: "happening after something else", example: "Subsequent studies confirmed the pattern.", tag: "时间" },
  { word: "sufficient", phonetic: "/səˈfɪʃnt/", pos: "adj.", cn: "足够的；充分的", en: "as much as needed", example: "The evidence is sufficient to support the conclusion.", tag: "评价" },
  { word: "sustain", phonetic: "/səˈsteɪn/", pos: "v.", cn: "维持；支撑", en: "to keep something going over time", example: "The ecosystem can sustain a wide variety of species.", tag: "自然" },
  { word: "transform", phonetic: "/trænsˈfɔːrm/", pos: "v.", cn: "转变；改造", en: "to change completely", example: "The printing press transformed European society.", tag: "变化" },
  { word: "valid", phonetic: "/ˈvælɪd/", pos: "adj.", cn: "有效的；合理的", en: "logical, acceptable, or legally effective", example: "A valid conclusion must follow from the evidence.", tag: "逻辑" },
  { word: "vary", phonetic: "/ˈveri/", pos: "v.", cn: "变化；不同", en: "to be different or change", example: "Rainfall patterns vary from region to region.", tag: "变化" }
];

const wordFamilies = [
  { label: "ab-/abs- 分离", words: ["abandon", "abstract"] },
  { label: "ad-/ac- 靠近", words: ["adapt", "adequate", "adjacent", "advocate", "accommodate", "accumulate", "accurate"] },
  { label: "aesth/art 艺术", words: ["aesthetic", "elaborate", "contemporary", "conventional"] },
  { label: "alter/var/vers 变化", words: ["alter", "convert", "diverse", "expand", "enhance", "transform", "vary"] },
  { label: "anal/empir 证据", words: ["analyze", "empirical", "evident", "hypothesis", "interpret", "method", "principle", "fundamental", "establish"] },
  { label: "estim/assess 衡量", words: ["assess", "estimate", "significant", "crucial", "random"] },
  { label: "logic 推理", words: ["arbitrary", "attribute", "coherent", "contradict", "derive", "imply", "infer", "inevitable", "offset", "plausible", "valid", "source"] },
  { label: "spec/sign 辨明", words: ["ambiguous", "distinct", "specify", "intrinsic", "instance"] },
  { label: "part/struct 组成", words: ["aggregate", "compile", "component", "complement", "comprehensive", "concentration", "integrate", "proportion", "sequence"] },
  { label: "fac/hibit 推动", words: ["facilitate", "inhibit", "prohibit", "promote", "reinforce"] },
  { label: "ten/tain 保持", words: ["maintain", "retain", "sustain", "stable", "sufficient"] },
  { label: "tempo 顺序", words: ["anticipate", "coincide", "occur", "persist", "precede", "subsequent"] },
  { label: "act/manage 行动", words: ["implement", "manipulate", "exploit", "pursue", "rely", "resolve", "cultivate"] },
  { label: "bio/nature 自然", words: ["abundant", "decline", "diminish", "dominant", "fluctuate", "phenomenon", "release", "isolate", "simulate"] },
  { label: "soc/pers 观点", words: ["assert", "controversy", "impact", "incentive", "perceive", "perspective", "reluctant", "strategy"] }
];

const familyByWord = new Map();
const familyOrderByWord = new Map();
wordFamilies.forEach((family, familyIndex) => {
  family.words.forEach((word, wordIndex) => {
    familyByWord.set(word, family.label);
    familyOrderByWord.set(word, familyIndex * 100 + wordIndex);
  });
});

const studyWords = [...words].sort((a, b) => {
  const rankA = familyOrderByWord.get(a.word) ?? 9999;
  const rankB = familyOrderByWord.get(b.word) ?? 9999;
  return rankA - rankB || a.word.localeCompare(b.word);
});

const storageKey = "toefl-core-progress-v1";
const $ = (id) => document.getElementById(id);

const state = {
  view: "cards",
  index: 0,
  revealed: false,
  query: "",
  tag: "全部",
  selectedWord: null,
  quiz: null,
  progress: loadProgress()
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(state.progress));
}

function todayStamp() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date.getTime();
}

function entry(word) {
  if (!state.progress[word]) {
    state.progress[word] = { box: 0, correct: 0, wrong: 0, favorite: false, due: todayStamp(), studyCount: 0, mastered: false };
  }
  const record = state.progress[word];
  record.box = Number.isFinite(record.box) ? record.box : 0;
  record.correct = Number.isFinite(record.correct) ? record.correct : 0;
  record.wrong = Number.isFinite(record.wrong) ? record.wrong : 0;
  record.studyCount = Number.isFinite(record.studyCount) ? record.studyCount : 0;
  record.favorite = Boolean(record.favorite);
  record.mastered = Boolean(record.mastered || record.box >= 4);
  record.due = Number.isFinite(record.due) ? record.due : todayStamp();
  return state.progress[word];
}

function wordFamily(item) {
  return familyByWord.get(item.word) || `${item.tag}主题`;
}

function filteredWords() {
  const query = state.query.trim().toLowerCase();
  return studyWords.filter((item) => {
    const tagMatch = state.tag === "全部" || item.tag === state.tag;
    const text = `${item.word} ${item.cn} ${item.en} ${item.tag} ${wordFamily(item)}`.toLowerCase();
    return tagMatch && (!query || text.includes(query));
  });
}

function rollingWords() {
  const list = filteredWords();
  const active = list.filter((item) => !entry(item.word).mastered);
  return active.length ? active : list;
}

function currentWord() {
  if (state.selectedWord) {
    return studyWords.find((item) => item.word === state.selectedWord) || null;
  }
  const list = rollingWords();
  if (!list.length) return null;
  state.index = (state.index + list.length) % list.length;
  return list[state.index];
}

function renderTags() {
  const tags = ["全部", ...new Set(studyWords.map((item) => item.tag))].sort((a, b) => (a === "全部" ? -1 : b === "全部" ? 1 : a.localeCompare(b, "zh-CN")));
  $("tagFilter").innerHTML = tags.map((tag) => `<option value="${tag}">${tag}</option>`).join("");
}

function renderStats() {
  const values = studyWords.map((item) => entry(item.word));
  const known = studyWords.filter((item) => entry(item.word).mastered).length;
  const rolling = studyWords.length - known;
  const correct = values.reduce((sum, item) => sum + item.correct, 0);
  const wrong = values.reduce((sum, item) => sum + item.wrong, 0);
  const accuracy = correct + wrong ? Math.round((correct / (correct + wrong)) * 100) : 0;
  const percent = Math.round((known / studyWords.length) * 100);

  $("knownCount").textContent = known;
  $("dueCount").textContent = rolling;
  $("accuracy").textContent = `${accuracy}%`;
  $("progressPercent").textContent = `${percent}%`;
  $("progressRing").style.setProperty("--progress", `${percent}%`);
  $("queueText").textContent = `${rolling} 个词滚动学习，${known} 个词已学会`;
}

function renderCard() {
  const item = currentWord();
  const list = rollingWords();
  if (!item) {
    $("wordText").textContent = "No match";
    $("phoneticText").textContent = "";
    $("posText").textContent = "";
    $("definitionText").textContent = "没有匹配的词";
    $("exampleText").textContent = "";
    $("wordTag").textContent = "空";
    $("wordFamily").textContent = "无匹配";
    $("studyCountText").textContent = "已学 0 次";
    $("wordPosition").textContent = "0 / 0";
    return;
  }

  const record = entry(item.word);
  const positionIndex = state.selectedWord ? list.findIndex((word) => word.word === item.word) : state.index;
  $("wordText").textContent = item.word;
  $("phoneticText").textContent = item.phonetic;
  $("posText").textContent = item.pos;
  $("definitionText").textContent = item.cn;
  $("exampleText").textContent = item.example;
  $("wordTag").textContent = item.tag;
  $("wordFamily").textContent = wordFamily(item);
  $("studyCountText").textContent = `已学 ${record.studyCount} 次`;
  $("wordPosition").textContent = positionIndex >= 0 ? `${positionIndex + 1} / ${list.length}` : "已学会";

  $("definitionText").classList.toggle("hidden", !state.revealed);
  $("exampleText").classList.toggle("hidden", !state.revealed);
  $("favoriteBtn").classList.toggle("active", record.favorite);
  $("favoriteBtn").textContent = record.favorite ? "已收藏" : "收藏";

  renderStats();
  renderLists();
}

function moveCard(step) {
  state.selectedWord = null;
  const list = rollingWords();
  if (!list.length) return;
  state.index = (state.index + step + list.length) % list.length;
  state.revealed = false;
  renderCard();
}

function gradeCurrent(correct) {
  const item = currentWord();
  if (!item) return;
  const record = entry(item.word);
  recordStudy(item.word);
  if (correct) {
    record.correct += 1;
    markMastered(record);
  } else {
    record.wrong += 1;
    record.box = Math.max(0, record.box - 1);
    record.mastered = false;
    record.due = todayStamp();
  }
  saveProgress();
  moveCard(1);
}

function recordStudy(word) {
  const record = entry(word);
  record.studyCount += 1;
  record.lastStudied = Date.now();
  saveProgress();
}

function markMastered(record) {
  record.mastered = true;
  record.box = 5;
  record.due = todayStamp() + 365 * 86400000;
}

function speakCurrent() {
  const item = currentWord();
  if (!item || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(item.word);
  utterance.lang = "en-US";
  utterance.rate = 0.86;
  window.speechSynthesis.speak(utterance);
}

function makeQuiz() {
  const pool = filteredWords();
  const activePool = pool.filter((item) => !entry(item.word).mastered);
  const list = activePool.length ? activePool : pool.length ? pool : studyWords;
  const answer = list[Math.floor(Math.random() * list.length)];
  const distractors = studyWords
    .filter((item) => item.word !== answer.word)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  state.quiz = {
    answer,
    chosen: null,
    options: [answer, ...distractors].sort(() => Math.random() - 0.5)
  };
  renderQuiz();
}

function renderQuiz() {
  if (!state.quiz) makeQuiz();
  const quiz = state.quiz;
  $("quizWord").textContent = quiz.answer.word;
  const values = studyWords.map((item) => entry(item.word));
  const correct = values.reduce((sum, item) => sum + item.correct, 0);
  const wrong = values.reduce((sum, item) => sum + item.wrong, 0);
  $("quizScore").textContent = `${correct} / ${correct + wrong}`;
  $("quizFeedback").textContent = quiz.feedback || (quiz.chosen ? `${quiz.answer.word}: ${quiz.answer.en}` : "");
  $("quizOptions").innerHTML = quiz.options
    .map((option) => {
      const chosen = quiz.chosen === option.word;
      const isAnswer = quiz.answer.word === option.word;
      const className = quiz.chosen ? (isAnswer ? "correct" : chosen ? "wrong" : "") : "";
      return `<button class="quiz-option ${className}" type="button" data-word="${option.word}" ${quiz.chosen ? "disabled" : ""}>${option.cn}</button>`;
    })
    .join("");
}

function chooseQuiz(word) {
  const quiz = state.quiz;
  if (!quiz || quiz.chosen) return;
  quiz.chosen = word;
  const record = entry(quiz.answer.word);
  const correct = word === quiz.answer.word;
  recordStudy(quiz.answer.word);
  if (correct) {
    record.correct += 1;
    markMastered(record);
    quiz.feedback = `答对了，${quiz.answer.word} 已进入“已学会”列表`;
  } else {
    record.wrong += 1;
    record.box = Math.max(0, record.box - 1);
    record.mastered = false;
    record.due = todayStamp();
    quiz.feedback = `继续滚动学习。答案：${quiz.answer.cn}`;
  }
  saveProgress();
  renderQuiz();
  renderStats();
  renderLists();
}

function rowTemplate(item, record) {
  const status = record.mastered ? "已会" : record.wrong ? "继续" : record.favorite ? "收藏" : "待学";
  return `
    <div class="word-row">
      <button class="word-row-main" type="button" data-select-word="${item.word}">
        <strong>${item.word}<small>${wordFamily(item)}</small></strong>
        <span>${item.cn}</span>
        <em class="badge">${status}</em>
      </button>
      <button class="study-count-button" type="button" data-study-word="${item.word}">学 ${record.studyCount} 次</button>
    </div>
  `;
}

function renderLists() {
  const visible = filteredWords();
  const reviewItems = visible.filter((item) => !entry(item.word).mastered);
  const masteredItems = visible.filter((item) => entry(item.word).mastered);

  $("wordList").innerHTML = visible.length
    ? visible.map((item) => rowTemplate(item, entry(item.word))).join("")
    : '<div class="empty-state">没有匹配的词</div>';

  $("reviewList").innerHTML = reviewItems.length
    ? reviewItems.map((item) => rowTemplate(item, entry(item.word))).join("")
    : '<div class="empty-state">当前筛选下没有待学词</div>';

  $("masteredList").innerHTML = masteredItems.length
    ? masteredItems.map((item) => rowTemplate(item, entry(item.word))).join("")
    : '<div class="empty-state">答对测验或点“认识”后会进入这里</div>';
}

function selectWord(word) {
  const list = rollingWords();
  const idx = list.findIndex((item) => item.word === word);
  if (idx >= 0) {
    state.index = idx;
    state.selectedWord = null;
  } else {
    state.selectedWord = word;
  }
  state.revealed = true;
  setView("cards");
  renderCard();
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === view));
  document.querySelectorAll(".view").forEach((panel) => panel.classList.remove("active"));
  $(`${view}View`).classList.add("active");
  if (view === "quiz" && !state.quiz) makeQuiz();
  renderStats();
  renderLists();
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => setView(tab.dataset.view));
  });

  $("searchInput").addEventListener("input", (event) => {
    state.query = event.target.value;
    state.index = 0;
    state.revealed = false;
    state.selectedWord = null;
    state.quiz = null;
    renderCard();
    if (state.view === "quiz") makeQuiz();
  });

  $("tagFilter").addEventListener("change", (event) => {
    state.tag = event.target.value;
    state.index = 0;
    state.revealed = false;
    state.selectedWord = null;
    state.quiz = null;
    renderCard();
    if (state.view === "quiz") makeQuiz();
  });

  $("flashcard").addEventListener("click", () => {
    state.revealed = !state.revealed;
    renderCard();
  });

  $("prevBtn").addEventListener("click", () => moveCard(-1));
  $("nextBtn").addEventListener("click", () => moveCard(1));
  $("speakBtn").addEventListener("click", speakCurrent);
  $("studyBtn").addEventListener("click", () => {
    const item = currentWord();
    if (!item) return;
    recordStudy(item.word);
    renderCard();
  });
  $("hardBtn").addEventListener("click", () => gradeCurrent(false));
  $("knowBtn").addEventListener("click", () => gradeCurrent(true));

  $("favoriteBtn").addEventListener("click", () => {
    const item = currentWord();
    if (!item) return;
    const record = entry(item.word);
    record.favorite = !record.favorite;
    saveProgress();
    renderCard();
  });

  $("quizOptions").addEventListener("click", (event) => {
    const button = event.target.closest("[data-word]");
    if (button) chooseQuiz(button.dataset.word);
  });

  $("nextQuizBtn").addEventListener("click", makeQuiz);

  document.body.addEventListener("click", (event) => {
    const studyButton = event.target.closest("[data-study-word]");
    if (studyButton) {
      recordStudy(studyButton.dataset.studyWord);
      renderCard();
      return;
    }
    const button = event.target.closest("[data-select-word]");
    if (button) selectWord(button.dataset.selectWord);
  });

  $("resetBtn").addEventListener("click", () => {
    if (!confirm("确定要清空学习记录吗？")) return;
    state.progress = {};
    state.selectedWord = null;
    saveProgress();
    renderCard();
    makeQuiz();
  });

  window.addEventListener("keydown", (event) => {
    if (event.target.matches("input, select")) return;
    if (event.key === "ArrowRight") moveCard(1);
    if (event.key === "ArrowLeft") moveCard(-1);
    if (event.key === " ") {
      event.preventDefault();
      state.revealed = !state.revealed;
      renderCard();
    }
  });
}

renderTags();
bindEvents();
renderCard();
makeQuiz();

if ("serviceWorker" in navigator && (window.isSecureContext || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
