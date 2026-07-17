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
      "18",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Посаду Szef Urzędu може займати особа, яка має tytuł zawodowy magistra або рівнозначний, є громадянином Польщі, користується повними публічними правами, не була остаточно засуджена за умисний злочин або умисне przestępstwo skarbowe, має управлінські компетенції, щонайменше 6 років staż pracy (з них 3 роки на керівній посаді) та знання у справах компетенції Szef Urzędu.`,
          sourceLocator: "Art. 18 pkt 1–7",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("18", "Art. 18")} встановлює кваліфікаційні вимоги до особи, яка може займати посаду Szef Urzędu.`,
      [
        {
          locator: "Art. 18 pkt 1–4",
          explanation:
            "Перевірте освіту, obywatelstwo polskie, повні publiczne prawa та відсутність prawomocne засудження за названі умисні злочини.",
        },
        {
          locator: "Art. 18 pkt 5–7",
          explanation:
            "Окремо перевірте kompetencje kierownicze, мінімальний staż pracy з вимогою 3 років на керівній посаді та знання сфери завдань Szef Urzędu.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("18", "Art. 18")} регулює доступ до конкретної державної посади, а не матеріальні умови wjazdu, pobytu чи pracy cudzoziemca.`,
      foreignersLaw.text`Якщо аналізуєте повноваження органу, відокремте вимоги до кандидата за ${foreignersLaw.article("18", "Art. 18")} від питання, чи має конкретний працівник upoważnienie та чи належно видано рішення. Ця стаття не підтверджує і не спростовує legal stay.`
    ),
  ]),
})
