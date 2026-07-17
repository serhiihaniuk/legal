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
      "6",
      [
        {
          kind: "statute-text",
          text: "Орган, який видає decyzję або postanowienie у провадженні за ustawa, може не складати фактичну частину uzasadnienia, якщо цього вимагають obronność, bezpieczeństwo państwa або захист bezpieczeństwo i porządek publiczny.",
          sourceLocator: "Art. 6 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Неможливо відмовитися від складання тієї частини uzasadnienia, яка стосується встановлення przesłanki polskiego pochodzenia cudzoziemca.",
          sourceLocator: "Art. 6 ust. 2",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("6", "Art. 6")} допускає обмеження фактичного обґрунтування з міркувань безпеки, але встановлює виняток для встановлення польського походження.`,
      [
        {
          locator: "Art. 6 ust. 1",
          explanation:
            "Перевірте, чи орган послався саме на одну з названих безпекових підстав і чи йдеться про фактичну частину uzasadnienia.",
        },
        {
          locator: "Art. 6 ust. 2",
          explanation:
            "Навіть за наявності підстав ust. 1 орган не може приховати частину обґрунтування про przesłanka polskiego pochodzenia.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("6", "Art. 6")} регулює обсяг мотивування рішення або постанови. Він не звільняє орган від інших вимог до рішення і не доводить законність прихованої частини автоматично.`,
      "Отримавши decyzja або postanowienie, визначте, яку саме частину мотивів не наведено і на яку підставу послався орган. Якщо спір стосується polskie pochodzenie, перевірте повноту мотивування за ust. 2."
    ),
  ]),
})
