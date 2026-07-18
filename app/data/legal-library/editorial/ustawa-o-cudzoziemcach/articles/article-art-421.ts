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
      provisionId: "ustawa-o-cudzoziemcach-art-421",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("421", "Art. 421")} ust. 1: «Cudzoziemiec umieszczony w strzeżonym ośrodku podlega odpowiedzialności dyscyplinarnej za naruszenie nakazów lub zakazów wynikających z ${foreignersLaw.article("419", "art. 419")}, ${foreignersLaw.article("420", "art. 420")} i przepisów wydanych na podstawie ${foreignersLaw.article("427", "art. 427")} ust. 1».`,
          sourceLocator: "Art. 421 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Рішення про karę має спиратися на конкретне порушення та враховувати перелічені індивідуальні обставини, а не лише факт скарги адміністрації.",
          sourceLocator: "Art. 421 ust. 2–4",
        },
      ],
      summary:
        "У strzeżony ośrodek за порушення обов’язків і заборон може наставати odpowiedzialność dyscyplinarna; kara до 7 днів обмежує окремі заняття або покупки і накладається рішенням визначеного komendanta.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation: foreignersLaw.text`Підставою є порушення ${foreignersLaw.article("419", "Art. 419")}, ${foreignersLaw.article("420", "Art. 420")} або правил, виданих на підставі ${foreignersLaw.article("427", "Art. 427")} ust. 1; kara полягає у позбавленні окремих прав на строк до 7 днів.`,
        },
        {
          locator: "ust. 3",
          explanation:
            "Komendant oddziału або placówki Straży Granicznej, компетентний за місцем ośrodek, накладає karę у drodze decyzji на письмовий wniosek.",
        },
        {
          locator: "ust. 4",
          explanation:
            "При karze враховуються тяжкість і обставини діяння, попередня поведінка, стан здоров’я, культурні та релігійні переконання й виховна мета.",
        },
      ],
      legalEffect:
        "Стаття створює дисциплінарний режим саме для strzeżony ośrodek і визначає межу та орган накладення kary. Вона не прирівнює таку karę до кримінального покарання.",
      foreignersCase:
        "У рішенні шукайте конкретний опис порушення, правову підставу, строк kary та враховані обставини; зберігайте письмовий wniosek і decyzja.",
    },
  ],
})
