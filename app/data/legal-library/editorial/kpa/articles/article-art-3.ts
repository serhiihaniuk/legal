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
      article: "3",
      provisionId: "kpa-art-3",
      reviewStatus: "reviewed",
      summary:
        "Стаття перелічує провадження та внутрішні службові відносини, до яких KPA не застосовується або застосовується лише частково.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "KPA не застосовується до справ карно-фіскальних, більшості податкових справ та, якщо спеціальний закон не встановлює інакше, до справ польських дипломатичних представництв і консульств.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Кодекс загалом не охоплює названі відносини організаційної і службової підлеглості, однак до визначених виключених справ зберігається застосування Dział VIII про skargi i wnioski.",
        },
        {
          locator: "§ 5",
          explanation: kpaLaw.text`Rada Ministrów може розпорядженням поширити KPA повністю або частково на провадження, вказані в ${kpaLaw.article("3", "§ 2")}.`,
        },
      ],
      legalEffect:
        "Перед використанням KPA потрібно перевірити, чи справа не належить до прямого виключення або спеціального режиму.",
      foreignersCase:
        "Для справ іноземців це особливо важливо при діях консульства: загальні правила KPA не переносяться на консульське провадження, якщо спеціальні приписи не кажуть інакше.",
    },
  ],
})
