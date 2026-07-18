import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")
const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")

const moduleContent: LegalLearningModule = {
  id: "stay-and-work-right",
  order: 3,
  title: "Два ключі: legalny pobyt і право на pracę",
  polish: "legalny pobyt, dostęp do rynku pracy, uprawnienie do pracy",
  provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("114", "141", { start: "art. 114" })}, ${foreignersLaw.article("185a", "art. 185a")}; окремо ${workLaw.articleRange("1", "5a", { start: "art. 1" })} ustawy z 20 marca 2025 r. o warunkach dopuszczalności powierzania pracy cudzoziemcom`,
  outcome:
    "Уміти дати два самостійні висновки: чи особа законно перебуває і чи може виконувати саме цю роботу на фактичних умовах.",
  caseQuestion:
    "Яка норма легалізує pobyt у потрібний день, а яка інша норма або документ дозволяє цю pracę для цього podmiot powierzający pracę?",
  placeInWork:
    "Перевірка до початку роботи, зміни pracodawca, посади, договору, місця або фактичної організації праці.",
  sections: [
    {
      id: "two-key-test",
      title: "Відкрий справу двома ключами",
      paragraphs: [
        foreignersLaw.text`Перший ключ — pobyt. Ustawa o cudzoziemcach визначає підставу й строк перебування та окремі поєднані дозволи, наприклад zezwolenie na pobyt czasowy i pracę за ${foreignersLaw.article("114", "art. 114")}, Niebieska Karta UE за ${foreignersLaw.article("127", "art. 127")} або praca sezonowa за ${foreignersLaw.article("185a", "art. 185a")}. Навіть напис «dostęp do rynku pracy» на karcie pobytu треба читати разом із рішенням і законом, а не як безумовний дозвіл на будь-яку працю.`,
        workLaw.text`Другий ключ — pracę. З 1 червня 2025 р. основним окремим актом є ustawa z 20 marca 2025 r. o warunkach dopuszczalności powierzania pracy cudzoziemcom na terytorium Rzeczypospolitej Polskiej. Її ${workLaw.articleRange("1", "5a", { start: "art. 1" })} задають предмет регулювання, поняття незаконного доручення та базову рамку доступу. Право може випливати з zezwolenie na pracę, oświadczenie, zwolnienie, спеціального status або рішення pobytowego. Жоден із двох ключів не замінює іншого.`,
      ],
      questions: [
        "Який точний tytuł pobytowy діє на дату кожної зміни роботи?",
        "Яка підстава доступу до праці охоплює саме цю особу, podmiot, роботу й умови?",
      ],
      warning:
        "Фрази «має kartę pobytu» або «pracodawca подав документи» недостатні без назви норми, строку й меж права.",
    },
    {
      id: "match-real-work",
      title: "Зістав документ із реальною роботою",
      paragraphs: [
        workLaw.text`Після встановлення двох підстав перевіряють фактичне wykonywanie pracy. ${workLaw.article("2", "Art. 2")} пов’язує nielegalne powierzenie pracy, зокрема, з незаконним pobyt, підставою перебування без права працювати, відсутністю потрібного інструмента, роботою всупереч його умовам або відсутністю письмового договору у випадках, визначених законом. Тому назва stanowiska в договорі не перекриває іншу фактичну роль, місце, час чи sposób kierowania pracą.`,
        "Dowód складається з повного ланцюга: документ pobytowy і decyzja; zezwolenie, oświadczenie або підстава zwolnienia; письмовий договір; дані podmiot powierzający pracę; оплата, графіки, місце і фактичні обов’язки. Перед зміною будь-якого елемента встановлюють, чи потрібні нове рішення, zmiana zezwolenia, powiadomienie або інша дія, і до якого terminu.",
      ],
      steps: [
        "Визначити законність pobytu на кожен день роботи.",
        "Назвати окремий інструмент або zwolnienie, що дає доступ до праці.",
        "Порівняти документальні умови з реальною роботою й перевірити обов’язки після зміни.",
      ],
      evidence: [
        "Decyzja pobytowa, karta, wiza або інша підстава pobytu.",
        "Zezwolenie na pracę, oświadczenie, norma zwalniająca або спеціальний status.",
        "Договір, графіки, платежі та опис фактичного підпорядкування.",
      ],
    },
    {
      id: "worked-example",
      title: "Анонімізований приклад: новий pracodawca",
      paragraphs: [
        foreignersLaw.text`Особа C має чинну kartę pobytu, видану після decyzja за ${foreignersLaw.article("114", "art. 114")}, і отримує пропозицію від іншого pracodawca. Fakt чинності картки дає лише початок відповіді про pobyt. Далі читають рішення: кого й які умови праці воно охоплює, чи спеціальна норма допускає зміну без нового рішення та який obowiązek informacyjny діє. Паралельно за ustawa z 20 marca 2025 r. перевіряють, який інструмент дозволяє новому podmiotowi powierzyć pracę.`,
        "Якщо особа почне роботу лише на підставі усної обіцянки, ризик стосується не тільки працівника, а й podmiot powierzający pracę. Правильна Czynność — до першої зміни зібрати новий договір, зіставити його з рішенням та інструментом доступу, а потрібне zgłoszenie або wniosek подати у встановлений спеціальною нормою termin. Środek zaskarżenia визначають лише після отримання конкретної decyzja або postanowienie.",
      ],
      warning:
        "Приклад не визначає, чи потрібна зміна рішення без його тексту, виду дозволу та фактичних умов нової роботи.",
    },
  ],
  exercise:
    "Для анонімного договору склади дві окремі картки висновку: pobyt і pracę. У кожній вкажи факт, норму, доказ, строк, наслідок зміни та невирішене питання; потім зістав їх із реальною посадою, місцем, оплатою й керівництвом.",
}

export const stayAndWorkRightLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:stay-and-work-right",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "stay-and-work-right",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "foreigners-act-basis",
        kind: "statute-text",
        text: foreignersLaw.text`${foreignersLaw.articleRange("114", "141", { start: "art. 114" })} та ${foreignersLaw.article("185a", "art. 185a")}`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "temporary-residence work categories",
          },
        ],
      },
      {
        id: "work-act-boundary",
        kind: "statute-text",
        text: workLaw.text`${workLaw.articleRange("1", "5a", { start: "art. 1" })} ustawy z 20 marca 2025 r. reguluje odrębne pytanie o dopuszczalność powierzania pracy cudzoziemcowi.`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-powierzanie-pracy",
            },
            locator: "art. 1–5a",
          },
        ],
      },
    ],
    relationships: [
      {
        kind: "prerequisite",
        target: {
          family: "learning-module",
          reference: {
            kind: "learning-module",
            documentId: "ustawa-o-cudzoziemcach",
            moduleId: "entry-and-current-basis",
          },
        },
      },
      {
        kind: "related",
        target: {
          family: "learning-module",
          reference: {
            kind: "learning-module",
            documentId: "powierzanie-pracy",
            moduleId: "legalny-pobyt-a-rynek-pracy",
          },
        },
      },
      {
        kind: "next",
        target: {
          family: "learning-module",
          reference: {
            kind: "learning-module",
            documentId: "ustawa-o-cudzoziemcach",
            moduleId: "application-evidence-procedure",
          },
        },
      },
    ],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: moduleContent,
  })

export default stayAndWorkRightLearningModuleTopic
