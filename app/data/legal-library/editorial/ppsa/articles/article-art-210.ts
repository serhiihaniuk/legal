import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-210",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Strona traci uprawnienie do żądania zwrotu kosztów, jeżeli najpóźniej przed zamknięciem rozprawy bezpośrednio poprzedzającej orzeczenie nie zgłosi wniosku; sąd powinien pouczyć stronę bez profesjonalnego pełnomocnika o skutkach zaniechania. Reguła ta nie działa przy orzekaniu na posiedzeniu niejawnym, gdy strona nie jest reprezentowana przez adwokata, radcę prawnego, doradcę podatkowego lub rzecznika patentowego — wtedy sąd orzeka o należnych kosztach z urzędu.",
          sourceLocator: "Art. 210 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("210", "Art. 210")} określa termin zgłoszenia wniosku o zwrot kosztów i wyjątek, w którym na posiedzeniu niejawnym sąd rozstrzyga koszty z urzędu.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Zwykły termin kończy się przed zamknięciem rozprawy bezpośrednio poprzedzającej orzeczenie; osoba bez profesjonalnego pełnomocnika powinna otrzymać pouczenie.",
        },
        {
          locator: "§ 2",
          explanation: ppsaLaw.text`Przy posiedzeniu niejawnym i braku wskazanego pełnomocnika wniosek nie jest wymagany na zasadzie ${ppsaLaw.article("210", "§ 1")}, bo sąd orzeka z urzędu.`,
        },
      ],
      legalEffect: ppsaLaw.text`Późny wniosek może oznaczać utratę uprawnienia, lecz przed zastosowaniem ${ppsaLaw.article("210", "§ 1")} trzeba sprawdzić tryb orzekania i reprezentację strony.`,
      foreignersCase: ppsaLaw.text`W sprawie pobytowej pełnomocnik powinien zgłosić wniosek przed zamknięciem rozprawy. Jeżeli nie ma profesjonalnego pełnomocnika i sprawa jest na posiedzeniu niejawnym, sprawdź zastosowanie ${ppsaLaw.article("210", "§ 2")}.`,
    },
  ],
})
