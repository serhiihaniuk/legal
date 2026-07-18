import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-285j",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA розглядає скаргу в межах оскарженої частини та заявлених підстав, зазвичай на закритому засіданні. Відкрите засідання призначають, лише коли цього потребують важливі обставини.",
          sourceLocator: "Art. 285j",
        },
      ],
      summary:
        "Стаття робить письмовий документ головною рамкою й основним місцем аргументації.",
      rules: [
        {
          locator: "Art. 285j",
          explanation:
            "У скарзі точно позначте обсяг і кожну підставу. Не очікуйте, що суд сам розширить їх або що усний виступ виправить неповний документ.",
        },
      ],
      legalEffect:
        "NSA не виходить за межі оскарження та заявлені підстави (granice zaskarżenia i podstawy); відкрите засідання (rozprawa) є винятком, а не правом за замовчуванням.",
      foreignersCase:
        "У справі про перебування всі правові зв’язки та докази шкоди мають бути зрозумілі з письмової скарги й додатків.",
    },
  ],
})
