import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")
const kpaLaw = createLegalLearningTextAuthor("kpa")
const ppsaLaw = createLegalLearningTextAuthor("ppsa")

const moduleContent: LegalLearningModule = {
  id: "refusal-withdrawal-expiry-remedies",
  order: 8,
  title: "Odmowa, cofnięcie, wygaśnięcie та засоби захисту",
  polish:
    "odmowa wszczęcia, odmowa udzielenia, cofnięcie zezwolenia, wygaśnięcie, odwołanie, skarga",
  provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("99", "103", { start: "art. 99" })}, ${foreignersLaw.articleRange("196", "200", { start: "art. 196" })} та ${foreignersLaw.articleRange("213", "217", { start: "art. 213" })}`,
  outcome:
    "Уміти класифікувати негативний або завершальний наслідок, знайти норму для відповідної категорії pobytu й побудувати адміністративний та судовий маршрут за актом і pouczenie.",
  caseQuestion:
    "Орган не почав справу, відмовив по суті, відкликав чинний дозвіл чи дозвіл згас із закону — і який засіб доступний саме проти отриманого акта?",
  placeInWork:
    "Під час читання кожного негативного акта: до написання zarzutów, обчислення строку та оцінки наслідків для pobytu.",
  sections: [
    {
      id: "classify-effect",
      title: "Спершу назви юридичний наслідок",
      paragraphs: [
        foreignersLaw.text`Odmowa wszczęcia означає, що спеціальна перешкода не дозволяє перейти до матеріальної оцінки заяви. Для pobyt czasowy такий каталог містить ${foreignersLaw.article("99", "art. 99")}, для pobyt stały — ${foreignersLaw.article("196", "art. 196")}, для rezydent długoterminowy UE — ${foreignersLaw.article("213", "art. 213")}. Визначальним часто є стан саме в день подання: вид pobytu, місце перебування, detention, рішення про powrót або інша перелічена обставина. Не називай це „brak formalny”, якщо орган послався на спеціальну przesłanka odmowy wszczęcia.`,
        foreignersLaw.text`Odmowa udzielenia настає після оцінки умов і бар’єрів по суті: відповідно ${foreignersLaw.article("100", "art. 100")}, ${foreignersLaw.article("197", "art. 197")} або ${foreignersLaw.article("214", "art. 214")}. Cofnięcie стосується вже наданого дозволу: ${foreignersLaw.article("101", "art. 101")}, ${foreignersLaw.article("199", "art. 199")} або ${foreignersLaw.article("215", "art. 215")}. Wygaśnięcie z mocy prawa відбувається без підміни його „cofnięciem” у випадках ${foreignersLaw.article("102", "art. 102")}, ${foreignersLaw.article("200", "art. 200")} та ${foreignersLaw.article("217", "art. 217")}. Різні конструкції мають різний факт, момент і предмет заперечення.`,
      ],
      questions: [
        "Які слова містять sentencja й правова підстава: wszczęcie, udzielenie, cofnięcie чи wygaśnięcie?",
        "Чи орган оцінює факт на день wniosku, невиконану матеріальну умову, пізнішу зміну або подію, з якою закон прямо пов’язує згасання?",
      ],
      warning:
        "Не будуй zarzut до „відмови взагалі”: спершу визнач предмет акта й точну категорійну норму.",
    },
    {
      id: "category-analysis",
      title: "Зістав мотив із умовою, доказом і наслідком",
      paragraphs: [
        foreignersLaw.text`Для pobyt czasowy ${foreignersLaw.article("100", "art. 100")} охоплює, зокрема, невиконання вимог заявленого celu, записи у wykaz або SIS, безпеку, неправдиві дані, податки, невідшкодовані koszty powrotu, відмову від обов’язкового лікування та нелегальний pobyt. ${foreignersLaw.article("101", "Art. 101")} пов’язує cofnięcie з припиненням celu, втратою вимог або окремими бар’єрами ${foreignersLaw.article("100", "Art. 100")}. За ${foreignersLaw.article("102", "art. 102")} попередній тимчасовий дозвіл згасає з дня отримання наступного названого дозволу або польського громадянства.`,
        foreignersLaw.text`Для pobyt stały матеріальні підстави odmowy з ${foreignersLaw.article("197", "art. 197")} треба зіставляти з конкретним пунктом ${foreignersLaw.article("195", "art. 195")}; cofnięcie за ${foreignersLaw.article("199", "art. 199")} має власний каталог, включно зі спеціальними правилами для окремих підстав. За ${foreignersLaw.article("200", "art. 200")} дозвіл згасає при DLR UE або obywatelstwo polskie. Для DLR UE ${foreignersLaw.article("214", "art. 214")} зосереджений на умовах ${foreignersLaw.article("211", "art. 211")} та безпеці, ${foreignersLaw.article("215", "art. 215")} — на незаконному набутті, серйозній загрозі, тривалих виїздах, DLR іншої держави UE або втраті відповідного захисту, а ${foreignersLaw.article("217", "art. 217")} — на obywatelstwo polskie.`,
        "Після класифікації застосуй повний ланцюг. Fakt: що саме орган встановив і на яку дату. Pojęcie prawne: яка умова або бар’єр. Przepis: усі елементи конкретного пункту й винятки. Dowód: документ до кожного елемента. Czynność i termin: доповнення, odwołanie або інша реакція. Skutek: що стається з дозволом і поточним pobyt. Środek zaskarżenia: тільки той, який випливає з виду акта, закону та pouczenie.",
      ],
      evidence: [
        "Повний акт із sentencja, uzasadnienie та pouczenie, а також доказ doręczenia.",
        "Матеріали справи, на які послався organ, і контрдоказ до кожної спірної умови.",
        "Хронологія statusów, заяв, змін обставин та попередніх рішень.",
      ],
    },
    {
      id: "remedy-route",
      title: "Розділи контроль адміністрації та контроль WSA",
      paragraphs: [
        kpaLaw.text`Для decyzja першої інстанції загальний маршрут odwołania визначають ${kpaLaw.articleRange("127", "130", { start: "art. 127" })} KPA: перевір право на odwołanie, його мінімальний зміст, подання через organ, який видав decyzję, строк від doręczenia та вплив на виконання. Zażalenie на postanowienie доступне лише тоді, коли закон його допускає; його не можна автоматично назвати odwołaniem. Завжди починай із фактичного виду акта й pouczenie, а помилкове pouczenie аналізуй за KPA, не замовчуй його.`,
        ppsaLaw.text`Після вичерпання необхідного адміністративного шляху можливий судовий контроль WSA. ${ppsaLaw.articleRange("52", "54", { start: "art. 52" })} p.p.s.a. регулюють вичерпання засобів, строк і подання skargi через organ; вимоги до pisma та skargi треба перевіряти разом з ${ppsaLaw.article("46", "art. 46")} і ${ppsaLaw.article("57", "art. 57")}. Подання skargi саме по собі не зупиняє виконання: окремий механізм і його умови містить ${ppsaLaw.article("61", "art. 61")}. Тому адміністративне odwołanie, судова skarga й wniosek o wstrzymanie виконують різні функції.`,
      ],
      steps: [
        "Зафіксувати дату й спосіб doręczenia, вид акта та зміст pouczenie.",
        "Сформулювати zarzuty як помилку факту, права, доказової оцінки або процедури з її впливом.",
        "Подати правильний засіб правильним маршрутом і зберегти доказ подання; судовий захист оцінювати окремо після адміністративного етапу.",
      ],
      warning:
        "Не припускай, що кожна skarga автоматично легалізує pobyt або зупиняє виконання; для наслідку потрібна конкретна норма й процесуальне рішення.",
    },
    {
      id: "worked-example",
      title: "Анонімізований приклад: слабкий доказ умови, а не brak formalny",
      paragraphs: [
        foreignersLaw.text`Особа H подала підписаний wniosek про pobyt czasowy з усіма формально потрібними полями. Organ після провадження видав decyzję про odmowa udzielenia за ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1, бо документи не довели матеріальної умови заявленого celu. Fakt: справа була розпочата й докази оцінені. Pojęcie prawne: невиконання умови zezwolenia, а не brak formalny й не odmowa wszczęcia за ${foreignersLaw.article("99", "art. 99")}.`,
        kpaLaw.text`Правильна реакція починається з doręczenia та pouczenie. У odwołaniu за правилами ${kpaLaw.articleRange("127", "130", { start: "art. 127" })} KPA особа показує, яку умову organ сформулював неправильно або який наявний чи новий доказ підтверджує її, чому він стосується релевантної дати та який результат просить. Якщо після другої інстанції акт залишається остаточним, допустимість і строк skargi до WSA перевіряють уже за p.p.s.a.; окремо визначають наслідок для pobytu й можливий obowiązek wyjazdu, а не виводять його лише з факту подання оскарження.`,
      ],
      warning:
        "Приклад не означає, що новий документ обов’язково змінить результат: він має доводити конкретну законну умову й підлягати оцінці у належному провадженні.",
    },
  ],
  exercise:
    "Розбери анонімний акт у таблиці Fakt → Pojęcie prawne → Przepis i warunki → Dowód organu → kontrdowód → Czynność i termin → Skutek → Środek zaskarżenia. Окремо напиши, чому це не одна з трьох інших конструкцій.",
}

export const refusalWithdrawalExpiryRemediesLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:refusal-withdrawal-expiry-remedies",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "refusal-withdrawal-expiry-remedies",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "foreigners-act-basis",
        kind: "statute-text",
        text: moduleContent.provisionScope,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "category-specific refusal, withdrawal and expiry",
          },
        ],
      },
      {
        id: "administrative-remedies",
        kind: "statute-text",
        text: kpaLaw.text`${kpaLaw.articleRange("127", "144", { start: "art. 127" })} KPA`,
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "odwołanie and zażalenie",
          },
        ],
      },
      {
        id: "judicial-review-route",
        kind: "statute-text",
        text: ppsaLaw.text`${ppsaLaw.article("46", "art. 46")}, ${ppsaLaw.articleRange("52", "61", { start: "art. 52" })} p.p.s.a.`,
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-ppsa" },
            locator: "admissibility, filing and suspension",
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
            moduleId: "application-evidence-procedure",
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
            moduleId: "appeal",
          },
        },
      },
      {
        kind: "related",
        target: {
          family: "learning-module",
          reference: {
            kind: "learning-module",
            documentId: "ppsa",
            moduleId: "admissibility",
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

export default refusalWithdrawalExpiryRemediesLearningModuleTopic
