import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-62",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 62 перелічує дані для oświadczenie, додатки та вимоги до oświadczenie podmiotu про обставини art. 13; це oświadczenie підписується під rygor odpowiedzialności karnej і не раніше ніж за 30 днів до подання.",
          sourceLocator: "Art. 62 ust. 1–6",
        },
      ],
      summary:
        "Oświadczenie має ідентифікувати podmiot, cudzoziemiec, роботу, договір і, за тимчасової роботи, pracodawca użytkownik. До нього додаються підтвердження та оплата, а правдивість окремого oświadczenie посилена кримінально-правовим застереженням.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Заповнюються дані podmiot і cudzoziemiec, підстава pobyt, zawód, stanowisko, місце, дати, договір, мінімальне wynagrodzenie, час та дані pracodawca użytkownik за потреби.",
        },
        {
          locator: "ust. 3–5",
          explanation:
            "Додаються oświadczenie про обставини art. 13, підтвердні документи та доказ opłata. Застереження про відповідальність за false oświadczenie має бути прямо включене; підпис — не раніше 30 днів до подання.",
        },
        {
          locator: "ust. 6",
          explanation:
            "Minister właściwy do spraw pracy визначає розпорядженням перелік документів, які додаються.",
        },
      ],
      legalEffect:
        "Неповні або недостовірні дані можуть вплинути на wpis і подальшу відповідальність; перелік документів слід брати з чинного розporządzenie, а не вигадувати.",
      foreignersCase:
        "Підготуйте одну узгоджену версію даних про посаду, години, оплату й pobyt. Перевірте дату підпису oświadczenie та документи з актуального wykaz ministerstwa.",
    },
  ]),
})
