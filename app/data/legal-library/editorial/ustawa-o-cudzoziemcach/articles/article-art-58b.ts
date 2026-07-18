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
      provisionId: "ustawa-o-cudzoziemcach-art-58b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("58b", "Art. 58b")} дозволяє ministra właściwego do spraw zagranicznych, за погодженням із міністрами праці та внутрішніх справ, запровадити obowiązek wizowy для визначених громадян третіх держав, які виконують działalność zarobkową і належать до ${foreignersLaw.external("art. 6 ust. 3 rozporządzenia 2018/1806", "https://eur-lex.europa.eu/eli/reg/2018/1806/oj")}.`,
          sourceLocator: "Art. 58b ust. 1–2",
        },
      ],
      summary:
        "Це делегація для спеціального візового обов’язку, пов’язаного з zarobkowa діяльністю, а не самостійна заборона працювати без візи.",
      rules: [
        {
          locator: "Art. 58b ust. 1",
          explanation:
            "Rozporządzenie має назвати держави та дату початку obowiązku wizowego; воно може також обмежити обов’язок конкретними видами діяльності й установити додаткові умови.",
        },
        {
          locator: "Art. 58b ust. 2",
          explanation:
            "Підставами нормотворчої оцінки є, зокрема, ринок праці, ризик міграції, безпека, porządek publiczny та міжнародні зобов’язання Польщі.",
        },
      ],
      legalEffect: foreignersLaw.text`Obowiązek wizowy виникає з чинного rozporządzenia, а не безпосередньо з ${foreignersLaw.article("58b", "Art. 58b")}. Окремо все одно перевіряється правова підстава wykonywania pracy.`,
      foreignersCase:
        "Зіставте громадянство, фактичний вид zarobkowa діяльності та дату в’їзду з чинним rozporządzeniem; потім окремо перевірте zezwolenie na pracę або zwolnienie.",
    },
  ],
})
