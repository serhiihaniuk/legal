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
      article: "96c",
      provisionId: "kpa-art-96c",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Якщо згоду на mediację не надано у строк з ${kpaLaw.article("96b", "art. 96b § 3")}, mediacja не проводиться.`,
      rules: [
        {
          locator: "єдиний блок",
          explanation:
            "Мовчання або запізніла згода не замінюють своєчасного волевиявлення учасника.",
        },
      ],
      legalEffect: "Провадження продовжується без mediacji.",
      foreignersCase:
        "Іноземець або його pełnomocnik має відповісти на пропозицію mediacji у вказаний строк, якщо хоче скористатися цим режимом.",
    },
  ],
})
