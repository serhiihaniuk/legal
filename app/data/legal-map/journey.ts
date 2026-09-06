import { nodeById } from "./index"

export type LegalMapChapterId =
  | "orientation"
  | "status"
  | "route"
  | "work"
  | "filing"
  | "evidence"
  | "procedure"
  | "decision"
  | "protection"
export type LegalMapChapter = {
  id: LegalMapChapterId
  order: number
  title: string
  description: string
  nodeIds: readonly string[]
}

// Existing chapter IDs retain the published #stage-* anchor destinations.
export const legalMapChapters = [
  {
    id: "orientation",
    order: 1,
    title: "Як пов'язані факти, норми та докази",
    description:
      "Фактична історія, юридичне питання і текст норми виконують різні ролі. Тут пояснено, як виділити умови з норми, знайти відповідну редакцію закону та поєднати спеціальні правила з KPA.",
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
    title: "Особа, в'їзд і поточне перебування",
    description:
      "Паспорт описує особу, а віза, безвізовий в'їзд, status UKR і перебування під час процедури порушують різні питання. Розділ пояснює поточне становище людини та значення дат у її історії перебування.",
    nodeIds: [
      "person-status",
      "entry-current-basis",
      "visa",
      "visa-free",
      "ukr-baseline-2026",
      "pending-stay",
    ],
  },
  {
    id: "route",
    order: 3,
    title: "Підстави та види дозволів на перебування",
    description:
      "Робота, навчання, сім'я та інші обставини ведуть до різних питань про дозвіл. Тут зібрано порівняння цілей тимчасового перебування, pobyt stały, статусу rezydenta UE та окремих маршрутів для громадян України.",
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
      "ukraine-routes-2026",
      "cukr-route-2026",
      "ukraine-ordinary-2026",
    ],
  },
  {
    id: "work",
    order: 4,
    title: "Право працювати та обов'язки роботодавця",
    description:
      "Розділ розрізняє доступ людини до праці, документи роботодавця та фактичну організацію роботи. Поруч із дозволами й oświadczeniem пояснено сезонну працю, delegowanie, роботу через агенцію та outsourcing.",
    nodeIds: [
      "work-entry",
      "work-instruments",
      "work-permit",
      "declaration",
      "seasonal",
      "delegation",
      "employer-duties",
      "temporary-work",
      "outsourcing-case",
    ],
  },
  {
    id: "evidence",
    order: 5,
    title: "Документи, умови та оцінка доказів",
    description:
      "Матриця умов показує, який факт має підтвердити кожен матеріал. Теми цього розділу пояснюють види доказів, документи з-за кордону, матеріали провадження та оцінку суперечностей між ними.",
    nodeIds: [
      "document-matrix",
      "document-types",
      "foreign-documents",
      "case-file",
      "evidence",
    ],
  },
  {
    id: "filing",
    order: 6,
    title: "Учасники справи та подання заяви",
    description:
      "Хто є стороною, як діє представник і як визначається компетентний орган? Після цих понять розділ пояснює початок провадження, подання через MOS і відмінність між формальною повнотою заяви та доведеністю умови.",
    nodeIds: ["organ-party", "initiation", "mos-procedure", "evidence-matrix"],
  },
  {
    id: "procedure",
    order: 7,
    title: "Листування, строки та перебіг провадження",
    description:
      "Doręczenie визначає значення отриманого листа для строків, а зміст wezwania пояснює, якої відповіді очікує орган. Тут також розглянуто участь сторони, обов'язки органу та бездіяльність. До цих тем повертаються протягом усієї справи.",
    nodeIds: [
      "kpa-principles",
      "principle-legality",
      "principle-trust",
      "principle-participation",
      "deadlines-delivery",
      "wezwanie",
      "wezwanie-workflow",
      "inactivity",
    ],
  },
  {
    id: "decision",
    order: 8,
    title: "Рішення та його наслідки",
    description:
      "Резолютивна частина повідомляє, що вирішив орган, а обґрунтування пояснює факти, докази й застосоване право. Наявні теми допомагають розрізняти види актів і читати рішення разом з інструкцією про оскарження.",
    nodeIds: ["decision-appeal", "decision-reading"],
  },
  {
    id: "protection",
    order: 9,
    title: "Оскарження та інші засоби захисту",
    description:
      "Odwołanie, zażalenie, надзвичайний перегляд і звернення до WSA мають різні предмети. Розділ порівнює ці механізми, пояснює дві інстанції та остаточність рішення. Судова тема пов'язана також із бездіяльністю під час провадження.",
    nodeIds: [
      "principle-two-instance",
      "appeal",
      "complaint",
      "extraordinary-wsa",
      "reopening",
      "invalidity",
      "wsa",
    ],
  },
] satisfies readonly LegalMapChapter[]

export const legalMapCompatibilityDestinations: ReadonlyMap<string, string> =
  new Map([
    ["study-loop", "/study"],
    [
      "decision-workflow",
      "/map/decision-reading#node-section-completed-analysis",
    ],
  ])

export function legalMapChapterForNode(nodeId?: string) {
  return legalMapChapters.find((chapter) =>
    chapter.nodeIds.includes(nodeId ?? "")
  )
}

export function legalMapChapterForHash(hash: string) {
  return legalMapChapters.find((chapter) => hash === `#stage-${chapter.id}`)
}

export const legalMapTopicCount = legalMapChapters.reduce(
  (total, chapter) => total + chapter.nodeIds.length,
  0
)

export function legalMapChapterNodes(chapter: LegalMapChapter) {
  return chapter.nodeIds.map((id) => {
    const node = nodeById.get(id)
    if (!node)
      throw new Error(`Unknown map topic in chapter ${chapter.id}: ${id}`)
    return node
  })
}
