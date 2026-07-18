import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-327",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 327 зобов’язує organ забезпечити cudzoziemcowi, який недостатньо володіє польською, можливість користуватися допомогою tłumacz; орган, що видав рішення, повинен усно або письмово зрозумілою мовою перекласти правову підставу, rozstrzygnięcie та pouczenie про наявність і порядок odwołanie.",
          sourceLocator: "Art. 327 ust. 1–2",
        },
      ],
      summary:
        "Стаття гарантує мовну допомогу в провадженні та зрозуміле повідомлення про зміст і оскарження рішення.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Якщо польська мова недостатня, орган забезпечує можливість користуватися tłumacz під час провадження.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Перекласти потрібно правову підставу, rozstrzygnięcie і pouczenie про odwołanie; форма може бути усною або письмовою.",
        },
      ],
      legalEffect:
        "Мовна гарантія допомагає зрозуміти рішення і строк оскарження, але не змінює його зміст та не означає позитивного результату справи.",
      foreignersCase:
        "Попросіть переклад ключових частин рішення мовою, яку розумієте, і від цієї дати точно зафіксуйте строк та порядок odwołanie.",
    },
  ]),
})
