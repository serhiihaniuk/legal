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
      provisionId: "powierzanie-pracy-art-20",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("20", "Art. 20")} вимагає подавати powiadomienia за ${workLaw.article("18", "art. 18")} ust. 2 і ${workLaw.article("19", "art. 19")} через system teleinformatyczny протягом 7 днів від виникнення відповідної обставини. Якщо несправність системи унеможливила своєчасне повідомлення, його подають не пізніше першого робочого дня після усунення несправності.`,
          sourceLocator: "Art. 20 ust. 1–2",
        },
      ],
      summary:
        "Стаття встановлює канал і строк для повідомлень про допустимі зміни та невикористання zezwolenie. Для системного збою строк переноситься до першого робочого дня після відновлення, а не зникає.",
      rules: [
        {
          locator: "ust. 1",
          explanation: workLaw.text`Powiadomienie за ${workLaw.article("18", "art. 18")} ust. 2 або ${workLaw.article("19", "art. 19")} подається через визначений system протягом 7 днів від події, а не від дати, коли сторона зручно підготувала документи.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "За несправності системи, яка не дозволила своєчасне подання, повідомлення подають найпізніше першого робочого дня після дня усунення несправності.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("20", "Art. 20")} регулює дотримання процедурного строку та не надає нового права на роботу або pobyt. Саме powiadomienie не замінює zezwolenie і не змінює його умови поза межами ${workLaw.article("18", "art. 18")}.`,
      foreignersCase:
        "Відрахуйте 7 днів від фактичної події, подайте через потрібний system і збережіть підтвердження. При збої зафіксуйте час усунення; перевірте, чи після зміни зберігається окрема підстава legalnego pobytu та роботи.",
    },
  ],
})
