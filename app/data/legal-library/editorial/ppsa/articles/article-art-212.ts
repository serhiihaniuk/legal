import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-212",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Судовими зборами є збір за подання (wpis) та канцелярський збір (opłata kancelaryjna); вони надходять до державного бюджету.",
          sourceLocator: "Art. 212 § 1–2",
        },
      ],
      summary:
        "Стаття називає два види платежів, які закон вважає судовими зборами.",
      rules: [
        {
          locator: "Art. 212 § 1–2",
          explanation:
            "Перед оплатою визначте, чи йдеться про збір за ініціювання провадження або канцелярський платіж за документ чи іншу дію.",
        },
      ],
      legalEffect:
        "Правильна категорія визначає підставу, розмір і момент оплати.",
      foreignersCase:
        "У справі про перебування не плутайте збір за подання скарги (wpis) з канцелярським збором (opłata kancelaryjna) за копію рішення з обґрунтуванням.",
    },
  ],
})
