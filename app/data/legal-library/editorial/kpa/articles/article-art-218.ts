import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "218",
      provisionId: "kpa-art-218",
      reviewStatus: "reviewed",
      summary:
        "Стаття обмежує zaświadczenie, засноване на interesie prawnym, фактами або правовим станом, що випливають із даних органу. Перед видачею орган може провести лише необхідне пояснювальне провадження.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "За підставою interesu prawnego орган підтверджує те, що випливає з його реєстрів, обліку або інших даних у його розпорядженні.",
        },
        {
          locator: "§ 2",
          explanation:
            "Перед видачею zaświadczenia орган може провести в необхідному обсязі postępowanie wyjaśniające.",
        },
      ],
      legalEffect:
        "Довідка відображає офіційні дані органу, а не створює новий правовий стан чи повне доказове провадження про спірний факт.",
      foreignersCase:
        "Іноземець не може через zaświadczenie вимагати від органу встановити новий статус, якого немає в його даних. Для дозволу або зміни статусу потрібна відповідна decyzja.",
    },
  ],
})
