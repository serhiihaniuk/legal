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
      provisionId: "ustawa-o-cudzoziemcach-art-64a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("64a", "Art. 64a")} встановлює спеціальні умови для wiza krajowa з adnotacja „student” за ${foreignersLaw.article("60", "Art. 60")} ust. 1 pkt 9, а також для цілей pkt 13, 13a і 13b; умови відсилають, зокрема, до ${foreignersLaw.article("144", "Art. 144")}, ${foreignersLaw.article("144a", "144a")}, ${foreignersLaw.article("151", "151")}, ${foreignersLaw.article("157a", "157a")} і ${foreignersLaw.article("157g", "157g")}.`,
          sourceLocator: "Art. 64a ust. 1–5",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("64a", "Art. 64a")} ust. 6–9 зберігає окремі можливості продовження навчання або досліджень після рішень за ${foreignersLaw.article("144b", "Art. 144b")} чи ${foreignersLaw.article("151a", "Art. 151a")} та передбачає одноразове незастосування вимоги затвердження у визначеній справі.`,
          sourceLocator: "Art. 64a ust. 6–9",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("64a", "Art. 64a")} визначає спеціальні підстави для студентської, наукової, стажувальної та волонтерської wiza krajowa. Для „student” важливі умови ${foreignersLaw.article("144", "Art. 144")} і статус uczelnia; для науковця — umowa з zatwierdzona jednostka naukowa; для staż і wolontariat — умови та zatwierdzenie відповідних організаторів. Строк візи для staż не може перевищувати 6 місяців.`,
      rules: [
        {
          locator: "Art. 64a ust. 1–1b",
          explanation: foreignersLaw.text`Wiza з adnotacja „student” можлива за умов ${foreignersLaw.article("144", "Art. 144")} ust. 1 pkt 1 і pkt 2 lit. b, якщо uczelnia затверджена за ${foreignersLaw.article("144", "Art. 144")} або щодо незатверджуваної одиниці немає zakaz przyjmowania cudzoziemców за ${foreignersLaw.article("144a", "Art. 144a")}; для документа не-${foreignersLaw.external("Art. 326a", "https://eli.gov.pl/eli/DU/2024/1571/ogl")} потрібна письмова інформація за ${foreignersLaw.external("Art. 326a", "https://eli.gov.pl/eli/DU/2024/1571/ogl")} ust. 4, а organ повідомляє rektor або kierownik.`,
        },
        {
          locator: "Art. 64a ust. 2",
          explanation: foreignersLaw.text`Для ${foreignersLaw.article("60", "Art. 60")} ust. 1 pkt 13 потрібні umowa за ${foreignersLaw.article("151", "Art. 151")} ust. 1 pkt 2 із затвердженою jednostka naukowa та умови ${foreignersLaw.article("151", "Art. 151")} ust. 1 pkt 1 lit. b і c.`,
        },
        {
          locator: "Art. 64a ust. 3–5",
          explanation: foreignersLaw.text`Для staż за pkt 13a потрібні умови ${foreignersLaw.article("157a", "Art. 157a")} і zatwierdzenie organizator stażu, а строк — необхідний для umowa, не довше 6 місяців; для wolontariat за pkt 13b потрібні умови ${foreignersLaw.article("157g", "Art. 157g")} і zatwierdzenie jednostka organizacyjna.`,
        },
        {
          locator: "Art. 64a ust. 6–9",
          explanation: foreignersLaw.text`Перехідні правила дозволяють продовжити навчання або дослідження у визначених одиницях після рішень ${foreignersLaw.article("144b", "Art. 144b")} чи ${foreignersLaw.article("151a", "Art. 151a")} та в одному випадку не застосовувати вимогу затвердження повторно.`,
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("64a", "Art. 64a")} не гарантує видачу візи лише через прийняття на навчання, umowa або назву стажу: потрібні всі відсильні умови й статус установи. Він також визначає спеціальні строки, повідомлення і перехідні винятки.`,
      foreignersCase: foreignersLaw.text`Для заяви визначте pkt ${foreignersLaw.article("60", "Art. 60")} і adnotacja, перевірте затвердження uczelnia/jednostka/organizator, потрібні umowa та строки; окремо зберігайте доказ для кожної умови ${foreignersLaw.article("144", "Art. 144")}, ${foreignersLaw.article("151", "151")}, ${foreignersLaw.article("157a", "157a")} або ${foreignersLaw.article("157g", "157g")}.`,
    },
  ],
})
