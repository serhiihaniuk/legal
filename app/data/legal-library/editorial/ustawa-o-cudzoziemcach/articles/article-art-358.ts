import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-358",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("358", "Art. 358")} зобов’язує особу з zgoda na pobyt tolerowany регулярно zgłaszać się до вказаного органу Straż Graniczna та повідомляти про кожну зміну місця проживання.`,
          sourceLocator: "Art. 358",
        },
      ],
      summary:
        "Рішення про tolerowany pobyt містить постійний процедурний обов’язок контактувати з SG і повідомляти актуальну адресу.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Іноземець зобов’язаний з’являтися через визначені в рішенні проміжки до відповідного komendant та інформувати його про кожну зміну місця проживання.",
        },
      ],
      legalEffect: foreignersLaw.text`Невиконання цього обов’язку може стати підставою cofnięcie згідно з ${foreignersLaw.article("353", "Art. 353")} pkt 4 у відповідному випадку.`,
      foreignersCase:
        "Перепишіть із decyzja орган, адресу та періодичність zgłaszanie, зберігайте підтвердження явки й негайно документуйте зміну адреси.",
    },
  ],
})
