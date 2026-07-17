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
      provisionId: "ustawa-o-cudzoziemcach-art-507",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("507", "Art. 507")} встановлює, що з dniem wejścia w życie ustawy раніше видані zezwolenia na zamieszkanie na czas oznaczony стають zezwoleniami na pobyt czasowy, а zezwolenia na osiedlenie — zezwoleniami na pobyt stały, із прямим збереженням чинності на виданий строк для zezwolenia na zamieszkanie na czas oznaczony.`,
          sourceLocator: "Art. 507 pkt 1–2",
        },
      ],
      summary:
        "Перехідна норма перетворює два види дозволів, виданих за попереднім законом, на відповідні види дозволів за новою системою; для zezwolenie na zamieszkanie na czas oznaczony прямо зберігається чинність на виданий строк.",
      rules: [
        {
          locator: "Art. 507 pkt 1",
          explanation:
            "Zezwolenie na zamieszkanie na czas oznaczony стає zezwoleniem na pobyt czasowy та зберігає чинність на виданий строк.",
        },
        {
          locator: "Art. 507 pkt 2",
          explanation:
            "Zezwolenie na osiedlenie стає zezwoleniem na pobyt stały.",
        },
      ],
      legalEffect:
        "Стаття має перехідний ефект для дозволів, що існували на дату wejścia w życie ustawy. Вона не є новою підставою для видачі дозволу та не продовжує строк, зазначений у старому документі.",
      foreignersCase: foreignersLaw.text`Для старого дозволу встановіть його вид, дату видачі, строк чинності та дату wejścia w życie ustawy; у висновку вкажіть, як саме ${foreignersLaw.article("507", "Art. 507")} змінює назву статусу.`,
    },
  ],
})
