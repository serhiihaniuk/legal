import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-243",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Karta pobytu, видана у зв’язку з zezwoleniem na pobyt czasowy, чинна протягом строку цього дозволу; картка при pobycie stałym чинна 10 років, при pobycie rezydenta długoterminowego UE — 5 років, а при zgodzie humanitarnej — 2 роки.",
          sourceLocator: "Art. 243 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Наступна karta pobytu після спливу строку картки для pobytu stałego, rezydenta długoterminowego UE або zgody humanitarnej має відповідно строк 10, 5 або 2 роки від дня видачі.",
          sourceLocator: "Art. 243 ust. 2",
        },
      ],
      summary:
        "Стаття встановлює строк чинності karty pobytu залежно від виду підстави перебування.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Для pobytu czasowego строк картки слідує за дозволом, а для трьох інших підстав закон називає фіксовані строки.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Наступна картка для pobytu stałego, rezydenta długoterminowego UE або zgody humanitarnej знову має відповідний фіксований строк.",
        },
      ],
      legalEffect:
        "Строк на картці не можна визначати лише за датою рішення: він залежить від виду права та, для pobytu czasowego, від строку дозволу.",
      foreignersCase:
        "Звірте дату кінця дозволу з датою кінця картки. Якщо картка для stałego pobytu або rezydenta UE закінчується, готуйте wniosek про наступну картку, не плутаючи це з новою заявою на дозвіл.",
    },
  ],
})
