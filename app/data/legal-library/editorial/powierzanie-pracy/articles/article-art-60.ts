import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-60",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 60 визначає випадки, коли starosta видає decyzja про uchylenie zezwolenia na pracę sezonową, і передбачає окремі наслідки для odszkodowanie та wpis до ewidencji wniosków.",
          sourceLocator: "Art. 60 ust. 1–5",
        },
      ],
      summary:
        "Uchylenie відбувається у випадках, відсилаючих до art. 22 ust. 1 pkt 1–5, 7–8, або за обставин art. 13 ust. 1 pkt 1 lit. c–g. Для визначених підстав cudzoziemiec має право вимагати odszkodowanie від polski podmiot за невиконані зобов'язання.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Starosta видає decyzja про uchylenie у перелічених відсилочних випадках; обмеження з art. 22 ust. 1 pkt 1 не застосовується до обставин art. 56 ust. 1–2.",
        },
        {
          locator: "ust. 3–5",
          explanation:
            "Odszkodowanie передбачено при uchylenie за ust. 1 pkt 2 або art. 22 ust. 1 pkt 8. Рішення додатково doręczaється cudzoziemiec, який в'їхав у зв'язку з wpisem, а після остаточності wpis unieważnia się з urzędu.",
        },
      ],
      legalEffect:
        "Uchylenie припиняє дію дозволу після відповідної процедури; право на odszkodowanie залежить від конкретної підстави, тому не є автоматичним для кожного uchylenie.",
      foreignersCase:
        "Після decyzja встановіть, на який саме пункт art. 60 або art. 22 вона посилається. Це визначає, чи є спеціальне право на odszkodowanie і що станеться із wpisem.",
    },
  ]),
})
