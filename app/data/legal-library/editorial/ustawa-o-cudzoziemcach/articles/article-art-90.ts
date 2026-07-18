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
    reviewedArticle("90", {
      provisionId: "ustawa-o-cudzoziemcach-art-90",
      reviewStatus: "reviewed",
      statuteText:
        "Wizę krajową відкликають з urzędu, коли після її видачі виникли підстави відмови з Art. 65 ust. 1 pkt 1 і 3–10, або на wniosek власника. Для віз на навчання, дослідження, стажування чи волонтерство стаття додає спеціальні підстави: припинення мети, невиконання вимог заявленої мети, використання для іншої мети, окремі обставини Art. 100 ust. 1 pkt 2, 4, 5 або 8 та проблеми відповідної установи, організатора чи одиниці. Стаття також встановлює консультації з іншою державою Schengen і строки передавання інформації та SIS-впису.",
      statuteLocator: "Art. 90 ust. 1–3",
      practicalText:
        "Для cofnięcie треба відокремити загальну підставу після видачі від спеціальної мети wiza та довести конкретний факт: припинення навчання/дослідження, іншу фактичну мету, вирок, внески, податки, ліквідацію або діяльність установи для нелегального в’їзду. Cofnięcie wiza krajowa не є автоматичним рішенням про zezwolenie на pobyt чи право працювати.",
      practicalLocator: "Art. 90 ust. 1, 1a–1d, 2–3",
      summary:
        "Art. 90 визначає підстави та процедуру cofnięcie wiza krajowa, окремо деталізуючи візи для навчання, науки, стажування й волонтерства та координацію з SIS.",
      rules: [
        {
          locator: "Art. 90 ust. 1",
          explanation:
            "Загальна підстава — виникнення після видачі обставин Art. 65 ust. 1 pkt 1, 3–10; власник також може просити cofnięcie.",
        },
        {
          locator: "Art. 90 ust. 1a–1b",
          explanation:
            "Для wiza krajowa з adnotacją „student” та візи для наукової діяльності додатково перевіряються припинення або невиконання мети, використання візи не за призначенням, Art. 100 ust. 1 pkt 2, 4, 5, 8 і діяльність навчальної або наукової одиниці для нелегального в’їзду чи pobyt.",
        },
        {
          locator: "Art. 90 ust. 1c",
          explanation:
            "Для стажування додаються умови щодо організатора: засудження або покарання відповідальних осіб, несплата składki, податковий борг, відсутність діяльності, ліквідація чи upadłość, крім прямо названих винятків.",
        },
        {
          locator: "Art. 90 ust. 1d",
          explanation:
            "Для волонтерства аналогічні підстави стосуються одиниці, на користь якої виконуються świadczenia: її діяльності, відповідальних осіб, внесків, податків або ліквідації.",
        },
        {
          locator: "Art. 90 ust. 2–2c",
          explanation:
            "За SIS-консультацією іншої держави Schengen консул або minister ustala підстави cofnięcie, повідомляє через Komendant Główny Policji; передбачено 10 днів, продовження до 12 днів та передавання інформації у 14-денний або продовжений строк.",
        },
        {
          locator: "Art. 90 ust. 3",
          explanation:
            "Орган, який unieważnił або cofnął wiza krajowa, вносить відомості до SIS, якщо це не зазначено у dokument podróży або на blankiet wizowy.",
        },
      ],
      legalEffect:
        "За встановленої підстави wiza krajowa відкликається відповідним органом, а інформація може передаватися до SIS. Це змінює візовий статус; не слід ототожнювати його з відмовою або cofnięcie zezwolenia na pobyt і з дозволом на працю.",
      foreignersCase:
        "Визначте мету та adnotacja візи, дату припинення діяльності, фактичну організацію навчання/дослідження/стажування/волонтерства і кожен документ за відповідним pkt. Для установ перевірте реєстраційний статус, внески, податки та вироки, а для SIS — запит, строки і передану відповідь.",
    }),
  ]),
})
