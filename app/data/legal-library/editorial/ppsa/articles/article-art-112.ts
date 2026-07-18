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
      "ppsa-art-112",
      ppsaLaw.text`Якщо organ ухиляється від виконання ухвали суду (postanowienie sądu) або розпорядження головуючого (zarządzenie przewodniczącego), ухвалених під час провадження й у зв’язку з розглядом справи, sąd може накласти на organ grzywna у розмірі за ${ppsaLaw.article("154", "Art. 154 § 6")}; postanowienie про штраф може бути видане на posiedzeniu niejawnym. За відповідним застосуванням ${ppsaLaw.article("55", "Art. 55 § 3")} у разі грубого порушення skład orzekający або prezes sądu повідомляє органи, компетентні розглядати petycje, skargi i wnioski.`,
      ppsaLaw.text`${ppsaLaw.article("112", "Art. 112")} дає суду санкційний інструмент проти ухилення органу від процесуального розпорядження та приписує відповідно застосовувати повідомлення, передбачене ${ppsaLaw.article("55", "Art. 55 § 3")}.`,
      [
        {
          locator: "Art. 112",
          explanation:
            "Потрібно встановити, що невиконану ухвалу суду (postanowienie sądu) або розпорядження головуючого (zarządzenie przewodniczącego) ухвалено під час провадження й у зв’язку з розглядом конкретної справи.",
        },
        {
          locator: "Art. 112",
          explanation: ppsaLaw.text`Sąd може, але не зобов’язаний, накласти grzywna в розмірі, визначеному через ${ppsaLaw.article("154", "Art. 154 § 6")}; postanowienie про штраф може бути видане на posiedzeniu niejawnym.`,
        },
        {
          locator: "Art. 112 w zw. z Art. 55 § 3",
          explanation: ppsaLaw.text`У разі грубого порушення (rażący przypadek) skład orzekający або prezes sądu повідомляє органи, компетентні розглядати petycje, skargi i wnioski; це випливає з відповідного застосування ${ppsaLaw.article("55", "Art. 55 § 3")}.`,
        },
      ],
      ppsaLaw.text`Grzywna за ${ppsaLaw.article("112", "Art. 112")} та повідомлення за ${ppsaLaw.article("55", "Art. 55 § 3")} реагують на процесуальне порушення органу, але не замінюють рішення щодо законності decyzja organ.`,
      "Якщо organ не виконує розпорядження sąd у sprawa cudzoziemca, зафіксуйте зміст, дату doręczenie та факт ухилення; окремо оцініть wniosek про grzywna."
    ),
  ],
})
