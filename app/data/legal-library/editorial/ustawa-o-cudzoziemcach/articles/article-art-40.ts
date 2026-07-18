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
      "40",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("40", "Art. 40")} ust. 1 передбачає unieważnienie zezwolenia на mały ruch graniczny, коли особа перебуває після дозволеного строку або поза дозволеною strefa przygraniczna за обставин ${foreignersLaw.article("303", "art. 303")} ust. 1.`,
          sourceLocator: "Art. 40 ust. 1 pkt 1–2",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("40", "Art. 40")} ust. 2 дозволяє unieważnienie, якщо cudzoziemiec зловживає правилами малого руху, перебуваючи в strefa przygraniczna для цілей, відмінних від тих, для яких дозвіл може бути надано.`,
          sourceLocator: "Art. 40 ust. 2",
        },
      ],
      "Стаття відрізняє unieważnienie через прострочення або вихід за дозволену зону від можливого unieważnienie за зловживання метою малого прикордонного руху.",
      [
        {
          locator: "ust. 1 pkt 1–2",
          explanation: foreignersLaw.text`Потрібно встановити прострочення pobyt або перебування поза дозволеною strefa; для другого випадку стаття посилається на ${foreignersLaw.article("303", "art. 303")} ust. 1.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Зловживання оцінюється через фактичне перебування в strefa przygraniczna з іншою метою, ніж та, для якої допускається zezwolenie.",
        },
      ],
      foreignersLaw.text`Наслідок залежить від конкретної підстави unieważnienie та доведених дат, місця і мети; ${foreignersLaw.article("40", "Art. 40")} не є автоматичним дозволом на інший вид pobyt.`,
      "Зіставте штампи або інші дані перетину, дозволений строк, межі strefa przygraniczna та фактичну мету поїздок із даними zezwolenie.",
      {
        provisionId: "ustawa-o-cudzoziemcach-art-40",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
