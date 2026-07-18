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
      article: "263",
      provisionId: "kpa-art-263",
      reviewStatus: "reviewed",
      summary:
        "Стаття перелічує типові koszty postępowania і дозволяє включити інші витрати, безпосередньо пов'язані з вирішенням справи. До переліку входять витрати свідків, експертів, огляду, офіційних вручень і медіації.",
      rules: [
        {
          locator: "§ 1",
          explanation: kpaLaw.text`Koszty включають витрати подорожі та інші належності świadków, biegłych і сторін у випадках ${kpaLaw.article("56", "art. 56")}, oględziny na miejscu, doręczenia pism urzędowych та mediację.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Орган може зарахувати й інші витрати, якщо вони безпосередньо пов'язані з rozstrzygnięciem sprawy.",
        },
      ],
      legalEffect:
        "Витрата може ввійти до процесуальних kosztów лише як прямо названа або безпосередньо пов'язана з рішенням справи.",
      foreignersCase: kpaLaw.text`У справі про pobyt витрати експерта чи спеціальної процесуальної дії можуть бути kosztami postępowania, але їх подальше покладення на іноземця окремо оцінюється за ${kpaLaw.article("262", "art. 262")} і 264.`,
    },
  ],
})
