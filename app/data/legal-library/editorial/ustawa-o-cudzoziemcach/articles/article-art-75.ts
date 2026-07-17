import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-75",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("75", "Art. 75")} ust. 1 вимагає оформити odmowa wydania wizy krajowej як decyzja, а ust. 2 — на formularz із зазначенням органу, сторони, rozstrzygnięcie, правової підстави й причин, інформації про wniosek o ponowne rozpatrzenie, дати, підпису та pieczęć.`,
          sourceLocator: "Art. 75 ust. 1–2 pkt 1–9",
        },
        {
          kind: "practical-inference",
          text: "Відмова має бути перевірена за формуляром і конкретними причинами; загальна назва „wiza odmówiona” не замінює правову підставу та pouczenie.",
          sourceLocator: "Art. 75 ust. 2 pkt 3–6",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("75", "Art. 75")} встановлює форму і мінімальний зміст decyzja про odmowa wizy krajowa. У документі мають бути вказані правова підстава, конкретні причини та порядок wniosek o ponowne rozpatrzenie.`,
      rules: [
        {
          locator: "Art. 75 ust. 1",
          explanation:
            "Odmowa wizy krajowa є decyzja, а не просто повідомленням чи усною відповіддю.",
        },
        {
          locator: "Art. 75 ust. 2 pkt 1–5",
          explanation:
            "Формуляр містить organ, stronę, rozstrzygnięcie, podstawę prawną odmowy і określenie powodów odmowy.",
        },
        {
          locator: "Art. 75 ust. 2 pkt 6–9",
          explanation:
            "Указуються właściwy wniosek o ponowne rozpatrzenie та tryb його подання, місце і дата, підпис уповноваженої особи та кругла pieczęć urzędowa.",
        },
      ],
      legalEffect: foreignersLaw.text`Належна decyzja фіксує відмову та відкриває передбачений законом засіб ponowne rozpatrzenie. ${foreignersLaw.article("75", "Art. 75")} не визначає, чи конкретна підстава ${foreignersLaw.article("65", "Art. 65")} справді доведена — це має випливати з рішення і матеріалів.`,
      foreignersCase: foreignersLaw.text`Перевірте дату doręczenie, орган, ${foreignersLaw.article("65", "Art. 65")} або іншу вказану правову підставу, конкретні причини та pouczenie; не пропустіть окремий строк ${foreignersLaw.article("76", "Art. 76")}.`,
    },
  ],
})
