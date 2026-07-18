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
      provisionId: "ustawa-o-cudzoziemcach-art-139o",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139o", "Art. 139o")} визначає умови zezwolenia na pobyt для mobilność długoterminowa працівника kadry kierowniczej, specjalista або stażysta з документом «ICT» іншої держави ЄС; ust. 1 pkt 1 lit. a, aa–d і pkt 2 та ust. 2 встановлюють сукупні умови.`,
          sourceLocator: "Art. 139o ust. 1 pkt 1 lit. a, aa–d, pkt 2, ust. 2",
        },
      ],
      summary:
        "Дозвіл довгострокової ICT-мобільності вимагає відповідної ролі, документа іншої держави, страхування, житла, можливості повернення та визначених умов договору.",
      rules: [
        {
          locator: "ust. 1 pkt 1 lit. a, aa–d",
          explanation:
            "Потрібні formalne kwalifikacje та інші умови для zawód regulowany (lit. a), документ іншої держави ЄС з adnotacją «ICT» (lit. aa), ubezpieczenie (lit. b), місце проживання в Польщі (lit. c) та можливість повернення до pracodawca macierzysty або grupy поза ЄС (lit. d).",
        },
        {
          locator: "ust. 1 pkt 2",
          explanation:
            "Письмовий договір або документ przeniesienia має вказувати строк, siedziba jednostka, stanowisko, wynagrodzenie та інші умови роботи.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Wynagrodzenie має бути вище порогу допомоги, не нижче порівнянної роботи в Польщі та не нижче 70% середньої brutto-винагороди у відповідному województwo.",
        },
      ],
      legalEffect:
        "Стаття створює спеціальну підставу pobyt для довгострокової мобільності, але вимагає сукупного підтвердження всіх названих умов.",
      foreignersCase:
        "Зіставте ICT-документ, роль, договір, страхування, житло, можливість повернення та три критерії wynagrodzenie до подання заяви.",
    },
  ],
})
