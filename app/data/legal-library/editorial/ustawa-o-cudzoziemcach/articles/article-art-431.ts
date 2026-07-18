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
      provisionId: "ustawa-o-cudzoziemcach-art-431",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("431", "Art. 431")} ust. 1: «Dane w postaci odcisków linii papilarnych ... przechowuje się ... do czasu wpisania ... potwierdzenia odbioru» відповідного документа.`,
          sourceLocator: "Art. 431 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Строк зберігання відбитків тут прив’язаний до внесення підтвердження або остаточного рішення, а не просто до дати pobrania.",
          sourceLocator: "Art. 431 ust. 1–2",
        },
      ],
      summary:
        "Стаття визначає тимчасове зберігання відбитків пальців у реєстрах до внесення підтвердження отримання документа або до внесення даних про остаточну відмову.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Відбитки для дозволу малий рух, karty pobytu або документа zgoda na pobyt tolerowany зберігаються до внесення підтвердження отримання відповідного документа.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо видано рішення про відмову в дозволі, карті чи документі або їх обміні, відбитки зберігаються до внесення інформації про це рішення, коли воно стало prawomocne.",
        },
      ],
      legalEffect:
        "Норма пов’язує зберігання біометрії з конкретною подією в реєстрі. Вона не встановлює загального права вимагати негайного видалення відбитків у кожній ситуації.",
      foreignersCase:
        "З’ясуйте, який документ або рішення є підставою запису, і перевірте, чи внесено підтвердження отримання або остаточну відмову.",
    },
  ],
})
