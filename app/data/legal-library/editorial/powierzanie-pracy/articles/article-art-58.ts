import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-58",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 58 регулює przedłużenie zezwolenia na pracę sezonową, у тому числі продовження для того самого або іншого польського podmiot, межу 9 місяців та legalність роботи під час належно поданого wniosku.",
          sourceLocator: "Art. 58 ust. 1–8",
        },
      ],
      summary:
        "Можливість przedłużenie залежить від способу в'їзду і зв'язку з wpisem wniosku. Для належного wniosku робота може залишатися legalною до остаточності рішення, а для podmiot, який безпосередньо перед поданням не доручав цій особі сезонну роботу, — лише до doręczenia рішення і не довше 30 днів.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Starosta може продовжити zezwolenie для того самого або іншого polski podmiot лише у передбачених випадках; загальна межа разом із сезонним pobyt — 9 місяців календарного року.",
        },
        {
          locator: "ust. 4–6",
          explanation:
            "За wniosek без braków formalnych або з ними, усуненими вчасно, робота legalна до остаточного рішення, без зарахування zawieszenia на прохання strony. Для podmiot, який безпосередньо перед заявою не доручав цій особі сезонну роботу, за wniosek без braków formalnych діє межа 30 днів від дня подання до doręczenia decyzja.",
        },
        {
          locator: "ust. 7–8",
          explanation:
            "До przedłużenie відповідно застосовуються правила видачі сезонного zezwolenie, але art. 50 до цього wniosku не застосовується.",
        },
      ],
      legalEffect:
        "У передбачених art. 58 випадках поданий належний wniosek може тимчасово зберегти legalність роботи, але не скасовує річний ліміт і не робить результат передбаченим.",
      foreignersCase:
        "Звірте підставу в'їзду, попереднього podmiot, brak formalny та дату рішення. Не включайте до періоду legalної роботи час zawieszenia, якого просила сторона.",
    },
  ]),
})
