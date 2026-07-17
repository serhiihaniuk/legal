import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-168",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Orzeczenie стає prawomocne, якщо щодо нього немає środka odwoławczego; postanowienie, які не можна окремо оскаржити, але які підлягають розгляду NSA разом з основною справою, не стають prawomocne до такого розгляду, а при оскарженні лише частини інша частина стає prawomocna після спливу строку з названим у статті застереженням.",
          sourceLocator: "Art. 168 § 1–3",
        },
      ],
      summary:
        "Стаття визначає prawomocność через доступність засобу оскарження та регулює часткове оскарження й postanowienie, що розглядаються NSA разом зі справою.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Перевіряйте, чи взагалі існує środek odwoławczy і чи postanowienie не підлягає розгляду NSA разом з основною справою.",
        },
        {
          locator: "§ 3",
          explanation:
            "Якщо оскаржено частину orzeczenie, визначте, яка частина залишилася і чи може NSA з urzędu розглянути її також.",
        },
      ],
      legalEffect: ppsaLaw.text`Prawomocność може настати для частини orzeczenie окремо; її не слід змішувати з моментом пов’язаності суду за ${ppsaLaw.article("144", "art. 144")} або ${ppsaLaw.article("164", "164")}.`,
      foreignersCase:
        "Після wyrok у справі про pobyt перевірте, що саме оскаржено і чи не залишилася інша частина prawomocna. Не визначайте остаточність лише за датою оголошення.",
    },
  ],
})
