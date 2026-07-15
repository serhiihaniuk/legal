import { createLegalTextAuthor, type LegalTextValue } from "../../legal-text"
import type { LegalProvisionId } from "../../contracts"

const kpaLaw = createLegalTextAuthor("kpa")
const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SCHENGEN_BORDERS_CODE_URL =
  "https://eur-lex.europa.eu/eli/reg/2016/399/oj"
const SIS_2018_1860_URL = "https://eur-lex.europa.eu/eli/reg/2018/1860/oj"
const LOCAL_BORDER_TRAFFIC_URL =
  "https://eur-lex.europa.eu/eli/reg/2006/1931/oj"
import { defineEditorialPart } from "../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type DraftClaim = {
  kind: "statute-text" | "practical-inference"
  text: LegalTextValue
  sourceLocator: string
}

type DraftRule = {
  locator: string
  explanation: LegalTextValue
}

const provisionId = (article: string) =>
  `ustawa-o-cudzoziemcach-art-${article}` as ForeignersActProvisionId

const draftArticle = (
  article: string,
  claims: readonly DraftClaim[],
  summary: LegalTextValue,
  rules: readonly DraftRule[],
  legalEffect: LegalTextValue,
  foreignersCase: LegalTextValue
) => ({
  provisionId: provisionId(article),
  reviewStatus: "reviewed" as const,
  claims,
  summary,
  rules,
  legalEffect,
  foreignersCase,
})

export const foreignersActPart01b =
  defineEditorialPart<"ustawa-o-cudzoziemcach">({
    documentId: "ustawa-o-cudzoziemcach",
    editionId: "ustawa-o-cudzoziemcach-2025-1079",
    legalStateDate: "2026-07-14",
    verifiedAt: "2026-07-15",
    entries: [
      draftArticle(
        "26",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("26", "Art. 26")} ust. 1 делегує ministrowi właściwemu do spraw wewnętrznych у porozumieniu з ministrem właściwym do spraw zagranicznych визначити в drodze rozporządzenia необхідні środki finansowe та документи для їх підтвердження, а також документи про cel і czas trwania планованого pobytu.`,
            sourceLocator: "Art. 26 ust. 1 pkt 1–3",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("26", "Art. 26")} ust. 2 вимагає диференціювати wysokość środków залежно від cel або długość pobytu так, щоб покривалися zakwaterowanie, wyżywienie та tranzyt або podróż powrotna.`,
            sourceLocator: "Art. 26 ust. 2",
          },
        ],
        "Стаття є делегацією для підзаконного акта про фінансові кошти й документи, які можуть підтвердити їх законне отримання, а також cel і тривалість планованого pobytu.",
        [
          {
            locator: "ust. 1 pkt 1 lit. a–c",
            explanation:
              "Майбутнє rozporządzenie має охопити кошти на utrzymanie, podróż powrotna та tranzyt до держави, яка дозволить в’їзд.",
          },
          {
            locator: "ust. 1 pkt 2–3",
            explanation:
              "Закон називає також документи про можливість законно отримати кошти та документи про cel і czas trwania pobytu, якщо від них залежить розмір коштів.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Розмір має бути диференційований так, щоб забезпечити покриття житла, харчування, транзиту або повернення.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("26", "Art. 26")} сама не встановлює конкретної суми або вичерпного переліку документів: їх треба шукати в чинному розporządzenie, застосовному до дати та обставин справи.`,
        foreignersLaw.text`Для перевірки в’їзду знайдіть актуальне rozporządzenie за ${foreignersLaw.article("26", "art. 26")}, визначте cel і строк pobytu та зіставте з ним докази коштів і можливості їх законного отримання.`
      ),
      draftArticle(
        "27",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("27", "Art. 27")} передбачає застосування рішення Ради 94/795/WSiSW до перетину кордону й pobyt у Польщі учнів шкіл із państw trzecich, які беруть участь у шкільній екскурсії з іншої держави-члена UE.`,
            sourceLocator: "Art. 27",
          },
        ],
        "Стаття відсилає до окремого рішення Ради щодо учнів із państw trzecich, які їдуть у шкільній групі з іншої держави-члена Unii Europejskiej.",
        [
          {
            locator: "cały przepis",
            explanation:
              "Спеціальний режим пов’язаний одночасно зі статусом учня, шкільною екскурсією з іншої держави-члена UE та перетином кордону і pobyt у Польщі.",
          },
        ],
        "Стаття не створює загального звільнення для будь-якого неповнолітнього чи туриста; наслідок залежить від умов і документів, передбачених названим рішенням Ради.",
        "У справі підтвердьте, що особа є учнем школи з państwa trzeciego, входить до шкільної екскурсії з іншої держави-члена UE і має документи для цього спеціального режиму."
      ),
      draftArticle(
        "28",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("28", "Art. 28")} ust. 1 передбачає відмову у в’їзді, зокрема за відсутності чинного dokument podróży, wizy або іншого документа, перевищенні допустимого 90/180 pobytu, непідтвердженні cel і умов pobytu, недостатніх środków finansowych, підроблених документах, записі у wykaz або SIS, загрозі zdrowie publiczne чи міркуваннях безпеки та porządku publicznego.`,
            sourceLocator: "Art. 28 ust. 1 pkt 1–10",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("28", "Art. 28")} ust. 2–8 встановлює винятки та обмеження застосування окремих підстав, зокрема для міжнародного захисту, транзиту, членів екіпажу та визначених режимів mobilności.`,
            sourceLocator: "Art. 28 ust. 2–8",
          },
        ],
        "Стаття містить перелік підстав odmowa wjazdu і низку спеціальних винятків та обмежень. Перевірка має охоплювати не лише документ, а й cel, строк, кошти та безпекові підстави.",
        [
          {
            locator: "ust. 1 pkt 1–5",
            explanation: foreignersLaw.text`Перевіряються документ podróży і право на в’їзд та pobyt, документ за ${foreignersLaw.article("25", "art. 25")} ust. 1 pkt 2 lit. a, межа 90 dni w każdym okresie 180 dni, підтвердження cel і умов pobytu та кошти на pobyt, повернення або tranzyt.`,
          },
          {
            locator: "ust. 1 pkt 6–10",
            explanation:
              "Окремі підстави стосуються підроблених чи перероблених документів, wykaz cudzoziemców, SIS, загрози zdrowie publiczne та оборони, безпеки, porządku publicznego або stosunków międzynarodowych.",
          },
          {
            locator: "ust. 2–8",
            explanation:
              "Перед висновком перевірте спеціальні винятки й обмеження для конкретного статусу, транзиту, екіпажу та mobilności; вони не замінюють перевірку повного тексту.",
          },
        ],
        foreignersLaw.text`За наявності статутної підстави орган може відмовити у в’їзді з урахуванням винятків ${foreignersLaw.article("28", "art. 28")}; сама відсутність одного документа не пояснює результат, якщо застосовне спеціальне правило.`,
        "Складіть таблицю: dokument podróży, wiza або інша підстава, дні 90/180, cel pobytu, кошти, записи в wykaz/SIS і можливі винятки. Окремо відрізняйте odmowa wjazdu від подальшого рішення про pobyt."
      ),
      draftArticle(
        "29",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("29", "Art. 29")} у чинній редакції позначено як «(uchylony)».`,
            sourceLocator: "Art. 29",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("29", "Art. 29")} скасована (uchylony) і не містить чинного правила.`,
        [
          {
            locator: "Art. 29",
            explanation:
              "У джерельному тексті наведено лише позначку «(uchylony)».",
          },
        ],
        foreignersLaw.text`З поточної редакції ${foreignersLaw.article("29", "Art. 29")} не випливає самостійне чинне право, обов’язок, компетенція або підстава відмови.`,
        foreignersLaw.text`Не використовуйте ${foreignersLaw.article("29", "Art. 29")} як актуальну правову підставу; знайдіть чинну норму для конкретного питання в’їзду або pobyt.`
      ),
      draftArticle(
        "30",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("30", "Art. 30")} виключає застосування ${foreignersLaw.article("23", "art. 23")}, ${foreignersLaw.article("25", "art. 25")}, ${foreignersLaw.article("34", "art. 34")}, ${foreignersLaw.article("35", "art. 35")} та положень, виданих на підставі ${foreignersLaw.article("33", "art. 33")} ust. 5, до перетину кордону, врегульованого kodeks graniczny Schengen.`,
            sourceLocator: "Art. 30",
          },
        ],
        "Стаття визначає межі застосування окремих польських положень, коли перетин кордону регулюється kodeks graniczny Schengen.",
        [
          {
            locator: "cały przepis",
            explanation: foreignersLaw.text`Спочатку встановіть, що конкретний перетин кордону належить до zakres uregulowanego kodeksem granicznym Schengen; лише тоді діє перелік виключень ${foreignersLaw.article("30", "Art. 30")}.`,
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("30", "Art. 30")} не встановлює самостійної підстави для в’їзду чи відмови, а розмежовує застосування названих норм у сфері Schengen.`,
        "У справі зафіксуйте вид кордону й застосовний режим Schengen, після чого не посилайтеся на виключені цією статтею положення як на єдину основу оцінки."
      ),
      draftArticle(
        "31",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("31", "Art. 31")} дозволяє у szczególnie uzasadnionych przypadkach, зокрема через стан здоров’я, не передавати до państwo trzecie особу, якій відмовлено у в’їзді; за загрози життю або здоров’ю їй забезпечується медична допомога за рахунок бюджету państwa.`,
            sourceLocator: "Art. 31 ust. 1–2",
          },
        ],
        "Стаття містить спеціальне гуманітарне правило після odmowa wjazdu: за особливо обґрунтованих обставин особу можуть не передавати до третьої держави, а медичну допомогу фінансує бюджет.",
        [
          {
            locator: "ust. 1",
            explanation:
              "Йдеться саме про cudzoziemiec, якому odmówiono wjazdu; нездійснення передачі пов’язане з szczególnie uzasadnionym przypadkiem, особливо станом здоров’я.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Витрати медичної допомоги покриваються з частини бюджету, якою розпоряджається minister właściwy do spraw wewnętrznych, із коштів Komendant Główny Straży Granicznej.",
          },
        ],
        "Норма не скасовує саму odmowa wjazdu і не є загальним дозволом на pobyt; вона регулює подальше передання та медичну допомогу у визначених обставинах.",
        "Зберіть рішення про odmowa wjazdu, медичні факти й документи про ризик для життя або здоров’я. Не підміняйте спеціальне правило загальним твердженням про право залишитися."
      ),
      draftArticle(
        "32",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("32", "Art. 32")} дозволяє komendant placówki Straży Granicznej за згодою Komendant Główny Straży Granicznej дозволити в’їзд на строк не більше 15 днів у випадку ${foreignersLaw.external("art. 6", SCHENGEN_BORDERS_CODE_URL)} ust. 5 lit. c kodeks graniczny Schengen.`,
            sourceLocator: "Art. 32 ust. 1",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("32", "Art. 32")} ust. 2–3 передбачає повідомлення іншої держави Schengen про такий дозвіл за наявності SIS-запису та виключає застосування Kodeks postępowania administracyjnego у цій справі.`,
            sourceLocator: "Art. 32 ust. 2–3",
          },
        ],
        "Стаття дає вузький механізм дозволу на в’їзд максимум на 15 днів у спеціальному випадку Schengen і визначає обмін інформацією та процесуальне правило.",
        [
          {
            locator: "ust. 1",
            explanation: foreignersLaw.text`Потрібні конкретний випадок ${foreignersLaw.external("art. 6", SCHENGEN_BORDERS_CODE_URL)} ust. 5 lit. c kodeks graniczny Schengen і згода Komendant Główny Straży Granicznej.`,
          },
          {
            locator: "ust. 2",
            explanation:
              "Якщо дані cudzoziemiec є в SIS для odmowa wjazdu і pobytu, про дозвіл повідомляють орган держави, яка внесла запис.",
          },
          {
            locator: "ust. 3",
            explanation:
              "У справі про udzielenie цього дозволу Kodeks postępowania administracyjnego не застосовується.",
          },
        ],
        "Це обмежений дозвіл на конкретний строк і випадок, а не звичайне zezwolenie na pobyt; з тексту не випливає автоматичне продовження після 15 днів.",
        "Перевірте підставу за kodeks graniczny Schengen, згоду компетентного органу, максимальний строк і можливий SIS-запис. Не описуйте цей дозвіл як позитивне рішення у звичайній адміністративній процедурі."
      ),
      draftArticle(
        "32a",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("32a", "Art. 32a")} зобов’язує komendant placówki Straży Granicznej повідомити через Komendant Główny Policji компетентний орган іншої держави Schengen, коли на зовнішньому кордоні у напрямку в’їзду перетинає кордон cudzoziemiec із SIS-записом для цілей ${foreignersLaw.external("art. 3", SIS_2018_1860_URL)} ust. 1 rozporządzenia nr 2018/1860.`,
            sourceLocator: "Art. 32a",
          },
        ],
        "Стаття регулює міждержавне повідомлення про перетин зовнішнього кордону особою з визначеним SIS-записом.",
        [
          {
            locator: "cały przepis",
            explanation: foreignersLaw.text`Умовами є перетин зовнішнього кордону в напрямку в’їзду, SIS-запис для цілей ${foreignersLaw.external("art. 3", SIS_2018_1860_URL)} ust. 1 rozporządzenia nr 2018/1860 та повідомлення через Komendant Główny Policji.`,
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("32a", "Art. 32a")} встановлює інформаційну дію органів і не є самостійним дозволом на в’їзд, підставою pobyt або рішенням про відмову.`,
        foreignersLaw.text`Якщо в матеріалах є посилання на ${foreignersLaw.article("32a", "Art. 32a")}, перевірте напрямок перетину, вид SIS-запису та факт міжорганізаційного повідомлення; не ототожнюйте його з результатом справи про pobyt.`
      ),
      draftArticle(
        "33",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("33", "Art. 33")} визначає, що decyzję o odmowie wjazdu видає komendant placówki Straży Granicznej, від неї належить odwołanie до Komendant Główny Straży Granicznej, а рішення підлягає natychmiastowemu wykonaniu.`,
            sourceLocator: "Art. 33 ust. 1–3",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("33", "Art. 33")} ust. 4–6 регулює відмітку рішення у dokument podróży та delegує міністру спосіб її внесення.`,
            sourceLocator: "Art. 33 ust. 4–6",
          },
        ],
        "Стаття визначає орган, засіб оскарження, виконання та документування decyzja o odmowie wjazdu.",
        [
          {
            locator: "ust. 1–3",
            explanation:
              "Рішення видає komendant placówki Straży Granicznej; odwołanie подається до Komendant Główny Straży Granicznej, а рішення є таким, що підлягає негайному виконанню.",
          },
          {
            locator: "ust. 4–6",
            explanation:
              "Видачу рішення відмічають у документі подорожі, а спосіб відмітки визначається в rozporządzenie.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("33", "Art. 33")} визначає процесуальну рамку відмови на кордоні, але не називає самі матеріальні підстави: їх потрібно встановлювати за ${foreignersLaw.article("28", "Art. 28")} або іншою застосовною нормою.`,
        foreignersLaw.text`Збережіть рішення, дату вручення, відмітку в документі та матеріали контролю. Для оскарження окремо перевірте підставу ${foreignersLaw.article("28", "Art. 28")} і строк та спосіб odwołanie.`
      ),
      draftArticle(
        "34",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("34", "Art. 34")} обмежує postępowanie Straży Granicznej перед рішенням про odmowa wjazdu допитом cudzoziemiec, перевіркою документів, допитом супутників, перевірками у реєстрах та отриманням необхідної інформації; якщо невідповідність умов безсумнівна, дії можуть обмежитися перевіркою документів.`,
            sourceLocator: "Art. 34 ust. 1–2",
          },
        ],
        "Стаття описує обсяг перевірки перед рішенням про відмову у в’їзді та допускає спрощення, коли невиконання умов очевидне.",
        [
          {
            locator: "ust. 1 pkt 1–5",
            explanation:
              "Орган може провести названі в статті допити, контроль документів, перевірки реєстрів та отримання інформації від державних органів, установ, підприємств, організацій або фізичних осіб.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Обмеження лише перевіркою документів можливе, якщо обставини невиконання умов перетину кордону не викликають сумнівів.",
          },
        ],
        "Норма визначає процесуальний обсяг прикордонної перевірки, але сама не доводить, що умови в’їзду виконані або порушені у конкретній справі.",
        "Порівняйте висновок органу з документами та зафіксованими перевірками. Якщо рішення спирається лише на документи, перевірте, чи справді відсутність умови була безсумнівною."
      ),
      draftArticle(
        "35",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("35", "Art. 35")} дозволяє негайно doprowadzić cudzoziemiec до кордону, якщо його затримано у strefa nadgraniczna безпосередньо після ненавмисного і незаконного перетину; орган також забирає odciski linii papilarnych, якщо особу не доставлено негайно.`,
            sourceLocator: "Art. 35 ust. 1–2",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("35", "Art. 35")} ust. 3 зобов’язує передати Komendant Główny Policji образ відбитків, персональні дані та відомості для реєстру ${foreignersLaw.article("428", "art. 428")} ust. 1 pkt 4.`,
            sourceLocator: "Art. 35 ust. 3",
          },
        ],
        "Стаття регулює негайне доставлення до кордону після певного незаконного перетину та пов’язані з цим біометричні дані й реєстрацію.",
        [
          {
            locator: "ust. 1",
            explanation:
              "Потрібні затримання у strefa nadgraniczna та безпосередній зв’язок із ненавмисним перетином кордону всупереч праву.",
          },
          {
            locator: "ust. 2–3",
            explanation:
              "Відбитки беруть, крім випадку негайного doprowadzenie; отримані дані передають Komendant Główny Policji для реєстру, названого в статті.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("35", "Art. 35")} не є процедурою надання дозволу на pobyt і не скасовує необхідності встановити факти затримання та перетину, передбачені статтею.`,
        "У справі встановіть час і місце затримання, характер перетину та чи було негайне doprowadzenie. Окремо перевірте повідомлення про відбитки й дані реєстру."
      ),
      draftArticle(
        "36",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("36", "Art. 36")} делегує ministrowi właściwemu do spraw zdrowia визначити в rozporządzenie перелік choroby zakaźne, які можуть бути підставою odmowa wjazdu через загрозу zdrowie publiczne, та критерії підозри таких хвороб.`,
            sourceLocator: "Art. 36 ust. 1 pkt 1–2",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("36", "Art. 36")} ust. 2 вимагає враховувати епідемічні та особливо небезпечні інфекційні хвороби, humanitarne traktowanie cudzoziemców і запобігання загрозі здоров’ю.`,
            sourceLocator: "Art. 36 ust. 2",
          },
        ],
        "Стаття є делегацією для підзаконного переліку хвороб і критеріїв, пов’язаних із загрозою здоров’ю населення під час в’їзду.",
        [
          {
            locator: "ust. 1",
            explanation:
              "Конкретний wykaz chorób і критерії підозри визначаються в rozporządzenie ministra właściwego do spraw zdrowia.",
          },
          {
            locator: "ust. 2",
            explanation:
              "Підзаконне регулювання має враховувати названі категорії хвороб, humanitarne traktowanie та захист zdrowie publiczne на переході й у Польщі.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("36", "Art. 36")} сама не називає конкретний діагноз і не є автоматичною відмовою; для справи потрібні чинне rozporządzenie та факти, які підпадають під його критерії.`,
        "Перевірте медичні документи, чинний wykaz chorób і критерії підозри на дату контролю. Не робіть висновок про odmowa wjazdu лише з назви хвороби без застосовного підзаконного правила."
      ),
      draftArticle(
        "37",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("37", "Art. 37")} передбачає, що zezwolenia на перетин кордону в ramach małego ruchu granicznego можна надати cudzoziemiec, який виконує умови ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006.`,
            sourceLocator: "Art. 37",
          },
        ],
        foreignersLaw.text`Стаття прив’язує udzielenie zezwolenia на малий прикордонний рух до умов ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006.`,
        [
          {
            locator: "cały przepis",
            explanation: foreignersLaw.text`Потрібно перевірити саме умови ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006; ${foreignersLaw.article("37", "Art. 37")} не повторює їх у власному тексті.`,
          },
        ],
        foreignersLaw.text`Норма створює правову рамку для такого дозволу, але сама по собі не доводить виконання умов ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} і не гарантує його видачу.`,
        foreignersLaw.text`У справі випишіть кожну умову ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006 та підтвердьте її окремим документом; не обмежуйтеся фактом проживання біля кордону.`
      ),
      draftArticle(
        "38",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("38", "Art. 38")} наказує відмовити в udzielenie zezwolenia на перетин кордону в ramach małego ruchu granicznego, якщо cudzoziemiec не виконує умови ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006.`,
            sourceLocator: "Art. 38",
          },
        ],
        foreignersLaw.text`Стаття визначає відмову у дозволі на mały ruch graniczny через невиконання умов ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} розporządzenie nr 1931/2006.`,
        [
          {
            locator: "cały przepis",
            explanation: foreignersLaw.text`Спочатку встановіть конкретну невиконану умову ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)}; загальна незручність або відсутність іншого документа не замінює цього тесту.`,
          },
        ],
        "Наслідок стосується саме udzielenie zezwolenia в режимі малого прикордонного руху; він не є загальною відмовою у в’їзді в усіх режимах.",
        foreignersLaw.text`У рішенні або проєкті аналізу назвіть невиконану умову ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} і доказ, який це підтверджує. Окремо відрізняйте відмову в дозволі від odmowa wjazdu за ${foreignersLaw.article("41", "Art. 41")}.`
      ),
      draftArticle(
        "39",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("39", "Art. 39")} передбачає cofnięcie zezwolenia на mały ruch graniczny, якщо його видано з порушенням ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006 або cudzoziemiec перестав виконувати умови його udzielenia.`,
            sourceLocator: "Art. 39 pkt 1–2",
          },
        ],
        "Стаття регулює скасування дозволу на малий прикордонний рух через первісне порушення умов або їх подальшу втрату.",
        [
          {
            locator: "pkt 1",
            explanation: foreignersLaw.text`Cofnięcie можливе, коли дозвіл був наданий з порушенням умов ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006.`,
          },
          {
            locator: "pkt 2",
            explanation:
              "Окрема підстава — коли після udzielenie дозволу cudzoziemiec перестав виконувати умови для його надання.",
          },
        ],
        "Cofnięcie має одну з двох прямо названих підстав; чинність дозволу не слід оцінювати лише за датою на картці.",
        foreignersLaw.text`Порівняйте умови ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} на дату видачі та на дату перевірки, встановивши, чи йдеться про первісне порушення або подальшу втрату умови.`
      ),
      draftArticle(
        "40",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("40", "Art. 40")} ust. 1 передбачає unieważnienie zezwolenia на mały ruch graniczny, коли особа перебуває після дозволеного строку або поза дозволеною strefa przygraniczna за обставин ${foreignersLaw.article("303", "art. 303")} ust. 1.`,
            sourceLocator: "Art. 40 ust. 1 pkt 1–2",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("40", "Art. 40")} ust. 2 дозволяє unieważnienie, якщо cudzoziemiec зловживає правилами малого руху, перебуваючи в strefa przygraniczna для цілей, відмінних від тих, для яких дозвіл може бути надано.`,
            sourceLocator: "Art. 40 ust. 2",
          },
        ],
        "Стаття відрізняє unieważnienie через прострочення або вихід за дозволену зону від можливого unieważnienie за зловживання метою малого прикордонного руху.",
        [
          {
            locator: "ust. 1 pkt 1–2",
            explanation: foreignersLaw.text`Потрібно встановити прострочення pobyt або перебування поза дозволеною strefa; для другого випадку стаття посилається на ${foreignersLaw.article("303", "art. 303")} ust. 1.`,
          },
          {
            locator: "ust. 2",
            explanation:
              "Зловживання оцінюється через фактичне перебування в strefa przygraniczna з іншою метою, ніж та, для якої допускається zezwolenie.",
          },
        ],
        foreignersLaw.text`Наслідок залежить від конкретної підстави unieważnienie та доведених дат, місця і мети; ${foreignersLaw.article("40", "Art. 40")} не є автоматичним дозволом на інший вид pobyt.`,
        "Зіставте штампи або інші дані перетину, дозволений строк, межі strefa przygraniczna та фактичну мету поїздок із даними zezwolenie."
      ),
      draftArticle(
        "41",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("41", "Art. 41")} ust. 1 перелічує підстави odmowa wjazdu в рамках mały ruch graniczny: відсутність чинного zezwolenie, використання допустимого строку, підроблений дозвіл, запис у wykaz або SIS, загроза zdrowie publiczne чи міркування безпеки та porządku publicznego.`,
            sourceLocator: "Art. 41 ust. 1 pkt 1–7",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("41", "Art. 41")} ust. 2–3 вимагає оформити odmowa wjazdu рішенням і відповідно застосовує ${foreignersLaw.article("33", "art. 33")} ust. 1–3 та ${foreignersLaw.article("34", "art. 34")}.`,
            sourceLocator: "Art. 41 ust. 2–3",
          },
        ],
        "Для малого прикордонного руху стаття містить окремий перелік підстав відмови у в’їзді та відсилає до правил про рішення, оскарження, виконання і перевірку.",
        [
          {
            locator: "ust. 1 pkt 1–7",
            explanation:
              "Перевіряються дозвіл, використаний строк, справжність документа, wykaz, SIS, zdrowie publiczne та безпекові або міжнародні обставини.",
          },
          {
            locator: "ust. 2–3",
            explanation: foreignersLaw.text`Відмова оформлюється decyzja; відповідно застосовуються ${foreignersLaw.article("33", "art. 33")} ust. 1–3 і ${foreignersLaw.article("34", "art. 34")}, тому потрібно перевірити орган, odwołanie, виконання та обсяг перевірки.`,
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("41", "Art. 41")} стосується лише в’їзду в режимі mały ruch graniczny і не замінює підстави відмови для іншого режиму перетину кордону.`,
        "У справі спочатку підтвердьте, що в’їзд відбувається в режимі малого прикордонного руху, потім співвіднесіть факт із конкретним pkt і збережіть decyzja та документи перевірки."
      ),
      draftArticle(
        "42",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("42", "Art. 42")} визначає, що zezwolenie на mały ruch graniczny надає, відмовляє в ньому або cofnie konsul за місцем постійного проживання cudzoziemiec; рішення про відмову або cofnięcie можна оскаржити wniosek o ponowne rozpatrzenie протягом 14 днів.`,
            sourceLocator: "Art. 42 ust. 1–4",
          },
        ],
        "Стаття розподіляє компетенцію консула та встановлює спеціальний засіб і строк перегляду рішення про відмову або cofnięcie дозволу.",
        [
          {
            locator: "ust. 1–2",
            explanation:
              "Konsul за місцем stałego zamieszkania cudzoziemiec приймає рішення про udzielenie, odmowa або cofnięcie; відмова і cofnięcie оформлюються decyzja.",
          },
          {
            locator: "ust. 3–4",
            explanation:
              "До того самого konsul подається wniosek o ponowne rozpatrzenie справи протягом 14 dni від doręczenie decyzja.",
          },
        ],
        foreignersLaw.text`Стаття встановлює процесуальний шлях перегляду, але не скасовує матеріальні умови ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006 або підстави ${foreignersLaw.article("39", "Art. 39")}.`,
        "Перевірте stałe zamieszkanie, орган, вид рішення та дату його doręczenie. Для строку в 14 днів збережіть доказ подання wniosek o ponowne rozpatrzenie."
      ),
      draftArticle(
        "43",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("43", "Art. 43")} передбачає, що unieważnienie zezwolenia на mały ruch graniczny оформлюється decyzja; її видає відповідний komendant Policji або Straży Granicznej, який встановив підставу під час контролю legalność pobytu, а odwołanie подається до wojewoda.`,
            sourceLocator: "Art. 43 ust. 1–3",
          },
        ],
        "Стаття визначає форму рішення про unieważnienie, коло органів, що його видають після контролю, та odwołanie до wojewoda.",
        [
          {
            locator: "ust. 1–2",
            explanation:
              "Рішення приймає один із названих komendant, якщо під час контролю legalność pobytu встановлено обставини для unieważnienie.",
          },
          {
            locator: "ust. 3",
            explanation:
              "Odwołanie спрямовується до wojewoda, właściwego за siedziba органу, який видав рішення.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("43", "Art. 43")} регулює компетенцію та оскарження рішення, але не доводить саму матеріальну підставу unieważnienie без фактів контролю.`,
        "З’ясуйте, який саме komendant видав decyzja, що зафіксував контроль legalność pobytu, та до якого wojewoda і в який строк подається odwołanie."
      ),
      draftArticle(
        "44",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("44", "Art. 44")} вимагає подавати заяву на zezwolenie для mały ruch graniczny на formularz, пред’явити чинний dokument podróży, подати фотографію, докази stałe zamieszkanie у strefa przygraniczna та причини частого перетину, а також здати odciski linii papilarnych.`,
            sourceLocator: "Art. 44 ust. 1–3",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("44", "Art. 44")} ust. 4 передбачає відмову у wszczęcia postępowania, якщо cudzoziemiec не подав відбитки, хоча був зобов’язаний це зробити.`,
            sourceLocator: "Art. 44 ust. 4",
          },
        ],
        "Стаття встановлює форму заяви, ідентифікаційні та підтвердні документи для mały ruch graniczny і наслідок ненадання відбитків.",
        [
          {
            locator: "ust. 1–2",
            explanation:
              "До заяви входять дані особи й документа, місце stałe zamieszkanie, причини частого перетину та дані відвідуваної особи або установи; додаються фото й підтвердні документи.",
          },
          {
            locator: "ust. 3–4",
            explanation:
              "Від cudzoziemiec беруть fingerprints; ненадання їх за обов’язку є підставою odmowa wszczęcia postępowania.",
          },
        ],
        foreignersLaw.text`Подання formularz і документів дозволяє розпочати перевірку, але не гарантує zezwolenie; окремо потрібно виконати умови ${foreignersLaw.external("art. 9", LOCAL_BORDER_TRAFFIC_URL)} rozporządzenia nr 1931/2006.`,
        "Підготуйте копію formularz, чинний документ подорожі, фото, докази проживання в зоні та причини частих поїздок. Збережіть підтвердження здачі відбитків."
      ),
      draftArticle(
        "45",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("45", "Art. 45")} визначає, що в zezwolenie на mały ruch graniczny вносяться відомості за ${foreignersLaw.external("art. 7", LOCAL_BORDER_TRAFFIC_URL)} ust. 3 rozporządzenia nr 1931/2006, стать власника та серія й номер дозволу, а також технічні засоби захисту за rozporządzenie nr 1030/2002.`,
            sourceLocator: "Art. 45 ust. 1–2",
          },
        ],
        "Стаття визначає обов’язкові дані та технічний захист документа про дозвіл на mały ruch graniczny.",
        [
          {
            locator: "ust. 1 pkt 1–3",
            explanation: foreignersLaw.text`Документ містить відомості за ${foreignersLaw.external("art. 7", LOCAL_BORDER_TRAFFIC_URL)} ust. 3 rozporządzenia nr 1931/2006, płeć posiadacza та серію і номер zezwolenia.`,
          },
          {
            locator: "ust. 2",
            explanation:
              "У дозвіл вносяться технічні zabezpieczenia, передбачені rozporządzenie nr 1030/2002.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("45", "Art. 45")} описує зміст і захист документа, але сама не надає дозволу та не доводить право на перетин кордону поза його умовами.`,
        "Порівняйте документ із даними заяви та перевірте наявність обов’язкових реквізитів. Не робіть висновок про чинність лише за серією та номером без перевірки строку й умов."
      ),
      draftArticle(
        "194",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("194", "Art. 194")} делегує ministrowi właściwemu do spraw wewnętrznych визначити в rozporządzenie мінімальні środki finansowe для повернення або tranzyt cudzoziemiec і його утримуваної сім’ї у випадках ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 6–7 або ${foreignersLaw.article("187", "art. 187")} pkt 1 lit. a, а також документи про можливість отримати ці й кошти на utrzymanie за ${foreignersLaw.article("188", "art. 188")}.`,
            sourceLocator: "Art. 194 pkt 1–2",
          },
        ],
        "Стаття є делегацією для фінансових порогів і документів у визначених видах zezwolenie na pobyt czasowy, а не самостійним визначенням суми.",
        [
          {
            locator: "pkt 1",
            explanation:
              "Підзаконний акт має визначити мінімальні кошти на podróż powrotna або tranzyt для cudzoziemiec і членів сім’ї, з урахуванням держави прибуття.",
          },
          {
            locator: "pkt 2",
            explanation: foreignersLaw.text`Також визначаються документи про законну можливість отримати кошти на повернення, транзит і utrzymanie за названими положеннями ${foreignersLaw.article("188", "art. 188")}.`,
          },
        ],
        foreignersLaw.text`Конкретні суми та допустимі документи випливають із чинного rozporządzenie, тому ${foreignersLaw.article("194", "Art. 194")} сама не підтверджує виконання фінансової умови.`,
        foreignersLaw.text`Спочатку встановіть, чи справа підпадає під ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 6–7 або ${foreignersLaw.article("187", "art. 187")} pkt 1 lit. a, потім перевірте чинний акт і докази коштів для заявника та утримуваних членів сім’ї.`
      ),
      draftArticle(
        "195",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("195", "Art. 195")} ust. 1 визначає випадки udzielenie zezwolenia na pobyt stały на czas nieoznaczony, зокрема для визначених дітей, dziecko obywatela polskiego, особи польського походження, подружжя громадянина Польщі, жертви handlu ludźmi, окремих тривалих pobyt, azyl, Karta Polaka та визначеного громадянина Zjednoczonego Królestwa.`,
            sourceLocator: "Art. 195 ust. 1 pkt 1–10",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("195", "Art. 195")} ust. 1 pkt 7 у чинному тексті позначено як «(uchylony)», а ust. 4 встановлює загальні межі визнання pobyt за безперервний: перерва не довша 6 місяців і всі перерви не більше 10 місяців, з винятками у статті.`,
            sourceLocator: "Art. 195 ust. 1 pkt 7; ust. 4",
          },
        ],
        "Стаття містить перелік матеріальних підстав для bezterminowy pobyt stały та правила підрахунку безперервності pobyt; окремий pkt 7 є скасованим.",
        [
          {
            locator: "ust. 1 pkt 1–5",
            explanation:
              "Підстави охоплюють визначені сімейні ситуації, polskie pochodzenie та статус жертви handlu ludźmi з додатковими умовами.",
          },
          {
            locator: "ust. 1 pkt 6–10",
            explanation:
              "Стаття називає спеціальні періоди pobyt, azyl, ważna Karta Polaka та умови для визначеного громадянина Zjednoczonego Królestwa; pkt 7 прямо позначений «(uchylony)».",
          },
          {
            locator: "ust. 2–4",
            explanation:
              "Окремо регулюються польське походження, дохід, зарахування періоду процедури ochrony międzynarodowej та межі перерв у pobyt із передбаченими винятками.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("195", "Art. 195")} визначає підстави для подання та матеріальний тест, але конкретний pkt вимагає власних доказів і перевірки відмовних обставин; скасований pkt 7 не є чинною підставою.`,
        foreignersLaw.text`Визначте точний pkt ${foreignersLaw.article("195", "Art. 195")}, складіть хронологію pobyt і перерв, а для сімейних, польського походження, Karta Polaka чи доходу підготуйте докази саме відповідної умови.`
      ),
      draftArticle(
        "196",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("196", "Art. 196")} ust. 1 передбачає odmowa wszczęcia postępowania про pobyt stały, якщо на день заяви cudzoziemiec перебуває незаконно або в окремих режимах, затриманий чи позбавлений волі, має обов’язок виїзду, підлягає виїзду за ${foreignersLaw.article("299", "art. 299")} ust. 6 або перебуває поза Польщею.`,
            sourceLocator: "Art. 196 ust. 1 pkt 1–6",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("196", "Art. 196")} ust. 1 pkt 7 позначено як «(uchylony)», а ust. 5 додає ненадання odciski linii papilarnych як підставу odmowa wszczęcia; ust. 2–4 передбачають винятки для названих категорій.`,
            sourceLocator: "Art. 196 ust. 1 pkt 7; ust. 2–5",
          },
        ],
        "Стаття стосується допуску заяви до провадження про pobyt stały. Вона містить часово прив’язані перешкоди на день подання, винятки та окрему вимогу щодо відбитків; pkt 7 скасований.",
        [
          {
            locator: "ust. 1 pkt 1–6",
            explanation:
              "Перевірте legalność і підставу pobyt на дату заяви, затримання або ізоляцію, покарання, decyzja o zobowiązaniu do powrotu, обов’язок виїзду та перебування поза Польщею.",
          },
          {
            locator: "ust. 1 pkt 7; ust. 2–4",
            explanation:
              "Pkt 7 має позначку «(uchylony)»; наступні ust. передбачають окремі винятки, зокрема для azyl, дітей та особи польського походження.",
          },
          {
            locator: "ust. 5",
            explanation: foreignersLaw.text`Якщо при поданні або у строк за ${foreignersLaw.article("203", "art. 203")} ust. 5 не здано odciski linii papilarnych для карти pobytu, провадження не розпочинають.`,
          },
        ],
        foreignersLaw.text`Odmowa wszczęcia за ${foreignersLaw.article("196", "Art. 196")} означає процесуальну перешкоду для розгляду заяви, а не висновок, що конкретна підстава ${foreignersLaw.article("195", "Art. 195")} матеріально не виконана; винятки та дата подання мають значення.`,
        foreignersLaw.text`Зафіксуйте статус cudzoziemiec саме в день подання, усі рішення про повернення або ізоляцію та доказ здачі відбитків. Потім перевірте, чи не застосовується виняток ${foreignersLaw.article("196", "Art. 196")} ust. 2–4.`
      ),
      draftArticle(
        "197",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("197", "Art. 197")} ust. 1 передбачає odmowa udzielenia zezwolenia na pobyt stały, якщо не виконано ${foreignersLaw.article("195", "Art. 195")} ust. 1 або існує запис у wykaz чи SIS, безпекова або суспільна перешкода, інтерес Польщі, фіктивний шлюб, неправдиві дані чи документи, податковий борг або невідшкодовані витрати повернення.`,
            sourceLocator: "Art. 197 ust. 1 pkt 1–9",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("197", "Art. 197")} ust. 2–4 обмежує перелік відмовних підстав для осіб з ${foreignersLaw.article("195", "art. 195")} ust. 1 pkt 3, pkt 8 і pkt 10 та виключає застосування ${kpaLaw.article("79", "art. 79")} Kodeks postępowania administracyjnego для встановлення обставин з ust. 1 pkt 7.`,
            sourceLocator: "Art. 197 ust. 2–4",
          },
        ],
        foreignersLaw.text`Стаття містить підстави відмови саме у наданні pobyt stały та спеціальні правила для окремих підстав ${foreignersLaw.article("195", "Art. 195")}.`,
        [
          {
            locator: "ust. 1 pkt 1–6",
            explanation: foreignersLaw.text`Перевіряються виконання вимог ${foreignersLaw.article("195", "Art. 195")}, записи у wykaz/SIS, оборона, безпека, porządek publiczny, interes Polski та шлюб, укладений або підтримуваний для обходу правил.`,
          },
          {
            locator: "ust. 1 pkt 7–9",
            explanation:
              "Окремі підстави стосуються неправдивих даних чи документів, неправди або підробки, податків та невідшкодованих витрат decyzja o zobowiązaniu do powrotu.",
          },
          {
            locator: "ust. 2–4",
            explanation: foreignersLaw.text`Для polskie pochodzenie, azyl і визначеного громадянина Zjednoczonego Królestwa застосовуються названі в цих ust. скорочені переліки підстав; для ust. 1 pkt 7 ${kpaLaw.article("79", "art. 79")} KPA не застосовується.`,
          },
        ],
        foreignersLaw.text`Наявність підстави ${foreignersLaw.article("197", "Art. 197")} може вести до відмови, але її застосування залежить від точного pkt ${foreignersLaw.article("195", "Art. 195")}, винятків ust. 2–4 та доказів у справі; це не тотожне автоматичній відмові за будь-яку невідповідність документа.`,
        foreignersLaw.text`Спочатку визначте підставу ${foreignersLaw.article("195", "Art. 195")}, потім перевірте кожну релевантну відмовну обставину й докази її наявності. Для сумнівів щодо даних або документів врахуйте спеціальне правило ${foreignersLaw.article("197", "Art. 197")} ust. 4.`
      ),
    ],
  })
