import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
  type LegalTextValue,
} from "../../../legal-text"

import type { LegalProvisionId } from "../../../contracts"

const kpaLaw = createLegalTextAuthor("kpa")

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
      "9",
      [
        {
          kind: "statute-text",
          text: "Письма у справах за ustawa вручаються фізичній особі за вказаною адресою або в будь-якому місці, де її знайдено; позбавленим волі cudzoziemcom — через адміністрацію установи.",
          sourceLocator: "Art. 9 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`За виїзду cudzoziemca за кордон застосовується ${kpaLaw.article("40", "art. 40 § 4–5")} KPA. У провадженні MFA, крім справ ${foreignersLaw.article("66", "art. 66")} ust. 4 і ${foreignersLaw.article("79a", "art. 79a")}, документи вручаються через konsul, а до вручень застосовується Prawo konsularne.`,
          sourceLocator: "Art. 9 ust. 3–5",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("9", "Art. 9")} встановлює спеціальні правила doręczenia у справах іноземців, включно з ув’язненням, перебуванням за кордоном і провадженням MFA.`,
      [
        {
          locator: "Art. 9 ust. 1–2",
          explanation:
            "Перевірте адресу, фактичне місце вручення або передачу через адміністрацію установи, якщо особа позбавлена волі.",
        },
        {
          locator: "Art. 9 ust. 3–5",
          explanation:
            "Для особи за кордоном і справи MFA встановіть, який спеціальний режим KPA або Prawo konsularne визначає належне вручення.",
        },
      ],
      foreignersLaw.text`Належне doręczenie запускає процесуальні наслідки, але ${foreignersLaw.article("9", "Art. 9")} не встановлює матеріального права на pobyt чи візу.`,
      "Збережіть конверт, електронне підтвердження або інший доказ doręczenie та визначте, коли почався процесуальний строк. Не обчислюйте строк лише від дати, надрукованої на рішенні."
    ),
  ]),
})
