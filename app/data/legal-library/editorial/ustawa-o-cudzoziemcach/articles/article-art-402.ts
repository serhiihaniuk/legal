import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-402",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Видаючи postanowienie про strzeżony ośrodek або areszt, суд вживає необхідних заходів для захисту майна іноземця та, за визначених умов, повідомляє представництво, sąd opiekuńczy, орган соціальної опіки або особу, яку назвав іноземець.",
          sourceLocator: "Art. 402 ust. 1 pkt 1–4",
        },
        {
          kind: "statute-text",
          text: "Суд повідомляє іноземця зрозумілою для нього мовою про здійснені дії, видані розпорядження та його права у провадженні перед судом.",
          sourceLocator: "Art. 402 ust. 2",
        },
      ],
      summary:
        "Стаття захищає майно та сімейні або соціальні зв’язки іноземця під час судового рішення про strzeżony ośrodek чи areszt і вимагає зрозумілого повідомлення про права.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Консульство повідомляють за згодою іноземця; інші органи — коли потрібна опіка над дитиною або хворою особою; також повідомляють вказану іноземцем особу.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Інформація про дії суду та права має бути мовою, зрозумілою іноземцю.",
        },
      ],
      legalEffect:
        "Норма створює обов’язок суду вжити захисних та інформаційних дій, але обсяг повідомлення залежить від конкретної потреби й згоди, прямо передбаченої для представництва.",
      foreignersCase:
        "Перевірте опис майна, згоду на повідомлення konsulat, потребу в суді опіки або соціальній допомозі та те, якою мовою вам пояснили права й розпорядження.",
    },
  ]),
})
