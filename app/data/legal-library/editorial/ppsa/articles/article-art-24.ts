import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-24",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 24 § 1 встановлює: «Przepisy niniejszego rozdziału stosuje się odpowiednio do wyłączenia protokolanta, referendarza sądowego oraz prokuratora».",
          sourceLocator: "Art. 24 § 1",
        },
      ],
      summary:
        "Правила цього розділу про wyłączenie застосовуються відповідно до protokolant, referendarz sądowy та prokurator; wniosek про wyłączenie prokurator передається відповідному prokurator nadrzędny.",
      rules: [
        {
          locator: "Art. 24 § 1",
          explanation:
            "Механізм wyłączenie поширюється відповідно на три названі функції, а не лише на sędziego.",
        },
        {
          locator: "Art. 24 § 2",
          explanation:
            "Wniosek про wyłączenie prokurator передається відповідному prokurator nadrzędny.",
        },
      ],
      legalEffect:
        "Стаття розширює застосування правил wyłączenie до названих учасників і встановлює окремий напрям передачі wniosku щодо prokurator.",
      foreignersCase:
        "Якщо у справі іноземця сумнів стосується не sędziego, а protokolant, referendarz або prokurator, визначте саме цю роль і застосовуйте Art. 24, не змішуючи її з wyłączenie суду.",
    },
  ]),
})
