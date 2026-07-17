import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "47",
      provisionId: "kpa-art-47",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює, що відмова адресата прийняти письмо фіксується і прирівнюється до doręczenia в день відмови.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Письмо повертається з adnotacją про відмову та її дату, після чого включається до akt sprawy.",
        },
        {
          locator: "§ 2",
          explanation:
            "Днем doręczenia вважається день, коли адресат відмовився прийняти письмо.",
        },
      ],
      legalEffect:
        "Відмова від odbioru не зупиняє процесуальний строк і не нейтралізує письмо.",
      foreignersCase:
        "Якщо іноземець відмовився прийняти decyzję або wezwanie, строк може початися в день відмови за умови належної її фіксації.",
    },
  ],
})
