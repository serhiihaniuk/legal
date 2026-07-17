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
      provisionId: "ustawa-o-cudzoziemcach-art-149a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("149a", "Art. 149a")} регулює намір скористатися mobilność studenta в іншій державі UE особою з польською student-візою або дозволом для studia: визначені jednostka або cudzoziemiec повідомляють орган цієї держави та Szef Urzędu, якщо право тієї держави вимагає такого повідомлення.`,
          sourceLocator: "Art. 149a",
        },
      ],
      summary:
        "Для мобільності з Польщі до іншої держави UE закон визначає суб’єктів повідомлення та залежність від правил приймаючої держави.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Перевірте, чи документ має adnotacja «student» або є польським zezwolenie для studia, хто має подати zawiadomienie та чи вимагає його право іншої держави UE.",
        },
      ],
      legalEffect:
        "Повідомлення запускає передбачену для mobilność взаємодію органів; саме по собі воно не є новим дозволом на pobyt в іншій державі.",
      foreignersCase:
        "Визначте приймаючу державу, програму або угоду мобільності, документ cudzoziemiec і доказ подання повідомлення кожному потрібному органу.",
    },
  ],
})
