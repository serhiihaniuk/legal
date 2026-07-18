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
      provisionId: "ustawa-o-cudzoziemcach-art-520",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("520", "Art. 520")} визначає, що dotychczasowe przepisy wykonawcze, видані на підставі перелічених старих статей, зберігають moc до набрання чинності актами на підставі нової ustawa, але не довше 12 місяців від дня її wejścia w życie.`,
          sourceLocator: "Art. 520 pkt 1–4",
        },
      ],
      summary:
        "Перехідна норма тимчасово зберігає чинність окремих старих актів wykonawczych до появи нових актів, із загальним максимальним строком, названим у статті.",
      rules: [
        {
          locator: "Art. 520 pkt 1",
          explanation:
            "Перелік старих delegacje охоплює, зокрема, правила про документи, wizy, pobyt, ośrodki та інші процедури; їхні акти wykonawcze діють до нових актів на підставі названих положень нової ustawa.",
        },
        {
          locator: "Art. 520 pkt 2–4",
          explanation:
            "Окремі перехідні акти стосуються також законів, змінених статтями 467, 474 і 488; для кожного потрібна перевірка відповідного закону та нового акта.",
        },
        {
          locator: "Art. 520 pkt 1–4",
          explanation:
            "У всіх випадках текст встановлює верхню межу: не довше 12 місяців від dnia wejścia w życie niniejszej ustawy.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("520", "Art. 520")} — тимчасове правило про підзаконні акти, а не самостійна підстава для pobyt, wiza чи decyzja. Для історичної дати потрібно встановити, який акт і яка нова делегація були застосовні.`,
      foreignersCase:
        "У старій справі назвіть конкретний akt wykonawczy та delegacja, перевірте дату wejścia w życie ustawy й момент набрання чинності новим актом; не застосовуйте загальне посилання без цієї хронології.",
    },
  ],
})
