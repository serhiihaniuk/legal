import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-278",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Орган, компетентний видати або обміняти документ «zgoda na pobyt tolerowany», бере odciski linii papilarnych; якщо з причин органу це неможливо в день особистої явки, призначається строк не коротший за 7 днів.",
          sourceLocator: "Art. 278 ust. 1–1a",
        },
        {
          kind: "statute-text",
          text: "Якщо іноземець не подав відбитки під час заяви або в призначений строк, йому відмовляють у wszczęciu postępowania щодо видачі або обміну документа.",
          sourceLocator: "Art. 278 ust. 2",
        },
      ],
      summary:
        "Стаття встановлює відбитки пальців як процесуальну умову видачі або обміну документа tolerowany.",
      rules: [
        {
          locator: "ust. 1–1a",
          explanation:
            "З’ясуйте, хто приймає заяву і чи отримано відбитки; при перешкоді органу строк має бути не меншим за 7 днів.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Неподання відбитків може спричинити odmowę wszczęcia, а не рішення про матеріальну відмову у згоді.",
        },
      ],
      legalEffect:
        "Порушення правила про відбитки перешкоджає початку документного провадження, якщо немає доведеного винятку в самій процедурі.",
      foreignersCase:
        "Збережіть підтвердження особистої явки й призначеного строку. Якщо відбитки не зняли з вини органу, письмово зафіксуйте це до кінця нового строку.",
    },
  ],
})
