import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "223",
      provisionId: "kpa-art-223",
      reviewStatus: "reviewed",
      summary:
        "Стаття покладає на органи обов'язок розглядати skargi і wnioski в межах їхньої компетенції та передбачає відповідальність працівника за неналежний або несвоєчасний розгляд. Вона розмежовує компетенцію органу і особисту службову відповідальність.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Державні, самоврядні та визначені суспільні органи розглядають і завершують skargi та wnioski лише в межах своєї właściwości.",
        },
        {
          locator: "§ 2",
          explanation:
            "Винний у неправильному або несвоєчасному розгляді працівник підлягає porządkowej, dyscyplinarnej або іншій передбаченій законом відповідальності.",
        },
      ],
      legalEffect:
        "Орган не може вирішувати звернення поза компетенцією, а порушення якості чи строку може мати службові наслідки для винного працівника.",
      foreignersCase: kpaLaw.text`Скарга на роботу urzędu wojewódzkiego повинна потрапити компетентному органу. ${kpaLaw.article("223", "Art. 223")} не дає іноземцю нового дозволу чи рішення, але забезпечує належний службовий розгляд скарги.`,
    },
  ],
})
