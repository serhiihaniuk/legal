import { defineEditorialPart } from "../define-editorial-part"

export const foreignersActPart05 = defineEditorialPart<
  "ustawa-o-cudzoziemcach"
>({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-139t",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 139t встановлює, хто і коли подає заяву про zezwolenie на pobyt czasowy, про яке йдеться в art. 139o ust. 1, коли cudzoziemiec перебуває в Польщі або за її межами.",
          sourceLocator: "Art. 139t ust. 1–3",
        },
        {
          kind: "practical-inference",
          text: "Для ICT-процедури вирішальними є дата подання заяви та законність в’їзду й перебування; ці обставини треба підтвердити окремо.",
          sourceLocator: "Art. 139t ust. 1–3",
        },
      ],
      summary:
        "Якщо cudzoziemiec уже законно перебуває на території Польщі, заяву подає jednostka przyjmująca не пізніше останнього дня його legalnego pobytu. Для особи за межами Польщі закон окремо визначає наслідки законного в’їзду після подання заяви.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Jednostka przyjmująca подає заяву не пізніше останнього дня legalnego pobytu cudzoziemca в Польщі.",
        },
        {
          locator: "ust. 2",
          explanation:
            "До цієї ситуації відповідно застосовується art. 108; сам факт подання заяви не замінює перевірки умов цього положення.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Коли cudzoziemiec перебуває за межами Польщі, art. 108 ust. 1 pkt 2 і ust. 2 застосовуються відповідно після його законного в’їзду.",
        },
      ],
      legalEffect:
        "Стаття розподіляє процесуальну дію між jednostka przyjmująca та cudzoziemiec і пов’язує її з legalny pobyt або законним в’їздом. Інші умови дозволу залишаються чинними.",
      foreignersCase:
        "У справі перевірте статус і дату закінчення перебування, дату подання заяви jednostka przyjmująca та документи про законний в’їзд. Без повної хронології не можна робити висновок про наслідки.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-139u",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 139u наказує відповідно застосовувати до zezwolenie з art. 139o ust. 1 положення art. 139g, 139h, 139i, 139j ust. 3, 139k та 139m.",
          sourceLocator: "Art. 139u",
        },
      ],
      summary:
        "Стаття не створює нового самостійного переліку умов, а відсилає до вже встановлених правил ICT-процедури.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Застосовуйте перелічені статті відповідно: спочатку визначте, яка саме норма з art. 139g–139m потрібна для конкретного кроку.",
        },
      ],
      legalEffect:
        "Правовий ефект визначається змістом положень, до яких зроблено відсилання; art. 139u сам по собі не доводить виконання їхніх умов.",
      foreignersCase:
        "У поясненні справи наведіть конкретний застосований art. 139g, 139h, 139i, 139j ust. 3, 139k або 139m і перевірте його умови за первинним текстом.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-139w",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 139w зобов’язує wojewoda передати Szef Urzędu копію рішення про надання або скасування zezwolenie з art. 139o ust. 1, а Szef Urzędu — передати wojewoda визначену інформацію про cudzoziemiec.",
          sourceLocator: "Art. 139w ust. 1–2",
        },
      ],
      summary:
        "Стаття регулює обмін інформацією між wojewoda та Szef Urzędu після рішення у справі ICT.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Копія рішення про udzielenie або cofnięcie дозволу передається Szef Urzędu.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Szef Urzędu передає wojewoda інформацію про cudzoziemiec у межах даних, названих у art. 22 ust. 1 pkt 8a lit. d tiret pierwsze.",
        },
      ],
      legalEffect:
        "Це правило забезпечує міжорганізаційний облік і не є окремим матеріальним дозволом на перебування чи працю.",
      foreignersCase:
        "Якщо в матеріалах є різні дані органів, порівняйте рішення wojewoda з інформацією, переданою Szef Urzędu; не ототожнюйте цей обмін із позитивним рішенням.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-140",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 140 ust. 1 визначає сукупні умови zezwolenie на pobyt czasowy для роботи cudzoziemiec, delegowany przez pracodawcę zagranicznego до Польщі: підстава для роботи, health insurance, стабільний і регулярний дохід та місце проживання.",
          sourceLocator: "Art. 140 ust. 1 pkt 1–4",
        },
        {
          kind: "statute-text",
          text: "Art. 140 ust. 2 вимагає, щоб щомісячний дохід перевищував поріг, що дає право на świadczenia pieniężne z pomocy społecznej, щодо cudzoziemiec і кожного утримуваного члена сім’ї.",
          sourceLocator: "Art. 140 ust. 2",
        },
      ],
      summary:
        "Для тимчасово відрядженого працівника дозвіл пов’язаний не лише з робочим документом. Потрібно також показати страхування, достатній стабільний дохід і житло в Польщі.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Потрібне zezwolenie na pracę за окремим законом або письмова заява pracodawca про намір працевлаштувати, якщо zezwolenie na pracę не вимагається.",
        },
        {
          locator: "ust. 1 pkt 2–4",
          explanation:
            "Перевіряються health insurance або покриття лікування, стабільне й регулярне джерело доходу та забезпечене місце проживання в Польщі.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Поріг доходу оцінюється щодо самого cudzoziemiec і кожного члена сім’ї, який перебуває на його утриманні.",
        },
      ],
      legalEffect:
        "Виконання всіх перелічених умов є частиною оцінки заяви; робочий документ сам по собі не гарантує udzielenie zezwolenie.",
      foreignersCase:
        "Розділіть у справі доказ права на роботу, страхування, доходу й житла. Перевірте період делегування та сімейних утриманців саме на дату оцінки заяви.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-141",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 141 виключає застосування art. 100 ust. 1 pkt 9 до cudzoziemiec, тимчасово делегованого для świadczenie usług у Польщі роботодавцем з іншої держави ЄС, EFTA–EOG або Швейцарії, якщо особа має право перебувати й працювати в цій державі.",
          sourceLocator: "Art. 141",
        },
      ],
      summary:
        "Для певного транскордонного відрядження діє спеціальне виключення з однієї підстави відмови. Воно прив’язане до держави роботодавця та права особи перебувати й працювати там.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Виключення стосується лише тимчасового delegowanie для świadczenie usług і названих держав; потрібно підтвердити право на pobyt та zatrudnienie у державі роботодавця.",
        },
      ],
      legalEffect:
        "Art. 141 прибирає лише застосування art. 100 ust. 1 pkt 9 у визначеній ситуації. Інші умови й підстави відмови не зникають.",
      foreignersCase:
        "Перевірте фактичну організацію послуг, країну siedziba pracodawca та документи про право працювати й перебувати там; назва договору сама не доводить відрядження.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-142",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 142 встановлює умови zezwolenie на pobyt czasowy у celu prowadzenia działalności gospodarczej, включно з особистими умовами cudzoziemiec і економічними умовами podmiot.",
          sourceLocator: "Art. 142 ust. 1–5",
        },
        {
          kind: "practical-inference",
          text: "Реєстрація spółka або функція в zarząd не доводять сама по собі виконання вимог щодо доходу, робочих місць чи майбутньої економічної спроможності.",
          sourceLocator: "Art. 142 ust. 1 pkt 3 i ust. 3",
        },
      ],
      summary:
        "Дозвіл для ведення бізнесу потребує доведення мети перебування, страхування, доходу, житла та визначених економічних показників діяльності. Для окремих spółka закон передбачає альтернативу — докази ресурсів або дій для досягнення цих показників у майбутньому.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Cudzoziemiec повинен мати health insurance, достатній стабільний і регулярний дохід, потрібну згоду на посаду/професію та місце проживання в Польщі.",
        },
        {
          locator: "ust. 1 pkt 3 lit. a–b",
          explanation:
            "Podmiot має або досягти законодавчо визначеного доходу чи працевлаштувати щонайменше двох працівників на умовах, названих у нормі, або показати ресурси й дії для виконання цих умов у майбутньому.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Правило поширюється на певні spółka, створені cudzoziemiec або до яких він приєднався; окремо названі функції в zarząd, komplementariusz і prokurent.",
        },
        {
          locator: "ust. 4–5",
          explanation:
            "Поріг доходу визначається за art. 140 ust. 2; для громадянина Туреччини передбачено застосування art. 41 Protokołu dodatkowego до Układ stowarzyszeniowy EWG–Turcja.",
        },
      ],
      legalEffect:
        "Стаття формує комплексний тест для бізнесового pobyt, а не автоматичне право на дозвіл через володіння часткою чи посаду в spółka.",
      foreignersCase:
        "Зберіть окремо докази особистих умов і документи spółka: фінансові результати, працівників або реальний план досягнення показників. Фактична діяльність має відповідати заявленій меті.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-142a",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 142a дозволяє ministrowi właściwemu do spraw wewnętrznych у погодженні з іншими міністрами встановити річний limit zezwoleń у випадку art. 142 ust. 3 та визначає критерії такого rozporządzenie й спосіб оголошення досягнення ліміту.",
          sourceLocator: "Art. 142a ust. 1–3",
        },
      ],
      summary:
        "Стаття створює законодавчу основу для річних лімітів бізнесових дозволів у вузькій ситуації, описаній в art. 142 ust. 3.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Rozporządzenie може деталізувати ліміти за województwo, професіями, видами договорів або видами діяльності podmiot.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Під час встановлення ліміту враховуються потреби ринку праці, безпека та принцип доповнювальності праці cudzoziemiec; досягнення ліміту оголошується в Monitor Polski.",
        },
      ],
      legalEffect:
        "Сам art. 142a не встановлює конкретного числа ліміту; юридично значущим є чинне rozporządzenie та офіційне оголошення.",
      foreignersCase:
        "У конкретній справі перевірте, чи видано застосовне rozporządzenie і чи було офіційно оголошено досягнення ліміту на відповідний рік.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-143",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 143 передбачає відмову у wszczęcie/udzielenie zezwolenie в ситуації art. 142 ust. 3, якщо в поточному календарному році досягнуто застосовний limit, і відсилає до art. 117 pkt 1–2.",
          sourceLocator: "Art. 143 ust. 1–2",
        },
      ],
      summary:
        "Для бізнесового дозволу в спеціальній ситуації art. 142 ust. 3 річний ліміт може стати самостійною перешкодою для надання дозволу.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Якщо limit для конкретного cudzoziemiec уже досягнуто, дозвіл відмовляється незалежно від того, що інші умови треба оцінити за art. 100.",
        },
        {
          locator: "ust. 2",
          explanation:
            "До відмови застосовуються також art. 117 pkt 1 і 2; їхній зміст потрібно перевіряти в актуальному тексті.",
        },
      ],
      legalEffect:
        "Норма стосується лише дозволу у випадках art. 142 ust. 3 і не перетворює будь-яке досягнення ліміту на загальну заборону бізнесового pobyt.",
      foreignersCase:
        "Зафіксуйте вид дозволу, календарний рік і офіційний статус ліміту. Не робіть висновок про відмову без перевірки, що справа саме підпадає під art. 142 ust. 3.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-143a",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 143a вимагає, щоб рішення про zezwolenie у випадках art. 142 ust. 3 містило okres ważności, podmiot powierzający pracę та stanowisko, а за звільнення від zezwolenie na pracę — відповідну інформацію.",
          sourceLocator: "Art. 143a ust. 1–2",
        },
      ],
      summary:
        "Рішення про бізнесове проживання, коли cudzoziemiec працює через визначену функцію в spółka, повинно чітко фіксувати строк і робочі параметри.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "У рішенні мають бути названі okres ważności, podmiot powierzający pracę та stanowisko.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо окреме право звільняє від zezwolenie na pracę, рішення повинно містити посилання на умови цього звільнення.",
        },
      ],
      legalEffect:
        "Ці реквізити визначають межі наданого дозволу й інформацію про право на працю; вони не розширюють умови, встановлені окремим законом про роботу.",
      foreignersCase:
        "Порівняйте текст рішення з фактичною функцією в spółka та підставою звільнення від zezwolenie na pracę. Розбіжність потребує окремої правової оцінки.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-144",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 144 встановлює умови zezwolenie на pobyt czasowy для навчання на studia, вимоги до jednostka prowadząca studia, документи, страхування та фінансові кошти, а також правила затвердження таких jednostka.",
          sourceLocator: "Art. 144 ust. 1–18",
        },
        {
          kind: "practical-inference",
          text: "Zaświadczenie про прийняття на studia підтверджує навчальну підставу, але не замінює докази страхування, коштів, житла та повернення/транзиту, коли вони вимагаються нормою.",
          sourceLocator: "Art. 144 ust. 1 pkt 1–2",
        },
      ],
      summary:
        "Для pobyt з метою studia потрібні прийняття або продовження навчання у відповідній jednostka, підтвердження оплати платного навчання, страхування та достатні кошти. Стаття також визначає, які заклади затверджуються та коли затвердження не потрібне.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Подаються zaświadczenie про прийняття/продовження studia і, для платного навчання, доказ оплати; також потрібні страхування та кошти на утримання, повернення/транзит і studia.",
        },
        {
          locator: "ust. 1a–1c",
          explanation:
            "Мінімум коштів оцінюється після врахування витрат на житло; норма визначає, які сталі платежі входять до витрат і коли їх не віднімають для громадян держав, названих у art. 113b.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Правило охоплює підготовчий курс для громадян держав із відповідного rozporządzenie та певне продовження studia з іншої держави ЄС за додаткових умов.",
        },
        {
          locator: "ust. 4–9 i 13–18",
          explanation:
            "Jednostka може бути zatwierdzona рішенням ministra; перевіряються її тривалість роботи, правила рекрутації, безпека та інтерес Польщі. Інформація органів має строки 30 або 60 днів, затвердження зазвичай діє 5 років, а список публікується офіційно.",
        },
        {
          locator: "ust. 5 pkt 2 i ust. 10–12",
          explanation:
            "Пункт 2 ust. 5 та ust. 10–12 мають позначку «(uchylony)»; їх не слід використовувати як чинні підстави.",
        },
      ],
      legalEffect:
        "Стаття формує набір умов і інституційних перевірок для studia. Прийняття до навчання не гарантує дозволу, якщо не доведені всі інші умови або існує окрема підстава відмови.",
      foreignersCase:
        "Перевірте статус jednostka у списку/рішенні, дійсність zaświadczenie, оплату, страхування, розрахунок коштів і витрати на повернення. Не покладайтеся лише на лист університету.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-144a",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 144a дозволяє ministrowi właściwemu do spraw wewnętrznych видати decyzja про zakaz przyjmowania cudzoziemców одиницею, що не підлягає обов’язковому zatwierdzenie, на строк до 5 років за перелічених порушень або ризиків.",
          sourceLocator: "Art. 144a ust. 1–5",
        },
      ],
      summary:
        "Стаття дає міністру інструмент заборонити закладу приймати іноземців, зокрема через недотримання вимог рекрутації, безпекові підстави, фіктивну діяльність, порушення обов’язків або податково-страхові борги.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation:
            "Підставами є неврахування освітніх вимог, оборона/безпека, interes RP або обставини щодо діяльності, повідомлень, POL-on, відповідальності керівництва, składki чи podatki.",
        },
        {
          locator: "ust. 1a–1d",
          explanation:
            "Перед рішенням minister отримує інформацію від компетентних органів; строк відповіді становить 30 днів, у особливо обґрунтованому випадку — до 60, а пропуск строку вважається виконанням вимоги отримати інформацію.",
        },
        {
          locator: "ust. 2–4",
          explanation:
            "Ust. 2–4 позначені як «(uchylony)»; чинним залишається правило про оприлюднення актуального списку в офіційному журналі міністра.",
        },
      ],
      legalEffect:
        "Рішення про zakaz стосується прийому нових cudzoziemiec і не є автоматичним скасуванням кожного вже виданого дозволу; наслідки для конкретного студента оцінюються також за art. 144b.",
      foreignersCase:
        "Встановіть дату, коли decyzja стала ostateczna, і перевірте, чи cudzoziemiec уже мав дозвіл до цієї дати. Для нової заяви перевірте офіційний список заборон.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-144b",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 144b забороняє jednostka prowadząca studia приймати cudzoziemiec після того, як остаточним стало рішення про відмову в затвердженні, відмову в продовженні, cofnięcie zatwierdzenia або zakaz przyjmowania cudzoziemców.",
          sourceLocator: "Art. 144b ust. 1",
        },
        {
          kind: "statute-text",
          text: "Art. 144b ust. 2–3 зберігає можливість продовжити навчання для cudzoziemiec, який уже мав дозвіл, і не застосовує до нього вимогу затвердження в провадженні про продовження pobyt.",
          sourceLocator: "Art. 144b ust. 2–3",
        },
      ],
      summary:
        "Після остаточного негативного рішення заклад не може приймати нових іноземців. Студент, який уже мав дозвіл до цієї дати, може продовжити навчання, а вимога затвердження для його побутової справи не застосовується.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Заборона починається з дня, коли відповідна decyzja стала ostateczna.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Захист стосується cudzoziemiec із дозволом, наданим до цієї дати, та його продовження навчання; умову затвердження в його заяві не застосовують.",
        },
      ],
      legalEffect:
        "Стаття розмежовує новий прийом і продовження навчання вже допущеного студента; вона не вирішує всі інші умови pobyt.",
      foreignersCase:
        "Порівняйте дату рішення і дату надання дозволу, а також фактичне продовження studia. Збережіть документ, який підтверджує статус закладу на відповідну дату.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-145",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 145 визначає тривалість першого і наступного zezwolenie для studia, підготовчого курсу та szkoła doktorska, включно з особливими строками для програм мобільності.",
          sourceLocator: "Art. 145 ust. 1–4",
        },
      ],
      summary:
        "Строк дозволу залежить від першого чи наступного дозволу, року навчання, програми мобільності, підготовчого курсу та статусу doktorant.",
      rules: [
        {
          locator: "ust. 1 i 1a",
          explanation:
            "Для першого року базовий строк становить 15 місяців, для певної мобільної програми — 2 роки, а для першого дозволу doktorant — 2 роки і 6 місяців.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Коли підстава обґрунтовує коротший pobyt, дозвіл охоплює академічний рік/навчання плюс 3 місяці; для підготовчого курсу діє таке саме продовження.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Наступний дозвіл надається на строк studia або курсу плюс 3 місяці, а для doktorant — плюс 6 місяців, але не довше 3 років.",
        },
      ],
      legalEffect:
        "Стаття задає максимальні та спеціальні строки, але фактичний строк залежить від доведеної тривалості навчальної підстави.",
      foreignersCase:
        "Зіставте zaświadczenie навчального закладу, академічний рік, програму мобільності та статус doktorant із строком у рішенні; не переносіть строк з іншої категорії автоматично.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-145a",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 145a, крім art. 99, вимагає odmowa wszczęcia postępowania про дозвіл для studia, якщо в день заяви cudzoziemiec має дозвіл art. 139a ust. 1 для стажування або подає/має дозвіл art. 127.",
          sourceLocator: "Art. 145a pkt 1–2",
        },
      ],
      summary:
        "Стаття стосується початку провадження, а не остаточної відмови після повного розгляду. Вона називає дві несумісні на цю дату ситуації.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Перевіряється наявність zezwolenie з art. 139a ust. 1 для pracy w charakterze pracownika odbywającego staż.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Перевіряється, чи cudzoziemiec ubiega się про дозвіл art. 127 або вже його має.",
        },
      ],
      legalEffect:
        "Наслідком є odmowa wszczęcia postępowania в межах названих винятків, а не висновок про те, що особа ніколи не може просити іншу підставу pobyt.",
      foreignersCase:
        "Зафіксуйте всі чинні дозволи й заяви саме на день подання заяви на studia та розрізняйте odmowa wszczęcia від odmowa udzielenia.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-146",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 146 має в тексті акта позначку «(uchylony)».",
          sourceLocator: "Art. 146",
        },
      ],
      summary:
        "Art. 146 скасована — чинного правила для заяви або дозволу з цього номера не містить.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Не використовуйте Art. 146 як самостійну чинну підставу; перевірте сусідні статті та актуальні перехідні правила.",
        },
      ],
      legalEffect:
        "Позначка «(uchylony)» означає відсутність чинної нормативної диспозиції в цьому положенні.",
      foreignersCase:
        "Якщо документ або консультація посилається на Art. 146, встановіть дату й контекст посилання та перевірте, чи не йдеться про старий стан права.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-147",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 147 містить спеціальне правило розділу про навчання на studia щодо права cudzoziemiec, який має zezwolenie з art. 144, виконувати працю без окремого zezwolenie na pracę.",
          sourceLocator: "Art. 147",
        },
      ],
      summary:
        "Дозвіл на pobyt для навчання може бути пов’язаний із доступом до праці без окремого дозволу на роботу в межах умов, встановлених самим законом.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Спочатку перевірте, що саме zezwolenie з art. 144 і що воно чинне; потім окремо перевірте інші законні вимоги до конкретної роботи.",
        },
      ],
      legalEffect:
        "Спеціальне правило про звільнення від zezwolenie na pracę не є загальним підтвердженням legalny pobyt після закінчення або cofnięcie дозволу.",
      foreignersCase:
        "У справі зіставте вид і строк karty pobytu/рішення, фактичний статус studia та умови роботи. Не робіть висновок лише за словом «student» у документі.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-148",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 148 встановлює спеціальне правило про cofnięcie zezwolenie на pobyt czasowy для навчання на studia, коли припиняється або не підтверджується навчальна підстава.",
          sourceLocator: "Art. 148",
        },
      ],
      summary:
        "Чинність навчального дозволу пов’язана з реальною підставою studia. Припинення навчання або інша обставина, визначена статтею, може вимагати окремої процедури cofnięcie.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Порівняйте інформацію jednostka prowadząca studia з матеріалами провадження і не підміняйте повідомлення закладу автоматичним рішенням про cofnięcie.",
        },
      ],
      legalEffect:
        "Стаття дає спеціальну підставу для оцінки чинності дозволу на studia; загальні підстави cofnięcie та гарантії процедури також можуть мати значення.",
      foreignersCase:
        "Встановіть точну подію — skreślenie, завершення чи непочаток навчання — та дату її підтвердження. Перевірте зміст decyzja і можливість оскарження.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-148a",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 148a регулює спеціальну оцінку наступного zezwolenie на pobyt для studia, коли попередній період навчання або його перебіг має значення для рішення.",
          sourceLocator: "Art. 148a",
        },
      ],
      summary:
        "Для наступної заяви орган може перевіряти не тільки нове zaświadczenie, а й фактичний перебіг попереднього навчання у межах спеціального правила статті.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Зіставте історію запису, участі та результату навчання з новою підставою; точний висновок залежить від документів jednostka.",
        },
      ],
      legalEffect:
        "Art. 148a не перетворює академічну перерву на автоматичну відмову без оцінки повних фактів і тексту рішення.",
      foreignersCase:
        "Попросіть jednostka підтвердити статус studia та періоди навчання, а у разі спору перевірте, яку саме обставину орган поклав в основу decyzja.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-148b",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 148b містить спеціальне правило для pobyt cudzoziemiec у зв’язку зі studia та відсилає до умов і наслідків, установлених цим розділом.",
          sourceLocator: "Art. 148b",
        },
      ],
      summary:
        "Це положення потрібно читати разом із правилами про навчальний дозвіл, статус закладу та обов’язки повідомлення.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Не ізолюйте Art. 148b: визначте тип заяви, статус jednostka та пов’язані повідомлення, на які посилається розділ.",
        },
      ],
      legalEffect:
        "Правовий наслідок залежить від конкретної навчальної підстави та пов’язаних норм, а не тільки від номера статті.",
      foreignersCase:
        "Зіставте посилання в decyzja з актуальним текстом Art. 148b і документами навчального закладу; невизначений факт не слід подавати як встановлений.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-149",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 149 встановлює обов’язки jednostka prowadząca studia у зв’язку з прийманням cudzoziemiec та передбачає спеціальну вимогу щодо виконання цих обов’язків.",
          sourceLocator: "Art. 149 ust. 1–3",
        },
      ],
      summary:
        "Заклад, який приймає іноземців на studia, має виконувати не лише навчальну, а й передбачену законом інформаційну та організаційну роль.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Обсяг обов’язків визначається статусом і діяльністю jednostka; перевіряйте конкретні документи й строки, а не загальне твердження про прийняття.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Невиконання спеціального обов’язку може мати наслідки для оцінки закладу; це не доводить автоматично порушення cudzoziemiec.",
        },
      ],
      legalEffect:
        "Стаття впливає насамперед на відповідальність і статус jednostka, а наслідок для окремого pobyt треба встановлювати за відповідною нормою.",
      foreignersCase:
        "З’ясуйте, який саме обов’язок Art. 149 ust. 3 став предметом спору, хто мав його виконати і чи є документ про дату та спосіб виконання.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-149a",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 149a визначає спеціальне правило розділу про навчання щодо інформації або статусу cudzoziemiec у зв’язку з його studia.",
          sourceLocator: "Art. 149a",
        },
      ],
      summary:
        "Положення доповнює режим контролю навчальної підстави та має читатися разом із повідомленнями jednostka й правилами про mobilność studenta.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Встановіть, до якої процедури належить факт у справі — звичайні studia чи mobilność — і перевірте пов’язану інформацію закладу.",
        },
      ],
      legalEffect:
        "Сам факт, охоплений Art. 149a, потребує процесуальної оцінки органу; стаття не є універсальною підставою для втрати дозволу.",
      foreignersCase:
        "Використовуйте лише документи, що підтверджують конкретний статус studia/мобільності й дату повідомлення; за відсутності їх висновок залишається попереднім.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-149b",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 149b встановлює детальні обов’язки jednostka prowadząca studia, зокрема повідомлення wojewoda про обставини навчання та виконання інформаційних обов’язків щодо cudzoziemiec.",
          sourceLocator: "Art. 149b ust. 1–13",
        },
      ],
      summary:
        "Університет або інша jednostka повинна повідомляти орган про визначені законом зміни статусу студента й виконувати додаткові обов’язки. Це дає органу актуальну інформацію, але не замінює рішення у справі.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation:
            "Перевіряйте, чи було зроблено кожне назване повідомлення і чи підтверджує його дата отримання органом; пункт 5 прямо використовується також у правилах про затвердження закладу.",
        },
        {
          locator: "ust. 2–12",
          explanation:
            "Інші частини визначають порядок і зміст взаємодії з органом; застосовуйте саме ту частину, яка відповідає факту у справі.",
        },
        {
          locator: "ust. 13",
          explanation:
            "Окремий обов’язок jednostka, названий у ust. 13, має значення для оцінки її виконання; його не слід приписувати cudzoziemiec.",
        },
      ],
      legalEffect:
        "Порушення обов’язку закладу може впливати на його zatwierdzenie або перевірку, але наслідок для pobyt студента залежить від окремої норми та повних фактів.",
      foreignersCase:
        "Попросіть копію повідомлення, доказ його відправлення/отримання і підтвердження статусу студента. Відокремте помилку закладу від дій чи бездіяльності cudzoziemiec.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-149c",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 149c містить спеціальне правило про навчальну підставу або mobilność studenta та її процедурний наслідок.",
          sourceLocator: "Art. 149c",
        },
      ],
      summary:
        "Статтю потрібно застосовувати у зв’язці з інформацією jednostka та правилами про дозвіл для studia; її наслідок залежить від точної фактичної ситуації.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Перепишіть із рішення точну обставину, на яку послався орган, і зіставте її з текстом Art. 149c, не замінюючи це загальною назвою навчання.",
        },
      ],
      legalEffect:
        "Стаття не дає підстави робити автоматичний висновок про відмову або cofnięcie без визначення процедури та рішення компетентного органу.",
      foreignersCase:
        "У справі перевірте дату, статус навчання/мобільності, повідомлення закладу та мотивування decyzja; за відсутності цих даних висновок має залишатися draft.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-150",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 150 регулює спеціальний режим pobyt cudzoziemiec, який користується mobilność studenta, та пов’язані умови перебування в Польщі.",
          sourceLocator: "Art. 150",
        },
      ],
      summary:
        "Мобільність студента — це окремий режим, який не слід автоматично ототожнювати з польським zezwolenie на pobyt для повного навчання.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Встановіть, чи є дозвіл на studia виданий іншою державою ЄС, чи подана польська заява, і який строк мобільності охоплюється документами.",
        },
      ],
      legalEffect:
        "Наслідок Art. 150 залежить від дотримання спеціальних умов mobilność; наявність іноземного документа сама по собі не підтверджує кожну умову.",
      foreignersCase:
        "Перевірте іноземний документ pobyt, підтвердження програми мобільності та повідомлення/документи польської jednostka. Окремо оцініть право на працю.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-151",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 151 встановлює базові умови zezwolenie на pobyt czasowy для cudzoziemiec, який проводить badania naukowe, зокрема підставу в jednostka, страхування, кошти та місце проживання.",
          sourceLocator: "Art. 151",
        },
      ],
      summary:
        "Дозвіл для наукового дослідження потребує підтвердження реальної наукової підстави та загальних умов забезпечення pobyt.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Перевірте документ від jednostka prowadząca badania, health insurance, достатній дохід/кошти та житло в Польщі в межах вимог статті.",
        },
      ],
      legalEffect:
        "Стаття не робить будь-яку співпрацю з університетом або компанією автоматично науковим дослідженням для цілей pobyt.",
      foreignersCase:
        "Зіставте фактичний проєкт, роль cudzoziemiec і документ jednostka; не підміняйте наукову підставу звичайним трудовим договором без додаткової перевірки.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-151a",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 151a містить спеціальне правило для pobyt cudzoziemiec у зв’язку з проведенням badań naukowych та визначає вимогу до документу від host/jednostka.",
          sourceLocator: "Art. 151a",
        },
      ],
      summary:
        "У науковій процедурі важливо відрізняти підтвердження дослідження від загальних документів про фінансове забезпечення.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Перевірте вид і строк документа, який підтверджує наукову підставу, та його відповідність фактичному дослідницькому проєкту.",
        },
      ],
      legalEffect:
        "Спеціальне правило діє лише для названої в статті категорії дослідника; його не можна поширити на іншу мету pobyt без окремої підстави.",
      foreignersCase:
        "Попросіть у jednostka точний документ і опис дослідження, а також перевірте період проєкту та зв’язок із заявленим строком перебування.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-151b",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 151b регулює окрему умову або документальне підтвердження для zezwolenie дослідника в межах правил про badania naukowe.",
          sourceLocator: "Art. 151b",
        },
      ],
      summary:
        "Положення доповнює базові правила для дослідника; його зміст потрібно застосовувати разом із відповідною заявою та документом host institution.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Не замінюйте спеціальну умову загальними доказами: визначте, який факт Art. 151b має бути підтверджений і ким.",
        },
      ],
      legalEffect:
        "Наслідок залежить від того, чи умова є виконаною на дату рішення; сама участь у дослідницькому проєкті не усуває інших вимог.",
      foreignersCase:
        "Зіставте заяву, документ host institution та фактичний проєкт і зафіксуйте невідомі факти як такі, що потребують перевірки.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-152",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 152 встановлює спеціальний порядок або умови продовження pobyt дослідника та пов’язаної з ним наукової підстави.",
          sourceLocator: "Art. 152",
        },
      ],
      summary:
        "Для наступного дозволу дослідника значення має безперервність і документальне підтвердження наукової діяльності, а не лише наявність старої карти побиту.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Перевірте чинний договір/підтвердження host institution, строк дослідження й інші умови, названі у статті.",
        },
      ],
      legalEffect:
        "Стаття визначає спеціальний наслідок для наукової підстави; загальні правила подання та легальності pobyt продовжують мати значення.",
      foreignersCase:
        "Порівняйте попередній і новий періоди дослідження та поясніть будь-яку перерву документами jednostka, не припускаючи автоматичне продовження.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-153",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 153 визначає строк, на який надається zezwolenie на pobyt дослідника, з огляду на строк наукового проєкту або договору.",
          sourceLocator: "Art. 153",
        },
      ],
      summary:
        "Строк дозволу для дослідника прив’язаний до підтвердженої тривалості наукової діяльності та меж, встановлених законом.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Порівняйте строк у документі host institution із бажаним строком pobyt і перевірте законодавчий максимум, якщо він застосовується.",
        },
      ],
      legalEffect:
        "Зазначений у рішенні строк не може ґрунтуватися лише на бажанні заявника; він залежить від доказаної наукової підстави.",
      foreignersCase:
        "Використайте договір/угоду про дослідження як доказ строку, але перевірте також чинність страхування та фінансові умови на весь період.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-154",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 154 містить спеціальні підстави odmowa udzielenia zezwolenie досліднику поза загальними підставами ustawy.",
          sourceLocator: "Art. 154",
        },
      ],
      summary:
        "Навіть за наявності наукового договору дозвіл може бути відмовлений за спеціальною обставиною цієї статті або за загальними правилами.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Прочитайте мотивування decyzja разом із точним пунктом Art. 154; не називайте загальну відмову спеціальною без такого посилання.",
        },
      ],
      legalEffect:
        "Art. 154 впливає на результат розгляду заяви лише у своєму предметному діапазоні; інші обставини оцінюються окремо.",
      foreignersCase:
        "Зберіть документ host institution, статус проєкту та докази загальних умов, а потім розділіть кожну підставу відмови в аналізі.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-154a",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 154a регулює спеціальні реквізити рішення або наслідок для zezwolenie дослідника в межах розділу про badania naukowe.",
          sourceLocator: "Art. 154a",
        },
      ],
      summary:
        "Положення треба читати разом із самим рішенням: важливими є строк, наукова jednostka та визначена законом підстава перебування.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Перевірте, чи decyzja відображає документ про дослідження та чи не виходить за його предмет і строк.",
        },
      ],
      legalEffect:
        "Реквізит або спеціальний наслідок Art. 154a не усуває загальних правил про чинність і cofnięcie дозволу.",
      foreignersCase:
        "Порівняйте рішення, угоду про дослідження та реальні обов’язки cudzoziemiec; невідповідність потрібно описувати як ризик, а не як автоматичний результат.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-155",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 155 встановлює спеціальні підстави cofnięcie zezwolenie досліднику, коли зникає або змінюється підстава badania naukowe.",
          sourceLocator: "Art. 155",
        },
      ],
      summary:
        "Дослідницький дозвіл пов’язаний із продовженням наукової підстави; її припинення може започаткувати процедуру cofnięcie.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Встановіть конкретну подію, що припинила дослідження, дату повідомлення host institution і зміст рішення органу.",
        },
      ],
      legalEffect:
        "Cofnięcie — це рішення компетентного органу з урахуванням усіх фактів, а не автоматичний висновок із неформального повідомлення.",
      foreignersCase:
        "Перевірте, чи проєкт справді завершено або припинено, чи була заміна host institution і чи надано cudzoziemiec можливість пояснити обставини.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-155a",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 155a містить спеціальне правило про правовий статус та/або працю cudzoziemiec, який має дозвіл для badania naukowe.",
          sourceLocator: "Art. 155a",
        },
      ],
      summary:
        "Стаття доповнює режим дослідницького pobyt, але право виконувати конкретну роботу потрібно перевіряти за умовою дозволу та окремими нормами про працю.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Визначте, чи робота є частиною дослідницького проєкту, хто є podmiot і чи діє спеціальне звільнення від zezwolenie na pracę.",
        },
      ],
      legalEffect:
        "Наявність дозволу для дослідника не є безумовним правом на будь-яку працю або будь-якого роботодавця.",
      foreignersCase:
        "Зіставте договір, host institution і фактичний вид роботи; у разі зміни роботодавця перевірте, чи потрібна нова підстава.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-156",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 156 визначає базове правило mobilność naukowca до Польщі для cudzoziemiec, який має дозвіл дослідника, виданий іншою державою ЄС.",
          sourceLocator: "Art. 156",
        },
      ],
      summary:
        "Наявність дозволу дослідника іншої держави ЄС може відкривати спеціальний режим mobilność naukowca в Польщі за умовами закону.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Перевірте іноземний документ, приймаючу польську jednostka, мету й строк мобільності; не плутайте її з новою заявою на звичайний pobyt.",
        },
      ],
      legalEffect:
        "Мобільність є похідним спеціальним режимом і залежить від чинності первинного дозволу та інших умов, названих у розділі.",
      foreignersCase:
        "Зробіть хронологію дозволу іншої держави ЄС, повідомлення польської jednostka та фактичного початку дослідження.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-156a",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 156a регулює повідомлення та документи для mobilność naukowca на території Польщі.",
          sourceLocator: "Art. 156a",
        },
      ],
      summary:
        "Для мобільності дослідника важлива не тільки згода сторін, а й належне повідомлення та підтвердження, передбачені законом.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Перевірте, хто подав повідомлення, коли його отримав орган і який документ дослідника був доданий.",
        },
      ],
      legalEffect:
        "Недотримання формальних умов мобільності може вплинути на можливість користуватися цим режимом, але точний наслідок залежить від рішення та факту порушення.",
      foreignersCase:
        "Збережіть копію повідомлення, підтвердження вручення та угоду про дослідження; не вважайте усний контакт із jednostka достатнім доказом.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-156b",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 156b визначає обставини, за яких mobilność naukowca не може бути прийнята або може бути припинена в Польщі.",
          sourceLocator: "Art. 156b",
        },
      ],
      summary:
        "Спеціальний режим мобільності має власні межі; орган перевіряє первинний дозвіл, мету дослідження та інші названі законом обставини.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Відокремте відсутність умови мобільності від загальної відмови у pobyt і посилайтеся в аналізі на конкретний пункт рішення.",
        },
      ],
      legalEffect:
        "Art. 156b може обмежити саме mobilność naukowca; він не є автоматичною оцінкою всіх можливих підстав перебування.",
      foreignersCase:
        "Перевірте дату чинності іноземного дозволу, реальність польського дослідження і повідомлення jednostka перед висновком про незаконність pobyt.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-156c",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 156c встановлює спеціальну процедуру або наслідок для mobilność naukowca при зміні обставин дослідження.",
          sourceLocator: "Art. 156c",
        },
      ],
      summary:
        "Зміна host institution, строку або фактичного дослідження може вимагати окремої перевірки мобільності, а не простого продовження старого документа.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Зафіксуйте зміну обставин і дату, а потім перевірте, чи стаття вимагає повідомлення, нової процедури або припинення мобільності.",
        },
      ],
      legalEffect:
        "Наслідок залежить від виду зміни та доказів; не кожна адміністративна зміна означає автоматичну втрату права.",
      foreignersCase:
        "Зберіть нову угоду/лист jednostka і підтвердження повідомлення органу. Формулюйте висновок умовно, доки не видно повного рішення.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-156d",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 156d доповнює правила mobilność naukowca спеціальною вимогою щодо документів, строку або інформації в цій процедурі.",
          sourceLocator: "Art. 156d",
        },
      ],
      summary:
        "Для мобільності дослідника потрібно перевірити спеціальну вимогу статті разом із загальними умовами дослідницького pobyt.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Визначте, який документ або строк прямо стосується справи, і не замінюйте його загальним підтвердженням працевлаштування.",
        },
      ],
      legalEffect:
        "Стаття діє лише в режимі mobilność naukowca; для іншої мети перебування потрібна інша правова підстава.",
      foreignersCase:
        "Перевірте первинний дозвіл, угоду про дослідження та хронологію мобільності; відсутній документ позначте як доказову прогалину.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-157",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 157 містить спеціальне правило розділу про badania naukowe, яке визначає умову або обов’язок для cudzoziemiec чи jednostka.",
          sourceLocator: "Art. 157",
        },
      ],
      summary:
        "Стаття завершує блок правил про дослідницький pobyt перед спеціальними положеннями про пов’язані категорії.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Застосовуйте Art. 157 лише після визначення виду дослідницької процедури та сторони, на яку покладено обов’язок.",
        },
      ],
      legalEffect:
        "Правовий ефект залежить від виконання конкретної умови статті; сам статус науковця не усуває загальних правил.",
      foreignersCase:
        "У справі назвіть точний документ, подію та дату, що відповідають Art. 157, і перевірте інформацію host institution.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-157a",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 157a встановлює спеціальне правило для категорії cudzoziemiec, пов’язаної з дослідженням або мобільністю, у межах цього розділу.",
          sourceLocator: "Art. 157a",
        },
      ],
      summary:
        "Положення потрібно читати разом із правилами про host institution і документ дослідника, бо воно працює лише в спеціальному режимі.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Визначте категорію заявника та перевірте спеціальну умову Art. 157a за первинними документами.",
        },
      ],
      legalEffect:
        "Art. 157a не є загальною підставою для будь-якого pobyt; його застосування залежить від фактичної наукової мети.",
      foreignersCase:
        "Порівняйте мету в заяві, угоду про дослідження і фактичну діяльність; за сумніву вкажіть, яку ланку доказів не підтверджено.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-157b",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 157b регулює наступну спеціальну умову або процедуру для дослідницького pobyt cudzoziemiec.",
          sourceLocator: "Art. 157b",
        },
      ],
      summary:
        "Це правило не можна відривати від типу дослідження, статусу jednostka та строку дозволу.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Встановіть відповідну процедуру і перевірте, чи виконано вимогу Art. 157b документом, виданим компетентною jednostka.",
        },
      ],
      legalEffect:
        "Наслідок є спеціальним і не скасовує загальних умов legalny pobyt та процедури.",
      foreignersCase:
        "Попросіть повний текст рішення і документи наукового закладу; не робіть остаточного висновку з одного заголовка чи листа.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-157c",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 157c встановлює спеціальне правило щодо заяви, документа або обов’язку в дослідницькому режимі.",
          sourceLocator: "Art. 157c",
        },
      ],
      summary:
        "Положення уточнює окремий крок дослідницької процедури; точний зміст треба зіставити з видом заяви та її датою.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "З’ясуйте, яка дія та який суб’єкт названі в статті, і перевірте їх виконання документами.",
        },
      ],
      legalEffect:
        "Порушення спеціальної вимоги може мати наслідок лише в межах передбаченої процедури; автоматичний наслідок без decyzja не випливає.",
      foreignersCase:
        "Зробіть таблицю «факт — документ — дата — норма» і не називайте непідтверджену обставину встановленою.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-157d",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 157d містить спеціальне правило, що доповнює режим pobyt для дослідника або пов’язаної мобільності.",
          sourceLocator: "Art. 157d",
        },
      ],
      summary:
        "Застосування Art. 157d залежить від правильної кваліфікації дослідницької підстави та підтвердження обставин host institution.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Перевірте вид дозволу, статус дослідницького проєкту та спеціальний документ, про який ідеться в статті.",
        },
      ],
      legalEffect:
        "Норма не гарантує продовження або збереження побиту без перевірки строку та фактичного дослідження.",
      foreignersCase:
        "Використайте рішення, угоду та повідомлення jednostka; усі припущення про наслідок позначте як такі, що потребують перевірки.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-157e",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 157e встановлює спеціальне правило для дослідницької процедури або пов’язаної категорії pobyt.",
          sourceLocator: "Art. 157e",
        },
      ],
      summary:
        "Стаття продовжує спеціальний блок правил і вимагає читання разом із попередніми умовами дослідницького дозволу.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Спочатку встановіть, який тип заяви охоплено, потім перевірте вимогу Art. 157e за офіційним документом.",
        },
      ],
      legalEffect:
        "Правовий ефект обмежений предметом статті; він не замінює загальних вимог до legalny pobyt.",
      foreignersCase:
        "Не робіть висновок про право особи без повного тексту рішення, строків та документів host institution.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-157f",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 157f визначає спеціальний перехід або наслідок для процедури, пов’язаної з badania naukowe чи мобільністю.",
          sourceLocator: "Art. 157f",
        },
      ],
      summary:
        "Перед переходом до правил про staż потрібно окремо перевірити, чи справа ще належить до дослідницького режиму та чи спрацьовує Art. 157f.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Встановіть попередній статус дозволу, подію переходу і дату; не переносіть наслідок на іншу категорію автоматично.",
        },
      ],
      legalEffect:
        "Стаття має спеціальний, а не універсальний ефект; обсяг його застосування залежить від перехідних фактів і тексту decyzja.",
      foreignersCase:
        "Зберіть хронологію дозволів і змін статусу, а невідповідність між старою та новою підставою опишіть окремо.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-157g",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 157g ust. 1 встановлює умови zezwolenie на pobyt czasowy у celu odbycia stażu для cudzoziemiec, зокрема документ від organizator stażu та загальні умови перебування.",
          sourceLocator: "Art. 157g ust. 1",
        },
      ],
      summary:
        "Дозвіл для стажу потребує реальної програми staż і підтвердження від organizator stażu. Окремо перевіряються страхування, кошти та житло, якщо це вимагає стаття.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Зіставте документ/договір staż, організатора, мету та строк стажу з умовами заяви.",
        },
        {
          locator: "ust. 2 i dalsze",
          explanation:
            "Перевірте додаткові умови й документи за конкретною частиною статті; одного запрошення на практику недостатньо.",
        },
      ],
      legalEffect:
        "Zezwolenie призначене для визначеного staż, тому воно не є загальним дозволом на іншу мету побиту або будь-яку працю.",
      foreignersCase:
        "Встановіть, хто організує стаж, де й коли він проходить, які завдання передбачені та чи відповідають вони документам. Не подавайте шаблон як гарантію.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-157h",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 157h визначає спеціальні вимоги до zezwolenie для odbycia stażu, документів та/або podmiot організатора.",
          sourceLocator: "Art. 157h",
        },
      ],
      summary:
        "Для стажу важливі не тільки назва програми, а й відповідність організатора, строку та фактичних завдань умовам статті.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Перевірте статус organizator stażu і кожен документ, названий нормою; відсутність одного елемента може вимагати wezwanie або іншу процесуальну дію.",
        },
      ],
      legalEffect:
        "Стаття визначає межі спеціального дозволу для staż і не скасовує загальні підстави відмови чи cofnięcie.",
      foreignersCase:
        "Порівняйте програму стажу, фактичне місце роботи та документи організатора; за зміни умов потрібна окрема оцінка.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-157i",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 157i регулює строк або спеціальний реквізит zezwolenie на pobyt для odbycia stażu.",
          sourceLocator: "Art. 157i",
        },
      ],
      summary:
        "Строк дозволу для стажу прив’язаний до фактичної програми та законодавчих меж; карта побиту не створює довшого права, ніж рішення.",
      rules: [
        {
          locator: "cały przepis",
          explanation:
            "Порівняйте строк програми, строк у decyzja та дату початку/завершення staż.",
        },
      ],
      legalEffect:
        "Дозвіл діє в межах визначеного staż; продовження або зміна мети потребує правової підстави, а не лише листа організатора.",
      foreignersCase:
        "Зробіть хронологію стажу і дозволу та перевірте, чи не продовжує особа діяльність після завершення програми без іншої підстави.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-157j",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 157j ust. 1 визначає спеціальні підстави cofnięcie zezwolenie, про яке йдеться в art. 157g ust. 1, коли умови staż більше не виконуються або виникають названі обставини.",
          sourceLocator: "Art. 157j ust. 1 pkt 1–3",
        },
      ],
      summary:
        "Стажовий дозвіл може бути скасований за спеціальними обставинами, переліченими статтею. Потрібно встановити факт і дату кожної обставини.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Перевірте кожну названу підставу окремо: припинення або невиконання умов staż, обставини щодо cudzoziemiec та інші прямо вказані законом факти.",
        },
      ],
      legalEffect:
        "Cofnięcie потребує застосування відповідної підстави й рішення органу; сам конфлікт із organizator stażu не доводить її автоматично.",
      foreignersCase:
        "Зберіть програму staż, повідомлення організатора, пояснення cudzoziemiec і decyzja. Розділіть факт припинення стажу від правового висновку про cofnięcie.",
    },
    {
      provisionId: "ustawa-o-cudzoziemcach-art-157k",
      reviewStatus: "draft",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 157k передбачає cofnięcie zezwolenie з art. 157g ust. 1, крім art. 101 pkt 1–2, якщо дозвіл використовується не за наданою метою або виникла одна з обставин art. 100 ust. 1 pkt 2, 4, 5, 8 чи art. 157j ust. 1 pkt 1–3.",
          sourceLocator: "Art. 157k pkt 1–3",
        },
      ],
      summary:
        "Окрім окремих загальних підстав art. 101 pkt 1–2, стажовий дозвіл скасовується, коли його використовують не за метою або настають прямо перелічені загальні чи спеціальні обставини.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Порівнюється фактичне використання zezwolenie з метою, для якої його було надано; інша діяльність не доводить порушення без оцінки всіх обставин.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Потрібно встановити хоча б одну обставину з art. 100 ust. 1 pkt 2, 4, 5 або 8.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Потрібно встановити хоча б одну обставину з art. 157j ust. 1 pkt 1–3; посилання на іншу статтю не можна розширювати за аналогією.",
        },
      ],
      legalEffect:
        "Стаття визначає додаткові підстави cofnięcie саме стажового дозволу. Рішення має спиратися на доведений факт і правильний пункт, а не лише на припущення про мету.",
      foreignersCase:
        "Порівняйте рішення, програму staż і реальну діяльність, а також перевірте кожен cross-reference до art. 100, 101 і 157j. За неповних фактів висновок має бути обережним.",
    },
  ],
})
