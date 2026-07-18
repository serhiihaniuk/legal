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
      "16",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Szef Urzędu do Spraw Cudzoziemców є центральним органом адміністрації, компетентним у справах wjazdu, przejazdu, pobytu та wyjazdu cudzoziemców, nadawania statusu uchodźcy, udzielania ochrony uzupełniającej, azylu та ochrony czasowej; ${foreignersLaw.article("16", "Art. 16")} ust. 1 pkt 4 позначений як (uchylony).`,
          sourceLocator: "Art. 16 ust. 1 pkt 1–6",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Minister właściwy do spraw wewnętrznych sprawuje nadzór над Szefem Urzędu.`,
          sourceLocator: "Art. 16 ust. 2",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("16", "Art. 16")} визначає центральну роль Szef Urzędu та нагляд міністра, але не розподіляє кожну конкретну справу про pobyt між усіма органами.`,
      [
        {
          locator: "Art. 16 ust. 1 pkt 1–3, 5–6",
          explanation:
            "Зіставте предмет справи з переліком: wjazd, przejazd, pobyt, wyjazd, status uchodźcy, ochrona uzupełniająca, azyl або ochrona czasowa. Не використовуйте uchylony pkt 4 як чинну підставу.",
        },
        {
          locator: "Art. 16 ust. 2",
          explanation:
            "Розрізняйте нагляд міністра над Szef Urzędu від процесуальної компетенції органу, який видає рішення у вашій конкретній справі.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("16", "Art. 16")} закріплює організаційну компетенцію Szef Urzędu і ministerialny нагляд. Він сам по собі не створює права на legalność pobytu, wjazd або wykonywanie pracy.`,
      foreignersLaw.text`У процесуальному документі встановіть, який орган фактично видав decyzja або prowadzi postępowanie, і зіставте його роль із конкретною нормою про właściwość. Не робіть висновок про статус cudzoziemca лише з назви Szef Urzędu.`
    ),
  ]),
})
