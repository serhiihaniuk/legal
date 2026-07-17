import { createLegalTextAuthor, type LegalTextValue } from "../../../legal-text"

import {
  defineEditorialPart,
  type EditorialEntry,
} from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")

type Rule = { locator: string; explanation: LegalTextValue }

type ProvisionId = EditorialEntry<"ppsa">["provisionId"]

/**
 * This part was checked against the promoted local PPSA corpus
 * `ppsa-2026-143` (Dz.U. 2026 poz. 143), whose articles 85–129 are active.
 * The claim is a compact Ukrainian rendering of the statutory rule; Polish
 * procedural terms are retained so that the learner can match the source.
 */
function reviewed(
  provisionId: ProvisionId,
  claim: LegalTextValue,
  summary: LegalTextValue,
  rules: readonly Rule[],
  legalEffect: LegalTextValue,
  foreignersCase: LegalTextValue
): EditorialEntry<"ppsa"> {
  return {
    provisionId,
    reviewStatus: "reviewed",
    claims: [
      {
        kind: "statute-text",
        text: claim,
        sourceLocator: `Art. ${provisionId.slice("ppsa-art-".length)}`,
      },
    ],
    summary,
    rules,
    legalEffect,
    foreignersCase,
  }
}
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    reviewed(
      "ppsa-art-116c",
      "Postępowanie mediacyjne не є jawne; mediator, strony та інші учасники зобов’язані зберігати в таємниці факти, про які дізналися, якщо strony не домовляться інакше. Пропозиції, факти й oświadczenia mediacja після її завершення не можна використовувати, крім ustalenia з протоколу.",
      ppsaLaw.text`${ppsaLaw.article("116c", "Art. 116c")} поєднує непублічність mediacja, обов’язок tajemnica та обмеження подальшого використання матеріалів переговорів.`,
      [
        {
          locator: "§ 1–2",
          explanation:
            "Mediacja nie jest jawne, а обов’язок таємниці охоплює mediator, strony й інші особи; strony можуть домовитися інакше.",
        },
        {
          locator: "§ 3",
          explanation:
            "Після завершення не використовуються propozycje ugodowe, ujawnione fakty чи oświadczenia; виняток — ustalenia, внесені до protokołu mediacja.",
        },
      ],
      "Захист конфіденційності стимулює переговори, але не перешкоджає використанню належно оформлених ustalenia з протоколу в межах закону.",
      "Не покладайтеся на неформальні висловлювання під час mediacja у подальшій skarga про pobyt; визначте, що саме внесено до protokół як ustalenia."
    ),
  ],
})
