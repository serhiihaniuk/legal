import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const ppsaLaw = createLegalLearningTextAuthor("ppsa")

const moduleContent: LegalLearningModule = {
  id: "review-and-suspension",
  order: 4,
  title: "Межі судового контролю та wstrzymanie",
  polish: "granice kontroli sądu; wstrzymanie wykonania",
  provisionScope: ppsaLaw.text`${ppsaLaw.article("61")}, ${ppsaLaw.articleRange("134", "135", { start: "134" })}`,
  outcome:
    "Ви відділяєте перевірку законності від повторного ведення адміністративної справи та обґрунтовуєте, коли потрібен wniosek o wstrzymanie wykonania.",
  caseQuestion:
    "Яку помилку має перевірити WSA і чи створює виконання оскарженого акта конкретний ризик, що потребує wstrzymanie?",
  placeInWork:
    "Аналіз після подання: окремо захищаємо від невідкладного виконання, окремо доводимо незаконність рішення чи бездіяльності.",
  sections: [
    {
      id: "review-scope",
      title: "Поняття → норма → доказ",
      paragraphs: [
        ppsaLaw.text`${ppsaLaw.article("134")} визначає обсяг перевірки суду: WSA не обмежується лише названими сторонами підставами в межах встановленої законом рамки. Це не звільняє від точного викладу факту, порушеної норми та його доказу.`,
        ppsaLaw.text`${ppsaLaw.article("135")} дає суду процесуальний інструмент для повного розгляду справи в необхідних межах. Не просіть суд замінити organ у виборі адміністративного рішення, якщо закон вимагає повторного розгляду.`,
      ],
      questions: [
        "Яка норма регулює умову pobyt, а яка — процедуру її перевірки?",
        "Де в akt є доказ помилки органу та як вона вплинула на результат?",
      ],
      steps: [
        "Розкладіть тезу на факт, поняття, норму й доказ.",
        "Відокремте вимогу скасувати акт від бажаного адміністративного результату.",
        ppsaLaw.text`Перевірте, чи потрібна суду дія за ${ppsaLaw.article("135")} для повного контролю.`,
      ],
      evidence: [
        "decyzja з uzasadnienie, протокол процесуальних дій, документи з akt та норма матеріального права",
      ],
      warning:
        "Ширший контроль WSA не означає автоматичне встановлення всіх фактів замість administracji.",
    },
    {
      id: "suspension",
      title: "Ризик → wniosek → тимчасовий ефект",
      paragraphs: [
        ppsaLaw.text`За ${ppsaLaw.article("61")} wstrzymanie wykonania — окреме процесуальне питання. Покажіть не лише незгоду з рішенням, а конкретний ризик значної шкоди або наслідків, які важко відвернути чи усунути, якщо акт буде виконано.`,
        "Зв’яжіть кожен ризик із доказом і просіть про wstrzymanie у належній процесуальній формі, не очікуючи, що сама skarga зупиняє виконання. Тимчасовий ефект не є рішенням по суті.",
      ],
      questions: [
        "Яка дія виконання створює ризик, коли вона може настати і чим це підтверджено?",
      ],
      steps: [
        "Опишіть факт виконання та конкретну шкоду.",
        ppsaLaw.text`Перевірте умови ${ppsaLaw.article("61")} і подайте wniosek разом із доказами.`,
        "Окремо продовжуйте доводити незаконність акта та контролюйте doręczenia.",
      ],
      evidence: [
        "акт, повідомлення про виконання, підтвердження невідворотного наслідку та документи про особисту ситуацію",
      ],
      warning: ppsaLaw.text`${ppsaLaw.article("61")} не створює універсального автоматичного захисту; результат залежить від предмета та доведеного ризику.`,
    },
  ],
  exercise: ppsaLaw.text`Напишіть два абзаци: перший — порушення законності за ${ppsaLaw.articleRange("134", "135")}, другий — окремий доказаний ризик для wstrzymanie за ${ppsaLaw.article("61")}.`,
}

export const reviewAndSuspensionLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ppsa:review-and-suspension",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ppsa",
        moduleId: "review-and-suspension",
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
            reference: { kind: "official-source", sourceId: "eli-ppsa" },
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

export default reviewAndSuspensionLearningModuleTopic
