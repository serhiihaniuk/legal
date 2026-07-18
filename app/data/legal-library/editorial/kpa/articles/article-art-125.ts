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
      article: "125",
      provisionId: "kpa-art-125",
      reviewStatus: "reviewed",
      summary:
        "Оскаржувані postanowienia вручаються письмово, а акти зі skargą або sprzeciwem — також із pouczeniem та uzasadnieniem.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Письмово вручаються postanowienia із zażaleniem, skargą або sprzeciwem.",
        },
        {
          locator: "§ 2",
          explanation: kpaLaw.text`У випадках ${kpaLaw.article("14", "art. 14 § 2")} можливе усне оголошення.`,
        },
        {
          locator: "§ 3",
          explanation:
            "Для skargi й sprzeciwu разом із актом надаються інструкція та фактичні й правові мотиви.",
        },
      ],
      legalEffect:
        "Належне doręczenie забезпечує стороні зміст акта та інформацію для доступного судового засобу.",
      foreignersCase:
        "Іноземець має перевірити комплектність вручення postanowienia, особливо коли від нього відкривається skarga або sprzeciw.",
    },
  ],
})
