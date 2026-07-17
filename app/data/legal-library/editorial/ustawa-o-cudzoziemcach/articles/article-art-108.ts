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
    reviewedArticle("108", {
      provisionId: "ustawa-o-cudzoziemcach-art-108",
      reviewStatus: "reviewed",
      statuteText:
        "Якщо строк подання wniosek про temporary residence permit дотримано і wniosek не має braków formalnych або їх своєчасно усунуто, wojewoda ставить stamp, а pobyt cudzoziemiec у Польщі вважається legal від подання до дня, коли рішення стане ostateczna. Правило про legal stay не діє під час zawieszenie провадження на заяву сторони.",
      statuteLocator: "Art. 108 ust. 1–2",
      practicalText:
        "Art. 108 створює лише тимчасовий legal-stay ефект за визначених формальних умов. Stamp не є permit, не підтверджує позитивну eligibility і не дає автоматичного prawa do pracy; роботу треба перевіряти за окремою нормою.",
      practicalLocator: "Art. 108 ust. 1 pkt 1–2; ust. 2",
      summary:
        "Art. 108 визначає stamp і legal stay на час розгляду своєчасної та формально належної заяви про temporary residence permit.",
      rules: [
        {
          locator: "Art. 108 ust. 1 pkt 1",
          explanation:
            "Wojewoda ставить у travel document stamp про подання wniosek, якщо строки й formalne вимоги виконані.",
        },
        {
          locator: "Art. 108 ust. 1 pkt 2",
          explanation:
            "Legal stay триває від дня подання до набрання рішенням про permit ostateczna.",
        },
        {
          locator: "Art. 108 ust. 2",
          explanation:
            "За zawieszenie провадження на заяву сторони legal-stay правило з ust. 1 pkt 2 не застосовується.",
        },
      ],
      legalEffect:
        "Стаття легалізує pobyt лише на період і за умовами, прямо названими в ній. Вона не є рішенням про permit і не замінює правову підставу wykonywania pracy.",
      foreignersCase:
        "Збережіть доказ дати подання, stamp, документи про усунення braków та всі рішення про zawieszenie/відновлення. Для роботи окремо перевірте дозвіл, zwolnienie або параметри чинної decyzja.",
    }),
  ]),
})
