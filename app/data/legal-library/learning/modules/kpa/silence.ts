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
  lesson: {
    paragraphs: [
      "Milczące załatwienie не є покаранням organu за повільність. Це спеціально сконструйований позитивний або завершальний наслідок, який працює лише тоді, коли інший закон прямо підключає цей режим. Без такої норми тривала відсутність decyzji залишається проблемою строку, bezczynności або przewlekłości.",
      "Навіть коли спеціальний закон передбачає milczenie, треба встановити вид механізму, початок строку, kompletność sprawy та дії organu в цей період. KPA пояснює наслідок і документування результату, але не дозволяє переносити milczącą zgodę з однієї процедури на іншу за аналогією.",
    ],
    articles: [
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 122a",
          parts: [
            {
              text: "art. 122a",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-122a",
              },
            },
          ],
        },
        role: "Встановлює ключовий шлюз: milczące załatwienie застосовується лише за прямою нормою спеціального закону.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 122b–122f",
          parts: [
            {
              text: "art. 122b",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-122b",
              },
            },
            {
              text: "–",
            },
            {
              text: "122f",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-122f",
              },
            },
          ],
        },
        role: "Регулюють перебіг строку, повідомлення, наслідок і zaświadczenie про milczące załatwienie.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 122g",
          parts: [
            {
              text: "art. 122g",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-122g",
              },
            },
          ],
        },
        role: "Підключає відповідно окремі механізми контролю до справ, завершених milcząco.",
      },
    ],
    terms: [
      {
        term: "milcząca zgoda",
        meaning:
          "Варіант, у якому відсутність sprzeciwu у встановлений строк створює передбачений законом позитивний ефект.",
      },
      {
        term: "milczące zakończenie",
        meaning:
          "Варіант завершення справи після спливу строку без klasycznej decyzji.",
      },
      {
        term: "bezczynność",
        meaning:
          "Незавершення справи у належний строк; сама по собі не створює milczącej zgody.",
      },
    ],
    caseExample: {
      title: "Шість місяців без decyzji pobytowej",
      facts:
        "Заявник вважає, що тривале мовчання означає автоматичне надання дозволу.",
      analysis: {
        kind: "authored-legal-text",
        plainText:
          "Шукаємо пряму норму lex specialis про milczące załatwienie саме цього виду справи. Якщо її немає, переходимо до art. 35–37 KPA і спеціальних строків ustawy o cudzoziemcach.",
        parts: [
          {
            text: "Шукаємо пряму норму lex specialis про milczące załatwienie саме цього виду справи. Якщо її немає, переходимо до ",
          },
          {
            text: "art. 35",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-35",
            },
          },
          {
            text: "–",
          },
          {
            text: "37",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-37",
            },
          },
          {
            text: " KPA і спеціальних строків ustawy o cudzoziemcach.",
          },
        ],
      },
      lesson:
        "Спочатку правова підстава milczenia, ніколи — припущення з тривалості очікування.",
    },
    findInText: [
      {
        kind: "authored-legal-text",
        plainText: "Фразу про пряму норму в art. 122a",
        parts: [
          {
            text: "Фразу про пряму норму в ",
          },
          {
            text: "art. 122a",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-122a",
            },
          },
        ],
      },
      "Різницю двох форм milczenia",
      {
        kind: "authored-legal-text",
        plainText: "Правило zaświadczenia в art. 122f",
        parts: [
          {
            text: "Правило zaświadczenia в ",
          },
          {
            text: "art. 122f",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-122f",
            },
          },
        ],
      },
    ],
  },
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
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: moduleContent,
  })

export default kpaSilenceLearningModuleTopic
