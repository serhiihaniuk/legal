import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-69",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 69 перелічує зміни, за яких новий wpis oświadczenie не потрібен: адреса, назва або форма podmiot, przejście zakładu, збільшення часу до повного та зміна назви stanowisko без зміни обов'язків.",
          sourceLocator: "Art. 69 pkt 1–4",
        },
      ],
      summary:
        "Не кожна зміна реквізитів чи організації праці вимагає нового oświadczenie. Виняток обмежений названими обставинами і не охоплює зміну фактичного zakres obowiązków без перевірки.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "Новий wpis не потрібен при зміні siedziba, місця pobyt, stałe miejsce діяльності, назви або форми prawna podmiot чи pracodawca użytkownik, а також при przejście zakładu.",
        },
        {
          locator: "pkt 3–4",
          explanation:
            "Допускається збільшення часу або годин до pełny wymiar та зміна назви stanowisko, якщо zakres obowiązków не змінився.",
        },
      ],
      legalEffect:
        "Стаття звільняє лише від нового wpis у визначених межах; вона не скасовує обов'язки щодо wynagrodzenie, umowa або повідомлення.",
      foreignersCase:
        "Документуйте, що змінилася лише назва, адреса чи час, а не фактичні обов'язки. За новим місцем роботи або іншою роллю не робіть висновок про виняток без порівняння з pkt 1–4.",
    },
  ]),
})
