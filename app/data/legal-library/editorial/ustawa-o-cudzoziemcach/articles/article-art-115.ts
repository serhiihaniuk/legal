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
    reviewedArticle("115", {
      provisionId: "ustawa-o-cudzoziemcach-art-115",
      reviewStatus: "reviewed",
      statuteText:
        "Отримання zezwolenia na pobyt czasowy i pracę не звільняє від вимог, встановлених окремими правилами для wykonywanie zawodów regulowanych або діяльності.",
      statuteLocator: "Art. 115",
      practicalText:
        "zezwolenie i pracę та дозвіл/кваліфікація для zawód regulowany — різні питання. Потрібно назвати конкретну професію або діяльність і знайти окрему вимогу; сам zezwolenie na pobyt не підтверджує професійне допущення.",
      practicalLocator: "Art. 115",
      summary:
        "Art. 115 прямо розділяє zezwolenie na pobyt czasowy i pracę та вимоги до регульованої професії або діяльності.",
      rules: [
        {
          locator: "Art. 115",
          explanation:
            "Окремі przepisy продовжують діяти навіть після отримання zezwolenie i pracę; їхні вимоги треба виконати самостійно.",
        },
      ],
      legalEffect:
        "zezwolenie встановлює pobyt і, у межах рішення, робочий режим, але не скасовує ліцензію, професійне визнання чи інше обов’язкове допущення.",
      foreignersCase:
        "Визначте, чи є stanowisko zawód regulowany або діяльність зі спеціальним допуском, зберіть підтвердження kwalifikacje/licence/registration та порівняйте їх із Art. 118 рішення.",
    }),
  ]),
})
