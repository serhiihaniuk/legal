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
      provisionId: "ustawa-o-cudzoziemcach-art-342",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("342", "Art. 342")} передбачає адміністративне стягнення należności за koszty з ${foreignersLaw.article("336", "Art. 336")}, допускає wszczęcie egzekucja без попереднього upomnienie та регулює невидачу й подальшу видачу tytuł wykonawczy.`,
          sourceLocator: "Art. 342 ust. 1–4",
        },
      ],
      summary:
        "Належності за витратами повернення стягуються в адміністративному виконавчому провадженні, але орган може тимчасово не видавати виконавчий документ, якщо стягнення очевидно неефективне.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Застосовується ustawa o postępowaniu egzekucyjnym w administracji; провадження можна розпочати без попереднього doręczenie upomnienie.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Tytuł wykonawczy не видають, якщо egzekucja була б безрезультатною або не дала б суми, більшої за витрати стягнення, зокрема за відсутності майна в Польщі.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Якщо обставини змінилися, орган має niezwłocznie видати tytuł wykonawczy.",
        },
      ],
      legalEffect:
        "Невидача tytuł wykonawczy за ust. 3 не анулює саму należność; за зміни обставин стягнення може бути розпочате.",
      foreignersCase:
        "Розрізняйте decyzja, що встановлює борг, і tytuł wykonawczy; якщо стягнення почалося, перевірте правову підставу та повідомлення виконавчого органу.",
    },
  ],
})
