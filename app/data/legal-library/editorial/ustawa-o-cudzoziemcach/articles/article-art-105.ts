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
    reviewedArticle("105", {
      provisionId: "ustawa-o-cudzoziemcach-art-105",
      reviewStatus: "reviewed",
      statuteText:
        "Cudzoziemiec подає wniosek про temporary residence permit особисто не пізніше останнього дня legal stay, крім Art. 139l ust. 1 та Art. 139t ust. 1. Якщо особистого подання немає, wojewoda викликає до osobiste stawiennictwo не менш як на 7 днів під rygor залишення wniosek без розгляду. За неповнолітнього, повністю недієздатного або неповнолітнього без опіки подають відповідно батьки/опікуни або kurator; дитина від 6 років має бути присутня.",
      statuteLocator: "Art. 105 ust. 1–5",
      practicalText:
        "Дата останнього legal stay, особиста явка та вік заявника — окремі умови. Пропуск виклику має наслідок `pozostawienie wniosku bez rozpoznania`; винятки Art. 168/168a треба перевіряти за їхніми власними фактами.",
      practicalLocator: "Art. 105 ust. 1–5",
      summary:
        "Art. 105 регулює особисте подання, виклик до wojewoda та представництво дітей і недієздатних у справі про temporary residence permit.",
      rules: [
        {
          locator: "Art. 105 ust. 1–2",
          explanation:
            "Заява подається особисто до останнього дня legal stay; за відсутності особистого подання орган призначає stawiennictwo щонайменше на 7 днів із процесуальним попередженням.",
        },
        {
          locator: "Art. 105 ust. 3–4",
          explanation:
            "Закон визначає, хто подає за дитину, особу з повною недієздатністю чи дитину без опіки; присутність дитини потрібна, якщо на день wniosek їй виповнилося 6 років.",
        },
        {
          locator: "Art. 105 ust. 5",
          explanation:
            "Для випадків Art. 168 ust. 1 або Art. 168a ust. 1 вимога osobiste stawiennictwo не застосовується, і Art. 106 ust. 4–5 не діють.",
        },
      ],
      legalEffect:
        "Дотримання форми подання зберігає можливість розгляду wniosek, але не означає надання permit. Особиста явка не є сама по собі доказом legal stay або права працювати.",
      foreignersCase:
        "Порахуйтесь з датою закінчення legal stay, збережіть підтвердження особистого подання/явки та doręczenie wezwanie. Для дитини додайте документи про вік, батьківство, опіку або kurator і перевірте виняток Art. 168/168a.",
    }),
  ]),
})
