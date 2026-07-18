import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "45a",
      provisionId: "kpa-art-45a",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює спеціальний порядок doręczenia організації, коли її адреса не існує, викреслена або не відповідає реєстру і нову siedzibę неможливо встановити.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Письмо вручається фізичній особі, уповноваженій представляти адресата; при łącznej reprezentacji — усім таким особам, а skutkiem є найраніше вручення одній із них.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Якщо адресу представника також неможливо встановити, письмо залишається в актах зі skutkiem doręczenia в день складання відповідної adnotacji.",
        },
        {
          locator: "§ 5",
          explanation:
            "Organ повинен невідкладно скласти і зберегти в актах adnotację про неможливість встановити адресу представника.",
        },
      ],
      legalEffect:
        "Неналежна реєстрова адреса організації може завершитися skutecznym doręczeniem без фактичного odbioru після виконання спеціальної процедури.",
      foreignersCase:
        "Якщо компанія-роботодавець є адресатом у пов’язаному провадженні, актуальність її реєстрової адреси та адрес представників впливає на skutek doręczenia.",
    },
  ],
})
