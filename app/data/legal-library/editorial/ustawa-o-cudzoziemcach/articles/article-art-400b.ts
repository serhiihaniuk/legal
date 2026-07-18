import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-400b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Świadczenia охоплюють zakwaterowanie, całodzienne wyżywienie, догляд за щоденними потребами, засоби гігієни, одяг і визначені поїздки громадським транспортом, а також консультації лікарів, лікарню, ліки, санітарні засоби, психологічні консультації та psychoterapia.",
          sourceLocator: "Art. 400b ust. 1 pkt 1–2",
        },
        {
          kind: "statute-text",
          text: "Фінансування надається до 6 місяців від doręczenie decyzja про świadczenia; у особливо обґрунтованих випадках через стан здоров’я строк продовжується до виконання powrót або przekazania до іншої держави-члена ЄС, держави EFTA–ЄЕП чи Швейцарії. Надання świadczenia не зупиняє виконання decyzja o zobowiązaniu do powrotu.",
          sourceLocator: "Art. 400b ust. 2–5",
        },
      ],
      summary:
        "Стаття деталізує зміст соціальної, медичної та психологічної допомоги, строк її фінансування та правило, що вона не зупиняє виконання рішення про повернення.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Соціальна допомога включає проживання, харчування, щоденний догляд, гігієну, одяг і визначені поїздки для лікування або участі у вказаних провадженнях.",
        },
        {
          locator: "ust. 1 pkt 2",
          explanation:
            "Медична й психологічна допомога охоплює лікарів, лікувальний заклад, необхідні засоби, психолога та psychoterapia.",
        },
        {
          locator: "ust. 2–5",
          explanation:
            "Базовий період фінансування — до 6 місяців від doręczenie decyzja про przyznanie świadczeń; за особливо обґрунтованих медичних обставин його продовжують до wykonanie powrotu або передачі до названої держави-члена. Przyznanie świadczeń не є wstrzymanie виконання powrót, а ust. 5 визначає бюджетне джерело фінансування.",
        },
      ],
      legalEffect:
        "Норма дає конкретні види підтримки на обмежений або, за особливого стану здоров’я, продовжений період. Вона не створює гарантії залишитися в Польщі.",
      foreignersCase:
        "Зафіксуйте дату doręczenie decyzja, потрібні медичні послуги, причину кожної поїздки та медичні підстави для можливого продовження строку.",
    },
  ]),
})
