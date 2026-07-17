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
      provisionId: "powierzanie-pracy-art-21",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("21", "Art. 21")} ust. 1 вважає роботу cudzoziemiec legalною після закінчення строку чинного zezwolenie до остаточності рішення про наступне zezwolenie, якщо wniosek про продовження тієї самої роботи на тому самому stanowisko або виду роботи подано вчасно без braków formalnych або з ними, усунутими в строк; періоди zawieszenia на прохання strony не зараховуються. Ust. 2–3 передбачають відповідне правило при збої системи та для визначених заяв на pobyt.`,
          sourceLocator: "Art. 21 ust. 1–3",
        },
      ],
      summary:
        "Це спеціальна норма про продовження legalності роботи між старим і наступним дозволом. Вона діє лише за умов щодо тієї самої роботи та належного wniosek і не є загальним продовженням ані zezwolenie, ані pobyt.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Потрібні чинне попереднє zezwolenie, та сама посада або вид роботи, подання wniosek у період чинності та відсутність braków formalnych або їх своєчасне усунення. Тоді робота вважається legalною від наступного дня після старого строку до ostateczna decyzja.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо збій system унеможливив подання, правило застосовується відповідно, коли wniosek подано першого робочого дня після усунення несправності.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Таке правило поширене на cudzoziemiec, який подав визначений wniosek про pobyt для продовження роботи, що виконувалася за наявним zezwolenie або pobyt, а також на заявника на pobyt rezydenta długoterminowego UE — за умов тексту статті.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("21", "Art. 21")} може тимчасово зберегти legalność wykonywania роботи до остаточного рішення, але не доводить автоматично legalny pobyt і не гарантує позитивного рішення. Потрібно довести всі умови статті та виключити період zawieszenia на прохання strony.`,
      foreignersCase:
        "Зберіть старе zezwolenie, підтвердження своєчасного wniosek, докази усунення braków і порівняння stanowisko/виду роботи. Окремо підтвердьте підставу pobyt у перехідний період; не починайте іншу роботу, посилаючись лише на подання wniosek.",
    },
  ],
})
