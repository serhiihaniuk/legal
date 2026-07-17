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
      provisionId: "ustawa-o-cudzoziemcach-art-156a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("156a", "Art. 156a")} регулює повідомлення, коли cudzoziemiec з польською візою або дозволом для badań має намір користуватися mobilność krótkoterminowa або długoterminowa naukowca в іншій державі UE.`,
          sourceLocator: "Art. 156a",
        },
      ],
      summary:
        "Для виїзної мобільності дослідника закон визначає, хто повідомляє компетентний орган іншої держави та Szef Urzędu, якщо це вимагає її право.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Повідомити можуть польська або приймаюча jednostka naukowa чи сам cudzoziemiec — залежно від конкретного суб’єкта й вимог права приймаючої держави UE.",
        },
      ],
      legalEffect:
        "Zawiadomienie є елементом процедури мобільності в іншій державі, але не створює автоматичного дозволу на дослідження там.",
      foreignersCase:
        "Встановіть польський документ, приймаючу одиницю, вид мобільності, компетентний орган іншої держави та доказ виконання вимоги повідомлення.",
    },
  ],
})
