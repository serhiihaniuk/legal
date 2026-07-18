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
    reviewedArticle("114a", {
      provisionId: "ustawa-o-cudzoziemcach-art-114a",
      reviewStatus: "reviewed",
      statuteText:
        "Minister właściwy do spraw wewnętrznych у погодженні з міністрами праці та економіки може встановити на календарний рік ліміт zezwolenie i pracę за Art. 114 і Art. 126, охопивши окремі województwa, zawody, види umów або види діяльності podmiot. Враховуються потреби ринку, безпека, porządek publiczny та доповнювальний характер праці іноземців щодо праці громадян Польщі; досягнення ліміту оголошується в Monitor Polski.",
      statuteLocator: "Art. 114a ust. 1–3",
      practicalText:
        "Ліміт можливий лише через відповідне rozporządzenie та оголошення, тому не можна виводити його наявність із самої статті. Для справи перевіряйте рік, województwo, zawód, umowa і діяльність podmiot за чинним актом.",
      practicalLocator: "Art. 114a ust. 1–3",
      summary:
        "Art. 114a створює можливість щорічного категоріального ліміту для zezwolenie i pracę та порядок оголошення його досягнення.",
      rules: [
        {
          locator: "Art. 114a ust. 1",
          explanation:
            "Rozporządzenie може встановити ліміти за województwo, професією, видом договору або діяльністю podmiot за класифікацією статистичних правил.",
        },
        {
          locator: "Art. 114a ust. 2",
          explanation:
            "Під час встановлення враховуються стан ринку праці, безпеку держави, porządek publiczny та принцип доповнюваності зайнятості іноземців.",
        },
        {
          locator: "Art. 114a ust. 3",
          explanation:
            "Minister оголошує досягнення лімітів у Monitor Polski шляхом obwieszczenie.",
        },
      ],
      legalEffect:
        "Стаття допускає нормативне кількісне обмеження zezwolenie i pracę, але сама не встановлює конкретної квоти й не дає дозволу на pobyt або роботу.",
      foreignersCase:
        "Перевірте чинне rozporządzenie, obwieszczenie Monitor Polski, календарний рік і всі категорії справи. Не змішуйте перевірку ліміту з доказуванням мети, legalność pobytu та умов конкретної роботи.",
    }),
  ]),
})
