import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
  type LegalTextValue,
} from "../../../legal-text"

import type { LegalProvisionId } from "../../../contracts"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1860_URL = "https://eur-lex.europa.eu/eli/reg/2018/1860/oj"

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
      "32a",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("32a", "Art. 32a")} зобов’язує komendant placówki Straży Granicznej повідомити через Komendant Główny Policji компетентний орган іншої держави Schengen, коли на зовнішньому кордоні у напрямку в’їзду перетинає кордон cudzoziemiec із SIS-записом для цілей ${foreignersLaw.external("art. 3", SIS_2018_1860_URL)} ust. 1 rozporządzenia nr 2018/1860.`,
          sourceLocator: "Art. 32a",
        },
      ],
      "Стаття регулює міждержавне повідомлення про перетин зовнішнього кордону особою з визначеним SIS-записом.",
      [
        {
          locator: "cały przepis",
          explanation: foreignersLaw.text`Умовами є перетин зовнішнього кордону в напрямку в’їзду, SIS-запис для цілей ${foreignersLaw.external("art. 3", SIS_2018_1860_URL)} ust. 1 rozporządzenia nr 2018/1860 та повідомлення через Komendant Główny Policji.`,
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("32a", "Art. 32a")} встановлює інформаційну дію органів і не є самостійним дозволом на в’їзд, підставою pobyt або рішенням про відмову.`,
      foreignersLaw.text`Якщо в матеріалах є посилання на ${foreignersLaw.article("32a", "Art. 32a")}, перевірте напрямок перетину, вид SIS-запису та факт міжорганізаційного повідомлення; не ототожнюйте його з результатом справи про pobyt.`,
      {
        provisionId: "ustawa-o-cudzoziemcach-art-32a",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
