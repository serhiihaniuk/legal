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
      provisionId: "powierzanie-pracy-art-27",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("27", "Art. 27")} встановлює черговість розгляду wniosków wojewoda: спочатку підприємців з wykaz за ${workLaw.article("28", "art. 28")} ust. 1, далі наступні zezwolenie для того самого podmiot і cudzoziemiec без гіршого wymiar czasu pracy та wynagrodzenie, потім професії з wykaz за ${workLaw.article("29", "art. 29")} ust. 1, а після них — решту wniosków.`,
          sourceLocator: "Art. 27 pkt 1–4",
        },
      ],
      summary:
        "Це правило про порядок розгляду, а не про автоматичну видачу zezwolenie. Пріоритет залежить від статусу підприємця, попереднього чинного дозволу або професії, включеної до відповідного wykaz.",
      rules: [
        {
          locator: "pkt 1",
          explanation: workLaw.text`Першими враховуються wnioski підприємців, включених до wykaz przedsiębiorców за ${workLaw.article("28", "art. 28")} ust. 1.`,
        },
        {
          locator: "pkt 2–3",
          explanation:
            "Наступний дозвіл для того самого polski podmiot і cudzoziemiec має стосуватися не меншого часу та не нижчої оплати, ніж попередній дозвіл, чинний у день нового wniosek; окремий пріоритет мають професії з wykaz дефіцитних zawodów.",
        },
        {
          locator: "pkt 4",
          explanation:
            "Інші wnioski належать до останньої категорії черговості. Сам порядок не скасовує матеріальних умов видачі дозволу.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("27", "Art. 27")} може впливати на черговість роботи органу, але не створює права на zezwolenie, legalny pobyt або початок роботи до наявності належної підстави.`,
      foreignersCase:
        "Для пріоритету зберіть доказ включення podmiot до wykaz або попередній чинний дозвіл з даними про час і wynagrodzenie. Окремо перевірте, чи дозволяє документ pobyt працювати та чи потрібне нове zezwolenie.",
    },
  ],
})
