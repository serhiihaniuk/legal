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
      provisionId: "ustawa-o-cudzoziemcach-art-455",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("455", "Art. 455")} дозволяє Szef Urzędu контролювати суб’єктів, які мають доступ до даних через urządzenia telekomunikacyjne або systemy teleinformatyczne, щодо виконання умов ${foreignersLaw.article("453", "Art. 453")} ust. 1. Kontrola може відбуватися в siedziba та місцях і часі виконання завдань, а уповноважений працівник Urzędu діє на підставі imienne upoważnienie і після пред’явлення dowód osobisty; контрольований суб’єкт має надати документи, urządzenia або systemy та умови для контролю.`,
          sourceLocator: "Art. 455 ust. 1–5",
        },
      ],
      summary:
        "Стаття встановлює контроль за дотриманням умов дистанційного доступу до даних та обов’язки контрольованого суб’єкта співпрацювати з працівником Urzędu.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation: foreignersLaw.text`Szef Urzędu може перевіряти виконання умов ${foreignersLaw.article("453", "Art. 453")} ust. 1. Kontrola проводиться у siedziba, місцях і часі виконання завдань, а за потреби — також у вихідні та поза робочими годинами; її проводить уповноважений imiennie працівник після пред’явлення dowód osobisty.`,
        },
        {
          locator: "ust. 4 pkt 1–2",
          explanation:
            "Контрольований суб’єкт зобов’язаний надати документи, що підтверджують uprawnienie до обробки даних, доступні urządzenia або systemy та забезпечити умови і засоби контролю, включно з вільним доступом до приміщень.",
        },
        {
          locator: "ust. 5",
          explanation:
            "Працівник Urzędu може вимагати показати документи, надати urządzenia або systemy та забезпечити умови контролю, а після kontroli складає protokół.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("455", "Art. 455")} створює контрольний механізм щодо умов ${foreignersLaw.article("453", "Art. 453")}, але сам по собі не встановлює, що конкретний суб’єкт порушив правила. Факти контролю мають бути підтверджені upoważnienie, матеріалами та protokół.`,
      foreignersCase:
        "Якщо доступ органу або установи перевіряють, зафіксуйте zakres kontroli, imienne upoważnienie, документи й systemy, які вимагали, надані умови та зміст protokół; відокремлюйте факт kontroli від висновку про порушення.",
    },
  ],
})
