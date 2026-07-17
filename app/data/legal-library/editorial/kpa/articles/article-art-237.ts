import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "237",
      provisionId: "kpa-art-237",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Норма встановлює строк розгляду skargi, обов'язок повідомити скаржника про результат і спеціальний інформаційний строк для депутатів, сенаторів та радних. За прострочення застосовуються механізми ${kpaLaw.articleRange("36", "38", { start: "art. 36", end: "38" })} KPA.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Skargę розглядають без зайвої затримки, не пізніше одного місяця.",
        },
        {
          locator: "§ 2",
          explanation:
            "Posła, senatora або radnego, який подав чи передав скаргу, повідомляють про результат, а за потреби збору матеріалів — також про стан розгляду не пізніше 14 днів.",
        },
        {
          locator: "§ 3",
          explanation: "Про спосіб завершення повідомляють skarżącego.",
        },
        {
          locator: "§ 4",
          explanation: kpaLaw.text`У разі порушення місячного строку застосовуються ${kpaLaw.articleRange("36", "38", { start: "art. 36", end: "38" })} KPA.`,
        },
      ],
      legalEffect:
        "Орган має завершити skargę в місячний строк або виконати обов'язки, пов'язані з затримкою; результат доводиться до відома скаржника.",
      foreignersCase:
        "Місячний строк стосується skargi на діяльність органу, а не автоматично строку видання karty pobytu. Прострочення самої pobytowej sprawy оцінюють за правилами відповідного провадження.",
    },
  ],
})
