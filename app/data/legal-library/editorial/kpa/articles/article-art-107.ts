import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "107",
      provisionId: "kpa-art-107",
      reviewStatus: "reviewed",
      summary:
        "Норма встановлює обов’язкову будову decyzji та зміст її фактичного і правового обґрунтування.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Decyzja ідентифікує орган, дату, сторони, правову підставу, результат, uzasadnienie, pouczenie та підпис; спеціальний закон може додати елементи.",
        },
        {
          locator: "§ 3",
          explanation:
            "Фактичне uzasadnienie називає встановлені факти, докази й причини відхилення інших доказів; правове — пояснює підставу з нормами.",
        },
        {
          locator: "§ 4–5",
          explanation:
            "Від uzasadnienia можна відступити лише у визначених позитивних або безпекових випадках.",
        },
      ],
      legalEffect:
        "Неповна структура чи мотивування decyzji може показувати процесуальний дефект акта і ускладнювати контроль його законності.",
      foreignersCase:
        "Негативну decyzję у справі іноземця слід перевіряти за кожним елементом, особливо за фактами, оцінкою доказів, нормами та pouczeniem про оскарження.",
    },
  ],
})
