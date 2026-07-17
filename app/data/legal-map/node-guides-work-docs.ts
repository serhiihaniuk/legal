import {
  createLegalTextAuthor,
  defineLegalTextContent,
} from "~/data/legal-library/legal-text"
import type { LegalNodeGuideMap } from "~/data/legal-map/node-guide-types"

const kpaLaw = createLegalTextAuthor("kpa")
const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const workLaw = createLegalTextAuthor("powierzanie-pracy")
const _ppsaLaw = createLegalTextAuthor("ppsa")
const _residenceLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
const WORK_REGULATION_URL = "https://eli.gov.pl/eli/DU/2025/1629/ogl"
const UKRAINE_SPECIAL_ACT_URL =
  "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf"
const _FOREIGNERS_2026_CHANGE_URL = "https://eli.gov.pl/eli/DU/2026/203/ogl"

export const legalNodeGuidesWorkDocs = defineLegalTextContent(
  {
    "work-permit": {
      introduction: [
        "Zezwolenie na pracę cudzoziemca na rzecz polskiego podmiotu є адміністративним рішенням, яке видається на wniosek роботодавця. Стороною цієї справи є виключно podmiot powierzający pracę, а не сам cudzoziemiec.",
        "Рішення не створює загального права працювати будь-де. Воно фіксує конкретні параметри роботи й діє разом із допустимим tytułem pobytowym.",
      ],
      regulated: [
        workLaw.text`${workLaw.article("26", "Art. 26")} визначає właściwość wojewody та випадки, коли звичайний режим не підходить, зокрема для pracy sezonowej.`,
        workLaw.text`${workLaw.article("30", "Art. 30")} встановлює умови договору, порівнюваного й мінімального wynagrodzenia та виміру часу праці; ${workLaw.article("32", "art. 32")} визначає елементи рішення.`,
        workLaw.text`${workLaw.articleRange("13", "14", { start: "Art. 13", end: "14" })} і ${workLaw.article("31", "art. 31")} містять підстави обов'язкової або можливої відмови, включно з реальністю діяльності podmiotu, забороненим направленням до третьої особи, позірністю праці та локальними listami zawodów.`,
      ],
      appliesWhen: [
        "Цей режим застосовується, коли cudzoziemiec має виконувати несезонну роботу за umową з польським podmiotem і не має swobodnego dostępu чи іншої достатньої підстави.",
        "Для pracy tymczasowej заявником залишається agencja pracy tymczasowej, а в рішенні додатково визначається pracodawca użytkownik.",
      ],
      conditions: [
        "Пропоноване wynagrodzenie не може бути нижчим від wynagrodzenia працівників на порівнюваній роботі та від мінімального wynagrodzenia; для неповного часу порівняння здійснюється пропорційно.",
        "Wymiar czasu pracy має бути не менше 1/4 і не більше повного часу, а podmiot повинен мати реальну діяльність та засоби для виконання зобов'язань.",
        "Для pracy tymczasowej agencja повинна діяти законно, мати потрібний wpis, узгодження з pracodawcą użytkownikiem і відобразити його в документах.",
      ],
      exceptions: [
        "Zezwolenie не потрібне, якщо cudzoziemiec має swobodny dostęp або інше звільнення; воно також не замінює zezwolenia na pobyt.",
        workLaw.text`${workLaw.article("33", "Art. 33")} допускає окремі зміни без нового zezwolenia, зокрема деякі зміни часу праці, назви stanowiska без зміни обов'язків та — від 08.07.2026 — перехід з umowy cywilnoprawnej на umowę o pracę або встановлення stosunku pracy рішенням PIP.`,
      ],
      consequences: [
        "Відмова виникає не тільки через параметри роботи, а й через порушення, заборгованості, відсутність реальної діяльності, позірність zatrudnienia або фактичне направлення працівника до третьої особи поза режимом pracy tymczasowej.",
        "Після видачі zezwolenia зміна істотних параметрів поза ustawowym wyjątkiem може вимагати зміни або нового рішення; робота на інших умовах може бути не охоплена документом.",
      ],
      procedure: [
        "Polski podmiot подає електронний wniosek до wojewody, właściwego за його siedzibą або stałym pobytem, разом із документами з rozporządzenia Dz.U. 2025 poz. 1629 та opłatą.",
        workLaw.text`Wojewoda перевіряє формальні дані, умови ${workLaw.article("30", "art. 30")}, підстави відмови ${workLaw.articleRange("13", "14", { start: "art. 13", end: "14" })} і ${workLaw.article("31", "art. 31")} та видає decyzję з елементами ${workLaw.article("32", "art. 32")}.`,
        "Після рішення podmiot оформлює umowę відповідно до zezwolenia, передає її або копію через właściwy system до початку роботи й виконує подальші powiadomienia.",
      ],
      foreignersContext: [
        "Cudzoziemiec повинен отримати від podmiotu рішення, але не є стороною справи o zezwolenie na pracę; odwołanie подає podmiot powierzający.",
        "Для pobytu czasowego i pracy існування zezwolenia na pracę не усуває потреби довести умови відповідного zezwolenia pobytowego та реальність заявленої роботи.",
      ],
    },
    declaration: {
      introduction: [
        "Oświadczenie o powierzeniu pracy cudzoziemcowi — це спрощений електронний режим wpisu do ewidencji, а не приватна заява роботодавця, яка діє сама по собі. Право до праці виникає в межах зареєстрованих умов і разом із допустимим tytułem pobytowym.",
        "Від 01.12.2025 чинний перелік охоплює громадян Вірменії, Білорусі, Молдови та України; для громадян Грузії збережено лише перехідне продовження роботи за oświadczeniami, внесеними до ewidencji раніше.",
      ],
      regulated: [
        workLaw.text`${workLaw.article("61", "Art. 61")} визначає сферу oświadczenia: громадянство з чинного розпорядження, праця в Польщі поза sezonowymi działalnościami, строк до 24 місяців і початок не пізніше 6 місяців від подання.`,
        workLaw.text`${workLaw.articleRange("62", "67", { start: "Art. 62", end: "67" })} регулюють зміст, додатки, opłatę, właściwość starosty, відмову, строки wpisu та електронне оскарження.`,
        workLaw.text`${workLaw.articleRange("68", "71", { start: "Art. 68", end: "71" })} регулюють договір, передання його до системи, повідомлення про початок або непочаток праці, допустимі зміни та окреме продовження легальної роботи.`,
      ],
      appliesWhen: [
        "Oświadczenie застосовується до польського podmiotu та cudzoziemca з одного з чотирьох визначених громадянств, якщо робота не належить до сезонного переліку й не є виконанням функції, delegowaniem або іншою виключеною конструкцією.",
        "Для pracy tymczasowej oświadczenie подає agencja, а документ містить також дані pracodawcy użytkownika.",
      ],
      conditions: [
        "Період роботи в oświadczeniu не перевищує 24 місяців, а заявлена дата початку настає не пізніше 6 місяців від подання.",
        "Wynagrodzenie повинно бути не нижчим від порівнюваного та мінімального; oświadczenie містить stanowisko lub rodzaj pracy, miejsce, umowę, stawkę та час праці.",
        "До oświadczenia додаються документи за Dz.U. 2025 poz. 1629, а podmiot подає правдиві дані й oświadczenia під rygorem odpowiedzialności karnej.",
      ],
      exceptions: [
        "Praca w działalności з сезонного переліку не переходить до oświadczenia; для неї застосовується zezwolenie na pracę sezonową.",
        workLaw.text`Новий wpis не потрібний для змін, перелічених у ${workLaw.article("69", "art. 69")}, зокрема для окремих змін podmiotu, збільшення часу праці до повного, зміни назви stanowiska без зміни обов'язків і переходу на umowę o pracę за змінами чинними від 08.07.2026.`,
      ],
      consequences: [
        workLaw.text`Oświadczenie, яке не відповідає ${workLaw.article("61", "art. 61")}, залишається bez rozpoznania; підстави ${workLaw.article("65", "art. 65")} ведуть до decyzji o odmowie wpisu.`,
        workLaw.text`Powiadomienie, що cudzoziemiec не почне або достроково завершив роботу, у випадках ${workLaw.article("70", "art. 70")} ust. 2 анулює wpis z mocy prawa; невиконання obowiązków може спричинити штраф.`,
      ],
      procedure: [
        "Polski podmiot електронно подає oświadczenie з opłatą та документами до starosty, właściwego за siedzibą або stałym pobytem.",
        "Після wpisu podmiot укладає umowę на відповідних умовах, передає umowę або її копію через właściwy system до початку роботи та видає cudzoziemcowi зареєстроване oświadczenie.",
        "Про фактичний початок повідомляється протягом 7 днів, про непочаток — протягом 14 днів від заявленої дати; дострокове завершення або остаточний непочаток повідомляються окремо.",
      ],
      foreignersContext: [
        workLaw.text`Для громадянина України oświadczenie залишається можливим інструментом, але при ochronie czasowej зазвичай працює окреме powiadomienie ${foreignersLaw.external("art. 5a", UKRAINE_SPECIAL_ACT_URL)}; це два різні правові режими.`,
        "Oświadczenie не продовжує саме по собі legalnego pobytu й не дозволяє працювати після втрати допустимого tytułu pobytowego.",
      ],
    },
    seasonal: {
      introduction: [
        workLaw.text`Praca sezonowa — це спеціальний режим для робіт у działalnościach, прямо перелічених у розпорядженні за ${workLaw.article("45", "art. 45")} ust. 2. Короткий строк або літній період самі по собі не роблять роботу sezonową.`,
        "Від 01.12.2025 чинний перелік Dz.U. 2025 poz. 1654 ґрунтується на PKD 2025 і охоплює визначені види рослинництва, частину сільськогосподарських послуг, туристичне короткострокове розміщення, кемпінги та рухомі placówki gastronomiczne.",
      ],
      regulated: [
        workLaw.text`${workLaw.article("45", "Art. 45")} встановлює умови wydania: польський podmiot, порівнюване wynagrodzenie, робота в установленому PKD та максимум 9 місяців у календарному році.`,
        workLaw.text`${workLaw.articleRange("46", "55", { start: "Art. 46", end: "55" })} регулюють właściwość starosty, заяву, ewidencję wniosków, в'їзд, zgłoszenie się cudzoziemca, видачу й зміст zezwolenia.`,
        workLaw.text`${workLaw.articleRange("56", "60", { start: "Art. 56", end: "60" })} визначають допустимі зміни, przedłużenie, zakwaterowanie, uchylenie та спеціальні наслідки для cudzoziemca.`,
      ],
      appliesWhen: [
        "Режим застосовується, якщо фактична робота виконується в межах конкретної діяльності, зазначеної в чинному załączniku PKD, а не лише якщо роботодавець має такий код у реєстрі.",
        "Він застосовується як до cudzoziemca, який перебуває в Польщі на допустимій підставі, так і до особи, яка в'їжджає на сезонну роботу після wpisu wniosku do ewidencji.",
      ],
      conditions: [
        "Винагорода не може бути нижчою від wynagrodzenia працівників на порівнюваній роботі в тому самому часі праці.",
        "Сумарний сезонний період не перевищує 9 місяців у календарному році; для в'їзду на сезонну роботу обчислення пов'язане з першим в'їздом до Schengen після zaświadczenia o wpisie.",
        "Wniosek містить інформацію про pobyt, zakwaterowanie та płatny urlop, а пакет документів визначає Dz.U. 2025 poz. 1629.",
      ],
      exceptions: [
        workLaw.text`Для громадян Вірменії, Білорусі, Молдови та України ${workLaw.article("53", "art. 53")} і ${workLaw.article("56", "art. 56")} передбачають окремі полегшення, зокрема багаторічний wpis у визначених умовах та коротке доручення іншого виду праці.`,
        workLaw.text`${workLaw.article("56", "Art. 56")} допускає окремі зміни без нового zezwolenia, але праця іншого виду до 30 днів не доступна pracownikowi tymczasowemu й вимагає збереження умов закону.`,
      ],
      consequences: [
        "Використання сезонного режиму поза чинним PKD або понад ліміт часу означає, що zezwolenie не охоплює фактичну роботу.",
        workLaw.text`Неподання zgłoszenia cudzoziemca після в'їзду може призвести до umorzenia postępowania z mocy prawa; uchylenie zezwolenia може створити право cudzoziemca на відшкодування за ${workLaw.article("60", "art. 60")}.`,
      ],
      procedure: [
        "Polski podmiot подає електронний wniosek до właściwego starosty; для cudzoziemca, який має приїхати, starosta спершу вносить wniosek до ewidencji та видає zaświadczenie o wpisie.",
        "Після в'їзду podmiot подає oświadczenie o zgłoszeniu się cudzoziemca do pracy, копію dokumentu podróży і підтвердження дати в'їзду; від цієї дії може початися законна робота до рішення.",
        "Starosta видає zezwolenie із зазначенням часу праці, wynagrodzenia, підстави та строку, а для pracy tymczasowej також pracodawcy użytkownika.",
      ],
      foreignersContext: [
        "Віза сезонного призначення, ruch bezwizowy та zezwolenie sezonowe утворюють пов'язану конструкцію; дата першого в'їзду впливає на доступний дев'ятимісячний період.",
        workLaw.text`Для особи, яка вже легально перебуває в Польщі на іншій підставі, ${workLaw.article("49", "art. 49")} і ${workLaw.article("54", "art. 54")} ust. 3 встановлюють інші правила початку й обчислення дозволеного періоду.`,
      ],
    },
    delegation: {
      introduction: [
        "Delegowanie означає тимчасове направлення до Польщі працівника podmiotu zagranicznego, який зазвичай працює для цього podmiotu поза Польщею. Це не модель найму через польського роботодавця і не саме лише відрядження, назване так у договорі.",
        workLaw.text`${workLaw.article("40", "Art. 40")} розрізняє delegowanie до powiązanego podmiotu, виконання usługi eksportowej та іншу тимчасову мету; кожен варіант має власну właściwość wojewody й документальну основу.`,
      ],
      regulated: [
        workLaw.text`${workLaw.articleRange("40", "44", { start: "Art. 40", end: "44" })} ustawy z 20.03.2025 регулюють види delegowania, умови zezwolenia, зміст рішення та zwolnienia.`,
        "Ustawa z 10.06.2016 o delegowaniu pracowników w ramach świadczenia usług визначає мінімальні польські warunki zatrudnienia, обов'язки informacyjne та контроль PIP.",
        "Rozporządzenie Dz.U. 2025 poz. 1629 вимагає доказів statusu podmiotu zagranicznego, zatrudnienia za granicą, powiązań, umowy o usługę та інших обставин delegowania.",
      ],
      appliesWhen: [
        "Режим застосовується, коли cudzoziemiec залишається працівником podmiotu zagranicznego, реально працює для нього поза Польщею і лише тимчасово направляється до виконання праці в Польщі.",
        "Для usługi eksportowej podmiot zagraniczny тимчасово й оказійно надає послугу в Польщі без ведення тут działalności gospodarczej в розумінні Prawa przedsiębiorców.",
      ],
      conditions: [
        "Праця повинна відповідати мінімальним польським warunkom zatrudnienia, а wynagrodzenie для zezwolenia не може бути нижчим за 70% актуального przeciętnego miesięcznego wynagrodzenia у відповідному województwie.",
        "Podmiot zagraniczny вказує особу в Польщі, яка має документи й представляє його перед wojewodą та контрольними органами.",
        "Фактичний трудовий зв'язок із podmiotem zagranicznym, тимчасовість і конкретна мета delegowania повинні існувати не лише в умові, а й у реальній організації праці.",
      ],
      exceptions: [
        workLaw.text`${workLaw.article("44", "Art. 44")} pkt 1 звільняє від zezwolenia працівника, законно zatrudnionego й зазвичай працюючого в іншій державі EOG, тимчасово направленого цим роботодавцем для świadczenia usług у Польщі.`,
        workLaw.text`${workLaw.article("44", "Art. 44")} передбачає також короткі звільнення до 30 днів для delegowania до powiązanego podmiotu в календарному році та до 30 днів у 180-денному періоді для визначеної іншої мети.`,
      ],
      consequences: [
        "Якщо podmiot zagraniczny не є реальним роботодавцем або робота не має тимчасового характеру, орган може відмовити у zezwoleniu або контроль може встановити іншу фактичну модель.",
        "Порушення польських warunków zatrudnienia, повідомлень PIP або умов zezwolenia створює відповідальність незалежно від того, яке право обрано в закордонній umowie.",
      ],
      procedure: [
        "Podmiot zagraniczny подає електронний wniosek про zezwolenie до wojewody, визначеного за місцем podmiotu powiązanego, odbiorcy usługi або головним місцем праці.",
        workLaw.text`До заяви додаються реєстровий документ podmiotu, паспорт, докази zatrudnienia і роботи поза Польщею, документи powiązań або umowa usługi та докази умов ${workLaw.article("41", "art. 41")}.`,
        "Окремо виконуються обов'язки за ustawą o delegowaniu pracowników, включно з повідомленням PIP і наявністю документів для контролю.",
      ],
      foreignersContext: [
        "Cudzoziemiec зберігає трудовий зв'язок із закордонним роботодавцем, але під час роботи в Польщі користується визначеним ядром польських warunków zatrudnienia.",
        workLaw.text`Документи powiązania spółek підтверджують лише один можливий маршрут ${workLaw.article("40", "art. 40")} ust. 1 pkt 1; вони не замінюють доказів реального zatrudnienia за кордоном, тимчасовості та фактичної мети направлення.`,
      ],
    },
    "temporary-work": {
      introduction: [
        "Praca tymczasowa має тристоронню структуру: agencja pracy tymczasowej zatrudnia або укладає цивільний договір із працівником, направляє його до pracodawcy użytkownika, а цей користувач визначає завдання й контролює їх виконання.",
        "Саме законне розділення ролей відрізняє pracę tymczasową від звичайної послуги результату. Agencja є podmiotem powierzającym pracę cudzoziemcowi, але щоденна праця виконується для іншого названого podmiotu.",
      ],
      regulated: [
        "Ustawa o zatrudnianiu pracowników tymczasowych визначає допустимі zadania tymczasowe, ролі agencji і pracodawcy użytkownika, письмові uzgodnienia, BHP, równe traktowanie та часові ліміти.",
        "Ustawa z 20.03.2025 вимагає, щоб при kierowaniu cudzoziemca до іншого podmiotu він мав umowę з agencją pracy tymczasowej, а pracodawca użytkownik був зазначений у zezwoleniu, sezonowym zezwoleniu або oświadczeniu.",
        "Ustawa o rynku pracy i służbach zatrudnienia регулює wpis agencji do KRAZ та законність świadczenia usługi pracy tymczasowej.",
      ],
      appliesWhen: [
        "Модель застосовується, коли podmiot потребує працівника для zadań tymczasowych і фактично організовує його щоденну роботу як pracodawca użytkownik, а формальним роботодавцем або контрагентом працівника є agencja.",
        "Для cudzoziemca модель повинна бути відображена в документі легалізації праці; не можна приховувати pracodawcę użytkownika під umową outsourcingową.",
      ],
      conditions: [
        "Agencja повинна мати чинний wpis do KRAZ і право świadczenia pracy tymczasowej, а сторони письмово узгоджують вид роботи, кваліфікації, період, час і місце.",
        "Pracodawca użytkownik виконує законні обов'язки щодо BHP, обліку часу, організації праці та рівного traktowania, тоді як agencja залишається podmiotem zatrudniającym.",
        "Загальний ліміт для одного pracodawcy użytkownika становить 18 місяців у 36 послідовних місяцях, із окремим режимом для заміни відсутнього працівника.",
      ],
      exceptions: [
        "Не кожна робота на території клієнта є pracą tymczasową: у справжній usłudze outsourcingowej виконавець сам організовує людей і відповідає перед клієнтом за процес або результат.",
        "Ustawa виключає окремі види робіт із pracy tymczasowej, зокрема особливо небезпечні та певні роботи після zwolnienia pracownika stałego; сам wpis agencji не усуває цих заборон.",
      ],
      consequences: [
        "Kierowanie людей без належного wpisu або поза ustawowym режимом може бути визнане незаконним świadczeniem pracy tymczasowej та призвести до відповідальності agencji й podmiotu користувача.",
        "Для cudzoziemca відсутність pracodawcy użytkownika в документі або фактична праця для іншого користувача означає невідповідність умов легалізації.",
      ],
      procedure: [
        "Agencja й pracodawca użytkownik письмово узгоджують параметри kierowania, після чого agencja оформлює відносини з працівником і передає йому інформацію про користувача та умови.",
        "Agencja подає właściwy wniosek або oświadczenie, додаючи документ pracodawcy użytkownika про узгодження skierowania, та отримує документ із відкрито зазначеним користувачем.",
        workLaw.text`Під час роботи обидва podmioty виконують власні обов'язки, а періоди pracy tymczasowej обліковуються для ліміту ${workLaw.article("20", "art. 20")}.`,
      ],
      foreignersContext: [
        "У dokumentach cudzoziemca повинні узгоджуватися agencja, pracodawca użytkownik, місце, stanowisko, час, wynagrodzenie і фактичний період skierowania.",
        "Якщо щоденні polecenia, графік і контроль походять від клієнта, орган може оцінювати модель як pracę tymczasową незалежно від назви umowy між компаніями.",
      ],
    },
    "outsourcing-case": {
      introduction: [
        "Outsourcing procesowy є cywilnoprawną usługą, у якій зовнішній виконавець самостійно організовує переданий процес або функцію й відповідає перед замовником за узгоджений результат. Польське право не створює одного обов'язкового пункту договору, який автоматично підтверджує таку модель.",
        workLaw.text`Для легалізації праці ключовий ${workLaw.article("13", "art. 13")} ust. 1 pkt 7 ustawy z 20.03.2025: zezwolenia відмовляють, якщо роботу для третьої особи фактично доручив би podmiot, який не є законною agencją pracy tymczasowej. Тому organ порівнює договір із реальною організацією людей.`,
      ],
      regulated: [
        workLaw.text`${workLaw.article("13", "Art. 13")} ust. 1 pkt 7 регулює наслідок прихованого kierowania cudzoziemca до третьої особи поза законною pracą tymczasową.`,
        "Ustawa o zatrudnianiu pracowników tymczasowych визначає протилежну легальну модель: працівник agencji виконує zadania для й під керівництвом названого pracodawcy użytkownika.",
        "Практика PIP розрізняє outsourcing і pracę tymczasową насамперед за відсутністю прямого та сталого підпорядкування людей клієнту, самостійною організацією виконавця й оцінкою клієнтом результату, а не щоденної праці окремих осіб.",
      ],
      appliesWhen: [
        "Кваліфікація потрібна, коли працівники одного podmiotu виконують роботу на території або в процесі іншої компанії, особливо якщо клієнт надає обладнання, графіки, brygadzistów чи поточні polecenia.",
        "Вона має значення у sprawie o zezwolenie na pracę, pobyt czasowy i pracę, під час kontroli PIP та при оцінці того, хто фактично є pracodawcą użytkownikiem.",
      ],
      conditions: [
        "Ознаками procesowego outsourcingu є визначений процес або результат, власне керівництво виконавця, право виконавця добирати й замінювати персонал, його відповідальність за якість, вади, строки та повторне виконання.",
        "Rozliczenie за результат, етап, SLA або mierzalny wolumen підтримує модель послуги, якщо відповідає фактам; саме по собі формулювання faktury не вирішує кваліфікацію.",
        "Приміщення, інструменти, доступ до систем і правила BHP клієнта можуть бути необхідними для послуги, але не повинні перетворюватися на пряме й постійне kierownictwo над окремими працівниками виконавця.",
      ],
      exceptions: [
        "Координація доступу, BHP, безпеки, послідовності процесів або odbioru результату не тотожна pracodawczemu podporządkowaniu, якщо bieżące polecenia щодо способу праці надає власний координатор виконавця.",
        "Навіть детальні SLA, klauzule o samodzielności чи zakaz wydawania poleceń не захищають модель, якщо фактично клієнт розподіляє людей по змінах, оцінює їх індивідуально та керує щоденною працею.",
      ],
      consequences: [
        workLaw.text`Встановлення фактичного kierowania до третьої особи може призвести до odmowy zezwolenia за ${workLaw.article("13", "art. 13")} ust. 1 pkt 7 та до оцінки działalności як pracy tymczasowej без належного wpisu.`,
        "Суперечність між umową, fakturami, графіками, protokołami, poleceniami та свідченнями працівників зменшує доказову силу договору й може вплинути також на sprawy pobytowe cudzoziemców.",
      ],
      procedure: [
        "Organ або PIP встановлює предмет договору, реальний розподіл функцій, лінію kierownictwa, спосіб odbioru, відповідальність за вади та механізм wynagrodzenia.",
        "Документальний матеріал охоплює umowę główną, SLA, zamówienia, protokoły odbioru, reklamacje, faktury, графіки, інструкції координаторів, ewidencję czasu та реєстрові дані обох spółek.",
        "Фактична модель порівнюється з двома правовими конструкціями: самостійною usługą результату та ustawową pracą tymczasową з agencją і pracodawcą użytkownikiem.",
      ],
      foreignersContext: [
        "Для cudzoziemca вирішальне значення має podmiot, який реально доручає й організовує працю. Якщо ним є третя компанія, документ на користь формального wykonawcy може не охоплювати фактичну роботу.",
        "Доказ powiązań між spółkami пояснює корпоративний зв'язок, але не доводить procesowego outsourcingu; необхідні окремі докази самостійного керівництва виконавця та відповідальності за результат.",
      ],
    },
    "document-matrix": {
      introduction: [
        "Матриця документів показує правову функцію кожного матеріалу: яка норма створює умову, який факт реалізує цю умову і який dowód підтверджує саме цей факт. Вона перетворює перелік załączników на структуру доказування.",
        "Один документ може підтверджувати кілька фактів, а одна умова може вимагати сукупності доказів. Наприклад, umowa підтверджує погоджені умови праці, але фактичну виплату показують bank statements, lista płac і ZUS.",
      ],
      regulated: [
        workLaw.text`Матеріальна ustawa визначає przesłanki дозволу, а KPA — спосіб встановлення фактів і оцінки dowodów. ${kpaLaw.article("75", "Art. 75")} KPA допускає все, що може сприяти з'ясуванню справи й не суперечить праву.`,
        workLaw.text`${kpaLaw.article("77", "Art. 77")} і ${kpaLaw.article("80", "art. 80")} KPA зобов'язують organ зібрати та розглянути весь матеріал і оцінити, чи доведена конкретна обставина.`,
        "Вимоги до обов'язкових załączników можуть додатково випливати зі спеціального закону та rozporządzenia, але їх наявність не замінює доказу всіх матеріальних умов.",
      ],
      appliesWhen: [
        "Матриця застосовується до заяви, відповіді на wezwanie, ознайомлення з aktami, підготовки odwołania та перевірки змін фактичного стану під час провадження.",
        "Вона особливо важлива, коли organ ставить під сумнів реальність діяльності, стабільність доходу, мету pobytu, фактичну організацію праці або зв'язок між spółkami.",
      ],
      conditions: [
        "Кожен рядок матриці містить точну przesłankę, релевантний період, факт, джерело інформації та dowód із датою й автором.",
        "Документи повинні бути взаємно узгоджені щодо осіб, назв podmiotów, сум, адрес, дат, stanowisk і періодів.",
        "Для слабкого або непрямого доказу потрібне пояснення логічного зв'язку та, за можливості, друге незалежне джерело.",
      ],
      exceptions: [
        "Dokument urzędowy користується спеціальною доказовою силою лише в межах того, що орган офіційно засвідчив; він не підтверджує автоматично інші висновки.",
        "Brak одного типового документа не завжди означає відсутність факту, якщо закон не робить цей документ виключною формою доказу й факт можна встановити іншими законними засобами.",
      ],
      consequences: [
        "Матриця виявляє, чи справа є формально комплектною, але матеріально слабкою, або навпаки — має доказ умови, який не був правильно включений до akt.",
        "Незаповнений зв'язок przesłanka–fakt–dowód показує реальний ризик негативного рішення, бо organ не може визнати умову виконаною лише на підставі загального твердження сторони.",
      ],
      procedure: [
        "Спочатку з матеріальної норми виділяються окремі позитивні й негативні przesłanki та їх часові межі.",
        "Потім до кожної przesłanki прив'язуються факти й матеріали з numerem dokumentu в aktach, а суперечності фіксуються окремо.",
        "Після отримання wezwania або нового документа матриця оновлюється, щоб було видно, яка умова вже доведена, яка потребує пояснення і яка залишилася без доказу.",
      ],
      foreignersContext: [
        "У sprawach cudzoziemców той самий факт часто має різні правові функції: umowa може стосуватися celu pobytu, prawa do pracy, dochodu та ubezpieczenia, але для кожної функції оцінюються інші елементи.",
        "Документи з різних процедур — MOS, zezwolenie na pracę, PUP, ZUS і KRS — повинні описувати одну фактичну історію, а не паралельні несумісні версії.",
      ],
    },
    "evidence-matrix": {
      introduction: [
        "Brak formalny стосується здатності podania отримати належний процесуальний хід, тоді як brak materialny означає, що сторона не довела przesłanki потрібного права. Це різні дефекти з різною правовою підставою й різним наслідком.",
        "Формально повна заява може завершитися відмовою, якщо факти не виконують матеріальних умов. Натомість переконливі докази не усувають браку підпису, обов'язкового formularza чи іншої вимоги, яку закон визначає як формальну.",
      ],
      regulated: [
        workLaw.text`${kpaLaw.articleRange("63", "64", { start: "Art. 63", end: "64" })} KPA регулюють форму й мінімальний зміст podania та wezwanie do usunięcia braków, якщо подання не відповідає встановленим вимогам.`,
        "Матеріальні przesłanki й обов'язкові документи визначає ustawa szczególna, наприклад ustawa o cudzoziemcach або ustawa o powierzaniu pracy cudzoziemcom.",
        workLaw.text`${kpaLaw.article("7", "Art. 7")}, ${kpaLaw.article("77", "77")}, ${kpaLaw.article("79a", "79a")}, ${kpaLaw.article("80", "80")} і ${kpaLaw.article("81", "81")} KPA регулюють встановлення істотних фактів, вказання невиконаних przesłanek та оцінку доказового матеріалу.`,
      ],
      appliesWhen: [
        "Розмежування застосовується при кожному wezwaniu, залишенні podania без розгляду, odmowie wszczęcia та перед негативним рішенням по суті.",
        "Воно визначає, чи орган вимагає елемент, без якого podanie формально дефектне, чи доказ факту, від якого залежить spełnienie materialnej przesłanki.",
      ],
      conditions: [
        "Формальний наслідок повинен мати конкретну правову основу, чітко вказаний defect, спосіб його усунення, строк і pouczenie про наслідок невиконання.",
        "Матеріальна оцінка повинна називати przesłankę, факти та докази, яких бракує, і враховувати обов'язок organu розглянути весь матеріал.",
        "Один і той самий документ може бути обов'язковим załącznikiem і водночас доказом умови, але ці дві функції не слід змішувати.",
      ],
      exceptions: [
        workLaw.text`Organ не може використовувати ${kpaLaw.article("64", "art. 64 § 2")} KPA для автоматичного залишення без розгляду лише тому, що доказ матеріальної умови є недостатнім, якщо спеціальний закон не надає йому формального характеру.`,
        "Uzupełnienie formalne не гарантує позитивного рішення: після надання відсутнього елемента organ переходить до merytorycznej oceny przesłanek.",
      ],
      consequences: [
        "Неусунення formalnego braku у встановленому режимі може призвести до pozostawienia podania bez rozpoznania, без вирішення матеріального права.",
        "Недоведення materialnej przesłanki веде до рішення по суті — зазвичай odmowy — яке повинно містити ustalenia faktyczne, ocenę dowodów і uzasadnienie prawne.",
      ],
      procedure: [
        "Wezwanie формально ідентифікується за вказаною правовою підставою, żądanym działaniem та передбаченим наслідком.",
        "При braku formalnym сторона подає відсутній елемент у визначеній формі; при braku materialnym подає dowody, wyjaśnienia або stanowisko щодо przesłanki.",
        "У aktach зберігається доказ doręczenia wezwania, treść odpowiedzi, załączniki та підтвердження своєчасного подання.",
      ],
      foreignersContext: [
        "У sprawach pobytowych wezwanie часто поєднує formalne uzupełnienie з матеріальними доказами, тому кожен пункт листа може мати іншу правову функцію й наслідок.",
        "Наприклад, відсутність підпису на належному załączniku може бути formalnym brakiem, а відсутність доказу реальної діяльності роботодавця — недоведенням materialnej przesłanki.",
      ],
    },
    "document-types": {
      introduction: [
        "KPA не обмежує доказування закритим checklistem документів. Dowodem може бути все, що допомагає з'ясувати справу, не суперечить праву та стосується істотного факту: dokument urzędowy, dokument prywatny, дані rejestru, zeznania, opinia biegłego, oględziny або інший носій інформації.",
        "Вид доказу визначає не його назва, а походження, спосіб створення й те, яку саме обставину він здатний підтвердити.",
      ],
      regulated: [
        workLaw.text`${kpaLaw.article("75", "Art. 75")} KPA встановлює відкритий katalog dowodów, а ${kpaLaw.article("76", "art. 76")} — спеціальну силу dokumentu urzędowego в межах офіційно засвідченого.`,
        kpaLaw.text`${kpaLaw.article("76a", "Art. 76a")} регулює odpisy та копії документів, ${kpaLaw.article("78", "art. 78")} — wnioski dowodowe сторони, ${kpaLaw.article("80", "art. 80")} — оцінку всього матеріалу.`,
        kpaLaw.text`${kpaLaw.article("81", "Art. 81")} і ${kpaLaw.article("81a", "81a")} регулюють можливість визнання факту доведеним та правило розв'язання недоведених фактичних сумнівів на користь сторони в установлених законом справах.`,
      ],
      appliesWhen: [
        "Класифікація застосовується при формуванні załączników, składaniu wniosków dowodowych, перегляді akt і перевірці, чи organ правильно визначив доказову силу матеріалу.",
        "Вона особливо важлива, коли факт не має одного стандартного документа або коли приватні матеріали суперечать даним urzędowego rejestru.",
      ],
      conditions: [
        "Dowód повинен стосуватися істотної обставини, мати встановлене походження, читабельний зміст і часовий зв'язок із періодом, який досліджується.",
        "Kopia або cyfrowe odwzorowanie повинні дозволяти встановити цілісність документа; organ може вимагати оригінал do wglądu в передбачених випадках.",
        "Dokument prywatny підтверджує насамперед походження заяви від підписанта, а достовірність описаних фактів оцінюється разом з іншими доказами.",
      ],
      exceptions: [
        "Domniemanie dokumentu urzędowego можна спростовувати, а документ не має підвищеної сили поза межами того, що organ офіційно stwierdził.",
        "Oświadczenie strony не замінює dokumentu, якщо спеціальний закон прямо вимагає визначеної форми або конкретного urzędowego potwierdzenia.",
      ],
      consequences: [
        "Правильна класифікація показує, чи документ доводить сам факт, лише твердження сторони, статус у реєстрі або перебіг процесуальної дії.",
        "Organ, який відмовляється провести релевантний dowód або вибірково оцінює матеріал, повинен пояснити це в uzasadnieniu; порушення може мати значення в odwołaniu.",
      ],
      procedure: [
        "Матеріал надходить від сторони, іншого organu, rejestru або внаслідок czynności dowodowej, після чого включається до akt.",
        "Сторона має можливість брати участь у проведенні визначених доказів і висловитися щодо зібраного матеріалу перед рішенням.",
        "У decyzji organ зазначає, які факти визнав доведеними, на яких доказах базувався й чому іншим матеріалам відмовив у переконливості.",
      ],
      foreignersContext: [
        "У sprawach cudzoziemców дані paszportu, rejestrów, umów, ZUS, banku та urzędowych decyzji мають різні доказові функції й не замінюють одне одного.",
        "Електронні UPO, historia MOS, wpisy PUP і wydruki з державних rejestrów важливі також як докази дати та змісту процесуальної дії.",
      ],
    },
    "foreign-documents": {
      introduction: [
        "Документ, виданий за кордоном, повинен бути придатним для використання в польській справі: organ має розуміти його зміст, встановити походження та оцінити, чи документ чинний і стосується відповідної особи або факту.",
        "Tłumaczenie, apostille і legalizacja виконують різні функції. Переклад робить зміст доступним польською мовою, а apostille або legalizacja підтверджують автентичність підпису, статус підписанта та печатку, але не істинність усіх фактів у документі.",
      ],
      regulated: [
        workLaw.text`Вимогу перекладу визначає конкретна процедура. Для zezwoleń na pracę й oświadczeń ${workLaw.external("§ 8", WORK_REGULATION_URL)} ust. 8 rozporządzenia Dz.U. 2025 poz. 1629 вимагає tłumaczenia przysięgłego документів іноземною мовою, крім dokumentów podróży.`,
        "Apostille застосовується між державами-учасницями Konwencji haskiej z 1961 r., якщо документ належить до її сфери й не діє звільнення за міжнародним договором або правом ЄС.",
        "Для інших держав або документів може застосовуватися legalizacja через właściwy organ держави походження та польську placówkę konsularną.",
      ],
      appliesWhen: [
        "Режим застосовується до aktów stanu cywilnego, zaświadczeń, дипломів, rejestrów spółek, pełnomocnictw та інших urzędowych або приватних матеріалів, створених за межами Польщі.",
        "Обсяг формальностей залежить від країни, виду документа, organu, мети використання та чинних міжнародних або європейських правил.",
      ],
      conditions: [
        "Документ повинен походити від компетентного органу або особи, містити дані, що дозволяють ідентифікувати його, і бути чинним або актуальним для досліджуваного періоду.",
        "Tłumaczenie przysięgłe має охоплювати істотний зміст, печатки, adnotacje й елементи, необхідні для зіставлення з оригіналом.",
        "Apostille або legalizacja приєднуються до належного оригіналу чи urzędowego odpisu; звичайна приватна копія не набуває через це сили оригіналу.",
      ],
      exceptions: [
        "Документи з окремих держав або окремих категорій можуть бути звільнені від legalizacji чи apostille міжнародним договором, Konwencją CIEC або правилами ЄС.",
        workLaw.text`Dokument podróży у процедурах праці не перекладається за правилом ${workLaw.external("§ 8", WORK_REGULATION_URL)} ust. 8 Dz.U. 2025 poz. 1629, але organ використовує його для ідентифікації та може вимагати читабельного cyfrowego odwzorowania всіх заповнених сторінок.`,
      ],
      consequences: [
        "Відсутність потрібного перекладу унеможливлює оцінку змісту, а відсутність wymaganej apostille або legalizacji може поставити під сумнів urzędowe pochodzenie документа.",
        "Розбіжності в транслітерації імен, датах, назвах spółek або нумерації документів потребують пояснення й доказу, що матеріали стосуються тієї самої особи або podmiotu.",
      ],
      procedure: [
        "Спочатку отримується оригінал або właściwy urzędowy odpis у державі походження та встановлюється, чи діє zwolnienie, apostille або legalizacja.",
        "Після виконання wymogu uwierzytelnienia документ передається tłumaczowi przysięgłemu, якщо процедура вимагає польського перекладу.",
        "До польської справи подаються пов'язані між собою оригінал або odpis, apostille чи klauzula legalizacyjna та переклад із чітким зазначенням, до якого документа він належить.",
      ],
      foreignersContext: [
        "У sprawach pobytowych іноземні акти часто підтверджують pokrewieństwo, małżeństwo, освіту, стаж або корпоративні powiązania, тому їх формальна придатність безпосередньо впливає на доказ матеріальної умови.",
        "Корпоративний dokument з-за кордону може підтверджувати реєстровий статус і представництво spółki, але фактичну діяльність, delegowanie або виконання usługi підтверджують додаткові матеріали.",
      ],
    },
    "case-file": {
      introduction: [
        "Akta sprawy — це офіційний набір матеріалів, на підставі якого organ встановлює факти й ухвалює рішення. Право доступу дозволяє стороні бачити не лише власні załączniki, а також листування organów, dane z rejestrów, notatki та інші dowody.",
        "Власна хронологія не замінює akt, але відтворює послідовність podania, doręczeń, wezwań, odpowiedzi, zmian stanu faktycznego й czynności organu, що необхідно для оцінки строків і повноти матеріалу.",
      ],
      regulated: [
        workLaw.text`${kpaLaw.article("73", "Art. 73")} KPA надає стороні право wglądu do akt, sporządzania notatek, kopii й odpisów також після завершення провадження та передбачає uwierzytelnione odpisy в обґрунтованих випадках.`,
        workLaw.text`${kpaLaw.article("74", "Art. 74")} KPA регулює виключення документів із доступу через ochronę informacji niejawnych або ważny interes państwowy та вимагає postanowienia при відмові.`,
        kpaLaw.text`${kpaLaw.article("74a", "Art. 74a")} поширює правила доступу на документи в електронній формі, а ${kpaLaw.article("10", "art. 10")} і ${kpaLaw.article("81", "art. 81")} пов'язують akta з правом сторони висловитися щодо dowodów.`,
      ],
      appliesWhen: [
        "Право доступу діє під час провадження і після його завершення, коли особа має статус strony або іншу прямо передбачену законом підставу.",
        "Ознайомлення особливо важливе перед відповіддю на wezwanie, перед decyzją, при підготовці odwołania та після отримання інформації, що organ самостійно здобув новий dowód.",
      ],
      conditions: [
        "Wniosek про доступ повинен дозволяти ідентифікувати sprawę та особу, яка реалізує право; представник підтверджує umocowanie.",
        "Kopie й нотатки повинні зберігати numerację та походження документа, щоб їх можна було співвіднести з aktami й późniejszym uzasadnieniem decyzji.",
        "Хронологія містить дату події, дату skutecznego doręczenia, автора, вид czynności, перелік załączników і процесуальний наслідок.",
      ],
      exceptions: [
        kpaLaw.text`Документи з informacjami niejawnymi та матеріали, виключені через ważny interes państwowy, не надаються в загальному режимі ${kpaLaw.article("73", "art. 73 KPA")}.`,
        "Право wglądu не означає право змінювати або вилучати матеріали; виправлення власної позиції відбувається через нове pismo, wniosek dowodowy або зауваження до конкретної czynności.",
      ],
      consequences: [
        "Akta показують, який матеріал organ реально мав на дату рішення; документ, підготовлений стороною, але не поданий або не включений до akt, не виконує тієї самої процесуальної функції.",
        "Bezpodstawna odmowa dostępu, відсутність можливості висловитися щодо dowodów або рішення на матеріалі поза aktami може становити порушення KPA й аргумент у środku zaskarżenia.",
      ],
      procedure: [
        kpaLaw.text`Organ організовує доступ у своїй siedzibie або за допомогою електронних засобів, дозволяє sporządzenie kopii та на вимогу видає uwierzytelnione odpisy за умов ${kpaLaw.article("73", "art. 73 § 2 KPA")}.`,
        "При відмові organ видає postanowienie, на яке przysługuje zażalenie; у ньому визначаються правова підстава й обсяг виключення.",
        "Після кожного доступу власний spis akt і хронологія доповнюються новими позиціями, щоб зберегти відповідність офіційній teczce.",
      ],
      foreignersContext: [
        "У sprawach cudzoziemców частина істотних даних надходить із PUP, Straży Granicznej, Policji, ZUS, KRS або інших проваджень; лише wgląd pokazuje, які саме відомості використав wojewoda.",
        "Для оцінки legalności pobytu й pracy хронологія повинна розділяти дату подання, дату UPO, дату doręczenia, фактичний початок роботи, зміни umowy та строки obowiązkowych powiadomień.",
      ],
    },
  },
  "legal-node-guides-work-docs"
) satisfies LegalNodeGuideMap
