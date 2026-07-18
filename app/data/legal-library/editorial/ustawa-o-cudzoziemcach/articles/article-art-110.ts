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
    reviewedArticle("110", {
      provisionId: "ustawa-o-cudzoziemcach-art-110",
      reviewStatus: "reviewed",
      statuteText:
        "Art. 110 у тексті редакції Dz.U. 2025 poz. 1079 позначена як `uchylony` і не містить чинного правила.",
      statuteLocator: "Art. 110",
      practicalText:
        "Позначка `uchylony` означає, що з цього запису не можна виводити сучасний обов’язок, умову zezwolenie або процедурний строк; для історичного питання потрібна відповідна попередня редакція, а для поточного — інша чинна норма.",
      practicalLocator: "Art. 110",
      summary:
        "Art. 110 скасована (uchylony); у поточному джерелі немає чинного тексту для застосування.",
      rules: [
        {
          locator: "Art. 110",
          explanation:
            "Локальний текст джерела та PDF містять лише позначення `(uchylony)`.",
        },
      ],
      legalEffect:
        "Art. 110 не є чинною самостійною підставою, обов’язком або процедурним правилом у редакції Dz.U. 2025 poz. 1079.",
      foreignersCase:
        "Не посилайтеся на Art. 110 як на актуальне правило. Якщо документ цитує цю статтю, перевірте дату документа та використайте офіційний текст джерела для пошуку перехідної або чинної замінної норми.",
    }),
  ]),
})
