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
      provisionId: "ustawa-o-cudzoziemcach-art-7",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("7", "Art. 7")} зобов’язує organ письмово й зрозумілою для іноземця мовою пояснити порядок, права та обов’язки у названих візових, pobytowych і поворотних справах та під час контролю. Для заяв, поданих через MOS, pouczenie може бути розміщене в самій системі й підтверджується заявником у MOS.`,
          sourceLocator: "Art. 7 ust. 1–4",
        },
      ],
      summary:
        "Pouczenie має дати людині реальне розуміння її процесуальної ситуації. Електронна процедура змінює спосіб ознайомлення, але не скасовує обов’язку organu надати змістовну й зрозумілу інформацію.",
      rules: [
        {
          locator: "Art. 7 ust. 1",
          explanation:
            "Перевірте вид справи, мову, письмову форму та зміст інформації. Сам факт існування стандартного бланка не доводить, що іноземець одержав зрозуміле pouczenie.",
        },
        {
          locator: "Art. 7 ust. 2–3",
          explanation:
            "У справі про zobowiązanie do powrotu додається спеціальна інформація про можливі вимоги й захист у зв’язку з порушеннями суб’єкта, який доручав роботу. Надсилання такого pouczenia електронно поза MOS потребує письмової згоди іноземця.",
        },
        {
          locator: "Art. 7 ust. 4",
          explanation:
            "У справах про pobyt czasowy, stały або rezydenta długoterminowego UE, розпочатих заявою через MOS, обов’язок може бути виконано електронним pouczeniem у MOS; ознайомлення відбувається при поданні й підтверджується в системі.",
        },
      ],
      legalEffect:
        "Pouczenie забезпечує можливість користуватися процесуальними правами, але саме по собі не надає статусу й не замінює виконання умов або строків.",
      foreignersCase:
        "Збережіть текст pouczenia, його мову, дату й спосіб отримання. Для MOS збережіть також підтвердження ознайомлення; для справи про powrót перевірте спеціальний зміст з ust. 2.",
    },
  ],
})
