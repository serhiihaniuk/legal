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
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle(
      "38",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("38", "Art. 38")} наказує відмовити в udzielenie zezwolenia на перетин кордону в ramach małego ruchu granicznego, якщо cudzoziemiec не виконує умови ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006.`,
          sourceLocator: "Art. 38",
        },
      ],
      foreignersLaw.text`Стаття визначає відмову у дозволі на mały ruch graniczny через невиконання умов ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenie nr 1931/2006.`,
      [
        {
          locator: "cały przepis",
          explanation: foreignersLaw.text`Спочатку встановіть конкретну невиконану умову ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)}; загальна незручність або відсутність іншого документа не замінює цього тесту.`,
        },
      ],
      "Наслідок стосується саме udzielenie zezwolenia в режимі малого прикордонного руху; він не є загальною відмовою у в’їзді в усіх режимах.",
      foreignersLaw.text`У рішенні або проєкті аналізу назвіть невиконану умову ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} і доказ, який це підтверджує. Окремо відрізняйте відмову в дозволі від odmowa wjazdu за ${foreignersLaw.article("41", "Art. 41")}.`,
      {
        provisionId: "ustawa-o-cudzoziemcach-art-38",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
