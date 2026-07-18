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
      provisionId: "ustawa-o-cudzoziemcach-art-225i",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Персональні дані в MOS і Bazie Wstępnej MOS мають бути захищені від зловживань, незаконного доступу й передачі щонайменше шляхом допуску лише осіб із письмовим уповноваженням адміністратора або współadministratora.",
          sourceLocator: "Art. 225i pkt 1",
        },
        {
          kind: "statute-text",
          text: "Кожна уповноважена особа має письмово зобов’язатися зберігати конфіденційність персональних даних.",
          sourceLocator: "Art. 225i pkt 2",
        },
      ],
      summary:
        "Стаття встановлює мінімальні персональні гарантії доступу до даних MOS і Bazy Wstępnej: письмове уповноваження та письмову конфіденційність.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Для MOS уповноваження видає administrator danych, а для Bazy Wstępnej — відповідний współadministrator. Сам технічний доступ не є достатньою правовою підставою.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Зобов’язання щодо poufności має бути письмовим і стосується кожної особи, допущеної до обробки.",
        },
      ],
      legalEffect:
        "Обробка без належного письмового уповноваження або без письмового зобов’язання про конфіденційність не відповідає мінімальним гарантіям цієї статті.",
      foreignersCase:
        "У разі підозри на неправомірний доступ встановіть, хто відкривав дані, від якого адміністратора мав уповноваження, який був його обсяг і чи існувало письмове зобов’язання про poufność.",
    },
  ],
})
