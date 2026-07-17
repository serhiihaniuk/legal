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
      provisionId: "ustawa-o-cudzoziemcach-art-151a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("151a", "Art. 151a")} забороняє jednostka naukowa приймати cudzoziemców для badań або prac rozwojowych із дня ostateczna рішення про odmowa zatwierdzenia, odmowa przedłużenia або cofnięcie zatwierdzenia.`,
          sourceLocator: "Art. 151a ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Особа, якій до цієї дати надано дозвіл з ${foreignersLaw.article("151", "art. 151")} або ${foreignersLaw.article("151b", "151b")}, може продовжити дослідження/мобільність, а в її провадженні одноразово не застосовується вимога zatwierdzenie.`,
          sourceLocator: "Art. 151a ust. 2–3",
        },
      ],
      summary:
        "Норма захищає продовження дослідницької діяльності вже допущеним cudzoziemiec після остаточного негативного рішення щодо jednostka.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Заборона прийому починається з дня, коли рішення про відмову або cofnięcie zatwierdzenia стало ostateczna.",
        },
        {
          locator: "ust. 2–3",
          explanation: foreignersLaw.text`Cudzoziemiec з дозволом ${foreignersLaw.article("151", "art. 151")} або ${foreignersLaw.article("151b", "151b")}, наданим до цієї дати, може продовжити відповідну діяльність; у його провадженні одноразово не застосовується вимога zatwierdzenie.`,
        },
      ],
      legalEffect:
        "Стаття розмежовує новий прийом і продовження вже розпочатого дослідження; інші умови дозволу залишаються предметом оцінки.",
      foreignersCase:
        "Зіставте дату ostateczna рішення про jednostka, дату udzielenie дозволу та доказ фактичного продовження badań. Не замінюйте цей захист автоматичним продовженням дозволу.",
    },
  ],
})
