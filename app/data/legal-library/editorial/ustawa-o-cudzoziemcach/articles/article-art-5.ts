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
      "5",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`У справах, що належать до konsul, застосовується Prawo konsularne, якщо ustawa не передбачає іншого. Для видачі, cofanie або unieważnianie wizy krajowej та продовження її чинності або строку pobytu застосовується Wspólnotowy Kodeks Wizowy в частині, не врегульованій dział IV, з виключенням ${foreignersLaw.article("9", "art. 9")} ust. 2 zdanie drugie цього Кодексу.`,
          sourceLocator: "Art. 5 ust. 1–2",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("5", "Art. 5")} розподіляє застосування Prawo konsularne та Wspólnotowy Kodeks Wizowy у консульських і візових справах.`,
      [
        {
          locator: "Art. 5 ust. 1",
          explanation:
            "Спочатку перевірте, чи справа належить до konsul і чи немає спеціального правила в ustawa.",
        },
        {
          locator: "Art. 5 ust. 2",
          explanation: foreignersLaw.text`Для wiza krajowa спершу застосовуйте dział IV; прогалини заповнює Wspólnotowy Kodeks Wizowy, але назване речення ${foreignersLaw.article("9", "art. 9")} ust. 2 не застосовується.`,
        },
      ],
      "Стаття визначає процесуальне джерело для конкретних консульських і візових дій, але не гарантує видачу чи продовження візи.",
      foreignersLaw.text`Визначте вид візи, дію органу та питання, яке регулюється. У висновку окремо назвіть норму ustawa або відповідного Кодексу, а не посилайтеся на ${foreignersLaw.article("5", "Art. 5")} як на матеріальне право.`
    ),
  ]),
})
