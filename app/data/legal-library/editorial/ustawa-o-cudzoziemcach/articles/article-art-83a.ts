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
    reviewedArticle("83a", {
      provisionId: "ustawa-o-cudzoziemcach-art-83a",
      reviewStatus: "reviewed",
      statuteText:
        "Якщо дані cudzoziemiec внесені до System Informacyjny Schengen для цілей art. 3 ust. 1 rozporządzenia nr 2018/1860, wojewoda або Szef Urzędu у другій інстанції діє через Komendant Główny Policji: просить державу Schengen провести консультацію за art. 9 ust. 1 цього розпорядження, коли запис пов’язаний із рішенням із zakaz ponownego wjazdu, або повідомляє про рішення щодо продовження wizy krajowej чи про намір її продовжити — залежно від наявності такої заборони.",
      statuteLocator: "Art. 83a pkt 1–3",
      practicalText:
        "Це правило про міждержавну перевірку та обмін інформацією щодо SIS, а не про автоматичну відмову в zezwolenie на pobyt чи про право на працю. Для висновку потрібні конкретний запис, рішення іншої держави, наявність zakaz ponownego wjazdu і дія з візою.",
      practicalLocator: "Art. 83a pkt 1–3",
      summary:
        "Art. 83a визначає, як wojewoda або Szef Urzędu у другій інстанції через Komendant Główny Policji взаємодіє з державою Schengen, яка внесла дані cudzoziemiec до SIS за правилами про повернення.",
      rules: [
        {
          locator: "Art. 83a pkt 1",
          explanation:
            "За запису, пов’язаного з рішенням іншої держави із zakaz ponownego wjazdu, орган просить консультацію за art. 9 ust. 1 rozporządzenia nr 2018/1860.",
        },
        {
          locator: "Art. 83a pkt 2–3",
          explanation:
            "Якщо є заборона, повідомляється рішення про продовження wizy krajowej; якщо заборони немає, повідомляється намір продовжити або факт продовження wizy krajowej.",
        },
      ],
      legalEffect:
        "Стаття встановлює обов’язок консультації або повідомлення між органами. Вона сама не продовжує візу, не легалізує pobyt і не є документом, що uprawnia do pracy.",
      foreignersCase:
        "У справі зафіксуйте SIS-впис, державу-ініціатора, рішення про powrót і zakaz ponownego wjazdu, а також заяву або decyzja про продовження wizy. Окремо перевірте legal stay та підставу prawa do pracy.",
    }),
  ]),
})
