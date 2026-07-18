import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const ppsaLaw = createLegalLearningTextAuthor("ppsa")

const moduleContent: LegalLearningModule = {
  id: "parties-and-file",
  order: 2,
  title: "Сторони, представництво та матеріали справи",
  polish: "skarżący; organ; uczestnik postępowania; akta sprawy",
  provisionScope: ppsaLaw.text`${ppsaLaw.articleRange("32", "37")}, ${ppsaLaw.article("54", "54")}, ${ppsaLaw.article("133", "133")}`,
  outcome:
    "Ви правильно визначаєте процесуальні ролі, перевіряєте повноваження представника й будуєте аргумент на конкретних документах із матеріалів справи.",
  caseQuestion:
    "Хто є заявником, органом і можливим учасником, хто має право діяти від їхнього імені та де в матеріалах лежить доказ кожної тези?",
  placeInWork:
    "Після класифікації предмета й перед написанням скарги або відповіді.",
  sections: [
    {
      id: "roles",
      title: "Процесуальна роль випливає з правового зв’язку",
      paragraphs: [
        "Сторонами є заявник (skarżący) та орган, чия дія, бездіяльність або затягування оскаржуються. Інша особа може бути учасником на правах сторони, коли результат стосується її правового інтересу (interes prawny) і виконані умови закону.",
        "Фактична зацікавленість не дорівнює правовому інтересу. Родинний, трудовий або економічний зв’язок важливий лише тоді, коли конкретна норма поєднує результат справи з правами чи обов’язками цієї особи.",
      ],
      questions: [
        "Яка норма показує, що результат справи змінить право або обов’язок можливої третьої особи?",
      ],
      steps: [
        "Випишіть усіх осіб і органи з адміністративного рішення та попереднього провадження.",
        "Для кожного зазначте роль і окрему правову підставу участі.",
      ],
      evidence: [
        "оскаржене рішення, документи про участь у адміністративному провадженні та правовий інтерес",
      ],
      warning:
        "Самої практичної вигоди або сімейного зв’язку недостатньо для статусу учасника.",
    },
    {
      id: "representation-file",
      title: "Повноваження й матеріали повинні зійтися",
      paragraphs: [
        "Сторона може діяти особисто або через представника (pełnomocnik) у межах дозволеного законом кола осіб. Обсяг довіреності буває загальним, для конкретної справи або для окремих дій; при першій процесуальній дії повноваження треба належно показати суду, якщо він не може перевірити їх у доступному реєстрі.",
        "Позиція суду формується на підставі матеріалів справи (akta sprawy). Для кожної тези вкажіть конкретний документ, сторінку або електронний елемент і поясніть його значення. Якщо істотного документа немає, назвіть прогалину й належну процесуальну реакцію.",
      ],
      questions: [
        "Чи підтверджує довіреність саме ту дію, яку представник виконує, і чи є ключовий доказ у переданих матеріалах?",
      ],
      steps: [
        "Перевірте підпис, обсяг і спосіб долучення довіреності.",
        "Зіставте опис матеріалів із фактичними документами й прив’яжіть кожну правову умову до доказу.",
      ],
      evidence: [
        "довіреність, доказ її подання, опис матеріалів і копії ключових документів",
      ],
      warning:
        "Судовий розгляд не є необмеженим збиранням нової адміністративної справи; починайте з належно сформованих матеріалів.",
    },
  ],
  exercise:
    "Складіть коротку карту: особа — процесуальна роль — підстава участі — представник — документ у матеріалах.",
}

export const partiesAndFileLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ppsa:parties-and-file",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ppsa",
        moduleId: "parties-and-file",
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

export default partiesAndFileLearningModuleTopic
