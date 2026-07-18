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
    reviewedArticle("88", {
      provisionId: "ustawa-o-cudzoziemcach-art-88",
      reviewStatus: "reviewed",
      statuteText:
        "Продовжену wizę krajową розміщують у dokument podróży як наклейку wizowa. У особливих випадках, обґрунтованих інтересом cudzoziemiec, її розміщують на окремому blankiet wizowy.",
      statuteLocator: "Art. 88 ust. 1–2",
      practicalText:
        "Art. 88 регулює спосіб оформлення вже продовженої wizy krajowej, а не підстави її продовження. Blankiet у винятковому випадку не перетворюється на дозвіл на pobyt чи працю.",
      practicalLocator: "Art. 88 ust. 1–2",
      summary:
        "Art. 88 визначає документальну форму, у якій видається продовжена wiza krajowa.",
      rules: [
        {
          locator: "Art. 88 ust. 1",
          explanation: "Звичайна форма — naklejka wizowa у dokument podróży.",
        },
        {
          locator: "Art. 88 ust. 2",
          explanation:
            "За особливих обставин та інтересу cudzoziemiec наклейку можна розмістити на окремому blankiet wizowy.",
        },
      ],
      legalEffect:
        "Норма визначає носій і спосіб фіксації продовженої wiza krajowa. Вона не створює окремої підстави legalność pobytu понад саму візу та не надає prawa do pracy.",
      foreignersCase:
        "Після рішення перевірте номер, дати та форму візи у паспорті або на blankiet, зіставте їх із decyzja та збережіть обидва документи. Не замінюйте ними документи про право працювати.",
    }),
  ]),
})
