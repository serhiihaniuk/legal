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
      provisionId: "ustawa-o-cudzoziemcach-art-48",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("48", "Art. 48")} вимагає від Szef Urzędu передавати органам держав, що застосовують rozporządzenie nr 1931/2006, інформацію про unieważnienie дозволу mały ruch graniczny, визначені grzywny та рішення про zobowiązanie do powrotu за ${foreignersLaw.article("302", "Art. 302")} ust. 1 pkt 12 або 13.`,
          sourceLocator: "Art. 48 pkt 1–3",
        },
        {
          kind: "practical-inference",
          text: "Передавання інформації забезпечує транскордонну координацію і саме по собі не є новою grzywna або рішенням про powrót.",
          sourceLocator: "Art. 48 pkt 1–3",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("48", "Art. 48")} встановлює інформаційний обмін у режимі mały ruch graniczny: Szef Urzędu повідомляє інші відповідні держави про скасування дозволу, grzywny за перебування поза дозволеною прикордонною зоною або після дозволеного строку та окремі рішення про powrót.`,
      rules: [
        {
          locator: "Art. 48 pkt 1",
          explanation:
            "Повідомляється рішення про unieważnienie zezwolenie na przekraczanie granicy w ramach małego ruchu granicznego.",
        },
        {
          locator: "Art. 48 pkt 2 lit. a–b",
          explanation:
            "Обмін охоплює grzywny за вихід за межі strefa przygraniczna, дозволеної документом, або за перебування після закінчення строку, визначеного в zezwolenie.",
        },
        {
          locator: "Art. 48 pkt 3",
          explanation: foreignersLaw.text`Окремо передаються рішення про zobowiązanie cudzoziemca do powrotu, якщо вони видані з причин ${foreignersLaw.article("302", "Art. 302")} ust. 1 pkt 12 або 13.`,
        },
      ],
      legalEffect:
        "Норма створює обов’язок передати визначені відомості іншим державам, але не легалізує перебування і не замінює акт, яким накладено grzywna, unieważniono дозвіл або прийнято рішення про powrót.",
      foreignersCase: foreignersLaw.text`У справі зафіксуйте дозволену strefa przygraniczna, строк перебування, постанову про grzywna чи рішення про powrót і перевірте, чи стосується подія саме переліку ${foreignersLaw.article("48", "Art. 48")}.`,
    },
  ],
})
