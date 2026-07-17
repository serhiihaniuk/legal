import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-17",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("17", "Art. 17")} покладає на podmiot, якому видано zezwolenie, обов'язки дотримуватися умов дозволу в umowa, передавати її копію через system до початку роботи (для umowa o pomocy przy zbiorach — протягом 7 днів), забезпечувати передбачений рівень wynagrodzenie, повідомляти cudzoziemiec про провадження та рішення, діяти з należyta staranność і надавати документи органам; також встановлено спеціальні правила для функцій і delegowanie та обов'язок виплатити należne wynagrodzenie.`,
          sourceLocator: "Art. 17 ust. 1–5",
        },
      ],
      summary:
        "Після видачі zezwolenie робота podmiot не завершується: він має узгодити umowa з дозволом, своєчасно передати документи, дотримуватися мінімальних оплат і співпрацювати з органами. Для delegowanie та функцій у spółka закон встановлює окремі винятки й обов'язки.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Umowa повинна відображати умови zezwolenie або допустиму зміну. Її копію польською мовою надсилають органу через system до powierzenie роботи, а для umowa o pomocy przy zbiorach — упродовж 7 днів.",
        },
        {
          locator: "ust. 1 pkt 3–5",
          explanation: workLaw.text`Для ${workLaw.article("6", "art. 6")} ust. 1 pkt 1 wynagrodzenie не може бути нижчим за актуальне мінімальне, для delegowanie за pkt 3 — нижчим за 70% актуального середнього wynagrodzenie у województwo; при збільшенні часу оплата зростає пропорційно.`,
        },
        {
          locator: "ust. 1 pkt 6–10",
          explanation:
            "Podmiot інформує cudzoziemiec про дії та рішення, діє з належною старанністю, надає підтвердні документи компетентним органам, а на прохання pracodawca użytkownik передає копію zezwolenie працівника тимчасового.",
        },
        {
          locator: "ust. 2–5",
          explanation: workLaw.text`Для визначених функцій не застосовуються названі обов'язки ust. 1 pkt 1–4 і 10. При delegowanie припиняють його, якщо не виконуються умови ${workLaw.article("3", "art. 3")} ust. 3; виявлене порушення треба негайно усунути, а невиплачену належну оплату — виплатити за виконану роботу.`,
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("17", "Art. 17")} конкретизує обов'язки podmiot після видачі дозволу, але виконання цих обов'язків не продовжує автоматично legalny pobyt і не замінює чинність zezwolenie. Порівнювати треба дозвіл, umowa та фактичну роботу.`,
      foreignersCase:
        "До початку роботи отримайте копію umowa і перевірте її з zezwolenie: stanowisko, час, місце та wynagrodzenie. Попросіть повідомляти про рішення; за невиплати зберігайте розрахунки й докази, а legalny pobyt перевіряйте окремо.",
    },
  ],
})
