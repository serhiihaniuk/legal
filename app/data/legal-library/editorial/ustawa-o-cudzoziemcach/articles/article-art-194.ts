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
      provisionId: "ustawa-o-cudzoziemcach-art-194",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("194", "Art. 194")} уповноважує ministra właściwego do spraw wewnętrznych визначити в rozporządzeniu мінімальні кошти для витрат на повернення або транзит іноземця з ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 6–7 чи ${foreignersLaw.article("187", "art. 187")} pkt 1 lit. a та членів його сім’ї, які перебувають на його утриманні, а також документи для підтвердження можливості отримати ці кошти й кошти на utrzymanie.`,
          sourceLocator: "Art. 194 pkt 1–2",
        },
      ],
      summary:
        "Стаття делегує розпорядженню визначення мінімальних коштів і підтвердних документів для окремих підстав pobytu.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Розмір коштів може відрізнятися залежно від держави, з якої прибув cudzoziemiec; конкретної суми в самій статті немає.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Документи мають підтверджувати можливість законно отримати кошти на повернення та utrzymanie за умовами названих положень.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("194", "Art. 194")} є підставою для підзаконного регулювання, але не встановлює самостійно потрібну суму або закритий перелік документів.`,
      foreignersCase: foreignersLaw.text`Визначте, чи підстава справи належить до ${foreignersLaw.article("186", "art. 186")} або ${foreignersLaw.article("187", "art. 187")}, потім перевірте чинне rozporządzenie та подайте докази саме тих коштів і документів, які воно передбачає.`,
    },
  ],
})
