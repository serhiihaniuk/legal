import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { CaseGuideRoute } from "~/data/case-guides/types"

const route: CaseGuideRoute = {
  id: "work",
  tab: "Pobyt + praca",
  eyebrow: "Звичайний тимчасовий pobyt, де головною метою є робота",
  title: "Pobyt czasowy i praca — повний гайд по справі",
  subtitle:
    "Від двох ключів pobyt + praca до treści decyzji та зміни роботодавця",
  overview: [
    "Це єдиний дозвіл, у якому робота є матеріальною метою перебування. Справа не зводиться до umowy o pracę: organ перевіряє весь набір умов, реального роботодавця, узгодженість Załącznika nr 1 і фактичної організації праці.",
    "Право перебувати під час процедури та право працювати під час процедури — різні питання. Подання заяви не виправляє попередню нелегальну роботу й не створює автоматично нового права працювати.",
  ],
  result:
    "Дозвіл на тимчасове перебування з метою роботи в межах, визначених законом і treścią decyzji.",
  forWhom: {
    kind: "authored-legal-text",
    plainText:
      "Для особи, чия реальна головна мета перебування — конкретна робота, і яка виконує матеріальні умови art. 114 та не має негативних передумов.",
    parts: [
      {
        text: "Для особи, чия реальна головна мета перебування — конкретна робота, і яка виконує матеріальні умови ",
      },
      {
        text: "art. 114",
        target: {
          kind: "legal-provision",
          documentId: "ustawa-o-cudzoziemcach",
          provisionId: "ustawa-o-cudzoziemcach-art-114",
        },
      },
      {
        text: " та не має негативних передумов.",
      },
    ],
  },
  notFor:
    "Не для ситуації, де робота другорядна щодо навчання, сім’ї чи іншої підстави, або фактична модель праці не відповідає заявленій.",
  profile: {
    name: "Працівник польської spółki на umowie o pracę",
    description:
      "Для цього маршруту перевіряємо працю на pełny etat за umową o pracę. Дані договору, Załącznika nr 1 і фактичної роботи мають описувати ту саму посаду, винагороду, час і podmiot.",
    facts: [
      {
        label: "Мета",
        value: "праця понад 3 місяці",
      },
      {
        label: "Договір",
        value: "umowa o pracę, pełny etat",
      },
      {
        label: "Роботодавець",
        value: "польська spółka; reprezentacja перевіряється",
      },
      {
        label: "Поточна praca",
        value: "окрема перевірка підстави й powiadomienia",
      },
    ],
    assumption:
      "Страхування, актуальна винагорода, реальність діяльності podmiotu, підписант і фактична організація роботи мають бути доведені.",
  },
  choice: {
    why: {
      kind: "authored-legal-text",
      plainText:
        "Головною й реальною метою перебування є робота, тому матеріальні умови шукаємо в art. 114–126, а KPA використовуємо для процедури й доказів.",
      parts: [
        {
          text: "Головною й реальною метою перебування є робота, тому матеріальні умови шукаємо в ",
        },
        {
          text: "art. 114",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-114",
          },
        },
        {
          text: "–",
        },
        {
          text: "126",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-126",
          },
        },
        {
          text: ", а KPA використовуємо для процедури й доказів.",
        },
      ],
    },
    closestAlternative:
      "Blue Card — якщо робота справді вимагає високих кваліфікацій і виконані її спеціальні умови; CUKR/інша підстава — якщо робота не є матеріальною основою pobytu.",
    gate: {
      kind: "authored-legal-text",
      plainText:
        "Реальна робота, що обґрунтовує pobyt понад 3 місяці, та виконання всіх позитивних умов art. 114.",
      parts: [
        {
          text: "Реальна робота, що обґрунтовує pobyt понад 3 місяці, та виконання всіх позитивних умов ",
        },
        {
          text: "art. 114",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-114",
          },
        },
        {
          text: ".",
        },
      ],
    },
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
        plainText: "art. 114–126 Ustawy o cudzoziemcach",
        parts: [
          {
            text: "art. 114",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-114",
            },
          },
          {
            text: "–",
          },
          {
            text: "126",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-126",
            },
          },
          {
            text: " Ustawy o cudzoziemcach",
          },
        ],
      },
    },
    {
      label: "Ключовий контроль",
      value: {
        kind: "authored-legal-text",
        plainText: "umowa = Załącznik nr 1 = фактичні умови праці",
        parts: [
          {
            text: "umowa = ",
          },
          {
            text: "Załącznik nr 1",
            target: {
              kind: "legal-provision",
              documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
              provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-1",
            },
          },
          {
            text: " = фактичні умови праці",
          },
        ],
      },
    },
  ],
  conditions: [
    {
      condition: "Мета роботи понад 3 місяці",
      modelFact: "працівник має тривалий договір",
      evidence: {
        kind: "authored-legal-text",
        plainText: "umowa + Załącznik nr 1",
        parts: [
          {
            text: "umowa + ",
          },
          {
            text: "Załącznik nr 1",
            target: {
              kind: "legal-provision",
              documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
              provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-1",
            },
          },
        ],
      },
      status: "confirmed",
      risk: "коротка або штучна зайнятість",
      law: {
        kind: "authored-legal-text",
        plainText: "art. 114",
        parts: [
          {
            text: "art. 114",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-114",
            },
          },
        ],
      },
    },
    {
      condition: "Страхування",
      modelFact: "покриття через роботу або іншу належну підставу",
      evidence: "ZUS / інший доказ",
      status: "verify",
      risk: "розрив покриття",
      law: {
        kind: "authored-legal-text",
        plainText: "art. 114",
        parts: [
          {
            text: "art. 114",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-114",
            },
          },
        ],
      },
    },
    {
      condition: "Належна винагорода",
      modelFact: "сума з договору й додатка",
      evidence: "umowa, załącznik, payroll",
      status: "verify",
      risk: "нижча фактична виплата",
      law: {
        kind: "authored-legal-text",
        plainText: "art. 114 у чинній редакції",
        parts: [
          {
            text: "art. 114",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-114",
            },
          },
          {
            text: " у чинній редакції",
          },
        ],
      },
    },
    {
      condition: "Реальна заявлена праця",
      modelFact:
        "spółka керує роботою працівника й не передає його як персонал третій особі",
      evidence: "організація праці, umowy, polecenia",
      status: "verify",
      risk: "outsourcing pracowniczy або невідповідність podmiotu",
      law: {
        kind: "authored-legal-text",
        plainText: "art. 117–118 + закон про працю cudzoziemców",
        parts: [
          {
            text: "art. 117",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-117",
            },
          },
          {
            text: "–",
          },
          {
            text: "118",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-118",
            },
          },
          {
            text: " + закон про працю cudzoziemców",
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
        "Окремо фіксуємо підставу pobytu та підставу виконувати поточну роботу на кожну дату.",
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
          item: "Скани всіх сторінок дійсного паспорта",
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · додає в MOS; оригінал показує особисто",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · додає в MOS; оригінал показує особисто",
              },
            ],
          },
          proves: "Особу, громадянство, подорожі та штампи",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 106e; процедура MOS",
            parts: [
              {
                text: "Art. 106e",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
                },
              },
              {
                text: "; процедура MOS",
              },
            ],
          },
        },
        {
          item: "Umowa o pracę",
          status: "основний доказ",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник + роботодавець · актуальна на момент рішення",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " + роботодавець · актуальна на момент рішення",
              },
            ],
          },
          proves: "Реальну мету перебування, вид і умови зайнятості",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 114",
            parts: [
              {
                text: "Art. 114",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-114",
                },
              },
            ],
          },
        },
        {
          item: "Oryginał паспорта + odciski + wzór podpisu",
          status: "особиста дія",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · на wezwanie не коротше 7 днів",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · на wezwanie не коротше 7 днів",
              },
            ],
          },
          proves: "Особу та виконання формальних умов процедури",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 106e і 106i",
            parts: [
              {
                text: "Art. 106e",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
                },
              },
              {
                text: " і ",
              },
              {
                text: "106i",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
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
        {
          kind: "authored-legal-text",
          plainText:
            "Розкладаємо art. 114, а потім перевіряємо odmowę wszczęcia, odmowę по суті й фактичну модель праці.",
          parts: [
            {
              text: "Розкладаємо ",
            },
            {
              text: "art. 114",
              target: {
                kind: "legal-provision",
                documentId: "ustawa-o-cudzoziemcach",
                provisionId: "ustawa-o-cudzoziemcach-art-114",
              },
            },
            {
              text: ", а потім перевіряємо odmowę wszczęcia, odmowę по суті й фактичну модель праці.",
            },
          ],
        },
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
          item: {
            kind: "authored-legal-text",
            plainText: "Załącznik nr 1",
            parts: [
              {
                text: "Załącznik nr 1",
                target: {
                  kind: "legal-provision",
                  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
                  provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-1",
                },
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: "Роботодавець · електронно заповнює й підписує",
          proves: "Роботодавця, посаду, договір, час і винагороду",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 106d; art. 114 і 118",
            parts: [
              {
                text: "Art. 106d",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
                },
              },
              {
                text: "; ",
              },
              {
                text: "art. 114",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-114",
                },
              },
              {
                text: " і ",
              },
              {
                text: "118",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-118",
                },
              },
            ],
          },
        },
        {
          item: "Umowa o pracę",
          status: "основний доказ",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник + роботодавець · актуальна на момент рішення",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " + роботодавець · актуальна на момент рішення",
              },
            ],
          },
          proves: "Реальну мету перебування, вид і умови зайнятості",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 114",
            parts: [
              {
                text: "Art. 114",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-114",
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
          label: "Карта права: Pobyt + praca",
          description:
            "Відкриває матеріальну підставу, її межі та пов’язані норми.",
          href: "/map/stay-work",
        },
        {
          label: "Найближчий пов’язаний інститут",
          description:
            "Допомагає не змішати цю підставу із сусіднім маршрутом.",
          href: "/map/work-entry",
        },
      ],
    },
    {
      id: "filing",
      title: "Готуємо правильне подання через MOS",
      question: "Хто, куди, коли й у якій формі подає заяву?",
      explanation: [
        "Після вибору підстави визначаємо właściwego wojewodę, електронну форму, підпис, додатки, оплати та особисті дії. Формальна правильність не доводить матеріальні умови, але без неї справа може не отримати належного ходу.",
        {
          kind: "authored-legal-text",
          plainText:
            "Załącznik nr 1 заповнює належний podmiot, а всі дані мають збігатися з договором і MOS.",
          parts: [
            {
              text: "Załącznik nr 1",
              target: {
                kind: "legal-provision",
                documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
                provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-1",
              },
            },
            {
              text: " заповнює належний podmiot, а всі дані мають збігатися з договором і MOS.",
            },
          ],
        },
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
          item: "Електронна заява MOS",
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · заповнює та підписує",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · заповнює та підписує",
              },
            ],
          },
          proves: "Żądanie надання конкретного дозволу й дані заявниці",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 105–107, 106c–106l",
            parts: [
              {
                text: "Art. 105",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-105",
                },
              },
              {
                text: "–",
              },
              {
                text: "107",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-107",
                },
              },
              {
                text: ", ",
              },
              {
                text: "106c",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
                },
              },
              {
                text: "–",
              },
              {
                text: "106l",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
                },
              },
            ],
          },
        },
        {
          item: "Скани всіх сторінок дійсного паспорта",
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · додає в MOS; оригінал показує особисто",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · додає в MOS; оригінал показує особисто",
              },
            ],
          },
          proves: "Особу, громадянство, подорожі та штампи",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 106e; процедура MOS",
            parts: [
              {
                text: "Art. 106e",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
                },
              },
              {
                text: "; процедура MOS",
              },
            ],
          },
        },
        {
          item: "Цифрове фото",
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · при поданні",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · при поданні",
              },
            ],
          },
          proves: "Дані для документа",
          law: "Форма wniosku / MOS",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Załącznik nr 1",
            parts: [
              {
                text: "Załącznik nr 1",
                target: {
                  kind: "legal-provision",
                  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
                  provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-1",
                },
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: "Роботодавець · електронно заповнює й підписує",
          proves: "Роботодавця, посаду, договір, час і винагороду",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 106d; art. 114 і 118",
            parts: [
              {
                text: "Art. 106d",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
                },
              },
              {
                text: "; ",
              },
              {
                text: "art. 114",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-114",
                },
              },
              {
                text: " і ",
              },
              {
                text: "118",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-118",
                },
              },
            ],
          },
        },
        {
          item: "Umowa o pracę",
          status: "основний доказ",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник + роботодавець · актуальна на момент рішення",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " + роботодавець · актуальна на момент рішення",
              },
            ],
          },
          proves: "Реальну мету перебування, вид і умови зайнятості",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 114",
            parts: [
              {
                text: "Art. 114",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-114",
                },
              },
            ],
          },
        },
        {
          item: "Медичне / соціальне страхування",
          status: "за обставинами",
          level: "conditional",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник / роботодавець · ZUS або інший належний доказ",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " / роботодавець · ZUS або інший належний доказ",
              },
            ],
          },
          proves: "Виконання умови страхування",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 114 ust. 1 pkt 1; ust. 4a",
            parts: [
              {
                text: "Art. 114 ust. 1 pkt 1; ust. 4a",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-114",
                },
              },
            ],
          },
        },
        {
          item: "KRS/CEIDG, повноваження підписанта",
          status: "перевірка",
          level: "control",
          owner: "Роботодавець · реєстр або додаток, якщо потрібен",
          proves: "Існування podmiotu та право діяти від його імені",
          law: "Контроль reprezentacji",
        },
        {
          item: "Pełnomocnictwo",
          status: "умовно",
          level: "conditional",
          owner: "Той, хто діє через представника",
          proves: "Право представника підписати або вести справу",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 32–33 KPA + правила MOS",
            parts: [
              {
                text: "Art. 32",
                target: {
                  kind: "legal-provision",
                  documentId: "kpa",
                  provisionId: "kpa-art-32",
                },
              },
              {
                text: "–",
              },
              {
                text: "33 KPA",
                target: {
                  kind: "legal-provision",
                  documentId: "kpa",
                  provisionId: "kpa-art-33",
                },
              },
              {
                text: " + правила MOS",
              },
            ],
          },
        },
        {
          item: "Кваліфікації / tłumaczenie przysięgłe",
          status: "умовно",
          level: "conditional",
          owner: {
            kind: "authored-legal-text",
            plainText:
              "Заявник · для регульованої професії або іноземного документа",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · для регульованої професії або іноземного документа",
              },
            ],
          },
          proves: "Право виконувати конкретну професію і зміст доказу",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 114 + правила доказів",
            parts: [
              {
                text: "Art. 114",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-114",
                },
              },
              {
                text: " + правила доказів",
              },
            ],
          },
        },
        {
          item: "Opłata skarbowa 440 zł",
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · до подання, доказ у MOS",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · до подання, доказ у MOS",
              },
            ],
          },
          proves: "Оплату розгляду заяви",
          law: "Офіційна tabela opłat UdSC",
        },
        {
          item: "Opłata za kartę 100 zł",
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · доказ у пакеті MOS",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · доказ у пакеті MOS",
              },
            ],
          },
          proves: "Оплату виготовлення карти",
          law: "Офіційна tabela opłat UdSC",
        },
        {
          item: "UPO + PDF/XML і перелік вкладень",
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
          proves: "Дату, зміст і комплект електронного подання",
          law: "MOS; контроль akt sprawy",
        },
        {
          item: "Oryginał паспорта + odciski + wzór podpisu",
          status: "особиста дія",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · на wezwanie не коротше 7 днів",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · на wezwanie не коротше 7 днів",
              },
            ],
          },
          proves: "Особу та виконання формальних умов процедури",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 106e і 106i",
            parts: [
              {
                text: "Art. 106e",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
                },
              },
              {
                text: " і ",
              },
              {
                text: "106i",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
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
        "Крім договору перевіряємо страхування, винагороду, reprezentację та — коли орган обґрунтовано сумнівається — діяльність роботодавця.",
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
          item: "Електронна заява MOS",
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · заповнює та підписує",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · заповнює та підписує",
              },
            ],
          },
          proves: "Żądanie надання конкретного дозволу й дані заявниці",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 105–107, 106c–106l",
            parts: [
              {
                text: "Art. 105",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-105",
                },
              },
              {
                text: "–",
              },
              {
                text: "107",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-107",
                },
              },
              {
                text: ", ",
              },
              {
                text: "106c",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
                },
              },
              {
                text: "–",
              },
              {
                text: "106l",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
                },
              },
            ],
          },
        },
        {
          item: "Скани всіх сторінок дійсного паспорта",
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · додає в MOS; оригінал показує особисто",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · додає в MOS; оригінал показує особисто",
              },
            ],
          },
          proves: "Особу, громадянство, подорожі та штампи",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 106e; процедура MOS",
            parts: [
              {
                text: "Art. 106e",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
                },
              },
              {
                text: "; процедура MOS",
              },
            ],
          },
        },
        {
          item: "Цифрове фото",
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · при поданні",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · при поданні",
              },
            ],
          },
          proves: "Дані для документа",
          law: "Форма wniosku / MOS",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Załącznik nr 1",
            parts: [
              {
                text: "Załącznik nr 1",
                target: {
                  kind: "legal-provision",
                  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
                  provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-1",
                },
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: "Роботодавець · електронно заповнює й підписує",
          proves: "Роботодавця, посаду, договір, час і винагороду",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 106d; art. 114 і 118",
            parts: [
              {
                text: "Art. 106d",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
                },
              },
              {
                text: "; ",
              },
              {
                text: "art. 114",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-114",
                },
              },
              {
                text: " і ",
              },
              {
                text: "118",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-118",
                },
              },
            ],
          },
        },
        {
          item: "Umowa o pracę",
          status: "основний доказ",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник + роботодавець · актуальна на момент рішення",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " + роботодавець · актуальна на момент рішення",
              },
            ],
          },
          proves: "Реальну мету перебування, вид і умови зайнятості",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 114",
            parts: [
              {
                text: "Art. 114",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-114",
                },
              },
            ],
          },
        },
        {
          item: "Медичне / соціальне страхування",
          status: "за обставинами",
          level: "conditional",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник / роботодавець · ZUS або інший належний доказ",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " / роботодавець · ZUS або інший належний доказ",
              },
            ],
          },
          proves: "Виконання умови страхування",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 114 ust. 1 pkt 1; ust. 4a",
            parts: [
              {
                text: "Art. 114 ust. 1 pkt 1; ust. 4a",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-114",
                },
              },
            ],
          },
        },
        {
          item: "KRS/CEIDG, повноваження підписанта",
          status: "перевірка",
          level: "control",
          owner: "Роботодавець · реєстр або додаток, якщо потрібен",
          proves: "Існування podmiotu та право діяти від його імені",
          law: "Контроль reprezentacji",
        },
        {
          item: "Pełnomocnictwo",
          status: "умовно",
          level: "conditional",
          owner: "Той, хто діє через представника",
          proves: "Право представника підписати або вести справу",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 32–33 KPA + правила MOS",
            parts: [
              {
                text: "Art. 32",
                target: {
                  kind: "legal-provision",
                  documentId: "kpa",
                  provisionId: "kpa-art-32",
                },
              },
              {
                text: "–",
              },
              {
                text: "33 KPA",
                target: {
                  kind: "legal-provision",
                  documentId: "kpa",
                  provisionId: "kpa-art-33",
                },
              },
              {
                text: " + правила MOS",
              },
            ],
          },
        },
        {
          item: "Кваліфікації / tłumaczenie przysięgłe",
          status: "умовно",
          level: "conditional",
          owner: {
            kind: "authored-legal-text",
            plainText:
              "Заявник · для регульованої професії або іноземного документа",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · для регульованої професії або іноземного документа",
              },
            ],
          },
          proves: "Право виконувати конкретну професію і зміст доказу",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 114 + правила доказів",
            parts: [
              {
                text: "Art. 114",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-114",
                },
              },
              {
                text: " + правила доказів",
              },
            ],
          },
        },
        {
          item: "Opłata skarbowa 440 zł",
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · до подання, доказ у MOS",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · до подання, доказ у MOS",
              },
            ],
          },
          proves: "Оплату розгляду заяви",
          law: "Офіційна tabela opłat UdSC",
        },
        {
          item: "Opłata za kartę 100 zł",
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · доказ у пакеті MOS",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · доказ у пакеті MOS",
              },
            ],
          },
          proves: "Оплату виготовлення карти",
          law: "Офіційна tabela opłat UdSC",
        },
        {
          item: "UPO + PDF/XML і перелік вкладень",
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
          proves: "Дату, зміст і комплект електронного подання",
          law: "MOS; контроль akt sprawy",
        },
        {
          item: "Powiadomienie PUP",
          status: "окремий обов’язок",
          level: "external",
          owner: "Роботодавець · поточна робота і визначені зміни",
          proves: "Законність праці на підставі правил для громадян України",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 5a + przepisy przejściowe",
            parts: [
              {
                text: "Art. 5a",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              {
                text: " + przepisy przejściowe",
              },
            ],
          },
        },
        {
          item: "Oryginał паспорта + odciski + wzór podpisu",
          status: "особиста дія",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · на wezwanie не коротше 7 днів",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · на wezwanie не коротше 7 днів",
              },
            ],
          },
          proves: "Особу та виконання формальних умов процедури",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 106e і 106i",
            parts: [
              {
                text: "Art. 106e",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
                },
              },
              {
                text: " і ",
              },
              {
                text: "106i",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
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
        "Не змішуємо braki formalne, osobiste stawiennictwo й wezwanie про матеріальні докази: строки та наслідки різні.",
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
          item: "Скани всіх сторінок дійсного паспорта",
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · додає в MOS; оригінал показує особисто",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · додає в MOS; оригінал показує особисто",
              },
            ],
          },
          proves: "Особу, громадянство, подорожі та штампи",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 106e; процедура MOS",
            parts: [
              {
                text: "Art. 106e",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
                },
              },
              {
                text: "; процедура MOS",
              },
            ],
          },
        },
        {
          item: "Pełnomocnictwo",
          status: "умовно",
          level: "conditional",
          owner: "Той, хто діє через представника",
          proves: "Право представника підписати або вести справу",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 32–33 KPA + правила MOS",
            parts: [
              {
                text: "Art. 32",
                target: {
                  kind: "legal-provision",
                  documentId: "kpa",
                  provisionId: "kpa-art-32",
                },
              },
              {
                text: "–",
              },
              {
                text: "33 KPA",
                target: {
                  kind: "legal-provision",
                  documentId: "kpa",
                  provisionId: "kpa-art-33",
                },
              },
              {
                text: " + правила MOS",
              },
            ],
          },
        },
        {
          item: "UPO + PDF/XML і перелік вкладень",
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
          proves: "Дату, зміст і комплект електронного подання",
          law: "MOS; контроль akt sprawy",
        },
        {
          item: "Oryginał паспорта + odciski + wzór podpisu",
          status: "особиста дія",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · на wezwanie не коротше 7 днів",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · на wezwanie не коротше 7 днів",
              },
            ],
          },
          proves: "Особу та виконання формальних умов процедури",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 106e і 106i",
            parts: [
              {
                text: "Art. 106e",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
                },
              },
              {
                text: " і ",
              },
              {
                text: "106i",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
                },
              },
            ],
          },
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
        "Після рішення читаємо, які умови праці реально вписані, чи діє exemption, і які зміни вимагають повідомлення або нової дії.",
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
          item: "Opłata za kartę 100 zł",
          status: "обов’язково",
          level: "required",
          owner: {
            kind: "authored-legal-text",
            plainText: "Заявник · доказ у пакеті MOS",
            parts: [
              {
                text: "Заявник",
              },
              {
                text: " · доказ у пакеті MOS",
              },
            ],
          },
          proves: "Оплату виготовлення карти",
          law: "Офіційна tabela opłat UdSC",
        },
        {
          item: "Powiadomienie PUP",
          status: "окремий обов’язок",
          level: "external",
          owner: "Роботодавець · поточна робота і визначені зміни",
          proves: "Законність праці на підставі правил для громадян України",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 5a + przepisy przejściowe",
            parts: [
              {
                text: "Art. 5a",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
                },
              },
              {
                text: " + przepisy przejściowe",
              },
            ],
          },
        },
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
          label: "Обов’язки роботодавця",
          description:
            "Перевірити повідомлення, відповідність договору й зміни після рішення.",
          href: "/map/employer-duties",
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
      item: "Електронна заява MOS",
      status: "обов’язково",
      level: "required",
      owner: {
        kind: "authored-legal-text",
        plainText: "Заявник · заповнює та підписує",
        parts: [
          {
            text: "Заявник",
          },
          {
            text: " · заповнює та підписує",
          },
        ],
      },
      proves: "Żądanie надання конкретного дозволу й дані заявниці",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 105–107, 106c–106l",
        parts: [
          {
            text: "Art. 105",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-105",
            },
          },
          {
            text: "–",
          },
          {
            text: "107",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-107",
            },
          },
          {
            text: ", ",
          },
          {
            text: "106c",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
            },
          },
          {
            text: "–",
          },
          {
            text: "106l",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
            },
          },
        ],
      },
    },
    {
      item: "Скани всіх сторінок дійсного паспорта",
      status: "обов’язково",
      level: "required",
      owner: {
        kind: "authored-legal-text",
        plainText: "Заявник · додає в MOS; оригінал показує особисто",
        parts: [
          {
            text: "Заявник",
          },
          {
            text: " · додає в MOS; оригінал показує особисто",
          },
        ],
      },
      proves: "Особу, громадянство, подорожі та штампи",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 106e; процедура MOS",
        parts: [
          {
            text: "Art. 106e",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
            },
          },
          {
            text: "; процедура MOS",
          },
        ],
      },
    },
    {
      item: "Цифрове фото",
      status: "обов’язково",
      level: "required",
      owner: {
        kind: "authored-legal-text",
        plainText: "Заявник · при поданні",
        parts: [
          {
            text: "Заявник",
          },
          {
            text: " · при поданні",
          },
        ],
      },
      proves: "Дані для документа",
      law: "Форма wniosku / MOS",
    },
    {
      item: {
        kind: "authored-legal-text",
        plainText: "Załącznik nr 1",
        parts: [
          {
            text: "Załącznik nr 1",
            target: {
              kind: "legal-provision",
              documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
              provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-1",
            },
          },
        ],
      },
      status: "обов’язково",
      level: "required",
      owner: "Роботодавець · електронно заповнює й підписує",
      proves: "Роботодавця, посаду, договір, час і винагороду",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 106d; art. 114 і 118",
        parts: [
          {
            text: "Art. 106d",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
            },
          },
          {
            text: "; ",
          },
          {
            text: "art. 114",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-114",
            },
          },
          {
            text: " і ",
          },
          {
            text: "118",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-118",
            },
          },
        ],
      },
    },
    {
      item: "Umowa o pracę",
      status: "основний доказ",
      level: "required",
      owner: {
        kind: "authored-legal-text",
        plainText: "Заявник + роботодавець · актуальна на момент рішення",
        parts: [
          {
            text: "Заявник",
          },
          {
            text: " + роботодавець · актуальна на момент рішення",
          },
        ],
      },
      proves: "Реальну мету перебування, вид і умови зайнятості",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 114",
        parts: [
          {
            text: "Art. 114",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-114",
            },
          },
        ],
      },
    },
    {
      item: "Медичне / соціальне страхування",
      status: "за обставинами",
      level: "conditional",
      owner: {
        kind: "authored-legal-text",
        plainText: "Заявник / роботодавець · ZUS або інший належний доказ",
        parts: [
          {
            text: "Заявник",
          },
          {
            text: " / роботодавець · ZUS або інший належний доказ",
          },
        ],
      },
      proves: "Виконання умови страхування",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 114 ust. 1 pkt 1; ust. 4a",
        parts: [
          {
            text: "Art. 114 ust. 1 pkt 1; ust. 4a",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-114",
            },
          },
        ],
      },
    },
    {
      item: "KRS/CEIDG, повноваження підписанта",
      status: "перевірка",
      level: "control",
      owner: "Роботодавець · реєстр або додаток, якщо потрібен",
      proves: "Існування podmiotu та право діяти від його імені",
      law: "Контроль reprezentacji",
    },
    {
      item: "Pełnomocnictwo",
      status: "умовно",
      level: "conditional",
      owner: "Той, хто діє через представника",
      proves: "Право представника підписати або вести справу",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 32–33 KPA + правила MOS",
        parts: [
          {
            text: "Art. 32",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-32",
            },
          },
          {
            text: "–",
          },
          {
            text: "33 KPA",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-33",
            },
          },
          {
            text: " + правила MOS",
          },
        ],
      },
    },
    {
      item: "Кваліфікації / tłumaczenie przysięgłe",
      status: "умовно",
      level: "conditional",
      owner: {
        kind: "authored-legal-text",
        plainText:
          "Заявник · для регульованої професії або іноземного документа",
        parts: [
          {
            text: "Заявник",
          },
          {
            text: " · для регульованої професії або іноземного документа",
          },
        ],
      },
      proves: "Право виконувати конкретну професію і зміст доказу",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 114 + правила доказів",
        parts: [
          {
            text: "Art. 114",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-114",
            },
          },
          {
            text: " + правила доказів",
          },
        ],
      },
    },
    {
      item: "Opłata skarbowa 440 zł",
      status: "обов’язково",
      level: "required",
      owner: {
        kind: "authored-legal-text",
        plainText: "Заявник · до подання, доказ у MOS",
        parts: [
          {
            text: "Заявник",
          },
          {
            text: " · до подання, доказ у MOS",
          },
        ],
      },
      proves: "Оплату розгляду заяви",
      law: "Офіційна tabela opłat UdSC",
    },
    {
      item: "Opłata za kartę 100 zł",
      status: "обов’язково",
      level: "required",
      owner: {
        kind: "authored-legal-text",
        plainText: "Заявник · доказ у пакеті MOS",
        parts: [
          {
            text: "Заявник",
          },
          {
            text: " · доказ у пакеті MOS",
          },
        ],
      },
      proves: "Оплату виготовлення карти",
      law: "Офіційна tabela opłat UdSC",
    },
    {
      item: "UPO + PDF/XML і перелік вкладень",
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
      proves: "Дату, зміст і комплект електронного подання",
      law: "MOS; контроль akt sprawy",
    },
    {
      item: "Powiadomienie PUP",
      status: "окремий обов’язок",
      level: "external",
      owner: "Роботодавець · поточна робота і визначені зміни",
      proves: "Законність праці на підставі правил для громадян України",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 5a + przepisy przejściowe",
        parts: [
          {
            text: "Art. 5a",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
          {
            text: " + przepisy przejściowe",
          },
        ],
      },
    },
    {
      item: "Oryginał паспорта + odciski + wzór podpisu",
      status: "особиста дія",
      level: "required",
      owner: {
        kind: "authored-legal-text",
        plainText: "Заявник · на wezwanie не коротше 7 днів",
        parts: [
          {
            text: "Заявник",
          },
          {
            text: " · на wezwanie не коротше 7 днів",
          },
        ],
      },
      proves: "Особу та виконання формальних умов процедури",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 106e і 106i",
        parts: [
          {
            text: "Art. 106e",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
            },
          },
          {
            text: " і ",
          },
          {
            text: "106i",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
            },
          },
        ],
      },
    },
  ],
  deadlines: [
    {
      period: "до 7 днів",
      trigger: "від початку роботи",
      action: "Роботодавець подає powiadomienie PUP",
      consequence:
        "Подання pobytowego wniosku не легалізує попередню або поточну роботу саме по собі.",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 5a ustawy o zatrudnianiu cudzoziemców",
        parts: [
          {
            text: "Art. 5a ustawy o zatrudnianiu cudzoziemców",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
        ],
      },
    },
    {
      period: "мін. 7 днів",
      trigger: "wezwanie до usunięcia braków formalnych",
      action: "Виправити формальні недоліки",
      consequence: "Невиконання → pozostawienie wniosku bez rozpoznania.",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 64 § 2 KPA",
        parts: [
          {
            text: "Art. 64 § 2 KPA",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-64",
            },
          },
        ],
      },
    },
    {
      period: "мін. 7 днів",
      trigger: "wezwanie до особистої явки",
      action: "Паспорт, odciski palców, wzór podpisu",
      consequence: "Невиконання правильного wezwania → umorzenie postępowania.",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 106e і 106i",
        parts: [
          {
            text: "Art. 106e",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
            },
          },
          {
            text: " і ",
          },
          {
            text: "106i",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
            },
          },
        ],
      },
    },
    {
      period: "мін. 14 днів",
      trigger: "wezwanie про матеріальні докази",
      action: "Подати документи для умов дозволу",
      consequence:
        "Organ вирішує за наявним матеріалом; недоведена умова може вести до odmowy.",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 106f",
        parts: [
          {
            text: "Art. 106f",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
            },
          },
        ],
      },
    },
    {
      period: "60 днів",
      trigger: {
        kind: "authored-legal-text",
        plainText: "після формальної повноти та етапу art. 106f",
        parts: [
          {
            text: "після формальної повноти та етапу ",
          },
          {
            text: "art. 106f",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
            },
          },
        ],
      },
      action: "Нормативний строк першої інстанції",
      consequence:
        "Не рахується автоматично від wysłania; фіксуємо момент старту окремо.",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 112a",
        parts: [
          {
            text: "Art. 112a",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-112a",
            },
          },
        ],
      },
    },
    {
      period: "14 днів",
      trigger: "від doręczenia decyzji odmownej",
      action: "Odwołanie до Szefa UdSC через wojewodę",
      consequence:
        "Пропуск закриває звичайний шлях апеляції, якщо строк не поновлено.",
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
      period: "90 днів",
      trigger: "належно подане odwołanie",
      action: "Нормативний строк другої інстанції",
      consequence:
        "Це строк закону, а не гарантія конкретної календарної дати.",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 112a ust. 4",
        parts: [
          {
            text: "Art. 112a ust. 4",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-112a",
            },
          },
        ],
      },
    },
    {
      period: "15 робочих днів",
      trigger: "від втрати роботи",
      action: "Письмово повідомити właściwego wojewodę",
      consequence:
        "Своєчасність має значення для захисного механізму й ризику cofnięcia.",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 121 і 123",
        parts: [
          {
            text: "Art. 121",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-121",
            },
          },
          {
            text: " і ",
          },
          {
            text: "123",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-123",
            },
          },
        ],
      },
    },
    {
      period: "до 7 днів",
      trigger: "від визначених змін праці",
      action: "Нове powiadomienie PUP за потреби",
      consequence:
        "Тригери: вид договору, посада/вид роботи, зменшення часу або винагороди.",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 5a + przepisy przejściowe",
        parts: [
          {
            text: "Art. 5a",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
          {
            text: " + przepisy przejściowe",
          },
        ],
      },
    },
  ],
  negativeBranches: [
    {
      title: "Маршрут не відповідає фактам",
      trigger: {
        kind: "authored-legal-text",
        plainText:
          "Не виконується вирішальний критерій: Реальна робота, що обґрунтовує pobyt понад 3 місяці, та виконання всіх позитивних умов art. 114.",
        parts: [
          {
            text: "Не виконується вирішальний критерій: Реальна робота, що обґрунтовує pobyt понад 3 місяці, та виконання всіх позитивних умов ",
          },
          {
            text: "art. 114",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-114",
            },
          },
          {
            text: ".",
          },
        ],
      },
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
      label:
        "Ustawa o warunkach dopuszczalności powierzania pracy cudzoziemcom — ELI",
      url: "https://eli.gov.pl/eli/DU/2025/621/ogl",
      note: "Dz.U. 2025 poz. 621 · чинна з 01.06.2025",
    },
    {
      label: "Zmiana zasad powierzania pracy — 2026",
      url: "https://eli.gov.pl/eli/DU/2026/473/ogl",
      note: "Dz.U. 2026 poz. 473 · зміни з 08.07.2026",
    },
    {
      label: "Specustawa ukraińska — актуальний текст",
      url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
      note: "Умови, процедура та наслідки CUKR",
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

export const workCaseGuide: KnowledgeUnit<CaseGuideRoute> = defineKnowledgeUnit(
  {
    id: "case-guide:work",
    subject: {
      family: "case-guide",
      reference: { kind: "case-route", routeId: "work" },
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
  }
)

export default workCaseGuide
