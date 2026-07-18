import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-370",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Komendant Główny Straży Granicznej може відмовити в udzielenie zezwolenia на tranzyt drogą powietrzną, якщо cudzoziemiec є oskarżony в Rzeczypospolitej Polskiej або poszukiwany для виконання wyroku, tranzyt через інші держави чи прийняття державою повернення неможливі, виконання рішення потребує зміни аеропорту в Польщі, цього вимагають obronność чи bezpieczeństwo państwa, охорона bezpieczeństwa i porządku publicznego або zdrowia publicznego чи stosunki międzynarodowe, або неможливо надати допомогу іншій державі-члену. Після надання zezwolenie можна cofnąć, якщо виявлено одну з цих обставин.",
          sourceLocator: "Art. 370 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Формулювання може відмовити означає, що для аналізу важливі конкретна причина та її докази, а не лише факт подання запиту.",
          sourceLocator: "Art. 370 ust. 1–2",
        },
      ],
      summary:
        "Стаття перелічує обставини, за яких Komendant Główny Straży Granicznej може не надати або може відкликати дозвіл на повітряний tranzyt.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation:
            "Підстави охоплюють oskarżenie в Польщі або poszukiwanie для виконання wyroku, неможливість tranzyt через інші держави чи прийняття державою повернення, необхідність зміни польського аеропорту, obronność, bezpieczeństwo państwa, bezpieczeństwo i porządek publiczny, zdrowie publiczne, stosunki międzynarodowe або неможливість допомоги іншій державі-члену.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Після надання дозволу його можна cofnąć, якщо виявлено одну з обставин з ust. 1.",
        },
      ],
      legalEffect:
        "Норма дозволяє компетентному органу відмовити або відкликати дозвіл з огляду на перелічені ризики та практичну неможливість tranzyt. Вона не встановлює, що відмова настає автоматично в кожному випадку.",
      foreignersCase:
        "Попросіть зафіксувати конкретну підставу odmowa або cofnięcie, документи про маршрут і безпекову обставину. Не змішуйте цей спеціальний дозвіл із рішенням про ваш pobyt.",
    },
  ]),
})
