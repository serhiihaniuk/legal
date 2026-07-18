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
      article: "155a",
      provisionId: "kpa-art-155a",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Норма виключає milczące załatwienie sprawy у провадженнях про зміну або скасування остаточного рішення за ${kpaLaw.article("154", "art. 154")} і 155 KPA. Саме мовчання органу не створює тут позитивного результату.`,
      rules: [
        {
          locator: "одне речення",
          explanation: kpaLaw.text`У справах, що ведуться на підставі ${kpaLaw.article("154", "art. 154")} або 155 KPA, не застосовується інститут мовчазного вирішення справи.`,
        },
      ],
      legalEffect:
        "Для зміни чи скасування рішення потрібен виразний акт органу; сплив строку без відповіді не замінює рішення.",
      foreignersCase:
        "Якщо іноземець просить змінити або скасувати остаточне рішення в одному з цих режимів, він не може вважати клопотання задоволеним лише через відсутність відповіді воєводи.",
    },
  ],
})
