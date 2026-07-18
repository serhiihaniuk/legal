import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-20",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 20 § 1 передбачає: «Wniosek o wyłączenie sędziego strona zgłasza na piśmie lub ustnie do protokołu posiedzenia w sądzie, w którym sprawa się toczy, uprawdopodabniając przyczyny wyłączenia».",
          sourceLocator: "Art. 20 § 1",
        },
      ],
      summary:
        "Wniosek про wyłączenie судді подається письмово або усно до протоколу posiedzenia в суді, де слухається справа, і має містити uprawdopodobnienie причин.",
      rules: [
        {
          locator: "Art. 20 § 1",
          explanation:
            "Форма — pismo або усна заява до protokołu; сторона має uprawdopodobnić причини wyłączenia.",
        },
        {
          locator: "Art. 20 § 2",
          explanation:
            "Якщо сторона вже приступила до rozprawa, вона додатково має показати, що причина виникла або стала відома лише пізніше.",
        },
        {
          locator: "Art. 20 § 3–4",
          explanation:
            "До вирішення питання суддя може виконувати лише czynności niecierpiące zwłoki; wniosek про wyłączenie суду є niedopuszczalny і підлягає odrzuceniu на posiedzeniu niejawnym.",
        },
      ],
      legalEffect:
        "Стаття визначає спосіб подання та обґрунтування wniosku, але не гарантує wyłączenie після самого факту подання.",
      foreignersCase:
        "У справі іноземця вкажіть конкретну причину, спосіб її підтвердження та момент, коли вона стала відома; не називайте wniosek про суд загалом wnioskiem про суддю.",
    },
  ]),
})
