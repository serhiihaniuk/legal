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
      "24",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Члени екіпажів морських суден, які прибувають до польських портів і перетинають granicę для сходження на берег та перебування в межах miasta portowego і прилеглих gmin, звільнені від обов’язку мати wizę протягом перебування судна в port.`,
          sourceLocator: "Art. 24 ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Особи, названі в ${foreignersLaw.article("24", "Art. 24")} ust. 2 через посилання на art. 4 ust. 2 lit. a rozporządzenia Rady (WE) nr 539/2001, звільнені від obowiązek posiadania wizy, якщо їхній загальний pobyt у Польщі не перевищує 90 днів.`,
          sourceLocator: "Art. 24 ust. 2",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("24", "Art. 24")} передбачає два спеціальні, обмежені правила zwolnienie z obowiązku wizowego: для екіпажу судна в port та для категорії осіб із ust. 2 за умови загального pobyt до 90 днів.`,
      [
        {
          locator: "Art. 24 ust. 1",
          explanation:
            "Для екіпажу перевірте прибуття саме морського судна до польського port, мету сходження та межі miasta portowego і прилеглих gmin; звільнення діє під час перебування судна в port.",
        },
        {
          locator: "Art. 24 ust. 2",
          explanation:
            "Не розширюйте посилання на всіх безвізових осіб: встановіть, чи особа входить до категорії, названої в art. 4 ust. 2 lit. a в тексті статті, і порахуйте загальний pobyt до 90 днів.",
        },
      ],
      foreignersLaw.text`Звільнення за ${foreignersLaw.article("24", "Art. 24")} стосується лише obowiązek posiadania wizy в описаних межах. Воно не скасовує автоматично вимоги щодо dokument podróży, контролю graniczna, legalnego pobytu поза межами винятку чи права на pracę.`,
      foreignersLaw.text`Визначте підставу звільнення, територіальні та часові межі й збережіть документи екіпажу або розрахунок строку pobyt. Не використовуйте сам факт безвізового винятку як доказ дозволу на роботу або необмежене перебування.`
    ),
  ]),
})
