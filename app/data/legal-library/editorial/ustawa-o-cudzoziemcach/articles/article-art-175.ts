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
      provisionId: "ustawa-o-cudzoziemcach-art-175",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("175", "Art. 175")} уповноважує ministra właściwego do spraw wewnętrznych визначити в drodze rozporządzenia wzór zaświadczenia з ${foreignersLaw.article("170", "art. 170")}, з урахуванням мети його видачі та даних для підтвердження особи cudzoziemiec.`,
          sourceLocator: "Art. 175",
        },
      ],
      summary:
        "Форма zaświadczenie визначається підзаконним актом, але його призначення та ідентифікаційні дані мають бути враховані.",
      rules: [
        {
          locator: "весь припис",
          explanation: foreignersLaw.text`Rozporządzenie визначає wzór документа з ${foreignersLaw.article("170", "art. 170")}; міністр має врахувати cel wydania та дані, що підтверджують особу, а не встановлювати нову матеріальну підставу потерпілого.`,
        },
      ],
      legalEffect:
        "Стаття є делегацією щодо форми документа і не змінює умови domniemanie, legalny pobyt або zezwolenie, встановлені іншими статтями.",
      foreignersCase:
        "Використовуйте актуальний wzór для дати видачі, перевірте правильність ідентифікаційних даних та не вважайте форму доказом, що автоматично підтверджує всі умови жертви.",
    },
  ],
})
