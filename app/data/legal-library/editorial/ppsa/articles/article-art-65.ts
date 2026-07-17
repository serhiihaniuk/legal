import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-65",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У редакції, чинній на 14.07.2026, Art. 65 § 1 дозволяє sąd вручати pismo через operator pocztowy, своїх працівників, інших уповноважених осіб або органи чи за допомогою засобів електронної комунікації на умовах Art. 74a; для поштового doręczenia діє цивільний режим. Варіант із пріоритетом adres do doręczeń elektronicznych за Art. 65a набирає чинності 1.10.2029.",
          sourceLocator: "Art. 65 § 1–3",
        },
      ],
      summary:
        "На legalStateDate Art. 65 зберігає перелічені поштові, особисті та електронні способи вручення; нова модель із Art. 65a є майбутньою до 1.10.2029.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Поточний § 1 не встановлює пріоритет Art. 65a: sąd може використати operator pocztowy, працівників або інших уповноважених осіб чи органи, а також електронні засоби на умовах чинного Art. 74a.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Якщо застосовано operator pocztowy, діє порядок doręczenia судових pism у postępowanie cywilne, якщо Розділ 4 PPSA не встановлює іншого; § 3 у чинній редакції uchylony.",
        },
        {
          locator: "Примітки 33–34",
          explanation:
            "Редакція з адресою do doręczeń elektronicznych і відсиланням до Art. 65a є майбутньою зміною, що wejście w życie 1.10.2029; не застосовуйте її як поточне правило.",
        },
      ],
      legalEffect:
        "Спосіб doręczenia впливає на skuteczność і строки, але на legalStateDate треба спершу визначити поточний канал за Art. 65 та Art. 74a, а не підміняти його майбутньою Art. 65a.",
      foreignersCase:
        "У справі pobyt перевіряйте, чи sąd використав поточний канал Art. 65 або Art. 74a, адресу, awizo чи UPO; зберігайте підтвердження вручення й не відраховуйте строк лише за майбутньою моделлю Art. 65a.",
    },
  ]),
})
