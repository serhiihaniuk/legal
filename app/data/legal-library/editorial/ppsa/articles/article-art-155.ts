import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-155",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо під час розгляду виявлено істотні порушення права або обставини, що вплинули на їх виникнення, склад суду може postanowieniem повідомити компетентні органи або їхні вищі органи; одержувач має розглянути повідомлення і відповісти суду протягом тридцяти днів, а за невиконання цього обов’язку суд може накласти grzywna.",
          sourceLocator: "Art. 155 § 1–3",
        },
      ],
      summary:
        "Стаття створює канал повідомлення про істотні порушення під час розгляду і строк відповіді органу.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Повідомлення оформлюється postanowieniem і стосується виявлених під час розгляду істотних порушень або їх причин.",
        },
        {
          locator: "§ 2–3",
          explanation: ppsaLaw.text`Орган має повідомити суд про позицію за тридцять днів; за невиконання можливе grzywna у межах ${ppsaLaw.article("154", "art. 154 § 6")}.`,
        },
      ],
      legalEffect:
        "Це повідомлення та контроль відповіді органу, а не самостійне рішення про право іноземця чи скасування його decyzja.",
      foreignersCase: ppsaLaw.text`У справі про pobyt ${ppsaLaw.article("155", "art. 155")} може стосуватися системної процесуальної проблеми, поміченої судом, але не замінює skarga та не наказує органу видати дозвіл.`,
    },
  ],
})
