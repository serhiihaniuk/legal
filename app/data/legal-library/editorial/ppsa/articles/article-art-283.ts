import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-283",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Суддя, чия участь або поведінка в попередньому провадженні є предметом скарги про поновлення, не може розглядати цю скаргу.",
          sourceLocator: "Art. 283",
        },
      ],
      summary: "Стаття захищає неупередженість повторного розгляду.",
      rules: [
        {
          locator: "Art. 283",
          explanation:
            "Зіставте підставу поновлення (wznowienie) з особою судді. Виключення діє тоді, коли скарга стосується саме його участі або поведінки.",
        },
      ],
      legalEffect:
        "Справу про дефект попереднього розгляду оцінює інший суддя.",
      foreignersCase:
        "У справі іноземця чітко назвіть, яка дія судді утворює підставу поновлення; загальна незгода з рішенням не запускає автоматичне виключення.",
    },
  ],
})
