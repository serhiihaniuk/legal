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
      "11",
      [
        {
          kind: "statute-text",
          text: "Функціонери Straż Graniczna у провадженнях за ustawa можуть провести wywiad środowiskowy або встановити місце перебування małżonek, члена сім’ї чи особи, пов’язаної сімейними więzi.",
          sourceLocator: "Art. 11 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Wywiad може охоплювати дані, адресу, сім’ю, спільне господарство, роботу або діяльність, навчання, матеріальні умови, безпеку та інші обставини; за суперечностей орган може перевірити локал, за згодою, у години 6:00–22:00.",
          sourceLocator: "Art. 11 ust. 2–8",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("11", "Art. 11")} надає Straż Graniczna інструменти перевірки фактичних обставин справи, включно з місцем проживання та сімейними зв’язками.`,
      [
        {
          locator: "Art. 11 ust. 2",
          explanation:
            "Перевірка може охоплювати лише перелічені напрями фактичної інформації; зіставте їх із питанням конкретного провадження.",
        },
        {
          locator: "Art. 11 ust. 3–4",
          explanation:
            "Перевірка lokalu можлива після непідтвердження або суперечності даних; функціонер може увійти, вимагати показати речі та пояснення для підтвердження pobyt.",
        },
        {
          locator: "Art. 11 ust. 5–8",
          explanation:
            "Перевірте присутність особи, часовий діапазон, згоду та документування. Відмова або перешкоджання означає, що місце pobyt не підтверджено; незалежну неможливість орган повідомляє органу провадження.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("11", "Art. 11")} регулює збір і перевірку інформації, але результат wywiad не замінює оцінку всіх матеріальних умов та доказів у справі.`,
      foreignersLaw.text`Збережіть протокол, питання, дані про присутніх, згоду та час перевірки lokalu. Якщо орган посилається на непідтверджене місце проживання, перевірте, яка саме дія ${foreignersLaw.article("11", "Art. 11")} це обґрунтовує.`
    ),
  ]),
})
