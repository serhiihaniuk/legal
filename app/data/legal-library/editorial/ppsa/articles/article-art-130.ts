import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-130",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Суд umarza zawieszone postępowanie, якщо wniosek o podjęcie postępowania zawieszonego на zgodny wniosek сторін або з причини ${ppsaLaw.article("125", "art. 125 § 1")} pkt 3 не подано протягом трьох років від postanowienia; у разі braku następcy prawnego сторони, яка втратила zdolność sądową, umorzenie настає також у будь-якому разі після трьох років від postanowienia про zawieszenie з цієї причини, а після смерті сторони — після п’яти років. Umorzenie перед NSA спричиняє uprawomocnienie orzeczenia WSA.`,
          sourceLocator: "Art. 130 § 1 pkt 1–3, § 2",
        },
      ],
      summary:
        "Стаття встановлює граничні періоди для завершення zawieszone postępowanie без його поновлення та окремий наслідок для рішення WSA.",
      rules: [
        {
          locator: "§ 1 pkt 1–3",
          explanation: ppsaLaw.text`Не узагальнюйте трирічний строк: pkt 1 стосується zawieszenie на zgodny wniosek сторін або з причини ${ppsaLaw.article("125", "art. 125 § 1")} pkt 3; pkt 2 — braku następcy prawnego та граничних трьох років, а pkt 3 — смерті сторони і п’яти років. Строки рахуються від дня wydania postanowienia o zawieszeniu.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо umorzenie відбувається перед NSA, рішення WSA стає prawomocne за правилом цієї статті.",
        },
      ],
      legalEffect: ppsaLaw.text`За наявності описаних у ${ppsaLaw.article("130", "§ 1")} умов суд припиняє саме zawieszone postępowanie; стаття не вирішує матеріальну законність адміністративної справи.`,
      foreignersCase:
        "У справі про pobyt, яка опинилася в суді й була zawieszona, зафіксуйте підставу та дату postanowienie і перевірте, чи подано wniosek про podjęcie вчасно. Не сприймайте ці строки як загальний строк для wniesienia skargi.",
    },
  ],
})
