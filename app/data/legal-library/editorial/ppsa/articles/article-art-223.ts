import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-223",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("223", "Art. 223 § 1–2")} stosuje odpowiednio przepisy ${ppsaLaw.article("220", "art. 220")} i ${ppsaLaw.article("222", "art. 222")}, gdy obowiązek uiszczenia lub uzupełnienia opłaty powstanie wskutek ustalenia wyższej wartości przedmiotu zaskarżenia, cofnięcia przyznanego prawa pomocy albo uchylenia kurateli przed wyznaczeniem terminu rozprawy; nieuiszczoną opłatę sąd nakazuje w orzeczeniu kończącym postępowanie w danej instancji ściągnąć od strony zobowiązanej do jej uiszczenia albo od innej strony, jeżeli z tego orzeczenia wynika obowiązek poniesienia przez nią kosztów postępowania.`,
          sourceLocator: "Art. 223 § 1–2",
        },
      ],
      summary:
        "Стаття застосовує правила про wezwanie та очевидне odrzucenie, коли обов’язок сплатити або доплатити opłatę виник пізніше з названих у законі причин.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Зіставте виникнення обов’язку з вищою wartość przedmiotu zaskarżenia, cofnięcie prawa pomocy або uchylenie kurateli до визначення дати rozprawa.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо належну opłatę не сплачено, спосіб її стягнення має бути зазначений у кінцевому orzeczenie відповідної instancji.",
        },
      ],
      legalEffect: ppsaLaw.text`Стаття визначає спеціальне застосування ${ppsaLaw.article("220", "Art. 220")} і ${ppsaLaw.article("222", "Art. 222")} та подальше стягнення належної opłata; вона не скасовує перевірку, хто саме зобов’язаний її сплатити.`,
      foreignersCase:
        "Якщо в справі іноземця змінилася wartość przedmiotu zaskarżenia або cofnięto право допомоги, перевірте нову вимогу про opłatę і строк її виконання за документами суду.",
    },
  ],
})
