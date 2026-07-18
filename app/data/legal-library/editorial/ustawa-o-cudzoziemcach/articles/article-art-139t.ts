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
      provisionId: "ustawa-o-cudzoziemcach-art-139t",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139t", "Art. 139t")} визначає строк і ефект подання для zezwolenia з ${foreignersLaw.article("139o", "Art. 139o")} ust. 1: коли іноземець уже в Польщі, jednostka przyjmująca подає до останнього дня legalnego pobytu; коли він за кордоном, правовий ефект може виникнути після законного в’їзду, що відбувся вже після подання.`,
          sourceLocator: "Art. 139t ust. 1–3",
        },
      ],
      summary:
        "Стаття розділяє дві хронології — подання для особи в Польщі та подання до її майбутнього в’їзду. В обох випадках відсилання обмежене legalnością pobytu й не включає zaświadczenia.",
      rules: [
        {
          locator: "Art. 139t ust. 1–2",
          explanation: foreignersLaw.text`Для особи в Польщі wniosek подає jednostka przyjmująca не пізніше останнього дня legalnego pobytu. Відповідно діють ${foreignersLaw.article("108", "Art. 108")} ust. 1 pkt 2 і ust. 2, а не весь ${foreignersLaw.article("108", "Art. 108")}.`,
        },
        {
          locator: "Art. 139t ust. 3",
          explanation:
            "Для особи за кордоном той самий ефект застосовується після її zgodnego z prawem wjazdu до Польщі, якщо в’їзд відбувся після подання wniosku.",
        },
      ],
      legalEffect:
        "Норма може підтримувати legalność pobytu в установленій хронології, але не підтверджує матеріальних умов дозволу, не видає zaświadczenia й не замінює підстави в’їзду.",
      foreignersCase:
        "Зберіть одну часову лінію: подання przez jednostkę przyjmującą, останній день legalnego pobytu або дата законного в’їзду, а також можливе zawieszenie. Не змішуйте ці два сценарії.",
    },
  ],
})
