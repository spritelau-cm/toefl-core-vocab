const storageKey = "toefl-core-progress-v1";
const $ = (id) => document.getElementById(id);
const vocabulary = window.TOEFL_VOCABULARY || { words: [], wordFamilies: [] };
const words = vocabulary.words;
const wordFamilies = vocabulary.wordFamilies;

const familyByWord = new Map();
const familyOrderByWord = new Map();
wordFamilies.forEach((family, familyIndex) => {
  family.words.forEach((word, wordIndex) => {
    familyByWord.set(word, family.label);
    familyOrderByWord.set(word, familyIndex * 10000 + wordIndex);
  });
});

const studyWords = [...words].sort((a, b) => {
  const rankA = familyOrderByWord.get(a.word) ?? 999999;
  const rankB = familyOrderByWord.get(b.word) ?? 999999;
  return rankA - rankB || a.word.localeCompare(b.word);
});

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

function meaningText(item) {
  return item.cn || item.en || "A high-frequency academic vocabulary item.";
}

function optionText(item) {
  const text = meaningText(item);
  return text.length > 150 ? `${text.slice(0, 147)}...` : text;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
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
  $("definitionText").textContent = meaningText(item);
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
  if (state.view === "review") renderLists();
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
      return `<button class="quiz-option ${className}" type="button" data-word="${escapeHtml(option.word)}" ${quiz.chosen ? "disabled" : ""}>${escapeHtml(optionText(option))}</button>`;
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
    quiz.feedback = `继续滚动学习。答案：${meaningText(quiz.answer)}`;
  }
  saveProgress();
  renderQuiz();
  renderStats();
  if (state.view === "review") renderLists();
}

function rowTemplate(item, record) {
  const status = record.mastered ? "已会" : record.wrong ? "继续" : record.favorite ? "收藏" : "待学";
  return `
    <div class="word-row">
      <button class="word-row-main" type="button" data-select-word="${item.word}">
        <strong>${escapeHtml(item.word)}<small>${escapeHtml(wordFamily(item))}</small></strong>
        <span>${escapeHtml(optionText(item))}</span>
        <em class="badge">${status}</em>
      </button>
      <button class="study-count-button" type="button" data-study-word="${escapeHtml(item.word)}">学 ${record.studyCount} 次</button>
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
  if (view === "review") renderLists();
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
