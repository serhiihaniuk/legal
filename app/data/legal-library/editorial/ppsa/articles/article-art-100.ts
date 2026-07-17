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
      "ppsa-art-100",
      "З posiedzenie jawnе протокол spisuje protokolant під керівництвом przewodniczący; з posiedzenie niejawne складають notatka urzędowa, якщо не видано orzeczenie, і її можна зберегти в системі sąd з kwalifikowanym podpisem elektronicznym.",
      ppsaLaw.text`${ppsaLaw.article("100", "Art. 100")} розрізняє протокол відкритого засідання та urzędowa notatka для закритого засідання без виданого orzeczenie.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Протокол стосується przebieg posiedzenia jawnego і складається protokolant під керівництвом головуючого.",
        },
        {
          locator: "§ 2",
          explanation:
            "Для posiedzenie niejawne notatka urzędowa потрібна лише коли не видано orzeczenie; закон допускає електронний запис і кваліфікований підпис.",
        },
      ],
      "Стаття визначає форму фіксації, але не означає, що кожен матеріал із akt автоматично доводить обставини справи.",
      "Після засідання про pobyt перевірте, чи є потрібна інформація у protokół або notatka urzędowa та чи відповідає вона фактичному перебігу posiedzenia."
    ),
  ],
})
