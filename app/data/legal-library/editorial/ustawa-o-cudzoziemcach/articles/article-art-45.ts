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
      "45",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("45", "Art. 45")} визначає, що в zezwolenie на mały ruch graniczny вносяться відомості за ${foreignersLaw.external("art. 7", LOCAL_BORDER_TRAFFIC_URL)} ust. 3 rozporządzenia nr 1931/2006, стать власника та серія й номер дозволу, а також технічні засоби захисту за rozporządzenie nr 1030/2002.`,
          sourceLocator: "Art. 45 ust. 1–2",
        },
      ],
      "Стаття визначає обов’язкові дані та технічний захист документа про дозвіл на mały ruch graniczny.",
      [
        {
          locator: "ust. 1 pkt 1–3",
          explanation: foreignersLaw.text`Документ містить відомості за ${foreignersLaw.external("art. 7", LOCAL_BORDER_TRAFFIC_URL)} ust. 3 rozporządzenia nr 1931/2006, płeć posiadacza та серію і номер zezwolenia.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "У дозвіл вносяться технічні zabezpieczenia, передбачені rozporządzenie nr 1030/2002.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("45", "Art. 45")} описує зміст і захист документа, але сама не надає дозволу та не доводить право на перетин кордону поза його умовами.`,
      "Порівняйте документ із даними заяви та перевірте наявність обов’язкових реквізитів. Не робіть висновок про чинність лише за серією та номером без перевірки строку й умов.",
      {
        provisionId: "ustawa-o-cudzoziemcach-art-45",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
