import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "247",
      provisionId: "kpa-art-247",
      reviewStatus: "reviewed",
      summary:
        "Стаття поширює на wnioski окремі правила про компетенцію щодо суспільних організацій, повідомлення парламентарів і форму відповіді. Це точкова відсилка, а не застосування всього розділу про skargi.",
      rules: [
        {
          locator: "відсилання",
          explanation: kpaLaw.text`До wniosków відповідно застосовуються ${kpaLaw.article("230", "art. 230")}, ${kpaLaw.article("237", "art. 237 § 2")} та ${kpaLaw.article("238", "art. 238")} KPA.`,
        },
      ],
      legalEffect:
        "У зазначених питаннях wniosek обробляється за тими самими правилами, що й skarga: визначення органу для organizacji społecznej, спеціальне інформування та зміст повідомлення.",
      foreignersCase:
        "Якщо wniosek про покращення процедур для іноземців передав депутат або він стосується суспільної організації, застосовуються саме названі додаткові правила.",
    },
  ],
})
