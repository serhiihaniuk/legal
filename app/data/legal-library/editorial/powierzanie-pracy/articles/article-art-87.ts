import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-87",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 87 змінює ustawa o Straży Granicznej: замінює посилання на стару ustawa o promocji zatrudnienia посиланням на ustawa z 20 marca 2025 r. та уточнює інше посилання на art. 14a попередньої ustawa.",
          sourceLocator: "Art. 87 pkt 1–2",
        },
      ],
      summary:
        "Це przepis zmieniający, який узгоджує нормативні посилання в ustawa o Straży Granicznej після запровадження нового акту. Він не є самостійним zezwolenie або підставою для роботи.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "У art. 1 ust. 2 pkt 4 lit. i ustawa про Straż Graniczna стара назва акту замінена на нову ustawa про допустимість доручення роботи.",
        },
        {
          locator: "pkt 2",
          explanation:
            "У art. 10d ust. 23a посилання на art. 4 ust. 7 старого акту замінено посиланням на art. 14a ustawy про skutki illegalnej pracy.",
        },
      ],
      legalEffect:
        "Зміна підтримує узгодженість посилань між актами; фактичні повноваження Straż Graniczna треба читати разом із зміненим текстом основної ustawa.",
      foreignersCase:
        "У старому piśmie не робіть висновок про нечинність повноваження через стару назву акту: перевірте актуальне brzmienie ustawa o Straży Granicznej та конкретну норму.",
    },
  ]),
})
