import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-109",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 109 ust. 1 дозволяє виконувати названі в ньому czynności, зокрема за art. 8, 18, 19, 33, 61, 67, 70 і rozdziałem 7, відповідно до dotychczasowe przepisy до dostosowania систем teleinformatycznych до нової ustawy.",
          sourceLocator: "Art. 109 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Art. 109 ust. 2–4 встановлює для перелічених органів строк dostosowania систем протягом 2 років від набрання чинності, не поширює цей строк на систему Krajowego Rejestru Karnego та вимагає повідомлення про впровадження щонайменше за 30 днів.",
          sourceLocator: "Art. 109 ust. 2–4",
        },
        {
          kind: "practical-inference",
          text: "Технічний перехід пояснює тимчасове використання старого способу дії системи, але сам по собі не змінює матеріальні умови legalnego pobytu або права на роботу.",
          sourceLocator: "Art. 109 ust. 1–4",
        },
      ],
      summary:
        "Стаття дає тимчасове правило для дій, які залежать від адаптації державних систем teleinformatycznych, і визначає організаційні строки та повідомлення.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "До технічної адаптації конкретні czynności виконуються за dotychczasowe przepisy. Перелік у статті є визначеним, тому його не слід розширювати за аналогією.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Названі органи мають адаптувати системи протягом 2 років від набрання чинності; для системи Krajowego Rejestru Karnego цей строк не застосовується.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Minister właściwy do spraw pracy публікує повідомлення про строк wdrożenia в офіційному журналі та BIP щонайменше за 30 днів до впровадження.",
        },
      ],
      legalEffect:
        "Стаття підтримує безперервність визначених процедур під час переходу систем, не проголошуючи загального продовження старих правил. Для конкретної дії важливі її місце в переліку та фактичний статус технічного wdrożenia.",
      foreignersCase:
        "З’ясуйте, чи належить потрібна дія до переліку ust. 1, і перевірте офіційне повідомлення про wdrożenie. Не вважайте технічну затримку доказом legalnego pobytu або дозволом працювати без іншої необхідної підстави.",
    },
  ]),
})
