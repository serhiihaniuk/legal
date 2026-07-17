import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
  type LegalTextValue,
} from "../../../legal-text"

import type { LegalProvisionId } from "../../../contracts"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

import { defineEditorialPart } from "../../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type ReviewedClaim = {
  kind: "statute-text" | "practical-inference"
  text: LegalTextValue
  sourceLocator: string
}

type ReviewedRule = {
  locator: string
  explanation: LegalTextValue
}

type ReviewedArticleMetadata = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed"
}

const reviewedArticle = (
  _article: string,
  claims: readonly ReviewedClaim[],
  summary: LegalTextValue,
  rules: readonly ReviewedRule[],
  legalEffect: LegalTextValue,
  foreignersCase: LegalTextValue,
  metadata: ReviewedArticleMetadata
) => ({
  ...metadata,
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
      "28",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("28", "Art. 28")} ust. 1 передбачає відмову у в’їзді, зокрема за відсутності чинного dokument podróży, wizy або іншого документа, перевищенні допустимого 90/180 pobytu, непідтвердженні cel і умов pobytu, недостатніх środków finansowych, підроблених документах, записі у wykaz або SIS, загрозі zdrowie publiczne чи міркуваннях безпеки та porządku publicznego.`,
          sourceLocator: "Art. 28 ust. 1 pkt 1–10",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("28", "Art. 28")} ust. 2–8 встановлює винятки та обмеження застосування окремих підстав, зокрема для міжнародного захисту, транзиту, членів екіпажу та визначених режимів mobilności.`,
          sourceLocator: "Art. 28 ust. 2–8",
        },
      ],
      "Стаття містить перелік підстав odmowa wjazdu і низку спеціальних винятків та обмежень. Перевірка має охоплювати не лише документ, а й cel, строк, кошти та безпекові підстави.",
      [
        {
          locator: "ust. 1 pkt 1–5",
          explanation: foreignersLaw.text`Перевіряються документ podróży і право на в’їзд та pobyt, документ за ${foreignersLaw.article("25", "art. 25")} ust. 1 pkt 2 lit. a, межа 90 dni w każdym okresie 180 dni, підтвердження cel і умов pobytu та кошти на pobyt, повернення або tranzyt.`,
        },
        {
          locator: "ust. 1 pkt 6–10",
          explanation:
            "Окремі підстави стосуються підроблених чи перероблених документів, wykaz cudzoziemców, SIS, загрози zdrowie publiczne та оборони, безпеки, porządku publicznego або stosunków międzynarodowych.",
        },
        {
          locator: "ust. 2–8",
          explanation:
            "Перед висновком перевірте спеціальні винятки й обмеження для конкретного статусу, транзиту, екіпажу та mobilności; вони не замінюють перевірку повного тексту.",
        },
      ],
      foreignersLaw.text`За наявності статутної підстави орган може відмовити у в’їзді з урахуванням винятків ${foreignersLaw.article("28", "art. 28")}; сама відсутність одного документа не пояснює результат, якщо застосовне спеціальне правило.`,
      "Складіть таблицю: dokument podróży, wiza або інша підстава, дні 90/180, cel pobytu, кошти, записи в wykaz/SIS і можливі винятки. Окремо відрізняйте odmowa wjazdu від подальшого рішення про pobyt.",
      {
        provisionId: "ustawa-o-cudzoziemcach-art-28",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
