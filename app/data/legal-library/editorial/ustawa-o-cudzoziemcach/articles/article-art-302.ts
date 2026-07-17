import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-302",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 302 ust. 1 перелічує матеріальні підстави для wydania decyzji o zobowiązaniu cudzoziemca do powrotu: відсутність потрібної wizy або документа, перевищення дозволеного строку, виконання pracy без odpowiedniego zezwolenia na pracę або wpisanego oświadczenia, діяльність усупереч правилам, відсутність коштів, запис у wykaz або SIS, безпекові підстави, незаконне перетинання кордону, виконуване покарання позбавлення волі з підставою для передачі, малий прикордонний рух, publiczne zdrowie або міжнародні відносини, невідповідність cel і warunki pobytu та визначені рішення у справах міжнародного захисту; ust. 2–6 встановлюють винятки й спеціальні правила.",
          sourceLocator: "Art. 302 ust. 1–6",
        },
      ],
      summary:
        "Стаття містить основний перелік ситуацій, у яких видається рішення про zobowiązanie cudzoziemca do powrotu, та окремі винятки для деяких підстав.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Підставами є відсутність чинної wizy або іншого потрібного документа, а також невиїзд після використання дозволеного строку bezwizowy pobyt чи pobytu за wizą Schengen або krajową.",
        },
        {
          locator: "ust. 1 pkt 4–9",
          explanation:
            "Pkt 4 стосується wykonywania pracy без odpowiedniego zezwolenia na pracę або oświadczenia wpisanego до ewidencji; pkt 5 — діяльності всупереч правилам; pkt 6 — коштів і wiarygodne źródła; pkt 7–8 — wykaz та SIS; pkt 9 — оборони, безпеки, порядку або інтересу Польщі. Право на pobyt і право на роботу тут є окремими питаннями.",
        },
        {
          locator: "ust. 1 pkt 10–16",
          explanation:
            "Стаття охоплює незаконне перетинання кордону без винятку Art. 303 ust. 1 pkt 9a, виконуване покарання позбавлення волі з підставою для передачі, малий прикордонний рух, publiczne zdrowie або міжнародні відносини, невідповідність cel і warunki pobytu та визначені рішення щодо ochrony międzynarodowej.",
        },
        {
          locator: "ust. 2–6",
          explanation:
            "Ust. 2 виключає pkt 1–3 у випадках Art. 299 ust. 6, ust. 3 — pkt 2–3 за чинного документа або іншої законної підстави pobytu, ust. 4 — pkt 4 після покарання за Art. 84 ust. 3 закону про powierzanie pracy, а ust. 4a — pkt 4–5 за szczególnie ważny interes cudzoziemca. Ust. 5 вимагає врахувати строк pobytu та зв’язки у названих справах, а ust. 6 містить винятки для п’яти видів short-term mobility.",
        },
      ],
      legalEffect:
        "Конкретний pkt Art. 302 ust. 1 є матеріальною підставою для оцінки рішення про повернення, але рішення не можна обґрунтувати лише загальною назвою порушення: треба встановити факти, докази та винятки ust. 2–6. Підстава щодо роботи не ототожнює автоматично легальність pobytu з наявністю права на роботу.",
      foreignersCase:
        "Розкладіть посилання органу на конкретний pkt Art. 302 ust. 1, перевірте дати, документи, винятки ust. 2–6 і відповідність фактичної мети заявленій. Якщо йдеться про працю, окремо встановіть підставу pobytu та відповідне zezwolenie na pracę або oświadczenie.",
    },
  ]),
})
