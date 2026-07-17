import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { CaseGuideRoute } from "~/data/case-guides/types"

const route: CaseGuideRoute = {
  id: "long-term-eu",
  tab: "Rezydent UE",
  eyebrow: "Rezydent długoterminowy Unii Europejskiej",
  title: "Rezydent długoterminowy UE — повний гайд по справі",
  subtitle:
    "П’ятирічна хронологія, перерви, дохід, страхування й польська мова",
  overview: [
    "Це ретроспективна справа: organ аналізує не лише стан на день подання, а повну історію належно зарахованого перебування й стабільності доходу за потрібні періоди.",
    "П’ять календарних років у Польщі не дорівнюють автоматично п’яти рокам для цієї норми. Окремі періоди не входять або рахуються частково, а виїзди треба перевіряти за правилами безперервності.",
  ],
  result:
    "Безстрокове zezwolenie rezydenta długoterminowego UE після підтвердження всього ретроспективного тесту.",
  forWhom:
    "Для особи з належно порахованим безперервним перебуванням, стабільним доходом, страхуванням і знанням польської мови з урахуванням винятків.",
  notFor:
    "Не лише через довгий фізичний pobyt; важливі юридична якість періодів, перерви та повний матеріальний тест.",
  profile: {
    name: "Кандидат на status rezydenta UE",
    description:
      "Для цього маршруту перевіряємо кілька типів pobytu, періоди навчання й роботи та виїзди за межі Польщі. Потрібно порахувати кожен період за законом, а не скласти календарні роки.",
    facts: [
      {
        label: "Період",
        value: "понад 5 календарних років",
      },
      {
        label: "Підстави",
        value: "studia + praca",
      },
      {
        label: "Виїзди",
        value: "кілька поїздок різної тривалості",
      },
      {
        label: "Дохід",
        value: "кілька джерел за роками",
      },
    ],
    assumption:
      "Зарахування навчання, безперервність, стабільність доходу, страхування й документ мови ще перевіряються по періодах.",
  },
  choice: {
    why: "Заявник не має категоріальної підстави pobytu stałego, але його історія може виконувати окремий тест rezydenta UE.",
    closestAlternative: {
      kind: "authored-legal-text",
      plainText:
        "Pobyt stały — лише за конкретною категорією art. 195; черговий pobyt czasowy — якщо ретроспективні умови ще не виконані.",
      parts: [
        {
          text: "Pobyt stały — лише за конкретною категорією ",
        },
        {
          text: "art. 195",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-195",
          },
        },
        {
          text: "; черговий pobyt czasowy — якщо ретроспективні умови ще не виконані.",
        },
      ],
    },
    gate: "П’ять років пораховані за спеціальними правилами, а дохід, страхування й польська мова виконані в потрібному обсязі.",
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
      label: "Матеріальна база",
      value: {
        kind: "authored-legal-text",
        plainText: "art. 211–222a",
        parts: [
          {
            text: "art. 211",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-211",
            },
          },
          {
            text: "–",
          },
          {
            text: "222a",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/eli/DU/2026/203/ogl",
            },
          },
        ],
      },
    },
    {
      label: "Ключовий артефакт",
      value: "таблиця періодів і виїздів по днях",
    },
  ],
  conditions: [
    {
      condition: "Належно пораховані 5 років",
      modelFact: "понад 5 календарних років",
      evidence: "таблиця підстав, рішень і meldunków",
      status: "verify",
      risk: "частина періодів не входить або рахується частково",
      law: {
        kind: "authored-legal-text",
        plainText: "art. 211–212",
        parts: [
          {
            text: "art. 211",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-211",
            },
          },
          {
            text: "–",
          },
          {
            text: "212",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-212",
            },
          },
        ],
      },
    },
    {
      condition: "Безперервність і виїзди",
      modelFact: "кілька поїздок",
      evidence: "паспорт, квитки, реєстри",
      status: "verify",
      risk: "перевищення допустимих перерв",
      law: {
        kind: "authored-legal-text",
        plainText: "art. 212",
        parts: [
          {
            text: "art. 212",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-212",
            },
          },
        ],
      },
    },
    {
      condition: "Стабільний дохід",
      modelFact: "робота з кількох джерел",
      evidence: "PIT, umowy, bank, ZUS",
      status: "verify",
      risk: "дохід не виконує тест у потрібні роки",
      law: {
        kind: "authored-legal-text",
        plainText: "art. 211",
        parts: [
          {
            text: "art. 211",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-211",
            },
          },
        ],
      },
    },
    {
      condition: "Страхування й мова",
      modelFact: "покриття та документ польської",
      evidence: "ZUS/polis + допустимий документ",
      status: "verify",
      risk: "неприйнятна форма або виняток не діє",
      law: {
        kind: "authored-legal-text",
        plainText: "art. 211–212",
        parts: [
          {
            text: "art. 211",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-211",
            },
          },
          {
            text: "–",
          },
          {
            text: "212",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-212",
            },
          },
        ],
      },
    },
  ],
  stages: [
    {
      id: "status",
      title: "Фіксуємо особу, статус і критичні дати",
      question: "Хто ця особа на дату кожної важливої події?",
      explanation: [
        "Справа починається не з форми MOS, а з хронології. Громадянство, документ, чинна підстава перебування, виїзди та попередні заяви визначають, чи маршрут узагалі доступний і які правила діятимуть під час розгляду.",
        "Будуємо повну таблицю pobytu, підстав, рішень, прогалин і виїздів — без округлення до років.",
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
          item: "Дійсний паспорт, фото й особиста дія",
          status: "обов’язково",
          level: "required",
          owner: "Заявник · подання та wezwanie органу",
          proves: "Особу й виконання формальних вимог",
          law: "Спеціальна процедура pobytowa",
        },
        {
          item: "Таблиця всіх підстав pobytu",
          status: "основний доказ",
          level: "required",
          owner: "Заявник або автор документа · актуально на дату перевірки",
          proves: "Належний п’ятирічний період",
          law: {
            kind: "authored-legal-text",
            plainText: "art. 211–212",
            parts: [
              {
                text: "art. 211",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-211",
                },
              },
              {
                text: "–",
              },
              {
                text: "212",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-212",
                },
              },
            ],
          },
        },
        {
          item: "Паспорт і історія виїздів",
          status: "основний доказ",
          level: "required",
          owner: "Заявник або автор документа · актуально на дату перевірки",
          proves: "Безперервність",
          law: {
            kind: "authored-legal-text",
            plainText: "art. 212",
            parts: [
              {
                text: "art. 212",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-212",
                },
              },
            ],
          },
        },
        {
          item: "Хронологія перебування, виїздів і попередніх справ",
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
        "Класифікуємо кожен період: входить, не входить або рахується частково; окремо перевіряємо Blue Card і studia.",
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
          item: "Матриця умов обраного маршруту",
          status: "робочий документ",
          level: "control",
          owner: "Працівник легалізації · до заповнення заяви",
          proves:
            "Кожну позитивну умову, виняток, негативну передумову та факт, якого ще бракує",
          law: "Ustawa o cudzoziemcach або інший lex specialis маршруту",
        },
        {
          item: "Письмовий висновок про вибір підстави",
          status: "робочий документ",
          level: "control",
          owner:
            "Працівник легалізації · після порівняння найближчих маршрутів",
          proves:
            "Чому факти відповідають саме цій підставі та чому сусідня підстава не є точнішою",
          law: "Правова кваліфікація cel pobytu",
        },
        {
          item: "Таблиця всіх підстав pobytu",
          status: "основний доказ",
          level: "required",
          owner: "Заявник або автор документа · актуально на дату перевірки",
          proves: "Належний п’ятирічний період",
          law: {
            kind: "authored-legal-text",
            plainText: "art. 211–212",
            parts: [
              {
                text: "art. 211",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-211",
                },
              },
              {
                text: "–",
              },
              {
                text: "212",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-212",
                },
              },
            ],
          },
        },
        {
          item: "Паспорт і історія виїздів",
          status: "основний доказ",
          level: "required",
          owner: "Заявник або автор документа · актуально на дату перевірки",
          proves: "Безперервність",
          law: {
            kind: "authored-legal-text",
            plainText: "art. 212",
            parts: [
              {
                text: "art. 212",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-212",
                },
              },
            ],
          },
        },
        {
          item: "PIT, umowy, bank, ZUS",
          status: "основний доказ",
          level: "required",
          owner: "Заявник або автор документа · актуально на дату перевірки",
          proves: "Стабільність доходу й страхування",
          law: {
            kind: "authored-legal-text",
            plainText: "art. 211",
            parts: [
              {
                text: "art. 211",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-211",
                },
              },
            ],
          },
        },
        {
          item: "Документ польської мови",
          status: "основний доказ",
          level: "required",
          owner: "Заявник або автор документа · актуально на дату перевірки",
          proves: "Виконання мовної умови або винятку",
          law: {
            kind: "authored-legal-text",
            plainText: "art. 211–212",
            parts: [
              {
                text: "art. 211",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-211",
                },
              },
              {
                text: "–",
              },
              {
                text: "212",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-212",
                },
              },
            ],
          },
        },
      ],
      risks: [
        {
          title: "Вибір за назвою документа",
          explanation:
            "Назва карти або форми не визначає матеріальну підставу. Вирішальними є реальна головна мета і факти, передбачені конкретною нормою.",
          check:
            "Запишіть одним реченням очікуваний статус і норму, яка його створює, а потім перевірте кожну її умову.",
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
          label: "Карта права: Rezydent UE",
          description:
            "Відкриває матеріальну підставу, її межі та пов’язані норми.",
          href: "/map/long-term-eu",
        },
        {
          label: "Найближчий пов’язаний інститут",
          description:
            "Допомагає не змішати цю підставу із сусіднім маршрутом.",
          href: "/map/permanent-resident",
        },
      ],
    },
    {
      id: "filing",
      title: "Готуємо правильне подання через MOS",
      question: "Хто, куди, коли й у якій формі подає заяву?",
      explanation: [
        "Після вибору підстави визначаємо właściwego wojewodę, електронну форму, підпис, додатки, оплати та особисті дії. Формальна правильність не доводить матеріальні умови, але без неї справа може не отримати належного ходу.",
        "MOS заповнюється лише після готової ретроспективної таблиці, бо саме вона визначає пакет доказів.",
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
          item: "Wniosek MOS + UPO",
          status: "обов’язково",
          level: "required",
          owner: "Заявник / представник · у момент подання",
          proves: "Дату, зміст і спосіб початку справи",
          law: "Ustawa o cudzoziemcach + процедура MOS",
        },
        {
          item: "Дійсний паспорт, фото й особиста дія",
          status: "обов’язково",
          level: "required",
          owner: "Заявник · подання та wezwanie органу",
          proves: "Особу й виконання формальних вимог",
          law: "Спеціальна процедура pobytowa",
        },
        {
          item: "Таблиця всіх підстав pobytu",
          status: "основний доказ",
          level: "required",
          owner: "Заявник або автор документа · актуально на дату перевірки",
          proves: "Належний п’ятирічний період",
          law: {
            kind: "authored-legal-text",
            plainText: "art. 211–212",
            parts: [
              {
                text: "art. 211",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-211",
                },
              },
              {
                text: "–",
              },
              {
                text: "212",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-212",
                },
              },
            ],
          },
        },
        {
          item: "Паспорт і історія виїздів",
          status: "основний доказ",
          level: "required",
          owner: "Заявник або автор документа · актуально на дату перевірки",
          proves: "Безперервність",
          law: {
            kind: "authored-legal-text",
            plainText: "art. 212",
            parts: [
              {
                text: "art. 212",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-212",
                },
              },
            ],
          },
        },
        {
          item: "PIT, umowy, bank, ZUS",
          status: "основний доказ",
          level: "required",
          owner: "Заявник або автор документа · актуально на дату перевірки",
          proves: "Стабільність доходу й страхування",
          law: {
            kind: "authored-legal-text",
            plainText: "art. 211",
            parts: [
              {
                text: "art. 211",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-211",
                },
              },
            ],
          },
        },
        {
          item: "Документ польської мови",
          status: "основний доказ",
          level: "required",
          owner: "Заявник або автор документа · актуально на дату перевірки",
          proves: "Виконання мовної умови або винятку",
          law: {
            kind: "authored-legal-text",
            plainText: "art. 211–212",
            parts: [
              {
                text: "art. 211",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-211",
                },
              },
              {
                text: "–",
              },
              {
                text: "212",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-212",
                },
              },
            ],
          },
        },
        {
          item: "Індекс вкладень і контрольна копія подання",
          status: "робочий документ",
          level: "control",
          owner: "Особа, яка комплектує пакет · безпосередньо перед wysłaniem",
          proves:
            "Точний склад поданого пакета, назви файлів, версії документів і можливість відтворити заяву",
          law: "Контроль treści podania та майбутніх akt sprawy",
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
        "Кожна матеріальна умова отримує окремий рядок: норма, факт, який треба встановити, доказ, період і можливе протиріччя. Документ, який не доводить жодної умови, не робить пакет сильнішим; натомість один слабкий ключовий факт може визначити всю справу.",
        "Доказова матриця охоплює pobyt, виїзди, дохід за потрібні періоди, страхування, мову й tytuł do lokalu, якщо вимагається.",
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
          item: "Wniosek MOS + UPO",
          status: "обов’язково",
          level: "required",
          owner: "Заявник / представник · у момент подання",
          proves: "Дату, зміст і спосіб початку справи",
          law: "Ustawa o cudzoziemcach + процедура MOS",
        },
        {
          item: "Дійсний паспорт, фото й особиста дія",
          status: "обов’язково",
          level: "required",
          owner: "Заявник · подання та wezwanie органу",
          proves: "Особу й виконання формальних вимог",
          law: "Спеціальна процедура pobytowa",
        },
        {
          item: "Таблиця всіх підстав pobytu",
          status: "основний доказ",
          level: "required",
          owner: "Заявник або автор документа · актуально на дату перевірки",
          proves: "Належний п’ятирічний період",
          law: {
            kind: "authored-legal-text",
            plainText: "art. 211–212",
            parts: [
              {
                text: "art. 211",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-211",
                },
              },
              {
                text: "–",
              },
              {
                text: "212",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-212",
                },
              },
            ],
          },
        },
        {
          item: "Паспорт і історія виїздів",
          status: "основний доказ",
          level: "required",
          owner: "Заявник або автор документа · актуально на дату перевірки",
          proves: "Безперервність",
          law: {
            kind: "authored-legal-text",
            plainText: "art. 212",
            parts: [
              {
                text: "art. 212",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-212",
                },
              },
            ],
          },
        },
        {
          item: "PIT, umowy, bank, ZUS",
          status: "основний доказ",
          level: "required",
          owner: "Заявник або автор документа · актуально на дату перевірки",
          proves: "Стабільність доходу й страхування",
          law: {
            kind: "authored-legal-text",
            plainText: "art. 211",
            parts: [
              {
                text: "art. 211",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-211",
                },
              },
            ],
          },
        },
        {
          item: "Документ польської мови",
          status: "основний доказ",
          level: "required",
          owner: "Заявник або автор документа · актуально на дату перевірки",
          proves: "Виконання мовної умови або винятку",
          law: {
            kind: "authored-legal-text",
            plainText: "art. 211–212",
            parts: [
              {
                text: "art. 211",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-211",
                },
              },
              {
                text: "–",
              },
              {
                text: "212",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-212",
                },
              },
            ],
          },
        },
        {
          item: "Доказова матриця: умова → факт → доказ",
          status: "робочий документ",
          level: "control",
          owner: "Працівник легалізації · до подання та після кожного wezwania",
          proves:
            "Який документ доводить кожну умову, за який період і де залишається прогалина або суперечність",
          law: "KPA — ustalenie stanu faktycznego та ocena dowodów",
        },
      ],
      risks: [
        {
          title: "Формальна повнота без матеріального доказу",
          explanation:
            "У пакеті можуть бути всі названі файли, але жоден із них не встановлює ключовий факт у потрібний період.",
          check:
            "Для кожної умови вкажіть один головний доказ, дату або період, джерело і те, чого він не підтверджує.",
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
        "Organ може просити старі рішення, декларації й пояснення розривів; akta та власний архів мають відтворити кожен період.",
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
          item: "Wniosek MOS + UPO",
          status: "обов’язково",
          level: "required",
          owner: "Заявник / представник · у момент подання",
          proves: "Дату, зміст і спосіб початку справи",
          law: "Ustawa o cudzoziemcach + процедура MOS",
        },
        {
          item: "Дійсний паспорт, фото й особиста дія",
          status: "обов’язково",
          level: "required",
          owner: "Заявник · подання та wezwanie органу",
          proves: "Особу й виконання формальних вимог",
          law: "Спеціальна процедура pobytowa",
        },
        {
          item: "Журнал doręczeń, строків і процесуальних дій",
          status: "робочий документ",
          level: "control",
          owner:
            "Працівник легалізації / представник · від першого doręczenia до завершення справи",
          proves:
            "Дату й спосіб вручення, початок кожного строку, виконану дію та доказ її подання",
          law: "KPA + спеціальні строки процедури pobytowej",
        },
        {
          item: "Wezwania та відповіді з індексом додатків",
          status: "робочий документ",
          level: "control",
          owner: "Адресат wezwania · окремий комплект для кожної вимоги",
          proves: "Який пункт вимоги виконано, яким доказом і в який строк",
          law: "KPA та спеціальна процедура dowodowa",
        },
        {
          item: "Копія або нотатка з akt sprawy",
          status: "робочий документ",
          level: "control",
          owner:
            "Сторона / представник · перед рішенням і після появи нового матеріалу",
          proves:
            "Які докази має organ, які факти вважає спірними та чи є матеріал, на який треба відреагувати",
          law: "KPA — czynny udział strony та dostęp do akt",
        },
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
        "Після рішення статус безстроковий, але документ має строк ważności; окремо контролюємо втрату статусу й мобільність.",
      ],
      actor: "Заявник, wojewoda, а в негативній гілці — Szef UdSC",
      actions: [
        "Зіставити rozstrzygnięcie з заявленою підставою й установленими фактами.",
        "Зафіксувати момент виникнення статусу та окремо строк ważności карти.",
        "Виписати post-decision duties, тригери зміни та строк оскарження.",
      ],
      outcome:
        "Картка наслідків рішення: статус, praca, зміни, оскарження й наступний маршрут.",
      documents: [
        {
          item: "Decyzja або інший акт, що завершує маршрут",
          status: "робочий документ",
          level: "control",
          owner: "Заявник / представник · одразу після doręczenia",
          proves:
            "Точний результат, строк статусу, умови праці, uzasadnienie та доступний засіб захисту",
          law: "KPA + матеріальна норма обраного маршруту",
        },
        {
          item: "Доказ doręczenia рішення та отримання карти",
          status: "робочий документ",
          level: "control",
          owner: "Заявник / представник · у день кожної окремої події",
          proves:
            "Початок строку оскарження та — якщо закон так визначає — момент виконання або виникнення статусу",
          law: "Pouczenie, KPA та спеціальні правила видачі документа",
        },
        {
          item: "План обов’язків після рішення",
          status: "робочий документ",
          level: "control",
          owner:
            "Працівник легалізації разом із заявником · до закриття внутрішнього контролю справи",
          proves:
            "Строки повідомлень, допустимі зміни, обов’язки щодо праці, адреси, навчання або діяльності",
          law: "Post-decision duties конкретного маршруту",
        },
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
            "Строк захисту й post-decision duties запускаються різними подіями та не контролюються автоматично після закриття справи.",
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
          label: "Архів довгої справи",
          description:
            "Зберегти ретроспективні докази й рішення для майбутніх перевірок.",
          href: "/map/case-file",
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
      item: "Wniosek MOS + UPO",
      status: "обов’язково",
      level: "required",
      owner: "Заявник / представник · у момент подання",
      proves: "Дату, зміст і спосіб початку справи",
      law: "Ustawa o cudzoziemcach + процедура MOS",
    },
    {
      item: "Дійсний паспорт, фото й особиста дія",
      status: "обов’язково",
      level: "required",
      owner: "Заявник · подання та wezwanie органу",
      proves: "Особу й виконання формальних вимог",
      law: "Спеціальна процедура pobytowa",
    },
    {
      item: "Таблиця всіх підстав pobytu",
      status: "основний доказ",
      level: "required",
      owner: "Заявник або автор документа · актуально на дату перевірки",
      proves: "Належний п’ятирічний період",
      law: {
        kind: "authored-legal-text",
        plainText: "art. 211–212",
        parts: [
          {
            text: "art. 211",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-211",
            },
          },
          {
            text: "–",
          },
          {
            text: "212",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-212",
            },
          },
        ],
      },
    },
    {
      item: "Паспорт і історія виїздів",
      status: "основний доказ",
      level: "required",
      owner: "Заявник або автор документа · актуально на дату перевірки",
      proves: "Безперервність",
      law: {
        kind: "authored-legal-text",
        plainText: "art. 212",
        parts: [
          {
            text: "art. 212",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-212",
            },
          },
        ],
      },
    },
    {
      item: "PIT, umowy, bank, ZUS",
      status: "основний доказ",
      level: "required",
      owner: "Заявник або автор документа · актуально на дату перевірки",
      proves: "Стабільність доходу й страхування",
      law: {
        kind: "authored-legal-text",
        plainText: "art. 211",
        parts: [
          {
            text: "art. 211",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-211",
            },
          },
        ],
      },
    },
    {
      item: "Документ польської мови",
      status: "основний доказ",
      level: "required",
      owner: "Заявник або автор документа · актуально на дату перевірки",
      proves: "Виконання мовної умови або винятку",
      law: {
        kind: "authored-legal-text",
        plainText: "art. 211–212",
        parts: [
          {
            text: "art. 211",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-211",
            },
          },
          {
            text: "–",
          },
          {
            text: "212",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-212",
            },
          },
        ],
      },
    },
  ],
  deadlines: [
    {
      period: "строк із wezwania",
      trigger: "належне doręczenie вимоги органу",
      action: "Виконати кожен пункт і зберегти доказ подання відповіді.",
      consequence:
        "Залежить від типу вимоги: формальний недолік, матеріальна нестача або невиконана особиста дія мають різні наслідки.",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 64 KPA та спеціальні норми Ustawy o cudzoziemcach",
        parts: [
          {
            text: "Art. 64 KPA",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-64",
            },
          },
          {
            text: " та спеціальні норми Ustawy o cudzoziemcach",
          },
        ],
      },
    },
    {
      period: "строк із pouczenia",
      trigger: "doręczenie decyzji або postanowienia",
      action: "Звірити засіб захисту, адресата й початок відліку з KPA.",
      consequence:
        "Пропуск може закрити звичайний шлях оскарження, якщо строк не буде поновлено.",
      law: "KPA — odwołanie / zażalenie залежно від виду акта",
    },
    {
      period: "після зміни факту",
      trigger: "зміна мети, сімейного зв’язку, навчання, роботи або діяльності",
      action:
        "Перевірити спеціальний обов’язок повідомлення, зміни дозволу або нової заяви.",
      consequence:
        "Неповідомлена зміна може вплинути на чинність дозволу або наступну справу.",
      law: "Спеціальні правила маршруту Rezydent UE",
    },
  ],
  negativeBranches: [
    {
      title: "Маршрут не відповідає фактам",
      trigger:
        "Не виконується вирішальний критерій: П’ять років пораховані за спеціальними правилами, а дохід, страхування й польська мова виконані в потрібному обсязі.",
      consequence:
        "Документи не виправлять неправильну правову кваліфікацію; справа ризикує odmową wszczęcia або odmową по суті.",
      response:
        "Повернутися до карти цілей, вибрати точну підставу й перебудувати матрицю умов до подання.",
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
      label: "Ustawa o cudzoziemcach — ELI",
      url: "https://eli.gov.pl/eli/DU/2025/1079/ogl",
      note: "Dz.U. 2025 poz. 1079 · перевіряй разом зі змінами 2025–2026",
    },
    {
      label: "UdSC — rezydent długoterminowy UE",
      url: "https://www.gov.pl/web/udsc/zezwolenie-na-pobyt-rezydenta-dlugoterminowego-ue2",
      note: "Офіційна інформація для заявника",
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
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const

export const longTermEuCaseGuide: KnowledgeUnit<CaseGuideRoute> =
  defineKnowledgeUnit({
    id: "case-guide:long-term-eu",
    subject: {
      family: "case-guide",
      reference: { kind: "case-route", routeId: "long-term-eu" },
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
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: route,
  })

export default longTermEuCaseGuide
