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
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle(
      "27",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("27", "Art. 27")} передбачає застосування рішення Ради 94/795/WSiSW до перетину кордону й pobyt у Польщі учнів шкіл із państw trzecich, які беруть участь у шкільній екскурсії з іншої держави-члена UE.`,
          sourceLocator: "Art. 27",
        },
      ],
      "Стаття відсилає до окремого рішення Ради щодо учнів із państw trzecich, які їдуть у шкільній групі з іншої держави-члена Unii Europejskiej.",
      [
        {
          locator: "cały przepis",
          explanation:
            "Спеціальний режим пов’язаний одночасно зі статусом учня, шкільною екскурсією з іншої держави-члена UE та перетином кордону і pobyt у Польщі.",
        },
      ],
      "Стаття не створює загального звільнення для будь-якого неповнолітнього чи туриста; наслідок залежить від умов і документів, передбачених названим рішенням Ради.",
      "У справі підтвердьте, що особа є учнем школи з państwa trzeciego, входить до шкільної екскурсії з іншої держави-члена UE і має документи для цього спеціального режиму.",
      {
        provisionId: "ustawa-o-cudzoziemcach-art-27",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
