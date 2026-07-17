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
      "1",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("1", "Art. 1")} визначає zasady i warunki wjazdu cudzoziemców до Польщі, przejazdu, pobytu і wyjazdu, а також tryb postępowania та właściwe organy.`,
          sourceLocator: "Art. 1 zdanie pierwsze",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`У переліку ${foreignersLaw.article("1", "Art. 1")} частина пунктів позначена як (uchylony); решта пунктів називає директиви ЄС, імплементацію яких здійснює закон у межах свого регулювання.`,
          sourceLocator: "Art. 1 pkt 1–18",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("1", "Art. 1")} окреслює предмет ustawa o cudzoziemcach: в’їзд, транзит, pobyt, виїзд, процедуру та компетентні органи.`,
      [
        {
          locator: "Art. 1 zdanie pierwsze",
          explanation:
            "Спочатку визначте, чи питання стосується wjazdu, przejazdu, pobytu, wyjazdu, trybu postępowania або właściwości органу.",
        },
        {
          locator: "Art. 1 pkt 1–18",
          explanation:
            "Це технічний перелік імплементованих директив, а не самостійна підстава для візи, pobyt чи роботи; позначені uchylony пункти не відновлюють чинне правило.",
        },
      ],
      "Стаття визначає сферу закону, але сама не надає конкретного дозволу на wjazd, pobyt або wykonywanie pracy.",
      foreignersLaw.text`Класифікуйте питання за предметом ${foreignersLaw.article("1", "Art. 1")}, потім переходьте до спеціальної норми про документ, умову, орган і засіб оскарження. Не посилайтеся на перелік директив як на пряму матеріальну підставу.`
    ),
  ]),
})
