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
    reviewedArticle("114", {
      provisionId: "ustawa-o-cudzoziemcach-art-114",
      reviewStatus: "reviewed",
      statuteText:
        "Zezwolenia na pobyt czasowy i pracę надається, якщо cel pobytu — wykonywanie pracy та сукупно є ubezpieczenie/підтвердження лікування, робота не в професії з переліку Art. 31 ust. 3 ustawy про dopuszczalność powierzania pracy, винагорода не нижча за порівнювану роботу та не нижча за мінімальну місячну, незалежно від часу й виду правовідносин; ust. 1 pkt 2, ust. 2, 3 і 3a позначені як uchylony. Для zawodów pożądanych потрібні також кваліфікації; за окремого zwolnienie від work permit умови pkt 3–4 не застосовуються, insurance від роботи може виконати pkt 1, а для кількох podmiot враховується сума винагород.",
      statuteLocator: "Art. 114 ust. 1 pkt 1–5; ust. 1a; ust. 2–5",
      practicalText:
        "Permit i pracę поєднує право перебування з конкретною метою роботи, але не є загальним work authorization: умови decisión, окреме zwolnienie та вимоги regulated profession треба перевіряти окремо. Для висновку потрібні реальна робота, порівнювана оплата, мінімальна зарплата, insurance і кваліфікації, а не лише назва договору.",
      practicalLocator: "Art. 114 ust. 1–1a, ust. 4–5",
      summary:
        "Art. 114 встановлює сукупні materialні умови temporary residence and work permit, виняток для звільнення від work permit і делегацію переліку бажаних професій.",
      rules: [
        {
          locator: "Art. 114 ust. 1 pkt 1, 3–5",
          explanation:
            "Потрібні health insurance або покриття лікування, робота поза переліком Art. 31 ust. 3 (якщо немає винятку), не нижча за порівнювану винагорода і не нижча за мінімальну місячна винагорода.",
        },
        {
          locator: "Art. 114 ust. 1a",
          explanation:
            "Для zawodów pożądanych для польської економіки потрібні кваліфікації та одночасне виконання умов ust. 1 pkt 1, 4 і 5.",
        },
        {
          locator: "Art. 114 ust. 2–3a",
          explanation:
            "Пункти та підпункти, позначені в тексті як uchylony, не використовуються як чинні умови.",
        },
        {
          locator: "Art. 114 ust. 4",
          explanation:
            "Умови ust. 1 pkt 3 і 4 не застосовуються, якщо cudzoziemiec звільнений від вимоги work permit за іншими правилами.",
        },
        {
          locator: "Art. 114 ust. 4a–4b",
          explanation:
            "Insurance від роботи може виконати вимогу pkt 1; для роботи на користь кількох podmiot сума винагород у annexes має досягати порога ust. 1 pkt 5.",
        },
        {
          locator: "Art. 114 ust. 5",
          explanation:
            "Minister właściwy do spraw pracy у porozумінні з міністром економіки може встановити перелік zawodów pożądanych у rozporządzenie.",
        },
      ],
      legalEffect:
        "За відсутності будь-якої необхідної умови permit i pracę не випливає з Art. 114. Навіть наданий permit має межі рішення; він не скасовує окремі вимоги до роботи, професії та podmiot.",
      foreignersCase:
        "Зробіть матрицю `cel pobytu → умова Art. 114 → доказ`: insurance, zawód і перелік, kwalifikacje, порівнювана зарплата, мінімальна зарплата, години, кілька podmiot та можлива підстава zwolnienie від work permit. Зіставте це з annex і майбутньою decyzja.",
    }),
  ]),
})
