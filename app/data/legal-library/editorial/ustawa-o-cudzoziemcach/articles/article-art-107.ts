import type { LegalProvisionId } from "../../../contracts"

import { authorLegalTextCitationsTree } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type ReviewedArticleData = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed"
  statuteText: string
  statuteLocator: string
  practicalText: string
  practicalLocator: string
  summary: string
  rules: readonly { locator: string; explanation: string }[]
  legalEffect: string
  foreignersCase: string
}

const provisionId = (article: string) =>
  `ustawa-o-cudzoziemcach-art-${article}` as ForeignersActProvisionId

const reviewedArticle = (article: string, data: ReviewedArticleData) => ({
  provisionId: data.provisionId ?? provisionId(article),
  reviewStatus: data.reviewStatus,
  claims: [
    {
      kind: "statute-text" as const,
      text: data.statuteText,
      sourceLocator: data.statuteLocator,
    },
    {
      kind: "practical-inference" as const,
      text: data.practicalText,
      sourceLocator: data.practicalLocator,
    },
  ],
  summary: data.summary,
  rules: data.rules,
  legalEffect: data.legalEffect,
  foreignersCase: data.foreignersCase,
})
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle("107", {
      provisionId: "ustawa-o-cudzoziemcach-art-107",
      reviewStatus: "reviewed",
      statuteText:
        "Minister właściwy do spraw wewnętrznych визначає w drodze rozporządzenia wzory основного formularz і annexes за Art. 106, форми wnioski для Art. 139a та Art. 139o, кількість і технічні вимоги до фотографій, wzór stamp, спосіб pobierania fingerprints та закріплення і передавання даних для персоналізації karty pobytu. У розпорядженні враховується ефективність провадження і можливість перевірити przesłanki permit.",
      statuteLocator: "Art. 107 ust. 1 pkt 1–5; ust. 2",
      practicalText:
        "Конкретна форма заяви та annex не випливає лише з Art. 107: потрібно користуватися чинним rozporządzenie. Технічна відповідність форми не доводить матеріальних умов pobyt або права на працю.",
      practicalLocator: "Art. 107 ust. 1–2",
      summary:
        "Art. 107 делегує встановлення форм, фото, stamp, fingerprints і технічного обігу даних для картки pobytu.",
      rules: [
        {
          locator: "Art. 107 ust. 1 pkt 1–3",
          explanation:
            "Розпорядження встановлює форми wnioski/annexes, кількість і параметри фото та wzór stamp про подання temporary residence permit.",
        },
        {
          locator: "Art. 107 ust. 1 pkt 4–5",
          explanation:
            "Воно також визначає спосіб fingerprints і технічне закріплення та передавання даних для персоналізації karty pobytu.",
        },
        {
          locator: "Art. 107 ust. 2",
          explanation:
            "Критеріями є sprawność postępowania і skuteczna weryfikacja przesłanek надання permit.",
        },
      ],
      legalEffect:
        "Стаття створює делегацію для технічного оформлення, але не надає permit, legal stay або права виконувати роботу.",
      foreignersCase:
        "Перед поданням перевірте чинний wzór відповідної заяви й annex, фото, stamp і процедуру fingerprints у розпорядженні. Додайте змістовні докази мети, коштів, страхування та роботи окремо.",
    }),
  ]),
})
