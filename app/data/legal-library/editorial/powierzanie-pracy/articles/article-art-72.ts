import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-72",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 72 регулює indywidualne konto у teleinformatyczny system: хто його створює, автентифікацію, дані, допомогу urzędu, підписання документів і електронне doręczenie з fikcją doręczenia через 14 днів.",
          sourceLocator: "Art. 72 ust. 1–11",
        },
      ],
      summary:
        "Konto є основним каналом заяв, пояснень, odwołania, zażalenia, документів і повідомлень у справах роботи. Pisma вважаються doręczone при odbiór або після 14 днів від розміщення, навіть якщо їх не відкрили.",
      rules: [
        {
          locator: "ust. 1–6",
          explanation:
            "Konto можуть створити уповноважена особа podmiot, podmiot без działalność, cudzoziemiec, а також організаційна одиниця чи підприємець-фізична особа; потрібна передбачена автентифікація, а urząd забезпечує допомогу.",
        },
        {
          locator: "ust. 7–8",
          explanation:
            "Заяви, пояснення, odwołania, zażalenia й документи подають через konto; електронні документи підписують kwalifikowany, zaufany або osobisty podpis.",
        },
        {
          locator: "ust. 9–11",
          explanation:
            "Decyzja, postanowienie, wezwanie та інші листи doręчаються на konto, вважаються отриманими при odbiór або через 14 днів; не врегульовані питання доповнює KPA.",
        },
      ],
      legalEffect:
        "Пропуск перевірки konta може запустити строк через 14 днів; цифровий канал не скасовує вимог до підпису та своєчасності.",
      foreignersCase:
        "Після створення konta перевіряйте його та електронну пошту, налаштуйте доступ представника і зберігайте підтвердження подання. Дату відкриття рахуйте окремо від дати розміщення документа.",
    },
  ]),
})
