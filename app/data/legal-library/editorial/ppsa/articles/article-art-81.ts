import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-81",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо żądanie ustanowienie kurator або wywieszenie pismo було необґрунтованим, sąd розпоряджається належним doręczenie, а за потреби на wniosek зацікавленої сторони скасовує postępowanie, проведене за участю kurator або після wywieszenie.",
          sourceLocator: "Art. 81",
        },
      ],
      summary:
        "Неправомірно використаний механізм невідомої адреси може бути виправлений належним врученням і процесуальним скасуванням.",
      rules: [
        {
          locator: "Art. 81",
          explanation:
            "Потрібно встановити, що підстава для kurator або wywieszenie була необґрунтованою.",
        },
        {
          locator: "Art. 81",
          explanation:
            "Sąd організовує właściwe doręczenie і, за wniosek, може zniesienie postępowanie, проведене у спеціальному режимі.",
        },
      ],
      legalEffect:
        "Норма дає засіб виправлення процесуального дефекту, але не обіцяє автоматичного скасування всіх наслідків.",
      foreignersCase:
        "Якщо cudzoziemiec доведе, що його адреса була відома, просіть перевірити art. 81 і зберіть докази повідомленої адреси та doręczenie.",
    },
  ]),
})
