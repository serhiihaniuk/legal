import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-181",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("181", "Art. 181")} дозволяє udzielić cudzoziemiec, який перебуває в Польщі, zezwolenia na pobyt czasowy ze względu na okoliczności wymagające krótkotrwałego pobytu, якщо потрібна особиста явка перед польським органом, виняткова особиста ситуація або інтерес Польщі; строк — необхідний для мети, але не більше 6 місяців.`,
          sourceLocator: "Art. 181 ust. 1–3",
        },
      ],
      summary:
        "Це короткостроковий, дискреційний zezwolenie для особи, чия присутність у Польщі потрібна з однієї з трьох спеціальних причин.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Потрібна особиста явка cudzoziemiec перед польським органом władzy publicznej; заявник має показати конкретний обов'язок, а не загальне бажання залишитися.",
        },
        {
          locator: "ust. 1 pkt 2–3",
          explanation:
            "Альтернативними підставами є wyjątkowa sytuacja osobista або interes Rzeczypospolitej Polskiej, які вимагають присутності особи на території Польщі.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Строк дорівнює часу, необхідному для реалізації мети, і в будь-якому разі не перевищує 6 місяців.",
        },
        {
          locator: "ust. 3",
          explanation:
            "zezwolenie можна надати також у справі, де обставини не виправдовують перебування довше 3 місяців; це не скасовує вимогу довести одну з підстав ust. 1.",
        },
      ],
      legalEffect:
        "Формула «można udzielić» залишає оцінку органу в межах доведеної короткострокової мети; zezwolenie не є загальною альтернативою іншим підставам pobyt.",
      foreignersCase:
        "Додайте виклик або офіційний документ про дату явки, докази виняткової ситуації чи інтересу Польщі та обґрунтуйте потрібну тривалість; не просіть 6 місяців без пояснення мети.",
    },
  ],
})
