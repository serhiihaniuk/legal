import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-231",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Пропорційний збір за подання (wpis stosunkowy) стягують у справах, де предметом оскарження є грошові вимоги; в інших справах застосовують фіксований збір (wpis stały).",
          sourceLocator: "Art. 231",
        },
      ],
      summary: "Стаття обирає модель збору за характером предмета спору.",
      rules: [
        {
          locator: "Art. 231",
          explanation:
            "Встановіть, чи суд перевіряє саме грошову вимогу (należność pieniężna). Наявність фінансових наслідків у немайновій справі не перетворює її на грошовий спір.",
        },
      ],
      legalEffect:
        "Грошовий предмет веде до пропорційного збору (wpis stosunkowy), а інший — до фіксованого збору (wpis stały) у розмірі з розпорядження.",
      foreignersCase:
        "Скарга на відмову в дозволі на перебування зазвичай не стає грошовою лише через втрачений заробіток; перевіряйте предмет адміністративного акта.",
    },
  ],
})
