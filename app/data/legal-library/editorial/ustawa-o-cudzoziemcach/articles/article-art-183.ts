import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-183",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("183", "Art. 183")} визначає обов'язковий збір wojewoda інформації про загрозу для оборони, безпеки держави або publiczny porządek у справі permit з ${foreignersLaw.article("181", "art. 181")} ust. 1, органи-адресати, строки 7 і 30 dni roboczych, правило про виконання вимоги та виняток для дитини до 13 років.`,
          sourceLocator: "Art. 183 ust. 1–6",
        },
      ],
      summary:
        "Стаття встановлює безпекову перевірку короткострокового permit і строки відповіді органів, включно з процедурою другої інстанції.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Wojewoda звертається до komendant oddziału Straży Granicznej, komendant wojewódzki Policji та Szef ABW; за потреби — до консул за останнім місцем проживання за кордоном або інших органів.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Основний строк передачі інформації — 7 робочих днів; у szczególnie uzasadnione przypadki його можуть продовжити до 30 робочих днів, про що орган повідомляє wojewoda.",
        },
        {
          locator: "ust. 5–5a",
          explanation: foreignersLaw.text`Після спливу строку з ust. 3 або 4 вимога отримати інформацію вважається виконаною. Якщо Szef Urzędu у другій інстанції має намір надати permit з ${foreignersLaw.article("181", "art. 181")} і wojewoda не робив запиту, Szef Urzędu звертається сам, а правила про строки застосовуються відповідно.`,
        },
        {
          locator: "ust. 4a, 6",
          explanation:
            "Обмін може бути електронним. Увесь механізм ust. 1–5a не застосовується до cudzoziemiec, який на день відповідної оцінки не досяг 13 років.",
        },
      ],
      legalEffect:
        "Строкове непередання інформації не блокує вимогу назавжди, бо закон вважає її виконаною; це не є позитивним висновком про безпеку та не замінює матеріальну оцінку.",
      foreignersCase: foreignersLaw.text`Збережіть дату запиту, повідомлення про продовження та відповідь кожного органу; для дитини перевірте вік і чи справді ${foreignersLaw.article("183", "Art. 183")} не застосовується.`,
    },
  ],
})
