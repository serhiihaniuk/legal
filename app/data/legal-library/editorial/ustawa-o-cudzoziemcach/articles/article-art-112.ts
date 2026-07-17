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
    reviewedArticle("112", {
      provisionId: "ustawa-o-cudzoziemcach-art-112",
      reviewStatus: "reviewed",
      statuteText:
        "Art. 112 у тексті редакції Dz.U. 2025 poz. 1079 позначена як `uchylony` і не містить чинного правила.",
      statuteLocator: "Art. 112",
      practicalText:
        "Скасований запис не можна використовувати як чинну підставу для надання, cofnięcie або строку temporary residence permit. Для правової оцінки використовуйте чинний текст сусідніх статей і source reader, а історичну редакцію — лише з її датою.",
      practicalLocator: "Art. 112",
      summary:
        "Art. 112 скасована (uchylony); поточна редакція не містить припису, який можна застосувати самостійно.",
      rules: [
        {
          locator: "Art. 112",
          explanation:
            "Локальний corpus і PDF містять лише позначення `(uchylony)`.",
        },
      ],
      legalEffect:
        "Art. 112 не створює чинного обов’язку, умови permit чи процесуального строку в редакції Dz.U. 2025 poz. 1079.",
      foreignersCase:
        "Не будуйте висновок на Art. 112 як на чинній нормі. Перевірте дату цитованого документа і перейдіть до source reader для актуальної норми, що регулює питання.",
    }),
  ]),
})
