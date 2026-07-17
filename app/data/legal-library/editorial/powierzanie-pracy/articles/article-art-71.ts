import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-71",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 71 визнає legalною роботу після завершення oświadczenie, якщо cudzoziemiec працював за umowa o pracę щонайменше 3 місяці, а podmiot вчасно подав належний wniosek про zezwolenie на тому самому stanowisko.",
          sourceLocator: "Art. 71 ust. 1–4",
        },
      ],
      summary:
        "Перехідний захист діє від дати завершення роботи в oświadczenie до wydanie zezwolenia або doręczenie odmowa, за умов не гірших. Аналогічне правило застосовується до wniosek cudzoziemiec про pobyt czasowy і pracę; zawieszenie на прохання strony виключає захист.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Потрібні щонайменше 3 місяці umowa o pracę, той самий podmiot і stanowisko, wniosek до завершення oświadczenie без braków або з ними, усуненими вчасно; робота legalна на не гірших умовах до zezwolenie або odmowa.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Якщо система не дозволяла подати wniosek, його треба подати першого робочого дня після усунення несправності.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Правила ust. 1–2 відповідно застосовуються до заяви cudzoziemiec на zezwolenie na pobyt czasowy для продовження тієї самої роботи на umowa o pracę.",
        },
      ],
      legalEffect:
        "Це умовний перехідний період, а не автоматичне видання zezwolenia чи pobyt; його межі залежать від фактів, строку і відсутності zawieszenie.",
      foreignersCase:
        "Перевірте три місяці umowa o pracę, тотожність stanowisko, дату подання до завершення wpis та brak formalny. За поданням pobyt не припускайте, що всі умови роботи або pobyt автоматично підтверджені.",
    },
  ]),
})
