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
      article: "43",
      provisionId: "kpa-art-43",
      reviewStatus: "reviewed",
      summary:
        "Стаття дозволяє zastępcze doręczenie дорослому domownikowi, сусідові або dozorcy за відсутності адресата, якщо вони зобов’язалися передати письмо.",
      rules: [
        {
          locator: "zd. 1",
          explanation:
            "Особа, що приймає письмо, повинна бути дорослим domownikiem, сусідом або dozorcą, підтвердити odbiór і погодитися передати його адресату.",
        },
        {
          locator: "zd. 2",
          explanation:
            "Про doręczenie сусідові або dozorcy адресата повідомляють через скриньку або повідомлення на дверях.",
        },
      ],
      legalEffect:
        "За виконання передумов письмо вважається дорученим адресату через іншу особу.",
      foreignersCase: kpaLaw.text`Якщо wezwanie іноземця прийняв сусід або domownik, для оцінки строку потрібно перевірити всі фактичні передумови ${kpaLaw.article("43", "art. 43")}, а не лише підпис на zwrotce.`,
    },
  ],
})
