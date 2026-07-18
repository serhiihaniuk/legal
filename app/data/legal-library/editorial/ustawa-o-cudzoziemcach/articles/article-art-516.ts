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
      provisionId: "ustawa-o-cudzoziemcach-art-516",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("516", "Art. 516")} передбачає видачу karty pobytu після pobranie odcisków linii papilarnych для cudzoziemców, які досягли 6 років і належать до перелічених перехідних категорій; виняток — коли pobranie є фізично неможливим.`,
          sourceLocator: "Art. 516 pkt 1–4",
        },
      ],
      summary:
        "Стаття визначає перехідне правило про відбитки пальців при видачі karty pobytu для окремих осіб зі старими дозволами, заявами або згодою humanitarna.",
      rules: [
        {
          locator: "Art. 516",
          explanation:
            "Умова віку — ukończyli 6. rok życia; далі потрібно належати до однієї з категорій, прямо перелічених у pkt 1–4.",
        },
        {
          locator: "Art. 516",
          explanation:
            "Karta pobytu видається після pobranie відбитків, крім випадку, коли їх pobranie є фізично неможливим.",
        },
      ],
      legalEffect:
        "Норма визначає спосіб видачі документа в перехідних категоріях і не є самостійною підставою для pobyt. Фізичну неможливість pobranie потрібно підтверджувати в матеріалах справи.",
      foreignersCase: foreignersLaw.text`Встановіть категорію за ${foreignersLaw.article("516", "Art. 516")}, вік на момент дії правила та причину відсутності odciski; збережіть повідомлення органу й медичне або інше підтвердження неможливості, якщо воно є.`,
    },
  ],
})
