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
      article: "217",
      provisionId: "kpa-art-217",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає, коли орган видає zaświadczenie і в який строк. Довідка підтверджує факти або правовий стан на вимогу особи, але лише за передбаченої законом потреби або її правового інтересу.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Zaświadczenie видається на żądanie osoby ubiegającej się o nie.",
        },
        {
          locator: "§ 2 pkt 1–2",
          explanation:
            "Підстава існує, коли офіційного підтвердження вимагає закон або коли особа має interes prawny в офіційному підтвердженні факту чи правового стану.",
        },
        {
          locator: "§ 3",
          explanation:
            "Орган видає довідку без зайвої затримки, не пізніше семи днів.",
        },
        {
          locator: "§ 4",
          explanation: "Параграф скасований і не містить чинного правила.",
        },
      ],
      legalEffect: kpaLaw.text`За наявності однієї з підстав орган зобов'язаний видати zaświadczenie в семиденний строк або застосувати форму відмови з ${kpaLaw.article("219", "art. 219")}.`,
      foreignersCase:
        "Іноземець може просити офіційне підтвердження факту чи статусу, якщо цього вимагає конкретний припис або він покаже interes prawny. Zaświadczenie не замінює decyzji про дозвіл на pobyt.",
    },
  ],
})
