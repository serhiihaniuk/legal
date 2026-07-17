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
      provisionId: "powierzanie-pracy-art-26",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("26", "Art. 26")} ust. 1 визначає właściwy wojewoda для zezwolenie na pracę на користь польського podmiot за його siedziba або місцем stałego pobytu. Ust. 2 вимагає відмовити у wszczęciu, а вже розпочате postępowanie umorzyć, якщо powierzenie стосувалося б діяльності з rozporządzenie за ${workLaw.article("45", "art. 45")} ust. 2 або випадків ${workLaw.article("2", "art. 2")} pkt 9 lit. c–e.`,
          sourceLocator: "Art. 26 ust. 1–2 pkt 1–2",
        },
      ],
      summary:
        "Стаття встановлює компетентного wojewoda для звичайного zezwolenie на роботу на користь польського podmiot та відсіює моделі, які мають інший режим. Sezonowa praca і визначені функції не повинні автоматично проводитися за цією процедурою.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Звернення подають до wojewoda, właściwość якого пов'язана із siedziba або місцем stałego pobytu polski podmiot powierzający pracę.",
        },
        {
          locator: "ust. 2 pkt 1–2",
          explanation: workLaw.text`Провадження не відкривають або припиняють, якщо робота належить до діяльності, визначеної для zezwolenie sezonowe за ${workLaw.article("45", "art. 45")} ust. 2, або до функцій з ${workLaw.article("2", "art. 2")} pkt 9 lit. c–e: зокрема zarząd, ведення чи представництво spółka та prokura.`,
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("26", "Art. 26")} розподіляє компетенцію та процедуру, але не надає legalny pobyt і не підтверджує uprawnienie do pracy. Неправильно обраний режим може перешкодити розгляду wniosek.`,
      foreignersCase:
        "Встановіть siedziba або місце stałego pobytu podmiot, фактичний вид роботи та правову модель: звичайна робота, sezonowa praca чи функція. Окремо перевірте документ legalnego pobytu і підставу доступу до роботи.",
    },
  ],
})
