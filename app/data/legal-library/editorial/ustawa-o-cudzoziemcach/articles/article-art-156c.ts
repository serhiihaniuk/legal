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
      provisionId: "ustawa-o-cudzoziemcach-art-156c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("156c", "Art. 156c")} регулює передачу інформації про cudzoziemiec і sprzeciw щодо mobilność між Szef Urzędu, wojewoda та органами держав UE, а також передачу копії cofnięcie дозволу дослідника.`,
          sourceLocator: "Art. 156c ust. 1–3",
        },
      ],
      summary:
        "Норма координує інформацію про польський дозвіл дослідника та мобільність у Польщі або інших державах UE.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Szef Urzędu передає відповідному wojewoda дані за ${foreignersLaw.article("22", "art. 22")} ust. 1 pkt 8a lit. c tiret drugie або zawiadomienie за lit. f tiret trzecie, включно з отриманою інформацією про sprzeciw інших держав.`,
        },
        {
          locator: "ust. 2–3",
          explanation: foreignersLaw.text`Wojewoda передає Szef Urzędu копію cofnięcie дозволу ${foreignersLaw.article("151", "art. 151")} особі в mobilność, а Szef Urzędu повідомляє держави UE, де ця особа користується мобільністю.`,
        },
      ],
      legalEffect:
        "Передача інформації забезпечує координацію органів і не замінює рішення про udzielenie або cofnięcie.",
      foreignersCase:
        "Зіставте копії рішень, zawiadomienie та дані держави мобільності; визначте, який орган і яка норма створюють фактичний наслідок.",
    },
  ],
})
