import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const ppsaLaw = createLegalLearningTextAuthor("ppsa")

const moduleContent: LegalLearningModule = {
  id: "review-and-suspension",
  order: 4,
  title: "Межі контролю WSA та тимчасове зупинення",
  polish: "granice kontroli sądu; wstrzymanie wykonania",
  provisionScope: ppsaLaw.text`${ppsaLaw.article("61")}, ${ppsaLaw.articleRange("134", "135", { start: "134" })}`,
  outcome:
    "Ви відділяєте перевірку законності від тимчасового захисту й для кожного механізму подаєте власний факт, норму, доказ і вимогу.",
  caseQuestion:
    "Яку помилку органу суд має усунути та який конкретний ризик потребує окремого зупинення виконання?",
  placeInWork:
    "Після подання скарги: підготовка аргументів по суті та, за потреби, окремої заяви про тимчасовий захист.",
  sections: [
    {
      id: "review",
      title:
        "Суд не зв’язаний формулюванням закидів, але сторона має пояснювати",
      paragraphs: [
        "WSA вирішує справу в її межах і, крім спеціального винятку, не зв’язаний закидами, вимогами та правовою підставою, які назвала сторона. Це дозволяє суду побачити інше порушення права, але не звільняє заявника від ясного зв’язку між фактом, нормою, доказом і впливом помилки на результат.",
        "Для остаточного усунення порушення суд може охопити пов’язані акти й дії в межах тієї самої справи, якщо це необхідно. Цей інструмент не дозволяє суду довільно перебрати компетенцію органу й видати адміністративний дозвіл замість нього.",
      ],
      questions: [
        "Який документ у матеріалах показує порушення та чому воно вплинуло на адміністративний результат?",
      ],
      steps: [
        "Сформулюйте окремо матеріальну й процесуальну помилки.",
        "Покажіть, який законний судовий наслідок усуне кожну з них у межах справи.",
      ],
      evidence: [
        "рішення з обґрунтуванням, матеріали адміністративної справи й точна норма, яку застосував орган",
      ],
      warning:
        "Широкі межі контролю не означають, що WSA встановлює всю фактичну історію замість органу.",
    },
    {
      id: "suspension",
      title: "Зупинення потребує окремого доказу ризику",
      paragraphs: [
        "Подання скарги (skarga) не зупиняє виконання акта автоматично. Для зупинення виконання (wstrzymanie wykonania) потрібно подати належну заяву та зробити правдоподібною небезпеку значної шкоди або наслідків, які важко відвернути чи усунути.",
        "Тимчасовий захист відповідає лише на питання, що має відбуватися до рішення суду. Він не підтверджує незаконність акта по суті й припиняється за правилами закону після відповідного судового результату.",
      ],
      questions: [
        "Яка дія виконання може настати, коли саме та який документ показує тяжкість або незворотність наслідку?",
      ],
      steps: [
        "Опишіть часовий зв’язок між виконанням акта й конкретною шкодою.",
        "Додайте докази до окремої заяви (wniosek) і паралельно продовжуйте аргументацію основної скарги (skarga).",
      ],
      evidence: [
        "оскаржений акт, повідомлення про виконання та документи про конкретну фінансову, сімейну або іншу шкоду",
      ],
      warning:
        "Загальна тривога, складне становище або сама незгода з рішенням не замінюють доказу законних умов зупинення (wstrzymanie).",
    },
  ],
  exercise:
    "Напишіть два окремі абзаци: перший про порушення законності, другий про ризик виконання. Перевірте, щоб факти й докази не підміняли один одного.",
}

export const reviewAndSuspensionLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ppsa:review-and-suspension",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ppsa",
        moduleId: "review-and-suspension",
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

export default reviewAndSuspensionLearningModuleTopic
