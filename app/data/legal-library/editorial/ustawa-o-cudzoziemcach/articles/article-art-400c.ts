import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-400c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У decyzja про świadczenia іноземця можна зобов’язати періодично з’являтися до Straż Graniczna, передати документ подорожі в depozyt і проживати у визначеному місці до виконання powrót, передачі або надання zgoda na pobyt ze względów humanitarnych чи tolerowany.",
          sourceLocator: "Art. 400c ust. 1",
        },
        {
          kind: "statute-text",
          text: "Świadczenia позбавляють окремою decyzja, якщо іноземець не прибув до визначеного місця протягом 2 днів, залишив його та не повернувся понад 2 дні без виправдання, не з’являється до Straż Graniczna або залишив Польщу.",
          sourceLocator: "Art. 400c ust. 2 pkt 1–4",
        },
      ],
      summary:
        "Стаття дозволяє поєднати допомогу з обов’язками контролю та перелічує порушення, через які допомогу можна припинити окремою decyzja.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Обов’язки можуть стосуватися явки, depozyt документа подорожі та проживання за визначеною адресою до завершення названої процедури або виконання рішення.",
        },
        {
          locator: "ust. 2 pkt 1–4",
          explanation:
            "Кожна з чотирьох ситуацій є законною підставою для decyzja про позбавлення świadczenia; строки 2 дні треба рахувати від decyzja та фактичного залишення.",
        },
      ],
      legalEffect:
        "Норма поєднує підтримку з обов’язками, а припинення допомоги оформлюється decyzja за названою підставою. Надання świadczenia не перетворюється на безумовне право без контролю.",
      foreignersCase:
        "Випишіть із decyzja адресу, графік явок і вимогу depozyt, збережіть докази поважної причини відсутності та перевірте, чи було окреме рішення про pozbawienie świadczenia.",
    },
  ]),
})
