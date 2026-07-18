import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-20",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("20", "Art. 20")} вимагає подавати повідомлення з частини 2 ${workLaw.article("18", "ст. 18")} і ${workLaw.article("19", "ст. 19")} через визначену електронну систему протягом семи днів від виникнення відповідної обставини. Якщо несправність системи унеможливила своєчасне повідомлення, його подають не пізніше першого робочого дня після усунення несправності.`,
          sourceLocator: "Art. 20 ust. 1–2",
        },
      ],
      summary:
        "Стаття встановлює канал і строк для повідомлень про допустимі зміни та невикористання дозволу. Збій системи не скасовує обов’язку: подання треба зробити першого робочого дня після усунення несправності.",
      rules: [
        {
          locator: "ust. 1",
          explanation: workLaw.text`Повідомлення за частиною 2 ${workLaw.article("18", "ст. 18")} або ${workLaw.article("19", "ст. 19")} подають через визначену систему протягом семи днів від події, а не від дати, коли суб’єкт підготував документи.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "За несправності системи, яка не дозволила своєчасне подання, повідомлення подають найпізніше першого робочого дня після дня усунення несправності.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("20", "Ст. 20")} регулює процедурний строк і не надає нового права на роботу або перебування. Саме повідомлення не замінює дозволу й не змінює його умов поза межами ${workLaw.article("18", "ст. 18")}.`,
      foreignersCase:
        "Відрахуйте сім днів від фактичної події, подайте повідомлення через потрібну систему й збережіть підтвердження. У разі збою зафіксуйте час його усунення. Окремо перевірте, чи після зміни зберігаються підстава законного перебування та право на роботу.",
    },
  ],
})
