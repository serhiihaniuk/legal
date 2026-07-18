import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-160",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Коли p.p.s.a. не передбачає судового рішення (wyrok), суд постановляє ухвалу (postanowienie).",
          sourceLocator: "Art. 160",
        },
      ],
      summary: "Це загальне правило вибору форми судового рішення.",
      rules: [
        {
          locator: "Art. 160",
          explanation:
            "Спершу знайдіть спеціальну норму про форму. Лише за її відсутності застосовується резервна форма ухвали (postanowienie).",
        },
      ],
      legalEffect:
        "Назва форми не відповідає автоматично на питання, чи можна її оскаржити; для цього потрібна окрема норма.",
      foreignersCase:
        "Отримавши процесуальний документ у справі іноземця, класифікуйте його як рішення (wyrok), ухвалу (postanowienie) або розпорядження (zarządzenie) і лише потім визначайте засіб оскарження.",
    },
  ],
})
