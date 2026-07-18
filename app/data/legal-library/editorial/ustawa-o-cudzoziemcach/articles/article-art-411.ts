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
      provisionId: "ustawa-o-cudzoziemcach-art-411",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("411", "Art. 411")} вимагає під час прийняття pouczenie cudzoziemca зрозумілою для нього мовою про права й обов’язки, ознайомлення з правилами перебування та підтвердження факту pouczenie власноручним підписом.`,
          sourceLocator: "Art. 411",
        },
        {
          kind: "practical-inference",
          text: "Підпис підтверджує факт pouczenie, але з цього тексту не випливає відмова від прав або визнання законності umieszczenie.",
          sourceLocator: "Art. 411",
        },
      ],
      summary:
        "При прийнятті cudzoziemca його мають поінформувати зрозумілою для нього мовою про права, обов’язки та правила перебування у strzeżony ośrodek або areszt.",
      rules: [
        {
          locator: "Art. 411",
          explanation:
            "Pouczenie має охоплювати права й обов’язки та правила, що регулюють перебування у відповідному місці.",
        },
        {
          locator: "Art. 411",
          explanation:
            "Cudzoziemiec підтверджує факт pouczenie власноручним підписом.",
        },
      ],
      legalEffect:
        "Стаття вимагає зрозумілого pouczenie та фіксації його факту. Вона не встановлює окремого порядку оскарження postanowienie про umieszczenie.",
      foreignersCase:
        "Якщо зміст правил незрозумілий, зафіксуйте, якою мовою і коли було pouczenie, та попросіть пояснити конкретне право чи обов’язок до підпису.",
    },
  ],
})
