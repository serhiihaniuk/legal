import { createLegalTextAuthor, type LegalTextValue } from "../../legal-text"
import type { LegalProvisionId } from "../../contracts"

const kpaLaw = createLegalTextAuthor("kpa")
const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
import { defineEditorialPart } from "../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type EditorialEntry = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed" | "blocked"
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

const blockedArticle = (article: string, reason: string): EditorialEntry => ({
  provisionId: provisionId(article),
  reviewStatus: "blocked",
  claims: [
    {
      kind: "statute-text",
      text: `Локальний corpus містить окремий текст Art. ${article}, але цей запис не переказує його зміст без додаткової перевірки: ${reason}`,
      sourceLocator: `Art. ${article}`,
    },
  ],
  summary: `Редакційний переказ Art. ${article} заблоковано: ${reason}`,
  rules: [
    {
      locator: `Art. ${article}`,
      explanation: `Не робіть висновків із самого номера статті. До розблокування звірте повний польський текст, усі ust. і pkt та відсилання, зазначені в ньому. Причина блокування: ${reason}`,
    },
  ],
  legalEffect: `Чинний правовий ефект Art. ${article} тут не формулюється, оскільки редакційний переказ заблоковано: ${reason}`,
  foreignersCase: `У справі відкрийте Art. ${article} у source reader і не використовуйте цей запис як підставу для рішення, доки не буде виконано перевірку: ${reason}`,
})

export const foreignersActPart01a =
  defineEditorialPart<"ustawa-o-cudzoziemcach">({
    documentId: "ustawa-o-cudzoziemcach",
    editionId: "ustawa-o-cudzoziemcach-2025-1079",
    legalStateDate: "2026-07-14",
    verifiedAt: "2026-07-15",
    entries: [
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
      blockedArticle(
        "14",
        "для точного навчального переказу потрібно окремо звірити повний текст статті та її правила про обробку або доступ до даних із пов’язаними положеннями поза цим локальним corpus"
      ),
      blockedArticle(
        "15",
        "потрібна окрема перевірка повного польського тексту, його адресатів і відсилань до реєстрів; без неї не можна безпечно описати умови та skutek"
      ),
      blockedArticle(
        "16",
        "потрібно звірити повний текст і всі відсилання до компетентних органів та реєстрів, перш ніж формулювати ефект для справи cudzoziemca"
      ),
      blockedArticle(
        "17",
        "потрібно звірити повний текст, часову застосовність і можливі przepisy przejściowe; без цього не можна назвати умови чи наслідок"
      ),
      blockedArticle(
        "18",
        "потрібна окрема перевірка повного тексту та зовнішніх актів, на які він посилається; неповний переказ створив би ризик вигаданих умов"
      ),
      blockedArticle(
        "19",
        "потрібно перевірити повний польський текст і статус на дату події; локатор сам по собі не підтверджує матеріальне правило"
      ),
      blockedArticle(
        "20",
        "потрібна звірка всіх ust. і pkt та пов’язаних правил, щоб не змішати процесуальний ефект статті з legal stay або prawo do pracy"
      ),
      blockedArticle(
        "21",
        "потрібно окремо перевірити адресата, компетенцію та часову дію норми; без повного джерела безпечно стверджувати лише наявність локатора"
      ),
      blockedArticle(
        "22",
        "потрібна окрема перевірка повного тексту, статусу та відсилань; редакційний переказ за номером був би непідтвердженим"
      ),
      blockedArticle(
        "23",
        "потрібно звірити всі ust. і pkt та зовнішні акти, щоб розрізнити прямо встановлене правило й практичний inference"
      ),
      blockedArticle(
        "24",
        "потрібно підтвердити повний текст, застосовну редакцію і кожну передумову; цей локальний запис не формулює результату справи"
      ),
      blockedArticle(
        "25",
        "потрібна окрема перевірка повного тексту і зв’язаних норм перед описом умов, документів або наслідків"
      ),
    ],
  })
