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
      provisionId: "ustawa-o-cudzoziemcach-art-444",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("444", "Art. 444")} ust. 1: «Cudzoziemiec, którego dane zostały umieszczone w wykazie lub Systemie Informacyjnym Schengen ... ma prawo złożyć do Szefa Urzędu wniosek o» udostępnienie, sprostowanie або usunięcie даних.`,
          sourceLocator: "Art. 444 ust. 1 pkt 1–3",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`Для оскарження рішення ${foreignersLaw.article("440a", "Art. 440a")} спочатку потрібен wniosek про usunięcie та його розгляд Szef Urzędu; без цього skarga є niedopuszczalna за ust. 8.`,
          sourceLocator: "Art. 444 ust. 4–10",
        },
      ],
      summary:
        "Особа може просити Szef Urzędu повідомити про wpis у wykaz або SIS, виправити неповні, неактуальні чи неправдиві дані або видалити дані, внесені з порушенням закону чи регламенту SIS.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Застосовуються przepisy działu VII KPA; wniosek одночасно є wniosek про wydanie zaświadczenia, а відмова оформлюється ostateczne postanowienie, крім ust. 5.",
        },
        {
          locator: "ust. 4–7",
          explanation: foreignersLaw.text`Якщо дані пов’язані з decyzja ${foreignersLaw.article("440a", "Art. 440a")}, wniosek про usunięcie є також wniosek про uchylenie рішення; Szef Urzędu видає decyzja, а після uchylenie видаляє дані.`,
        },
        {
          locator: "ust. 8–12",
          explanation: foreignersLaw.text`Skarga на ${foreignersLaw.article("440a", "Art. 440a")} без попереднього wniosek і рішення про його результат недопустима; суд може wstrzymać виконання, а фактичну підставу можуть не розкрити для обставин ${foreignersLaw.article("435", "Art. 435")} ust. 1 pkt 4 або 4a.`,
        },
      ],
      legalEffect: foreignersLaw.text`Стаття дає спеціальний механізм доступу, виправлення та видалення даних і встановлює обов’язкову передумову для судової skarga на decyzja ${foreignersLaw.article("440a", "Art. 440a")}. Результат залежить від типу запису й підстави.`,
      foreignersCase: foreignersLaw.text`Подайте wniosek із чітким pkt: інформація, sprostowanie або usunięcie; якщо йдеться про ${foreignersLaw.article("440a", "Art. 440a")}, дочекайтеся рішення Szef Urzędu перед зверненням до sąd administracyjny.`,
    },
  ],
})
