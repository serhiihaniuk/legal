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
      provisionId: "ustawa-o-cudzoziemcach-art-192",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("192", "Art. 192")} встановлює спеціальні правила cofnięcie zezwolenie для окремих підстав ${foreignersLaw.article("186", "art. 186")} та ${foreignersLaw.article("187", "art. 187")}, включно з винятком щодо відмови від обов'язкового лікування та різними відсиланнями до ${foreignersLaw.article("100", "art. 100")} і ${foreignersLaw.article("101", "art. 101")}.`,
          sourceLocator: "Art. 192 ust. 1–4",
        },
      ],
      summary:
        "Наслідок залежить від того, за яким pkt було надано zezwolenie: закон окремо регулює незгоду з лікуванням, робочі та сімейні підстави, підстави випускника або колишнього науковця і випадок громадянина Zjednoczonego Królestwa.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`zezwolenie за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 3 або 4 не відкликається лише тому, що cudzoziemiec, зобов'язаний проходити лікування за спеціальним законом про інфекційні хвороби, не дав згоди на це лікування.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`zezwolenie за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 5 або ${foreignersLaw.article("187", "art. 187")} pkt 6–7 відкликають за ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 4 або 5 чи ${foreignersLaw.article("101", "art. 101")} pkt 1.`,
        },
        {
          locator: "ust. 3",
          explanation: foreignersLaw.text`zezwolenie за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 6 або 7 відкликають за ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4 або 8 чи ${foreignersLaw.article("101", "art. 101")} pkt 1 або 2.`,
        },
        {
          locator: "ust. 4",
          explanation: foreignersLaw.text`zezwolenie за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 8 відкликають за ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5 або 8 чи ${foreignersLaw.article("101", "art. 101")} pkt 2.`,
        },
      ],
      legalEffect:
        "Cofnięcie можливе або є обов'язковим лише в межах переліку, що відповідає початковій підставі zezwolenie; виняток ust. 1 стосується конкретної медичної ситуації, а не всіх zezwolenie.",
      foreignersCase: foreignersLaw.text`Знайдіть у decyzja початковий pkt ${foreignersLaw.article("186", "art. 186")} або ${foreignersLaw.article("187", "art. 187")}, зіставте його з ust. 1–4 та перевірте кожен наведений пункт ${foreignersLaw.article("100", "art. 100")}/${foreignersLaw.article("101", "art. 101")}; окремо документуйте медичну обставину, якщо на неї посилаєтесь.`,
    },
  ],
})
