import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KnowledgeClaim } from "~/data/legal-knowledge/contracts"

const law = createLegalTextAuthor("kpa")
const specialActUrl = "https://eli.gov.pl/eli/DU/2025/337/ogl"
const ministryUrl =
  "https://bip.brpo.gov.pl/sites/default/files/2026-08/Odpowiedz_MSWiA_cudzoziemcy_legalizacja_pobytu_przewleklosc_30_06_2026.pdf"
const judgmentUrl = "https://orzeczenia.nsa.gov.pl/doc/1E120C483B"

export const residenceOfficeDeadlines = {
  caseConsequence: law.text`За ${law.external("art. 100d", specialActUrl)} строк вирішення цієї справи wojewodą до 04.03.2027 не починається або зупиняється. Орган може продовжувати розгляд; строки заявника на відповідь і оскарження залишаються окремими. Норма обмежує засоби проти затримки, але це не остаточна відповідь щодо судового захисту. У ${law.external("листі MSWiA від 30.06.2026", ministryUrl)} розрізнено обов'язок Szefa UdSC застосовувати норму при розгляді ponaglenia та можливість суду не застосувати її до затримки після 30.06.2024. Результат конкретної скарги цим не визначено.`,
  statutoryRule: law.text`У справах, перелічених у ${law.external("art. 100d", specialActUrl)} спецзакону про допомогу громадянам України, строки вирішення справи wojewodą до 04.03.2027 не починаються, а розпочаті зупиняються. Перелік охоплює надання й відкликання дозволів на тимчасове, постійне перебування та статус rezydenta długoterminowego UE, а також зміну дозволу на перебування і працю та Blue Card. Саме формулювання переліку не обмежує його лише громадянами України. Правило стосується провадження перед wojewodą; його не переносять автоматично на апеляційний розгляд Szefem UdSC.`,
  statutoryLimits: law.text`За буквальним текстом ${law.external("art. 100d ust. 3–4", specialActUrl)} у цей період не застосовують визначені правила про бездіяльність і повідомлення про затримку, грошові санкції та засоби захисту від затримки. Це не зупинення всього провадження: вчинені дії залишаються чинними, орган може видати рішення. Строк заявника на відповідь чи оскарження сам собою не зупиняється.`,
  courtDistinction: law.text`Судова оцінка відрізняється від застосування цього правила адміністрацією. У ${law.external("відповіді MSWiA від 30.06.2026", ministryUrl)} міністерство пояснило, що Szef UdSC далі зобов'язаний застосовувати норму при розгляді ponagleń, але суд може відмовитися застосовувати її до затримки після 30.06.2024. Це позиція міністерства з урахуванням судової практики, а не скасування норми чи обіцянка виграшу скарги.`,
  courtExample: law.text`Конкретний приклад містить ${law.external("рішення WSA w Poznaniu від 12.03.2026, II SAB/Po 314/25", judgmentUrl)}. Суд розглянув скаргу попри заперечення wojewody про зупинення строків, установив бездіяльність і зобов'язав завершити справу протягом 60 днів від отримання органом копії остаточного судового рішення разом із матеріалами. Водночас суд не визнав порушення грубим та відмовив у грошових санкціях, хоча присудив повернення судових витрат. На дату перевірки 06.09.2026 CBOSA позначає рішення як nieprawomocne, тобто таке, що ще не набрало законної сили. Його висновок не означає автоматичного надання дозволу.`,
} as const

export const residenceOfficeDeadlineClaims = [
  {
    id: "residence-office-suspension",
    kind: "statute-text",
    text: residenceOfficeDeadlines.statutoryRule,
    basis: [
      {
        reference: { kind: "external", url: specialActUrl },
        locator: "Art. 100d ust. 1–4",
      },
    ],
  },
  {
    id: "ministry-and-court-distinction",
    kind: "official-guidance",
    text: residenceOfficeDeadlines.courtDistinction,
    basis: [
      {
        reference: { kind: "external", url: ministryUrl },
        locator: "p. 9, reply of 30.06.2026",
      },
    ],
  },
  {
    id: "nonfinal-delay-judgment",
    kind: "case-law",
    text: residenceOfficeDeadlines.courtExample,
    basis: [
      {
        reference: { kind: "external", url: judgmentUrl },
        locator:
          "II SAB/Po 314/25, operative part and reasons; nonfinal status checked 06.09.2026",
      },
    ],
  },
] as const satisfies readonly KnowledgeClaim[]
