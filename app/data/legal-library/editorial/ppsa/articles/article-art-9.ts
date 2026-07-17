import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-9",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 9 встановлює: «Organizacja społeczna, w zakresie swojej działalności statutowej, może brać udział w postępowaniu w przypadkach określonych w niniejszej ustawie».",
          sourceLocator: "Art. 9",
        },
      ],
      summary:
        "Organizacja społeczna може брати участь у провадженні в межах своєї статутної діяльності та лише у випадках, передбачених p.p.s.a.",
      rules: [
        {
          locator: "Art. 9",
          explanation:
            "Для участі важливі одночасно zakres działalności statutowej та конкретний випадок, дозволений законом.",
        },
      ],
      legalEffect:
        "Стаття відкриває можливість участі організації, але не надає їй безумовного статусу учасника в кожній справі.",
      foreignersCase:
        "Якщо організація хоче підтримати справу іноземця, перевірте її statut і законну підставу участі; самої заяви про суспільний інтерес недостатньо без перевірки умов.",
    },
  ]),
})
