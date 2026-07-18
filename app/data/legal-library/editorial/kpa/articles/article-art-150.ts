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
      article: "150",
      provisionId: "kpa-art-150",
      reviewStatus: "reviewed",
      summary:
        "Загалом wznowienie веде орган останньої інстанції, але якщо підстава пов’язана з його діяльністю, справу передають за спеціальним правилом.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Компетентним є орган, що видав decyzję в останній інстанції.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо дефект походить від цього органу, питання вирішує вищий орган і призначає орган для повторного розгляду.",
        },
        {
          locator: "§ 3",
          explanation:
            "Виняток із передачі стосується decyzji міністра та SKO у зазначених справах.",
        },
      ],
      legalEffect:
        "Компетенція змінюється, щоб орган не оцінював власну діяльність як підставу wznowienia, крім прямо названих винятків.",
      foreignersCase: kpaLaw.text`У справі іноземця адресат первинного podania з ${kpaLaw.article("148", "art. 148")} не завжди буде органом, який фактично проведе wznowione postępowanie.`,
    },
  ],
})
