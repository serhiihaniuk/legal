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
      provisionId: "ustawa-o-cudzoziemcach-art-420",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("420", "Art. 420")} ust. 1: «Cudzoziemcowi umieszczonemu w strzeżonym ośrodku lub przebywającemu w areszcie dla cudzoziemców zabrania się zakłócania spokoju i porządku».`,
          sourceLocator: "Art. 420 ust. 1 pkt 1",
        },
        {
          kind: "practical-inference",
          text: "Окремі заборони застосовуються до обох місць, а додаткові заборони ust. 2 — лише до strzeżony ośrodek.",
          sourceLocator: "Art. 420 ust. 1–2",
        },
      ],
      summary:
        "Стаття встановлює заборони для strzeżony ośrodek і areszt: порушення порядку, тримання поза depozyt пристроїв для запису зображення та небезпечних предметів, алкоголь і наркотичні речовини, куріння поза визначеними місцями, самоушкодження та азартні ігри; для ośrodek є додаткові обмеження руху й зміни кімнати.",
      rules: [
        {
          locator: "ust. 1 pkt 1–7",
          explanation:
            "Заборонені порушення spokój i porządek, посідання поза depozyt urządzenia techniczne do rejestrowania obrazu, небезпечні або надмірні предмети, alkohol, środki odurzające і substancje psychotropowe, куріння поза визначеними місцями, самоушкодження та gry hazardowe.",
        },
        {
          locator: "ust. 2 pkt 1–2",
          explanation:
            "У strzeżony ośrodek не можна самовільно залишати територію, заходити в заборонені місця чи самовільно міняти кімнату або місце для сну.",
        },
      ],
      legalEffect:
        "Норма визначає заборонену поведінку та розрізняє режим ośrodek і areszt. Вона не встановлює автоматичний вид санкції за кожне порушення.",
      foreignersCase: foreignersLaw.text`Порівняйте опис події з конкретним pkt ${foreignersLaw.article("420", "Art. 420")} і regulamin; окремо з’ясуйте, чи йдеться про ośrodek, бо ust. 2 має вужчий адресат.`,
    },
  ],
})
