import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "96b",
      provisionId: "kpa-art-96b",
      reviewStatus: "reviewed",
      summary:
        "Норма регулює повідомлення про можливість mediacji, отримання згоди та вибір mediatora, а також причини відмови органу від такої пропозиції.",
      rules: [
        {
          locator: "§ 1–3",
          explanation:
            "Орган може пропонувати mediację на будь-якому етапі; учасники мають чотирнадцять днів на згоду і вибір mediatora.",
        },
        {
          locator: "§ 4",
          explanation:
            "Повідомлення пояснює правила, користь, витрати та можливість повторної пропозиції.",
        },
        {
          locator: "§ 5",
          explanation:
            "Орган не пропонує mediację, коли справа потребує негайного вирішення або медіація лише затягнула б провадження.",
        },
      ],
      legalEffect:
        "Без належної згоди mediacja не починається, а орган повинен оцінити, чи сама пропозиція не суперечить швидкому розгляду.",
      foreignersCase:
        "У справі іноземця заява про mediację може містити кандидатуру mediatora, але її доцільність залежить від предмета й строковості справи.",
    },
  ],
})
