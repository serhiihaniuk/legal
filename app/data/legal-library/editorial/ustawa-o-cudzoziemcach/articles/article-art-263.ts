import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-263",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Polski dokument tożsamości cudzoziemca містить імена та прізвище іноземця і його батьків, дані народження, адресу meldunku, стать, зріст, колір очей, орган-видавець, дати видачі та чинності, фотографію й попередження, що документ не підтверджує obywatelstwo, не дає права перетинати кордон і не є документом, що підтверджує legalny pobyt.",
          sourceLocator: "Art. 263 ust. 1 pkt 1–10",
        },
        {
          kind: "statute-text",
          text: "Документ містить підпис posiadacza і може містити закодований запис даних з ust. 1 pkt 1, 2, 4 або 8; дані про адресу не вміщують, якщо cudzoziemiec не zameldował się у місці pobyt czasowy понад 2 місяці.",
          sourceLocator: "Art. 263 ust. 2–3",
        },
      ],
      summary:
        "Стаття описує дані польського документа особи та прямо вимагає попередження про межі його доказового значення.",
      rules: [
        {
          locator: "ust. 1 pkt 1–9",
          explanation:
            "Звірте ім’я, дані народження, фото, орган і строки, а також адресу, якщо вона має бути вказана.",
        },
        {
          locator: "ust. 1 pkt 10",
          explanation:
            "Сам документ нагадує: він не є доказом громадянства, права на перетин кордону або legalnego pobytu.",
        },
      ],
      legalEffect:
        "Стандартизований зміст допомагає ідентифікації, але текст самої статті застерігає від використання документа як заміни паспорта чи підстави перебування.",
      foreignersCase:
        "Покажіть цей документ для підтвердження особи, а для кордону й pobytu підготуйте окремі документи. Помилки в реквізитах повідомляйте органу-видавцю.",
    },
  ],
})
