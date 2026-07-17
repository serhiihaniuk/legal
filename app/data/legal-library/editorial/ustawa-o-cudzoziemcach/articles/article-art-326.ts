import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-326",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 326 вимагає у провадженні про zobowiązanie do powrotu особи, яка є małżonek громадянина Польщі або cudzoziemca з pobyt stały чи pobyt rezydenta długoterminowego UE, встановити, чи шлюб укладено або зберігається для обходу правил в’їзду, проїзду, pobyt і виїзду; застосовуються Art. 169 ust. 2, 4 і 5.",
          sourceLocator: "Art. 326 ust. 1–2",
        },
      ],
      summary:
        "Стаття зобов’язує перевірити справжню мету шлюбу в окремому провадженні про повернення.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Перевірка стосується обходу правил міграції, а не лише факту існування свідоцтва про шлюб.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для перевірки відповідно застосовуються процесуальні правила Art. 169 ust. 2, 4 і 5.",
        },
      ],
      legalEffect:
        "Шлюб сам по собі не припиняє перевірку; орган має встановити релевантну мету за правилами, на які відсилає стаття.",
      foreignersCase:
        "Підготуйте докази фактичного сімейного життя та відповіді на питання органу; відокремлюйте факт шлюбу від оцінки мети його укладення або існування.",
    },
  ]),
})
