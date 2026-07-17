import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-510",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("510", "Art. 510")} передбачає, що zaproszenia, внесені до ewidencja zaproszeń за dotychczasowe przepisy, zezwolenia на przekraczanie granicy в малому ruchu granicznym, а також wizy і документи, видані cudzoziemcom на підставі rozdziału 6 ustawy, про яку йдеться в ${foreignersLaw.article("521", "Art. 521")}, зберігають чинність на строк, на який їх видано.`,
          sourceLocator: "Art. 510",
        },
      ],
      summary:
        "Перехідна норма зберігає чинність окремих старих zaproszenia, дозволів малого ruchu granicznego, wizy та документів до закінчення їхнього виданого строку.",
      rules: [
        {
          locator: "Art. 510",
          explanation:
            "Збереження чинності охоплює лише документи та zaproszenia, прямо названі в статті, і триває протягом періоду, на який їх видано.",
        },
        {
          locator: "Art. 510",
          explanation:
            "Стаття не змінює сам документ на інший тип і не продовжує його строк понад зазначений при видачі.",
        },
      ],
      legalEffect:
        "Норма захищає чинність конкретних документів у перехідний момент, але не доводить, що документ чинний сьогодні: це потрібно перевірити за датами та іншими правилами.",
      foreignersCase: foreignersLaw.text`Звірте вид документа, стару правову підставу, дату видачі та кінцеву дату; не замінюйте перевірку чинності самим посиланням на ${foreignersLaw.article("510", "Art. 510")}.`,
    },
  ],
})
