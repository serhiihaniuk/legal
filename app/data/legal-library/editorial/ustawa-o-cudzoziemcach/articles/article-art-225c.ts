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
      provisionId: "ustawa-o-cudzoziemcach-art-225c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Якщо несправність MOS унеможливила своєчасне подання заяви у строк із ${foreignersLaw.article("105", "Art. 105")} ust. 1, ${foreignersLaw.article("202", "Art. 202")} ust. 1 або ${foreignersLaw.article("218a", "Art. 218a")} ust. 1, її можна подати не пізніше третього робочого дня після усунення несправності.`,
          sourceLocator: "Art. 225c ust. 1 zdanie pierwsze",
        },
        {
          kind: "statute-text",
          text: "У такому випадку заяву вважають поданою в перший день неправильної роботи системи. Szef Urzędu невідкладно повідомляє про усунення несправності на вебсторінці свого urzędu.",
          sourceLocator: "Art. 225c ust. 1 zdanie drugie; ust. 2",
        },
      ],
      summary:
        "Стаття захищає строк подання, коли саме збій MOS позбавив заявника можливості надіслати заяву вчасно.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Потрібно довести не будь-яку технічну незручність, а несправність системи, яка спричинила неможливість подання. Після її усунення діє короткий строк — до третього робочого дня включно.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Офіційне повідомлення Szefa Urzędu про усунення несправності є ключовою точкою для обчислення трьох робочих днів.",
        },
      ],
      legalEffect:
        "За виконання умов дата подання переноситься назад на перший день збою, що може зберегти своєчасність заяви.",
      foreignersCase:
        "Збережіть знімки помилки, дату й час спроб, офіційне повідомлення про відновлення та UPO остаточної заяви. Обчисліть саме робочі дні після усунення збою.",
    },
  ],
})
