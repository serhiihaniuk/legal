import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-235",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Канцелярський збір стягують також за копії, витяги, роздруківки, довідки та інші документи, видані зі збірок, які суд веде поза матеріалами конкретної справи.",
          sourceLocator: "Art. 235",
        },
      ],
      summary:
        "Стаття поширює канцелярський збір (opłata kancelaryjna) на документи з інших судових реєстрів і збірок.",
      rules: [
        {
          locator: "Art. 235",
          explanation:
            "Визначте джерело документа: матеріали справи чи окрема судова збірка. Це допомагає знайти правильну підставу та ставку.",
        },
      ],
      legalEffect:
        "Документ поза матеріалами справи (akta sprawy) не є безоплатним лише тому, що його видає той самий суд.",
      foreignersCase:
        "Якщо у справі іноземця потрібна довідка з окремого судового реєстру, заздалегідь перевірте канцелярський збір.",
    },
  ],
})
