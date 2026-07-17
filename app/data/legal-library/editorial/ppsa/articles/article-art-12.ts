import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-12",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 12 встановлює: «Ilekroć w niniejszej ustawie jest mowa o stronie, rozumie się przez to również uczestnika postępowania».",
          sourceLocator: "Art. 12",
        },
      ],
      summary:
        "Для цілей p.p.s.a. слово strona охоплює також uczestnika postępowania.",
      rules: [
        {
          locator: "Art. 12",
          explanation:
            "Під час читання норми термін strona треба розуміти з урахуванням цього законодавчого визначення, якщо контекст прямо не вимагає іншого.",
        },
      ],
      legalEffect:
        "Стаття дає внутрішнє правило читання терміна strona; сама по собі вона не визначає, хто саме набуває статусу uczestnik.",
      foreignersCase:
        "У справі іноземця не плутайте назву учасника з його фактичним статусом: спочатку встановіть, чи особа є uczestnik postępowania, а потім застосовуйте термін strona за Art. 12.",
    },
  ]),
})
