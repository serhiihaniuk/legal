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
      provisionId: "ustawa-o-cudzoziemcach-art-203i",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("203i", "Art. 203i")} наказує wojewodzie umorzyć postępowanie про pobyt stały за невиконання належної явки, відбитків пальців, зразка підпису або пред’явлення документа, але з винятками з ${foreignersLaw.article("203b", "Art. 203b")}, ${foreignersLaw.article("203g", "Art. 203g")} і ${foreignersLaw.article("203h", "Art. 203h")}.`,
          sourceLocator: "Art. 203i ust. 1–2",
        },
      ],
      summary:
        "Umorzenie тут є наслідком невиконання особистого етапу. Воно не тотожне відмові через відсутність матеріальної підстави для pobytu stałego.",
      rules: [
        {
          locator: "Art. 203i ust. 1",
          explanation:
            "Перед umorzeniem organ перевіряє, чи немає підстав залишити заяву без розгляду, повернути її або відмовити у відкритті провадження, а також встановлює конкретне невиконання після належного wezwania.",
        },
        {
          locator: "Art. 203i ust. 2",
          explanation: foreignersLaw.text`Виняток особистої явки з ${foreignersLaw.article("203h", "Art. 203h")}, винятки щодо відбитків і підпису з ${foreignersLaw.article("203b", "Art. 203b")} та проблема на боці wojewody з ${foreignersLaw.article("203g", "Art. 203g")} виключають відповідну підставу санкції.`,
        },
      ],
      legalEffect:
        "За наявності всіх передумов organ закінчує провадження без матеріального вирішення; за наявності винятку повинен продовжити його належним спеціальним шляхом.",
      foreignersCase: foreignersLaw.text`Побудуйте хронологію: doręczenie wezwania → строк → явка → кожна виконана дія → можливий виняток. Саме вона показує, чи ${foreignersLaw.article("203i", "Art. 203i")} можна було застосувати.`,
    },
  ],
})
