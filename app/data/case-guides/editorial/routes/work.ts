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

const workFilingCertificate: CaseGuideDocument = {
  item: {
    kind: "authored-legal-text",
    plainText: "Zaświadczenie про подання заяви",
    parts: [
      {
        text: "Zaświadczenie про подання заяви",
        target: {
          kind: "evidence-document",
          documentId: "proceeding-certificate",
        },
      },
    ],
  },
  status: "після перевірки заяви",
  level: "control",
  owner:
    "Видає wojewoda; заявник отримує після перевірки заяви, не готує як вкладення до неї",
  proves:
    "Подання за умовами, зазначеними в довідці; дата видачі відрізняється від дати подання",
  law: foreignersLaw.text`${foreignersLaw.article("108", "Art. 108")}: своєчасність, формальні вимоги та перебування під час розгляду; окремі правила видачі довідки.`,
}

const route: CaseGuideRoute = {
  id: "work",
  tab: "Pobyt + praca",
  eyebrow: "Karta pobytu на підставі роботи",
  title: "Pobyt czasowy i praca. Гайд по справі",
  subtitle:
    "Як підготувати заяву, підтвердити умови роботи й довести справу до рішення та карти",
  overview: [
    "Цей гайд стосується zezwolenia na pobyt czasowy i pracę, дозволу на тимчасове перебування та роботу. Він веде через перевірку поточного статусу, підготовку заяви, збирання доказів, відповіді органу й читання рішення. Karta pobytu є документом, що підтверджує отриманий дозвіл.",
    "На кожному етапі важливо розділяти право перебувати в Польщі та право виконувати конкретну роботу. Подання заяви саме по собі не створює нового права працювати. Умови нинішньої роботи перевіряють окремо від дозволу, про який людина просить.",
  ],
  result:
    "Дозвіл на тимчасове перебування та роботу на умовах, зазначених у рішенні, і карта, яка його підтверджує.",
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
      "У цьому прикладі людина планує працювати в польській компанії на повний робочий час і залишатися в Польщі понад три місяці. Це вихідна ситуація для розбору, а не підтвердження права на дозвіл. Pełny etat описує цей приклад: інший обсяг роботи чи вид договору сам по собі не виключає цього маршруту.",
    facts: [
      {
        label: "Чому людина залишається в Польщі?",
        value:
          "У цьому прикладі людина називає роботу головною причиною перебування. Треба встановити, яку саме роботу людина виконуватиме та чому вона потребує перебування понад три місяці.",
        explanation: {
          kind: "authored-legal-text",
          plainText:
            "У договорі та Załączniku nr 1 зіставляємо період роботи, посаду, оплату й робочий час. Самої фрази «хочу карту побиту» для пояснення мети недостатньо.",
          parts: [
            {
              text: "У ",
            },
            {
              text: "договорі",
              target: {
                kind: "evidence-document",
                documentId: "employment-contract",
              },
            },
            {
              text: " та ",
            },
            {
              text: "Załączniku nr 1",
              target: {
                kind: "evidence-document",
                documentId: "employment-annex-1",
              },
            },
            {
              text: " зіставляємо період роботи, посаду, оплату й робочий час. Самої фрази «хочу карту побиту» для пояснення мети недостатньо.",
            },
          ],
        },
      },
      {
        label: "Що означає umowa o pracę для цієї справи?",
        value:
          "Договір описує домовленість про роботу. Для дозволу важливі також розмір винагороди й медичне страхування; назва договору не замінює перевірки цих умов.",
        explanation: {
          kind: "authored-legal-text",
          plainText:
            "Зіставляємо оплату з вимогами, що діють для справи. Щодо медичного страхування з’ясовуємо, чи воно вже є, або виникне обов’язкове страхування внаслідок роботи після отримання дозволу. Це різні ситуації для підтвердження умови.",
          parts: [
            {
              text: "Зіставляємо оплату з вимогами, що діють для справи. Щодо ",
            },
            {
              text: "медичного страхування",
              target: {
                kind: "evidence-document",
                documentId: "health-insurance",
              },
            },
            {
              text: " з’ясовуємо, чи воно вже є, або виникне обов’язкове страхування внаслідок роботи після отримання дозволу. Це різні ситуації для підтвердження умови.",
            },
          ],
        },
      },
      {
        label: "Хто насправді є роботодавцем?",
        value:
          "У прикладі договір укладає польська spółka. Окремо з’ясовуємо, хто має право підписувати документи від її імені та хто фактично організовує роботу.",
        explanation: {
          kind: "authored-legal-text",
          plainText:
            "Відомості KRS допомагають перевірити reprezentację, тобто повноваження діяти від імені компанії. Реєстраційний запис сам по собі не пояснює її діяльність або те, хто ставить завдання працівнику. Для цього потрібні відомості про фактичну організацію роботи.",
          parts: [
            {
              text: "Відомості ",
            },
            {
              text: "KRS",
              target: {
                kind: "evidence-document",
                documentId: "business-register-information",
              },
            },
            {
              text: " допомагають перевірити reprezentację, тобто повноваження діяти від імені компанії. Реєстраційний запис сам по собі не пояснює її діяльність або те, хто ставить завдання працівнику. Для цього потрібні відомості про ",
            },
            {
              text: "фактичну організацію роботи",
              target: {
                kind: "evidence-document",
                documentId: "work-organisation-evidence",
              },
            },
            {
              text: ".",
            },
          ],
        },
      },
      {
        label: "Чи може людина працювати вже зараз?",
        value:
          "У вихідній ситуації немає даних про поточну підставу перебування й доступ до роботи. Тому зробити висновок про законність нинішньої роботи ще не можна.",
        explanation: {
          kind: "authored-legal-text",
          plainText:
            "Спочатку читаємо документи про поточний статус і встановлюємо підставу виконання саме цієї роботи. Powiadomienie перевіряємо, якщо застосовується відповідний порядок працевлаштування. Воно не є універсальною вимогою для кожного іноземця.",
          parts: [
            {
              text: "Спочатку читаємо ",
            },
            {
              text: "документи про поточний статус",
              target: {
                kind: "evidence-document",
                documentId: "status-documents",
              },
            },
            {
              text: " і встановлюємо підставу виконання саме цієї роботи. ",
            },
            {
              text: "Powiadomienie",
              target: {
                kind: "evidence-document",
                documentId: "ukraine-work-notification",
              },
            },
            {
              text: " перевіряємо, якщо застосовується відповідний порядок працевлаштування. Воно не є універсальною вимогою для кожного іноземця.",
            },
          ],
        },
      },
    ],
    assumption:
      "Отже, ми маємо опис запланованої роботи, але ще не висновок про виконання умов дозволу. Далі встановлюємо поточний статус, зіставляємо умови роботи з доказами та перевіряємо перешкоди для обраної підстави.",
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
              provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-2",
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
      factToEstablish: "Чи є робота реальною метою перебування понад 3 місяці?",
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
              provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-2",
            },
          },
        ],
      },

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
      factToEstablish:
        "На якій підставі особа має медичне покриття та який період воно охоплює?",
      evidence: "ZUS / інший доказ",

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
      factToEstablish:
        "Яка винагорода діє за договором і додатками та чи відповідає вона вимогам дозволу?",
      evidence:
        "umowa, załącznik, розрахункові листи та дані про нарахування і виплату зарплати",

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
      factToEstablish:
        "Хто фактично організовує роботу, дає вказівки й контролює працівника?",
      evidence: "організація праці, umowy, polecenia",

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
        "Спочатку встановіть, на якій підставі людина зараз перебуває в Польщі, коли ця підстава закінчується та чи були виїзди або попередні заяви. Дати потрібні для оцінки своєчасності подання й правил, що діють у конкретній справі.",
        "Право працювати перевіряють окремо: який документ або звільнення охоплює нинішнього роботодавця та фактичну роботу. Якщо підстава перебування й підстава роботи мають різні строки, обидва строки мають залишатися видимими в хронології.",
      ],
      actor: "Працівник легалізації разом із заявником",
      actions: [
        "Зіставте паспорт, документи про перебування та дати в’їздів, виїздів і попередніх заяв.",
        "Встановіть підставу нинішньої роботи та умови, які вона охоплює.",
        "Зафіксуйте найближчу дату, до якої потрібно подати заяву або виконати іншу дію. Відокремте підтверджені дати від відомостей зі слів заявника.",
      ],
      outcome:
        "Хронологія з підставами перебування й роботи, строками їх чинності та найближчою дією.",
      documents: [
        {
          reviewId: "passport",
          item: {
            kind: "authored-legal-text",
            plainText: "Скани всіх сторінок дійсного паспорта",
            parts: [
              {
                text: "Скани всіх сторінок дійсного паспорта",
                target: { kind: "evidence-document", documentId: "passport" },
              },
            ],
          },
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
          reviewId: "contract",
          item: {
            kind: "authored-legal-text",
            plainText: "Umowa o pracę",
            parts: [
              {
                text: "Umowa o pracę",
                target: {
                  kind: "evidence-document",
                  documentId: "employment-contract",
                },
              },
            ],
          },
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
          reviewId: "passport",
          item: {
            kind: "authored-legal-text",
            plainText: "Oryginał паспорта + odciski + wzór podpisu",
            parts: [
              {
                text: "Oryginał паспорта",
                target: { kind: "evidence-document", documentId: "passport" },
              },
              { text: " + odciski + wzór podpisu" },
            ],
          },
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
        "Визначте, яку роботу має охопити майбутній дозвіл: хто є роботодавцем, які обов’язки виконуватиме людина, за яким договором і на який період. Потім зіставте ці факти з умовами дозволу. Самої назви посади або наявності договору недостатньо.",
        {
          kind: "authored-legal-text",
          plainText:
            "Розкладаємо art. 114, а потім перевіряємо odmowę wszczęcia, odmowę по суті й фактичну модель праці.",
          parts: [
            { text: "Розкладаємо " },
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
        "Встановіть роботодавця, вид договору, обов’язки, винагороду, робочий час та запланований період роботи.",
        "Перевірте умови дозволу й обставини, які перешкоджають його наданню. Врахуйте застосовні винятки.",
        "Якщо факти відповідають іншій підставі, зокрема Blue Card, порівняйте її умови перед вибором заяви.",
      ],
      outcome:
        "Визначено підставу та конкретні умови роботи. Зрозуміло, що вже підтверджено і яких відомостей бракує.",
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
        {
          reviewId: "annex",
          item: {
            kind: "authored-legal-text",
            plainText: "Załącznik nr 1",
            parts: [
              {
                text: "Załącznik nr 1",
                target: {
                  kind: "evidence-document",
                  documentId: "employment-annex-1",
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
          reviewId: "contract",
          item: {
            kind: "authored-legal-text",
            plainText: "Umowa o pracę",
            parts: [
              {
                text: "Umowa o pracę",
                target: {
                  kind: "evidence-document",
                  documentId: "employment-contract",
                },
              },
            ],
          },
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
          title: "Договір не пояснює фактичної організації праці",
          explanation:
            "Роботодавцем у договорі є одна spółka, але вказівки працівнику дає інший podmiot. Назва договору між компаніями не пояснює їхніх реальних ролей.",
          check:
            "Встановіть, хто розподіляє завдання, контролює роботу й визначає її умови. Порівняйте факти із заявленою моделлю до підготовки додатка роботодавця.",
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
        "Після вибору підстави підготуйте подання до компетентного wojewody. Заява, відомості роботодавця й договір мають описувати ті самі умови. Підпис і потрібні додатки дозволяють надати заяві належний хід; вони ще не означають, що всі умови дозволу доведені.",
        {
          kind: "authored-legal-text",
          plainText:
            "Załącznik nr 1 заповнює та підписує роботодавець або уповноважена ним особа. Умови роботи мають збігатися з договором і заявою в MOS.",
          parts: [
            {
              text: "Załącznik nr 1",
              target: {
                kind: "legal-provision",
                documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
                provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-2",
              },
            },
            {
              text: " заповнює та підписує роботодавець або уповноважена ним особа. Умови роботи мають збігатися з договором і заявою в MOS.",
            },
          ],
        },
      ],
      actor:
        "Заявник і уповноважений підписант роботодавця; представник допомагає в межах повноваження",
      actions: [
        "Перевірте компетентний орган, застосовний спосіб подання, підпис, оплати та потрібні додатки.",
        "Перед поданням зіставте дані заявника і роботодавця, посаду, оплату та робочий час у заяві й доказах.",
        "Збережіть підтвердження подання та точну копію заяви з додатками. За потреби вона покаже, що саме і коли отримав орган.",
      ],
      outcome:
        "Заяву подано узгодженим пакетом. Є підтвердження дати подання та копії переданих документів.",
      documents: [
        {
          reviewId: "application",
          item: {
            kind: "authored-legal-text",
            plainText: "Електронна заява MOS",
            parts: [
              {
                text: "Електронна заява MOS",
                target: {
                  kind: "evidence-document",
                  documentId: "mos-application",
                },
              },
            ],
          },
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
          reviewId: "passport",
          item: {
            kind: "authored-legal-text",
            plainText: "Скани всіх сторінок дійсного паспорта",
            parts: [
              {
                text: "Скани всіх сторінок дійсного паспорта",
                target: { kind: "evidence-document", documentId: "passport" },
              },
            ],
          },
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
          reviewId: "annex",
          item: {
            kind: "authored-legal-text",
            plainText: "Załącznik nr 1",
            parts: [
              {
                text: "Załącznik nr 1",
                target: {
                  kind: "evidence-document",
                  documentId: "employment-annex-1",
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
          reviewId: "contract",
          item: {
            kind: "authored-legal-text",
            plainText: "Umowa o pracę",
            parts: [
              {
                text: "Umowa o pracę",
                target: {
                  kind: "evidence-document",
                  documentId: "employment-contract",
                },
              },
            ],
          },
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
          reviewId: "insurance",
          item: {
            kind: "authored-legal-text",
            plainText: "Медичне страхування / підтвердження ZUS",
            parts: [
              {
                text: "Медичне страхування",
                target: {
                  kind: "evidence-document",
                  documentId: "health-insurance",
                },
              },
              {
                text: " / ",
              },
              {
                text: "підтвердження ZUS",
                target: {
                  kind: "evidence-document",
                  documentId: "zus-confirmation",
                },
              },
            ],
          },
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
          reviewId: "representation",
          item: {
            kind: "authored-legal-text",
            plainText: "KRS/CEIDG, повноваження підписанта",
            parts: [
              {
                text: "KRS/CEIDG",
                target: {
                  kind: "evidence-document",
                  documentId: "business-register-information",
                },
              },
              { text: ", повноваження підписанта" },
            ],
          },
          status: "перевірка",
          level: "control",
          owner: "Роботодавець · реєстр або додаток, якщо потрібен",
          proves: "Існування podmiotu та право діяти від його імені",
          law: "Контроль reprezentacji",
        },
        {
          reviewId: "attorney",
          item: {
            kind: "authored-legal-text",
            plainText: "Pełnomocnictwo",
            parts: [
              {
                text: "Pełnomocnictwo",
                target: {
                  kind: "evidence-document",
                  documentId: "power-of-attorney",
                },
              },
            ],
          },
          status: "умовно",
          level: "conditional",
          owner: "Той, хто діє через представника",
          proves:
            "Повноваження діяти у визначеному обсязі; підпис заявника в MOS не замінює",
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
          reviewId: "translation",
          item: {
            kind: "authored-legal-text",
            plainText: "Кваліфікації / tłumaczenie przysięgłe",
            parts: [
              {
                text: "Кваліфікації",
                target: {
                  kind: "evidence-document",
                  documentId: "qualification-evidence",
                },
              },
              {
                text: " / ",
              },
              {
                text: "tłumaczenie przysięgłe",
                target: {
                  kind: "evidence-document",
                  documentId: "sworn-translation",
                },
              },
            ],
          },
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
          reviewId: "payment",
          item: {
            kind: "authored-legal-text",
            plainText: "Opłata skarbowa 440 zł",
            parts: [
              {
                text: "Opłata skarbowa 440 zł",
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
          proves: "Сплату збору за надання дозволу",
          law: "Офіційна tabela opłat UdSC",
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
          reviewId: "submission",
          item: {
            kind: "authored-legal-text",
            plainText: "UPO + PDF/XML і перелік вкладень",
            parts: [
              {
                text: "UPO",
                target: { kind: "evidence-document", documentId: "upo" },
              },
              { text: " + PDF/XML і перелік вкладень" },
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
          proves: "Дату, зміст і комплект електронного подання",
          law: "MOS; контроль akt sprawy",
        },
        {
          reviewId: "passport",
          item: {
            kind: "authored-legal-text",
            plainText: "Oryginał паспорта + odciski + wzór podpisu",
            parts: [
              {
                text: "Oryginał паспорта",
                target: { kind: "evidence-document", documentId: "passport" },
              },
              { text: " + odciski + wzór podpisu" },
            ],
          },
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
      title: "Збираємо докази для кожної умови дозволу",
      question: "Який факт і який доказ виконують кожну умову?",
      explanation: [
        "Договір описує домовленість про роботу. Інші документи допомагають перевірити винагороду, страхування, повноваження підписанта та фактичні умови. Для кожної умови визначте, який документ її підтверджує і на який період він поширюється.",
        "Умовний приклад. У договорі зазначено одну зарплату, а у відомостях роботодавця іншу. Пізніший підписаний додаток до договору може пояснити зміну, якщо містить нову суму та дату її застосування. Тоді орган бачить послідовність змін. Без цього дві суми залишаються суперечністю; пояснення такої розбіжності ще не доводить виконання інших умов дозволу.",
      ],
      actor: "Працівник легалізації, заявник і автори зовнішніх документів",
      actions: [
        "Зіставте докази з умовами дозволу: роботою, винагородою, страхуванням та іншими вимогами, що діють у справі.",
        "Перевірте, чи збігаються дати, суми, обов’язки та дані роботодавця. Для змінених умов додайте документ із датою зміни.",
        "Підготуйте пояснення конкретних розбіжностей і визначте, які докази ще потрібно отримати.",
      ],
      outcome:
        "До кожної умови є доказ або названа прогалина. Документи описують узгоджені умови роботи та їхні зміни.",
      documents: [
        workFilingCertificate,
        {
          reviewId: "application",
          item: {
            kind: "authored-legal-text",
            plainText: "Електронна заява MOS",
            parts: [
              {
                text: "Електронна заява MOS",
                target: {
                  kind: "evidence-document",
                  documentId: "mos-application",
                },
              },
            ],
          },
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
          reviewId: "passport",
          item: {
            kind: "authored-legal-text",
            plainText: "Скани всіх сторінок дійсного паспорта",
            parts: [
              {
                text: "Скани всіх сторінок дійсного паспорта",
                target: { kind: "evidence-document", documentId: "passport" },
              },
            ],
          },
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
          reviewId: "annex",
          item: {
            kind: "authored-legal-text",
            plainText: "Załącznik nr 1",
            parts: [
              {
                text: "Załącznik nr 1",
                target: {
                  kind: "evidence-document",
                  documentId: "employment-annex-1",
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
          reviewId: "contract",
          item: {
            kind: "authored-legal-text",
            plainText: "Umowa o pracę",
            parts: [
              {
                text: "Umowa o pracę",
                target: {
                  kind: "evidence-document",
                  documentId: "employment-contract",
                },
              },
            ],
          },
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
          reviewId: "insurance",
          item: {
            kind: "authored-legal-text",
            plainText: "Медичне страхування / підтвердження ZUS",
            parts: [
              {
                text: "Медичне страхування",
                target: {
                  kind: "evidence-document",
                  documentId: "health-insurance",
                },
              },
              {
                text: " / ",
              },
              {
                text: "підтвердження ZUS",
                target: {
                  kind: "evidence-document",
                  documentId: "zus-confirmation",
                },
              },
            ],
          },
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
          reviewId: "representation",
          item: {
            kind: "authored-legal-text",
            plainText: "KRS/CEIDG, повноваження підписанта",
            parts: [
              {
                text: "KRS/CEIDG",
                target: {
                  kind: "evidence-document",
                  documentId: "business-register-information",
                },
              },
              { text: ", повноваження підписанта" },
            ],
          },
          status: "перевірка",
          level: "control",
          owner: "Роботодавець · реєстр або додаток, якщо потрібен",
          proves: "Існування podmiotu та право діяти від його імені",
          law: "Контроль reprezentacji",
        },
        {
          reviewId: "attorney",
          item: {
            kind: "authored-legal-text",
            plainText: "Pełnomocnictwo",
            parts: [
              {
                text: "Pełnomocnictwo",
                target: {
                  kind: "evidence-document",
                  documentId: "power-of-attorney",
                },
              },
            ],
          },
          status: "умовно",
          level: "conditional",
          owner: "Той, хто діє через представника",
          proves:
            "Повноваження діяти у визначеному обсязі; підпис заявника в MOS не замінює",
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
          reviewId: "translation",
          item: {
            kind: "authored-legal-text",
            plainText: "Кваліфікації / tłumaczenie przysięgłe",
            parts: [
              {
                text: "Кваліфікації",
                target: {
                  kind: "evidence-document",
                  documentId: "qualification-evidence",
                },
              },
              {
                text: " / ",
              },
              {
                text: "tłumaczenie przysięgłe",
                target: {
                  kind: "evidence-document",
                  documentId: "sworn-translation",
                },
              },
            ],
          },
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
          reviewId: "payment",
          item: {
            kind: "authored-legal-text",
            plainText: "Opłata skarbowa 440 zł",
            parts: [
              {
                text: "Opłata skarbowa 440 zł",
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
          proves: "Сплату збору за надання дозволу",
          law: "Офіційна tabela opłat UdSC",
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
          reviewId: "submission",
          item: {
            kind: "authored-legal-text",
            plainText: "UPO + PDF/XML і перелік вкладень",
            parts: [
              {
                text: "UPO",
                target: { kind: "evidence-document", documentId: "upo" },
              },
              { text: " + PDF/XML і перелік вкладень" },
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
          proves: "Дату, зміст і комплект електронного подання",
          law: "MOS; контроль akt sprawy",
        },
        {
          reviewId: "notification",
          item: {
            kind: "authored-legal-text",
            plainText: "Powiadomienie PUP",
            parts: [
              {
                text: "Powiadomienie PUP",
                target: {
                  kind: "evidence-document",
                  documentId: "ukraine-work-notification",
                },
              },
            ],
          },
          status: "окремий обов’язок",
          level: "external",
          owner: "Роботодавець · поточна робота і визначені зміни",
          proves: "Законність праці на підставі правил для громадян України",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 5a; art. 41 ustawy z 23.01.2026",
            parts: [
              {
                text: "Art. 5a",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/621/ogl",
                },
              },
              {
                text: "; ",
              },
              {
                text: "art. 41 ustawy z 23.01.2026",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2026/203/ogl",
                },
              },
            ],
          },
        },
        {
          reviewId: "passport",
          item: {
            kind: "authored-legal-text",
            plainText: "Oryginał паспорта + odciski + wzór podpisu",
            parts: [
              {
                text: "Oryginał паспорта",
                target: { kind: "evidence-document", documentId: "passport" },
              },
              { text: " + odciski + wzór podpisu" },
            ],
          },
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
          title: "Різні суми в договорі та Załączniku nr 1",
          explanation:
            "Договір містить попередню зарплату, а додаток роботодавця вже показує нову. Без дати зміни незрозуміло, які умови реально діють.",
          check:
            "Знайдіть підписаний aneks і дату його застосування. Якщо це помилка, попросіть виправити відповідний документ; не обирайте довільно більшу суму.",
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
        foreignersLaw.text`UPO підтверджує отримання заяви системою. Після перевірки з’являється окреме zaświadczenie, довідка про подання за ${foreignersLaw.article("108", "Art. 108")}. Її звіряють із датою подання та формальними вимогами. Це не вкладення, яке потрібно підготувати до заяви, і не рішення про надання дозволу.`,
        "Після подання орган може вимагати виправлення заяви, особистої явки або додаткових доказів. Wezwanie потрібно прочитати повністю: що саме вимагається, від якої події рахується строк і який наслідок зазначено за невиконання.",
        "Brak formalny стосується вимог до самої заяви, наприклад підпису. Вимога підтвердити зарплату стосується умов дозволу. Надіслати відсутній підпис і довести розмір оплати є різними діями, навіть якщо обидві вимоги містяться в одному листі.",
      ],
      actor: "Wojewoda, заявник і представник",
      actions: [
        "Зафіксуйте дату та спосіб вручення листа. Випишіть строк відповіді й кожну окрему вимогу.",
        "На кожен пункт дайте відповідь відповідним документом або поясненням. Збережіть копію відповіді та підтвердження її подання.",
        "Якщо під час розгляду змінилися умови роботи, передайте органу актуальні дані. Перед рішенням перевірте, чи у справі залишилися невирішені розбіжності.",
      ],
      outcome:
        "На кожну вимогу є відповідь і підтвердження подання. У справі містяться актуальні умови роботи.",
      documents: [
        workFilingCertificate,
        {
          reviewId: "passport",
          item: {
            kind: "authored-legal-text",
            plainText: "Скани всіх сторінок дійсного паспорта",
            parts: [
              {
                text: "Скани всіх сторінок дійсного паспорта",
                target: { kind: "evidence-document", documentId: "passport" },
              },
            ],
          },
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
          reviewId: "attorney",
          item: {
            kind: "authored-legal-text",
            plainText: "Pełnomocnictwo",
            parts: [
              {
                text: "Pełnomocnictwo",
                target: {
                  kind: "evidence-document",
                  documentId: "power-of-attorney",
                },
              },
            ],
          },
          status: "умовно",
          level: "conditional",
          owner: "Той, хто діє через представника",
          proves:
            "Повноваження діяти у визначеному обсязі; підпис заявника в MOS не замінює",
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
          reviewId: "submission",
          item: {
            kind: "authored-legal-text",
            plainText: "UPO + PDF/XML і перелік вкладень",
            parts: [
              {
                text: "UPO",
                target: { kind: "evidence-document", documentId: "upo" },
              },
              { text: " + PDF/XML і перелік вкладень" },
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
          proves: "Дату, зміст і комплект електронного подання",
          law: "MOS; контроль akt sprawy",
        },
        {
          reviewId: "passport",
          item: {
            kind: "authored-legal-text",
            plainText: "Oryginał паспорта + odciski + wzór podpisu",
            parts: [
              {
                text: "Oryginał паспорта",
                target: { kind: "evidence-document", documentId: "passport" },
              },
              { text: " + odciski + wzór podpisu" },
            ],
          },
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
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Запис органу про відбитки або їх відсутність",
            parts: [
              {
                text: "Запис органу про відбитки або їх відсутність",
                target: {
                  kind: "evidence-document",
                  documentId: "fingerprint-record",
                },
              },
            ],
          },
          owner: "Працівник органу · під час біометричної процедури",
          proves:
            "Зафіксовану біометричну дію або причину відсутності відбитків",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 106b",
            parts: [
              {
                text: "Art. 106b",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-106b",
                },
              },
            ],
          },
          level: "control",
          status: "оформлює орган",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Взірець підпису для карти",
            parts: [
              {
                text: "Взірець підпису для карти",
                target: {
                  kind: "evidence-document",
                  documentId: "signature-specimen",
                },
              },
            ],
          },
          owner: "Заявник · за процедурою органу, з урахуванням винятків",
          proves: "Взірець для персоналізації карти",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 106b",
            parts: [
              {
                text: "Art. 106b",
                target: {
                  kind: "legal-provision",
                  documentId: "ustawa-o-cudzoziemcach",
                  provisionId: "ustawa-o-cudzoziemcach-art-106b",
                },
              },
            ],
          },
          level: "conditional",
          status: "під час особистої дії",
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
          title: "Роботодавець змінився, поки справа триває",
          explanation:
            "Заяву подано для роботи в одній spółce, але новий договір укладено з іншою. Старий додаток описує попередню роботу. Органу потрібні актуальні факти, а право почати нову роботу перевіряється окремо.",
          check:
            "Встановіть дату зміни, отримайте дані нового роботодавця й належні документи та повідомте орган. Окремо перевірте підставу доступу до нової роботи.",
        },
        {
          title: "Один пункт wezwania залишився без відповіді",
          explanation:
            "Орган попросив уточнити винагороду й надати страхування, але відповідь містить лише новий Załącznik nr 1.",
          check:
            "Зіставте відповідь із кожним пунктом вимоги. Для відсутнього доказу поясніть перешкоду та перевірте строк; прохання про час не продовжує його автоматично.",
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
        "Після отримання рішення прочитайте rozstrzygnięcie, тобто те, що орган постановив. Зіставте наданий дозвіл із роботою, яку людина виконуватиме. Окремо прочитайте строк дозволу та pouczenie про порядок оскарження.",
        "Karta pobytu підтверджує статус, але сама назва карти не пояснює всіх умов роботи. Перед зміною роботодавця або умов договору потрібно встановити, чи охоплює їх дозвіл, чи діє виняток і яка дія потрібна. Дату отримання карти не слід автоматично прирівнювати до дати виникнення всіх прав за рішенням.",
      ],
      actor: "Заявник, wojewoda, а в негативній гілці — Szef UdSC",
      actions: [
        "Зіставте зміст рішення із заявою та фактичними умовами роботи. Зафіксуйте дату вручення і строк можливого оскарження.",
        "Збережіть рішення та перевірте дані й строк чинності карти під час її отримання.",
        "Визначте обов’язки при втраті роботи або зміні її умов. Для кожного строку запишіть подію, від якої він починається.",
      ],
      outcome:
        "Відомі умови дозволу, строки та дії при зміні роботи. Рішення й дані карти перевірені.",
      documents: [
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
          reviewId: "notification",
          item: {
            kind: "authored-legal-text",
            plainText: "Powiadomienie PUP",
            parts: [
              {
                text: "Powiadomienie PUP",
                target: {
                  kind: "evidence-document",
                  documentId: "ukraine-work-notification",
                },
              },
            ],
          },
          status: "окремий обов’язок",
          level: "external",
          owner: "Роботодавець · поточна робота і визначені зміни",
          proves: "Законність праці на підставі правил для громадян України",
          law: {
            kind: "authored-legal-text",
            plainText: "Art. 5a; art. 41 ustawy z 23.01.2026",
            parts: [
              {
                text: "Art. 5a",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2025/621/ogl",
                },
              },
              {
                text: "; ",
              },
              {
                text: "art. 41 ustawy z 23.01.2026",
                target: {
                  kind: "external",
                  url: "https://eli.gov.pl/eli/DU/2026/203/ogl",
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
    workFilingCertificate,
    {
      reviewId: "application",
      item: {
        kind: "authored-legal-text",
        plainText: "Електронна заява MOS",
        parts: [
          {
            text: "Електронна заява MOS",
            target: {
              kind: "evidence-document",
              documentId: "mos-application",
            },
          },
        ],
      },
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
      reviewId: "passport",
      item: {
        kind: "authored-legal-text",
        plainText: "Скани всіх сторінок дійсного паспорта",
        parts: [
          {
            text: "Скани всіх сторінок дійсного паспорта",
            target: { kind: "evidence-document", documentId: "passport" },
          },
        ],
      },
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
      reviewId: "annex",
      item: {
        kind: "authored-legal-text",
        plainText: "Załącznik nr 1",
        parts: [
          {
            text: "Załącznik nr 1",
            target: {
              kind: "evidence-document",
              documentId: "employment-annex-1",
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
      reviewId: "contract",
      item: {
        kind: "authored-legal-text",
        plainText: "Umowa o pracę",
        parts: [
          {
            text: "Umowa o pracę",
            target: {
              kind: "evidence-document",
              documentId: "employment-contract",
            },
          },
        ],
      },
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
      reviewId: "insurance",
      item: {
        kind: "authored-legal-text",
        plainText: "Медичне страхування / підтвердження ZUS",
        parts: [
          {
            text: "Медичне страхування",
            target: {
              kind: "evidence-document",
              documentId: "health-insurance",
            },
          },
          {
            text: " / ",
          },
          {
            text: "підтвердження ZUS",
            target: {
              kind: "evidence-document",
              documentId: "zus-confirmation",
            },
          },
        ],
      },
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
      reviewId: "representation",
      item: {
        kind: "authored-legal-text",
        plainText: "KRS/CEIDG, повноваження підписанта",
        parts: [
          {
            text: "KRS/CEIDG",
            target: {
              kind: "evidence-document",
              documentId: "business-register-information",
            },
          },
          { text: ", повноваження підписанта" },
        ],
      },
      status: "перевірка",
      level: "control",
      owner: "Роботодавець · реєстр або додаток, якщо потрібен",
      proves: "Існування podmiotu та право діяти від його імені",
      law: "Контроль reprezentacji",
    },
    {
      reviewId: "attorney",
      item: {
        kind: "authored-legal-text",
        plainText: "Pełnomocnictwo",
        parts: [
          {
            text: "Pełnomocnictwo",
            target: {
              kind: "evidence-document",
              documentId: "power-of-attorney",
            },
          },
        ],
      },
      status: "умовно",
      level: "conditional",
      owner: "Той, хто діє через представника",
      proves:
        "Повноваження діяти у визначеному обсязі; підпис заявника в MOS не замінює",
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
      reviewId: "translation",
      item: {
        kind: "authored-legal-text",
        plainText: "Кваліфікації / tłumaczenie przysięgłe",
        parts: [
          {
            text: "Кваліфікації",
            target: {
              kind: "evidence-document",
              documentId: "qualification-evidence",
            },
          },
          {
            text: " / ",
          },
          {
            text: "tłumaczenie przysięgłe",
            target: {
              kind: "evidence-document",
              documentId: "sworn-translation",
            },
          },
        ],
      },
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
      reviewId: "payment",
      item: {
        kind: "authored-legal-text",
        plainText: "Opłata skarbowa 440 zł",
        parts: [
          {
            text: "Opłata skarbowa 440 zł",
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
      proves: "Сплату збору за надання дозволу",
      law: "Офіційна tabela opłat UdSC",
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
      reviewId: "submission",
      item: {
        kind: "authored-legal-text",
        plainText: "UPO + PDF/XML і перелік вкладень",
        parts: [
          {
            text: "UPO",
            target: { kind: "evidence-document", documentId: "upo" },
          },
          { text: " + PDF/XML і перелік вкладень" },
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
      proves: "Дату, зміст і комплект електронного подання",
      law: "MOS; контроль akt sprawy",
    },
    {
      reviewId: "notification",
      item: {
        kind: "authored-legal-text",
        plainText: "Powiadomienie PUP",
        parts: [
          {
            text: "Powiadomienie PUP",
            target: {
              kind: "evidence-document",
              documentId: "ukraine-work-notification",
            },
          },
        ],
      },
      status: "окремий обов’язок",
      level: "external",
      owner: "Роботодавець · поточна робота і визначені зміни",
      proves: "Законність праці на підставі правил для громадян України",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 5a; art. 41 ustawy z 23.01.2026",
        parts: [
          {
            text: "Art. 5a",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/eli/DU/2025/621/ogl",
            },
          },
          {
            text: "; ",
          },
          {
            text: "art. 41 ustawy z 23.01.2026",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/eli/DU/2026/203/ogl",
            },
          },
        ],
      },
    },
    {
      reviewId: "passport",
      item: {
        kind: "authored-legal-text",
        plainText: "Oryginał паспорта + odciski + wzór podpisu",
        parts: [
          {
            text: "Oryginał паспорта",
            target: { kind: "evidence-document", documentId: "passport" },
          },
          { text: " + odciski + wzór podpisu" },
        ],
      },
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
    {
      item: {
        kind: "authored-legal-text",
        plainText: "Запис органу про відбитки або їх відсутність",
        parts: [
          {
            text: "Запис органу про відбитки або їх відсутність",
            target: {
              kind: "evidence-document",
              documentId: "fingerprint-record",
            },
          },
        ],
      },
      owner: "Працівник органу · під час біометричної процедури",
      proves: "Зафіксовану біометричну дію або причину відсутності відбитків",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 106b",
        parts: [
          {
            text: "Art. 106b",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-106b",
            },
          },
        ],
      },
      level: "control",
      status: "оформлює орган",
    },
    {
      item: {
        kind: "authored-legal-text",
        plainText: "Взірець підпису для карти",
        parts: [
          {
            text: "Взірець підпису для карти",
            target: {
              kind: "evidence-document",
              documentId: "signature-specimen",
            },
          },
        ],
      },
      owner: "Заявник · за процедурою органу, з урахуванням винятків",
      proves: "Взірець для персоналізації карти",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 106b",
        parts: [
          {
            text: "Art. 106b",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-106b",
            },
          },
        ],
      },
      level: "conditional",
      status: "під час особистої дії",
    },
  ],
  deadlines: [
    {
      stageId: "status",
      period: "до 7 днів",
      trigger:
        "від початку роботи, якщо праця виконується на підставі powiadomienia PUP",
      action: "Роботодавець подає powiadomienie PUP",
      consequence:
        "Подання pobytowego wniosku не легалізує попередню або поточну роботу саме по собі.",
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
      stageId: "procedure",
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
      stageId: "procedure",
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
      stageId: "procedure",
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
      stageId: "procedure",
      period: "60 днів; діє спеціальне зупинення",
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
      action:
        "До 04.03.2027 перебіг строку розгляду цієї справи wojewodą не починається або зупиняється.",
      consequence: {
        kind: "authored-legal-text",
        plainText:
          "Art. 100d обмежує також засоби проти бездіяльності в охоплених ним справах. Орган може продовжувати розгляд; строки заявника на відповідь або оскарження цим не зупинено.",
        parts: [
          {
            text: "Art. 100d",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
            },
          },
          {
            text: " обмежує також засоби проти бездіяльності в охоплених ним справах. Орган може продовжувати розгляд; строки заявника на відповідь або оскарження цим не зупинено.",
          },
        ],
      },
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 112a; art. 100d",
        parts: [
          {
            text: "Art. 112a",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-112a",
            },
          },
          { text: "; " },
          {
            text: "art. 100d",
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
      stageId: "decision",
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
      stageId: "decision",
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
      stageId: "decision",
      period: "до 7 днів",
      trigger:
        "від визначеної зміни умов, якщо робота надалі виконується на підставі powiadomienia PUP",
      action: "Нове powiadomienie PUP за потреби",
      consequence:
        "Тригери: вид договору, посада/вид роботи, зменшення часу або винагороди.",
      law: {
        kind: "authored-legal-text",
        plainText: "Art. 5a; art. 41 ustawy z 23.01.2026",
        parts: [
          {
            text: "Art. 5a",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/eli/DU/2025/621/ogl",
            },
          },
          {
            text: "; ",
          },
          {
            text: "art. 41 ustawy z 23.01.2026",
            target: {
              kind: "external",
              url: "https://eli.gov.pl/eli/DU/2026/203/ogl",
            },
          },
        ],
      },
    },
  ],
  negativeBranches: [
    {
      title: "Роботодавець змінився, поки справа триває",
      trigger:
        "Заяву подано для роботи в одній spółce, але новий договір укладено з іншою.",
      consequence:
        "Старий додаток описує попередню роботу. Органу потрібні актуальні факти, а право почати нову роботу перевіряється окремо.",
      response:
        "Встановіть дату зміни, отримайте дані нового роботодавця й належні документи та повідомте орган. Окремо перевірте підставу доступу до нової роботи.",
      material: {
        label: "Обов’язки при зміні роботи",
        description: "Перевірити дії роботодавця й заявника.",
        href: "/map/employer-duties",
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
      label: "Довідка про подання заяви. Офіційна форма",
      url: "https://eli.gov.pl/eli/DU/2026/386/ogl",
      note: foreignersLaw.text`Перевірено 05.09.2026 разом з ${foreignersLaw.article("108", "Art. 108")}: дата подання, реквізити й спеціальні правила довідки. Підпис заяви та винятки перевірено за ${foreignersLaw.articleRange("106c", "106l", { start: "Art. 106c", end: "106l" })}. Це перевірка зазначених документів, не всіх умов маршруту.`,
    },
    {
      label:
        "Pobyt czasowy i praca. Пояснення Podlaskiego Urzędu Wojewódzkiego",
      url: "https://www.gov.pl/web/uw-podlaski/pobyt-czasowy-i-praca",
      note: "Перевірено 05.09.2026 для вступного розбору: мета перебування, винагорода та страхування. Перелік документів звіряйте з чинною процедурою MOS.",
    },
    {
      label: "KPA. Вимоги до заяви, докази та оскарження",
      url: "https://eli.gov.pl/api/acts/DU/2025/1691/text/O/D20251691.pdf",
      note: "Офіційний текст для пояснень формальних недоліків, оцінки доказів та порядку оскарження.",
    },
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
      note: "Умови, процедура та наслідки CUKR Перевірено 05.09.2026: зупинення перебігу строків у визначених справах до 04.03.2027.",
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
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: route,
  }
)

export default workCaseGuide
