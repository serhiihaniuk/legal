import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources, foreignersLaw, regulationLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "mos-application",
  title: "Wniosek o zezwolenie na pobyt czasowy w MOS",
  category: "procedure",
  aliases: ["wniosek mos", "електронна заява mos"],
  description:
    "Wniosek є заявою про надання конкретного дозволу. MOS, Moduł Obsługi Spraw, є системою її електронного подання. Форма пов’язує особу, мету перебування та додані матеріали; заповнений проєкт ще не означає, що заяву подано.",
  preparedBy:
    "Заповнює і подає заявник у MOS; додатки, призначені для іншого суб’єкта, підписує відповідний суб’єкт.",
  purpose: [
    "Ідентифікує заявника і конкретний вид дозволу.",
    "Фіксує заявлені факти та перелік доданих матеріалів.",
  ],
  doesNotProve: ["Сам факт надсилання не означає, що умови дозволу виконані."],
  explanation: [
    {
      id: "form-and-purpose",
      title: "Мета перебування визначає зміст заяви",
      paragraphs: [
        "Cel pobytu означає мету перебування, для якої особа просить дозвіл. Вибір цього поля має відповідати фактам. Договір про роботу, навчання та ведення бізнесу стосуються різних умов дозволу, хоча людина може мати всі ці зв’язки одночасно.",
        regulationLaw.text`Офіційний взірець основної заяви міститься в ${regulationLaw.annex("1", "додатку 1 до розпорядження")}. Це не ${regulationLaw.annex("2", "додаток роботодавця, названий Załącznik nr 1 у самій заяві")}. Основна форма збирає відомості про іноземця; додаток роботодавця описує запропоновану роботу.`,
        foreignersLaw.text`${foreignersLaw.article("106d", "Art. 106d ust. 1–2")} розрізняє обов’язкові при поданні фото, цифрові копії сторінок документа подорожі й додатки для обраної мети та інші докази обставин справи. Наявність усіх технічно обов’язкових вкладень ще не означає, що всі умови дозволу доведені.`,
      ],
      example: {
        title: "Записана форма ще чекає на додаток",
        facts: [
          "Умовний приклад. Повнолітній заявник підготував заяву про тимчасове перебування і роботу. Усі його поля заповнені, але роботодавець ще не підписав свій додаток.",
        ],
        sample: {
          kind: "table",
          title: "Перевірка комплекту перед надсиланням",
          note: "Вигаданий робочий запис. Це не екран MOS і не перелік усіх вимог для дозволу.",
          columns: ["Частина", "Стан 4 серпня", "Стан 5 серпня"],
          rows: [
            {
              id: "form",
              cells: [
                "Заява іноземця",
                "Заповнений проєкт",
                "Перевірена й підписана заявником",
              ],
            },
            {
              id: "annex",
              cells: [
                "Додаток роботодавця",
                "Немає потрібного підпису",
                "Підписаний уповноваженою особою роботодавця",
              ],
            },
            {
              id: "receipt",
              cells: [
                "Подання",
                "Не надіслано; UPO немає",
                "Надіслано; UPO збережено з PDF і XML заяви",
              ],
            },
          ],
        },
        reasoning: [
          "4 серпня комплект залишався проєктом. Після підписання додатка заявник звірив умови роботи, підписав і надіслав заяву. Отримане 5 серпня UPO збережене з відповідною версією.",
        ],
        conclusion:
          "У прикладі подання підтверджене для 5 серпня. Дата підготовки проєкту не стала датою подання; дотримання строку потрібно зіставити з останнім днем законного перебування цієї особи.",
      },
    },
    {
      id: "sign-and-send",
      title: "Підпис, надсилання і наступна перевірка",
      paragraphs: [
        foreignersLaw.text`${foreignersLaw.article("106d", "Art. 106d ust. 3–6")} визначає, хто підписує заяву й окремі додатки, та пов’язує подання з потрібними підписами й отриманням UPO. Звичайну заяву повнолітнього дієздатного іноземця підписує сам заявник. Повноваження представника не передає йому це право. Підпис роботодавця стосується його додатка.`,
        "UPO, Urzędowe Poświadczenie Odbioru, є підтвердженням отримання заяви системою. Пізніше працівник органу перевіряє заяву й додатки. Тому збережені PDF, XML і UPO мають належати одній надісланій версії, а не суміші чернеток.",
        foreignersLaw.text`Наступне wezwanie може стосуватися особистих дій за ${foreignersLaw.article("106e", "Art. 106e")} або документів за ${foreignersLaw.article("106f", "Art. 106f")}. Це окремі вимоги зі своїми строками й наслідками. Факт електронного подання не скасовує особистої явки, коли вона потрібна.`,
        foreignersLaw.text`Для заявника з тимчасовим захистом і UKR, який просить один із дозволів за ${foreignersLaw.external("art. 45 ust. 1 закону Dz.U. 2026 poz. 203", "https://eli.gov.pl/api/acts/DU/2026/203/text/O/D20260203.pdf#page=40")}, зокрема pobyt czasowy i pracę, загальний виклик за ${foreignersLaw.article("106e", "art. 106e ust. 1")} не застосовується. За ust. 3–6 цього спеціального правила орган використовує реєстрові відбитки, а якщо їх немає або передання неможливе, бере їх після надання дозволу. Взірець підпису для карти все одно подають на належній формі або пристрої органу. Він не замінює електронного підпису заяви. Сам спосіб подання через MOS і підписання додатка роботодавцем залишаються чинними.`,
      ],
    },
    {
      id: "scope-and-changes",
      title: "Коли цей спосіб подання не застосовується",
      paragraphs: [
        foreignersLaw.text`За ${foreignersLaw.article("106c", "Art. 106c")} охоплену MOS заяву не можна замінити її надсиланням звичайною поштою чи через e-Doręczenia. ${foreignersLaw.article("106j", "Art. 106j")} визначає винятки для названих процедур ICT та сімейних заяв щодо осіб за кордоном. Для них ${foreignersLaw.articleRange("106k", "106l", { start: "Art. 106k", end: "106l" })} встановлюють паперові форми та інших заявників. Це винятки за видом процедури, а не дозвіл перейти на папір через будь-яку технічну проблему.`,
        "Новий MOS запрацював 27 квітня 2026 року. За роз’ясненням UdSC, заяву, яка надійшла до органу до цієї дати й уже розглядається, не потрібно подавати повторно лише через запуск системи.",
        "Після подання нові обставини повідомляють органу окремо. UdSC пояснює, що зміну адреси, роботодавця чи умов роботи передають поза MOS, належним паперовим або електронним листом. Зміна локальної копії заяви сама нічого не надсилає органу.",
      ],
    },
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.articleRange("106c", "106l", { start: "Art. 106c", end: "106l" })} ustawy o cudzoziemcach: подання, наступні дії та винятки.`,
    "Форма та технічні вимоги визначені в Dz.U. 2026 poz. 553.",
  ],
  keyChecks: [
    "Правильний вид дозволу та дані, тотожні паспорту.",
    regulationLaw.text`Для заяви про роботу: узгодженість договору, ${regulationLaw.annex("2", "Załącznika nr 1 до заяви")} та інших додатків.`,
    "Збережені PDF, XML і UPO саме надісланої версії.",
  ],
  sources: [
    documentSources.aliens,
    documentSources.regulation553,
    documentSources.mosQa,
    {
      label: "Особисті дії заявника з UKR. Dz.U. 2026 poz. 203",
      url: "https://eli.gov.pl/api/acts/DU/2026/203/text/O/D20260203.pdf#page=40",
      note: foreignersLaw.text`Перевірено 10.09.2026 лише ${foreignersLaw.external("art. 45 ust. 1 і 3–6", "https://eli.gov.pl/api/acts/DU/2026/203/text/O/D20260203.pdf#page=40")}: виняток із загального виклику, реєстрові відбитки та взірець підпису. Він не скасовує електронного подання за ${foreignersLaw.articleRange("106c", "106d", { start: "art. 106c", end: "106d" })} ustawy o cudzoziemcach.`,
    },
  ],
  relatedDocuments: [
    "employment-annex-1",
    "passport",
    "digital-photo",
    "upo",
    "proceeding-certificate",
    "power-of-attorney",
    "ict-application",
    "family-abroad-application",
  ],
  verifiedAt: "2026-09-05",
}

export const mosApplicationTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:mos-application",
    subject: {
      family: "evidence-document",
      reference: { kind: "evidence-document", documentId: "mos-application" },
    },
    summary: guide.description,
    claims: [
      {
        id: "electronic-filing",
        kind: "statute-text",
        text: foreignersLaw.text`Заяви, охоплені ${foreignersLaw.article("106c", "art. 106c")}, подають через MOS; UPO формується автоматично, а заява вважається поданою після наявності потрібних підписів і UPO.`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "Art. 106c i art. 106d ust. 5–6",
          },
        ],
      },
      {
        id: "post-filing-actions",
        kind: "statute-text",
        text: foreignersLaw.text`Коли до заявника застосовується загальний порядок ${foreignersLaw.article("106e", "Art. 106e")}, строк виклику для особистих дій становить щонайменше 7 днів. Вимога доказів за ${foreignersLaw.article("106f", "Art. 106f")} має строк щонайменше 14 днів. Ці правила не роблять особисту явку універсальною вимогою для кожної заяви в MOS. Невиконання визначених особистих дій за умов і з винятками ${foreignersLaw.article("106i", "Art. 106i")} веде до umorzenia, тобто закриття провадження.`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "Art. 106e, art. 106f i art. 106i",
          },
        ],
      },
      {
        id: "mos-receipt-guidance",
        kind: "official-guidance",
        text: "UdSC пояснює, що статус «przesłany» означає передання через систему, а UPO підтверджує технічну правильність і прийняття системою, не перевірку змісту та додатків.",
        basis: [
          {
            reference: { kind: "official-source", sourceId: "udsc-mos-qa" },
            locator: "pytania 35, 37, 39, 41 i 61",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default mosApplicationTopic
