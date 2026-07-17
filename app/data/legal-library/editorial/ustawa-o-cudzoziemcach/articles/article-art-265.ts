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
      provisionId: "ustawa-o-cudzoziemcach-art-265",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`До wymiany polskiego dokumentu tożsamości cudzoziemca застосовується ${foreignersLaw.article("256", "Art. 256")}; cudzoziemiec повертає документ після набуття obywatelstwo polskie або якщо видано decyzję про stwierdzenie nieważności документа.`,
          sourceLocator: "Art. 265 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Документ повертають organowi, який його видав, niezwłocznie, але не пізніше 14 днів від doręczenia документа про громадянство або від дня, коли decyzja про nieważność стала ostateczna; інші правила zwrotu відсилають до ${foreignersLaw.article("249", "Art. 249")} ust. 3–4.`,
          sourceLocator: "Art. 265 ust. 3–4",
        },
      ],
      summary:
        "Стаття поєднує правила обміну документа особи з обов’язком його повернення у двох визначених випадках.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Для зміни даних, фото, втрати або пошкодження застосовуйте ${foreignersLaw.article("256", "Art. 256")}, а не вигадуйте окрему процедуру.`,
        },
        {
          locator: "ust. 2–4",
          explanation: foreignersLaw.text`Після громадянства або остаточного stwierdzenia nieważności діє 14-денний строк zwrotu та відсилання до ${foreignersLaw.article("249", "Art. 249")}.`,
        },
      ],
      legalEffect:
        "Норма не продовжує чинність документа після події, що вимагає повернення; вона визначає технічний порядок обміну й zwrotu.",
      foreignersCase: foreignersLaw.text`За зміни даних або втрати перевірте ${foreignersLaw.article("256", "Art. 256")}. За громадянства чи nieważności зафіксуйте дату події, поверніть документ і за потреби отримайте довідку.`,
    },
  ],
})
