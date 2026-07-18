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
    reviewedArticle("94", {
      provisionId: "ustawa-o-cudzoziemcach-art-94",
      reviewStatus: "reviewed",
      statuteText:
        "Decyzja про cofnięcie або unieważnienie Schengen чи wiza krajowa підлягає natychmiastowemu wykonaniu. Рішення щодо wiza krajowa видається на встановленій формі із визначеними реквізитами, включно з правовою підставою, причинами та pouczenie про wniosek/odwołanie; видачу рішення відмічають у dokument podróży або на blankiet, а minister може доручити цю дію konsul.",
      statuteLocator: "Art. 94 ust. 1–4",
      practicalText:
        "Треба розділити виконання рішення від права на його перегляд: сам факт подання засобу оскарження не дозволяє ігнорувати текст про natychmiastowe wykonanie. Перевірте, чи decyzja містить належне pouczenie та відмітку.",
      practicalLocator: "Art. 94 ust. 1–4",
      summary:
        "Art. 94 визначає негайне виконання рішення про візу, обов’язковий зміст формуляр рішення щодо wizy krajowej і спосіб відмітки у документах.",
      rules: [
        {
          locator: "Art. 94 ust. 1",
          explanation:
            "Рішення про cofnięcie або unieważnienie Schengen чи wiza krajowa підлягає негайному виконанню.",
        },
        {
          locator: "Art. 94 ust. 2",
          explanation:
            "Форма рішення щодо wizy krajowej містить орган, сторону, розпорядчу частину, дані візи, підставу і причини, засіб та порядок оскарження, дату, підпис і печатку.",
        },
        {
          locator: "Art. 94 ust. 3–4",
          explanation:
            "Видачу рішення відмічають у dokument podróży або на blankiet; minister може доручити цю технічну дію konsul.",
        },
      ],
      legalEffect:
        "Негайне виконання стосується рішення про візу; воно не перетворює візове рішення на рішення про pobyt або право на працю.",
      foreignersCase:
        "Зафіксуйте дату вручення, реквізити форми, відмітку в паспорті/blankiet і правильний засіб оскарження з pouczenie. Після цього окремо перевірте, чи існує інша чинна підстава legalność pobytu або роботи.",
    }),
  ]),
})
