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
      provisionId: "ustawa-o-cudzoziemcach-art-332",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("332", "Art. 332")} передбачає виконання decyzji o zobowiązaniu cudzoziemca do powrotu, виданої małoletniemu cudzoziemcowi, лише за наявності опіки в державі повернення та належного супроводу або передачі представнику.`,
          sourceLocator: "Art. 332 pkt 1–2",
        },
      ],
      summary:
        "Для неповнолітнього виконання рішення про повернення пов’язане з гарантією opieka в державі, до якої його повертають, і з безпечним переданням відповідальній особі або органу.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "У державі повернення має бути забезпечена опіка батьків, іншої повнолітньої особи або opiekuńcza instytucja за стандартами Konwencja o prawach dziecka.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Повернення має відбуватися під опікою przedstawiciel ustawowy або неповнолітнього передають його представнику чи компетентним властям держави повернення.",
        },
      ],
      legalEffect:
        "Норма встановлює спеціальну умову виконання рішення щодо неповнолітнього; вона не означає автоматичного скасування самого рішення.",
      foreignersCase:
        "У справі неповнолітнього перевірте документи про прийняття та опіку в державі повернення, особу супроводжувача і фактичний план передачі.",
    },
  ],
})
