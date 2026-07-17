import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1861_URL = "https://eur-lex.europa.eu/eli/reg/2018/1861/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-448a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("448a", "Art. 448a")}: «Jeżeli po przekazaniu ... danych cudzoziemca ... okaże się, że posiada on ważny dokument pobytowy lub ważną wizę długoterminową ... Szef Urzędu występuje ... o przeprowadzenie konsultacji».`,
          sourceLocator: "Art. 448a",
        },
        {
          kind: "practical-inference",
          text: "Виявлення дійсного документа після передачі даних запускає консультації, але результат залежить від інформації компетентних органів держав Schengen.",
          sourceLocator: "Art. 448a",
        },
      ],
      summary:
        "Якщо після передачі даних до SIS виявиться, що cudzoziemiec має чинний документ pobyt або довгострокову візу іншої держави Schengen, Szef Urzędu проводить консультації та повідомляє результати відповідним органам.",
      rules: [
        {
          locator: "Art. 448a",
          explanation: foreignersLaw.text`Szef Urzędu звертається через Komendant Główny Policji до держави, яка видала документ або візу, для консультацій за ${foreignersLaw.external("art. 29", SIS_2018_1861_URL)} rozporządzenia nr 2018/1861.`,
        },
        {
          locator: "Art. 448a",
          explanation: foreignersLaw.text`Szef Urzędu через Komendant Główny Policji приймає результат консультацій за ${foreignersLaw.external("art. 29", SIS_2018_1861_URL)}, а про результат консультацій за ${foreignersLaw.external("art. 30", SIS_2018_1861_URL)} повідомляє компетентний орган państwa wykonującego.`,
        },
      ],
      legalEffect:
        "Норма регулює подальшу координацію після запису в SIS, коли виявлено документ іншої держави Schengen. Вона не проголошує автоматичне видалення в кожному випадку.",
      foreignersCase:
        "Повідомте про чинну kartę pobytu або візу іншої держави та перевірте, чи Szef Urzędu ініціював консультацію й зафіксував її результат.",
    },
  ],
})
