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
      provisionId: "ustawa-o-cudzoziemcach-art-247",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Cudzoziemcowi відмовляють у wszczęciu postępowania щодо видачі або обміну karty pobytu, якщо під час заяви або в строк ${foreignersLaw.article("246", "Art. 246")} ust. 2 він не подав odcisków linii papilarnych.`,
          sourceLocator: "Art. 247",
        },
      ],
      summary:
        "Неподання відбитків у визначений момент може перешкодити навіть початку провадження щодо karty pobytu.",
      rules: [
        {
          locator: "zdanie 1",
          explanation: foreignersLaw.text`Перевірте, чи був обов’язок подати відбитки та чи настав або сплив строк, призначений за ${foreignersLaw.article("246", "Art. 246")} ust. 2.`,
        },
      ],
      legalEffect:
        "Наслідком є odmowa wszczęcia postępowania, а не просто негативна оцінка матеріальної умови дозволу.",
      foreignersCase:
        "Якщо отримано письмо про odmowę wszczęcia, зіставте його з фактом особистої явки, повідомленням про відбитки та строками. Не називайте таке письмо decyzją про відмову в самому pobycie.",
    },
  ],
})
