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
    reviewedArticle("116", {
      provisionId: "ustawa-o-cudzoziemcach-art-116",
      reviewStatus: "reviewed",
      statuteText:
        "Окрім Art. 99, wszczęcia postępowania про zezwolenie i pracę відмовляють, якщо на день wniosek cudzoziemiec є delegowany працівником іноземного роботодавця, перебуває за міжнародними торговельно-інвестиційними зобов’язаннями, веде діяльність у Польщі, працює в діяльності з переліку Art. 45 ust. 2 ustawy z 20 marca 2025 r., має визначену візу Art. 60 ust. 1, перебуває для туризму/відвідин на візі іншої держави Schengen, користується довгостроковою візою або dokument pobytowy іншої держави Schengen без mobilność чи має zezwolenie na wjazd Art. 32 ust. 1.",
      statuteLocator: "Art. 116 pkt 1–9",
      practicalText:
        "Art. 116 — спеціальний процесуальна перешкода для zezwolenie i pracę, а не матеріально-правова відмова після розгляду. Визначальним є статус і підстава перебування саме на день подання; legalność pobytu не означає, що цей тип заяви допустимий, а заборона wszczęcia не вирішує окремо правова підстава виконання роботи.",
      practicalLocator: "Art. 116 pkt 1–9",
      summary:
        "Art. 116 перелічує підстави, за яких заяву на zezwolenie na pobyt czasowy i pracę не розпочинають розглядати через попередній статус, мету в’їзду або mobilność.",
      rules: [
        {
          locator: "Art. 116 pkt 1–4",
          explanation:
            "Перешкодами є працівник, відряджений іноземним роботодавцем, категорії, передбачені міжнародними зобов’язаннями у сфері торгівлі та інвестицій, prowadzenie działalności gospodarczej або діяльність, визначена ustawą z 20 marca 2025 r. за Art. 45 ust. 2.",
        },
        {
          locator: "Art. 116 pkt 5–6",
          explanation:
            "Не розпочинають справу за візою для названих у pkt 5 цілей Art. 60 ust. 1 або за wiza Schengen іншої держави для туризму чи відвідин сім’ї або друзів.",
        },
        {
          locator: "Art. 116 pkt 7–9",
          explanation:
            "Перешкодами є wiza długoterminowa або dokument pobytowy іншої держави Schengen без mobilność, а також zezwolenie na wjazd Art. 32 ust. 1.",
        },
      ],
      legalEffect:
        "За умовою Art. 116 орган не починає провадження про zezwolenie i pracę; це не є рішенням про відповідність роботи й не надає іншого zezwolenie na pobyt або правова підстава виконання роботи.",
      foreignersCase:
        "На дату wniosek зберіть візу/карту іншої держави, договір delegowanie, реєстрацію діяльності, фактичну мету, mobilność-документи та Art. 32 zezwolenie. Розділіть legalność pobytu від допустимості саме заяви i pracę.",
    }),
  ]),
})
