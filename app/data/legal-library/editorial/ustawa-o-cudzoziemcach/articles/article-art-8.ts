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
      "8",
      [
        {
          kind: "statute-text",
          text: "Заяви у справах за ustawa складаються польською. Документи іноземною мовою, що є доказами, подаються з перекладом польською, виконаним tłumacz przysięgły.",
          sourceLocator: "Art. 8 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "У провадженні перед ministrem właściwym do spraw zagranicznych або konsul заяви й доказові документи можна подати польською або мовою, яку вкаже орган; у protokół przesłuchania зазначається ім’я та прізвище перекладача.",
          sourceLocator: "Art. 8 ust. 3–4",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("8", "Art. 8")} визначає мову заяв, доказів і протоколу допиту.`,
      [
        {
          locator: "Art. 8 ust. 1–2",
          explanation:
            "Для звичайного провадження готуйте wniosek польською, а іншомовні доказові документи — з перекладом tłumacz przysięgły.",
        },
        {
          locator: "Art. 8 ust. 3–4",
          explanation:
            "У справах MFA або konsul перевірте мову, яку вказав орган, і наявність даних перекладача в протоколі.",
        },
      ],
      foreignersLaw.text`Недотримання мовної форми впливає на доказове подання, але ${foreignersLaw.article("8", "Art. 8")} сама не встановлює результату справи про pobyt чи wiza.`,
      "Складіть список іншомовних документів і перевірте, чи кожен доказ має належний польський переклад або підпадає під спеціальне правило для konsul чи MFA."
    ),
  ]),
})
