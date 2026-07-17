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
      provisionId: "ustawa-o-cudzoziemcach-art-228",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`У документах, про які йдеться в ${foreignersLaw.article("226", "Art. 226")}, не розміщують підпис їхнього власника, якщо документ видають неповнолітній особі, яка до визначеної статтею дати не досягла 13 років, або особі, яка через niepełnosprawność не може підписатися самостійно. Для першої категорії стаття називає дату заяви на видачу чи обмін документа, дату заяви на відповідне zezwolenie — для першої karty pobytu, або дату видачі документа z urzędu.`,
          sourceLocator: "Art. 228 pkt 1 lit. a–c i pkt 2",
        },
      ],
      summary: foreignersLaw.text`Стаття визначає два випадки, коли в документі з ${foreignersLaw.article("226", "Art. 226")} не повинно бути підпису власника: вік до 13 років на визначену дату або неможливість самостійно підписатися через niepełnosprawność.`,
      rules: [
        {
          locator: "pkt 1 lit. a–c",
          explanation:
            "Для дитини перевірте не лише вік, а й правильну дату: заяву на видачу або обмін документа, заяву на дозвіл для першої karty pobytu або видачу документа z urzędu.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Для особи з niepełnosprawność вирішальним є те, що вона не може самостійно скласти підпис; стаття не встановлює загального звільнення від підпису для всіх осіб з інвалідністю.",
        },
      ],
      legalEffect: foreignersLaw.text`За умовами ${foreignersLaw.article("228", "Art. 228")} відсутність підпису в документі ${foreignersLaw.article("226", "Art. 226")} є передбаченим законом способом оформлення документа, а не сама по собі його вадою.`,
      foreignersCase:
        "Перед видачею або обміном документа зафіксуйте вік особи на відповідну дату або обставину неможливості самостійного підпису. У разі дитини визначте, чи йдеться про звичайну заяву, першу kartę pobytu або документ, що видається z urzędu.",
    },
  ],
})
