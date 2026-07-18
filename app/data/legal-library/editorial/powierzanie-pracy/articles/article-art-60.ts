import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-60",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 60 визначає випадки, коли староста видає рішення про скасування дозволу на сезонну роботу (uchylenie zezwolenia na pracę sezonową). Стаття також регулює право на відшкодування та наслідки для запису в реєстрі заяв.",
          sourceLocator: "Art. 60 ust. 1–5",
        },
      ],
      summary:
        "Староста скасовує дозвіл у випадках, на які відсилає art. 22 ust. 1 pkt 1–5, 7–8, або за обставин з art. 13 ust. 1 pkt 1 lit. c–g. За визначених законом підстав іноземець має право вимагати від польського суб'єкта відшкодування за невиконані зобов'язання.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Староста видає рішення про скасування у перелічених відсилочних випадках. Підстава з art. 22 ust. 1 pkt 1 не застосовується до обставин, описаних у art. 56 ust. 1–2.",
        },
        {
          locator: "ust. 3–5",
          explanation:
            "Право на відшкодування передбачене у разі скасування за ust. 1 pkt 2 або art. 22 ust. 1 pkt 8. Рішення додатково вручають іноземцеві, який в'їхав у зв'язку із записом у реєстрі заяв. Після того як рішення стане остаточним, староста анулює запис за власною ініціативою (z urzędu).",
        },
      ],
      legalEffect:
        "Скасування припиняє дію дозволу після відповідної процедури. Право на відшкодування залежить від конкретної підстави, тому виникає не в кожному випадку скасування.",
      foreignersCase:
        "Після отримання рішення встановіть, на який саме пункт art. 60 або art. 22 воно посилається. Від цього залежить, чи виникає спеціальне право на відшкодування і що станеться із записом у реєстрі.",
    },
  ]),
})
