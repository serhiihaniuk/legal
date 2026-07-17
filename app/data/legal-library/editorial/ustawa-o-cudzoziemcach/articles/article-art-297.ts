import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-297",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 297 ust. 1 перелічує обов’язковий зміст protokół kontroli, зокрема дані контролюючої особи й upoważnienia, час і місце, дані cudzoziemca, обставини, перевірені документи, результат, підписи та дані tłumacza; копію видають cudzoziemcowi, а при відмові від підпису залишають odpis, підписаний функціонером або працівником.",
          sourceLocator: "Art. 297 ust. 1–3",
        },
      ],
      summary:
        "Стаття встановлює реквізити протоколу негативного контролю та правила вручення його копії іноземцю.",
      rules: [
        {
          locator: "ust. 1 pkt 1–12",
          explanation:
            "Протокол має відображати особу контролюючого, час, місце, особу cudzoziemca, причину, перевірені документи, результат і підписи.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Копія видається cudzoziemcowi; відмова від підпису не усуває обов’язку залишити йому підписаний odpis із зазначенням причини відсутності підпису.",
        },
      ],
      legalEffect:
        "Протокол фіксує перебіг і результат kontroli та дає змогу перевірити, які факти й документи покладено в основу висновку.",
      foreignersCase:
        "Порівняйте protokół із вашими документами, датами та поясненнями; отримайте копію і за потреби окремо зафіксуйте заперечення щодо фактичних даних.",
    },
  ]),
})
