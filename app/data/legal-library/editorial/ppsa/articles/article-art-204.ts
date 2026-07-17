import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-204",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Jeżeli skarga kasacyjna zostaje oddalona, strona, która ją wniosła, zwraca niezbędne koszty postępowania kasacyjnego poniesione przez organ, gdy zaskarżono wyrok pierwszej instancji oddalający skargę, albo przez skarżącego, gdy zaskarżono wyrok uwzględniający skargę.",
          sourceLocator: "Art. 204 pkt 1–2",
        },
      ],
      summary:
        "Przy oddaleniu kasacji jej wnoszący może zostać obciążony niezbędnymi kosztami drugiej strony, zależnie od rodzaju zaskarżonego wyroku WSA.",
      rules: [
        {
          locator: "Art. 204 pkt 1–2",
          explanation:
            "Kasacja od wyroku oddalającego skargę oznacza zwrot kosztów organu, a kasacja od wyroku uwzględniającego skargę — zwrot kosztów skarżącego.",
        },
      ],
      legalEffect:
        "Oddalenie kasacji może powodować obowiązek zwrotu kosztów, ale wysokość obejmuje tylko koszty niezbędne ustalone według dalszych przepisów.",
      foreignersCase:
        "Przed kasacją w sprawie odmowy pobytu uwzględnij ryzyko kosztowe i ustal, czy zaskarżany wyrok WSA oddalił, czy uwzględnił skargę.",
    },
  ],
})
