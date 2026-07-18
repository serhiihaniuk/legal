import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-67",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо стороною є фізична особа, pismo вручають їй особисто; лише коли вона не має процесуальної дієздатності (zdolność procesowa), вручення здійснюють її законному представникові (przedstawiciel ustawowy). Юридичній особі або організаційній одиниці судовий лист чи рішення (pismo lub orzeczenie) вручають органу, уповноваженому представляти її перед судом, або працівникові, уповноваженому отримувати листи; за наявності pełnomocnik документ вручають йому. Для підприємців і wspólnicy spółek handlowych у реєстрі станом на 18.07.2026 діє адреса з реєстру, якщо сторона не вказала іншу; adres do doręczeń elektronicznych — майбутній варіант із 1.10.2029.",
          sourceLocator: "Art. 67 § 1–5",
        },
      ],
      summary:
        "Належний отримувач залежить від статусу сторони та наявності pełnomocnik; для зареєстрованих підприємців поточне правило про адресу з реєстру не слід плутати з майбутньою електронною редакцією.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Для фізичної особи спершу перевірте процесуальну дієздатність (zdolność procesowa): якщо вона є, pismo вручають особисто; якщо її немає — законному представникові (przedstawiciel ustawowy). Для вручення судового листа чи рішення юридичній особі або організаційній одиниці встановіть орган, уповноважений представляти її перед судом, або працівника, уповноваженого отримувати листи.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "На 18.07.2026 для przedsiębiorca та wspólnicy spółek handlowych, внесених до rejestr sądowy, застосовується адреса з реєстру, якщо сторона не вказала іншу; за неможливості діє відповідне правило Art. 70 § 2. Варіант адреси do doręczeń elektronicznych набирає чинності 1.10.2029.",
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
