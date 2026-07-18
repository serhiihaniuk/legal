import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
  type LegalTextValue,
} from "../../../legal-text"

import type { LegalProvisionId } from "../../../contracts"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

import { defineEditorialPart } from "../../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type ReviewedClaim = {
  kind: "statute-text" | "practical-inference"
  text: LegalTextValue
  sourceLocator: string
}

type ReviewedRule = {
  locator: string
  explanation: LegalTextValue
}

type ReviewedArticleMetadata = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed"
}

const reviewedArticle = (
  _article: string,
  claims: readonly ReviewedClaim[],
  summary: LegalTextValue,
  rules: readonly ReviewedRule[],
  legalEffect: LegalTextValue,
  foreignersCase: LegalTextValue,
  metadata: ReviewedArticleMetadata
) => ({
  ...metadata,
  claims,
  summary,
  rules,
  legalEffect,
  foreignersCase,
})
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle(
      "33",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("33", "Art. 33")} визначає, що decyzję o odmowie wjazdu видає komendant placówki Straży Granicznej, від неї належить odwołanie до Komendant Główny Straży Granicznej, а рішення підлягає natychmiastowemu wykonaniu.`,
          sourceLocator: "Art. 33 ust. 1–3",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("33", "Art. 33")} ust. 4–6 регулює відмітку рішення у dokument podróży та делегує міністру спосіб її внесення.`,
          sourceLocator: "Art. 33 ust. 4–6",
        },
      ],
      "Стаття визначає орган, засіб оскарження, виконання та документування decyzja o odmowie wjazdu.",
      [
        {
          locator: "ust. 1–3",
          explanation:
            "Рішення видає komendant placówki Straży Granicznej; odwołanie подається до Komendant Główny Straży Granicznej, а рішення є таким, що підлягає негайному виконанню.",
        },
        {
          locator: "ust. 4–6",
          explanation:
            "Видачу рішення відмічають у документі подорожі, а спосіб відмітки визначається в rozporządzenie.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("33", "Art. 33")} визначає процесуальну рамку відмови на кордоні, але не називає самі матеріальні підстави: їх потрібно встановлювати за ${foreignersLaw.article("28", "Art. 28")} або іншою застосовною нормою.`,
      foreignersLaw.text`Збережіть рішення, дату вручення, відмітку в документі та матеріали контролю. Для оскарження окремо перевірте підставу ${foreignersLaw.article("28", "Art. 28")} і строк та спосіб odwołanie.`,
      {
        provisionId: "ustawa-o-cudzoziemcach-art-33",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
