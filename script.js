const APP_STATE_KEY = "app_treino_state_v4";

const initialWorkoutData = {
  seg: {
    heroTitle: "UPPER • Superiores",
    heroSub: "Base & Força • 5 exercícios",
    focusTitle: "Foco: Superiores & postura",
    focusDesc: "Trabalho composto para costas, peitoral e ombros.",
    cardioTitle: "25-30 min Transport / Elíptico",
    cardioSub: "Pós-treino • frequência cardíaca controlada",
    exercises: [
      { name: "Puxada Aberta no Pulley", sets: "3 séries • 10 - 12", type: "Composto — Costas/Dorsal", alts: ["Puxada neutra no pulley", "Barra fixa assistida"] },
      { name: "Supino Reto com Halteres", sets: "3 séries • 10 - 12", type: "Composto — Peitoral e ombro", alts: ["Flexão de braço", "Supino na máquina"] },
      { name: "Remada Baixa no Triângulo", sets: "3 séries • 10 - 12", type: "Composto — Meio das costas", alts: ["Remada articulada", "Remada curvada"] },
      { name: "Desenvolvimento Sentado com Halteres", sets: "3 séries • 10 - 12", type: "Composto — Deltoide Anterior e Lateral", alts: ["Desenvolvimento na máquina", "Elevação frontal"] },
      { name: "Tríceps Corda + Rosca Direta (Bi-set)", sets: "3 séries • 12 cada", type: "Isolados — Bi-set para braços", alts: ["Tríceps testa", "Rosca martelo"] }
    ]
  },
  ter: {
    heroTitle: "LOWER • Membros Inferiores",
    heroSub: "Tonificação & Base • 4 exercícios",
    focusTitle: "Foco: Quadríceps e Glúteos",
    focusDesc: "Exercícios com controle e amplitude para fortalecimento de joelhos.",
    cardioTitle: "30 min Esteira (Método 10/4.8)",
    cardioSub: "Inclinada 10% • Velocidade 4.8 km/h",
    exercises: [
      { name: "Leg Press 45° / Agachamento Livre", sets: "4 séries • 10 reps", type: "Composto — Quadríceps e Glúteos", alts: ["Agachamento Hack", "Agachamento Sumô"] },
      { name: "Cadeira Extensora", sets: "3 séries • 12 reps", type: "Isolado — Quadríceps", alts: ["Passada com halteres", "Afundo no Smith"] },
      { name: "Mesa Flexora", sets: "3 séries • 12 reps", type: "Isolado — Isquiostibiais", alts: ["Cadeira flexora", "Stiff leve"] },
      { name: "Fortalecimento de Tornozelo & Panturrilha", sets: "4 séries • 15 reps", type: "Estabilidade", alts: ["Gêmeos em pé", "Gêmeos sentado"] }
    ]
  },
  qua: {
    heroTitle: "PUSH • Peito, Ombros e Tríceps",
    heroSub: "Empurrar & Definir • 4 exercícios",
    focusTitle: "Foco: Ombros e Definição",
    focusDesc: "Trabalho de deltoides em todos os ângulos para definir os braços.",
    cardioTitle: "25-30 min Transport / Elíptico",
    cardioSub: "Ritmo constante",
    exercises: [
      { name: "Elevação Lateral com Halteres", sets: "4 séries • 12 - 15", type: "Isolado — Deltoide Lateral", alts: ["Elevação lateral na polia", "Elevação na máquina"] },
      { name: "Face Pull na Polia", sets: "4 séries • 15 reps", type: "Postura — Deltoide Posterior", alts: ["Crucifixo invertido", "Band pull-apart"] },
      { name: "Desenvolvimento de Ombros", sets: "3 séries • 10 - 12", type: "Composto — Deltoides", alts: ["Desenvolvimento Arnold", "Desenvolvimento Smith"] },
      { name: "Tríceps Pulley com Barra V", sets: "3 séries • 12 reps", type: "Isolado — Tríceps", alts: ["Tríceps francês", "Tríceps coice"] }
    ]
  },
  qui: {
    heroTitle: "RUN • Cardio & Estabilidade",
    heroSub: "Resistência & Core • 3 exercícios",
    focusTitle: "Foco: Corrida e Joelhos",
    focusDesc: "Exercícios de fortalecimento para prevenir lesões durante corridas.",
    cardioTitle: "30 min Esteira Inclinada",
    cardioSub: "Velocidade moderada constante",
    exercises: [
      { name: "Stiff com Halteres", sets: "4 séries • 10 reps", type: "Cadeia Posterior & Glúteos", alts: ["Levantamento Terra", "Good morning"] },
      { name: "Elevação Pélvica", sets: "4 séries • 12 reps", type: "Isolado — Glúteos", alts: ["Ponte de glúteos", "Kip thrust"] },
      { name: "Estabilidade de Joelho & Core", sets: "3 séries • 15 reps", type: "Prevenção de lesão", alts: ["Prancha abdominal", "Bird-dog"] }
    ]
  },
  sex: {
    heroTitle: "PULL • Costas e Bíceps",
    heroSub: "Postura & Braços • 4 exercícios",
    focusTitle: "Foco: Perda de Gordura nas Costas",
    focusDesc: "Ativação intensa das dorsais para postura alinhada.",
    cardioTitle: "30 min Caminhada",
    cardioSub: "Foco na queima calórica",
    exercises: [
      { name: "Remada Curvada com Halteres", sets: "4 séries • 10 - 12", type: "Composto — Dorsal", alts: ["Remada serrote", "Remada cavaquinho"] },
      { name: "Pulldown Frontal na Polia", sets: "3 séries • 12 reps", type: "Isolado — Latíssimo do dorso", alts: ["Puxada alta", "Puxada articulada"] },
      { name: "Rosca Direta com Halteres", sets: "3 séries • 12 reps", type: "Isolado — Bíceps", alts: ["Rosca 21", "Rosca concentrada"] },
      { name: "Face Pull & Mobilidade", sets: "4 séries • 15 reps", type: "Ombros e Postura", alts: ["Band pull-apart", "Rotação externa"] }
    ]
  },
  sab: {
    heroTitle: "CARDIO • Atividade Aeróbica",
    heroSub: "Resistência & Regeneração • 2 exercícios",
    focusTitle: "Foco: Condicionamento Físico",
    focusDesc: "Sessão focada em gasto calórico e recuperação ativa.",
    cardioTitle: "45 min Corrida / Caminhada",
    cardioSub: "Ritmo moderado contínuo",
    exercises: [
      { name: "Corrida Contínua / Caminhada Inclinada", sets: "1 sessão • 45 min", type: "Aeróbico", alts: ["Bicicleta ergométrica", "Elíptico"] },
      { name: "Mobilidade e Mobilização Articular", sets: "3 séries • 10 min", type: "Flexibilidade", alts: ["Alongamento dinâmico", "Liberação miofascial"] }
    ]
  },
  dom: {
    heroTitle: "REST • Descanso Ativo",
    heroSub: "Recuperação Total",
    focusTitle: "Foco: Regeneração Muscular",
    focusDesc: "Dia de descanso para recuperação muscular e do SNC.",
    cardioTitle: "20 min Caminhada Leve",
    cardioSub: "Opcional • Ritmo relaxado",
    exercises: [
      { name: "Caminhada Leve ao Ar Livre", sets: "1 sessão • 20-30 min", type: "Recuperação Ativa", alts: ["Passeio de bicicleta", "Sem atividade"] },
      { name: "Rotina de Alongamentos", sets: "1 sessão • 15 min", type: "Flexibilidade", alts: ["Yoga suave", "Mobilidade de quadril"] }
    ]
  }
};

function getState() {
  const saved = localStorage.getItem(APP_STATE_KEY);
  if (!saved) {
    return { completed: {}, weights: {}, activeExercises: {}, workoutHistory: [], customWorkouts: initialWorkoutData };
  }
  return JSON.parse(saved);
}

function updateState(updater) {
  const state = getState();
  updater(state);
  localStorage.setItem(APP_STATE_KEY, JSON.stringify(state));
}

let selectedDay = "seg";
let selectedCargaDay = "seg";
let timerInterval = null;
let totalTimerSeconds = 90;
let currentTimerSeconds = 90;
let isTimerRunning = false;

document.addEventListener("DOMContentLoaded", () => {
  setupEvents();
  setupCSVImporter();
  renderWorkoutSheet(selectedDay);
  renderCargasView(selectedCargaDay);
  renderHistoryLog();
});

function setupEvents() {
  // Navegação
  document.querySelector("nav")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-item");
    if (!btn) return;

    document.querySelectorAll(".nav-item").forEach(i => {
      i.classList.remove("active", "text-purple-400");
      i.classList.add("text-gray-500");
    });
    btn.classList.add("active", "text-purple-400");
    btn.classList.remove("text-gray-500");

    const targetId = btn.dataset.target;
    document.querySelectorAll("main > section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(targetId)?.classList.remove("hidden");
  });

  // Troca de Dia da Semana
  document.getElementById("week-tabs")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".week-tab");
    if (!btn) return;

    document.querySelectorAll(".week-tab").forEach(t => {
      t.classList.remove("active", "bg-purple-950/60", "border-purple-500", "text-white");
      t.classList.add("bg-[#161322]", "border-[#272238]", "text-gray-400");
    });
    btn.classList.add("active", "bg-purple-950/60", "border-purple-500", "text-white");
    btn.classList.remove("bg-[#161322]", "border-[#272238]", "text-gray-400");
    
    selectedDay = btn.dataset.day;
    renderWorkoutSheet(selectedDay);
  });

  // Filtro na Aba Cargas
  document.getElementById("cargas-day-filter")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".cargas-tab");
    if (!btn) return;

    document.querySelectorAll(".cargas-tab").forEach(t => {
      t.classList.remove("active", "bg-purple-950/60", "border-purple-500", "text-white");
      t.classList.add("bg-[#161322]", "border-[#272238]", "text-gray-400");
    });
    btn.classList.add("active", "bg-purple-950/60", "border-purple-500", "text-white");
    btn.classList.remove("bg-[#161322]", "border-[#272238]", "text-gray-400");
    
    selectedCargaDay = btn.dataset.cargaday;
    renderCargasView(selectedCargaDay);
  });

  // Cliques na lista de exercícios
  document.getElementById("exercise-list")?.addEventListener("click", (e) => {
    const chk = e.target.closest(".chk-box");
    if (chk) {
      const idx = chk.dataset.index;
      const key = `${selectedDay}-${idx}`;
      updateState(state => { state.completed[key] = !state.completed[key]; });
      renderWorkoutSheet(selectedDay);
      return;
    }

    const altBtn = e.target.closest(".btn-alt-toggle");
    if (altBtn) {
      const idx = altBtn.dataset.index;
      const box = document.getElementById(`alt-box-${idx}`);
      if (box) {
        box.classList.toggle("hidden");
        box.classList.toggle("flex");
      }
      return;
    }

    const chipBtn = e.target.closest(".alt-chip-btn");
    if (chipBtn) {
      const idx = chipBtn.dataset.index;
      const newName = chipBtn.dataset.name;

      updateState(state => {
        if (!state.activeExercises[selectedDay]) state.activeExercises[selectedDay] = {};
        state.activeExercises[selectedDay][idx] = newName;
      });

      renderWorkoutSheet(selectedDay);
      renderCargasView(selectedCargaDay);
    }
  });

  // Concluir Treino de Hoje (Salvar Histórico e Resetar Checkboxes do Dia)
  document.getElementById("btn-finish-workout")?.addEventListener("click", () => {
    const state = getState();
    const data = state.customWorkouts[selectedDay] || initialWorkoutData[selectedDay];
    
    const now = new Date();
    const dateStr = now.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
    const timeStr = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

    updateState(st => {
      if (!st.workoutHistory) st.workoutHistory = [];
      st.workoutHistory.unshift({
        dayKey: selectedDay,
        dayName: getDayName(selectedDay),
        title: data.heroTitle,
        date: dateStr,
        time: timeStr
      });

      // Resetar checkboxes apenas do dia concluído
      data.exercises.forEach((_, idx) => {
        delete st.completed[`${selectedDay}-${idx}`];
      });
    });

    renderWorkoutSheet(selectedDay);
    renderHistoryLog();
    alert(`Treino de ${getDayName(selectedDay)} registrado com sucesso! Parabéns! 🎉`);
  });

  setupTimerControls();
}

function setupCSVImporter() {
  const input = document.getElementById("csv-file-input");
  if (!input) return;

  input.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        if (!results.data || results.data.length === 0) {
          alert("A planilha parece estar vazia.");
          return;
        }

        const newWorkouts = JSON.parse(JSON.stringify(initialWorkoutData));
        Object.keys(newWorkouts).forEach(d => newWorkouts[d].exercises = []);

        results.data.forEach(row => {
          const day = (row.dia || "").toLowerCase().trim();
          if (newWorkouts[day]) {
            newWorkouts[day].exercises.push({
              name: row.nome || "Exercício sem nome",
              sets: row.series || "3 séries • 12 reps",
              type: row.tipo || "Geral",
              alts: [row.alt1, row.alt2].filter(Boolean)
            });
          }
        });

        updateState(state => {
          state.customWorkouts = newWorkouts;
          state.activeExercises = {};
        });

        renderWorkoutSheet(selectedDay);
        renderCargasView(selectedCargaDay);
        alert("Planilha importada com sucesso!");
      }
    });
  });
}

function renderWorkoutSheet(day) {
  const state = getState();
  const data = state.customWorkouts[day] || initialWorkoutData[day];

  document.getElementById("hero-title").innerText = data.heroTitle;
  document.getElementById("hero-sub").innerText = data.heroSub;
  document.getElementById("hero-tag").innerText = `HOJE • ${getDayName(day).toUpperCase()}`;
  document.getElementById("focus-pill").innerText = data.focusTitle;
  document.getElementById("focus-desc").innerText = data.focusDesc;
  document.getElementById("focus-count").innerText = `${data.exercises.length} exercícios`;
  document.getElementById("cardio-title").innerText = data.cardioTitle;
  document.getElementById("cardio-sub").innerText = data.cardioSub;
  document.getElementById("sheet-title").innerText = `Ficha de Exercícios (${getDayName(day)})`;

  const container = document.getElementById("exercise-list");
  let completedCount = 0;

  const htmlList = data.exercises.map((ex, idx) => {
    const isChecked = !!state.completed[`${day}-${idx}`];
    if (isChecked) completedCount++;

    const activeName = (state.activeExercises[day] && state.activeExercises[day][idx]) ? state.activeExercises[day][idx] : ex.name;
    const currentWeight = state.weights[`${day}-${idx}`] || "";

    return `
      <div class="bg-[#161322] border border-[#272238] rounded-2xl p-4 space-y-3">
        <div class="flex gap-3 items-start">
          <div class="chk-box w-5 h-5 border-2 border-[#272238] rounded-md mt-0.5 cursor-pointer flex items-center justify-center text-xs text-white font-bold transition ${isChecked ? 'bg-purple-600 border-purple-600' : ''}" data-index="${idx}">
            ${isChecked ? '✓' : ''}
          </div>
          <div class="flex-1">
            <div class="flex justify-between items-start">
              <h4 class="text-xs font-bold text-gray-200">${activeName}</h4>
              <span class="text-[10px] text-gray-500 font-bold">0${idx + 1}</span>
            </div>
            <p class="text-[11px] text-gray-400 mt-0.5">${ex.sets}</p>
            <p class="text-[11px] text-gray-500 mt-0.5">${ex.type}</p>
            
            <button class="btn-alt-toggle text-purple-400 text-[10px] font-medium mt-1.5 focus:outline-none flex items-center gap-1" data-index="${idx}">
              <span>Alternativas seguras</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>

            <div class="hidden gap-1.5 mt-2 flex-wrap" id="alt-box-${idx}">
              <button class="alt-chip-btn bg-white/5 border border-[#272238] hover:border-purple-500/50 px-2.5 py-1 rounded-md text-[10px] text-gray-300 transition" data-index="${idx}" data-name="${ex.name}">${ex.name} (Original)</button>
              ${ex.alts.map(altName => `
                <button class="alt-chip-btn bg-white/5 border border-[#272238] hover:border-purple-500/50 px-2.5 py-1 rounded-md text-[10px] text-gray-300 transition" data-index="${idx}" data-name="${altName}">${altName}</button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="pt-2 border-t border-[#272238]/60 flex justify-between items-center text-xs">
          <span class="text-[10px] text-gray-400 font-medium">Carga atual:</span>
          <div class="flex items-center gap-2">
            <input type="number" id="inline-weight-${day}-${idx}" value="${currentWeight}" placeholder="kg" class="w-16 bg-black/40 border border-[#272238] text-white text-xs text-center p-1 rounded-lg font-bold focus:outline-none focus:border-purple-500">
            <button onclick="saveInlineWeight('${day}', ${idx})" class="bg-purple-600/30 border border-purple-500/40 text-purple-300 text-[10px] font-bold px-2.5 py-1 rounded-lg active:scale-95 transition">Salvar</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = htmlList;

  const total = data.exercises.length;
  const pct = total > 0 ? Math.round((completedCount / total) * 100) : 0;
  document.getElementById("workout-progress-fill").style.width = `${pct}%`;
  document.getElementById("workout-progress-text").innerText = `${completedCount}/${total} concluídos`;
  document.getElementById("sheet-count").innerText = `${completedCount}/${total}`;
}

function saveInlineWeight(day, idx) {
  const input = document.getElementById(`inline-weight-${day}-${idx}`);
  if (!input) return;

  updateState(state => {
    state.weights[`${day}-${idx}`] = input.value;
  });

  renderCargasView(selectedCargaDay);
}

function renderCargasView(day) {
  const container = document.getElementById("cargas-list");
  if (!container) return;

  const state = getState();
  const data = state.customWorkouts[day] || initialWorkoutData[day];

  container.innerHTML = data.exercises.map((ex, idx) => {
    const activeName = (state.activeExercises[day] && state.activeExercises[day][idx]) ? state.activeExercises[day][idx] : ex.name;
    const savedWeight = state.weights[`${day}-${idx}`] || "";

    return `
      <div class="bg-[#161322] border border-[#272238] rounded-2xl p-4 flex justify-between items-center">
        <div>
          <h4 class="text-xs font-bold text-gray-200">${activeName}</h4>
          <p class="text-[10px] text-gray-400 mt-0.5">${ex.sets}</p>
        </div>
        <div class="text-right">
          <span class="text-[10px] uppercase tracking-wider text-gray-500 block">Carga Registrada</span>
          <span class="text-sm font-extrabold text-purple-400">${savedWeight ? savedWeight + ' kg' : 'Sem registro'}</span>
        </div>
      </div>
    `;
  }).join("");
}

function renderHistoryLog() {
  const container = document.getElementById("history-log-list");
  if (!container) return;

  const state = getState();
  const history = state.workoutHistory || [];

  if (history.length === 0) {
    container.innerHTML = `<p class="text-gray-500 italic">Nenhum treino concluído recentemente.</p>`;
    return;
  }

  container.innerHTML = history.map(item => `
    <div class="bg-[#161322] border border-[#272238] rounded-xl p-3 flex justify-between items-center">
      <div>
        <span class="text-[10px] font-bold text-purple-400 uppercase">${item.dayName}</span>
        <h5 class="text-xs font-bold text-gray-200">${item.title}</h5>
      </div>
      <div class="text-right text-[10px] text-gray-400">
        <div>${item.date}</div>
        <div class="text-gray-500">${item.time}</div>
      </div>
    </div>
  `).join("");
}

function setupTimerControls() {
  const display = document.getElementById("timer-clock-display");
  const startBtn = document.getElementById("btn-timer-start");
  const resetBtn = document.getElementById("btn-timer-reset");
  const ringFill = document.getElementById("timer-ring-fill");

  document.querySelectorAll(".btn-time-select").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".btn-time-select").forEach(b => {
        b.classList.remove("active", "bg-purple-950/60", "border-purple-500", "text-white");
        b.classList.add("bg-white/5", "border-[#272238]", "text-gray-400");
      });
      btn.classList.add("active", "bg-purple-950/60", "border-purple-500", "text-white");
      btn.classList.remove("bg-white/5", "border-[#272238]", "text-gray-400");
      totalTimerSeconds = parseInt(btn.dataset.seconds);
      resetTimer();
    });
  });

  startBtn?.addEventListener("click", () => {
    if (isTimerRunning) pauseTimer();
    else startTimer();
  });

  resetBtn?.addEventListener("click", resetTimer);

  function startTimer() {
    isTimerRunning = true;
    startBtn.innerText = "Pausar";
    timerInterval = setInterval(() => {
      if (currentTimerSeconds > 0) {
        currentTimerSeconds--;
        updateDisplay();
      } else {
        clearInterval(timerInterval);
        isTimerRunning = false;
        startBtn.innerText = "Iniciar";
        if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
        alert("Hora de voltar ao treino!");
      }
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    startBtn.innerText = "Iniciar";
  }

  function resetTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    currentTimerSeconds = totalTimerSeconds;
    startBtn.innerText = "Iniciar";
    updateDisplay();
  }

  function updateDisplay() {
    const m = String(Math.floor(currentTimerSeconds / 60)).padStart(2, '0');
    const s = String(currentTimerSeconds % 60).padStart(2, '0');
    if (display) display.innerText = `${m}:${s}`;

    if (ringFill) {
      const circumference = 326;
      const offset = circumference - (currentTimerSeconds / totalTimerSeconds) * circumference;
      ringFill.style.strokeDashoffset = offset;
    }
  }
}

function getDayName(key) {
  const map = {
    seg: "Segunda-feira",
    ter: "Terça-feira",
    qua: "Quarta-feira",
    qui: "Quinta-feira",
    sex: "Sexta-feira",
    sab: "Sábado",
    dom: "Domingo"
  };
  return map[key] || "Segunda-feira";
}