import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-286",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 286 передбачає, що після uprawomocnienie orzeczenie суду першої інстанції, яке закінчує postępowanie, akta адміністративної справи повертаються organowi administracji publicznej з odpis orzeczenia зі stwierdzeniem prawomocność; zarządzenie про повернення може видати referendarz sądowy. Якщо akta ведуться електронно, їх не повертають, а органу вручають такий odpis. Строк для załatwienie справи органом рахується від doręczenie akt або odpis.",
          sourceLocator: "Art. 286 § 1–2",
        },
      ],
      summary:
        "Стаття визначає, як після остаточного orzeczenie суд повертає адміністративні akta органу та від якої події рахується строк для його дії.",
      rules: [
        {
          locator: "§ 1–1a",
          explanation:
            "Для паперових akt перевірте повернення разом з odpis зі stwierdzeniem prawomocność; для електронних akt орган отримує odpis без повернення електронної справи.",
        },
        {
          locator: "§ 2",
          explanation:
            "Початком строку органу є doręczenie akt або, за електронного ведення, doręczenie odpis orzeczenia.",
        },
      ],
      legalEffect:
        "Правило визначає момент, від якого може рахуватися строк для органу; воно саме не встановлює зміст майбутнього załatwienie.",
      foreignersCase:
        "Після wyrok WSA у справі іноземця про pobyt зафіксуйте doręczenie akt або odpis зі stwierdzeniem prawomocność, а не лише дату wyrok, якщо потрібно рахувати строк для органу.",
    },
  ]),
})
