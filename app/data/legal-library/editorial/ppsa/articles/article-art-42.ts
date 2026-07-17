import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-42",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 42 § 1 встановлює: «Wypowiedzenie pełnomocnictwa przez mocodawcę odnosi skutek prawny w stosunku do sądu od dnia zawiadomienia go».",
          sourceLocator: "Art. 42 § 1",
        },
      ],
      summary:
        "Wypowiedzenie pełnomocnictwo має різний момент дії щодо суду та інших учасників: для суду — від повідомлення, для протилежної сторони й інших учасників — від doręczenie повідомлення судом; окремі представники ще певний час діють для захисту mocodawca.",
      rules: [
        {
          locator: "Art. 42 § 1",
          explanation:
            "Щодо sąd юридичний ефект wypowiedzenie виникає від дня zawiadomienie суду; щодо інших учасників — від дня doręczenie їм цього повідомлення судом.",
        },
        {
          locator: "Art. 42 § 2",
          explanation:
            "Adwokat, radca prawny, doradca podatkowy або rzecznik patentowy після wypowiedzenie діє ще два тижні, якщо mocodawca не звільнив його; інший pełnomocnik діє такий самий час, коли це потрібно для захисту mocodawca.",
        },
      ],
      legalEffect:
        "Стаття визначає моменти дії wypowiedzenie та прямо названий період подальшої дії окремих представників; конкретний наслідок залежить від адресата повідомлення і виду pełnomocnik.",
      foreignersCase:
        "Після припинення доручення у справі іноземця встановіть дату zawiadomienie sądu, дату doręczenie іншим учасникам і чи діє правило двох тижнів для конкретного представника.",
    },
  ]),
})
