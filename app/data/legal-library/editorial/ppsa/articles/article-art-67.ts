import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-67",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Фізичній особі pismo doręczaється особисто або jej przedstawiciel ustawowy; юридичній особі та організаційній одиниці — organowi представництва або уповноваженому працівнику, а за наявності pełnomocnik doręczenie здійснюється йому. Для підприємців і wspólnicy spółek handlowych у реєстрі на legalStateDate діє адреса з реєстру, якщо сторона не вказала іншу; адреса do doręczeń elektronicznych — майбутній варіант із 1.10.2029.",
          sourceLocator: "Art. 67 § 1–5",
        },
      ],
      summary:
        "Належний отримувач залежить від статусу сторони та наявності pełnomocnik; для зареєстрованих підприємців поточне правило про адресу з реєстру не слід плутати з майбутньою електронною редакцією.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Визначте, чи сторона є особою фізичною, юридичною або організаційною одиницею, і хто має право отримати pismo: особа/представник або organ представництва чи уповноважений працівник.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "На 14.07.2026 для przedsiębiorca та wspólnicy spółek handlowych, внесених до rejestr sądowy, застосовується адреса з реєстру, якщо сторона не вказала іншу; за неможливості діє відповідне правило Art. 70 § 2. Варіант адреси do doręczeń elektronicznych набирає чинності 1.10.2029.",
        },
        {
          locator: "§ 5",
          explanation:
            "Якщо встановлено pełnomocnik або особу для отримання pism, doręczenie має бути здійснене цим особам.",
        },
      ],
      legalEffect:
        "Належний адресат і поточна редакція адресного правила впливають на skuteczność doręczenia; сама назва отримувача не вирішує всіх фактичних питань.",
      foreignersCase:
        "Cudzoziemiec має повідомити sąd про pełnomocnik та перевірити, хто отримав pismo; якщо сторона — підприємець, перевірте реєстр і дату застосовної редакції Art. 67.",
    },
  ]),
})
