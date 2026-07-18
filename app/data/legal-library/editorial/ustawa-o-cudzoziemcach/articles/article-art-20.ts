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
      "20",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Команду, що проводить nabór на посади zastępcy Szef Urzędu, призначає Szef Urzędu.`,
          sourceLocator: "Art. 20 ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`До способу проведення цього nabór застосовуються положення ${foreignersLaw.article("18", "Art. 18")} і ${foreignersLaw.article("19", "Art. 19")}.`,
          sourceLocator: "Art. 20 ust. 2",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("20", "Art. 20")} визначає орган, який призначає команду для nabór zastępcy Szef Urzędu, і відсилає до правил ${foreignersLaw.article("18", "Art. 18")} та ${foreignersLaw.article("19", "Art. 19")}.`,
      [
        {
          locator: "Art. 20 ust. 1",
          explanation:
            "Для nabór zastępcy перевірте, що команду призначив саме Szef Urzędu, а не інший орган.",
        },
        {
          locator: "Art. 20 ust. 2",
          explanation:
            "Застосовуйте правила Art. 18 і Art. 19 лише через це пряме відсилання та перевіряйте їх у повному обсязі для конкретного nabór.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("20", "Art. 20")} організовує кадровий nabór zastępcy Szef Urzędu. Вона не визначає компетенцію у справі про wiza, pobyt чи wykonywanie pracy.`,
      foreignersLaw.text`Якщо питання стосується zastępcy, перевірте акт про призначення команди та дотримання відсилань до ${foreignersLaw.article("18", "Art. 18")} і ${foreignersLaw.article("19", "Art. 19")}. У справі cudzoziemca окремо досліджуйте właściwość органу і upoważnienie.`
    ),
  ]),
})
