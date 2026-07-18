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
      "12",
      [
        {
          kind: "statute-text",
          text: "Minister właściwy do spraw wewnętrznych визначає в drodze rozporządzenia спосіб, місце, час і форму звіту про wywiad środowiskowy, а також спосіб перевірки lokalu, документи-повноваження і документування.",
          sourceLocator: "Art. 12 ust. 1 і ust. 3",
        },
        {
          kind: "statute-text",
          text: "У розпорядженні мають бути враховані потреби проваджень і poszanowanie sfery prywatności cudzoziemca та інших осіб.",
          sourceLocator: "Art. 12 ust. 2 і ust. 4",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("12", "Art. 12")} — делегація для процедур проведення wywiad środowiskowy та перевірки lokalu з вимогою поважати приватність.`,
      [
        {
          locator: "Art. 12 ust. 1–2",
          explanation:
            "Конкретний спосіб, місце, час і звіт шукайте в rozporządzenie; сама делегація не є фактом проведення wywiad.",
        },
        {
          locator: "Art. 12 ust. 3–4",
          explanation:
            "Для перевірки lokalu окремо перевірте спосіб, документи upoważniające та вимоги до документування, зберігаючи приватність.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("12", "Art. 12")} уповноважує міністра видати процедурне rozporządzenie, але не створює самостійної підстави відмови в pobyt.`,
      foreignersLaw.text`Попросіть показати документи upoważniające та звіт про дію. Зіставте проведення перевірки з вимогами ${foreignersLaw.article("11", "Art. 11")} і відповідного rozporządzenie, не вигадуючи додаткових строків.`
    ),
  ]),
})
