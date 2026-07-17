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
      provisionId: "ustawa-o-cudzoziemcach-art-166",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("166", "Art. 166")} встановлює обов'язкове cofnięcie окремих сімейних permit за умовами ${foreignersLaw.article("101", "art. 101")} та ${foreignersLaw.article("100", "art. 100")}, а для дозволу з ${foreignersLaw.article("161b", "art. 161b")} — окремий перелік підстав.`,
          sourceLocator: "Art. 166 ust. 1–2",
        },
      ],
      summary:
        "Після надання permit орган має відкликати його лише за фактичної обставини з конкретного переліку для відповідної категорії.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation: foreignersLaw.text`Дозвіл члену сім'ї obywatel Rzeczypospolitej Polskiej, який перебуває у шлюбі з цим громадянином, cofaється у випадках ${foreignersLaw.article("101", "art. 101")} pkt 1 або 2 чи за обставиною ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4 або 5.`,
        },
        {
          locator: "ust. 1 pkt 2",
          explanation: foreignersLaw.text`Так само cofaється permit для połączenie з родиною подружжю osoby referencyjnej з pobyt stały або pobyt rezydenta długoterminowego UE, якщо наявна одна з цих обставин.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Для permit за ${foreignersLaw.article("161b", "art. 161b")} ust. 1, крім ${foreignersLaw.article("101", "art. 101")} pkt 1, cofnięcie відбувається за обставиною ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4 або 8.`,
        },
      ],
      legalEffect:
        "Cofnięcie є окремим рішенням після udzielenie; самого сумніву недостатньо — орган має встановити передбачений для цієї категорії факт і застосувати точну норму.",
      foreignersCase: foreignersLaw.text`Після повідомлення про cofnięcie зіставте встановлені факти з точним пунктом ${foreignersLaw.article("100", "art. 100")} або ${foreignersLaw.article("101", "art. 101")}, перевірте докази та не переносіть перелік з іншої категорії permit.`,
    },
  ],
})
