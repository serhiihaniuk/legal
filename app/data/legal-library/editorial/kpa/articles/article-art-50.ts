import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "50",
      provisionId: "kpa-art-50",
      reviewStatus: "reviewed",
      summary:
        "Стаття дозволяє organowi викликати осіб для участі в діях, пояснень або свідчень, якщо це необхідно для справи чи службової дії, і вимагає мінімізувати обтяжливість wezwania.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Wezwanie може вимагати особистої участі, дії через pełnomocnika або письмових пояснень чи свідчень, але лише за необхідності.",
        },
        {
          locator: "§ 2",
          explanation:
            "Organ повинен докласти зусиль, щоб виконання wezwania не було надмірно обтяжливим.",
        },
        {
          locator: "§ 3",
          explanation:
            "За хвороби, інвалідності або іншої непереборної перешкоди organ може виконати дію чи прийняти пояснення в місці перебування особи.",
        },
      ],
      legalEffect:
        "Wezwanie є законним інструментом отримання необхідної участі або інформації, але його форма має відповідати потребі й ситуації адресата.",
      foreignersCase:
        "У справі іноземця wezwanie може вимагати документів чи пояснень, але особиста явка не повинна встановлюватися автоматично, якщо мету можна досягти менш обтяжливо.",
    },
  ],
})
