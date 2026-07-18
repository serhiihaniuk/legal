import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1861_URL = "https://eur-lex.europa.eu/eli/reg/2018/1861/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-208",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Коли орган іншої держави Schengen просить консультацію за ${foreignersLaw.external("art. 28", SIS_2018_1861_URL)} або ${foreignersLaw.external("29", SIS_2018_1861_URL)} rozporządzenia nr 2018/1861, відповідний wojewoda встановлює, чи є підстави cofnięcia pobyt stały, враховуючи причини SIS-запису та загрози з ${foreignersLaw.external("art. 28", SIS_2018_1861_URL)} lit. d або ${foreignersLaw.external("art. 29", SIS_2018_1861_URL)} lit. d цього регламенту.`,
          sourceLocator: "Art. 208 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Wojewoda повідомляє Komendant Główny Policji про рішення або відсутність підстав протягом 10 днів; строк можна продовжити не більш як на 12 днів, а Komendant Główny Policji передає інформацію іншій державі протягом 14 днів або продовженого строку.",
          sourceLocator: "Art. 208 ust. 2–4",
        },
      ],
      summary:
        "Стаття координує консультації з іншою державою Schengen щодо можливого cofnięcie pobyt stały.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Орган оцінює не сам факт запиту, а конкретні причини SIS-запису та названі регламентом zagrożenia.",
        },
        {
          locator: "ust. 2–4",
          explanation:
            "10-денний строк є строком повідомлення, продовження потребує звернення до іншої держави до його спливу й має межу 12 днів.",
        },
      ],
      legalEffect: foreignersLaw.text`Консультаційна процедура може вплинути на оцінку cofnięcie, але ${foreignersLaw.article("208", "Art. 208")} сам не є рішенням про відкликання дозволу.`,
      foreignersCase: foreignersLaw.text`З’ясуйте, який саме SIS-запит надійшов, і контролюйте дати повідомлень та рішення; фактичний результат залежить від встановлених підстав ${foreignersLaw.article("199", "Art. 199")}.`,
    },
  ],
})
