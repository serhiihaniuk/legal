import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-508",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("508", "Art. 508")} регулює перетворення старих decyzje: рішення про zgoda na pobyt tolerowany у названих випадках стають рішеннями про zgoda na pobyt ze względów humanitarnych або про zgoda na pobyt tolerowany за ${foreignersLaw.article("351", "Art. 351")}, а decyzje o zobowiązaniu do opuszczenia та o wydaleniu стають decyzjami o zobowiązaniu do powrotu.`,
          sourceLocator: "Art. 508 ust. 1–2",
        },
      ],
      summary:
        "Перехідна стаття визначає, як окремі старі рішення та karty pobytu продовжують діяти після набрання чинності новим законом, і який орган видає наступний документ.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation: foreignersLaw.text`Класифікація старої decyzja залежить від конкретної przesłanka старого ${foreignersLaw.article("97", "Art. 97")} або ${foreignersLaw.article("141", "Art. 141")} ust. 2; рішення про opuszczenie або wydalenie, за винятком названого в тексті випадку, стають рішеннями про powrót.`,
        },
        {
          locator: "ust. 3–6",
          explanation:
            "Cofnięcie відповідної згоди здійснює компетентний komendant Straży Granicznej; karty pobytu зберігають чинність на виданий строк, а наступні документи видає компетентний komendant за місцем pobytu.",
        },
      ],
      legalEffect: foreignersLaw.text`Наслідок залежить від виду старого рішення, його правової підстави та перехідної дати. ${foreignersLaw.article("508", "Art. 508")} не дозволяє змінювати категорію документа без перевірки конкретної przesłanka.`,
      foreignersCase:
        "Отримайте повний старий tekst decyzja, визначте підставу згоди або wydalenie, дату її остаточності та чинність karty pobytu; лише потім визначайте сучасну назву статусу.",
    },
  ],
})
