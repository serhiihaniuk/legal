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
      provisionId: "ustawa-o-cudzoziemcach-art-211",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("211", "Art. 211")} передбачає udzielenie zezwolenia na pobyt rezydenta długoterminowego UE на czas nieoznaczony особі, яка легально й безперервно перебувала в Польщі щонайменше 5 років і має стабільний та регулярний dochód, ubezpieczenie zdrowotne та підтверджене знання польської мови.`,
          sourceLocator: "Art. 211 ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Доходи оцінюють за ${foreignersLaw.article("140", "art. 140")} ust. 2 за 2 роки у випадку ${foreignersLaw.article("212", "art. 212")} ust. 1 pkt 1 і за 3 роки в інших випадках; знання мови підтверджується, зокрема, рівнем B1 або документом про навчання польською, а вимога мови не застосовується до особи, молодшої 16 років.`,
          sourceLocator: "Art. 211 ust. 2–5",
        },
      ],
      summary:
        "Стаття визначає сукупні умови статусу rezydent długoterminowy UE: 5 років, кошти, страхування та польська мова.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "П’ятирічний pobyt має бути legalny і nieprzerwany безпосередньо перед wniosek; усі три матеріальні умови мають виконуватися разом.",
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Розрахунок dochód залежить від того, чи використовується спеціальне зарахування з ${foreignersLaw.article("212", "art. 212")} ust. 1 pkt 1; не застосовуйте один період до всіх справ.`,
        },
        {
          locator: "ust. 3–5",
          explanation:
            "Прийнятний документ мови та перелік poświadczeń треба перевіряти за нормою і чинним rozporządzenie; для неповнолітнього до 16 років діє виняток.",
        },
      ],
      legalEffect:
        "Статус не випливає лише з п’ятирічного проживання: орган перевіряє дохід, страхування, мову, безперервність і правила зарахування періодів.",
      foreignersCase: foreignersLaw.text`Побудуйте розрахунок 5 років за ${foreignersLaw.article("212", "Art. 212")}, окремо підтвердьте dochód, ubezpieczenie та мову прийнятним документом і звірте періоди безпосередньо перед wniosek.`,
    },
  ],
})
