import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-400a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Komendant Główny Straży Granicznej забезпечує соціальну, медичну та психологічну допомогу іноземцю, якого через обставини art. 400 не помістили в strzeżony ośrodek або не застосували areszt, а також звільненому за art. 406 ust. 1 pkt 2 або 3; для неповнолітнього або ubezwłasnowolniony охоплюються також rodzina або opiekun prawny.",
          sourceLocator: "Art. 400a ust. 1",
        },
        {
          kind: "statute-text",
          text: "Організацію цих świadczenia Komendant Główny доручає суб’єкту, до статутних обов’язків якого належить допомога іноземцям; суб’єкт співпрацює та передає інформацію, важливу для організації допомоги.",
          sourceLocator: "Art. 400a ust. 2–3",
        },
      ],
      summary:
        "Стаття передбачає соціальну, медичну та психологічну підтримку для визначених вразливих іноземців, яких не ізолювали або звільнили з підстав, названих законом.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Потрібно встановити одну з названих підстав: art. 400 або art. 406 ust. 1 pkt 2–3. Для неповнолітнього чи ubezwłasnowolniony враховуються родина або opiekun prawny.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Komendant Główny організовує świadczenia через спеціалізований суб’єкт і отримує від нього інформацію, що впливає на допомогу.",
        },
      ],
      legalEffect:
        "Норма забезпечує доступ до визначених видів підтримки, але сама по собі не припиняє decyzja o zobowiązaniu do powrotu. Обсяг допомоги конкретизують art. 400b–400d.",
      foreignersCase:
        "Зберіть підтвердження медичної вразливості або рішення про звільнення, дані про сім’ю чи opiekun prawny та зафіксуйте потреби для організатора świadczenia.",
    },
  ]),
})
