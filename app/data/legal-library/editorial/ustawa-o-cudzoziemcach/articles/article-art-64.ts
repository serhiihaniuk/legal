import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-64",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("64", "Art. 64")} ust. 1–3 визначає документи для віз за ${foreignersLaw.article("60", "Art. 60")} ust. 1 pkt 5, 5a і 6: zezwolenie na pracę або виняток з нього, зареєстроване oświadczenie o powierzeniu pracy та zaświadczenie про внесений до ewidencji wniosek про zezwolenie na pracę sezonową.`,
          sourceLocator: "Art. 64 ust. 1–3",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("64", "Art. 64")} ust. 4–7 прив’язує okres pobytu за робочою візою до строку відповідного документа, обмежує його типом візи, а для pkt 5a встановлює максимум 9 місяців у році з урахуванням обмежень Schengen.`,
          sourceLocator: "Art. 64 ust. 4–7",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("64", "Art. 64")} пов’язує окремі робочі цілі візи з доказом допуску до праці: zezwolenie na pracę, oświadczenie о дорученні роботи або zaświadczenie для роботи сезонної. Тривалість pobytu за візою не може бути довшою за строк підтвердного документа і межі відповідного типу wiza.`,
      rules: [
        {
          locator: "Art. 64 ust. 1–3",
          explanation: foreignersLaw.text`Для ${foreignersLaw.article("60", "Art. 60")} ust. 1 pkt 6 подається zezwolenie na pracę за названими положеннями закону про powierzanie pracy, якщо дозвіл не є потрібним; для pkt 5 — oświadczenie, внесене до ewidencja; для pkt 5a — zaświadczenie про сезонний wniosek, внесений до ewidencja.`,
        },
        {
          locator: "Art. 64 ust. 4–6",
          explanation:
            "Okres pobytu wiza відповідає періоду, вказаному у zezwolenie, oświadczenie або zaświadczenie, але не перевищує допустимого строку для даного типу wiza.",
        },
        {
          locator: "Art. 64 ust. 7",
          explanation: foreignersLaw.text`Для візи за ${foreignersLaw.article("60", "Art. 60")} ust. 1 pkt 5a строк pobytu не може перевищувати 9 місяців у календарному році з урахуванням лімітів для wiza Schengen.`,
        },
      ],
      legalEffect: foreignersLaw.text`Виконання ${foreignersLaw.article("64", "Art. 64")} пов’язує можливість видачі і строк робочої wiza з конкретним документом про працю. Сам документ для візи не скасовує окремої перевірки права фактично виконувати роботу.`,
      foreignersCase: foreignersLaw.text`Встановіть точний pkt ${foreignersLaw.article("60", "Art. 60")}, вид роботи, роботодавця, строк zezwolenie/oświadczenie/zaświadczenie і дату останнього допустимого pobyt; порівняйте їх із даними наклейки та окремим prawem do pracy.`,
    },
  ],
})
