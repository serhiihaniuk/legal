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
      provisionId: "ustawa-o-cudzoziemcach-art-139t",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139t", "Art. 139t")} ust. 1 вимагає, щоб jednostka przyjmująca подала заяву про zezwolenie з ${foreignersLaw.article("139o", "art. 139o")} ust. 1 для cudzoziemiec, який перебуває в Польщі, не пізніше останнього дня його legalnego pobytu; ust. 2–3 відповідно відсилають до ${foreignersLaw.article("108", "art. 108")}.`,
          sourceLocator: "Art. 139t ust. 1–3",
        },
        {
          kind: "practical-inference",
          text: "У справі треба встановити не лише дату заяви, а й останній день legalnego pobytu або дату законного в’їзду після заяви.",
          sourceLocator: "Art. 139t ust. 1–3",
        },
      ],
      summary: foreignersLaw.text`Для заяви за ${foreignersLaw.article("139o", "art. 139o")} ust. 1 закон встановлює різні правила для cudzoziemiec, який уже перебуває в Польщі, і для особи за межами Польщі.`,
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Jednostka przyjmująca подає заяву не пізніше останнього дня legalnego pobytu cudzoziemca на території Польщі.",
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`У ситуації ust. 1 положення ${foreignersLaw.article("108", "art. 108")} застосовуються відповідно; це не скасовує перевірку умов ICT-дозволу.`,
        },
        {
          locator: "ust. 3",
          explanation: foreignersLaw.text`Якщо cudzoziemiec перебуває за межами Польщі, ${foreignersLaw.article("108", "art. 108")} ust. 1 pkt 2 і ust. 2 застосовуються відповідно після його законного в’їзду.`,
        },
      ],
      legalEffect: foreignersLaw.text`Норма визначає строк і процесуальну модель подання заяви для zezwolenie з ${foreignersLaw.article("139o", "art. 139o")} ust. 1; сама заява не підтверджує виконання матеріальних умов дозволу.`,
      foreignersCase:
        "Складіть хронологію legalnego pobytu, подання заяви та в’їзду. Додайте документи про статус перебування, дату подання jednostka przyjmująca і законність в’їзду.",
    },
  ],
})
