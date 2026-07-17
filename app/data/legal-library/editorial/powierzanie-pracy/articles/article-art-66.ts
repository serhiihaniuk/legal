import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-66",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 66 встановлює строк для wpis або odmowa wpis oświadczenie: до 7 робочих днів без postępowanie wyjaśniające і до 30 днів у справі, що його потребує.",
          sourceLocator: "Art. 66",
        },
      ],
      summary:
        "Строк залежить від того, чи потрібне з'ясування обставин. Відлік починається від otrzymanie oświadczenie органом, а не від бажаної дати початку роботи.",
      rules: [
        {
          locator: "Art. 66",
          explanation:
            "Без postępowanie wyjaśniające діє максимум 7 робочих днів; із таким провадженням — максимум 30 днів від отримання oświadczenie.",
        },
      ],
      legalEffect:
        "Строк орієнтує щодо роботи органу, але сам по собі не створює wpis і не легалізує роботу до його здійснення.",
      foreignersCase:
        "Зафіксуйте дату, коли starosta отримав oświadczenie, і з'ясуйте, чи справа вимагає postępowanie wyjaśniające. Не замінюйте очікування wpis фактичним початком роботи.",
    },
  ]),
})
