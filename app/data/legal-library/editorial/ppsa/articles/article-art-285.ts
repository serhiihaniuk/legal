import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-285",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285 забороняє подальше wznowienie postępowania, завершеного prawomocne orzeczenie, виданим унаслідок skarga o wznowienie; виняток стосується skarga, заснованої на Art. 272 § 1, § 2a або § 3.",
          sourceLocator: "Art. 285 § 1–2",
        },
      ],
      summary:
        "Норма обмежує подальше wznowienie вже завершеного провадження у справі про wznowienie та називає вузький виняток.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Спочатку перевірте, чи попереднє провадження справді завершене prawomocne orzeczenie, виданим після skarga o wznowienie.",
        },
        {
          locator: "§ 2",
          explanation:
            "Заборона не застосовується до підстав, прямо перелічених у Art. 272 § 1, § 2a і § 3; інші підстави не можна додавати до цього винятку.",
        },
      ],
      legalEffect:
        "Стаття запобігає безмежному ланцюгу wznowienie, але не замінює перевірку, чи конкретна нова skarga дійсно підпадає під виняток.",
      foreignersCase:
        "У повторній справі іноземця про pobyt встановіть, чи попереднє orzeczenie було результатом wznowienie та яка нова підстава заявлена. Не називайте будь-яку нову обставину винятком Art. 285 § 2.",
    },
  ]),
})
