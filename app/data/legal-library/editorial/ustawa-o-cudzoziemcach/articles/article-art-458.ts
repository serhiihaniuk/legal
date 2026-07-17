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
      provisionId: "ustawa-o-cudzoziemcach-art-458",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("458", "Art. 458")} зобов’язує ministra właściwego do spraw wewnętrznych визначити в drodze rozporządzenia порядок надання, зміни та cofanie uprawnień доступу до krajowy zbiór, технічні умови доступу, wzory upoważnienie, wniosków про zgoda за звичайним і спільним режимом ${foreignersLaw.article("453", "Art. 453")} ust. 2 та oświadczenie з ${foreignersLaw.article("453", "Art. 453")} ust. 3; розпорядження має враховувати безпеку, sprawność операцій і czytelność даних та інформації для Szef Urzędu.`,
          sourceLocator: "Art. 458 pkt 1–5",
        },
      ],
      summary:
        "Стаття визначає перелік технічних і формальних питань, які мають бути врегульовані розпорядженням для доступу до krajowy zbiór.",
      rules: [
        {
          locator: "Art. 458 pkt 1–2",
          explanation:
            "Rozporządzenie визначає tryb і sposób przydzielania, zmiany та cofania uprawnień доступу, технічні умови, а також wzór upoważnienie для доступу й використання даних.",
        },
        {
          locator: "Art. 458 pkt 3–5",
          explanation: foreignersLaw.text`Окремо визначаються wzory wniosek про згоду на доступ через urządzenia telekomunikacyjne, wniosek у режимі ${foreignersLaw.article("453", "Art. 453")} ust. 2 та oświadczenie суб’єкта з ${foreignersLaw.article("453", "Art. 453")} ust. 3.`,
        },
        {
          locator: "Art. 458",
          explanation:
            "Міністр має врахувати безпеку обробки даних, оперативність роботи з uprawnienia та зрозумілість даних і відомостей, які суб’єкти передають Szef Urzędu.",
        },
      ],
      legalEffect: foreignersLaw.text`Норма деталізує зміст майбутнього або чинного rozporządzenie, але не замінює індивідуальну zgoda Szef Urzędu чи умови ${foreignersLaw.article("453", "Art. 453")}. Наявність wzór formularza сама по собі не створює права на доступ.`,
      foreignersCase:
        "Для оцінки доступу встановіть, який режим wniosek застосовано, які wzory та технічні умови діяли, хто надав або змінив uprawnienia і чи збережено читабельність та безпеку переданих даних.",
    },
  ],
})
