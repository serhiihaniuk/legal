import { nodeById } from "./legal-index"

export type LegalMapJourneyStageId =
  | "orientation"
  | "status"
  | "route"
  | "work"
  | "filing"
  | "evidence"
  | "procedure"
  | "decision"
  | "protection"

export type LegalMapJourneyStage = {
  id: LegalMapJourneyStageId
  order: number
  title: string
  description: string
  question: string
  outcome: string
  nodeIds: readonly string[]
}

export const legalMapJourney = [
  {
    id: "orientation",
    order: 1,
    title: "Орієнтація у справі",
    description:
      "Відокремлюємо факти від юридичних понять і визначаємо, які закони регулюють результат та процедуру.",
    question:
      "Що сталося, якого результату просить особа і які норми треба перевірити?",
    outcome:
      "Хронологія фактів, сформульоване юридичне питання і перелік законів для перевірки.",
    nodeIds: [
      "start-case",
      "legal-anatomy",
      "special-vs-kpa",
      "two-keys",
      "source-check",
    ],
  },
  {
    id: "status",
    order: 2,
    title: "Особа і поточна підстава",
    description:
      "Фіксуємо громадянство, документи, законність перебування та спеціальний статус на дату кожної події.",
    question: "Хто ця особа і на якій підставі вона зараз перебуває в Польщі?",
    outcome:
      "Картка особи з чинним статусом, документами та критичними датами.",
    nodeIds: [
      "person-status",
      "entry-current-basis",
      "visa",
      "visa-free",
      "ukraine-routes-2026",
      "ukr-baseline-2026",
      "cukr-route-2026",
      "ukraine-ordinary-2026",
    ],
  },
  {
    id: "route",
    order: 3,
    title: "Мета і правовий маршрут",
    description:
      "Зіставляємо реальну головну мету перебування з конкретним видом дозволу та його умовами.",
    question: "Який статус відповідає фактичній меті й обставинам цієї особи?",
    outcome:
      "Обраний маршрут легалізації та відхилені альтернативи з поясненням причин.",
    nodeIds: [
      "goal-of-stay",
      "temporary-common",
      "temporary-goals",
      "stay-work",
      "blue-card",
      "business-stay",
      "study-research",
      "family-stay",
      "other-stay",
      "permanent-resident",
      "permanent",
      "long-term-eu",
    ],
  },
  {
    id: "work",
    order: 4,
    title: "Доступ до праці",
    description:
      "Окремо перевіряємо право працювати, інструмент легалізації праці та фактичну організацію роботи.",
    question:
      "Чи може особа виконувати саме цю роботу, для цього суб’єкта і на цих умовах?",
    outcome:
      "Визначена підстава доступу до праці, обов’язки роботодавця і ризики моделі роботи.",
    nodeIds: [
      "work-entry",
      "employer-duties",
      "work-instruments",
      "work-permit",
      "declaration",
      "seasonal",
      "delegation",
      "temporary-work",
      "outsourcing-case",
    ],
  },
  {
    id: "filing",
    order: 5,
    title: "Підготовка і подання",
    description:
      "Визначаємо компетентний organ, спосіб подання, формальні вимоги та процесуальний момент початку справи.",
    question: "Куди, коли, ким і в якій формі треба подати заяву?",
    outcome:
      "План подання: właściwy organ, канал, строк, формальні вимоги та відповідальні особи.",
    nodeIds: ["organ-party", "initiation", "mos-procedure", "pending-stay"],
  },
  {
    id: "evidence",
    order: 6,
    title: "Умови і докази",
    description:
      "Для кожної законної умови фіксуємо факт, доказ, період, джерело та можливу суперечність.",
    question: "Який доказ підтверджує кожну умову дозволу і чого ще бракує?",
    outcome:
      "Матриця умова → факт → доказ і реєстр прогалин або суперечностей.",
    nodeIds: [
      "document-matrix",
      "evidence-matrix",
      "document-types",
      "foreign-documents",
      "case-file",
      "evidence",
    ],
  },
  {
    id: "procedure",
    order: 7,
    title: "Перебіг провадження",
    description:
      "Контролюємо doręczenia, строки, wezwania, участь сторони та реакцію на бездіяльність органу.",
    question:
      "Що відбувається у справі зараз і яку процесуальну дію треба виконати наступною?",
    outcome:
      "Журнал подій, активні строки, невиконані дії та наступний процесуальний крок.",
    nodeIds: [
      "kpa-principles",
      "principle-legality",
      "principle-trust",
      "principle-participation",
      "principle-two-instance",
      "deadlines-delivery",
      "wezwanie",
      "wezwanie-workflow",
      "inactivity",
    ],
  },
  {
    id: "decision",
    order: 8,
    title: "Рішення і його наслідки",
    description:
      "Читаємо rozstrzygnięcie разом з обґрунтуванням, перевіряємо встановлені факти, право, строки та pouczenie.",
    question: "Що саме вирішив organ, чому і з яким практичним наслідком?",
    outcome:
      "Розкладене рішення: встановлені факти, норми, rozstrzygnięcie, мотиви та строки.",
    nodeIds: ["decision-appeal", "decision-reading", "decision-workflow"],
  },
  {
    id: "protection",
    order: 9,
    title: "Оскарження і судовий захист",
    description:
      "Добираємо звичайний, надзвичайний або судовий засіб захисту до виду акта, вади та строку.",
    question:
      "Який засіб захисту доступний, у який строк і якого результату можна вимагати?",
    outcome:
      "План оскарження або виконання рішення з адресатом, строком і żądaniem.",
    nodeIds: [
      "appeal",
      "complaint",
      "extraordinary-wsa",
      "reopening",
      "invalidity",
      "wsa",
    ],
  },
] satisfies readonly LegalMapJourneyStage[]

export const unknownLegalMapJourneyNodeIds = legalMapJourney.flatMap((stage) =>
  stage.nodeIds
    .filter((nodeId) => !nodeById.has(nodeId))
    .map((nodeId) => ({ stageId: stage.id, nodeId }))
)

export function legalMapJourneyStageForNode(nodeId?: string) {
  if (!nodeId) return undefined
  return legalMapJourney.find((stage) => stage.nodeIds.includes(nodeId))
}
