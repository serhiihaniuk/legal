import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "96m",
      provisionId: "kpa-art-96m",
      reviewStatus: "reviewed",
      summary:
        "Mediator складає protokół, який фіксує перебіг і досягнуті домовленості, передає його органу та учасникам.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Protokół містить час, місце, учасників, mediatora, спосіб вирішення та підписи або причину їх відсутності.",
        },
        {
          locator: "§ 3",
          explanation:
            "Оригінал негайно надходить до organu для akt sprawy, а копії — учасникам.",
        },
      ],
      legalEffect:
        "Лише формально зафіксовані домовленості стають процесуальним результатом mediacji.",
      foreignersCase:
        "Іноземець має перевірити, чи protokół точно відображає погоджений спосіб вирішення і чи пояснено відсутній підпис.",
    },
  ],
})
