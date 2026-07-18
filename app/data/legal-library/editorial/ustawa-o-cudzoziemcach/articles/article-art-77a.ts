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
      provisionId: "ustawa-o-cudzoziemcach-art-77a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("77a", "Art. 77a")} зобов’язує konsul ${foreignersLaw.article("66", "Art. 66")} ust. 1b передати MFA цифрову копію wniosek, документа подорожі та документів; у заяві на wiza Schengen додатково передаються pobrane odciski linii papilarnych, якщо їх взято.`,
          sourceLocator: "Art. 77a",
        },
        {
          kind: "practical-inference",
          text: "Норма регулює передавання матеріалів між konsul і MFA та не є окремою підставою для видачі або odmowa візи.",
          sourceLocator: "Art. 77a",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("77a", "Art. 77a")} визначає, які матеріали konsul передає міністру закордонних справ у процедурі ${foreignersLaw.article("66", "Art. 66")} ust. 1a, і коли до них додаються відбитки для wiza Schengen.`,
      rules: [
        {
          locator: "Art. 77a",
          explanation:
            "Передаються цифрові копії заяви, документа подорожі та поданих документів; odciski передаються лише у справі wiza Schengen, якщо їх було pobrane.",
        },
      ],
      legalEffect:
        "Передавання забезпечує розгляд MFA на основі повного досьє. Воно не змінює зміст заяви й не означає, що віза буде видана.",
      foreignersCase:
        "У спеціальній процедурі MFA перевірте, що цифрові копії всіх документів і, за наявності, odciski передані через właściwy konsul; зберігайте підтвердження передачі.",
    },
  ],
})
