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
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle(
      "4",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`У справах за ustawa, що належать до właściwości wojewody, коли wojewoda розглядає odwołanie або органом вищого ступеня є Szef Urzędu do Spraw Cudzoziemców, не застосовується ${foreignersLaw.external("art. 20", "https://eli.gov.pl/eli/DU/2025/428/ogl")} ustawy o wojewodzie i administracji rządowej w województwie.`,
          sourceLocator: "Art. 4",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("4", "Art. 4")} — спеціальне правило про незастосування одного положення ustawy o wojewodzie у визначених справах іноземців.`,
      [
        {
          locator: "Art. 4",
          explanation:
            "Перевірте, що справа врегульована цією ustawa, належить до wojewoda і що саме wojewoda є органом odwoławczy або Szef Urzędu є органом вищого ступеня.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("4", "Art. 4")} змінює лише застосування названого ${foreignersLaw.article("20", "art. 20")} іншого закону; він не визначає матеріальну умову pobyt і не скасовує відведені законом засоби оскарження.`,
      foreignersLaw.text`У процесуальних документах встановіть орган і його роль у конкретній справі. Не використовуйте ${foreignersLaw.article("4", "Art. 4")} як підставу для позитивної чи негативної decyzja по суті.`
    ),
  ]),
})
