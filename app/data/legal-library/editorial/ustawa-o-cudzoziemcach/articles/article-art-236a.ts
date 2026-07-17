import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-236a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Якщо провадження щодо видачі polski dokument podróży dla cudzoziemca не було завершено до дня набрання чинності положеннями, виданими на підставі ${foreignersLaw.article("236", "Art. 236")} ust. 2, wojewoda повертає сплачену opłata cudzoziemcowi з громадянством, визначеним у цих положеннях.`,
          sourceLocator: "Art. 236a",
        },
      ],
      summary: foreignersLaw.text`Стаття містить перехідне правило про повернення opłata в незавершених справах після набрання чинності rozporządzenie за ${foreignersLaw.article("236", "Art. 236")} ust. 2.`,
      rules: [
        {
          locator: "Art. 236a",
          explanation: foreignersLaw.text`Потрібні одночасно незавершене провадження на день набрання чинності положеннями за ${foreignersLaw.article("236", "Art. 236")} ust. 2 та громадянство, назване в цих положеннях.`,
        },
      ],
      legalEffect:
        "За умовами статті wojewoda повертає вже сплачену opłata; норма стосується повернення платежу в незавершеному провадженні, а не автоматичної видачі документа.",
      foreignersCase: foreignersLaw.text`У незавершеній справі зафіксуйте стан провадження на дату набрання чинності розпорядженням за ${foreignersLaw.article("236", "Art. 236")} ust. 2, громадянство заявника та підтвердження сплати. На цій основі перевірте питання zwrot opłaty wojewoda.`,
    },
  ],
})
