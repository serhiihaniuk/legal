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
      provisionId: "ustawa-o-cudzoziemcach-art-139w",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139w", "Art. 139w")} ust. 1 зобов’язує wojewoda передати Szef Urzędu копію рішення про udzielenie або cofnięcie дозволу з ${foreignersLaw.article("139o", "art. 139o")} ust. 1, а ust. 2 зобов’язує Szef Urzędu передати відповідному wojewoda інформацію про cudzoziemiec, названу в ${foreignersLaw.article("22", "art. 22")} ust. 1 pkt 8a lit. d tiret pierwsze.`,
          sourceLocator: "Art. 139w ust. 1–2",
        },
      ],
      summary: foreignersLaw.text`Стаття встановлює обмін даними між wojewoda та Szef Urzędu у справах дозволу за ${foreignersLaw.article("139o", "art. 139o")} ust. 1.`,
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Wojewoda передає Szef Urzędu копію рішення про udzielenie або cofnięcie цього дозволу.",
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Szef Urzędu передає wojewoda, який надав дозвіл, інформацію про cudzoziemiec у межах даних, названих у ${foreignersLaw.article("22", "art. 22")} ust. 1 pkt 8a lit. d tiret pierwsze.`,
        },
      ],
      legalEffect:
        "Обмін інформацією забезпечує міжорганізаційний облік і не є самостійним рішенням про legalny pobyt або право на працю.",
      foreignersCase:
        "Порівнюйте рішення wojewoda з отриманою інформацією та встановлюйте джерело кожної розбіжності; не ототожнюйте передачу копії рішення з його позитивним змістом.",
    },
  ],
})
