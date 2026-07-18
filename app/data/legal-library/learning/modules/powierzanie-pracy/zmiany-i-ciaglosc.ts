import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")

const moduleContent: LegalLearningModule = {
  id: "zmiany-i-ciaglosc",
  order: 5,
  title: "Зміни та безперервність роботи",
  polish: "zmiana warunków; przedłużenie; dalsze wykonywanie pracy",
  provisionScope: workLaw.text`${workLaw.article("18")}, ${workLaw.article("21")}, ${workLaw.article("33")}, ${workLaw.article("49")}, ${workLaw.article("56")}, ${workLaw.article("58")}, ${workLaw.articleRange("69", "71")}`,
  outcome:
    "Розрізняє дозволену зміну, обов'язок повідомити, потребу в новому документі та випадок, коли закон окремо регулює продовження.",
  caseQuestion:
    "Чи можна продовжити роботу після зміни посади, суб’єкта, договору або строку без нового документа чи повідомлення?",
  placeInWork:
    "Контроль після первинного допуску: порівняння документа з кожною реальною зміною.",
  sections: [
    {
      id: "compare-conditions",
      title: "Порівнювати документ із фактами",
      paragraphs: [
        "Дозвіл на роботу зазвичай фіксує суб’єкта, іноземця, посаду або вид роботи, робочий час, винагороду, вид договору та строк чинності. Для тимчасової роботи значення має також роботодавець-користувач. Декларація («oświadczenie») містить власний набір умов. Тому старий запис, новий договір і фактичну роботу порівнюють поле за полем.",
        workLaw.text`${workLaw.article("18")} і ${workLaw.article("33")} називають зміни у справах дозволів, за яких достатньо повідомлення або не потрібен новий дозвіл. ${workLaw.article("69")} встановлює окремий перелік випадків, коли не потрібна нова декларація. Від 8 липня 2026 року частина 2 пункт 3 статті 33 та пункт 5 статті 69 дозволяють без нового документа замінити цивільно-правовий договір трудовим або врахувати рішення Державної інспекції праці («Państwowa Inspekcja Pracy») про існування трудових відносин. Цей виняток не дозволяє мовчки змінити суб’єкта, роботу, місце чи оплату.`,
      ],
      questions: [
        "Що саме змінилося: суб’єкт, посада, час, оплата, договір чи строк?",
        "Чи є для цієї зміни спеціальний виняток або обов’язок повідомлення?",
      ],
      steps: [
        "Зробити порівняльну таблицю старих і нових умов.",
        "Перевірити допустиму зміну та процедуру.",
        "Не допускати роботу за новими умовами до правової перевірки.",
      ],
      evidence: [
        "Дозвіл або декларація, чинні на дату зміни",
        "Новий договір або додаткова угода («aneks»)",
        "Доказ зміни фактичної роботи",
      ],
      warning:
        "Виняток для одного параметра не переноситься на інші. Наприклад, перехід на трудовий договір («umowa o pracę») не робить автоматично допустимими нове місце, інші обов’язки або нижчу оплату.",
    },
    {
      id: "continuity",
      title: "Коли можливе продовження",
      paragraphs: [
        workLaw.text`Безперервність роботи виникає лише з конкретної норми. ${workLaw.article("21")} стосується продовження тієї самої роботи між дозволами. ${workLaw.article("49")} і ${workLaw.article("58")} встановлюють різні перехідні механізми для сезонної роботи. ${workLaw.article("71")} за визначених умов охоплює перехід від декларації до дозволу після щонайменше трьох місяців роботи за трудовим договором.`,
        "Кожен механізм має свій початковий момент, вимоги до заяви та кінцеву межу. Тому безперервність доводять хронологією чинного документа, подання заяви, усунення формальних недоліків, перебування і фактичної роботи, а не самим фактом, що справа ще розглядається.",
      ],
      questions: [
        "Який саме припис допускає роботу в перехідний період?",
        "Які умови виконані, коли подано заяву і де закінчуються межі цього механізму?",
      ],
      steps: [
        "Побудувати хронологію чинності та подань.",
        "Перевірити спеціальну норму про продовження.",
        "Обмежити висновок лише тією роботою, яку охоплює норма.",
      ],
      evidence: [
        "Дати чинності",
        "Підтвердження своєчасного подання",
        "Безперервні записи фактичної роботи",
      ],
      warning:
        "Незавершене провадження саме по собі не продовжує перебування і не створює загального права працювати. Треба назвати статтю, яка дозволяє саме цю роботу в конкретний період.",
    },
  ],
  exercise:
    "На анонімній часовій шкалі познач строк законного перебування, чинність документа про право на роботу, період договору, зміну умов і дату подання заяви. Потім сформулюй, що вже доведено, а що потребує окремої підстави.",
}

export const zmianyICiagloscLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:powierzanie-pracy:zmiany-i-ciaglosc",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "powierzanie-pracy",
        moduleId: "zmiany-i-ciaglosc",
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

export default zmianyICiagloscLearningModuleTopic
