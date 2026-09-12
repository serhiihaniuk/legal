import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")
const documents = createEvidenceDocumentTextAuthor()
const workUrl = "https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf"
const amendmentUrl =
  "https://eli.gov.pl/api/acts/DU/2026/734/text/T/D20260734L.pdf"
const transitionUrl =
  "https://eli.gov.pl/api/acts/DU/2026/203/text/O/D20260203.pdf"
const contractLaunchUrl =
  "https://www.gov.pl/attachment/fc45e79c-2206-483b-9ff2-f1c7d94a1038"
const permitLaunchUrl =
  "https://www.gov.pl/attachment/745cc004-b156-4c03-a19a-ae071b579952"
const declarationLaunchUrl =
  "https://www.gov.pl/attachment/3f96f9df-8924-4ec3-83bd-157f7d1533c2"
const servicesUrl =
  "https://www.praca.gov.pl/eurzad/html/pomoc/zatrudnianie_cudzoziemcow.htm"
const permitTransitionUrl =
  "https://www.gov.pl/web/uw-mazowiecki/od-1-czerwca-2026-r-nowa-funkcjonalnosc-na-pracagovpl---elektronizacja-procedur-informacyjnych"
const declarationFormsUrl =
  "https://tarnow.praca.gov.pl/-/wazne-zmiany-dla-pracodawcow-zatrudniajacych-cudzoziemcow-od-1-czerwca-2026-roku"

const moduleContent: LegalLearningModule = {
  id: "obowiazki-podmiotu",
  order: 4,
  title: "Обов’язки суб’єкта та повідомлення",
  polish:
    "Obowiązki podmiotu powierzającego pracę; umowa; powiadomienia; dokumentacja",
  provisionScope: workLaw.text`${workLaw.articleRange("4", "5", { start: "Art. 4", end: "5" })}; ${workLaw.article("5a", "art. 5a ust. 1–6")}; ${workLaw.articleRange("17", "20", { start: "art. 17", end: "20" })}; ${workLaw.article("22", "art. 22 ust. 1 pkt 6 i ust. 3")}; ${workLaw.article("33", "art. 33 ust. 1")}; ${workLaw.article("57", "art. 57")}; ${workLaw.article("59", "art. 59 ust. 1–4")}; ${workLaw.article("68", "art. 68")}; ${workLaw.article("70", "art. 70")}; ${workLaw.article("84", "art. 84 ust. 6–10")}; ${workLaw.article("103", "art. 103 ust. 3")}; ${workLaw.article("109", "art. 109")}; відповідні правила запуску систем і переходу`,
  outcome:
    "Обов'язок роботодавця визначають за підставою праці та конкретною подією. Підписання договору, передання його копії, повідомлення про початок або завершення і виплата винагороди мають різні строки та підтвердження. Виконання одного не замінює інших.",
  caseQuestion:
    "Чому після однакового завершення роботи 15 серпня один роботодавець подав два різні повідомлення з різними правовими наслідками?",
  placeInWork:
    "Підготовка допуску до роботи, виконання обов'язків під час праці й читання збереженої історії подань після її завершення.",
  sections: [
    {
      id: "identity-stay-and-language",
      title: "До роботи встановлюють особу, перебування та зміст домовленості",
      paragraphs: [
        documents.text`За ${workLaw.article("4", "art. 4 ust. 1")} суб'єкт отримує визначені законом дані й копії документів для підтвердження особи та права її найняти. ${documents.document("passport", "Паспорт")} і ${documents.document("visa", "віза")} відповідають на різні питання: хто ця людина та яка підстава її перебування. Сам строк чинності паспорта не є строком дозволеної роботи.`,
        workLaw.text`${workLaw.article("4", "Art. 4 ust. 2–4")} вимагає пред'явлення чинного документа перебування перед початком роботи, дозволяє вимагати його також під час роботи та зобов'язує зберігати копію. Виняток за ${workLaw.article("4", "ust. 5")} охоплює лише категорії ${workLaw.article("3", "art. 3 ust. 1 pkt 1–5")}. Польський pobyt stały належить до наступного пункту й не звільняє роботодавця від цих обов'язків лише тому, що працівникові не потрібен окремий дозвіл на працю.`,
        documents.text`${workLaw.article("5", "Art. 5 ust. 1")} вимагає письмового договору до допуску до роботи, крім корпоративних випадків, названих у ${workLaw.article("6", "art. 6 ust. 1 pkt 2")}. Для найманого працівника ${documents.document("employment-contract", "umowa o pracę")} фіксує погоджені умови. Якщо договір буде польською, а іноземець не послуговується польською, ${workLaw.article("5", "art. 5 ust. 2")} вимагає ще до підписання надати його зміст письмово в зрозумілій людині версії та зберігати цю версію. Усне пояснення не замінює письмового тексту.`,
        documents.text`Для зрозумілої версії польського договору закон не встановлює загальної вимоги присяжного перекладу. Інше правило діє, коли сам договір складено іноземною мовою: за ${workLaw.article("5", "art. 5 ust. 3")} роботодавець зберігає ${documents.document("sworn-translation", "польський переклад tłumacza przysięgłego")}, внесеного до списку Ministra Sprawiedliwości. Окремо ${workLaw.article("5", "art. 5 ust. 4")} вимагає письмово, зрозумілою мовою повідомити про право вступати до związków zawodowych, профспілок. Це стосується названих трудових, службових, надомних, цивільних та кооперативних відносин; переклад договору сам не доводить надання цієї інформації.`,
      ],
    },
    {
      id: "contract-transmission",
      title: "Підписаний договір і копія, передана органу, є різними записами",
      paragraphs: [
        documents.text`За ${workLaw.article("17", "art. 17 ust. 1 pkt 1")} у договорі відображають умови ${documents.document("work-permit", "дозволу на працю")} або допустиму без нового дозволу зміну. Для ${documents.document("registered-work-declaration", "зареєстрованого oświadczenia")} відповідне правило містить ${workLaw.article("68", "art. 68 ust. 1 pkt 1")}. Підписаний договір не дозволяє домовитися про будь-які інші умови всупереч обраній підставі праці.`,
        workLaw.text`${workLaw.article("17", "Art. 17 ust. 1 pkt 2")} та ${workLaw.article("68", "art. 68 ust. 1 pkt 2")} передбачають передання польськомовного договору через систему обслуговування договорів або його польськомовної копії через систему справ іноземців. Адресатом є відповідно орган, який видав дозвіл, або орган, який вніс oświadczenie до реєстру. Загальне правило вимагає цього до доручення роботи. Для umowy o pomocy przy zbiorach, договору про допомогу при зборі врожаю, перший із цих приписів дає сім днів від доручення роботи; у правилі про oświadczenie такого винятку немає.`,
        workLaw.text`Обов'язок передання не охоплює автоматично кожного власника корпоративного дозволу. ${workLaw.article("17", "Art. 17 ust. 2")} виключає застосування визначених обов'язків, зокрема щодо договору та його передання, до члена zarządu юридичної особи, внесеної до реєстру підприємців KRS, або spółki kapitałowej w organizacji, особи, яка веде справи spółki komandytowej чи komandytowo-akcyjnej, та prokurenta. Перелік цього винятку треба читати саме в його межах.`,
        workLaw.text`Чинне формулювання двох способів передання діє від 20.06.2026 за ${workLaw.external("art. 5 і 8 зміни Dz.U. 2026 poz. 734", amendmentUrl)}. Воно не обмежує систему обслуговування договорів лише договорами, початково укладеними в ній. Водночас ${workLaw.external("art. 6 цієї зміни", amendmentUrl)} передбачає окреме впровадження функцій. Тому сам текст закону не підтверджує доступності кожної нової функції eUmowy. ${workLaw.external("Офіційна довідка praca.gov.pl", servicesUrl)} прямо називає послугу Przekazanie kopii Umowy z Cudzoziemcem (PGP-UZC), використану в прикладі нижче.`,
        workLaw.text`${workLaw.external("Комунікат від 28.05.2025, poz. 15", contractLaunchUrl)} визначив запуск передання копій для дозволів wojewody з 01.08.2025, а для сезонних дозволів і oświadczeń з 01.07.2025. Передання працівникові рішення за ${workLaw.article("17", "art. 17 ust. 1 pkt 7")} або зареєстрованого oświadczenia за ${workLaw.article("68", "art. 68 ust. 1 pkt 5")} залишається іншою дією. Копія для органу не замінює документа для працівника.`,
      ],
    },
    {
      id: "permit-events-and-channel",
      title: "Для дозволу двомісячний поріг і строк повідомлення не збігаються",
      paragraphs: [
        documents.text`${workLaw.article("19", "Art. 19")} розрізняє ${documents.document("work-permit-non-start-notification", "непочаток роботи протягом двох місяців від початкової дати дозволу")}, ${documents.document("work-permit-interruption-notification", "перерву понад два місяці")} та ${documents.document("work-permit-end-notification", "завершення більш як за два місяці до кінця дозволу")}. Повідомляє суб'єкт, якому видано дозвіл, до органу, що його видав. ${workLaw.article("20", "Art. 20 ust. 1")} дає сім днів від настання відповідної обставини. Два місяці визначають подію, а не додатковий час для надсилання. Звичайний початок роботи не є окремим повідомленням за цим приписом; ${workLaw.article("57", "art. 57")} взагалі виключає його застосування до сезонного дозволу.`,
        workLaw.text`Інформація про ці обставини є підставою для скасування дозволу органом за ${workLaw.article("22", "art. 22 ust. 1 pkt 6")}. Для непочатку або перерви ${workLaw.article("22", "ust. 3")} передбачає обмежений виняток: wojewoda отримав повідомлення з причинами та заявою, що дозвіл буде використано за призначенням. Тоді саме ця підстава скасування не застосовується. Виняток не поширюється на раннє завершення і не усуває інших підстав. Квитанція про надсилання не є рішенням про скасування.`,
        workLaw.text`Зміна назви, місцезнаходження чи правової форми визначеного суб'єкта, перехід закладу праці та зміна лише назви посади без зміни обов'язків мають інший механізм за ${workLaw.article("18", "art. 18")}: нового чи зміненого дозволу не потрібно, але орган повідомляють у сім днів за ${workLaw.article("20", "art. 20")}. Натомість ${workLaw.article("33", "art. 33 ust. 1")} допускає для звичайного дозволу польського роботодавця іншу роботу або посаду сумарно до 30 днів на рік лише зі збереженням решти умов і попереднім повідомленням wojewody. Подання після переведення не виконує умови повідомити заздалегідь.`,
        workLaw.text`За ${workLaw.article("109", "art. 109")} законний спосіб подання залежить також від технічного переходу. ${workLaw.external("Комунікат від 29.04.2026, poz. 7", permitLaunchUrl)} запустив компонент для повідомлень про непочаток, перерву та завершення з 01.06.2026. ${workLaw.external("Mazowiecki UW", permitTransitionUrl)} пов'язує новий канал із заявами про дозвіл, поданими після 01.01.2026, і окремо залишає e-Doręczenia або паперовий спосіб для зазначених старіших справ. Важлива дата заяви, а не лише видачі дозволу. Цей комунікат не підтверджує запуск компонентів для зміни даних або попереднього повідомлення про іншу роботу; для них спосіб звіряють з чинними вказівками органу та перехідним правилом.`,
      ],
    },
    {
      id: "declaration-and-protection-notices",
      title:
        "Початок за oświadczeniem і powiadomienie до PUP мають різні підстави",
      paragraphs: [
        documents.text`Для oświadczenia адресатом є starosta, який зробив запис. ${documents.document("declaration-start-notification", "PSZ-PPPC про фактичний початок")} подають у сім днів від цього початку за ${workLaw.article("70", "art. 70 ust. 1 pkt 1")}. ${documents.document("declaration-non-start-notification", "PSZ-PNPC про непочаток")} має інший відлік: 14 днів від початкової дати роботи в реєстрі за ${workLaw.article("70", "ust. 1 pkt 2")}. Пізніший фактичний початок потребує свого повідомлення; попередній запис про непочаток не стає від цього неправдивим.`,
        documents.text`${documents.document("declaration-end-notification", "PSZ-PZPC")} охоплює остаточний непочаток або завершення перед датою кінця роботи в oświadczeniu. За ${workLaw.article("70", "art. 70 ust. 2")} це один вид повідомлення з двома альтернативними подіями. Числового строку сім або 14 днів тут не встановлено, але обов'язок повідомити залишається. Саме повідомлення за ${workLaw.article("70", "ust. 5")} спричиняє unieważnienie wpisu z mocy prawa, втрату чинності запису в силу закону. Окремого рішення для цього наслідку не потрібно.`,
        workLaw.text`${workLaw.external("Комунікат від 29.04.2026, poz. 8", declarationLaunchUrl)} запустив компонент для остаточного непочатку й раннього завершення з 01.06.2026. ${workLaw.external("PUP у Тарнові", declarationFormsUrl)} пояснює, що для записів до цієї дати залишаються старі форми PSZ-PPPO та PSZ-PZPO. Назва старої форми не означає автоматично старих матеріальних правил: ${workLaw.article("103", "art. 103 ust. 3")} поширює новий закон на раніше зареєстровані oświadczenia. Для конкретного подання звіряють дату запису та вказівки відповідного PUP, powiatowego urzędu pracy.`,
        documents.text`${documents.document("ukraine-work-notification", "Powiadomienie про доручення праці (PSZ-PPWPU)")} за ${workLaw.article("5a", "art. 5a ust. 1–2 і 6")} є окремим механізмом для особи з тимчасовим захистом. Польський суб'єкт повідомляє електронно протягом семи днів від фактичного початку до PUP за своїм місцезнаходженням або постійним місцем перебування. ${workLaw.external("Art. 41 закону Dz.U. 2026 poz. 203", transitionUrl)} передбачає відповідне застосування також до громадян України, які перебувають законно без тимчасового захисту, протягом трьох років від 05.03.2026. ${workLaw.external("Art. 40 цього закону", transitionUrl)} зберігає визначене попереднє правило для належно поданих раніше повідомлень; сама зміна закону не зобов'язує повторити кожне з них.`,
        workLaw.text`${workLaw.article("5a", "Art. 5a ust. 5")} дає сім днів від конкретної зміни для повторного повідомлення. Перший пункт прямо називає зміну виду договору між суб'єктом і громадянином України. Наступні пункти окремо називають зміну посади або виду роботи, зменшення робочого часу чи кількості годин, зазначених у повідомленні, і зниження зазначеної в ньому місячної або погодинної ставки. Отже, формулювання першого пункту не слід без застереження переносити на будь-яке громадянство особи з тимчасовим захистом. Ці правила не є повідомленням про початок за oświadczeniem.`,
        workLaw.text`Для збою системи ${workLaw.article("5a", "art. 5a ust. 3")}, ${workLaw.article("20", "art. 20 ust. 2")} та ${workLaw.article("70", "art. 70 ust. 4")} передбачають подання не пізніше першого робочого дня після усунення несправності, яка перешкодила своєчасній дії. Останній припис стосується строкових повідомлень про початок і непочаток. Це не загальне продовження будь-якого строку через труднощі роботодавця і не числовий строк для PSZ-PZPC.`,
      ],
    },
    {
      id: "actual-performance-and-retention",
      title: "Збережені подання не доводять усіх фактичних умов",
      paragraphs: [
        workLaw.text`${workLaw.article("17", "Art. 17 ust. 1 pkt 3–5")} і ${workLaw.article("68", "art. 68 ust. 1 pkt 3–4")} передбачають належне коригування оплати. Для звичайної роботи в польського суб'єкта та oświadczenia враховують поточний мінімум зарплати або погодинної ставки; для направлення іноземним роботодавцем діє окремий орієнтир 70% поточної середньої місячної винагороди у воєводстві. Збільшення неповного робочого часу або годин за цивільним договором потребує пропорційного підвищення винагороди. Старий текст дозволу не заморожує ці обов'язки на весь строк.`,
        documents.text`${documents.document("payroll-statement", "Pasek wynagrodzenia")} пояснює розрахунок суми до виплати, а ${documents.document("bank-statement", "виписка з виконаним банківським переказом")} показує рух коштів. Жодне повідомлення про завершення не погашає зарплатної заборгованості: її виплату прямо вимагають ${workLaw.article("17", "art. 17 ust. 5")} і ${workLaw.article("68", "art. 68 ust. 3")}. За виявленого невиконання названих обов'язків ${workLaw.article("17", "art. 17 ust. 4")} та ${workLaw.article("68", "art. 68 ust. 2")} вимагають невідкладно їх виконати. Пізніше виправлення не змінює фактичної дати первісної дії.`,
        workLaw.text`У визначеній сезонній ситуації ${workLaw.article("59", "art. 59 ust. 1–4")} додає окремий обов'язок щодо житла. Якщо людина в'їхала за сезонною візою або безвізово у зв'язку із зареєстрованою заявою на сезонний дозвіл і роботодавець забезпечує житло, він укладає окремий письмовий договір найму або безоплатного користування. Перед підписанням надають зрозумілий переклад. Наймова плата не може бути завищеною з огляду на чисту винагороду, стандарт і ринок та не може вираховуватися з винагороди; умова автоматичного вирахування недійсна. Це не універсальний додаток до кожного працевлаштування.`,
        documents.text`${documents.document("dispatch-proof", "Підтвердження подання")} читають разом із відправленим змістом. Квитанція від копії договору не доводить подання наступного повідомлення. ${workLaw.article("17", "Art. 17 ust. 1 pkt 9")} і ${workLaw.article("68", "art. 68 ust. 1 pkt 7")} вимагають на запит визначених органів надати документи про виконання названих у них обов'язків польською або з перекладом. Звідси не випливає вимога додавати всі кадрові, банківські й страхові документи до кожного повідомлення.`,
        workLaw.text`Дані та копії за ${workLaw.article("4", "art. 4 ust. 4 і 6–7")} зберігають протягом роботи та два роки від кінця календарного року припинення відповідних правовідносин, захищаючи їх від неналежного доступу й втрати. Якщо відносини завершилися в серпні 2026 року, цей строк доходить до кінця 2028 року. Довші строки за іншими приписами зберігаються; це не дата автоматичного знищення всієї кадрової документації. За ${workLaw.article("5", "art. 5 ust. 2–3")} відповідний строк поширюється й на збереження мовних версій.`,
        workLaw.text`Відповідальність визначають за конкретним порушенням. ${workLaw.article("84", "Art. 84 ust. 6–10")} окремо охоплює названі порушення мовної інформації, передання договорів, повідомлень, сезонного житла та неправдиві відомості про роботу за oświadczeniem. Подання документа і законність фактичної праці є різними питаннями. Приклад нижче встановлює дії роботодавця та їхні наслідки, а не результат повної перевірки підприємства.`,
      ],
    },
  ],
  caseExample: {
    title: "Одна дата завершення, дві відправлені форми",
    facts:
      "Це продовження вигаданого порівняння A/B з пояснення обов'язків роботодавця. Польська компанія A безпосередньо найняла двох громадян Молдови на umowy o pracę для несезонної роботи, без агентського направлення. Для обох окремо встановлено законне перебування за відповідними національними робочими візами протягом усього розглянутого періоду та відсутність незалежного звільнення від дозволу. Заяву про звичайний дозвіл для працівника A подано в лютому 2026 року; дозвіл видано в червні. Для B oświadczenie зареєстровано в червні. Обидва документи були отримані до 29 червня й передбачали роботу 01.07–31.12.2026. Працівники не послуговувалися польською; 29 червня перед підписанням польських договорів вони отримали письмовий зміст зрозумілою їм румунською та інформацію про право вступати до профспілок. Договори відповідали дозволеним умовам, їхні польські копії передано того самого дня. Обидва почали працювати 1 липня, B повідомлено 3 липня. Робота й трудові відносини з обома завершилися 15 серпня, відповідні повідомлення подано 17 серпня. Запис завершено станом на 12.09.2026.",
    sample: {
      kind: "table",
      title: "Zestawienie wykonanych czynności A/B",
      note: "Вигаданий польський робочий запис, не форма praca.gov.pl і не протокол контролю. Імена, адреси, номери справ, документів та квитанцій опущено. Наведено конкретні вже вчинені дії.",
      columns: [
        "Data i dokument",
        "Pracownik A: zezwolenie",
        "Pracownik B: oświadczenie",
      ],
      rows: [
        {
          id: "contract-sent",
          cells: [
            "29.06.2026: podpisane umowy i przekazane kopie",
            "Zachowano polską umowę, wcześniejszy pisemny tekst rumuński i informację o prawie wstępowania do związków zawodowych. PGP-UZC przekazano organowi, który wydał zezwolenie; zachowano potwierdzenie.",
            "Zachowano te same rodzaje dokumentów. Własne PGP-UZC przekazano staroście, który dokonał wpisu; zachowano odrębne potwierdzenie.",
          ],
        },
        {
          id: "start-event",
          cells: [
            "01.07.2026: rozpoczęcie; 03.07.2026: zgłoszenie B",
            "W zapisie czasu pracy ustalono początek 1 lipca. Nie przypisano do tego zdarzenia powiadomienia ZC-PNPC, ZC-PPPC ani ZC-PZPC.",
            "PSZ-PPPC z 3 lipca wskazuje faktyczny początek 1 lipca. Zachowano wysłaną treść i dowód złożenia, odrębne od czerwcowego PGP-UZC.",
          ],
        },
        {
          id: "end-event",
          cells: [
            "15.08.2026: rzeczywiste zakończenie pracy i zatrudnienia",
            "Zakończenie ponad dwa miesiące przed końcem ważności zezwolenia 31 grudnia. Powstał obowiązek powiadomienia organu, który wydał zezwolenie.",
            "Zakończenie przed datą 31 grudnia wpisaną do ewidencji. Zdarzenie zakwalifikowano jako wcześniejsze zakończenie, a nie niepodjęcie pracy.",
          ],
        },
        {
          id: "end-submissions",
          cells: [
            "17.08.2026: wysłane powiadomienia",
            "ZC-PZPC do wojewody, który wydał zezwolenie, z datą zakończenia 15 sierpnia. Treść i potwierdzenie złożenia zachowane. Złożenie nastąpiło w terminie siedmiu dni.",
            "PSZ-PZPC do starosty, który dokonał wpisu, z datą zakończenia 15 sierpnia. Treść i potwierdzenie złożenia zachowane. Nie przypisano temu zawiadomieniu siedmio- ani czternastodniowego terminu.",
          ],
        },
        {
          id: "recorded-result",
          cells: [
            "12.09.2026: wynik odczytania zachowanych dokumentów",
            "Potwierdzenie ZC-PZPC dowodzi zgłoszenia zakończenia. W zestawieniu nie stwierdzono wydania decyzji uchylającej zezwolenie tylko na podstawie tej kwitancji.",
            "Wpis oświadczenia został unieważniony z mocy prawa wskutek PSZ-PZPC. Zachowany dokument wcześniejszego wpisu nie oznacza, że nadal można na nim pracować.",
          ],
        },
      ],
    },
    analysis: documents.text`Для A та B польські копії ${documents.document("employment-contract", "договорів")} передано до фактичного початку. Липневе ${documents.document("declaration-start-notification", "PSZ-PPPC")} B є своєчасним і залишається правдивим після серпневого завершення. ${documents.document("work-permit-end-notification", "ZC-PZPC")} A виконує окремий обов'язок за ${workLaw.articleRange("19", "20", { start: "art. 19", end: "20" })}, але квитанція не засвідчує рішення органу. Для B ${documents.document("declaration-end-notification", "PSZ-PZPC")} спричинило втрату чинності запису за ${workLaw.article("70", "art. 70 ust. 5")}. У кожного подання власна дата і власне ${documents.document("dispatch-proof", "підтвердження")}.`,
    lesson:
      "Роботодавець відокремив підписання, передання копій, фактичний початок, завершення і повідомлення. Для A доведено своєчасне повідомлення, для B також установлено законний наслідок для запису oświadczenia. З цього порівняння не випливає, що всю належну зарплату вже виплачено, що орган скасував дозвіл A або що працівники отримали нову підставу подальшої праці чи перебування.",
  },
}

export const obowiazkiPodmiotuLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:powierzanie-pracy:obowiazki-podmiotu",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "powierzanie-pracy",
        moduleId: "obowiazki-podmiotu",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: workLaw.text`Обов'язки до допуску, передання договорів, події для повідомлень і зберігання документів за ${workLaw.external("чинним офіційним текстом Dz.U. 2025 poz. 621", workUrl)}, відповідними змінами та комунікатами запуску. Перевірено 12.09.2026 у межах цього пояснення; офіційні вказівки щодо старих форм відокремлено від правила закону.`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-powierzanie-pracy",
            },
            locator:
              "Art. 4; art. 5; art. 5a ust. 1–6; art. 17–20; art. 22 ust. 1 pkt 6 and ust. 3; art. 33 ust. 1; art. 57; art. 59 ust. 1–4; art. 68; art. 70; art. 84 ust. 6–10; art. 103 ust. 3; art. 109. Related: DU2026/734 arts5–6 and8; DU2026/203 arts40–41 and54; ministerial communications2025/15 and2026/7–8.",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-09-12",
      verifiedAt: "2026-09-12",
    },
    body: moduleContent,
  })

export default obowiazkiPodmiotuLearningModuleTopic
