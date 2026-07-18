import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "185",
      provisionId: "kpa-art-185",
      reviewStatus: "reviewed",
      summary:
        "Норма встановлює строк розгляду sprzeciwu prokuratora і відсилає до правил реагування на затримку. Орган має завершити питання впродовж тридцяти днів від подання sprzeciwu.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Sprzeciw має бути розглянутий протягом 30 днів від його внесення.",
        },
        {
          locator: "§ 2",
          explanation: kpaLaw.text`У разі затримки застосовуються ${kpaLaw.articleRange("36", "38", { start: "art. 36", end: "38" })} KPA про повідомлення, ponaglenie та відповідальність.`,
        },
      ],
      legalEffect:
        "Орган отримує конкретний строк, а його порушення відкриває процесуальні механізми проти bezczynności або przewlekłości.",
      foreignersCase:
        "Якщо sprzeciw прокурора стосується рішення у справі іноземця, рух цього надзвичайного провадження контролюється окремим 30-денним строком, а не типовим строком первинної справи про pobyt.",
    },
  ],
})
