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
      provisionId: "ustawa-o-cudzoziemcach-art-416",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("416", "Art. 416")} ust. 1: «Cudzoziemiec umieszczony w strzeżonym ośrodku poza uprawnieniami, o których mowa w ${foreignersLaw.article("415", "art. 415")} ust. 1, ma prawo do».`,
          sourceLocator: "Art. 416 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Права відрізняються залежно від strzeżony ośrodek чи areszt; не можна автоматично переносити режим одного місця на інше.",
          sourceLocator: "Art. 416 ust. 1–3",
        },
      ],
      summary:
        "Стаття додає спеціальні права залежно від місця: рух у strzeżony ośrodek, заняття для małoletni та щоденну прогулянку й інші можливості для areszt dla cudzoziemców.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "У strzeżony ośrodek можна купувати wyroby tytoniowe та рухатися територією у визначені години, крім місць із zakaz wstępu.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Małoletni має право на dydaktyczno-wychowawcze та rekreacyjno-sportowe заняття, пристосовані до віку й тривалості перебування.",
        },
        {
          locator: "ust. 3",
          explanation:
            "В areszt передбачено щоденну прогулянку щонайменше дві години, а також інші контакти, ігри та palenie за умовами, вказаними в нормі.",
        },
      ],
      legalEffect: foreignersLaw.text`Стаття конкретизує побутові права понад ${foreignersLaw.article("415", "Art. 415")}. Час, місце та дозволи в ній є частиною самої норми, тому право не є безумовним у кожній ситуації.`,
      foreignersCase:
        "Визначте, чи перебуває особа в ośrodek чи areszt, і звірте запит із відповідним ust.; для дитини окремо зафіксуйте вік і доступ до занять.",
    },
  ],
})
