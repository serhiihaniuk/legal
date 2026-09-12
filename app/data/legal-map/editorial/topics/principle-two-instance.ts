import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { defineLegalMapArticle } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import { foreignersLaw, kpaLaw, ppsaLaw } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const documents = createEvidenceDocumentTextAuthor()

type PrincipleTwoInstanceBody = LegalMapTopicBody

export const principleTwoInstanceTopic: KnowledgeUnit<PrincipleTwoInstanceBody> =
  defineKnowledgeUnit({
    id: "map-topic:principle-two-instance",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "principle-two-instance" },
    },
    summary:
      "Друга інстанція повторно розглядає адміністративну справу. Остаточність означає закриття звичайного адміністративного перегляду, але не завжди судового контролю. Доступний засіб залежить також від виду рішення та відмови сторін від оскарження.",
    claims: [
      {
        id: "two-instance-review",
        kind: "statute-text",
        text: kpaLaw.text`${kpaLaw.article("15")} встановлює двоінстанційність із можливістю спеціального винятку. ${kpaLaw.article("16")} розрізняє остаточні рішення та остаточні рішення, які вже не можна оскаржити до суду.`,
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 15–16, 127, 127a, 129",
          },
          {
            reference: { kind: "official-source", sourceId: "eli-ppsa" },
            locator: "Art. 52–54, 64a–64e",
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
    body: {
      title: "Дві інстанції та остаточність",
      polish: "dwuinstancyjność · decyzja ostateczna · decyzja prawomocna",
      documents: [
        documents.text`${documents.document("administrative-decision", "Decyzja")}: повний текст показує орган, результат розгляду та pouczenie. У порівнянні важливі також причина відсутності обґрунтування й результат другої інстанції.`,
        documents.text`${documents.document("delivery-proof", "Доказ вручення")}: установлює дату отримання конкретного рішення. Для відмови від оскарження окремо потрібне підтвердження отримання заяви органом.`,
        documents.text`${documents.document("judicial-complaint", "Skarga do WSA")}: у справі A це подана скарга на рішення другої інстанції. В інших наведених ситуаціях її не подано; вона не є обов'язковим додатком до справи про дозвіл.`,
      ],
      sources: [
        {
          label: "KPA: інстанції, остаточність і відмова від оскарження",
          url: "https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf",
          note: kpaLaw.text`Перевірено 12.09.2026 ${kpaLaw.articleRange("15", "16")}, ${kpaLaw.article("107", "art. 107 § 4")}, ${kpaLaw.article("127")}, ${kpaLaw.article("127a")}, ${kpaLaw.article("129")}, ${kpaLaw.article("136", "art. 136 § 1")} та ${kpaLaw.article("138")}. Пояснення розрізняє адміністративний перегляд, відмову від нього та судовий контроль.`,
        },
        {
          label: "ELI: стан і зміни KPA",
          url: "https://eli.gov.pl/eli/DU/1960/168/ogl",
          note: "Перевірено 12.09.2026. Останньою зміною у зв'язках акта є Dz.U. 2025 poz. 769; зміни KPA діють із 13.07.2025 та враховані у зведеному тексті.",
        },
        {
          label: "PPSA: доступ до суду та sprzeciw",
          url: "https://eli.gov.pl/api/acts/DU/2026/143/text/T/D20260143L.pdf",
          note: ppsaLaw.text`Перевірено 12.09.2026 ${ppsaLaw.articleRange("52", "54")}, ${ppsaLaw.article("54a")} та ${ppsaLaw.articleRange("64a", "64e")}. Строк звичайної скарги на рішення відокремлено від строку sprzeciwu. Пізнішу зміну судового строку для окремих податкових актів перевірено окремо.`,
        },
        {
          label: "PPSA: зміна, чинна з 26.06.2026",
          url: "https://eli.gov.pl/api/acts/DU/2026/846/text/O/D20260846.pdf",
          note: ppsaLaw.text`Перевірено 12.09.2026. Зміна розширила відсилання в ${ppsaLaw.article("53", "art. 53 § 1")} щодо окремих податкових актів. Загальні тридцять днів від вручення рішення залишилися; строк sprzeciwu ця зміна не змінює.`,
        },
        {
          label: "Ustawa o cudzoziemcach: повноваження Szefa UdSC",
          url: "https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf",
          note: foreignersLaw.text`Перевірено 12.09.2026 ${foreignersLaw.article("22", "art. 22 ust. 1 pkt 1 lit. a")}. Тут розглянуто звичайне оскарження рішення wojewody у справі про дозвіл на перебування; це не твердження про однаковий орган у всіх справах іноземців.`,
        },
      ],
      guide: defineLegalMapArticle({
        kind: "article",
        introduction: [
          "Напис «decyzja ostateczna» означає певний стан адміністративної справи. Він не підтверджує, що рішення безпомилкове, і не завжди закриває шлях до суду. Щоб зрозуміти наслідок, потрібно відокремити адміністративний перегляд справи від судової перевірки законності.",
          "Двоінстанційність дає можливість передати справу на повторний адміністративний розгляд. Вона не означає, що після кожного рішення обов'язково працюватимуть ще один орган і суд. Існують рішення без звичайного odwołania, перегляд тим самим органом і добровільна відмова від права оскарження.",
        ],
        sections: [
          {
            id: "administrative-second-instance",
            title:
              "Друга інстанція розглядає справу, а не лише скаргу на працівника",
            paragraphs: [
              kpaLaw.text`${kpaLaw.article("15")} закріплює двоінстанційність, якщо спеціальний припис не встановлює іншого. За ${kpaLaw.article("127", "art. 127 § 1–2")} від рішення першої інстанції за загальним правилом доступне одне odwołanie до органу вищого ступеня або іншого органу, визначеного законом. Друге odwołanie після рішення цієї інстанції звичайний порядок не передбачає.`,
              kpaLaw.text`Це повторний розгляд адміністративної справи в межах повноважень другої інстанції. Орган може доповнити докази за ${kpaLaw.article("136", "art. 136 § 1")} та ухвалює відповідне рішення за ${kpaLaw.article("138")}. Він може залишити рішення в силі або скасувати його й вирішити справу; повернення на новий розгляд має окремі умови. Саме тому незгода з оцінкою факту ще не означає, що друга інстанція повинна лише повернути папери воєводі.`,
              documents.text`У звичайній справі про дозвіл на перебування рішення wojewody оскаржують до Szefa Urzędu do Spraw Cudzoziemców. Його повноваження щодо рішень інших органів передбачає ${foreignersLaw.article("22", "art. 22 ust. 1 pkt 1 lit. a")}. За ${kpaLaw.article("129", "art. 129 § 1–3")} звернення подають через орган, який видав рішення; загальний строк становить 14 днів від вручення або усного оголошення, якщо спеціальний припис не визначає іншого строку.`,
            ],
          },
          {
            id: "finality-and-waiver",
            title: "Ostateczna і prawomocna описують різні межі перегляду",
            paragraphs: [
              kpaLaw.text`Decyzja ostateczna за ${kpaLaw.article("16", "art. 16 § 1")} є рішенням, від якого не доступні odwołanie в адміністративному порядку або wniosek o ponowne rozpatrzenie sprawy. Остаточність захищає рішення від довільного повторного вирішення. Його скасування, зміна, встановлення недійсності або відновлення провадження можливі лише у випадках, передбачених KPA чи спеціальним законом.`,
              kpaLaw.text`Decyzja prawomocna за ${kpaLaw.article("16", "art. 16 § 3")} є остаточним рішенням, яке вже не можна оскаржити до суду. Отже, ці слова не є двома назвами «правильного рішення». Остаточне рішення другої інстанції може ще бути предметом своєчасної судової скарги, а рішення зі статусом prawomocna не відкриває звичайну судову скаргу лише тому, що сторона знову не погодилася з результатом.`,
              kpaLaw.text`Остаточність може настати без другого органу. За ${kpaLaw.article("127", "art. 127 § 1a")} остаточним є рішення, обґрунтування якого орган не склав через повне задоволення вимоги сторони. Це не правило про будь-яке позитивне рішення або будь-який відсутній текст обґрунтування. ${kpaLaw.article("107", "Art. 107 § 4")} виключає таке відступлення, зокрема, для рішень щодо спірних інтересів сторін і рішень за результатами оскарження.`,
              kpaLaw.text`Інша дія, zrzeczenie się prawa do odwołania, є відмовою сторони від права на odwołanie протягом строку його подання. За ${kpaLaw.article("127a")} рішення стає ostateczna і prawomocna в день, коли орган отримає заяву останньої сторони. Дата підписання або надсилання першої заяви цього наслідку ще не встановлює. Якщо сторін кілька, заява однієї з них не замінює заяв інших.`,
              "Відмова від оскарження не є розпискою про отримання рішення. Її зміст змінює доступ до засобів захисту, тому бажання швидше отримати остаточне рішення та готовність відмовитися від оскарження є різними питаннями.",
            ],
          },
          {
            id: "same-authority-reconsideration",
            title: "Повторний розгляд тим самим органом і вибір суду",
            paragraphs: [
              kpaLaw.text`Від рішення міністра або samorządowego kolegium odwoławczego, виданого в першій інстанції, ${kpaLaw.article("127", "art. 127 § 3")} не передбачає odwołania. Натомість незадоволена сторона може подати wniosek o ponowne rozpatrzenie sprawy до того самого органу. Правила про odwołanie застосовуються відповідно. Це адміністративне повторне вирішення справи, хоча звернення не переходить до вищого органу.`,
              ppsaLaw.text`За загальним правилом ${ppsaLaw.article("52", "art. 52 § 1–2")} перед зверненням до суду сторона вичерпує доступні адміністративні засоби оскарження. Однак ${ppsaLaw.article("52", "art. 52 § 3")} дозволяє подати судову скаргу без використання доступного wniosku o ponowne rozpatrzenie. Цей вибір стосується саме повторного розгляду; він не дає загального права пропустити доступне odwołanie до другої інстанції.`,
              ppsaLaw.text`Виняток із цього вибору також прямо визначений у ${ppsaLaw.article("52", "art. 52 § 3")}: він не діє для акта konsula, а також для акта міністра закордонних справ у питаннях, урегульованих ustawa o cudzoziemcach. Тут не можна пояснювати доступ до суду звичайною формулою «повторний розгляд завжди добровільний».`,
              ppsaLaw.text`За наявності кількох сторін вибір однієї не усуває дії іншої. ${ppsaLaw.article("54a")} регулює ситуацію, коли до передання суду скарги однієї сторони інша звернулася за повторним розглядом: орган розглядає саму судову скаргу як wniosek o ponowne rozpatrzenie та невідкладно повідомляє про це скаржника. Якщо інша сторона подала wniosek уже після передання скарги до суду, орган повідомляє суд; той повертає скаргу з матеріалами для такого самого розгляду. Отже, ці звернення не завжди утворюють незалежні паралельні процедури.`,
            ],
          },
          {
            id: "court-review-and-remand",
            title: "WSA не є третьою адміністративною інстанцією",
            paragraphs: [
              documents.text`Судова ${documents.document("judicial-complaint", "skarga do WSA")} стосується законності оскаржуваного акта. Можливість судового контролю передбачає ${kpaLaw.article("16", "art. 16 § 2 KPA")}, а порядок визначає PPSA. Передати суду новий пакет документів замість пояснення порушення права не означає попросити його повторити всю процедуру видачі дозволу.`,
              ppsaLaw.text`Для звичайної скарги на рішення ${ppsaLaw.article("53", "art. 53 § 1")} встановлює 30 днів від вручення оскаржуваного розв'язання, а ${ppsaLaw.article("54", "art. 54 § 1")} вимагає подання через орган, чий акт оскаржують. Після рішення Szefa UdSC це подання через Szefa, а не через wojewodę. ${ppsaLaw.article("53", "Art. 53 § 4")} зберігає строк і при своєчасному поданні безпосередньо до суду; суд передає скаргу органу.`,
              documents.text`У випадку повного задоволення вимоги з пропущеним обґрунтуванням остаточність за ${kpaLaw.article("127", "art. 127 § 1a KPA")} сама по собі не закриває судовий контроль. ${ppsaLaw.article("54", "Art. 54 § 2a PPSA")} прямо передбачає, що при оскарженні орган складає обґрунтування перед переданням матеріалів суду.`,
              documents.text`Повернення справи на новий розгляд за ${kpaLaw.article("138", "art. 138 § 2 KPA")} має інший засіб. За ${ppsaLaw.article("64a")} від такого рішення подають sprzeciw, а не звичайну skargę. ${ppsaLaw.article("64c", "Art. 64c § 1–2")} визначає 14 днів від вручення та подання через орган, який видав це рішення. За ${ppsaLaw.article("64e")} суд перевіряє підстави повернення справи, а не встановлює замість органу всі умови дозволу.`,
            ],
          },
          {
            id: "three-decision-records",
            title: "Три записи про рішення з різними наслідками",
            paragraphs: [
              "Дату рішення, дату його вручення та дату отримання заяви органом не можна зводити в одну графу «остаточне». Наступне порівняння показує вже виконані дії та статуси на 24 серпня 2026 року.",
            ],
            example: {
              title:
                "Після перегляду, без odwołania та після відмови від нього",
              facts: [
                documents.text`Три незалежні вигадані справи. У справі A wojewoda відмовив у дозволі на pobyt czasowy 1 липня 2026 року. ${documents.document("delivery-proof", "Доказ вручення")} підтверджує отримання 3 липня. Заявник належно подав odwołanie 10 липня. Szef UdSC залишив рішення в силі 14 серпня; його рішення вручено 18 серпня. 24 серпня заявник належно подав скаргу до WSA через Szefa UdSC.`,
                "У справі B за загальними правилами KPA є одна сторона. Орган першої інстанції повністю задовольнив її вимогу 6 серпня та правомірно відступив від обґрунтування саме з цієї причини. Рішення вручено 10 серпня. Станом на 24 серпня судової скарги не подано.",
                "У справі C за загальними правилами KPA є дві сторони; від рішення першої інстанції доступне звичайне odwołanie. Обидві отримали рішення 17 серпня. Орган, який видав рішення, отримав підписану заяву першої сторони про відмову від права на odwołanie 19 серпня, другої 21 серпня. Справи B і C не моделюють додаткових сторін чи спеціальних правил дозволу на перебування.",
              ],
              sample: {
                kind: "letter",
                language: "pl",
                title:
                  "Wybrane zapisy roboczego zestawienia z 24 sierpnia 2026 r.",
                note: "Вигаданий заповнений запис для порівняння трьох справ. Це не довідка органу про остаточність і не текст судового рішення; персональні та реєстраційні дані не відтворено.",
                paragraphs: [
                  "Sprawa A. Decyzja Szefa Urzędu do Spraw Cudzoziemców z 14.08.2026 r.: utrzymanie decyzji wojewody w mocy. Doręczenie: 18.08.2026 r. Skarga do WSA wniesiona 24.08.2026 r. za pośrednictwem Szefa Urzędu. Zwykły administracyjny tok instancji zakończony; brak rozstrzygnięcia sądu w zestawieniu.",
                  "Sprawa B. Decyzja pierwszej instancji z 06.08.2026 r., doręczona 10.08.2026 r. Żądanie uwzględnione w całości; z tej przyczyny odstąpiono od uzasadnienia. Decyzja ostateczna na podstawie art. 127 § 1a KPA. Na dzień 24.08.2026 r. termin wniesienia skargi do WSA nie upłynął; skargi nie wniesiono.",
                  "Sprawa C. Doręczenie obu stronom: 17.08.2026 r. Wpływ oświadczeń o zrzeczeniu się prawa do odwołania: 19.08.2026 r. i 21.08.2026 r. Ostatnie oświadczenie otrzymano 21.08.2026 r. Od tego dnia decyzja jest ostateczna i prawomocna na podstawie art. 127a § 2 KPA.",
                ],
              },
              reasoning: [
                documents.text`У справі A адміністративний перегляд завершено, а ${documents.document("judicial-complaint", "судову скаргу")} подано в межах 30 днів від вручення рішення другої інстанції. Предметом скарги є саме рішення Szefa. У записі немає висновку, що WSA скасував його або видав дозвіл.`,
                kpaLaw.text`У справі B відсутність odwołania випливає з ${kpaLaw.article("127", "art. 127 § 1a")}, а не з пропуску строку чи відмови сторони. На дату порівняння судовий строк ще відкритий. У справі C інший факт, отримання заяви останньої сторони, спричинив обидва наслідки ${kpaLaw.article("127a", "art. 127a § 2")}. Першої заяви від 19 серпня для цього було недостатньо.`,
              ],
              conclusion:
                "Станом на 24 серпня у справі A подано судову скаргу після адміністративного перегляду; у справі B звичайного odwołania немає, але судовий строк ще не сплив; у справі C остання відмова вже надала рішенню остаточності та статусу prawomocna. Однакова коротка позначка «остаточне» приховала б ці відмінності.",
            },
          },
        ],
      }),
      why: "Статус рішення визначає, чи ще доступний адміністративний перегляд, який акт оскаржувати до суду та що змінює заява про відмову від права на odwołanie.",
    },
  })

export default principleTwoInstanceTopic

export const principleTwoInstanceMapNode: LegalNode = {
  id: "principle-two-instance",
  title: principleTwoInstanceTopic.body.title,
  polish: principleTwoInstanceTopic.body.polish,
  summary: principleTwoInstanceTopic.summary,
  why: principleTwoInstanceTopic.body.why,
  documents: [...(principleTwoInstanceTopic.body.documents ?? [])],
  sources: [...principleTwoInstanceTopic.body.sources],
}
