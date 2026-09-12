import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")
const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")
const documents = createEvidenceDocumentTextAuthor()
const workUrl = "https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf"
const visaCodeUrl =
  "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628"

const moduleContent: LegalLearningModule = {
  id: "legalny-pobyt-a-rynek-pracy",
  order: 1,
  title: "Законне перебування не дорівнює доступу до ринку праці",
  polish: "Legalny pobyt; podstawa pobytu; uprawnienie do pracy; warunki pracy",
  provisionScope: workLaw.text`${workLaw.article("2", "Art. 2 pkt 2 lit. a–d")}; ${workLaw.article("3", "art. 3 ust. 1 pkt 6, ust. 2 pkt 1 та ust. 3 pkt 1")}; ${workLaw.article("4", "art. 4 ust. 2–5")}; ${workLaw.article("5", "art. 5 ust. 1")}; ${workLaw.article("17", "art. 17 ust. 1 pkt 1")}; ${workLaw.article("32", "art. 32 ust. 1–2")}; пов'язані правила про мету візи та функцію карти перебування`,
  outcome:
    "Законне перебування відповідає на питання, чи може особа залишатися в Польщі. Доступ до праці потребує застосовної правової підстави, а робота має відповідати її межам. Навіть чинний дозвіл на працю, який збігається з пропозицією роботодавця, не усуває несумісності з підставою перебування.",
  caseQuestion:
    "Чому особа з чинною туристичною візою та дозволом на запропоновану роботу не може розпочати її на перевіреній підставі?",
  placeInWork:
    "Зіставлення документів про перебування і дозволеної роботи до допуску особи до виконання обов'язків.",
  sections: [
    {
      id: "stay-and-its-record",
      title: "Право перебувати та документ про нього",
      paragraphs: [
        "Legalny pobyt означає перебування на застосовній правовій підставі й у її межах. Для висновку на конкретний день мають значення не лише надруковані дати, а й фактичний в'їзд, попередні перебування, використаний строк та події, які могли змінити підставу. Правила перебування і правила допуску до праці відповідають на різні питання.",
        documents.text`${documents.document("visa", "Wiza")} дає змогу встановити видану візу, її межі та мету. Проте саме володіння візою Schengen не гарантує автоматичного права на в'їзд, як прямо передбачає ${workLaw.external("art. 30 Kodeksu wizowego", visaCodeUrl)}. Тому законний фактичний в'їзд не можна вивести тільки з фотографії візової наклейки.`,
        documents.text`${documents.document("administrative-decision", "Рішення про надання дозволу на перебування")} та ${documents.document("residence-card", "karta pobytu")} також виконують різні функції. Рішення встановлює наданий дозвіл. ${foreignersLaw.article("242", "Art. 242 ustawy o cudzoziemcach")} визначає, що чинна карта підтверджує особу під час перебування в Польщі та разом із документом подорожі дає право багаторазово перетинати кордон без отримання візи. Ця функція карти сама не визначає обсяг права на працю.`,
      ],
    },
    {
      id: "identify-work-basis",
      title: "Звідки виникає право на роботу",
      paragraphs: [
        workLaw.text`Закон не вимагає окремого дозволу на працю від кожного іноземця. Наприклад, власник польського zezwolenie na pobyt stały має swobodny dostęp do rynku pracy за ${workLaw.article("3", "art. 3 ust. 1 pkt 6")}. Ця підстава випливає зі встановленого статусу, а не з довільної назви чи самого вигляду картки.`,
        workLaw.text`${workLaw.article("3", "Art. 3 ust. 2 pkt 1")} окремо передбачає роботу в межах перелічених дозволів на тимчасове перебування. Натомість конструкція ${workLaw.article("3", "art. 3 ust. 3")} поєднує дозвіл на працю або зареєстроване oświadczenie з правом перебувати на одній із названих у цьому приписі підстав. Це різні способи встановлення доступу; один перелік не можна механічно підставляти замість іншого.`,
        workLaw.text`За ${workLaw.article("2", "art. 2 pkt 2 lit. a–c")} незаконне перебування, підстава перебування без права працювати та відсутність потрібного дозволу чи oświadczenie є окремими проблемами. Слова «якщо вони потрібні» залишають місце для застосовного звільнення. Водночас наявність дозволу не виправляє автоматично двох інших проблем.`,
      ],
    },
    {
      id: "visa-purpose-compatibility",
      title: "Чинна віза може мати несумісну з роботою мету",
      paragraphs: [
        workLaw.text`Для роботи за дозволом або зареєстрованим oświadczenie візову підставу визначає ${workLaw.article("3", "art. 3 ust. 3 pkt 1")}. Він відсилає до цілей, названих у ${foreignersLaw.article("60", "art. 60 ust. 1 pkt 3–10, 12–13b, 17–21 або 23–24b ustawy o cudzoziemcach")}. Туристична мета належить до ${foreignersLaw.article("60", "art. 60 ust. 1 pkt 1")} і до цього переліку не входить.`,
        "Строк чинності візи та мета її видачі виконують різну роль. День початку роботи може міститися всередині дозволеного строку перебування, але це ще не робить візову підставу придатною для роботи. Позначення C або D також не замінює встановлення мети конкретної візи.",
        documents.text`Отже, ${documents.document("work-permit", "видане zezwolenie na pracę на користь польського суб'єкта")} не переписує мету ${documents.document("visa", "візи")} і не продовжує дозволений нею строк перебування. Якщо особа посилається саме на поєднання цього дозволу з туристичною візою та не має іншої застосовної підстави роботи, необхідної сумісності немає. Це висновок про перевірене поєднання підстав, а не твердження про всі можливі майбутні статуси людини.`,
      ],
    },
    {
      id: "matching-work-and-admission",
      title: "Що дає збіг умов дозволу з пропозицією роботи",
      paragraphs: [
        workLaw.text`Звичайний дозвіл на працю на користь польського суб'єкта за ${workLaw.article("32", "art. 32 ust. 1")} визначає суб'єкта, іноземця, посаду або вид роботи, робочий час, найнижчу винагороду, вид договору та строк чинності. Для тимчасового працівника ${workLaw.article("32", "art. 32 ust. 2")} додає pracodawca użytkownik. Цей перелік не слід перетворювати на універсальний набір полів усіх видів дозволів.`,
        workLaw.text`Збіг цих даних із запропонованою роботою підтверджує відповідність саме перевіреним умовам дозволу. ${workLaw.article("17", "Art. 17 ust. 1 pkt 1")} вимагає врахувати в договорі умови дозволу або зміну, яка не потребує зміни чи нового дозволу. ${workLaw.article("2", "Art. 2 pkt 2 lit. d")} також зберігає випадки дозволеної законом зміни та іншої підстави виконувати роботу. Тому не кожна відмінність має однаковий наслідок. Але навіть повний збіг умов не замінює сумісної підстави перебування.`,
        workLaw.text`${workLaw.article("4", "Art. 4 ust. 2–4")} пов'язує допуск до роботи з пред'явленням чинного документа про перебування й передбачає зберігання його копій та можливість вимагати документ під час роботи. Виняток у ${workLaw.article("4", "art. 4 ust. 5")} охоплює тільки осіб із ${workLaw.article("3", "art. 3 ust. 1 pkt 1–5")}, а не всіх звільнених від дозволу на працю. Перевірка документа має встановити потрібну обставину; саме збереження копії не доводить сумісності візи з роботою.`,
        workLaw.text`Письмовий договір до допуску до роботи є окремою вимогою ${workLaw.article("5", "art. 5 ust. 1")}, з винятком для корпоративних випадків ${workLaw.article("6", "art. 6 ust. 1 pkt 2")}. Підписання договору саме не змінює підстави перебування. Так само внутрішня відмова допустити особу до роботи через встановлену несумісність не є рішенням органу про скасування візи чи дозволу.`,
      ],
    },
  ],
  caseExample: {
    title:
      "Дозвіл відповідає роботі, туристична віза не дає потрібного поєднання",
    facts:
      "Вигаданий приклад. Повнолітній громадянин Індії X законно в'їхав до Польщі 01.09.2026 з туристичною метою. Його польська віза Schengen C чинна 01–30.09.2026 і дозволяє 30 днів перебування. У прикладі встановлено одне фактичне туристичне перебування, відсутність попередніх перебувань, які впливали б на доступний строк, та відсутність скасування візи чи зміни підстави перебування. Компанія A має чинний звичайний дозвіл на працю X на 01.09–31.12.2026. Запропонована робота збігається з особою, роботодавцем та умовами цього дозволу. X не має окремого звільнення чи іншої підстави роботи. Перший робочий день планували на 10 вересня. 8 вересня завершено зіставлення документів, після якого A не допустила X до цієї роботи. За перевіреним планом робота не почалася.",
    sample: {
      kind: "table",
      title: "Porównanie podstaw pobytu i pracy zakończone 08.09.2026",
      note: "Вигадана таблиця робочого висновку. Вибрані відомості не відтворюють офіційного формуляра або всі поля дозволу. «Cel turystyczny» описує встановлену мету; це не твердження про дослівний напис на візовій наклейці.",
      columns: ["Wybrany materiał", "Ustalone dane", "Wniosek"],
      rows: [
        {
          id: "visa",
          cells: [
            "Paszport i polska wiza Schengen C",
            "Ważność 01.09–30.09.2026; dozwolony pobyt 30 dni; cel turystyczny.",
            "Planowany 10.09 mieści się w opisanym okresie pobytu. Daty nie rozstrzygają jeszcze prawa do pracy.",
          ],
        },
        {
          id: "actual-stay",
          cells: [
            "Informacje o rzeczywistym pobycie",
            "Legalny wjazd 01.09.2026; brak wcześniejszych pobytów wpływających na limit; brak zmiany podstawy pobytu.",
            "Legalny pobyt jest ustalonym faktem tego przykładu. Nie wywiedziono go z samego posiadania naklejki wizowej.",
          ],
        },
        {
          id: "issued-permit",
          cells: [
            "Wydane zezwolenie na pracę na rzecz polskiego podmiotu",
            "Podmiot A; cudzoziemiec X; ważność 01.09–31.12.2026. Stanowisko, czas pracy, wynagrodzenie i rodzaj umowy odpowiadają proponowanej pracy.",
            "Zezwolenie dotyczy tej osoby i proponowanej pracy. Nie zmienia turystycznego celu wizy.",
          ],
        },
        {
          id: "completed-admission-result",
          cells: [
            "Propozycja pracy i zakończone porównanie",
            "Planowany początek 10.09.2026; porównanie zakończone 08.09.2026; brak innej podstawy pracy.",
            "Wiza turystyczna nie jest właściwą podstawą pobytu do pracy na podstawie tego zezwolenia. A nie dopuściła X do tej pracy; praca nie została rozpoczęta.",
          ],
        },
      ],
    },
    analysis: documents.text`${documents.document("passport", "Паспорт")} і ${documents.document("visa", "візу")} зіставлено з установленими фактами перебування. ${documents.document("work-permit", "Виданий дозвіл на працю")} відповідав запропонованій роботі, тому проблема не полягала в іншому роботодавці або простроченому дозволі. Вирішальним стало те, що туристична мета з ${foreignersLaw.article("60", "art. 60 ust. 1 pkt 1 ustawy o cudzoziemcach")} відсутня в переліку ${workLaw.article("3", "art. 3 ust. 3 pkt 1 закону про працю іноземців")}. За відсутності іншої підстави праці це поєднання документів не дозволяло почати заплановану роботу.`,
    lesson:
      "Завершений результат перевірки: встановлене законне перебування, дозвіл відповідає запропонованій роботі, але візова підстава несумісна з роботою за цим дозволом. Роботодавець не допустив X до виконання обов'язків. Це не офіційна відмова в дозволі, не скасування візи й не висновок про вже вчинене працівником порушення. Нову можливість працювати потрібно буде оцінити за фактичною новою підставою, якщо вона виникне; саме очікування або підписання договору не виправляє встановленої проблеми.",
  },
}

export const legalStayWorkModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:powierzanie-pracy:legalny-pobyt-a-rynek-pracy",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "powierzanie-pracy",
        moduleId: "legalny-pobyt-a-rynek-pracy",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: workLaw.text`Розрізнення законного перебування, підстави праці та відповідності умов за ${workLaw.external("чинним офіційним текстом Dz.U. 2025 poz. 621", workUrl)}; перевірено 12.09.2026 у зазначеному обсязі.`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-powierzanie-pracy",
            },
            locator:
              "Art. 2 pkt 2 lit. a–d; art. 3 ust. 1 pkt 6, ust. 2 pkt 1 and ust. 3 (visa point 1); art. 4 ust. 2–5; art. 5 ust. 1; art. 6 ust. 1 pkt 2; art. 17 ust. 1 pkt 1; art. 32 ust. 1–2. Connected: foreigners act art. 60 ust. 1 and art. 242; Visa Code art. 30.",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-09-12",
      verifiedAt: "2026-09-12",
    },
    body: moduleContent,
  })

export default legalStayWorkModuleTopic
