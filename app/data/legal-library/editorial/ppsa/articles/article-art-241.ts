import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-241",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо закон або ухвала суду звільняє сторону від судових витрат без уточнення обсягу, звільнення є повним: воно охоплює і судові збори, і видатки.",
          sourceLocator: "Art. 241",
        },
      ],
      summary:
        "Стаття дає правило тлумачення нечітко сформульованого звільнення від судових витрат (zwolnienie od kosztów sądowych).",
      rules: [
        {
          locator: "Art. 241",
          explanation:
            "Прочитайте резолютивну частину ухвали. Якщо вона не обмежує частку, суму або категорію, не додавайте такого обмеження самостійно.",
        },
      ],
      legalEffect:
        "Повне звільнення усуває обов’язок авансувати обидві складові судових витрат у межах справи.",
      foreignersCase:
        "У справі іноземця збережіть остаточну ухвалу про звільнення й показуйте її при кожному новому виклику до оплати (wezwanie).",
    },
  ],
})
