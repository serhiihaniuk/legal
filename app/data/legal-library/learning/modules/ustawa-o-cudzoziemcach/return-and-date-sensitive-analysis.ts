import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")

const moduleContent: LegalLearningModule = {
  id: "return-and-date-sensitive-analysis",
  order: 9,
  title: "Powrót і аналіз за датою",
  polish:
    "zobowiązanie do powrotu, zakaz ponownego wjazdu, przepisy przejściowe",
  provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("294", "353", { start: "art. 294" })}`,
  outcome:
    "Уміти аналізувати справу за датою кожної події, чинною редакцією та окремим питанням про powrót.",
  caseQuestion:
    "Яке право діяло на дату події, який статус є чинним тепер і чи виникли підстави для процедури powrót?",
  placeInWork:
    "Фінальна перевірка ризиків перед висновком або терміновою процесуальною дією.",
  sections: [
    {
      id: "date-matrix",
      title: "Побудуй матрицю дат",
      paragraphs: [
        "Статутна рамка: застосовна норма залежить від дати wjazd, заяви, рішення, зміни обставин і фактичного wyjazd, а також від przepisów przejściowych.",
        "Практична перевірка: для кожної події запиши дату, редакцію закону, документ, факт і невідомий наслідок; не перенось сьогоднішнє правило на минулу подію без перевірки.",
      ],
      questions: [
        "Яка дата є юридично визначальною для цієї норми?",
        "Чи діяли на той момент przepisy przejściowe або спеціальний режим?",
      ],
      steps: [
        "Зібрати всі ключові дати.",
        "Встановити застосовну редакцію.",
        "Перевірити перехідні правила та документи.",
      ],
      evidence: [
        "Паспорт і підтвердження wjazd/wyjazd.",
        "Заяви, рішення, вручення та договори.",
        "Офіційний текст застосовної редакції.",
      ],
      warning:
        "Без дати і редакції не можна чесно назвати норму чинною для конкретної події.",
    },
    {
      id: "return-risk",
      title: "Окремо перевір powrót",
      paragraphs: [
        "Статутна рамка: zobowiązanie do powrotu, можливий zakaz ponownego wjazdu та виконання рішення мають окремі умови й наслідки.",
        "Практична перевірка: з’ясуй, чи є рішення про powrót, хто його видав, які факти покладені в основу, який статус і документи існують та що зазначено в pouczenie.",
      ],
      questions: [
        "Чи є окреме рішення про zobowiązanie do powrotu?",
        "Чи не змішано його з odmowa або завершенням pobyt?",
      ],
      steps: [
        "Знайти всі рішення про pobyt і powrót.",
        "Порівняти дати та правові підстави.",
        "Перевірити доступний środek zaskarżenia і практичний ризик.",
      ],
      evidence: [
        "Рішення про powrót і доказ вручення.",
        "Документи статусу pobyt.",
        "Докази виїзду або обставин, що перешкоджають висновку.",
      ],
      warning:
        "Навчальний чекліст не замінює аналізу повного рішення; результат залежить від фактів, дат і актуального права.",
    },
  ],
  exercise:
    "Побудуй chronologia для кейсу з простроченим документом: окремо познач status pobytu, рішення про powrót, дати вручення і питання, які ще треба перевірити.",
}

export const returnAndDateSensitiveAnalysisLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:return-and-date-sensitive-analysis",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "return-and-date-sensitive-analysis",
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

export default returnAndDateSensitiveAnalysisLearningModuleTopic
