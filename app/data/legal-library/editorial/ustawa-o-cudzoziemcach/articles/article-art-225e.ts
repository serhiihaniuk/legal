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
      provisionId: "ustawa-o-cudzoziemcach-art-225e",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Szef Urzędu веде Bazę Wstępną MOS у системі з ${foreignersLaw.article("449", "Art. 449")} ust. 1. Після підписання й відправлення електронна заява про pobyt czasowy, stały або rezydenta długoterminowego UE надходить до цієї бази, де wojewoda перевіряє правильність даних і braki formalne.`,
          sourceLocator: "Art. 225e ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "Szef Urzędu та wojewodowie є współadministratorami даних у Bazie Wstępnej MOS. Szef Urzędu відповідає за систему, доступність, захист, цілісність, безпеку, повідомлення про порушення, розрахунковість і правильність даних, а wojewodowie виконують визначену частину цих дій у межах своєї компетенції.",
          sourceLocator: "Art. 225e ust. 3–5",
        },
        {
          kind: "statute-text",
          text: "Szef Urzędu і wojewoda окремо видають своїм працівникам уповноваження на обробку даних із визначенням індивідуального обсягу; повноваження wojewoda охоплює також obsługę електронних заяв.",
          sourceLocator: "Art. 225e ust. 6–7",
        },
      ],
      summary:
        "Стаття описує проміжний етап між відправленням заяви та її реєстраційною долею: Baza Wstępna MOS служить для первинної перевірки даних і braków formalnych.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "До Bazy Wstępnej потрапляє вже підписана й відправлена заява. Завдання wojewoda на цьому етапі — перевірити правильність даних і формальну повноту.",
        },
        {
          locator: "ust. 3–5",
          explanation:
            "Współadministrowanie не означає тотожних обов’язків: закон розподіляє системні завдання Szefa Urzędu та дії wojewodów у межах їхньої компетенції.",
        },
        {
          locator: "ust. 6–7",
          explanation:
            "Доступ працівника до бази має відповідати письмовому уповноваженню конкретного współadministratora й визначеному обсягу обробки.",
        },
      ],
      legalEffect:
        "Передача до Bazy Wstępnej відкриває первинну перевірку заяви, але сама по собі не підтверджує відсутності braków formalnych.",
      foreignersCase:
        "Розрізняйте статус відправлення в MOS, появу UPO та результат перевірки wojewoda в Bazie Wstępnej. У спорі про дані встановіть, який współadministrator і який уповноважений працівник виконував дію.",
    },
  ],
})
