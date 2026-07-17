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
      provisionId: "ustawa-o-cudzoziemcach-art-149c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("149c", "Art. 149c")} регулює обмін інформацією про mobilność studenta: Szef Urzędu передає wojewoda повідомлення та інформацію про sprzeciw, wojewoda передає копію cofnięcie дозволу, а Szef Urzędu повідомляє держави мобільності та Straż Graniczna у названих випадках.`,
          sourceLocator: "Art. 149c ust. 1–4",
        },
      ],
      summary:
        "Стаття пов’язує польське рішення про studia з органами держав UE, у яких cudzoziemiec користується mobilność studenta.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Szef Urzędu передає wojewoda повідомлення за ${foreignersLaw.article("22", "art. 22")} ust. 1 pkt 8a lit. f tiret drugie та інформацію про sprzeciw з інших держав UE.`,
        },
        {
          locator: "ust. 2–4",
          explanation:
            "Wojewoda передає копію cofnięcie польського дозволу, Szef Urzędu повідомляє держави мобільності про cofnięcie, а також інформує Straż Graniczna про cofnięcie іноземного документа у визначеній ситуації.",
        },
      ],
      legalEffect:
        "Це правило інформаційної координації; воно не замінює рішення про udzielenie або cofnięcie дозволу.",
      foreignersCase:
        "Зіставте польське рішення, повідомлення про мобільність і дані держави, що видала документ. Встановіть, яке саме рішення є джерелом наслідку для побиту.",
    },
  ],
})
