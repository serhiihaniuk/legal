import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "94",
      provisionId: "kpa-art-94",
      reviewStatus: "reviewed",
      summary:
        "Належно викликана сторона не блокує rozprawę своєю відсутністю, але серйозні дефекти виклику або важлива перешкода вимагають відкладення.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Відсутність правильно викликаної сторони не перешкоджає проведенню засідання.",
        },
        {
          locator: "§ 2",
          explanation:
            "Керівник відкладає rozprawę через серйозні порушення виклику, важкопереборну перешкоду для сторони або іншу важливу причину.",
        },
      ],
      legalEffect:
        "Орган або продовжує засідання без сторони, або обов’язково відкладає його за визначених обставин.",
      foreignersCase:
        "Якщо іноземець не міг прибути через важкопереборну перешкоду чи дефект wezwania, причину треба негайно документувати для відкладення rozprawy.",
    },
  ],
})
