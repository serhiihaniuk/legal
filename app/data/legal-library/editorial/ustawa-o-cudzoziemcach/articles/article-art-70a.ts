import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-70a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("70a", "Art. 70a")} встановлює відповідне застосування ${foreignersLaw.article("67", "Art. 67")}, ${foreignersLaw.article("69", "Art. 69")} і ${foreignersLaw.article("70", "Art. 70")} під час розгляду заяв про видачу wiza міністром закордонних справ.`,
          sourceLocator: "Art. 70a",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`Це поширює консультаційні та строкові механізми на спеціальну компетенцію MFA, не скасовуючи вимог ${foreignersLaw.article("66", "Art. 66")} і не змінюючи самих матеріальних підстав.`,
          sourceLocator: "Art. 70a у zw. z Art. 67, 69–70",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("70a", "Art. 70a")} переносить механізми консультації, інформаційних запитів і продовження строків із ${foreignersLaw.article("67", "Art. 67")}, ${foreignersLaw.article("69", "69")} і ${foreignersLaw.article("70", "70")} на заяви, які розглядає міністр закордонних справ.`,
      rules: [
        {
          locator: "Art. 70a",
          explanation: foreignersLaw.text`У справі MFA застосовуйте ${foreignersLaw.article("67", "Art. 67")}, ${foreignersLaw.article("69", "69")} і ${foreignersLaw.article("70", "70")} odpowiednio: із потрібними коригуваннями до компетенції та каналу подання, визначених ${foreignersLaw.article("66", "Art. 66")}.`,
        },
      ],
      legalEffect:
        "Норма визначає процедурну сумісність правил для MFA і не є окремою підставою для wydanie або odmowa wiza.",
      foreignersCase: foreignersLaw.text`Якщо рішення приймає MFA за ${foreignersLaw.article("66", "Art. 66")}, перевірте, чи консультації та продовження строків проведено за відповідними ${foreignersLaw.article("67", "Art. 67")}, ${foreignersLaw.article("69", "69")} і ${foreignersLaw.article("70", "70")}, а не за довільним порядком.`,
    },
  ],
})
