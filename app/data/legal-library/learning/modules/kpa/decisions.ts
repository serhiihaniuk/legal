import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")

const moduleContent: KpaGuideModule = {
  id: "decisions",
  order: 11,
  title: "Decyzja і postanowienie",
  polish: "Rozstrzygnięcia organu i ich elementy",
  articles: kpaLaw.text`${kpaLaw.articleRange("104", "113", { start: "art. 104", end: "113" })}, ${kpaLaw.articleRange("123", "126", { start: "art. 123", end: "126" })} KPA`,
  outcome:
    "Ви читаєте акт у правильному порядку: форма, sentencja, підстава, факти, оцінка, pouczenie.",
  layers: {
    beginner: {
      focus:
        "Decyzja зазвичай вирішує справу по суті або інакше завершує провадження; postanowienie вирішує окреме процесуальне питання, якщо закон не каже інакше.",
      law: kpaLaw.text`${kpaLaw.article("104", "Art. 104")} описує роль decyzji, ${kpaLaw.article("107", "art. 107")} — її обов’язкові елементи; ${kpaLaw.article("123", "art. 123")} стосується postanowień у ході провадження.`,
      practice:
        "Почніть із sentencji: що саме надано, відмовлено, припинено або наказано. Лише потім читайте uzasadnienie.",
      pitfall:
        "Назва документа не завжди достатня. Дивіться, що він реально вирішує і який засіб оскарження вказано законом.",
    },
    practical: {
      focus:
        "Перевірте: organ, strony, podstawa prawna, rozstrzygnięcie, uzasadnienie faktyczne i prawne, pouczenie, podpis.",
      law: kpaLaw.text`${kpaLaw.article("107", "Art. 107")} вимагає пояснити, які факти organ визнав доведеними, на яких доказах і чому іншим доказам відмовив у вірогідності або силі.`,
      practice:
        "Побудуйте таблицю «умова закону → висновок organu → доказ → помилка/згода → аргумент odwołania».",
      pitfall:
        "Не оскаржуйте лише тон uzasadnienia; покажіть помилку у факті, нормі, оцінці доказу або процедурі та її вплив.",
    },
    advanced: {
      focus:
        "Розрізняйте ostateczność, prawomocność і wykonalność; це не синоніми.",
      law: kpaLaw.text`${kpaLaw.article("16", "Art. 16")} визначає decyzje ostateczne і prawomocne; ${kpaLaw.article("110", "art. 110")} пов’язує зв’язаність organu рішенням із його doręczeniem або ogłoszeniem, з передбаченими законом винятками.`,
      practice:
        "Перевірте natychmiastowa wykonalność, відмову від odwołania, виправлення, uzupełnienie і вплив цих дій на строки.",
      pitfall:
        "Błędne pouczenie має процесуальне значення, але не варто припускати, що воно автоматично змінює компетенцію чи вид засобу захисту.",
    },
  },
  method: [
    "Визначте форму акта",
    "Прочитайте sentencję",
    "Зіставте факти з умовами",
    "Перевірте pouczenie і doręczenie",
  ],
  checklist: [
    "Sentencja зрозуміла",
    "Uzasadnienie покриває докази",
    "Засіб і строк захисту перевірені",
  ],
  questions: [
    {
      prompt: "Що читати першим у негативній decyzji?",
      answer:
        "Sentencję/rozstrzygnięcie: вона визначає юридичний результат. Потім — підставу, факти, оцінку доказів і pouczenie.",
    },
  ],
}

export const kpaDecisionsLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:decisions",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "decisions",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: moduleContent.articles,
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "module articles",
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

export default kpaDecisionsLearningModuleTopic
