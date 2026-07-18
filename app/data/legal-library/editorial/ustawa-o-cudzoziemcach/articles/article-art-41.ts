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
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle(
      "41",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("41", "Art. 41")} ust. 1 перелічує підстави odmowa wjazdu в рамках mały ruch graniczny: відсутність чинного zezwolenie, використання допустимого строку, підроблений дозвіл, запис у wykaz або SIS, загроза zdrowie publiczne чи міркування безпеки та porządku publicznego.`,
          sourceLocator: "Art. 41 ust. 1 pkt 1–7",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("41", "Art. 41")} ust. 2–3 вимагає оформити odmowa wjazdu рішенням і відповідно застосовує ${foreignersLaw.article("33", "art. 33")} ust. 1–3 та ${foreignersLaw.article("34", "art. 34")}.`,
          sourceLocator: "Art. 41 ust. 2–3",
        },
      ],
      "Для малого прикордонного руху стаття містить окремий перелік підстав відмови у в’їзді та відсилає до правил про рішення, оскарження, виконання і перевірку.",
      [
        {
          locator: "ust. 1 pkt 1–7",
          explanation:
            "Перевіряються дозвіл, використаний строк, справжність документа, wykaz, SIS, zdrowie publiczne та безпекові або міжнародні обставини.",
        },
        {
          locator: "ust. 2–3",
          explanation: foreignersLaw.text`Відмова оформлюється decyzja; відповідно застосовуються ${foreignersLaw.article("33", "art. 33")} ust. 1–3 і ${foreignersLaw.article("34", "art. 34")}, тому потрібно перевірити орган, odwołanie, виконання та обсяг перевірки.`,
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("41", "Art. 41")} стосується лише в’їзду в режимі mały ruch graniczny і не замінює підстави відмови для іншого режиму перетину кордону.`,
      "У справі спочатку підтвердьте, що в’їзд відбувається в режимі малого прикордонного руху, потім співвіднесіть факт із конкретним pkt і збережіть decyzja та документи перевірки.",
      {
        provisionId: "ustawa-o-cudzoziemcach-art-41",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
