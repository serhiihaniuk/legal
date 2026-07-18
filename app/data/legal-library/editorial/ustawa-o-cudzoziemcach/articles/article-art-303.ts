import { defineEditorialPart } from "../../define-editorial-part"

import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
} from "../../../legal-text"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const REFUGEE_CONVENTION_URL = "https://eli.gov.pl/eli/DU/1991/515/ogl"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-303",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("303", "Art. 303")} ust. 1 передбачає, що у випадках ${foreignersLaw.article("302", "Art. 302")} ust. 1 провадження про zobowiązanie do powrotu не розпочинають або розпочате umarzają, якщо cudzoziemiec має міжнародний захист, визначений дозвіл чи сімейний статус, дозвіл іншої держави, може бути переданий або doprowadzony, був затриманий одразу після незаконного перетинання зовнішнього кордону чи належить до інших категорій pkt 1–15; ust. 2–3 встановлюють окремі винятки, ust. 4 — правило щодо wniosku o ochronę międzynarodową (крім kolejny wniosek), а ust. 5–7 — спеціальні правила передачі та медичної допомоги.`,
          sourceLocator: "Art. 303 ust. 1–7",
        },
      ],
      summary: foreignersLaw.text`Стаття встановлює випадки, коли навіть за наявності підстав ${foreignersLaw.article("302", "Art. 302")} процедура повернення не розпочинається або припиняється.`,
      rules: [
        {
          locator: "ust. 1 pkt 1–7",
          explanation: foreignersLaw.text`До категорій належать status uchodźcy або ochrona uzupełniająca, zgoda humanitarna або tolerowany, дозволи ${foreignersLaw.article("187", "Art. 187")} pkt 6–7, визначений małżonek, окремі wiza або zezwolenia ${foreignersLaw.article("181", "Art. 181")} ust. 1 і ${foreignersLaw.article("176", "Art. 176")}, pobyt stały або rezydent długoterminowy UE та дозвіл іншої держави. Pkt 5a окремо охоплює pobyt, пов’язаний із виконанням рішення про powrót, виданого іншою державою, що застосовує dyrektywę 2008/115/WE, за умовами цього пункту.`,
        },
        {
          locator: "ust. 1 pkt 8–15",
          explanation: foreignersLaw.text`Стаття також охоплює тимчасове відрядження для послуг, niezwłoczne przekazanie або doprowadzenie, затримання одразу після незаконного перетинання зовнішнього кордону, zaświadczenie ${foreignersLaw.article("170", "Art. 170")}, передачу за міжнародною угодою або Dublin та передачу для кримінального провадження чи виконання позбавлення волі.`,
        },
        {
          locator: "ust. 2–3",
          explanation: foreignersLaw.text`У випадку ${foreignersLaw.article("302", "Art. 302")} ust. 1 pkt 1 рішення не видають до завершення процедури зміни рішення за ${foreignersLaw.article("120", "Art. 120")}; pkt 1 не застосовується у ситуаціях ${foreignersLaw.external("Art. 32 ust. 1 Konwencji dotyczącej statusu uchodźców", REFUGEE_CONVENTION_URL)} або ${foreignersLaw.external("Art. 33 ust. 2 tej Konwencji", REFUGEE_CONVENTION_URL)}.`,
        },
        {
          locator: "ust. 4–7",
          explanation: foreignersLaw.text`Провадження не розпочинають під час розгляду wniosku o ochronę międzynarodową, крім kolejny wniosek; для особи з pkt 9 можливі медичні винятки й допомога за рахунок держави, а в pkt 9 і 11 орган інформує про державу передачі та doprowadza до її кордону, крім ${foreignersLaw.article("303a", "Art. 303a")}.`,
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("303", "Art. 303")} веде до незапочаткування або umorzenie конкретного провадження про повернення, але не є універсальним підтвердженням legalny pobyt чи окремим дозволом на роботу; застосування залежить від точного pkt і доказів.`,
      foreignersCase: foreignersLaw.text`Якщо розпочато повернення, перевірте точний pkt ${foreignersLaw.article("303", "Art. 303")} ust. 1. Для pkt 5a подайте рішення іншої держави й докази того, що pobyt у Польщі пов’язаний із його виконанням, та окремо перевірте ${foreignersLaw.article("302", "Art. 302")} ust. 1 pkt 9 і виконання pouczenia з ${foreignersLaw.article("314a", "Art. 314a")} ust. 1.`,
    },
  ]),
})
