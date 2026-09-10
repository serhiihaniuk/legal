import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { documentSources, foreignersLaw } from "../authoring"

const documents = createEvidenceDocumentTextAuthor()
const US7_URL = "https://www.zus.pl/en/-/wniosek-us-7"
const HISTORY_URL =
  "https://www.zus.pl/en/-/jak-uzyskac-zaswiadczenie-o-przebiegu-ubezpieczen-spolecznych"
const REPORTS_URL =
  "https://www.zus.pl/en/firmy/rozliczenia-z-zus/dokumenty-rozliczeniowe"
const NO_ARREARS_URL =
  "https://www.zus.pl/en/baza-wiedzy/katalog-uslug/katalog-uslug-firmy/rozliczenia-skladek/rozliczenia-na-koncie-platnika/zaswiadczenie-o-niezaleganiu-w-oplacaniu-skladek"

const guide: DocumentGuide = {
  id: "zus-insurance-history",
  title: "Zaświadczenie o przebiegu ubezpieczeń: історія страхування ZUS",
  category: "work",
  kind: "document",
  aliases: ["US-7", "zaświadczenie o przebiegu ubezpieczeń"],
  description:
    "Іменна довідка ZUS про історію страхування заявника за визначений період. Для перевірки доходу резидента запитують періоди, платників і помісячні бази внесків. Цей гайд пояснює саме цю довідку: як замовити її через US-7 та прочитати отриману відповідь.",
  preparedBy:
    "ZUS видає довідку на запит застрахованої особи або її представника. Роботодавці передають до ZUS дані, але довідку про повну історію після зміни роботодавця запитують у ZUS.",
  purpose: [
    "Показує страховий облік конкретної людини, його періоди та дані про бази нарахування внесків у межах виданого документа.",
  ],
  doesNotProve: [
    "База внесків не є сумою зарплати netto, переказом на рахунок або підтвердженням сплати всіх внесків. Страховий запис також не встановлює законність перебування чи роботи.",
  ],
  explanation: [
    {
      id: "which-zus-document",
      title: "Яка довідка потрібна для історії заявника",
      paragraphs: [
        "Якщо потрібна історія особи за кілька років, доречне zaświadczenie o przebiegu ubezpieczeń з конкретно замовленими відомостями. US-7 є заявою про його видачу, а не самою довідкою. У запиті називають людину, часові межі, платників і потрібні дані. Фраза «довідка ZUS для карти» не визначає цього обсягу.",
        documents.text`Поточний запис про медичне страхування не містить автоматично попередніх років. ${documents.document("zus-no-arrears", "Zaświadczenie o niezaleganiu w opłacaniu składek")} стосується боргів платника. Воно є окремим документом і не замінює потрібної тут історії заявника.`,
        foreignersLaw.text`У справі rezydenta UE ${foreignersLaw.article("211", "Art. 211 ust. 1 pkt 1–2 і ust. 2")} розділяє дохід і медичне страхування. Дохід зазвичай перевіряють за три роки перед поданням; два роки стосуються спеціального випадку ${foreignersLaw.article("212", "Art. 212 ust. 1 pkt 1")}. П'ятирічний строк перебування не означає автоматичної вимоги п'яти років внесків ZUS. Закон не називає US-7 універсальним обов'язковим додатком.`,
        documents.text`Історія ZUS допомагає зіставити зайнятість із ${documents.document("income-evidence", "доказами доходу")}. Окремо встановлюють ${documents.document("health-insurance", "медичне страхування")}. Навіть повний страховий облік не відповідає сам по собі на питання, чи був дохід стабільним, регулярним і достатнім.`,
      ],
    },
    {
      id: "us7-request-scope",
      title: "US-7: що написати в запиті",
      paragraphs: [
        "У формі обирають zaświadczenie, коли потрібне офіційне підтвердження для іншого органу, або informacja для отримання відомостей про свій облік. Серед полів є періоди соціального страхування, перерви у внесках і podstawy wymiaru składek, бази їх нарахування. Додатковий зміст можна описати в полі w innej.",
        "На другій сторінці визначають період і платника. Без обмеження періоду запит охоплює всі періоди, а без обмеження платника дані щодо всіх платників. Для історії після зміни роботи це має значення: запит лише про останню компанію залишить попередню роботу поза відповіддю.",
      ],
      example: {
        title: "Запит на історію після зміни роботодавця",
        facts: [
          "Умовний приклад. Для матеріалів справи працівник збирає відомості за 01.09.2023–31.08.2026. У цей час заявник змінив роботодавця. Підтвердження з eZUS містить лише поточну реєстрацію. Заявник підготував US-7 з уточненим обсягом.",
        ],
        sample: {
          kind: "letter",
          title: "Зміст полів US-7 у цьому прикладі",
          note: "Вигаданий заповнений фрагмент, не офіційний бланк. Особу визначають у відповідних полях заяви; персональні дані тут не відтворено. Період добирають до конкретної справи.",
          language: "pl",
          paragraphs: [
            "Rodzaj dokumentu: zaświadczenie. Okres: od 01.09.2023 r. do 31.08.2026 r. Wniosek dotyczy wszystkich płatników składek w tym okresie.",
            "Proszę o potwierdzenie okresów podlegania ubezpieczeniom społecznym, przerw w opłacaniu składek oraz miesięcznych podstaw wymiaru składek, z rozróżnieniem rodzaju ubezpieczenia i płatnika.",
            "Dodatkowy zakres: proszę również o dane dotyczące okresów zgłoszenia do ubezpieczenia zdrowotnego w tym przedziale oraz aktualnego zgłoszenia według stanu na dzień wydania zaświadczenia.",
            "Uzasadnienie: dokument potrzebny do wykazania przebiegu ubezpieczenia i porównania danych o zatrudnieniu z dokumentami dochodowymi w postępowaniu o pobyt rezydenta długoterminowego UE.",
          ],
        },
        reasoning: [
          "Запит визначає історичний період, обох платників і види відомостей. Поточний страховий запис названо окремо. Після видачі довідки працівник перевірить, чи ZUS надав увесь запитаний обсяг; описане прохання ще не встановлює жодного страхового факту.",
        ],
        conclusion:
          "Підготовлено конкретний запит замість прохання про будь-який документ ZUS. Доказом стануть отримані відомості, а не сам US-7 чи підтвердження його відправлення.",
      },
    },
    {
      id: "read-issued-history",
      title: "Як прочитати отриману історію страхування",
      paragraphs: [
        "Спочатку звіряють особу й часові межі довідки. Далі читають платників, види страхування, дати реєстрації та припинення, перерви і місячні бази. Якщо у запиті були всі платники, а відповідь показує лише останнього роботодавця, потрібно з'ясувати причину неповного обсягу.",
        "Podstawa wymiaru składek означає суму, від якої обчислюють внески для відповідного виду страхування. Це не сума виплаченої зарплати netto. Різні бази в одному місяці не слід складати як окремі доходи. Показані бази також не є підтвердженням фактичного погашення всіх внесків.",
        "За відсутнього місяця чи розбіжності ZUS або платник пояснює дані й можливі коригування. Іменний звіт RCA може допомогти розібрати конкретний місяць. Зведена DRA роботодавця не замінює іменної історії; підприємець, який звітує лише за себе, має іншу структуру звітності.",
      ],
      example: {
        title: "Зміна роботодавця у виданій довідці",
        facts: [
          "Умовний приклад. ZUS видав довідку за запитаний період. У цьому фрагменті показано перехід від одного роботодавця до іншого. Решта довідки містить інші місяці, які аналізують окремо.",
        ],
        sample: {
          kind: "table",
          title: "Читання двох записів однієї довідки ZUS",
          note: "Вигаданий скорочений витяг. Це фрагмент одного документа про історію, а не перелік документів для збирання. Платники позначені умовно; суми не є розрахунком зарплати.",
          columns: ["Період і платник", "Запис у довідці", "Що встановлено"],
          rows: [
            {
              id: "previous-employer",
              cells: [
                "01/2026, płatnik A",
                "Podstawa wymiaru składek emerytalnych: 6 000 zł",
                "Іменні дані за січень у попереднього платника. Суму зарплати на рахунку цей запис не визначає.",
              ],
            },
            {
              id: "new-employer",
              cells: [
                "02/2026, płatnik B",
                "Podstawa wymiaru składek emerytalnych: 6 400 zł",
                "Іменні дані за лютий у нового платника. Зміна бази сама по собі не пояснює причини зміни доходу.",
              ],
            },
          ],
        },
        reasoning: [
          "Обидва платники є в довідці, тому відомості про попереднього роботодавця не втрачено. Дати переходу звірено з договорами, а суми фактичних виплат перевіряють за розрахунками й банком. Два наведені записи не замінюють аналізу повного періоду.",
        ],
        conclusion:
          "Фрагмент показує, як у довідці відображені місяці й платники. Висновок про регулярність та достатність доходу потребує решти історії й документів про сам дохід.",
      },
    },
    {
      id: "origin-and-scope",
      title: "Повнота історії та перевірка файла",
      paragraphs: [
        "Для електронної відповіді зберігають повний отриманий файл із даними перевірки походження. Скриншот кабінету або підтвердження надсилання US-7 не замінює відповіді. Дата видачі й період, який охоплює довідка, виконують різні ролі.",
        "Якщо в історії бракує місяця або дані розходяться з матеріалами роботи, потрібно встановити причину в ZUS і платника. Прогалина може вимагати пояснення чи коригування звіту. Її не заповнюють сумою сусіднього місяця і не оголошують автоматично доказом нелегальної роботи.",
      ],
    },
  ],
  howToObtain: [
    'Для історії через US-7: у каталозі послуг свого електронного кабінету ZUS оберіть "Złożenie dokumentu US-7", заповніть обсяг і спосіб отримання відповіді, підпишіть та надішліть. Офіційна інструкція ZUS також дозволяє подати підписаний US-7 або письмовий запит у відділенні чи поштою.',
    "Отримайте відповідь обраним способом і звірте її з обсягом US-7. Для історії доходу довідка лише про поточну реєстрацію не є повною відповіддю.",
  ],
  formAndValidity: [
    "US-7 і підтвердження його подання зберігають окремо від відповіді ZUS. У відповіді перевіряють особу, весь запитаний період, платників і види страхування.",
    "Дата видачі та період відомостей виконують різні ролі. Свіжа довідка лише про поточну реєстрацію не підтверджує попередні роки.",
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.article("211", "Art. 211 ust. 1 pkt 1–2 і ust. 2")}, ${foreignersLaw.article("212", "Art. 212 ust. 1 pkt 1")}: дохід, медичне страхування й період перевірки доходу для rezydenta UE.`,
    "US-7 та послуги eZUS визначають спосіб отримання відомостей з обліку; вони не встановлюють самостійних умов дозволу на перебування.",
  ],
  keyChecks: [
    "Отримано іменну довідку про історію саме заявника за запитаний період?",
    "Відповідь стосується саме заявника, всіх потрібних платників і повного періоду?",
    "Бази розділено за видом страхування; їх не прирівняно до зарплати netto або сплачених внесків?",
    "Отримано відповідь ZUS, а не лише US-7; прогалини й виправлення мають конкретне пояснення?",
  ],
  relatedDocuments: [
    "health-insurance",
    "employment-contract",
    "zus-no-arrears",
    "income-evidence",
  ],
  sources: [
    {
      label: "ZUS: форма US-7",
      url: US7_URL,
      note: "Вибір довідки або інформації, видів даних, періоду і платника; поле додаткового обсягу.",
    },
    {
      label: "ZUS: довідка про перебіг страхування",
      url: HISTORY_URL,
      note: "Подання US-7 через каталог послуг, у відділенні або поштою. Сторінка ще використовує назву PUE для електронного кабінету.",
    },
    documentSources.zus,
    {
      label: "ZUS: розрахункові документи",
      url: REPORTS_URL,
      note: "Іменний RCA, декларація DRA та відмінність звітності підприємця за себе.",
    },
    {
      label: "ZUS: довідка про відсутність боргу",
      url: NO_ARREARS_URL,
      note: "Запит RWN і стан рахунку платника внесків.",
    },
    {
      label: "ZUS: реєстрація застрахованої особи",
      url: "https://www.zus.pl/en/firmy/zgloszenie-platnika/firmy/zgloszenie-ubezpieczonego/czlonka-rodziny-ubezpieczonego",
      note: "Роль платника внесків та різниця між ZUA і ZZA.",
    },
    {
      label: "ZUS: база нарахування внесків",
      url: "https://www.zus.pl/pl/pracujacy/system-ubezpieczen-spolecznych-w-polsce/ustalanie-podstawy-wymiaru-skladek-na-ubezpieczenia-spoleczne",
      note: "Значення podstawy wymiaru składek та її залежність від підстави страхування.",
    },
    documentSources.aliens,
  ],
  verifiedAt: "2026-09-10",
}

export const zusInsuranceHistoryTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:zus-insurance-history",
    subject: {
      family: "evidence-document",
      reference: {
        kind: "evidence-document",
        documentId: "zus-insurance-history",
      },
    },
    summary: guide.description,
    claims: [
      {
        id: "personal-history-request",
        kind: "official-guidance",
        text: "US-7 є запитом про довідку або інформацію з обліку особи. Обсяг визначають за видом даних, періодом і платником.",
        basis: [
          {
            reference: { kind: "external", url: US7_URL },
            locator: "US-7, стор. 1–2: вид документа, дані, період, платник",
          },
          {
            reference: { kind: "external", url: HISTORY_URL },
            locator: "Jak to zrobić: подання запиту",
          },
        ],
      },
      {
        id: "payer-and-person-records",
        kind: "official-guidance",
        text: "Іменний RCA і довідка про відсутність боргу платника описують різні дані. DRA підприємця лише за себе має іншу роль, ніж зведена декларація роботодавця.",
        basis: [
          {
            reference: { kind: "external", url: REPORTS_URL },
            locator:
              "Dokumenty rozliczeniowe: RCA, DRA, підприємець без працівників",
          },
          {
            reference: { kind: "external", url: NO_ARREARS_URL },
            locator: "RWN; розрахунки на рахунку платника",
          },
        ],
      },
      {
        id: "resident-evidence-scope",
        kind: "practical-inference",
        text: "Історію ZUS зіставляють з доказами доходу за потрібний період; поточне страхування і п'ятирічне перебування перевіряють окремо.",
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "Art. 211 ust. 1–2; art. 212 ust. 1 pkt 1",
          },
          {
            reference: { kind: "external", url: documentSources.zus.url },
            locator: "Вибір даних для самостійного підтвердження",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-09-10",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default zusInsuranceHistoryTopic
