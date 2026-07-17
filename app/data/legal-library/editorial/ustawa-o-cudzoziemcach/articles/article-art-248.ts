import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-248",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Kartę pobytu іноземець отримує особисто; якщо на день отримання йому ще не виповнилося 13 років, картку отримує przedstawiciel ustawowy або kurator.",
          sourceLocator: "Art. 248 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "Під час odbioru надається електронний czytnik, щоб перевірити відповідність персональних даних на картці фактичному стану.",
          sourceLocator: "Art. 248 ust. 3",
        },
      ],
      summary:
        "Стаття визначає спосіб отримання karty pobytu та перевірку даних під час odbioru.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Заздалегідь з’ясуйте, хто має право на особистий odbiór: сам іноземець або законний представник чи kurator для дитини до 13 років.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Порівняйте дані в електронному записі картки з фактичними даними до того, як забрати документ.",
        },
      ],
      legalEffect:
        "Правило про odbiór допомагає встановити належного отримувача й момент фактичної перевірки даних, але не змінює строку чинності картки.",
      foreignersCase:
        "На odbiór візьміть документ подорожі та перевірте написання ідентифікаційних даних, фото, adnotacje й дати. Виявлену помилку одразу повідомте органу.",
    },
  ],
})
