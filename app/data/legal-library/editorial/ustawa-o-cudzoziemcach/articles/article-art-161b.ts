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
      provisionId: "ustawa-o-cudzoziemcach-art-161b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("161b", "Art. 161b")} ust. 1 передбачає обов'язкове udzielenie zezwolenia na pobyt czasowy w celu mobilności długoterminowej członka rodziny naukowca, якщо мета — проживання разом із мобільним naukowiec і виконані всі умови щодо документа дослідника, сімейного дозволу, страховки та коштів.`,
          sourceLocator: "Art. 161b ust. 1–4",
        },
      ],
      summary:
        "mobilność długoterminowa zezwolenie члена сім'ї прив'язаний до документа дослідника, виданого іншою державою UE, та до попереднього сімейного статусу.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Naukowiec, з яким член сім'ї проживатиме або має проживати в Польщі, повинен мати документ pobyt, передбачений розпорядженням nr 1030/2002, або довгострокову візу з adnotacją «naukowiec», видані іншою державою UE.",
        },
        {
          locator: "ust. 1 pkt 2 lit. a",
          explanation:
            "Член сім'ї повинен мати дозвіл на pobyt для połączenie з родиною та пов'язаний із ним dokument pobytowy, видані державою-членом, яка видала документ або візу naukowiec.",
        },
        {
          locator: "ust. 1 pkt 2 lit. b–c",
          explanation:
            "Потрібні ubezpieczenie zdrowotne і достатні кошти на utrzymanie та повернення до держави, яка видала документ або візу дослідника, або документи, що підтверджують можливість отримати ці кошти.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Після відрахування витрат на житло щомісячні кошти мають перевищувати поріг доходу для świadczenia pieniężne з pomocy społecznej щодо cudzoziemiec і кожного утриманця; до витрат входять щонайменше експлуатаційні платежі на кількість мешканців та комунальні послуги, перелічені у статті.",
        },
        {
          locator: "ust. 4",
          explanation: foreignersLaw.text`Для коштів на повернення та документів про можливість отримати кошти застосовуються przepisy wydane na podstawie ${foreignersLaw.article("157", "art. 157")}; це відсилання не змінює вимогу про кошти в ust. 1 pkt 2 lit. c.`,
        },
      ],
      legalEffect:
        "Це похідний режим mobilność: строк і право залежать від чинного статусу naukowiec та сімейного документа, а не лише від факту спорідненості.",
      foreignersCase:
        "Звірте документи дослідника і члена сім'ї, державу їх видачі, adnotacja «naukowiec», страховку, склад домогосподарства та розрахунок коштів після житлових витрат; кожну іноземну довідку перекладіть за вимогами органу.",
    },
  ],
})
