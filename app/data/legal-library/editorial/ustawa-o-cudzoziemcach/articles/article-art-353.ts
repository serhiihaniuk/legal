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
      provisionId: "ustawa-o-cudzoziemcach-art-353",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("353", "Art. 353")} передбачає cofnięcie zgody na pobyt tolerowany decyzja, коли припинилася причина, іноземець виїхав, виникла загроза або він ухиляється від обов’язків з ${foreignersLaw.article("358", "Art. 358")} у відповідних випадках.`,
          sourceLocator: "Art. 353 pkt 1–4",
        },
      ],
      summary:
        "Tolerowany pobyt може бути відкликаний, якщо зникає його підстава, іноземець залишає Польщу, виникає загроза або він ухиляється від покладених обов’язків.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "Cofnięcie відбувається, коли припинилася причина надання згоди або іноземець залишив територію Польщі.",
        },
        {
          locator: "pkt 3",
          explanation: foreignersLaw.text`Для згоди на підставі ${foreignersLaw.article("351", "Art. 351")} pkt 2 або 3 підставою є також загроза оборонності, безпеці держави чи громадському порядку.`,
        },
        {
          locator: "pkt 4",
          explanation: foreignersLaw.text`У відповідних справах згоду відкликають, якщо іноземець ухиляється від обов’язків з ${foreignersLaw.article("358", "Art. 358")}.`,
        },
      ],
      legalEffect: foreignersLaw.text`Відкликання оформлюється decyzja; треба встановити, яка саме підстава згоди діяла і чи застосовний відповідний пункт ${foreignersLaw.article("353", "Art. 353")}.`,
      foreignersCase:
        "Дотримуйтеся обов’язку zgłaszanie та повідомлення про адресу; при cofnięcie перевірте факти виїзду, загрози або порушення та строк odwołanie.",
    },
  ],
})
