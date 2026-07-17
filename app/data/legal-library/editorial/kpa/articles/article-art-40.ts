import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "40",
      provisionId: "kpa-art-40",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає належного адресата doręczenia: сторону, її представника або pełnomocnika, усіх співзаявників чи вказану ними особу, а також обов’язок окремих закордонних сторін призначити pełnomocnika do doręczeń.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Письма вручаються стороні, а при представництві — przedstawicielowi або одному pełnomocnikowi, якого сторона може вказати серед кількох.",
        },
        {
          locator: "§ 3",
          explanation:
            "У справі за спільним поданням письма вручаються всім сторонам, якщо вони не уповноважили одну з них на odbiór pism.",
        },
        {
          locator: "§ 4–5",
          explanation:
            "Сторона поза визначеною європейською територією за загальним правилом вказує в Польщі pełnomocnika do doręczeń; після належного pouczenia невиконання обов’язку спричиняє залишення письма в актах зі skutkiem doręczenia.",
        },
      ],
      legalEffect: kpaLaw.text`Вручення неправильній особі може не запустити строк, тоді як належно застосований ${kpaLaw.article("40", "§ 5")} створює skutek doręczenia без фактичного odbioru.`,
      foreignersCase:
        "У справі іноземця з pełnomocnikiem письма повинні йти представнику; для сторони за межами визначених держав потрібно окремо перевірити obowiązek pełnomocnika do doręczeń.",
    },
  ],
})
