import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
  type LegalTextValue,
} from "../../../legal-text"

import type { LegalProvisionId } from "../../../contracts"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

import { defineEditorialPart } from "../../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type EditorialEntry = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed"
  claims: readonly {
    kind: "statute-text" | "practical-inference"
    text: LegalTextValue
    sourceLocator: string
  }[]
  summary: LegalTextValue
  rules: readonly { locator: string; explanation: LegalTextValue }[]
  legalEffect: LegalTextValue
  foreignersCase: LegalTextValue
}

const provisionId = (article: string) =>
  `ustawa-o-cudzoziemcach-art-${article}` as ForeignersActProvisionId

const reviewedArticle = (
  article: string,
  claims: EditorialEntry["claims"],
  summary: LegalTextValue,
  rules: EditorialEntry["rules"],
  legalEffect: LegalTextValue,
  foreignersCase: LegalTextValue
): EditorialEntry => ({
  provisionId: provisionId(article),
  reviewStatus: "reviewed",
  claims,
  summary,
  rules,
  legalEffect,
  foreignersCase,
})
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle(
      "17",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Prezes Rady Ministrów powołuje та odwołuje Szefa Urzędu на wniosek ministra właściwego do spraw wewnętrznych; кандидатів добирають у відкритому конкурентному nabór.`,
          sourceLocator: "Art. 17 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Minister właściwy do spraw wewnętrznych powołuje та odwołuje zastępców Szefa Urzędu на wniosek Szefa Urzędu, також серед осіб, відібраних у відкритому конкурентному nabór.`,
          sourceLocator: "Art. 17 ust. 3–4",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("17", "Art. 17")} регулює, хто призначає та звільняє Szef Urzędu і його zastępcy та які wnioski й nabór для цього потрібні.`,
      [
        {
          locator: "Art. 17 ust. 1–2",
          explanation:
            "Для Szef Urzędu перевірте послідовність: відкритий конкурентний nabór, wniosek minister właściwy do spraw wewnętrznych і дія Prezes Rady Ministrów.",
        },
        {
          locator: "Art. 17 ust. 3–4",
          explanation:
            "Для zastępca перевірте wniosek Szef Urzędu та рішення minister właściwy do spraw wewnętrznych; не змішуйте цю процедуру з компетенцією wojewoda у справі іноземця.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("17", "Art. 17")} визначає кадрову процедуру керівництва Urząd. Вона не є підставою для надання, відмови чи cofnięcia дозволу на pobyt або wizy.`,
      foreignersLaw.text`Якщо питання стосується організації Urząd, перевірте wniosek, спосіб nabór і акт powołania. Для справи cudzoziemca окремо встановіть законну właściwość органу та не виводьте її лише з правил призначення керівника.`
    ),
  ]),
})
