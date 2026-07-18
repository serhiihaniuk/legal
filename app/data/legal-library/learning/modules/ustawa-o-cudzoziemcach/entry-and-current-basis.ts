import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")

const moduleContent: LegalLearningModule = {
  id: "entry-and-current-basis",
  order: 1,
  title: "В’їзд не дорівнює поточній підставі перебування",
  polish: "wjazd, wiza, ruch bezwizowy, tytuł pobytowy, legalny pobyt",
  provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("23", "36", { start: "art. 23" })}, ${foreignersLaw.articleRange("59", "97", { start: "art. 59" })}, ${foreignersLaw.articleRange("105", "108", { start: "art. 105" })} та ${foreignersLaw.article("299", "art. 299")}`,
  outcome:
    "Уміти відновити правову хронологію від wjazd до дня аналізу й не підміняти поточний tytuł pobytowy документом, який колись дозволив перетнути кордон.",
  caseQuestion:
    "Яка норма дозволила wjazd, яка підстава легалізує pobyt сьогодні, до якої дати вона діє і що підтверджує кожну ланку?",
  placeInWork:
    "Початок кожної консультації: до вибору заяви, оцінки права на роботу або ризику powrót.",
  sections: [
    {
      id: "entry-stay-chain",
      title: "Побудуй ланцюг від кордону до сьогодні",
      paragraphs: [
        foreignersLaw.text`Закон прямо розділяє wjazd і подальший pobyt. Умови в’їзду та контроль на кордоні містяться, зокрема, у ${foreignersLaw.articleRange("23", "36", { start: "art. 23" })}. Віза регулюється окремим блоком ${foreignersLaw.articleRange("59", "97", { start: "art. 59" })}; її вид, строк, кількість в’їздів і cel wydania треба читати разом. Ruch bezwizowy випливає також із безпосередньо застосовного права UE або міжнародної угоди, тому він не є «візою без наклейки».`,
        foreignersLaw.text`Поточна підстава може змінитися після wjazd: особа отримує zezwolenie, користується спеціальним статусом або своєчасно подає wniosek. За ${foreignersLaw.article("108", "art. 108")} pobyt у Польщі вважається legalny від дня подання wniosku про pobyt czasowy за умови дотримання строку та відсутності braków formalnych або їх своєчасного усунення. Це законний pobyt у межах цієї норми, а не нова wiza і не гарантія повторного wjazd після виїзду. Останнє речення є практичним висновком із різних функцій цих інструментів.`,
      ],
      questions: [
        "Який документ і яка норма діяли в кожен день між wjazd та сьогодні?",
        "Чи не закінчився строк wizy або ruch bezwizowy до виникнення наступної підстави?",
      ],
      warning:
        "Штамп, zaświadczenie про подання wniosku або сама справа в urzędzie не є універсальним документом для подорожі чи роботи.",
    },
    {
      id: "facts-provision-proof",
      title: "Зв’яжи факт, норму й доказ",
      paragraphs: [
        foreignersLaw.text`Спочатку встанови Fakt: дати wjazd і wyjazd, держави перебування, номер і строк документа, дату подання заяви та дату усунення braków formalnych. Потім назви Pojęcie prawne: wiza Schengen, wiza krajowa, ruch bezwizowy, zezwolenie або pobyt uznawany za legalny. Лише після цього підбирай Przepis і перевіряй його warunki. Обов’язок виїзду та окремі періоди legalnego pobytu після рішення або завершення ochrony czasowej перевіряй за ${foreignersLaw.article("299", "art. 299")}.`,
        "Dowód має підтверджувати конкретну дату і конкретну підставу: сторінка паспорта, запис про перетин кордону, віза, decyzja, karta pobytu, підтвердження подання та усунення braków formalnych. Якщо документи суперечать один одному, не обирай зручніший: познач прогалину й отримай офіційне підтвердження.",
      ],
      steps: [
        "Записати всі wjazdy, wyjazdy та періоди перебування без пропусків.",
        "Для кожного періоду назвати tytuł pobytowy й останній день його дії.",
        "До кожної підстави прикріпити доказ і окремо визначити наслідок її завершення.",
      ],
      evidence: [
        "Повні копії використаних паспортів, віз і kart pobytu.",
        "Decyzje, zaświadczenia та підтвердження подання або усунення braków formalnych.",
        "Офіційні дані про wjazd/wyjazd, якщо штампи або розповідь неповні.",
      ],
    },
    {
      id: "worked-example",
      title: "Анонімізований приклад: подання в останній день",
      paragraphs: [
        foreignersLaw.text`Громадянка A в’їхала в ruch bezwizowy, а в останній допустимий день подала wniosek про pobyt czasowy. Fakt подання доведено urzędowe poświadczenie, але в заяві бракувало підпису; wezwanie було вручено через тиждень, і підпис подано в межах указаного строку. За ${foreignersLaw.article("108", "art. 108")} ключове питання не «чи є штамп», а чи заяву подано вчасно й чи brak formalny усунуто в строк. За підтвердження цих умов pobyt може вважатися legalny від дня подання до моменту, визначеного нормою.`,
        "Наступний висновок треба сформулювати окремо: це не доводить права виїхати та повернутися на підставі тієї самої заяви і не відповідає на питання про pracę. Для них потрібні інші норми й докази. Якщо organ stwierdzi, що brak не усунуто вчасно, наслідок та środek zaskarżenia оцінюють за отриманим процесуальним актом і KPA.",
      ],
      warning:
        "Приклад показує спосіб аналізу, а не прогноз рішення; результат залежить від повного akt sprawy та застосовної редакції права.",
    },
  ],
  exercise:
    "Побудуй для анонімної справи часову шкалу з колонками Fakt → Pojęcie prawne → Przepis i warunki → Dowód → Czynność i termin → Skutek → Środek zaskarżenia. Познач кожен день без установленої підстави окремим ризиком.",
}

export const entryAndCurrentBasisLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:entry-and-current-basis",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "entry-and-current-basis",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: moduleContent.provisionScope,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "module provision scope",
          },
        ],
      },
    ],
    relationships: [
      {
        kind: "next",
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
            documentId: "ustawa-o-cudzoziemcach",
            moduleId: "stay-and-work-right",
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

export default entryAndCurrentBasisLearningModuleTopic
