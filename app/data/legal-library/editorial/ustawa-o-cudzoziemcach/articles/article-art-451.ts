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
      provisionId: "ustawa-o-cudzoziemcach-art-451",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("451", "Art. 451")} ust. 1: «Dane zgromadzone w krajowym zbiorze ... mogą być udostępniane podmiotom zagranicznym w celu wypełnienia postanowień ratyfikowanych ... umów międzynarodowych».`,
          sourceLocator: "Art. 451 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Передача даних іноземному суб’єкту потребує конкретної міжнародно-правової підстави та не є загальним відкритим доступом.",
          sourceLocator: "Art. 451 ust. 1–2",
        },
      ],
      summary:
        "Дані з визначених реєстрів Krajowy zbiór можуть надаватися іноземним суб’єктам для виконання ратифікованих міжнародних договорів або актів міжнародної організації, членом якої є Польща.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Можливість стосується даних із категорій ${foreignersLaw.article("449", "Art. 449")} ust. 2 pkt 1–6, 8–12 і 16 та має служити виконанню міжнародних зобов’язань або актів міжнародної організації. Pkt 7 до цього переліку не входить.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Порядок і спосіб udostępniania визначають відповідні ратифіковані договори, акти міжнародної організації або угоди між компетентними міністрами держав ЄС.",
        },
      ],
      legalEffect:
        "Стаття дозволяє міжнародне udostępniania лише в нормативно визначених рамках. Вона сама не є дозволом передавати будь-які дані будь-якому іноземному органу.",
      foreignersCase: foreignersLaw.text`Якщо дані передано або планується передати за кордон, попросіть назвати конкретний договір, акт чи угоду та категорію rejestr із ${foreignersLaw.article("449", "Art. 449")} ust. 2.`,
    },
  ],
})
