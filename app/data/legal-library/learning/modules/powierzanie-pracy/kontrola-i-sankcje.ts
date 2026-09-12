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
const pipUrl = "https://eli.gov.pl/api/acts/DU/2024/1712/text/U/D20241712Lj.pdf"
const offencesUrl =
  "https://eli.gov.pl/api/acts/DU/2025/734/text/U/D20250734Lj.pdf"
const procedureUrl =
  "https://eli.gov.pl/api/acts/DU/2025/860/text/U/D20250860Lj.pdf"
const amendmentUrl =
  "https://eli.gov.pl/api/acts/DU/2026/473/text/O/D20260473.pdf"
const launchUrl =
  "https://www.gov.pl/attachment/fc45e79c-2206-483b-9ff2-f1c7d94a1038"
const servicesUrl =
  "https://www.praca.gov.pl/eurzad/html/pomoc/zatrudnianie_cudzoziemcow.htm"

const moduleContent: LegalLearningModule = {
  id: "kontrola-i-sankcje",
  order: 6,
  title: "Контроль і санкції",
  polish:
    "Ustalenia kontroli; zastrzeżenia do protokołu; wykroczenie; mandat karny",
  provisionScope: workLaw.text`${workLaw.article("2", "Art. 2 pkt 2–3")}; ${workLaw.article("4", "art. 4 ust. 2 i 4")}; ${workLaw.article("17", "art. 17 ust. 1 pkt 2 i 9 oraz ust. 2")}; ${workLaw.articleRange("84", "86", { start: "art. 84", end: "86" })}; відповідні приписи про контроль PIP і провадження у справах про wykroczenia`,
  outcome:
    "Протокол фіксує встановлені під час контролю обставини. Відсутність документа в показаній папці ще не доводить невиконання обов'язку, а запис про порушення потребує окремої правової оцінки перед застосуванням санкції.",
  caseQuestion:
    "Як збережене подання договору змінило висновок у протоколі і чому ця зміна не означає перевірки всіх умов роботи?",
  placeInWork:
    "Читання протоколу контролю, зіставлення його висновків із первинними документами та розуміння наслідків заперечення.",
  sections: [
    {
      id: "finding-and-its-evidence",
      title: "Що встановлює контроль і що записано в протоколі",
      paragraphs: [
        workLaw.text`Państwowa Inspekcja Pracy (PIP), Державна інспекція праці, контролює законність зайнятості, іншої оплачуваної роботи та виконання роботи іноземцями за ${workLaw.external("art. 10 ust. 1 pkt 4 ustawy o PIP", pipUrl)}. Це власна підстава її компетенції. ${workLaw.article("86", "Art. 86 закону про працю іноземців")} натомість визначає призначення стягнутих штрафів і відсилає до процедури розгляду проступків. З нього не випливає, хто і як проводить сам контроль.`,
        workLaw.text`Protokół kontroli є письмовим записом установлених фактів, порушень та інших відомостей перевірки. ${workLaw.external("Art. 31 ust. 1–2 ustawy o PIP", pipUrl)} передбачає паперову або електронну форму та визначає зміст протоколу, включно з додатками. Протокол може також містити відомості про видані усні рішення й розпорядження. Сам запис фактів не є штрафним мандатом або судовим вироком. Якщо порушень не встановлено, ${workLaw.external("art. 31 ust. 10–11", pipUrl)} допускає натомість notatkę urzędową, службову нотатку.`,
        documents.text`Інспектор зіставляє фактичну роботу з ${documents.document("work-permit", "дозволом на працю")}, ${documents.document("employment-contract", "договором")} та іншими відомостями, потрібними для перевірюваного обов'язку. За ${workLaw.external("art. 27 ustawy o PIP", pipUrl)} контрольований суб'єкт надає запитані документи, матеріали й інформацію. ${workLaw.article("17", "Art. 17 ust. 1 pkt 9")} окремо передбачає надання визначеним органам на вимогу названих доказів виконання обов'язків польською або в перекладі польською. Це не означає автоматичного подання однакового повного кадрового пакета в кожній справі.`,
        "Фраза про відсутність квитанції в представлених матеріалах описує стан цих матеріалів. Висновок про те, що договір ніколи не передавали, стосується іншого факту. Його може спростувати збережене раніше подання з відповідним договором, адресатом і датою. Пізніше створена чернетка такого доказу не дає.",
      ],
    },
    {
      id: "different-actors-and-offences",
      title: "Дії роботодавця та працівника мають різні визначення",
      paragraphs: [
        workLaw.text`Nielegalne powierzenie pracy cudzoziemcowi означає незаконне доручення роботи іноземцеві. ${workLaw.article("2", "Art. 2 pkt 2 lit. a–c")} охоплює доручення роботи особі без законного перебування, з підставою перебування, яка не дає права працювати, або без потрібного дозволу чи oświadczenia. Потребу в документі визначають із урахуванням іншої законної підстави доступу до праці, а не лише за громадянством.`,
        workLaw.text`${workLaw.article("2", "Art. 2 pkt 2 lit. d–e")} також охоплює роботу всупереч умовам дозволу, oświadczenia або названих дозволів на тимчасове перебування. Сам припис зберігає винятки для допустимої зміни умов і роботи на іншій законній підставі. ${workLaw.article("2", "Lit. f")} окремо називає відсутність письмового договору, крім корпоративних функцій у сфері ${workLaw.article("6", "art. 6 ust. 1 pkt 2")}. Зміна лише назви посади без зміни обов'язків і доручення фактично інших завдань тому можуть мати різну оцінку.`,
        workLaw.text`Nielegalne wykonywanie pracy przez cudzoziemca є окремим визначенням незаконного виконання роботи самим іноземцем. ${workLaw.article("2", "Art. 2 pkt 3 lit. a–c")} називає відсутність законного перебування, несумісну з роботою підставу перебування та відсутність відповідного дозволу або oświadczenia, коли їх вимагає закон. Цей перелік не повторює всі порушення роботодавця. Невиконання роботодавцем обов'язку передати копію договору саме по собі не доводить, що працівник не мав дозволу.`,
        workLaw.text`Wykroczenie є проступком, за який закон передбачає відповідальність конкретного виконавця забороненої дії. Компанія може бути суб'єктом, що доручає роботу, але цього недостатньо для автоматичного штрафу будь-якій особі з її кадрів чи zarządu. Потрібно встановити її власну дію або бездіяльність та відповідальність за відповідний обов'язок. За ${workLaw.external("art. 1 § 2 Kodeksu wykroczeń", offencesUrl)} немає проступку, якщо особі не можна приписати вину на час учинення діяння.`,
      ],
    },
    {
      id: "contract-and-transmission",
      title: "Підписаний договір і передана копія доводять різні дії",
      paragraphs: [
        documents.text`${documents.document("employment-contract", "Umowa o pracę")} підтверджує погоджені трудові умови. Для звичайного найму на підставі дозволу ${workLaw.article("17", "art. 17 ust. 1 pkt 2")} окремо вимагає до доручення роботи передати польськомовний договір через систему обслуговування договорів або його польську копію органу через систему справ іноземців. Виняток для umowy o pomocy przy zbiorach, договору про допомогу при зборі врожаю, має сім днів від доручення роботи. Його не застосовують до звичайної складської роботи.`,
        workLaw.text`Сфера цього обов'язку також не охоплює без винятків усі корпоративні функції. ${workLaw.article("17", "Art. 17 ust. 2")} виключає визначені обов'язки щодо названих функцій у zarządzie, ведення справ spółki komandytowej або komandytowo-akcyjnej та prokury. У наведеному нижче прикладі є звичайний найманий працівник, тому корпоративний виняток відсутній.`,
        workLaw.text`${workLaw.external("Комунікат від 28.05.2025, poz. 15", launchUrl)} визначив запуск передання копій для дозволів wojewody з 01.08.2025. ${workLaw.external("Офіційна довідка praca.gov.pl", servicesUrl)} називає відповідну послугу Przekazanie kopii Umowy z Cudzoziemcem (PGP-UZC). Через неї в прикладі передано договір у серпні 2026 року. Назва послуги не доводить, що конкретне подання було завершено, й не підтверджує доступності всіх функцій іншої системи обслуговування договорів.`,
        documents.text`${documents.document("dispatch-proof", "Підтвердження подання")} читають разом із надісланим повідомленням і його додатком. Вони мають стосуватися цього працівника, цього договору та належного адресата. Дата підпису в договорі не є датою передання копії органу. Так само квитанція іншого повідомлення про працівника не доводить передання саме договору.`,
        workLaw.text`Якби обов'язку передання справді не виконали, ${workLaw.article("84", "art. 84 ust. 6")} передбачає за названу бездіяльність штраф від 1 000 до 3 000 zł. Це окремий склад проступку. ${workLaw.article("84", "Art. 84 ust. 1")} передбачає за незаконне доручення роботи від 3 000 до 50 000 zł, а ${workLaw.article("84", "ust. 2")} за незаконне виконання роботи іноземцем встановлює штраф не нижче 1 000 zł. Суми не можна обирати за назвою папки або переносити з одного складу на інший.`,
      ],
    },
    {
      id: "objections-to-the-protocol",
      title: "Як заперечити встановлені у протоколі обставини",
      paragraphs: [
        workLaw.text`Zastrzeżenia do ustaleń protokołu є мотивованими запереченнями щодо встановлених у протоколі обставин. За ${workLaw.external("art. 31 ust. 4–5 ustawy o PIP", pipUrl)} контрольований суб'єкт заявляє їх до підписання протоколу, письмово, протягом семи днів від його представлення. Це не строк від початку перевірки і не звичайне odwołanie за KPA проти адміністративного рішення.`,
        workLaw.text`Заперечення пояснює, яке саме встановлення оспорюють і чому. За ${workLaw.external("art. 31 ust. 6–7", pipUrl)} інспектор досліджує заперечення. Якщо вони обґрунтовані, він змінює або доповнює відповідну частину протоколу, а зміни документує. Саме слово "не погоджуємося" не встановлює факту своєчасного передання: для цього в прикладі досліджено первинний надісланий пакет.`,
        workLaw.text`Відмова підписати протокол має іншу функцію. ${workLaw.external("Art. 31 ust. 8", pipUrl)} прямо не дозволяє такою відмовою зупинити застосування законних заходів. Вона також не замінює письмових мотивованих заперечень у їхньому строку.`,
        workLaw.text`Для подій 2026 року має значення дата початку контролю. ${workLaw.external("Art. 13 зміни Dz.U. 2026 poz. 473", amendmentUrl)} залишає попередні приписи для перевірок, розпочатих і не завершених до набрання нею чинності 08.07.2026. У прикладі контроль розпочато 24 серпня, тому його не віднесено до цієї старішої групи лише за датою протоколу.`,
      ],
    },
    {
      id: "measures-mandate-and-limits",
      title:
        "Протокол, mandat karny та судове провадження мають різні наслідки",
      paragraphs: [
        workLaw.text`${workLaw.external("Art. 33 ustawy o PIP", pipUrl)} передбачає окремі заходи після встановлень контролю, зокрема рішення, wystąpienia та розпорядження у визначеній законом сфері. За ${workLaw.external("art. 36 ust. 1–1a", pipUrl)} wystąpienia є письмовими зверненнями з висновками після контролю та їхньою правовою підставою. Mandat karny є окремим способом накладення штрафу за проступок. ${workLaw.article("86", "Art. 86")} відсилає ці справи до Kodeksu postępowania w sprawach o wykroczenia (KPW), процесуального кодексу про проступки. Відповідно до ${workLaw.external("art. 17 § 2 і art. 95 § 3 KPW", procedureUrl)} інспектор праці має роль публічного обвинувача та повноваження мандатного провадження у визначених справах, зокрема про проступки за ${workLaw.article("84", "art. 84")}.`,
        workLaw.text`Для справ за ${workLaw.article("84", "art. 84")}, у яких публічним обвинувачем є PIP або Straż Graniczna, ${workLaw.external("art. 96 § 1af pkt 1 KPW", procedureUrl)} допускає штраф мандатом до 10 000 zł. Це спеціальна процесуальна межа, а не однакова сума за кожне порушення. Вона не підвищує максимальних 3 000 zł для обраного вище невиконання обов'язку передати копію договору за ${workLaw.article("84", "art. 84 ust. 6")}.`,
        workLaw.text`Особа може відмовитися прийняти мандат. ${workLaw.external("Art. 97 § 2–3 KPW", procedureUrl)} вимагає повідомити їй про це право та наслідки відмови. За ${workLaw.external("art. 99 KPW", procedureUrl)} тоді орган звертається до суду з wnioskiem o ukaranie, заявою про покарання. Це не автоматичне припинення обвинувачення і не та сама дія, що відмова підписати протокол PIP. У прикладі нижче мандат не накладали, тому результатом є виправлення встановлення, а не скасування штрафу.`,
        workLaw.text`${workLaw.article("85", "Art. 85")} встановлює вузький виняток із відповідальності за ${workLaw.article("84", "art. 84 ust. 1")} у названій ситуації доручення роботи без чинної візи або іншого документа перебування. Потрібне виконання обов'язків за ${workLaw.article("4", "art. 4 ust. 2 і 4")} щодо пред'явлення й збереження копії документа, за відсутності знання про його підроблення, а також zgłoszenie do ubezpieczeń społecznych, реєстрація для соціального страхування, якщо її вимагають приписи. Один лише страховий запис не дає цього винятку. Припис не звільняє від усіх інших обов'язків і штрафів.`,
        "Зміна конкретного встановлення усуває опору для відповідного звинувачення в межах перевіреного факту. Вона не підтверджує автоматично правильності всіх виплат або умов зайнятості. Протокол і його виправлення також не є рішеннями про скасування дозволу на працю чи про право подальшого перебування.",
      ],
    },
  ],
  caseExample: {
    title:
      "Копію договору передано 13 серпня, хоча квитанції не було в першій папці",
    facts: documents.text`Вигаданий приклад звичайного прямого найму. Польська компанія найняла повнолітнього громадянина Індії для несезонної складської роботи без агентства. Виданий у червні 2026 року ${documents.document("work-permit", "дозвіл")} охоплював роботу 17.08–31.12.2026 у цього роботодавця на погоджених умовах. Окремо встановлено законне перебування за польською національною ${documents.document("visa", "робочою візою")} на весь цей період. Іншої підстави доступу до праці чи звільнення від дозволу немає. Польськомовну umowę o pracę підписано 13 серпня; мовні обов'язки виконано. Того самого дня її копію передано через PGP-UZC wojewodzie, який видав дозвіл. Робота фактично почалася 17 серпня. Контроль PIP почався 24 серпня. У первинно представленій папці був договір, але не було квитанції. Після представлення протоколу 27 серпня роботодавець 28 серпня, до його підписання, подав інспектору письмові мотивовані заперечення зі збереженим пакетом від 13 серпня.`,
    sample: {
      kind: "letter",
      title: "Wybrane fragmenty dokumentów kontroli i zastrzeżeń",
      language: "pl",
      note: "Вигадані скорочені фрагменти трьох послідовних записів із зазначенням їхніх авторів. Це не офіційний бланк протоколу або універсальна форма заперечення; ідентифікатори, підписи та інші встановлення опущено.",
      paragraphs: [
        "PROTOKÓŁ PRZEDSTAWIONY PRZEZ INSPEKTORA 27.08.2026 r. W przedstawionej dokumentacji brak potwierdzenia przekazania kopii umowy organowi przed rozpoczęciem pracy 17.08.2026 r. Na tej podstawie przyjęto, że kopii umowy nie przekazano przed powierzeniem pracy.",
        "ZASTRZEŻENIA PODMIOTU KONTROLOWANEGO, ZŁOŻONE INSPEKTOROWI 28.08.2026 r. Kwestionujemy ustalenie o nieprzekazaniu kopii umowy. Umowę z 13.08.2026 r. przekazano tego samego dnia przez PGP-UZC wojewodzie, który wydał zezwolenie. Przedkładamy zachowaną treść wysłanego zgłoszenia, załączoną umowę oraz powiązane potwierdzenie złożenia. Wnosimy o zmianę tego ustalenia. Pozostałych ustaleń nie obejmuje niniejsze zastrzeżenie.",
        "UDOKUMENTOWANA PRZEZ INSPEKTORA ZMIANA USTALENIA, 02.09.2026 r. Po sprawdzeniu zgodności odbiorcy, pracownika, załączonej umowy i daty złożenia ustalono, że kopia umowy została przekazana 13.08.2026 r., przed rozpoczęciem pracy 17.08.2026 r. Odpowiednią część protokołu zmieniono. Brak potwierdzenia w pierwotnie przedstawionej dokumentacji nie dowodził nieprzekazania kopii umowy.",
      ],
    },
    analysis: documents.text`Заперечення подано наступного дня після представлення протоколу, до його підписання, тобто в межах семи днів за ${workLaw.external("art. 31 ust. 4–5 ustawy o PIP", pipUrl)}. 2 вересня інспектор зіставив первинне повідомлення, договір і ${documents.document("dispatch-proof", "підтвердження подання")}. Дата 13 серпня передує фактичному початку 17 серпня, а адресат і додаток відповідають обов'язку за ${workLaw.article("17", "art. 17 ust. 1 pkt 2")}. Подання не створювали заднім числом і не замінювали запереченням: воно вже існувало. Тому інспектор виправив висновок про невиконання саме цього обов'язку. Якби збереглася лише чернетка повідомлення або підписаний договір без доказу передання, вони не довели б ту саму подію.`,
    lesson:
      "Встановлення про відсутність своєчасного передання спростовано первинними матеріалами, і 2 вересня його змінено. Це завершений результат щодо однієї дії. Приклад не містить накладеного мандата, судового рішення або висновку, що всі інші обов'язки роботодавця виконано.",
  },
}

export const kontrolaISankcjeLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:powierzanie-pracy:kontrola-i-sankcje",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "powierzanie-pracy",
        moduleId: "kontrola-i-sankcje",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: workLaw.text`Окремі визначення незаконної праці, обов'язок передання договору та відповідальність за ${workLaw.external("чинним текстом Dz.U. 2025 poz. 621", workUrl)}; встановлення контролю і заперечення за ${workLaw.external("законом про PIP", pipUrl)}; вина і мандатне провадження за відповідними кодексами. Перевірено 12.09.2026 у межах цього пояснення та прикладу; це не повторна перевірка всієї системи контролю або всіх наслідків незаконного перебування.`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-powierzanie-pracy",
            },
            locator:
              "Art. 2 pkt 2–3; art. 4 ust. 2 and 4; art. 6 ust. 1 pkt 2; art. 17 ust. 1 pkt 2 and 9, ust. 2; art. 84 ust. 1–2 and 6; arts. 85–86. Related: PIP arts. 10 ust. 1 pkt 4, 27, 31, 33, 36 ust. 1–1a; KW art. 1 § 2; KPW arts. 17 § 2, 95 § 3, 96 § 1af pkt 1, 97 § 2–3, 99; DU2026/473 art. 13; communication2025/15 and official PGP-UZC help.",
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

export default kontrolaISankcjeLearningModuleTopic
