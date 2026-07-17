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
      provisionId: "ustawa-o-cudzoziemcach-art-452",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("452", "Art. 452")} ust. 1–2 передбачає надання даних з krajowy zbiór rejestrów, ewidencji i wykazu w sprawach cudzoziemców суб’єктам з ${foreignersLaw.article("450", "Art. 450")} ust. 1–2 на підставі wniosek на formularzu; орган відмовляє decyzja, якщо запитаний zakres даних не відповідає межам ${foreignersLaw.article("450", "Art. 450")} ust. 1–2. Ust. 3 визначає органи, які надають дані, а ust. 4 делегує міністру визначення wzór formularza.`,
          sourceLocator: "Art. 452 ust. 1–4",
        },
      ],
      summary: foreignersLaw.text`Стаття встановлює формальний шлях доступу до даних реєстрів cudzoziemców для суб’єктів, уже названих у ${foreignersLaw.article("450", "Art. 450")}, і розподіляє компетенцію між органами.`,
      rules: [
        {
          locator: "ust. 1–2",
          explanation: foreignersLaw.text`Wniosek подається на formularzu. Якщо zakres даних у заяві не відповідає дозволеному zakres за ${foreignersLaw.article("450", "Art. 450")} ust. 1–2, орган відмовляє у наданні даних у формі decyzja.`,
        },
        {
          locator: "ust. 3",
          explanation: foreignersLaw.text`Szef Urzędu надає дані, крім реєстрів з ${foreignersLaw.article("449", "Art. 449")} ust. 2 pkt 7a, 13 і 14; wojewoda, minister właściwy do spraw wewnętrznych, Komendant Główny Straży Granicznej, komendant oddziału або placówki Straży Granicznej, Komendant Główny Policji та komendant wojewódzki або powiatowy (miejski) Policji — у межах реєстрів, які вони ведуть.`,
        },
        {
          locator: "ust. 4",
          explanation:
            "Minister właściwy do spraw wewnętrznych визначає в drodze rozporządzenia wzór formularza wniosku з урахуванням sprawność postępowania.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("452", "Art. 452")} регулює процедуру і компетенцію доступу до даних, але не розширює коло суб’єктів або zakres даних, визначені ${foreignersLaw.article("450", "Art. 450")}. Відмова через невідповідний zakres оформлюється decyzja.`,
      foreignersCase: foreignersLaw.text`У справі звірте, чи заявник належить до суб’єктів ${foreignersLaw.article("450", "Art. 450")}, який саме zakres даних просить, на якому formularz подано wniosek і який орган веде відповідний реєстр; не вважайте сам статус cudzoziemca підставою для доступу.`,
    },
  ],
})
