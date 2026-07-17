import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "268a",
      provisionId: "kpa-art-268a",
      reviewStatus: "reviewed",
      summary:
        "Стаття дозволяє адміністративному органу письмово уповноважити працівника діяти від його імені у визначеному обсязі. Уповноваження може охоплювати рішення, postanowienia, zaświadczenia та засвідчення копій документів.",
      rules: [
        {
          locator: "форма",
          explanation:
            "Upoważnienie має бути utrwalone na piśmie у паперовій або електронній формі та визначати обсяг справ.",
        },
        {
          locator: "приклади повноважень",
          explanation:
            "Працівник може бути уповноважений, зокрема, видавати decyzje, postanowienia, zaświadczenia та poświadczać zgodność odpisów документів з оригіналом.",
        },
      ],
      legalEffect:
        "Акт, підписаний працівником, може бути актом самого органу, якщо працівник мав чинне письмове уповноваження в потрібному обсязі.",
      foreignersCase:
        "Decyzja pobytowa не мусить бути особисто підписана воєводою. Потрібно перевіряти, чи підписант діяв z upoważnienia і чи його обсяг охоплював видання такого рішення.",
    },
  ],
})
