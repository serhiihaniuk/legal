import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-84",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 84 визначає wykroczenia та grzywny за illegalne powierzenie або wykonywanie pracy, введення в оману, вимагання плати, порушення обов'язків, житлових правил і повідомлень, а також за недопустиме направлення працівника.",
          sourceLocator: "Art. 84 ust. 1–14",
        },
      ],
      summary:
        "За незаконне доручення роботи podmiot може отримати grzywna від 3000 до 50000 zł, а cudzoziemiec за illegalne wykonywanie — не менше 1000 zł. Окремі діяння мають підвищені межі, а для деяких штраф рахується не нижче мінімуму за одного cudzoziemiec.",
      rules: [
        {
          locator: "ust. 1–5",
          explanation:
            "Штрафи охоплюють illegalne powierzenie, illegalne wykonywanie, доведення до незаконної роботи через обман або залежність, вимагання вигоди за документи та обманне доведення іншої особи до zatrudnienie.",
        },
        {
          locator: "ust. 6–10",
          explanation:
            "Окремо карається невиконання обов'язків art. 5, 17, 68, 18, 19 і 59 та порушення строків або правдивості повідомлень art. 70; межі визначені в кожному ustęp.",
        },
        {
          locator: "ust. 11–14",
          explanation:
            "Заборонене направлення cudzoziemiec не-agencja та направлення на користь іншого podmiot поза umowa про pracę tymczasową; для ust. 1, 3–5 і 11 встановлено мінімум за одного cudzoziemiec.",
        },
      ],
      legalEffect:
        "Стаття встановлює відповідальність за wykroczenie, але конкретна кваліфікація залежить від фактичних дій, статусу dokument pobyt, умов роботи та доказів.",
      foreignersCase:
        "У перевірці відокремте illegalne powierzenie від illegalne wykonywanie і перевірте кожен документ та обов'язок окремо. Не робіть висновок про штраф лише з назви umowa або з одного пропущеного документа.",
    },
  ]),
})
