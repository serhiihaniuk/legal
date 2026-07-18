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
      "ppsa-art-89",
      "Подання wniosek o przywrócenie terminu не зупиняє postępowanie або виконання orzeczenia; sąd може їх зупинити, а після задоволення wniosek може негайно розглянути sprawę.",
      ppsaLaw.text`${ppsaLaw.article("89", "Art. 89")} розмежовує сам факт wniosek і окреме рішення sąd про wstrzymanie postępowania або wykonania orzeczenia.`,
      [
        {
          locator: "Art. 89",
          explanation:
            "За загальним правилом wniosek не має автоматичної зупиняючої дії: postępowanie та wykonanie orzeczenia тривають.",
        },
        {
          locator: "Art. 89",
          explanation:
            "Sąd може, зважаючи на обставини, wstrzymać postępowanie або виконання; це не відбувається автоматично.",
        },
        {
          locator: "Art. 89",
          explanation:
            "Після uwzględnienie wniosku sąd може негайно перейти до rozpoznania sprawy.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("89", "Art. 89")} регулює тимчасовий процесуальний ефект wniosek і не гарантує ані зупинення, ані сприятливого рішення у справі.`,
      "У спорі про pobyt окремо просіть про wstrzymanie, якщо для цього є підстави, і не ототожнюйте wniosek o przywrócenie terminu з автоматичним продовженням легального перебування."
    ),
  ],
})
