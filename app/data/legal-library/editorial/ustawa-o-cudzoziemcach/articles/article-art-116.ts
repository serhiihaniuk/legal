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
    reviewedArticle("116", {
      provisionId: "ustawa-o-cudzoziemcach-art-116",
      reviewStatus: "reviewed",
      statuteText:
        "Окрім Art. 99, wszczęcia postępowania про permit i pracę відмовляють, якщо на день wniosek cudzoziemiec є delegowany працівником іноземного роботодавця, перебуває за міжнародними торговельно-інвестиційними зобов’язаннями, веде діяльність у Польщі, працює в діяльності з переліку Art. 45 ust. 2 work-act, має визначену візу Art. 60 ust. 1, перебуває для туризму/відвідин на візі іншої держави Schengen, користується довгостроковою візою або residence document іншої держави Schengen без mobility чи має zezwolenie na wjazd Art. 32 ust. 1.",
      statuteLocator: "Art. 116 pkt 1–9",
      practicalText:
        "Art. 116 — спеціальний процесуальний bar для permit i pracę, а не materialна відмова після розгляду. Визначальним є статус і підстава перебування саме на день подання; legal stay не означає, що цей тип заяви допустимий, а заборона wszczęcia не вирішує окремо work authorization.",
      practicalLocator: "Art. 116 pkt 1–9",
      summary:
        "Art. 116 перелічує підстави, за яких заяву на temporary residence and work permit не розпочинають розглядати через попередній статус, мету в’їзду або mobility.",
      rules: [
        {
          locator: "Art. 116 pkt 1–4",
          explanation:
            "Перешкодами є delegated worker іноземного роботодавця, treaty categories для trade/investment, prowadzenie działalności gospodarczej або визначена work-act діяльність за Art. 45 ust. 2.",
        },
        {
          locator: "Art. 116 pkt 5–6",
          explanation:
            "Не розпочинають справу за візою для названих у pkt 5 цілей Art. 60 ust. 1 або за Schengen visa іншої держави для туризму чи відвідин сім’ї/друзів.",
        },
        {
          locator: "Art. 116 pkt 7–9",
          explanation:
            "Перешкодами є довгострокова Schengen visa або residence document іншої держави без mobility, а також zezwolenie na wjazd Art. 32 ust. 1.",
        },
      ],
      legalEffect:
        "За умовою Art. 116 орган не починає провадження про permit i pracę; це не є рішенням про відповідність роботи й не надає іншого residence permit або work authorization.",
      foreignersCase:
        "На дату wniosek зберіть візу/карту іншої держави, договір delegowanie, реєстрацію діяльності, фактичну мету, mobility-документи та Art. 32 zezwolenie. Розділіть legal stay від допустимості саме заяви i pracę.",
    }),
  ]),
})
