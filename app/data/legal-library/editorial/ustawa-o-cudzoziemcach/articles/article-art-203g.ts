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
      provisionId: "ustawa-o-cudzoziemcach-art-203g",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("203g", "Art. 203g")} вимагає призначити новий строк щонайменше 7 днів від doręczenia wezwania, якщо під час особистої явки відбитки пальців не вдалося взяти з причин, залежних від wojewody.`,
          sourceLocator: "Art. 203g",
        },
      ],
      summary:
        "Технічна несправність або інша причина на боці органу не є невиконанням обов’язку заявником. Потрібна повторна належна можливість здати відбитки.",
      rules: [
        {
          locator: "Art. 203g",
          explanation:
            "Для застосування статті треба підтвердити особисту явку та джерело проблеми. Новий семиденний мінімум рахується від вручення нового wezwania.",
        },
      ],
      legalEffect:
        "Відсутність відбитків з причини, залежної від органу, не повинна вести до umorzenia до належної повторної спроби.",
      foreignersCase:
        "Збережіть доказ явки й попросіть зафіксувати технічну причину. Не погоджуйтеся з описом ситуації як неявки або відмови здати відбитки, якщо заявник виконав свою частину.",
    },
  ],
})
