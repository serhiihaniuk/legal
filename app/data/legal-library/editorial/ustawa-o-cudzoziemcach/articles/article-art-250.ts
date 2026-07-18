import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-250",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Karta pobytu unieważnia się від дня zgłoszenia втрати або пошкодження, від отримання нової картки при визначених змінах, після спливу строку на zwrot у разі громадянства, з дня інформації про смерть або від остаточності чи wygaśnięcia названого рішення, якщо картку не повернуто.",
          sourceLocator: "Art. 250 pkt 1–5",
        },
      ],
      summary:
        "Стаття прив’язує unieważnienie karty pobytu до конкретної події та визначає момент, з якого стара картка втрачає чинність як документ.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "Після zgłoszenia utraty або uszkodzenia картка недійсна від дня повідомлення; при обміні через дані чи фото — від odbioru нової.",
        },
        {
          locator: "pkt 3–5",
          explanation:
            "Для громадянства, смерті або неповернення після відповідного рішення закон встановлює окремий момент unieważnienia.",
        },
      ],
      legalEffect:
        "Unieważnienie стосується документа, а не автоматично всіх питань права на pobyt; підставу перебування треба перевіряти окремо.",
      foreignersCase:
        "Після втрати картки негайно зробіть zgłoszenie й не користуйтеся знайденою старою карткою. При отриманні нової перевірте, з якої дати стара стала недійсною.",
    },
  ],
})
