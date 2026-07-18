import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-65b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 65b — майбутня норма: після 1.10.2029 листи суду (pisma sądu), копії процесуальних листів і додатків (odpisy pism i załączników w postępowaniu sądowym), а також копії судових рішень (odpisy orzeczeń), які суд вручає в електронній формі, повинні мати kwalifikowany podpis elektroniczny або kwalifikowana pieczęć elektroniczna.",
          sourceLocator: "Art. 65b",
        },
      ],
      summary:
        "Art. 65b ще не діє станом на 18.07.2026; до 1.10.2029 вимога до електронних судових документів міститься в чинному Art. 74a § 12.",
      rules: [
        {
          locator: "Art. 65b",
          explanation:
            "Ця норма додана майбутньою зміною, що набирає чинності 1.10.2029; не використовуйте її як поточну окрему підставу.",
        },
        {
          locator: "Art. 74a § 12 / Przypis 35",
          explanation:
            "На 18.07.2026 перевіряйте в електронному pismo Art. 74a § 12: kwalifikowany podpis або kwalifikowana pieczęć; після 1.10.2029 відповідне правило міститиме Art. 65b.",
        },
      ],
      legalEffect:
        "Вимога стосується електронного оформлення судових документів, але застосовна стаття залежить від дати: Art. 74a § 12 нині, Art. 65b у майбутній редакції.",
      foreignersCase:
        "Зберігайте оригінальний електронний файл рішення у справі pobyt разом із даними підпису або печатки та перевірте, чи посилання зроблено на чинний Art. 74a § 12.",
    },
  ]),
})
