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
      provisionId: "ustawa-o-cudzoziemcach-art-126",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("126", "Art. 126")} регулює zezwolenie na pobyt czasowy i pracę для cudzoziemca, який виконує функцію в zarząd osoby prawnej podlegającej wpisowi do rejestru przedsiębiorców і не має її udziałów або akcji, а також відповідно для prokurent.`,
          sourceLocator: "Art. 126 ust. 1–3",
        },
      ],
      summary:
        "Для роботи в zarząd або як prokurent стаття вимагає умову щодо cudzoziemca та вимоги до керованого podmiot, а інші названі правила застосовує відповідно.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Cudzoziemiec має виконувати умову ${foreignersLaw.article("114", "art. 114")} ust. 1 pkt 1, а osoba prawna, якою він керує або керуватиме, — вимоги ${foreignersLaw.article("142", "art. 142")} ust. 1 pkt 3.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`До цього zezwolenia відповідно застосовуються ${foreignersLaw.article("115", "art. 115")}, ${foreignersLaw.article("117", "art. 117")}, ${foreignersLaw.article("118", "art. 118")} ust. 1 pkt 1 і 2 та ust. 3 і 4.`,
        },
        {
          locator: "ust. 3",
          explanation:
            "Ті самі правила поширюються відповідно, якщо робота полягає у діяльності як prokurent.",
        },
      ],
      legalEffect:
        "Стаття визначає спеціальний опис роботи, але відсилає до інших положень; сама вона не замінює перевірку цих умов.",
      foreignersCase:
        "Встановіть, чи йдеться про zarząd або prokurent, чи osoba prawna підлягає wpis do rejestru przedsiębiorców і чи cudzoziemiec не має її udziałów або akcji; зберіть також підтвердження умов, на які відсилає стаття.",
    },
  ],
})
