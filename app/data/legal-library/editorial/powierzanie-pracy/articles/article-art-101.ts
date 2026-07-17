import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-101",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 101 pkt 1 замінює в art. 2 ust. 8 ustawy o pomocy obywatelom Ukrainy посилання на art. 87 ust. 1 pkt 6 старої ustawy o promocji zatrudnienia посиланням на art. 3 ust. 1 pkt 12 нової ustawy.",
          sourceLocator: "Art. 101 pkt 1",
        },
        {
          kind: "statute-text",
          text: "За art. 101 pkt 2 lit. a–b podmiot powierzający pracę cudzoziemcowi повідомляє powiatowy urząd pracy протягом 7 днів від початку роботи громадянина України та повторює повідомлення протягом 7 днів після визначених змін: виду umowy, stanowiska або виду роботи, зменшення часу чи годин роботи, або зниження ставки.",
          sourceLocator:
            "Art. 101 pkt 2 lit. a–b, art. 22 ust. 1 pkt 2 і ust. 2 ustawy o pomocy obywatelom Ukrainy",
        },
        {
          kind: "statute-text",
          text: "Art. 101 pkt 2 lit. b передбачає, що обов’язок повідомлення не стосується випадків з art. 3 ust. 1–3 і 5 ustawy o warunkach dopuszczalności powierzania pracy cudzoziemcom.",
          sourceLocator:
            "Art. 101 pkt 2 lit. b, art. 22 ust. 3 ustawy o pomocy obywatelom Ukrainy",
        },
        {
          kind: "statute-text",
          text: "Art. 101 pkt 2 lit. g передбачає, що Minister właściwy do spraw pracy може розпорядженням визначити співвідношення кількості громадян України, яким podmiot може доручити роботу, до кількості всіх осіб, яким цей podmiot доручає роботу.",
          sourceLocator:
            "Art. 101 pkt 2 lit. g, art. 22 ust. 17 ustawy o pomocy obywatelom Ukrainy",
        },
        {
          kind: "practical-inference",
          text: "Повідомлення є окремою вимогою спеціального режиму для громадян України: воно не замінює перевірку legalnego pobytu та не є саме по собі підставою для перебування.",
          sourceLocator:
            "Art. 101 pkt 2 lit. a–c, e–f; art. 22 ust. 1 pkt 1 ustawy o pomocy obywatelom Ukrainy",
        },
      ],
      summary:
        "Стаття пристосовує спеціальні правила праці громадян України до нової ustawy. Вона визначає строк і зміст powiadomienia, окремі винятки, наслідок недотримання умов повідомлення та можливість встановлення співвідношення працівників розпорядженням.",
      rules: [
        {
          locator: "pkt 2 lit. a–b, art. 22 ust. 1 pkt 2 і ust. 2",
          explanation:
            "Podmiot powierzający pracę подає powiadomienie до właściwego powiatowego urzędu pracy протягом 7 днів від початку роботи. Повторне повідомлення потрібне протягом 7 днів після кожної названої в законі зміни: виду umowy, stanowiska або виду роботи, зменшення wymiaru czasu pracy чи кількості годин, або зниження ставки wynagrodzenia.",
        },
        {
          locator: "pkt 2 lit. b, art. 22 ust. 3",
          explanation:
            "Виняток охоплює випадки, названі в art. 3 ust. 1–3 і 5 нової ustawy. Спершу треба кваліфікувати конкретну підставу, а не припускати, що виняток стосується кожного працевлаштування громадянина України.",
        },
        {
          locator: "pkt 2 lit. c, art. 22 ust. 5–6",
          explanation:
            "Якщо громадянин України почав роботу відповідно до art. 87 старої ustawy або art. 3 ust. 1–3 нової ustawy до видачі zezwolenia na pobyt czasowy i pracę та хоче продовжити її для того самого podmiotu на умовах ust. 1, powiadomienie подається протягом 7 днів від передання інформації за ust. 6.",
        },
        {
          locator: "pkt 2 lit. e–f, art. 22 ust. 8–9 і ust. 14",
          explanation:
            "Повідомлення подається через визначену систему teleinformatyczny і містить дані podmiotu, громадянина, umowy, роботи, місця, винагороди та часу, а також кількість усіх осіб, які працюють за umowa o pracę і umowy cywilnoprawne, станом на 23 лютого 2022 року та на день powiadomienia. Недотримання умов з ust. 1 pkt 2–5 і ust. 2 означає, що art. 84 ust. 2 нової ustawy не застосовується.",
        },
        {
          locator: "pkt 2 lit. g, art. 22 ust. 17",
          explanation:
            "Minister właściwy do spraw pracy може розпорядженням визначити співвідношення кількості громадян України, яким podmiot доручає роботу, до кількості всіх осіб, яким він доручає роботу. Це делегація для можливого розпорядження, а не автоматично встановлена квота в самому art. 101.",
        },
      ],
      legalEffect:
        "Стаття уточнює спеціальний режим powiadomienia для громадян України: визначає його умови, технічний спосіб подання та наслідок порушення, а також дозволяє встановити співвідношення працівників розпорядженням. Саме powiadomienie не є підставою для перебування і не скасовує перевірку всіх умов legalnej pracy.",
      foreignersCase:
        "У справі перевірте дату початку роботи, podmiot, вид umowy, stanowisko, місце, ставку й час, а також кожну зміну та дату powiadomienia. Окремо перевірте документ і строк legalnego pobytu: виконання powiadomienia не доводить саме по собі право перебування. Якщо застосовується обмеження за art. 22 ust. 17, перевірте відповідне rozporządzenie.",
    },
  ]),
})
