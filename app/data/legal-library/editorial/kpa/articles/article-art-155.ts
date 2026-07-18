import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "155",
      provisionId: "kpa-art-155",
      reviewStatus: "reviewed",
      summary:
        "Остаточну decyzję, за якою сторона набула право, можна змінити або скасувати лише за її згодою та за додаткових законних умов.",
      rules: [
        {
          locator: "єдиний блок",
          explanation: kpaLaw.text`Потрібні згода сторони, відсутність заборони lex specialis та суспільний або słuszny інтерес; застосовується форма decyzji з ${kpaLaw.article("154", "art. 154 § 2")}.`,
        },
      ],
      legalEffect:
        "Набуте право захищене від односторонньої зміни цим режимом, але може бути переглянуте за згодою його носія.",
      foreignersCase:
        "Для зміни чинної позитивної decyzji щодо іноземця недостатньо практичної зручності: потрібні згода, допустимість за спеціальним законом і передбачений інтерес.",
    },
  ],
})
