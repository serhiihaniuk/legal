import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-321",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 321 визначає Komendanta Głównego Straży Granicznej як organ wyższego stopnia у справах про zobowiązanie do powrotu, продовження terminu dobrowolnego wyjazdu та cofnięcie zakazu, а odwołanie подається протягом 7 днів від doręczenia decyzji.",
          sourceLocator: "Art. 321 ust. 1–2",
        },
      ],
      summary:
        "Стаття називає орган вищого ступеня та спеціальний семиденний строк odwołanie у визначених справах.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "У справах, перелічених статтею, органом вищого ступеня є Komendant Główny Straży Granicznej.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Odwołanie вноситься протягом 7 днів від doręczenia decyzji; дату вручення треба підтвердити.",
        },
      ],
      legalEffect:
        "Норма визначає спеціальний шлях адміністративного оскарження і строк, але вимоги до змісту та наслідки подання треба перевіряти за рішенням і KPA.",
      foreignersCase:
        "Занотуйте дату doręczenia, адресата odwołanie і семиденний строк; у тексті відповідайте на конкретні підстави decyzji.",
    },
  ]),
})
