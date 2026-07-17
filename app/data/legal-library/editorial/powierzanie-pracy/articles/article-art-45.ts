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
      provisionId: "powierzanie-pracy-art-45",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("45", "Art. 45")} ust. 1 визначає умови zezwolenie na pracę sezonową: podmiot має бути polski podmiot, wynagrodzenie — не нижче оплати порівнюваних працівників у тому самому wymiar часу, діяльність — із переліку rozporządzenie, а робота — не довше 9 місяців у календарному році. Ust. 2 доручає Radzie Ministrów визначити такі діяльності за класифікацією та сезонним попитом.`,
          sourceLocator: "Art. 45 ust. 1 pkt 1–4 і ust. 2",
        },
      ],
      summary: workLaw.text`Sezonowa praca має окремі матеріальні умови та річний ліміт. Конкретні види діяльності не випливають із самого ${workLaw.article("45", "art. 45")} — їх треба брати з чинного rozporządzenie Rady Ministrów.`,
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Заяву подає polski podmiot, а wynagrodzenie у umowa не може бути нижчим за оплату працівників порівнюваного виду або stanowisko при тому самому wymiar часу.",
        },
        {
          locator: "ust. 1 pkt 3–4",
          explanation:
            "Робота має входити до діяльності, визначеної виконавчим актом, і тривати не довше 9 місяців у календарному році.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Rada Ministrów визначає діяльності за класифікацією, враховуючи значно вищий сезонний попит у повторювані періоди.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("45", "Art. 45")} визначає підстави для сезонного дозволу на роботу, але не легалізує pobyt і не замінює visa або інший документ перебування.`,
      foreignersCase:
        "Перевірте статус polski podmiot, оплату порівнюваних працівників, конкретний код діяльності в rozporządzenie та сумарні місяці роботи в році. Окремо встановіть legalny pobyt і його строк.",
    },
  ],
})
