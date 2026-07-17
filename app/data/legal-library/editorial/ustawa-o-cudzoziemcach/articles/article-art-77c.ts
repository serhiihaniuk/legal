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
      provisionId: "ustawa-o-cudzoziemcach-art-77c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("77c", "Art. 77c")} ust. 1 дозволяє на вимогу konsul встановити строк подання заяви на wiza krajowa дистанційно із засобами, що забезпечують зв’язок і ідентифікацію; для цього можуть оброблятися визначені ${foreignersLaw.article("13", "Art. 13")} дані до призначеного дня. Ust. 2 поширює правило на представників із ${foreignersLaw.article("77", "Art. 77")} ust. 1a, ust. 3 — на wiza Schengen.`,
          sourceLocator: "Art. 77c ust. 1–3",
        },
        {
          kind: "practical-inference",
          text: "Дистанційне встановлення terminu організує запис на подання й обмежене зберігання даних для ідентифікації; воно не є прийняттям заяви або рішенням про візу.",
          sourceLocator: "Art. 77c ust. 1–3",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("77c", "Art. 77c")} регулює дистанційне призначення дати подання візової заяви на вимогу konsul. Засоби зв’язку мають дозволити ідентифікацію, а для неповнолітніх, опікунів і kurator застосовуються спеціальні правила представництва.`,
      rules: [
        {
          locator: "Art. 77c ust. 1",
          explanation: foreignersLaw.text`Termin ustalaється електронно лише на żądanie konsul; допускається обробка даних ${foreignersLaw.article("13", "Art. 13")} pkt 1–8, 11, 12, 19–21 і 24 до призначеної дати для встановлення особи.`,
        },
        {
          locator: "Art. 77c ust. 2",
          explanation:
            "Для małoletni дата узгоджується з батьками або opiekun, для повністю ubezwłasnowolniony — з opiekun, для małoletni bez opieki — з kurator або іншим представником; відповідні дані можуть оброблятися також про них.",
        },
        {
          locator: "Art. 77c ust. 3",
          explanation:
            "Ті самі правила відповідно застосовуються до заяви на wiza Schengen.",
        },
      ],
      legalEffect: foreignersLaw.text`Призначення terminu упорядковує доступ до подання і тимчасову ідентифікацію, але не замінює osobiste złożenie, документи ${foreignersLaw.article("77", "Art. 77")} чи розгляд підстав wiza.`,
      foreignersCase:
        "Збережіть офіційне повідомлення про termin, канал ідентифікації та особу представника; відокремте дату запису від дати фактичного złożenie wniosku.",
    },
  ],
})
