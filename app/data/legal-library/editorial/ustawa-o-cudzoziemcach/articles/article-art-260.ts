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
      provisionId: "ustawa-o-cudzoziemcach-art-260",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Polski dokument tożsamości cudzoziemca може бути виданий: małoletniemu, народженому в Польщі та перебуваючому без батьківської опіки, якщо цьому не суперечить interes RP і цього вимагає dobro dziecka; cudzoziemcowi, який перебуває за zaświadczeniem з ${foreignersLaw.article("170", "Art. 170")}; або cudzoziemcowi без жодного obywatelstwa, якщо цього вимагає interes RP. Для кожної категорії додатково потрібно не мати dokumentu podróży та не мати можливості отримати інший документ, що підтверджує tożsamość.`,
          sourceLocator: "Art. 260 ust. 1–2",
        },
      ],
      summary:
        "Стаття обмежує wydanie polskiego dokumentu tożsamości cudzoziemca трьома спеціальними категоріями та додатковою неможливістю отримати документ подорожі або інший доказ особи.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Спершу встановіть, до якої з трьох категорій належить заявник і чи відповідає видача його інтересам або dobry dziecka.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Відсутність документа подорожі та неможливість отримати інший документ особи є додатковою умовою.",
        },
      ],
      legalEffect: foreignersLaw.text`Документ є винятковим засобом підтвердження tożsamość для категорій ${foreignersLaw.article("260", "Art. 260")}; він не є загальним замінником паспорта і не підтверджує сам по собі легальний pobyt.`,
      foreignersCase:
        "У заяві поясніть спеціальну категорію, відсутність доступного документа подорожі та докази неможливості отримати інший документ особи.",
    },
  ],
})
