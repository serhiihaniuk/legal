import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-202",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Cudzoziemiec подає wniosek про pobyt stały особисто не пізніше останнього дня legalny pobyt; якщо особистого подання не було, wojewoda викликає його щонайменше на 7 днів під rygor залишення wniosku без розгляду.",
          sourceLocator: "Art. 202 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "Для małoletni, osoby całkowicie ubezwłasnowolnionej та małoletni bez opieki стаття визначає відповідно батьків або opiekun, судового opiekun та kurator; дитина від 6 років має бути присутня. Вимога строку не застосовується до названих у статті дітей, народжених у Польщі.",
          sourceLocator: "Art. 202 ust. 3–5",
        },
      ],
      summary:
        "Стаття встановлює особисте подання, наслідок неявки та правила представництва дітей і недієздатних осіб.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Збережіть доказ особистого подання або stawiennictwo; 7-денний строк у wezwanie є мінімальним для виконання вимоги.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Спосіб подання залежить від віку та правового статусу заявника; присутність дитини від 6 років є окремою умовою.",
        },
        {
          locator: "ust. 5",
          explanation:
            "Виняток із строку стосується лише дітей, прямо названих у нормі, а не всіх дітей іноземців.",
        },
      ],
      legalEffect:
        "Невиконання wezwanie про особисту явку може призвести до залишення wniosku без розгляду, але це процесуальний наслідок, а не автоматична відмова у дозволі.",
      foreignersCase:
        "Визначте, хто має підписати й подати wniosek, зафіксуйте legalny pobyt і дату явки, а на wezwanie відповідайте в межах строку та з доказом отримання.",
    },
  ],
})
