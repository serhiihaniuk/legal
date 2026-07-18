import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-164",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Ухвала із закритого засідання пов’язує суд від моменту підписання разом з обґрунтуванням, а якщо обґрунтування не складають — від підписання резолютивної частини.",
          sourceLocator: "Art. 164",
        },
      ],
      summary:
        "Стаття визначає момент, коли суд уже зв’язаний власною ухвалою.",
      rules: [
        {
          locator: "Art. 164",
          explanation:
            "Перевірте, чи закон вимагає обґрунтування: від цього залежить, який підпис завершує винесення ухвали.",
        },
      ],
      legalEffect:
        "Зв’язаність суду ухвалою не тотожна набранню нею законної сили або початку строку оскарження.",
      foreignersCase:
        "У процесуальному календарі справи про перебування не змішуйте дату підписання, дату вручення та дату набрання законної сили — вони виконують різні функції.",
    },
  ],
})
