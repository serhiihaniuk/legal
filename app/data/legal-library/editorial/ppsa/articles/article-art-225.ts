import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-225",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("225", "Art. 225")} nakazuje z urzędu zwrócić stronie, na jej koszt, opłatę prawomocnie uchyloną w całości lub w części, różnicę między kosztami pobranymi a kosztami należnymi oraz pozostałość zaliczki wpłaconej na pokrycie wydatków.`,
          sourceLocator: "Art. 225",
        },
      ],
      summary:
        "Стороні повертають належну до повернення opłata, різницю між стягненими й належними kosztami та залишок zaliczka — з urzędu.",
      rules: [
        {
          locator: "Art. 225",
          explanation:
            "Визначте, що саме підлягає поверненню: prawomocnie uchylona opłata, різниця koszty або залишок zaliczka на wydatki.",
        },
      ],
      legalEffect:
        "Повернення відбувається з urzędu у випадках, названих статтею, але норма не доводить автоматично наявність переплати без розрахунку koszty.",
      foreignersCase:
        "Після завершення судової справи іноземця звірте платежі за opłata та zaliczka з остаточним розрахунком суду; не вимагайте повернення суми, яка ще є належною.",
    },
  ],
})
