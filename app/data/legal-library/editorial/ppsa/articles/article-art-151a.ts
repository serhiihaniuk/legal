import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const kpaLaw = createLegalTextAuthor("kpa")

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-151a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Задовольняючи sprzeciw від decyzja, суд uchyla decyzja повністю, якщо встановлює порушення ${kpaLaw.article("138", "art. 138 § 2")} KPA, і може з urzędu або за wniosek накласти органу grzywna; якщо sprzeciw не задоволено, суд його oddala. На wyrok за ${ppsaLaw.article("151a", "§ 1")} środka odwoławczego немає, але на postanowienie про grzywna належить zażalenie; правила застосовуються відповідно і до sprzeciw від postanowienie.`,
          sourceLocator: "Art. 151a § 1–4",
        },
      ],
      summary: ppsaLaw.text`Стаття встановлює окремий режим sprzeciw від decyzja або postanowienie у випадках, пов’язаних з ${kpaLaw.article("138", "art. 138 § 2")} KPA, включно з відсутністю звичайного środka odwoławczego від визначеного wyrok.`,
      rules: [
        {
          locator: "§ 1–2",
          explanation: ppsaLaw.text`Для sprzeciw спочатку перевірте названу підставу ${kpaLaw.article("138", "art. 138 § 2")} KPA; наслідком є uchylenie decyzja або oddalenie sprzeciw залежно від оцінки суду.`,
        },
        {
          locator: "§ 3",
          explanation: ppsaLaw.text`Wyrok за ${ppsaLaw.article("151a", "§ 1")} не має środka odwoławczego, але postanowienie у частині grzywna може бути оскаржене zażalenie.`,
        },
        {
          locator: "§ 4",
          explanation:
            "Ті самі правила відповідно застосовуються до sprzeciw від postanowienie.",
        },
      ],
      legalEffect:
        "Це спеціальний контроль sprzeciw, а не загальна заміна odwołanie; наслідок і можливість оскарження залежать від виду розглянутого рішення.",
      foreignersCase: ppsaLaw.text`У справі іноземця спочатку встановіть, чи decyzja або postanowienie справді належить до режиму sprzeciw за ${kpaLaw.article("138", "art. 138 § 2")} KPA. Не називайте цей шлях звичайною апеляцією на будь-яку decyzja про pobyt.`,
    },
  ],
})
