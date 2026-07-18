import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "264",
      provisionId: "kpa-art-264",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає форму встановлення kosztów postępowania, осіб, які їх сплачують, строк і спосіб оплати. Для kosztów mediacji діє окремий момент видання postanowienia, а зобов'язана особа може подати zażalenie.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Одночасно з decyzją орган у postanowieniu визначає суму витрат, зобов'язаних осіб, строк і спосіб сплати.",
        },
        {
          locator: "§ 1a",
          explanation:
            "Якщо була mediacja, postanowienie про її витрати видається невідкладно після вручення протоколу медіації.",
        },
        {
          locator: "§ 2",
          explanation:
            "Особа, зобов'язана нести витрати, може подати zażalenie на postanowienie w sprawie kosztów.",
        },
      ],
      legalEffect:
        "Обов'язок сплатити процесуальні витрати виникає в конкретно визначеному postanowieniu, яке підлягає окремому оскарженню.",
      foreignersCase:
        "Якщо воєвода покладає витрати на іноземця, він має видати postanowienie з сумою, строком і способом оплати. Незгоду з витратами оскаржують zażaleniem, а не лише в odwołaniu від decyzji по суті.",
    },
  ],
})
