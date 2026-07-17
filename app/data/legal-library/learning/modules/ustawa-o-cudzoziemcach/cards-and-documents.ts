import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")

const moduleContent: LegalLearningModule = {
  id: "cards-and-documents",
  order: 7,
  title: "Karta pobytu та інші документи",
  polish: "karta pobytu, dokument podróży, dokumenty cudzoziemca",
  provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("229", "249", { start: "art. 229" })}`,
  outcome:
    "Уміти визначити функцію кожного документа, його чинність і дію після втрати, зміни даних або завершення статусу.",
  caseQuestion:
    "Що саме підтверджує документ, до якої дати та які дії потрібні при зміні обставин?",
  placeInWork:
    "Перевірка документів перед поїздкою, працею, заявою або відповіддю органу.",
  sections: [
    {
      id: "document-function",
      title: "Прочитай документ за функцією",
      paragraphs: [
        "Статутна рамка: karta pobytu засвідчує визначений законом статус або факт, але її функцію не слід розширювати поза текстом закону.",
        "Практична перевірка: перевір ім’я, номер, вид документа, строк, примітки, пов’язані рішення та відповідність паспорту.",
      ],
      questions: [
        "Що підтверджує саме цей dokument?",
        "Чи збігаються дані документа з паспортом і рішенням?",
      ],
      steps: [
        "Визначити вид документа.",
        "Прочитати строк і примітки.",
        "Порівняти з рішенням та фактичним статусом.",
      ],
      evidence: [
        "Оригінал або копія karty pobytu.",
        "Паспорт і рішення органу.",
        "Підтвердження повідомлення про зміну даних або втрату.",
      ],
      warning:
        "Наявність картки не доводить безумовного права на wjazd, pracę або продовження статусу поза її правовими умовами.",
    },
    {
      id: "lost-or-changed",
      title: "Втрата або зміна даних",
      paragraphs: [
        "Статутна рамка: закон передбачає окремі дії щодо документів, коли вони втрачені, пошкоджені, застаріли або містять неправильні дані.",
        "Практична перевірка: одразу зафіксуй подію, перевір компетентний орган і спосіб повідомлення, а також наслідки для поїздки та підтвердження статусу.",
      ],
      questions: [
        "Яка саме подія сталася — втрата, пошкодження чи зміна даних?",
        "Який доказ подання повідомлення або заяви залишився?",
      ],
      steps: [
        "Зафіксувати подію та дату.",
        "Перевірити спеціальну процедуру.",
        "Зберегти підтвердження звернення.",
      ],
      evidence: [
        "Повідомлення про втрату або зміну.",
        "Документ, що посвідчує особу.",
        "Підтвердження звернення до органу.",
      ],
      warning:
        "Не подорожуй і не пояснюй статус лише за усною інформацією; спершу перевір чинність документа та офіційні наслідки.",
    },
  ],
  exercise:
    "Перевір зразок karty pobytu без персональних даних за шістьма полями: вид, номер, строк, примітка, відповідність паспорту, наступна дія.",
}

export const cardsAndDocumentsLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:cards-and-documents",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "cards-and-documents",
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

export default cardsAndDocumentsLearningModuleTopic
