import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")
const ppsaLaw = createLegalTextAuthor("ppsa")

const moduleContent: KpaGuideModule = {
  id: "court",
  order: 15,
  title: "Наступний рівень: WSA",
  polish: "Skarga do wojewódzkiego sądu administracyjnego",
  articles: kpaLaw.text`${ppsaLaw.article("3", "art. 3")}, ${ppsaLaw.articleRange("52", "54", { start: "52", end: "54" })} p.p.s.a.`,
  outcome:
    "Ви розумієте, коли справа переходить з адміністративної інстанції до контролю судом.",
  layers: {
    beginner: {
      focus:
        "WSA контролює законність діяльності адміністрації. Це не третя адміністративна інстанція, яка просто веде справу замість organu.",
      law: "P.p.s.a. визначає предмет судового контролю; за загальним правилом перед skargą треба вичерпати доступні środki zaskarżenia.",
      practice:
        "Після decyzji другої інстанції окремо відкрийте p.p.s.a. і pouczenie; не рахуйте судовий строк за звичкою з KPA.",
      pitfall:
        "Odwołanie і skarga do WSA — різні засоби, різні адресати та різні ролі.",
    },
    practical: {
      focus:
        "За загальним правилом skargę на decyzję вносять протягом 30 днів від дня вручення рішення (doręczenie rozstrzygnięcia) через organ, дії якого оскаржуються.",
      law: kpaLaw.text`Цей маршрут випливає з ${ppsaLaw.article("53", "art. 53 § 1")} і ${ppsaLaw.article("54", "art. 54 § 1")} p.p.s.a.; допустимість треба перевірити для конкретного акта.`,
      practice:
        "Зберіть: обидві decyzje, odwołanie, докази doręczeń, повний індекс актів і список процесуальних порушень із впливом.",
      pitfall:
        "Подання skargi не завжди автоматично зупиняє виконання; питання wstrzymania має окремі правила.",
    },
    advanced: {
      focus:
        "Skarga на decyzję, skarga na bezczynność/przewlekłość і sprzeciw від decyzji kasacyjnej — різні судові доріжки.",
      law: kpaLaw.text`${ppsaLaw.article("3", "Art. 3")} p.p.s.a. окреслює форми контролю; ${ppsaLaw.articleRange("52", "54", { start: "art. 52", end: "54" })} — передумови, строки та маршрут. Спеціальні правила можуть змінювати модель.`,
      practice:
        "Сформулюйте, яку норму materialną або procesową порушено, як саме і чому це могло вплинути на wynik sprawy.",
      pitfall:
        "Судова скарга не повинна бути копією odwołania без адаптації до контролю законності остаточного акта.",
    },
  },
  method: [
    "Встановіть предмет skargi",
    "Перевірте вичерпання засобів",
    "Порахуйте судовий строк",
    "Подайте через належний organ і сформулюйте порушення",
  ],
  checklist: [
    "Адміністративний шлях перевірено",
    "Строк WSA окремо пораховано",
    "Є доказ doręczenia",
  ],
  questions: [
    {
      prompt: "Чи WSA є просто третьою інстанцією після organu II instancji?",
      answer:
        "Ні. WSA здійснює судовий контроль законності у межах p.p.s.a.; його роль і можливі рішення (rozstrzygnięcia) відрізняються від адміністративного odwołania.",
    },
  ],
  lesson: {
    paragraphs: [
      "WSA не веде справу про pobyt замість wojewody і не є третьою адміністративною інстанцією. Суд контролює законність остаточного акта або бездіяльності в межах p.p.s.a. Тому skarga повинна показувати порушення права та його вплив, а не лише повторювати прохання надати дозвіл.",
      "Перед skargą визначте її предмет: decyzja, bezczynność/przewlekłość чи інший акт. Перевірте вичерпання адміністративних засобів, окремий судовий строк і маршрут через organ. Зберіть повний пакет aktów, odwołanie, doręczenia та список норм. Питання wstrzymania виконання аналізуйте окремо — саме внесення skargi не завжди дає такий ефект.",
    ],
    articles: [
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 3 p.p.s.a.",
          parts: [
            {
              text: "art. 3",
              target: {
                kind: "legal-provision",
                documentId: "ppsa",
                provisionId: "ppsa-art-3",
              },
            },
            {
              text: " p.p.s.a.",
            },
          ],
        },
        role: "Окреслює предмети судового контролю, включно з decyzjami та бездіяльністю у визначених законом випадках.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 52 p.p.s.a.",
          parts: [
            {
              text: "art. 52",
              target: {
                kind: "legal-provision",
                documentId: "ppsa",
                provisionId: "ppsa-art-52",
              },
            },
            {
              text: " p.p.s.a.",
            },
          ],
        },
        role: "Встановлює загальну передумову вичерпання доступних адміністративних засобів перед skargą.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 53–54 p.p.s.a.",
          parts: [
            {
              text: "art. 53",
              target: {
                kind: "legal-provision",
                documentId: "ppsa",
                provisionId: "ppsa-art-53",
              },
            },
            {
              text: "–",
            },
            {
              text: "54",
              target: {
                kind: "legal-provision",
                documentId: "ppsa",
                provisionId: "ppsa-art-54",
              },
            },
            {
              text: " p.p.s.a.",
            },
          ],
        },
        role: "Регулюють строки та внесення skargi за посередництвом organu, діяльність якого оскаржується.",
      },
    ],
    terms: [
      {
        term: "kontrola legalności",
        meaning:
          "Перевірка відповідності дій адміністрації матеріальному й процесуальному праву.",
      },
      {
        term: "wyczerpanie środków zaskarżenia",
        meaning:
          "Використання доступного адміністративного засобу, після якого відкривається судова дорога за правилами p.p.s.a.",
      },
      {
        term: "skarga",
        meaning:
          "Процесуальне звернення до суду з визначеним предметом, вимогами, строком і формою.",
      },
    ],
    caseExample: {
      title: "Decyzja II instancji підтримала відмову",
      facts:
        "Organ odwoławczy не відповів на ключовий zarzut щодо пропущеного доказу й utrzymał decyzję w mocy.",
      analysis:
        "Рахуємо судовий строк від doręczenia ostatecznej decyzji, подаємо skargę через organ і показуємо порушення норм доказування, uzasadnienia та інстанційного контролю.",
      lesson:
        "Skarga адаптує помилки справи до судового контролю законності; вона не є копією odwołania.",
    },
    findInText: [
      {
        kind: "authored-legal-text",
        plainText: "Каталог контролю art. 3 p.p.s.a.",
        parts: [
          {
            text: "Каталог контролю ",
          },
          {
            text: "art. 3",
            target: {
              kind: "legal-provision",
              documentId: "ppsa",
              provisionId: "ppsa-art-3",
            },
          },
          {
            text: " p.p.s.a.",
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Передумови art. 52 p.p.s.a.",
        parts: [
          {
            text: "Передумови ",
          },
          {
            text: "art. 52 p.p.s.a.",
            target: {
              kind: "legal-provision",
              documentId: "ppsa",
              provisionId: "ppsa-art-52",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText:
          "30-денний строк і маршрут art. 53–54 p.p.s.a. для skargi na decyzję",
        parts: [
          {
            text: "30-денний строк і маршрут ",
          },
          {
            text: "art. 53",
            target: {
              kind: "legal-provision",
              documentId: "ppsa",
              provisionId: "ppsa-art-53",
            },
          },
          {
            text: "–",
          },
          {
            text: "54",
            target: {
              kind: "legal-provision",
              documentId: "ppsa",
              provisionId: "ppsa-art-54",
            },
          },
          {
            text: " p.p.s.a. для skargi na decyzję",
          },
        ],
      },
    ],
  },
}

export const kpaCourtLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:court",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "court",
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
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: moduleContent,
  })

export default kpaCourtLearningModuleTopic
