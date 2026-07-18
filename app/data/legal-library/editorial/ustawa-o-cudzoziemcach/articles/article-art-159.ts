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
      provisionId: "ustawa-o-cudzoziemcach-art-159",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("159", "Art. 159")} ust. 1 вимагає сукупного виконання трьох умов для zezwolenie na pobyt czasowy w celu połączenia się z rodziną; ust. 3–5 визначають членів сім'ї та спеціальні категорії родичів для uchodźca або особи з ochroną uzupełniającą.`,
          sourceLocator: "Art. 159 ust. 1–5",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("159", "Art. 159")} містить спеціальні винятки: для окремих сімей uchodźca або особи з ochroną uzupełniającą діє 6-місячний строк, для визначеної сім'ї в ust. 5 не застосовуються вимоги про дохід і житло, а для сім'ї власника Niebieskiej Karty UE діє виняток щодо доходу та житла.`,
          sourceLocator: "Art. 159 ust. 2–2b, ust. 5",
        },
      ],
      summary:
        "Połączenie się z rodziną можливе лише за сукупності статусу osoby referencyjnej, родинного зв'язку та загальних умов, якщо конкретний виняток не скасовує дохід або житло.",
      rules: [
        {
          locator: "ust. 1 pkt 1 lit. a–i",
          explanation: foreignersLaw.text`Osoba referencyjna повинна мешкати в Польщі на одній із прямо перелічених підстав: pobyt stały, pobyt rezydenta długoterminowego UE, status uchodźca, ochrona uzupełniająca, визначений 2-річний ланцюг дозволів, дозволи з ${foreignersLaw.article("151", "art. 151")}, ${foreignersLaw.article("151b", "art. 151b")}, praca w zawodzie wymagającym wysokich kwalifikacji, ICT, mobilność ICT, ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 7, права за Umowa Wystąpienia, mobilność długoterminowa posiadacza Niebieskiej Karty UE або zgoda na pobyt ze względów humanitarnych.`,
        },
        {
          locator: "ust. 1 pkt 2–3",
          explanation:
            "Заявник має мати ubezpieczenie zdrowotne, джерело stabilnego i regularnego dochodu на себе та утриманців і забезпечене місце проживання в Польщі. Умова про приїзд або перебування для połączenia з сім'єю також має бути встановлена.",
        },
        {
          locator: "ust. 2–2b",
          explanation: foreignersLaw.text`Вимоги про дохід і житло не застосовуються до сім'ї osoby зі status uchodźca або ochroną uzupełniającą, якщо заява подана протягом 6 місяців; також вони не застосовуються до сім'ї з ust. 5. Для сім'ї власника дозволу на mobilność długoterminowa posiadacza Niebieskiej Karty UE виняток щодо dochód і житла діє лише коли сім'ю створено в державі, що видала документ „Niebieska Karta UE”.`,
        },
        {
          locator: "ust. 3–3b",
          explanation:
            "Звичайне поняття члена сім'ї охоплює визнане польським правом подружжя та визначених małoletnie dzieci, зокрема усиновлених; статус дитини визначається на день відповідної заяви, а для сім'ї uchodźca або ochroną uzupełniającą — за спеціальним правилом і 3-місячним строком.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Для małoletni bez opieki зі статусом uchodźca або ochroną uzupełniającą членом сім'ї може бути wstępny w linii prostej або повнолітня відповідальна особа за польським правом; потрібні умови щодо відсутності опіки та подання протягом 6 місяців, названі в нормі.",
        },
        {
          locator: "ust. 5",
          explanation:
            "Спеціально охоплено батька, якщо osoba referencyjna була małoletni bez opieki у день подання заяви на сімейний дозвіл, і брата або сестру, повністю та постійно залежних від батьків через тяжку хворобу, коли ці батьки вже належать до визначеної категорії та отримали дозволи.",
        },
      ],
      legalEffect:
        "Родинний зв'язок не гарантує zezwolenia: орган має перевірити статус osoby referencyjnej, усі сукупні умови, застосовний виняток і підстави відмови.",
      foreignersCase:
        "Складіть доказову схему: статус osoby referencyjnej, дата й мета połączenie, родинний зв'язок, страховка, dochód, житло та строковий виняток для захисту або Niebieskiej Karty UE; окремо зафіксуйте, чи дитина була małoletnia у потрібний день.",
    },
  ],
})
