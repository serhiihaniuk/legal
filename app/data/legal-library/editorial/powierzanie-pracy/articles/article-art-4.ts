import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-4",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("4", "Art. 4")} зобов'язує podmiot powierzający працю зібрати дані cudzoziemiec і копії документів для підтвердження особи та uprawnienia do zatrudnienia, вимагати перед початком роботи чинний документ, що підтверджує право pobytu, зберігати його копію та безпечно обробляти дані протягом установлених строків; ust. 5 робить виняток для осіб з ${workLaw.article("3", "art. 3")} ust. 1 pkt 1–5.`,
          sourceLocator: "Art. 4 ust. 1–7",
        },
      ],
      summary:
        "Podmiot має перевірити не лише особу, а й документ, що підтверджує право pobytu. Копії документів зберігаються під час роботи та після її завершення протягом строку, визначеного законом; для частини громадян ЄС та їхніх сімей діє спеціальний виняток.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "До початку роботи потрібно отримати визначені персональні дані, копії документів і пред'явлений важний документ uprawniający do pobytu. Перевірка pobyt є окремою від перевірки дозволу на роботу.",
        },
        {
          locator: "ust. 3–5",
          explanation: workLaw.text`Документ pobyt можна вимагати протягом роботи, а його копії зберігати весь період роботи та строк ust. 6. Ust. 2–4 не застосовуються до cudzoziemiec з ${workLaw.article("3", "art. 3")} ust. 1 pkt 1–5.`,
        },
        {
          locator: "ust. 6–7",
          explanation:
            "Дані обробляються під час роботи й 2 роки від кінця календарного року, у якому припинився або закінчився правовий зв'язок, якщо окремі приписи не вимагають довше; podmiot має забезпечити безпеку даних.",
        },
      ],
      legalEffect:
        "Стаття встановлює обов'язок документальної перевірки та зберігання даних для podmiot. Копія документа pobyt підтверджує перевірку, але сама по собі не є zezwolenie na pracę і не замінює його, коли дозвіл потрібен.",
      foreignersCase: workLaw.text`До початку роботи узгодьте документ legalnego pobytu, його строк і документ роботи або підставу звільнення від дозволу. Попросіть пояснити, які копії зберігаються; виняток ${workLaw.article("4", "art. 4")} ust. 5 перевіряйте за конкретним пунктом ${workLaw.article("3", "art. 3")}.`,
    },
  ],
})
