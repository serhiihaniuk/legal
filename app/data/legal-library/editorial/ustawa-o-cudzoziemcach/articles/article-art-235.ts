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
      provisionId: "ustawa-o-cudzoziemcach-art-235",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Документи, про які йдеться в ${foreignersLaw.article("226", "Art. 226")}, видають або обмінюють після сплати opłata. Доходи від opłaty за видачу та обмін цих документів є доходом державного бюджету.`,
          sourceLocator: "Art. 235 ust. 1–2",
        },
      ],
      summary: foreignersLaw.text`Стаття встановлює загальне правило про сплату opłata за видачу або обмін документів із ${foreignersLaw.article("226", "Art. 226")} та її бюджетний характер.`,
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Перед видачею або обміном документа з каталогу ${foreignersLaw.article("226", "Art. 226")} перевірте сплату opłata, якщо не застосовується передбачене законом звільнення або ulga.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Сплачені opłaty за видачу та обмін документів належать до доходів budżet państwa.",
        },
      ],
      legalEffect: foreignersLaw.text`Сплата opłata є умовою видачі або обміну документа за загальним правилом ${foreignersLaw.article("235", "Art. 235")}; конкретний розмір визначається положеннями, прийнятими на підставі ${foreignersLaw.article("239", "Art. 239")}.`,
      foreignersCase: foreignersLaw.text`Визначте вид документа з ${foreignersLaw.article("226", "Art. 226")}, перевірте суму за чинними положеннями на підставі ${foreignersLaw.article("239", "Art. 239")} та збережіть підтвердження оплати або підставу для звільнення чи ulga.`,
    },
  ],
})
