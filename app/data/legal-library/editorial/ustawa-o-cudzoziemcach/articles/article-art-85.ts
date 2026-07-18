import type { LegalProvisionId } from "../../../contracts"

import { authorLegalTextCitationsTree } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type ReviewedArticleData = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed"
  statuteText: string
  statuteLocator: string
  practicalText: string
  practicalLocator: string
  summary: string
  rules: readonly { locator: string; explanation: string }[]
  legalEffect: string
  foreignersCase: string
}

const provisionId = (article: string) =>
  `ustawa-o-cudzoziemcach-art-${article}` as ForeignersActProvisionId

const reviewedArticle = (article: string, data: ReviewedArticleData) => ({
  provisionId: data.provisionId ?? provisionId(article),
  reviewStatus: data.reviewStatus,
  claims: [
    {
      kind: "statute-text" as const,
      text: data.statuteText,
      sourceLocator: data.statuteLocator,
    },
    {
      kind: "practical-inference" as const,
      text: data.practicalText,
      sourceLocator: data.practicalLocator,
    },
  ],
  summary: data.summary,
  rules: data.rules,
  legalEffect: data.legalEffect,
  foreignersCase: data.foreignersCase,
})
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle("85", {
      provisionId: "ustawa-o-cudzoziemcach-art-85",
      reviewStatus: "reviewed",
      statuteText:
        "Cudzoziemiec, який хоче продовжити pobyt на підставі wizy Schengen або wiza krajowa, подає заповнений wniosek не пізніше останнього дня legalność pobytu. Форма містить дані особи й dokument podróży, попередні візи, обґрунтування, поїздки за останні 5 років, кошти, ubezpieczenie zdrowotne та zatrudnienie; застосовуються також Art. 77 ust. 1 pkt 2–3 і Art. 25 ust. 4, а dokument podróży пред’являється для огляду.",
      statuteLocator: "Art. 85 ust. 1–4",
      practicalText:
        "Строк подання рахується від legalność pobytu, а не лише від дати закінчення наклейки візи. Відомість про zatrudnienie у формі не доводить prawa do pracy; продовження візи та дозвіл працювати треба аналізувати окремо.",
      practicalLocator: "Art. 85 ust. 1–2",
      summary:
        "Art. 85 встановлює строк, зміст та базові документи wniosek про продовження Schengen або wiza krajowa.",
      rules: [
        {
          locator: "Art. 85 ust. 1",
          explanation:
            "Wniosek подається не пізніше дня, коли спливає legalność pobytu cudzoziemiec у Польщі.",
        },
        {
          locator: "Art. 85 ust. 2 pkt 1–8",
          explanation:
            "Форма охоплює ідентифікаційні дані, dokument podróży, візи, причину продовження, закордонні поїздки, кошти, страховку та працю.",
        },
        {
          locator: "Art. 85 ust. 3–4",
          explanation:
            "До заяви застосовуються визначені вимоги Art. 77, зокрема щодо документа подорожі, який також треба пред’явити для огляду.",
        },
      ],
      legalEffect:
        "Належно поданий wniosek дає змогу розглянути продовження візи в компетентному органі, але Art. 85 сам не продовжує legalność pobytu і не надає права працювати.",
      foreignersCase:
        "Зафіксуйте останній день legalność pobytu і доказ подання до нього. Перевірте всі поля форми, копію паспорта, попередні візи, фінансові та страхові документи, опис мети та окремі документи щодо роботи.",
    }),
  ]),
})
