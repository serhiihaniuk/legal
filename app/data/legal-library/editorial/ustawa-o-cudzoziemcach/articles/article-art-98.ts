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
    reviewedArticle("98", {
      provisionId: "ustawa-o-cudzoziemcach-art-98",
      reviewStatus: "reviewed",
      statuteText:
        "Zezwolenia na pobyt czasowy надається, а у випадках Art. 160, 181 і 187 може надаватися на wniosek, якщо cudzoziemiec відповідає вимогам, пов’язаним із deklarowany cel pobytu, і обставини виправдовують pobyt у Польщі довше 3 місяців. Заяви за Art. 139a ust. 1 і Art. 139o ust. 1 подає jednostka przyjmująca. Дозвіл надається на необхідний для мети строк, але не довше 3 років.",
      statuteLocator: "Art. 98 ust. 1–2",
      practicalText:
        "Art. 98 — загальна рамка умови надання для тимчасового pobyt, не позитивна відповідь на будь-яку заяву. Треба довести реальний cel, обставини і тривалість понад 3 місяці; legalność pobytu під час розгляду та право працювати мають окремі підстави.",
      practicalLocator: "Art. 98 ust. 1–2",
      summary:
        "Art. 98 встановлює загальну умову та максимальний строк zezwolenia na pobyt czasowy, а для спеціальних випадків мобільності визначає, що заявником є jednostka przyjmująca.",
      rules: [
        {
          locator: "Art. 98 ust. 1",
          explanation:
            "Потрібні відповідність вимогам заявленої мети та обставини, що виправдовують перебування понад 3 місяці; для Art. 160, 181, 187 закон формулює можливість надання на wniosek.",
        },
        {
          locator: "Art. 98 ust. 1a",
          explanation:
            "Для дозволів Art. 139a ust. 1 та Art. 139o ust. 1 wniosek подає jednostka przyjmująca.",
        },
        {
          locator: "Art. 98 ust. 2",
          explanation:
            "Строк визначається необхідністю реалізації мети, але максимум становить 3 роки.",
        },
      ],
      legalEffect:
        "Стаття дає критерій для розгляду zezwolenie, але не замінює спеціальних умов конкретного виду дозволу. Вона сама не встановлює права на працю без окремої підстави та параметрів рішення.",
      foreignersCase:
        "Назвіть фактичний cel pobytu, планований період понад 3 місяці та доказ кожної спеціальної умови. Перевірте, хто має бути заявником, і окремо зафіксуйте legalność pobytu та правову підставу роботи.",
    }),
  ]),
})
