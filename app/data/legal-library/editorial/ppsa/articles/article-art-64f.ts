import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-64f",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "На postanowienie, до якого відповідно застосовується art. 138 § 2 KPA, skarga не подається; незадоволена strona може подати sprzeciw od postanowienia, а art. 64b–64e застосовуються відповідно.",
          sourceLocator: "Art. 64f",
        },
      ],
      summary:
        "Для вузької категорії postanowienie діє аналогічний sprzeciw, а не звичайна skarga.",
      rules: [
        {
          locator: "Art. 64f",
          explanation:
            "Перевірте, чи postanowienie належить до категорії з відповідним застосуванням art. 138 § 2 KPA.",
        },
        {
          locator: "Art. 64f",
          explanation:
            "До sprzeciw od postanowienia відповідно переходять правила art. 64b–64e.",
        },
      ],
      legalEffect:
        "Стаття створює спеціальний засіб лише для визначеного postanowienie; вона не скасовує загальні правила для інших postanowienia.",
      foreignersCase:
        "У справі cudzoziemca класифікуйте postanowienie за його правовою підставою та pouczenie перед вибором sprzeciw або zażalenie.",
    },
  ]),
})
