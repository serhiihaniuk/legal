import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")

const moduleContent: LegalLearningModule = {
  id: "kontrola-i-sankcje",
  order: 6,
  title: "Контроль і санкції",
  polish: "kontrola; nielegalne powierzenie pracy; odpowiedzialność; sankcje",
  provisionScope: workLaw.text`${workLaw.articleRange("1", "2")}, ${workLaw.articleRange("80", "89", { start: "80" })}`,
  outcome:
    "Відрізняє nielegalne powierzenie від nielegalne wykonywanie роботи та оцінює ризик без вигаданих висновків про санкцію.",
  caseQuestion:
    "Які факти можуть показати порушення і які наслідки треба перевіряти за актом та іншими законами?",
  placeInWork:
    "Фінальний контроль якості: перевірка всього ланцюга й підготовка до запиту органу.",
  sections: [
    {
      id: "two-violations",
      title: "Розділити дії podmiot і cudzoziemiec",
      paragraphs: [
        workLaw.text`${workLaw.article("2")} окремо описує nielegalne powierzenie pracy і nielegalne wykonywanie pracy. Порушення можуть стосуватися pobyt, підстави роботи, відсутності документа або невідповідності умовам.`,
        "Одна й та сама ситуація може вимагати окремого аналізу дій podmiot, cudzoziemiec і відповідальних осіб.",
      ],
      questions: [
        "Хто допустив роботу і хто її фактично виконував?",
        "Яка саме ланка не підтверджена документами або фактами?",
      ],
      steps: [
        "Зафіксувати факт роботи та її період.",
        "Порівняти pobyt, uprawnienie і фактичні умови.",
        "Розділити можливі порушення за особами та ролями.",
      ],
      evidence: [
        "Документи pobyt і роботи",
        "Umowa, графіки та виплати",
        "Пояснення учасників і фактичні інструкції",
      ],
      warning:
        "Наявність одного правильного документа не доводить відсутність усіх інших порушень.",
    },
    {
      id: "consequences",
      title: "Наслідок залежить від факту",
      paragraphs: [
        workLaw.text`${workLaw.articleRange("80", "89")} містять приписи про контроль і відповідальність за порушення, а ${workLaw.article("1")} відсилає частину наслідків до окремих актів. Вид і розмір наслідку залежать від конкретної дії, періоду, ролі та доведених обставин.`,
        "Навчальний висновок має показувати ризик і потрібну перевірку, а не наперед проголошувати санкцію.",
      ],
      questions: [
        "Який орган і який вид провадження може бути компетентним?",
        "Які факти та документи підтверджують склад можливого порушення?",
      ],
      steps: [
        "Описати факт без правової оцінки.",
        "Знайти відповідний припис про контроль або відповідальність.",
        "Перевірити спеціальний закон і всі обставини справи.",
      ],
      evidence: [
        "Акт контролю або запит",
        "Повний комплект кадрових документів",
        "Хронологія подій і пояснення",
      ],
      warning:
        "Не називай конкретну санкцію гарантованою без встановленого складу порушення та чинного права на відповідну дату.",
    },
  ],
  exercise:
    "Розбери анонімний протокол контролю у двох колонках: факт, який доведено, і правовий наслідок, який ще потребує перевірки.",
}

export const kontrolaISankcjeLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:powierzanie-pracy:kontrola-i-sankcje",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "powierzanie-pracy",
        moduleId: "kontrola-i-sankcje",
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

export default kontrolaISankcjeLearningModuleTopic
