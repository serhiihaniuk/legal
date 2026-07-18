import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-275",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Поновлення через недійсність розглядає суд, який видав оскаржене рішення; якщо оскаржуються рішення обох інстанцій — NSA. За іншою підставою компетентний суд, який останнім вирішував справу.",
          sourceLocator: "Art. 275",
        },
      ],
      summary: "Стаття визначає суд за видом підстави та історією рішень.",
      rules: [
        {
          locator: "Art. 275",
          explanation:
            "Намалюйте послідовність WSA–NSA, вкажіть, які рішення оскаржуються, і класифікуйте підставу як недійсність провадження (nieważność postępowania) або іншу законну підставу.",
        },
      ],
      legalEffect:
        "Подання до неналежного суду ускладнює рух надзвичайної скарги й може поставити під ризик строк.",
      foreignersCase:
        "У справі про перебування не обирайте NSA лише тому, що це вищий суд; застосуйте точне правило компетенції.",
    },
  ],
})
