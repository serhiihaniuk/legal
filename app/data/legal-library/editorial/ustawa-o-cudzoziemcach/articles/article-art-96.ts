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
    reviewedArticle("96", {
      provisionId: "ustawa-o-cudzoziemcach-art-96",
      reviewStatus: "reviewed",
      statuteText:
        "Орган, який unieważnił або cofnął Schengen visa, видану іншою державою Schengen за art. 34 ust. 1–3 Wspólnotowego Kodeksu Wizowego, повідомляє орган держави-видавця. Komendant Główny Straży Granicznej збирає інформацію про польські Schengen visa, скасовані або відкликані органами інших держав, а орган, що скасував чи відкликав візу, імпортує дані art. 19 ust. 1 rozporządzenia nr 2017/2226 до останнього запису EES.",
      statuteLocator: "Art. 96 ust. 1–3",
      practicalText:
        "Art. 96 розподіляє інформаційні ролі між державами Schengen і польськими службами. Повідомлення та EES-запис не є окремим рішенням про legal stay, zezwolenie на pobyt чи право на працю.",
      practicalLocator: "Art. 96 ust. 1–3",
      summary:
        "Art. 96 регулює повідомлення держави-видавця, централізований збір даних і оновлення EES після дій щодо Schengen visa.",
      rules: [
        {
          locator: "Art. 96 ust. 1",
          explanation:
            "Після дії щодо візи іншої держави орган повідомляє орган, який цю візу видав, у межах art. 34 ust. 1–3 Wspólnotowego Kodeksu Wizowego.",
        },
        {
          locator: "Art. 96 ust. 2",
          explanation:
            "Komendant Główny Straży Granicznej є органом збору відомостей про польські Schengen visa, щодо яких інші держави прийняли таке рішення.",
        },
        {
          locator: "Art. 96 ust. 3",
          explanation:
            "Орган, який скасував або відкликав Schengen visa, неzwłocznie бере дані з VIS і імпортує їх до останнього EES-запису за art. 13 rozporządzenia nr 767/2008.",
        },
      ],
      legalEffect:
        "Стаття створює обов’язки міждержавного обміну та актуалізації даних, але не встановлює нової підстави для відмови у pobyt і не підтверджує право на працю.",
      foreignersCase:
        "Установіть державу-видавця, орган, який прийняв рішення, вид Schengen visa та відповідну норму Wspólnotowego Kodeksu Wizowego. Зіставте рішення, повідомлення й EES/VIS-відомості, не роблячи з інформаційної операції висновок про інший статус.",
    }),
  ]),
})
