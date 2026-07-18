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
      "21",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Szef Urzędu виконує свої завдання за допомогою Urząd, який є urzędem administracji rządowej.`,
          sourceLocator: "Art. 21 ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`В Urząd можуть виконувати обов’язки, крім його працівників, функціонери ABW і AW, Służby Ochrony Państwa, Państwowej Straży Pożarnej, Policji, Straży Granicznej, а також Służby Wywiadu Wojskowego і żołnierze цієї служби — на правових підставах, перелічених у pkt 1–6.`,
          sourceLocator: "Art. 21 ust. 2 pkt 1–6",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Minister właściwy do spraw wewnętrznych надає Urząd statut у drodze zarządzenia, визначаючи його організацію з урахуванням завдань Szef Urzędu та потреби належного функціонування.`,
          sourceLocator: "Art. 21 ust. 3",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("21", "Art. 21")} описує Urząd як апарат Szef Urzędu, можливе виконання обов’язків відрядженими функціонерами та затвердження його організації.`,
      [
        {
          locator: "Art. 21 ust. 1–2",
          explanation:
            "Відокремте Urząd як апарат органу від конкретної особи, яка підписує акт. Перелік служб у ust. 2 не означає автоматичної компетенції кожного функціонера приймати рішення.",
        },
        {
          locator: "Art. 21 ust. 3",
          explanation:
            "Організаційну структуру шукайте в zarządzenie про statut Urząd; не виводьте з самої статті конкретний внутрішній розподіл справ.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("21", "Art. 21")} визначає організаційну основу роботи Szef Urzędu, але сама не надає cudzoziemcowi pobyt, wjazd або prawo do pracy і не замінює перевірку upoważnienie.`,
      foreignersLaw.text`У документі встановіть орган, підрозділ і підписанта, а за потреби — його upoważnienie. Наявність працівника або функціонера певної служби в Urząd сама по собі не доводить законність чи результат рішення.`
    ),
  ]),
})
