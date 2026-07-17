import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-222",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("222", "Art. 222")} stanowi, że nie żąda się opłat od pisma, jeżeli już z jego treści wynika, że podlega ono odrzuceniu.`,
          sourceLocator: "Art. 222",
        },
      ],
      summary:
        "Якщо з самого письма вже видно, що воно підлягає odrzuceniu, суд не вимагає сплати opłaty.",
      rules: [
        {
          locator: "Art. 222",
          explanation:
            "Спочатку перевірте, чи недопустимість письма очевидна з його змісту; сама наявність сумніву не означає автоматичного застосування цієї норми.",
        },
      ],
      legalEffect:
        "Норма стосується вимоги про opłata для письма, яке вже підлягає odrzuceniu; вона не визначає, чи конкретне письмо справді має бути відхилене.",
      foreignersCase:
        "У судовій справі іноземця про pobyt не робіть висновок про відсутність opłata лише через назву письма: перевірте його зміст і окрему підставу можливого odrzucenie.",
    },
  ],
})
