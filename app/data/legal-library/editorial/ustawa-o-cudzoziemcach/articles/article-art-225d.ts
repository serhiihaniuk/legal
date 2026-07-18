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
      provisionId: "ustawa-o-cudzoziemcach-art-225d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Для ідентифікації та uwierzytelnienia власника konto в MOS обробляють дані з ${foreignersLaw.article("225b", "Art. 225b")} ust. 3 і дані, використані для автентифікації.`,
          sourceLocator: "Art. 225d pkt 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Для подання заяви про pobyt czasowy MOS обробляє визначені дані іноземця з ${foreignersLaw.article("13", "Art. 13")} та дані й інформацію з ${foreignersLaw.article("106", "Art. 106")} ust. 1 pkt 2–11, ust. 2 і 4–7.`,
          sourceLocator: "Art. 225d pkt 2",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Для заяви про pobyt stały обробляють визначені дані іноземця, окремі дані його подружжя та інформацію з ${foreignersLaw.article("203", "Art. 203")} ust. 1 pkt 3–7; для заяви про rezydenta długoterminowego UE — визначені дані іноземця й інформацію з ${foreignersLaw.article("219", "Art. 219")} ust. 1 pkt 2–10.`,
          sourceLocator: "Art. 225d pkt 3–4",
        },
      ],
      summary:
        "Стаття прив’язує категорії даних у MOS до конкретної мети: облікового запису або одного з трьох видів електронної заяви.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Дані профілю й автентифікації мають окрему мету — встановити та підтвердити особу власника konto.",
        },
        {
          locator: "pkt 2–4",
          explanation:
            "Обсяг даних не однаковий для pobytu czasowego, stałego та rezydenta długoterminowego UE. Його визначають точні відсилання до матеріальних формулярів кожної процедури.",
        },
      ],
      legalEffect:
        "Норма визначає законодавчий обсяг і мету обробки даних у MOS; вона не дозволяє автоматично переносити всі категорії даних між різними видами заяв.",
      foreignersCase:
        "Для перевірки конкретного поля спочатку визначте мету обробки та вид заяви, а потім відкрийте точний пункт відсильної статті. Не робіть висновок лише за тим, що поле технічно доступне в MOS.",
    },
  ],
})
