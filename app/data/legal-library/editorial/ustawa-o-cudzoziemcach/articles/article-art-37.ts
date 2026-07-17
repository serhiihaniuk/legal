import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
  type LegalTextValue,
} from "../../../legal-text"

import type { LegalProvisionId } from "../../../contracts"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const LOCAL_BORDER_TRAFFIC_URL =
  "https://eur-lex.europa.eu/eli/reg/2006/1931/oj"

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
      "37",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("37", "Art. 37")} передбачає, що zezwolenia на перетин кордону в ramach małego ruchu granicznego можна надати cudzoziemiec, який виконує умови ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006.`,
          sourceLocator: "Art. 37",
        },
      ],
      foreignersLaw.text`Стаття прив’язує udzielenie zezwolenia на малий прикордонний рух до умов ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006.`,
      [
        {
          locator: "cały przepis",
          explanation: foreignersLaw.text`Потрібно перевірити саме умови ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006; ${foreignersLaw.article("37", "Art. 37")} не повторює їх у власному тексті.`,
        },
      ],
      foreignersLaw.text`Норма створює правову рамку для такого дозволу, але сама по собі не доводить виконання умов ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} і не гарантує його видачу.`,
      foreignersLaw.text`У справі випишіть кожну умову ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006 та підтвердьте її окремим документом; не обмежуйтеся фактом проживання біля кордону.`,
      {
        provisionId: "ustawa-o-cudzoziemcach-art-37",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
