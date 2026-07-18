import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-133",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Після zamknięcie rozprawy суд видає wyrok на підставі akt sprawy, крім випадку невиконання органом обов’язку з ${ppsaLaw.article("54", "art. 54 § 2")}; у postępowaniu uproszczonym або коли це передбачає закон wyrok може бути на posiedzeniu niejawnym, а закриту rozprawę слід відкрити знову, якщо істотні обставини стали відомими лише після її закриття.`,
          sourceLocator: "Art. 133 § 1–3",
        },
      ],
      summary:
        "Норма описує момент і матеріальну основу винесення wyrok та допускає окремі випадки повторного відкриття rozprawy.",
      rules: [
        {
          locator: "§ 1",
          explanation: ppsaLaw.text`Основою є akta sprawy після закриття слухання; окремо враховано ситуацію, коли орган не виконав обов’язок із ${ppsaLaw.article("54", "art. 54 § 2")}.`,
        },
        {
          locator: "§ 2–3",
          explanation:
            "Нова істотна обставина після закриття вимагає повторного відкриття rozprawa за умов цієї статті.",
        },
      ],
      legalEffect:
        "Стаття регулює спосіб підготовки wyrok, а не доводить, що суд зобов’язаний прийняти конкретну версію фактів.",
      foreignersCase: ppsaLaw.text`У спорі про pobyt перевірте, чи є потрібний документ в aktach sprawy до закриття rozprawy. Нові обставини не дають автоматичного результату, але можуть мати значення за ${ppsaLaw.article("133", "§ 3")}.`,
    },
  ],
})
