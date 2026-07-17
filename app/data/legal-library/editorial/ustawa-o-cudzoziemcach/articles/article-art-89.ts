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
    reviewedArticle("89", {
      provisionId: "ustawa-o-cudzoziemcach-art-89",
      reviewStatus: "reviewed",
      statuteText:
        "Minister właściwy do spraw wewnętrznych у porozumieniu з міністром закордонних справ визначає w drodze rozporządzenia формуляри wnioski про продовження Schengen або national visa і технічні вимоги до фотографії, зразок stamp та спосіб розміщення naklejka продовженої national visa. У розпорядженні мають бути враховані контроль правильності wniosek, політика wiza та протидія нелегальній міграції.",
      statuteLocator: "Art. 89 ust. 1–2 pkt 1–3",
      practicalText:
        "Це законодавча делегація для технічних форм і способів фіксації. Конкретний formularz або вимога до фотографії береться з чинного rozporządzenie, а не виводиться з номера статті.",
      practicalLocator: "Art. 89 ust. 1–2",
      summary:
        "Art. 89 уповноважує міністрів встановити технічні правила подання та оформлення продовження візи.",
      rules: [
        {
          locator: "Art. 89 ust. 1 pkt 1–3",
          explanation:
            "Розпорядження охоплює wnioski і фотографії, stamp про подання та розміщення наклейки national visa у travel document або на blankiet.",
        },
        {
          locator: "Art. 89 ust. 2 pkt 1–2",
          explanation:
            "Підзаконні правила мають забезпечувати контроль правильності wniosek, політику віз і протидію нелегальній міграції.",
        },
      ],
      legalEffect:
        "Art. 89 не є рішенням про продовження візи й не встановлює індивідуального legal stay або prawa do pracy; він визначає межі майбутнього технічного регулювання.",
      foreignersCase:
        "Для подання використовуйте чинний formularz, вимоги до фото та порядок stamp/наклейки з розпорядження. Перевірте, що технічна форма не підміняє доказів мети, коштів, страховки чи права на роботу.",
    }),
  ]),
})
