import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")
const kpaLaw = createLegalLearningTextAuthor("kpa")

const moduleContent: LegalLearningModule = {
  id: "application-evidence-procedure",
  order: 4,
  title: "Заява, докази й процедура",
  polish: "wniosek, brak formalny, dowód, wezwanie, odmowa",
  provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("98", "109", { start: "art. 98" })} та спеціальні умови ${foreignersLaw.articleRange("114", "189", { start: "art. 114" })}; процесуальна рамка KPA, зокрема ${kpaLaw.articleRange("63", "64", { start: "art. 63" })} і ${kpaLaw.articleRange("75", "81a", { start: "art. 75" })}`,
  outcome:
    "Уміти відрізнити wadę wniosku від недоведеної матеріальної умови та побудувати доказовий ланцюг для кожної przesłanka zezwolenia.",
  caseQuestion:
    "Чого бракує: елемента, без якого podanie не може бути належно опрацьоване, чи доказу факту, від якого залежить рішення по суті?",
  placeInWork:
    "Підготовка wniosku, відповідь на wezwanie, контроль строків і розбір мотивів негативного акта.",
  sections: [
    {
      id: "two-types-of-gap",
      title: "Дві прогалини, два наслідки",
      paragraphs: [
        foreignersLaw.text`Brak formalny стосується форми або обов’язкового елемента podania: наприклад, підпису, належного formularza чи спеціально передбаченої дії. Його усунення оцінюють за KPA та спеціальними нормами ${foreignersLaw.articleRange("105", "108", { start: "art. 105" })}. Для legalności pobytu за ${foreignersLaw.article("108", "art. 108")} важливо не лише подати заяву вчасно, а й щоб вона не мала braków formalnych або щоб їх усунули в terminie. Невиконання wezwania формального характеру може призвести до процесуального наслідку без оцінки матеріальної умови.`,
        foreignersLaw.text`Інша ситуація — документально не підтверджено przesłanka zezwolenia: дохід, ubezpieczenie, сімейний статус, rzeczywisty cel pobytu чи спеціальну умову категорії. Це не треба автоматично називати brak formalny. Орган збирає й оцінює матеріал за правилами KPA, а якщо умову не виконано або не доведено, можливий негативний висновок по суті, зокрема за ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1 чи відповідною спеціальною нормою.`,
      ],
      questions: [
        "Який точний елемент або факт названо у wezwanie?",
        "Який наслідок прямо вказано і з якої норми він випливає?",
      ],
      warning:
        "Не відповідай на матеріальне wezwanie одним формуляром і не лікуй brak formalny довгими поясненнями без відсутнього елемента.",
    },
    {
      id: "evidence-chain",
      title: "Одна przesłanka — перевірюваний ланцюг",
      paragraphs: [
        "Для кожної умови запиши Fakt, Pojęcie prawne і точний Przepis. Потім визнач Dowód, який підтверджує саме цей факт у потрібний період. Після цього назви Czynność і termin, Skutek виконання або невиконання та Środek zaskarżenia, якщо орган уже видав akt. Така послідовність показує, де справді є прогалина, а де документ лише має переконливу назву.",
        "Dowód оцінюють за змістом, датою, джерелом і зв’язком з особою. Umowa без доказів виконання може не підтверджувати реальну діяльність; виписка за один місяць може не охоплювати потрібний період; переклад уривка може приховати істотну умову. Практичний висновок: до відповіді на wezwanie готують таблицю вимог і окреме підтвердження подання кожного додатка.",
      ],
      steps: [
        "Розкласти wezwanie на окремі вимоги й позначити їх як formalne або materialne.",
        "До кожної матеріальної умови додати факт, документ, період і пояснення суперечностей.",
        "Подати відповідь належним каналом у строк та зберегти доказ змісту і дати подання.",
      ],
      evidence: [
        "Повний tekst wezwania й доказ doręczenia.",
        "Копія відповіді з нумерованим переліком załączników.",
        "UPO, stempel wpływu або інше офіційне підтвердження подання.",
      ],
    },
    {
      id: "worked-example",
      title: "Анонімізований приклад: підпис і дохід",
      paragraphs: [
        foreignersLaw.text`Особа D подала wniosek про pobyt czasowy без підпису й додала лише один rachunek замість доказів stabilnego dochodu, якого вимагає обрана категорія. Wezwanie містить дві частини. Відсутній підпис — потенційний brak formalny: треба виконати точну дію в указаному terminie, інакше можливий процесуальний наслідок. Слабкий доказ доходу — питання матеріальної przesłanka: навіть після підписання заяви organ може оцінити, що умова не доведена, і вирішити справу по суті за ${foreignersLaw.article("100", "art. 100")} та спеціальною нормою.`,
        "Правильна відповідь має два пакети: формальну дію з доказом її своєчасності та доказовий блок за весь релевантний період із поясненням джерела доходу. Якщо organ попри своєчасний підпис залишає podanie без розгляду, аналізують цей процесуальний акт; якщо видає odmowa через дохід, аргументи й odwołanie спрямовують на матеріальну оцінку та докази.",
      ],
      warning:
        "Конкретний termin і środek zaskarżenia завжди звіряють з отриманим документом, KPA та спеціальною нормою; їх не виводять із навчального прикладу.",
    },
  ],
  exercise:
    "Перетвори анонімне wezwanie на таблицю: вимога → formalna/materialna → норма → доказ або дія → termin → наслідок → доступний засіб реакції. Обґрунтуй кожну класифікацію одним реченням.",
}

export const applicationEvidenceProcedureLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:application-evidence-procedure",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "application-evidence-procedure",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "foreigners-act-basis",
        kind: "statute-text",
        text: foreignersLaw.text`${foreignersLaw.articleRange("98", "109", { start: "art. 98" })} та ${foreignersLaw.articleRange("114", "189", { start: "art. 114" })}`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "application and substantive conditions",
          },
        ],
      },
      {
        id: "kpa-procedure",
        kind: "statute-text",
        text: kpaLaw.text`${kpaLaw.articleRange("63", "64", { start: "Art. 63" })} та ${kpaLaw.articleRange("75", "81a", { start: "art. 75" })} KPA розділяють вимоги до podania, усунення braków і postępowanie dowodowe.`,
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "art. 63–64 i art. 75–81a",
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
            moduleId: "temporary-residence-purposes",
          },
        },
      },
      {
        kind: "related",
        target: {
          family: "learning-module",
          reference: {
            kind: "learning-module",
            documentId: "kpa",
            moduleId: "summons",
          },
        },
      },
      {
        kind: "evidence",
        target: {
          family: "learning-module",
          reference: {
            kind: "learning-module",
            documentId: "kpa",
            moduleId: "files-evidence",
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

export default applicationEvidenceProcedureLearningModuleTopic
