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
      provisionId: "ustawa-o-cudzoziemcach-art-106j",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("106j", "Art. 106j")} виключає застосування ${foreignersLaw.article("105", "Art. 105")} ust. 1 та ${foreignersLaw.articleRange("106", "106i")} до заяв про дозволи з ${foreignersLaw.article("139a", "Art. 139a")} ust. 1 і ${foreignersLaw.article("139o", "Art. 139o")} ust. 1, а також до названих сімейних дозволів для іноземця, який перебуває поза Польщею.`,
          sourceLocator: "Art. 106j",
        },
      ],
      summary:
        "Стаття відмежовує два паперові спеціальні маршрути від загального електронного й особистого порядку тимчасового pobytu.",
      rules: [
        {
          locator: "Art. 106j w zw. z Art. 106k–106l",
          explanation: foreignersLaw.text`Для ICT та mobilność długoterminowa заявником є jednostka przyjmująca за ${foreignersLaw.article("106k", "Art. 106k")}. Для прямо названих сімейних дозволів особі за межами Польщі заяву подає członek rodziny rozdzielonej за ${foreignersLaw.article("106l", "Art. 106l")}.`,
        },
      ],
      legalEffect: foreignersLaw.text`До цих справ не можна механічно переносити вимогу подання через MOS, особистої явки та біометричні наслідки загального режиму ${foreignersLaw.article("105", "Art. 105")} ust. 1 і ${foreignersLaw.articleRange("106", "106i")}.`,
      foreignersCase:
        "Спочатку перевірте точну правову підставу дозволу та місце перебування іноземця. Лише потім визначайте заявника, форму wniosku й перелік особистих дій.",
    },
  ],
})
