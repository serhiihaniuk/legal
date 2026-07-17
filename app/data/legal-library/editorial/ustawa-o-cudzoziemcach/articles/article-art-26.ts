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
      "26",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("26", "Art. 26")} ust. 1 делегує ministrowi właściwemu do spraw wewnętrznych у porozumieniu з ministrem właściwym do spraw zagranicznych визначити в drodze rozporządzenia необхідні środki finansowe та документи для їх підтвердження, а також документи про cel і czas trwania планованого pobytu.`,
          sourceLocator: "Art. 26 ust. 1 pkt 1–3",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("26", "Art. 26")} ust. 2 вимагає диференціювати wysokość środków залежно від cel або długość pobytu так, щоб покривалися zakwaterowanie, wyżywienie та tranzyt або podróż powrotna.`,
          sourceLocator: "Art. 26 ust. 2",
        },
      ],
      "Стаття є делегацією для підзаконного акта про фінансові кошти й документи, які можуть підтвердити їх законне отримання, а також cel і тривалість планованого pobytu.",
      [
        {
          locator: "ust. 1 pkt 1 lit. a–c",
          explanation:
            "Майбутнє rozporządzenie має охопити кошти на utrzymanie, podróż powrotna та tranzyt до держави, яка дозволить в’їзд.",
        },
        {
          locator: "ust. 1 pkt 2–3",
          explanation:
            "Закон називає також документи про можливість законно отримати кошти та документи про cel і czas trwania pobytu, якщо від них залежить розмір коштів.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Розмір має бути диференційований так, щоб забезпечити покриття житла, харчування, транзиту або повернення.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("26", "Art. 26")} сама не встановлює конкретної суми або вичерпного переліку документів: їх треба шукати в чинному розporządzenie, застосовному до дати та обставин справи.`,
      foreignersLaw.text`Для перевірки в’їзду знайдіть актуальне rozporządzenie за ${foreignersLaw.article("26", "art. 26")}, визначте cel і строк pobytu та зіставте з ним докази коштів і можливості їх законного отримання.`,
      {
        provisionId: "ustawa-o-cudzoziemcach-art-26",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
