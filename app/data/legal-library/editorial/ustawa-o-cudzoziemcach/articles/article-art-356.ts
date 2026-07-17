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
      provisionId: "ustawa-o-cudzoziemcach-art-356",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("356", "Art. 356")} пов’язує виявлення обставин ${foreignersLaw.article("348", "Art. 348")} або ${foreignersLaw.article("351", "Art. 351")} із наданням відповідної згоди в decyzja про відмову від zobowiązanie do powrotu, а після остаточного рішення передбачає окреме провадження з urzędu.`,
          sourceLocator: "Art. 356 ust. 1–5",
        },
      ],
      summary:
        "Орган не повинен обмежитися питанням повернення, якщо в процедурі виявив гуманітарну або tolerowany підставу: закон визначає, яку згоду слід розглянути.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`За ${foreignersLaw.article("348", "Art. 348")} у рішення про відмову від повернення надається zgoda humanitarna, крім підстав ${foreignersLaw.article("349", "Art. 349")}; за ${foreignersLaw.article("351", "Art. 351")} pkt 1 — tolerowany згода після відмови в гуманітарній.`,
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Якщо обставина з’ясувалася після остаточного рішення або під час виконання рішення іншої держави ЄС, провадження щодо згоди розпочинається окремо з urzędu.",
        },
        {
          locator: "ust. 4–5",
          explanation: foreignersLaw.text`За ${foreignersLaw.article("351", "Art. 351")} pkt 3 zgoda надається на wniosek; у випадках ust. 2 компетентним є орган SG, який видав рішення про повернення.`,
        },
      ],
      legalEffect:
        "Норма координує два провадження, але не означає, що будь-яке клопотання автоматично зупиняє повернення або гарантує згоду.",
      foreignersCase:
        "Порівняйте дату й стадію decyzja o powrocie з моментом появи нової обставини; перевірте, чи орган відкрив окреме провадження та чи потрібен wniosek.",
    },
  ],
})
