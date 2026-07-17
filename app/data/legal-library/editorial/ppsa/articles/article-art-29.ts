import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-29",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 29 встановлює обов’язок: «mają obowiązek wykazać swoje umocowanie dokumentem przy pierwszej czynności w postępowaniu».",
          sourceLocator: "Art. 29",
        },
      ],
      summary:
        "Przedstawiciel ustawowy, organ або особи, названі в Art. 28, мають при першій процесуальній дії підтвердити своє umocowanie документом, якщо суд не може встановити його через доступний електронний wykaz або реєстр; підставу повноваження все одно треба вказати. Для pełnomocnik діють окремі правила Art. 37 та Art. 46 § 3.",
      rules: [
        {
          locator: "Art. 29",
          explanation:
            "Dokument, що підтверджує umocowanie, подається при першій czynność; якщо суд може перевірити його в доступному реєстрі, документ не потрібен, але підставу umocowanie треба зазначити.",
        },
      ],
      legalEffect:
        "Норма визначає момент і спосіб підтвердження представництва, не роблячи сам запис або документ доказом обґрунтованості основної справи.",
      foreignersCase:
        "Якщо першу czynność у справі іноземця виконує przedstawiciel ustawowy, organ або особа з Art. 28, долучіть документ про umocowanie або вкажіть реєстр і правову підставу, за якою суд може його перевірити; для pełnomocnik перевірте Art. 37.",
    },
  ]),
})
