import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-62",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Przewodniczący wydziału або призначений sędzia організовує комплектування akt і, за потреби, інших доказів, визначає склад суду та призначає posiedzenie niejawne або rozprawa.",
          sourceLocator: "Art. 62 pkt 1–3",
        },
      ],
      summary:
        "Стаття розподіляє базові організаційні дії перед розглядом справи.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "До розгляду комплектуються необхідні akta та, за потреби, інші dowody.",
        },
        {
          locator: "pkt 2–3",
          explanation:
            "Визначаються склад sędziowski і дата posiedzenie або rozprawa.",
        },
      ],
      legalEffect:
        "Це організаційна норма; вона не визначає наперед оцінку доказів чи результат skarga.",
      foreignersCase:
        "Стежте, чи sąd отримав повні akta справи про pobyt і чи належно повідомив про призначене posiedzenie.",
    },
  ]),
})
