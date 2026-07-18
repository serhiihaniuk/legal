import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-224",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Szef Urzędu протягом 1 місяця від отримання wniosku іншої держави-члена UE повідомляє цю державу, чи cudzoziemiec досі має ochronę międzynarodową в Польщі.",
          sourceLocator: "Art. 224",
        },
      ],
      summary:
        "Стаття встановлює строк і предмет інформації, яку Szef Urzędu надає іншій державі-члену щодо чинності міжнародного захисту в Польщі.",
      rules: [
        {
          locator: "Art. 224",
          explanation:
            "Відлік одного місяця починається від отримання wniosku іншої держави, а відповідь стосується саме того, чи захист nadal posiada cudzoziemiec.",
        },
      ],
      legalEffect:
        "Норма регулює міждержавний обмін інформацією і не є самостійним рішенням про надання, втрату або передачу ochrony międzynarodowej.",
      foreignersCase:
        "Якщо справа пов’язана із запитом іншої держави, зафіксуйте дату отримання wniosku та перевірте, що питання стосується саме ochrony międzynarodowej в Польщі; не прирівнюйте повідомлення до decyzja про pobyt.",
    },
  ],
})
