// ==========================================================================
// SPEAKER NOTES DATA
// ==========================================================================
const speakerNotes = {
    1: {
        title: "Capa",
        bullets: [
            "Cumprimentar os colegas e o professor. Apresentar o tema do seminário.",
            "Contextualizar: o foco é sincronização de dados em sistemas distribuídos de alta concorrência.",
            "Antecipar: usaremos um estudo de caso simulado para tornar os conceitos mais concretos."
        ]
    },
    2: {
        title: "Conheçam o George",
        bullets: [
            "George representa o desenvolvedor moderno que prioriza agilidade com auxílio de IA generativa.",
            "O gancho do storytelling é pessoal: todos nós já tivemos uma ideia de projeto pessoal. George decide executar a dele.",
            "Enfatizar a estratégia: construir rápido, publicar cedo, validar com o mercado. Isso é Lean Startup aplicado."
        ]
    },
    3: {
        title: "A Jornada do MVP",
        bullets: [
            "Cada clique revela uma etapa da jornada, simulando a progressão temporal do projeto.",
            "Passo 1: Construção em um fim de semana — stack padrão (React + Node + Postgres).",
            "Passo 2: Deploy simples em cloud compartilhado. George compartilha em comunidades tech.",
            "Passo 3: Os primeiros 100 usuários validam a premissa. Engajamento orgânico alto.",
            "Passo 4: Crescimento explosivo de 500%. Product-market fit atingido.",
            "Passo 5: O auge de popularidade — mas os primeiros sinais de instabilidade aparecem."
        ]
    },
    4: {
        title: "Feedback dos Usuários",
        bullets: [
            "Mostrar o contraste entre a fase de sucesso (feedbacks positivos) e a fase de degradação (bugs e lentidão).",
            "Clique 1-2: Depoimentos entusiasmados que validam o produto.",
            "Clique 3-4: Reclamações reais de perda de dados, timeouts e latência. Esses são sintomas clássicos de contenção de banco."
        ]
    },
    5: {
        title: "Como vocês construiriam?",
        bullets: [
            "INTERAÇÃO: pausar a apresentação e perguntar diretamente aos alunos como eles projetariam a arquitetura.",
            "Clique 1: Revelar a reflexão sobre software não nascer robusto — princípio de engenharia iterativa.",
            "Clique 2: Revelar a escolha de George — arquitetura monolítica clássica. É o padrão da indústria para MVPs."
        ]
    },
    6: {
        title: "Impacto no Mercado",
        bullets: [
            "Conectar o problema de George a casos reais de empresas que perderam milhões.",
            "Clique 1: Amazon Prime Day 2018 — US$ 72-99M perdidos em 2 horas de instabilidade. Sistema 'Sable' não suportou a carga.",
            "Clique 2: Facebook Março 2019 — 14h fora do ar, US$ 90M em receita publicitária perdida.",
            "Clique 3: Dados do setor — custo médio de US$ 5.600-9.000 por minuto. 9% nunca retornam."
        ]
    },
    7: {
        title: "Sessão de Debug",
        bullets: [
            "Simular uma investigação técnica que George faria para diagnosticar o problema.",
            "Clique 1: Monitoramento de CPU — Postgres em 98.7% e I/O Wait alto.",
            "Clique 2: 342 conexões esperando locks — contenção real e mensurável.",
            "Clique 3: 89% das queries são de leitura, mas disputam disco com as 11% de escrita.",
            "Clique 4: Diagnóstico final — o banco é o gargalo, não o código. É um problema arquitetural."
        ],
        tip: {
            title: "Dica — ACID e Locks",
            text: "Use a analogia da transferência bancária: 'Se o dinheiro saiu de uma conta mas não entrou na outra, a transação falhou como um todo.' Isso é Atomicidade. Mas essa garantia exige bloqueios (locks) que seguram outras operações na fila."
        }
    },
    8: {
        title: "O Padrão CQRS",
        bullets: [
            "Apresentar a definição formal do CQRS e suas raízes históricas.",
            "O padrão já aparece implicitamente: inicia no CQS de Bertrand Meyer (1988), é refinado por Udi Dahan (2009) e formalizado por Greg Young (2010).",
            "Clique 1: Detalhar o lado de escrita (transacional, ACID) e o lado de leitura (otimizado, desnormalizado).",
            "Clique 2: Exibir a linha do tempo acadêmica do padrão — datas e autores."
        ],
        tip: {
            title: "Dica — CQRS",
            text: "Analogia do restaurante: 'O garçom anota o pedido (comando), a cozinha prepara e o expedidor entrega (consulta). Se fosse um único funcionário, a fila andaria muito mais devagar.'"
        }
    },
    9: {
        title: "Nova Arquitetura com CQRS",
        bullets: [
            "Mostrar o resultado prático no sistema do George: latência de 1.200ms para menos de 50ms.",
            "Clique 1: Apresentar os trade-offs reais do CQRS (sincronização, duplicação, complexidade, consistência eventual)."
        ]
    },
    10: {
        title: "Teorema CAP & Consistência Eventual",
        bullets: [
            "A base teórica do Teorema CAP (Gilbert & Lynch, 2002) é exibida visualmente como triângulo.",
            "Explicar que em partições de rede, devemos escolher entre C (consistência) ou A (disponibilidade). O CQRS opta por AP.",
            "Clique 1: Exibir a tabela comparativa ACID vs BASE de forma visual.",
            "Clique 2: Analogia do Instagram — consistência eventual é aceitável para humanos."
        ],
        tip: {
            title: "Dica — Consistência Eventual",
            text: "Postar uma foto no Instagram não faz com que todos os seguidores vejam instantaneamente. O feed de cada um converge para o estado correto em segundos. Isso é consistência eventual."
        }
    },
    11: {
        title: "Event Sourcing",
        bullets: [
            "Event Sourcing complementa o CQRS armazenando fatos imutáveis (eventos) em vez de estados mutáveis.",
            "Formalizado por Martin Fowler (2005), integrado ao CQRS por Greg Young (2006).",
            "Clique 1-4: Inserir eventos sequencialmente no log, demonstrando o conceito de append-only.",
            "Clique 5: Revelar a projeção de leitura — o estado é derivado da reprodução dos eventos."
        ]
    },
    12: {
        title: "Casos Reais de CQRS",
        bullets: [
            "Cada caso é revelado individualmente para dar tempo de comentar e discutir.",
            "Clique 1: Amazon DynamoDB (2004-2007) — paper SOSP '07 de DeCandia et al.",
            "Clique 2: Netflix (2009-2012) — migração do Oracle para microserviços + CQRS.",
            "Clique 3: Uber (2014-2016) — Schemaless + Cassandra para suportar demanda global."
        ]
    },
    13: {
        title: "Referências & Encerramento",
        bullets: [
            "Apresentar as referências bibliográficas organizadas cronologicamente (1988 a 2017).",
            "Agradecer e abrir para perguntas e discussão com a turma."
        ]
    }
};

// ==========================================================================
// GLOSSARY DATA
// ==========================================================================
const glossaryData = {
    cqrs: `
        <h3>CQRS (Command Query Responsibility Segregation)</h3>
        <p><strong>CQRS</strong> é um padrão de arquitetura de software que separa formalmente as operações de escrita (Commands) das operações de leitura (Queries) em modelos distintos.</p>
        <h3>Origem</h3>
        <ul>
            <li><strong>1988:</strong> Bertrand Meyer introduz o princípio CQS (Command-Query Separation) no nível de métodos.</li>
            <li><strong>2010:</strong> Greg Young formaliza o CQRS no nível arquitetural, integrando-o ao Domain-Driven Design.</li>
        </ul>
        <h3>Componentes</h3>
        <ul>
            <li><strong>Command Side:</strong> Mutação de estado, validação de regras de negócio, banco normalizado ACID.</li>
            <li><strong>Query Side:</strong> Recuperação de dados, banco desnormalizado otimizado para leitura rápida.</li>
        </ul>
        <h3>Benefícios</h3>
        <ul>
            <li>Escalabilidade independente dos fluxos de leitura e escrita.</li>
            <li>Eliminação de contenção de locks entre operações concorrentes.</li>
            <li>Flexibilidade para usar tecnologias de banco distintas (SQL + NoSQL).</li>
        </ul>
    `,
    acid: `
        <h3>ACID (Propriedades Transacionais)</h3>
        <p>Conjunto de garantias que asseguram a confiabilidade de transações em bancos de dados relacionais.</p>
        <h3>Propriedades</h3>
        <ul>
            <li><strong>Atomicidade:</strong> A transação é indivisível — ou completa com sucesso ou é revertida integralmente.</li>
            <li><strong>Consistência:</strong> O banco transita apenas entre estados válidos, respeitando todas as restrições definidas.</li>
            <li><strong>Isolamento:</strong> Transações concorrentes não interferem entre si. Requer mecanismos de bloqueio (locks).</li>
            <li><strong>Durabilidade:</strong> Dados gravados são permanentes, mesmo em caso de falha de energia ou hardware.</li>
        </ul>
    `,
    es: `
        <h3>Event Sourcing</h3>
        <p>Padrão arquitetural que armazena cada mudança de estado como um evento imutável em um log sequencial (Event Store), em vez de manter apenas o estado atual.</p>
        <h3>Origem</h3>
        <ul>
            <li><strong>2005:</strong> Martin Fowler formaliza o padrão Event Sourcing.</li>
            <li><strong>2006:</strong> Greg Young integra Event Sourcing ao CQRS.</li>
            <li><strong>2011:</strong> Apache Kafka (Kreps et al.) populariza o log distribuído de eventos.</li>
        </ul>
        <h3>Benefícios</h3>
        <ul>
            <li><strong>Auditoria:</strong> Histórico completo e imutável de todas as alterações.</li>
            <li><strong>Replay:</strong> Reconstruir qualquer visão do sistema a partir dos eventos.</li>
            <li><strong>Desacoplamento:</strong> Escrita e leitura podem operar em tempos diferentes.</li>
        </ul>
    `
};

// ==========================================================================
// PRESENTATION NAVIGATION CONTROLLER
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 1;
    let currentStep = 0;
    const totalSlides = 13;

    const prevBtn = document.getElementById("prev-slide");
    const nextBtn = document.getElementById("next-slide");
    const currentNumSpan = document.getElementById("current-slide-num");
    const totalNumSpan = document.getElementById("total-slides-num");

    const speakerNotesPanel = document.getElementById("speaker-notes-panel");
    const closeNotesBtn = document.getElementById("close-notes-btn");
    const speakerNotesContent = document.getElementById("speaker-notes-content");

    const glossaryPanel = document.getElementById("glossary-panel");
    const closeGlossaryBtn = document.getElementById("close-glossary-btn");
    const glossaryTextContainer = document.getElementById("glossary-text-container");

    totalNumSpan.textContent = totalSlides;

    function getActiveSlideInfo() {
        const slideEl = document.querySelector(`.slide[data-slide="${currentSlide}"]`);
        const fragments = slideEl.querySelectorAll(".fragment");
        let maxStep = 0;
        fragments.forEach(f => {
            const s = parseInt(f.getAttribute("data-step") || "0");
            if (s > maxStep) maxStep = s;
        });
        return { slideEl, fragments, maxStep };
    }

    function updatePresentationState() {
        document.querySelectorAll(".slide").forEach(slide => {
            const num = parseInt(slide.getAttribute("data-slide"));
            slide.classList.remove("active", "prev", "next");
            if (num === currentSlide) slide.classList.add("active");
            else if (num < currentSlide) slide.classList.add("prev");
            else slide.classList.add("next");
        });

        currentNumSpan.textContent = currentSlide;

        const { fragments } = getActiveSlideInfo();
        fragments.forEach(f => {
            const s = parseInt(f.getAttribute("data-step") || "0");
            f.classList.toggle("visible", s <= currentStep);
        });

        handleSlideTriggers(currentSlide, currentStep);
        loadSpeakerNotes(currentSlide);
    }

    function navigateNextStep() {
        const { maxStep } = getActiveSlideInfo();
        if (currentStep < maxStep) {
            currentStep++;
            updatePresentationState();
        } else if (currentSlide < totalSlides) {
            currentSlide++;
            currentStep = 0;
            updatePresentationState();
        }
    }

    function navigatePrevStep() {
        if (currentStep > 0) {
            currentStep--;
            updatePresentationState();
        } else if (currentSlide > 1) {
            currentSlide--;
            const info = getActiveSlideInfo();
            currentStep = info.maxStep;
            updatePresentationState();
        }
    }

    nextBtn.addEventListener("click", e => { e.stopPropagation(); navigateNextStep(); });
    prevBtn.addEventListener("click", e => { e.stopPropagation(); navigatePrevStep(); });

    document.addEventListener("click", e => {
        if (e.target.closest(".footer") ||
            e.target.closest(".speaker-notes-panel") ||
            e.target.closest(".glossary-panel")) return;
        navigateNextStep();
    });

    document.addEventListener("keydown", e => {
        if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
            e.preventDefault(); navigateNextStep();
        } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
            e.preventDefault(); navigatePrevStep();
        } else if (e.key.toLowerCase() === "s") {
            e.preventDefault(); toggleSpeakerNotes();
        } else if (e.key.toLowerCase() === "g") {
            e.preventDefault(); toggleGlossary();
        }
    });

    // Touch swipe
    let touchStartX = 0;
    document.addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].screenX; }, false);
    document.addEventListener("touchend", e => {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (diff < -50) navigateNextStep();
        else if (diff > 50) navigatePrevStep();
    }, false);

    // Speaker Notes
    function loadSpeakerNotes(slideNum) {
        const data = speakerNotes[slideNum];
        if (!data) return;
        let html = `<h4>${data.title}</h4><ul class="note-bullet-points">`;
        data.bullets.forEach(b => { html += `<li>${b}</li>`; });
        html += `</ul>`;
        if (data.tip) {
            html += `<div class="presentation-tip-card"><h4><i class="fa-solid fa-lightbulb"></i> ${data.tip.title}</h4><p>${data.tip.text}</p></div>`;
        }
        speakerNotesContent.innerHTML = html;
    }

    function toggleSpeakerNotes() {
        speakerNotesPanel.classList.toggle("open");
        glossaryPanel.classList.remove("open");
    }

    function toggleGlossary() {
        glossaryPanel.classList.toggle("open");
        speakerNotesPanel.classList.remove("open");
        loadGlossaryTerm("cqrs");
    }

    closeNotesBtn.addEventListener("click", e => { e.stopPropagation(); speakerNotesPanel.classList.remove("open"); });
    closeGlossaryBtn.addEventListener("click", e => { e.stopPropagation(); glossaryPanel.classList.remove("open"); });

    function loadGlossaryTerm(term) {
        glossaryTextContainer.innerHTML = glossaryData[term] || "<p>Termo não encontrado.</p>";
        document.querySelectorAll(".glossary-tab-btn").forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-term") === term);
        });
    }

    document.querySelectorAll(".glossary-tab-btn").forEach(btn => {
        btn.addEventListener("click", e => {
            e.stopPropagation();
            loadGlossaryTerm(btn.getAttribute("data-term"));
        });
    });

    // Slide-specific triggers
    function handleSlideTriggers(slideNum, stepNum) {
        if (slideNum === 11) {
            document.querySelectorAll("#slide-11 .event-row-academic, [data-slide='11'] .event-row-academic").forEach((ev, idx) => {
                const trigger = idx + 1;
                ev.classList.toggle("active", stepNum === trigger);
                ev.style.transform = stepNum === trigger ? "scale(1.02)" : "scale(1)";
            });
        }
    }

    // Init
    updatePresentationState();
});
