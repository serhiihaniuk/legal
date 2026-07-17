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
  lesson: {
    paragraphs: [
      "Decyzja — це юридичний результат справи, тому її читають від sentencji. Саме sentencja говорить, що надано, у чому відмовлено, що припинено і кого це стосується. Uzasadnienie має показати дорогу до результату: встановлені факти, докази, оцінку суперечностей, застосовані норми та subsumpcję.",
      "Postanowienie зазвичай вирішує процесуальне питання в ході справи, але назва документа не звільняє від перевірки його правової природи. Для обох актів окремо перевіряйте doręczenie, pouczenie, доступний засіб, строк і wykonalność. Не змішуйте ostateczność, prawomocność та можливість негайного виконання.",
    ],
    articles: [
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 104–107",
          parts: [
            {
              text: "art. 104",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-104",
              },
            },
            {
              text: "–",
            },
            {
              text: "107",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-107",
              },
            },
          ],
        },
        role: "Визначають роль decyzji, спосіб її формування й обов’язкові елементи, включно з фактичним і правовим uzasadnieniem.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 109–113",
          parts: [
            {
              text: "art. 109",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-109",
              },
            },
            {
              text: "–",
            },
            {
              text: "113",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-113",
              },
            },
          ],
        },
        role: "Регулюють doręczenie, зв’язаність organu рішенням, uzupełnienie, sprostowanie та пояснення сумнівів.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 123–126",
          parts: [
            {
              text: "art. 123",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-123",
              },
            },
            {
              text: "–",
            },
            {
              text: "126",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-126",
              },
            },
          ],
        },
        role: "Створюють базову модель postanowienia і вказують, які правила decyzji застосовуються відповідно.",
      },
    ],
    terms: [
      {
        term: "sentencja",
        meaning:
          "Владна частина акта, що безпосередньо встановлює юридичний результат.",
      },
      {
        term: "uzasadnienie faktyczne",
        meaning:
          "Пояснення встановлених фактів, доказів і причин відмови іншим доказам у силі чи вірогідності.",
      },
      {
        term: "pouczenie",
        meaning:
          "Інформація про доступний засіб, маршрут і строк; її треба перевірити за законом.",
      },
    ],
    caseExample: {
      title: "Відмова через «нестабільну працю»",
      facts:
        "Sentencja відмовляє у дозволі, а uzasadnienie згадує лише одну коротку umowę, ігноруючи продовження та виплати.",
      analysis: {
        kind: "authored-legal-text",
        plainText:
          "Зіставляємо кожну матеріальну умову з висновком organu, актами та art. 107. Фіксуємо пропущені докази й показуємо, як вони змінюють оцінку факту.",
        parts: [
          {
            text: "Зіставляємо кожну матеріальну умову з висновком organu, актами та ",
          },
          {
            text: "art. 107",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-107",
            },
          },
          {
            text: ". Фіксуємо пропущені докази й показуємо, як вони змінюють оцінку факту.",
          },
        ],
      },
      lesson:
        "Odwołanie будується на розриві між sentencją, повним матеріалом і поясненою subsumpcją.",
    },
    findInText: [
      {
        kind: "authored-legal-text",
        plainText: "Види завершення в art. 104",
        parts: [
          {
            text: "Види завершення в ",
          },
          {
            text: "art. 104",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-104",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Усі елементи decyzji в art. 107",
        parts: [
          {
            text: "Усі елементи decyzji в ",
          },
          {
            text: "art. 107",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-107",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Строк uzupełnienia decyzji в art. 111",
        parts: [
          {
            text: "Строк uzupełnienia decyzji в ",
          },
          {
            text: "art. 111",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-111",
            },
          },
        ],
      },
    ],
  },
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
