import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-64a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("64a", "Art. 64a")} встановлює спеціальні умови wizy krajowej для навчання, досліджень, стажування й волонтерства. Для wiza krajowa з adnotacją „student” потрібне zaświadczenie закладу про прийняття або продовження навчання, а сама одиниця повинна мати належний статус.`,
          sourceLocator: "Art. 64a ust. 1–12",
        },
      ],
      summary:
        "Стаття зв’язує мету візи з реальною установою та документами, які описують навчання або іншу діяльність. Лист про прийняття без перевірки установи й інших умов не гарантує візи.",
      rules: [
        {
          locator: "Art. 64a ust. 1–1b, 10–12",
          explanation: foreignersLaw.text`Для wiza krajowa з adnotacją „student” заявник виконує відсильні умови ${foreignersLaw.article("144", "Art. 144")} і подає встановлене zaświadczenie. Воно містить дані особи, закладу, програми й перебігу навчання; при продовженні додається karta okresowych osiągnięć studenta. У випадку окремих іноземних освітніх документів потрібна також інформація за ${foreignersLaw.external("Art. 326a ust. 4 Prawa o szkolnictwie wyższym i nauce", "https://eli.gov.pl/eli/DU/2024/1571/ogl")}.`,
        },
        {
          locator: "Art. 64a ust. 2–5",
          explanation: foreignersLaw.text`Для досліджень потрібна umowa з належною jednostką naukową та умови ${foreignersLaw.article("151", "Art. 151")}; для stażu — умови ${foreignersLaw.article("157a", "Art. 157a")} й затверджений organizator, причому віза не довша за 6 місяців; для wolontariatu — умови ${foreignersLaw.article("157g", "Art. 157g")} і належна jednostka organizacyjna.`,
        },
        {
          locator: "Art. 64a ust. 6–9",
          explanation:
            "Спеціальні правила дозволяють у названих ситуаціях продовжити навчання або дослідження після рішень щодо установи та регулюють наступну візу. Їх не слід перетворювати на загальний виняток для будь-якої незатвердженої одиниці.",
        },
      ],
      legalEffect:
        "Орган оцінює разом мету, умови особи, статус установи та зміст установленого документа. Наявність одного zaświadczenia не усуває решти вимог візової справи.",
      foreignersCase: foreignersLaw.text`Визначте точний пункт ${foreignersLaw.article("60", "Art. 60")} ust. 1, перевірте статус установи на дату рішення й прочитайте зміст zaświadczenia. Для продовження навчання додайте kartę osiągnięć, а кожну відсильну умову підтвердьте окремим доказом.`,
    },
  ],
})
