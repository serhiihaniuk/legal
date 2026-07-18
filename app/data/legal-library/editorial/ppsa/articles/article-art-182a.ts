import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-182a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Касаційну скаргу на рішення WSA, яким відхилено заперечення (sprzeciw) проти адміністративного рішення або ухвали, NSA розглядає протягом тридцяти днів від її надходження.",
          sourceLocator: "Art. 182a",
        },
      ],
      summary:
        "Стаття прискорює касаційний контроль у спеціальній процедурі заперечення (sprzeciw).",
      rules: [
        {
          locator: "Art. 182a",
          explanation:
            "Перевірте, що оскаржується саме рішення про відхилення заперечення (sprzeciw), і зафіксуйте дату надходження касації до NSA; від неї закон рахує строк розгляду.",
        },
      ],
      legalEffect:
        "Тридцятиденний строк стосується дії NSA, а не строку сторони на подання касаційної скарги.",
      foreignersCase:
        "У справі про перебування не переносіть цей строк на звичайну касацію проти рішення WSA щодо основної скарги.",
    },
  ],
})
