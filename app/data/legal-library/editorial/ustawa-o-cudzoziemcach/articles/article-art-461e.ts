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
      provisionId: "ustawa-o-cudzoziemcach-art-461e",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("461e", "Art. 461e")} уповноважує ministra właściwego do spraw wewnętrznych у drodze rozporządzenia визначити вимоги до pomieszczenia для cudzoziemców, яким odmówiono wjazdu, включно з обладнанням і з урахуванням поваги до їхніх прав, а також regulamin pobytu з урахуванням внутрішнього порядку, безпеки та належного функціонування.`,
          sourceLocator: "Art. 461e pkt 1–2",
        },
      ],
      summary:
        "Стаття є делегацією для міністра: окремим rozporządzenie мають бути визначені умови й обладнання pomieszczenia та regulamin pobytu, орієнтовані на права, порядок, безпеку і функціонування.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Rozporządzenie має визначати умови, яким відповідає pomieszczenie, включно з обладнанням, із урахуванням поваги до прав cudzoziemcy.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Rozporządzenie має також визначати regulamin pobytu, враховуючи внутрішній порядок, безпеку та sprawne funkcjonowanie pomieszczenie.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("461e", "Art. 461e")} визначає предмет і орієнтири підзаконного регулювання, але не замінює текст самого rozporządzenie. Для оцінки конкретного правила перебування потрібно перевірити чинний акт виконання та його застосування.`,
      foreignersCase: foreignersLaw.text`Коли спір стосується умов або regulamin, назвіть конкретну вимогу і звірте її з чинним rozporządzenie; окремо перевірте, чи не посилається орган лише на делегацію ${foreignersLaw.article("461e", "Art. 461e")} замість самого правила.`,
    },
  ],
})
