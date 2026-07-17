import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "91",
      provisionId: "kpa-art-91",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює зміст і спосіб повідомлення про rozprawę та окремий публічний спосіб повідомлення потенційно невідомих сторін.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Wezwanie повинно називати час, місце і предмет rozprawy.",
        },
        {
          locator: "§ 2",
          explanation:
            "Викликаним сторонам, свідкам, експертам та іншим учасникам wezwanie вручається письмово.",
        },
        {
          locator: "§ 3",
          explanation:
            "Якщо можливі невідомі органу сторони, інформацію додатково оголошують публічно одним із передбачених способів.",
        },
      ],
      legalEffect:
        "Правильне повідомлення створює процесуальну основу для проведення rozprawy щодо викликаних і потенційно невідомих сторін.",
      foreignersCase:
        "У справі іноземця слід перевірити, чи wezwanie точно визначає предмет засідання та чи було вручено належному адресату або pełnomocnikowi.",
    },
  ],
})
