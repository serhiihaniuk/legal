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
      provisionId: "ustawa-o-cudzoziemcach-art-429",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("429", "Art. 429")} ust. 1: «Rejestry ... prowadzą następujące organy» — кожен у межах своєї właściwość, визначеної для відповідного rejestr.`,
          sourceLocator: "Art. 429 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "У тексті corpus є дві редакційні версії pkt 2 з відсиланнями 180 і 181; дату застосовної редакції треба звіряти за перехідною зміною.",
          sourceLocator: "Art. 429 ust. 1 pkt 2 та odnośniki 180–181",
        },
      ],
      summary:
        "Стаття розподіляє ведення rejestry між konsul, органами Straży Granicznej, wojewoda, minister, Szef Urzędu, Policja та іншими органами залежно від виду запису.",
      rules: [
        {
          locator: "ust. 1 pkt 1–14",
          explanation: foreignersLaw.text`Кожен rejestr веде орган, прямо названий для нього, і лише в межах своєї właściwość; перелік охоплює візи, дозволи, документи, повернення, відбитки та інші записи з ${foreignersLaw.article("428", "Art. 428")}.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Ewidencję zaproszeń ведуть wojewoda і Szef Urzędu — кожен у межах своєї właściwość.",
        },
        {
          locator: "pkt 2 та odnośniki 180–181",
          explanation:
            "У консолідованому тексті наведені редакційні примітки про зміну переліку rejestry; для факту до або після зміни потрібна перевірка дати набрання чинності.",
        },
      ],
      legalEffect:
        "Норма визначає компетентні органи обліку, але не вирішує, який орган розглядає конкретну заяву поза межами відповідного rejestr.",
      foreignersCase: foreignersLaw.text`Встановіть вид rejestr і дату події, потім перевірте, чи був орган компетентним за ${foreignersLaw.article("429", "Art. 429")} та застосовною редакцією; у разі сумніву врахуйте odnośniki 180–181.`,
    },
  ],
})
