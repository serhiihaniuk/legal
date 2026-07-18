import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const ppsaLaw = createLegalLearningTextAuthor("ppsa")

const moduleContent: LegalLearningModule = {
  id: "scope",
  order: 1,
  title: "Коли справу контролює адміністративний суд",
  polish: "sprawa sądowoadministracyjna; skarga",
  provisionScope: ppsaLaw.text`${ppsaLaw.articleRange("1", "3")}`,
  outcome:
    "Ви вмієте відрізнити адміністративну проблему від предмета судової скарги та спочатку визначаєте, що саме суд може перевірити.",
  caseQuestion:
    "Який акт, дія, бездіяльність або затягування органу є предметом спору і до якої категорії судового контролю воно належить?",
  placeInWork:
    "Початок аналізу: до строку й форми скарги потрібно правильно класифікувати предмет контролю.",
  sections: [
    {
      id: "classify",
      title: "Від факту до предмета скарги",
      paragraphs: [
        "Почніть не з назви документа, а з події: орган видав адміністративне рішення (decyzja), постановив ухвалу (postanowienie), вчинив іншу дію або не діє. Судова адміністративна справа не є новим розглядом заяви про перебування; це контроль законності визначеної діяльності публічної адміністрації.",
        "Після встановлення факту зіставте його з категорією скарги (skarga), передбаченою p.p.s.a. Лише потім перевіряйте спеціальну умову допустимості. Схожі листи органу можуть мати різну правову природу, тому заголовок документа не замінює аналіз його змісту.",
      ],
      questions: [
        "Який конкретний правовий наслідок створив або не створив орган?",
      ],
      steps: [
        "Зафіксуйте автора, дату, зміст і спосіб вручення документа або період бездіяльності.",
        "Назвіть правову категорію предмета скарги та знайдіть її в межах судового контролю.",
      ],
      evidence: [
        "повний документ органу з обґрунтуванням, підтвердження вручення, заява та листування про перебіг справи",
      ],
      warning:
        "Рамка судового контролю не визначає автоматично строк, маршрут або можливий результат скарги.",
    },
    {
      id: "court-effect",
      title: "Від предмета до можливого судового наслідку",
      paragraphs: [
        "Коли предмет визначено, сформулюйте порушення як зв’язаний ланцюг: факт, правове поняття, порушена норма, документ у матеріалах, дія суду та її процесуальний наслідок. Такий ланцюг показує, чому справа належить адміністративному суду й що саме він має перевірити.",
        "WSA контролює законність, але не обіцяє бажаний дозвіл на перебування. Навіть скасування рішення часто повертає справу органу, який повинен провести новий розгляд у межах правової оцінки суду.",
      ],
      questions: [
        "Чи просите ви перевірити рішення, інший акт, бездіяльність або затягування?",
      ],
      steps: [
        "Сформулюйте одну точну вимогу до суду, сумісну з видом предмета.",
        "Окремо запишіть, яке адміністративне питання залишиться органу після судового рішення.",
      ],
      evidence: [
        "текст вимоги, оскаржений акт або доказ бездіяльності та матеріальна норма справи",
      ],
      warning:
        "Судовий контроль і право на конкретний адміністративний результат — різні юридичні питання.",
    },
  ],
  exercise:
    "На анонімізованому документі органу напишіть чотири речення: факт, категорія судового контролю, доказ і можливий процесуальний наслідок.",
}

export const scopeLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ppsa:scope",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ppsa",
        moduleId: "scope",
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
            reference: { kind: "official-source", sourceId: "eli-ppsa" },
            locator: "module provision scope",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: moduleContent,
  })

export default scopeLearningModuleTopic
