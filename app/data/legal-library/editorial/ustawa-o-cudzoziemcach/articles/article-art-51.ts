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
      provisionId: "ustawa-o-cudzoziemcach-art-51",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("51", "Art. 51")} ust. 1 обмежує чинність zaproszenie визначеним у ньому періодом, не довше одного року. Ust. 2 визначає зміст заяви і зобов’язань zapraszający, а ust. 3 — właściwość wojewoda за місцем проживання або siedziba запрошуючого.`,
          sourceLocator: "Art. 51 ust. 1–3",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("51", "Art. 51")} ust. 2 pkt 7 прямо вимагає попередження, що zaproszenie не є документом, який уповноважує на podjęcie pracy у Польщі.`,
          sourceLocator: "Art. 51 ust. 2 pkt 7",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("51", "Art. 51")} встановлює максимальну тривалість zaproszenie та перелік даних і зобов’язань у заяві на wpis до ewidencji zaproszeń. Запрошуючий бере на себе, зокрема, витрати перебування, повернення або транзиту та можливого виконання decyzja o zobowiązaniu do powrotu, а сам документ повинен містити застереження про відсутність права на роботу.`,
      rules: [
        {
          locator: "Art. 51 ust. 1",
          explanation:
            "Запрошення дійсне лише у вказаний період і не може бути чинним довше одного року.",
        },
        {
          locator: "Art. 51 ust. 2 pkt 1–8",
          explanation: foreignersLaw.text`Заява містить дані за ${foreignersLaw.article("54", "Art. 54")} pkt 1, 2 і 4–8, відомості про попередні запрошення, майнові та житлові умови, зобов’язання щодо витрат, попередні прізвища й ім’я батька cudzoziemiec, дані VIS, попередження про відсутність права на роботу та письмове oświadczenie під відповідальністю за fałszywe zeznania.`,
        },
        {
          locator: "Art. 51 ust. 3",
          explanation:
            "Заяву розглядає wojewoda, właściwy за місцем проживання або siedziba zapraszający.",
        },
      ],
      legalEffect:
        "Вписане запрошення діє в межах дат і зобов’язань, записаних у ньому, та може підтверджувати фінансове забезпечення. Воно прямо не дає cudzoziemiec prawa do pracy і не замінює wiza або інший документ pobyt.",
      foreignersCase:
        "Перевірте дати запрошення, дані ewidencja, обсяг фінансових зобов’язань і текст попередження про відсутність prawa do pracy; не використовуйте zaproszenie після завершення його чинності.",
    },
  ],
})
