import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")

const moduleContent: LegalLearningModule = {
  id: "family-study-research-business",
  order: 5,
  title: "Сім’я, навчання, дослідження та бізнес",
  polish: "pobyt rodzinny, studia, naukowiec, działalność gospodarcza",
  provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("114", "189", { start: "art. 114" })}`,
  outcome:
    "Уміти розрізняти спеціальні категорії pobyt czasowy за їхньою реальною функцією та умовами.",
  caseQuestion:
    "Яка категорія відповідає головній обставині: rodzina, studia, badania чи działalność gospodarcza?",
  placeInWork:
    "Порівняльний етап, коли факти можуть підходити до кількох категорій.",
  sections: [
    {
      id: "category-map",
      title: "Побудуй карту категорії",
      paragraphs: [
        "Статутна рамка: спеціальні види zezwolenie мають власні умови, обсяг доказування та наслідки для pobytu.",
        "Практична перевірка: для кожної категорії запиши головну особу або установу, мету, період, фінансування та документ, що підтверджує зв’язок.",
      ],
      questions: [
        "Хто є центром обставини — член rodzina, uczelnia, jednostka badawcza чи бізнес?",
        "Який факт відрізняє цю категорію від сусідньої?",
      ],
      steps: [
        "Назвати головну обставину.",
        "Зіставити її з вимогами категорії.",
        "Перевірити спеціальні та загальні умови.",
      ],
      evidence: [
        "Документи про родинний зв’язок.",
        "Підтвердження studia або badań.",
        "Документи działalność gospodarcza та її фактичності.",
      ],
      warning:
        "Одна обставина може виглядати подібно до кількох категорій, але результат залежить від усіх умов і реального celu pobytu.",
    },
    {
      id: "family-and-economic-reality",
      title: "Перевір реальність зв’язку",
      paragraphs: [
        "Статутна рамка: документ про зв’язок із сім’єю, навчанням, дослідженням або бізнесом є частиною доказування, але не замінює перевірку інших умов.",
        "Практична перевірка: порівняй заявлену діяльність із фактичними платежами, місцем, графіком, контактами й іншими доступними доказами.",
      ],
      questions: [
        "Чи існує зв’язок не лише на папері?",
        "Чи пояснені перерви, зміни та суперечності?",
      ],
      steps: [
        "Зібрати первинні документи.",
        "Перевірити їхню узгодженість.",
        "Підготувати пояснення нестандартних фактів.",
      ],
      evidence: [
        "Офіційні довідки та договори.",
        "Підтвердження фактичного виконання діяльності.",
        "Пояснення змін обставин.",
      ],
      warning:
        "Формальна реєстрація шлюбу, навчання або бізнесу сама по собі не гарантує позитивного рішення.",
    },
  ],
  exercise:
    "Склади порівняльну таблицю для чотирьох категорій: головна мета, ключова особа/установа, три докази, типова прогалина.",
}

export const familyStudyResearchBusinessLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:family-study-research-business",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "family-study-research-business",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: moduleContent.provisionScope,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "module provision scope",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: moduleContent,
  })

export default familyStudyResearchBusinessLearningModuleTopic
