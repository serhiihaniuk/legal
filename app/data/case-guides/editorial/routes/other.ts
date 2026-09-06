import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type {
  CaseGuideDocument,
  CaseGuideRoute,
} from "~/data/case-guides/types"

const traineeVolunteerAnnex: CaseGuideDocument = {
  item: {
    kind: "authored-legal-text",
    plainText: "Додаток організатора стажування або волонтерства",
    parts: [
      {
        text: "Додаток організатора стажування або волонтерства",
        target: {
          kind: "evidence-document",
          documentId: "trainee-volunteer-annex",
        },
      },
    ],
  },
  status: "для спеціального стажування або європейського волонтерства",
  level: "conditional",
  owner:
    "Організатор або волонтерська установа; у MOS підписує належний представник організації",
  proves:
    "Дані заявника та приймаючої організації. Окремо перевіряють її затвердження, договір, програму та інші умови",
  law: {
    kind: "authored-legal-text",
    plainText: "Art. 106 ust. 5; art. 106d ust. 4; art. 157a; art. 157g",
    parts: [
      {
        text: "Art. 106 ust. 5",
        target: {
          kind: "legal-provision",
          documentId: "ustawa-o-cudzoziemcach",
          provisionId: "ustawa-o-cudzoziemcach-art-106",
        },
      },
      {
        text: "; ",
      },
      {
        text: "art. 106d ust. 4",
        target: {
          kind: "legal-provision",
          documentId: "ustawa-o-cudzoziemcach",
          provisionId: "ustawa-o-cudzoziemcach-art-106d",
        },
      },
      {
        text: "; ",
      },
      {
        text: "art. 157a",
        target: {
          kind: "legal-provision",
          documentId: "ustawa-o-cudzoziemcach",
          provisionId: "ustawa-o-cudzoziemcach-art-157a",
        },
      },
      {
        text: "; ",
      },
      {
        text: "art. 157g",
        target: {
          kind: "legal-provision",
          documentId: "ustawa-o-cudzoziemcach",
          provisionId: "ustawa-o-cudzoziemcach-art-157g",
        },
      },
    ],
  },
}

const researchAnnex: CaseGuideDocument = {
  item: {
    kind: "authored-legal-text",
    plainText: "Додаток науковця",
    parts: [
      {
        text: "Додаток науковця",
        target: {
          kind: "evidence-document",
          documentId: "research-annex",
        },
      },
    ],
  },
  status: "для досліджень або довгострокової мобільності науковця",
  level: "conditional",
  owner: "Заявник; заповнює і підписує разом із заявою в MOS",
  proves:
    "Дані науковця, польської установи та програми мобільності, якщо заявник нею охоплений. Договір про прийняття та інші умови підтверджують окремо",
  law: {
    kind: "authored-legal-text",
    plainText: "Art. 106 ust. 6; art. 106d ust. 3; art. 151; art. 151b",
    parts: [
      {
        text: "Art. 106 ust. 6",
        target: {
          kind: "legal-provision",
          documentId: "ustawa-o-cudzoziemcach",
          provisionId: "ustawa-o-cudzoziemcach-art-106",
        },
      },
      {
        text: "; ",
      },
      {
        text: "art. 106d ust. 3",
        target: {
          kind: "legal-provision",
          documentId: "ustawa-o-cudzoziemcach",
          provisionId: "ustawa-o-cudzoziemcach-art-106d",
        },
      },
      {
        text: "; ",
      },
      {
        text: "art. 151",
        target: {
          kind: "legal-provision",
          documentId: "ustawa-o-cudzoziemcach",
          provisionId: "ustawa-o-cudzoziemcach-art-151",
        },
      },
      {
        text: "; ",
      },
      {
        text: "art. 151b",
        target: {
          kind: "legal-provision",
          documentId: "ustawa-o-cudzoziemcach",
          provisionId: "ustawa-o-cudzoziemcach-art-151b",
        },
      },
    ],
  },
}

const ictApplication: CaseGuideDocument = {
  item: {
    kind: "authored-legal-text",
    plainText: "Окрема паперова заява ICT",
    parts: [
      {
        text: "Окрема паперова заява ICT",
        target: {
          kind: "evidence-document",
          documentId: "ict-application",
        },
      },
    ],
  },
  status: "для переведення або довгострокової мобільності ICT",
  level: "conditional",
  owner:
    "Jednostka przyjmująca, приймаюча організація в Польщі; паперове подання",
  proves:
    "Заявлене переведення, його учасників і умови. Корпоративний зв’язок, попередню роботу та інші умови доводять додатками",
  law: {
    kind: "authored-legal-text",
    plainText: "Art. 106k; art. 139a; art. 139o",
    parts: [
      {
        text: "Art. 106k",
        target: {
          kind: "legal-provision",
          documentId: "ustawa-o-cudzoziemcach",
          provisionId: "ustawa-o-cudzoziemcach-art-106k",
        },
      },
      {
        text: "; ",
      },
      {
        text: "art. 139a",
        target: {
          kind: "legal-provision",
          documentId: "ustawa-o-cudzoziemcach",
          provisionId: "ustawa-o-cudzoziemcach-art-139a",
        },
      },
      {
        text: "; ",
      },
      {
        text: "art. 139o",
        target: {
          kind: "legal-provision",
          documentId: "ustawa-o-cudzoziemcach",
          provisionId: "ustawa-o-cudzoziemcach-art-139o",
        },
      },
    ],
  },
}

const route: CaseGuideRoute = {
  id: "other",
  tab: "Inne",
  eyebrow: "Розвилка інших спеціальних підстав",
  title: "Інші підстави pobytu — як побудувати окрему справу",
  subtitle:
    "Сезонна робота, absolwent, короткотривалі обставини, захисні й інші спеціальні режими",
  overview: [
    "Ця вкладка свідомо не створює одного універсального кейсу. «Інші обставини» охоплюють різні правові режими з несумісними умовами, строками й наслідками.",
    "Її завдання — правильно розгалузити факти до конкретної статті, після чого створити мінікейс за тим самим повним шаблоном.",
  ],
  result:
    "Точна кваліфікація до окремої спеціальної підстави або чесний висновок, що жоден із режимів не відповідає фактам.",
  forWhom:
    "Для справ, які не вкладаються в основні вкладки й мають конкретну спеціальну обставину, передбачену законом.",
  notFor:
    "Не як запасний універсальний маршрут, коли умови основної підстави не виконані.",
  profile: {
    name: "Справа, що потребує окремої кваліфікації",
    description:
      "Особа повідомляє особливу обставину, але її ще не прив’язано до конкретної статті. Спочатку будуємо дерево рішень, а не збираємо документи.",
    facts: [
      {
        label: "Можливі напрями",
        value: "sezonowa, absolwent, krótkotrwały, humanitarny та інші",
      },
      {
        label: "Головна мета",
        value: "ще не встановлена",
      },
      {
        label: "Тривалість",
        value: "потребує точної хронології",
      },
      {
        label: "Наслідок",
        value: "залежить від вибраної статті",
      },
    ],
    assumption:
      "Поки не вибрано одну точну норму, не існує коректного універсального пакета документів, строків або висновку.",
  },
  choice: {
    why: "Факти ще не дають змоги застосувати одну з основних підстав. Тому робочим результатом є розвилка, а не вигаданий спільний дозвіл.",
    closestAlternative:
      "Одна з основних вкладок, якщо після уточнення головна мета виявиться роботою, навчанням, сім’єю або бізнесом.",
    gate: "Знайдено конкретну статтю, яка охоплює особливу обставину та встановлює власні умови й наслідок.",
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
        plainText: "art. 170–194 та інші спеціальні норми",
        parts: [
          {
            text: "art. 170",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-170",
            },
          },
          {
            text: "–",
          },
          {
            text: "194",
            target: {
              kind: "legal-provision",
              documentId: "ustawa-o-cudzoziemcach",
              provisionId: "ustawa-o-cudzoziemcach-art-194",
            },
          },
          {
            text: " та інші спеціальні норми",
          },
        ],
      },
    },
    {
      label: "Результат першого етапу",
      value: "одна точна стаття, не універсальний список перевірки",
    },
  ],
  conditions: [],
  stages: [
    {
      id: "status",
      title: "Фіксуємо особу, статус і критичні дати",
      question: "Хто ця особа на дату кожної важливої події?",
      explanation: [
        "Справа починається не з форми MOS, а з хронології. Громадянство, документ, чинна підстава перебування, виїзди та попередні заяви визначають, чи маршрут узагалі доступний і які правила діятимуть під час розгляду.",
        "Фіксуємо особливу обставину, її початок, тривалість і всі попередні підстави.",
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
          item: {
            kind: "authored-legal-text",
            plainText: "Дійсний паспорт, фото й особиста дія",
            parts: [
              {
                text: "Дійсний паспорт",
                target: {
                  kind: "evidence-document",
                  documentId: "passport",
                },
              },
              {
                text: ", ",
              },
              {
                text: "фото",
                target: {
                  kind: "evidence-document",
                  documentId: "digital-photo",
                },
              },
              {
                text: " й особиста дія",
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: "Заявник · подання та wezwanie органу",
          proves: "Особу й виконання формальних вимог",
          law: "Спеціальна процедура pobytowa",
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
        "Назва вкладки ще не означає, що підстава підходить. Тут ми зіставляємо факти з позитивними умовами, виключеннями, odmową wszczęcia та найближчою альтернативою. Якщо головна умова не виконується, змінюється маршрут, а не формулювання заяви.",
        "Будуємо дерево можливих статей і відкидаємо ті, де хоча б одна визначальна умова не відповідає фактам.",
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
          title: "Після випуску ще не обрано точну підставу",
          explanation:
            "Навчання завершено, а заявник називає мету лише словами «інші обставини». Назва вкладки не визначає умов дозволу. Потрібно з’ясувати, чи людина шукає роботу, вже працює або має іншу мету.",
          check:
            "Встановіть поточну мету й дату завершення навчання. Порівняйте підставу для випускника, який шукає роботу, з підставою для вже погодженої роботи.",
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
          label: "Карта права: Inne",
          description:
            "Відкриває матеріальну підставу, її межі та пов’язані норми.",
          href: "/map/other-stay",
        },
        {
          label: "Найближчий пов’язаний інститут",
          description:
            "Допомагає не змішати цю підставу із сусіднім маршрутом.",
          href: "/map/temporary-goals",
        },
      ],
    },
    {
      id: "filing",
      title: "Готуємо правильне подання через MOS",
      question: "Хто, куди, коли й у якій формі подає заяву?",
      explanation: [
        "Після вибору підстави визначаємо właściwego wojewodę, електронну форму, підпис, додатки, оплати та особисті дії. Формальна правильність не доводить матеріальні умови, але без неї справа може не отримати належного ходу.",
        "Форму MOS, organ і додатки визначаємо лише після вибору конкретної норми.",
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
          reviewId: "application",
          item: {
            kind: "authored-legal-text",
            plainText: "Wniosek MOS + UPO",
            parts: [
              {
                text: "Wniosek MOS",
                target: {
                  kind: "evidence-document",
                  documentId: "mos-application",
                },
              },
              { text: " + " },
              {
                text: "UPO",
                target: { kind: "evidence-document", documentId: "upo" },
              },
            ],
          },
          status: "для електронного подання",
          level: "conditional",
          owner:
            "Заявник · через MOS, якщо до вибраної підстави не застосовується паперовий порядок",
          proves: "Дату, зміст і спосіб початку справи",
          law: "Ustawa o cudzoziemcach + процедура MOS",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Дійсний паспорт, фото й особиста дія",
            parts: [
              {
                text: "Дійсний паспорт",
                target: {
                  kind: "evidence-document",
                  documentId: "passport",
                },
              },
              {
                text: ", ",
              },
              {
                text: "фото",
                target: {
                  kind: "evidence-document",
                  documentId: "digital-photo",
                },
              },
              {
                text: " й особиста дія",
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: "Заявник · подання та wezwanie органу",
          proves: "Особу й виконання формальних вимог",
          law: "Спеціальна процедура pobytowa",
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
        traineeVolunteerAnnex,
        researchAnnex,
        ictApplication,
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
        "Пакет залежить від конкретної спеціальної підстави. Наприклад, диплом пояснює завершення навчання, але сам не показує поточну мету перебування. Спочатку назвіть факт, який треба встановити, і лише потім визначайте доказ.",
        "Документи формуються від умов вибраної статті; спільного пакета для всіх «інших» підстав немає.",
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
          reviewId: "application",
          item: {
            kind: "authored-legal-text",
            plainText: "Wniosek MOS + UPO",
            parts: [
              {
                text: "Wniosek MOS",
                target: {
                  kind: "evidence-document",
                  documentId: "mos-application",
                },
              },
              { text: " + " },
              {
                text: "UPO",
                target: { kind: "evidence-document", documentId: "upo" },
              },
            ],
          },
          status: "для електронного подання",
          level: "conditional",
          owner:
            "Заявник · через MOS, якщо до вибраної підстави не застосовується паперовий порядок",
          proves: "Дату, зміст і спосіб початку справи",
          law: "Ustawa o cudzoziemcach + процедура MOS",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Дійсний паспорт, фото й особиста дія",
            parts: [
              {
                text: "Дійсний паспорт",
                target: {
                  kind: "evidence-document",
                  documentId: "passport",
                },
              },
              {
                text: ", ",
              },
              {
                text: "фото",
                target: {
                  kind: "evidence-document",
                  documentId: "digital-photo",
                },
              },
              {
                text: " й особиста дія",
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: "Заявник · подання та wezwanie органу",
          proves: "Особу й виконання формальних вимог",
          law: "Спеціальна процедура pobytowa",
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
        traineeVolunteerAnnex,
        researchAnnex,
        ictApplication,
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
          title: "До спеціальної підстави додано універсальний пакет",
          explanation:
            "Паспорт і підтвердження подання є, але ключовий факт спеціальної підстави не названо.",
          check:
            "Спочатку визначте конкретну норму. Для випускника це, зокрема, означає встановити завершення навчання й мету подальшого перебування.",
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
        "У процедурі особливо важливо не відповідати на wezwanie матеріалами іншого режиму й перевіряти точний наслідок спеціальної норми.",
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
          reviewId: "application",
          item: {
            kind: "authored-legal-text",
            plainText: "Wniosek MOS + UPO",
            parts: [
              {
                text: "Wniosek MOS",
                target: {
                  kind: "evidence-document",
                  documentId: "mos-application",
                },
              },
              { text: " + " },
              {
                text: "UPO",
                target: { kind: "evidence-document", documentId: "upo" },
              },
            ],
          },
          status: "для електронного подання",
          level: "conditional",
          owner:
            "Заявник · через MOS, якщо до вибраної підстави не застосовується паперовий порядок",
          proves: "Дату, зміст і спосіб початку справи",
          law: "Ustawa o cudzoziemcach + процедура MOS",
        },
        {
          item: {
            kind: "authored-legal-text",
            plainText: "Дійсний паспорт, фото й особиста дія",
            parts: [
              {
                text: "Дійсний паспорт",
                target: {
                  kind: "evidence-document",
                  documentId: "passport",
                },
              },
              {
                text: ", ",
              },
              {
                text: "фото",
                target: {
                  kind: "evidence-document",
                  documentId: "digital-photo",
                },
              },
              {
                text: " й особиста дія",
              },
            ],
          },
          status: "обов’язково",
          level: "required",
          owner: "Заявник · подання та wezwanie органу",
          proves: "Особу й виконання формальних вимог",
          law: "Спеціальна процедура pobytowa",
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
        "Рішення читаємо через конкретну підставу; praca, строк і наступний статус можуть радикально відрізнятися.",
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
          label: "Приклад окремої підстави: praca sezonowa",
          description:
            "Показує, чому спеціальний режим не можна змішувати із загальним.",
          href: "/map/seasonal",
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
      reviewId: "application",
      item: {
        kind: "authored-legal-text",
        plainText: "Wniosek MOS + UPO",
        parts: [
          {
            text: "Wniosek MOS",
            target: {
              kind: "evidence-document",
              documentId: "mos-application",
            },
          },
          { text: " + " },
          {
            text: "UPO",
            target: { kind: "evidence-document", documentId: "upo" },
          },
        ],
      },
      status: "для електронного подання",
      level: "conditional",
      owner:
        "Заявник · через MOS, якщо до вибраної підстави не застосовується паперовий порядок",
      proves: "Дату, зміст і спосіб початку справи",
      law: "Ustawa o cudzoziemcach + процедура MOS",
    },
    {
      item: {
        kind: "authored-legal-text",
        plainText: "Дійсний паспорт, фото й особиста дія",
        parts: [
          {
            text: "Дійсний паспорт",
            target: {
              kind: "evidence-document",
              documentId: "passport",
            },
          },
          {
            text: ", ",
          },
          {
            text: "фото",
            target: {
              kind: "evidence-document",
              documentId: "digital-photo",
            },
          },
          {
            text: " й особиста дія",
          },
        ],
      },
      status: "обов’язково",
      level: "required",
      owner: "Заявник · подання та wezwanie органу",
      proves: "Особу й виконання формальних вимог",
      law: "Спеціальна процедура pobytowa",
    },
    traineeVolunteerAnnex,
    researchAnnex,
    ictApplication,
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
      stageId: "procedure",
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
      stageId: "decision",
      period: "строк із pouczenia",
      trigger: "doręczenie decyzji або postanowienia",
      action: "Звірити засіб захисту, адресата й початок відліку з KPA.",
      consequence:
        "Пропуск може закрити звичайний шлях оскарження, якщо строк не буде поновлено.",
      law: "KPA — odwołanie / zażalenie залежно від виду акта",
    },
    {
      stageId: "decision",
      period: "після зміни факту",
      trigger: "зміна мети, сімейного зв’язку, навчання, роботи або діяльності",
      action:
        "Перевірити спеціальний обов’язок повідомлення, зміни дозволу або нової заяви.",
      consequence:
        "Неповідомлена зміна може вплинути на чинність дозволу або наступну справу.",
      law: "Спеціальні правила маршруту Inne",
    },
  ],
  negativeBranches: [
    {
      title: "Після випуску ще не обрано точну підставу",
      trigger:
        "Навчання завершено, а заявник називає мету лише словами «інші обставини».",
      consequence:
        "Назва вкладки не визначає умов дозволу. Потрібно з’ясувати, чи людина шукає роботу, вже працює або має іншу мету.",
      response:
        "Встановіть поточну мету й дату завершення навчання. Порівняйте підставу для випускника, який шукає роботу, з підставою для вже погодженої роботи.",
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
    {
      label: "UdSC: підстава для випускника",
      url: "https://www.gov.pl/web/udsc/zezwolenie-na-pobyt-czasowy--absolwent",
      note: "Перевірено 05.09.2026: мета перебування після завершення навчання.",
    },
  ],
}
const sourceReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const

export const otherCaseGuide: KnowledgeUnit<CaseGuideRoute> =
  defineKnowledgeUnit({
    id: "case-guide:other",
    subject: {
      family: "case-guide",
      reference: { kind: "case-route", routeId: "other" },
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
  })

export default otherCaseGuide
