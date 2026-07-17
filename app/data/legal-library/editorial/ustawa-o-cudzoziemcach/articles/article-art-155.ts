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
      provisionId: "ustawa-o-cudzoziemcach-art-155",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("155", "Art. 155")}, крім ${foreignersLaw.article("99", "art. 99")}, передбачає odmowa wszczęcia провадження про дозвіл ${foreignersLaw.article("151", "art. 151")} або ${foreignersLaw.article("151b", "art. 151b")}, якщо на день заяви cudzoziemiec має дозвіл ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для pracy як pracownik odbywający staż або ubiega się про ${foreignersLaw.article("127", "art. 127")} чи вже його має.`,
          sourceLocator: "Art. 155 ust. 1 pkt 1–2",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Для ${foreignersLaw.article("151b", "art. 151b")} odmowa wszczęcia додатково застосовується, якщо заяву подано того самого дня або протягом 14 днів від отримання Szef Urzędu zawiadomienie з ${foreignersLaw.article("156b", "art. 156b")} ust. 1 pkt 3.`,
          sourceLocator: "Art. 155 ust. 2",
        },
      ],
      summary:
        "Стаття стосується початку провадження про дослідницький дозвіл і містить окрему часову перешкоду для mobilność długoterminowa.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation: foreignersLaw.text`На дату подання перевірте дозвіл ICT для pracownik odbywający staż і заяву/наявність дозволу ${foreignersLaw.article("127", "art. 127")}.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Для заяви ${foreignersLaw.article("151b", "art. 151b")} також перевірте, чи не подано її в день або в 14-денний строк після отримання Szef Urzędu повідомлення про mobilność з ${foreignersLaw.article("156b", "art. 156b")} ust. 1 pkt 3.`,
        },
      ],
      legalEffect:
        "Наслідком є odmowa wszczęcia, а не остаточна odmowa udzielenia після оцінки матеріальних умов.",
      foreignersCase: foreignersLaw.text`Встановіть усі заяви та дозволи на дату подання, дату отримання повідомлення Szef Urzędu і точно розрізняйте ${foreignersLaw.article("151", "art. 151")} та ${foreignersLaw.article("151b", "art. 151b")}.`,
    },
  ],
})
