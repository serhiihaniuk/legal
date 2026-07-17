import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-113",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 113 зберігає чинність визначених dotychczasowe przepisy wykonawcze до набрання чинності новими, виданими на названих делегаціях, але для кожної категорії встановлює конкретний акт-замінник.",
          sourceLocator: "Art. 113 pkt 1–6",
        },
        {
          kind: "statute-text",
          text: "За art. 113 pkt 1–5 старі правила на підставах art. 90, 90a старої ustawy діють до відповідних нових правил, а pkt 6 стосується art. 80 ust. 1 і art. 107 ust. 1 ustawy, зміненої в art. 96; у будь-якому разі збереження не може тривати понад 6 місяців від набрання чинності новою ustawy.",
          sourceLocator: "Art. 113 pkt 1–6",
        },
        {
          kind: "practical-inference",
          text: "Старе rozporządzenie не слід вважати чинним безстроково: треба встановити його делегацію, появу нового акта та граничні 6 місяців, якщо вони застосовні.",
          sourceLocator: "Art. 113 pkt 1–6",
        },
      ],
      summary:
        "Перехідна норма тимчасово утримує окремі виконавчі положення, щоб нові правила могли працювати до видання відповідних актів, але встановлює граничний строк.",
      rules: [
        {
          locator: "pkt 1–5",
          explanation:
            "Для кожної старої делегації art. 90 або 90a названо конкретну нову делегацію: art. 11 і 62 ust. 6, art. 3 ust. 7, art. 45 ust. 2, art. 3 ust. 8, або art. 10 ust. 5 і 63 ust. 4.",
        },
        {
          locator: "pkt 6",
          explanation:
            "Окремо зберігаються правила на підставі art. 80 ust. 1 і art. 107 ust. 1 ustawy, зміненої в art. 96, до нових виконавчих правил на цих самих делегаціях.",
        },
        {
          locator: "pkt 1–6",
          explanation:
            "Збереження триває до набрання чинності новим актом, але не довше ніж 6 місяців від набрання чинності новою ustawy.",
        },
      ],
      legalEffect:
        "Стаття забезпечує тимчасову нормативну безперервність для конкретних виконавчих актів. Вона не робить старі правила безстроковими і не створює самостійної підстави для legalnego pobytu чи права на роботу.",
      foreignersCase:
        "У документі визначте правову делегацію, дату та сферу конкретного rozporządzenie. Перевірте, чи вже набрали чинності нові przepisy wykonawcze і чи не сплив граничний строк; не обґрунтовуйте статус іноземця лише загальним посиланням на старий акт.",
    },
  ]),
})
