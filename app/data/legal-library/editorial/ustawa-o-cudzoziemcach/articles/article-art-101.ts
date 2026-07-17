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
    reviewedArticle("101", {
      provisionId: "ustawa-o-cudzoziemcach-art-101",
      reviewStatus: "reviewed",
      statuteText:
        "Zezwolenie na pobyt czasowy cofaється, якщо припинилася мета, заради якої його надано, cudzoziemiec перестав виконувати вимоги заявленої мети або виникла хоча б одна обставина Art. 100 ust. 1 pkt 2 чи 4–8.",
      statuteLocator: "Art. 101 pkt 1–3",
      practicalText:
        "Cofnięcie потребує встановлення зміни після надання дозволу та відповідного пункту, а не лише припущення, що мета змінилася. Припинення permit не дорівнює автоматичній легалізації іншою підставою; legal stay і work authorization треба перевірити за датами та новими документами.",
      practicalLocator: "Art. 101 pkt 1–3",
      summary:
        "Art. 101 визначає три групи підстав для cofnięcie temporary residence permit: припинення мети, втрату умов або окремі перешкоди з Art. 100.",
      rules: [
        {
          locator: "Art. 101 pkt 1",
          explanation:
            "Підстава — припинення мети pobyt, яка була причиною надання zezwolenie.",
        },
        {
          locator: "Art. 101 pkt 2",
          explanation:
            "Підстава — втрата вимог до дозволу, пов’язаних із declarowany cel pobytu.",
        },
        {
          locator: "Art. 101 pkt 3",
          explanation:
            "Підставою є обставина Art. 100 ust. 1 pkt 2 або 4–8: зокрема wykaz/SIS, безпека, неправдиві документи, податки, витрати powrót або лікування.",
        },
      ],
      legalEffect:
        "Стаття є materialною підставою для cofnięcie уже наданого zezwolenie. Вона не визначає, що іноземець автоматично отримує інший pobyt або дозвіл на працю після припинення.",
      foreignersCase:
        "Зафіксуйте дату припинення мети або умови, фактичну діяльність і документи, на які спирається organ. Порівняйте рішення про cofnięcie з паспортом, картою pobytu, legal stay та окремою підставою work authorization.",
    }),
  ]),
})
