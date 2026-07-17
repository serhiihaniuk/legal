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
      provisionId: "ustawa-o-cudzoziemcach-art-347b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("347b", "Art. 347b")} вимагає перед wpis до SIS провести консультації з державою Schengen, яка видала іноземцю чинний документ побиту або довгострокову візу.`,
          sourceLocator: "Art. 347b",
        },
      ],
      summary:
        "Якщо іноземець має чинний документ побиту або довгострокову візу іншої держави Schengen, Польща перед внесенням даних повинна звернутися до цієї держави для консультацій.",
      rules: [
        {
          locator: "całość",
          explanation: foreignersLaw.text`Komendant Główny Straży Granicznej звертається через Komendant Główny Policji до органу держави, яка видала документ, відповідно до ${foreignersLaw.external("Art. 10", SIS_2018_1860_URL)} rozporządzenia nr 2018/1860.`,
        },
      ],
      legalEffect:
        "Консультація є міждержавною процедурою і сама по собі не визначає остаточний статус документа або рішення про повернення.",
      foreignersCase:
        "Повідомте орган про чинний dokument pobytowy або wizę іншої держави Schengen і додайте копію та дані чинності, якщо це ще не було враховано.",
    },
  ],
})
