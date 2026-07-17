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
    reviewedArticle("95", {
      provisionId: "ustawa-o-cudzoziemcach-art-95",
      reviewStatus: "reviewed",
      statuteText:
        "Орган, який unieważnił або cofnął national visa для виконання роботи, повідомляє starosta за місцем pobytu cudzoziemiec після того, як рішення стане ostateczna. Після остаточного cofnięcie student visa або national visa для наукових досліджень орган повідомляє Szef Urzędu, а Szef Urzędu передає інформацію державам ЄС, де особа користується мобільністю студента або науковця.",
      statuteLocator: "Art. 95 ust. 1–3",
      practicalText:
        "Це обмін інформацією після остаточності рішення, а не нова підстава для cofnięcie чи самостійна заборона роботи. Для строку важлива дата ostateczna, а для адресата — мета конкретної national visa.",
      practicalLocator: "Art. 95 ust. 1–3",
      summary:
        "Art. 95 встановлює повідомлення starosta, Szef Urzędu та органів ЄС про остаточне скасування або відкликання окремих national visa.",
      rules: [
        {
          locator: "Art. 95 ust. 1",
          explanation:
            "Для national visa з метою роботи повідомлення starosta надсилає орган, який unieważnił або cofnął візу, після ostateczność рішення.",
        },
        {
          locator: "Art. 95 ust. 2",
          explanation:
            "Для student visa та візи для наукових досліджень орган після остаточного cofnięcie повідомляє Szef Urzędu.",
        },
        {
          locator: "Art. 95 ust. 3",
          explanation:
            "Szef Urzędu неzwłocznie передає дані державам ЄС, де cudzoziemiec користується student або short/long-term researcher mobility.",
        },
      ],
      legalEffect:
        "Норма забезпечує адміністративний інформаційний обмін після ostateczna decyzja. Вона не надає pobyt, не замінює дозвіл на роботу і не є сама по собі рішенням про повернення.",
      foreignersCase:
        "З’ясуйте мету візи, орган-рішальник, дату вручення та дату ostateczność. Збережіть рішення і докази повідомлень starosta/Szef Urzędu; окремо перевірте legal stay та право працювати за іншою підставою.",
    }),
  ]),
})
