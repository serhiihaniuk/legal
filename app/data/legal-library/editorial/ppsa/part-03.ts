import { createLegalTextAuthor, type LegalTextValue } from "../../legal-text"
import {
  defineEditorialPart,
  type EditorialEntry,
} from "../define-editorial-part"

const kpaLaw = createLegalTextAuthor("kpa")
const ppsaLaw = createLegalTextAuthor("ppsa")

type Rule = { locator: string; explanation: LegalTextValue }

type ProvisionId = EditorialEntry<"ppsa">["provisionId"]

/**
 * This part was checked against the promoted local PPSA corpus
 * `ppsa-2026-143` (Dz.U. 2026 poz. 143), whose articles 85–129 are active.
 * The claim is a compact Ukrainian rendering of the statutory rule; Polish
 * procedural terms are retained so that the learner can match the source.
 */
function reviewed(
  provisionId: ProvisionId,
  claim: LegalTextValue,
  summary: LegalTextValue,
  rules: readonly Rule[],
  legalEffect: LegalTextValue,
  foreignersCase: LegalTextValue
): EditorialEntry<"ppsa"> {
  return {
    provisionId,
    reviewStatus: "reviewed",
    claims: [
      {
        kind: "statute-text",
        text: claim,
        sourceLocator: `Art. ${provisionId.slice("ppsa-art-".length)}`,
      },
    ],
    summary,
    rules,
    legalEffect,
    foreignersCase,
  }
}

export const ppsaPart03 = defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    reviewed(
      "ppsa-art-85",
      "Czynność w postępowaniu sądowym, яку strona вчинила після спливу строку, є bezskuteczna.",
      "Стаття встановлює прямий наслідок пропуску строку для процесуальної czynność сторони: вона не породжує передбаченого законом процесуального ефекту.",
      [
        {
          locator: "Art. 85",
          explanation:
            "Спочатку визначте, яку саме czynność мала виконати strona, який строк для неї діяв і коли він закінчився.",
        },
        {
          locator: "Art. 85",
          explanation:
            "Не змішуйте bezskuteczność із питанням вини: можливість przywrócenie terminu регулюють окремі статті 86–89.",
        },
      ],
      ppsaLaw.text`За ${ppsaLaw.article("85", "Art. 85")} запізніла czynność є bezskuteczna; стаття сама не встановлює ані строку, ані автоматичного przywrócenie terminu.`,
      "У skarga щодо pobyt зафіксуйте дату doręczenie, початок і кінець строку та дату подання. Якщо дія запізнилася, окремо перевірте умови wniosku o przywrócenie terminu."
    ),
    reviewed(
      "ppsa-art-86",
      "Якщо strona без своєї вини не виконала czynność у строк, sąd на її wniosek postanowi przywrócenie terminu; це недопустимо без ujemnych skutków для сторони, а на postanowienie можна подати zażalenie.",
      ppsaLaw.text`${ppsaLaw.article("86", "Art. 86")} визначає базові умови przywrócenie terminu: brak winy, wniosek, негативний процесуальний наслідок і контроль через zażalenie.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Потрібно показати, що строк пропущено без вини сторони; рішення приймається postanowienie, у тому числі на posiedzeniu niejawnym.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо пропуск не спричинив для сторони ujemnych skutków w zakresie postępowania sądowego, przywrócenie terminu не допускається.",
        },
        {
          locator: "§ 3",
          explanation:
            "На postanowienie про przywrócenie terminu або про відмову в ньому przysługuje zażalenie.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("86", "Art. 86")} відкриває можливість відновити строк лише за названих умов; він не скасовує обов’язок довести факт і відсутність вини.`,
      ppsaLaw.text`У справі про pobyt поясніть, чому особа не могла вчасно подати skarga або іншу czynność, додайте доступні підтвердження та перевірте окремі вимоги ${ppsaLaw.article("87", "Art. 87")}.`
    ),
    reviewed(
      "ppsa-art-87",
      "Wniosek o przywrócenie terminu подається до належного sąd протягом семи днів після припинення причини пропуску; треба uprawdopodobnić brak winy, одночасно виконати пропущену czynność, а wniosek щодо skarga подати за pośrednictwem органу.",
      "Стаття визначає місце, семиденний строк і зміст wniosek o przywrócenie terminu, а також обов’язкову одночасність із пропущеною дією.",
      [
        {
          locator: "§ 1",
          explanation:
            "Сім днів рахуються від ustania przyczyny uchybienia terminu; wniosek подається до sąd, у якому мала бути виконана czynność.",
        },
        {
          locator: "§ 2",
          explanation:
            "У wniosek треба лише uprawdopodobnić обставини, що вказують на brak winy; це не тотожне повному доказуванню в іншому процесі.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Для відновлення строку skarga wniosek іде за pośrednictwem органу, а пропущену czynność треба виконати одночасно.",
        },
        {
          locator: "§ 5",
          explanation:
            "Після року від пропущеного строку відновлення допускається лише у випадках wyjątkowych.",
        },
      ],
      ppsaLaw.text`Недотримання місця, семиденного строку або одночасного виконання czynność може перешкодити розгляду wniosek; конкретний наслідок треба читати разом із ${ppsaLaw.article("88", "Art. 88")}.`,
      "Якщо строк skarga у справі cudzoziemca пропущено, складіть wniosek через właściwy organ протягом семи днів після припинення перешкоди, одночасно подайте skarga і поясніть brak winy документами."
    ),
    reviewed(
      "ppsa-art-88",
      "Spóźniony або z mocy ustawy niedopuszczalny wniosek o przywrócenie terminu sąd odrzuci на posiedzeniu niejawnym; на postanowienie przysługuje zażalenie.",
      ppsaLaw.text`${ppsaLaw.article("88", "Art. 88")} встановлює відхилення wniosek o przywrócenie terminu, якщо він поданий із запізненням або закон прямо не допускає його.`,
      [
        {
          locator: "Art. 88",
          explanation:
            "Перевірте спочатку своєчасність wniosek і чи не виключає закон саму можливість відновлення строку.",
        },
        {
          locator: "Art. 88",
          explanation:
            "Рішення приймається на posiedzenie niejawnym, але на відповідне postanowienie прямо передбачено zażalenie.",
        },
      ],
      "Стаття стосується процесуальної допустимості wniosek, а не оцінки обставин справи про pobyt по суті.",
      ppsaLaw.text`Збережіть доказ дати подання wniosek і перевірте pouczenie про zażalenie; не вважайте сам факт подання запізнілого wniosek захистом від наслідків ${ppsaLaw.article("85", "Art. 85")}.`
    ),
    reviewed(
      "ppsa-art-89",
      "Подання wniosek o przywrócenie terminu не зупиняє postępowanie або виконання orzeczenia; sąd може їх зупинити, а після задоволення wniosek може негайно розглянути sprawę.",
      ppsaLaw.text`${ppsaLaw.article("89", "Art. 89")} розмежовує сам факт wniosek і окреме рішення sąd про wstrzymanie postępowania або wykonania orzeczenia.`,
      [
        {
          locator: "Art. 89",
          explanation:
            "За загальним правилом wniosek не має suspensywny effect: postępowanie та wykonanie orzeczenia тривають.",
        },
        {
          locator: "Art. 89",
          explanation:
            "Sąd може, зважаючи на обставини, wstrzymać postępowanie або виконання; це не відбувається автоматично.",
        },
        {
          locator: "Art. 89",
          explanation:
            "Після uwzględnienie wniosku sąd може негайно перейти до rozpoznania sprawy.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("89", "Art. 89")} регулює тимчасовий процесуальний ефект wniosek і не гарантує ані зупинення, ані сприятливого рішення у справі.`,
      "У спорі про pobyt окремо просіть про wstrzymanie, якщо для цього є підстави, і не ототожнюйте wniosek o przywrócenie terminu з автоматичним продовженням легального перебування."
    ),
    reviewed(
      "ppsa-art-90",
      "Якщо спеціальний припис не встановлює іншого, posiedzenia sądowe є jawne, а sąd розглядає sprawy на rozprawie; навіть справу для posiedzenie niejawne можна направити на posiedzenie jawne з rozprawa.",
      "Стаття задає загальне правило відкритості та rozprawa і дозволяє суду обрати відкриту форму там, де спеціальний припис допускає закриту.",
      [
        {
          locator: "§ 1",
          explanation:
            "Завжди перевіряйте, чи немає спеціального правила: лише за його відсутності діють jawność і rozprawa як загальне правило.",
        },
        {
          locator: "§ 2",
          explanation:
            "Sąd може призначити posiedzenie jawne та rozprawa навіть для справи, яка за загальним правилом розглядається на posiedzeniu niejawnym.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("90", "Art. 90")} визначає форму розгляду, але не встановлює результату skarga й не означає, що відкрите слухання потрібне в кожній справі.`,
      "У справі cudzoziemca перевірте в zawiadomienie, чи призначено rozprawa або posiedzenie niejawne. Форма розгляду сама не доводить законність чи незаконність decyzja."
    ),
    reviewed(
      "ppsa-art-91",
      "Posiedzenia wyznacza przewodniczący, коли цього вимагає стан справи; про posiedzenie jawne повідомляють письмово або оголошенням, зазвичай не пізніше семи днів, а в pilny випадок строк може становити три дні.",
      ppsaLaw.text`${ppsaLaw.article("91", "Art. 91")} регулює призначення posiedzenia, zawiadomienie про відкрите слухання та можливість зобов’язати strony або pełnomocnik з’явитися особисто.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Przewodniczący призначає posiedzenie z urzędu, коли цього вимагає стан справи.",
        },
        {
          locator: "§ 2",
          explanation:
            "Про posiedzenie jawne повідомляють письмово або оголошенням; наступне повідомлення відсутній стороні треба doręczyć завжди. Звичайний мінімум — сім днів, у pilnych випадках — три.",
        },
        {
          locator: "§ 3",
          explanation:
            "Для точнішого з’ясування справи sąd може zarządzić особисту явку strony або явку через pełnomocnik.",
        },
      ],
      "Стаття встановлює правила організації слухання і повідомлення, але питання належності конкретного doręczenie потребує перевірки доказів та інших правил.",
      "Зіставте zawiadomienie про rozprawa з датою засідання й адресою, яку вказав cudzoziemiec. Окремо перевірте, чи був належно повідомлений pełnomocnik."
    ),
    reviewed(
      "ppsa-art-92",
      "Prokurator, Rzecznik Praw Obywatelskich або Rzecznik Praw Dziecka бере участь у postępowanie, якщо подав skargę або заявив udział; їхня відсутність на rozprawa не зупиняє розгляд.",
      "Стаття визначає участь трьох названих публічних суб’єктів та наслідок їхньої неявки.",
      [
        {
          locator: "§ 1",
          explanation:
            "Участь виникає, коли відповідний суб’єкт подав skargę або zgłosił udział у postępowaniu перед sąd.",
        },
        {
          locator: "§ 2",
          explanation:
            "Відсутність prokurator, RPO або RPD на rozprawa не блокує розгляд справи судом.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("92", "Art. 92")} не створює автоматичного обов’язку залучати цих суб’єктів у кожній справі cudzoziemca.`,
      "Не робіть висновок про порушення прав лише через відсутність RPO чи іншого суб’єкта: перевірте, чи він справді подав skargę або zgłosił udział."
    ),
    reviewed(
      "ppsa-art-93",
      "Zawiadomienie o posiedzeniu має містити дані й адресу адресата, sąd, місце та час, skarżącego і предмет справи, cel posiedzenia та skutki niestawiennictwa.",
      ppsaLaw.text`${ppsaLaw.article("93", "Art. 93")} дає перелік відомостей, за якими можна перевірити зміст zawiadomienie про posiedzenie.`,
      [
        {
          locator: "pkt 1–2",
          explanation:
            "Звірте ім’я або назву, адресу, sąd, місце і час posiedzenia з фактичними даними справи.",
        },
        {
          locator: "pkt 3–5",
          explanation:
            "У повідомленні мають бути skarżący, предмет і cel posiedzenia, а також наслідки niestawiennictwa.",
        },
      ],
      "Стаття визначає обов’язкові елементи повідомлення, але сама не вирішує, чи в конкретній ситуації doręczenie було належним.",
      "Зберігайте конверт або електронне підтвердження разом із zawiadomienie про справу щодо pobyt і перевіряйте всі п’ять категорій даних."
    ),
    reviewed(
      "ppsa-art-94",
      "Posiedzenia відбуваються в будівлі sąd, а поза нею — лише за умовами безпеки та коли це необхідно, полегшує справу або істотно заощаджує витрати; przewodniczący може організувати posiedzenie jawne із засобами дистанційної передачі у випадках, названих статтею.",
      ppsaLaw.text`${ppsaLaw.article("94", "Art. 94")} визначає звичайне місце засідання, обмежені підстави засідання поза будівлею та спеціальний порядок участі з іншого sąd або місця позбавлення волі.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Засідання поза будівлею допустиме не довільно: потрібні вимоги безпеки і одна з названих законом причин.",
        },
        {
          locator: "§ 2",
          explanation:
            "Дистанційне posiedzenie jawne передбачає технічну передачу між sala sądowa та місцем учасника; у тексті окремо названі інший sąd, zakład karny і areszt śledczy.",
        },
        {
          locator: "§ 2",
          explanation:
            "У місці позбавлення волі бере участь представник адміністрації; за умовами статті можуть бути pełnomocnik і tłumacz для особи, яка недостатньо володіє польською.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("94", "Art. 94")} не дає загального права кожному учаснику вимагати відеозасідання: спосіб і місце визначає przewodniczący в межах статті.`,
      "Якщо особа у справі про pobyt не володіє польською, зафіксуйте потребу в tłumacz, а при дистанційному слуханні перевірте, з якого місця та за яким технічним порядком участь дозволена."
    ),
    reviewed(
      "ppsa-art-95",
      "На posiedzenie jawne, крім stron і wezwanych осіб, до sali sądowej допускаються лише повнолітні; przewodniczący може дозволити присутність małoletni. На posiedzenie niejawne входять лише wezwane особи.",
      "Стаття встановлює правила доступу до sali залежно від того, чи є posiedzenie jawne або niejawne.",
      [
        {
          locator: "§ 1",
          explanation:
            "Для відкритого засідання розрізняйте strony та wezwane osoby від публіки: для інших загальне правило — повноліття.",
        },
        {
          locator: "§ 1–2",
          explanation:
            "Присутність małoletni залежить від дозволу przewodniczący, а на posiedzenie niejawne допускаються лише wezwane особи.",
        },
      ],
      "Норма стосується доступу до залу, а не права сторони на позитивний результат або автоматичної недійсності засідання.",
      "Перевірте позначену форму засідання у sprawa cudzoziemca та не приводьте супроводжуючих осіб на posiedzenie niejawne без wezwanie."
    ),
    reviewed(
      "ppsa-art-96",
      "Sąd z urzędu zarządza drzwiach zamkniętych, якщо публічний розгляд загрожує moralności, bezpieczeństwu państwa або porządkowi publicznemu чи може розкрити informacje niejawne; на wniosek strony це можливо для ochrony życia prywatnego або іншого важливого інтересу приватного.",
      ppsaLaw.text`${ppsaLaw.article("96", "Art. 96")} розрізняє обов’язкове закриття слухання з публічних причин і закриття на wniosek strony для приватного інтересу.`,
      [
        {
          locator: "§ 1",
          explanation:
            "За названих загроз суд закриває все posiedzenie або його частину z urzędu; до підстави належить і можливе розкриття informacji niejawne.",
        },
        {
          locator: "§ 2",
          explanation:
            "Wniosek strony про ochronę życia prywatnego або іншого ważny interes prywatny розглядають при зачинених дверях, а postanowienie оголошують публічно.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("96", "Art. 96")} регулює jawność слухання, не скасовуючи інших процесуальних гарантій і не передбачаючи автоматичної закритості через сам статус cudzoziemiec.`,
      "Якщо на rozprawa можуть бути розкриті приватні дані про сім’ю чи pobyt, оцініть wniosek про drzwiach zamkniętych за конкретними підставами статті, а не лише за бажанням уникнути публічності."
    ),
    reviewed(
      "ppsa-art-97",
      "На posiedzenie при drzwiach zamkniętych можуть бути strony, їхні przedstawiciele ustawowi й pełnomocnicy, prokurator та до двох osób zaufania з кожної сторони; оголошення orzeczenia, що завершує справу, відбувається публічно.",
      "Стаття визначає коло присутніх при закритому слуханні та зберігає публічність оголошення остаточного orzeczenie.",
      [
        {
          locator: "§ 1",
          explanation:
            "Перелік присутніх є спеціальним: osoba zaufania допускається максимум по дві з кожної strony.",
        },
        {
          locator: "§ 2",
          explanation:
            "Навіть після закритого розгляду orzeczenie kończące postępowanie оголошується publicznie.",
        },
      ],
      "Закрите слухання обмежує присутність у залі, але не перетворює orzeczenie на непублічне оголошення.",
      "У справі cudzoziemca узгодьте з pełnomocnik, хто має бути допущений як osoba zaufania, і перевірте порядок publicznego ogłoszenia orzeczenia."
    ),
    reviewed(
      "ppsa-art-98",
      "Przewodniczący відкриває, веде й закриває posiedzenia, надає слово, ставить питання, дозволяє ставити питання та оголошує orzeczenia; може забрати слово при зловживанні й відхилити niewłaściwe або zbyteczne питання.",
      ppsaLaw.text`${ppsaLaw.article("98", "Art. 98")} описує процесуальне керування posiedzenie головуючим і межі усних виступів та питань.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Організаційні дії під час posiedzenia належать przewodniczący, включно з наданням слова та оголошенням orzeczenia.",
        },
        {
          locator: "§ 2",
          explanation:
            "Відбирання слова можливе при його nadużywa, а uchylenie pytania — якщо воно niewłaściwe або zbyteczne.",
        },
      ],
      "Норма дає головуючому інструменти для порядку слухання, але не дозволяє наперед оцінити результат skarga.",
      "Підготуйте короткі, предметні пояснення щодо decyzja про pobyt і заявляйте процесуально важливі питання в межах наданого слова."
    ),
    reviewed(
      "ppsa-art-99",
      "Sąd може odroczyć posiedzenie, навіть за zgodny wniosek stron, лише з ważna przyczyna.",
      "Стаття обмежує odroczenie вимогою важливої причини й не робить спільний wniosek сторін достатньою підставою сам по собі.",
      [
        {
          locator: "Art. 99",
          explanation:
            "Перевірте, яку конкретну ważna przyczyna наведено; згода всіх сторін не усуває цієї вимоги.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("99", "Art. 99")} стосується календаря posiedzenie і не змінює матеріальних прав сторони у справі про pobyt.`,
      "Якщо потрібне odroczenie rozprawa, поясніть важливу причину й підтвердьте її; сама зайнятість або спільна згода не дають автоматичного права на перенесення."
    ),
    reviewed(
      "ppsa-art-100",
      "З posiedzenie jawnе протокол spisuje protokolant під керівництвом przewodniczący; з posiedzenie niejawne складають notatka urzędowa, якщо не видано orzeczenie, і її можна зберегти в системі sąd з kwalifikowanym podpisem elektronicznym.",
      ppsaLaw.text`${ppsaLaw.article("100", "Art. 100")} розрізняє протокол відкритого засідання та urzędowa notatka для закритого засідання без виданого orzeczenie.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Протокол стосується przebieg posiedzenia jawnego і складається protokolant під керівництвом головуючого.",
        },
        {
          locator: "§ 2",
          explanation:
            "Для posiedzenie niejawne notatka urzędowa потрібна лише коли не видано orzeczenie; закон допускає електронний запис і кваліфікований підпис.",
        },
      ],
      "Стаття визначає форму фіксації, але не означає, що кожен матеріал із akt автоматично доводить обставини справи.",
      "Після засідання про pobyt перевірте, чи є потрібна інформація у protokół або notatka urzędowa та чи відповідає вона фактичному перебігу posiedzenia."
    ),
    reviewed(
      "ppsa-art-101",
      "Protokół має містити складові суду й учасників, дані справи та jawność, przebieg posiedzenia з wnioski, twierdzenia, zarządzenia й orzeczenia, а також істотні czynności stron; його підписують przewodniczący і protokolant.",
      ppsaLaw.text`${ppsaLaw.article("101", "Art. 101")} встановлює мінімальний зміст і підписання протоколу та дозволяє його електронне оформлення з kwalifikowanym podpisem.`,
      [
        {
          locator: "§ 1 pkt 1",
          explanation:
            "Звірте в протоколі sąd, місце й дату, склад суду, protokolant, prokurator, strony, представників, справу та відмітку про jawność.",
        },
        {
          locator: "§ 1 pkt 2–3",
          explanation:
            "Протокол відображає przebieg, wnioski і twierdzenia, видані на засіданні рішення та істотні czynności stron; можна послатися на pisma przygotowawcze.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Протокол підписують przewodniczący і protokolant; допускається запис у системі teleinformatycznym із кваліфікованим підписом.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("101", "Art. 101")} визначає засіб фіксації процесу, а не встановлює наперед, які факти суд визнає доведеними.`,
      ppsaLaw.text`Зіставте протокол засідання у справі cudzoziemca з поданими поясненнями та заявленими wnioski; істотне упущення можна оцінювати за процедурою ${ppsaLaw.article("103", "Art. 103")} і ${ppsaLaw.article("105", "105")}.`
    ),
    reviewed(
      "ppsa-art-102",
      "Перебіг czynności, які протоколюються, можна додатково записати апаратурою dźwiękową, але до її запуску треба попередити всіх учасників czynność.",
      "Стаття дозволяє додаткову звукову фіксацію протоколюваної дії за умови попередження всіх присутніх учасників.",
      [
        {
          locator: "Art. 102",
          explanation:
            "Запис є додатковим до протоколювання, а повідомлення має відбутися перед uruchomienie aparatury.",
        },
        {
          locator: "Art. 102",
          explanation:
            "Перевірте, чи попередження отримали всі osoby uczestniczące w czynności, а не лише сторона, яка веде запис.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("102", "Art. 102")} регулює спосіб фіксації й не робить будь-який приватний аудіозапис заміною судового протоколу.`,
      "Якщо на слуханні про pobyt ведеться запис, зафіксуйте факт попередження та зіставляйте аудіо лише з офіційним protokół і межами дозволеної czynność."
    ),
    reviewed(
      "ppsa-art-103",
      "Strony можуть вимагати sprostowanie або uzupełnienie protokołu на наступному posiedzenie, але не пізніше тридцяти днів від засідання; на zarządzenie przewodniczący можна odwołać się до sąd протягом семи днів від doręczenie.",
      ppsaLaw.text`${ppsaLaw.article("103", "Art. 103")} дає окремий порядок виправлення чи доповнення протоколу з двома часовими орієнтирами.`,
      [
        {
          locator: "Art. 103 zdanie pierwsze",
          explanation:
            "Заявіть про sprostowanie або uzupełnienie на наступному posiedzenie і в будь-якому разі не пізніше 30 днів від засідання, з якого складено протокол.",
        },
        {
          locator: "Art. 103 zdanie drugie",
          explanation:
            "Якщо przewodniczący видав zarządzenie, сторона може odwołać się до sąd протягом семи днів від його doręczenie.",
        },
      ],
      "Стаття стосується виправлення запису про перебіг засідання, а не повторного розгляду всієї skarga.",
      "Після posiedzenie у справі про pobyt порівняйте protokół із власними нотатками та вчасно подайте вимогу про виправлення конкретного пропуску або помилки."
    ),
    reviewed(
      "ppsa-art-104",
      "Wnioski, oświadczenia, їхні uzupełnienia і sprostowania можна внести до załącznik до protokołu; коли сторону представляє adwokat, radca prawny, doradca podatkowy або rzecznik patentowy, przewodniczący може вимагати такий załącznik у визначений строк.",
      "Стаття дозволяє оформити усні процесуальні заяви й виправлення в додатку до протоколу та дає головуючому право вимагати додаток від професійного pełnomocnik.",
      [
        {
          locator: "Art. 104 zdanie pierwsze",
          explanation:
            "У załącznik можна включити wnioski, oświadczenia та їхні uzupełnienia і sprostowania, зроблені під час posiedzenia.",
        },
        {
          locator: "Art. 104 zdanie drugie",
          explanation:
            "Для названих професійних pełnomocnicy przewodniczący може встановити строк подання такого załącznik.",
        },
      ],
      "Załącznik доповнює протокол, але його зміст має стосуватися заяв і wnioski, зроблених у toku posiedzenia.",
      "У справі cudzoziemca попросіть повністю зафіксувати істотний wniosek або oświadczenie; якщо його подає професійний pełnomocnik, дотримайтеся строку для załącznik."
    ),
    reviewed(
      "ppsa-art-105",
      "Strona має під час posiedzenia або на найближчому засіданні, якщо була відсутня, заявити uchybienie przepisom postępowania і вимагати wpisanie zastrzeżenia до protokołu; без цього надалі посилання зазвичай виключене, крім передбачених статтею винятків.",
      ppsaLaw.text`${ppsaLaw.article("105", "Art. 105")} встановлює обов’язок своєчасно заявити zastrzeżenie до протоколу, якщо сторона хоче посилатися на процесуальне порушення надалі.`,
      [
        {
          locator: "Art. 105 zdanie pierwsze",
          explanation:
            "Застереження треба заявити в toku posiedzenia, а для відсутньої сторони — на найближчому posiedzenie, і просити wpisanie до protokołu.",
        },
        {
          locator: "Art. 105 zdanie drugie",
          explanation:
            "Пропуск zastrzeżenia позбавляє права посилатися на uchybienie далі, якщо це не правило, яке суд бере до уваги z urzędu, або якщо сторона uprawdopodobni brak winy.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("105", "Art. 105")} не означає, що кожна помилка в протоколі втрачена назавжди: спочатку визначте виняток і доведіть своєчасність або відсутність вини.`,
      "На rozprawa про pobyt одразу просіть внести до protokołu заперечення щодо істотного порушення процедури; якщо не були присутні, дійте на найближчому засіданні."
    ),
    reviewed(
      "ppsa-art-106",
      "Rozprawa починається зі sprawozdanie sędziego; потім усно виступають спочатку skarżący, а потім organ. Sąd може провести uzupełniające dowody z dokumentów, звернутися по істотний pogląd до організації або органу та враховує факти powszechnie znane.",
      ppsaLaw.text`${ppsaLaw.article("106", "Art. 106")} описує послідовність rozprawa та вузькі умови, за яких адміністративний суд проводить додаткові документальні докази.`,
      [
        {
          locator: "§ 1–2",
          explanation:
            "Sędzia представляє стан справи за aktach із наголосом на zarzuty skargi; далі свої żądania, wnioski і wyjaśnienia подають skarżący, потім organ.",
        },
        {
          locator: "§ 3",
          explanation:
            "Dowody uzupełniające з dokumentów можливі z urzędu або на wniosek, якщо це необхідно для істотних сумнівів і не спричинить надмірного продовження.",
        },
        {
          locator: "§ 3a–5",
          explanation: ppsaLaw.text`Sąd може запросити istotny pogląd у organizacja społeczna або organ administracji publicznej; факти powszechnie znane враховуються без заяви сторони, а до доказування ${ppsaLaw.article("106", "§ 3")} застосовуються відповідно правила Kodeks postępowania cywilnego.`,
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("106", "Art. 106")} не перетворює судове провадження на повне повторення адміністративного доказування: додаткові dowody мають відповідати умовам ${ppsaLaw.article("106", "§ 3")}.`,
      "У skarga на decyzja про pobyt підготуйте zarzuty, факти й документи до rozprawa. Не розраховуйте, що sąd автоматично збере всі докази замість сторони."
    ),
    reviewed(
      "ppsa-art-107",
      "Відсутність strony або її pełnomocnik на rozprawa не зупиняє розгляд справи.",
      "Стаття дозволяє sąd продовжити rozpoznanie справи попри неявку сторони або представника.",
      [
        {
          locator: "Art. 107",
          explanation:
            "Застосування цієї норми не скасовує необхідності перевірити належність zawiadomienie та інші правила про odroczenie.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("107", "Art. 107")} регулює наслідок неявки, але не доводить ані належного повідомлення, ані того, що сторона втратила всі засоби захисту.`,
      "Якщо cudzoziemiec не був на rozprawa, негайно перевірте zawiadomienie, причину відсутності та зміст протоколу; не вважайте неявку визнанням позиції organ."
    ),
    reviewed(
      "ppsa-art-108",
      "Якщо strona або її pełnomocnik відсутні на rozprawa, przewodniczący або sędzia sprawozdawca представляє їхні wnioski, twierdzenia і dowody, що містяться в aktach sprawy.",
      ppsaLaw.text`${ppsaLaw.article("108", "Art. 108")} гарантує, що матеріали відсутньої сторони з akt можуть бути представлені під час слухання.`,
      [
        {
          locator: "Art. 108",
          explanation:
            "Перевірте, чи потрібний wniosek, twierdzenie або dowód справді міститься в aktach; стаття не додає нових матеріалів від імені відсутньої сторони.",
        },
      ],
      "Представлення матеріалів з akt не замінює особистої участі й не означає, що кожен доказ буде прийнятий або вирішальним.",
      ppsaLaw.text`Якщо представник cudzoziemiec не прибув, заздалегідь перевірте, чи всі письмові wnioski і документи є в aktach, щоб їх могли представити за ${ppsaLaw.article("108", "Art. 108")}.`
    ),
    reviewed(
      "ppsa-art-109",
      "Rozprawa відкладається при неправильному zawiadomienie або коли неявка сторони чи pełnomocnik спричинена надзвичайною подією чи іншою відомою суду неподоланною перешкодою, крім випадку, коли вони просять розглянути справу за відсутності.",
      ppsaLaw.text`${ppsaLaw.article("109", "Art. 109")} встановлює спеціальні підстави odroczenie rozprawa, пов’язані з повідомленням або неподоланною перешкодою.`,
      [
        {
          locator: "Art. 109",
          explanation:
            "Перевірте, яку саме nieprawidłowość zawiadomienia або яку konkretną przeszkodę встановив sąd і чи вона спричинила неявку.",
        },
        {
          locator: "Art. 109",
          explanation:
            "Виняток діє, якщо strona або pełnomocnik самі wnieśli про розгляд у своїй відсутності.",
        },
      ],
      "Саме посилання на хворобу чи іншу складність не дає автоматичного odroczenie: стаття вимагає відомої суду неподоланної перешкоди або неправильного повідомлення.",
      "У справі про pobyt збережіть докази причини неявки й одразу повідомте sąd. Перевірте також, чи в матеріалах немає wniosek про розгляд без участі."
    ),
    reviewed(
      "ppsa-art-110",
      "Rozprawa відкладається, якщо sąd вирішує повідомити про провадження осіб, які досі не брали участі у справі як strony.",
      "Стаття пов’язує odroczenie з рішенням суду повідомити потенційних сторін, які раніше не були учасниками.",
      [
        {
          locator: "Art. 110",
          explanation:
            "З’ясуйте, кого саме sąd вважає особою, яку треба zawiadomić як можливу stronę, і зафіксуйте нову дату rozprawa.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("110", "Art. 110")} стосується складу учасників і повідомлення; воно не вирішує, чи має нова особа право на задоволення skarga.`,
      "Якщо рішення про pobyt може зачіпати іншу особу, перевірте, чи суд має підстави повідомити її як stronę до продовження rozprawa."
    ),
    reviewed(
      "ppsa-art-111",
      "Sąd zarządza спільний розгляд кількох окремих справ, якщо вони могли бути охоплені однією skarga і це не спричинить надмірного продовження; може також об’єднати пов’язані справи.",
      ppsaLaw.text`${ppsaLaw.article("111", "Art. 111")} розрізняє обов’язкове поєднання справ за умовами ${ppsaLaw.article("111", "§ 1")} і факультативне поєднання справ, пов’язаних між собою.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Для zarządza połączenie потрібні обидві умови: справи могли бути однією skarga і спільний розгляд не надмірно продовжить postępowanie.",
        },
        {
          locator: "§ 2",
          explanation:
            "За наявності зв’язку між справами sąd може поєднати їх для łącznego rozpoznania або rozstrzygnięcia, але це його процесуальне рішення.",
        },
      ],
      "Поєднання змінює організацію розгляду, але не створює нових матеріальних підстав для рішення у справі про pobyt.",
      ppsaLaw.text`У кількох пов’язаних skarga щодо членів сім’ї порівняйте предмет і ризик затримки; не припускайте, що однакова тема автоматично відповідає ${ppsaLaw.article("111", "Art. 111")}.`
    ),
    reviewed(
      "ppsa-art-112",
      ppsaLaw.text`Якщо organ ухиляється від виконання postanowienie sąd або zarządzenie przewodniczący, прийнятого під час і у зв’язку з розглядом справи, sąd може накласти на organ grzywna у розмірі за ${ppsaLaw.article("154", "Art. 154 § 6")}; postanowienie може бути на posiedzenie niejawnym.`,
      ppsaLaw.text`${ppsaLaw.article("112", "Art. 112")} дає суду санкційний інструмент проти ухилення органу від процесуального розпорядження, прийнятого в цій справі.`,
      [
        {
          locator: "Art. 112",
          explanation:
            "Потрібно встановити, що невиконане postanowienie або zarządzenie прийняте в toku postępowania і пов’язане з розглядом конкретної sprawy.",
        },
        {
          locator: "Art. 112",
          explanation: ppsaLaw.text`Sąd може, але не зобов’язаний, застосувати grzywna; розмір відсилає до ${ppsaLaw.article("154", "Art. 154 § 6")}, а спосіб — до posiedzenie niejawnego.`,
        },
      ],
      ppsaLaw.text`Grzywna за ${ppsaLaw.article("112", "Art. 112")} забезпечує виконання процесуального розпорядження і сама не замінює рішення щодо законності decyzja organ.`,
      "Якщо organ не виконує розпорядження sąd у sprawa cudzoziemca, зафіксуйте зміст, дату doręczenie та факт ухилення; окремо оцініть wniosek про grzywna."
    ),
    reviewed(
      "ppsa-art-113",
      "Przewodniczący закриває rozprawa, коли sąd вважає справу достатньо з’ясованою; її можна закрити й тоді, коли залишився додатковий dowód з документів, відомих сторонам, а окреме слухання щодо нього є зайвим.",
      ppsaLaw.text`${ppsaLaw.article("113", "Art. 113")} визначає, коли rozprawa може бути zamknięta, включно з вузьким винятком для відомого сторонам документального доказу.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Критерієм є оцінка sąd, що sprawa достатньо з’ясована; рішення про закриття приймає przewodniczący.",
        },
        {
          locator: "§ 2",
          explanation:
            "Закриття можливе, якщо ще буде uzupełniający dowód з документів, відомих сторонам, і слухання саме щодо нього суд вважає zbyteczne.",
        },
      ],
      "Закриття rozprawa не означає автоматичного прийняття позиції сторони й не забороняє застосування спеціальних правил про повторне відкриття, якщо вони є.",
      "До zamknięcie rozprawa у спорі про pobyt перевірте, чи всі важливі wnioski й документи є в aktach; не покладайтеся на можливість додати їх пізніше."
    ),
    reviewed(
      "ppsa-art-114",
      "На orzeczenia przewodniczący, видані під час rozprawa, strony можуть до її закриття odwołać się до sąd orzekający.",
      ppsaLaw.text`${ppsaLaw.article("114", "Art. 114")} дає сторонам внутрішній засіб звернутися до складу суду щодо orzeczenie головуючого під час слухання до моменту zamknięcie rozprawa.`,
      [
        {
          locator: "Art. 114",
          explanation:
            "Відстежуйте момент: право odwołać się існує до zamknięcie rozprawa, тому заперечення треба заявляти без зволікання.",
        },
      ],
      "Це звернення до sąd orzekający щодо процесуального рішення головуючого, а не загальна skarga на адміністративну decyzja.",
      "Якщо під час rozprawa про pobyt przewodniczący прийняв рішення, що перешкоджає вашій procesowa czynność, попросіть занести реакцію до протоколу до закриття слухання."
    ),
    reviewed(
      "ppsa-art-115",
      "Postępowanie mediacyjne може бути проведене на wniosek skarżący або organ, поданий до wyznaczenie rozprawa, і може проводитися також без wniosek; мета — з’ясувати фактичні та правові обставини й узгодити спосіб вирішення в межах prawa.",
      ppsaLaw.text`${ppsaLaw.article("115", "Art. 115")} визначає момент, ініціаторів і мету mediacja, не обіцяючи сторонам конкретного результату.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Wniosek про mediacja подають skarżący або organ до призначення rozprawa; предметом є факти, право та можливі ustalenia в межах obowiązującego prawa.",
        },
        {
          locator: "§ 2",
          explanation:
            "Mediacja може початися і без wniosek сторін — ця можливість не означає, що угода буде досягнута.",
        },
      ],
      "Mediacja є способом роботи над вирішенням спору, а не обов’язком органу змінити рішення чи гарантією дозволу на pobyt.",
      "У спорі про pobyt перевірте, чи сторони справді можуть узгодити спосіб załatwienia в межах компетencji organ; не називайте саму mediacja позитивним рішенням."
    ),
    reviewed(
      "ppsa-art-116",
      ppsaLaw.text`Mediacja проводиться mediator, якого обирають strony; якщо в mediacja за ${ppsaLaw.article("115", "Art. 115 § 2")} сторони не домовилися про вибір, mediator призначає sąd. Mediator має повну zdolność do czynności prawnych і користується повними prawami publicznymi.`,
      ppsaLaw.text`${ppsaLaw.article("116", "Art. 116")} регулює вибір і призначення mediator та базові вимоги до його особи, а також передачу контактних даних.`,
      [
        {
          locator: "§ 1–2",
          explanation: ppsaLaw.text`Звичайно mediator обирають strony; у випадку ${ppsaLaw.article("115", "Art. 115 § 2")} за відсутності спільного вибору його визначає sąd, спрямовуючи справу до mediacja.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Przewodniczący wydziału без зволікання передає mediator контактні дані stron і pełnomocnicy, зокрема телефони та e-mail, якщо вони є.",
        },
        {
          locator: "§ 3",
          explanation:
            "Mediator — фізична особа з повною дієздатністю та повними публічними правами; особливо названо внесених до відповідних списків або wykaz.",
        },
      ],
      "Стаття визначає порядок добору mediator, але сама не встановлює змісту майбутніх ustalenia чи обов’язку сторін погодитися.",
      "Перед mediacja у справі cudzoziemca перевірте, хто mediator і чи має він потрібні якості; контактні дані та повноваження не замінюють згоди щодо суті спору."
    ),
    reviewed(
      "ppsa-art-116a",
      ppsaLaw.text`Mediator має зберігати bezstronność і без зволікання розкрити обставини, які можуть викликати сумнів у його безсторонності, зокрема відповідні обставини з ${ppsaLaw.article("18", "Art. 18")}.`,
      ppsaLaw.text`${ppsaLaw.article("116a", "Art. 116a")} встановлює вимогу безсторонності mediator та обов’язок повідомити про потенційний конфлікт.`,
      [
        {
          locator: "Art. 116a",
          explanation:
            "Оцінюйте не лише фактичну упередженість, а й обставини, здатні wzbudzić wątpliwość щодо bezstronność.",
        },
        {
          locator: "Art. 116a",
          explanation: ppsaLaw.text`Відсилання до ${ppsaLaw.article("18", "Art. 18")} застосовується відповідно; mediator має ujawnić обставини niezwłocznie.`,
        },
      ],
      "Норма захищає довіру до mediacja, але не робить будь-яку незгоду зі mediator доказом його упередженості.",
      ppsaLaw.text`У справі про pobyt повідомте про конкретний зв’язок mediator зі стороною або organ і вимагайте оцінити bezstronność за ${ppsaLaw.article("116a", "Art. 116a")}, а не лише за результатом переговорів.`
    ),
    reviewed(
      "ppsa-art-116b",
      "Mediator має право переглядати akta справи й отримувати odpisy, kopie або wyciągi, якщо strona не заперечить протягом тижня від ogłoszenie або doręczenie postanowienie про направлення до mediacja.",
      ppsaLaw.text`${ppsaLaw.article("116b", "Art. 116b")} регулює доступ mediator до матеріалів та короткий строк для заперечення сторони.`,
      [
        {
          locator: "Art. 116b",
          explanation:
            "Звірте початок tygodniowy терміну з ogłoszenie або doręczenie postanowienie, яким сторони направлено до mediacja.",
        },
        {
          locator: "Art. 116b",
          explanation:
            "Заперечення стосується перегляду akt mediator; воно не є автоматичною відмовою від усієї mediacja.",
        },
      ],
      "Доступ mediator до akt обмежений механізмом незгоди, передбаченим статтею; не приписуйте цій нормі загальне право mediator витребувати нові докази.",
      "Якщо в aktach є чутливі дані про pobyt, перевірте дату postanowienie та за потреби вчасно подайте заперечення щодо перегляду akt mediator."
    ),
    reviewed(
      "ppsa-art-116c",
      "Postępowanie mediacyjne не є jawne; mediator, strony та інші учасники зобов’язані зберігати в таємниці факти, про які дізналися, якщо strony не домовляться інакше. Пропозиції, факти й oświadczenia mediacja після її завершення не можна використовувати, крім ustalenia з протоколу.",
      ppsaLaw.text`${ppsaLaw.article("116c", "Art. 116c")} поєднує непублічність mediacja, обов’язок tajemnica та обмеження подальшого використання матеріалів переговорів.`,
      [
        {
          locator: "§ 1–2",
          explanation:
            "Mediacja nie jest jawne, а обов’язок таємниці охоплює mediator, strony й інші особи; strony можуть домовитися інакше.",
        },
        {
          locator: "§ 3",
          explanation:
            "Після завершення не використовуються propozycje ugodowe, ujawnione fakty чи oświadczenia; виняток — ustalenia, внесені до protokołu mediacja.",
        },
      ],
      "Захист конфіденційності стимулює переговори, але не перешкоджає використанню належно оформлених ustalenia з протоколу в межах закону.",
      "Не покладайтеся на неформальні висловлювання під час mediacja у подальшій skarga про pobyt; визначте, що саме внесено до protokół як ustalenia."
    ),
    reviewed(
      "ppsa-art-116d",
      "Mediator має право на wynagrodzenie і zwrot wydatków, якщо не погодився працювати без оплати; ці koszty pokrywają strony. Міністр визначає їхній розмір і відшкодовувані витрати в rozporządzenie.",
      ppsaLaw.text`${ppsaLaw.article("116d", "Art. 116d")} регулює оплату mediator і делегує міністру визначення ставок та витрат.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Оплата не виникає, якщо mediator погодився вести mediacja без wynagrodzenie; в іншому разі wynagrodzenie і wydatki покривають strony.",
        },
        {
          locator: "§ 2",
          explanation:
            "Розмір і види відшкодовуваних витрат визначаються rozporządzenie з урахуванням виду справи та ефективного проведення mediacja.",
        },
      ],
      "Стаття не встановлює індивідуальну частку кожної сторони і не означає, що будь-яка витрата mediator автоматично підлягає оплаті.",
      "До згоди на mediacja у спорі про pobyt з’ясуйте порядок koszty та чи mediator працює без оплати; не вважайте безкоштовність автоматичною."
    ),
    reviewed(
      "ppsa-art-116e",
      "Mediator складає protokół mediacja із часом і місцем, даними skarżący та organ, даними mediator, ustalenia щодо способу вирішення та підписами; копії без зволікання надсилаються сторонам і sąd.",
      ppsaLaw.text`${ppsaLaw.article("116e", "Art. 116e")} визначає обов’язковий зміст protokół z przebiegu postępowania mediacyjnego та його адресатів.`,
      [
        {
          locator: "§ 1–2",
          explanation:
            "Протокол складає mediator; перевірте п’ять елементів, включно з адресами та підписами mediator, skarżący і organ.",
        },
        {
          locator: "§ 3",
          explanation:
            "Mediator niezwłocznie doręcza odpis protokołu сторонам і sąd, перед яким триває postępowanie.",
        },
      ],
      "Протокол фіксує ustalenia mediacja, але не підміняє акт organ, який має бути виданий або виконаний у межах компетencji.",
      "Зіставте odpis protokołu у справі про pobyt з тим, що фактично погоджено, і перевірте, чи копію отримав sąd та кожна strona."
    ),
    reviewed(
      "ppsa-art-117",
      "На підставі ustalenia mediacja organ у межах своєї właściwość і kompetencja uchyla або zmienia zaskarżony akt чи виконує/вчиняє іншу czynność; без ustalenia справа підлягає розгляду sąd.",
      ppsaLaw.text`${ppsaLaw.article("117", "Art. 117")} пояснює, що саме може зробити organ після результативної mediacja і що відбувається, якщо домовленості немає.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Порівняйте ustalenia з повноваженнями organ: він діє лише в межах właściwość і kompetencja та відповідно до обставин справи.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо strony не домовилися про спосіб załatwienia, mediacja не завершує судовий контроль — справу розглядає sąd.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("117", "Art. 117")} не гарантує uchylenie або zmiana рішення: наслідок залежить від ustalenia, повноважень organ і фактичного виконання.`,
      "У спорі щодо pobyt перевірте, який акт або czynność organ зобов’язався виконати за protokół, і не вважайте домовленість заміною нового законного rozstrzygnięcia."
    ),
    reviewed(
      "ppsa-art-118",
      ppsaLaw.text`На akt або czynność, видані на підставі ustalenia з ${ppsaLaw.article("117", "Art. 117 § 1")}, можна подати skargę до WSA протягом тридцяти днів від doręczenie акта або виконання/вчинення дії; без такої skarga або після її oddalenie sąd umarza первісне postępowanie mediacja.`,
      ppsaLaw.text`${ppsaLaw.article("118", "Art. 118")} встановлює окремий тридцятиденний контроль за результатом mediacja та наслідок для первісної справи.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Строк 30 днів залежить від виду результату: doręczenie aktu або день wykonania чи podjęcia czynności; skargę розглядають разом із первісною skarga.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо нову skarga не подано або її oddalono, sąd umarza postępowanie у справі, де проводилася mediacja.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("118", "Art. 118")} не робить akt після mediacja остаточно правильним: він передбачає окрему skarga і пов’язаний наслідок umorzenie.`,
      "Після домовленості про pobyt не пропустіть новий 30-денний строк на skarga до WSA, якщо organ видав оскаржуваний akt або виконав czynność."
    ),
    reviewed(
      "ppsa-art-119",
      "Sprawa може розглядатися в tryb uproszczony, зокрема при wada nieważności або підставі wznowienie, за wniosek сторони без вимоги rozprawa іншої сторони протягом 14 днів, щодо визначених postanowienia, bezczynność або przewlekłość, а також для рішення з KPA postępowanie uproszczone.",
      ppsaLaw.text`${ppsaLaw.article("119", "Art. 119")} перелічує п’ять самостійних підстав, за яких справа може перейти до tryb uproszczony.`,
      [
        {
          locator: "pkt 1",
          explanation: ppsaLaw.text`Встановіть конкретну wada nieważności за ${kpaLaw.article("156", "Art. 156 § 1 KPA")} або інше порушення, що дає підставу для wznowienie postępowania.`,
        },
        {
          locator: "pkt 2",
          explanation:
            "Wniosek сторони спрацьовує лише якщо жодна інша strona протягом 14 днів від zawiadomienie не зажадає rozprawa.",
        },
        {
          locator: "pkt 3–4",
          explanation:
            "До переліку належать визначені postanowienia, на які służy zażalenie або які завершують postępowanie, а також bezczynność і przewlekłe prowadzenie postępowania.",
        },
        {
          locator: "pkt 5",
          explanation:
            "Окрема підстава — decyzja, видана в KPA postępowanie uproszczone за Dział II, Rozdział 14 KPA.",
        },
      ],
      "Tryb uproszczony змінює процесуальний спосіб розгляду, але не послаблює вимоги до предмета skarga й не гарантує її задоволення.",
      ppsaLaw.text`Для skarga на рішення про pobyt знайдіть у матеріалах конкретний пункт ${ppsaLaw.article("119", "Art. 119")} і перевірте, чи інша strona не вимагала rozprawa у 14-денний строк.`
    ),
    reviewed(
      "ppsa-art-120",
      "У tryb uproszczony sąd розглядає справу на posiedzenie niejawnym у складі трьох sędziowie.",
      ppsaLaw.text`${ppsaLaw.article("120", "Art. 120")} встановлює базову форму і склад суду для tryb uproszczony.`,
      [
        {
          locator: "Art. 120",
          explanation:
            "Перевірте, що справа справді направлена до tryb uproszczony; саме тоді діють posiedzenie niejawne і склад трьох sędziowie.",
        },
      ],
      "Це правило про форму та склад розгляду, а не про висновок щодо законності decyzja про pobyt.",
      ppsaLaw.text`У повідомленні про судову справу cudzoziemca відрізняйте tryb uproszczony від звичайної rozprawa і читайте, чи немає рішення за ${ppsaLaw.article("122", "Art. 122")}.`
    ),
    reviewed(
      "ppsa-art-121",
      ppsaLaw.text`Sprawa може бути також розглянута в tryb uproszczony у випадку, про який йдеться в ${ppsaLaw.article("55", "Art. 55 § 2")}.`,
      ppsaLaw.text`${ppsaLaw.article("121", "Art. 121")} додає окрему підставу tryb uproszczony через відсилання до ${ppsaLaw.article("55", "Art. 55 § 2")}.`,
      [
        {
          locator: "Art. 121",
          explanation: ppsaLaw.text`Не замінюйте відсилання загальним припущенням: спочатку прочитайте умову ${ppsaLaw.article("55", "Art. 55 § 2")} у фактах конкретної справи.`,
        },
      ],
      ppsaLaw.text`Стаття лише відкриває ще одну процесуальну можливість і не встановлює самостійно змісту ${ppsaLaw.article("55", "Art. 55 § 2")} або результату skarga.`,
      ppsaLaw.text`Якщо суд посилається на ${ppsaLaw.article("121", "Art. 121")} у спорі про pobyt, перевірте повний текст ${ppsaLaw.article("55", "Art. 55 § 2")} і підставу, яку зазначено в aktach.`
    ),
    reviewed(
      "ppsa-art-122",
      "Sąd, який розглядає справу в tryb uproszczony, може передати її для розгляду на rozprawa.",
      ppsaLaw.text`${ppsaLaw.article("122", "Art. 122")} дозволяє суду відмовитися від спрощеної форми posiedzenie, якщо для конкретної справи потрібна rozprawa.`,
      [
        {
          locator: "Art. 122",
          explanation:
            "Передача на rozprawa є можливістю sąd, а не автоматичним правом сторони; перевірте відповідне postanowienie або zarządzenie в aktach.",
        },
      ],
      "Передача до rozprawa змінює форму розгляду, але не визначає, чи буде skarga задоволена.",
      ppsaLaw.text`У справі про pobyt стежте за зміною форми розгляду: після передачі за ${ppsaLaw.article("122", "Art. 122")} перевірте нове zawiadomienie і підготуйте усні пояснення.`
    ),
    reviewed(
      "ppsa-art-123",
      "Postępowanie ulega zawieszeniu z mocy prawa, якщо sąd припинив czynności через siła wyższa.",
      ppsaLaw.text`${ppsaLaw.article("123", "Art. 123")} передбачає автоматичне zawieszenie, коли надзвичайна сила фактично зупиняє діяльність sąd.`,
      [
        {
          locator: "Art. 123",
          explanation:
            "Встановіть одночасно siła wyższa і zaprzestanie czynności przez sąd; звичайна затримка або відсутність руху справи самі по собі не тотожні цій підставі.",
        },
      ],
      ppsaLaw.text`Zawieszenie з ${ppsaLaw.article("123", "Art. 123")} зупиняє рух судового провадження за законом, але не вирішує skarga і не створює права на pobyt.`,
      "У справі cudzoziemca зафіксуйте офіційну підставу zawieszenie та її вплив на строк; не називайте кожну затримку sąd siła wyższa без підтвердження."
    ),
    reviewed(
      "ppsa-art-124",
      ppsaLaw.text`Sąd зобов’язаний zawiesić postępowanie з urzędu у випадках, названих у ${ppsaLaw.article("124", "§ 1")}, зокрема смерті або втрати zdolność сторони, недоліків органів юридичної особи, неподоланної відсутності зв’язку, upadłość, правового питання до TK або TSUE та припинення zarząd sukcesyjny; ${ppsaLaw.article("124", "§ 4")} додає випадок на wniosek BFG.`,
      ppsaLaw.text`${ppsaLaw.article("124", "Art. 124")} перелічує обов’язкові підстави zawieszenie з urzędu та спеціальне zawieszenie на wniosek Bankowy Fundusz Gwarancyjny.`,
      [
        {
          locator: "§ 1 pkt 1–4",
          explanation:
            "Перевірте смерть або втрату процесуальної/судової здатності, неможливість дії органів jednostka organizacyjna, втрату зв’язку з sąd через надзвичайні події та upadłość щодо предмета masy upadłości.",
        },
        {
          locator: "§ 1 pkt 5–7",
          explanation: ppsaLaw.text`Підставами також є передання pytanie prawne TK або TSUE, випадок ${ppsaLaw.article("56", "Art. 56")} та припинення функції або zarząd sukcesyjny.`,
        },
        {
          locator: "§ 2–3",
          explanation: ppsaLaw.text`Для ${ppsaLaw.article("124", "§ 1 pkt 1, 4 і 7")} zawieszenie діє від події; подія після zamknięcie rozprawy не зупиняє видання orzeczenie. Після смерті провадження не зупиняють, якщо предмет стосується лише прав, тісно пов’язаних з померлим.`,
        },
        {
          locator: "§ 4",
          explanation:
            "На wniosek BFG sąd zawiesza справу сторони в restrukturyzacja, коли це необхідно для prawidłowe prowadzenie przymusowej restrukturyzacji.",
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("124", "Art. 124")} зупиняє рух справи лише за конкретною статутною підставою; зупинення не є вирішенням законності адміністративної decyzja.`,
      ppsaLaw.text`У справі cudzoziemca перевірте, чи подія справді відповідає конкретному пункту ${ppsaLaw.article("124", "§ 1")}, дату її настання та умови podjęcie; не переносіть правила про смерть сторони на звичайну зміну адреси.`
    ),
    reviewed(
      "ppsa-art-125",
      ppsaLaw.text`Sąd може zawiesić postępowanie з urzędu, якщо результат залежить від іншого провадження або процедури, виявленого кримінального/дисциплінарного czyn, неможливо надати справі хід через адресу чи невиконане zarządzenie скаржника, або помер pełnomocnik; ${ppsaLaw.article("125", "§ 2")} регулює початок такого іншого провадження.`,
      ppsaLaw.text`${ppsaLaw.article("125", "Art. 125")} містить факультативні підстави zawieszenie з urzędu та спосіб дій, коли залежне postępowanie ще не розпочато.`,
      [
        {
          locator: "§ 1 pkt 1–1a",
          explanation:
            "Залежність може стосуватися іншого administracyjne, sądowoadministracyjne, sądowe провадження, TK, TSUE або процедури спору про podwójne opodatkowanie.",
        },
        {
          locator: "§ 1 pkt 2–4",
          explanation:
            "Окремо перевірте можливий вплив кримінального чи дисциплінарного czyn, відсутність/помилковість адреси або невиконання zarządzenia, а також смерть pełnomocnik, якщо strona не діє особисто.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо початок кримінального чи адміністративного провадження залежить від wniosek strony, sąd встановлює строк для його wszczęcie; інакше може звернутися до właściwy organ.",
        },
      ],
      ppsaLaw.text`Zawieszenie за ${ppsaLaw.article("125", "Art. 125")} є можливістю sąd і вимагає зв’язку залежного питання з вирішенням справи, а не просто наявності паралельної процедури.`,
      "У skarga про pobyt поясніть, чому інше провадження реально впливає на результат; невиконання wezwanie або неправильна адреса може зупинити рух справи окремо від суті спору."
    ),
    reviewed(
      "ppsa-art-126",
      "Sąd може також zawiesić postępowanie на zgodny wniosek stron.",
      ppsaLaw.text`${ppsaLaw.article("126", "Art. 126")} допускає zawieszenie за спільною заявою всіх stron, без твердження, що суд зобов’язаний її прийняти.`,
      [
        {
          locator: "Art. 126",
          explanation:
            "Перевірте, чи wniosek справді zgodny всіх stron; остаточне рішення про zawieszenie приймає sąd.",
        },
      ],
      "Зупинення за спільною заявою призупиняє рух справи, але не вирішує skarga і не змінює матеріальне право на pobyt.",
      ppsaLaw.text`Перш ніж просити про zawieszenie судової справи щодо pobyt, узгодьте позицію всіх stron і врахуйте мінімальний строк до podjęcie за ${ppsaLaw.article("129", "Art. 129")}.`
    ),
    reviewed(
      "ppsa-art-127",
      "При zawieszenie за zgodny wniosek або неможливості надати справі подальший хід зупиняються лише terminy sądowe; в інших випадках жодні строки не біжать і після podjęcie починаються спочатку. Під час zawieszenie sąd майже не чинить дій, а дії stron щодо інших предметів діють після podjęcie.",
      ppsaLaw.text`${ppsaLaw.article("127", "Art. 127")} розрізняє наслідки для строків залежно від підстави zawieszenie та обмежує дії суду й сторін у період паузи.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Для zgodny wniosek або niemożność nadania sprawie dalszego biegu зупиняється лише перебіг terminy sądowe; вони продовжуються від дня podjęcie.",
        },
        {
          locator: "§ 2",
          explanation:
            "В інших випадках жодні terminy не біжать і після podjęcie рахуються від початку; terminy sądowe за потреби встановлюють заново.",
        },
        {
          locator: "§ 3",
          explanation:
            "Під час zawieszenie sąd діє лише для podjęcie або wstrzymanie wykonania aktu/czynności; інші дії stron дають ефект лише від podjęcie.",
        },
      ],
      ppsaLaw.text`Наслідок для конкретного строку залежить від підстави zawieszenie; не можна автоматично застосовувати правило ${ppsaLaw.article("127", "§ 1")} до кожної паузи.`,
      "У справі про pobyt зафіксуйте вид zawieszenie, дату podjęcie та кожен процесуальний строк окремо; не подавайте pismo, виходячи з припущення, що всі строки просто продовжилися."
    ),
    reviewed(
      "ppsa-art-128",
      "Sąd з urzędu postanowi podjąć postępowanie, коли припиниться причина zawieszenie, зокрема після встановлення następcа правного, представника, завершення іншого провадження або визначення наступного zarządca sukcesyjny; після року без спадкоємців суд може звернутися про kurator spadku.",
      ppsaLaw.text`${ppsaLaw.article("128", "Art. 128")} визначає podjęcie після припинення причини zawieszenie та спеціальні моменти для різних підстав.`,
      [
        {
          locator: "§ 1 pkt 1–3",
          explanation:
            "Після смерті сторони потрібні zgłoszenie або wskazanie наступників/zarządca або ustanowienie kurator; після втрати zdolność чи представника — відповідний następca або представник.",
        },
        {
          locator: "§ 1 pkt 4–6",
          explanation:
            "При залежності від іншого провадження podjęcie зазвичай пов’язане з prawomocność його завершення, але sąd може діяти раніше; окремо названі zarządca sukcesyjny.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо протягом року після postanowienie про zawieszenie не з’явився спадкоємець і немає podjęcie з zarządca, sąd може звернутися до sąd spadku про kurator; це може зробити referendarz sądowy.",
        },
      ],
      "Podjęcie відновлює рух конкретної судової справи, але не усуває матеріальних спорів щодо рішення organ.",
      "У справі cudzoziemca після усунення причини zawieszenie подайте підтвердження наступника або іншої події й перевірте, від якої дати знову рахуються terminy."
    ),
    reviewed(
      "ppsa-art-129",
      "При zawieszenie на zgodny wniosek stron sąd podjmie postępowanie на wniosek будь-якої з них не раніше ніж через три місяці; при zawieszenie за wniosek BFG — на wniosek цього Fundusz.",
      ppsaLaw.text`${ppsaLaw.article("129", "Art. 129")} визначає, хто і коли може ініціювати podjęcie для двох спеціальних видів zawieszenie.`,
      [
        {
          locator: "§ 1",
          explanation:
            "Для zawieszenie на zgodny wniosek достатній wniosek однієї сторони, але podjęcie можливе не раніше трьох місяців від zawieszenie.",
        },
        {
          locator: "§ 2",
          explanation: ppsaLaw.text`У випадку ${ppsaLaw.article("124", "Art. 124 § 4")} подати wniosek про podjęcie може Bankowy Fundusz Gwarancyjny.`,
        },
      ],
      "Стаття регулює відновлення руху після двох видів zawieszenie; вона не встановлює загального строку розгляду skarga.",
      "Якщо справа про pobyt була зупинена за спільною заявою, відмітьте тримісячну дату і подайте wniosek про podjęcie від імені належної сторони, коли це дозволено."
    ),
  ],
})
