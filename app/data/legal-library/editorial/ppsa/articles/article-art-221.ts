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
      provisionId: "ppsa-art-221",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("221", "Art. 221")} ma w lokalnym tekście jednolitym status uchylony i zawiera wyłącznie oznaczenie „(uchylony)”. Nie ustanawia aktualnej reguły procesowej.`,
          sourceLocator: "Art. 221",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("221", "Art. 221")} jest uchylony; w aktualnym lokalnym korpusie brak operatywnej treści do objaśnienia jako obowiązującej normy.`,
      rules: [
        {
          locator: "Art. 221",
          explanation: ppsaLaw.text`Nie stosuj tego artykułu jako podstawy wezwania, terminu ani odrzucenia pisma; dla opłaty trzeba czytać obowiązujące ${ppsaLaw.article("219", "art. 219")}–${ppsaLaw.article("220", "220")} i przepisy szczególne.`,
        },
      ],
      legalEffect:
        "Status przepisu w korpusie to repealed; jego dawne brzmienie nie może być przedstawiane jako aktualny skutek proceduralny.",
      foreignersCase: ppsaLaw.text`W sprawie pobytowej pomiń ${ppsaLaw.article("221", "art. 221")} jako podstawę prawną. Jeśli dokument powołuje ten uchylony przepis, porównaj podstawę z aktualnym tekstem PPSA i pouczeniem sądu.`,
    },
  ],
})
