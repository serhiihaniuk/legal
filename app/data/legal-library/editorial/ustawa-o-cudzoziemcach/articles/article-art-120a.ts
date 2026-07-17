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
    reviewedArticle("120a", {
      provisionId: "ustawa-o-cudzoziemcach-art-120a",
      reviewStatus: "reviewed",
      statuteText:
        "Wniosek про зміну permit i pracę подається cudzoziemiec на formularz із ідентифікаційними та сімейними даними, information про ubezpieczenie та oświadczenie про правдивість під кримінальною відповідальністю. Додаються annex podmiot за Art. 106 ust. 1a та документи, що підтверджують дані й обставини зміни; відповідно застосовуються Art. 106 ust. 2a–2b і Art. 112a ust. 1, 2, 4–5.",
      statuteLocator: "Art. 120a ust. 1–3",
      practicalText:
        "Art. 120a визначає комплект для розгляду зміни, але сама заява не змінює старі умови permit і не дозволяє автоматично почати іншу роботу. Потрібно довести саме новий podmiot/user або нові параметри, а також дотримати wezwanie і строки провадження.",
      practicalLocator: "Art. 120a ust. 1–3",
      summary:
        "Art. 120a встановлює форму, додатки, докази та процесуальні відсилання для wniosek про зміну permit i pracę.",
      rules: [
        {
          locator: "Art. 120a ust. 1 pkt 1–4",
          explanation:
            "Formularz містить необхідні дані cudzoziemiec і сім’ї, health insurance та письмове oświadczenie про правдивість.",
        },
        {
          locator: "Art. 120a ust. 2 pkt 1–2",
          explanation:
            "До wniosek додаються заповнений podmiot annex з Art. 106 ust. 1a та документи для підтвердження даних і причин зміни permit.",
        },
        {
          locator: "Art. 120a ust. 3",
          explanation:
            "До процедури відповідно застосовуються wezwanie за Art. 106 ust. 2a–2b та строки Art. 112a ust. 1, 2, 4–5.",
        },
      ],
      legalEffect:
        "Стаття запускає документований розгляд зміни, але не є новою decyzja і не надає до неї права на іншу працю. Legal stay та чинні параметри роботи визначаються окремо за чинним permit і законом.",
      foreignersCase:
        "Подайте formularz від імені cudzoziemiec, перевірте сімейні дані й insurance, отримайте повний annex podmiot, додайте нову umowa/опис умов і докази зміни. Збережіть підтвердження подання та відповіді на wezwanie.",
    }),
  ]),
})
