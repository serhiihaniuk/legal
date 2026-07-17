import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-303",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 303 ust. 1 передбачає, що у випадках Art. 302 ust. 1 провадження про zobowiązanie do powrotu не розпочинають або розпочате umarzają, якщо cudzoziemiec має міжнародний захист, визначений дозвіл чи сімейний статус, дозвіл іншої держави, може бути переданий або doprowadzony, був затриманий одразу після незаконного перетинання зовнішнього кордону чи належить до інших категорій pkt 1–15; ust. 2–3 встановлюють окремі винятки, ust. 4 — правило щодо wniosku o ochronę międzynarodową (крім kolejny wniosek), а ust. 5–7 — спеціальні правила передачі та медичної допомоги.",
          sourceLocator: "Art. 303 ust. 1–7",
        },
      ],
      summary:
        "Стаття встановлює випадки, коли навіть за наявності підстав Art. 302 процедура повернення не розпочинається або припиняється.",
      rules: [
        {
          locator: "ust. 1 pkt 1–7",
          explanation:
            "До категорій належать status uchodźcy або ochrona uzupełniająca, zgoda humanitarna або tolerowany, дозволи Art. 187 pkt 6–7, визначений małżonek, окремі wiza або zezwolenia Art. 181 ust. 1 і Art. 176, pobyt stały або rezydent długoterminowy UE та дозвіл іншої держави, що застосовує dyrektywę 2008/115/WE.",
        },
        {
          locator: "ust. 1 pkt 8–15",
          explanation:
            "Стаття також охоплює тимчасове відрядження для послуг, niezwłoczne przekazanie або doprowadzenie, затримання одразу після незаконного перетинання зовнішнього кордону, заświadczenie Art. 170, передачу за міжнародною угодою або Dublin та передачу для кримінального провадження чи виконання позбавлення волі.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "У випадку Art. 302 ust. 1 pkt 1 рішення не видають до завершення процедури зміни рішення за Art. 120; pkt 1 не застосовується у ситуаціях Art. 32 ust. 1 або Art. 33 ust. 2 Konwencji dotyczącej statusu uchodźców.",
        },
        {
          locator: "ust. 4–7",
          explanation:
            "Провадження не розпочинають під час розгляду wniosku o ochronę międzynarodową, крім kolejny wniosek; для особи з pkt 9 можливі медичні винятки й допомога за рахунок держави, а в pkt 9 і 11 орган інформує про державу передачі та doprowadza до її кордону, крім Art. 303a.",
        },
      ],
      legalEffect:
        "Art. 303 веде до незапочаткування або umorzenie конкретного провадження про повернення, але не є універсальним підтвердженням legalny pobyt чи окремим дозволом на роботу; застосування залежить від точного pkt і доказів.",
      foreignersCase:
        "Якщо розпочато повернення, перевірте точний pkt Art. 303 ust. 1, статус, zezwolenie, сімейну обставину, процедуру ochrony або підставу передачі й подайте органу відповідні підтвердження.",
    },
  ]),
})
