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
      "13",
      [
        {
          kind: "statute-text",
          text: "У rejestry та ewidencja, що ведуться на підставі ustawa, можуть оброблятися перелічені дані cudzoziemca: ідентифікаційні та біографічні дані, документ podróży, відбитки, громадянство, місце pobyt, контакти, karalność і провадження, PESEL, wizerunek та дані про роботу, навчання, волонтерство й запрошуючого.",
          sourceLocator: "Art. 13 pkt 1–26",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("13", "Art. 13")} визначає каталог даних та інформації, які можуть оброблятися в реєстрах і обліку за ustawa; формулювання «можуть» не означає, що кожен реєстр містить усі дані.`,
      [
        {
          locator: "Art. 13 pkt 1–17",
          explanation:
            "Перевірте ідентифікаційні, біометричні, громадянські та документальні дані лише в обсязі, потрібному конкретному реєстру.",
        },
        {
          locator: "Art. 13 pkt 18–26",
          explanation:
            "Для роботи, стажу, волонтерства, навчання, карності, PESEL, wizerunek та zapraszający встановіть, який пункт і який реєстр є релевантними.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("13", "Art. 13")} визначає можливий обсяг даних у реєстрах, але не встановлює висновок про legalność pobytu, право на працю чи достовірність конкретного запису.`,
      foreignersLaw.text`Порівняйте спірний запис із документом-джерелом і точним pkt ${foreignersLaw.article("13", "Art. 13")}. Не робіть висновку про статус особи лише з наявності або відсутності одного поля в реєстрі.`
    ),
  ]),
})
