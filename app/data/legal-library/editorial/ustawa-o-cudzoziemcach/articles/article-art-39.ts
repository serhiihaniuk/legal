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
      "39",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("39", "Art. 39")} передбачає cofnięcie zezwolenia на mały ruch graniczny, якщо його видано з порушенням ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006 або cudzoziemiec перестав виконувати умови його udzielenia.`,
          sourceLocator: "Art. 39 pkt 1–2",
        },
      ],
      "Стаття регулює скасування дозволу на малий прикордонний рух через первісне порушення умов або їх подальшу втрату.",
      [
        {
          locator: "pkt 1",
          explanation: foreignersLaw.text`Cofnięcie можливе, коли дозвіл був наданий з порушенням умов ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006.`,
        },
        {
          locator: "pkt 2",
          explanation:
            "Окрема підстава — коли після udzielenie дозволу cudzoziemiec перестав виконувати умови для його надання.",
        },
      ],
      "Cofnięcie має одну з двох прямо названих підстав; чинність дозволу не слід оцінювати лише за датою на картці.",
      foreignersLaw.text`Порівняйте умови ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} на дату видачі та на дату перевірки, встановивши, чи йдеться про первісне порушення або подальшу втрату умови.`,
      {
        provisionId: "ustawa-o-cudzoziemcach-art-39",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
