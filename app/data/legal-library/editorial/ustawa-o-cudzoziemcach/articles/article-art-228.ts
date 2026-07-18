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
      provisionId: "ustawa-o-cudzoziemcach-art-228",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`У документах із ${foreignersLaw.article("226", "Art. 226")} pkt 1–5 не розміщують підпис власника, якщо документ видають неповнолітній особі, яка до визначеної статтею дати не досягла 13 років, або особі, яка через choroba чи niepełnosprawność не може підписатися самостійно. Для дитини визначальною є дата заяви на видачу чи обмін документа, дата заяви на відповідне zezwolenie для першої karty pobytu або дата видачі документа z urzędu.`,
          sourceLocator: "Art. 228 pkt 1 lit. a–c i pkt 2",
        },
      ],
      summary: foreignersLaw.text`Стаття визначає два випадки, коли в документі з ${foreignersLaw.article("226", "Art. 226")} pkt 1–5 не повинно бути підпису власника: вік до 13 років на визначену дату або підтверджена неможливість самостійно підписатися через choroba чи niepełnosprawność.`,
      rules: [
        {
          locator: "pkt 1 lit. a–c",
          explanation:
            "Для дитини перевірте не лише вік, а й правильну дату: заяву на видачу або обмін документа, заяву на дозвіл для першої karty pobytu або видачу документа z urzędu.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Choroba або niepełnosprawność та неможливість самостійно підписатися мають бути підтверджені zaświadczenie lekarskie від właściwy lekarz specjalista. Довідка має бути видана не раніше ніж за 3 місяці до заяви на видачу або обмін документа.",
        },
      ],
      legalEffect: foreignersLaw.text`За умовами ${foreignersLaw.article("228", "Art. 228")} відсутність підпису в документі ${foreignersLaw.article("226", "Art. 226")} є передбаченим законом способом оформлення документа, а не сама по собі його вадою.`,
      foreignersCase:
        "Перед видачею або обміном документа з pkt 1–5 зафіксуйте вік особи на відповідну дату. Для дорослого перевірте спеціалізацію лікаря, дату довідки та пряме підтвердження неможливості самостійного підпису.",
    },
  ],
})
