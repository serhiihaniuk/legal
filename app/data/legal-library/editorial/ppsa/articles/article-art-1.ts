import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-1",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 1 stanowi: «Prawo o postępowaniu przed sądami administracyjnymi normuje postępowanie sądowe w sprawach z zakresu kontroli działalności administracji publicznej».",
          sourceLocator: "Art. 1",
        },
      ],
      summary:
        "Стаття визначає, що p.p.s.a. регулює судове провадження у справах про контроль діяльності публічної адміністрації та в інших справах, для яких спеціальні закони передбачають застосування цього закону.",
      rules: [
        {
          locator: "Art. 1",
          explanation:
            "Предметом є справи sądowoadministracyjne: контроль діяльності administracji publicznej або інші прямо охоплені законом справи.",
        },
      ],
      legalEffect:
        "Норма окреслює загальну сферу p.p.s.a., але сама по собі не встановлює, що кожен спір із адміністрацією належить до цього провадження.",
      foreignersCase:
        "У справі про pobyt спочатку зафіксуйте, яку саме діяльність administracji publicznej оскаржують; не ототожнюйте назву документа з предметом судової справи.",
    },
  ]),
})
