import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "132",
      provisionId: "kpa-art-132",
      reviewStatus: "reviewed",
      summary:
        "Орган першої інстанції може в autokontroli повністю врахувати odwołanie і видати нову decyzję без передання справи вище.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Це можливо, коли odwołanie внесли всі сторони і орган визнав його повністю обґрунтованим.",
        },
        {
          locator: "§ 2",
          explanation:
            "При odwołaniu однієї сторони потрібна згода решти на нову decyzję.",
        },
        {
          locator: "§ 3",
          explanation: "Від нової decyzji знову доступне odwołanie.",
        },
      ],
      legalEffect:
        "Перша інстанція може сама скасувати чи змінити свій акт або umorzyć провадження в допустимому обсязі.",
      foreignersCase:
        "Орган, який відмовив іноземцю, може сам повністю виправити decyzję за умов autokontroli; часткової згоди з zarzutami для цього режиму недостатньо.",
    },
  ],
})
