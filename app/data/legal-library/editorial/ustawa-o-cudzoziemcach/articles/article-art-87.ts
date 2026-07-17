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
    reviewedArticle("87", {
      provisionId: "ustawa-o-cudzoziemcach-art-87",
      reviewStatus: "reviewed",
      statuteText:
        "Якщо строк подання збережено і wniosek про продовження візи не має braków formalnych або їх своєчасно усунуто, wojewoda ставить у travel document stamp про подання, а pobyt cudzoziemiec вважається legal від дня подання до дня, коли рішення про продовження стане ostateczna. Цей ефект не застосовується, якщо провадження зупинено на заяву сторони.",
      statuteLocator: "Art. 87 ust. 1–2",
      practicalText:
        "Art. 87 охоплює лише legal stay на час конкретного провадження про продовження візи. Stamp або очікування decyzja не є zezwolenie na pobyt і не доводять окремо prawa do pracy.",
      practicalLocator: "Art. 87 ust. 1 pkt 1–2; ust. 2",
      summary:
        "Art. 87 встановлює stamp та тимчасовий legal-stay ефект для своєчасного й формально належного wniosek про продовження візи.",
      rules: [
        {
          locator: "Art. 87 ust. 1 pkt 1",
          explanation:
            "За виконання умов wojewoda розміщує в travel document odcisk stempla, що підтверджує подання wniosek.",
        },
        {
          locator: "Art. 87 ust. 1 pkt 2",
          explanation:
            "Pobyt вважається legal від подання до набрання рішенням про продовження візи ostateczna.",
        },
        {
          locator: "Art. 87 ust. 2",
          explanation:
            "На час zawieszenie провадження за заявою сторони правило про legal pobyt з ust. 1 pkt 2 не застосовується.",
        },
      ],
      legalEffect:
        "Стаття тимчасово визначає legal stay у межах візового провадження. Вона не гарантує продовження візи, не визначає eligibility для zezwolenie na pobyt і не замінює перевірку prawa do pracy.",
      foreignersCase:
        "Зберігайте wniosek, підтвердження дати, stamp, документи про усунення braków formalnych та всі повідомлення про zawieszenie. Для роботодавця окремо підтвердьте правову підставу конкретної роботи.",
    }),
  ]),
})
