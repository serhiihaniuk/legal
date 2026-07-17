import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
  type LegalTextValue,
} from "../../../legal-text"

import type { LegalProvisionId } from "../../../contracts"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

import { defineEditorialPart } from "../../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type ReviewedClaim = {
  kind: "statute-text" | "practical-inference"
  text: LegalTextValue
  sourceLocator: string
}

type ReviewedRule = {
  locator: string
  explanation: LegalTextValue
}

type ReviewedArticleMetadata = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed"
}

const reviewedArticle = (
  _article: string,
  claims: readonly ReviewedClaim[],
  summary: LegalTextValue,
  rules: readonly ReviewedRule[],
  legalEffect: LegalTextValue,
  foreignersCase: LegalTextValue,
  metadata: ReviewedArticleMetadata
) => ({
  ...metadata,
  claims,
  summary,
  rules,
  legalEffect,
  foreignersCase,
})
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle(
      "30",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("30", "Art. 30")} виключає застосування ${foreignersLaw.article("23", "art. 23")}, ${foreignersLaw.article("25", "art. 25")}, ${foreignersLaw.article("34", "art. 34")}, ${foreignersLaw.article("35", "art. 35")} та положень, виданих на підставі ${foreignersLaw.article("33", "art. 33")} ust. 5, до перетину кордону, врегульованого kodeks graniczny Schengen.`,
          sourceLocator: "Art. 30",
        },
      ],
      "Стаття визначає межі застосування окремих польських положень, коли перетин кордону регулюється kodeks graniczny Schengen.",
      [
        {
          locator: "cały przepis",
          explanation: foreignersLaw.text`Спочатку встановіть, що конкретний перетин кордону належить до zakres uregulowanego kodeksem granicznym Schengen; лише тоді діє перелік виключень ${foreignersLaw.article("30", "Art. 30")}.`,
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("30", "Art. 30")} не встановлює самостійної підстави для в’їзду чи відмови, а розмежовує застосування названих норм у сфері Schengen.`,
      "У справі зафіксуйте вид кордону й застосовний режим Schengen, після чого не посилайтеся на виключені цією статтею положення як на єдину основу оцінки.",
      {
        provisionId: "ustawa-o-cudzoziemcach-art-30",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
