import { legalLibraryRegistry } from "~/data/legal-corpus/registry.generated"
import { defineLegalLearningCurriculum } from "./types"

import {
  createLegalTextAuthor,
  defineLegalTextContent,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"

const kpaCorpusProvisions =
  legalLibraryRegistry.kpa.editions[legalLibraryRegistry.kpa.currentEditionId]
    .provisions

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

export const KPA_ELI_URL = "https://eli.gov.pl/eli/DU/2025/1691/ogl"
export const KPA_PDF_URL =
  "https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf"

export type KpaArticleStatus = "active" | "repealed"

export type KpaArticleEntry = {
  article: string
  shortTitle: string
  division: string
  chapter: string
  keywords: string[]
  status: KpaArticleStatus
  pdfPage: number
  searchToken: string
  paragraphCount: number | null
  previousArticle: string | null
  nextArticle: string | null
  sectionFocus: string
  sectionPractice: string
  editorialStatus: "official-locator"
}

export type KpaArticleSection = {
  id: string
  division: string
  chapter: string
  start: string
  end: string
  learnerFocus: string
  practicalUse: string
  keywords: string[]
}

export const kpaArticleSections: KpaArticleSection[] = [
  {
    id: "i-1",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 1 — Zakres obowiązywania",
    start: "1",
    end: "5",
    learnerFocus:
      "Коли застосовується KPA, які справи охоплює кодекс і де шукати винятки та визначення.",
    practicalUse:
      "Спочатку відділіть матеріальні умови дозволу з ustawy szczególnej від процесуальних правил KPA.",
    keywords: ["zakres", "wyłączenia", "definicje", "RODO"],
  },
  {
    id: "i-2",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 2 — Zasady ogólne",
    start: "6",
    end: "16",
    learnerFocus:
      "Загальні стандарти законності, довіри, інформування, участі сторони, швидкості та інстанційності.",
    practicalUse:
      "Поєднуйте засаду з конкретною дією органу і показуйте, як порушення вплинуло на факти або результат.",
    keywords: ["zasady", "zaufanie", "informowanie", "czynny udział"],
  },
  {
    id: "i-3",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 3 — Organy wyższego stopnia i organy naczelne",
    start: "17",
    end: "18",
    learnerFocus: "Який орган контролює рішення і хто є органом вищого рівня.",
    practicalUse:
      "Перед odwołaniem перевірте lex specialis: саме він може змінити загальну систему органів.",
    keywords: ["organ wyższego stopnia", "organ naczelny"],
  },
  {
    id: "i-4",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 4 — Właściwość organów",
    start: "19",
    end: "23",
    learnerFocus:
      "Компетенція rzeczowa і miejscowa та вирішення спорів між органами.",
    practicalUse:
      "Зафіксуйте норму компетенції, факт територіального зв’язку і доказ цього факту.",
    keywords: ["właściwość", "spór", "organ"],
  },
  {
    id: "i-5",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 5 — Wyłączenie pracownika oraz organu",
    start: "24",
    end: "27a",
    learnerFocus:
      "Коли працівник, член колегіального органу або сам орган не повинен вести справу.",
    practicalUse:
      "Шукайте конкретний конфлікт інтересів і документуйте, хто після wyłączenia має продовжити справу.",
    keywords: ["wyłączenie", "bezstronność", "konflikt interesów"],
  },
  {
    id: "i-6",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 6 — Strona",
    start: "28",
    end: "34",
    learnerFocus:
      "Хто є стороною, хто може її представляти та як оформити повноваження.",
    practicalUse:
      "Відрізняйте фактичну зацікавленість від interesu prawnego і перевіряйте zakres pełnomocnictwa.",
    keywords: ["strona", "pełnomocnik", "przedstawiciel"],
  },
  {
    id: "i-7",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 7 — Załatwianie spraw",
    start: "35",
    end: "38",
    learnerFocus: "Строки розгляду, повідомлення про затримку та ponaglenie.",
    practicalUse:
      "Ведіть календар від wszczęcia, віднімайте законні періоди неврахування і перевіряйте pouczenie про ponaglenie.",
    keywords: ["termin", "bezczynność", "przewlekłość", "ponaglenie"],
  },
  {
    id: "i-8",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 8 — Doręczenia",
    start: "39",
    end: "49b",
    learnerFocus:
      "Кому, куди, коли і з яким наслідком вручається кореспонденція.",
    practicalUse:
      "Дата skutecznego doręczenia запускає строки — збережіть підтвердження і перевірте адресу, представника та fikcję doręczenia.",
    keywords: ["doręczenie", "adres", "awizo", "obwieszczenie"],
  },
  {
    id: "i-9",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 9 — Wezwania",
    start: "50",
    end: "56",
    learnerFocus: "Мета, обов’язкові елементи та спосіб виконання wezwania.",
    practicalUse:
      "Розкладіть wezwanie на: адресат, дія, підстава, строк, форма, наслідок і можливість уточнення.",
    keywords: ["wezwanie", "stawiennictwo", "wyjaśnienia"],
  },
  {
    id: "i-10",
    division: "Dział I — Przepisy ogólne",
    chapter: "Rozdział 10 — Terminy",
    start: "57",
    end: "60",
    learnerFocus: "Як рахувати процесуальні строки і коли їх можна поновити.",
    practicalUse:
      "Запишіть подію-початок, одиницю часу, останній день, спосіб подання і доказ своєчасності.",
    keywords: ["termin", "przywrócenie terminu", "obliczanie"],
  },
  {
    id: "ii-1",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 1 — Wszczęcie postępowania",
    start: "61",
    end: "66",
    learnerFocus:
      "Початок справи, podanie, braki formalne та подання до неправильного органу.",
    practicalUse:
      "Не змішуйте brak formalny з недоведенням матеріальної умови; для кожного дефекту перевірте окремий наслідок.",
    keywords: ["wszczęcie", "podanie", "braki formalne", "przekazanie"],
  },
  {
    id: "ii-2",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 2 — Metryki, protokoły i adnotacje",
    start: "66a",
    end: "72",
    learnerFocus: "Як орган фіксує перебіг справи та окремі процесуальні дії.",
    practicalUse:
      "Порівнюйте протокол або adnotację з реальною дією: хто, коли, що сказав і які зауваження внесено.",
    keywords: ["metryka", "protokół", "adnotacja"],
  },
  {
    id: "ii-3",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 3 — Udostępnianie akt",
    start: "73",
    end: "74a",
    learnerFocus: "Право доступу до матеріалів і межі відмови в доступі.",
    practicalUse:
      "Перед позицією або odwołaniem перевірте повний склад akt, зробіть копії та оскаржте формальну відмову.",
    keywords: ["akta", "wgląd", "odpis", "tajemnica"],
  },
  {
    id: "ii-4",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 4 — Dowody",
    start: "75",
    end: "88a",
    learnerFocus: "Допустимість, збирання, участь сторони й оцінка доказів.",
    practicalUse:
      "Для кожної przesłanki створіть рядок: факт → доказ → джерело → суперечності → висновок органу.",
    keywords: ["dowód", "dokument", "świadek", "biegły", "ocena"],
  },
  {
    id: "ii-5",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 5 — Rozprawa",
    start: "89",
    end: "96",
    learnerFocus:
      "Коли потрібна rozprawa, як її підготувати і що можуть робити учасники.",
    practicalUse:
      "До rozprawy сформулюйте спірні факти, питання до свідків і перелік доказів, які треба зіставити.",
    keywords: ["rozprawa", "świadek", "wezwanie"],
  },
  {
    id: "ii-5a",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 5a — Mediacja",
    start: "96a",
    end: "96n",
    learnerFocus:
      "Добровільна, конфіденційна медіація та її процесуальні наслідки.",
    practicalUse:
      "Спочатку перевірте, чи характер справи допускає домовленість і чи результат залишиться в межах закону.",
    keywords: ["mediacja", "mediator", "poufność"],
  },
  {
    id: "ii-6",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 6 — Zawieszenie postępowania",
    start: "97",
    end: "103",
    learnerFocus:
      "Обов’язкове і факультативне zawieszenie, дії під час паузи та вплив на строки.",
    practicalUse:
      "Назвіть точну підставу zawieszenia і перевірте, яка подія дозволяє podjęcie postępowania.",
    keywords: ["zawieszenie", "podjęcie", "termin"],
  },
  {
    id: "ii-7",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 7 — Decyzje",
    start: "104",
    end: "113",
    learnerFocus:
      "Форма завершення справи, елементи decyzji, виконання, доповнення і виправлення.",
    practicalUse:
      "Читайте decyzję у п’яти шарах: орган, rozstrzygnięcie, fakty, prawo, pouczenie.",
    keywords: ["decyzja", "uzasadnienie", "pouczenie", "rygor"],
  },
  {
    id: "ii-8",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 8 — Ugoda",
    start: "114",
    end: "122",
    learnerFocus: "Угода сторін, її форма, затвердження та юридичний ефект.",
    practicalUse:
      "Перевірте допустимість ugody, точний зміст обов’язків і момент, з якого вона стає wykonalna.",
    keywords: ["ugoda", "zatwierdzenie", "wykonalność"],
  },
  {
    id: "ii-8a",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 8a — Milczące załatwienie sprawy",
    start: "122a",
    end: "122h",
    learnerFocus:
      "Коли спеціальний закон дозволяє позитивний результат через мовчання органу.",
    practicalUse:
      "Не припускайте milczenia автоматично: знайдіть пряму норму спеціального закону, строк і доказ його спливу.",
    keywords: ["milczące załatwienie", "zaświadczenie"],
  },
  {
    id: "ii-9",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 9 — Postanowienia",
    start: "123",
    end: "126",
    learnerFocus: "Проміжні процесуальні rozstrzygnięcia та їх форма.",
    practicalUse:
      "Перевірте, чи на конкретне postanowienie прямо передбачене zażalenie або лише контроль разом з decyzją.",
    keywords: ["postanowienie", "zażalenie", "uzasadnienie"],
  },
  {
    id: "ii-10",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 10 — Odwołania",
    start: "127",
    end: "140",
    learnerFocus:
      "Подання, передача, межі розгляду і види рішень органу odwoławczego.",
    practicalUse:
      "Збережіть строк і правильний шлях подання, а zarzuty зв’яжіть із доказами та очікуваним способом вирішення.",
    keywords: ["odwołanie", "organ odwoławczy", "zakaz pogarszania"],
  },
  {
    id: "ii-11",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 11 — Zażalenia",
    start: "141",
    end: "144",
    learnerFocus:
      "Оскарження postanowień лише у випадках, прямо передбачених законом.",
    practicalUse:
      "Спершу знайдіть норму, яка відкриває zażalenie; інакше zarzut збережіть до odwołania від decyzji.",
    keywords: ["zażalenie", "postanowienie"],
  },
  {
    id: "ii-12",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 12 — Wznowienie postępowania",
    start: "145",
    end: "153",
    learnerFocus:
      "Виняткове повторне відкриття остаточно завершеної справи через визначені дефекти.",
    practicalUse:
      "Підставу wznowienia, момент коли про неї дізналися, строк і вплив на результат аналізуйте окремо.",
    keywords: ["wznowienie", "decyzja ostateczna", "termin"],
  },
  {
    id: "ii-13",
    division: "Dział II — Postępowanie",
    chapter:
      "Rozdział 13 — Uchylenie, zmiana oraz stwierdzenie nieważności decyzji",
    start: "154",
    end: "163a",
    learnerFocus:
      "Надзвичайні способи зміни, скасування, nieważności або wygaśnięcia decyzji.",
    practicalUse:
      "Не взаємозамінюйте режими: кожен має іншу підставу, орган, межі та наслідок.",
    keywords: ["nieważność", "uchylenie", "zmiana", "wygaśnięcie"],
  },
  {
    id: "ii-14",
    division: "Dział II — Postępowanie",
    chapter: "Rozdział 14 — Postępowanie uproszczone",
    start: "163b",
    end: "163g",
    learnerFocus:
      "Скорочена процедура, якщо її прямо дозволяє спеціальний закон.",
    practicalUse:
      "Перевірте правову підставу trybu uproszczonego, formularz, межі доказів та спрощене uzasadnienie.",
    keywords: ["postępowanie uproszczone", "formularz"],
  },
  {
    id: "iii",
    division: "Dział III — Ubezpieczenia społeczne",
    chapter: "Przepisy szczególne; art. 164–179 (uchylone)",
    start: "180",
    end: "181",
    learnerFocus:
      "Офіційний PDF показує art. 164–179 одним груповим записом «uchylone», без окремих заголовків. Art. 180–181 залишають зв’язок KPA зі спеціальними правилами соціального страхування.",
    practicalUse:
      "Для справ ZUS починайте зі спеціальної процедури, а не переносіть механічно правила справ про pobyt.",
    keywords: ["ubezpieczenia społeczne", "uchylony", "164–179"],
  },
  {
    id: "iv",
    division: "Dział IV — Udział prokuratora",
    chapter: "Udział prokuratora",
    start: "182",
    end: "189",
    learnerFocus:
      "Повноваження prokuratora для охорони законності в адміністративній справі.",
    practicalUse:
      "Відрізняйте sprzeciw prokuratora від засобу оскарження, який належить самій стороні.",
    keywords: ["prokurator", "sprzeciw"],
  },
  {
    id: "iva",
    division: "Dział IVA — Administracyjne kary pieniężne",
    chapter: "Administracyjne kary pieniężne",
    start: "189a",
    end: "189l",
    learnerFocus:
      "Загальні правила адміністративних грошових санкцій: вибір закону, розмір, відступ, строки та ulgi.",
    practicalUse:
      "Перевірте lex specialis, дату порушення, siłę wyższą, przesłanki odstąpienia і передбачені строки давності.",
    keywords: ["kara pieniężna", "przedawnienie", "ulga"],
  },
  {
    id: "v",
    division: "Dział V — uchylony",
    chapter: "Dział uchylony",
    start: "190",
    end: "195",
    learnerFocus: "У чинному тексті весь Dział V позначений як скасований.",
    practicalUse:
      "Не будуйте чинну дію на історичній статті; перевірте актуальний інститут у спеціальному законі та перехідні норми.",
    keywords: ["uchylony"],
  },
  {
    id: "vi",
    division: "Dział VI — uchylony",
    chapter: "Dział uchylony",
    start: "196",
    end: "216",
    learnerFocus: "У чинному тексті весь Dział VI позначений як скасований.",
    practicalUse:
      "Старе посилання в документі перевіряйте за редакцією, що діяла на дату відповідної czynności.",
    keywords: ["uchylony"],
  },
  {
    id: "vii",
    division: "Dział VII — Wydawanie zaświadczeń",
    chapter: "Wydawanie zaświadczeń",
    start: "217",
    end: "220",
    learnerFocus:
      "Коли орган підтверджує факт або правовий стан zaświadczeniem і як оскаржити відмову.",
    practicalUse:
      "Назвіть факт, правову підставу або interes prawny; не вимагайте заświadczenia там, де орган уже має дані.",
    keywords: ["zaświadczenie", "odmowa", "oświadczenie"],
  },
  {
    id: "viii-1",
    division: "Dział VIII — Skargi i wnioski",
    chapter: "Rozdział 1 — Postanowienia ogólne",
    start: "221",
    end: "226a",
    learnerFocus:
      "Конституційне право skarg і wniosków та загальні правила їх прийняття.",
    practicalUse:
      "Зміст, а не назва письма визначає режим; не підміняйте skargą odwołania у конкретній справі.",
    keywords: ["skarga", "wniosek"],
  },
  {
    id: "viii-2",
    division: "Dział VIII — Skargi i wnioski",
    chapter: "Rozdział 2 — Skargi",
    start: "227",
    end: "240",
    learnerFocus: "Предмет, орган, строк і спосіб розгляду skargi.",
    practicalUse:
      "Спочатку визначте, чи письмо стосується загальної роботи органу, поточної справи або остаточної decyzji.",
    keywords: ["skarga", "właściwość", "zawiadomienie"],
  },
  {
    id: "viii-3",
    division: "Dział VIII — Skargi i wnioski",
    chapter: "Rozdział 3 — Wnioski",
    start: "241",
    end: "247",
    learnerFocus:
      "Wniosek як пропозиція покращити організацію чи правозастосування.",
    practicalUse:
      "Не очікуйте, що wniosek створить індивідуальне право; для конкретної справи використовуйте належний процесуальний засіб.",
    keywords: ["wniosek", "organizacja"],
  },
  {
    id: "viii-4",
    division: "Dział VIII — Skargi i wnioski",
    chapter: "Rozdział 4 — Udział prasy i organizacji społecznych",
    start: "248",
    end: "252",
    learnerFocus:
      "Передання skarg і wniosków пресою або громадською організацією.",
    practicalUse:
      "Перевірте, хто є автором, кому надсилати відповідь і які статті цього розділу скасовані.",
    keywords: ["prasa", "organizacja społeczna"],
  },
  {
    id: "viii-5",
    division: "Dział VIII — Skargi i wnioski",
    chapter: "Rozdział 5 — Przyjmowanie skarg i wniosków",
    start: "253",
    end: "256",
    learnerFocus:
      "Організація прийому, реєстрації та передання skarg і wniosków.",
    practicalUse:
      "Фіксуйте дату і спосіб прийняття; скаргу на працівника має отримати його przełożony.",
    keywords: ["przyjmowanie", "ewidencja"],
  },
  {
    id: "viii-6",
    division: "Dział VIII — Skargi i wnioski",
    chapter: "Rozdział 6 — Nadzór i kontrola",
    start: "257",
    end: "260",
    learnerFocus:
      "Хто контролює систему прийняття та розгляду skarg і wniosków.",
    practicalUse:
      "Цей контроль стосується організації механізму, а не замінює оскарження рішення у вашій справі.",
    keywords: ["nadzór", "kontrola"],
  },
  {
    id: "viiia",
    division: "Dział VIIIA — Europejska współpraca administracyjna",
    chapter: "Europejska współpraca administracyjna",
    start: "260a",
    end: "260g",
    learnerFocus: "Взаємна адміністративна допомога між органами держав ЄС.",
    practicalUse:
      "Перевірте правову підставу обміну, необхідність інформації, конфіденційність та спеціальні правила ЄС.",
    keywords: ["UE", "współpraca", "pomoc"],
  },
  {
    id: "ix",
    division: "Dział IX — Opłaty i koszty postępowania",
    chapter: "Opłaty i koszty",
    start: "261",
    end: "267",
    learnerFocus: "Аванс, розподіл, визначення і стягнення витрат провадження.",
    practicalUse:
      "Відділяйте opłatę за дію від kosztów, спричинених учасником, і перевіряйте можливість zwolnienia.",
    keywords: ["opłata", "koszty", "zwolnienie"],
  },
  {
    id: "x",
    division: "Dział X — Przepisy końcowe",
    chapter: "Przepisy końcowe",
    start: "268",
    end: "269",
    learnerFocus:
      "Уповноваження всередині органу і значення терміна prawomocna decyzja.",
    practicalUse:
      "Перевірте письмове upoważnienie особи, яка підписала акт, та не плутайте ostateczność із prawomocnością.",
    keywords: ["upoważnienie", "prawomocność"],
  },
]

const PARAGRAPH_COUNTS = `2a:3,3:5,5:2,7a:2,8:2,10:3,12:2,13:2,14:6,16:3,21:2,22:3,24:4,25:2,26:3,27:4,30:6,31:7,33:6,34:2,35:6,36:2,37:9,39:4,39³:4,40:5,41:2,42:3,44:4,45a:5,46:10,47:2,48:2,49:2,49b:2,50:3,51:2,54:3,55:2,56:2,57:6,58:3,59:2,61:6,61a:2,63:7,64:2,65:3,66:4,66a:5,67:2,68:2,69:2,72:2,73:5,74:2,75:2,76:3,76a:6,77:4,78:2,79:2,79a:2,81a:2,83:4,84:2,85:2,88:3,89:2,90:3,91:3,94:2,95:2,96a:6,96b:5,96d:2,96e:3,96f:3,96g:2,96j:3,96l:3,96m:3,96n:2,97:7,98:2,100:3,101:3,104:2,105:2,106:6,106a:4,107:5,108:2,109:4,110:2,111:4,113:3,116:2,117:3,118:3,119:3,120:2,122a:2,122c:3,122d:2,122f:5,122h:2,123:2,124:2,125:3,127:5,127a:2,129:3,130:4,132:3,136:4,138:6,139a:2,141:2,145:3,145a:2,145aa:2,145b:2,146:2,148:2,149:4,150:3,151:3,152:2,154:3,156:2,157:3,158:3,159:2,161:5,162:3,163b:3,163c:4,163e:2,180:2,183:2,184:4,185:2,189a:3,189f:3,189g:3,189h:5,189i:2,189j:5,189k:12,189l:4,217:4,218:2,220:5,221:3,223:2,225:2,231:2,232:3,235:2,236:3,237:4,238:2,239:2,242:2,244:2,246:2,248:2,253:5,258:2,259:3,260a:4,260b:4,260c:2,261:4,262:2,263:2,264:3`

const TITLE_SEED = `
1|Сфера справ, які регулює KPA
2|Skargi i wnioski у системі KPA
2a|Інформаційний обов’язок RODO
3|Винятки із застосування KPA
4|Імунітети та міжнародні правила
5|Кодексні визначення
6|Засада законності
7|Обов’язок з’ясувати факти
7a|Сумнів у змісті норми на користь сторони
7b|Співпраця органів
8|Довіра, пропорційність і рівне ставлення
9|Обов’язок інформувати сторону
10|Активна участь сторони
11|Пояснення мотивів органу
12|Швидкість і прості засоби
13|Мирне вирішення та медіація
14|Письмова й електронна форма справи
14a|Оцінювання роботи urzędu
15|Двоінстанційність
16|Остаточність і правомочність decyzji
17|Органи вищого ступеня
18|Органи naczelne
19|Обов’язок перевіряти компетенцію
20|Właściwość rzeczowa
21|Właściwość miejscowa
22|Хто вирішує spór o właściwość
23|Невідкладні дії під час спору
24|Wyłączenie працівника
25|Wyłączenie органу
26|Хто продовжує справу після wyłączenia
27|Wyłączenie члена колегіального органу
27a|Скасована норма про wyłączenie
28|Хто є stroną
29|Хто може бути стороною
30|Здатність сторони та правонаступництво
31|Участь organizacji społecznej
32|Дія через pełnomocnika
33|Форма і межі pełnomocnictwa
34|Представник для відсутньої особи
35|Строки załatwienia sprawy
36|Повідомлення про затримку
37|Ponaglenie: bezczynność і przewlekłość
38|Відповідальність за затримку
39|Основний спосіб doręczenia
39¹|Адресат електронного doręczenia
39²|Скасована норма doręczeń
39³|Видача копії електронного письма
39⁴|Дата електронного doręczenia
40|Doręczenie стороні або представнику
41|Обов’язок повідомити нову адресу
42|Місце doręczenia фізичній особі
43|Doręczenie zastępcze
44|Awizo і fikcja doręczenia
45|Doręczenie організації
45a|Неактуальна адреса юридичної особи
46|Підтвердження отримання
47|Відмова прийняти письмо
48|Особа з невідомим місцем перебування
49|Публічне obwieszczenie
49a|Публічне повідомлення для багатьох сторін
49b|Доступ до змісту публічно оголошеного акта
50|Кого і для чого можна викликати
51|Територіальна межа особистої явки
52|Допомога іншого органу в дії
53|Коли потрібна особиста дія перед органом
54|Обов’язковий зміст wezwania
55|Термінове wezwanie
56|Витрати викликаної особи
57|Обчислення строків
58|Умови przywrócenia terminu
59|Рішення про поновлення строку
60|Тимчасове зупинення виконання
61|Wszczęcie на вимогу або з urzędu
61a|Відмова розпочати справу
62|Спільне провадження кількох сторін
63|Форма і зміст podania
64|Braki formalne podania
65|Передання до właściwego organu
66|Одне podanie — кілька різних справ
66a|Metryka sprawy
67|Коли складається protokół
68|Зміст і підпис protokołu
69|Protokół przesłuchania
70|Письмові показання як додаток
71|Виправлення protokołu
72|Adnotacja замість protokołu
73|Доступ до akt sprawy
74|Обмеження доступу до akt
74a|Доступ до akt і права RODO
75|Відкритий каталог доказів
76|Доказова сила dokumentu urzędowego
76a|Копії та витяги документів
77|Повне збирання матеріалу
78|Wniosek dowodowy сторони
79|Участь у проведенні доказу
79a|Вказання недоведених передумов
80|Вільна оцінка всього матеріалу
81|Факт після можливості висловитися
81a|Фактичний сумнів на користь сторони
82|Хто не може бути свідком
83|Право відмовитися від показань
84|Доказ з opinii biegłego
85|Oględziny
86|Przesłuchanie strony як додатковий доказ
87|Докази перед органом колегіальним
88|Штраф за неявку або відмову
88a|Наслідки для військовослужбовця
89|Коли проводиться rozprawa
90|Підготовка rozprawy
91|Wezwanie на rozprawę
92|Час на підготовку до rozprawy
93|Хто керує rozprawą
93a|Дистанційна участь ув’язненої особи
94|Неявка та відкладення rozprawy
95|Права учасників на rozprawie
96|Порядок і штраф за поведінку
96a|Допустимість і мета mediacji
96b|Пропозиція mediacji та згода
96c|Відсутність згоди зупиняє mediację
96d|Вибір mediatora
96e|Направлення справи до mediacji
96f|Хто може бути mediatorem
96g|Безсторонність mediatora
96h|Передання контактних даних
96i|Доступ mediatora до akt
96j|Конфіденційність mediacji
96k|Завдання mediatora
96l|Оплата mediatora
96m|Protokół z mediacji
96n|Врахування результату mediacji
97|Обов’язкове zawieszenie
98|Zawieszenie на прохання сторони
99|Захист інтересів під час zawieszenia
100|Prejudycjalne питання
101|Postanowienie про zawieszenie або podjęcie
102|Невідкладні дії під час zawieszenia
103|Вплив zawieszenia на строки
104|Decyzja як форма вирішення справи
105|Umorzenie безпредметної справи
106|Позиція іншого органу
106a|Спільне засідання органів
107|Обов’язкові елементи decyzji
108|Rygor natychmiastowej wykonalności
109|Doręczenie або ogłoszenie decyzji
110|Коли орган зв’язаний decyzją
111|Uzupełnienie decyzji
112|Помилкове pouczenie не шкодить стороні
113|Виправлення помилок і wyjaśnienie
114|Допустимість ugody
115|Перед яким органом укладається ugoda
116|Строк на укладення ugody
117|Форма і зміст ugody
118|Затвердження ugody
119|Postanowienie щодо затвердження
120|Коли ugoda стає wykonalna
121|Наслідок затвердженої ugody
121a|Ugoda перед mediatorem
122|Субсидіарне застосування правил decyzji
122a|Коли можливе milczące załatwienie
122b|Умовна дата завершення справи
122c|Момент milczącego załatwienia
122d|Процесуальні винятки при мовчанні
122e|Adnotacja в aktach
122f|Zaświadczenie про milczące załatwienie
122g|Надзвичайні режими після мовчання
122h|Інформація RODO при мовчанні
123|Коли видається postanowienie
124|Елементи postanowienia
125|Doręczenie та uzasadnienie postanowienia
126|Які правила decyzji діють відповідно
127|Право на odwołanie
127a|Zrzeczenie się odwołania
128|Мінімальний зміст odwołania
129|Строк і шлях подання odwołania
130|Вплив odwołania на виконання
131|Повідомлення інших сторін
132|Autokontrola органу першої інстанції
133|Передання odwołania й akt
134|Недопустимість або пропуск строку
135|Зупинення негайного виконання
136|Додаткове доказове провадження
137|Cofnięcie odwołania
138|Види рішень органу odwoławczego
139|Zakaz reformationis in peius
139a|Вказівки після kasacyjnej decyzji
140|Відповідне застосування правил першої інстанції
141|Коли доступне zażalenie
142|Контроль postanowienia в odwołaniu
143|Виконання postanowienia попри zażalenie
144|Правила odwołania для zażalenia
145|Основні підстави wznowienia
145a|Рішення Trybunału Konstytucyjnego
145aa|Рішення Trybunału Sprawiedliwości UE
145b|Судове встановлення порушення рівності
146|Часові межі uchylenia після wznowienia
147|Wznowienie з urzędu або на вимогу
148|Строк і адресат podania o wznowienie
149|Postanowienie про wznowienie
150|Орган, компетентний у wznowieniu
151|Рішення після wznowienia
152|Зупинення виконання під час wznowienia
153|Скасована норма wznowienia
154|Зміна decyzji без набутого права
155|Зміна decyzji з набутим правом
155a|Без milczącego załatwienia
156|Підстави nieważności decyzji
157|Орган і початок справи nieważności
158|Рішення у справі nieważności
159|Зупинення виконання при nieważności
160|Скасована норма про відшкодування
161|Надзвичайне втручання ministra
162|Wygaśnięcie або uchylenie decyzji
163|Зміна decyzji за спеціальною підставою
163a|Без milczącego załatwienia у цих режимах
163b|Коли діє tryb uproszczony
163c|Формуляр і межі żądania
163d|Нові обставини в trybie uproszczonym
163e|Обмежене postępowanie dowodowe
163f|Скорочене uzasadnienie
163g|Оскарження postanowień лише з decyzją
180|KPA у справах ubezpieczeń społecznych
181|Органи odwoławcze в соціальному страхуванні
182|Вимога prokuratora розпочати справу
183|Участь prokuratora в справі
184|Sprzeciw prokuratora
185|Строк розгляду sprzeciwu
186|Провадження після sprzeciwu
187|Зупинення виконання після sprzeciwu
188|Права prokuratora як учасника
189|Співвідношення sprzeciwu і skargi sądowej
189a|Субсидіарність правил про kary
189b|Визначення administracyjnej kary pieniężnej
189c|Застосування м’якшого закону
189d|Фактори розміру kary
189e|Siła wyższa виключає karę
189f|Відступ від накладення kary
189g|Давність накладення kary
189h|Переривання і зупинення давності
189i|Несплачена в строк kara та відсотки
189j|Давність виконання kary
189k|Ulgi на заяву сторони
189l|Ulgi з urzędu
217|Підстави й строк видачі zaświadczenia
217a|Інформація RODO при zaświadczeniu
218|Перевірка фактів для zaświadczenia
219|Відмова у формі postanowienia
220|Заборона вимагати наявні zaświadczenia
221|Право подавати skargi і wnioski
222|Зміст письма важливіший за назву
223|Організація розгляду skarg
224|Значення organów państwowych
225|Захист автора skargi
226|Виконавчі правила розгляду
226a|Інформація RODO у skargach
227|Що може бути предметом skargi
228|Куди подавати skargę
229|Загальна właściwość для skargi
230|Skarga на organizację społeczną
231|Передання skargi компетентному органу
232|Передання skargi нижчому органу
233|Skarga до початку індивідуальної справи
234|Skarga під час поточної справи
235|Skarga після остаточної decyzji
236|Орган для skargi у конкретній справі
237|Строк і контроль rozpatrzenia skargi
238|Зміст відповіді на skargę
239|Повторна безпідставна skarga
240|Skarga поза сферою KPA
241|Предмет wniosku
242|Куди подавати wniosek
243|Передання wniosku
244|Строк розгляду wniosku
245|Повідомлення про затримку
246|Skarga на спосіб розгляду wniosku
247|Відповідне застосування правил skargi
248|Skarga, передана пресою
249|Передання organizacją społeczną
250|Скасована норма про пресу
251|Права редакції після передання
252|Скасована норма цього розділу
253|Організація прийому громадян
254|Реєстрація skarg і wniosków
255|Скасована норма про приймання skarg
256|Skarga на працівника до przełożonego
257|Вищий нагляд у судах
258|Органи нагляду і контролю
259|Періодична оцінка системи
260|Скасована норма нагляду
260a|Надання допомоги органу ЄС
260b|Вимоги до запиту про допомогу
260c|Запит Польщі до іншої держави ЄС
260d|Канал передання інформації
260e|Витрати міжнародної допомоги
260f|Застосування до ширшого кола держав
260g|Перевага спеціальних правил ЄС
261|Аванс на opłaty i koszty
262|Які витрати несе сторона
263|Що входить до kosztów
263a|Ставки для mediatora
264|Postanowienie про розмір kosztów
265|Стягнення несплачених należności
266|Відповідальність за помилкове wezwanie
267|Zwolnienie від витрат
268|Скасована прикінцева норма
268a|Письмове upoważnienie працівника
269|Prawomocna означає ostateczna
`

const kpaCorpusArticles = [...kpaCorpusProvisions]
  .filter((provision) => provision.kind === "article")
  .sort((left, right) => left.order - right.order)

const kpaCorpusArticleByArticle = new Map(
  kpaCorpusArticles.map(
    (provision) =>
      [provision.locator.replace(/^Art\.\s*/u, ""), provision] as const
  )
)

const pageByArticle = new Map(
  kpaCorpusArticles.map(
    (provision) =>
      [
        provision.locator.replace(/^Art\.\s*/u, ""),
        provision.startPdfPage,
      ] as const
  )
)

const paragraphCountByArticle = new Map(
  PARAGRAPH_COUNTS.split(",").map((item) => {
    const [article, count] = item.split(":")
    return [article, Number(count)] as const
  })
)

const titleByArticle = new Map(
  TITLE_SEED.trim()
    .split("\n")
    .map((line) => {
      const [article, title] = line.split("|")
      return [article, title] as const
    })
)

const articleSequence: string[] = kpaCorpusArticles.map((provision) =>
  provision.locator.replace(/^Art\.\s*/u, "")
)

const articleOrder = new Map(
  articleSequence.map((article, index) => [article, index])
)
function sectionFor(article: string) {
  const order = articleOrder.get(article) ?? -1
  return kpaArticleSections.find((section) => {
    const start = articleOrder.get(section.start) ?? -1
    const end = articleOrder.get(section.end) ?? -1
    return order >= start && order <= end
  })
}

function articleNeighbors(article: string) {
  const index = articleOrder.get(article) ?? 0
  return {
    previousArticle: articleSequence[index - 1] ?? null,
    nextArticle: articleSequence[index + 1] ?? null,
  }
}

export const kpaArticleIndex: KpaArticleEntry[] = articleSequence.map(
  (article) => {
    const section = sectionFor(article)
    if (!section) throw new Error(`Missing KPA section for art. ${article}`)
    const status: KpaArticleStatus =
      kpaCorpusArticleByArticle.get(article)?.status === "active"
        ? "active"
        : "repealed"
    const shortTitle =
      status === "repealed"
        ? (titleByArticle.get(article) ??
          `Скасована стаття в ${section.chapter}`)
        : (titleByArticle.get(article) ??
          `Деталь правила: ${section.chapter.replace(/^Rozdział [^—]+— /, "")}`)
    const paragraphCount = paragraphCountByArticle.get(article)
    const neighbors = articleNeighbors(article)

    return {
      article,
      shortTitle,
      division: section.division,
      chapter: section.chapter,
      keywords: [...section.keywords, shortTitle, `art. ${article}`, status],
      status,
      pdfPage: pageByArticle.get(article) ?? 1,
      searchToken: `${kpaCorpusArticleByArticle.get(article)?.locator ?? `Art. ${article}`}.`,
      paragraphCount: paragraphCount ?? null,
      ...neighbors,
      sectionFocus: section.learnerFocus,
      sectionPractice: section.practicalUse,
      editorialStatus: "official-locator",
    }
  }
)

export const KPA_ARTICLE_INDEX_EXPECTED_COUNT = 306

const uniqueArticles = new Set(kpaArticleIndex.map((entry) => entry.article))
const invalidPageEntries = kpaArticleIndex.filter(
  (entry) => entry.pdfPage < 2 || entry.pdfPage > 46
)

if (
  kpaArticleIndex.length !== KPA_ARTICLE_INDEX_EXPECTED_COUNT ||
  uniqueArticles.size !== KPA_ARTICLE_INDEX_EXPECTED_COUNT ||
  invalidPageEntries.length > 0
) {
  throw new Error(
    `Invalid KPA article index: expected ${KPA_ARTICLE_INDEX_EXPECTED_COUNT} unique PDF headings with pages 2–46`
  )
}

export const kpaArticleIndexStats = {
  total: kpaArticleIndex.length,
  active: kpaArticleIndex.filter((entry) => entry.status === "active").length,
  repealed: kpaArticleIndex.filter((entry) => entry.status === "repealed")
    .length,
  verifiedLegalState: "14.07.2026",
  sourceEdition: "Dz.U. 2025 poz. 1691",
}

export type KpaGuideModuleId =
  | "system"
  | "anatomy"
  | "principles"
  | "authority"
  | "party"
  | "initiation"
  | "files-evidence"
  | "time-service"
  | "summons"
  | "silence"
  | "decisions"
  | "appeal"
  | "delay"
  | "extraordinary"
  | "court"

export type KpaGuideModuleArticleMapping = {
  stage: string
  articles: readonly string[]
}

export const kpaGuideModuleArticles = {
  system: {
    stage: "Сфера застосування KPA",
    articles: ["1", "2", "2a", "3", "4", "5"],
  },
  anatomy: {
    stage: "Будова й логіка норми",
    articles: ["5", "7", "54", "107"],
  },
  principles: {
    stage: "Загальні процесуальні стандарти",
    articles: [
      "6",
      "7",
      "7a",
      "7b",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "14a",
      "15",
      "16",
    ],
  },
  authority: {
    stage: "Компетенція та передання справи",
    articles: ["19", "20", "21", "22", "23", "65", "66"],
  },
  party: {
    stage: "Сторона, представництво і doręczenie",
    articles: ["28", "29", "30", "31", "32", "33", "34", "40"],
  },
  initiation: {
    stage: "Wszczęcie та перевірка podania",
    articles: ["61", "61a", "62", "63", "64", "65", "66"],
  },
  "files-evidence": {
    stage: "Доступ до akt і доказове провадження",
    articles: [
      "73",
      "74",
      "74a",
      "75",
      "76",
      "76a",
      "77",
      "78",
      "79",
      "79a",
      "80",
      "81",
      "81a",
    ],
  },
  "time-service": {
    stage: "Строк розгляду, doręczenie і строки сторони",
    articles: [
      "35",
      "36",
      "37",
      "38",
      "39",
      "39¹",
      "39²",
      "39³",
      "39⁴",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "45a",
      "46",
      "47",
      "48",
      "49",
      "49a",
      "49b",
      "57",
      "58",
      "59",
      "60",
    ],
  },
  summons: {
    stage: "Wezwanie та виконання викликаної дії",
    articles: ["50", "51", "52", "53", "54", "55", "56"],
  },
  silence: {
    stage: "Milczące załatwienie sprawy",
    articles: ["122a", "122b", "122c", "122d", "122e", "122f", "122g", "122h"],
  },
  decisions: {
    stage: "Decyzja, її виправлення та postanowienie",
    articles: [
      "104",
      "105",
      "106",
      "106a",
      "107",
      "108",
      "109",
      "110",
      "111",
      "112",
      "113",
      "123",
      "124",
      "125",
      "126",
    ],
  },
  appeal: {
    stage: "Адміністративний контроль decyzji й postanowienia",
    articles: [
      "127",
      "127a",
      "128",
      "129",
      "130",
      "131",
      "132",
      "133",
      "134",
      "135",
      "136",
      "137",
      "138",
      "139",
      "139a",
      "140",
      "141",
      "142",
      "143",
      "144",
    ],
  },
  delay: {
    stage: "Bezczynność, przewlekłość і ponaglenie",
    articles: ["35", "36", "37", "38"],
  },
  extraordinary: {
    stage: "Перегляд остаточної decyzji",
    articles: [
      "145",
      "145a",
      "145aa",
      "145b",
      "146",
      "147",
      "148",
      "149",
      "150",
      "151",
      "152",
      "153",
      "154",
      "155",
      "155a",
      "156",
      "157",
      "158",
      "159",
      "160",
      "161",
      "162",
      "163",
      "163a",
    ],
  },
  court: {
    stage: "Перехід від адміністративного до судового контролю",
    articles: ["16", "127", "127a"],
  },
} satisfies Record<KpaGuideModuleId, KpaGuideModuleArticleMapping>

const knownKpaArticleIds = new Set(
  kpaArticleIndex.map((entry) => entry.article)
)

export const unknownKpaGuideModuleArticleIds = Object.entries(
  kpaGuideModuleArticles
).flatMap(([moduleId, mapping]) =>
  mapping.articles
    .filter((article) => !knownKpaArticleIds.has(article))
    .map((article) => ({ moduleId: moduleId as KpaGuideModuleId, article }))
)

/** Generic legal-library curriculum projected from the authored KPA guide. */
export const kpaLearningCurriculum = defineLegalLearningCurriculum({
  documentId: "kpa",
  title: "KPA — kurs czytania procedury",
  description:
    "Курс іде тим самим шляхом, яким рухається адміністративна справа: від визначення правил до доказів, рішення та контролю.",
  modules: kpaGuideModules.map((module) => ({
    id: module.id,
    order: module.order,
    title: module.title,
    polish: module.polish,
    provisionScope: module.articles,
    outcome: module.outcome,
    caseQuestion: module.questions[0]?.prompt ?? module.outcome,
    placeInWork: module.layers.practical.practice,
    sections: [
      {
        id: `${module.id}-beginner`,
        title: "Початківець",
        paragraphs: [
          module.layers.beginner.focus,
          module.layers.beginner.law,
          module.layers.beginner.practice,
        ],
        questions: module.questions.map((question) => question.prompt),
        warning: module.layers.beginner.pitfall,
      },
      {
        id: `${module.id}-advanced`,
        title: "Поглиблено",
        paragraphs: [
          module.layers.advanced.focus,
          module.layers.advanced.law,
          module.layers.advanced.practice,
        ],
        steps: module.method,
        evidence: module.checklist,
        warning: module.layers.advanced.pitfall,
      },
    ],
    exercise: module.checklist[0] ?? module.outcome,
  })),
})
