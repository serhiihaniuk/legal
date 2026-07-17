import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")

const moduleContent: LegalLearningModule = {
  id: "permanent-and-eu-long-term-resident",
  order: 6,
  title: "Pobyt stały та rezydent długoterminowy UE",
  polish: "zezwolenie na pobyt stały, rezydent długoterminowy UE",
  provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("195", "220", { start: "art. 195" })}`,
  outcome:
    "Уміти відрізняти дві самостійні підстави довготривалого статусу і перевіряти їхні власні умови.",
  caseQuestion:
    "Чи відповідають факти саме умовам pobyt stały, чи умовам rezydent długoterminowy UE?",
  placeInWork:
    "Оцінка переходу від тимчасового статусу до більш сталого статусу.",
  sections: [
    {
      id: "two-statuses",
      title: "Не ототожнюй два статуси",
      paragraphs: [
        "Статутна рамка: pobyt stały і zezwolenie dla rezydenta długoterminowego UE регулюються окремими блоками норм та мають різні умови.",
        "Практична перевірка: почни з історії pobytu, підстави, перерв, доходу, страхування та інших умов, які прямо стосуються обраного статусу.",
      ],
      questions: [
        "Який статус відповідає фактам і правовій підставі особи?",
        "Які періоди pobytu можна врахувати саме для цієї процедури?",
      ],
      steps: [
        "Обрати один статус для первинної перевірки.",
        "Виписати його умови.",
        "Окремо перевірити альтернативний статус.",
      ],
      evidence: [
        "Хронологія законного pobytu.",
        "Документи про доходи та страхування, якщо вони потрібні для статусу.",
        "Документи про спеціальну підставу pobyt stały, якщо вона заявлена.",
      ],
      warning:
        "Тривалість перебування або наявність попередньої karty pobytu не створює автоматичного права на обраний статус.",
    },
    {
      id: "continuity-and-conditions",
      title: "Перевір безперервність і умови",
      paragraphs: [
        "Статутна рамка: закон визначає умови статусу та випадки, коли дозвіл не надається або може бути втрачений.",
        "Практична перевірка: не підсумовуй роки механічно; відміть кожну відсутність, зміну статусу та документ, що підтверджує підставу врахування.",
      ],
      questions: [
        "Які періоди слід перевірити окремо?",
        "Чи є обставина, що перериває або змінює оцінку?",
      ],
      steps: [
        "Побудувати календар pobytu.",
        "Зіставити його з умовами статусу.",
        "Знайти прогалини до подання заяви.",
      ],
      evidence: [
        "Паспорти та документи pobyt.",
        "Дані про в’їзди й виїзди.",
        "Докази доходу, страхування та інтеграції, коли це належить до умов.",
      ],
      warning:
        "Висновок залежить від повної історії pobytu та редакції норм, а не від приблизного підрахунку років.",
    },
  ],
  exercise:
    "На умовній часовій шкалі познач періоди pobytu, виїзди й документи, а потім склади два окремі списки умов для pobyt stały та rezydent długoterminowy UE.",
}

export const permanentAndEuLongTermResidentLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:permanent-and-eu-long-term-resident",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "permanent-and-eu-long-term-resident",
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

export default permanentAndEuLongTermResidentLearningModuleTopic
