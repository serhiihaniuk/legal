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
      provisionId: "ustawa-o-cudzoziemcach-art-359c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("359c", "Art. 359c")} вимагає при оцінці ${foreignersLaw.article("349", "Art. 349")} враховувати причини SIS-запису іншої держави та провести консультації за ${foreignersLaw.external("Art. 27", SIS_2018_1861_URL)} rozporządzenia nr 2018/1861, а також повідомити ту державу про гуманітарне рішення або намір.`,
          sourceLocator: "Art. 359c ust. 1–2",
        },
      ],
      summary:
        "SIS-запис для відмови у в’їзді чи побуті є важливим матеріалом, але польський орган має оцінити його підстави та можливі загрози, а не просто механічно повторити чужий висновок.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`При ${foreignersLaw.article("349", "Art. 349")} враховуються причини wpis іншої держави та загрози за ${foreignersLaw.external("Art. 27", SIS_2018_1861_URL)} lit. d rozporządzenia nr 2018/1861.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Через Komendant Główny Policji польський орган проводить консультації за ${foreignersLaw.external("Art. 27", SIS_2018_1861_URL)} і повідомляє державу про рішення або намір надати гуманітарну згоду.`,
        },
      ],
      legalEffect:
        "SIS-запис впливає на оцінку безпеки, але стаття не встановлює, що сам запис автоматично вирішує питання гуманітарної згоди.",
      foreignersCase:
        "Попросіть ідентифікувати державу, підставу та дату wpis; подайте докази помилки або зміни обставин, якщо запис не відображає актуальну ситуацію.",
    },
  ],
})
