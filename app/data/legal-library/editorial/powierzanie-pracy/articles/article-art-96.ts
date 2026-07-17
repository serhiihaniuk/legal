import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-96",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 96 вносить комплексні зміни до ustawa o cudzoziemcach: оновлює відсилання до wykonywanie pracy, правила віз, permit na pobyt і pracy, професійні списки, zwolnienie з zezwolenie, сезонний pobyt та наслідки decyzja o powrocie.",
          sourceLocator: "Art. 96 pkt 1–36",
        },
      ],
      summary:
        "Поправка узгоджує ustawa o cudzoziemcach із новою системою. Серед іншого, вона вводить посилання на oświadczenie та seasonal zezwolenie, змінює вимоги до pobyt czasowy i pracę, визначає повідомлення podmiot, а також прямо uchyla art. 125 і art. 136 ustawy o cudzoziemcach.",
      rules: [
        {
          locator: "pkt 1–7",
          explanation:
            "Визначення wykonywanie pracy та назви podmiot оновлюються; правила віз посилаються на zezwolenie art. 32, 37, 42, oświadczenie і zaświadczenie сезонного wniosku, а konsul може враховувати пріоритети з wykazy art. 28–29.",
        },
        {
          locator: "pkt 8–18",
          explanation:
            "Зміни стосуються додатка до заяви, списку zawodów, відмови, підстав pobyt czasowy i pracę, умов podmiot, змін umowa та обов'язку повідомити wojewoda про втрату роботи протягом 15 днів.",
        },
        {
          locator: "pkt 19–22",
          explanation:
            "Art. 125 і art. 136 ustawy o cudzoziemcach прямо uchylaються; інші пункти уточнюють винятки зі списку zawodów і умови наступного zezwolenie.",
        },
        {
          locator: "pkt 32–36",
          explanation:
            "Оновлюються правила сезонного pobyt, adnotacja dostęp do rynku pracy та наслідки остаточної або виконаної decyzja o zobowiązaniu do powrotu для візи, zezwolenie і wpis oświadczenie.",
        },
      ],
      legalEffect:
        "Art. 96 є przepis zmieniający, а не повним самостійним описом права на pobyt. Для рішення треба читати актуальну редакцію змінених статей, враховуючи прямо скасовані art. 125 і 136 та дату події.",
      foreignersCase:
        "У справі про pobyt i pracę складіть таблицю: підстава pobyt, zawód і список, podmiot, umowa, повідомлення та статус zezwolenie. Не посилайтеся на art. 96 замість чинного тексту конкретної статті ustawy o cudzoziemcach.",
    },
  ]),
})
