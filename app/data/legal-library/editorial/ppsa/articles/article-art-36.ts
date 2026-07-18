import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-36",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 36 перелічує, що «Pełnomocnictwo może być: 1) ogólne – do prowadzenia spraw przed sądami administracyjnymi; 2) do prowadzenia poszczególnych spraw; 3) do niektórych tylko czynności w postępowaniu».",
          sourceLocator: "Art. 36 pkt 1–3",
        },
      ],
      summary:
        "Pełnomocnictwo може бути ogólne для справ перед sądami administracyjnymi, для окремої справи або лише для деяких процесуальних дій.",
      rules: [
        {
          locator: "Art. 36 pkt 1",
          explanation:
            "Pełnomocnictwo ogólne охоплює ведення справ перед sądami administracyjnymi.",
        },
        {
          locator: "Art. 36 pkt 2",
          explanation:
            "Pełnomocnictwo може бути обмежене веденням конкретної справи.",
        },
        {
          locator: "Art. 36 pkt 3",
          explanation:
            "Pełnomocnictwo може дозволяти лише деякі czynności w postępowaniu; межі треба читати з його змісту.",
        },
      ],
      legalEffect:
        "Вид pełnomocnictwo визначає ширину представництва, тому сам факт наявності документа не доводить повноваження на кожну дію.",
      foreignersCase:
        "У справі іноземця звірте, чи доручення охоплює всю справу, конкретну справу або лише окрему дію, яку представник фактично виконує.",
    },
  ]),
})
