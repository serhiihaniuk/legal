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
      provisionId: "ustawa-o-cudzoziemcach-art-205",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`У провадженні про pobyt stały для małżonek obywatela polskiego орган встановлює, чи шлюб був укладений або існує з метою обходу правил в’їзду, przejazdu, pobytu чи wyjazdu cudzoziemców; для цього застосовуються ${foreignersLaw.article("169", "art. 169")} ust. 2, 4 і 5.`,
          sourceLocator: "Art. 205 ust. 1–2",
        },
      ],
      summary:
        "Стаття вимагає окремо перевірити реальну мету шлюбу в процедурі pobyt stały на підставі шлюбу з громадянином Польщі.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Орган оцінює, чи є шлюб способом обходу міграційних правил; одного формального aktu małżeństwa недостатньо для висновку про відсутність цієї обставини.",
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Порядок встановлення обставин визначається відсиланням до конкретних частин ${foreignersLaw.article("169", "Art. 169")}.`,
        },
      ],
      legalEffect:
        "Стаття регулює перевірку обставин шлюбу, а не створює автоматичне право на pobyt stały для кожного подружжя obywatel polski.",
      foreignersCase:
        "У справі підготуйте послідовні докази спільного сімейного життя й відповідайте на wezwanie органу; правовий висновок має спиратися на повні факти, а не лише на свідоцтво про шлюб.",
    },
  ],
})
