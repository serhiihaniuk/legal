import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-85",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 85 виключає покарання за art. 84 ust. 1 у вузькому випадку відсутності чинної візи або документа pobyt, якщо zatrudniający виконав обов'язки art. 4 ust. 2 і 4, не знав про підробку та зареєстрував cudzoziemiec у ubezpieczenia społeczne, коли це обов'язково.",
          sourceLocator: "Art. 85 pkt 1–2",
        },
      ],
      summary:
        "Захист не є загальним звільненням від відповідальності. Він стосується конкретного wykroczenie і вимагає одночасного виконання всіх названих умов, включно з відсутністю знання про підроблений документ.",
      rules: [
        {
          locator: "Art. 85 pkt 1",
          explanation:
            "Потрібно виконати обов'язки art. 4 ust. 2 і 4; виняток не діє, якщо роботодавець знав, що документ pobyt підроблено.",
        },
        {
          locator: "Art. 85 pkt 2",
          explanation:
            "Cudzoziemiec має бути zgłoszony до ubezpieczenia społecznego, якщо такий обов'язок випливає з чинних правил.",
        },
      ],
      legalEffect:
        "Наслідок — відсутність покарання лише за описане діяння та за доказу сукупності умов; стаття не легалізує pobyt або інші порушення.",
      foreignersCase:
        "Зберігайте копію перевіреного документа, докази виконання art. 4 та zgłoszenie до ubezpieczenia. Якщо виникає питання підробки, оцінюйте, що саме podmiot знав на момент zatrudnienie.",
    },
  ]),
})
