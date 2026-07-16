import {
  createLegalTextAuthor,
  defineLegalTextContent,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"

const kpaLaw = createLegalTextAuthor("kpa")
const ppsaLaw = createLegalTextAuthor("ppsa")
const _foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

export type KpaGuideLevel = "beginner" | "practical" | "advanced"

export type KpaGuideLayer = {
  focus: LegalTextValue
  law: LegalTextValue
  practice: LegalTextValue
  pitfall: LegalTextValue
}

export type KpaGuideQuestion = {
  prompt: LegalTextValue
  answer: LegalTextValue
}

export type KpaGuideModule = {
  id: string
  order: number
  title: LegalTextValue
  polish: LegalTextValue
  articles: LegalTextValue
  outcome: LegalTextValue
  layers: Record<KpaGuideLevel, KpaGuideLayer>
  method: LegalTextValue[]
  checklist: LegalTextValue[]
  questions: KpaGuideQuestion[]
}

export type KpaGuideSource = {
  label: string
  url: string
  note: string
}

export type KpaGuideLesson = {
  paragraphs: LegalTextValue[]
  articles: Array<{
    reference: LegalTextValue
    role: LegalTextValue
  }>
  terms: Array<{
    term: string
    meaning: LegalTextValue
  }>
  caseExample: {
    title: LegalTextValue
    facts: LegalTextValue
    analysis: LegalTextValue
    lesson: LegalTextValue
  }
  findInText: LegalTextValue[]
}

export const kpaGuideLevels: Array<{
  id: KpaGuideLevel
  label: string
  description: string
}> = [
  {
    id: "beginner",
    label: "Початківець",
    description: "Що означає інститут і де він знаходиться в процесі.",
  },
  {
    id: "practical",
    label: "Практика",
    description:
      "Що перевірити в реальній справі та які сліди залишити в актах.",
  },
  {
    id: "advanced",
    label: "Поглиблено",
    description: "Межі норми, винятки та зв’язки з іншими інститутами.",
  },
]

export const kpaGuideModules = defineLegalTextContent(
  [
    {
      id: "system",
      order: 1,
      title: "Що регулює KPA",
      polish: "Zakres KPA i relacja z ustawą szczególną",
      articles: kpaLaw.text`${kpaLaw.articleRange("1", "5", { start: "art. 1", end: "5" })} KPA`,
      outcome:
        "Ви відрізняєте матеріальну умову дозволу від процесуального правила ведення справи.",
      layers: {
        beginner: {
          focus:
            "KPA — це передусім процедура: хто веде справу, як збираються докази, як вручаються письма і як оскаржується рішення.",
          law: kpaLaw.text`${kpaLaw.article("1", "Art. 1")} KPA охоплює індивідуальні справи, які орган вирішує decyzją administracyjną або, якщо спеціальний закон це дозволяє, milcząco.`,
          practice:
            "У справі про pobyt спочатку знайдіть матеріальні умови в ustawie o cudzoziemcach, а потім накладіть на них процесуальну рамку KPA.",
          pitfall:
            "Не шукайте в KPA відповіді, який саме cel pobytu підходить клієнту. KPA пояснює, як орган має цю справу провести.",
        },
        practical: {
          focus:
            "Працюйте двома колонками: lex specialis — умови й спеціальні правила; KPA — загальна процедура там, де спеціальний закон не встановлює іншого.",
          law: kpaLaw.text`KPA має широкий, але не універсальний обсяг. ${kpaLaw.article("3", "Art. 3")} містить виключення, а спеціальні закони можуть змінювати строки, компетенцію, форму або наслідки дій.`,
          practice:
            "На першій сторінці нотатки запишіть: предмет справи, спеціальний закон, орган, дата wszczęcia, спеціальні відступи від KPA.",
          pitfall:
            "Фраза «zgodnie z KPA» без перевірки ustawy szczególnej часто веде до неправильного строку або неправильного органу.",
        },
        advanced: {
          focus:
            "Читайте KPA системно: zakres → zasady ogólne → конкретний інститут → przepisy szczególne → przepisy przejściowe.",
          law: kpaLaw.text`${kpaLaw.article("5", "Art. 5")} містить легальні визначення, які діють усередині кодексу. Одне слово може мати в KPA вужчий сенс, ніж у звичайній мові.`,
          practice:
            "Для кожного висновку позначайте тип джерела: [USTAWA], [KPA], [WYTYCZNA URZĘDU], [ORZECZNICTWO], [WNIOSEK PRAKTYCZNY].",
          pitfall:
            "Офіційна інструкція на сайті допомагає, але не замінює норми закону і не може створити нової негативної передумови.",
        },
      },
      method: [
        "Назвіть індивідуальну справу і очікувану форму завершення.",
        "Знайдіть закон, який створює право, обов’язок або дозвіл.",
        "Перевірте, які елементи процедури спеціальний закон регулює інакше.",
        "До решти процесуальних питань застосуйте відповідний інститут KPA.",
      ],
      checklist: [
        "Визначено lex specialis",
        "Перевірено відступи від KPA",
        "Відділено матеріальну умову від процедури",
      ],
      questions: [
        {
          prompt:
            "Де шукати умову доходу для конкретного виду pobytu — у KPA чи в ustawie o cudzoziemcach?",
          answer:
            "У спеціальному законі. KPA допоможе встановити, як орган має зібрати, оцінити й обговорити докази цієї умови.",
        },
      ],
    },
    {
      id: "anatomy",
      order: 2,
      title: "Як читати статтю і норму",
      polish: "Artykuł, paragraf, punkt, litera; hipoteza i dyspozycja",
      articles: "метод читання + структура KPA",
      outcome:
        "Ви перетворюєте складне речення закону на список умов, суб’єктів, дій і наслідків.",
      layers: {
        beginner: {
          focus:
            "Art. — стаття; § — параграф усередині статті; pkt — нумерований пункт; lit. — літера; zdanie — окреме речення.",
          law: "Правова норма не завжди дорівнює одному реченню. Умова може бути в одному параграфі, виняток — у наступному, а наслідок — в іншій статті.",
          practice:
            "Підкресліть п’ять речей: хто, коли, що робить, за яких умов, з яким наслідком.",
          pitfall:
            "Не зупиняйтеся після першого речення. Слова «chyba że», «z zastrzeżeniem», «nie stosuje się» можуть змінити весь висновок.",
        },
        practical: {
          focus:
            "Перепишіть статтю як логічну формулу: JEŻELI A + B, TO C; WYJĄTEK D; TERMIN E; SKUTEK F.",
          law: "Відсилання типу «stosuje się odpowiednio» означає застосування іншого правила з необхідною адаптацією, а не механічне копіювання.",
          practice:
            "Створіть таблицю: przesłanka → факт у справі → доказ → хто має його отримати → ризик, якщо доказ слабкий.",
          pitfall:
            "Номер статті без актуальної редакції та без дати факту не доводить, що саме ця редакція застосовується.",
        },
        advanced: {
          focus:
            "Перевіряйте дефініції, винятки, przepisy przejściowe, дату wejścia w życie та зв’язок із нормою компетенційною.",
          law: "При неоднозначності не починайте з бажаного результату. Порівняйте буквальне значення, місце норми в системі та мету інституту.",
          practice:
            "Зберігайте permalink ELI і дату перевірки редакції. Для справ на межі змін закону окремо аналізуйте перехідні положення.",
          pitfall:
            "Tekst jednolity — зручна консолідація, але дата його стану може бути ранішою за дату аналізу; перевірте пізніші зміни.",
        },
      },
      method: [
        "Розбийте посилання до найменшої одиниці: art. → § → pkt → lit.",
        "Знайдіть адресата норми: organ, strona, pełnomocnik чи інший учасник.",
        "Випишіть позитивні умови, негативні умови та винятки.",
        "Знайдіть процесуальний наслідок і засіб захисту.",
      ],
      checklist: [
        "Знайдено адресата норми",
        "Виписано всі «chyba że»",
        "Перевірено актуальну редакцію",
      ],
      questions: [
        {
          prompt:
            "Чому не можна пояснювати норму лише переказом першого параграфа?",
          answer:
            "Бо інший параграф може містити виняток, додаткову умову, строк або виключення застосування.",
        },
      ],
    },
    {
      id: "principles",
      order: 3,
      title: "Загальні засади",
      polish: "Zasady ogólne postępowania",
      articles: kpaLaw.text`${kpaLaw.articleRange("6", "16", { start: "art. 6", end: "16" })} KPA`,
      outcome:
        "Ви використовуєте засади як робочий стандарт оцінки дій органу, а не як декоративні гасла.",
      layers: {
        beginner: {
          focus:
            "Ключі: praworządność, dokładne wyjaśnienie, zaufanie, informowanie, czynny udział, szybkość і двоінстанційність.",
          law: kpaLaw.text`${kpaLaw.article("7", "Art. 7")} зобов’язує орган з’ясувати фактичний стан; ${kpaLaw.article("9", "art. 9")} — належно інформувати; ${kpaLaw.article("10", "art. 10")} — дати стороні участь і можливість висловитися перед рішенням.`,
          practice:
            "Коли читаєте письмо органу, запитайте: чи зрозуміло пояснено, що потрібно; чи можна надати позицію; чи орган бачить весь матеріал.",
          pitfall:
            "Засада не скасовує конкретної матеріальної умови. Вона впливає на спосіб ведення і оцінку законності процедури.",
        },
        practical: {
          focus:
            "Поєднуйте засаду з конкретним порушенням: відсутній доступ до матеріалу, неврахований доказ, суперечлива практика, неповне pouczenie.",
          law: kpaLaw.text`${kpaLaw.article("8", "Art. 8")} вимагає пропорційності, безсторонності, рівного ставлення і безпідставного невідступлення від усталеної практики в однаковому фактичному та правовому стані.`,
          practice:
            "В odwołaniu будуйте ланцюг: конкретна дія/бездіяльність → конкретний принцип → вплив на встановлення фактів або результат.",
          pitfall: kpaLaw.text`Саме посилання на ${kpaLaw.article("7", "art. 7")} або 8 без показу впливу на справу зазвичай слабке.`,
        },
        advanced: {
          focus:
            "Засади працюють разом із нормами про докази, обґрунтування і контроль інстанційний.",
          law: kpaLaw.text`Виняток із czynnego udziału в ${kpaLaw.article("10", "art. 10 § 2")} вузький: невідкладність через небезпеку для життя/здоров’я або непоправну матеріальну шкоду; причину треба зафіксувати в актах.`,
          practice:
            "Перевіряйте, чи орган не перетворив дискрецію на довільність: має бути правова межа, фактична основа і зрозуміле обґрунтування.",
          pitfall:
            "«Słuszny interes strony» не означає автоматичну перевагу інтересу заявника над законом або інтересами інших осіб.",
        },
      },
      method: [
        "Назвіть конкретну процесуальну дію органу",
        "Знайдіть відповідну засаду",
        "Покажіть, який факт або право постраждало",
        "Зв’яжіть засаду зі спеціальною нормою",
      ],
      checklist: [
        "Сторона могла брати участь",
        "Орган пояснив істотні обставини",
        "Усі важливі докази розглянуті",
      ],
      questions: [
        {
          prompt: kpaLaw.text`Чи ${kpaLaw.article("9", "art. 9")} звільняє сторону від обов’язку подати потрібні документи?`,
          answer:
            "Ні. Він зобов’язує орган інформувати і давати необхідні пояснення, але не усуває матеріальних та процесуальних обов’язків сторони.",
        },
      ],
    },
    {
      id: "authority",
      order: 4,
      title: "Який орган веде справу",
      polish: "Właściwość rzeczowa, miejscowa i instancyjna",
      articles: kpaLaw.text`${kpaLaw.articleRange("19", "23", { start: "art. 19", end: "23" })}, ${kpaLaw.articleRange("65", "66", { start: "art. 65", end: "66" })} KPA`,
      outcome:
        "Ви перевіряєте компетенцію до аналізу документів і знаєте, що робити з поданням до неправильного органу.",
      layers: {
        beginner: {
          focus:
            "Właściwość rzeczowa відповідає на «який тип органу», miejscowa — «на якій території», instancyjna — «яка інстанція».",
          law: kpaLaw.text`За ${kpaLaw.article("19", "art. 19")} орган зобов’язаний сам контролювати свою rzeczową і miejscową właściwość.`,
          practice:
            "Для pobytu не вгадуйте wojewodę за адресою кореспонденції — перевірте спеціальне правило компетенції і фактичну підставу територіального зв’язку.",
          pitfall:
            "Адресат листа, місце роботи і місце проживання можуть бути в різних воєводствах.",
        },
        practical: {
          focus:
            "Фіксуйте дату подання, спосіб і орган-адресат. При передачі справи перевірте повідомлення та безперервність строків.",
          law: kpaLaw.text`${kpaLaw.article("65", "Art. 65")} регулює передачу podania до właściwego organu; подання до неправильного органу до спливу строку за загальним правилом вважається внесеним із дотриманням строку.`,
          practice:
            "Збережіть UPO, штамп прийняття або підтвердження відправлення — це доказ дати першого внесення.",
          pitfall: kpaLaw.text`Не кожну помилку адресата лікує ${kpaLaw.article("65", "art. 65")} однаково; перевірте, чи орган можна встановити з подання і чи спеціальний закон не має іншого правила.`,
        },
        advanced: {
          focus:
            "Відрізняйте spór o właściwość між органами від незгоди сторони з правовою оцінкою органу.",
          law: kpaLaw.text`${kpaLaw.article("22", "Art. 22")} визначає, хто вирішує конкретні спори про компетенцію; до вирішення спору ${kpaLaw.article("23", "art. 23")} дозволяє лише невідкладні дії у визначених інтересах.`,
          practice:
            "У складній справі зробіть окрему нотатку компетенції з нормою спеціального закону, фактом, який її прив’язує, і доказом цього факту.",
          pitfall: kpaLaw.text`Порушення właściwości може мати серйозні наслідки, включно з підставою nieważności за ${kpaLaw.article("156", "art. 156 § 1")} pkt 1.`,
        },
      },
      method: [
        "Знайдіть норму компетенції в спеціальному законі",
        "Встановіть факт територіального зв’язку",
        "Перевірте першу й апеляційну інстанції",
        "Збережіть доказ дати та адресата подання",
      ],
      checklist: [
        "Rzeczowa перевірена",
        "Miejscowa підтверджена фактом",
        "Відомий орган odwoławczy",
      ],
      questions: [
        {
          prompt: "Хто має контролювати właściwość — лише заявник?",
          answer: kpaLaw.text`Ні. ${kpaLaw.article("19", "Art. 19")} прямо покладає на organ обов’язок дотримуватися своєї rzeczowej і miejscowej właściwości з уряду.`,
        },
      ],
    },
    {
      id: "party",
      order: 5,
      title: "Сторона і представник",
      polish: "Strona, interes prawny, przedstawiciel, pełnomocnik",
      articles: kpaLaw.text`${kpaLaw.articleRange("28", "34", { start: "art. 28", end: "34" })}, ${kpaLaw.article("40", "art. 40")} KPA`,
      outcome:
        "Ви знаєте, хто має процесуальні права, хто може діяти і кому орган має вручати письма.",
      layers: {
        beginner: {
          focus:
            "Strona — це не просто зацікавлена особа, а той, чий інтерес правний або обов’язок стосується провадження.",
          law: kpaLaw.text`${kpaLaw.article("28", "Art. 28")} пов’язує статус сторони з interesem prawnym або obowiązkiem. ${kpaLaw.article("32", "Art. 32")} дозволяє діяти через pełnomocnika, якщо дія не вимагає особистої участі.`,
          practice:
            "На початку справи визначте заявника, інших можливих сторін, представника законного та pełnomocnika.",
          pitfall:
            "Інтерес фактичний — наприклад, економічна вигода третьої особи — не завжди дорівнює interesowi prawnemu.",
        },
        practical: {
          focus:
            "Перевірте форму і обсяг pełnomocnictwa, підпис, оплату skarbową та адресу для вручень.",
          law: kpaLaw.text`За ${kpaLaw.article("40", "art. 40")}, коли сторона діє через представника, письма вручаються представникові; для кількох pełnomocników діють правила цієї статті.`,
          practice:
            "Ведіть реєстр: хто уповноважений, з якої дати, на які дії, чи не відкликано повноваження.",
          pitfall:
            "Особиста дія, якої вимагає спеціальний закон, не стає необов’язковою через широке pełnomocnictwo.",
        },
        advanced: {
          focus:
            "Статус сторони визначає доступ до актів, право на докази й оскарження; помилкова відмова в участі може бути підставою wznowienia.",
          law: kpaLaw.text`${kpaLaw.article("145", "Art. 145 § 1")} pkt 4 передбачає wznowienie, коли сторона без власної вини не брала участі в провадженні.`,
          practice:
            "Якщо орган ігнорує pełnomocnika або потенційну сторону, фіксуйте конкретні невручені письма і пропущені можливості дії.",
          pitfall:
            "Не змішуйте відсутність strony в матеріально-правовому сенсі з технічною відсутністю документа pełnomocnictwa.",
        },
      },
      method: [
        "Визначте interes prawny",
        "Перевірте здатність діяти",
        "Перевірте повноваження",
        "Встановіть правильного адресата doręczeń",
      ],
      checklist: [
        "Strona визначена",
        "Pełnomocnictwo охоплює дію",
        "Doręczenia йдуть правильній особі",
      ],
      questions: [
        {
          prompt: "Чи може pełnomocnik замість іноземця виконати кожну дію?",
          answer: kpaLaw.text`Ні. ${kpaLaw.article("32", "Art. 32")} зберігає виняток для дій, характер яких вимагає особистої участі; додаткові особисті обов’язки може встановлювати спеціальний закон.`,
        },
      ],
    },
    {
      id: "initiation",
      order: 6,
      title: "Початок справи і podanie",
      polish: "Wszczęcie, podania i braki formalne",
      articles: kpaLaw.text`${kpaLaw.articleRange("61", "66", { start: "art. 61", end: "66" })} KPA`,
      outcome:
        "Ви розрізняєте brak formalny podania від недостатнього доказу матеріальної умови.",
      layers: {
        beginner: {
          focus:
            "Провадження починається na żądanie strony або z urzędu. Podanie — широка категорія: вимога, пояснення, odwołanie, zażalenie.",
          law: kpaLaw.text`${kpaLaw.article("63", "Art. 63")} визначає способи і мінімальні елементи podania. ${kpaLaw.article("64", "Art. 64")} регулює наслідки браку адреси та інших формальних недоліків.`,
          practice:
            "Завжди відділяйте: чи документ не відповідає формі подання, чи просто ще не доводить одну з умов дозволу.",
          pitfall:
            "Brak formalny і brak materialny мають різну логіку та не повинні автоматично мати однаковий наслідок.",
        },
        practical: {
          focus: kpaLaw.text`Для ${kpaLaw.article("64", "art. 64 § 2")} wezwanie має вказати недолік, строк не коротший ніж 7 днів і наслідок pozostawienia bez rozpoznania.`,
          law: kpaLaw.text`Якщо адреси немає і її не можна встановити, ${kpaLaw.article("64", "art. 64 § 1")} передбачає pozostawienie podania bez rozpoznania; інші вимоги — wezwanie до усунення.`,
          practice:
            "У відповіді вкажіть номер пункту wezwania, що саме виправлено, де доказ і чи потрібне пояснення щодо неможливості подання.",
          pitfall:
            "Не називайте кожну вимогу органу «brakiem formalnym». Докази умов часто належать до postępowania wyjaśniającego.",
        },
        advanced: {
          focus:
            "Дата wszczęcia впливає на строки, застосовну редакцію і перехідні правила; спеціальний закон може пов’язувати її з додатковими діями.",
          law: kpaLaw.text`${kpaLaw.article("61", "Art. 61 § 3")} за загальним правилом пов’язує дату wszczęcia na żądanie strony з днем doręczenia żądania organowi, але lex specialis може модифікувати картину.`,
          practice:
            "Будуйте окремо: дата фізичного/електронного внесення, дата отримання органом, дата усунення формального браку, спеціальна дата wszczęcia.",
          pitfall:
            "Не робіть висновок про легальність перебування лише з процесуальної дати KPA — це питання спеціального закону.",
        },
      },
      method: [
        "Встановіть спосіб wszczęcia",
        kpaLaw.text`Перевірте мінімум ${kpaLaw.article("63", "art. 63")}`,
        "Класифікуйте кожен недолік",
        "Звірте спеціальні вимоги й наслідки",
      ],
      checklist: [
        "Дата внесення доведена",
        "Недоліки класифіковані",
        "Наслідок wezwania прочитаний",
      ],
      questions: [
        {
          prompt: kpaLaw.text`Відсутній доказ стабільного доходу — це завжди brak formalny з ${kpaLaw.article("64", "art. 64")}?`,
          answer:
            "Ні. Часто це питання доведення матеріальної умови. Потрібно перевірити спеціальний закон і точну правову підставу wezwania.",
        },
      ],
    },
    {
      id: "files-evidence",
      order: 7,
      title: "Акти і докази",
      polish: "Akta sprawy i postępowanie dowodowe",
      articles: kpaLaw.text`${kpaLaw.articleRange("73", "81a", { start: "art. 73", end: "81a" })} KPA`,
      outcome:
        "Ви будуєте доказову матрицю і перевіряєте, чи орган розглянув матеріал як ціле.",
      layers: {
        beginner: {
          focus: kpaLaw.text`${kpaLaw.article("73", "Art. 73")} дає стороні доступ до akt sprawy. Доказом може бути все, що допомагає з’ясувати справу і не суперечить праву.`,
          law: kpaLaw.text`${kpaLaw.article("75", "Art. 75")} має відкритий каталог доказів; ${kpaLaw.article("77", "art. 77")} зобов’язує organ вичерпно зібрати і розглянути весь матеріал.`,
          practice:
            "Для кожної умови зробіть рядок: умова → факт → документ → період → можливе протиріччя.",
          pitfall:
            "Велика кількість документів не компенсує відсутності доказу саме потрібної умови.",
        },
        practical: {
          focus:
            "Подавайте докази з тезою: який факт підтверджує документ і за який період.",
          law: kpaLaw.text`${kpaLaw.article("78", "Art. 78")} регулює вимоги сторони щодо доказу; ${kpaLaw.article("80", "art. 80")} вимагає оцінки на основі всього матеріалу, а ${kpaLaw.article("81", "art. 81")} — можливості сторони висловитися щодо доказаної обставини.`,
          practice:
            "Перед рішенням замовте доступ до akt, перевірте службові нотатки, відповіді інших органів, пропущені сторінки і дати.",
          pitfall:
            "Не надсилайте документ без пояснення його зв’язку з przesłanką; орган може оцінити його в іншому контексті.",
        },
        advanced: {
          focus: kpaLaw.text`${kpaLaw.article("79a", "Art. 79a")} — процесуальний сигнал про незадоволені залежні від сторони умови в провадженні на її вимогу; він не замінює матеріальну норму.`,
          law: kpaLaw.text`При інформуванні про можливість висловитися organ має в умовах ${kpaLaw.article("79a", "art. 79a")} вказати залежні від сторони przesłanki, які на цей момент не виконані або не доведені і можуть призвести до негативного рішення.`,
          practice: kpaLaw.text`Порівняйте інформацію ${kpaLaw.article("79a", "art. 79a")} з майбутнім uzasadnieniem: чи негативне рішення не спирається на новий, раніше неозвучений дефіцит.`,
          pitfall: kpaLaw.text`${kpaLaw.article("81a", "Art. 81a")} про сумніви щодо фактів має законні винятки; не застосовуйте його автоматично до кожної справи на żądanie.`,
        },
      },
      method: [
        "Розкладіть матеріальну норму на умови",
        "Підберіть доказ до кожної умови",
        "Перевірте суперечності в актах",
        "Сформулюйте wnioski dowodowe",
      ],
      checklist: [
        "Є матриця умов",
        "Переглянуто акти",
        "Кожен доказ має опис факту",
      ],
      questions: [
        {
          prompt: "Чи organ може оцінити один документ ізольовано від решти?",
          answer: kpaLaw.text`${kpaLaw.article("80", "Art. 80")} вимагає оцінки на основі całokształtu materiału dowodowego, тому суттєві зв’язки й суперечності мають бути розглянуті разом.`,
        },
      ],
    },
    {
      id: "time-service",
      order: 8,
      title: "Строки і вручення",
      polish: "Terminy, doręczenia i przywrócenie terminu",
      articles: kpaLaw.text`${kpaLaw.articleRange("35", "49b", { start: "art. 35", end: "49b" })}, ${kpaLaw.articleRange("57", "60", { start: "art. 57", end: "60" })} KPA`,
      outcome:
        "Ви рахуєте строк від юридично значущого вручення і не змішуєте строк органу зі строком сторони.",
      layers: {
        beginner: {
          focus:
            "Строк органу на ведення справи і строк сторони на дію — різні годинники. Doręczenie часто запускає саме годинник сторони.",
          law: kpaLaw.text`${kpaLaw.article("35", "Art. 35")} вимагає дії без зайвої затримки й встановлює загальні строки; ${kpaLaw.article("36", "art. 36")} — повідомлення про затримку, причину, новий строк і право на ponaglenie.`,
          practice:
            "Ведіть реєстр: документ, спосіб вручення, дата фактичного/правового вручення, початок, кінець, виконана дія.",
          pitfall:
            "Дата на самому письмі зазвичай не дорівнює даті початку вашого строку.",
        },
        practical: {
          focus: kpaLaw.text`За ${kpaLaw.article("57", "art. 57")} день події не входить до строку в днях; субота або ustawowo wolny dzień переносить кінець на наступний робочий день.`,
          law: kpaLaw.text`${kpaLaw.article("40", "Art. 40")} визначає адресата при представництві, ${kpaLaw.article("41", "art. 41")} — обов’язок повідомляти про зміну адреси та можливий наслідок попереднього вручення.`,
          practice:
            "Зберігайте конверт, awizo, UPO та скриньку e-Doręczeń; без доказу вручення неможливо надійно порахувати строк.",
          pitfall:
            "Електронна доставка має власну юридичну механіку. Не переносіть інтуїтивно правила паперового awizo на електронне повідомлення.",
        },
        advanced: {
          focus:
            "Przywrócenie terminu не є продовженням строку: треба uprawdopodobnić brak winy, діяти протягом 7 днів від припинення перешкоди і одночасно виконати пропущену дію.",
          law: kpaLaw.text`Ці умови випливають з ${kpaLaw.article("58", "art. 58")}; ${kpaLaw.article("59", "art. 59")} визначає орган, який вирішує клопотання.`,
          practice:
            "До клопотання додайте хронологію перешкоди, докази, дату її припинення і сам документ, строк якого пропущено.",
          pitfall:
            "Завантаженість, незнання права або пізнє прочитання правильно врученого письма не автоматично доводять brak winy.",
        },
      },
      method: [
        "Встановіть подію, що запускає строк",
        "Підтвердьте doręczenie",
        kpaLaw.text`Застосуйте ${kpaLaw.article("57", "art. 57")} крок за кроком`,
        "Перевірте lex specialis і спосіб внесення",
      ],
      checklist: [
        "Є доказ вручення",
        "День події не пораховано",
        "Перевірено суботу/свято",
      ],
      questions: [
        {
          prompt:
            "Письмо датоване 2 липня, але вручено 8 липня. Від якої дати зазвичай рахуємо строк на odwołanie?",
          answer:
            "Від юридично значущого doręczenia/ogłoszenia, тобто не автоматично від дати створення письма. Точний початок перевіряємо за правилами вручення.",
        },
      ],
    },
    {
      id: "summons",
      order: 9,
      title: "Як читати wezwanie",
      polish: "Wezwania do czynności, wyjaśnień i dokumentów",
      articles: kpaLaw.text`${kpaLaw.articleRange("50", "56", { start: "art. 50", end: "56" })} KPA + правова підстава конкретної вимоги`,
      outcome:
        "Ви розбираєте wezwanie пункт за пунктом: компетенція, дія, строк, форма, наслідок і зв’язок з умовою.",
      layers: {
        beginner: {
          focus:
            "Wezwanie — це процесуальне письмо з конкретною вимогою. Воно не є автоматично відмовою і не кожне wezwanie стосується braków formalnych.",
          law: kpaLaw.text`${kpaLaw.article("50", "Art. 50")} дозволяє викликати до участі, пояснень або показань; ${kpaLaw.article("54", "art. 54")} перелічує елементи wezwania.`,
          practice:
            "Виділіть маркером: хто викликає, кого, у якій справі, для чого, до коли, як виконати, наслідки невиконання.",
          pitfall:
            "Не відповідайте одним пакетом без нумерації — легко пропустити один пункт або не пояснити відсутній документ.",
        },
        practical: {
          focus:
            "Класифікуйте кожен пункт як: formalny, dowodowy, osobista czynność, informacyjny або сумнівний за підставою.",
          law: kpaLaw.text`${kpaLaw.article("54", "Art. 54")} вимагає, зокрема, назву й адресу органу, дані викликаного, справу, мету, форму/строк і pouczenie про наслідки невиконання.`,
          practice:
            "Створіть таблицю відповіді: № wezwania → вимога → правова умова → додаток → пояснення → ризик.",
          pitfall:
            "Документ може бути релевантним, але вимога надмірно широкою. Спочатку зрозумійте факт, який organ намагається встановити.",
        },
        advanced: {
          focus:
            "Перевірте пропорційність, конкретність, правову основу і те, чи може organ отримати інформацію самостійно.",
          law: kpaLaw.text`${kpaLaw.article("50", "Art. 50 § 1")} пов’язує wezwanie з необхідністю для розstrzygnięcia або czynności urzędowych; засади ${kpaLaw.article("8", "art. 8")} і 12 допомагають оцінити адекватність способу.`,
          practice:
            "Якщо виконати неможливо, не мовчіть: до строку подайте доказану причину, альтернативний доказ і чітке клопотання.",
          pitfall:
            "Сумнів у законності вимоги сам по собі не зупиняє строк і не гарантує відсутності негативного наслідку.",
        },
      },
      method: [
        "Зафіксуйте doręczenie",
        "Розкладіть wezwanie на пункти",
        "Знайдіть мету кожної вимоги",
        "Складіть індекс додатків і перевірте комплектність",
      ],
      checklist: [
        "Кожен пункт має відповідь",
        "Вказано номер додатка",
        "Неможливість виконання пояснена до строку",
      ],
      questions: [
        {
          prompt:
            "Чи кожне wezwanie означає, що wniosek був формально неповний?",
          answer:
            "Ні. Wezwanie може стосуватися доказів, пояснень, особистої дії або іншої процесуальної потреби. Правову природу треба встановити з підстави і змісту.",
        },
      ],
    },
    {
      id: "silence",
      order: 10,
      title: "Мовчазне вирішення",
      polish: "Milczące załatwienie sprawy",
      articles: kpaLaw.text`${kpaLaw.articleRange("122a", "122g", { start: "art. 122a", end: "122g" })} KPA`,
      outcome:
        "Ви не плутаєте тривале мовчання органу з позитивним вирішенням справи.",
      layers: {
        beginner: {
          focus:
            "Milczące załatwienie — винятковий механізм. Сам факт, що organ довго не відповідає, не означає дозволу.",
          law: kpaLaw.text`${kpaLaw.article("122a", "Art. 122a")} застосовує цей режим лише тоді, коли спеціальний закон прямо так передбачає.`,
          practice:
            "Перш ніж говорити про milczenie, знайдіть конкретну норму спеціального закону і тип: milczące zakończenie чи milcząca zgoda.",
          pitfall:
            "Bezczynność і milczące załatwienie — різні інститути з протилежною логікою.",
        },
        practical: {
          focus:
            "Перевірте початок строку, kompletność, можливі wezwania і дії, які переривають або змінюють хід режиму за спеціальною нормою.",
          law: "KPA регулює момент і наслідки milczącego załatwienia та можливість отримання zaświadczenia, але активацію дає lex specialis.",
          practice:
            "У нотатці наведіть дослівне посилання на спеціальну норму; без нього не будувати позитивний висновок.",
          pitfall: kpaLaw.text`Звичайні строки ${kpaLaw.article("35", "art. 35")} не створюють milczącej zgody.`,
        },
        advanced: {
          focus:
            "Навіть при milczącym załatwieniu діють механізми контролю, а KPA містить спеціальні правила надзвичайних режимів для такого результату.",
          law: kpaLaw.text`${kpaLaw.article("122g", "Art. 122g")} передбачає відповідне застосування визначених інститутів до справи, вирішеної milcząco.`,
          practice:
            "Перевіряйте права інших сторін, дату наслідку, zaświadczenie і спеціальний спосіб оскарження.",
          pitfall:
            "Не переносіть режим з однієї адміністративної процедури на іншу лише через схожість назви дозволу.",
        },
      },
      method: [
        "Знайдіть пряму норму lex specialis",
        "Визначте вид milczenia",
        "Порахуйте спеціальний строк",
        "Перевірте zaświadczenie і контроль",
      ],
      checklist: [
        "Є пряма норма",
        "Milczenie не сплутано з bezczynnością",
        "Строк пораховано за спеціальним правилом",
      ],
      questions: [
        {
          prompt:
            "Орган не вирішує справу кілька місяців. Чи це автоматично milcząca zgoda?",
          answer:
            "Ні. Потрібна пряма норма спеціального закону. Інакше аналізуємо строки, bezczynność/przewlekłość і ponaglenie.",
        },
      ],
    },
    {
      id: "decisions",
      order: 11,
      title: "Decyzja і postanowienie",
      polish: "Rozstrzygnięcia organu i ich elementy",
      articles: kpaLaw.text`${kpaLaw.articleRange("104", "113", { start: "art. 104", end: "113" })}, ${kpaLaw.articleRange("123", "126", { start: "art. 123", end: "126" })} KPA`,
      outcome:
        "Ви читаєте акт у правильному порядку: форма, sentencja, підстава, факти, оцінка, pouczenie.",
      layers: {
        beginner: {
          focus:
            "Decyzja зазвичай вирішує справу по суті або інакше завершує провадження; postanowienie вирішує окреме процесуальне питання, якщо закон не каже інакше.",
          law: kpaLaw.text`${kpaLaw.article("104", "Art. 104")} описує роль decyzji, ${kpaLaw.article("107", "art. 107")} — її обов’язкові елементи; ${kpaLaw.article("123", "art. 123")} стосується postanowień у ході провадження.`,
          practice:
            "Почніть із sentencji: що саме надано, відмовлено, припинено або наказано. Лише потім читайте uzasadnienie.",
          pitfall:
            "Назва документа не завжди достатня. Дивіться, що він реально вирішує і який засіб оскарження вказано законом.",
        },
        practical: {
          focus:
            "Перевірте: organ, strony, podstawa prawna, rozstrzygnięcie, uzasadnienie faktyczne i prawne, pouczenie, podpis.",
          law: kpaLaw.text`${kpaLaw.article("107", "Art. 107")} вимагає пояснити, які факти organ визнав доведеними, на яких доказах і чому іншим доказам відмовив у вірогідності або силі.`,
          practice:
            "Побудуйте таблицю «умова закону → висновок organu → доказ → помилка/згода → аргумент odwołania».",
          pitfall:
            "Не оскаржуйте лише тон uzasadnienia; покажіть помилку у факті, нормі, оцінці доказу або процедурі та її вплив.",
        },
        advanced: {
          focus:
            "Розрізняйте ostateczność, prawomocność і wykonalność; це не синоніми.",
          law: kpaLaw.text`${kpaLaw.article("16", "Art. 16")} визначає decyzje ostateczne і prawomocne; ${kpaLaw.article("110", "art. 110")} пов’язує зв’язаність organu рішенням із його doręczeniem або ogłoszeniem, з передбаченими законом винятками.`,
          practice:
            "Перевірте natychmiastowa wykonalność, відмову від odwołania, виправлення, uzupełnienie і вплив цих дій на строки.",
          pitfall:
            "Błędne pouczenie має процесуальне значення, але не варто припускати, що воно автоматично змінює компетенцію чи вид засобу захисту.",
        },
      },
      method: [
        "Визначте форму акта",
        "Прочитайте sentencję",
        "Зіставте факти з умовами",
        "Перевірте pouczenie і doręczenie",
      ],
      checklist: [
        "Sentencja зрозуміла",
        "Uzasadnienie покриває докази",
        "Засіб і строк захисту перевірені",
      ],
      questions: [
        {
          prompt: "Що читати першим у негативній decyzji?",
          answer:
            "Sentencję/rozstrzygnięcie: вона визначає юридичний результат. Потім — підставу, факти, оцінку доказів і pouczenie.",
        },
      ],
    },
    {
      id: "appeal",
      order: 12,
      title: "Оскарження в адміністрації",
      polish: "Odwołanie i zażalenie",
      articles: kpaLaw.text`${kpaLaw.articleRange("127", "144", { start: "art. 127", end: "144" })} KPA`,
      outcome:
        "Ви обираєте правильний засіб, орган, маршрут і строк, а аргументи прив’язуєте до справи.",
      layers: {
        beginner: {
          focus:
            "Odwołanie стосується decyzji першої інстанції; zażalenie на postanowienie доступне лише тоді, коли закон це прямо передбачає.",
          law: kpaLaw.text`${kpaLaw.article("129", "Art. 129")}: odwołanie вноситься до organu odwoławczego через organ, який видав decyzję, за загальним правилом протягом 14 днів. ${kpaLaw.article("141", "Art. 141")}: zażalenie — 7 днів, якщо кодекс його допускає.`,
          practice:
            "Завжди перевірте: що це за акт, дата doręczenia, останній день, organ pośredniczący, organ właściwy.",
          pitfall:
            "Не надсилайте odwołanie безпосередньо до другої інстанції, якщо закон вимагає посередництва першої.",
        },
        practical: {
          focus:
            "Сильне odwołanie має структуру: zakres zaskarżenia, zarzuty, wnioski, uzasadnienie, dowody.",
          law: kpaLaw.text`${kpaLaw.article("128", "Art. 128")} не вимагає детального uzasadnienia, якщо спеціальний закон не встановлює інакше, але має випливати незадоволення рішенням.`,
          practice: kpaLaw.text`Попри мінімум ${kpaLaw.article("128", "art. 128")}, дайте organowi карту помилок: неправильна норма, неповний факт, хибна оцінка доказу, порушена процедура.`,
          pitfall:
            "Новий документ без пояснення, яку умову він доводить і чому має значення, може не виправити слабкий аргумент.",
        },
        advanced: {
          focus: kpaLaw.text`Орган другої інстанції може utrzymać, zmienić/uchylić і вирішити по суті, umorzyć або в умовах ${kpaLaw.article("138", "art. 138 § 2")} передати справу назад.`,
          law: kpaLaw.text`${kpaLaw.article("139", "Art. 139")} встановлює zakaz reformationis in peius із винятками для rażącego naruszenia prawa або rażącego naruszenia interesu społecznego.`,
          practice:
            "Формулюйте бажаний тип rozstrzygnięcia і, якщо матеріал достатній, пояснюйте, чому справа не потребує повернення на першу інстанцію.",
          pitfall:
            "Zażalenie не є універсальним засобом на кожне postanowienie; те, що не оскаржується окремо, іноді можна атакувати лише в odwołaniu від decyzji.",
        },
      },
      method: [
        "Класифікуйте акт",
        "Порахуйте строк",
        "Сформулюйте zarzuty за категоріями",
        "Додайте чіткі wnioski і докази",
      ],
      checklist: [
        "Правильний засіб",
        "Правильний маршрут",
        "Кожен zarzut показує вплив",
      ],
      questions: [
        {
          prompt: "Чи на кожне postanowienie можна подати zażalenie?",
          answer: kpaLaw.text`Ні. За ${kpaLaw.article("141", "art. 141")} — лише коли кодекс або інший закон прямо це передбачає; інакше можливість заперечення може виникнути разом з odwołaniem від decyzji.`,
        },
      ],
    },
    {
      id: "delay",
      order: 13,
      title: "Коли справа триває надто довго",
      polish: "Bezczynność, przewlekłość i ponaglenie",
      articles: kpaLaw.text`${kpaLaw.articleRange("35", "38", { start: "art. 35", end: "38" })} KPA`,
      outcome:
        "Ви відрізняєте пропущений строк від неефективного ведення і готуєте обґрунтоване ponaglenie.",
      layers: {
        beginner: {
          focus:
            "Bezczynność — справу не завершено у строк; przewlekłość — її ведуть довше, ніж потрібно. Ponaglenie має містити uzasadnienie.",
          law: kpaLaw.text`Ці визначення і право на ponaglenie містить ${kpaLaw.article("37", "art. 37")}. ${kpaLaw.article("36", "Art. 36")} зобов’язує organ повідомити причину затримки, новий строк і право на ponaglenie.`,
          practice: kpaLaw.text`Спочатку побудуйте timeline: wszczęcie, wezwania, ваші відповіді, паузи, повідомлення ${kpaLaw.article("36", "art. 36")}, остання дія organu.`,
          pitfall:
            "Саме відчуття, що «довго», слабше за точну хронологію і зіставлення з правовим строком.",
        },
        practical: {
          focus:
            "Ponaglenie подається до organu wyższego stopnia через organ, що веде справу; якщо вищого немає — до того самого organu.",
          law: kpaLaw.text`${kpaLaw.article("37", "Art. 37")} визначає маршрут, обов’язкове uzasadnienie та спосіб оцінки bezczynności/przewlekłości.`,
          practice: kpaLaw.text`Вкажіть, які періоди не рахуються за ${kpaLaw.article("35", "art. 35 § 5")}, але не погоджуйтеся автоматично з кожним виключенням без фактичної підстави.`,
          pitfall:
            "Ponaglenie не замінює відповідь на чинне wezwanie і не виправляє невиконаний обов’язок сторони.",
        },
        advanced: {
          focus:
            "Після ponaglenia можливий судовий контроль bezczynności або przewlekłości за p.p.s.a.; це окремий предмет від оскарження майбутньої decyzji.",
          law: kpaLaw.text`${kpaLaw.article("38", "Art. 38")} KPA пов’язує необґрунтовану бездіяльність/затягування з відповідальністю працівника; судові наслідки визначає p.p.s.a.`,
          practice:
            "У судовій перспективі зберігайте доказ внесення ponaglenia, повний timeline і докази того, що справа була готова до дії.",
          pitfall:
            "Негативне postanowienie щодо ponaglenia не означає, що майбутня skarga на бездіяльність автоматично неможлива; предмет і допустимість треба аналізувати за p.p.s.a.",
        },
      },
      method: [
        "Встановіть застосовний строк",
        "Відніміть лише законні періоди",
        "Розділіть bezczynność і przewlekłość",
        "Подайте мотивоване ponaglenie правильним маршрутом",
      ],
      checklist: [
        "Є timeline",
        kpaLaw.text`Враховано ${kpaLaw.article("35", "art. 35 § 5")}`,
        "Є доказ подання ponaglenia",
      ],
      questions: [
        {
          prompt: "Що має бути в ponagleniu крім назви справи?",
          answer: kpaLaw.text`Щонайменше uzasadnienie: конкретна хронологія і пояснення, чому є bezczynność або przewlekłość. ${kpaLaw.article("37", "Art. 37")} прямо вимагає мотивування.`,
        },
      ],
    },
    {
      id: "extraordinary",
      order: 14,
      title: "Надзвичайні режими",
      polish: "Wznowienie, nieważność, uchylenie lub zmiana decyzji",
      articles: kpaLaw.text`${kpaLaw.articleRange("145", "163", { start: "art. 145", end: "163" })} KPA`,
      outcome:
        "Ви не використовуєте tryb nadzwyczajny як запізніле odwołanie, а підбираєте його до конкретної вади.",
      layers: {
        beginner: {
          focus:
            "Після ostatecznej decyzji існують виняткові режими, але кожен має закриті або спеціальні підстави.",
          law: kpaLaw.text`Wznowienie з ${kpaLaw.article("145", "art. 145")} стосується визначених дефектів провадження; nieważność з ${kpaLaw.article("156", "art. 156")} — найтяжчих вад самої decyzji.`,
          practice:
            "Спочатку назвіть дефект одним реченням, потім шукайте режим. Не починайте з бажання «відкрити справу ще раз».",
          pitfall:
            "Незгода з оцінкою доказів сама по собі не стає rażącym naruszeniem prawa.",
        },
        practical: {
          focus: kpaLaw.text`Для wznowienia перевірте конкретний пункт ${kpaLaw.article("145", "art. 145")}, коли сторона дізналась про підставу, місячний строк ${kpaLaw.article("148", "art. 148")} і właściwy organ.`,
          law: kpaLaw.text`Нові докази за ${kpaLaw.article("145", "art. 145 § 1")} pkt 5 мають існувати в день decyzji та бути тоді невідомими organowi; це не просто документ, створений пізніше.`,
          practice:
            "Додайте до заяви таблицю: підстава → факт → дата знання → доказ → вплив на рішення.",
          pitfall: kpaLaw.text`Не змішуйте ${kpaLaw.article("154", "art. 154")}/155, які мають власні умови зміни decyzji ostatecznej, з контролем її первісної законності.`,
        },
        advanced: {
          focus:
            "Строки, незворотні наслідки та давність можуть обмежувати результат навіть за наявності вади.",
          law: kpaLaw.text`${kpaLaw.article("156", "Art. 156")} містить перелік підстав nieważności, а ${kpaLaw.article("156", "§ 2")} обмежує її встановлення після 10 років або при незворотних правових наслідках; ${kpaLaw.article("158", "art. 158 § 3")} містить 30-річну межу для wszczęcia.`,
          practice:
            "Перед вибором режиму перевірте, чи існує спеціальний механізм у ustawie o cudzoziemcach і який результат реально можливий сьогодні.",
          pitfall:
            "Tryb nadzwyczajny не повинен обходити пропущений строк odwołania, якщо заявлена вада не відповідає його законним підставам.",
        },
      },
      method: [
        "Назвіть точну ваду",
        "Зіставте з законною підставою",
        "Перевірте строк і organ",
        "Визначте можливий, а не бажаний результат",
      ],
      checklist: [
        "Є конкретний пункт підстави",
        "Строк підтверджено",
        "Режим не підміняє odwołania",
      ],
      questions: [
        {
          prompt: kpaLaw.text`Документ виник після ostatecznej decyzji. Чи це автоматично «новий доказ» для ${kpaLaw.article("145", "art. 145 § 1")} pkt 5?`,
          answer:
            "Ні. Ця підстава вимагає істотного факту або доказу, який існував у день рішення і був невідомий organowi.",
        },
      ],
    },
    {
      id: "court",
      order: 15,
      title: "Наступний рівень: WSA",
      polish: "Skarga do wojewódzkiego sądu administracyjnego",
      articles: kpaLaw.text`${ppsaLaw.article("3", "art. 3")}, ${ppsaLaw.articleRange("52", "54", { start: "52", end: "54" })} p.p.s.a.`,
      outcome:
        "Ви розумієте, коли справа переходить з адміністративної інстанції до контролю судом.",
      layers: {
        beginner: {
          focus:
            "WSA контролює законність діяльності адміністрації. Це не третя адміністративна інстанція, яка просто веде справу замість organu.",
          law: "P.p.s.a. визначає предмет судового контролю; за загальним правилом перед skargą треба вичерпати доступні środki zaskarżenia.",
          practice:
            "Після decyzji другої інстанції окремо відкрийте p.p.s.a. і pouczenie; не рахуйте судовий строк за звичкою з KPA.",
          pitfall:
            "Odwołanie і skarga do WSA — різні засоби, різні адресати та різні ролі.",
        },
        practical: {
          focus:
            "За загальним правилом skargę на decyzję вносять протягом 30 днів від doręczenia розstrzygnięcia через organ, дії якого оскаржуються.",
          law: kpaLaw.text`Цей маршрут випливає з ${ppsaLaw.article("53", "art. 53 § 1")} і ${ppsaLaw.article("54", "art. 54 § 1")} p.p.s.a.; допустимість треба перевірити для конкретного акта.`,
          practice:
            "Зберіть: обидві decyzje, odwołanie, докази doręczeń, повний індекс актів і список процесуальних порушень із впливом.",
          pitfall:
            "Подання skargi не завжди автоматично зупиняє виконання; питання wstrzymania має окремі правила.",
        },
        advanced: {
          focus:
            "Skarga на decyzję, skarga na bezczynność/przewlekłość і sprzeciw від decyzji kasacyjnej — різні судові доріжки.",
          law: kpaLaw.text`${ppsaLaw.article("3", "Art. 3")} p.p.s.a. окреслює форми контролю; ${ppsaLaw.articleRange("52", "54", { start: "art. 52", end: "54" })} — передумови, строки та маршрут. Спеціальні правила можуть змінювати модель.`,
          practice:
            "Сформулюйте, яку норму materialną або procesową порушено, як саме і чому це могло вплинути на wynik sprawy.",
          pitfall:
            "Судова скарга не повинна бути копією odwołania без адаптації до контролю законності остаточного акта.",
        },
      },
      method: [
        "Встановіть предмет skargi",
        "Перевірте вичерпання засобів",
        "Порахуйте судовий строк",
        "Подайте через належний organ і сформулюйте порушення",
      ],
      checklist: [
        "Адміністративний шлях перевірено",
        "Строк WSA окремо пораховано",
        "Є доказ doręczenia",
      ],
      questions: [
        {
          prompt:
            "Чи WSA є просто третьою інстанцією після organu II instancji?",
          answer:
            "Ні. WSA здійснює судовий контроль законності у межах p.p.s.a.; його роль і можливі розstrzygnięcia відрізняються від адміністративного odwołania.",
        },
      ],
    },
  ],
  "kpaGuideModules"
) satisfies KpaGuideModule[]

export const kpaGuideLessons = defineLegalTextContent(
  {
    system: {
      paragraphs: [
        "KPA не відповідає на питання, чи іноземець виконує матеріальні умови конкретного дозволу. Кодекс організовує шлях до відповіді: визначає процесуальні ролі, спосіб подання, участь сторони, збір доказів, форму завершення та засоби захисту. Тому в одній справі одночасно працюють щонайменше два шари: ustawa o cudzoziemcach описує право на статус, а KPA — стандарт роботи organu над індивідуальною справою.",
        "Починайте не з випадкової статті KPA, а з предмета справи. Далі знайдіть lex specialis і відмітьте, що він регулює сам: właściwość, спеціальний строк, особисту явку, перелік умов або особливий наслідок. Лише після цього заповнюйте прогалини KPA. Така послідовність захищає від помилки, коли правильне загальне правило застосовують там, де спеціальний закон встановив інше.",
      ],
      articles: [
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("1", "2", { start: "art. 1", end: "2" })}`,
          role: "Окреслюють види справ і процедур, які кодекс регулює; це вхідна перевірка, чи ми взагалі перебуваємо в полі KPA.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("3", "4", { start: "art. 3", end: "4" })}`,
          role: "Показують виключення та межі застосування. Вчать не вважати KPA універсальним для будь-якого контакту з адміністрацією.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.article("5", "art. 5")}`,
          role: "Містить дефініції для читання кодексу. Перед складним висновком перевірте, чи термін має спеціальне кодексне значення.",
        },
      ],
      terms: [
        {
          term: "lex specialis",
          meaning:
            "Спеціальний закон, який для конкретної справи може доповнювати або змінювати загальну модель KPA.",
        },
        {
          term: "sprawa indywidualna",
          meaning:
            "Справа про права чи обов’язки конкретно визначеної особи, а не абстрактне роз’яснення права.",
        },
        {
          term: "decyzja administracyjna",
          meaning:
            "Владний акт, яким organ у передбаченій законом формі вирішує індивідуальну справу.",
        },
      ],
      caseExample: {
        title: "Wniosek o pobyt czasowy i pracę",
        facts:
          "Заявник подав wniosek і хоче знати, які документи підтверджують умови та як organ має реагувати на їх нестачу.",
        analysis:
          "Умови дозволу шукаємо в ustawie o cudzoziemcach. У KPA перевіряємо podanie, wezwanie, dowody, czynny udział, decyzję та odwołanie; окремо відмічаємо спеціальні відступи.",
        lesson:
          "Одна справа потребує паралельного читання двох законів, а не вибору лише одного з них.",
      },
      findInText: [
        kpaLaw.text`Повний перелік процедур в ${kpaLaw.article("1", "art. 1")}`,
        kpaLaw.text`Виключення з ${kpaLaw.article("3", "art. 3")}`,
        kpaLaw.text`Визначення organu administracji publicznej в ${kpaLaw.article("5", "art. 5")}`,
      ],
    },
    anatomy: {
      paragraphs: [
        "Стаття — це контейнер тексту, але правова норма може складатися з кількох статей. В одному місці закон називає умову, в іншому — виняток, у третьому — строк або наслідок. Тому завдання читача не переказати речення, а відтворити повну конструкцію: адресат, ситуація, обов’язкова або дозволена дія, умови, винятки й результат.",
        "Читайте складне речення шарами. Спочатку знайдіть дієслово, що створює obowiązek, uprawnienie або zakaz. Потім обведіть сполучники: jeżeli, chyba że, o ile, z zastrzeżeniem. Відсилання відкривайте одразу, а не після завершення аналізу. Наприкінці перепишіть норму простою формулою JEŻELI → TO → WYJĄTEK → TERMIN → SKUTEK і підставте факти справи окремим кроком.",
      ],
      articles: [
        {
          reference: "art. / § / pkt / lit.",
          role: "Це адреса фрагмента. Точне посилання дозволяє іншій людині перевірити саме ту умову або виняток, на якому стоїть висновок.",
        },
        {
          reference: "odesłanie ustawowe",
          role: "Фрази на кшталт «stosuje się» або «stosuje się odpowiednio» підключають інший блок правил і можуть змінювати прочитання основної статті.",
        },
      ],
      terms: [
        {
          term: "hipoteza",
          meaning:
            "Опис ситуації, за якої норма починає діяти: хто, коли і за яких фактів.",
        },
        {
          term: "dyspozycja",
          meaning: "Те, що адресат повинен, може або не може зробити.",
        },
        {
          term: "przesłanka",
          meaning:
            "Окрема умова правового результату; кожну przesłankę треба зіставити з фактом і доказом.",
        },
      ],
      caseExample: {
        title: "Фраза «w terminie 14 dni od dnia doręczenia»",
        facts:
          "Wezwanie датоване 2 липня, вручено pełnomocnikowi 8 липня, а чотирнадцятий день припадає на суботу.",
        analysis: kpaLaw.text`Адресат і момент doręczenia перевіряємо за правилами вручення, спосіб обчислення — за ${kpaLaw.article("57", "art. 57")}. Дата на письмі не запускає строк, день вручення не входить, субота змінює кінець строку.`,
        lesson:
          "Навіть коротка фраза вимагає відкрити кілька норм і побудувати хронологію.",
      },
      findInText: [
        "Структуру Rozdziałów і Działów KPA",
        "Усі відсилання в обраній статті",
        "Кожне «chyba że» та «nie stosuje się» поруч із правилом",
      ],
    },
    principles: {
      paragraphs: [
        "Zasady ogólne — це обов’язковий стандарт усієї процедури. Вони пояснюють, як organ має користуватися конкретними повноваженнями: діяти на правовій основі, точно з’ясувати факти, інформувати, дозволити стороні участь, поводитися послідовно та вести справу без зайвої затримки. Принцип стає практичним, коли ви пов’язуєте його з конкретною дією або пропуском у матеріалах справи.",
        kpaLaw.text`У legalizacji принципи особливо корисні, коли рішення формально посилається на правильну норму, але organ не побачив поданого документа, не дав відповісти на новий доказ або вимагав інформацію без пояснення її ролі. Не пишіть лише «naruszono ${kpaLaw.article("7", "art. 7")} i 8». Покажіть: який факт не встановлено, який доказ пропущено, яку участь заблоковано і як це могло вплинути на wynik.`,
      ],
      articles: [
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("6", "9", { start: "art. 6", end: "9" })}`,
          role: "Встановлюють законність, обов’язок з’ясування справи, довіру, пропорційність, рівність та інформаційний обов’язок.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("10", "12", { start: "art. 10", end: "12" })}`,
          role: "Захищають активну участь сторони, зрозумілість мотивів та швидке, водночас уважне ведення справи.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("14", "16", { start: "art. 14", end: "16" })}`,
          role: "Регулюють письмове закріплення справи та базові властивості інстанційності й остаточності рішень.",
        },
      ],
      terms: [
        {
          term: "czynny udział",
          meaning:
            "Реальна можливість знати матеріал, подавати позицію і висловитися перед рішенням, а не лише формальна присутність у справі.",
        },
        {
          term: "zasada zaufania",
          meaning:
            "Вимога передбачуваної, безсторонньої й пропорційної поведінки органу.",
        },
        {
          term: "praworządność",
          meaning:
            "Organ діє в межах і на підставі права та сам контролює законність своїх дій.",
        },
      ],
      caseExample: {
        title: "Новий негативний доказ перед decyzją",
        facts:
          "Після відповіді заявника organ отримав інформацію від іншої установи й одразу видав відмову, не відкривши стороні можливості висловитися.",
        analysis: kpaLaw.text`Перевіряємо ${kpaLaw.article("10", "art. 10")} разом із нормами про докази та uzasadnienie. Важливо показати, яку відповідь або контрдоказ сторона могла подати і чому це мало значення.`,
        lesson:
          "Порушення принципу доводиться через втрачену процесуальну можливість та її вплив на рішення.",
      },
      findInText: [
        kpaLaw.text`Обов’язки organu в ${kpaLaw.article("7", "art. 7")} і 9`,
        kpaLaw.text`Виняток із czynnego udziału в ${kpaLaw.article("10", "art. 10 § 2–3")}`,
        kpaLaw.text`Різницю між ostatecznością і prawomocnością в ${kpaLaw.article("16", "art. 16")}`,
      ],
    },
    authority: {
      paragraphs: [
        "Właściwość відповідає не на одне, а на три питання: який тип organu вирішує цей предмет, який територіальний зв’язок обирає конкретний organ і хто контролює рішення в наступній інстанції. Компетенція не виникає з того, що urząd уже прийняв документи або веде листування; вона має випливати з закону та фактів.",
        "У справах cudzoziemców місце проживання, місце роботи, адреса korespondencyjna і фактичний pobyt можуть не збігатися. Тому запишіть норму właściwości зі спеціального закону, конкретний факт-прив’язку і документ, який його доводить. Якщо podanie потрапило не туди, аналізуйте передачу, дату першого внесення та повідомлення сторони, а не подавайте все заново без потреби.",
      ],
      articles: [
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("19", "21", { start: "art. 19", end: "21" })}`,
          role: "Зобов’язують organ контролювати rzeczową і miejscową właściwość та дають загальні способи визначення територіальної компетенції.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("22", "23", { start: "art. 22", end: "23" })}`,
          role: "Регулюють спори про компетенцію та вузький обсяг невідкладних дій до їх вирішення.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("65", "66", { start: "art. 65", end: "66" })}`,
          role: "Пояснюють поводження з podaniem, адресованим невластивому organowi, або з вимогами різної компетенції.",
        },
      ],
      terms: [
        {
          term: "właściwość rzeczowa",
          meaning: "Компетенція за предметом справи.",
        },
        {
          term: "właściwość miejscowa",
          meaning:
            "Компетенція за територіальним зв’язком, визначеним законом.",
        },
        {
          term: "organ wyższego stopnia",
          meaning:
            "Орган, якому закон доручає інстанційний контроль або інші визначені дії.",
        },
      ],
      caseExample: {
        title: "Переїзд між воєводствами",
        facts:
          "Після подання wniosku іноземець фактично переїхав і повідомив нову адресу, але робота залишилася в попередньому воєводстві.",
        analysis:
          "Не робимо висновку з одного факту. Перевіряємо спеціальну норму właściwości, значення переїзду для вже розпочатої справи, докази нового місця та процес передачі.",
        lesson:
          "Зміна адреси й зміна właściwości — пов’язані, але не тотожні події.",
      },
      findInText: [
        kpaLaw.text`Обов’язок контролю з ${kpaLaw.article("19", "art. 19")}`,
        kpaLaw.text`Загальні прив’язки ${kpaLaw.article("21", "art. 21")}`,
        kpaLaw.text`Наслідок своєчасного подання до неправильного organu в ${kpaLaw.article("65", "art. 65")}`,
      ],
    },
    party: {
      paragraphs: [
        "Статус strony відкриває набір процесуальних прав: доступ до akt, участь у доказах, отримання рішень та їх оскарження. Джерелом статусу є interes prawny або obowiązek, а не лише цікавість, родинний зв’язок чи економічна зацікавленість. У кожній справі спитайте, яка конкретна норма права пов’язує результат саме з цією особою.",
        "Pełnomocnik може виконувати більшість процесуальних дій, але не замінює сторону там, де характер дії або спеціальний закон вимагає особистої участі. Для щоденної роботи важливі форма, обсяг і дата повноваження, opłata skarbowa та правила doręczeń. Помилка в адресаті письма може змінити обчислення строку й право на захист.",
      ],
      articles: [
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("28", "30", { start: "art. 28", end: "30" })}`,
          role: "Визначають, хто може бути стороною та як оцінюється її здатність бути учасником і діяти.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("32", "34", { start: "art. 32", end: "34" })}`,
          role: "Регулюють представництво, форму повноваження та забезпечення представника в необхідних випадках.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.article("40", "art. 40")}`,
          role: "Вказує, кому organ вручає письма, коли діє przedstawiciel або pełnomocnik.",
        },
      ],
      terms: [
        {
          term: "interes prawny",
          meaning:
            "Особистий, конкретний і актуальний зв’язок із нормою права, від якої залежить становище особи.",
        },
        {
          term: "pełnomocnik",
          meaning:
            "Фізична особа, уповноважена діяти від імені strony у визначеному обсязі.",
        },
        {
          term: "przedstawiciel ustawowy",
          meaning:
            "Особа, право якої представляти випливає із закону або відповідного правового акта, а не лише з pełnomocnictwa.",
        },
      ],
      caseExample: {
        title: "Wezwanie вручено лише заявнику",
        facts:
          "У справі є чинне pełnomocnictwo, але wezwanie надіслано на приватну адресу іноземця, а pełnomocnik довідався після строку.",
        analysis: kpaLaw.text`Перевіряємо акти, обсяг повноваження, ${kpaLaw.article("40", "art. 40")}, фактичне doręczenie і можливий вплив на строк. Окремо визначаємо, чи wezwanie вимагало особистої дії.`,
        lesson:
          "Спочатку встановіть правильного адресата, а вже потім рахуйте строк і оцінюйте пропуск.",
      },
      findInText: [
        kpaLaw.text`Дві частини визначення strony в ${kpaLaw.article("28", "art. 28")}`,
        kpaLaw.text`Виняток особистої дії в ${kpaLaw.article("32", "art. 32")}`,
        kpaLaw.text`Правила для кількох pełnomocników у ${kpaLaw.article("40", "art. 40")}`,
      ],
    },
    initiation: {
      paragraphs: [
        "Wszczęcie створює процесуальну рамку конкретної справи. Podanie має дозволяти зрозуміти, хто звертається, чого вимагає та як із ним контактувати, але спеціальний закон може додати форму, додатки й особисті дії. Не кожна відсутність документа означає, що справа формально не може рухатися.",
        kpaLaw.text`Brak formalny стосується вимоги до самого podania; brak materialny або dowodowy — того, чи доведено умову бажаного результату. Для ${kpaLaw.article("64", "art. 64")} важливі точне формулювання недоліку, строк і pouczenie про наслідок. Для доказової нестачі потрібна логіка postępowania wyjaśniającego. Перед відповіддю на wezwanie класифікуйте кожен пункт окремо.`,
      ],
      articles: [
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("61", "63", { start: "art. 61", end: "63" })}`,
          role: "Пояснюють способи wszczęcia, загальну дату початку на вимогу та поняття й мінімальну форму podania.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.article("64", "art. 64")}`,
          role: "Розрізняє відсутність адреси та інші формальні недоліки і пов’язує їх з різними процесуальними діями.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("65", "66", { start: "art. 65", end: "66" })}`,
          role: "Регулюють неправильного адресата й ситуацію, коли одне podanie містить справи різної компетенції.",
        },
      ],
      terms: [
        {
          term: "wszczęcie",
          meaning:
            "Юридичний початок конкретного провадження, з яким закон пов’язує подальші обов’язки та строки.",
        },
        {
          term: "brak formalny",
          meaning:
            "Невиконана вимога до допустимої форми або мінімального змісту podania.",
        },
        {
          term: "pozostawienie bez rozpoznania",
          meaning:
            "Процесуальний наслідок, за якого organ не переходить до розгляду вимоги по суті; його підстава має бути законною.",
        },
      ],
      caseExample: {
        title: "Відсутня umowa o pracę",
        facts:
          "Organ назвав відсутність актуальної umowy «brakiem formalnym» і пригрозив pozostawieniem wniosku bez rozpoznania.",
        analysis: kpaLaw.text`Зіставляємо вимогу до форми wniosku в lex specialis з матеріальною умовою та ${kpaLaw.article("64", "art. 64")}. Визначаємо, чи це справді дефект podania, чи доказова проблема, яку слід оцінювати по суті.`,
        lesson:
          "Назва в wezwanie не вирішує класифікацію; вирішує правова природа вимоги.",
      },
      findInText: [
        kpaLaw.text`Дату wszczęcia в ${kpaLaw.article("61", "art. 61 § 3")}`,
        kpaLaw.text`Способи внесення і мінімум podania в ${kpaLaw.article("63", "art. 63")}`,
        kpaLaw.text`Строк і pouczenie з ${kpaLaw.article("64", "art. 64 § 2")}`,
      ],
    },
    "files-evidence": {
      paragraphs: [
        "Postępowanie dowodowe перетворює твердження сторони на встановлені факти. Відкритий каталог доказів означає, що значення має не назва документа, а його здатність підтвердити конкретну обставину. Organ збирає й оцінює матеріал, але сторона повинна активно показувати зв’язок між przesłanką, фактом і доказом.",
        "Akta sprawy — це пам’ять провадження. У них можуть бути документи сторони, відповіді інших установ, службові нотатки, підтвердження doręczeń і невідомі вам суперечності. Перед завершенням справи перевірте акти, а не лише власну папку. Особливо важливо зіставити інформацію про невиконані умови з майбутнім uzasadnieniem негативної decyzji.",
      ],
      articles: [
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("73", "74", { start: "art. 73", end: "74" })}`,
          role: "Дають стороні доступ до akt і визначають межі відмови; доступ дозволяє реально контролювати матеріал справи.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("75", "81", { start: "art. 75", end: "81" })}`,
          role: "Створюють систему допустимості, збирання, заявлення й оцінки доказів та участі сторони.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("79a", "81a", { start: "art. 79a", end: "81a" })}`,
          role: "Додають інструменти інформування про недоведені залежні умови та спеціальне правило сумнівів щодо фактів із винятками.",
        },
      ],
      terms: [
        {
          term: "wniosek dowodowy",
          meaning:
            "Прохання провести або долучити конкретний доказ із поясненням факту, який він має встановити.",
        },
        {
          term: "całokształt materiału",
          meaning:
            "Усі релевантні докази та їх взаємні зв’язки, а не вибраний organem один документ.",
        },
        {
          term: "swobodna ocena dowodów",
          meaning:
            "Оцінка за логікою, досвідом і правом, яка не є довільною та повинна бути пояснена.",
        },
      ],
      caseExample: {
        title: "ZUS показує іншу дату праці",
        facts:
          "Umowa вказує початок роботи 1 березня, а дані ZUS — пізнішу дату. Organ бачить суперечність, заявник — ні.",
        analysis:
          "Отримуємо доступ до akt, встановлюємо джерело даних, пояснюємо хронологію і подаємо докази. Вимагаємо оцінки всього матеріалу, а не автоматичного вибору одного запису.",
        lesson:
          "Доступ до akt перетворює припущення про позицію organu на конкретне доказове завдання.",
      },
      findInText: [
        kpaLaw.text`Обсяг права доступу в ${kpaLaw.article("73", "art. 73")}`,
        kpaLaw.text`Відкриту формулу доказу в ${kpaLaw.article("75", "art. 75")}`,
        kpaLaw.text`Умови інформації ${kpaLaw.article("79a", "art. 79a")}`,
      ],
    },
    "time-service": {
      paragraphs: [
        "У процедурі працюють різні строки: organ має строк заłatwienia sprawy, а сторона — строк на відповідь, odwołanie чи іншу дію. Обидва можуть залежати від подій, які не видно з дати на документі. Doręczenie — окремий юридичний інститут, тому спочатку встановлюють його адресата, спосіб і дату, а лише потім рахують.",
        kpaLaw.text`Строк у днях рахуйте механічно за ${kpaLaw.article("57", "art. 57")}: не включайте день події, перевірте останній день і спосіб своєчасного внесення. Якщо строк уже пропущено, не називайте прохання «продовженням». Przywrócenie terminu потребує brak winy, короткого строку реакції після припинення перешкоди та одночасного виконання пропущеної дії.`,
      ],
      articles: [
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("35", "38", { start: "art. 35", end: "38" })}`,
          role: "Регулюють швидкість organu, строки, повідомлення про затримку та реакцію на bezczynność/przewlekłość.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("39", "49b", { start: "art. 39", end: "49b" })}`,
          role: "Створюють систему паперових та електронних doręczeń і юридичних наслідків різних способів.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("57", "60", { start: "art. 57", end: "60" })}`,
          role: "Пояснюють обчислення, збереження і відновлення процесуальних строків.",
        },
      ],
      terms: [
        {
          term: "doręczenie",
          meaning:
            "Врегульоване законом доведення письма до адресата, з яким пов’язуються процесуальні наслідки.",
        },
        {
          term: "uchybienie terminu",
          meaning: "Виконання дії після спливу процесуального строку.",
        },
        {
          term: "przywrócenie terminu",
          meaning: kpaLaw.text`Виняткове відновлення можливості дії за сукупності умов ${kpaLaw.article("58", "art. 58")}, а не звичайне продовження.`,
        },
      ],
      caseExample: {
        title: "Awizo під час госпіталізації",
        facts:
          "Письмо вважалося врученим після awizo, а заявник перебував у лікарні та пропустив строк odwołania.",
        analysis:
          "Перевіряємо правильність адреси й процедури doręczenia, точні дати перешкоди та її припинення. Разом із prośbą o przywrócenie подаємо odwołanie і докази brak winy.",
        lesson: kpaLaw.text`Хронологія та одночасне виконання пропущеної дії критичні для ${kpaLaw.article("58", "art. 58")}.`,
      },
      findInText: [
        kpaLaw.text`Періоди, що не входять у строк organu в ${kpaLaw.article("35", "art. 35 § 5")}`,
        kpaLaw.text`Обов’язок зміни адреси в ${kpaLaw.article("41", "art. 41")}`,
        kpaLaw.text`Усі умови ${kpaLaw.article("58", "art. 58")}`,
      ],
    },
    summons: {
      paragraphs: [
        "Wezwanie організовує конкретну процесуальну дію: явку, пояснення, показання або подання матеріалу. Воно повинно дозволяти адресатові зрозуміти, хто звертається, у якій справі, що саме треба зробити, коли, яким способом і з яким наслідком. Але правова підстава самого wezwania не завжди є підставою матеріальної вимоги документа.",
        "Розбирайте wezwanie як таблицю, а не як суцільний лист. Для кожного пункту встановіть тип вимоги, факт, який organ хоче довести, норму цієї умови, доступний документ і ризик невиконання. Якщо документа немає, до строку поясніть причину, запропонуйте альтернативний доказ і сформулюйте чітке клопотання; мовчання залишає organу лише неповний матеріал.",
      ],
      articles: [
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("50", "53", { start: "art. 50", end: "53" })}`,
          role: "Визначають мету wezwania, територіальні обмеження особистої явки та способи участі.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.article("54", "art. 54")}`,
          role: "Містить карту обов’язкових елементів wezwania; це головний checklist для першого читання.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("55", "56", { start: "art. 55", end: "56" })}`,
          role: "Регулюють невідкладні wezwania та витрати особи, яка виконала виклик.",
        },
      ],
      terms: [
        {
          term: "rygor",
          meaning:
            "Заздалегідь названий процесуальний наслідок невиконання вимоги; він має спиратися на закон.",
        },
        {
          term: "osobiste stawiennictwo",
          meaning:
            "Обов’язок особисто з’явитися, який не слід припускати, якщо мети можна досягти інакше або закон не вимагає особистої дії.",
        },
        {
          term: "wyjaśnienia",
          meaning:
            "Позиція або інформація учасника; її роль відрізняється від документа чи zeznania świadka.",
        },
      ],
      caseExample: {
        title: "Вимога 18 різних документів",
        facts:
          "Wezwanie містить довгий перелік без пояснення, які умови підтверджують окремі позиції.",
        analysis: kpaLaw.text`Нумеруємо вимоги, знаходимо їх матеріальну мету, перевіряємо ${kpaLaw.article("54", "art. 54")} і пропорційність. Відповідаємо індексом; для надмірно широких або неможливих пунктів даємо мотивовану позицію й альтернативу.`,
        lesson:
          "Комплектна відповідь — це карта вимог і доказів, а не просто великий PDF.",
      },
      findInText: [
        kpaLaw.text`Критерій необхідності в ${kpaLaw.article("50", "art. 50")}`,
        kpaLaw.text`Можливість письмової/електронної дії в ${kpaLaw.article("50", "art. 50 § 1")}`,
        kpaLaw.text`Повний перелік ${kpaLaw.article("54", "art. 54")}`,
      ],
    },
    silence: {
      paragraphs: [
        "Milczące załatwienie не є покаранням organu за повільність. Це спеціально сконструйований позитивний або завершальний наслідок, який працює лише тоді, коли інший закон прямо підключає цей режим. Без такої норми тривала відсутність decyzji залишається проблемою строку, bezczynności або przewlekłości.",
        "Навіть коли спеціальний закон передбачає milczenie, треба встановити вид механізму, початок строку, kompletność sprawy та дії organu в цей період. KPA пояснює наслідок і документування результату, але не дозволяє переносити milczącą zgodę з однієї процедури на іншу за аналогією.",
      ],
      articles: [
        {
          reference: kpaLaw.text`${kpaLaw.article("122a", "art. 122a")}`,
          role: "Встановлює ключовий шлюз: milczące załatwienie застосовується лише за прямою нормою спеціального закону.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("122b", "122f", { start: "art. 122b", end: "122f" })}`,
          role: "Регулюють перебіг строку, повідомлення, наслідок і zaświadczenie про milczące załatwienie.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.article("122g", "art. 122g")}`,
          role: "Підключає відповідно окремі механізми контролю до справ, завершених milcząco.",
        },
      ],
      terms: [
        {
          term: "milcząca zgoda",
          meaning:
            "Варіант, у якому відсутність sprzeciwu у встановлений строк створює передбачений законом позитивний ефект.",
        },
        {
          term: "milczące zakończenie",
          meaning:
            "Варіант завершення справи після спливу строку без klasycznej decyzji.",
        },
        {
          term: "bezczynność",
          meaning:
            "Незавершення справи у належний строк; сама по собі не створює milczącej zgody.",
        },
      ],
      caseExample: {
        title: "Шість місяців без decyzji pobytowej",
        facts:
          "Заявник вважає, що тривале мовчання означає автоматичне надання дозволу.",
        analysis: kpaLaw.text`Шукаємо пряму норму lex specialis про milczące załatwienie саме цього виду справи. Якщо її немає, переходимо до ${kpaLaw.articleRange("35", "37", { start: "art. 35", end: "37" })} KPA і спеціальних строків ustawy o cudzoziemcach.`,
        lesson:
          "Спочатку правова підстава milczenia, ніколи — припущення з тривалості очікування.",
      },
      findInText: [
        kpaLaw.text`Фразу про пряму норму в ${kpaLaw.article("122a", "art. 122a")}`,
        "Різницю двох форм milczenia",
        kpaLaw.text`Правило zaświadczenia в ${kpaLaw.article("122f", "art. 122f")}`,
      ],
    },
    decisions: {
      paragraphs: [
        "Decyzja — це юридичний результат справи, тому її читають від sentencji. Саме sentencja говорить, що надано, у чому відмовлено, що припинено і кого це стосується. Uzasadnienie має показати дорогу до результату: встановлені факти, докази, оцінку суперечностей, застосовані норми та subsumpcję.",
        "Postanowienie зазвичай вирішує процесуальне питання в ході справи, але назва документа не звільняє від перевірки його правової природи. Для обох актів окремо перевіряйте doręczenie, pouczenie, доступний засіб, строк і wykonalność. Не змішуйте ostateczność, prawomocność та можливість негайного виконання.",
      ],
      articles: [
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("104", "107", { start: "art. 104", end: "107" })}`,
          role: "Визначають роль decyzji, спосіб її формування й обов’язкові елементи, включно з фактичним і правовим uzasadnieniem.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("109", "113", { start: "art. 109", end: "113" })}`,
          role: "Регулюють doręczenie, зв’язаність organu рішенням, uzupełnienie, sprostowanie та пояснення сумнівів.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("123", "126", { start: "art. 123", end: "126" })}`,
          role: "Створюють базову модель postanowienia і вказують, які правила decyzji застосовуються відповідно.",
        },
      ],
      terms: [
        {
          term: "sentencja",
          meaning:
            "Владна частина акта, що безпосередньо встановлює юридичний результат.",
        },
        {
          term: "uzasadnienie faktyczne",
          meaning:
            "Пояснення встановлених фактів, доказів і причин відмови іншим доказам у силі чи вірогідності.",
        },
        {
          term: "pouczenie",
          meaning:
            "Інформація про доступний засіб, маршрут і строк; її треба перевірити за законом.",
        },
      ],
      caseExample: {
        title: "Відмова через «нестабільну працю»",
        facts:
          "Sentencja відмовляє у дозволі, а uzasadnienie згадує лише одну коротку umowę, ігноруючи продовження та виплати.",
        analysis: kpaLaw.text`Зіставляємо кожну матеріальну умову з висновком organu, актами та ${kpaLaw.article("107", "art. 107")}. Фіксуємо пропущені докази й показуємо, як вони змінюють оцінку факту.`,
        lesson:
          "Odwołanie будується на розриві між sentencją, повним матеріалом і поясненою subsumpcją.",
      },
      findInText: [
        kpaLaw.text`Види завершення в ${kpaLaw.article("104", "art. 104")}`,
        kpaLaw.text`Усі елементи decyzji в ${kpaLaw.article("107", "art. 107")}`,
        kpaLaw.text`Строк uzupełnienia decyzji в ${kpaLaw.article("111", "art. 111")}`,
      ],
    },
    appeal: {
      paragraphs: [
        "Odwołanie запускає повторний інстанційний контроль decyzji, а не лише перевірку оформлення. Спочатку захистіть допустимість: встановіть тип акта, дату doręczenia, правильний строк і маршрут через organ першої інстанції. Потім визначте zakres zaskarżenia і бажаний результат.",
        "Аргументи групуйте за помилками: неправильне право, неповні факти, хибна оцінка доказів, порушення процедури. Для кожної помилки покажіть вплив і сформулюйте wniosek. Zażalenie має іншу логіку: воно доступне на postanowienie лише за прямим дозволом закону, а решту процесуальних заперечень інколи треба підняти в odwołaniu від decyzji.",
      ],
      articles: [
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("127", "130", { start: "art. 127", end: "130" })}`,
          role: "Визначають право, мінімальний зміст, маршрут, строк та вплив odwołania на виконання decyzji.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("132", "140", { start: "art. 132", end: "140" })}`,
          role: "Описують реакцію першої інстанції, передачу справи, дослідження доказів та можливі рішення другої інстанції.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("141", "144", { start: "art. 141", end: "144" })}`,
          role: "Регулюють допустимість, строк і наслідки zażalenia та відповідне застосування правил odwołania.",
        },
      ],
      terms: [
        {
          term: "zarzut",
          meaning:
            "Конкретно названа помилка рішення або процедури з поясненням її змісту.",
        },
        {
          term: "wniosek odwoławczy",
          meaning:
            "Чітке прохання про спосіб зміни, uchylenia або іншого вирішення акта.",
        },
        {
          term: "decyzja kasacyjna",
          meaning: kpaLaw.text`Рішення другої інстанції, яке в умовах ${kpaLaw.article("138", "art. 138 § 2")} скасовує акт і повертає справу на повторний розгляд.`,
        },
      ],
      caseExample: {
        title: "Odwołanie в останній день",
        facts:
          "Негативну decyzję вручено pełnomocnikowi, а заявник планує надіслати odwołanie прямо до organu другої інстанції.",
        analysis: kpaLaw.text`Рахуємо 14 днів від правильного doręczenia за ${kpaLaw.article("57", "art. 57")} і перевіряємо ${kpaLaw.article("129", "art. 129")}: адресуємо organowi odwoławczemu, але вносимо через organ, який видав decyzję.`,
        lesson: "Зміст не допоможе, якщо не захищені строк і маршрут подання.",
      },
      findInText: [
        kpaLaw.text`Мінімум odwołania в ${kpaLaw.article("128", "art. 128")}`,
        kpaLaw.text`Маршрут і строк ${kpaLaw.article("129", "art. 129")}`,
        kpaLaw.text`Каталог rozstrzygnięć ${kpaLaw.article("138", "art. 138")}`,
      ],
    },
    delay: {
      paragraphs: [
        "Bezczynność означає, що справа не завершена в належний строк, а przewlekłość — що дії ведуться довше, ніж це потрібно. Для обох потрібна хронологія, а не лише число місяців. Треба встановити застосовний строк, періоди, які закон не враховує, wezwania, відповіді сторони й останню змістовну дію organu.",
        "Ponaglenie — формальний засіб, який має бути мотивованим і поданим правильним маршрутом. Воно не замінює виконання обов’язку сторони і не гарантує негайної decyzji, але створює механізм контролю затримки та важливий доказ для подальшої skargi na bezczynność або przewlekłość.",
      ],
      articles: [
        {
          reference: kpaLaw.text`${kpaLaw.article("35", "art. 35")}`,
          role: "Встановлює загальні строки й перелік періодів, які не входять до їх обчислення.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.article("36", "art. 36")}`,
          role: "Зобов’язує organ пояснити затримку, назвати новий строк і pouczyć про ponaglenie.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("37", "38", { start: "art. 37", end: "38" })}`,
          role: "Визначають поняття, маршрут, обґрунтування, спосіб розгляду ponaglenia та відповідальність.",
        },
      ],
      terms: [
        {
          term: "bezczynność",
          meaning:
            "Незавершення справи в законному або належно визначеному додатковому строку.",
        },
        {
          term: "przewlekłość",
          meaning:
            "Ведення справи довше, ніж об’єктивно потрібно для її завершення.",
        },
        {
          term: "ponaglenie",
          meaning:
            "Мотивований процесуальний засіб контролю bezczynności або przewlekłości.",
        },
      ],
      caseExample: {
        title: kpaLaw.text`Два роки й повторні повідомлення ${kpaLaw.article("36", "art. 36")}`,
        facts:
          "Organ кілька разів переносив строк однаковою загальною фразою, а всі żądane dokumenty подані давно.",
        analysis: kpaLaw.text`Будуємо timeline, перевіряємо спеціальний строк і ${kpaLaw.article("35", "art. 35 § 5")}, відділяємо реальні процесуальні дії від повторних повідомлень та мотивуємо przewlekłość/bezczynność.`,
        lesson: kpaLaw.text`Нове повідомлення ${kpaLaw.article("36", "art. 36")} не робить автоматично кожну подальшу затримку правомірною.`,
      },
      findInText: [
        kpaLaw.text`Строки ${kpaLaw.article("35", "art. 35 § 3")}`,
        kpaLaw.text`Зміст повідомлення ${kpaLaw.article("36", "art. 36")}`,
        kpaLaw.text`Визначення і маршрут ${kpaLaw.article("37", "art. 37")}`,
      ],
    },
    extraordinary: {
      paragraphs: [
        "Tryby nadzwyczajne захищають стабільність ostatecznych decyzji, одночасно дозволяючи реагувати на визначені тяжкі дефекти. Це не додаткова інстанція і не спосіб повторити пропущене odwołanie. Спочатку назвіть ваду, потім перевірте, чи вона точно входить до законної підстави конкретного режиму.",
        kpaLaw.text`Wznowienie переважно повертається до дефекту провадження або нововиявленого матеріалу, який уже існував у день decyzji. Nieważność стосується закритого каталогу найтяжчих вад акта. ${kpaLaw.articleRange("154", "155", { start: "Art. 154", end: "155" })} мають іншу функцію: допускають зміну визначених ostatecznych decyzji за окремих умов, а не визнають їх первісно незаконними.`,
      ],
      articles: [
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("145", "152", { start: "art. 145", end: "152" })}`,
          role: "Регулюють підстави, строки, właściwość, відкриття та результат wznowienia postępowania.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("154", "155", { start: "art. 154", end: "155" })}`,
          role: "Дозволяють зміну або uchylenie визначених ostatecznych decyzji залежно від набутого права, згоди та інтересів.",
        },
        {
          reference: kpaLaw.text`${kpaLaw.articleRange("156", "159", { start: "art. 156", end: "159" })}`,
          role: "Містять підстави й межі nieważności, właściwy organ, форму результату та можливість wstrzymania.",
        },
      ],
      terms: [
        {
          term: "wznowienie",
          meaning:
            "Повторне відкриття завершеної справи через одну з конкретних вад, перелічених законом.",
        },
        {
          term: "stwierdzenie nieważności",
          meaning:
            "Надзвичайний контроль ostatecznej decyzji через найтяжчі кваліфіковані дефекти.",
        },
        {
          term: "rażące naruszenie prawa",
          meaning:
            "Кваліфіковане, очевидне і серйозне порушення; не кожна правова помилка досягає цього рівня.",
        },
      ],
      caseExample: {
        title: "Сторона не знала про провадження",
        facts:
          "Decyzję ostateczną видано без реальної участі особи, яка була stroną, а про акт вона дізналась значно пізніше.",
        analysis: kpaLaw.text`Перевіряємо brak winy, ${kpaLaw.article("145", "art. 145 § 1")} pkt 4, дату знання про decyzję, місячний строк ${kpaLaw.article("148", "art. 148")} і właściwy organ. Доказуємо не лише невручення, а втрату участі.`,
        lesson:
          "Для wznowienia потрібні точна підстава та хронологія знання, а не загальне відчуття несправедливості.",
      },
      findInText: [
        kpaLaw.text`Закритий перелік ${kpaLaw.article("145", "art. 145")}`,
        kpaLaw.text`Строки ${kpaLaw.article("148", "art. 148")}`,
        kpaLaw.text`Підстави і часові межі ${kpaLaw.articleRange("156", "158", { start: "art. 156", end: "158" })}`,
      ],
    },
    court: {
      paragraphs: [
        "WSA не веде справу про pobyt замість wojewody і не є третьою адміністративною інстанцією. Суд контролює законність оstatecznego aktu або бездіяльності в межах p.p.s.a. Тому skarga повинна показувати порушення права та його вплив, а не лише повторювати прохання надати дозвіл.",
        "Перед skargą визначте її предмет: decyzja, bezczynność/przewlekłość чи інший акт. Перевірте вичерпання адміністративних засобів, окремий судовий строк і маршрут через organ. Зберіть повний пакет aktów, odwołanie, doręczenia та список норм. Питання wstrzymania виконання аналізуйте окремо — саме внесення skargi не завжди дає такий ефект.",
      ],
      articles: [
        {
          reference: kpaLaw.text`${ppsaLaw.article("3", "art. 3")} p.p.s.a.`,
          role: "Окреслює предмети судового контролю, включно з decyzjami та бездіяльністю у визначених законом випадках.",
        },
        {
          reference: kpaLaw.text`${ppsaLaw.article("52", "art. 52")} p.p.s.a.`,
          role: "Встановлює загальну передумову вичерпання доступних адміністративних засобів перед skargą.",
        },
        {
          reference: kpaLaw.text`${ppsaLaw.articleRange("53", "54", { start: "art. 53", end: "54" })} p.p.s.a.`,
          role: "Регулюють строки та внесення skargi за посередництвом organu, діяльність якого оскаржується.",
        },
      ],
      terms: [
        {
          term: "kontrola legalności",
          meaning:
            "Перевірка відповідності дій адміністрації матеріальному й процесуальному праву.",
        },
        {
          term: "wyczerpanie środków zaskarżenia",
          meaning:
            "Використання доступного адміністративного засобу, після якого відкривається судова дорога за правилами p.p.s.a.",
        },
        {
          term: "skarga",
          meaning:
            "Процесуальне звернення до суду з визначеним предметом, вимогами, строком і формою.",
        },
      ],
      caseExample: {
        title: "Decyzja II instancji підтримала відмову",
        facts:
          "Organ odwoławczy не відповів на ключовий zarzut щодо пропущеного доказу й utrzymał decyzję w mocy.",
        analysis:
          "Рахуємо судовий строк від doręczenia ostatecznej decyzji, подаємо skargę через organ і показуємо порушення норм доказування, uzasadnienia та інстанційного контролю.",
        lesson:
          "Skarga адаптує помилки справи до судового контролю законності; вона не є копією odwołania.",
      },
      findInText: [
        kpaLaw.text`Каталог контролю ${ppsaLaw.article("3", "art. 3")} p.p.s.a.`,
        kpaLaw.text`Передумови ${ppsaLaw.article("52", "art. 52 p.p.s.a.")}`,
        kpaLaw.text`30-денний строк і маршрут ${kpaLaw.articleRange("53", "54", { start: "art. 53", end: "54" })} для skargi na decyzję`,
      ],
    },
  },
  "kpaGuideLessons"
) satisfies Record<string, KpaGuideLesson>

export const foreignersCaseAlgorithm = [
  {
    title: "1. Заморозьте факти й дати",
    detail:
      "Хто заявник, громадянство, підстава перебування, дата подання, місце проживання, робота, зміни після подання, усі doręczenia.",
    output: "Timeline + реєстр вручень",
  },
  {
    title: "2. Назвіть предмет і lex specialis",
    detail:
      "Який дозвіл/статус проситься, яка фактична головна ціль, які позитивні й негативні умови встановлює ustawa o cudzoziemcach.",
    output: "Матриця матеріальних умов",
  },
  {
    title: "3. Перевірте процесуальну рамку",
    detail:
      "Właściwy organ, strony, pełnomocnik, спосіб wszczęcia, спеціальні відступи від KPA, редакція закону й przepisy przejściowe.",
    output: "Карта процедури",
  },
  {
    title: "4. Побудуйте доказову матрицю",
    detail:
      "До кожної przesłanki додайте факт, доказ, період, джерело, суперечність і те, чого бракує. Окремо відмітьте, що organ може отримати сам.",
    output: "Przesłanka → dowód → ryzyko",
  },
  {
    title: "5. Розберіть wezwanie",
    detail:
      "Класифікуйте кожен пункт: formalny, dowodowy, osobisty, informacyjny. Перевірте підставу, строк, спосіб і наслідок.",
    output: "Таблиця відповіді пункт у пункт",
  },
  {
    title: "6. Контролюйте акти і строки",
    detail: kpaLaw.text`Зберігайте UPO/awizo, просіть доступ до akt, звіряйте ${kpaLaw.article("10", "art. 10")} і 79a, ведіть календар organu та календар strony окремо.`,
    output: "Журнал процесуальних подій",
  },
  {
    title: "7. Прочитайте результат як норму",
    detail:
      "Sentencja → факти → докази → норма → subsumpcja → pouczenie. Для кожної помилки покажіть її вплив на wynik.",
    output: "Карта decyzji й план захисту",
  },
]

export const annotatedWezwanie = {
  sample:
    "Na podstawie art. 50 § 1 KPA wzywa się Stronę do przedłożenia, w terminie 14 dni od dnia doręczenia niniejszego pisma, dokumentów potwierdzających aktualne źródło stabilnego i regularnego dochodu, pod rygorem rozstrzygnięcia sprawy na podstawie zgromadzonego materiału dowodowego.",
  parts: [
    {
      label: "Podstawa",
      text: kpaLaw.text`${kpaLaw.article("50", "art. 50 § 1")} KPA`,
      question:
        "Чи ця норма пояснює право викликати, а матеріальна вимога має окрему підставу в lex specialis?",
    },
    {
      label: "Adresat",
      text: "Strona",
      question: kpaLaw.text`Чи wezwanie вручено стороні/pełnomocnikowi відповідно до ${kpaLaw.article("40", "art. 40")}?`,
    },
    {
      label: "Czynność",
      text: "przedłożenie dokumentów",
      question: "Який конкретний факт має довести кожен документ?",
    },
    {
      label: "Termin",
      text: "14 dni od dnia doręczenia",
      question: kpaLaw.text`Яка юридична дата doręczenia і коли спливає строк за ${kpaLaw.article("57", "art. 57")}?`,
    },
    {
      label: "Zakres",
      text: "aktualne źródło stabilnego i regularnego dochodu",
      question:
        "Який період, критерій і матеріальна норма стоять за словами «aktualne», «stabilne», «regularne»?",
    },
    {
      label: "Skutek",
      text: "rozstrzygnięcie na podstawie zgromadzonego materiału",
      question:
        "Це не те саме, що automatyczne pozostawienie bez rozpoznania. Якого доказу бракуватиме при оцінці по суті?",
    },
  ],
}

export const kpaGuideSources: KpaGuideSource[] = [
  {
    label: "Kodeks postępowania administracyjnego — ELI",
    url: "https://eli.gov.pl/eli/DU/2025/1691/ogl",
    note: "Офіційний tekst jednolity: Dz.U. 2025 poz. 1691; сторінка ELI позначає акт як obowiązujący.",
  },
  {
    label: "Офіційний PDF KPA",
    url: "https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf",
    note: "Текст статей, на яких побудовано модулі гайда.",
  },
  {
    label: "Prawo o postępowaniu przed sądami administracyjnymi — ELI",
    url: "https://eli.gov.pl/eli/DU/2026/143/ogl",
    note: "Tekst jednolity Dz.U. 2026 poz. 143; для орієнтації щодо WSA. Зміна Dz.U. 2026 poz. 846 набирає чинності 01.10.2026, тобто після дати стану цього гайда.",
  },
  {
    label: "Ponaglenie — Moduł Obsługi Spraw UdSC",
    url: "https://mos.cudzoziemcy.gov.pl/kategorie-informacji/procedury/ponaglenie/",
    note: "Офіційне практичне пояснення застосування ponaglenia у справах cudzoziemców; не замінює тексту KPA.",
  },
]

export const kpaGuideLegalState = "14.07.2026"
