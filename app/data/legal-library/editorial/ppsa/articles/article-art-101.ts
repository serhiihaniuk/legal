import { createLegalTextAuthor, type LegalTextValue } from "../../../legal-text"

import {
  defineEditorialPart,
  type EditorialEntry,
} from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")

type Rule = { locator: string; explanation: LegalTextValue }

type ProvisionId = EditorialEntry<"ppsa">["provisionId"]

/**
 * This part was checked against the prepared current PPSA corpus
 * `ppsa-2026-143-with-2026-846` (Dz.U. 2026 poz. 143), whose articles 85–129 are active.
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
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    reviewed(
      "ppsa-art-101",
      "Protokół має містити складові суду й учасників, дані справи та jawność, przebieg posiedzenia з wnioski, twierdzenia, zarządzenia й orzeczenia, а також істотні czynności stron; його підписують przewodniczący і protokolant.",
      ppsaLaw.text`${ppsaLaw.article("101", "Art. 101")} встановлює мінімальний зміст і підписання протоколу та дозволяє його електронне оформлення з kwalifikowanym podpisem.`,
      [
        {
          locator: "§ 1 pkt 1",
          explanation:
            "Звірте в протоколі sąd, місце й дату, склад суду, protokolant, prokurator, strony, представників, справу та відмітку про jawność.",
        },
        {
          locator: "§ 1 pkt 2–3",
          explanation:
            "Протокол відображає przebieg, wnioski і twierdzenia, видані на засіданні рішення та істотні czynności stron; можна послатися на pisma przygotowawcze.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Протокол підписують przewodniczący і protokolant; допускається запис у системі teleinformatycznym із кваліфікованим підписом.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("101", "Art. 101")} визначає засіб фіксації процесу, а не встановлює наперед, які факти суд визнає доведеними.`,
      ppsaLaw.text`Зіставте протокол засідання у справі cudzoziemca з поданими поясненнями та заявленими wnioski; істотне упущення можна оцінювати за процедурою ${ppsaLaw.article("103", "Art. 103")} і ${ppsaLaw.article("105", "105")}.`
    ),
  ],
})
