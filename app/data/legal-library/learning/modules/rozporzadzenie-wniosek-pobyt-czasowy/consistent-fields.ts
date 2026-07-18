import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const moduleContent: LegalLearningModule = {
  id: "consistent-fields",
  order: 3,
  title: "Заповнювати поля як одну історію фактів",
  polish: "spójność danych i oświadczeń",
  provisionScope: "поля відповідного wzoru та załącznika",
  outcome:
    "Ви знаходите суперечності між formularzem, załącznikami та доказами до подання.",
  caseQuestion:
    "Чи описують усі документи ту саму особу, мету, podmiot, місце, період і фактичну діяльність?",
  placeInWork:
    "Це доказовий контроль після первинного заповнення і до підписання комплекту.",
  sections: [
    {
      id: "fact-table",
      title: "Одна таблиця ключових фактів",
      paragraphs: [
        "Одна й та сама обставина може з’являтися в кількох місцях. Розбіжність не завжди означає неправду, але її потрібно пояснити до того, як орган поставить питання.",
      ],
      evidence: [
        "паспорт і попередні документи pobytowe",
        "договір або інший документ, що описує мету",
        "дані podmiotu і документи підписанта",
        "дати, адреси та періоди в załącznikach",
      ],
    },
    {
      id: "unknown-facts",
      title: "Не вгадувати відсутні дані",
      paragraphs: [
        "Якщо факт невідомий, встановіть його з первинного документа або поставте питання відповідальній особі. Не переносіть дані зі старої справи без перевірки.",
      ],
      questions: [
        "Звідки походить кожна дата?",
        "Хто підтверджує умови діяльності або праці?",
        "Чи змінилися факти після підготовки документів?",
      ],
      warning:
        "Одна узгоджена помилка, скопійована в усі документи, не стає через це правдивим фактом.",
    },
  ],
  exercise:
    "Порівняйте п’ять ключових фактів у головному wniosku, załączniku і первинному доказі; кожну різницю поясніть або виправте.",
}

export const consistentFieldsLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:rozporzadzenie-wniosek-pobyt-czasowy:consistent-fields",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
        moduleId: "consistent-fields",
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
              sourceId: "eli-rozporzadzenie-wniosek-pobyt-czasowy",
            },
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

export default consistentFieldsLearningModuleTopic
