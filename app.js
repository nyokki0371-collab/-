/**
 * 経穴学習Webアプリ メインロジック (app.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ===== 状態変数 =====
  let state = {
    currentMeridianId: 'GV',
    mode: 1, // 1: 経穴名, 2: 所在・属性, 3: 総合, 'test1': テスト①, 'test2': テスト②
    difficulty: 'normal', // 'normal', 'hard', 'super-hard'
    currentPoints: [],
    testQuestions: [], // テストモード用出題リスト (5問)
    userAnswers: {}, // キー: `pointCode_field` または `test_qIndex`, 値: ユーザー入力値
    isGraded: false
  };

  // ===== DOM要素の取得 =====
  const meridianSelect = document.getElementById('meridian-select');
  const countInput = document.getElementById('meridian-count-input');
  const countResult = document.getElementById('count-result');
  const openHelpBtn = document.getElementById('open-help-btn');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const diffContainer = document.getElementById('difficulty-container');
  const diffBtns = document.querySelectorAll('.diff-btn');
  const diffDesc = document.getElementById('difficulty-desc');
  const keiketsuList = document.getElementById('keiketsu-list');
  const submitBtn = document.getElementById('submit-btn');
  const resetBtn = document.getElementById('reset-btn');
  const nextTestBtn = document.getElementById('next-test-btn');
  const pdfBtn = document.getElementById('pdf-btn');

  // コンテナ切り替え用
  const trainingContainer = document.getElementById('training-container');
  const testContainer = document.getElementById('test-container');
  const testModeTitle = document.getElementById('test-mode-title');
  const testModeDesc = document.getElementById('test-mode-desc');
  const testQuestionList = document.getElementById('test-question-list');

  // 印刷ヘッダー要素
  const printTitle = document.getElementById('print-title');
  const printMeridianCount = document.getElementById('print-meridian-count');

  // モーダル関連
  const helpModal = document.getElementById('help-modal');
  const closeHelpBtn = document.getElementById('close-help-btn');
  const dontShowCb = document.getElementById('dont-show-again-cb');
  const startAppBtn = document.getElementById('start-app-btn');

  // ===== 初期化 =====
  function init() {
    setupMeridianSelect();
    setupEventListeners();
    checkFirstVisit();
    updateUIState();
    loadMeridian(state.currentMeridianId);
  }

  // 経脈選択ドロップダウンの構築
  function setupMeridianSelect() {
    meridianSelect.innerHTML = '';
    MERIDIANS.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m.id;
      opt.textContent = `${m.name}（${m.shortName}）`;
      meridianSelect.appendChild(opt);
    });
  }

  // 初回表示チェック
  function checkFirstVisit() {
    const dontShow = localStorage.getItem('keiketsu_dont_show_help');
    if (dontShow === 'true') {
      helpModal.classList.add('hidden');
    } else {
      helpModal.classList.remove('hidden');
    }
  }

  // ===== イベントリスナーの設定 =====
  function setupEventListeners() {
    // 経脈選択変更
    meridianSelect.addEventListener('change', (e) => {
      state.currentMeridianId = e.target.value;
      loadMeridian(state.currentMeridianId);
    });

    // モード切り替え
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const rawMode = btn.dataset.mode;
        const mode = (rawMode === 'test1' || rawMode === 'test2') ? rawMode : parseInt(rawMode, 10);
        if (state.mode !== mode) {
          state.mode = mode;
          tabBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          updateUIState();
          if (state.mode === 'test1' || state.mode === 'test2') {
            loadTestQuestions();
          } else {
            loadMeridian(state.currentMeridianId);
          }
        }
      });
    });

    // 難易度切り替え
    diffBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const diff = btn.dataset.diff;
        if (state.difficulty !== diff) {
          state.difficulty = diff;
          diffBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          updateUIState();
          loadMeridian(state.currentMeridianId);
        }
      });
    });

    // 回答するボタン
    submitBtn.addEventListener('click', () => {
      gradeAll();
    });

    // もう一度挑戦ボタン
    resetBtn.addEventListener('click', () => {
      if (state.mode === 'test1' || state.mode === 'test2') {
        // テストモードのもう一度挑戦：同じ問題で回答リセット
        resetCurrentTestQuestions();
      } else {
        loadMeridian(state.currentMeridianId);
      }
    });

    // 次の問題へボタン (テストモード専用)
    nextTestBtn.addEventListener('click', () => {
      loadTestQuestions();
    });

    // 印刷(PDF保存)ボタン
    pdfBtn.addEventListener('click', () => {
      exportToPDF();
    });

    // モーダル操作
    openHelpBtn.addEventListener('click', () => {
      dontShowCb.checked = localStorage.getItem('keiketsu_dont_show_help') === 'true';
      helpModal.classList.remove('hidden');
    });

    closeHelpBtn.addEventListener('click', closeHelpModal);
    startAppBtn.addEventListener('click', closeHelpModal);

    helpModal.addEventListener('click', (e) => {
      if (e.target === helpModal) {
        closeHelpModal();
      }
    });
  }

  function closeHelpModal() {
    if (dontShowCb.checked) {
      localStorage.setItem('keiketsu_dont_show_help', 'true');
    } else {
      localStorage.removeItem('keiketsu_dont_show_help');
    }
    helpModal.classList.add('hidden');
  }

  // ===== UI状態の更新 (印刷ボタン表示制御含む) =====
  function updateUIState() {
    const isTestMode = (state.mode === 'test1' || state.mode === 'test2');

    // 難易度設定の表示制御 (テストモードまたはモード1では非表示)
    if (isTestMode || state.mode === 1) {
      diffContainer.classList.add('hidden');
    } else {
      diffContainer.classList.remove('hidden');
      updateDifficultyDesc();
    }

    // トレーニングコンテナ vs テストコンテナの切り替え
    if (isTestMode) {
      trainingContainer.classList.add('hidden');
      testContainer.classList.remove('hidden');
      nextTestBtn.classList.remove('hidden');
      meridianSelect.disabled = true;
      meridianSelect.style.opacity = '0.6';
      countInput.disabled = true;
      countInput.style.opacity = '0.6';
    } else {
      trainingContainer.classList.remove('hidden');
      testContainer.classList.add('hidden');
      nextTestBtn.classList.add('hidden');
      meridianSelect.disabled = false;
      meridianSelect.style.opacity = '1';
      countInput.disabled = false;
      countInput.style.opacity = '1';
    }

    // 各経脈の「総合モード（モード3）」かつ「ハードモード」の時のみ印刷ボタンを表示
    if (state.mode === 3 && state.difficulty === 'hard') {
      pdfBtn.classList.remove('hidden');
    } else {
      pdfBtn.classList.add('hidden');
    }
  }

  function updateDifficultyDesc() {
    let html = '';
    if (state.difficulty === 'normal') {
      html = '<strong>通常：</strong>定期テストで60点を目標。所在は()部分のみ回答。経穴は正しい順番。';
    } else if (state.difficulty === 'hard') {
      html = '<strong>ハード：</strong>定期テストで80点を目標。所在は()と[]を回答。経穴は正しい順番。';
    } else if (state.difficulty === 'super-hard') {
      html = '<strong>スーパーハード：</strong>定期テストで100点を目標。所在は()と[]を回答。経穴の順も完全ランダム（経穴名欄に経穴番号をヒント表示）。';
    }
    diffDesc.innerHTML = html;
  }

  // ===== 経脈データのロード & 問題生成 =====
  function loadMeridian(meridianId) {
    const meridian = MERIDIANS.find(m => m.id === meridianId) || MERIDIANS[0];
    
    // リセット処理
    state.isGraded = false;
    state.userAnswers = {};
    countInput.value = '';
    countResult.innerHTML = '';
    countInput.className = 'count-input';

    // 経穴順の準備 (スーパーハードの場合は完全シャッフル)
    let points = [...meridian.points];
    if ((state.mode === 2 || state.mode === 3) && state.difficulty === 'super-hard') {
      points = shuffleArray(points);
    }
    state.currentPoints = points;

    // テーブル描画
    renderTable();
  }

  // フィッシャー–イェーツ シャッフル
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ===== テーブル描画 =====
  function renderTable() {
    keiketsuList.innerHTML = '';

    state.currentPoints.forEach((pt) => {
      const tr = document.createElement('tr');
      tr.dataset.code = pt.code;

      // 1. 五要穴属性マス
      const tdKaname5 = document.createElement('td');
      tdKaname5.className = 'col-kaname5';
      if (state.mode === 1) {
        tdKaname5.textContent = pt.kaname5 || 'なし';
        tdKaname5.style.color = 'var(--text-muted)';
      } else {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'cycle-btn kaname5-btn';
        btn.dataset.code = pt.code;
        btn.dataset.val = state.userAnswers[`${pt.code}_kaname5`] || '';
        btn.textContent = btn.dataset.val || '（選択）';
        if (btn.dataset.val) btn.classList.add('has-value');
        
        btn.addEventListener('click', () => {
          if (state.isGraded) return;
          const currentVal = btn.dataset.val;
          const idx = KANAME5_OPTIONS.indexOf(currentVal);
          const nextVal = KANAME5_OPTIONS[(idx + 1) % KANAME5_OPTIONS.length];
          btn.dataset.val = nextVal;
          btn.textContent = nextVal || '（選択）';
          state.userAnswers[`${pt.code}_kaname5`] = nextVal;
          if (nextVal) {
            btn.classList.add('has-value');
          } else {
            btn.classList.remove('has-value');
          }
        });
        tdKaname5.appendChild(btn);
      }
      tr.appendChild(tdKaname5);

      // 2. 五兪穴属性マス
      const tdGuyu = document.createElement('td');
      tdGuyu.className = 'col-guyu';
      if (state.mode === 1) {
        tdGuyu.textContent = pt.guyu || 'なし';
        tdGuyu.style.color = 'var(--text-muted)';
      } else {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'cycle-btn guyu-btn';
        btn.dataset.code = pt.code;
        btn.dataset.val = state.userAnswers[`${pt.code}_guyu`] || '';
        btn.textContent = btn.dataset.val || '（選択）';
        if (btn.dataset.val) btn.classList.add('has-value');

        btn.addEventListener('click', () => {
          if (state.isGraded) return;
          const currentVal = btn.dataset.val;
          const idx = GUYU_OPTIONS.indexOf(currentVal);
          const nextVal = GUYU_OPTIONS[(idx + 1) % GUYU_OPTIONS.length];
          btn.dataset.val = nextVal;
          btn.textContent = nextVal || '（選択）';
          state.userAnswers[`${pt.code}_guyu`] = nextVal;
          if (nextVal) {
            btn.classList.add('has-value');
          } else {
            btn.classList.remove('has-value');
          }
        });
        tdGuyu.appendChild(btn);
      }
      tr.appendChild(tdGuyu);

      // 3. 経穴名マス
      const tdName = document.createElement('td');
      tdName.className = 'col-name';
      if (state.mode === 2) {
        tdName.innerHTML = `<span class="name-display">${pt.name}</span><span class="name-yomi">（${pt.yomi}）</span>`;
      } else {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'name-input';
        input.dataset.code = pt.code;

        if (state.difficulty === 'super-hard') {
          input.placeholder = pt.code;
        } else {
          input.placeholder = '経穴名';
        }

        input.value = state.userAnswers[`${pt.code}_name`] || '';
        input.addEventListener('input', (e) => {
          state.userAnswers[`${pt.code}_name`] = e.target.value;
        });
        tdName.appendChild(input);
      }
      tr.appendChild(tdName);

      // 4. 経穴の所在マス
      const tdLocation = document.createElement('td');
      tdLocation.className = 'col-location location-cell';
      if (state.mode === 1) {
        tdLocation.textContent = formatCleanLocation(pt.locationRaw);
        // モード1(経穴名)では閲覧用テキストとして表示
        if (pt.subLocationRaw) {
          const subDiv = document.createElement('div');
          subDiv.className = 'sub-location-text';
          subDiv.textContent = `別説：${formatCleanLocation(pt.subLocationRaw)}`;
          tdLocation.appendChild(subDiv);
        }
      } else {
        tdLocation.appendChild(renderLocationQuiz(pt.code, pt.locationRaw, state.difficulty, 'loc'));
        // モード2・3では別説も穴埋め問題として出題
        if (pt.subLocationRaw) {
          const subDiv = document.createElement('div');
          subDiv.className = 'sub-location-text';
          const label = document.createElement('span');
          label.className = 'sub-location-label';
          label.textContent = '別説：';
          subDiv.appendChild(label);
          subDiv.appendChild(renderLocationQuiz(pt.code, pt.subLocationRaw, state.difficulty, 'subloc'));
          tdLocation.appendChild(subDiv);
        }
      }

      tr.appendChild(tdLocation);

      keiketsuList.appendChild(tr);
    });
  }

  function formatCleanLocation(raw) {
    return raw.replace(/[\(\)\（\）\[\]［］【】]/g, '');
  }

  function renderLocationQuiz(code, raw, difficulty, keyPrefix = 'loc') {
    const container = document.createElement('span');
    const tokens = parseLocationTokens(raw);

    tokens.forEach((token, tIdx) => {
      if (token.type === 'text') {
        container.appendChild(document.createTextNode(token.content));
      } else if (token.type === 'parenthesis') {
        const input = createBlankInput(code, `${keyPrefix}_p_${tIdx}`, token.content);
        container.appendChild(input);
      } else if (token.type === 'bracket') {
        if (difficulty === 'normal') {
          container.appendChild(document.createTextNode(token.content));
        } else {
          const input = createBlankInput(code, `${keyPrefix}_b_${tIdx}`, token.content);
          container.appendChild(input);
        }
      }
    });

    return container;
  }

  function parseLocationTokens(raw) {
    const tokens = [];
    // 全角・半角のかっこ ( ) （ ） [ ] ［ ］ 【 】 を対象にする
    const regex = /([\(\（\)\）\[\]［］【】])/g;
    let lastIndex = 0;
    let match;
    const stack = [];

    for (let i = 0; i < raw.length; i++) {
      const char = raw[i];
      if (char === '(' || char === '（') {
        if (stack.length === 0) {
          if (i > lastIndex) {
            tokens.push({ type: 'text', content: raw.substring(lastIndex, i) });
          }
          lastIndex = i;
        }
        stack.push({ type: 'parenthesis', start: i });
      } else if (char === '[' || char === '［') {
        if (stack.length === 0) {
          if (i > lastIndex) {
            tokens.push({ type: 'text', content: raw.substring(lastIndex, i) });
          }
          lastIndex = i;
        }
        stack.push({ type: 'bracket', start: i });
      } else if (char === '【') {
        if (stack.length === 0) {
          if (i > lastIndex) {
            tokens.push({ type: 'text', content: raw.substring(lastIndex, i) });
          }
          lastIndex = i;
        }
        stack.push({ type: 'thick', start: i });
      } else if (char === ')' || char === '）') {
        if (stack.length > 0) {
          const top = stack.pop();
          if (stack.length === 0) {
            const content = raw.substring(top.start + 1, i);
            if (top.type === 'parenthesis') {
              tokens.push({ type: 'parenthesis', content: content });
            } else if (top.type === 'bracket') {
              tokens.push({ type: 'bracket', content: content });
            } else {
              tokens.push({ type: 'text', content: raw.substring(top.start, i + 1) });
            }
            lastIndex = i + 1;
          }
        }
      } else if (char === ']' || char === '］') {
        if (stack.length > 0) {
          const top = stack.pop();
          if (stack.length === 0) {
            const content = raw.substring(top.start + 1, i);
            if (top.type === 'bracket') {
              tokens.push({ type: 'bracket', content: content });
            } else if (top.type === 'parenthesis') {
              tokens.push({ type: 'parenthesis', content: content });
            } else {
              tokens.push({ type: 'text', content: raw.substring(top.start, i + 1) });
            }
            lastIndex = i + 1;
          }
        }
      } else if (char === '】') {
        if (stack.length > 0) {
          const top = stack.pop();
          if (stack.length === 0) {
            tokens.push({ type: 'text', content: raw.substring(top.start, i + 1) });
            lastIndex = i + 1;
          }
        }
      }
    }

    if (lastIndex < raw.length) {
      tokens.push({ type: 'text', content: raw.substring(lastIndex) });
    }

    return tokens;
  }

  function createBlankInput(code, key, answer) {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'loc-blank-input';
    input.dataset.code = code;
    input.dataset.key = key;
    input.dataset.answer = answer;
    input.value = state.userAnswers[`${code}_${key}`] || '';
    
    input.style.width = Math.max(50, (answer.length * 18) + 16) + 'px';

    input.addEventListener('input', (e) => {
      state.userAnswers[`${code}_${key}`] = e.target.value;
    });

    return input;
  }

  // ===== シンプルな印刷(PDF保存)機能 =====
  function exportToPDF() {
    const meridian = MERIDIANS.find(m => m.id === state.currentMeridianId) || MERIDIANS[0];
    const originalTitle = document.title;
    
    // PDF保存のデフォルトファイル名を一時設定
    document.title = `経穴暗記プリント_${meridian.name}_総合ハード`;

    // 印刷ヘッダー情報の更新
    printTitle.textContent = `【経穴暗記プリント】${meridian.name}（${meridian.shortName}） 総合トレーニング（ハードモード）`;
    printMeridianCount.textContent = `総穴数：［　　］穴`;

    // ブラウザ標準の印刷（送信先: PDFに保存）を起動
    window.print();

    // ダイアログ終了後に元のタイトルに復元
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  }

  // ===== テストモード①・② 出題データ生成 =====
  function loadTestQuestions() {
    state.isGraded = false;
    state.userAnswers = {};

    if (state.mode === 'test1') {
      testModeTitle.textContent = 'テストモード①：所在から経穴名を答える';
      testModeDesc.textContent = '全経絡からランダムに5問出題されます。所在から該当する経穴名を入力してください。';
      state.testQuestions = generateTest1Questions();
    } else if (state.mode === 'test2') {
      testModeTitle.textContent = 'テストモード②：五兪穴・五要穴の属性から経穴名を答える';
      testModeDesc.textContent = '全経絡から属性が登録されている経穴がランダムに5問出題されます。経脈名と属性から経穴名を入力してください。';
      state.testQuestions = generateTest2Questions();
    }

    renderTestQuestions();
  }

  // 同じ問題で回答をリセット
  function resetCurrentTestQuestions() {
    state.isGraded = false;
    state.userAnswers = {};
    renderTestQuestions();
  }

  // テストモード①の問題プール生成 & 5問抽出
  function generateTest1Questions() {
    const pool = [];
    MERIDIANS.forEach(m => {
      m.points.forEach(pt => {
        // 通常の所在
        if (pt.locationRaw) {
          pool.push({
            type: 'test1',
            meridianName: m.name,
            meridianShort: m.shortName,
            pointCode: pt.code,
            correctName: pt.name,
            correctYomi: pt.yomi,
            locationText: formatCleanLocation(pt.locationRaw),
            isSub: false
          });
        }
        // 別説が存在する場合も出題対象
        if (pt.subLocationRaw) {
          pool.push({
            type: 'test1',
            meridianName: m.name,
            meridianShort: m.shortName,
            pointCode: pt.code,
            correctName: pt.name,
            correctYomi: pt.yomi,
            locationText: formatCleanLocation(pt.subLocationRaw),
            isSub: true
          });
        }
      });
    });

    const shuffled = shuffleArray(pool);
    // 重複をできる限り避ける（同じpointCodeは5問内で1つまで）
    const selected = [];
    const usedCodes = new Set();
    for (const q of shuffled) {
      if (!usedCodes.has(q.pointCode)) {
        selected.push(q);
        usedCodes.add(q.pointCode);
        if (selected.length >= 5) break;
      }
    }
    // もし重複排除で5問に達しなければ残りを補充
    if (selected.length < 5) {
      for (const q of shuffled) {
        if (!selected.includes(q)) {
          selected.push(q);
          if (selected.length >= 5) break;
        }
      }
    }
    return selected;
  }

  // テストモード②の問題プール生成 & 5問抽出
  function generateTest2Questions() {
    const pool = [];
    MERIDIANS.forEach(m => {
      m.points.forEach(pt => {
        // 五要穴 (原穴・郄穴・絡穴・募穴・兪穴)
        if (pt.kaname5 && pt.kaname5.trim() !== '') {
          pool.push({
            type: 'test2',
            meridianName: m.name,
            meridianShort: m.shortName,
            pointCode: pt.code,
            correctName: pt.name,
            correctYomi: pt.yomi,
            category: '五要穴',
            attribute: pt.kaname5.trim()
          });
        }
        // 五兪穴 (井穴・滎穴・兪穴・経穴・合穴)
        if (pt.guyu && pt.guyu.trim() !== '') {
          pool.push({
            type: 'test2',
            meridianName: m.name,
            meridianShort: m.shortName,
            pointCode: pt.code,
            correctName: pt.name,
            correctYomi: pt.yomi,
            category: '五兪穴',
            attribute: pt.guyu.trim()
          });
        }
      });
    });

    const shuffled = shuffleArray(pool);
    // 5問以内の重複を回避（同じpointCode・同じ属性は避ける）
    const selected = [];
    const usedKeys = new Set();
    for (const q of shuffled) {
      const key = `${q.meridianShort}_${q.attribute}_${q.pointCode}`;
      if (!usedKeys.has(key)) {
        selected.push(q);
        usedKeys.add(key);
        if (selected.length >= 5) break;
      }
    }
    return selected;
  }

  // テスト問題のDOM描画
  function renderTestQuestions() {
    testQuestionList.innerHTML = '';

    if (state.testQuestions.length === 0) {
      const emptyDiv = document.createElement('div');
      emptyDiv.className = 'test-card';
      emptyDiv.textContent = '出題可能な問題がありません。';
      testQuestionList.appendChild(emptyDiv);
      return;
    }

    state.testQuestions.forEach((q, idx) => {
      const card = document.createElement('div');
      card.className = 'test-card';
      card.dataset.index = idx;

      // ヘッダー (問題番号など)
      const header = document.createElement('div');
      header.className = 'test-card-header';

      const badge = document.createElement('span');
      badge.className = 'test-q-badge';
      badge.textContent = `第 ${idx + 1} 問`;
      header.appendChild(badge);

      if (q.type === 'test1' && q.isSub) {
        const subBadge = document.createElement('span');
        subBadge.className = 'test-q-source';
        subBadge.textContent = '（別説からの出題）';
        header.appendChild(subBadge);
      }
      card.appendChild(header);

      // 問題文本体と経穴名入力欄
      const stmtContainer = document.createElement('div');
      stmtContainer.className = 'test-statement';

      let statementPrefix = '';
      if (q.type === 'test1') {
        statementPrefix = `${q.locationText}にある経穴は【 `;
      } else if (q.type === 'test2') {
        statementPrefix = `${q.meridianName}の${q.attribute}は【 `;
      }
      stmtContainer.appendChild(document.createTextNode(statementPrefix));

      // 経穴名入力ボックス
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'test-name-input';
      input.dataset.index = idx;
      input.placeholder = '経穴名';
      input.value = state.userAnswers[`test_${idx}`] || '';

      input.addEventListener('input', (e) => {
        state.userAnswers[`test_${idx}`] = e.target.value;
      });

      // Enterキーで次の入力欄へフォーカス移動
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const nextInput = testQuestionList.querySelector(`input.test-name-input[data-index="${idx + 1}"]`);
          if (nextInput) {
            nextInput.focus();
          } else {
            submitBtn.focus();
          }
        }
      });

      stmtContainer.appendChild(input);
      stmtContainer.appendChild(document.createTextNode(' 】である。'));
      card.appendChild(stmtContainer);

      // 採点結果コンテナ (回答後に表示)
      const resultWrapper = document.createElement('div');
      resultWrapper.className = 'test-result-wrapper hidden';
      resultWrapper.id = `test-result-${idx}`;
      card.appendChild(resultWrapper);

      testQuestionList.appendChild(card);
    });
  }

  // ===== 採点処理 =====
  function gradeAll() {
    state.isGraded = true;

    // --- テストモード①・②の採点 ---
    if (state.mode === 'test1' || state.mode === 'test2') {
      gradeTestQuestions();
      submitBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }

    const meridian = MERIDIANS.find(m => m.id === state.currentMeridianId);

    // 1. 経穴数問題の採点
    const userCount = normalizeText(countInput.value);
    const correctCount = String(meridian.totalCount);
    if (userCount === correctCount) {
      countResult.innerHTML = '<span class="result-correct">正解！</span>';
      countInput.className = 'count-input result-correct';
    } else {
      countResult.innerHTML = `<span class="result-wrong">不正解 (正解: ${meridian.totalCount}穴)</span>`;
      countInput.className = 'count-input result-wrong';
    }

    // 2. テーブル各行の採点
    const rows = keiketsuList.querySelectorAll('tr');
    rows.forEach(tr => {
      const code = tr.dataset.code;
      const pt = meridian.points.find(p => p.code === code);
      if (!pt) return;

      // ヒントのクリア
      tr.querySelectorAll('.correct-answer-hint').forEach(el => el.remove());

      // --- 五要穴属性 ---
      if (state.mode === 2 || state.mode === 3) {
        const btn = tr.querySelector('.kaname5-btn');
        if (btn) {
          const userVal = btn.dataset.val || '';
          const correctVal = pt.kaname5 || '';
          if (userVal === correctVal) {
            btn.className = 'cycle-btn kaname5-btn result-correct';
            btn.textContent = (userVal || 'なし') + ' ✓';
          } else {
            btn.className = 'cycle-btn kaname5-btn result-wrong';
            btn.textContent = (userVal || 'なし') + ' ✕';
            const hint = document.createElement('span');
            hint.className = 'correct-answer-hint';
            hint.textContent = `正解: ${correctVal || 'なし'}`;
            btn.parentNode.appendChild(hint);
          }
        }
      }

      // --- 五兪穴属性 ---
      if (state.mode === 2 || state.mode === 3) {
        const btn = tr.querySelector('.guyu-btn');
        if (btn) {
          const userVal = btn.dataset.val || '';
          const correctVal = pt.guyu || '';
          if (userVal === correctVal) {
            btn.className = 'cycle-btn guyu-btn result-correct';
            btn.textContent = (userVal || 'なし') + ' ✓';
          } else {
            btn.className = 'cycle-btn guyu-btn result-wrong';
            btn.textContent = (userVal || 'なし') + ' ✕';
            const hint = document.createElement('span');
            hint.className = 'correct-answer-hint';
            hint.textContent = `正解: ${correctVal || 'なし'}`;
            btn.parentNode.appendChild(hint);
          }
        }
      }

      // --- 経穴名 ---
      if (state.mode === 1 || state.mode === 3) {
        const input = tr.querySelector('.name-input');
        if (input) {
          const rawInput = (input.value || '').trim();
          const normInput = normalizeText(rawInput);
          const normName = normalizeText(pt.name);
          const normYomi = normalizeText(pt.yomi);

          if (rawInput === pt.name || normInput === normName) {
            // 完全正解 (漢字)
            input.className = 'name-input result-correct';
          } else if (rawInput === pt.yomi || normInput === normYomi) {
            // ▲ (ひらがな回答)
            input.className = 'name-input result-partial';
            const hint = document.createElement('span');
            hint.className = 'correct-answer-hint';
            hint.style.color = 'var(--partial-color)';
            hint.style.backgroundColor = '#feebc8';
            hint.style.borderColor = '#fbd38d';
            hint.textContent = `▲ 正確な漢字: ${pt.name}`;
            input.parentNode.appendChild(hint);
          } else {
            // 不正解
            input.className = 'name-input result-wrong';
            const hint = document.createElement('span');
            hint.className = 'correct-answer-hint';
            hint.textContent = `正解: ${pt.name}`;
            input.parentNode.appendChild(hint);
          }
        }
      }

      // --- 所在 ---
      if (state.mode === 2 || state.mode === 3) {
        const locInputs = tr.querySelectorAll('.loc-blank-input');
        locInputs.forEach(input => {
          const userVal = normalizeText(input.value);
          const correctVal = normalizeText(input.dataset.answer);

          if (userVal === correctVal) {
            input.className = 'loc-blank-input result-correct';
          } else {
            input.className = 'loc-blank-input result-wrong';
            const hint = document.createElement('span');
            hint.className = 'correct-answer-hint';
            hint.textContent = `正: ${input.dataset.answer}`;
            input.parentNode.insertBefore(hint, input.nextSibling);
          }
        });
      }
    });

    submitBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // ===== テストモード①・② 採点処理 =====
  function gradeTestQuestions() {
    state.testQuestions.forEach((q, idx) => {
      const card = testQuestionList.querySelector(`.test-card[data-index="${idx}"]`);
      if (!card) return;

      const input = card.querySelector('.test-name-input');
      const resultWrapper = card.querySelector('.test-result-wrapper');
      resultWrapper.innerHTML = '';
      resultWrapper.classList.remove('hidden');

      const rawInput = (input.value || '').trim();
      const normInput = normalizeText(rawInput);
      const normName = normalizeText(q.correctName);
      const normYomi = normalizeText(q.correctYomi);

      const badge = document.createElement('span');
      badge.className = 'test-grade-badge';

      const infoSpan = document.createElement('span');
      infoSpan.className = 'test-correct-info';

      if (rawInput === q.correctName || normInput === normName) {
        // 完全正解 (漢字)
        input.className = 'test-name-input result-correct';
        badge.className = 'test-grade-badge correct';
        badge.textContent = '正解！ ✓';
        infoSpan.innerHTML = `正解：<span class="test-correct-name">${q.correctName}</span><span class="test-correct-yomi">（${q.correctYomi} / ${q.pointCode}）</span>`;
      } else if (rawInput === q.correctYomi || normInput === normYomi) {
        // ひらがな回答判定 (▲)
        input.className = 'test-name-input result-partial';
        badge.className = 'test-grade-badge partial';
        badge.textContent = '▲ 惜しい！ (ひらがな)';
        infoSpan.innerHTML = `正確な漢字：<span class="test-correct-name">${q.correctName}</span><span class="test-correct-yomi">（${q.pointCode}）</span>`;
      } else {
        // 不正解
        input.className = 'test-name-input result-wrong';
        badge.className = 'test-grade-badge wrong';
        badge.textContent = '不正解 ✕';
        infoSpan.innerHTML = `正解：<span class="test-correct-name">${q.correctName}</span><span class="test-correct-yomi">（${q.correctYomi} / ${q.pointCode}）</span>`;
      }

      resultWrapper.appendChild(badge);
      resultWrapper.appendChild(infoSpan);
    });
  }

  // 全角/半角英数変換・トリム処理（比較用）
  function normalizeText(text) {
    if (!text) return '';
    return text
      .trim()
      .replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
      .replace(/\s+/g, '');
  }

  // アプリ開始
  init();
});
