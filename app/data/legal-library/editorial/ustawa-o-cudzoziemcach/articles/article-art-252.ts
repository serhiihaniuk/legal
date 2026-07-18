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
      provisionId: "ustawa-o-cudzoziemcach-art-252",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Polski dokument podróży dla cudzoziemca видають, якщо іноземець втратив свій dokument podróży, він знищений або втратив чинність, і неможливо отримати новий, а іноземцю надано: zezwolenie na pobyt stały, zezwolenie na pobyt rezydenta długoterminowego UE, zezwolenie na pobyt czasowy з ${foreignersLaw.article("186", "Art. 186")} ust. 1 pkt 9, ochronę uzupełniającą або zgodę na pobyt ze względów humanitarnych.`,
          sourceLocator: "Art. 252 pkt 1–2a i 3–4",
        },
      ],
      summary:
        "Стаття передбачає wydanie polskiego dokumentu podróży dla cudzoziemca лише за одночасної відсутності доступного власного документа та наявності одного з прямо названих статусів.",
      rules: [
        {
          locator: "zdanie główne та pkt 1–2a, 3–4",
          explanation: foreignersLaw.text`Доведіть одночасно втрату, знищення або закінчення чинності власного dokumentu podróży, неможливість отримати новий і наявність саме статусу з ${foreignersLaw.article("252", "Art. 252")}; pobyt czasowy охоплює лише ${foreignersLaw.article("186", "Art. 186")} ust. 1 pkt 9.`,
        },
      ],
      legalEffect: foreignersLaw.text`За виконання всіх умов ${foreignersLaw.article("252", "Art. 252")} стаття передбачає wydanie документа, але сама відсутність паспорта або інший вид pobyt не достатні; тимчасовий дозвіл має відповідати ${foreignersLaw.article("186", "Art. 186")} ust. 1 pkt 9.`,
      foreignersCase: foreignersLaw.text`До wniosku додайте доказ статусу, інформацію про utrata, zniszczenie або wygaśnięcie власного dokumentu podróży та підтвердження, що новий документ неможливо отримати; для pobyt czasowy окремо перевірте ${foreignersLaw.article("186", "Art. 186")} ust. 1 pkt 9.`,
    },
  ],
})
