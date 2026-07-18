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
      provisionId: "ustawa-o-cudzoziemcach-art-186",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("186", "Art. 186")} ust. 1 містить дев'ять підстав для zezwolenie na pobyt czasowy ze względu na inne okoliczności: сім'я мігранта або osoba prowadząca działalność na własny rachunek, малолітня дитина без опіки, народжена в Польщі, rezydent długoterminowy UE іншої держави та його сім'я, права за Decyzja 1/80, випускник польського університету, колишній naukowiec, визначений громадянин Zjednoczonego Królestwa і особа з wiza krajowa для мети, названої в законі.`,
          sourceLocator: "Art. 186 ust. 1 pkt 1–9",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Пункти 8–9 мають часові або підзаконні умови: UK-підстава застосовується лише за заявою не пізніше 31 грудня 2021 року, а для pkt 9 minister może określić громадянства в rozporządzenie. ${foreignersLaw.article("186", "Art. 186")} ust. 2–3 також містять відсилання до Europejskiej Karty Społecznej та ${foreignersLaw.article("159", "art. 159")} ust. 3.`,
          sourceLocator: "Art. 186 ust. 2–5",
        },
      ],
      summary:
        "Стаття має закритий перелік «інших обставин»; для кожного pkt потрібні власні факти, документи та, в окремих випадках, історична дата заяви.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Пункти охоплюють сім'ю визначеного мігруючого працівника або osoba prowadząca działalność na własny rachunek, małoletnie dziecko, народжену в Польщі без опіки, rezydenta długoterminowego UE з іншої держави та його члена сім'ї, який супроводжує або приєднується.",
        },
        {
          locator: "ust. 1 pkt 5",
          explanation:
            "Потрібно мати право на роботу в Польщі за Decyzja nr 1/80 Rady Stowarzyszenia Republiki Tureckiej i EWG; сам факт громадянства Туреччини без такого uprawnienie недостатній.",
        },
        {
          locator: "ust. 1 pkt 6–7",
          explanation:
            "Pkt 6 стосується absolwent polskiej uczelni, який шукає роботу або планує бізнес. Pkt 7 — особи, яка безпосередньо перед заявою мала zezwolenie na pobyt czasowy w celu prowadzenia badań naukowych, завершила дослідження або роботи rozwojowe і шукає роботу або планує бізнес.",
        },
        {
          locator: "ust. 1 pkt 8–9",
          explanation:
            "Pkt 8 охоплює визначеного громадянина UK, який до 31.12.2020 працював у Польщі як працівник, відряджений іноземним роботодавцем; pkt 9 — особу, яка безпосередньо перед заявою мала wiza krajowa для прямо названої мети та громадянство з ministerialnego rozporządzenia.",
        },
        {
          locator: "ust. 2–3",
          explanation: foreignersLaw.text`Для сім'ї за pkt 1 застосовується załącznik до EKS у частині, що стосується члена сім'ї. Для сім'ї rezydenta długoterminowego UE за pkt 3 застосовуються правила про членів сім'ї з ${foreignersLaw.article("159", "art. 159")} ust. 3.`,
        },
        {
          locator: "ust. 4–5",
          explanation:
            "Пункт 8 має історичний cut-off: заява повинна бути подана не пізніше 31.12.2021. Для pkt 9 minister może визначити перелік громадянств у rozporządzenie з огляду на польську міграційну політику; не вигадуйте цей перелік із самої статті.",
        },
      ],
      legalEffect: foreignersLaw.text`Надання за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 1–7 і 9 залежить від точного складу, а pkt 8 нині має обмеження датою; загальна життєва складність не є універсальним pkt.`,
      foreignersCase:
        "Спочатку оберіть конкретний pkt, потім складіть доказову таблицю статусу, дат, мети, права на роботу чи навчання та документів; для pkt 8 перевірте дату подання, а для pkt 9 — чинне rozporządzenie про громадянства.",
    },
  ],
})
