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
    reviewedArticle("103", {
      provisionId: "ustawa-o-cudzoziemcach-art-103",
      reviewStatus: "reviewed",
      statuteText:
        "У провадженні про надання або cofnięcie zezwolenie na pobyt czasowy під час дій, спрямованих на встановлення обставин Art. 100 ust. 1 pkt 5, не застосовується Art. 79 Kodeks postępowania administracyjnego.",
      statuteLocator: "Art. 103",
      practicalText:
        "Це спеціальне процесуальне правило для перевірки неправдивих даних, інформації чи документів; воно не доводить саме по собі, що підроблення було, і не замінює доказування органом.",
      practicalLocator: "Art. 103 w związku z Art. 100 ust. 1 pkt 5",
      summary:
        "Art. 103 встановлює виняток із застосування Art. 79 KPA у вузькій доказовій частині справ про zezwolenie na pobyt czasowy.",
      rules: [
        {
          locator: "Art. 103",
          explanation:
            "Виняток діє лише під час дій для встановлення фактів із Art. 100 ust. 1 pkt 5 — неправдивих даних, інформації, свідчень або підроблених документів.",
        },
      ],
      legalEffect:
        "Стаття змінює процесуальний спосіб проведення визначених перевірок, але не є самостійною матеріально-правовою підставою відмови чи cofnięcie і не визначає prawa do pracy.",
      foreignersCase:
        "Збережіть копії поданих документів, запити та протоколи органу, встановіть, який факт Art. 100 ust. 1 pkt 5 перевіряється, і дайте адресні пояснення щодо автентичності та походження документа.",
    }),
  ]),
})
