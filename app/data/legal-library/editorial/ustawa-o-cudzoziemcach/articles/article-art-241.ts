import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-241",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Kartę pobytu wymienia się у разі зміни даних у чинній картці, зміни wizerunku twarzy настільки, що ідентифікація власника ускладнена або неможлива, utraty чи uszkodzenia, а також у випадках переходу відповідальності за ochronę międzynarodową: для картки, виданої у зв’язку з zezwoleniem na pobyt rezydenta długoterminowego UE, та для картки за zezwolenie з ${foreignersLaw.article("127", "Art. 127")} або ${foreignersLaw.article("137a", "Art. 137a")} з відповідними adnotacje.`,
          sourceLocator: "Art. 241 pkt 1–7",
        },
      ],
      summary:
        "Стаття називає звичайні підстави wymiany karty pobytu та спеціальні випадки зміни відповідальності за ochronę międzynarodową.",
      rules: [
        {
          locator: "pkt 1–4",
          explanation:
            "Зміна даних, проблеми з ідентифікацією за фото, utrata або uszkodzenie є самостійними підставами для wymiany.",
        },
        {
          locator: "pkt 5–7",
          explanation: foreignersLaw.text`Pkt 5 стосується переходу відповідальності до RP за ochronę międzynarodową власника картки DLR UE з adnotacją за ${foreignersLaw.article("244", "Art. 244")} ust. 1 pkt 18; pkt 6 — переходу відповідальності до іншої держави-члена ЄС; pkt 7 — переходу відповідальності до RP для картки за ${foreignersLaw.article("127", "Art. 127")} або ${foreignersLaw.article("137a", "Art. 137a")} з adnotacją за ${foreignersLaw.article("244", "Art. 244")} ust. 1 pkt 10 lit. a.`,
        },
      ],
      legalEffect: foreignersLaw.text`Наявність однієї з обставин ${foreignersLaw.article("241", "Art. 241")} створює підставу для wymiany документа, але не змінює сама по собі рішення про zezwolenie; орган і процедуру визначають, зокрема, ${foreignersLaw.article("245", "Art. 245")} та наступні норми.`,
      foreignersCase:
        "Порівняйте актуальні дані та wizerunek twarzy з kartą pobytu. Для pkt 5–7 встановіть, яка держава перебрала відповідальність за ochronę międzynarodową і яку adnotację містить картка; ці пункти не описують зміну самої підстави Niebieska Karta UE. При utrata одразу зробіть zgłoszenie.",
    },
  ],
})
