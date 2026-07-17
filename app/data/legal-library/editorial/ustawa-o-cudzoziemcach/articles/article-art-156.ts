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
      provisionId: "ustawa-o-cudzoziemcach-art-156",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("156", "Art. 156")} зобов’язує jednostka naukowa невідкладно повідомляти właściwy wojewoda про події, що можуть перешкодити виконанню umowa o przyjęciu, а після завершення угоди протягом 2 місяців передавати ministrowi письмове підтвердження виконання досліджень/праць.`,
          sourceLocator: "Art. 156 ust. 1–3",
        },
      ],
      summary:
        "Стаття встановлює інформаційні обов’язки одиниці щодо перешкод у дослідницькій угоді та завершення проєкту.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Повідомлення надсилається wojewoda, який надав дозвіл або розглядає справу; якщо рішення/провадження на рівні Szef Urzędu, адресатом є wojewoda першої інстанції.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Jednostka передає minister właściwy do spraw wewnętrznych письмове підтвердження всіх досліджень/праць протягом 2 місяців від wygaśnięcie угоди.",
        },
      ],
      legalEffect:
        "Повідомлення дає органу інформацію для оцінки дозволу, але не є автоматичним cofnięcie; наслідок вимагає окремої правової підстави та рішення.",
      foreignersCase:
        "З’ясуйте подію, дату та адресата повідомлення, вимагайте доказ вручення і відокремте обов’язок jednostka від поведінки cudzoziemiec.",
    },
  ],
})
