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
      provisionId: "ustawa-o-cudzoziemcach-art-139n",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139n", "Art. 139n")} допускає krótkoterminowa mobilność ICT у Польщі за трьох сукупних умов ust. 1 pkt 1–3: мета роботи, документ з adnotacją «ICT» іншої держави ЄС і zawiadomienie від jednostka, після якого Szef Urzędu не видав sprzeciw протягом 20 днів.`,
          sourceLocator: "Art. 139n ust. 1 pkt 1–3, ust. 2–13",
        },
      ],
      summary:
        "Стаття встановлює процедуру повідомлення та перевірки короткострокової мобільності ICT у Польщі.",
      rules: [
        {
          locator: "ust. 1–5",
          explanation:
            "Zawiadomienie подається польською письмово на папері або електронно, містить дані особи, роботи, обох jednostek і документ «ICT», а додані документи іноземною мовою мають переклад присяжного; строк 20 днів рахується після повного подання.",
        },
        {
          locator: "ust. 6",
          explanation:
            "Szef Urzędu видає decyzję o sprzeciw за ust. 6 pkt 1–8: зокрема через невиконання умов jednostka (pkt 1), недостатні kwalifikacje (pkt 2), занизьку порівнянну оплату (pkt 3), непокритий строк документа (pkt 4), оборонні/безпекові підстави (pkt 5), неправдиві дані або документи (pkt 6), запис у wykazie (pkt 7) чи SIS (pkt 8).",
        },
        {
          locator: "ust. 7–13",
          explanation:
            "За ust. 7–10 Szef Urzędu запитує інформацію в названих органів, які мають 15 днів; за її ненадходження вважається, що вимогу виконано, а обмін може бути електронним. Decyzja про sprzeciw є ostateczna (ust. 11), про неї повідомляють державу, яка видала документ (ust. 12), а без sprzeciw Szef Urzędu видаляє дані з EES протягом 5 dni roboczych (ust. 13).",
        },
      ],
      legalEffect:
        "Відсутність sprzeciw у текстовому 20-денному механізмі є лише частиною умов mobilność; повнота повідомлення, документів і відсутність інших перешкод мають бути перевірені.",
      foreignersCase:
        "Перевірте adnotacja «ICT», повноту zawiadomienie, переклади, дату його вручення Szef Urzędu та можливе sprzeciw; не рахуйте 20 днів від неповного пакета.",
    },
  ],
})
