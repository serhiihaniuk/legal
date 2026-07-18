import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "77",
      provisionId: "kpa-art-77",
      reviewStatus: "reviewed",
      summary:
        "Стаття покладає на organ обов’язок повністю зібрати та всебічно оцінити доказовий матеріал і дозволяє змінювати wcześniejsze postanowienia dowodowe.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Organ має в sposób wyczerpujący zebrać і rozpatrzyć cały materiał dowodowy.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "На будь-якій стадії organ може змінити, доповнити або скасувати postanowienie dowodowe, а орган, що виконує доручене доказування, може допитати додаткових свідків чи biegłych.",
        },
        {
          locator: "§ 4",
          explanation:
            "Fakty powszechnie znane та відомі organowi z urzędu не потребують доказу, але факти, відомі z urzędu, треба повідомити стороні.",
        },
      ],
      legalEffect:
        "Рішення має спиратися на повний, а не вибірковий матеріал; organ може виправляти план доказування в міру розвитку справи.",
      foreignersCase:
        "У справі cudzoziemca organ повинен оцінити не лише документи, що підтверджують його тезу, а весь релевантний матеріал і повідомити про факти, використані z urzędu.",
    },
  ],
})
