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
      provisionId: "ustawa-o-cudzoziemcach-art-106l",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("106l", "Art. 106l")} дозволяє członkowi rodziny rozdzielonej подати паперовий wniosek для іноземця, який перебуває поза Польщею, лише щодо дозволів з ${foreignersLaw.article("159", "Art. 159")} ust. 1 або ${foreignersLaw.article("160", "Art. 160")} pkt 1, 3, 4 чи 6.`,
          sourceLocator: "Art. 106l ust. 1–7",
        },
      ],
      summary:
        "Це спеціальний сімейний маршрут: особа в Польщі веде паперову справу для члена сім’ї за кордоном, але повинна показати як сімейний зв’язок, так і умови конкретної підстави pobytu.",
      rules: [
        {
          locator: "Art. 106l ust. 1–2",
          explanation:
            "Форма збирає дані обох осіб і сім’ї, місце перебування, фінансові засоби, ubezpieczenie zdrowotne, підставу pobytu особи в Польщі, зобов’язання та обґрунтування. Oświadczenie про правдивість даних подається з установленою klauzulą кримінальної відповідальності.",
        },
        {
          locator: "Art. 106l ust. 3–4",
          explanation:
            "Потрібні копія чинного документа подорожі іноземця, актуальна фотографія, його згода на подання, якщо заявник не є przedstawicielem ustawowym, та докази заявлених обставин.",
        },
        {
          locator: "Art. 106l ust. 5–7",
          explanation:
            "На відсутні документи organ дає щонайменше 14 днів і враховує час їх одержання; при поєднаних wezwaniach діє найдовший строк. Від іноземця за межами Польщі в цій процедурі не беруть odcisków linii papilarnych ani wzoru podpisu.",
        },
      ],
      legalEffect:
        "Стаття дозволяє розпочати названу сімейну справу без перебування іноземця в Польщі та без його біометричного етапу, але не розширює перелік матеріальних підстав дозволу.",
      foreignersCase: foreignersLaw.text`Перевірте, чи підстава точно входить до ${foreignersLaw.article("159", "Art. 159")} ust. 1 або названих пунктів ${foreignersLaw.article("160", "Art. 160")}, де фізично перебуває іноземець і хто є przedstawicielem ustawowym. Потім зв’яжіть кожну умову дозволу з окремим доказом.`,
    },
  ],
})
