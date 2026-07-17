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
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle("112a", {
      provisionId: "ustawa-o-cudzoziemcach-art-112a",
      reviewStatus: "reviewed",
      statuteText:
        "Рішення про temporary residence permit видається протягом 60 днів; строк починається від останньої з подій — особистого подання/явки, усунення braków formalnych або подання доказів Art. 106 ust. 2 pkt 2 чи безрезультатного спливу строку Art. 106 ust. 2a. Для Art. 139a та Art. 139o відлік прив’язаний до повного wniosek і доказів jednostka przyjmująca. Апеляційне провадження закінчується за 90 днів, а за formalne braki odwołanie строк рахується після їх усунення.",
      statuteLocator: "Art. 112a ust. 1–5",
      practicalText:
        "Це строки завершення провадження, а не правило `мовчазної згоди` чи автоматичного надання permit. Потрібно зафіксувати кожну подію, яка може бути останньою, і відокремити строк органу від legal stay за Art. 108 та права на працю.",
      practicalLocator: "Art. 112a ust. 1–5",
      summary:
        "Art. 112a визначає 60-денний строк першої інстанції, спеціальний момент його початку та 90-денний строк апеляційного провадження.",
      rules: [
        {
          locator: "Art. 112a ust. 1–2",
          explanation:
            "60-денний строк починається з останньої події між особистою процедурою, формально повним wniosek і доказами або безрезультатним спливом строку на їх подання.",
        },
        {
          locator: "Art. 112a ust. 3",
          explanation:
            "Для Art. 139a/139o відлік залежить від повного wniosek jednostka przyjmująca та її доказів або спливу наданого строку.",
        },
        {
          locator: "Art. 112a ust. 4–5",
          explanation:
            "Odwoławcze postępowanie має завершитися за 90 днів; якщо odwołanie має formalne braki, строк починається після їх усунення.",
        },
      ],
      legalEffect:
        "Стаття дисциплінує строки розгляду і визначає, коли вони починаються. Сам сплив строку не є рішенням про permit, legal stay або work authorization.",
      foreignersCase:
        "Зробіть timeline: wniosek, особиста явка, усунення braków, подання доказів, wezwanie Art. 106, odwołanie та усунення його недоліків. Порівняйте календар із 60/90 днями та збережіть докази кожної події.",
    }),
  ]),
})
