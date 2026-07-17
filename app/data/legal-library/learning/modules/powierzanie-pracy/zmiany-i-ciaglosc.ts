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
  provisionScope: workLaw.text`${workLaw.articleRange("30", "39")}, ${workLaw.article("58")}, ${workLaw.articleRange("70", "79")}`,
  outcome:
    "Розрізняє дозволену зміну, обов'язок повідомити, потребу в новому документі та випадок, коли закон окремо регулює продовження.",
  caseQuestion:
    "Чи можна продовжити роботу після зміни посади, podmiot, umowa або строку без нового аналізу?",
  placeInWork:
    "Контроль після первинного допуску: порівняння документа з кожною реальною зміною.",
  sections: [
    {
      id: "compare-conditions",
      title: "Порівнювати документ із фактами",
      paragraphs: [
        "Zezwolenie фіксує podmiot, cudzoziemiec, stanowisko або rodzaj pracy, czas, wynagrodzenie, rodzaj umowy та okres ważności; для pracy tymczasowej важливий також pracodawca użytkownik.",
        workLaw.text`Зміна будь-якого елемента потребує перевірки ${workLaw.articleRange("30", "39")} і відповідного режиму, а не автоматичного продовження старого документа.`,
      ],
      questions: [
        "Що саме змінилося: podmiot, посада, час, оплата, umowa чи строк?",
        "Чи є для цієї зміни спеціальне правило або powiadomienie?",
      ],
      steps: [
        "Зробити порівняльну таблицю старих і нових умов.",
        "Перевірити допустиму зміну та процедуру.",
        "Не допускати роботу за новими умовами до правової перевірки.",
      ],
      evidence: [
        "Чинне zezwolenie або oświadczenie",
        "Нова umowa чи aneks",
        "Доказ зміни фактичної роботи",
      ],
      warning:
        "Подання заяви або powiadomienie не означає автоматично, що будь-яка нова робота вже є legalna.",
    },
    {
      id: "continuity",
      title: "Коли можливе продовження",
      paragraphs: [
        "Для niektórych режимів ustawa передбачає передłużenie або продовження роботи під час належної процедури, зокрема для sezonowa praca та oświadczenie. Межі залежать від конкретної норми, дат і фактичного продовження тієї самої роботи.",
        "Тому безперервність доводять хронологією документа, заяви, pobyt і роботи, а не лише фактом, що справа ще розглядається.",
      ],
      questions: [
        "Який саме припис допускає роботу в перехідний період?",
        "Які умови, дата подання та межі процедури виконані?",
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
        "Незавершене провадження саме по собі не продовжує pobyt і не створює загального права працювати.",
    },
  ],
  exercise:
    "На анонімній часовій шкалі познач чинність pobyt, документа роботи, umowa, зміну умов і подання; сформулюй, що доведено, а що потребує окремої підстави.",
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
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: moduleContent,
  })

export default zmianyICiagloscLearningModuleTopic
