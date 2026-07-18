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
      provisionId: "ustawa-o-cudzoziemcach-art-161a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("161a", "Art. 161a")} зобов'язує певних адресатів повідомити компетентний орган іншої держави UE та Szef Urzędu про намір члена сім'ї naukowiec користуватися mobilność krótkoterminowa або długoterminowa в іншій державі, але лише якщо право тієї держави вимагає такого повідомлення.`,
          sourceLocator: "Art. 161a",
        },
      ],
      summary:
        "Норма координує повідомлення про мобільність члена сім'ї дослідника між Польщею та іншою державою-членом UE.",
      rules: [
        {
          locator: "весь припис",
          explanation:
            "Ситуація передбачає члена сім'ї naukowiec з дозволом, пов'язаним з połączenie з родиною за відповідною підставою, і намір мобільності в іншій державі UE; обов'язок виникає лише за вимогою права держави призначення.",
        },
        {
          locator: "адресати повідомлення",
          explanation:
            "Повідомити можуть сам naukowiec, jednostka naukowa з місцезнаходженням у Польщі, де він проводить дослідження, або instytucja naukowa в іншій державі, де він має намір їх проводити. Кожен адресат названий у статті окремо.",
        },
      ],
      legalEffect:
        "Повідомлення є координаційною процедурною дією; воно не замінює право держави призначення визначити умови в'їзду та проживання і не є польським дозволом.",
      foreignersCase:
        "До переїзду перевірте право держави призначення, вид дозволу члена сім'ї та особу, яка має направити повідомлення; збережіть підтвердження повідомлення і не називайте його рішенням про дозвіл.",
    },
  ],
})
