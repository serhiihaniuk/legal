import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
  type LegalTextValue,
} from "../../../legal-text"

import type { LegalProvisionId } from "../../../contracts"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SCHENGEN_BORDERS_CODE_URL =
  "https://eur-lex.europa.eu/eli/reg/2016/399/oj"

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
      "32",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("32", "Art. 32")} дозволяє komendant placówki Straży Granicznej за згодою Komendant Główny Straży Granicznej дозволити в’їзд на строк не більше 15 днів у випадку ${foreignersLaw.external("art. 6", SCHENGEN_BORDERS_CODE_URL)} ust. 5 lit. c kodeks graniczny Schengen.`,
          sourceLocator: "Art. 32 ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("32", "Art. 32")} ust. 2–3 передбачає повідомлення іншої держави Schengen про такий дозвіл за наявності SIS-запису та виключає застосування Kodeks postępowania administracyjnego у цій справі.`,
          sourceLocator: "Art. 32 ust. 2–3",
        },
      ],
      "Стаття дає вузький механізм дозволу на в’їзд максимум на 15 днів у спеціальному випадку Schengen і визначає обмін інформацією та процесуальне правило.",
      [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Потрібні конкретний випадок ${foreignersLaw.external("art. 6", SCHENGEN_BORDERS_CODE_URL)} ust. 5 lit. c kodeks graniczny Schengen і згода Komendant Główny Straży Granicznej.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо дані cudzoziemiec є в SIS для odmowa wjazdu і pobytu, про дозвіл повідомляють орган держави, яка внесла запис.",
        },
        {
          locator: "ust. 3",
          explanation:
            "У справі про udzielenie цього дозволу Kodeks postępowania administracyjnego не застосовується.",
        },
      ],
      "Це обмежений дозвіл на конкретний строк і випадок, а не звичайне zezwolenie na pobyt; з тексту не випливає автоматичне продовження після 15 днів.",
      "Перевірте підставу за kodeks graniczny Schengen, згоду компетентного органу, максимальний строк і можливий SIS-запис. Не описуйте цей дозвіл як позитивне рішення у звичайній адміністративній процедурі.",
      {
        provisionId: "ustawa-o-cudzoziemcach-art-32",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
