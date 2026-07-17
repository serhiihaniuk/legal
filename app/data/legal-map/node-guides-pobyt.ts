import {
  createLegalTextAuthor,
  defineLegalTextContent,
} from "~/data/legal-library/legal-text"
import type { LegalNodeGuideMap } from "~/data/legal-map/node-guide-types"

const _kpaLaw = createLegalTextAuthor("kpa")
const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const _workLaw = createLegalTextAuthor("powierzanie-pracy")
const _ppsaLaw = createLegalTextAuthor("ppsa")
const residenceLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
const _WORK_REGULATION_URL = "https://eli.gov.pl/eli/DU/2025/1629/ogl"
const UKRAINE_SPECIAL_ACT_URL =
  "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf"
const FOREIGNERS_2026_CHANGE_URL = "https://eli.gov.pl/eli/DU/2026/203/ogl"

export const legalNodeGuidesPobyt = defineLegalTextContent(
  {
    "person-status": {
      introduction: [
        "Status cudzoziemca визначає, який правовий режим застосовується до в’їзду, перебування, праці та документів. Громадянство саме по собі не завжди дає повну відповідь, бо значення мають також сімейний зв’язок і спеціальний захисний статус.",
      ],
      regulated: [
        "Окремі режими охоплюють громадян UE/EOG/Szwajcarii та членів їхніх сімей, громадян третіх держав, beneficjentów ochrony międzynarodowej або czasowej та інші спеціальні категорії.",
      ],
      appliesWhen: [
        "Класифікація проводиться до вибору дозволу, оцінки права до праці й підготовки переліку документів.",
      ],
      conditions: [
        "Статус підтверджується документом подорожі, реєстровими даними, документом pobytowym, рішенням або документами сімейного зв’язку.",
      ],
      exceptions: [
        "Одна особа може одночасно відповідати кільком описам, але наслідки застосовуються лише за виконання умов конкретного режиму.",
      ],
      consequences: [
        "Від статусу залежать właściwy formularz, materialne przesłanki, доступ до праці, можливість подання під час ochrony czasowej та обсяг прав після рішення.",
      ],
      procedure: [
        "У справі фіксуються документ, правова підстава статусу, дата його виникнення, строк або умови збереження та події, що можуть його припинити.",
      ],
      foreignersContext: [
        "Для громадянина України окремо встановлюється, чи діє status UKR, чи вже надано CUKR або звичайний дозвіл, оскільки ці режими не є взаємозамінними.",
      ],
    },
    "goal-of-stay": {
      introduction: [
        "Cel pobytu — це фактична головна причина перебування, яку закон визнає підставою конкретного zezwolenia. Назва договору, заяви або бажаний напис на карті не визначають мету без реальних обставин.",
      ],
      regulated: [
        "Ustawa o cudzoziemcach розділяє тимчасові дозволи за роботою, високими кваліфікаціями, бізнесом, навчанням, дослідженнями, сім’єю та іншими обставинами.",
      ],
      appliesWhen: [
        "Вибір робиться, коли обставина обґрунтовує перебування понад три місяці й відповідає окремій матеріальній підставі.",
      ],
      conditions: [
        "Мета має бути реальною на дату рішення, а докази повинні підтверджувати як саму діяльність або зв’язок, так і спеціальні додаткові умови.",
      ],
      exceptions: [
        "Кілька одночасних життєвих обставин не створюють автоматичної суми дозволів; кожна підстава оцінюється окремо, а сторона формулює конкретне żądanie.",
      ],
      consequences: [
        "Обрана мета визначає строк і зміст дозволу, право до праці, підстави cofnięcia та обов’язки після зміни обставин.",
      ],
      procedure: [
        "Порівнюються факти, позитивні умови, odmowa wszczęcia, odmowa, документи та наслідки кожної реально доступної підстави.",
      ],
      foreignersContext: [
        foreignersLaw.text`Umowa o pracę може бути головною метою для ${foreignersLaw.external("art. 114", UKRAINE_SPECIAL_ACT_URL)}, але не є умовою CUKR; сімейний або навчальний дозвіл може окремо впливати на доступ до праці.`,
      ],
    },
    "two-keys": {
      introduction: [
        "Legalny pobyt і legalna praca — два окремі правові ключі. Особа повинна мати чинну підставу перебування та окрему підставу виконувати саме цю роботу на заявлених умовах.",
      ],
      regulated: [
        "Ustawa o cudzoziemcach регулює pobyt, а ustawa o warunkach dopuszczalności powierzania pracy cudzoziemcom і спеціальні акти — доступ до праці та обов’язки роботодавця.",
      ],
      appliesWhen: [
        "Подвійна перевірка потрібна перед початком роботи, після зміни роботодавця або умов, у період очікування на рішення та після втрати статусу.",
      ],
      conditions: [
        "Підстава праці має охоплювати особу, podmiot, вид роботи, період та інші істотні умови або прямо звільняти від дозволу.",
      ],
      exceptions: [
        "Вільний доступ до rynku pracy усуває потребу в zezwoleniu na pracę, але не усуває потребу в законному pobycie; zezwolenie na pracę не легалізує pobytu.",
      ],
      consequences: [
        "Відсутність будь-якого ключа створює ризик нелегального перебування або нелегального доручення/виконання праці та відповідні наслідки для сторін.",
      ],
      procedure: [
        "Для кожного дня роботи фіксуються підстава pobytu, підстава pracy, фактичні умови та документальне підтвердження.",
      ],
      foreignersContext: [
        "Status UKR може одночасно бути підставою pobytu і, разом із належним powiadomieniem, доступу до праці; очікування на звичайний pobyt не завжди створює нове право працювати.",
      ],
    },
    "entry-current-basis": {
      introduction: [
        "Право в’їзду, право залишатися в Польщі та право повторно в’їхати після виїзду є різними питаннями. Поточна підстава визначається за документом, строком, використаними днями та подіями після в’їзду.",
      ],
      regulated: [
        "В’їзд регулюють Schengen Borders Code, правила віз і ustawa o cudzoziemcach; перебування може випливати з wizy, ruchu bezwizowego, zezwolenia, ochrony або спеціальної норми.",
      ],
      appliesWhen: [
        "Аналіз проводиться при кожній новій справі, перед виїздом, після закінчення документа та при переході між статусами.",
      ],
      conditions: [
        "Потрібні чинний документ подорожі, точна підстава, період її дії та відсутність події, що її припинила.",
      ],
      exceptions: [
        "Легальність pobytu під час очікування на decyzję може діяти лише в Польщі й не є самостійним документом для повторного в’їзду.",
      ],
      consequences: [
        "Неправильний розрахунок строку змінює допустимість заяви, ризик odmowy wszczęcia та можливість законного повернення після подорожі.",
      ],
      procedure: [
        "Будується хронологія в’їздів і виїздів, перевіряються wiza/karta/decyzja, а потім окремо оцінюються pobyt, praca і powrót.",
      ],
      foreignersContext: [
        "Для osoby з UKR виїзд і реєстровий status оцінюються за спеціальними правилами, а після CUKR — за правилами zezwolenia na pobyt czasowy та документа podroży.",
      ],
    },
    visa: {
      introduction: [
        "Wiza є дозволом на в’їзд і перебування в указаних межах, а не універсальним дозволом на працю. Wiza Schengen C і wiza krajowa D мають різний територіальний та часовий режим.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("58", "97", { start: "Art. 58", end: "97" })} ustawy o cudzoziemcach регулюють польські візи, їх цілі, видачу, przedłużenie, unieważnienie та cofnięcie; правила Schengen доповнюють режим wizy C.`,
      ],
      appliesWhen: [
        "Режим застосовується відповідно до типу, celu wydania, строку, кількості в’їздів і використаних днів.",
      ],
      conditions: [
        "Чинність оцінюється за наклейкою, документом подорожі, територією, датами «od–do» та допустимою кількістю днів pobytu.",
      ],
      exceptions: [
        "Окремі цілі візи або спеціальний статус можуть давати інші наслідки для праці; їх не можна виводити лише з літери C або D.",
      ],
      consequences: [
        "Закінчення строку або використання допустимих днів припиняє цю підставу pobytu, якщо до того не виникла інша.",
      ],
      procedure: [
        "Перед дією зчитуються всі поля wizy, перевіряються штампи й дні, а право до праці встановлюється окремо.",
      ],
      foreignersContext: [
        "Подання заяви pobytowej не продовжує самої wizy; воно може створити окрему легальність pobytu в Польщі за умовами спеціальної норми.",
      ],
    },
    "visa-free": {
      introduction: [
        "Ruch bezwizowy дозволяє короткий pobyt без wizy, але не є видом zezwolenia na pobyt і не визначає сам по собі права до праці.",
      ],
      regulated: [
        "Основне обмеження становить 90 днів у кожному рухомому 180-денному періоді в Schengen, разом з умовами в’їзду за Schengen Borders Code.",
      ],
      appliesWhen: [
        "Режим діє для громадян держав, звільнених від візового обов’язку, за наявності чинного біометричного документа та виконання умов в’їзду.",
      ],
      conditions: [
        "Кожен день присутності в Schengen входить до розрахунку, а вікно 180 днів пересувається разом із датою перевірки.",
      ],
      exceptions: [
        "Періоди на підставі певних національних дозволів або wizy D оцінюються за окремими правилами й не замінюють точного календарного розрахунку.",
      ],
      consequences: [
        "Перевищення допустимого строку створює нелегальний pobyt, якщо не виникла інша законна підстава.",
      ],
      procedure: [
        "Розрахунок робиться за всіма в’їздами й виїздами в Schengen, після чого окремо перевіряються praca і можливість повторного в’їзду.",
      ],
      foreignersContext: [
        "Для громадянина України aktywny status UKR може бути окремою підставою легальності в Польщі; його не слід змішувати з лімітом ruchu bezwizowego.",
      ],
    },
    "mos-procedure": {
      introduction: [
        "Від 27.04.2026 заяви про pobyt czasowy, pobyt stały та rezydenta długoterminowego UE подаються електронно через MOS. Електронна форма стала елементом skutecznego wniesienia заяви.",
      ],
      regulated: [
        "Zmiana ustawy o cudzoziemcach Dz.U. 2025 poz. 1794, відповідні норми ustawy o cudzoziemcach і rozporządzenia 2026 визначають електронну заяву, додатки, підпис і наступні особисті дії.",
      ],
      appliesWhen: [
        "Новий порядок застосовується до заяв, поданих від 27.04.2026; справи, що належно надійшли раніше, продовжуються за перехідними правилами.",
      ],
      conditions: [
        "Заявник входить особисто через login.gov.pl, заповнює właściwy formularz, додає цифрові документи, підписує допустимим електронним підписом і отримує UPO.",
      ],
      exceptions: [
        "Za małoletniego або особу без повної zdolności діє właściwy przedstawiciel ustawowy; повірений не підписує заяву замість повністю дієздатного cudzoziemca.",
      ],
      consequences: [
        "Надсилання створює електронний слід, але не усуває braków, не доводить матеріальних умов і не замінює пред’явлення паспорта, відбитків або wzoru podpisu, якщо вони потрібні.",
      ],
      procedure: [
        "Після wysłania зберігаються PDF, XML і UPO; далі виконується wezwanie organu та доповнюються докази в elektronicznych aktach sprawy.",
      ],
      foreignersContext: [
        "Для CUKR діє окремий formularz MOS від 04.05.2026; звичайна заява і CUKR мають різні умови й наслідки.",
      ],
    },
    "pending-stay": {
      introduction: [
        "Skutecznie rozpoczęte postępowanie може зберігати legalność pobytu в Польщі до остаточного завершення, але це окремий режим очікування, а не новий zezwolenie або karta.",
      ],
      regulated: [
        foreignersLaw.text`Для pobytu czasowego діє ${foreignersLaw.article("108", "art. 108")}, для pobytu stałego — ${foreignersLaw.article("206", "art. 206")}, для rezydenta UE — ${foreignersLaw.external("art. 222a", FOREIGNERS_2026_CHANGE_URL)} ustawy o cudzoziemcach.`,
      ],
      appliesWhen: [
        "Заява подана під час legalnego pobytu та не мала braków formalnych або вони усунуті в строк.",
      ],
      conditions: [
        "Легальність триває в межах, установлених відповідною статтею, до дня, коли decyzja стає ostateczna, якщо справа не закінчилася іншим передбаченим способом.",
      ],
      exceptions: [
        "Цей режим не є документом для перетину кордону й не створює автоматичного права повернення; право до праці залежить від окремої норми та попереднього статусу.",
      ],
      consequences: [
        "Виїзд може унеможливити повернення без іншого документа, а залишення заяви без розгляду або неусунення формальних недоліків може позбавити режиму очікування.",
      ],
      procedure: [
        "Перевіряються дата подання, попередня легальність, UPO, виконання formalnych wezwań, стан справи та окрема підстава pracy.",
      ],
      foreignersContext: [
        "Для osoby з UKR звичайна справа не завжди є єдиною підставою pobytu, бо до надання дозволу може діяти status UKR; CUKR має спеціальний момент виникнення при odbiorze karty.",
      ],
    },
    "ukraine-routes-2026": {
      introduction: [
        foreignersLaw.text`У 2026 році osoba зі status UKR може залишатися в режимі ochrony czasowej, перейти на спеціальний CUKR або, у межах дозволених ${foreignersLaw.external("art. 45", UKRAINE_SPECIAL_ACT_URL)} ustawy z 23.01.2026 категорій, подати звичайну заяву pobytową.`,
      ],
      regulated: [
        foreignersLaw.text`Маршрути визначають specustawa ukraińska, ustawa Dz.U. 2026 poz. 203, ${foreignersLaw.external("art. 42c", UKRAINE_SPECIAL_ACT_URL)}–${foreignersLaw.external("42u", UKRAINE_SPECIAL_ACT_URL)} та загальні норми ustawy o cudzoziemcach.`,
      ],
      appliesWhen: [
        "Розвилка стосується beneficjenta ochrony czasowej з PESEL UKR, який планує статус після поточного режиму або вже має іншу справу.",
      ],
      conditions: [
        "Кожен маршрут має власні умови: для UKR — збереження statusu; для CUKR — чотири спеціальні реєстрові умови; для звичайного pobytu — повні матеріальні умови обраного дозволу.",
      ],
      exceptions: [
        "Umowa o pracę не є умовою CUKR і не змушує подавати звичайний pobyt; доступність звичайної заяви під час ochrony czasowej існує лише у визначених законом категоріях.",
      ],
      consequences: [
        "Маршрут змінює момент виникнення zezwolenia, обсяг прав, долю UKR, доступ до świadczeń, правила pracy та наслідки незавершених справ.",
      ],
      procedure: [
        "Перед поданням порівнюються поточний status, історія UKR, відкриті справи, строки, матеріальні умови та момент переходу для кожного режиму.",
      ],
      foreignersContext: [
        "Станом на 14.07.2026 офіційна інформація вказує на ochronę czasową до 04.03.2027, а заяву CUKR можна подати через MOS до цієї самої дати.",
      ],
    },
    "ukr-baseline-2026": {
      introduction: [
        "Збереження status UKR є самостійним законним маршрутом і не вимагає отримання карти лише через наявність роботи.",
      ],
      regulated: [
        "Specustawa ukraińska та ustawa Dz.U. 2026 poz. 203 визначають legalność pobytu, реєстровий status UKR і перехідні права beneficjentów ochrony czasowej.",
      ],
      appliesWhen: [
        "Режим діє, поки особа належить до охопленої групи, має aktywny status UKR і не настала подія його припинення.",
      ],
      conditions: [
        "Дані в PESEL повинні бути актуальними, а праця легалізується окремо відповідно до спеціальних правил, зокрема через належне powiadomienie роботодавця.",
      ],
      exceptions: [
        "Тривалий виїзд, отримання іншого статусу або інша визначена законом подія може припинити UKR; номер PESEL без активної ознаки UKR не дає цього режиму.",
      ],
      consequences: [
        "Особа зберігає права ochrony czasowej до законного припинення режиму; отримання CUKR або звичайного дозволу змінює правову підставу й пов’язані права.",
      ],
      procedure: [
        "Перевіряються aktualny zapis PESEL, історія statusu, виїзди, dokument podróży та виконання роботодавцем obowiązków pracy.",
      ],
      foreignersContext: [
        "Офіційна інформація UdSC станом на 14.07.2026 визначає поточний горизонт statusu UKR до 04.03.2027.",
      ],
    },
    "cukr-route-2026": {
      introduction: [
        "CUKR — спеціальний трирічний pobyt czasowy для визначених осіб, які переходять із ochrony czasowej. Він не залежить від працевлаштування й виникає в момент особистого отримання карти.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.external("Art. 42c", UKRAINE_SPECIAL_ACT_URL)}–${foreignersLaw.external("42u", UKRAINE_SPECIAL_ACT_URL)} specustawy ukraińskiej регулюють адресатів, умови, MOS, opłaty, wydanie karty, наслідки та обов’язки після видачі.`,
      ],
      appliesWhen: [
        "Заяви приймаються виключно через MOS від 04.05.2026 до 04.03.2027.",
      ],
      conditions: [
        "Для основної групи одночасно потрібні aktywny PESEL UKR при поданні, aktywny PESEL UKR 04.06.2025, щонайменше 365 днів безперервного UKR та aktywny UKR у день видачі карти.",
      ],
      exceptions: [
        "Для дитини, народженої в Польщі після 23.02.2022, діє спеціальна конструкція, пов’язана зі status UKR дитини та картою CUKR матері; її не оцінюють за загальними чотирма умовами без урахування цієї норми.",
      ],
      consequences: [
        "При odbiorze status UKR змінюється на CUKR, виникає трирічне zezwolenie й повний доступ до rynku pracy; неотримання карти протягом 60 днів від повідомлення означає, що дозвіл не виникне, а карта буде unieważniona.",
      ],
      procedure: [
        "Особа входить до MOS через login.gov.pl, додає цифрове фото та окремі підтвердження opłat 340 і 100 zł, підписує заяву, зберігає UPO і особисто отримує готову карту.",
      ],
      foreignersContext: [
        "Після CUKR зміну місця pobytu повідомляють wojewodzie протягом 15 робочих днів; виїзд із Польщі понад 6 місяців веде до втрати дозволу.",
      ],
    },
    "ukraine-ordinary-2026": {
      introduction: [
        foreignersLaw.text`${foreignersLaw.external("Art. 45", FOREIGNERS_2026_CHANGE_URL)} ustawy Dz.U. 2026 poz. 203 дозволяє визначеним beneficjentom ochrony czasowej подати окремі звичайні заяви pobytowe, незважаючи на загальне обмеження для ochrony czasowej.`,
      ],
      regulated: [
        "Виняток відкриває доступ до перелічених процедур, але їх повні матеріальні умови, відмови та наслідки залишаються в ustawie o cudzoziemcach.",
      ],
      appliesWhen: [
        foreignersLaw.text`Маршрут діє лише для категорії заяви, прямо охопленої ${foreignersLaw.external("art. 45", FOREIGNERS_2026_CHANGE_URL)}, зокрема відповідних трудових або бізнесових підстав.`,
      ],
      conditions: [
        foreignersLaw.text`Заява подається через MOS і доводить кожну умову обраного дозволу; для pobyt czasowy i pracę значення мають ${foreignersLaw.articleRange("114", "126", { start: "art. 114", end: "126" })} та фактичні умови праці.`,
      ],
      exceptions: [
        "Спеціальний доступ до процедури не є звільненням від materialnych przesłanek і не перетворює umowy o pracę на автоматичний дозвіл.",
      ],
      consequences: [
        "Status UKR зберігається до надання звичайного дозволу, після чого підставою стає decyzja; зміст дозволу й обов’язки залежать від конкретної процедури.",
      ],
      procedure: [
        "Обирається дозволена категорія, готується електронна заява та додатки, виконується postępowanie dowodowe, а результат виникає за правилами звичайної decyzji.",
      ],
      foreignersContext: [
        "Цей маршрут відрізняється від CUKR доказуванням мети, змістом decyzji та моментом переходу зі status UKR.",
      ],
    },
    "temporary-common": {
      introduction: [
        "Pobyt czasowy є строковим дозволом, пов’язаним із конкретною метою перебування понад три місяці. Спільні норми діють разом зі спеціальною главою обраної мети.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("98", "113a", { start: "Art. 98", end: "113a" })} ustawy o cudzoziemcach визначають загальну конструкцію, заяву, odmowę wszczęcia, odmowę, cofnięcie, właściwość та наслідки.`,
      ],
      appliesWhen: [
        "Дозвіл застосовується, коли законна мета потребує перебування довше трьох місяців і підпадає під конкретну матеріальну підставу.",
      ],
      conditions: [
        "Мета та її спеціальні умови повинні існувати на дату рішення, а строк дозволу має відповідати заявленому періоду в законних межах.",
      ],
      exceptions: [
        "Окремі короткотривалі, гуманітарні, mobilnościowe або спеціальні режими мають власні строки й відступи від загальної конструкції.",
      ],
      consequences: [
        "Дозвіл легалізує pobyt у визначеній меті; припинення підстави може створити обов’язок повідомлення, зміну або cofnięcie.",
      ],
      procedure: [
        "Від 27.04.2026 заява подається через MOS, після чого organ перевіряє formalne та materialne przesłanki і видає decyzję.",
      ],
      foreignersContext: [
        "Karta pobytu документує дозвіл, але правовий зміст звичайного pobytu випливає з decyzji та статті, на якій її засновано.",
      ],
    },
    "temporary-goals": {
      introduction: [
        "Цілі pobytu czasowego утворюють окремі правові маршрути, а не рівні одного списку. Кожен маршрут має власного адресата, умови, строк, відмови й наслідки зміни обставин.",
      ],
      regulated: [
        "Розділи 2–11 działu V ustawy o cudzoziemcach охоплюють працю, Blue Card, бізнес, навчання, дослідження, сім’ю та інші обставини.",
      ],
      appliesWhen: [
        "Маршрут обирається за домінуючою фактичною метою та żądaniem заявника.",
      ],
      conditions: [
        "Порівняння охоплює спеціальні przesłanki, доступ до праці, потрібні ресурси, строки, документи та stabilność підстави.",
      ],
      exceptions: [
        "Одна й та сама обставина може мати різне значення в різних маршрутах; наприклад дохід може бути метою праці або лише засобом утримання в сімейній справі.",
      ],
      consequences: [
        "Вибір визначає treść decyzji, тривалість, zakres dostępu do pracy та обов’язки при зміні фактичної ситуації.",
      ],
      procedure: [
        "Спочатку відсіюються недоступні підстави, потім повністю аналізуються реально відповідні глави й докази.",
      ],
      foreignersContext: [
        "Для osoby зі status UKR додатково перевіряється, чи закон у 2026 році дозволяє подати саме цю звичайну категорію під час ochrony czasowej.",
      ],
    },
    "stay-work": {
      introduction: [
        "Pobyt czasowy i praca поєднує мету перебування з виконанням праці, але залишається zezwoleniem pobytowym, за яким заявником і стороною є cudzoziemiec.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("114", "126", { start: "Art. 114", end: "126" })} регулюють позитивні умови, odmowę wszczęcia, odmowę, treść zezwolenia, зміну, втрату роботи та обов’язки.`,
      ],
      appliesWhen: [
        "Праця має бути реальною метою pobytu понад три місяці, а ситуація не повинна належати до іншої спеціальної процедури або виключення.",
      ],
      conditions: [
        foreignersLaw.text`Organ перевіряє, зокрема, umowę/${residenceLaw.annex("1", "Załącznik nr 1")}, винагороду, страхування за ${foreignersLaw.article("114", "art. 114")} ust. 1 pkt 1, реальність podmiotu та відповідність фактичної організації праці заявленій моделі.`,
      ],
      exceptions: [
        foreignersLaw.text`Для osoby zwolnionej z obowiązku posiadania zezwolenia na pracę treść decyzji за ${foreignersLaw.article("118", "art. 118")} може не містити всіх умов прив’язки; вирішальним є конкретне rozstrzygnięcie.`,
      ],
      consequences: [
        "Позитивна decyzja надає pobyt на визначений строк і встановлює межі праці; втрата або зміна роботи може активувати повідомлення, зміну дозволу або нову заяву.",
      ],
      procedure: [
        "Заявник подає MOS, роботодавець електронно підписує właściwy załącznik, organ проводить formalne і dowodowe postępowanie та формулює decyzję.",
      ],
      foreignersContext: [
        foreignersLaw.text`Для osoby з UKR у 2026 році доступ до цієї процедури може випливати з ${foreignersLaw.external("art. 45", UKRAINE_SPECIAL_ACT_URL)} ustawy Dz.U. 2026 poz. 203, але status UKR і powiadomienie pozostają окремими питаннями до надання дозволу.`,
      ],
    },
    "blue-card": {
      introduction: [
        "Niebieska Karta UE є pobytem czasowym для роботи, що вимагає високих кваліфікацій, із спеціальними правилами строку, mobilności та зміни праці.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("127", "138", { start: "Art. 127", end: "138" })} ustawy o cudzoziemcach після змін 2025–2026 визначають кваліфікації, umowę, мінімальний строк праці, wynagrodzenie, odmowy та mobilność w UE.`,
      ],
      appliesWhen: [
        "Робота повинна належати до zawodu wymagającego wysokich kwalifikacji, а заявник має довести kwalifikacje та законну umowę або wiążącą ofertę на потрібний період.",
      ],
      conditions: [
        "Винагорода повинна досягати актуального законного порогу, а строк і характер договору — відповідати спеціальній нормі; dokuments кваліфікації оцінюються за видом професії.",
      ],
      exceptions: [
        "Окремі regulowane zawody потребують формального визнання права виконувати професію; mobilność posiadacza Blue Card з іншої держави має власну процедуру.",
      ],
      consequences: [
        "Дозвіл документується kartą з adnotacją «Niebieska Karta UE» та дає спеціальні права mobilności й полегшення, але зміна обставин підлягає правилам цієї глави.",
      ],
      procedure: [
        "Заява і спеціальні załączniki подаються електронно через MOS, organ перевіряє роботодавця, умови, kwalifikacje та treść майбутнього zezwolenia.",
      ],
      foreignersContext: [
        "Blue Card може впливати на обчислення п’ятирічного періоду rezydenta UE та допустимі перерви, але ці переваги застосовуються лише за виконання спеціальних умов.",
      ],
    },
    "business-stay": {
      introduction: [
        "Pobyt czasowy w celu prowadzenia działalności gospodarczej спирається на реальну господарську діяльність, а не лише на реєстрацію firmy або володіння udziałami.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("142", "143", { start: "Art. 142", end: "143" })} визначають адресатів, економічні показники, zatrudnienie або здатність виконати ці умови в майбутньому та підстави odmowy.`,
      ],
      appliesWhen: [
        "Метою pobytu є prowadzenie działalności, управління визначеною spółką, ведення її справ як komplementariusz або дія як prokurent у передбачених законом випадках.",
      ],
      conditions: [
        "Доводяться реальна діяльність, дохід або потрібне zatrudnienie, або ресурси й дії, що дозволять досягти законних показників, зокрема інвестиції, інновації чи створення місць праці.",
      ],
      exceptions: [
        "Різні форми діяльності та функції в spółce змінюють набір dokumentów і можуть вимагати додаткового załącznika щодо праці.",
      ],
      consequences: [
        "Позитивний дозвіл легалізує pobyt у бізнесовій меті; фіктивна, zawieszona або економічно непідтверджена діяльність може вести до відмови чи cofnięcia.",
      ],
      procedure: [
        foreignersLaw.text`Через MOS подаються заява, реєстрові, фінансові, податкові, трудові та планові докази, після чого organ оцінює виконання альтернативних умов ${foreignersLaw.article("142", "art. 142")}.`,
      ],
      foreignersContext: [
        foreignersLaw.text`Для beneficjenta UKR доступність звичайної бізнесової процедури у 2026 році перевіряється через ${foreignersLaw.external("art. 45", FOREIGNERS_2026_CHANGE_URL)} ustawy Dz.U. 2026 poz. 203.`,
      ],
    },
    "study-research": {
      introduction: [
        "Studia, badania naukowe, staż і mobilność мають окремі підстави, бо закон оцінює не лише присутність у закладі, а статус установи, програму та реальну мету.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("144", "157f", { start: "Art. 144", end: "157f" })} охоплюють studia, mobilność studenta, badania naukowe, mobilność naukowca, staż та пов’язані процедури.`,
      ],
      appliesWhen: [
        "Підстава відповідає фактичній формі навчання, дослідження або стажу та належній установі.",
      ],
      conditions: [
        "Зазвичай потрібні прийняття або umowa з установою, оплата навчання за наявності, страхування та достатні засоби на утримання і powrót; спеціальні умови залежать від маршруту.",
      ],
      exceptions: [
        "Studia stacjonarne, інші форми навчання, badania і staż не є взаємозамінними; кожна категорія має власні правила праці та odmowy.",
      ],
      consequences: [
        "Дозвіл прив’язаний до освітньої або наукової мети; припинення навчання чи співпраці може активувати повідомлення або cofnięcie.",
      ],
      procedure: [
        "Через MOS подаються заява та документи установи, фінансування, страхування й проживання; organ перевіряє статус установи та реальність мети.",
      ],
      foreignersContext: [
        "Періоди studiów можуть зараховуватися до rezydenta UE частково, а доступ до праці визначається конкретною навчальною підставою та чинними правилами праці.",
      ],
    },
    "family-stay": {
      introduction: [
        "Rodzinny pobyt ґрунтується на конкретному сімейному зв’язку та правовому статусі особи, з якою następuje połączenie. Саме проживання разом не замінює категорії, визначеної законом.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("158", "169", { start: "Art. 158", end: "169" })} охоплюють małżonków, małoletnie dzieci, połączenie z cudzoziemcem або громадянином Польщі та інші сімейні ситуації.`,
      ],
      appliesWhen: [
        "Заявник належить до визначеної категорії, а сімейний зв’язок існує й має юридичне та фактичне підтвердження.",
      ],
      conditions: [
        "Залежно від підстави перевіряються akt stanu cywilnego, status sponsora, ubezpieczenie, dochód, mieszkanie та реальність więzi rodzinnej.",
      ],
      exceptions: [
        "Małżeństwo zawarte dla obejścia przepisów не створює права; дитина не набуває автоматично дозволу батька і часто потребує власної процедури.",
      ],
      consequences: [
        "Дозвіл легалізує pobyt у сімейній меті та може давати окремий доступ до праці; припинення зв’язку оцінюється за спеціальними нормами й фактичними обставинами.",
      ],
      procedure: [
        "Заява подається через MOS із документами стану cywilnego, статусу члена сім’ї та іншими доказами, після чого organ перевіряє достовірність і materialne przesłanki.",
      ],
      foreignersContext: [
        "Для członka rodziny obywatela UE може діяти інший правовий режим, тому спочатку визначається статус особи, з якою відбувається połączenie.",
      ],
    },
    "other-stay": {
      introduction: [
        "Інші обставини — це не одна залишкова підстава, а група окремих дозволів із самостійними адресатами та наслідками.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("170", "194", { start: "Art. 170", end: "194" })} охоплюють, серед іншого, ofiary handlu ludźmi, okoliczności wymagające krótkotrwałego pobytu, pracę sezonową, absolwentów та інші визначені ситуації.`,
      ],
      appliesWhen: [
        "Застосовується лише конкретна стаття, фактичний склад якої повністю відповідає ситуації особи.",
      ],
      conditions: [
        "Кожна підстава має власний документальний факт: співпрацю з organem, особисту явку, сезонну роботу, завершення studiów або іншу прямо названу обставину.",
      ],
      exceptions: [
        foreignersLaw.text`Короткотривалий pobyt за ${foreignersLaw.article("181", "art. 181")} надається на необхідний строк до шести місяців і не повинен використовуватися як загальна заміна звичайної легалізації.`,
      ],
      consequences: [
        "Строк, доступ до праці, можливість продовження та зарахування до rezydenta UE різняться залежно від конкретної статті.",
      ],
      procedure: [
        "Перед поданням визначається точний artykuł, після чого через MOS подаються докази саме його фактичного складу.",
      ],
      foreignersContext: [
        "Наявність гуманітарної або короткотривалої обставини не означає автоматичної доступності всіх інших pobytowych маршрутів.",
      ],
    },
    "permanent-resident": {
      introduction: [
        "Pobyt stały і rezydent długoterminowy UE є двома різними безстроковими zezwoleniami. Перший залежить від спеціальної категорії особи, другий — переважно від тривалості та якості попереднього pobytu.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("195", "206", { start: "Art. 195", end: "206" })} регулюють pobyt stały, а ${foreignersLaw.article("211", "art. 211")}–${foreignersLaw.external("222a", FOREIGNERS_2026_CHANGE_URL)} — rezydenta długoterminowego UE; спільною є електронна процедура MOS від 27.04.2026.`,
      ],
      appliesWhen: [
        foreignersLaw.text`Pobyt stały застосовується за однією з підстав ${foreignersLaw.article("195", "art. 195")}, rezydent UE — після належного періоду legalnego i nieprzerwanego pobytu та виконання додаткових умов.`,
      ],
      conditions: [
        "Обидва дозволи є безстроковими, але карти мають власний строк ważności та підлягають wymianie; матеріальні умови маршрутів не змішуються.",
      ],
      exceptions: [
        "П’ятирічний pobyt не є загальною умовою pobytu stałego, а родинне походження чи Karta Polaka не замінюють умов rezydenta UE.",
      ],
      consequences: [
        "Дозволи дають стабільну підставу pobytu та широкий доступ до праці, але можуть бути cofnięte за спеціальними підставами.",
      ],
      procedure: [
        "Спочатку обирається один із двох режимів, потім через MOS подається заява з доказами лише його przesłanek.",
      ],
      foreignersContext: [
        foreignersLaw.text`Період CUKR офіційно зараховується до періоду для rezydenta UE, тоді як сам status UKR і періоди інших режимів потребують оцінки за ${foreignersLaw.external("art. 212", UKRAINE_SPECIAL_ACT_URL)}.`,
      ],
    },
    permanent: {
      introduction: [
        foreignersLaw.text`Zezwolenie na pobyt stały надається на czas nieoznaczony особі, яка належить до однієї з точно визначених категорій ${foreignersLaw.article("195", "art. 195")}.`,
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.article("195", "Art. 195")} визначає підстави, а ${foreignersLaw.articleRange("196", "206", { start: "art. 196", end: "206" })} — odmowę wszczęcia, odmowę, cofnięcie, właściwość, заяву та перебування під час процедури.`,
      ],
      appliesWhen: [
        "Підстава може випливати, зокрема, з польського походження, Karty Polaka, сімейного зв’язку або визначеного захисного статусу — лише в законному обсязі конкретного punktu.",
      ],
      conditions: [
        "Заявник доводить усі елементи вибраної категорії, тривалість або безперервність pobytu, якщо вони потрібні, та документи rodzinne або statusowe.",
      ],
      exceptions: [
        foreignersLaw.text`Категорії ${foreignersLaw.article("195", "art. 195")} не можна поєднувати довільно; відсутність однієї умови конкретної підстави не компенсується загальною тривалістю pobytu.`,
      ],
      consequences: [
        "Позитивна decyzja створює безстроковий pobyt, а karta pobytu лише документує його протягом строку ważności документа.",
      ],
      procedure: [
        "Від 27.04.2026 заява подається через MOS; organ перевіряє formalne przesłanki, матеріальну категорію та підстави odmowy/cofnięcia.",
      ],
      foreignersContext: [
        "Для osoby польського походження або posiadacza Karty Polaka значення мають автентичні акти, deklaracje narodowości та інші докази, прямо пов’язані з відповідною підставою.",
      ],
    },
    "long-term-eu": {
      introduction: [
        "Zezwolenie na pobyt rezydenta długoterminowego UE є безстроковим статусом для osoby, яка накопичила належний legalny i nieprzerwany pobyt та стабільно виконує умови інтеграції й утримання.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.article("211", "Art. 211")} визначає основні умови, ${foreignersLaw.article("212", "art. 212")} — спосіб зарахування періодів і допустимі перерви, а ${foreignersLaw.article("213", "art. 213")}–${foreignersLaw.external("222a", FOREIGNERS_2026_CHANGE_URL)} — виключення, процедуру, відмову та cofnięcie.`,
      ],
      appliesWhen: [
        "Загальне правило вимагає щонайменше п’ять років legalnego i nieprzerwanego pobytu безпосередньо перед поданням.",
      ],
      conditions: [
        foreignersLaw.text`Потрібні stabilne i regularne źródło dochodu, ubezpieczenie zdrowotne, підтверджена польська мова та tytuł prawny do lokalu як необхідний додаток; періоди рахуються за ${foreignersLaw.article("212", "art. 212")}, а не лише календарно.`,
      ],
      exceptions: [
        "Окремі періоди не зараховуються або зараховуються наполовину; загалом одноразова відсутність до 6 місяців і сумарно до 10 місяців не перериває п’ятирічний період, а для визначених posiadaczy Blue Card діють ширші межі.",
      ],
      consequences: [
        "Zezwolenie надається безстроково, тоді як karta rezydenta має строк важності та підлягає wymianie; статус може бути втрачений за спеціальними підставами.",
      ],
      procedure: [
        "Заява подається через MOS; organ ретроспективно обчислює кожен період pobytu, доходи за потрібні роки, страхування, мову й tytuł do lokalu.",
      ],
      foreignersContext: [
        foreignersLaw.text`Період studiów зазвичай зараховується наполовину, CUKR за офіційною інформацією — повністю, а періоди ochrony або очікування оцінюються за точним текстом ${foreignersLaw.external("art. 212", UKRAINE_SPECIAL_ACT_URL)}.`,
      ],
    },
  },
  "legal-node-guides-pobyt"
) satisfies LegalNodeGuideMap
