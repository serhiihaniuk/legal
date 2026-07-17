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
      provisionId: "ustawa-o-cudzoziemcach-art-511",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("511", "Art. 511")} дозволяє до wyczerpania zapasów, але не довше одного року від wejścia w życie ustawy, видавати blankiety старих zaproszenia та документів за wzory зі старих aktów wykonawczych.`,
          sourceLocator: "Art. 511",
        },
      ],
      summary:
        "Стаття тимчасово зберігає можливість використання запасу старих бланків для zaproszenia та документів іноземців.",
      rules: [
        {
          locator: "Art. 511",
          explanation:
            "Старі blankiety можна видавати лише до вичерпання запасів і в будь-якому разі не довше одного року від дня wejścia w życie ustawy.",
        },
        {
          locator: "Art. 511",
          explanation:
            "Wzory мають походити з актів wykonawczych, названих у тексті статті; норма не створює нового виду документа.",
        },
      ],
      legalEffect:
        "Це обмежене в часі правило про бланки, а не про продовження строку дії вже виданого документа чи про право на pobyt.",
      foreignersCase:
        "Для історичної справи зафіксуйте дату видачі, вид blankiet і дату wejścia w życie; перевірте, чи не сплив граничний рік, перш ніж робити висновок про допустимість форми.",
    },
  ],
})
