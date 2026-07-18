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
    reviewedArticle("93", {
      provisionId: "ustawa-o-cudzoziemcach-art-93",
      reviewStatus: "reviewed",
      statuteText:
        "На decyzja про cofnięcie або unieważnienie візи, видану konsul або minister właściwy do spraw zagranicznych, подається wniosek o ponowne rozpatrzenie sprawy цим самим органом; на рішення komendant oddziału або placówki Straży Granicznej — odwołanie до Komendant Główny Straży Granicznej. Wniosek про повторний розгляд подається протягом 14 днів від doręczenie і розглядається протягом 14 днів; Art. 93 ust. 4–5 визначає форму, реквізити та додаткові відомості для рішення щодо wiza Schengen.",
      statuteLocator: "Art. 93 ust. 1–5",
      practicalText:
        "Спочатку встановіть орган, що видав оскаржуване рішення, і тому оберіть wniosek або odwołanie. 14-денний строк у ust. 2 прямо стосується wniosek o ponowne rozpatrzenie; не підміняйте ним строк odwołanie, якого цей пункт не називає.",
      practicalLocator: "Art. 93 ust. 1–3",
      summary:
        "Art. 93 встановлює доступні засоби перегляду рішення про cofnięcie або unieważnienie візи та реквізити рішення після повторного розгляду.",
      rules: [
        {
          locator: "Art. 93 ust. 1 pkt 1–2",
          explanation:
            "Для рішення konsul або minister застосовується wniosek o ponowne rozpatrzenie; для рішення командира Straż Graniczna — odwołanie до Komendant Główny Straży Granicznej.",
        },
        {
          locator: "Art. 93 ust. 2–3",
          explanation:
            "Wniosek про повторний розгляд подається в 14 днів від вручення і розглядається в 14 днів.",
        },
        {
          locator: "Art. 93 ust. 4",
          explanation:
            "Форма рішення про залишення попереднього рішення в силі містить орган, сторону, розпорядчу частину, дані візи, правову підставу, причини, дату, підпис і печатку.",
        },
        {
          locator: "Art. 93 ust. 5",
          explanation:
            "Для utrzymanie в силі рішення щодо wiza Schengen додаються істотні факти та pouczenie про skarga до адміністративного суду, wpis і pomoc prawna.",
        },
      ],
      legalEffect:
        "Стаття відкриває визначений засіб перегляду, але не повертає автоматично візу, не надає zezwolenie na pobyt і не створює права працювати.",
      foreignersCase:
        "Збережіть decyzja та підтвердження doręczenie, визначте орган-видавець, порахуйте 14 днів для wniosek (якщо він застосовується) і викладіть окремо факти, документи та прохання. Перевірте також pouczenie про судову скаргу у рішенні щодо wiza Schengen.",
    }),
  ]),
})
