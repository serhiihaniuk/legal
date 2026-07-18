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
      "2",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("2", "Art. 2")} встановлює, що ustawa не застосовується до дипломатичних і консульських осіб за умовами взаємності та документів, до громадян UE/EFTA/Швейцарії та їхніх сімей, до визначених членів сімей громадян Польщі, а також до визначених осіб під Umowa Wystąpienia.`,
          sourceLocator: "Art. 2 pkt 1–4",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Для дипломатичних і консульських осіб ${foreignersLaw.article("2", "Art. 2")} pkt 1 прямо зберігає застосування перелічених норм, зокрема ${foreignersLaw.article("23", "art. 23")}, ${foreignersLaw.article("32", "32")}, ${foreignersLaw.article("58", "58")}, ${foreignersLaw.article("60", "60")}–${foreignersLaw.article("63", "63")}, ${foreignersLaw.article("66", "66")} ust. 4–5, 67–74, 78 ust. 1, 79 ust. 1–2, 80, 90–92, 96–97.`,
          sourceLocator: "Art. 2 pkt 1",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("2", "Art. 2")} — це правило про zakres zastosowania закону та винятки, а не загальне звільнення кожного громадянина ЄС чи члена сім’ї від усіх польських правил.`,
      [
        {
          locator: "Art. 2 pkt 1",
          explanation:
            "Для дипломатичного статусу перевіряйте одночасно взаємність, документ функції та перелік норм, які закон прямо залишає застосовними.",
        },
        {
          locator: "Art. 2 pkt 2–4",
          explanation:
            "Визначте громадянство, сімейний зв’язок і факт приєднання або спільного перебування; для громадян UK перевірте саме категорію Umowa Wystąpienia.",
        },
      ],
      foreignersLaw.text`Якщо особа підпадає під ${foreignersLaw.article("2", "Art. 2")}, відповідний режим ustawa може не застосовуватися, крім прямо збережених положень. Це не є автоматичним підтвердженням права на pobyt або pracę.`,
      foreignersLaw.text`Зафіксуйте громадянство, статус члена сім’ї, документ функції та дату. Не змішуйте режим ${foreignersLaw.article("2", "Art. 2")} з режимом звичайного cudzoziemiec за цією ustawa.`
    ),
  ]),
})
