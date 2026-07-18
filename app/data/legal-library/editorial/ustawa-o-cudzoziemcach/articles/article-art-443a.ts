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
      provisionId: "ustawa-o-cudzoziemcach-art-443a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("443a", "Art. 443a")}: «Przed przekazaniem ... danych cudzoziemca, który posiada ważny dokument pobytowy lub ważną wizę długoterminową, ... Szef Urzędu występuje ... o przeprowadzenie konsultacji».`,
          sourceLocator: "Art. 443a",
        },
        {
          kind: "practical-inference",
          text: "Наявність дійсного документа іншої держави Schengen запускає консультаційний крок, але сама стаття не гарантує позитивного результату консультації.",
          sourceLocator: "Art. 443a",
        },
      ],
      summary:
        "Перед передачею даних до SIS, якщо cudzoziemiec має чинний документ pobyt або довгострокову візу іншої держави Schengen, Szef Urzędu проводить визначені консультації через Komendant Główny Policji.",
      rules: [
        {
          locator: "Art. 443a",
          explanation: foreignersLaw.text`Szef Urzędu звертається до компетентного органу держави, яка видала документ або візу, для консультацій за ${foreignersLaw.external("art. 28", SIS_2018_1861_URL)} rozporządzenia nr 2018/1861.`,
        },
        {
          locator: "Art. 443a",
          explanation:
            "Звернення й отримання результату відбуваються за посередництвом Komendant Główny Policji.",
        },
      ],
      legalEffect:
        "Норма встановлює міждержавний консультаційний механізм перед передачею даних у визначеній ситуації. Вона сама не вирішує чинність іноземного документа.",
      foreignersCase:
        "Додайте копію чинної karty pobytu або візи іншої держави Schengen і перевірте, чи орган провів консультацію та який її результат.",
    },
  ],
})
