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
    reviewedArticle("109", {
      provisionId: "ustawa-o-cudzoziemcach-art-109",
      reviewStatus: "reviewed",
      statuteText:
        "Перед наданням zezwolenie na pobyt czasowy wojewoda запитує Straż Graniczna, Policja, ABW, за потреби konsul та інші органи, чи можуть в’їзд і pobyt cudzoziemiec загрожувати обороні, безпеці держави, безпеці та porządek publiczny. Звичайний строк відповіді — 30 днів, у особливо обґрунтованій справі 60; для Art. 137a — 10/30 днів, а для połączenie z rodziną при mobilność długoterminowa posiadacza Niebieskiej Karty UE — 7/30 dni roboczych. Якщо відповідь не надано в строк, вимога вважається виконаною.",
      statuteLocator: "Art. 109 ust. 1–5",
      practicalText:
        "Це міжвідомча перевірка ризиків, а не самостійний доказ небезпеки й не автоматична відмова. У справі важливі дата запиту, спеціальний вид zezwolenie, повідомлення про продовження та те, чи сплив строк без відповіді.",
      practicalLocator: "Art. 109 ust. 1–5",
      summary:
        "Art. 109 встановлює перевірку безпекових обставин перед zezwolenie na pobyt czasowy, компетентні органи, строки відповіді, електронний обмін і наслідок мовчання.",
      rules: [
        {
          locator: "Art. 109 ust. 1",
          explanation:
            "Wojewoda запитує визначені органи про ризик для оборони, безпеки держави або porządek publiczny; консул та інші органи залучаються за потреби.",
        },
        {
          locator: "Art. 109 ust. 2–3; ust. 3a",
          explanation:
            "Звичайний строк — 30 днів, у особливому випадку до 60; інформацією можна обмінюватися електронно.",
        },
        {
          locator: "Art. 109 ust. 3b–3e",
          explanation:
            "Для Art. 137a діють 10 днів і до 30 днів, а для połączenie z rodziną при mobilność długoterminowa posiadacza Niebieskiej Karty UE — 7 dni roboczych і до 30 dni roboczych.",
        },
        {
          locator: "Art. 109 ust. 4–5",
          explanation:
            "Непередача інформації в установлені строки означає виконання вимоги; для особи, якій у день подання не виповнилося 13 років, запит з ust. 1 не потрібен.",
        },
      ],
      legalEffect:
        "Art. 109 організує перевірку перед рішенням і визначає процесуальний наслідок пропуску строку органом. Він не дає legalność pobytu, не надає zezwolenie і не визначає правова підстава виконання роботи.",
      foreignersCase:
        "Ведіть календар: дата wniosek, запити wojewoda, 30/60-, 10/30- або 7/30-денні строки, повідомлення про продовження та отримана відповідь. Для дитини зафіксуйте вік на день подання.",
    }),
  ]),
})
