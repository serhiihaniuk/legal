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
      article: "246",
      provisionId: "kpa-art-246",
      reviewStatus: "reviewed",
      summary:
        "Норма дає заявнику право подати skargę, якщо він незадоволений способом розгляду wniosku або якщо орган не дотримався строку. Подальше звернення переходить у режим skargowy розділу 2.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Незадоволений способом розгляду wnioskodawca може подати skargę за правилами rozdziału 2.",
        },
        {
          locator: "§ 2",
          explanation: kpaLaw.text`Skarga допускається також, якщо wniosek не завершено в строк ${kpaLaw.article("244", "art. 244")} або в строк, указаний у повідомленні за ${kpaLaw.article("245", "art. 245")}.`,
        },
      ],
      legalEffect:
        "Неналежний результат або прострочення wniosku відкриває окремий механізм skargi, але не судове оскарження індивідуальної decyzji.",
      foreignersCase:
        "Автор пропозиції щодо роботи urzędu може поскаржитися на її ігнорування або прострочення. Це не замінює ponaglenia чи odwołania у власній справі іноземця.",
    },
  ],
})
