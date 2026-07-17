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
    reviewedArticle("117", {
      provisionId: "ustawa-o-cudzoziemcach-art-117",
      reviewStatus: "reviewed",
      statuteText:
        "Окрім Art. 100, permit i pracę відмовляють, коли podmiot powierzający або особа, що ним zarządza/контролює, має перелічені остаточні покарання/вироки, не сплачує внески, не реєструє працівників або має податковий борг; lit. d ust. 1 pkt 1 та ust. 2 lit. c позначені як uchylona. Також відмовляють, якщо cudzoziemiec не має кваліфікацій для zawód regulowany або засуджений за підроблення у пов’язаному провадженні, чи досягнуто річного ліміту Art. 114a.",
      statuteLocator: "Art. 117 pkt 1 lit. a–j; pkt 2 lit. a–c; pkt 3",
      practicalText:
        "Це окремий screening роботодавця/суб’єкта, cudzoziemiec і quota. Не достатньо перевірити лише umowa: потрібні докази статусу podmiot, внесків, podatki, реєстрації, вироків, професійної кваліфікації та ліміту; скасовані lit. d і c не можна застосовувати.",
      practicalLocator: "Art. 117 pkt 1–3",
      summary:
        "Art. 117 містить додаткові обов’язкові підстави відмови у permit i pracę щодо podmiot, cudzoziemiec і досягнутого ліміту.",
      rules: [
        {
          locator: "Art. 117 pkt 1 lit. a–g",
          explanation:
            "Перевіряються повторні або визначені покарання за work-act, вироки за Art. 218–221, 270–273, 275 та 189a Kodeks karny, злочини за ustawa 2012 про нелегальну працю і торгівлю людьми; lit. d uchylona.",
        },
        {
          locator: "Art. 117 pkt 1 lit. h–j",
          explanation:
            "Підставами є невиконання внесків до перелічених фондів, незаявлення працівників до social insurance або податковий борг, крім передбачених законом zwolnienie, odroczenie, raty чи wstrzymanie.",
        },
        {
          locator: "Art. 117 pkt 2 lit. a–c",
          explanation:
            "Cudzoziemiec має мати formalne kwalifikacje та інші умови regulated profession; вирок за Art. 270–275 у пов’язаному провадженні є підставою; lit. c uchylona.",
        },
        {
          locator: "Art. 117 pkt 3",
          explanation:
            "Відмовляють, коли досягнуто ліміт permit i pracę для цього cudzoziemiec за розпорядженням Art. 114a ust. 1.",
        },
      ],
      legalEffect:
        "За встановлення конкретної умови Art. 117 рішення має бути odmowa udzielenia permit i pracę, навіть якщо мета роботи та інші документи виглядають належно. Це не є окремим рішенням про legal stay і не робить іншу роботу законною.",
      foreignersCase:
        "Перевірте за окремими pkt остаточні вироки/покарання, внески та реєстрацію, podatki, статус контролюючих осіб, кваліфікації regulated profession і quota. До кожного висновку додайте офіційний документ і не використовуйте uchylone litera як умову.",
    }),
  ]),
})
