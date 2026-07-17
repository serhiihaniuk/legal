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
      provisionId: "ppsa-art-177a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Jeżeli skarga kasacyjna nie spełnia wymagań ${ppsaLaw.article("176", "art. 176")} innych niż przytoczenie podstaw kasacyjnych i ich uzasadnienie, przewodniczący wzywa stronę do usunięcia braków w terminie siedmiu dni pod rygorem odrzucenia skargi.`,
          sourceLocator: "Art. 177a",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("177a", "Art. 177a")} pozwala uzupełnić wskazane wymagania formalne skargi kasacyjnej, ale wyłącza z tego wezwania same podstawy kasacyjne i ich uzasadnienie.`,
      rules: [
        {
          locator: "Art. 177a",
          explanation: ppsaLaw.text`Wezwanie dotyczy wymagań ${ppsaLaw.article("176", "art. 176")} innych niż podstawy kasacyjne i ich uzasadnienie; termin na reakcję wynosi siedem dni i ma określony rygor.`,
        },
      ],
      legalEffect:
        "Niewykonanie prawidłowego wezwania w terminie może doprowadzić do odrzucenia skargi kasacyjnej; przepis nie otwiera drogi do późniejszego uzupełniania podstaw kasacyjnych.",
      foreignersCase:
        "Po doręczeniu wezwania w sprawie pobytowej zapisz jego zakres i datę doręczenia. Uzupełniaj tylko wskazane braki, nie przedstawiając nowych podstaw kasacyjnych jako poprawy formy.",
    },
  ],
})
