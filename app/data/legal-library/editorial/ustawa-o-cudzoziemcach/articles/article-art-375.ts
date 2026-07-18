import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-375",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "На запит центрального органу іншої держави-члена Komendant Główny Straży Granicznej може допомогти в tranzyt через польський аеропорт, зокрема прийняти іноземця з літака і супроводжувати, забезпечити медичну допомогу та харчування, працювати з документами, передавати інформацію, організувати zakwaterowanie або протидіяти спробам зірвати tranzyt.",
          sourceLocator: "Art. 375 pkt 1–7",
        },
        {
          kind: "practical-inference",
          text: "Слова w szczególności роблять перелік прикладовим у межах допомоги під час конкретного tranzyt; вони не створюють для іноземця окремого права вимагати будь-яку послугу поза цією операцією.",
          sourceLocator: "Art. 375",
        },
      ],
      summary:
        "Стаття описує можливий зміст допомоги Польщі іншій державі-члену під час повітряного tranzyt через польський аеропорт.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "Допомога може охоплювати прийняття з літака, супровід, необхідну медичну опіку та харчування.",
        },
        {
          locator: "pkt 3–7",
          explanation:
            "Також названо роботу з документами, повідомлення про виліт, обмін важливою інформацією, zakwaterowanie та протидію спробам перешкодити tranzyt.",
        },
      ],
      legalEffect:
        "Норма дає Komendant Główny Straży Granicznej інструменти оперативної допомоги за запитом іншої держави. Обсяг допомоги визначається конкретною організацією tranzyt.",
      foreignersCase:
        "З’ясуйте, яку саме допомогу запросила інша держава, хто відповідає за документи та медичні потреби, і чи є операція tranzyt, а не звичайним переміщенням через Польщу.",
    },
  ]),
})
