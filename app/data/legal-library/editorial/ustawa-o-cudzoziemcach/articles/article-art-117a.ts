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
    reviewedArticle("117a", {
      provisionId: "ustawa-o-cudzoziemcach-art-117a",
      reviewStatus: "reviewed",
      statuteText:
        "Permit i pracę відмовляють, якщо podmiot або pracodawca użytkownik не веде діяльності, що виправдовує зайнятість cudzoziemiec у відповідний період, зокрема має zawieszona działalność, викреслений із реєстру або перебуває в ліквідації; podmiot не має коштів/доходу для трудових зобов’язань; podmiot створений або діє головно для нелегального в’їзду; або факти вказують, що особу наймає неagencja pracy tymczasowej для роботи на користь третьої особи.",
      statuteLocator: "Art. 117a pkt 1–4",
      practicalText:
        "Оцінюється реальна діяльність і організація роботи, не лише назва `outsourcing` чи пункт договору. Особливо треба розрізнити звичайне powierzanie pracy, тимчасове працевлаштування через agencja та фактичне направлення до третьої особи без статусу agencja.",
      practicalLocator: "Art. 117a pkt 1–4",
      summary:
        "Art. 117a встановлює додаткові materialні підстави відмови, пов’язані з діяльністю, фінансуванням та фактичною моделлю роботодавця.",
      rules: [
        {
          locator: "Art. 117a pkt 1",
          explanation:
            "Відмова є обов’язковою, якщо podmiot або pracodawca użytkownik не має діяльності, що виправдовує зайнятість у період, включно з zawieszenie, викресленням або ліквідацією.",
        },
        {
          locator: "Art. 117a pkt 2–3",
          explanation:
            "Перевіряються кошти/джерела доходу для трудових зобов’язань і те, чи не створено podmiot головно для сприяння нелегальному в’їзду.",
        },
        {
          locator: "Art. 117a pkt 4",
          explanation:
            "Підставою є фактична модель, у якій cudzoziemiec працював би на третю особу через суб’єкт, що не є належною agencja pracy tymczasowej.",
        },
      ],
      legalEffect:
        "Встановлена підстава веде до odmowa permit i pracę. Art. 117a не встановлює, що будь-який outsourcing незаконний, але вимагає оцінити фактичних суб’єктів, контроль і правову модель роботи.",
      foreignersCase:
        "Намалюйте схему: хто підписує договір, хто платить, хто керує, де і для кого працює cudzoziemiec, чи є pracodawca użytkownik та чи зареєстрована agencja. Додайте реєстраційні, фінансові й фактичні докази діяльності.",
    }),
  ]),
})
