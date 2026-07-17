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
      "44",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("44", "Art. 44")} вимагає подавати заяву на zezwolenie для mały ruch graniczny на formularz, пред’явити чинний dokument podróży, подати фотографію, докази stałe zamieszkanie у strefa przygraniczna та причини частого перетину, а також здати odciski linii papilarnych.`,
          sourceLocator: "Art. 44 ust. 1–3",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("44", "Art. 44")} ust. 4 передбачає відмову у wszczęcia postępowania, якщо cudzoziemiec не подав відбитки, хоча був зобов’язаний це зробити.`,
          sourceLocator: "Art. 44 ust. 4",
        },
      ],
      "Стаття встановлює форму заяви, ідентифікаційні та підтвердні документи для mały ruch graniczny і наслідок ненадання відбитків.",
      [
        {
          locator: "ust. 1–2",
          explanation:
            "До заяви входять дані особи й документа, місце stałe zamieszkanie, причини частого перетину та дані відвідуваної особи або установи; додаються фото й підтвердні документи.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Від cudzoziemiec беруть fingerprints; ненадання їх за обов’язку є підставою odmowa wszczęcia postępowania.",
        },
      ],
      foreignersLaw.text`Подання formularz і документів дозволяє розпочати перевірку, але не гарантує zezwolenie; окремо потрібно виконати умови ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006.`,
      "Підготуйте копію formularz, чинний документ подорожі, фото, докази проживання в зоні та причини частих поїздок. Збережіть підтвердження здачі відбитків.",
      {
        provisionId: "ustawa-o-cudzoziemcach-art-44",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
