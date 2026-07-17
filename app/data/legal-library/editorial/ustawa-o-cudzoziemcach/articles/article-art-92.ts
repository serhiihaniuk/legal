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
    reviewedArticle("92", {
      provisionId: "ustawa-o-cudzoziemcach-art-92",
      reviewStatus: "reviewed",
      statuteText:
        "Wizę Schengen або national visa cofа або unieważnia у формі decyzja konsul, komendant oddziału Straży Granicznej або komendant placówki Straży Granicznej. Візу, видану minister właściwy do spraw zagranicznych, може cofати або unieważniaти цей міністр або органи з ust. 1. Для члена дипломатичної місії, консульства, прирівняної особи та їх сім’ї рішення приймає minister, направляючи notę відповідному міністерству або місії.",
      statuteLocator: "Art. 92 ust. 1–2",
      practicalText:
        "Компетенцію треба перевірити за тим, хто видав візу, статусом особи та типом органу. Art. 92 визначає орган і форму рішення, але не є самостійною підставою cofnięcie або unieważnienie.",
      practicalLocator: "Art. 92 ust. 1–2",
      summary:
        "Art. 92 розподіляє компетенцію щодо cofnięcie та unieważnienie віз і встановлює дипломатичний спосіб для спеціальних категорій осіб.",
      rules: [
        {
          locator: "Art. 92 ust. 1",
          explanation:
            "Звичайними органами є konsul, komendant oddziału Straży Granicznej і komendant placówki Straży Granicznej.",
        },
        {
          locator: "Art. 92 ust. 1a",
          explanation:
            "Якщо visa видана міністром закордонних справ, її може відкликати або скасувати minister чи орган з ust. 1.",
        },
        {
          locator: "Art. 92 ust. 2",
          explanation:
            "Для дипломатичних і консульських представників та прирівняних осіб і сімей рішення приймає minister шляхом направлення ноти.",
        },
      ],
      legalEffect:
        "Рішення належного органу запускає передбачені законом наслідки для візи; сама стаття не продовжує legal stay і не визначає prawa do pracy.",
      foreignersCase:
        "Зіставте орган, що видав візу, орган, що прийняв рішення, тип візи та спеціальний статус особи. Збережіть decyzja, доказ вручення, відмітку у паспорті/blankiet і документи, що підтверджують підставу.",
    }),
  ]),
})
