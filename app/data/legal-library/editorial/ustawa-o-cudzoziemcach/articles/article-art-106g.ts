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
      provisionId: "ustawa-o-cudzoziemcach-art-106g",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("106g", "Art. 106g")} вимагає нового строку щонайменше 7 днів від doręczenia wezwania, якщо під час особистої явки odciski linii papilarnych не вдалося взяти з причин, залежних від wojewody.`,
          sourceLocator: "Art. 106g",
        },
      ],
      summary:
        "Технічна або організаційна проблема органу не перетворюється на невиконання обов’язку заявником. Орган має організувати повторне зняття відбитків.",
      rules: [
        {
          locator: "Art. 106g",
          explanation:
            "Важливо зафіксувати дві обставини: заявник фактично з’явився та причина невдалого зняття відбитків залежала від wojewody. Тоді потрібне нове wezwanie з повним мінімальним строком.",
        },
      ],
      legalEffect:
        "До належного повторного виклику відсутність відбитків через причину на боці органу не повинна бути підставою для umorzenia postępowania.",
      foreignersCase:
        "Попросіть підтвердження явки або службову відмітку про технічну проблему. Після нового wezwania окремо порахуйте семиденний строк від його doręczenia.",
    },
  ],
})
