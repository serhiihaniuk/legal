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
      provisionId: "powierzanie-pracy-art-6",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("6", "Art. 6")} ust. 1 визначає чотири ситуації видачі zezwolenie na pracę: робота на підставі umowa з польським podmiot або agencja pracy tymczasowej, визначені функції чи представництво в Польщі, delegowanie працівника іноземного podmiot і сезонна робота. Ust. 2 регулює wpis oświadczenie для громадян держави з переліку, а ust. 3 дозволяє starosta письмово уповноважити працівників до розгляду справ.`,
          sourceLocator: "Art. 6 ust. 1–3",
        },
      ],
      summary:
        "Положення розмежовує основні шляхи доступу до роботи: zezwolenie na pracę для чотирьох типів ситуацій та oświadczenie для визначених громадян і роботи з польським podmiot. Окремо визначено внутрішню компетенцію starosta.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Для звичайної роботи важливі umowa з polski podmiot або umowa з agencja при kierowanie. Інші пункти стосуються функцій у визначених spółka, delegowanie та sezonowa praca.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Oświadczenie wpisують до ewidencji лише за одночасних умов щодо громадянства з розporządzenie та роботи в Польщі на підставі umowa з polski podmiot або agencja при kierowanie.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Якщо компетентним є starosta, він може письмово делегувати dyrektor powiatowy urząd pracy або інших працівників, включно з видачею decyzja та postanowienie за KPA.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("6", "Art. 6")} визначає, коли застосовується конкретний інструмент доступу до роботи, але не підтверджує legalny pobyt. Навіть відповідність моделі zezwolenie/oświadczenie не усуває окремої перевірки підстави та строку pobytu.`,
      foreignersCase:
        "Класифікуйте фактичну модель: polski podmiot, agencja, funkcja, delegowanie чи sezonowa praca. Для oświadczenie перевірте громадянство в чинному wykaz; потім окремо перевірте документ legalnego pobytu.",
    },
  ],
})
