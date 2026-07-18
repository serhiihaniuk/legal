import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")

const moduleContent: LegalLearningModule = {
  id: "legalny-pobyt-a-rynek-pracy",
  order: 1,
  title: "Законне перебування не дорівнює доступу до ринку праці",
  polish: "legalny pobyt; dostęp do rynku pracy; uprawnienie do pracy",
  provisionScope: workLaw.text`${workLaw.articleRange("1", "5")}, ${workLaw.article("5a")}`,
  outcome:
    "Розрізняє три висновки: чи законне перебування, звідки виникає доступ до праці та чи відповідає фактична робота умовам цієї підстави.",
  caseQuestion:
    "Особа має чинний документ про перебування: що ще потрібно перевірити перед початком саме цієї роботи?",
  placeInWork:
    "Початок аналізу: окремо встановити законність перебування, підставу доступу до роботи та фактичні умови її виконання.",
  sections: [
    {
      id: "separate-legal-questions",
      title: "Розділити правові питання",
      paragraphs: [
        "Цей закон регулює доступ іноземців до ринку праці. Правила в’їзду та перебування містяться насамперед у польському законі «ustawa o cudzoziemcach» та інших актах. Віза («wiza») або карта перебування («karta pobytu») підтверджують певну підставу перебування, але сам вигляд документа не завжди показує повний обсяг права на роботу. Треба встановити норму, на підставі якої видано документ, і прочитати умови рішення, якщо воно є.",
        workLaw.text`Право на роботу може випливати з вільного доступу до ринку праці, дозволу на роботу («zezwolenie na pracę»), внесеної до реєстру декларації («oświadczenie»), рішення про певний вид дозволу на тимчасове перебування або передбаченого законом звільнення. Повідомлення за ${workLaw.article("5a")} — це обов’язок польського суб’єкта після початку роботи особи, яка користується тимчасовим захистом, а не окремий дозвіл на перебування чи роботу.`,
      ],
      questions: [
        "Який саме документ або припис дає право перебувати?",
        "Яка окрема підстава дає право виконувати цю роботу?",
      ],
      steps: [
        "Зафіксувати громадянство, документ, правову підставу і строк перебування.",
        "Визначити окрему підставу права на роботу.",
        "Порівняти її з договором і реальною роботою.",
      ],
      evidence: [
        "Документ про перебування",
        "Підстава доступу до роботи",
        "Договір та опис фактичної роботи",
      ],
      warning:
        "Хибна скорочена формула звучить так: «є карта перебування — можна виконувати будь-яку роботу». Правильний висновок називає норму, строк, суб’єкта та межі конкретної роботи.",
    },
    {
      id: "legality-chain",
      title: "Ланцюг законності",
      paragraphs: [
        workLaw.text`${workLaw.article("2")} пов’язує незаконне доручення роботи, зокрема, з незаконним перебуванням, підставою перебування без права працювати, відсутністю потрібного дозволу чи декларації, роботою всупереч умовам належного документа або відсутністю письмового договору у визначених законом випадках.`,
        "Отже, перевірка не закінчується на назві документа. Спочатку встановлюють статус особи та законність перебування, потім — конкретну підставу доступу до праці, а наприкінці зіставляють суб’єкта, вид роботи, місце, час, оплату й договір із реальними фактами.",
      ],
      questions: [
        "Чи дозволяє підстава перебування виконувати роботу?",
        "Чи збігаються посада, час, оплата і місце з підставою роботи?",
      ],
      steps: [
        "Перевірити перебування і його зв’язок із роботою.",
        "Перевірити документ роботи або виняток.",
        "Перевірити фактичне виконання роботи та письмовий договір.",
      ],
      evidence: [
        "Хронологія перебування",
        "Документ роботи",
        "Графіки, договір та фактичні обов’язки",
      ],
      warning:
        "Законне перебування не усуває можливої відсутності права на роботу або невідповідності умовам такого права.",
    },
  ],
  exercise:
    "Для анонімної справи напиши три короткі висновки: про законність перебування, правову підставу роботи та відповідність фактичних умов. Біля кожного познач, який факт і документ його доводять.",
}

export const legalStayWorkModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:powierzanie-pracy:legalny-pobyt-a-rynek-pracy",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "powierzanie-pracy",
        moduleId: "legalny-pobyt-a-rynek-pracy",
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
              sourceId: "eli-powierzanie-pracy",
            },
            locator: "module provision scope",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: moduleContent,
  })

export default legalStayWorkModuleTopic
