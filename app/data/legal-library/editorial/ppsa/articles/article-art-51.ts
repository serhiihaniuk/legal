import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-51",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Кілька осіб, уповноважених подати skarga, можуть бути спільними skarżący, якщо їхні skargi стосуються тієї самої decyzja, postanowienie, іншого aktu, czynność, bezczynność або przewlekłe prowadzenie postępowania.",
          sourceLocator: "Art. 51",
        },
      ],
      summary:
        "Спільне подання можливе, коли кількох уповноважених осіб об’єднує той самий предмет судового контролю.",
      rules: [
        {
          locator: "Art. 51",
          explanation:
            "Порівняйте конкретний akt, czynność або бездіяльність, яких стосуються skargi, а не лише тему справи.",
        },
      ],
      legalEffect:
        "Стаття допускає спільну роль skarżący, але не скасовує індивідуальних вимог до interes prawny та змісту skarga.",
      foreignersCase:
        "Члени однієї сім’ї можуть розглядати спільне подання лише після перевірки, чи стосується їх та сама decyzja і чи має кожен процесуальну підставу.",
    },
  ]),
})
