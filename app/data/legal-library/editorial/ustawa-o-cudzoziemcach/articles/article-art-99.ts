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
    reviewedArticle("99", {
      provisionId: "ustawa-o-cudzoziemcach-art-99",
      reviewStatus: "reviewed",
      statuteText:
        "Wszczęcia postępowania про zezwolenie na pobyt czasowy відмовляють, якщо на день wniosek cudzoziemiec має pobyt stały або rezydent długoterminowy UE, окремі візи чи дозволи, захист/азил, очікує міжнародний захист, перебуває під затриманням або покаранням, має незавершений строк добровільного виїзду, зобов’язаний залишити Польщу за Art. 299 ust. 6 або перебуває поза Польщею. Окремо відмовляють без wszczęcie за неподання odciski linii papilarnych; pkt 10 має виняток для Art. 168 ust. 1 та Art. 168a ust. 1.",
      statuteLocator: "Art. 99 ust. 1 pkt 1–10; ust. 1a–2",
      practicalText:
        "Art. 99 — фільтр доступу до провадження, а не відмова у дозволі після оцінки його умов. Перевірка має бути прив’язана до статусу саме в день подання і до факту подання odciski; пункт 11 у тексті позначений як uchylony.",
      practicalLocator: "Art. 99 ust. 1 pkt 1–11; ust. 1a–2",
      summary:
        "Art. 99 перелічує обставини, за яких заяву на temporary residence permit не розпочинають розглядати, включно з відсутністю відбитків.",
      rules: [
        {
          locator: "Art. 99 ust. 1 pkt 1–4",
          explanation:
            "Перешкодами є чинний pobyt stały/rezydent UE, вузька віза лише для в’їзду за Art. 60 ust. 1 pkt 23, дозвіл за Art. 181 ust. 1 або окремі форми захисту, азил чи статус uchodźca.",
        },
        {
          locator: "Art. 99 ust. 1 pkt 5–9",
          explanation:
            "Не розпочинають провадження за заяви про protection/asylum, zatrzymanie/strzeżony ośrodek/zakaz opuszczania kraju, покарання або areszt, незавершений строк добровільного виїзду чи обов’язок залишити територію за Art. 299 ust. 6.",
        },
        {
          locator: "Art. 99 ust. 1 pkt 10–11; ust. 2",
          explanation:
            "Перебування поза Польщею є перешкодою, крім Art. 168 ust. 1 або Art. 168a ust. 1; pkt 11 позначений як uchylony.",
        },
        {
          locator: "Art. 99 ust. 1a",
          explanation:
            "Відсутність odciski linii papilarnych при поданні або у строк Art. 106 ust. 5 також веде до odmowa wszczęcia.",
        },
      ],
      legalEffect:
        "За наявності переліченої обставини орган не переходить до матеріальної оцінки заяви. Це не є позитивним або негативним рішенням про право на працю; legal stay треба підтвердити окремою нормою та фактичною датою.",
      foreignersCase:
        "На день подання перевірте всі документи pobyt, wiza, рішення про powrót, захист, detention, судові обмеження, місце перебування та підтвердження odciski. Відокремте `odmowa wszczęcia` за Art. 99 від `odmowa udzielenia` за Art. 100.",
    }),
  ]),
})
