import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-174",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skarga kasacyjna може ґрунтуватися лише на порушенні prawa materialnego через неправильне його тлумачення або неналежне застосування, а також на порушенні przepisów postępowania, якщо воно могло істотно вплинути на результат справи.",
          sourceLocator: "Art. 174 pkt 1–2",
        },
      ],
      summary:
        "Стаття зводить підстави skarga kasacyjna до двох груп: materialne право та істотно впливове процесуальне порушення.",
      rules: [
        {
          locator: "Pkt 1",
          explanation:
            "Опишіть, яке materialne право неправильно витлумачено або застосовано, а не лише те, що результат несприятливий.",
        },
        {
          locator: "Pkt 2",
          explanation:
            "Для процесуального zarzut покажіть можливий істотний вплив uchybienie на wynik sprawy.",
        },
      ],
      legalEffect:
        "Стаття задає законні підстави касаційного оскарження; незгода з рішенням без прив’язки до однієї з них недостатня за текстом норми.",
      foreignersCase:
        "У справі про pobyt структуруйте skarga kasacyjna навколо конкретного порушення prawa materialnego або істотно впливового процесуального порушення, а не повторюйте всю фактичну історію.",
    },
  ],
})
