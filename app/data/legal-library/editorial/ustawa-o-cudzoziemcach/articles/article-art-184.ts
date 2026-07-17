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
      provisionId: "ustawa-o-cudzoziemcach-art-184",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`У дозволі з ${foreignersLaw.article("181", "art. 181")} ust. 1 ${foreignersLaw.article("184", "Art. 184")} вимагає відмовити cudzoziemiec у випадках ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1 і 3–5.`,
          sourceLocator: "Art. 184",
        },
      ],
      summary:
        "Короткострокова підстава не виключає чотири прямо названі обов'язкові підстави відмови.",
      rules: [
        {
          locator: "весь припис",
          explanation: foreignersLaw.text`Орган має перевірити конкретний факт із ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1, 3, 4 або 5; не можна додати інші пункти до цього спеціального переліку без окремої законної підстави.`,
        },
      ],
      legalEffect: foreignersLaw.text`Виконання умов ${foreignersLaw.article("181", "art. 181")} не долає застосовну обов'язкову відмову з ${foreignersLaw.article("100", "art. 100")} у межах пунктів, названих у ${foreignersLaw.article("184", "Art. 184")}.`,
      foreignersCase: foreignersLaw.text`У проєкті рішення або апеляції попросіть орган назвати точний пункт ${foreignersLaw.article("100", "art. 100")}, доказ і причинний зв'язок із вашою справою; окремо доводьте матеріальну підставу ${foreignersLaw.article("181", "art. 181")}.`,
    },
  ],
})
