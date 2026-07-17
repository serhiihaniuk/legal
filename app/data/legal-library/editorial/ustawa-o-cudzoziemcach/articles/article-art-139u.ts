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
      provisionId: "ustawa-o-cudzoziemcach-art-139u",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139u", "Art. 139u")} передбачає відповідне застосування до zezwolenie з ${foreignersLaw.article("139o", "art. 139o")} ust. 1 положень ${foreignersLaw.article("139g", "art. 139g")}, ${foreignersLaw.article("139h", "139h")}, ${foreignersLaw.article("139i", "139i")}, ${foreignersLaw.article("139j", "art. 139j")} ust. 3, ${foreignersLaw.article("139k", "art. 139k")} та ${foreignersLaw.article("139m", "art. 139m")}.`,
          sourceLocator: "Art. 139u",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("139u", "Art. 139u")} є нормою-відсиланням: правила для дозволу з ${foreignersLaw.article("139o", "art. 139o")} ust. 1 треба читати разом із переліченими положеннями розділу ICT.`,
      rules: [
        {
          locator: "cały przepis",
          explanation: foreignersLaw.text`Для кожного питання визначте конкретну норму з ${foreignersLaw.article("139g", "art. 139g")}, ${foreignersLaw.article("139h", "139h")}, ${foreignersLaw.article("139i", "139i")}, ${foreignersLaw.article("139j", "art. 139j")} ust. 3, ${foreignersLaw.article("139k", "art. 139k")} або ${foreignersLaw.article("139m", "art. 139m")} і застосовуйте її відповідно.`,
        },
      ],
      legalEffect:
        "Стаття не створює нового самостійного набору умов; правовий наслідок залежить від змісту конкретної норми, до якої вона відсилає.",
      foreignersCase: foreignersLaw.text`У висновку назвіть конкретний застосований cross-reference і перевірте його умови за текстом відповідної статті, а не лише за ${foreignersLaw.article("139u", "art. 139u")}.`,
    },
  ],
})
