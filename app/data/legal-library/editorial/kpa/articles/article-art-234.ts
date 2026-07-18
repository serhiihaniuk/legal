import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "234",
      provisionId: "kpa-art-234",
      reviewStatus: "reviewed",
      summary:
        "Норма визначає роль skargi, поданої під час уже відкритого адміністративного провадження. Звернення сторони розглядають усередині цієї справи, а звернення іншої особи стає доказовим матеріалом для оцінки з уряду.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Skarga strony розглядається w toku postępowania за процесуальними правилами KPA.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Skarga іншої особи є materiałem, який орган, що веде справу, повинен розглянути z urzędu.",
        },
      ],
      legalEffect:
        "Окреме skargowe провадження не дублює чинну індивідуальну справу; зміст звернення включається до неї у відповідній ролі.",
      foreignersCase:
        "Якщо іноземець під час справи про pobyt скаржиться на факти, що впливають на рішення, орган має оцінити їх у цій справі. Лист третьої особи може стати матеріалом, але не робить її стороною автоматично.",
    },
  ],
})
