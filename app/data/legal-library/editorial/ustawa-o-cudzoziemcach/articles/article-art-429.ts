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
      provisionId: "ustawa-o-cudzoziemcach-art-429",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("429", "Art. 429")} розподіляє ведення конкретних rejestry з ${foreignersLaw.article("428", "Art. 428")} між konsul, органами Straży Granicznej, wojewoda, Szef Urzędu, właściwy minister і органами Policji. Кожен названий орган веде лише відповідний rejestr і лише у межах своєї właściwość; ewidencję zaproszeń ведуть wojewoda та Szef Urzędu.`,
          sourceLocator: "Art. 429 ust. 1 pkt 1–14 i ust. 2",
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
      ],
      legalEffect:
        "Норма визначає компетентні органи обліку, але не вирішує, який орган розглядає конкретну заяву поза межами відповідного rejestr.",
      foreignersCase: foreignersLaw.text`Встановіть вид rejestr через точне відсилання до ${foreignersLaw.article("428", "Art. 428")}, а потім знайдіть у ${foreignersLaw.article("429", "Art. 429")} орган або органи, що ведуть саме цей rejestr. Не переносіть компетенцію з одного виду обліку на інший.`,
    },
  ],
})
