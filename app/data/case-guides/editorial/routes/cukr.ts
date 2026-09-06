import {
  deadlineObstacleEvidence,
  workNotificationEvidence,
} from "~/data/case-guides/shared-document-requirements"
import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type {
  CaseGuideDocument,
  CaseGuideRoute,
} from "~/data/case-guides/types"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const peselStatus: CaseGuideDocument = {
  item: {
    kind: "authored-legal-text",
    plainText: "Дані PESEL та історія статусу UKR",
    parts: [
      {
        text: "Дані PESEL та історія статусу UKR",
        target: {
          kind: "evidence-document",
          documentId: "pesel-ukr-confirmation",
        },
      },
    ],
  },
  status: "реєстрова перевірка",
  level: "control",
  owner: "Заявник перевіряє власні дані; MOS і орган звіряють реєстри",
  proves:
    "Для цього маршруту: UKR на 04.06.2025, при поданні та видачі карти, потрібна безперервність. Окрема довідка не є універсальним обов'язковим файлом для завантаження",
  law: foreignersLaw.text`${foreignersLaw.external("Art. 42c: умови CUKR", "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf")}; ${foreignersLaw.external("art. 25 і 26 закону Dz.U. 2026 poz. 203: підтвердження особи", "https://eli.gov.pl/eli/DU/2026/203/ogl")}`,
}

const registerCorrection: CaseGuideDocument = {
  item: "Доповнення або виправлення даних у gminie",
  status: "якщо є прогалина чи розбіжність",
  level: "conditional",
  owner:
    "Заявник · перед поданням, якщо дані паспорта, підпису, відбитків або статусу потребують перевірки",
  proves:
    "Усуває встановлену проблему реєстрових даних. Доповнення реквізитів паспорта не гарантує відновлення втраченого UKR",
  law: foreignersLaw.text`${foreignersLaw.external("Art. 25 і 26 закону Dz.U. 2026 poz. 203", "https://eli.gov.pl/eli/DU/2026/203/ogl")}; FAQ CUKR`,
  kind: "action",
  guidance: "pesel-ukr-confirmation",
}

const route: CaseGuideRoute = {
  id: "cukr",
  tab: "CUKR",
  eyebrow: "Спеціальний маршрут для особи зі status UKR",
  title: "Karta CUKR — повний гайд по справі",
  subtitle:
    "Від перевірки безперервності UKR до особистого отримання карти й обов’язків після нього",
  overview: [
    "CUKR не є звичайним zezwoleniem na pobyt czasowy i pracę. Це спеціальний трирічний статус, для якого вирішальними є факти про status UKR, повноту даних у реєстрі, спосіб подання та osobisty odbiór карти.",
    "Робота не доводить умови CUKR, але право працювати до й після переходу треба аналізувати окремо. Так само окремо перевіряється доля незавершеної звичайної справи pobytowej.",
  ],
  result:
    "За виконання спеціальних умов особа отримує трирічний статус CUKR у момент, визначений specustawą, а не просто після появи позитивної інформації в системі.",
  forWhom:
    "Для особи з належною історією status UKR, яка виконує спеціальні умови CUKR і свідомо обирає перехід із тимчасового захисту.",
  notFor:
    "Не обирається лише тому, що особа працює або хоче фізичну карту; спочатку порівнюємо UKR, CUKR і звичайний pobyt.",
  profile: {
    name: "Особа з активним PESEL UKR",
    description:
      "Для цього маршруту перевіряємо особу з активним PESEL UKR, яка працює за umową o pracę і планує довгостроково залишитися в Польщі. Робота є важливим фактом життя, але не матеріальною умовою CUKR.",
    facts: [
      {
        label: "Поточний статус",
        value: "PESEL UKR — активний",
      },
      {
        label: "Критична дата",
        value: "status UKR перевіряється також на 04.06.2025",
      },
      {
        label: "Робота",
        value: "umowa o pracę; powiadomienie перевіряється окремо",
      },
      {
        label: "Паралельні справи",
        value: "потрібно перевірити MOS та akta",
      },
    ],
    assumption:
      "Безперервність status UKR, тривалість виїздів, повнота даних паспорта/підпису/відбитків і відсутність перешкод ще мають бути підтверджені.",
  },
  choice: {
    why: {
      kind: "authored-legal-text",
      plainText:
        "Факти особи можуть відповідати спеціальному CUKR, а метою маршруту є стабільний статус без доведення матеріальних умов роботи. Тому спочатку перевіряємо спеціальні умови, а не готуємо Załącznik nr 1 як для звичайного pobytu i pracy.",
      parts: [
        {
          text: "Факти особи можуть відповідати спеціальному CUKR, а метою маршруту є стабільний статус без доведення матеріальних умов роботи. Тому спочатку перевіряємо спеціальні умови, а не готуємо ",
        },
        {
          text: "Załącznik nr 1",
          target: {
            kind: "legal-provision",
            documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
            provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-2",
          },
        },
        {
          text: " як для звичайного pobytu i pracy.",
        },
      ],
    },
    closestAlternative:
      "Залишитися на status UKR до кінця його дії або подати доступну звичайну заяву pobytową, якщо її матеріальні умови краще відповідають цілям особи.",
    gate: "Безперервна й належна історія status UKR та виконання всіх спеціальних умов CUKR.",
  },
  metrics: [
    {
      label: "Орган першої інстанції",
      value: "Właściwy wojewoda",
    },
    {
      label: "Канал",
      value: "MOS, якщо закон не встановлює винятку",
    },
    {
      label: "Що доводить робота",
      value: "Право працювати аналізується окремо; робота не є умовою CUKR",
    },
    {
      label: "Ключовий момент",
      value: "Особистий odbiór карти має окреме юридичне значення",
    },
  ],
  conditions: [
    {
      condition: "Належний status UKR",
      factToEstablish:
        "Чи є status UKR активним і чи підтверджено потрібну безперервність?",
      evidence: "дані реєстру + документ особи",

      risk: "реєстр або історія виїздів не підтвердять безперервність",
      law: {
        kind: "authored-legal-text",
        plainText: "art. 42c–42u specustawy",
        parts: [
          {
            text: "art. 42c",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
          {
            text: "–",
          },
          {
            text: "42u",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
          {
            text: " specustawy",
          },
        ],
      },
    },
    {
      condition: "Status на критичну дату",
      factToEstablish:
        "Чи підтверджено status UKR на 04.06.2025 для цієї категорії заявника?",
      evidence: "історичні дані реєстру",

      risk: "інший статус на критичну дату",
      law: "спеціальні умови CUKR",
    },
    {
      condition: "Повні дані особи",
      factToEstablish:
        "Чи узгоджені й повні паспортні та біометричні дані в реєстрі?",
      evidence: "PESEL/MOS + паспорт",

      risk: "неповні або неузгоджені дані",
      law: "процедура CUKR",
    },
    {
      condition: "Правильне подання й odbiór",
      factToEstablish:
        "Чи є підтвердження подання та чи виконано вимоги до особистих дій і отримання карти?",
      evidence: "UPO, повідомлення, підтвердження odbioru",

      risk: "невиконана особиста дія або строк",
      law: "specustawa + процедура CUKR",
    },
  ],
  stages: [
    {
      id: "status",
      title: "Фіксуємо особу, статус і критичні дати",
      question: "Хто ця особа на дату кожної важливої події?",
      explanation: [
        "Справа починається не з форми MOS, а з хронології. Громадянство, документ, чинна підстава перебування, виїзди та попередні заяви визначають, чи маршрут узагалі доступний і які правила діятимуть під час розгляду.",
        "Для CUKR особливо важлива безперервність UKR, статус на критичну дату, виїзди та повнота даних у PESEL.",
        foreignersLaw.text`Після 31.08.2026 з'ясуйте також підставу первісного встановлення особи. Для PESEL, наданого на підставі oświadczenia, непідтвердження особи чинним документом подорожі у встановлений строк тягне зміну UKR на NUE з 01.09.2026 за ${foreignersLaw.external("art. 25 закону Dz.U. 2026 poz. 203", "https://eli.gov.pl/eli/DU/2026/203/ogl")}. Для інших документальних підстав діє окреме правило ${foreignersLaw.external("art. 26", "https://eli.gov.pl/eli/DU/2026/203/ogl")}. Старий папір про надання PESEL не замінює актуальних даних.`,
      ],
      actor: "Працівник легалізації разом із заявником",
      actions: [
        "Зібрати всі документи pobytowe та дати їх чинності.",
        "Побудувати одну хронологію в’їздів, виїздів, заяв і рішень.",
        "Позначити факти, які підтверджені реєстром, і факти лише зі слів заявника.",
      ],
      outcome:
        "Картка особи й хронологія, на яких можна безпечно будувати правову кваліфікацію.",
      documents: [
        {
          reviewId: "passport",
          item: {
            kind: "authored-legal-text",
            plainText: "Дійсний закордонний паспорт",
            parts: [
              {
                text: "Дійсний закордонний паспорт",
                target: { kind: "evidence-document", documentId: "passport" },
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · перевірка до MOS і оригінал при odbiorze",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · перевірка до MOS і оригінал при odbiorze",
              },
            ],
          },
          proves:
            "Особу та реквізити чинного документа; відповідність запису PESEL перевіряють окремо",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42c, 42g і 42r",
            parts: [
              {
                text: "Art. 42c",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              {
                text: ", ",
              },
              {
                text: "42g",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              {
                text: " і ",
              },
              {
                text: "42r",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
            ],
          },
        },
        peselStatus,
        registerCorrection,
        {
          reviewId: "chronology",
          item: {
            kind: "authored-legal-text",
            plainText: "Хронологія перебування, виїздів і попередніх справ",
            parts: [
              {
                text: "Хронологія перебування, виїздів і попередніх справ",
                target: {
                  kind: "evidence-document",
                  documentId: "stay-history",
                },
              },
            ],
          },
          status: "робочий документ",
          level: "control",
          owner:
            "Працівник легалізації разом із заявником · до правової кваліфікації",
          proves:
            "Критичні дати, безперервність статусу та події, які могли змінити правовий режим",
          law: "Фактична основа вибору матеріальної норми",
        },
      ],
      risks: [
        {
          title: "Неправильна дата факту",
          explanation:
            "Одна й та сама особа може мати різний статус у день в’їзду, подання, рішення й отримання карти. Якщо поставити факт не на ту дату, можна вибрати неправильну редакцію закону або маршрут.",
          check:
            "Для кожної критичної дати знайдіть окремий документ або реєстрове підтвердження; не переносіть поточний статус назад у часі.",
        },
        {
          title: "Непомічена паралельна справа",
          explanation:
            "Інша заява, рішення або незавершене провадження може змінювати допустимість маршруту чи наслідки нового подання.",
          check:
            "Звірте UPO, листування, MOS та akta попередніх справ і внесіть кожне провадження в одну хронологію.",
        },
        {
          title: "Розрив у законності перебування",
          explanation:
            "Пізніший документ не завжди виправляє попередній період і не підтверджує безперервність автоматично.",
          check:
            "Перевірте підставу перебування день за днем у сумнівному проміжку та окремо зафіксуйте періоди, які потребують правового пояснення.",
        },
      ],
      materials: [
        {
          label: "Особа і правовий статус",
          description: "Пояснює, які статуси й дати треба зафіксувати.",
          href: "/map/person-status",
        },
        {
          label: "В’їзд і поточна підстава",
          description:
            "Допомагає відокремити документ від реальної підстави перебування.",
          href: "/map/entry-current-basis",
        },
      ],
    },
    {
      id: "qualification",
      title: "Перевіряємо доступність саме цього маршруту",
      question: "Яка норма найточніше описує реальну мету й факти?",
      explanation: [
        "Назва вкладки ще не означає, що підстава підходить. Тут ми зіставляємо факти з позитивними умовами, виключеннями, odmową wszczęcia та найближчою альтернативою. Якщо головна умова не виконується, змінюється маршрут, а не формулювання заяви.",
        "Порівняння з UKR і звичайним pobytem є частиною правового аналізу, бо кожен маршрут інакше змінює статус і незавершені справи.",
      ],
      actor: "Працівник легалізації",
      actions: [
        "Назвати точний очікуваний статус і статті спеціального закону.",
        "Розкласти підставу на позитивні й негативні умови.",
        "Порівняти з найближчою альтернативою та письмово зафіксувати вибір.",
      ],
      outcome:
        "Письмовий висновок: маршрут доступний, умовно доступний або його треба змінити.",
      documents: [
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Матриця умов обраного маршруту",
            parts: [
              {
                text: "Матриця умов обраного маршруту",
                target: {
                  kind: "evidence-document",
                  documentId: "evidence-matrix",
                },
              },
            ],
          },
          status: "робочий документ",
          level: "control",
          owner: "Працівник легалізації · до заповнення заяви",
          proves:
            "Кожну позитивну умову, виняток, негативну передумову та факт, якого ще бракує",
          law: "Ustawa o cudzoziemcach або інший lex specialis маршруту",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Письмовий висновок про вибір підстави",
            parts: [
              {
                text: "Письмовий висновок про вибір підстави",
                target: {
                  kind: "evidence-document",
                  documentId: "case-assessment",
                },
              },
            ],
          },
          status: "робочий документ",
          level: "control",
          owner:
            "Працівник легалізації · після порівняння найближчих маршрутів",
          proves:
            "Чому факти відповідають саме цій підставі та чому сусідня підстава не є точнішою",
          law: "Правова кваліфікація cel pobytu",
        },
      ],
      risks: [
        {
          title: "Поточний UKR є, а історія статусу неповна",
          explanation:
            "Заявник показує поточний status UKR, але документи не пояснюють його статус на потрібні дати. Поточний запис не замінює перевірку історії та безперервності. Потрібно також визначити категорію заявника, зокрема для дитини.",
          check:
            "Зіставте історію реєстру з паспортом і виїздами. Якщо запис помилковий або даних бракує, з’ясуйте порядок уточнення в органі, який веде реєстр.",
        },
        {
          title: "Ігнорування lex specialis",
          explanation:
            "Спеціальна норма може змінювати organ, спосіб подання, строк, перелік умов або наслідок порівняно із загальним правилом.",
          check:
            "Поруч із загальною нормою випишіть спеціальну та позначте, яке саме правило вона замінює.",
        },
        {
          title: "Умови взято з іншої підстави",
          explanation:
            "Документи сусіднього маршруту створюють видимість повноти, але не доводять вирішальної умови обраного дозволу.",
          check:
            "Для кожного документа назвіть конкретну умову саме цього маршруту; якщо зв’язку немає, не вважайте його основним доказом.",
        },
      ],
      materials: [
        {
          label: "Карта права: CUKR",
          description:
            "Відкриває матеріальну підставу, її межі та пов’язані норми.",
          href: "/map/cukr-route-2026",
        },
        {
          label: "Найближчий пов’язаний інститут",
          description:
            "Допомагає не змішати цю підставу із сусіднім маршрутом.",
          href: "/map/ukraine-routes-2026",
        },
      ],
    },
    {
      id: "filing",
      title: "Готуємо правильне подання через MOS",
      question: "Хто, куди, коли й у якій формі подає заяву?",
      explanation: [
        "Після вибору підстави визначаємо właściwego wojewodę, електронну форму, підпис, додатки, оплати та особисті дії. Формальна правильність не доводить матеріальні умови, але без неї справа може не отримати належного ходу.",
        "У поданні CUKR не підміняємо спеціальні вимоги пакетом працівника; перевіряємо саме дані, фото, оплати й процедуру, передбачену specustawą.",
      ],
      actor: "Заявник, представник і — коли потрібно — інша сторона додатка",
      actions: [
        "Визначити organ і перевірити, чи діє обов’язок MOS або виняток.",
        "Заповнити заяву однаковими даними в усіх полях і додатках.",
        "Зберегти UPO, PDF/XML заяви та точний перелік вкладень.",
      ],
      outcome:
        "Відтворюваний контрольний пакет подання з доказом дати й змісту.",
      documents: [
        {
          reviewId: "passport",
          item: {
            kind: "authored-legal-text",
            plainText: "Дійсний закордонний паспорт",
            parts: [
              {
                text: "Дійсний закордонний паспорт",
                target: { kind: "evidence-document", documentId: "passport" },
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · перевірка до MOS і оригінал при odbiorze",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · перевірка до MOS і оригінал при odbiorze",
              },
            ],
          },
          proves:
            "Особу та реквізити чинного документа; відповідність запису PESEL перевіряють окремо",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42c, 42g і 42r",
            parts: [
              {
                text: "Art. 42c",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              {
                text: ", ",
              },
              {
                text: "42g",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              {
                text: " і ",
              },
              {
                text: "42r",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
            ],
          },
        },
        registerCorrection,
        {
          item: "Особистий профіль MOS + login.gov.pl",
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · до заповнення заяви",
            parts: [{ text: "Заявник" }, { text: " · до заповнення заяви" }],
          },
          proves: "Особисте подання й можливість електронного підпису",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42g; процедура MOS",
            parts: [
              {
                text: "Art. 42g",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              { text: "; процедура MOS" },
            ],
          },
          kind: "action",
          guidance: "cukr-application",
        },
        {
          reviewId: "photograph",
          item: {
            kind: "authored-legal-text",
            plainText: "Цифрове фото",
            parts: [
              {
                text: "Цифрове фото",
                target: {
                  kind: "evidence-document",
                  documentId: "digital-photo",
                },
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · додає в MOS",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · додає в MOS",
              },
            ],
          },
          proves: "Дані для персоналізації карти",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42g; вимоги UdSC",
            parts: [
              {
                text: "Art. 42g",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              {
                text: "; вимоги UdSC",
              },
            ],
          },
        },
        {
          reviewId: "payment",
          item: {
            kind: "authored-legal-text",
            plainText: "Opłata skarbowa 340 zł",
            parts: [
              {
                text: "Opłata skarbowa 340 zł",
                target: {
                  kind: "evidence-document",
                  documentId: "stamp-duty-proof",
                },
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · оплата до подання, доказ у MOS",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · оплата до подання, доказ у MOS",
              },
            ],
          },
          proves: "Виконання фінансової умови провадження",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42e і 42s",
            parts: [
              {
                text: "Art. 42e",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              {
                text: " і ",
              },
              {
                text: "42s",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
            ],
          },
        },
        {
          reviewId: "payment",
          item: {
            kind: "authored-legal-text",
            plainText: "Opłata za kartę 100 zł",
            parts: [
              {
                text: "Opłata za kartę 100 zł",
                target: {
                  kind: "evidence-document",
                  documentId: "residence-card-fee-proof",
                },
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · оплата до подання, доказ у MOS",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · оплата до подання, доказ у MOS",
              },
            ],
          },
          proves: "Оплату виготовлення документа",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42s",
            parts: [
              {
                text: "Art. 42s",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
            ],
          },
        },
        {
          reviewId: "submission",
          item: {
            kind: "authored-legal-text",
            plainText: "UPO + PDF/XML заяви",
            parts: [
              {
                text: "UPO",
                target: { kind: "evidence-document", documentId: "upo" },
              },
              { text: " + PDF/XML заяви" },
            ],
          },
          status: "контроль",
          level: "control",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник / представник · одразу після wysłania",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " / представник · одразу після wysłania",
              },
            ],
          },
          proves: "Факт, дату й зміст електронного подання",
          law: "MOS; контроль akt sprawy",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Отримана карта і запис про odbiór",
            parts: [
              {
                text: "Отримана карта і запис про odbiór",
                target: {
                  kind: "evidence-document",
                  documentId: "residence-card",
                },
              },
            ],
          },
          status: "критично",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · особисто до 60 днів від інформації",
            parts: [
              { text: "Заявник" },
              { text: " · особисто до 60 днів від інформації" },
            ],
          },
          proves:
            "Отриманий документ та зафіксовану дату його особистого одержання",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42r",
            parts: [
              {
                text: "Art. 42r",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
            ],
          },
        },
        {
          reviewId: "submission",
          item: {
            kind: "authored-legal-text",
            plainText: "Індекс вкладень і контрольна копія подання",
            parts: [
              {
                text: "Індекс вкладень і контрольна копія подання",
                target: {
                  kind: "evidence-document",
                  documentId: "case-file-index",
                },
              },
            ],
          },
          status: "робочий документ",
          level: "control",
          owner: "Особа, яка комплектує пакет · безпосередньо перед wysłaniem",
          proves:
            "Точний склад поданого пакета, назви файлів, версії документів і можливість відтворити заяву",
          law: "Контроль treści podania та майбутніх akt sprawy",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Електронна заява на карту CUKR",
            parts: [
              {
                text: "Електронна заява на карту CUKR",
                target: {
                  kind: "evidence-document",
                  documentId: "cukr-application",
                },
              },
            ],
          },
          owner: "Заявник · підписує і надсилає у власному MOS",
          proves: "Звернення саме за CUKR",
          law: "Процедура CUKR UdSC",
          level: "required",
          status: "обов’язково",
        },
      ],
      risks: [
        {
          title: "Різні дані у формі та доказах",
          explanation:
            "Розбіжність у даті, назві podmiotu, посаді, адресі або номері документа створює сумнів, який потім переходить у wezwanie або оцінку матеріальної умови.",
          check:
            "Перед wysłaniem порівняйте ключові поля MOS з паспортом, договорами, додатками й реєстрами за одним контрольним аркушем.",
        },
        {
          title: "Немає підпису або обов’язкового додатка",
          explanation:
            "Електронно заповнена форма ще не означає належно подану заяву; спосіб підпису та роль автора додатка мають відповідати процедурі.",
          check:
            "Відкрийте фінальну версію заяви, перевірте статус підпису кожної зобов’язаної особи та звірте індекс вкладень з UPO.",
        },
        {
          title: "Використано неправильний канал подання",
          explanation:
            "Паперове або електронне подання поза передбаченим каналом може не запустити очікуваної процедури.",
          check:
            "Зафіксуйте норму про форму подання і, якщо застосовується виняток, додайте його підставу до контрольного пакета.",
        },
      ],
      materials: [
        {
          label: "Подання через MOS",
          description:
            "Пояснює електронну процедуру та особисті дії після подання.",
          href: "/map/mos-procedure",
        },
        {
          label: "KPA: початок справи і podanie",
          description: {
            kind: "authored-legal-text",
            plainText: "Пояснює wszczęcie, формальні вимоги та art. 61–66 KPA.",
            parts: [
              {
                text: "Пояснює wszczęcie, формальні вимоги та ",
              },
              {
                text: "art. 61",
                target: {
                  kind: "legal-provision",
                  documentId: "kpa",
                  provisionId: "kpa-art-61",
                },
              },
              {
                text: "–",
              },
              {
                text: "66 KPA",
                target: {
                  kind: "legal-provision",
                  documentId: "kpa",
                  provisionId: "kpa-art-66",
                },
              },
              {
                text: ".",
              },
            ],
          },
          href: "/guide/kpa?module=initiation",
        },
      ],
    },
    {
      id: "evidence",
      title: "Будуємо доказову матрицю, а не список файлів",
      question: "Який факт і який доказ виконують кожну умову?",
      explanation: [
        "Тут ключові докази стосуються особи та історії status UKR. Зіставляйте записи реєстру, паспортні дані й виїзди за датами. Договір про роботу не замінює доказу статусу на потрібну дату.",
        "Доказова матриця концентрується на історії UKR, реєстрових даних, паспорті, виїздах та виконанні технічних умов CUKR.",
      ],
      actor: "Працівник легалізації, заявник і автори зовнішніх документів",
      actions: [
        "Прив’язати кожен доказ до конкретної умови.",
        "Перевірити дати, суми, назви, підписантів і реєстрові дані.",
        "Позначити відсутні докази та підготувати коротке пояснення складних зв’язків.",
      ],
      outcome:
        "Матриця умова → факт → доказ із видимими прогалинами й суперечностями.",
      documents: [
        {
          reviewId: "passport",
          item: {
            kind: "authored-legal-text",
            plainText: "Дійсний закордонний паспорт",
            parts: [
              {
                text: "Дійсний закордонний паспорт",
                target: { kind: "evidence-document", documentId: "passport" },
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · перевірка до MOS і оригінал при odbiorze",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · перевірка до MOS і оригінал при odbiorze",
              },
            ],
          },
          proves:
            "Особу та реквізити чинного документа; відповідність запису PESEL перевіряють окремо",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42c, 42g і 42r",
            parts: [
              {
                text: "Art. 42c",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              {
                text: ", ",
              },
              {
                text: "42g",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              {
                text: " і ",
              },
              {
                text: "42r",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
            ],
          },
        },
        peselStatus,
        registerCorrection,
        {
          item: "Особистий профіль MOS + login.gov.pl",
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · до заповнення заяви",
            parts: [{ text: "Заявник" }, { text: " · до заповнення заяви" }],
          },
          proves: "Особисте подання й можливість електронного підпису",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42g; процедура MOS",
            parts: [
              {
                text: "Art. 42g",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              { text: "; процедура MOS" },
            ],
          },
          kind: "action",
          guidance: "cukr-application",
        },
        {
          reviewId: "photograph",
          item: {
            kind: "authored-legal-text",
            plainText: "Цифрове фото",
            parts: [
              {
                text: "Цифрове фото",
                target: {
                  kind: "evidence-document",
                  documentId: "digital-photo",
                },
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · додає в MOS",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · додає в MOS",
              },
            ],
          },
          proves: "Дані для персоналізації карти",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42g; вимоги UdSC",
            parts: [
              {
                text: "Art. 42g",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              {
                text: "; вимоги UdSC",
              },
            ],
          },
        },
        {
          reviewId: "payment",
          item: {
            kind: "authored-legal-text",
            plainText: "Opłata skarbowa 340 zł",
            parts: [
              {
                text: "Opłata skarbowa 340 zł",
                target: {
                  kind: "evidence-document",
                  documentId: "stamp-duty-proof",
                },
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · оплата до подання, доказ у MOS",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · оплата до подання, доказ у MOS",
              },
            ],
          },
          proves: "Виконання фінансової умови провадження",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42e і 42s",
            parts: [
              {
                text: "Art. 42e",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              {
                text: " і ",
              },
              {
                text: "42s",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
            ],
          },
        },
        {
          reviewId: "payment",
          item: {
            kind: "authored-legal-text",
            plainText: "Opłata za kartę 100 zł",
            parts: [
              {
                text: "Opłata za kartę 100 zł",
                target: {
                  kind: "evidence-document",
                  documentId: "residence-card-fee-proof",
                },
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · оплата до подання, доказ у MOS",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · оплата до подання, доказ у MOS",
              },
            ],
          },
          proves: "Оплату виготовлення документа",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42s",
            parts: [
              {
                text: "Art. 42s",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
            ],
          },
        },
        {
          reviewId: "submission",
          item: {
            kind: "authored-legal-text",
            plainText: "UPO + PDF/XML заяви",
            parts: [
              {
                text: "UPO",
                target: { kind: "evidence-document", documentId: "upo" },
              },
              { text: " + PDF/XML заяви" },
            ],
          },
          status: "контроль",
          level: "control",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник / представник · одразу після wysłania",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " / представник · одразу після wysłania",
              },
            ],
          },
          proves: "Факт, дату й зміст електронного подання",
          law: "MOS; контроль akt sprawy",
        },
        workNotificationEvidence,
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Отримана карта і запис про odbiór",
            parts: [
              {
                text: "Отримана карта і запис про odbiór",
                target: {
                  kind: "evidence-document",
                  documentId: "residence-card",
                },
              },
            ],
          },
          status: "критично",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · особисто до 60 днів від інформації",
            parts: [
              { text: "Заявник" },
              { text: " · особисто до 60 днів від інформації" },
            ],
          },
          proves:
            "Отриманий документ та зафіксовану дату його особистого одержання",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42r",
            parts: [
              {
                text: "Art. 42r",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
            ],
          },
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Доказова матриця: умова → факт → доказ",
            parts: [
              {
                text: "Доказова матриця: умова → факт → доказ",
                target: {
                  kind: "evidence-document",
                  documentId: "evidence-matrix",
                },
              },
            ],
          },
          status: "робочий документ",
          level: "control",
          owner: "Працівник легалізації · до подання та після кожного wezwania",
          proves:
            "Який документ доводить кожну умову, за який період і де залишається прогалина або суперечність",
          law: "KPA — ustalenie stanu faktycznego та ocena dowodów",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Електронна заява на карту CUKR",
            parts: [
              {
                text: "Електронна заява на карту CUKR",
                target: {
                  kind: "evidence-document",
                  documentId: "cukr-application",
                },
              },
            ],
          },
          owner: "Заявник · підписує і надсилає у власному MOS",
          proves: "Звернення саме за CUKR",
          law: "Процедура CUKR UdSC",
          level: "required",
          status: "обов’язково",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Wezwanie органу",
            parts: [
              {
                text: "Wezwanie органу",
                target: {
                  kind: "evidence-document",
                  documentId: "authority-summons",
                },
              },
            ],
          },
          owner: "Орган · якщо надсилає вимогу",
          proves: "Зміст окремих вимог до сторони",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 54 KPA",
            parts: [
              {
                text: "Art. 54 KPA",
                target: {
                  kind: "legal-provision",
                  documentId: "kpa",
                  provisionId: "kpa-art-54",
                },
              },
            ],
          },
          level: "conditional",
          status: "якщо отримано",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Підтвердження doręczenia",
            parts: [
              {
                text: "Підтвердження doręczenia",
                target: {
                  kind: "evidence-document",
                  documentId: "delivery-proof",
                },
              },
            ],
          },
          owner: "Одержувач · після вручення",
          proves: "Канал, адресата і дату вручення",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 39 KPA",
            parts: [
              {
                text: "Art. 39 KPA",
                target: {
                  kind: "legal-provision",
                  documentId: "kpa",
                  provisionId: "kpa-art-39",
                },
              },
            ],
          },
          level: "conditional",
          status: "якщо отримано",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Таблиця вимог із wezwania",
            parts: [
              {
                text: "Таблиця вимог із wezwania",
                target: {
                  kind: "evidence-document",
                  documentId: "requirements-table",
                },
              },
            ],
          },
          owner: "Працівник справи · перед відповіддю",
          proves: "Робочий зв’язок вимоги, доказу й відповіді",
          law: "Робоча організація відповіді",
          level: "control",
          status: "робочий запис",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Відповідь на wezwanie",
            parts: [
              {
                text: "Відповідь на wezwanie",
                target: {
                  kind: "evidence-document",
                  documentId: "response-letter",
                },
              },
            ],
          },
          owner: "Заявник або представник · у строк вимоги",
          proves: "Позицію сторони та подані докази",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 63 KPA",
            parts: [
              {
                text: "Art. 63 KPA",
                target: {
                  kind: "legal-provision",
                  documentId: "kpa",
                  provisionId: "kpa-art-63",
                },
              },
            ],
          },
          level: "conditional",
          status: "за wezwania",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Перелік додатків до відповіді",
            parts: [
              {
                text: "Перелік додатків до відповіді",
                target: {
                  kind: "evidence-document",
                  documentId: "case-file-index",
                },
              },
            ],
          },
          owner: "Автор відповіді · перед поданням",
          proves: "Зв’язок пунктів відповіді з матеріалами пакета",
          law: "Робочий опис складу пакета",
          level: "control",
          status: "робочий запис",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Доказ подання відповіді",
            parts: [
              {
                text: "Доказ подання відповіді",
                target: {
                  kind: "evidence-document",
                  documentId: "dispatch-proof",
                },
              },
            ],
          },
          owner: "Оператор, сервіс або канцелярія · під час подання",
          proves: "Дату, канал та ідентифікатор подання",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 57 KPA",
            parts: [
              {
                text: "Art. 57 KPA",
                target: {
                  kind: "legal-provision",
                  documentId: "kpa",
                  provisionId: "kpa-art-57",
                },
              },
            ],
          },
          level: "conditional",
          status: "після відповіді",
        },
      ],
      risks: [
        {
          title: "Паспорт і реєстр містять різні дані",
          explanation:
            "Паспорт замінено або ім’я записано інакше, а реєстр PESEL містить попередні дані.",
          check:
            "Встановіть причину розбіжності й документ, що пов’язує записи. Уточніть дані в urząd gminy перед використанням їх у заяві.",
        },
        {
          title: "Застарілий або суперечливий документ",
          explanation:
            "Стара версія договору, інші суми чи різні підписанти послаблюють весь ланцюг доказів, навіть якщо кожен файл окремо виглядає правильним.",
          check:
            "Зіставте дати, суми, назви, підписи й реєстрові дані між усіма документами; суперечність поясніть до подання.",
        },
        {
          title: "Документ доводить інший факт",
          explanation:
            "Наприклад, існування компанії не доводить реальність конкретної роботи, а umowa не завжди доводить фактичне виконання її умов.",
          check:
            "Сформулюйте факт, який organ має встановити, і перевірте, чи зміст документа прямо або разом з іншими доказами відповідає саме на нього.",
        },
      ],
      materials: [
        {
          label: "Матриця документів",
          description: "Показує зв’язок між нормою, фактом і доказом.",
          href: "/map/document-matrix",
        },
        {
          label: "Формальна й матеріальна повнота",
          description: "Допомагає правильно визначити наслідок нестачі.",
          href: "/map/evidence-matrix",
        },
        {
          label: "KPA: акти і докази",
          description: "Показує, як орган збирає й оцінює матеріал справи.",
          href: "/guide/kpa?module=files-evidence",
        },
      ],
    },
    {
      id: "procedure",
      title: "Контролюємо провадження і відповіді на wezwania",
      question: "Що орган перевіряє зараз і який процесуальний крок наступний?",
      explanation: [
        "Після подання справа переходить у процедуру: doręczenia, braki formalne, особиста явка, матеріальні докази, доступ до akt і можливість висловитися. Кожне wezwanie читаємо як окрему процесуальну дію з адресатом, строком, вимогою та наслідком.",
        "Орган звіряє реєстри й умови спеціального режиму; паралельно контролюємо, що відбувається з іншими справами заявника.",
      ],
      actor: "Wojewoda, заявник і представник",
      actions: [
        "Зафіксувати дату кожного doręczenia і спосіб вручення.",
        "Розкласти wezwanie пункт за пунктом і відповісти доказом на кожну вимогу.",
        "Перед рішенням перевірити akta й відреагувати на нові або суперечливі факти.",
      ],
      outcome:
        "Журнал справи з активними строками, відповідями й доказами doręczenia.",
      documents: [
        {
          reviewId: "passport",
          item: {
            kind: "authored-legal-text",
            plainText: "Дійсний закордонний паспорт",
            parts: [
              {
                text: "Дійсний закордонний паспорт",
                target: { kind: "evidence-document", documentId: "passport" },
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · перевірка до MOS і оригінал при odbiorze",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · перевірка до MOS і оригінал при odbiorze",
              },
            ],
          },
          proves:
            "Особу та реквізити чинного документа; відповідність запису PESEL перевіряють окремо",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42c, 42g і 42r",
            parts: [
              {
                text: "Art. 42c",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              {
                text: ", ",
              },
              {
                text: "42g",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              {
                text: " і ",
              },
              {
                text: "42r",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
            ],
          },
        },
        {
          item: "Особистий профіль MOS + login.gov.pl",
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · до заповнення заяви",
            parts: [{ text: "Заявник" }, { text: " · до заповнення заяви" }],
          },
          proves: "Особисте подання й можливість електронного підпису",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42g; процедура MOS",
            parts: [
              {
                text: "Art. 42g",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              { text: "; процедура MOS" },
            ],
          },
          kind: "action",
          guidance: "cukr-application",
        },
        {
          reviewId: "submission",
          item: {
            kind: "authored-legal-text",
            plainText: "UPO + PDF/XML заяви",
            parts: [
              {
                text: "UPO",
                target: { kind: "evidence-document", documentId: "upo" },
              },
              { text: " + PDF/XML заяви" },
            ],
          },
          status: "контроль",
          level: "control",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник / представник · одразу після wysłania",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " / представник · одразу після wysłania",
              },
            ],
          },
          proves: "Факт, дату й зміст електронного подання",
          law: "MOS; контроль akt sprawy",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Отримана карта і запис про odbiór",
            parts: [
              {
                text: "Отримана карта і запис про odbiór",
                target: {
                  kind: "evidence-document",
                  documentId: "residence-card",
                },
              },
            ],
          },
          status: "критично",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · особисто до 60 днів від інформації",
            parts: [
              { text: "Заявник" },
              { text: " · особисто до 60 днів від інформації" },
            ],
          },
          proves:
            "Отриманий документ та зафіксовану дату його особистого одержання",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42r",
            parts: [
              {
                text: "Art. 42r",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
            ],
          },
        },
        {
          reviewId: "delivery",
          item: {
            kind: "authored-legal-text",
            plainText: "Журнал doręczeń, строків і процесуальних дій",
            parts: [
              {
                text: "Журнал ",
                target: {
                  kind: "evidence-document",
                  documentId: "case-file-index",
                },
              },
              {
                text: "doręczeń",
                target: {
                  kind: "evidence-document",
                  documentId: "delivery-proof",
                },
              },
              {
                text: ", строків і процесуальних дій",
              },
            ],
          },
          status: "робочий документ",
          level: "control",
          owner:
            "Працівник легалізації / представник · від першого doręczenia до завершення справи",
          proves:
            "Дату й спосіб вручення, початок кожного строку, виконану дію та доказ її подання",
          law: "KPA + спеціальні строки процедури pobytowej",
        },
        {
          reviewId: "summons",
          item: {
            kind: "authored-legal-text",
            plainText: "Wezwania та відповіді з індексом додатків",
            parts: [
              {
                text: "Wezwania",
                target: {
                  kind: "evidence-document",
                  documentId: "authority-summons",
                },
              },
              { text: " та відповіді з індексом додатків" },
            ],
          },
          status: "робочий документ",
          level: "control",
          owner: "Адресат wezwania · окремий комплект для кожної вимоги",
          proves: "Який пункт вимоги виконано, яким доказом і в який строк",
          law: "KPA та спеціальна процедура dowodowa",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Копія або нотатка з akt sprawy",
            parts: [
              {
                text: "Копія або нотатка з akt sprawy",
                target: {
                  kind: "evidence-document",
                  documentId: "case-file-index",
                },
              },
            ],
          },
          status: "робочий документ",
          level: "control",
          owner:
            "Сторона / представник · перед рішенням і після появи нового матеріалу",
          proves:
            "Які докази має organ, які факти вважає спірними та чи є матеріал, на який треба відреагувати",
          law: "KPA — czynny udział strony та dostęp do akt",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Таблиця вимог із wezwania",
            parts: [
              {
                text: "Таблиця вимог із wezwania",
                target: {
                  kind: "evidence-document",
                  documentId: "requirements-table",
                },
              },
            ],
          },
          owner: "Працівник справи · перед відповіддю",
          proves: "Робочий зв’язок вимоги, доказу й відповіді",
          law: "Робоча організація відповіді",
          level: "control",
          status: "робочий запис",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Відповідь на wezwanie",
            parts: [
              {
                text: "Відповідь на wezwanie",
                target: {
                  kind: "evidence-document",
                  documentId: "response-letter",
                },
              },
            ],
          },
          owner: "Заявник або представник · у строк вимоги",
          proves: "Позицію сторони та подані докази",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 63 KPA",
            parts: [
              {
                text: "Art. 63 KPA",
                target: {
                  kind: "legal-provision",
                  documentId: "kpa",
                  provisionId: "kpa-art-63",
                },
              },
            ],
          },
          level: "conditional",
          status: "за wezwania",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Доказ подання відповіді",
            parts: [
              {
                text: "Доказ подання відповіді",
                target: {
                  kind: "evidence-document",
                  documentId: "dispatch-proof",
                },
              },
            ],
          },
          owner: "Оператор, сервіс або канцелярія · під час подання",
          proves: "Дату, канал та ідентифікатор подання",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 57 KPA",
            parts: [
              {
                text: "Art. 57 KPA",
                target: {
                  kind: "legal-provision",
                  documentId: "kpa",
                  provisionId: "kpa-art-57",
                },
              },
            ],
          },
          level: "conditional",
          status: "після відповіді",
        },
        deadlineObstacleEvidence,
      ],
      risks: [
        {
          title: "Змішані формальна і матеріальна вимоги",
          explanation:
            "Різні види wezwania мають різну правову підставу та різний наслідок невиконання. Універсальна відповідь приховує цю різницю.",
          check:
            "Для кожного пункту wezwania випишіть норму, строк, запитаний факт і наслідок; лише потім комплектуйте відповідь.",
        },
        {
          title: "Відповідь без доказу подання",
          explanation:
            "Навіть повна відповідь не захищає сторону, якщо в актах немає підтвердження її змісту та дати надсилання.",
          check:
            "Збережіть UPO або інше підтвердження разом із фінальною версією відповіді та незмінним індексом додатків.",
        },
        {
          title: "Пропущено строк або один пункт wezwania",
          explanation:
            "Орган оцінює виконання вимоги пункт за пунктом; відповідь на більшість питань не усуває нестачі щодо вирішального факту.",
          check:
            "Ведіть журнал строків і перед wysłaniem закрийте кожен пункт окремим доказом, поясненням або конкретним клопотанням.",
        },
      ],
      materials: [
        {
          label: "Як працювати з wezwanie",
          description: "Дає порядок розбору вимоги й підготовки відповіді.",
          href: "/map/wezwanie-workflow",
        },
        {
          label: "Akta sprawy",
          description: "Пояснює, навіщо читати матеріал органу перед рішенням.",
          href: "/map/case-file",
        },
        {
          label: "KPA: як читати wezwanie",
          description:
            "Допомагає відрізнити вимогу, строк, правову підставу й наслідок.",
          href: "/guide/kpa?module=summons",
        },
      ],
    },
    {
      id: "decision",
      title: "Читаємо рішення, карту й обов’язки після нього",
      question: "Коли виникає статус і що змінюється після рішення?",
      explanation: [
        "Decyzja, її остаточність і фізична karta pobytu — не завжди одна й та сама юридична подія. Потрібно окремо прочитати rozstrzygnięcie, строк дозволу, доступ до праці, обов’язки повідомлення та засіб оскарження.",
        "У CUKR не можна автоматично переносити звичайну модель: треба окремо встановити момент виникнення статусу, odbiór карти й подальші повідомлення.",
      ],
      actor: "Заявник, wojewoda, а в негативній гілці — Szef UdSC",
      actions: [
        "Зіставити rozstrzygnięcie з заявленою підставою й установленими фактами.",
        "Зафіксувати момент виникнення статусу та окремо строк ważności карти.",
        "Виписати обов’язки після decyzji, тригери зміни та строк оскарження.",
      ],
      outcome:
        "Картка наслідків рішення: статус, praca, зміни, оскарження й наступний маршрут.",
      documents: [
        {
          reviewId: "photograph",
          item: {
            kind: "authored-legal-text",
            plainText: "Цифрове фото",
            parts: [
              {
                text: "Цифрове фото",
                target: {
                  kind: "evidence-document",
                  documentId: "digital-photo",
                },
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · додає в MOS",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · додає в MOS",
              },
            ],
          },
          proves: "Дані для персоналізації карти",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42g; вимоги UdSC",
            parts: [
              {
                text: "Art. 42g",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              {
                text: "; вимоги UdSC",
              },
            ],
          },
        },
        workNotificationEvidence,
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Отримана карта і запис про odbiór",
            parts: [
              {
                text: "Отримана карта і запис про odbiór",
                target: {
                  kind: "evidence-document",
                  documentId: "residence-card",
                },
              },
            ],
          },
          status: "критично",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · особисто до 60 днів від інформації",
            parts: [
              { text: "Заявник" },
              { text: " · особисто до 60 днів від інформації" },
            ],
          },
          proves:
            "Отриманий документ та зафіксовану дату його особистого одержання",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 42r",
            parts: [
              {
                text: "Art. 42r",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
            ],
          },
        },
        {
          reviewId: "decision",
          item: {
            kind: "authored-legal-text",
            plainText: "Decyzja або інший акт, що завершує маршрут",
            parts: [
              {
                text: "Decyzja",
                target: {
                  kind: "evidence-document",
                  documentId: "administrative-decision",
                },
              },
              { text: " або інший акт, що завершує маршрут" },
            ],
          },
          status: "робочий документ",
          level: "control",
          owner: "Заявник / представник · одразу після doręczenia",
          proves:
            "Точний результат, строк статусу, умови праці, uzasadnienie та доступний засіб захисту",
          law: "KPA + матеріальна норма обраного маршруту",
        },
        {
          reviewId: "delivery",
          item: {
            kind: "authored-legal-text",
            plainText: "Доказ doręczenia рішення та отримання карти",
            parts: [
              {
                text: "Доказ doręczenia рішення",
                target: {
                  kind: "evidence-document",
                  documentId: "delivery-proof",
                },
              },
              { text: " та отримання " },
              {
                text: "карти",
                target: {
                  kind: "evidence-document",
                  documentId: "residence-card",
                },
              },
            ],
          },
          status: "робочий документ",
          level: "control",
          owner: "Заявник / представник · у день кожної окремої події",
          proves:
            "Початок строку оскарження та — якщо закон так визначає — момент виконання або виникнення статусу",
          law: "Pouczenie, KPA та спеціальні правила видачі документа",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "План обов’язків після рішення",
            parts: [
              {
                text: "План обов’язків після рішення",
                target: {
                  kind: "evidence-document",
                  documentId: "case-assessment",
                },
              },
            ],
          },
          status: "робочий документ",
          level: "control",
          owner:
            "Працівник легалізації разом із заявником · до закриття внутрішнього контролю справи",
          proves:
            "Строки повідомлень, допустимі зміни, обов’язки щодо праці, адреси, навчання або діяльності",
          law: "Post-decision duties конкретного маршруту",
        },
        deadlineObstacleEvidence,
      ],
      risks: [
        {
          title: "Карту ототожнено з моментом виникнення дозволу",
          explanation:
            "Фізичний документ, decyzja, її остаточність і момент виникнення статусу можуть бути різними юридичними подіями.",
          check:
            "Окремо випишіть дату акта, doręczenia, остаточності, odbioru карти та норму, яка визначає юридичний наслідок.",
        },
        {
          title: "Не прочитано treści rozstrzygnięcia",
          explanation:
            "Позитивний заголовок не показує строку, умов роботи, обмежень або точного обсягу наданого права.",
          check:
            "Перепишіть результат рішення своїми словами і звірте його з заявленою підставою, uzasadnieniem та даними на карті.",
        },
        {
          title: "Пропущено odwołanie або обов’язок повідомлення",
          explanation:
            "Строк захисту й обов’язки після decyzji запускаються різними подіями та не контролюються автоматично після закриття справи.",
          check:
            "Створіть картку строків із тригером, адресатом, дією, доказом виконання та відповідальною особою.",
        },
      ],
      materials: [
        {
          label: "Як читати рішення",
          description:
            "Розкладає decyzję на факти, норму, результат і pouczenie.",
          href: "/map/decision-reading",
        },
        {
          label: "Доступ до праці після зміни статусу",
          description:
            "Окремо перевірити підставу працювати й обов’язки роботодавця.",
          href: "/map/work-entry",
        },
        {
          label: "KPA: оскарження в адміністрації",
          description: "Показує строк, адресата й структуру odwołania.",
          href: "/guide/kpa?module=appeal",
        },
      ],
    },
  ],
  documents: [
    {
      reviewId: "passport",
      item: {
        kind: "authored-legal-text",
        plainText: "Дійсний закордонний паспорт",
        parts: [
          {
            text: "Дійсний закордонний паспорт",
            target: { kind: "evidence-document", documentId: "passport" },
          },
        ],
      },
      status: "обов’язково",
      level: "required",
      owner: {
        kind: "authored-legal-text",
        plainText: "Заявник · перевірка до MOS і оригінал при odbiorze",
        parts: [
          {
            text: "Заявник",
          },
          {
            text: " · перевірка до MOS і оригінал при odbiorze",
          },
        ],
      },
      proves:
        "Особу та реквізити чинного документа; відповідність запису PESEL перевіряють окремо",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 42c, 42g і 42r",
        parts: [
          {
            text: "Art. 42c",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
          {
            text: ", ",
          },
          {
            text: "42g",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
          {
            text: " і ",
          },
          {
            text: "42r",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
        ],
      },
    },
    peselStatus,
    registerCorrection,
    {
      item: "Особистий профіль MOS + login.gov.pl",
      status: "обов’язково",
      level: "required",
      owner: {
        kind: "authored-legal-text",
        plainText: "Заявник · до заповнення заяви",
        parts: [{ text: "Заявник" }, { text: " · до заповнення заяви" }],
      },
      proves: "Особисте подання й можливість електронного підпису",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 42g; процедура MOS",
        parts: [
          {
            text: "Art. 42g",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
          { text: "; процедура MOS" },
        ],
      },
      kind: "action",
      guidance: "cukr-application",
    },
    {
      reviewId: "photograph",
      item: {
        kind: "authored-legal-text",
        plainText: "Цифрове фото",
        parts: [
          {
            text: "Цифрове фото",
            target: {
              kind: "evidence-document",
              documentId: "digital-photo",
            },
          },
        ],
      },
      status: "обов’язково",
      level: "required",
      owner: {
        kind: "authored-legal-text",
        plainText: "Заявник · додає в MOS",
        parts: [
          {
            text: "Заявник",
          },
          {
            text: " · додає в MOS",
          },
        ],
      },
      proves: "Дані для персоналізації карти",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 42g; вимоги UdSC",
        parts: [
          {
            text: "Art. 42g",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
          {
            text: "; вимоги UdSC",
          },
        ],
      },
    },
    {
      reviewId: "payment",
      item: {
        kind: "authored-legal-text",
        plainText: "Opłata skarbowa 340 zł",
        parts: [
          {
            text: "Opłata skarbowa 340 zł",
            target: {
              kind: "evidence-document",
              documentId: "stamp-duty-proof",
            },
          },
        ],
      },
      status: "обов’язково",
      level: "required",
      owner: {
        kind: "authored-legal-text",
        plainText: "Заявник · оплата до подання, доказ у MOS",
        parts: [
          {
            text: "Заявник",
          },
          {
            text: " · оплата до подання, доказ у MOS",
          },
        ],
      },
      proves: "Виконання фінансової умови провадження",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 42e і 42s",
        parts: [
          {
            text: "Art. 42e",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
          {
            text: " і ",
          },
          {
            text: "42s",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
        ],
      },
    },
    {
      reviewId: "payment",
      item: {
        kind: "authored-legal-text",
        plainText: "Opłata za kartę 100 zł",
        parts: [
          {
            text: "Opłata za kartę 100 zł",
            target: {
              kind: "evidence-document",
              documentId: "residence-card-fee-proof",
            },
          },
        ],
      },
      status: "обов’язково",
      level: "required",
      owner: {
        kind: "authored-legal-text",
        plainText: "Заявник · оплата до подання, доказ у MOS",
        parts: [
          {
            text: "Заявник",
          },
          {
            text: " · оплата до подання, доказ у MOS",
          },
        ],
      },
      proves: "Оплату виготовлення документа",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 42s",
        parts: [
          {
            text: "Art. 42s",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
        ],
      },
    },
    {
      reviewId: "submission",
      item: {
        kind: "authored-legal-text",
        plainText: "UPO + PDF/XML заяви",
        parts: [
          {
            text: "UPO",
            target: { kind: "evidence-document", documentId: "upo" },
          },
          { text: " + PDF/XML заяви" },
        ],
      },
      status: "контроль",
      level: "control",
      owner: {
        kind: "authored-legal-text",
        plainText: "Заявник / представник · одразу після wysłania",
        parts: [
          {
            text: "Заявник",
          },
          {
            text: " / представник · одразу після wysłania",
          },
        ],
      },
      proves: "Факт, дату й зміст електронного подання",
      law: "MOS; контроль akt sprawy",
    },
    workNotificationEvidence,
    {
      item: {
        kind: "authored-legal-text",
        plainText: "Отримана карта і запис про odbiór",
        parts: [
          {
            text: "Отримана карта і запис про odbiór",
            target: { kind: "evidence-document", documentId: "residence-card" },
          },
        ],
      },
      status: "критично",
      level: "required",
      owner: {
        kind: "authored-legal-text",
        plainText: "Заявник · особисто до 60 днів від інформації",
        parts: [
          { text: "Заявник" },
          { text: " · особисто до 60 днів від інформації" },
        ],
      },
      proves:
        "Отриманий документ та зафіксовану дату його особистого одержання",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 42r",
        parts: [
          {
            text: "Art. 42r",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
        ],
      },
    },
    {
      item: {
        kind: "authored-legal-text",
        plainText: "Електронна заява на карту CUKR",
        parts: [
          {
            text: "Електронна заява на карту CUKR",
            target: {
              kind: "evidence-document",
              documentId: "cukr-application",
            },
          },
        ],
      },
      owner: "Заявник · підписує і надсилає у власному MOS",
      proves: "Звернення саме за CUKR",
      law: "Процедура CUKR UdSC",
      level: "required",
      status: "обов’язково",
    },
    {
      item: {
        kind: "authored-legal-text",
        plainText: "Wezwanie органу",
        parts: [
          {
            text: "Wezwanie органу",
            target: {
              kind: "evidence-document",
              documentId: "authority-summons",
            },
          },
        ],
      },
      owner: "Орган · якщо надсилає вимогу",
      proves: "Зміст окремих вимог до сторони",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 54 KPA",
        parts: [
          {
            text: "Art. 54 KPA",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-54",
            },
          },
        ],
      },
      level: "conditional",
      status: "якщо отримано",
    },
    {
      item: {
        kind: "authored-legal-text",
        plainText: "Підтвердження doręczenia",
        parts: [
          {
            text: "Підтвердження doręczenia",
            target: { kind: "evidence-document", documentId: "delivery-proof" },
          },
        ],
      },
      owner: "Одержувач · після вручення",
      proves: "Канал, адресата і дату вручення",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 39 KPA",
        parts: [
          {
            text: "Art. 39 KPA",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-39",
            },
          },
        ],
      },
      level: "conditional",
      status: "якщо отримано",
    },
    {
      item: {
        kind: "authored-legal-text",
        plainText: "Таблиця вимог із wezwania",
        parts: [
          {
            text: "Таблиця вимог із wezwania",
            target: {
              kind: "evidence-document",
              documentId: "requirements-table",
            },
          },
        ],
      },
      owner: "Працівник справи · перед відповіддю",
      proves: "Робочий зв’язок вимоги, доказу й відповіді",
      law: "Робоча організація відповіді",
      level: "control",
      status: "робочий запис",
    },
    {
      item: {
        kind: "authored-legal-text",
        plainText: "Відповідь на wezwanie",
        parts: [
          {
            text: "Відповідь на wezwanie",
            target: {
              kind: "evidence-document",
              documentId: "response-letter",
            },
          },
        ],
      },
      owner: "Заявник або представник · у строк вимоги",
      proves: "Позицію сторони та подані докази",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 63 KPA",
        parts: [
          {
            text: "Art. 63 KPA",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-63",
            },
          },
        ],
      },
      level: "conditional",
      status: "за wezwania",
    },
    {
      item: {
        kind: "authored-legal-text",
        plainText: "Перелік додатків до відповіді",
        parts: [
          {
            text: "Перелік додатків до відповіді",
            target: {
              kind: "evidence-document",
              documentId: "case-file-index",
            },
          },
        ],
      },
      owner: "Автор відповіді · перед поданням",
      proves: "Зв’язок пунктів відповіді з матеріалами пакета",
      law: "Робочий опис складу пакета",
      level: "control",
      status: "робочий запис",
    },
    {
      item: {
        kind: "authored-legal-text",
        plainText: "Доказ подання відповіді",
        parts: [
          {
            text: "Доказ подання відповіді",
            target: { kind: "evidence-document", documentId: "dispatch-proof" },
          },
        ],
      },
      owner: "Оператор, сервіс або канцелярія · під час подання",
      proves: "Дату, канал та ідентифікатор подання",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 57 KPA",
        parts: [
          {
            text: "Art. 57 KPA",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-57",
            },
          },
        ],
      },
      level: "conditional",
      status: "після відповіді",
    },
    deadlineObstacleEvidence,
  ],
  deadlines: [
    {
      stageId: "status",
      period: "до 7 днів",
      trigger: "від фактичного початку роботи",
      action: "Роботодавець подає powiadomienie PUP",
      consequence:
        "Прострочення ставить під ризик законність поточної роботи; CUKR цього не виправляє заднім числом.",
      law: {
        kind: "authored-legal-text",
        plainText:
          "Art. 5a ustawy o warunkach dopuszczalności powierzania pracy cudzoziemcom",
        parts: [
          {
            text: "Art. 5a ustawy o warunkach dopuszczalności powierzania pracy cudzoziemcom",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/eli/DU/2025/621/ogl",
            },
          },
        ],
      },
    },
    {
      stageId: "filing",
      period: "до 04.03.2027",
      trigger: "кінцева дата приймання заяв",
      action: "Надіслати CUKR через MOS",
      consequence:
        "Після цієї дати спеціальний маршрут недоступний, якщо закон не зміниться.",
      law: "Procedura CUKR UdSC",
    },
    {
      stageId: "procedure",
      period: "180 днів",
      trigger: {
        kind: "authored-legal-text",
        plainText: "від правильної заяви за art. 42g",
        parts: [
          {
            text: "від правильної заяви за ",
          },
          {
            text: "art. 42g",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
        ],
      },
      action: "Нормативний строк обробки",
      consequence:
        "Це не гарантія фактичного odbioru; контролюємо повідомлення й akta.",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 42l",
        parts: [
          {
            text: "Art. 42l",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
        ],
      },
    },
    {
      stageId: "status",
      period: "понад 30 днів",
      trigger: "одноразовий виїзд до отримання CUKR",
      action: "Не допустити втрати UKR під час очікування",
      consequence: "Втрата UKR до odbioru означає невиконання умови CUKR.",
      law: {
        kind: "authored-legal-text",
        plainText: "Правила tymczasowej ochrony + art. 42c",
        parts: [
          {
            text: "Правила tymczasowej ochrony + ",
          },
          {
            text: "art. 42c",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
        ],
      },
    },
    {
      stageId: "decision",
      period: "14 днів",
      trigger: "від doręczenia odmowy",
      action: "Подати odwołanie через wojewodę",
      consequence:
        "Після пропуску рішення стає остаточним, якщо строк не буде поновлено.",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 127–129 KPA",
        parts: [
          {
            text: "Art. 127",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-127",
            },
          },
          {
            text: "–",
          },
          {
            text: "129 KPA",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-129",
            },
          },
        ],
      },
    },
    {
      stageId: "decision",
      period: "60 днів",
      trigger: "від інформації про можливість odbioru",
      action: "Особисто отримати карту",
      consequence:
        "Карту анулюють, zezwolenie не виникне, оплати не повернуть.",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 42r ust. 2",
        parts: [
          {
            text: "Art. 42r ust. 2",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
        ],
      },
    },
    {
      stageId: "decision",
      period: "15 робочих днів",
      trigger: "від зміни місця проживання після CUKR",
      action: "Повідомити właściwego wojewodę",
      consequence: "Порушення обов’язку власниці CUKR.",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 42u",
        parts: [
          {
            text: "Art. 42u",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
        ],
      },
    },
    {
      stageId: "decision",
      period: "≥ 6 місяців",
      trigger: "безперервна відсутність у Польщі після CUKR",
      action: "Контролювати тривалість виїзду",
      consequence: "Підстава для cofnięcia zezwolenia CUKR.",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 42t",
        parts: [
          {
            text: "Art. 42t",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
        ],
      },
    },
  ],
  negativeBranches: [
    {
      title: "Поточний UKR є, а історія статусу неповна",
      trigger:
        "Заявник показує поточний status UKR, але документи не пояснюють його статус на потрібні дати.",
      consequence:
        "Поточний запис не замінює перевірку історії та безперервності. Потрібно також визначити категорію заявника, зокрема для дитини.",
      response:
        "Зіставте історію реєстру з паспортом і виїздами. Якщо запис помилковий або даних бракує, з’ясуйте порядок уточнення в органі, який веде реєстр.",
      material: {
        label: "Перевірити мету перебування",
        description: "Порівняти сусідні маршрути до нового подання.",
        href: "/map/goal-of-stay",
      },
    },
    {
      title: "Wezwanie виконано неповністю",
      trigger:
        "Відповідь не охоплює один із пунктів, не має доказу або подана після строку.",
      consequence:
        "Наслідок залежить від виду вимоги: від pozostawienia bez rozpoznania до рішення на неповному матеріалі.",
      response:
        "Встановити правову підставу кожного пункту, строк і наслідок; за потреби пояснити перешкоду та подати відсутній доказ.",
      material: {
        label: "Розібрати wezwanie",
        description: "Побудувати відповідь пункт за пунктом.",
        href: "/map/wezwanie-workflow",
      },
    },
    {
      title: "Негативне рішення",
      trigger:
        "Organ встановив невиконану умову, негативну передумову або процесуальну перешкоду.",
      consequence:
        "Потрібно відокремити помилку у фактах, доказах, тлумаченні норми й процедурі.",
      response:
        "Зафіксувати дату doręczenia, прочитати uzasadnienie й pouczenie, після чого сформувати żądanie та zarzuty odwołania.",
      material: {
        label: "KPA: оскарження в адміністрації",
        description: "Показує строк, адресата й структуру odwołania.",
        href: "/guide/kpa?module=appeal",
      },
    },
  ],
  sources: [
    {
      label: "Specustawa ukraińska — актуальний текст",
      url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
      note: "Умови, процедура та наслідки CUKR",
    },
    {
      label: "UdSC — procedura CUKR",
      url: "https://www.gov.pl/web/udsc/CUKR-procedura",
      note: "Умови, оплати, строк дії та подання через MOS",
    },
    {
      label: "UdSC — CUKR pytania i odpowiedzi",
      url: "https://www.gov.pl/web/udsc/cukr-QA",
      note: "Офіційні відповіді про подання, отримання карти й обов’язки",
    },
    {
      label: "Ustawa z 23.01.2026 — zmiany dotyczące obywateli Ukrainy",
      url: "https://eli.gov.pl/eli/DU/2026/203/ogl",
      note: "Dz.U. 2026 poz. 203 · спеціальні та перехідні правила з 05.03.2026",
    },
    {
      label: "UdSC — zmiany zasad pobytu obywateli Ukrainy",
      url: "https://www.gov.pl/web/udsc/zmiany-w-szczegolnych-zasadach-dotyczacych-legalnosci-pobytu-obywateli-ukrainy-na-terytorium-rzeczypospolitej-polskiej",
      note: "Офіційне пояснення доступних дозволів після 05.03.2026",
    },
    {
      label: "Zmiana ustawy o cudzoziemcach — 2025/2026",
      url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
      note: "Dz.U. 2025 poz. 1794 · значна частина змін діє з 27.04.2026",
    },
    {
      label: "UdSC — Moduł Obsługi Spraw (MOS)",
      url: "https://www.gov.pl/web/udsc/info-mos",
      note: "Електронні процедури перебування з 27.04.2026",
    },
    {
      label: "UdSC — MOS pytania i odpowiedzi",
      url: "https://www.gov.pl/web/udsc/mos-qa",
      note: "Офіційні практичні відповіді про подання через MOS",
    },
  ],
}
const sourceReference = {
  kind: "external",
  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
} as const

export const cukrCaseGuide: KnowledgeUnit<CaseGuideRoute> = defineKnowledgeUnit(
  {
    id: "case-guide:cukr",
    subject: {
      family: "case-guide",
      reference: { kind: "case-route", routeId: "cukr" },
    },
    summary: route.result,
    claims: [
      {
        id: "route-result",
        kind: "requires-verification",
        text: route.result,
        basis: [{ reference: sourceReference, locator: "route legal basis" }],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: route,
  }
)

export default cukrCaseGuide
