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
      "34",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("34", "Art. 34")} обмежує postępowanie Straży Granicznej перед рішенням про odmowa wjazdu допитом cudzoziemiec, перевіркою документів, допитом супутників, перевірками у реєстрах та отриманням необхідної інформації; якщо невідповідність умов безсумнівна, дії можуть обмежитися перевіркою документів.`,
          sourceLocator: "Art. 34 ust. 1–2",
        },
      ],
      "Стаття описує обсяг перевірки перед рішенням про відмову у в’їзді та допускає спрощення, коли невиконання умов очевидне.",
      [
        {
          locator: "ust. 1 pkt 1–5",
          explanation:
            "Орган може провести названі в статті допити, контроль документів, перевірки реєстрів та отримання інформації від державних органів, установ, підприємств, організацій або фізичних осіб.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Обмеження лише перевіркою документів можливе, якщо обставини невиконання умов перетину кордону не викликають сумнівів.",
        },
      ],
      "Норма визначає процесуальний обсяг прикордонної перевірки, але сама не доводить, що умови в’їзду виконані або порушені у конкретній справі.",
      "Порівняйте висновок органу з документами та зафіксованими перевірками. Якщо рішення спирається лише на документи, перевірте, чи справді відсутність умови була безсумнівною.",
      {
        provisionId: "ustawa-o-cudzoziemcach-art-34",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
