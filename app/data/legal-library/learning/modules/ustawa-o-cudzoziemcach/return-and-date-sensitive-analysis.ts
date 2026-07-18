import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")
const SIS_2018_1860_URL = "https://eur-lex.europa.eu/eli/reg/2018/1860/oj"

const moduleContent: LegalLearningModule = {
  id: "return-and-date-sensitive-analysis",
  order: 9,
  title: "Powrót, SIS і аналіз за датою",
  polish:
    "zobowiązanie do powrotu, dobrowolny wyjazd, zakaz ponownego wjazdu, SIS, detencja, przepisy przejściowe",
  provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("294", "406", { start: "art. 294" })} та ${foreignersLaw.articleRange("507", "522", { start: "art. 507" })}`,
  outcome:
    "Уміти побудувати датовану послідовність від завершення підстави pobytu до рішення про powrót, SIS, виконання й можливого detention, застосовуючи редакцію та перехідну норму для кожної події.",
  caseQuestion:
    "Яка подія і дата створили obowiązek wyjazdu, чи є підстава та бар’єр для decyzja o zobowiązaniu do powrotu, які її наслідки й який окремий захист доступний?",
  placeInWork:
    "Фінальний ризиковий аналіз після реконструкції pobytu та негативних рішень, а також термінова перевірка при zatrzymanie, SIS або виконанні powrót.",
  sections: [
    {
      id: "date-matrix",
      title: "Кожній події дай дату, редакцію й доказ",
      paragraphs: [
        foreignersLaw.text`${foreignersLaw.article("299", "Art. 299")} містить кілька різних obowiązków opuszczenia terytorium: завершення wizy, ruch bezwizowy або zezwolenie, виїзд до держави, яка видала інший документ, і спеціальні строки після остаточних рішень. Ust. 6a встановлює 30-денний строк від завершення максимального періоду ochrony czasowej, а ust. 7 визнає pobyt legalny у періодах ust. 6 і 6a з указаним винятком для пізнього wniosku. Тому не можна механічно рахувати „30 днів після кожної відмови”: спочатку визнач конкретний пункт, момент ostateczność або doręczenie, наявність іншого документа та винятки.`,
        "Матриця має щонайменше п’ять колонок: подія; дата й доказ; чинна на ту дату редакція; перехідна норма; юридичний наслідок. Окремо записуй wjazd/wyjazd, кінець документа, подання заяви, усунення braków formalnych, doręczenie та ostateczność рішення, початок і кінець строку dobrowolnego wyjazdu, виконання, затримання й кожний запис SIS. Невідома дата — це невирішене питання, а не припущення на користь однієї версії.",
      ],
      questions: [
        "Яка саме подія запускає строк і чи доведено її doręczenie або ostateczność?",
        "Яка редакція закону та яка перехідна норма діяли для цієї події?",
      ],
      evidence: [
        "Повні рішення, postanowienia, pouczenia й докази їх doręczenia.",
        "Паспорти, документи pobytowe, прикордонні записи та підтвердження wyjazdu.",
        "Офіційний текст редакції й відповідного акта, що її змінив.",
      ],
      warning:
        "Дата legalnego pobytu, дата obowiązku wyjazdu, дата виконуваності та дата запису SIS можуть бути різними.",
    },
    {
      id: "return-decision",
      title: "Від підстави powrót до змісту рішення",
      paragraphs: [
        foreignersLaw.text`${foreignersLaw.article("302", "Art. 302")} перелічує підстави decyzja o zobowiązaniu do powrotu, зокрема відсутність належного документа, перевищення дозволеного pobytu, незаконну pracę, порушення правил działalności, окремі записи, безпеку, неправомірний кордон або невідповідність celu й умов pobytu. Але перед висновком треба перевірити всі обмеження й винятки самої статті та ${foreignersLaw.article("303", "art. 303")}. Остання норма вимагає не wszczynać або umorzyć провадження для названих статусів і ситуацій; pkt 5a окремо охоплює pobyt, пов’язаний із виконанням рішення про powrót іншої держави, за встановлених умов.`,
        foreignersLaw.text`Якщо підстава і допустимість підтверджені, аналіз переходить до рішення. За ${foreignersLaw.article("315", "art. 315")} загальний termin dobrowolnego wyjazdu становить 8–30 днів від doręczenia, але його не визначають при prawdopodobieństwo ucieczki або з міркувань безпеки й порядку; лише рішення без такого строку з причини ust. 2 pkt 2 підлягає natychmiastowe wykonanie за ust. 5. ${foreignersLaw.article("318", "Art. 318")} регулює zakaz ponownego wjazdu, можливість відступу в окремих рішеннях із добровільним строком та умовний zakaz на випадок невиконання. Не змішуй строк wyjazdu, виконуваність і тривалість zakazu.`,
        foreignersLaw.text`Окремо перевір бар’єри виконання й захисні статуси. ${foreignersLaw.article("348", "Art. 348")} формулює підстави zgoda na pobyt ze względów humanitarnych, а ${foreignersLaw.article("351", "art. 351")} обов’язково передбачає zgoda na pobyt tolerowany, коли виконані її умови. Це не довільна „гуманітарна рекомендація”, а окремі законні конструкції з власними умовами, винятками та доказами.`,
      ],
      steps: [
        foreignersLaw.text`Назвати один пункт ${foreignersLaw.article("302", "Art. 302")} і довести кожен його елемент на релевантну дату.`,
        foreignersLaw.text`Перевірити ${foreignersLaw.article("303", "Art. 303")}, захисні статуси, сімейні й інші бар’єри та можливість виконання.`,
        "Роздільно виписати dobrowolny wyjazd, natychmiastowe wykonanie, państwo powrotu, zakaz і środek zaskarżenia.",
      ],
      warning: foreignersLaw.text`Сам факт закінчення документа не доводить усіх умов конкретної decyzja o zobowiązaniu do powrotu та не скасовує перевірки ${foreignersLaw.article("303", "Art. 303")} і захисних норм.`,
    },
    {
      id: "sis-and-service",
      title: "SIS і doręczenie — наступні, але окремі механізми",
      paragraphs: [
        foreignersLaw.text`Після wydanie decyzji o zobowiązaniu do powrotu ${foreignersLaw.article("347a", "art. 347a")} зобов’язує Komendanta Głównego Straży Granicznej розмістити дані в SIS для цілей ${foreignersLaw.external("Art. 3 ust. 1 rozporządzenia 2018/1860", SIS_2018_1860_URL)}, тобто alert dotyczący powrotu. ${foreignersLaw.articleRange("347b", "347f", { start: "art. 347b" })} регулюють консультації, оновлення та видалення такого запису; консультація з ${foreignersLaw.article("347f", "art. 347f")} ust. 2 відсилає до ${foreignersLaw.external("Art. 11 rozporządzenia 2018/1860", SIS_2018_1860_URL)}. ${foreignersLaw.article("359a", "Art. 359a")} також стосується даних у SIS для цілей ${foreignersLaw.external("Art. 3 ust. 1 rozporządzenia 2018/1860", SIS_2018_1860_URL)} та консультацій у провадженнях powrót або zgoda humanitarna. Alert dotyczący powrotu не треба називати записом „do odmowy wjazdu i pobytu” без перевірки іншої правової підстави.`,
        foreignersLaw.text`У процедурі pomocy w dobrowolnym powrocie ${foreignersLaw.article("334", "art. 334")} визначає категорії, wniosek і спеціальні строки, включно з особою після zakończenie ochrony czasowej. ${foreignersLaw.article("334a", "Art. 334a")} дозволяє doręczenie на вказану електронну адресу; тоді датою doręczenia є день, коли organ wysłał pismo на цю адресу. Отже, скриньку, адресу у wniosku й момент відправлення треба документувати: фактичне пізніше прочитання листа не змінює спеціальної законної фікції.`,
      ],
      questions: [
        "Який саме вид alertu SIS, на підставі якого рішення та яка подія вимагає його оновити або видалити?",
        "Яка норма визначає doręczenie і чи є доказ відправлення на адресу, вказану у wniosku?",
      ],
    },
    {
      id: "detention-and-alternatives",
      title: "Detencja потребує окремої підстави й контролю",
      paragraphs: [
        foreignersLaw.text`${foreignersLaw.article("394", "Art. 394")} регулює zatrzymanie до 48 годин у названих ситуаціях. Далі ${foreignersLaw.article("398", "art. 398")} дозволяє postanowienie про альтернативи strzeżony ośrodek або areszt: регулярне zgłaszanie, zabezpieczenie pieniężne, передання документа podróży до depozyt або проживання у визначеному місці. ${foreignersLaw.article("398a", "Art. 398a")} містить окремі обов’язкові підстави umieszczenia w strzeżonym ośrodku; pkt 1 і 2 обидва посилаються на ${foreignersLaw.article("315", "art. 315")} ust. 2 pkt 2, а pkt 4 вимагає також неможливості альтернатив або невиконання їх умов. Areszt за ${foreignersLaw.article("399", "art. 399")} потребує додаткового ризику непідкорення правилам ośrodka.`,
        foreignersLaw.text`Суд оцінює umieszczenie та можливість альтернатив за ${foreignersLaw.article("401", "art. 401")}; ${foreignersLaw.article("400", "art. 400")} забороняє postanowienie при небезпеці для життя/здоров’я або стані, що дає підстави припускати пережите насильство. Строки й продовження містить ${foreignersLaw.article("403", "art. 403")}, причому перебування має бути можливо найкоротшим. За ${foreignersLaw.article("406", "art. 406")} звільнення можливе z urzędu або na wniosek у названих випадках. Важлива межа ust. 1a: під час розгляду wniosku оцінка альтернатив прямо стосується wniosku o zwolnienie зі strzeżony ośrodek, не з areszt; натомість перед звільненням z urzędu у випадках ust. 1 pkt 2, 3 і 6 формула охоплює обидва місця.`,
      ],
      evidence: [
        "Протокол zatrzymania, wniosek Straży Granicznej та всі судові й адміністративні postanowienia.",
        "Медична й психологічна документація, сімейні обставини та докази можливості альтернатив.",
        "Хронологія кожного строку umieszczenia, продовження, doręczenia й zażalenia.",
      ],
      warning:
        "Decyzja o powrocie не робить detencja автоматично законною: кожна форма позбавлення волі має власні підстави, пропорційність, строк і контроль.",
    },
    {
      id: "transitional-rules",
      title: "Перехід до закону 2013 року, не універсальний календар",
      paragraphs: [
        foreignersLaw.text`${foreignersLaw.articleRange("507", "522", { start: "Art. 507" })} регулюють перехід при набранні чинності цією ustawą 1 травня 2014 року. Вони перетворили старі zezwolenie na zamieszkanie na czas oznaczony та zezwolenie na osiedlenie, старі tolerowany/humanitarny й рішення про opuszczenie або wydalenie, зберегли окремі документи, визначили зарахування старих періодів і правила для незавершених на той день проваджень. ${foreignersLaw.article("513", "Art. 513")} зберіг dotychczasowe przepisy для названих справ, розпочатих до набрання чинності й не завершених ostateczną decyzją; ${foreignersLaw.article("522", "art. 522")} називає дату 1 травня 2014 року та вузькі винятки.`,
        "Цей блок важливий для історичної хронології, але він не є загальною перехідною нормою для змін 2025 або 2026 року. Для пізнішої зміни треба відкрити конкретну ustawę zmieniającą, її przepisy przejściowe, дату ogłoszenia й wejścia w życie. Потім співвіднести їх із датою заяви, рішення, kontroli, powrót або detention.",
      ],
      warning: foreignersLaw.text`Не застосовуй сьогоднішній текст до старої події лише тому, що справа триває зараз; і не застосовуй ${foreignersLaw.article("513", "Art. 513")} до сучасної справи лише через слово „przejściowe”.`,
    },
    {
      id: "worked-example",
      title:
        "Анонімізований приклад: відмова, строк виїзду й наступний alert SIS",
      paragraphs: [
        foreignersLaw.text`Особа I отримала в липні 2026 року decyzję другої інстанції про odmowa pobyt czasowy. Fakt: рішення доручено 10 липня, іншого чинного документа немає, а провадження powrót раніше не починалося. Спершу за ${foreignersLaw.article("299", "art. 299")} ust. 6–8 перевіряють, чи виник 30-денний obowiązek wyjazdu і чи pobyt у цей період вважається legalny. Якщо особа не виїхала, Straż Graniczna не обмежується календарем: вона встановлює конкретну підставу ${foreignersLaw.article("302", "art. 302")}, перевіряє ${foreignersLaw.article("303", "art. 303")} та інші бар’єри й лише потім видає акт.`,
        foreignersLaw.text`Припустімо, рішення про powrót містить 14-денний dobrowolny wyjazd. За ${foreignersLaw.article("315", "art. 315")} строк рахують від doręczenia; окремо читають zakaz за ${foreignersLaw.article("318", "art. 318")} і pouczenie про оскарження. Розміщення alertu dotyczącego powrotu за ${foreignersLaw.article("347a", "art. 347a")} є наступною системною дією, яку при odwołanie або іншій події можуть оновити чи видалити за подальшими статтями. ${foreignersLaw.articleRange("507", "522", { start: "Art. 507" })} тут не вирішують застосовну редакцію, бо справа не перетинає 1 травня 2014 року; треба перевірити перехідні правила саме релевантних змін 2025–2026 років.`,
      ],
      warning:
        "Приклад спрощений: інший status, wcześniejsze postępowanie powrotowe, ochrona, detention або спеціальна норма можуть змінити кожну ланку.",
    },
  ],
  exercise: foreignersLaw.text`Побудуй анонімну chronologia: Fakt → Pojęcie prawne → редакція й Przepis → Dowód → Czynność i termin → Skutek → Środek zaskarżenia. Окремими рядками покажи ${foreignersLaw.article("299", "Art. 299")}, підставу ${foreignersLaw.article("302", "Art. 302")}, перевірку ${foreignersLaw.article("303", "Art. 303")}, зміст рішення, SIS, виконання/detention і релевантну перехідну норму.`,
}

export const returnAndDateSensitiveAnalysisLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:return-and-date-sensitive-analysis",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "return-and-date-sensitive-analysis",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "return-and-detention-basis",
        kind: "statute-text",
        text: foreignersLaw.text`${foreignersLaw.articleRange("294", "406", { start: "art. 294" })}`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "return, SIS, humanitarian status and detention",
          },
        ],
      },
      {
        id: "historical-transition-basis",
        kind: "statute-text",
        text: foreignersLaw.text`${foreignersLaw.articleRange("507", "522", { start: "art. 507" })}`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "entry into force and historical transitional provisions",
          },
        ],
      },
    ],
    relationships: [
      {
        kind: "prerequisite",
        target: {
          family: "learning-module",
          reference: {
            kind: "learning-module",
            documentId: "ustawa-o-cudzoziemcach",
            moduleId: "refusal-withdrawal-expiry-remedies",
          },
        },
      },
      {
        kind: "related",
        target: {
          family: "learning-module",
          reference: {
            kind: "learning-module",
            documentId: "kpa",
            moduleId: "time-service",
          },
        },
      },
      {
        kind: "related",
        target: {
          family: "learning-module",
          reference: {
            kind: "learning-module",
            documentId: "ppsa",
            moduleId: "review-and-suspension",
          },
        },
      },
    ],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: moduleContent,
  })

export default returnAndDateSensitiveAnalysisLearningModuleTopic
