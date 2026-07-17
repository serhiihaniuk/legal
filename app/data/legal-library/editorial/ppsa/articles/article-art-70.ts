import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-70",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Strony та їхні przedstawiciele повинні повідомляти sąd про кожну зміну miejsca zamieszkania, siedziba або адреси do doręczeń, включно з електронною; якщо обов’язок занедбано, pismo залишають в aktach зі skutkiem doręczenia, крім skarga o wznowienie. Перехідна редакція уточнює термін adres do doręczeń elektronicznych і набирає чинності 1.10.2029.",
          sourceLocator: "Art. 70 § 1–3",
        },
      ],
      summary:
        "Обов’язок оновлювати адресу лежить на стороні; його порушення може спричинити doręczenie через залишення pismo в aktach. Термінологічна редакція про електронну адресу є майбутньою до 1.10.2029.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "На legalStateDate повідомляйте зміну miejsca zamieszkania, siedziba та адреси do doręczeń, включно з elektroniczny адресою; варіант формулювання adres do doręczeń elektronicznych набирає чинності 1.10.2029.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо адресу не оновлено й нова не відома sąd, pismo залишають в aktach зі skutkiem doręczenia; sąd має pouczyć про цей обов’язок і наслідки при першому doręczenie.",
        },
        {
          locator: "§ 3",
          explanation:
            "Для doręczenie skarga o wznowienie postępowania наслідок § 2 не застосовується.",
        },
      ],
      legalEffect:
        "Норма може запустити процесуальні наслідки без фактичного отримання pismo, якщо сторона не повідомила нову адресу; оцінюйте, чи нова адреса все ж була відома sąd.",
      foreignersCase:
        "При переїзді cudzoziemca під час спору про pobyt негайно повідомте sąd нову адресу та збережіть доказ; не покладайтеся на фактичне пересилання пошти.",
    },
  ]),
})
