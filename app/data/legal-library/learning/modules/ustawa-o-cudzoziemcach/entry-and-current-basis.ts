import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")

const moduleContent: LegalLearningModule = {
  id: "entry-and-current-basis",
  order: 1,
  title: "В’їзд не дорівнює поточній підставі перебування",
  polish: "wjazd, tytuł pobytowy, podstawa pobytu, cel pobytu",
  provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("6", "16", { start: "art. 6" })} та ${foreignersLaw.articleRange("98", "109", { start: "art. 98" })}`,
  outcome:
    "Уміти розкласти справу на спосіб wjazd, чинний документ, правову підставу і фактичний cel pobytu.",
  caseQuestion:
    "На якій підставі osoba wjechała, на якій перебуває тепер і чи відповідає фактичний cel pobytu заявленому?",
  placeInWork:
    "Перший етап консультації: побудуй часову лінію до вибору виду zezwolenie.",
  sections: [
    {
      id: "separate-events",
      title: "Розділи події в часі",
      paragraphs: [
        "Статутна рамка: закон окремо регулює wjazd і окремо zezwolenie na pobyt. Документ для wjazd не стає автоматично підставою для довгого pobytu.",
        "Практична перевірка: запиши дату і спосіб wjazd, візу або інший документ, попередній статус, подану заяву та фактичні обставини після wjazd.",
      ],
      questions: [
        "Який документ був пред’явлений на granica?",
        "Який документ або статус діє на дату аналізу?",
      ],
      steps: [
        "Скласти chronologia.",
        "Назвати кожну підставу окремо.",
        "Порівняти заявлений і фактичний cel pobytu.",
      ],
      evidence: [
        "Копія паспорта зі штампами.",
        "Віза, karta pobytu або інший документ.",
        "Підтвердження фактичного pobytu і celu.",
      ],
      warning:
        "Сам wjazd або подання заяви не доводить автоматичного права на будь-який інший вид pobytu чи pracę.",
    },
    {
      id: "status-matrix",
      title: "Зроби матрицю статусу",
      paragraphs: [
        "Статутна рамка: наслідки залежать від конкретної правової підстави та її умов, а не лише від назви документа.",
        "Практична перевірка: у чотирьох колонках зафіксуй факт, норму, доказ і невідоме питання. Не підміняй припущення встановленим статусом.",
      ],
      questions: [
        "Що підтверджено документом, а що лише повідомлено особою?",
        "Чи змінився cel pobytu після wjazd?",
      ],
      steps: [
        "Відокремити факт від висновку.",
        "Знайти норму для кожного періоду.",
        "Позначити ризики та потрібні докази.",
      ],
      evidence: [
        "Хронологія документів.",
        "Договори, навчання, сімейні та інші факти, що пояснюють cel pobytu.",
      ],
      warning:
        "Для висновку потрібні повні факти, дата події та редакція закону, застосовна саме до цього періоду.",
    },
  ],
  exercise:
    "Для анонімного кейсу склади chronologia з п’яти дат і підпиши для кожної події dokument, podstawa pobytu, cel pobytu та доказ.",
}

export const entryAndCurrentBasisLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:entry-and-current-basis",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "entry-and-current-basis",
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

export default entryAndCurrentBasisLearningModuleTopic
