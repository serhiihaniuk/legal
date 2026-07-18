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
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle("97", {
      provisionId: "ustawa-o-cudzoziemcach-art-97",
      reviewStatus: "reviewed",
      statuteText:
        "Minister właściwy do spraw wewnętrznych у porozumieniu з міністром закордонних справ визначає w drodze rozporządzenia спосіб відмітки рішення про unieważnienie або cofnięcie візи в dokument podróży/blankiet, форму рішення щодо wiza krajowa та форму рішення з Art. 93 ust. 4. Розпорядження має враховувати політику віз і протидію нелегальній міграції та забезпечити контроль дій.",
      statuteLocator: "Art. 97 ust. 1–2 pkt 1–3",
      practicalText:
        "Art. 97 — технічна delegacja, а не підстава відкликання візи. У справі використовуйте чинні форми та порядок відмітки з відповідного rozporządzenie; форма не замінює матеріальну підставу рішення.",
      practicalLocator: "Art. 97 ust. 1–2",
      summary:
        "Art. 97 делегує міністрам технічне оформлення рішень щодо скасування або відкликання віз та контроль відповідних дій.",
      rules: [
        {
          locator: "Art. 97 ust. 1 pkt 1–3",
          explanation:
            "Розпорядження визначає спосіб відмітки у документах і два типи форм: для рішення щодо wiza krajowa та для рішення з Art. 93 ust. 4.",
        },
        {
          locator: "Art. 97 ust. 2",
          explanation:
            "Підзаконний порядок має забезпечувати правильну політику віз, протидію нелегальній міграції і контроль дій з ust. 1 pkt 2.",
        },
      ],
      legalEffect:
        "Норма визначає майбутні технічні форми й запис, але сама не скасовує візу, не легалізує pobyt і не надає права працювати.",
      foreignersCase:
        "Перевірте форму рішення та відмітку за чинним rozporządzenie, збережіть копію dokument podróży/blankiet і зіставте орган та підставу рішення з Art. 90–94.",
    }),
  ]),
})
