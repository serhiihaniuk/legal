import type { DocumentGuide } from "../../contracts"
import { createEvidenceDocumentTextAuthor } from "../../legal-text"
import { defineDocumentTopic } from "../define-document-topic"
import {
  documentSources,
  foreignersLaw as law,
  kpaLaw as kpa,
} from "../authoring"

const documents = createEvidenceDocumentTextAuthor()

const guide: DocumentGuide = {
  id: "settlement-intention",
  title: "Докази наміру оселитися в Польщі",
  category: "evidence",
  kind: "evidence-set",
  aliases: [],
  description:
    "Намір оселитися означає план постійного життя в Польщі. Його пояснює заявник, а документи про житло, роботу чи інші обставини дозволяють зіставити цей план із фактами. Це питання доказування, а не назва однієї довідки або обов'язкового комплекту.",
  preparedBy:
    "Заявник описує свій план. Документи про відповідні обставини допомагають перевірити, чи узгоджується пояснення з фактами.",
  purpose: [
    "Пояснює, які факти підтримують намір постійного оселення, коли обрана підстава pobytu stałego містить таку умову.",
  ],
  doesNotProve: [
    "Один договір або фраза про бажання залишитися не гарантують висновку органу. Житло у власності, робота чи сім'я в Польщі не є універсальним обов'язковим набором для цього питання.",
  ],
  explanation: [
    {
      id: "explain-intention",
      title: "Що треба пояснити поряд із Kartą Polaka",
      paragraphs: [
        law.text`За ${law.article("195", "art. 195 ust. 1 pkt 9")} підстава поєднує дійсну Kartę Polaka та намір оселитися в Польщі на постійно. Сама карта не описує життєвого плану заявника. Окрема підстава для особи польського походження за ${law.article("195", "art. 195 ust. 1 pkt 3")} також містить умову наміру постійного оселення. Докази походження і докази наміру відповідають на різні питання.`,
        documents.text`Початковий план можна пояснити в обґрунтуванні ${documents.document("permanent-application", "заяви на pobyt stały")}, а відповідь на конкретне запитання органу викласти в ${documents.document("response-letter", "листі-відповіді")}. ${documents.document("residential-lease", "Договір оренди")} й ${documents.document("employment-contract", "umowa o pracę")} є окремими документами про житло та роботу. Вони не стають одним документом під назвою "доказ наміру".`,
        "Пояснення показує, де людина збирається жити, що вже організувала і що ще планує. Матеріали добирають саме про ці обставини. Наявна робота, житло або сімейний зв'язок можуть підтримувати план; відсутність одного з них не створює універсальної вимоги отримати саме такий документ.",
        "Зв'язки з іншою країною теж потрібно читати у контексті. Незакінчена робота або чинна оренда за кордоном можуть вимагати пояснення строків переїзду. Їхня наявність сама собою не дає готової відповіді про намір людини.",
      ],
    },
    {
      id: "reply-about-one-year-lease",
      title: "Як пояснити постійний план за річної оренди",
      paragraphs: [
        law.text`Для нових заяв після запуску MOS 27.04.2026 ${law.article("203d", "art. 203d ust. 2")} дозволяє одразу додати цифрові копії доказів підстави. За ${law.article("203f", "art. 203f")} орган витребує оригінали таких документів. Надання запитаного оригіналу й пояснення життєвого плану виконують різні вимоги: справжній договір ще не відповідає на запитання, що заявник планує після його закінчення.`,
      ],
      example: {
        title: "Відповідь 31 серпня про життя після кінця оренди",
        facts: [
          "Умовна справа. Повнолітній громадянин Білорусі з дійсною Kartą Polaka переїхав до Вроцлава 01.08.2026, почав працювати за umową o pracę та орендував житло на 01.08.2026–31.07.2027. Обидва договори складені польською. Сума винагороди і строк трудового договору тут не визначені.",
          "17.08.2026 заявник подав заяву через MOS, пояснив намір постійно оселитися й долучив скан підписаної оренди. Трудового договору серед первинних додатків не було. 20.08 представник отримав вимогу пояснити, чи обмежений переїзд строком оренди, і надати її оригінал. Відповідь подано належним способом 31.08, до встановленого строку 03.09.",
        ],
        sample: {
          kind: "letter",
          language: "pl",
          title:
            "Wyjaśnienia dotyczące zamiaru osiedlenia się w Polsce na stałe",
          note: "Вигаданий фрагмент відповіді від 31.08.2026. Особисті дані, адреса, номер справи й підпис опущені. Це виклад конкретних обставин, не офіційний формуляр або окрема обов'язкова довідка.",
          paragraphs: [
            "W odpowiedzi na wezwanie doręczone mojemu pełnomocnikowi 20 sierpnia 2026 r. wyjaśniam, że zamierzam osiedlić się w Polsce na stałe, zgodnie z uzasadnieniem wniosku złożonego 17 sierpnia 2026 r.",
            "Przeprowadziłem się do Wrocławia 1 sierpnia 2026 r. Mieszkam w wynajętym lokalu na podstawie umowy najmu obowiązującej od 1 sierpnia 2026 r. do 31 lipca 2027 r. Końcowa data najmu określa okres obecnej umowy, a nie termin mojego planowanego wyjazdu z Polski.",
            "Po 31 lipca 2027 r. zamierzam nadal mieszkać we Wrocławiu. Planuję uzgodnić przedłużenie najmu z wynajmującym albo znaleźć inne mieszkanie. Nie zawarłem jeszcze umowy dotyczącej dalszego okresu i nie przedstawiam przedłużenia jako już uzgodnionego.",
            "Rozpocząłem już pracę w Polsce na podstawie umowy o pracę. Przedkładam tę obowiązującą umowę po raz pierwszy w niniejszym postępowaniu jako dokument dotyczący mojego związku zawodowego z Polską.",
            "Zgodnie z wezwaniem przedkładam również oryginał tej samej umowy najmu, której odwzorowanie cyfrowe dołączyłem do wniosku 17 sierpnia 2026 r. Nie jest to nowa umowa najmu ani umowa na okres po 31 lipca 2027 r.",
          ],
        },
        reasoning: [
          documents.text`Відповідь додає пояснення майбутнього життя. ${documents.document("residential-lease", "Оренда")} вже була відома органу зі скану; 31.08 виконано вимогу надати її оригінал. ${documents.document("employment-contract", "Трудовий договір")} уперше долучено до справи, але це не означає, що його уклали саме 31.08. Нового договору житла заявник не подає.`,
          "Річний строк оренди сам по собі не обмежує намір одним роком. Проте пояснення не доводить, що оренду вже продовжено. Наявне житло й робота підтримують заявлений план, а подальше забезпечення житлом описане як майбутня дія.",
          documents.text`Належне подання відповіді й виконання вимоги оригіналу підтверджено окремо. ${documents.document("upo", "UPO від 17.08")} стосується початкової заяви й не є ${documents.document("dispatch-proof", "доказом подання відповіді 31.08")}. Конкретний канал відповіді в цьому прикладі не визначено.`,
        ],
        conclusion:
          "Вимогу про оригінал виконано, а різницю між строком договору та постійним планом пояснено без вигаданого продовження. Станом на 10.09.2026 рішення ще не вручено. Своєчасна відповідь і подані договори не гарантують визнання наміру доведеним.",
      },
    },
    {
      id: "evidence-not-formality",
      title: "Як працювати з прогалиною або суперечністю",
      paragraphs: [
        kpa.text`За ${kpa.article("77", "art. 77 KPA")} орган збирає й розглядає матеріал, а за ${kpa.article("80", "art. 80 KPA")} оцінює його в сукупності. Тому переконливість пояснення залежить від його узгодженості з установленими обставинами. Назва листа або кількість додатків цього не замінює.`,
        "Якщо заявник пише, що вже переїхав, а матеріали показують лише майбутню оренду, уточніть фактичну дату переїзду. Не змінюйте пояснення лише для зручнішого вигляду пакета. Запишіть, що відбулося, що заплановано та чим це підтверджується.",
        "Відсутність певного документа не варто маскувати вигаданою довідкою або вимогою купити житло. Попросіть матеріал про конкретний непідтверджений факт. Якщо людина ще не має польського роботодавця, так і зазначте, замість перетворення пропозиції роботи на нібито чинне працевлаштування.",
        law.text`Ця перевірка не переноситься на всі підстави pobytu stałego. У ${law.article("195", "art. 195")} вони мають різні умови. Спочатку встановлюють потрібний пункт, а потім визначають, що саме має підтверджувати пакет.`,
      ],
    },
  ],
  keyChecks: [
    "Обрана підстава містить умову наміру оселитися; Karta Polaka або походження перевірені окремо.",
    "Відрізнено здійснені дії від планів; названо матеріали для конкретних фактів.",
    "Суперечності у датах або обставинах пояснено без вигаданих документів і універсального переліку вимог.",
  ],
  legalBasis: [
    law.text`${law.article("195", "Art. 195 ust. 1 pkt 3 і 9")}: намір постійного оселення поряд із польським походженням або дійсною Kartą Polaka.`,
    law.text`${law.article("203d", "Art. 203d ust. 2")} і ${law.article("203f", "art. 203f")}: цифрові копії доказів та наступна вимога оригіналів у новій справі MOS.`,
    kpa.text`${kpa.article("77", "Art. 77 KPA")} і ${kpa.article("80", "art. 80 KPA")}: збирання та оцінка матеріалів.`,
  ],
  sources: [
    {
      ...documentSources.aliens,
      note: law.text`Перевірено 10.09.2026 умову наміру за ${law.article("195", "art. 195 ust. 1 pkt 3 і 9")} та докази й оригінали за ${law.article("203d", "art. 203d ust. 2")} і ${law.article("203f", "art. 203f")}. Це перевірка питання цього матеріалу, не всіх підстав постійного перебування.`,
    },
    {
      ...documentSources.kpa,
      note: kpa.text`Збирання й оцінка доказів за ${kpa.article("77", "art. 77 KPA")} та ${kpa.article("80", "art. 80 KPA")}.`,
    },
    {
      label: "Дата запуску правил MOS",
      url: "https://eli.gov.pl/eli/MP/2026/370/ogl",
      note: "Правила електронного подання застосовуються від 27.04.2026. Приклад стосується нової серпневої справи.",
    },
    {
      label: "Podlaski UW: власник Karty Polaka",
      url: "https://www.gov.pl/web/uw-podlaski/posiadacz-karty-polaka",
      note: "Перевірено 10.09.2026 пояснення про докази наміру й можливе уточнення обставин. Старі вказівки сторінки про фото не використано; подання й оригінали пояснено за чинними правилами закону.",
    },
  ],
  verifiedAt: "2026-09-10",
  relatedDocuments: [
    "permanent-application",
    "response-letter",
    "residential-lease",
    "karta-polaka",
    "housing-evidence",
    "employment-contract",
    "civil-status-record",
    "stay-history",
    "evidence-matrix",
  ],
}
export const settlementIntentionDocumentTopic = defineDocumentTopic(guide)
export default settlementIntentionDocumentTopic
