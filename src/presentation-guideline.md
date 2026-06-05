# Guia de Apresentação — Computação Aplicada em Arquitetura de Software

## Objetivo da apresentação
Esta apresentação deve falar sobre Arquitetura de Software e o padrão CQRS. A apresentação deve mostrar o valor dessa arquitetura, quais problemas ela resolve e quais os trade-offs que precisamos nos preocupar ao adota-la em nossos sistemas.
O tema será apresentado de maneira narrativa, como um conto, pois dessa forma, a audiência (alunos de mestrado em computação aplicada) se colocarão na pele do desenvolvedor que está atuando na engenharia de software em como a aplicação será planejada e evoluída. Apesar desse tipo de abordagem, a apresentação deverá contar com conceitos acadêmicos e pontos de destaque nos slides que trazem o contexto lúdico para o contexto ciêntífico e prático (casos reais de mercado/empresas).
A apresentação irá contar a história de George, um desenvolvedor que constrói um MVP rápido com IA (utilizando Vibe Coding), publica o produto, ganha tração e, em seguida, enfrenta problemas de escala, concorrência e latência. A narrativa mostra como a arquitetura monolítica clássica pode ser suficiente no começo, mas se tornar um gargalo à medida que o sistema cresce.
As áreas de estudo que serão apresentadas por trás do estudo de caso, são: CQRS, Event Sourcing e o contexto teórico por trás de cada uma das decisões arquiteturais. Será incluído também, cenários de colapso reais que aconteceram na indústria com grandes empresas e causaram perdas financeiras devido à problemas arquiteturais de software.

---

## Roteiro completo da apresentação

### Slide 1 — Abertura
**Título:** Computação Aplicada em Arquitetura de Software  
**Subtítulo:** Sincronização de dados desnormalizados em sistemas distribuídos orientado a eventos e de alta concorrência

**Contexto para a fala:**
- Apresentar o tema central do seminário.
- Criar um "gancho" de apresentação para capturar a atenção ao tema e controlar a espectativa da audiência.
- Explicar que a discussão gira em torno de como sistemas modernos lidam com leitura, escrita, concorrência e escalabilidade.

**Público-alvo:** alunos de pós graduação - Mestrado Profissional em Computação. Público mesclado entre recém formados e profissionais com ampla experiência no mercado de trabalho.

---

### Slide 2 — Conheçam o George
**Tema:** Estudo de caso simulado

**Narrativa:**
George é um desenvolvedor que usa inteligência artificial todos os dias para ser mais produtivo. Em um fim de semana, ele decide transformar uma ideia ambiciosa em realidade: criar uma rede social centrada em comunidades de nicho, pensada para atrair um público jovem à um conceito que perdurou as redes sociais nos anos 2000.

**Mensagem principal:**
- O objetivo de George é lançar rápido e validar o produto com usuários reais antes de investir em infraestrutura complexa.
- Esse comportamento é típico de startups e MVPs.
- Comportamento incentivado e ampliado pelo Vibe Coding.

**Frase de apoio:**
“Com vibe coding, devo montar ainda neste fim de semana uma versão testável para alguns usuários e validar minha ideia.”

**Visual sugerido:**
- Imagem do MVP funcional construído em fim de semana.
- Mostrar a interface como prova de que o produto saiu do papel rapidamente.

**Interface do MVP:**
Utilizar como base a imagem em `assets/Sistema vibe coded do George.png`

![Sistema vibe coded do George](assets/Sistema vibe coded do George.png)

---

### Slide 3 — A jornada com Vibe Coding
**Tema:** Da ideia ao produto em escala

**Sequência de progressão:**
1. Fim de semana — O MVP
   - George desenvolve a aplicação com IA generativa.
   - Frontend em React, backend em Node.js e PostgreSQL.
   - O sistema funciona localmente sem grandes problemas.

2. Segunda-feira — Publicação
   - O deploy é feito em um servidor cloud compartilhado.
   - George distribui o link para amigos, grupos de tecnologia e comunidades de desenvolvedores.

3. Duas semanas — Primeiros 100 usuários
   - A comunidade surge organicamente.
   - O engajamento é alto.
   - O feedback é majoritariamente positivo.

4. Primeiro mês — Tração orgânica
   - O boca a boca supera qualquer estratégia de marketing.
   - O tráfego cresce 500% em relação ao lançamento.
   - O produto atinge o product-market fit.

5. Três meses — 10.000 usuários ativos
   - O sucesso é real, mas começam os sinais de instabilidade.
   - George recebe notificações de erro de madrugada.

**Ponto central:**
A escalada do sucesso expõe a fragilidade da arquitetura inicial.

**Dicas para o slide:**
Apresentar cada _bullet point_ progressivamente (a cada clique) para que os ouvintes acompanhem a ideia.

---

### Slide 4 — Feedback dos usuários
**Tema:** O sucesso e os primeiros sinais de problema

**Feedback positivo (mês 1):**
- “Que app incrível! As comunidades de nicho foram uma sacada genial.”
- “Acredita que até minha avó está usando? Ela ama a comunidade de jardinagem!”
- “Mostrei pros colegas de trabalho. Já é o app mais usado do meu time.”

**Reclamações (mês 3):**
- “Tentei adicionar um comentário e ele simplesmente sumiu.”
- “Não consigo editar meus posts — o botão trava por vários segundos.”
- “O feed demora uma eternidade pra carregar. Já pensei em desinstalar.”

**Mensagem:**
O crescimento trouxe visibilidade, mas também expôs limitações técnicas que precisam ser corrigidas.

---

### Slide 5 — Momento de reflexão
**Tema:** Como vocês construiriam essa arquitetura?

**Pausa para discussão:**
Antes de revelar a escolha de George, o apresentador deve fazer os participantes refletirem sobre:
- Quais tecnologias seriam escolhidas para um MVP rápido?
- Quais padrões de banco de dados seriam mais adequados?
- Como equilibrar velocidade de lançamento com robustez futura?

**Observação importante:**
Software não nasce robusto e isso é aceitável. A engenharia de software precisa projetar para o cenário atual e evoluir conforme o sistema cresce. Um MVP superengenheirado pode comprometer a validação do produto.

**Revelação:**
A arquitetura escolhida por George inicialmente é uma arquitetura monolítica clássica.

**Componentes da arquitetura:**
- Frontend: React (CSR) consumindo APIs REST
- Backend: Node.js com camadas Controller → Service → Repository
- Banco: PostgreSQL normalizado, com transações ACID

**Dicas para o slide:**
Os questionamentos devem ser o foco na parte da interação, devem aparecer dinâmicamente e chamar a atenção num primeiro momento.
Ao avançar para a "revelação" da arquitetura, o foco deve ser a arquitetura, sendo construída aos poucos em tela para os alunos irem acompanhando.
Exemplo: visão inicial de componentes (usuário, Frontend, Backend), começam a aparecer os componentes internos do backend (serviços, banco de dados, e integrações).

![Arquitetura do sistema SEM CQRS](assets/Arquitetura do sistema SEM CQRS.png)

---

### Slide 6 — Impacto no mercado
**Tema:** Quando a arquitetura vira prejuízo financeiro

**Contexto:**
O problema de George não é exclusivo de startups ou desenvolvedores individuais. Grandes empresas sofreram perdas milionárias por gargalos semelhantes.

**Casos citados:**
- Amazon — Prime Day 2018
  - O catálogo não suportou o pico de acessos simultâneos.
  - Carrinhos e checkouts travaram por quase 2 horas.
  - Estimativa de perda: US$ 72–99 milhões em vendas.
  - Source: https://www.cnbc.com/2018/07/19/amazon-internal-documents-what-caused-prime-day-crash-company-scramble.html

- Facebook — Março de 2019
  - Queda de 14 horas afetou Facebook, Instagram e WhatsApp.
  - Perda direta de receita publicitária.
  - Estimativa: US$ 90 milhões em receita perdida.
  - Source: https://www.cnbc.com/2019/03/13/facebook-suffers-outage-related-to-core-whatsapp-and-instagram.html

- Custo médio do setor
  - Indisponibilidade pode custar entre US$ 5.600 e US$ 9.000 por minuto.
  - 9% dos visitantes não retornam após uma falha.
  - Source: [adicionar]

**Mensagem:**
A arquitetura inadequada não é apenas um problema técnico; pode se tornar um problema financeiro e de reputação.

**Dicas para o slide:**
Foco em um case por vez para discussão do apresentador. Problema e números em destaque.

> Importante: adicionar fontes para os casos citados.

---

### Slide 7 — Sessão de debug
**Tema:** Investigando a causa-raiz do gargalo

**Passo 1 — Monitoramento de CPU**
- Comando: `top -p $(pgrep postgres)`
- Resultado: PostgreSQL CPU em 98,7% e I/O Wait em 64%
- Conclusão: o banco está operando no limite, com muita espera por disco.

**Passo 2 — Consultas bloqueadas por locks**
- Comando: `SELECT count(*) FROM pg_stat_activity WHERE wait_event_type = 'Lock';`
- Resultado: 342 conexões aguardando liberação de locks
- Conclusão: escritas e leituras estão competindo por recursos e travando uma à outra.

**Passo 3 — Proporção leitura vs escrita**
- Leitura: 89% das queries
- Escrita: 11% das queries
- Conclusão: operações com perfis muito distintos disputam o mesmo recurso físico.

**Diagnóstico final:**
O backend foi escalado horizontalmente, mas o banco de dados permaneceu como ponto único de gargalo. O problema não está na aplicação em si, mas na arquitetura.

**Dicas para o slide:**
Apresentar progressivamente, dando a impressão de que todos em sala estão procurando o problema junto ao George.
Adicionar animações para deixar mais "empolgante".

---

### Slide 8 — O padrão CQRS
**Tema:** Command Query Responsibility Segregation

**Definição:**
CQRS separa operações de escrita (Commands) e leitura (Queries) em modelos, serviços e, em alguns casos, bancos diferentes.

**Command Side (escrita):**
- Focado em integridade transacional
- Valida regras de negócio
- Grava em banco normalizado, otimizado para consistência ACID

**Query Side (leitura):**
- Focado em velocidade
- Consulta bancos desnormalizados, caches e índices otimizados
- Evita JOINs complexos

**Linha do tempo do padrão:**
- 1988 — Bertrand Meyer introduz CQS em Object-Oriented Software Construction
- 2009 — Udi Dahan publica Clarified CQRS
- 2010 — Greg Young formaliza o termo CQRS no contexto de DDD
- 2011 — Martin Fowler publica uma análise definitiva sobre o padrão

**Mensagem:**
Mostrar o que o CQRS resolve e quais os trade-offs disso.

> Importante: Verificar fontes e adicionar links dos artigos/blogs para cada um dos itens apresentados na linha do tempo

---

### Slide 9 — Redesenho arquitetural com CQRS
**Tema:** O sistema do George com CQRS

**Resultado esperado:**
Com a separação entre escrita e leitura, a latência do feed cai de 1.200 ms para menos de 50 ms e os bloqueios desaparecem.

**Trade-offs do CQRS:**
- Necessidade de sincronização entre os bancos de escrita e leitura
- Dados duplicados e desnormalizados no lado da leitura
- Complexidade operacional maior
- Mudança de consistência forte para consistência eventual

**Mensagem:**
CQRS resolve a contenção, mas impõe uma nova camada de complexidade e um novo modelo de consistência.

**Dicas para o slide:**
Utilizar a arquitetura de monolito como base e evoluir para CQRS dentro do slide.
Exemplo: animar a divisão do banco de dados, adicionar as estratégias de atualização de dados, apontar os trade-offs

![Arquitetura do sistema COM CQRS](assets/Arquitetura do sistema COM CQRS.png)

---

### Slide 10 — Teorema CAP e consistência eventual
**Tema:** Fundamentos teóricos

**Teorema CAP:**
Em caso de partição de rede, um sistema distribuído precisa escolher entre consistência e disponibilidade.

**Interpretação para o CQRS:**
- O CQRS opta por disponibilidade e tolerância a partições
- Aceita consistência eventual como modelo operacional

**ACID vs BASE:**
- ACID: Atomicidade, Consistência, Isolamento, Durabilidade
- BASE: Basically Available, Soft State, Eventual Consistency

**Analogia cotidiana:**
Quando você posta uma foto no Instagram, os seguidores não veem a atualização instantaneamente. O feed converge com o tempo. Isso é consistência eventual e é aceitável para interações humanas.

**Fontes/Referências:**
Pesquisar e adicionar conceitos baseados em fontes científicas ou acadêmicas.

---

### Slide 11 — Event Sourcing
**Tema:** Padrão complementar

**Definição:**
Event Sourcing registra cada alteração de estado como um evento imutável em um log sequencial. O estado atual é reconstruído a partir da reprodução dos eventos.

**Vantagens:**
- Auditoria completa
- Replay de estado
- Desacoplamento temporal entre escrita e leitura

**Histórico:**
- 2005 — Martin Fowler formaliza Event Sourcing
- 2006 — Greg Young integra o padrão ao CQRS
- 2011 — Apache Kafka populariza o uso de logs distribuídos de eventos

**Fluxo do modelo:**
Command → Event Store → Projeção de leitura

**Exemplo de eventos:**
- UsuarioCriado
- ComunidadeCriada
- MembroAderido
- PostPublicado

**Dicas para o slide:**
Apresentar conceitualmente o Event Sourcing e exemplificar com os eventos de forma "animada".

> Importante: Verificar fontes e adicionar links dos artigos/blogs para cada um dos itens apresentados na linha do tempo

---

### Slide 12 — Casos reais de adoção
**Tema:** CQRS e sistemas de larga escala na indústria

**Amazon — DynamoDB**
- Problema: crescimento exponencial do catálogo e locks severos de leitura/escrita
- Solução: separação física de leitura e escrita, com consistência eventual como premissa

**Netflix — Microservices + CQRS**
- Problema: monólito Oracle não sustentava a escala global
- Solução: arquitetura de microserviços com CQRS, Cassandra/Elasticsearch para leitura e MySQL particionado para escritas

**Uber — Schemaless + Cassandra**
- Problema: PostgreSQL monolítico não suportava demandas globais simultâneas
- Solução: CQRS com base de escritas em MySQL e leitura em Cassandra, propagando mudanças via logs de eventos assíncronos

**Mensagem:**
Esses casos mostram que o padrão não é apenas teórico; ele aparece em sistemas reais que precisam escalar.

**Fontes/Referências:**
Pesquisar e adicionar conceitos baseados em fontes científicas ou acadêmicas.

---

### Slide 13 — Referências e encerramento
**Tema:** Bibliografia e fechamento

**Referências principais:**
- Meyer, Bertrand — Object-Oriented Software Construction
- Gilbert & Lynch — Brewer’s Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services
- Fowler — Event Sourcing
- DeCandia et al. — Dynamo: Amazon’s Highly Available Key-value Store
- Udi Dahan — Clarified CQRS
- Greg Young — CQRS Documents
- Martin Fowler — CQRS
- Kreps et al. — Kafka: A Distributed Messaging System for Log Processing
- Kleppmann — Designing Data-Intensive Applications

**Encerramento:**
A apresentação conclui que a separação entre leitura e escrita, combinada com Event Sourcing, pode ser um caminho viável para superar limitações físicas de concorrência em sistemas distribuídos modernos.

**Dicas para o slide:**
Apresentar as referências junto a uma "recapitulação" do assunto.

---

## Tom de apresentação recomendado
- Use uma linguagem técnica, mas acessível.
- Faça a narrativa parecer um caso real de crescimento de produto.
- Destaque que o problema central não é apenas performance, mas arquitetura.
- Mostre que o CQRS é uma resposta inteligente para sistemas com alta leitura e escrita concorrente.

## Dica de apresentação
Ao falar, apresente a história em camadas:
1. MVP simples e rápido
2. Crescimento e sucesso inicial
3. Falhas arquiteturais sob carga
4. Reestruturação com CQRS e Event Sourcing
5. Aprendizado de engenharia e escala
