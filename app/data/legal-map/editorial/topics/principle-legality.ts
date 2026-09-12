import type { LegalTextValue } from "~/data/legal-library/legal-text"
import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import {
  defineLegalMapArticle,
  type LegalNodeGuide,
} from "~/data/legal-map/node-guide-types"
import type { OfficialSource, LegalNode } from "~/data/shared/legal-types"

import { foreignersLaw, kpaLaw } from "../authoring"

const documents = createEvidenceDocumentTextAuthor()
const kpaArticle6 = {
  kind: "legal-provision",
  documentId: "kpa",
  provisionId: "kpa-art-6",
  editionId: "kpa-2025-1691",
} as const

const kpaArticle7 = {
  kind: "legal-provision",
  documentId: "kpa",
  provisionId: "kpa-art-7",
  editionId: "kpa-2025-1691",
} as const

export type LegalMapTopicBody = {
  title: string
  polish: LegalTextValue
  sources: readonly OfficialSource[]
  guide: LegalNodeGuide
  why?: LegalTextValue
  checkpoints?: readonly LegalTextValue[]
  steps?: readonly LegalTextValue[]
  documents?: readonly LegalTextValue[]
  related?: readonly string[]
}

export const principleLegalityTopic: KnowledgeUnit<LegalMapTopicBody> =
  defineKnowledgeUnit({
    id: "map-topic:principle-legality",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "principle-legality" },
    },
    summary:
      "Закон визначає повноваження органу та умови права, про яке просить сторона. Орган установлює факти, важливі саме для цих умов. Звична назва документа або внутрішній перелік urzędu не створюють нової умови дозволу.",
    claims: [
      {
        id: "legal-basis-and-facts",
        kind: "statute-text",
        text: kpaLaw.text`${kpaLaw.article("6", "Art. 6")} KPA зобов'язує орган діяти на підставі приписів права. ${kpaLaw.article("7", "Art. 7")} вимагає з власної ініціативи або на вимогу сторін уживати необхідних дій для точного з'ясування фактичного стану та вирішення справи з урахуванням суспільного інтересу й законних інтересів громадян.`,
        basis: [
          { reference: kpaArticle6, locator: "Art. 6" },
          { reference: kpaArticle7, locator: "Art. 7" },
        ],
      },
      {
        id: "practical-legal-test",
        kind: "practical-inference",
        text: "Вимогу надати документ можна пояснити через факт, який він допомагає встановити, та припис, для якого цей факт має значення. Підстава вимагати доказ не дозволяє додати нову матеріальну умову права.",
        basis: [
          { reference: kpaArticle6, locator: "Art. 6" },
          { reference: kpaArticle7, locator: "Art. 7" },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-09-12",
      verifiedAt: "2026-09-12",
      sourceEditionId: "kpa-2025-1691",
    },
    body: {
      title: "Законність і факти",
      polish: "zasada praworządności · podstawa prawna · ustalenia faktyczne",
      documents: [
        documents.text`${documents.document("karta-polaka", "Karta Polaka")}: у прикладі це документ для обраної підстави pobytu stałego. Сам він не встановлює наміру оселитися в Польщі.`,
        documents.text`${documents.document("settlement-intention", "Пояснення наміру оселитися")}: у прикладі пов'язує заявлені плани з конкретною домовленістю про роботу. Це зміст пояснення сторони, а не окремий універсальний сертифікат.`,
        documents.text`${documents.document("employment-contract", "Umowa o pracę")}: обраний у вигаданій справі доказ погоджених умов роботи. Його не подано як обов'язковий документ для кожного власника Karty Polaka.`,
        documents.text`${documents.document("authority-summons", "Wezwanie")} та ${documents.document("response-letter", "відповідь на нього")}: показують первісну вимогу, її уточнення й те, які саме відомості сторона надала.`,
      ],
      sources: [
        {
          label: "KPA: законність, компетенція та встановлення фактів",
          url: "https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf",
          note: kpaLaw.text`Перевірено 12.09.2026 ${kpaLaw.articleRange("6", "7")}, ${kpaLaw.articleRange("19", "20")}, ${kpaLaw.article("77")}, ${kpaLaw.article("80")}, ${kpaLaw.article("107", "art. 107 § 3–5")}, ${kpaLaw.article("156", "art. 156 § 1–2")} та ${kpaLaw.article("158", "art. 158 § 2–3")}. Пояснення не прирівнює кожну помилку доказування до недійсності рішення.`,
        },
        {
          label: "ELI: актуальний стан і зміни KPA",
          url: "https://eli.gov.pl/eli/DU/1960/168/ogl",
          note: "Перевірено 12.09.2026. Останньою зміною кодексу у зв'язках акта є Dz.U. 2025 poz. 769, чинна щодо змін KPA з 13.07.2025 та врахована в зведеному тексті.",
        },
        {
          label: "Ustawa o cudzoziemcach: Karta Polaka і намір оселитися",
          url: "https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf",
          note: documents.text`Перевірено 12.09.2026 ${foreignersLaw.article("195", "art. 195 ust. 1 pkt 9")}, ${foreignersLaw.article("201", "art. 201 ust. 1")} та ${foreignersLaw.article("203f")}. Трудовий договір у прикладі є обраним доказом фактичних планів, а не додатковою законодавчою умовою цієї підстави.`,
        },
        {
          label: "MSWiA: запуск нових процедур 27.04.2026",
          url: "https://eli.gov.pl/api/acts/MP/2026/370/text.pdf",
          note: "Перевірено 12.09.2026. Комунікат увів перелічені електронні процедури з 27.04.2026. Вигаданий приклад стосується нової справи після цієї дати; старі незавершені справи тут не моделюються.",
        },
      ],
      guide: defineLegalMapArticle({
        kind: "article",
        introduction: [
          "Законність означає, що орган має правову підставу для своєї дії й застосовує умови, які встановлює право. Встановлення фактів пояснює, чи виконано ці умови в конкретної особи. Посилання на статтю без перевірки факту не дає відповіді у справі. Велика кількість документів без визначеної правової умови також не дає такої відповіді.",
          "Наприклад, трудовий договір може підтверджувати погоджені умови роботи або бути одним із матеріалів про життєві плани. Його роль визначає питання справи. Саме тому вимога «надати документ про дохід» потребує пояснення, яку обставину орган встановлює і чому вона важлива для обраної підстави.",
        ],
        sections: [
          {
            id: "competence-condition-and-action",
            title: "Повноваження органу, умова права та процесуальна дія",
            paragraphs: [
              kpaLaw.text`${kpaLaw.article("6")} KPA вимагає від органу діяти на підставі приписів права. Це стосується того, хто вирішує справу, за яких умов можливе рішення та як орган проводить процедуру. ${kpaLaw.article("19")} зобов'язує орган із власної ініціативи дотримуватися своєї предметної й територіальної компетенції; ${kpaLaw.article("20")} пов'язує предметну компетенцію з приписами про сферу його діяльності.`,
              documents.text`Для pobytu stałego ${foreignersLaw.article("201", "art. 201 ust. 1")} визначає компетентного wojewodę за місцем перебування іноземця. ${foreignersLaw.article("195", "Art. 195 ust. 1 pkt 9")} визначає обрану тут матеріальну підставу: чинна Karta Polaka та намір оселитися в Польщі постійно. А ${foreignersLaw.article("203f")} регулює вимогу подати документи для підтвердження даних і обставин заяви. Це різні приписи, бо вони відповідають на різні питання.`,
              "Внутрішній перелік документів допомагає організувати роботу, але не може самостійно розширити законодавчі умови. Водночас відсутність назви конкретного документа в матеріальній нормі ще не робить вимогу незаконною: процесуальний припис може дозволяти зібрати доказ юридично важливого факту.",
            ],
          },
          {
            id: "relevant-fact-and-document-role",
            title: "Документ потрібен для певного факту",
            paragraphs: [
              documents.text`За ${foreignersLaw.article("195", "art. 195 ust. 1 pkt 9")} чинна ${documents.document("karta-polaka", "Karta Polaka")} та намір постійно оселитися є двома окремими складовими підстави. Картка встановлює статус її власника. Намір оселитися потребує оцінки пояснень і обставин життя. Саме посилання на картку не пояснює, де й як людина планує організувати своє життя.`,
              documents.text`${documents.document("employment-contract", "Трудовий договір")} з місцем роботи в Польщі може бути одним із матеріалів про такі плани. Це висновок про можливу доказову роль документа, а не припис про обов'язкове працевлаштування кожного заявника. Обрана підстава не містить окремої умови стабільного й регулярного доходу. Відсутність такої умови не забороняє органу з'ясувати обставини, які справді пов'язані з наміром оселитися.`,
              "Значення має зміст договору. Він фіксує погоджену роботу, дату її початку й місце виконання. Сам документ не підтверджує, що людина вже фактично відпрацювала кожний день або отримала всі виплати. Для іншого питання ті самі відомості можуть виявитися недостатніми.",
            ],
          },
          {
            id: "authority-investigation-and-party-evidence",
            title: "Орган з'ясовує факти, сторона надає відомості про себе",
            paragraphs: [
              kpaLaw.text`${kpaLaw.article("7")} KPA зобов'язує орган із власної ініціативи або на вимогу сторін уживати необхідних дій для точного з'ясування фактичного стану та вирішення справи. ${kpaLaw.article("77", "Art. 77 § 1")} конкретизує цей обов'язок: вичерпно зібрати й розглянути весь доказовий матеріал. Орган не може замінити власну оцінку позначкою «заявник приніс документи».`,
              documents.text`Спеціальна вимога до сторони діє поряд із цим обов'язком. У новій справі про pobyt stały ${foreignersLaw.article("203f")} передбачає wezwanie до подання необхідних документів у строк не коротший ніж 14 днів від вручення; орган ураховує час, потрібний для їх отримання. Така вимога стосується відомостей і обставин конкретної заяви. Вона не створює загального правила, що орган більше нічого не з'ясовує або будь-яке прохання про документ автоматично обґрунтоване.`,
              kpaLaw.text`За ${kpaLaw.article("80")} орган оцінює доведеність обставини на підставі всього матеріалу. Доданий документ може закрити одне питання, залишити інше відкритим або суперечити попередньому поясненню. Розбіжність потребує оцінки її змісту, а не вибору документа з найновішою датою без пояснення.`,
              kpaLaw.text`Згадані в ${kpaLaw.article("7")} interes społeczny та słuszny interes obywateli мають значення під час вирішення справи в межах права. Вони не наділяють орган повноваженням довільно скасувати законодавчу умову дозволу чи додати умову, якої для обраної підстави немає.`,
            ],
          },
          {
            id: "clarified-evidence-request",
            title: "Уточнена вимога змінила роль трудового договору",
            paragraphs: [
              "Уточнення вимоги може усунути помилку ще до рішення. Для цього недостатньо замінити заголовок листа: з його змісту має бути зрозуміло, яка обставина залишилася непідтвердженою та як запитуваний матеріал із нею пов'язаний.",
            ],
            example: {
              title: "Договір як відомість про плани оселитися",
              facts: [
                documents.text`Окрема вигадана справа. Заявник із чинною ${documents.document("karta-polaka", "Kartą Polaka")} належно подав нову заяву про pobyt stały 1 червня 2026 року. Він перебуває у Вроцлаві та пояснив намір постійно жити в Польщі. У ${documents.document("authority-summons", "wezwaniu")} від 7 липня орган назвав стабільний і регулярний дохід окремою умовою цього дозволу.`,
                "Заявник попросив пояснити цю вимогу. 10 липня орган письмово виправив її та уточнив, що потребує відомостей про реалізацію наміру оселитися. Уточнений лист вручено 13 липня, для відповіді визначено 14 днів. Він не встановлював обов'язкового працевлаштування чи конкретної суми доходу.",
                documents.text`20 липня заявник належно подав ${documents.document("response-letter", "відповідь")}, у якій пояснив свої плани та долучив ${documents.document("employment-contract", "umowę o pracę")}. Договір підписано 20 червня на невизначений строк, із погодженим початком роботи 1 липня та місцем роботи у Вроцлаві. Це обраний матеріал цієї справи, а не вимога до інших власників Karty Polaka.`,
              ],
              sample: {
                kind: "letter",
                language: "pl",
                title: "Wybrany fragment pisma organu z 10 lipca 2026 r.",
                note: "Вигаданий фрагмент письмового уточнення, не офіційний бланк і не цитата з реальної справи. Персональні дані та реквізити органу не відтворено. Уточнено саме вимогу з попереднього листа.",
                paragraphs: [
                  "Koryguję wezwanie z 7 lipca 2026 r. w części, w której wskazano posiadanie stabilnego i regularnego dochodu jako odrębny warunek zezwolenia na pobyt stały na podstawie art. 195 ust. 1 pkt 9 ustawy o cudzoziemcach.",
                  "Wyjaśnienia i dokumenty są potrzebne do ustalenia, czy zamierza Pan osiedlić się w Polsce na stałe. Proszę wyjaśnić, jakie konkretne okoliczności potwierdzają ten zamiar, oraz przedłożyć dokumenty dotyczące wskazanych przez Pana okoliczności, w terminie 14 dni od doręczenia niniejszego pisma.",
                  "Jeżeli powołuje się Pan na uzgodnione zatrudnienie w Polsce, jego warunki mogą być jednym z dowodów dotyczących przedstawionych planów. Nie oznacza to wymogu, aby każdy wnioskodawca ubiegający się o to zezwolenie pozostawał w stosunku pracy.",
                ],
              },
              reasoning: [
                documents.text`У ${documents.document("settlement-intention", "поясненні наміру оселитися")} заявник пов'язав свою заяву з конкретною домовленістю про роботу в місті перебування. Договір підтвердив, що це погоджене сторонами зобов'язання з визначеним місцем і початком, а не лише непідкріплена обіцянка знайти роботу.`,
                kpaLaw.text`22 липня орган розглянув відповідь і долучений договір. У матеріалах зафіксував, що погоджені умови роботи підтримують пояснення заявника про його плани. За ${kpaLaw.article("80")} це оцінка конкретного доказу в його обмеженій ролі. З договору не зроблено висновку про фактичні виплати або про те, що будь-яка інша умова справи вже перевірена.`,
                "Первісну помилку в переліку матеріальних умов виправлено. Заявник виконав уточнену вимогу в наданий строк; орган отримав відомості про фактичні плани, а не доказ вигаданого загального порогу доходу.",
              ],
              conclusion:
                "У справі залишили оцінку наміру оселитися та конкретний доказ, який її підтримує. Трудовий договір не перетворили на універсальну умову дозволу. Уточнення вимоги й оцінка цього матеріалу завершені; повний результат справи про pobyt stały цим прикладом не встановлено.",
            },
          },
          {
            id: "reasoning-and-consequences-of-error",
            title: "Помилка у фактах потребує визначеного способу виправлення",
            paragraphs: [
              kpaLaw.text`Коли рішення потребує обґрунтування, ${kpaLaw.article("107", "art. 107 § 3")} вимагає показати встановлені факти, докази, на яких орган спирався, причини відмови іншим доказам у довірі та пояснення правової підстави. ${kpaLaw.article("107", "Art. 107 § 4")} дозволяє відступити від обґрунтування при повному задоволенні вимоги, крім рішень про спірні інтереси сторін і рішень за результатами оскарження. ${kpaLaw.article("107", "Art. 107 § 5")} зберігає визначені законодавством можливості обмежити обґрунтування через безпеку держави або публічний порядок. Сам перелік статей не пояснює, чому обставини конкретної людини відповідають умовам припису.`,
              "У спорі про неповно встановлений факт істотно назвати, яку обставину пропущено, який матеріал її стосується та як вона пов'язана з умовою права. Це точніше, ніж загальне твердження про порушення законності. У прикладі орган виправив вимогу до видання рішення, тому потреби оскаржувати вже виданий акт не виникло.",
              kpaLaw.text`Окремий механізм stwierdzenia nieważności за ${kpaLaw.article("156")} стосується визначених законом вад. Зокрема, ${kpaLaw.article("156", "art. 156 § 1 pkt 1–2")} називає порушення компетенції, видання без правової підстави або з грубим порушенням права. Неповне дослідження документа саме по собі не дозволяє прирівняти справу до цих підстав. Недійсність установлює компетентний орган у відповідному провадженні.`,
              kpaLaw.text`Цей механізм має й окремі межі: ${kpaLaw.article("156", "art. 156 § 2")} не дозволяє встановити недійсність після десяти років від вручення чи оголошення або за незворотних правових наслідків. ${kpaLaw.article("158", "Art. 158 § 2")} визначає тоді інший зміст рішення про порушення права, а ${kpaLaw.article("158", "art. 158 § 3")} не допускає початку такого провадження після тридцяти років. Отже, посилання на загальну засаду не замінює умов обраного способу перегляду.`,
            ],
          },
        ],
      }),
      why: "Правова умова визначає значення факту, а процесуальні правила визначають, як орган його встановлює. Це дозволяє пояснити обґрунтованість вимоги про документ і вчасно помітити підміну умов дозволу.",
    },
  })

export default principleLegalityTopic

export const principleLegalityMapNode: LegalNode = {
  id: "principle-legality",
  title: principleLegalityTopic.body.title,
  polish: principleLegalityTopic.body.polish,
  summary: principleLegalityTopic.summary,
  why: principleLegalityTopic.body.why,
  documents: [...(principleLegalityTopic.body.documents ?? [])],
  sources: [...principleLegalityTopic.body.sources],
}
