import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "242",
      provisionId: "kpa-art-242",
      reviewStatus: "reviewed",
      summary:
        "Норма визначає адресата wniosku за його предметом. Для питань суспільної організації звернення подають до органів цієї організації.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Wniosek подають органу, компетентному з огляду на його предмет.",
        },
        {
          locator: "§ 2",
          explanation:
            "Wnioski щодо завдань organizacji społecznych подають органам цих організацій.",
        },
      ],
      legalEffect:
        "Компетенцію визначає зміст пропозиції, а не місце проживання заявника чи орган, який веде його індивідуальну справу.",
      foreignersCase:
        "Пропозицію щодо загальної організації обслуговування іноземців потрібно адресувати органу, який може змінити цей процес; воєвода не обов'язково компетентний щодо кожної системної пропозиції.",
    },
  ],
})
