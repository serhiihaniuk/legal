import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-41",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("41", "Art. 41")} встановлює три умови видачі дозволу на роботу у зв’язку з направленням. Умови праці мають відповідати ${workLaw.external("art. 4", "https://eli.gov.pl/eli/DU/2025/1682/ogl")} ust. 1 і ust. 2 pkt 1–8 та ${workLaw.external("art. 5", "https://eli.gov.pl/eli/DU/2025/1682/ogl")} закону o delegowaniu pracowników w ramach świadczenia usług. Оплата не може бути нижчою за 70% середньої місячної оплати у відповідному воєводстві, актуальної на день подання заяви. Закордонний суб’єкт (podmiot zagraniczny) також має вказати представника, який перебуває в Польщі, має підтвердні документи та уповноважений діяти перед воєводою й іншими названими органами.`,
          sourceLocator: "Art. 41 pkt 1–3",
        },
      ],
      summary:
        "Для направлення працівника (delegowanie) недостатньо назвати закордонного роботодавця й мету приїзду. Треба довести належні умови роботи в Польщі, досягнення встановленого рівня оплати та наявність уповноваженого представника з необхідними документами.",
      rules: [
        {
          locator: "pkt 1",
          explanation: workLaw.text`Умови роботи мають відповідати ${workLaw.external("art. 4", "https://eli.gov.pl/eli/DU/2025/1682/ogl")} ust. 1 і ust. 2 pkt 1–8 та ${workLaw.external("art. 5", "https://eli.gov.pl/eli/DU/2025/1682/ogl")} закону o delegowaniu pracowników w ramach świadczenia usług. Тому разом із цією статтею треба читати й названий окремий закон.`,
        },
        {
          locator: "pkt 2",
          explanation:
            "Оплата праці (wynagrodzenie) не може бути нижчою за 70% середньої місячної оплати у відповідному воєводстві. Потрібно брати показник, актуальний саме в день подання заяви (wniosek).",
        },
        {
          locator: "pkt 3",
          explanation: workLaw.text`Закордонний суб’єкт вказує особу, яка перебуває в Польщі, має документи про виконання умов із pkt 1–2 та уповноважена представляти його перед воєводою й іншими органами з ${workLaw.article("17", "art. 17")} ust. 1 pkt 9.`,
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("41", "Art. 41")} встановлює умови дозволу на роботу при направленні, але не перетворює його на документ законного перебування (legalny pobyt). Належна оплата й представник не замінюють візу чи іншу підставу перебування.`,
      foreignersCase:
        "Порівняйте оплату з офіційним показником на дату подання заяви та перевірте повноваження й документи представника. Окремо підтвердьте законність і строк перебування іноземця.",
    },
  ],
})
