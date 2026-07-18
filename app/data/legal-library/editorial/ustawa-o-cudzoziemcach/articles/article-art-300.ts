import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-300",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 300 передбачає, що wojewoda може в обґрунтованих випадках продовжити на наступні 90 днів pobyt cudzoziemca в межах ruchu bezwizowego, якщо таку можливість передбачає umowa o zniesieniu obowiązku wizowego; заява подається особисто не пізніше останнього робочого дня legalny pobyt, а своєчасний pobyt вважається legalny до штампа або рішення про відмову, максимум на 90 днів за умовами статті.",
          sourceLocator: "Art. 300 ust. 1–7",
        },
      ],
      summary:
        "Стаття регулює виняткове продовження bezwizowy pobyt у Польщі ще на 90 днів за наявності такої можливості в міжнародній угоді.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Рішення приймає wojewoda за місцем pobytu; заява подається особисто в межах останнього робочого дня legalny pobyt і повинна бути обґрунтована.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Продовження підтверджується штампом у dokument podróży; за своєчасної заяви без невиправлених braków formalnych побут може залишатися legalny до визначеного статтею результату, але не понад 90 днів.",
        },
        {
          locator: "ust. 5–7",
          explanation:
            "Для продовженого bezwizowy pobyt діють спеціальні правила щодо Art. 299 і виїзду через зовнішній кордон Польщі; стаття також передбачає внесення даних до EES.",
        },
      ],
      legalEffect:
        "Стаття створює вузький механізм продовження безвізового перебування, а не загальне продовження будь-якого pobyt; результат залежить від угоди, строку і формальних вимог.",
      foreignersCase:
        "Перевірте, чи угода для вашого громадянства допускає продовження, подайте особисту заяву вчасно та збережіть підтвердження подання й рішення wojewoda.",
    },
  ]),
})
