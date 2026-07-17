import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1860_URL = "https://eur-lex.europa.eu/eli/reg/2018/1860/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-359b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("359b", "Art. 359b")} встановлює порядок і строки польської відповіді на консультації іншої держави Schengen за ${foreignersLaw.external("Art. 10", SIS_2018_1860_URL)} або ${foreignersLaw.external("11", SIS_2018_1860_URL)} rozporządzenia nr 2018/1860, якщо іноземець має гуманітарну згоду.`,
          sourceLocator: "Art. 359b ust. 1–4",
        },
      ],
      summary:
        "Якщо інша держава запитує про гуманітарну згоду іноземця, польський орган перевіряє підстави її відкликання та передає висновок через Policja у встановлені строки.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Орган, який надав zgoda humanitarna, перевіряє підстави cofnięcie і повідомляє Komendant Główny Policji про рішення або їх відсутність протягом 10 днів.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Якщо 10 днів недостатньо, можна попросити іншу державу продовжити строк не більш як на 12 днів, навівши обґрунтування.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Komendant Główny Policji передає інформацію іншій державі протягом 14 днів від запиту або в продовжений строк.",
        },
      ],
      legalEffect:
        "Строки координують міждержавну консультацію, але не перетворюють її на автоматичне cofnięcie або збереження згоди.",
      foreignersCase: foreignersLaw.text`Зберігайте чинне рішення про zgoda та докази відсутності підстав ${foreignersLaw.article("350", "Art. 350")}; у разі затримки вимагайте інформацію про стадію, не роблячи висновку про результат.`,
    },
  ],
})
