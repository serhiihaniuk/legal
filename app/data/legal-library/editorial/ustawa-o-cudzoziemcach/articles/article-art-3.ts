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
      "3",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("3", "Art. 3")} містить легальні визначення, зокрема azyl, cudzoziemiec, dokument podróży, doświadczenie zawodowe, działalność zawodowa, granica, mały ruch graniczny, mobilność, wiza, powrót, status uchodźcy та wykonywanie pracy.`,
          sourceLocator: "Art. 3 pkt 1–25",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`У чинному тексті ${foreignersLaw.article("3", "Art. 3")} pkt 7b і pkt 7c позначені як (uchylony); інші визначення містять спеціальні пороги та умови, зокрема 90/180, 180 або 360 днів там, де це прямо зазначено.`,
          sourceLocator: "Art. 3 pkt 7b–7c, 7d–7j",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("3", "Art. 3")} задає словник ustawa. Перед аналізом справи треба встановити, яке саме законне визначення відповідає фактам, а не покладатися на побутове значення слова.`,
      [
        {
          locator: "Art. 3 pkt 2–3",
          explanation:
            "Cudzoziemiec — кожен, хто не має польського громадянства; dokument podróży має бути визнаний Польщею і давати право перетинати кордон.",
        },
        {
          locator: "Art. 3 pkt 7, 7a, 7d–7j",
          explanation:
            "Mały ruch graniczny та різні види mobilność мають окремі умови й періоди; не переносіть поріг одного визначення на інше.",
        },
        {
          locator: "Art. 3 pkt 20–25",
          explanation:
            "Розрізняйте wiza, wiza krajowa, wiza Schengen, wykonywanie pracy та wykonywanie pracy w zawodzie wymagającym wysokich kwalifikacji.",
        },
      ],
      foreignersLaw.text`Визначення ${foreignersLaw.article("3", "Art. 3")} керують тлумаченням інших статей, але самі зазвичай не створюють дозволу на pobyt або pracy. Позначені uchylony пункти не є чинними визначеннями.`,
      foreignersLaw.text`Випишіть точний термін із документа або рішення, знайдіть його pkt у ${foreignersLaw.article("3", "Art. 3")} і перевірте всі складові визначення окремими фактами та доказами.`
    ),
  ]),
})
