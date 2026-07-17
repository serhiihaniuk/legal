import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-68",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 68 встановлює обов'язки podmiot після wpis oświadczenie: відповідність umowa, передання її копії до органу до початку роботи, актуальна мінімальна оплата, повідомлення cudzoziemiec і доступ документів для контролю.",
          sourceLocator: "Art. 68 ust. 1–3",
        },
      ],
      summary:
        "Wpis не завершує відповідальність podmiot. Він має укласти і передати польську копію umowa, підвищити оплату до актуального мінімуму та пропорційно підняти її при збільшенні часу; за невиплату належить виплатити заборгованість.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation:
            "Umowa має відображати oświadczenie або допустиму зміну, її копія подається через систему до початку роботи, а cudzoziemiec отримує wpis oświadczenie.",
        },
        {
          locator: "ust. 1 pkt 3–4",
          explanation:
            "Wynagrodzenie доводиться до актуального мінімуму і збільшується пропорційно до більшого wymiar czasu або кількості годин за umowa cywilnoprawna.",
        },
        {
          locator: "ust. 1 pkt 6–8; ust. 2–3",
          explanation:
            "Podmiot має zachować należytą staranność, надати документи уповноваженим органам і на вимогу pracodawca użytkownik — копію oświadczenie; порушення треба негайно виправити, а невиплачене wynagrodzenie — доплатити.",
        },
      ],
      legalEffect:
        "Виконання обов'язків триває після wpis; невідповідність umowa або оплати може мати наслідки навіть за чинного запису.",
      foreignersCase:
        "До першого робочого дня перевірте польську копію umowa у системі, актуальне мінімальне wynagrodzenie і пропорцію годин. Під час роботи зберігайте payslips та документи для можливого контролю.",
    },
  ]),
})
