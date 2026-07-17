import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-403",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Початковий період pobyt у strzeżony ośrodek або areszt визначається судом не довше ніж на 3 місяці; за незавершеного провадження чи триваючих дій для powrót або передачі його можна продовжити на визначений строк за наявності обставини art. 398a.",
          sourceLocator: "Art. 403 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "Загальний період не може перевищити 6 місяців, але після цього може бути продовжений максимум ще на 12 місяців за обґрунтованого припущення затримки виконання, якщо іноземець не співпрацює або треті держави затримують документи; ust. 5 має позначку (uchylony). Перебування має бути якнайкоротшим.",
          sourceLocator: "Art. 403 ust. 3–6",
        },
        {
          kind: "statute-text",
          text: "Про продовження вирішує sąd rejonowy за місцем ośrodek або areszt на wniosek Straż Graniczna; на postanowienie є zażalenie до sąd okręgowy протягом 7 днів.",
          sourceLocator: "Art. 403 ust. 7–8",
        },
      ],
      summary:
        "Стаття встановлює строки початкового і продовженого pobyt у strzeżony ośrodek або areszt, судовий контроль, виключення періоду захисту та вимогу найкоротшого строку.",
      rules: [
        {
          locator: "ust. 1–2a",
          explanation:
            "Початково суд визначає не більше 3 місяців; продовження потребує незавершеного провадження або дій для виконання чи передачі, а в окремому випадку — остаточного рішення у справі ochronę międzynarodową.",
        },
        {
          locator: "ust. 3–3b",
          explanation:
            "Зазвичай межа — 6 місяців; після неї додатково можливі до 12 місяців лише за умов ust. 3a. Кожне наступне postanowienie за ust. 3a — не довше 3 місяців.",
        },
        {
          locator: "ust. 4–6",
          explanation:
            "Період, пов’язаний із поданою заявою про ochronę międzynarodową, не включається до названих строків; ust. 5 (uchylony) — скасований і не містить чинного правила. Побут має бути якнайкоротшим.",
        },
        {
          locator: "ust. 7–8",
          explanation:
            "Продовження розглядає суд за місцем ośrodek або areszt; zażalenie до sąd okręgowy подається протягом 7 днів від doręczenie.",
        },
      ],
      legalEffect:
        "Норма не дозволяє продовжувати ізоляцію лише через сплив первинних 3 місяців: кожне продовження потребує законної підстави та судового рішення. Скасований ust. 5 не можна використовувати як чинну підставу.",
      foreignersCase:
        "Зробіть календар усіх postanowienie, doręczenie, періодів pobyt і дій для powrót або передачі. Окремо перевірте art. 398a, співпрацю, документи третіх держав і 7-денний строк zażalenie.",
    },
  ]),
})
