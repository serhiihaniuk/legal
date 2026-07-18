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
      provisionId: "ustawa-o-cudzoziemcach-art-168",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("168", "Art. 168")} дозволяє іноземцеві, який проживає в Польщі, подати wniosek про połączenie z rodziną для члена сім’ї за кордоном. Потрібна згода цієї особи або її przedstawiciela ustawowego на встановленій формі, визначеній за ${foreignersLaw.article("107", "Art. 107")} ust. 1, якщо заявник сам не є її законним представником.`,
          sourceLocator: "Art. 168 ust. 1–5",
        },
      ],
      summary:
        "Це представницький маршрут сімейної справи. Згода не лише дозволяє подати wniosek, а й створює pełnomocnictwo для цього конкретного провадження.",
      rules: [
        {
          locator: "Art. 168 ust. 1–3",
          explanation:
            "Заявником є іноземець у Польщі, до якого приїжджає член сім’ї. Згода має бути письмовою на встановленій формі; вона не потрібна лише коли заявник уже є przedstawicielem ustawowym.",
        },
        {
          locator: "Art. 168 ust. 4–5",
          explanation:
            "Коли сімейний wniosek подано того самого дня або до 3 днів після названої заяви osoby referencyjnej, закон може пов’язати właściwość і момент рішення зі справою osoby referencyjnej — за siedzibą jednostki przyjmującej або з wojewodą, компетентним у його справі.",
        },
      ],
      legalEffect:
        "Стаття визначає заявника, форму згоди, представництво та координацію двох справ, але не доводить матеріальних умов połączenia z rodziną.",
      foreignersCase:
        "Перевірте місце перебування обох осіб, встановлену форму zgody, роль przedstawiciela ustawowego й різницю в датах двох заяв. Саме ці факти визначають процесуальний маршрут.",
    },
  ],
})
