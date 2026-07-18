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
      provisionId: "ustawa-o-cudzoziemcach-art-413",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("413", "Art. 413")} ust. 1: «Cudzoziemca przyjętego do strzeżonego ośrodka lub aresztu dla cudzoziemców poddaje się niezwłocznie badaniu lekarskiemu».`,
          sourceLocator: "Art. 413 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Медична документація може бути важливим доказом стану здоров’я, але стаття сама не визначає медичний висновок у конкретній справі.",
          sourceLocator: "Art. 413 ust. 1–2",
        },
      ],
      summary:
        "Після прийняття cudzoziemca проводиться невідкладне badanie lekarskie, а за потреби — санітарні процедури; медичні дані документуються, а витрати покриває budżet państwa.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Badanie lekarskie проводиться без зволікання; санітарні заходи — у міру потреби.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Лікар веде документацію за правилами ustawa o prawach pacjenta i Rzeczniku Praw Pacjenta.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Витрати на badania з ust. 1 покриваються з державного бюджету — з частини, якою розпоряджається minister właściwy do spraw wewnętrznych, із коштів у розпорядженні Komendant Główny Straży Granicznej.",
        },
      ],
      legalEffect:
        "Стаття забезпечує первинний медичний огляд і документування. Вона не встановлює автоматичного звільнення або іншого наслідку для кожного діагнозу.",
      foreignersCase:
        "Зазначте симптоми одразу та перевірте, чи є запис про badanie lekarskie і подальшу опіку; не замінюйте медичний доказ загальним твердженням про стан здоров’я.",
    },
  ],
})
