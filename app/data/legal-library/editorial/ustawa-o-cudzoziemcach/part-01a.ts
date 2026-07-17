import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
  type LegalTextValue,
} from "../../legal-text"
import type { LegalProvisionId } from "../../contracts"

const kpaLaw = createLegalTextAuthor("kpa")
const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
import { defineEditorialPart } from "../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type EditorialEntry = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed"
  claims: readonly {
    kind: "statute-text" | "practical-inference"
    text: LegalTextValue
    sourceLocator: string
  }[]
  summary: LegalTextValue
  rules: readonly { locator: string; explanation: LegalTextValue }[]
  legalEffect: LegalTextValue
  foreignersCase: LegalTextValue
}

const provisionId = (article: string) =>
  `ustawa-o-cudzoziemcach-art-${article}` as ForeignersActProvisionId

const reviewedArticle = (
  article: string,
  claims: EditorialEntry["claims"],
  summary: LegalTextValue,
  rules: EditorialEntry["rules"],
  legalEffect: LegalTextValue,
  foreignersCase: LegalTextValue
): EditorialEntry => ({
  provisionId: provisionId(article),
  reviewStatus: "reviewed",
  claims,
  summary,
  rules,
  legalEffect,
  foreignersCase,
})

export const foreignersActPart01a =
  defineEditorialPart<"ustawa-o-cudzoziemcach">({
    documentId: "ustawa-o-cudzoziemcach",
    editionId: "ustawa-o-cudzoziemcach-2025-1079",
    legalStateDate: "2026-07-14",
    verifiedAt: "2026-07-15",
    entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
      reviewedArticle(
        "1",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("1", "Art. 1")} визначає zasady i warunki wjazdu cudzoziemców до Польщі, przejazdu, pobytu і wyjazdu, а також tryb postępowania та właściwe organy.`,
            sourceLocator: "Art. 1 zdanie pierwsze",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`У переліку ${foreignersLaw.article("1", "Art. 1")} частина пунктів позначена як (uchylony); решта пунктів називає директиви ЄС, імплементацію яких здійснює закон у межах свого регулювання.`,
            sourceLocator: "Art. 1 pkt 1–18",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("1", "Art. 1")} окреслює предмет ustawa o cudzoziemcach: в’їзд, транзит, pobyt, виїзд, процедуру та компетентні органи.`,
        [
          {
            locator: "Art. 1 zdanie pierwsze",
            explanation:
              "Спочатку визначте, чи питання стосується wjazdu, przejazdu, pobytu, wyjazdu, trybu postępowania або właściwości органу.",
          },
          {
            locator: "Art. 1 pkt 1–18",
            explanation:
              "Це технічний перелік імплементованих директив, а не самостійна підстава для візи, pobyt чи роботи; позначені uchylony пункти не відновлюють чинне правило.",
          },
        ],
        "Стаття визначає сферу закону, але сама не надає конкретного дозволу на wjazd, pobyt або wykonywanie pracy.",
        foreignersLaw.text`Класифікуйте питання за предметом ${foreignersLaw.article("1", "Art. 1")}, потім переходьте до спеціальної норми про документ, умову, орган і засіб оскарження. Не посилайтеся на перелік директив як на пряму матеріальну підставу.`
      ),
      reviewedArticle(
        "2",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("2", "Art. 2")} встановлює, що ustawa не застосовується до дипломатичних і консульських осіб за умовами взаємності та документів, до громадян UE/EFTA/Швейцарії та їхніх сімей, до визначених членів сімей громадян Польщі, а також до визначених осіб під Umowa Wystąpienia.`,
            sourceLocator: "Art. 2 pkt 1–4",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Для дипломатичних і консульських осіб ${foreignersLaw.article("2", "Art. 2")} pkt 1 прямо зберігає застосування перелічених норм, зокрема ${foreignersLaw.article("23", "art. 23")}, ${foreignersLaw.article("32", "32")}, ${foreignersLaw.article("58", "58")}, ${foreignersLaw.article("60", "60")}–${foreignersLaw.article("63", "63")}, ${foreignersLaw.article("66", "66")} ust. 4–5, 67–74, 78 ust. 1, 79 ust. 1–2, 80, 90–92, 96–97.`,
            sourceLocator: "Art. 2 pkt 1",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("2", "Art. 2")} — це правило про zakres zastosowania закону та винятки, а не загальне звільнення кожного громадянина ЄС чи члена сім’ї від усіх польських правил.`,
        [
          {
            locator: "Art. 2 pkt 1",
            explanation:
              "Для дипломатичного статусу перевіряйте одночасно взаємність, документ функції та перелік норм, які закон прямо залишає застосовними.",
          },
          {
            locator: "Art. 2 pkt 2–4",
            explanation:
              "Визначте громадянство, сімейний зв’язок і факт приєднання або спільного перебування; для громадян UK перевірте саме категорію Umowa Wystąpienia.",
          },
        ],
        foreignersLaw.text`Якщо особа підпадає під ${foreignersLaw.article("2", "Art. 2")}, відповідний режим ustawa може не застосовуватися, крім прямо збережених положень. Це не є автоматичним підтвердженням права на pobyt або pracę.`,
        foreignersLaw.text`Зафіксуйте громадянство, статус члена сім’ї, документ функції та дату. Не змішуйте режим ${foreignersLaw.article("2", "Art. 2")} з режимом звичайного cudzoziemiec за цією ustawa.`
      ),
      reviewedArticle(
        "3",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("3", "Art. 3")} містить легальні визначення, зокрема azyl, cudzoziemiec, dokument podróży, doświadczenie zawodowe, działalność zawodowa, granica, mały ruch graniczny, mobilność, wiza, powrót, status uchodźcy та wykonywanie pracy.`,
            sourceLocator: "Art. 3 pkt 1–25",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`У чинному тексті ${foreignersLaw.article("3", "Art. 3")} pkt 7b і pkt 7c позначені як (uchylony); інші визначення містять спеціальні пороги та умови, зокрема 90/180, 180 або 360 днів там, де це прямо зазначено.`,
            sourceLocator: "Art. 3 pkt 7b–7c, 7d–7j",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("3", "Art. 3")} задає словник ustawa. Перед аналізом справи треба встановити, яке саме законне визначення відповідає фактам, а не покладатися на побутове значення слова.`,
        [
          {
            locator: "Art. 3 pkt 2–3",
            explanation:
              "Cudzoziemiec — кожен, хто не має польського громадянства; dokument podróży має бути визнаний Польщею і давати право перетинати кордон.",
          },
          {
            locator: "Art. 3 pkt 7, 7a, 7d–7j",
            explanation:
              "Mały ruch graniczny та різні види mobilność мають окремі умови й періоди; не переносіть поріг одного визначення на інше.",
          },
          {
            locator: "Art. 3 pkt 20–25",
            explanation:
              "Розрізняйте wiza, wiza krajowa, wiza Schengen, wykonywanie pracy та wykonywanie pracy w zawodzie wymagającym wysokich kwalifikacji.",
          },
        ],
        foreignersLaw.text`Визначення ${foreignersLaw.article("3", "Art. 3")} керують тлумаченням інших статей, але самі зазвичай не створюють дозволу на pobyt або pracy. Позначені uchylony пункти не є чинними визначеннями.`,
        foreignersLaw.text`Випишіть точний термін із документа або рішення, знайдіть його pkt у ${foreignersLaw.article("3", "Art. 3")} і перевірте всі складові визначення окремими фактами та доказами.`
      ),
      reviewedArticle(
        "4",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`У справах за ustawa, що належать до właściwości wojewody, коли wojewoda розглядає odwołanie або органом вищого ступеня є Szef Urzędu do Spraw Cudzoziemców, не застосовується ${foreignersLaw.external("art. 20", "https://eli.gov.pl/eli/DU/2025/428/ogl")} ustawy o wojewodzie i administracji rządowej w województwie.`,
            sourceLocator: "Art. 4",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("4", "Art. 4")} — спеціальне правило про незастосування одного положення ustawy o wojewodzie у визначених справах іноземців.`,
        [
          {
            locator: "Art. 4",
            explanation:
              "Перевірте, що справа врегульована цією ustawa, належить до wojewoda і що саме wojewoda є органом odwoławczy або Szef Urzędu є органом вищого ступеня.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("4", "Art. 4")} змінює лише застосування названого ${foreignersLaw.article("20", "art. 20")} іншого закону; він не визначає матеріальну умову pobyt і не скасовує відведені законом засоби оскарження.`,
        foreignersLaw.text`У процесуальних документах встановіть орган і його роль у конкретній справі. Не використовуйте ${foreignersLaw.article("4", "Art. 4")} як підставу для позитивної чи негативної decyzja по суті.`
      ),
      reviewedArticle(
        "5",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`У справах, що належать до konsul, застосовується Prawo konsularne, якщо ustawa не передбачає іншого. Для видачі, cofanie або unieważnianie wizy krajowej та продовження її чинності або строку pobytu застосовується Wspólnotowy Kodeks Wizowy в частині, не врегульованій dział IV, з виключенням ${foreignersLaw.article("9", "art. 9")} ust. 2 zdanie drugie цього Кодексу.`,
            sourceLocator: "Art. 5 ust. 1–2",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("5", "Art. 5")} розподіляє застосування Prawo konsularne та Wspólnotowy Kodeks Wizowy у консульських і візових справах.`,
        [
          {
            locator: "Art. 5 ust. 1",
            explanation:
              "Спочатку перевірте, чи справа належить до konsul і чи немає спеціального правила в ustawa.",
          },
          {
            locator: "Art. 5 ust. 2",
            explanation: foreignersLaw.text`Для wiza krajowa спершу застосовуйте dział IV; прогалини заповнює Wspólnotowy Kodeks Wizowy, але назване речення ${foreignersLaw.article("9", "art. 9")} ust. 2 не застосовується.`,
          },
        ],
        "Стаття визначає процесуальне джерело для конкретних консульських і візових дій, але не гарантує видачу чи продовження візи.",
        foreignersLaw.text`Визначте вид візи, дію органу та питання, яке регулюється. У висновку окремо назвіть норму ustawa або відповідного Кодексу, а не посилайтеся на ${foreignersLaw.article("5", "Art. 5")} як на матеріальне право.`
      ),
      reviewedArticle(
        "6",
        [
          {
            kind: "statute-text",
            text: "Орган, який видає decyzję або postanowienie у провадженні за ustawa, може не складати фактичну частину uzasadnienia, якщо цього вимагають obronność, bezpieczeństwo państwa або захист bezpieczeństwo i porządek publiczny.",
            sourceLocator: "Art. 6 ust. 1",
          },
          {
            kind: "statute-text",
            text: "Неможливо відмовитися від складання тієї частини uzasadnienia, яка стосується встановлення przesłanki polskiego pochodzenia cudzoziemca.",
            sourceLocator: "Art. 6 ust. 2",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("6", "Art. 6")} допускає обмеження фактичного обґрунтування з міркувань безпеки, але встановлює виняток для встановлення польського походження.`,
        [
          {
            locator: "Art. 6 ust. 1",
            explanation:
              "Перевірте, чи орган послався саме на одну з названих безпекових підстав і чи йдеться про фактичну частину uzasadnienia.",
          },
          {
            locator: "Art. 6 ust. 2",
            explanation:
              "Навіть за наявності підстав ust. 1 орган не може приховати частину обґрунтування про przesłanka polskiego pochodzenia.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("6", "Art. 6")} регулює обсяг мотивування рішення або постанови. Він не звільняє орган від інших вимог до рішення і не доводить законність прихованої частини автоматично.`,
        "Отримавши decyzja або postanowienie, визначте, яку саме частину мотивів не наведено і на яку підставу послався орган. Якщо спір стосується polskie pochodzenie, перевірте повноту мотивування за ust. 2."
      ),
      reviewedArticle(
        "7",
        [
          {
            kind: "statute-text",
            text: "Органи, що ведуть справи про wiza, продовження візи, zezwolenie na pobyt czasowy/stały або rezydent długoterminowy UE, zobowiązanie do powrotu, а також органи контролю, письмово pouczają cudzoziemca зрозумілою для нього мовою про порядок, права та обов’язки.",
            sourceLocator: "Art. 7 ust. 1",
          },
          {
            kind: "statute-text",
            text: "У справі про zobowiązanie do powrotu pouczenie включає, зокрема, інформацію про вимоги до podmiot powierzający pracę, можливе zezwolenie на pobyt під час кримінального провадження та інші дії проти такого суб’єкта; електронне pouczenie можливе за письмовою згодою cudzoziemca.",
            sourceLocator: "Art. 7 ust. 2–3",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("7", "Art. 7")} встановлює обов’язок зрозумілого письмового pouczenie і спеціальну інформацію для справи про повернення.`,
        [
          {
            locator: "Art. 7 ust. 1",
            explanation:
              "Визначте вид провадження та перевірте, чи отримав cudzoziemiec письмову інформацію зрозумілою мовою про права й обов’язки.",
          },
          {
            locator: "Art. 7 ust. 2",
            explanation:
              "У справі про powrót перевірте спеціальні відомості про вимоги до pracodawca та можливі засоби захисту потерпілої особи.",
          },
          {
            locator: "Art. 7 ust. 3",
            explanation:
              "Електронна форма замінює вручення лише за умов, прямо названих у статті, включно з письмовою згодою.",
          },
        ],
        "Pouczenie допомагає реалізувати процесуальні права, але саме по собі не змінює матеріальний статус pobyt і не скасовує обов’язок виїзду.",
        foreignersLaw.text`Збережіть pouczenie, мову, форму та дату отримання. У справі про powrót окремо перевірте, чи надано спеціальну інформацію за ${foreignersLaw.article("7", "Art. 7")} ust. 2.`
      ),
      reviewedArticle(
        "8",
        [
          {
            kind: "statute-text",
            text: "Заяви у справах за ustawa складаються польською. Документи іноземною мовою, що є доказами, подаються з перекладом польською, виконаним tłumacz przysięgły.",
            sourceLocator: "Art. 8 ust. 1–2",
          },
          {
            kind: "statute-text",
            text: "У провадженні перед ministrem właściwym do spraw zagranicznych або konsul заяви й доказові документи можна подати польською або мовою, яку вкаже орган; у protokół przesłuchania зазначається ім’я та прізвище перекладача.",
            sourceLocator: "Art. 8 ust. 3–4",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("8", "Art. 8")} визначає мову заяв, доказів і протоколу допиту.`,
        [
          {
            locator: "Art. 8 ust. 1–2",
            explanation:
              "Для звичайного провадження готуйте wniosek польською, а іншомовні доказові документи — з перекладом tłumacz przysięgły.",
          },
          {
            locator: "Art. 8 ust. 3–4",
            explanation:
              "У справах MFA або konsul перевірте мову, яку вказав орган, і наявність даних перекладача в протоколі.",
          },
        ],
        foreignersLaw.text`Недотримання мовної форми впливає на доказове подання, але ${foreignersLaw.article("8", "Art. 8")} сама не встановлює результату справи про pobyt чи wiza.`,
        "Складіть список іншомовних документів і перевірте, чи кожен доказ має належний польський переклад або підпадає під спеціальне правило для konsul чи MFA."
      ),
      reviewedArticle(
        "9",
        [
          {
            kind: "statute-text",
            text: "Письма у справах за ustawa вручаються фізичній особі за вказаною адресою або в будь-якому місці, де її знайдено; позбавленим волі cudzoziemcom — через адміністрацію установи.",
            sourceLocator: "Art. 9 ust. 1–2",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`За виїзду cudzoziemca за кордон застосовується ${kpaLaw.article("40", "art. 40 § 4–5")} KPA. У провадженні MFA, крім справ ${foreignersLaw.article("66", "art. 66")} ust. 4 і ${foreignersLaw.article("79a", "art. 79a")}, документи вручаються через konsul, а до вручень застосовується Prawo konsularne.`,
            sourceLocator: "Art. 9 ust. 3–5",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("9", "Art. 9")} встановлює спеціальні правила doręczenia у справах іноземців, включно з ув’язненням, перебуванням за кордоном і провадженням MFA.`,
        [
          {
            locator: "Art. 9 ust. 1–2",
            explanation:
              "Перевірте адресу, фактичне місце вручення або передачу через адміністрацію установи, якщо особа позбавлена волі.",
          },
          {
            locator: "Art. 9 ust. 3–5",
            explanation:
              "Для особи за кордоном і справи MFA встановіть, який спеціальний режим KPA або Prawo konsularne визначає належне вручення.",
          },
        ],
        foreignersLaw.text`Належне doręczenie запускає процесуальні наслідки, але ${foreignersLaw.article("9", "Art. 9")} не встановлює матеріального права на pobyt чи візу.`,
        "Збережіть конверт, електронне підтвердження або інший доказ doręczenie та визначте, коли почався процесуальний строк. Не обчислюйте строк лише від дати, надрукованої на рішенні."
      ),
      reviewedArticle(
        "10",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Якщо cudzoziemiec — сторона провадження — перебуває за кордоном і не призначив pełnomocnik, який проживає в Польщі, не застосовуються ${kpaLaw.article("73", "art. 73 § 1")} і ${kpaLaw.article("73", "1a")}, ${kpaLaw.article("79", "art. 79")} та ${kpaLaw.article("81", "art. 81")} KPA.`,
            sourceLocator: "Art. 10 ust. 1",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`У справах розділу 1 dział IV, які веде minister właściwy do spraw zagranicznych, не застосовується перелік положень KPA, прямо наведений у ${foreignersLaw.article("10", "Art. 10")} ust. 2.`,
            sourceLocator: "Art. 10 ust. 2",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("10", "Art. 10")} містить два спеціальні обмеження KPA: для сторони за кордоном без польського pełnomocnik і для визначених візових справ MFA.`,
        [
          {
            locator: "Art. 10 ust. 1",
            explanation:
              "Підставою спеціального режиму є сукупність двох фактів: перебування сторони за кордоном і відсутність повноважного представника, який проживає в Польщі.",
          },
          {
            locator: "Art. 10 ust. 2",
            explanation:
              "У справі MFA звірте, чи це провадження розділу 1 dział IV, і застосовуйте лише перелік виключених статей KPA.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("10", "Art. 10")} змінює процесуальні гарантії в точно визначених ситуаціях; він не є загальним скасуванням KPA для всіх справ іноземців.`,
        foreignersLaw.text`Зафіксуйте місце перебування, наявність польського pełnomocnik і орган провадження. У рішенні перевірте, чи посилання на незастосування KPA відповідає саме ${foreignersLaw.article("10", "Art. 10")}.`
      ),
      reviewedArticle(
        "11",
        [
          {
            kind: "statute-text",
            text: "Функціонери Straż Graniczna у провадженнях за ustawa можуть провести wywiad środowiskowy або встановити місце перебування małżonek, члена сім’ї чи особи, пов’язаної сімейними więzi.",
            sourceLocator: "Art. 11 ust. 1",
          },
          {
            kind: "statute-text",
            text: "Wywiad може охоплювати дані, адресу, сім’ю, спільне господарство, роботу або діяльність, навчання, матеріальні умови, безпеку та інші обставини; за суперечностей орган може перевірити локал, за згодою, у години 6:00–22:00.",
            sourceLocator: "Art. 11 ust. 2–8",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("11", "Art. 11")} надає Straż Graniczna інструменти перевірки фактичних обставин справи, включно з місцем проживання та сімейними зв’язками.`,
        [
          {
            locator: "Art. 11 ust. 2",
            explanation:
              "Перевірка може охоплювати лише перелічені напрями фактичної інформації; зіставте їх із питанням конкретного провадження.",
          },
          {
            locator: "Art. 11 ust. 3–4",
            explanation:
              "Перевірка lokalu можлива після непідтвердження або суперечності даних; функціонер може увійти, вимагати показати речі та пояснення для підтвердження pobyt.",
          },
          {
            locator: "Art. 11 ust. 5–8",
            explanation:
              "Перевірте присутність особи, часовий діапазон, згоду та документування. Відмова або перешкоджання означає, що місце pobyt не підтверджено; незалежну неможливість орган повідомляє органу провадження.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("11", "Art. 11")} регулює збір і перевірку інформації, але результат wywiad не замінює оцінку всіх матеріальних умов та доказів у справі.`,
        foreignersLaw.text`Збережіть протокол, питання, дані про присутніх, згоду та час перевірки lokalu. Якщо орган посилається на непідтверджене місце проживання, перевірте, яка саме дія ${foreignersLaw.article("11", "Art. 11")} це обґрунтовує.`
      ),
      reviewedArticle(
        "12",
        [
          {
            kind: "statute-text",
            text: "Minister właściwy do spraw wewnętrznych визначає в drodze rozporządzenia спосіб, місце, час і форму звіту про wywiad środowiskowy, а також спосіб перевірки lokalu, документи-повноваження і документування.",
            sourceLocator: "Art. 12 ust. 1 і ust. 3",
          },
          {
            kind: "statute-text",
            text: "У розпорядженні мають бути враховані потреби проваджень і poszanowanie sfery prywatności cudzoziemca та інших осіб.",
            sourceLocator: "Art. 12 ust. 2 і ust. 4",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("12", "Art. 12")} — делегація для процедур проведення wywiad środowiskowy та перевірки lokalu з вимогою поважати приватність.`,
        [
          {
            locator: "Art. 12 ust. 1–2",
            explanation:
              "Конкретний спосіб, місце, час і звіт шукайте в rozporządzenie; сама делегація не є фактом проведення wywiad.",
          },
          {
            locator: "Art. 12 ust. 3–4",
            explanation:
              "Для перевірки lokalu окремо перевірте спосіб, документи upoważniające та вимоги до документування, зберігаючи приватність.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("12", "Art. 12")} уповноважує міністра видати процедурне rozporządzenie, але не створює самостійної підстави відмови в pobyt.`,
        foreignersLaw.text`Попросіть показати документи upoważniające та звіт про дію. Зіставте проведення перевірки з вимогами ${foreignersLaw.article("11", "Art. 11")} і відповідного rozporządzenie, не вигадуючи додаткових строків.`
      ),
      reviewedArticle(
        "13",
        [
          {
            kind: "statute-text",
            text: "У rejestry та ewidencja, що ведуться на підставі ustawa, можуть оброблятися перелічені дані cudzoziemca: ідентифікаційні та біографічні дані, документ podróży, відбитки, громадянство, місце pobyt, контакти, karalność і провадження, PESEL, wizerunek та дані про роботу, навчання, волонтерство й запрошуючого.",
            sourceLocator: "Art. 13 pkt 1–26",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("13", "Art. 13")} визначає каталог даних та інформації, які можуть оброблятися в реєстрах і обліку за ustawa; формулювання «можуть» не означає, що кожен реєстр містить усі дані.`,
        [
          {
            locator: "Art. 13 pkt 1–17",
            explanation:
              "Перевірте ідентифікаційні, біометричні, громадянські та документальні дані лише в обсязі, потрібному конкретному реєстру.",
          },
          {
            locator: "Art. 13 pkt 18–26",
            explanation:
              "Для роботи, стажу, волонтерства, навчання, карності, PESEL, wizerunek та zapraszający встановіть, який пункт і який реєстр є релевантними.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("13", "Art. 13")} визначає можливий обсяг даних у реєстрах, але не встановлює висновок про legalność pobytu, право на працю чи достовірність конкретного запису.`,
        foreignersLaw.text`Порівняйте спірний запис із документом-джерелом і точним pkt ${foreignersLaw.article("13", "Art. 13")}. Не робіть висновку про статус особи лише з наявності або відсутності одного поля в реєстрі.`
      ),
      reviewedArticle(
        "14",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`${foreignersLaw.article("14", "Art. 14")} передбачає, що odciski linii papilarnych cudzoziemca pobiera się за допомогою kart daktyloskopijnych або urządzenia do elektronicznego pobierania odcisków.`,
            sourceLocator: "Art. 14",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("14", "Art. 14")} регулює технічний спосіб зняття відбитків пальців, а не підставу в’їзду, pobyt чи wykonywanie pracy.`,
        [
          {
            locator: "Art. 14",
            explanation:
              "У матеріалах перевірте, чи спосіб pobrania відбитків відповідає одному з двох названих законом способів: kart daktyloskopijnych або електронному urządzenie.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("14", "Art. 14")} визначає спосіб отримання біометричних даних для процедур, у яких їх збирають за ustawa. Сам факт зняття або наявність відбитків не доводить legalność pobytu чи prawo do pracy.`,
        foreignersLaw.text`Зафіксуйте, де і яким способом були pobrane odciski linii papilarnych. Не перетворюйте запис про відбитки в доказ дозволу на wjazd, pobyt або pracę без перевірки окремих матеріальних норм.`
      ),
      reviewedArticle(
        "15",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Актуальна fotografia, додана до wniosek про zezwolenie pobytowe, wiza krajowa або документ, що видається cudzoziemcowi, має без обґрунтованих сумнівів відображати обличчя без nakrycia głowy та okulary z ciemnymi szkłami.`,
            sourceLocator: "Art. 15 ust. 1",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`За ваду зору можна подати фотографію в okulary z ciemnymi szkłami, додавши документи про niepełnosprawność або, якщо їх неможливо подати, oświadczenie; nakrycie głowy з релігійних причин допускається, якщо обличчя повністю видно, із oświadczenie про належність до wspólnoty wyznaniowej.`,
            sourceLocator: "Art. 15 ust. 2–3",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`У uzasadnionych przypadkach можна подати фотографію із заплющеними очима, не природним виразом обличчя або відкритим ротом.`,
            sourceLocator: "Art. 15 ust. 4",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("15", "Art. 15")} встановлює вимоги до фотографії для wnioski pobytowe, wiza krajowa та документів для cudzoziemców, а також вузькі винятки для зору, релігійного nakrycie głowy і uzasadnione випадків.`,
        [
          {
            locator: "Art. 15 ust. 1",
            explanation:
              "Перевірте, який саме wniosek подано, чи фотографія aktualna, чи обличчя повністю відображене та чи немає nakrycia głowy або темних окулярів без спеціальної підстави.",
          },
          {
            locator: "Art. 15 ust. 2–3",
            explanation:
              "Для винятку через wadę wzroku додайте підтвердження або oświadczenie за умовами статті; для релігійного nakrycia głowy обличчя має залишатися повністю видимим і потрібне oświadczenie.",
          },
          {
            locator: "Art. 15 ust. 4",
            explanation:
              "Особливий вираз обличчя або відкритий рот не є загальним винятком: стаття вимагає uzasadniony przypadek.",
          },
        ],
        foreignersLaw.text`Вимоги та винятки ${foreignersLaw.article("15", "Art. 15")} визначають, чи може фотографія належно супроводжувати заяву. Стаття сама не надає zezwolenie, wizy або права на pracę.`,
        foreignersLaw.text`Перед поданням встановіть категорію wniosek, перевірте фотографію та підготуйте належне підтвердження винятку. Не замінюйте передбачені статтею документи довільним поясненням і не робіть із прийняття фотографії висновок про позитивне рішення.`
      ),
      reviewedArticle(
        "16",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Szef Urzędu do Spraw Cudzoziemców є центральним органом адміністрації, компетентним у справах wjazdu, przejazdu, pobytu та wyjazdu cudzoziemców, nadawania statusu uchodźcy, udzielania ochrony uzupełniającej, azylu та ochrony czasowej; ${foreignersLaw.article("16", "Art. 16")} ust. 1 pkt 4 позначений як (uchylony).`,
            sourceLocator: "Art. 16 ust. 1 pkt 1–6",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Minister właściwy do spraw wewnętrznych sprawuje nadzór над Szefem Urzędu.`,
            sourceLocator: "Art. 16 ust. 2",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("16", "Art. 16")} визначає центральну роль Szef Urzędu та нагляд міністра, але не розподіляє кожну конкретну справу про pobyt між усіма органами.`,
        [
          {
            locator: "Art. 16 ust. 1 pkt 1–3, 5–6",
            explanation:
              "Зіставте предмет справи з переліком: wjazd, przejazd, pobyt, wyjazd, status uchodźcy, ochrona uzupełniająca, azyl або ochrona czasowa. Не використовуйте uchylony pkt 4 як чинну підставу.",
          },
          {
            locator: "Art. 16 ust. 2",
            explanation:
              "Розрізняйте нагляд міністра над Szef Urzędu від процесуальної компетенції органу, який видає рішення у вашій конкретній справі.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("16", "Art. 16")} закріплює організаційну компетенцію Szef Urzędu і ministerialny нагляд. Він сам по собі не створює права на legal stay, wjazd або wykonywanie pracy.`,
        foreignersLaw.text`У процесуальному документі встановіть, який орган фактично видав decyzja або prowadzi postępowanie, і зіставте його роль із конкретною нормою про właściwość. Не робіть висновок про статус cudzoziemca лише з назви Szef Urzędu.`
      ),
      reviewedArticle(
        "17",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Prezes Rady Ministrów powołuje та odwołuje Szefa Urzędu на wniosek ministra właściwego do spraw wewnętrznych; кандидатів добирають у відкритому конкурентному nabór.`,
            sourceLocator: "Art. 17 ust. 1–2",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Minister właściwy do spraw wewnętrznych powołuje та odwołuje zastępców Szefa Urzędu на wniosek Szefa Urzędu, також серед осіб, відібраних у відкритому конкурентному nabór.`,
            sourceLocator: "Art. 17 ust. 3–4",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("17", "Art. 17")} регулює, хто призначає та звільняє Szef Urzędu і його zastępcy та які wnioski й nabór для цього потрібні.`,
        [
          {
            locator: "Art. 17 ust. 1–2",
            explanation:
              "Для Szef Urzędu перевірте послідовність: відкритий конкурентний nabór, wniosek minister właściwy do spraw wewnętrznych і дія Prezes Rady Ministrów.",
          },
          {
            locator: "Art. 17 ust. 3–4",
            explanation:
              "Для zastępca перевірте wniosek Szef Urzędu та рішення minister właściwy do spraw wewnętrznych; не змішуйте цю процедуру з компетенцією wojewoda у справі іноземця.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("17", "Art. 17")} визначає кадрову процедуру керівництва Urząd. Вона не є підставою для надання, відмови чи cofnięcia дозволу на pobyt або wizy.`,
        foreignersLaw.text`Якщо питання стосується організації Urząd, перевірте wniosek, спосіб nabór і акт powołania. Для справи cudzoziemca окремо встановіть законну właściwość органу та не виводьте її лише з правил призначення керівника.`
      ),
      reviewedArticle(
        "18",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Посаду Szef Urzędu може займати особа, яка має tytuł zawodowy magistra або рівнозначний, є громадянином Польщі, користується повними публічними правами, не була остаточно засуджена за умисний злочин або умисне przestępstwo skarbowe, має управлінські компетенції, щонайменше 6 років staż pracy (з них 3 роки на керівній посаді) та знання у справах компетенції Szef Urzędu.`,
            sourceLocator: "Art. 18 pkt 1–7",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("18", "Art. 18")} встановлює кваліфікаційні вимоги до особи, яка може займати посаду Szef Urzędu.`,
        [
          {
            locator: "Art. 18 pkt 1–4",
            explanation:
              "Перевірте освіту, obywatelstwo polskie, повні publiczne prawa та відсутність prawomocne засудження за названі умисні злочини.",
          },
          {
            locator: "Art. 18 pkt 5–7",
            explanation:
              "Окремо перевірте kompetencje kierownicze, мінімальний staż pracy з вимогою 3 років на керівній посаді та знання сфери завдань Szef Urzędu.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("18", "Art. 18")} регулює доступ до конкретної державної посади, а не матеріальні умови wjazdu, pobytu чи pracy cudzoziemca.`,
        foreignersLaw.text`Якщо аналізуєте повноваження органу, відокремте вимоги до кандидата за ${foreignersLaw.article("18", "Art. 18")} від питання, чи має конкретний працівник upoważnienie та чи належно видано рішення. Ця стаття не підтверджує і не спростовує legal stay.`
      ),
      reviewedArticle(
        "19",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Інформацію про nabór на посаду Szef Urzędu публікують у загальнодоступному місці в siedziba Urzędu, у BIP Urzędu do Spraw Cudzoziemców і BIP Kancelarii Prezesa Rady Ministrów; ogłoszenie має містити назву й адресу, посаду, вимоги, завдання, потрібні документи, строк і місце подання та методи nabór.`,
            sourceLocator: "Art. 19 ust. 1–2 pkt 1–7",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Строк подання документів не може бути коротшим за 10 днів від публікації в BIP Kancelarii Prezesa Rady Ministrów; nabór проводить команда, призначена міністром, оцінюючи досвід, знання та керівні компетенції, із можливістю залучити кваліфікованого оцінювача та обов’язком зберігати таємницю інформації про кандидатів.`,
            sourceLocator: "Art. 19 ust. 3–7",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Команда обирає не більше трьох кандидатів і подає їх міністру, складає протокол із даними команди, кандидатів, методів та обґрунтування, а результат nabór оголошується невідкладно в обох BIP; інформація про результат містить, зокрема, дані обраних кандидатів або повідомлення, що кандидата не обрано, а публікація є безплатною.`,
            sourceLocator:
              "Art. 19 ust. 8–12, w szczególności ust. 9 pkt 1–6 i ust. 11 pkt 1–3",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("19", "Art. 19")} детально регулює публічний і конкурентний nabór на посаду Szef Urzędu: ogłoszenie, строк, оцінювання, протокол і оприлюднення результату.`,
        [
          {
            locator: "Art. 19 ust. 1–3",
            explanation:
              "Зіставте ogłoszenie з усіма сімома елементами ust. 2 і перевірте, що строк подання документів становив щонайменше 10 днів від публікації в BIP KPRM.",
          },
          {
            locator: "Art. 19 ust. 4–8",
            explanation:
              "Перевірте склад команди (не менше трьох осіб), критерії оцінювання, можливе залучення оцінювача, таємницю і подання не більше трьох кандидатів.",
          },
          {
            locator: "Art. 19 ust. 9–12",
            explanation:
              "Зіставте протокол і повідомлення про результат із переліченими даними та перевірте публікацію в обох BIP; стаття передбачає безплатне розміщення.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("19", "Art. 19")} забезпечує правила відкритого добору керівника Urząd. Вона не встановлює умови розгляду wniosku cudzoziemca і не є доказом legalności pobytu чи prawa do pracy.`,
        foreignersLaw.text`Для перевірки nabór збережіть ogłoszenie, дату публікації в BIP KPRM, подані документи, протокол і результат. Не переносіть правила кадрового конкурсу на оцінку decyzja у справі іноземця.`
      ),
      reviewedArticle(
        "20",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Команду, що проводить nabór на посади zastępcy Szef Urzędu, призначає Szef Urzędu.`,
            sourceLocator: "Art. 20 ust. 1",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`До способу проведення цього nabór застосовуються положення ${foreignersLaw.article("18", "Art. 18")} і ${foreignersLaw.article("19", "Art. 19")}.`,
            sourceLocator: "Art. 20 ust. 2",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("20", "Art. 20")} визначає орган, який призначає команду для nabór zastępcy Szef Urzędu, і відсилає до правил ${foreignersLaw.article("18", "Art. 18")} та ${foreignersLaw.article("19", "Art. 19")}.`,
        [
          {
            locator: "Art. 20 ust. 1",
            explanation:
              "Для nabór zastępcy перевірте, що команду призначив саме Szef Urzędu, а не інший орган.",
          },
          {
            locator: "Art. 20 ust. 2",
            explanation:
              "Застосовуйте правила Art. 18 і Art. 19 лише через це пряме відсилання та перевіряйте їх у повному обсязі для конкретного nabór.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("20", "Art. 20")} організовує кадровий nabór zastępcy Szef Urzędu. Вона не визначає компетенцію у справі про wiza, pobyt чи wykonywanie pracy.`,
        foreignersLaw.text`Якщо питання стосується zastępcy, перевірте акт про призначення команди та дотримання відсилань до ${foreignersLaw.article("18", "Art. 18")} і ${foreignersLaw.article("19", "Art. 19")}. У справі cudzoziemca окремо досліджуйте właściwość органу і upoważnienie.`
      ),
      reviewedArticle(
        "21",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Szef Urzędu виконує свої завдання за допомогою Urząd, який є urzędem administracji rządowej.`,
            sourceLocator: "Art. 21 ust. 1",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`В Urząd можуть виконувати обов’язки, крім його працівників, функціонери ABW і AW, Służby Ochrony Państwa, Państwowej Straży Pożarnej, Policji, Straży Granicznej, а також Służby Wywiadu Wojskowego і żołnierze цієї служби — на правових підставах, перелічених у pkt 1–6.`,
            sourceLocator: "Art. 21 ust. 2 pkt 1–6",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Minister właściwy do spraw wewnętrznych надає Urząd statut у drodze zarządzenia, визначаючи його організацію з урахуванням завдань Szef Urzędu та потреби належного функціонування.`,
            sourceLocator: "Art. 21 ust. 3",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("21", "Art. 21")} описує Urząd як апарат Szef Urzędu, можливе виконання обов’язків відрядженими функціонерами та затвердження його організації.`,
        [
          {
            locator: "Art. 21 ust. 1–2",
            explanation:
              "Відокремте Urząd як апарат органу від конкретної особи, яка підписує акт. Перелік служб у ust. 2 не означає автоматичної компетенції кожного функціонера приймати рішення.",
          },
          {
            locator: "Art. 21 ust. 3",
            explanation:
              "Організаційну структуру шукайте в zarządzenie про statut Urząd; не виводьте з самої статті конкретний внутрішній розподіл справ.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("21", "Art. 21")} визначає організаційну основу роботи Szef Urzędu, але сама не надає cudzoziemcowi pobyt, wjazd або prawo do pracy і не замінює перевірку upoważnienie.`,
        foreignersLaw.text`У документі встановіть орган, підрозділ і підписанта, а за потреби — його upoważnienie. Наявність працівника або функціонера певної служби в Urząd сама по собі не доводить законність чи результат рішення.`
      ),
      reviewedArticle(
        "22",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`До завдань Szef Urzędu належать видача decyzje і postanowienia в першій інстанції та розгляд odwołania від decyzje і zażalenia на postanowienia інших органів у справах, врегульованих цією ustawa, законом про захист cudzoziemców та законом про wjazd, pobyt і wyjazd громадян UE та членів їхніх сімей.`,
            sourceLocator: "Art. 22 ust. 1 pkt 1 lit. a–c",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Szef Urzędu організовує szkolenia у межах своєї компетенції та контролює виконання wojewoda завдань за названими законами; ${foreignersLaw.article("22", "Art. 22")} ust. 1 pkt 3 і pkt 5 позначені як (uchylony).`,
            sourceLocator: "Art. 22 ust. 1 pkt 2–5",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Szef Urzędu виконує функції krajowy punkt kontaktowy для передбаченого законом обміну інформацією з державами UE, зокрема щодо pobyt rezydenta długoterminowego UE, mały ruch graniczny, Niebieska Karta UE, висококваліфікованої роботи та mobilność.`,
            sourceLocator: "Art. 22 ust. 1 pkt 6–8a",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`До завдань також належать передача органам wizowym інформації та документів для VIS, функції контактних пунктів у справах ochrony międzynarodowej, Eurodac та Europejskiej Sieci Migracyjnej, а також інші завдання з ustawa та окремих положень.`,
            sourceLocator: "Art. 22 ust. 1 pkt 9–11 i pkt 10a lit. a–c",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Szef Urzędu є organem wyższego stopnia у розумінні KPA щодо wojewoda у справах, врегульованих актами, названими в ust. 1 pkt 1.`,
            sourceLocator: "Art. 22 ust. 2",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("22", "Art. 22")} визначає широкий каталог завдань Szef Urzędu: рішення й засоби оскарження, szkolenia і контроль, національні контактні функції та спеціальний статус органу вищого ступеня щодо wojewoda.`,
        [
          {
            locator: "Art. 22 ust. 1 pkt 1 lit. a–c",
            explanation:
              "Спочатку визначте закон і стадію: чи Szef Urzędu діє в першій інстанції, чи розглядає odwołanie або zażalenie від іншого органу. Не підміняйте цим правилом конкретні норми про właściwość.",
          },
          {
            locator: "Art. 22 ust. 1 pkt 2–8a",
            explanation:
              "Розрізняйте szkolenia, контроль wojewoda та інформаційні функції krajowy punkt kontaktowy. Передача або отримання даних не є автоматичним доказом legalnego pobytu чи prawa do pracy.",
          },
          {
            locator: "Art. 22 ust. 1 pkt 9–11",
            explanation:
              "Для VIS, ochrony międzynarodowej, Eurodac та інших завдань встановіть конкретний pkt і мету обміну; не робіть висновок про статус лише з запису в системі або повідомлення іншому organ.",
          },
          {
            locator: "Art. 22 ust. 2",
            explanation:
              "Статус organ wyższego stopnia щодо wojewoda діє у справах трьох актів, перелічених у ust. 1 pkt 1, а не як загальна ієрархія для будь-якої справи іноземця.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("22", "Art. 22")} розподіляє завдання та апеляційну роль Szef Urzędu, але не надає cudzoziemcowi дозволу на pobyt, wjazd або wykonywanie pracy. Інформаційні та реєстрові дії мають своє процесуальне призначення й не замінюють оцінку матеріальних умов.`,
        foreignersLaw.text`Візьміть рішення або postanowienie і встановіть орган першої інстанції, вид засобу оскарження та відповідний акт. Якщо орган посилається на обмін даними або krajowy punkt kontaktowy, перевірте мету й джерело конкретної інформації, не трактуючи реєстр як самостійний доказ legal stay чи права на працю.`
      ),
      reviewedArticle(
        "23",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Cudzoziemiec, який перетинає granicę, зобов’язаний мати ważny dokument podróży; якщо це потрібно, також ważną wizę або інший чинний документ, що дає право на wjazd і pobyt у Польщі; для tranzyt — дозвіл на wjazd до іншої держави або pobyt у ній, якщо такий дозвіл потрібен.`,
            sourceLocator: "Art. 23 pkt 1–3",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("23", "Art. 23")} встановлює базовий перелік документів, які cudzoziemiec має мати під час перетину granicę, з окремим правилом для tranzyt.`,
        [
          {
            locator: "Art. 23 pkt 1",
            explanation:
              "Перевірте чинність документа podróży на момент перетину кордону, а не лише його наявність у старих матеріалах.",
          },
          {
            locator: "Art. 23 pkt 2",
            explanation:
              "Встановіть, чи потрібні wiza або інший документ для в’їзду та pobyt, і чи саме цей документ є ważny для запланованої дії.",
          },
          {
            locator: "Art. 23 pkt 3",
            explanation:
              "Якщо маршрут є tranzyt, перевірте також дозвіл держави призначення або наступної держави, коли його вимагають її правила.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("23", "Art. 23")} встановлює документальний обов’язок для перетину кордону. Він не гарантує фактичний wjazd, тривалість pobyt або право на wykonywanie pracy без інших умов.`,
        foreignersLaw.text`На дату перетину зіставте документ podróży, wizę або dokument pobytowy з маршрутом і метою. Для tranzyt окремо отримайте доказ дозволу наступної держави; не прирівнюйте документ для в’їзду до дозволу на працю.`
      ),
      reviewedArticle(
        "24",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Члени екіпажів морських суден, які прибувають до польських портів і перетинають granicę для сходження на берег та перебування в межах miasta portowego і прилеглих gmin, звільнені від обов’язку мати wizę протягом перебування судна в port.`,
            sourceLocator: "Art. 24 ust. 1",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Особи, названі в ${foreignersLaw.article("24", "Art. 24")} ust. 2 через посилання на art. 4 ust. 2 lit. a rozporządzenia Rady (WE) nr 539/2001, звільнені від obowiązek posiadania wizy, якщо їхній загальний pobyt у Польщі не перевищує 90 днів.`,
            sourceLocator: "Art. 24 ust. 2",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("24", "Art. 24")} передбачає два спеціальні, обмежені правила zwolnienie z obowiązku wizowego: для екіпажу судна в port та для категорії осіб із ust. 2 за умови загального pobyt до 90 днів.`,
        [
          {
            locator: "Art. 24 ust. 1",
            explanation:
              "Для екіпажу перевірте прибуття саме морського судна до польського port, мету сходження та межі miasta portowego і прилеглих gmin; звільнення діє під час перебування судна в port.",
          },
          {
            locator: "Art. 24 ust. 2",
            explanation:
              "Не розширюйте посилання на всіх безвізових осіб: встановіть, чи особа входить до категорії, названої в art. 4 ust. 2 lit. a в тексті статті, і порахуйте загальний pobyt до 90 днів.",
          },
        ],
        foreignersLaw.text`Звільнення за ${foreignersLaw.article("24", "Art. 24")} стосується лише obowiązek posiadania wizy в описаних межах. Воно не скасовує автоматично вимоги щодо dokument podróży, контролю graniczna, legalnego pobytu поза межами винятку чи права на pracę.`,
        foreignersLaw.text`Визначте підставу звільнення, територіальні та часові межі й збережіть документи екіпажу або розрахунок строку pobyt. Не використовуйте сам факт безвізового винятку як доказ дозволу на роботу або необмежене перебування.`
      ),
      reviewedArticle(
        "25",
        [
          {
            kind: "statute-text",
            text: foreignersLaw.text`Cudzoziemiec, який в’їжджає до Польщі, має uzasadnić cel і warunki planowanego pobytu, а також мати й на вимогу показати підтвердження ubezpieczenie zdrowotne або, для wjazd на підставі wizy krajowej, podróżne ubezpieczenie medyczne щонайменше на 30 000 euro з покриттям визначених медичних і пов’язаних витрат.`,
            sourceLocator: "Art. 25 ust. 1 pkt 1 i pkt 2 lit. a",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`За ${foreignersLaw.article("25", "Art. 25")} ust. 1 pkt 2 lit. b cudzoziemiec має мати кошти на планований pobyt і поворот до państwo pochodzenia або zamieszkania чи tranzyt до państwo trzecie, або документ про можливість законно отримати такі кошти.`,
            sourceLocator: "Art. 25 ust. 1 pkt 2 lit. b",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Для визначених видів short-term mobility з іншою державою UE, що не є державою Schengen, потрібно додатково показати копію wysłane zawiadomienie або передбачений законом лист jednostka przyjmująca; для short-term mobility posiadacza Niebieskiej Karty UE потрібно довести, що wjazd і pobyt мають на меті wykonywanie działalności zawodowej.`,
            sourceLocator: "Art. 25 ust. 1a pkt 1–4 i ust. 1aa",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Podróżne ubezpieczenie medyczne має бути видане страховиком із цілодобовим centrum alarmowe; страховик без siedziba або oddział у названих державах може відповідати лише за додаткових умов публікації аудиту та щонайменше піврічних даних про składki і wypłaty.`,
            sourceLocator: "Art. 25 ust. 1b pkt 1–2 lit. a–b",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`У чинному тексті ${foreignersLaw.article("25", "Art. 25")} ust. 2 позначений як (uchylony) і не містить активного правила.`,
            sourceLocator: "Art. 25 ust. 2",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Обов’язок показати кошти або документи про можливість їх отримання не застосовується до перелічених підстав wjazd, зокрема відповідних umowy międzynarodowe, wiza repatriacyjna, wiza w celu wykonywania pracy, деяких віз із ${foreignersLaw.article("60", "Art. 60")} ust. 1 pkt 5, 5a, візи ochrony czasowej, возз’єднання сім’ї, karta pobytu, Karta Polaka, а також до niesienie pomocy charytatywnej чи участі в akcji ratunkowej.`,
            sourceLocator:
              "Art. 25 ust. 3 pkt 1 lit. a–c, ca–cb, d–g i pkt 2–3",
          },
          {
            kind: "statute-text",
            text: foreignersLaw.text`Вимогу про ubezpieczenie medyczne можна вважати виконаною, якщо cudzoziemiec має відповідне страхування у зв’язку зі своєю sytuacja zawodowa; документи перевіряє funkcjonariusz Straży Granicznej під час перетину, а minister właściwy do spraw zagranicznych публікує й оновлює список страховиків і страхових продуктів, що відповідають умовам.`,
            sourceLocator: "Art. 25 ust. 4–6",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("25", "Art. 25")} визначає, що cudzoziemiec має обґрунтувати мету та умови планованого pobytu і на кордоні показати передбачені документи, страхування та кошти, з окремими винятками й правилами для mobilność.`,
        [
          {
            locator: "Art. 25 ust. 1 pkt 1 i pkt 2 lit. a–b",
            explanation:
              "Підготуйте окремий доказ мети й умов pobyt, документ про страхування та доказ коштів або законної можливості їх отримання. Вимогу про кошти не змішуйте з вимогою про медичне страхування.",
          },
          {
            locator: "Art. 25 ust. 1a–1aa",
            explanation:
              "Якщо використовується mobilność з іншої держави UE поза Schengen, перевірте відповідний документ pobytowy або wizę, копію zawiadomienie чи лист jednostka przyjmująca; для Niebieska Karta UE додайте доказ działalność zawodowa.",
          },
          {
            locator: "Art. 25 ust. 1b",
            explanation:
              "Для podróżne ubezpieczenie перевірте 24/7 centrum alarmowe, територіальну умову страховика та, за потреби, опублікований аудит і піврічні показники.",
          },
          {
            locator: "Art. 25 ust. 3–4",
            explanation:
              "Спершу встановіть, чи є конкретна підстава для звільнення від показу коштів; це звільнення не слід автоматично поширювати на інші документи. Окремо перевірте можливість виконання вимоги страхування через sytuacja zawodowa.",
          },
          {
            locator: "Art. 25 ust. 5–6",
            explanation:
              "Під час graniczna kontrola документи перевіряє Straż Graniczna. Список страховиків на сайті MFA є інструментом перевірки умов страхування, а не рішенням про wjazd.",
          },
        ],
        foreignersLaw.text`${foreignersLaw.article("25", "Art. 25")} встановлює обов’язки та документи для контролю під час wjazd. Їх виконання є лише елементом прикордонної оцінки: стаття сама не гарантує в’їзд, legalnego pobytu на весь строк або prawa do pracy.`,
        foreignersLaw.text`Для конкретного wjazd зафіксуйте мету, маршрут, підставу візи або mobilność, страхування, фінансові документи та всі заявлені винятки. Перевірте актуальність доказів на дату контролю і не робіть висновок про legal stay чи prawo do pracy лише з наявності одного документа або запису в реєстрі.`
      ),
    ]),
  })
