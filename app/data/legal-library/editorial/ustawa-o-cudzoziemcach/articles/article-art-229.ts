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
      provisionId: "ustawa-o-cudzoziemcach-art-229",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Документи з ${foreignersLaw.article("226", "Art. 226")} pkt 1–5 видають і обмінюють на wniosek cudzoziemca. Виняток: першу kartę pobytu та europejski dokument podróży do celów powrotu видають z urzędu. Polski dokument tożsamości cudzoziemca для małoletni cudzoziemiec, народженого в Польщі й такого, що перебуває без опіки батьків, також можна видати z urzędu. У спеціальних випадках ust. 4 перша karta pobytu знову видається на wniosek cudzoziemca.`,
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
          explanation: foreignersLaw.text`Загальне правило wniosku стосується лише документів ${foreignersLaw.article("226", "Art. 226")} pkt 1–5. Перша karta pobytu і europejski dokument podróży do celów powrotu видаються z urzędu; для першої картки перевірте спеціальні випадки ust. 4, у яких потрібен wniosek.`,
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
      legalEffect: foreignersLaw.text`${foreignersLaw.article("229", "Art. 229")} визначає процесуальний спосіб ініціювання видачі документа та спеціальні передумови окремих документів; europejski dokument podróży do celów powrotu не потребує wniosku cudzoziemca.`,
      foreignersCase: foreignersLaw.text`Спочатку визначте конкретний документ із ${foreignersLaw.article("226", "Art. 226")} і перевірте, хто має подати wniosek або чи діє wydanie z urzędu. Для europejski dokument podróży do celów powrotu зафіксуйте саме режим z urzędu; для першої karty pobytu перевірте ust. 4, а для ${foreignersLaw.article("195", "Art. 195")} ust. 1 pkt 9 — повернення Karty Polaka.`,
    },
  ],
})
