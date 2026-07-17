import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")

const moduleContent: LegalLearningModule = {
  id: "refusal-withdrawal-expiry-remedies",
  order: 8,
  title: "Odmowa, cofnięcie, wygaśnięcie та засоби захисту",
  polish: "odmowa udzielenia, cofnięcie zezwolenia, wygaśnięcie, odwołanie",
  provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("99", "103", { start: "art. 99" })} та ${foreignersLaw.articleRange("198", "220", { start: "art. 198" })}`,
  outcome:
    "Уміти відрізнити вид негативного наслідку, його підставу, момент дії та доступний засіб захисту.",
  caseQuestion:
    "Це odmowa, cofnięcie чи wygaśnięcie, і що саме написано про оскарження?",
  placeInWork: "Розбір рішення та підготовка процесуальної реакції.",
  sections: [
    {
      id: "name-the-effect",
      title: "Назви наслідок точно",
      paragraphs: [
        "Статутна рамка: odmowa udzielenia, cofnięcie zezwolenia та wygaśnięcie — різні юридичні конструкції; їх не можна об’єднати словом «відмова».",
        "Практична перевірка: прочитай резолютивну частину, правову підставу, факти, мотиви та момент, з якого орган виводить наслідок.",
      ],
      questions: [
        "Який термін ужив орган у рішенні?",
        "Яка умова порушена або не доведена?",
      ],
      steps: [
        "Виписати вид рішення.",
        "Зіставити мотиви з доказами.",
        "Визначити практичний наслідок для pobytu.",
      ],
      evidence: [
        "Повний текст рішення.",
        "Доказ вручення.",
        "Матеріали, на які посилається орган.",
      ],
      warning:
        "Назва листа або усне пояснення не замінює аналізу повного рішення та його pouczenie.",
    },
    {
      id: "remedy-route",
      title: "Знайди właściwy środek zaskarżenia",
      paragraphs: [
        "Статутна рамка: засіб захисту та його умови залежать від виду рішення, органу і змісту pouczenie; закон не дає універсальної формули для кожної справи.",
        "Практична перевірка: зафіксуй дату вручення, орган, назву засобу, адресата, спосіб подання та наслідки для побуту, не вигадуючи строк без перевірки.",
      ],
      questions: [
        "Чи вказано odwołanie, zażalenie або інший środek zaskarżenia?",
        "Що треба просити: скасувати, змінити, поновити чи перевірити рішення?",
      ],
      steps: [
        "Прочитати pouczenie.",
        "Перевірити компетентний орган і порядок подання.",
        "Підготувати аргументи проти конкретних мотивів.",
      ],
      evidence: [
        "Рішення та підтвердження вручення.",
        "Докази виконання умов.",
        "Копія поданого środka zaskarżenia.",
      ],
      warning:
        "Не покладайся на загальний шаблон: наслідки подання та можливість pobytu треба перевіряти за рішенням і законом.",
    },
  ],
  exercise:
    "Розбери анонімне рішення у таблиці: вид наслідку, мотив, доказ органу, контрдоказ, pouczenie, наступна процесуальна дія.",
}

export const refusalWithdrawalExpiryRemediesLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:refusal-withdrawal-expiry-remedies",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "refusal-withdrawal-expiry-remedies",
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

export default refusalWithdrawalExpiryRemediesLearningModuleTopic
