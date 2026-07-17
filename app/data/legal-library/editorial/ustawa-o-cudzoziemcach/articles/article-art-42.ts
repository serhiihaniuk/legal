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
      "42",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("42", "Art. 42")} визначає, що zezwolenie на mały ruch graniczny надає, відмовляє в ньому або cofnie konsul за місцем постійного проживання cudzoziemiec; рішення про відмову або cofnięcie можна оскаржити wniosek o ponowne rozpatrzenie протягом 14 днів.`,
          sourceLocator: "Art. 42 ust. 1–4",
        },
      ],
      "Стаття розподіляє компетенцію консула та встановлює спеціальний засіб і строк перегляду рішення про відмову або cofnięcie дозволу.",
      [
        {
          locator: "ust. 1–2",
          explanation:
            "Konsul за місцем stałego zamieszkania cudzoziemiec приймає рішення про udzielenie, odmowa або cofnięcie; відмова і cofnięcie оформлюються decyzja.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "До того самого konsul подається wniosek o ponowne rozpatrzenie справи протягом 14 dni від doręczenie decyzja.",
        },
      ],
      foreignersLaw.text`Стаття встановлює процесуальний шлях перегляду, але не скасовує матеріальні умови ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006 або підстави ${foreignersLaw.article("39", "Art. 39")}.`,
      "Перевірте stałe zamieszkanie, орган, вид рішення та дату його doręczenie. Для строку в 14 днів збережіть доказ подання wniosek o ponowne rozpatrzenie.",
      {
        provisionId: "ustawa-o-cudzoziemcach-art-42",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
