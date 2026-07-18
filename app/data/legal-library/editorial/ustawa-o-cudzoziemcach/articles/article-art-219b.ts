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
      provisionId: "ustawa-o-cudzoziemcach-art-219b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Від заявника беруть odciski linii papilarnych і wzór podpisu, але відбитки не беруть у дитини до 6 років, за фізичної неможливості або коли підтверджені хвороба чи інвалідність унеможливлюють особисту явку.",
          sourceLocator: "Art. 219b ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "Зразок підпису не беруть у дитини до 13 років або в особи, яка через підтверджені хворобу чи інвалідність не може підписатися самостійно.",
          sourceLocator: "Art. 219b ust. 3",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Зразок підпису подається на формулярі, визначеному на підставі ${foreignersLaw.article("222", "Art. 222")} ust. 1, або через наданий wojewoda пристрій для створення цифрового відображення підпису.`,
          sourceLocator: "Art. 219b ust. 4",
        },
      ],
      summary:
        "Стаття регулює біометричні дані й підпис у процедурі та встановлює окремі винятки за віком, фізичною неможливістю, хворобою або інвалідністю.",
      rules: [
        {
          locator: "ust. 2 pkt 1–3",
          explanation:
            "Для медичного винятку щодо відбитків потрібне zaświadczenie від належного лікаря-спеціаліста, видане не раніше ніж за 3 місяці до подання заяви, і воно має підтверджувати неможливість особистої явки.",
        },
        {
          locator: "ust. 3 pkt 1–2",
          explanation:
            "Виняток щодо підпису оцінюється окремо від винятку щодо відбитків. Вік для підпису становить 13 років, а для відбитків — 6 років.",
        },
      ],
      legalEffect:
        "За наявності встановленого винятку відповідну біометричну дію не виконують; інші обов’язки заявника залишаються чинними.",
      foreignersCase:
        "Перевірте вік на день подання заяви та зміст медичного zaświadczenia. Документ має бути актуальним, виданим належним спеціалістом і пояснювати саме ту неможливість, на яку посилається заявник.",
    },
  ],
})
