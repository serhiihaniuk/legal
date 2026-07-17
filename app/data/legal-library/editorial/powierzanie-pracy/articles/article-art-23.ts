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
      provisionId: "powierzanie-pracy-art-23",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("23", "Art. 23")} передбачає, що при uchylenie zezwolenia на роботу cudzoziemiec, який перебуває в Польщі, organ повідомляє Straż Graniczna, якщо decyzja про uchylenie стала ostateczna.`,
          sourceLocator: "Art. 23",
        },
      ],
      summary:
        "Після остаточного uchylenie орган передає інформацію Straż Graniczna, коли cudzoziemiec перебуває на території Польщі. Стаття встановлює обмін інформацією, а не окрему процедуру надання pobyt.",
      rules: [
        {
          locator: "Art. 23",
          explanation:
            "Потрібні дві умови: cudzoziemiec перебуває в Польщі, а decyzja про uchylenie є ostateczna. Тоді орган інформує Straż Graniczna.",
        },
      ],
      legalEffect: workLaw.text`Інформація до Straż Graniczna є наслідком остаточного припинення дозволу на роботу; вона не замінює оцінку legalnego pobytu і не означає автоматичного висновку про його припинення за самим ${workLaw.article("23", "art. 23")}.`,
      foreignersCase:
        "Отримайте decyzja, перевірте дату її ostateczność і підставу uchylenie. Підготуйте окремі докази чинної підстави pobyt та іншого права на роботу, якщо вони існують; не покладайтеся на старе zezwolenie.",
    },
  ],
})
