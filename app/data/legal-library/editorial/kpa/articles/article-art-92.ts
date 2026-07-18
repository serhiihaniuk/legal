import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "92",
      provisionId: "kpa-art-92",
      reviewStatus: "reviewed",
      summary:
        "Дата rozprawy має бути визначена так, щоб вручення wezwania і публічне оголошення відбулися щонайменше за сім днів до неї.",
      rules: [
        {
          locator: "єдиний блок",
          explanation:
            "Семиденний мінімум стосується часу між повідомленням або оголошенням та rozprawą.",
        },
      ],
      legalEffect:
        "Учасники повинні отримати мінімальний час для підготовки до засідання.",
      foreignersCase:
        "Якщо іноземця або його представника повідомили пізніше, це треба зафіксувати як можливий дефект підготовки rozprawy.",
    },
  ],
})
