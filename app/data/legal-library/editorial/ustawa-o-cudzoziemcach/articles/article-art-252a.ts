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
      provisionId: "ustawa-o-cudzoziemcach-art-252a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Polski dokument podróży видається також cudzoziemcowi, який має громадянство, визначене в rozporządzeniu, якщо він втратив власний dokument podróży, документ знищено чи він втратив чинність або особа ніколи його не мала, їй надано zezwolenie na pobyt stały, rezydenta długoterminowego UE, czasowy, ochronę uzupełniającą або zgodę humanitarną, а wniosek подано у період, визначений rozporządzeniem.",
          sourceLocator: "Art. 252a ust. 1 pkt 1–3",
        },
        {
          kind: "statute-text",
          text: "Minister właściwy do spraw wewnętrznych може визначити в drodze rozporządzenia громадянства, що дають право на цей режим, і період подання wniosków; під час цього враховуються потреби міграційної політики, правова та фактична ситуація осіб, які не можуть звернутися до влади своєї держави, значення для інтересу RP та sprawność postępowania.",
          sourceLocator: "Art. 252a ust. 2–3 pkt 1–4",
        },
      ],
      summary:
        "Стаття створює додатковий режим wydania polskiego dokumentu podróży для громадянств і періодів, які minister визначить у rozporządzenie.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Перевіряйте всі умови разом: громадянство з rozporządzenia, втрату, знищення, wygaśnięcie або відсутність власного документа, один із п’яти статусів і подання wniosku у спеціальний період.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Без актуального rozporządzenia не можна визначити охоплені громадянства та період. Критерії його підготовки включають міграційну політику, неможливість звернення до влади держави, інтерес RP і sprawność postępowania.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("252a", "Art. 252a")} використовує обов’язкову формулу «wydaje się również»: коли громадянство охоплене чинним rozporządzenie і всі умови ust. 1 виконані разом, орган видає документ. Дискреція «może określić» в ust. 2 стосується видання самого rozporządzenia, а не рішення в індивідуальній справі.`,
      foreignersCase: foreignersLaw.text`Перед wnioskiem перевірте чинний текст rozporządzenia, своє громадянство та останній день періоду, а також докази відсутності власного документа і статусу. Не підміняйте спеціальний режим ${foreignersLaw.article("252a", "Art. 252a")} загальним ${foreignersLaw.article("252", "Art. 252")}.`,
    },
  ],
})
