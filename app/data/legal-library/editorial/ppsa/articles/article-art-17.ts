import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-17",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 17 § 2 встановлює: «Zmiana składu orzekającego może nastąpić jedynie z przyczyn losowych albo gdy sędzia nie może uczestniczyć w składzie orzekającym z powodu przeszkód prawnych».",
          sourceLocator: "Art. 17 § 2",
        },
      ],
      summary:
        "Порядок визначення складу orzekającego встановлюють регламенти внутрішньої роботи судів, а зміна складу допускається лише з названих у статті причин.",
      rules: [
        {
          locator: "Art. 17 § 1",
          explanation:
            "Склад для rozprawa або posiedzenie niejawne визначається регламентами внутрішнього urzędowania судів, виданими на правовій підставі.",
        },
        {
          locator: "Art. 17 § 2",
          explanation:
            "Зміна можлива через przyczyny losowe або юридичну перешкоду для участі судді.",
        },
      ],
      legalEffect:
        "Норма обмежує причини зміни складу, але не дає підстав вважати кожну зміну незаконною без перевірки фактичної причини.",
      foreignersCase:
        "Якщо в справі про pobyt змінився склад суду, зафіксуйте повідомлену причину і перевірте, чи вона належить до przyczyna losowa або przeszkoda prawna.",
    },
  ]),
})
