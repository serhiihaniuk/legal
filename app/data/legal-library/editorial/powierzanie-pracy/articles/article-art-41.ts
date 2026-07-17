import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-41",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("41", "Art. 41")} вимагає для zezwolenie при delegowanie дотримання умов ${workLaw.external("art. 4", "https://eli.gov.pl/eli/DU/2025/1682/ogl")} ust. 1 і ust. 2 pkt 1–8 та ${workLaw.external("art. 5", "https://eli.gov.pl/eli/DU/2025/1682/ogl")} ustawy o delegowaniu pracowników, wynagrodzenie не нижче 70% актуального середнього місячного wynagrodzenie у województwo на день wniosek та вказання особи в Польщі, уповноваженої представляти podmiot zagraniczny перед wojewoda й іншими органами.`,
          sourceLocator: "Art. 41 pkt 1–3",
        },
      ],
      summary:
        "Для delegowanie потрібні не лише іноземний роботодавець і мета поїздки. Треба підтвердити польські умови delegowania, мінімальне співвідношення оплати та відповідального представника в Польщі.",
      rules: [
        {
          locator: "pkt 1",
          explanation: workLaw.text`Умови виконання роботи мають відповідати ${workLaw.external("art. 4", "https://eli.gov.pl/eli/DU/2025/1682/ogl")} ust. 1 і ust. 2 pkt 1–8 та ${workLaw.external("art. 5", "https://eli.gov.pl/eli/DU/2025/1682/ogl")} ustawy o delegowaniu pracowników; їх зміст треба читати в тому окремому акті.`,
        },
        {
          locator: "pkt 2",
          explanation:
            "Wynagrodzenie за роботу не може бути нижчим за 70% середнього місячного wynagrodzenie, актуального у відповідному województwo на день подання wniosek.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Podmiot zagraniczny називає особу, яка перебуває в Польщі, має підтвердження виконання умов і може представляти його перед wojewoda та іншими органами.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("41", "Art. 41")} встановлює умови дозволу на роботу при delegowanie, але не робить його документом legalnego pobytu. Розмір оплати й представник не замінюють візу чи іншу підставу перебування.`,
      foreignersCase:
        "Порівняйте оплату з офіційним середнім показником на дату wniosek і перевірте документи представника. Окремо підтвердьте legalny pobyt, строк перебування та право на роботу.",
    },
  ],
})
