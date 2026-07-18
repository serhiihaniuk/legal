import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-221",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Цю статтю скасовано (uchylony), тому вона не містить чинного правила.",
          sourceLocator: "Art. 221",
        },
      ],
      summary:
        "Номер зберігається в структурі закону, але не є самостійною правовою підставою.",
      rules: [
        {
          locator: "Art. 221",
          explanation:
            "Не відтворюйте старий зміст без перевірки історичної редакції, застосовної до конкретної дати.",
        },
      ],
      legalEffect:
        "На 18.07.2026 з цієї статті не виникає права, обов’язку або строку.",
      foreignersCase:
        "У поточній справі іноземця шукайте правило про оплату в чинних сусідніх статтях, а не в цій скасованій нормі.",
    },
  ],
})
