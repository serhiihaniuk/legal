import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")

const moduleContent: KpaGuideModule = {
  id: "silence",
  order: 10,
  title: "Мовчазне вирішення",
  polish: "Milczące załatwienie sprawy",
  articles: kpaLaw.text`${kpaLaw.articleRange("122a", "122g", { start: "art. 122a", end: "122g" })} KPA`,
  outcome:
    "Ви не плутаєте тривале мовчання органу з позитивним вирішенням справи.",
  layers: {
    beginner: {
      focus:
        "Milczące załatwienie — винятковий механізм. Сам факт, що organ довго не відповідає, не означає дозволу.",
      law: kpaLaw.text`${kpaLaw.article("122a", "Art. 122a")} застосовує цей режим лише тоді, коли спеціальний закон прямо так передбачає.`,
      practice:
        "Перш ніж говорити про milczenie, знайдіть конкретну норму спеціального закону і тип: milczące zakończenie чи milcząca zgoda.",
      pitfall:
        "Bezczynność і milczące załatwienie — різні інститути з протилежною логікою.",
    },
    practical: {
      focus:
        "Перевірте початок строку, kompletność, можливі wezwania і дії, які переривають або змінюють хід режиму за спеціальною нормою.",
      law: "KPA регулює момент і наслідки milczącego załatwienia та можливість отримання zaświadczenia, але активацію дає lex specialis.",
      practice:
        "У нотатці наведіть дослівне посилання на спеціальну норму; без нього не будувати позитивний висновок.",
      pitfall: kpaLaw.text`Звичайні строки ${kpaLaw.article("35", "art. 35")} не створюють milczącej zgody.`,
    },
    advanced: {
      focus:
        "Навіть при milczącym załatwieniu діють механізми контролю, а KPA містить спеціальні правила надзвичайних режимів для такого результату.",
      law: kpaLaw.text`${kpaLaw.article("122g", "Art. 122g")} передбачає відповідне застосування визначених інститутів до справи, вирішеної milcząco.`,
      practice:
        "Перевіряйте права інших сторін, дату наслідку, zaświadczenie і спеціальний спосіб оскарження.",
      pitfall:
        "Не переносіть режим з однієї адміністративної процедури на іншу лише через схожість назви дозволу.",
    },
  },
  method: [
    "Знайдіть пряму норму lex specialis",
    "Визначте вид milczenia",
    "Порахуйте спеціальний строк",
    "Перевірте zaświadczenie і контроль",
  ],
  checklist: [
    "Є пряма норма",
    "Milczenie не сплутано з bezczynnością",
    "Строк пораховано за спеціальним правилом",
  ],
  questions: [
    {
      prompt:
        "Орган не вирішує справу кілька місяців. Чи це автоматично milcząca zgoda?",
      answer:
        "Ні. Потрібна пряма норма спеціального закону. Інакше аналізуємо строки, bezczynność/przewlekłość і ponaglenie.",
    },
  ],
}

export const kpaSilenceLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:silence",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "silence",
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

export default kpaSilenceLearningModuleTopic
