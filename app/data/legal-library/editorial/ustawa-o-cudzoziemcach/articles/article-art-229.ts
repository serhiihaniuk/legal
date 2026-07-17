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
      provisionId: "ustawa-o-cudzoziemcach-art-229",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Документи з ${foreignersLaw.article("226", "Art. 226")} видають і обмінюють на wniosek cudzoziemca, але першу kartę pobytu видають z urzędu. Polski dokument tożsamości cudzoziemca для małoletni cudzoziemiec, народженого в Польщі та такого, що перебуває там без опіки батьків, також можна видати z urzędu. Для названих у ust. 4 випадків перша karta pobytu видається на wniosek cudzoziemca.`,
          sourceLocator: "Art. 229 ust. 1–4",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Tymczasowy polski dokument podróży dla cudzoziemca для особи, яка підлягає relokacji або przesiedleniu, видають на wniosek Szefa Urzędu; для особи з ${foreignersLaw.article("268", "Art. 268")} pkt 2 його також можна видати z urzędu. Перед першою kartą pobytu у названих випадках міжнародного захисту wojewoda діє через Szefa Urzędu щодо іншої держави-члена UE: перевіряє, чи особу не позбавили захисту, а в окремому випадку особи з ${foreignersLaw.article("127", "Art. 127")} або ${foreignersLaw.article("137a", "137a")} також повідомляє іншу державу та перевіряє це питання. Для karty pobytu особи з ${foreignersLaw.article("195", "Art. 195")} ust. 1 pkt 9 картку видають після повернення Karty Polaka.`,
          sourceLocator: "Art. 229 ust. 5–7",
        },
      ],
      summary:
        "Стаття розподіляє, коли документи видають на wniosek, а коли z urzędu, і встановлює спеціальні правила для першої karty pobytu, тимчасового документа подорожі, міжнародного захисту та Karty Polaka.",
      rules: [
        {
          locator: "ust. 1–4",
          explanation:
            "Загальне правило — wniosek cudzoziemca для видачі або обміну, але перша karta pobytu зазвичай видається z urzędu. Перевірте спеціальні випадки ust. 4, у яких перша картка знову потребує wniosku.",
        },
        {
          locator: "ust. 5",
          explanation: foreignersLaw.text`Для relokacja або przesiedlenie заявником на tymczasowy polski dokument podróży є Szef Urzędu; для ${foreignersLaw.article("268", "Art. 268")} pkt 2 можливе також видання z urzędu.`,
        },
        {
          locator: "ust. 6–7",
          explanation: foreignersLaw.text`Перед першою карткою в описаних ситуаціях міжнародного захисту орган має виконати передбачену комунікацію з іншою державою-членом UE. Для ${foreignersLaw.article("195", "Art. 195")} ust. 1 pkt 9 потрібне повернення Karty Polaka.`,
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("229", "Art. 229")} визначає процесуальний спосіб ініціювання видачі документа та спеціальні передумови окремих документів; сама стаття не замінює перевірку підстави перебування або іншої умови їх видачі.`,
      foreignersCase: foreignersLaw.text`Спочатку визначте конкретний документ із ${foreignersLaw.article("226", "Art. 226")} і перевірте, хто має подати wniosek або чи діє видання z urzędu. Для першої karty pobytu перевірте спеціальний пункт ust. 4, для tymczasowy dokument — підставу relokacji, przesiedlenia або ${foreignersLaw.article("268", "Art. 268")} pkt 2, а для ${foreignersLaw.article("195", "Art. 195")} ust. 1 pkt 9 — повернення Karty Polaka.`,
    },
  ],
})
