import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-138",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sentencja wyroku повинна містити суд, імена суддів, protokolant та prokurator, якщо він брав участь, дату й місце розгляду та винесення, skarżący, предмет оскарження і rozstrzygnięcie суду.",
          sourceLocator: "Art. 138",
        },
      ],
      summary:
        "Норма встановлює обов’язкові ідентифікаційні та результативні елементи sentencja wyroku.",
      rules: [
        {
          locator: "Art. 138",
          explanation:
            "У sentencja окремо шукайте предмет зaskarżenia і саме rozstrzygnięcie, а також дані суду та учасників, названі статтею.",
        },
      ],
      legalEffect:
        "Sentencja має показувати, яку справу і яким рішенням суд завершив; стаття не замінює правил про uzasadnienie чи оскарження.",
      foreignersCase:
        "Після рішення у справі про pobyt звірте, чи sentencja стосується саме вашої decyzja і чи зрозумілий її результат. Для причин рішення звертайтеся до uzasadnienie.",
    },
  ],
})
