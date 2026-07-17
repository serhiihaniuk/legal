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
      provisionId: "ppsa-art-212",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Opłatami sądowymi są wpis i opłata kancelaryjna; opłaty sądowe są dochodami budżetu państwa.",
          sourceLocator: "Art. 212 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("212", "Art. 212")} rozróżnia wpis i opłatę kancelaryjną oraz określa ich publicznoprawny charakter jako dochodów budżetu państwa.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Najpierw ustal, czy konkretna należność jest wpisem, czy opłatą kancelaryjną; są to dwie kategorie opłat sądowych.",
        },
        {
          locator: "§ 2",
          explanation:
            "Przepis wskazuje odbiorcę dochodu, ale nie ustala stawki konkretnego pisma.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("212", "Art. 212")} nie przesądza wysokości opłaty ani prawa do zwolnienia; służy klasyfikacji należności.`,
      foreignersCase:
        "Przy składaniu skargi na decyzję pobytową nazwij żądany i uiszczony rodzaj opłaty zgodnie z ustawą, nie utożsamiając każdego płatnego pisma z wpisem.",
    },
  ],
})
