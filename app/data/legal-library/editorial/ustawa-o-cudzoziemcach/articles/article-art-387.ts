import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-387",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Рішення про повернення іншої держави-члена щодо іноземця або його сім’ї, які мають право на роботу за рішенням nr 1/80 Rady Stowarzyszenia Republiki Tureckiej i EWG, можна виконати лише за наявності всіх підстав для wydalenie з території Польщі, визначених rozdział 5 ustawa 14 липня 2006 року про в’їзд, pobyt і виїзд громадян ЄС та членів їхніх сімей.",
          sourceLocator: "Art. 387",
        },
        {
          kind: "practical-inference",
          text: "Посилання на право роботи за decyzja nr 1/80 підвищує поріг перевірки: недостатньо послатися лише на факт іноземного рішення про повернення.",
          sourceLocator: "Art. 387",
        },
      ],
      summary:
        "Стаття захищає спеціальне право на роботу іноземця або членів його сім’ї за decyzja nr 1/80 через вимогу перевірити всі підстави для wydalenie за спеціальним законом.",
      rules: [
        {
          locator: "Art. 387",
          explanation:
            "Спочатку треба встановити, чи є відповідне uprawnienie do wykonywania pracy за decyzja nr 1/80, а потім перевірити всі умови rozdział 5 закону 2006 року.",
        },
      ],
      legalEffect:
        "Виконання іноземного рішення можливе лише після повної сукупної перевірки підстав wydalenie, названих статтею. Норма не встановлює автоматичного виконання через саму наявність рішення.",
      foreignersCase:
        "Зберіть доказ права, пов’язаного з decyzja nr 1/80, і зробіть окрему таблицю всіх підстав rozdział 5. Не замінюйте цю перевірку загальним посиланням на нелегальний pobyt.",
    },
  ]),
})
