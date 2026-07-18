import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-91",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 91 є виконаною нормою про зміну Kodeksu postępowania w sprawach o wykroczenia. У провадженні про накладення штрафу постановою (postępowanie mandatowe) за art. 84 цього закону та у визначених справах за art. 465 ust. 1a закону «ustawa o cudzoziemcach» можна накласти штраф до 10 000 zł, якщо публічним обвинувачем є названий у нормі орган.",
          sourceLocator: "Art. 91 pkt 1–2; art. 96 § 1af KPW",
        },
      ],
      summary:
        "Поправка визначає спеціальну верхню межу штрафу в провадженні за постановою. У справах за art. 84 публічним обвинувачем має бути компетентний орган PIP або Straż Graniczna, а у справах за art. 465 ust. 1a закону про іноземців — компетентний орган Straż Graniczna.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "В art. 96 § 1a KPW змінено кінець pkt 2 і скасовано pkt 3.",
        },
        {
          locator: "pkt 2; § 1af pkt 1–2",
          explanation:
            "У провадженні про накладення штрафу постановою за діяння з art. 84 або art. 465 ust. 1a, коли публічним обвинувачем є визначений орган, штраф може становити до 10 000 zł.",
        },
      ],
      legalEffect:
        "Верхня межа стосується штрафу, накладеного постановою у визначеній процедурі. Вона не визначає автоматично розміру кожного штрафу і не доводить самого порушення.",
      foreignersCase:
        "У разі отримання штрафної постанови перевірте статтю, орган-публічного обвинувача і вид процедури. Не змішуйте верхню межу 10 000 zł для такої постанови з мінімальними штрафами, встановленими art. 84.",
    },
  ]),
})
