import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-255",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У polskim dokumencie podróży dla cudzoziemca розміщують imię i nazwisko, дату, місце і країну народження, громадянство, стать, назву органу-видавця, дати wydania та upływu ważności і фотографію; документ містить також підпис posiadacza.",
          sourceLocator: "Art. 255 ust. 1 pkt 1–8, ust. 2",
        },
        {
          kind: "statute-text",
          text: "Документ може містити закодований запис даних з ust. 1 pkt 1–4 або 7; це технічний запис, а не додаткова підстава для pobytu.",
          sourceLocator: "Art. 255 ust. 2",
        },
      ],
      summary:
        "Стаття визначає основний набір персональних і документальних даних у польському документі подорожі.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Під час odbioru звірте особисті дані, фото, орган і дві дати з рішенням та заявою.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Підпис і закодовані дані є частиною технічного оформлення документа, а не новою підставою перебування.",
        },
      ],
      legalEffect:
        "Стаття стандартизує зміст документа; помилка в ньому є питанням документа та можливого обміну, а не автоматичним встановленням права на pobyt.",
      foreignersCase:
        "При отриманні документа перевірте написання імені, громадянство, фото та строк. Якщо дані неправильні, письмово повідомте орган, який документ видав.",
    },
  ],
})
