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
      provisionId: "ustawa-o-cudzoziemcach-art-237",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Ulga в opłacie за видачу або обмін документів із ${foreignersLaw.article("226", "Art. 226")} pkt 1–5 належить cudzoziemcom, які перебувають у складному матеріальному становищі, навчаються у szkoła ponadpodstawowa або szkoła wyższa в Польщі, а також неповнолітнім, яким на відповідну дату не виповнилося 16 років. Ulga становить 50% суми, визначеної положеннями на підставі ${foreignersLaw.article("239", "Art. 239")} ust. 1.`,
          sourceLocator: "Art. 237 ust. 1 pkt 1–3, ust. 2",
        },
      ],
      summary: foreignersLaw.text`Стаття визначає три категорії осіб, яким належить 50-відсоткова ulga в opłacie за видачу або обмін документа з ${foreignersLaw.article("226", "Art. 226")} pkt 1–5; europejski dokument podróży do celów powrotu не входить до цього режиму.`,
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Підставами є trudna sytuacja materialna або навчання у szkoła ponadpodstawowa чи szkoła wyższa на території RP.",
        },
        {
          locator: "ust. 1 pkt 3",
          explanation:
            "Для неповнолітнього вік перевіряють на день подання wniosek про документ, а для першої karty pobytu — на день подання wniosek про відповідне zezwolenie.",
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Розмір ulga становить 50% суми, встановленої положеннями, виданими на підставі ${foreignersLaw.article("239", "Art. 239")} ust. 1.`,
        },
      ],
      legalEffect:
        "Особа, яка відповідає одній із названих категорій, має право на ulga у розмірі половини встановленої opłata; стаття не встановлює саму базову суму платежу.",
      foreignersCase: foreignersLaw.text`Визначте підставу ulga, підтвердьте матеріальне становище або навчання, а для неповнолітнього зафіксуйте вік на відповідну дату. Розрахунок робіть від суми, чинної за ${foreignersLaw.article("239", "Art. 239")} ust. 1.`,
    },
  ],
})
