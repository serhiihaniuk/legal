import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")

const moduleContent: KpaGuideModule = {
  id: "summons",
  order: 9,
  title: "Як читати wezwanie",
  polish: "Wezwania do czynności, wyjaśnień i dokumentów",
  articles: kpaLaw.text`${kpaLaw.articleRange("50", "56", { start: "art. 50", end: "56" })} KPA + правова підстава конкретної вимоги`,
  outcome:
    "Ви розбираєте wezwanie пункт за пунктом: компетенція, дія, строк, форма, наслідок і зв’язок з умовою.",
  layers: {
    beginner: {
      focus:
        "Wezwanie — це процесуальне письмо з конкретною вимогою. Воно не є автоматично відмовою і не кожне wezwanie стосується braków formalnych.",
      law: kpaLaw.text`${kpaLaw.article("50", "Art. 50")} дозволяє викликати до участі, пояснень або показань; ${kpaLaw.article("54", "art. 54")} перелічує елементи wezwania.`,
      practice:
        "Виділіть маркером: хто викликає, кого, у якій справі, для чого, до коли, як виконати, наслідки невиконання.",
      pitfall:
        "Не відповідайте одним пакетом без нумерації — легко пропустити один пункт або не пояснити відсутній документ.",
    },
    practical: {
      focus:
        "Класифікуйте кожен пункт як: formalny, dowodowy, osobista czynność, informacyjny або сумнівний за підставою.",
      law: kpaLaw.text`${kpaLaw.article("54", "Art. 54")} вимагає, зокрема, назву й адресу органу, дані викликаного, справу, мету, форму/строк і pouczenie про наслідки невиконання.`,
      practice:
        "Створіть таблицю відповіді: № wezwania → вимога → правова умова → додаток → пояснення → ризик.",
      pitfall:
        "Документ може бути релевантним, але вимога надмірно широкою. Спочатку зрозумійте факт, який organ намагається встановити.",
    },
    advanced: {
      focus:
        "Перевірте пропорційність, конкретність, правову основу і те, чи може organ отримати інформацію самостійно.",
      law: kpaLaw.text`${kpaLaw.article("50", "Art. 50 § 1")} пов’язує wezwanie з необхідністю для вирішення справи (rozstrzygnięcie sprawy) або виконання службової дії (czynność urzędowa); засади ${kpaLaw.article("8", "art. 8")} і 12 допомагають оцінити адекватність способу.`,
      practice:
        "Якщо виконати неможливо, не мовчіть: до строку подайте доказану причину, альтернативний доказ і чітке клопотання.",
      pitfall:
        "Сумнів у законності вимоги сам по собі не зупиняє строк і не гарантує відсутності негативного наслідку.",
    },
  },
  method: [
    "Зафіксуйте doręczenie",
    "Розкладіть wezwanie на пункти",
    "Знайдіть мету кожної вимоги",
    "Складіть індекс додатків і перевірте комплектність",
  ],
  checklist: [
    "Кожен пункт має відповідь",
    "Вказано номер додатка",
    "Неможливість виконання пояснена до строку",
  ],
  questions: [
    {
      prompt: "Чи кожне wezwanie означає, що wniosek був формально неповний?",
      answer:
        "Ні. Wezwanie може стосуватися доказів, пояснень, особистої дії або іншої процесуальної потреби. Правову природу треба встановити з підстави і змісту.",
    },
  ],
  lesson: {
    paragraphs: [
      "Wezwanie організовує конкретну процесуальну дію: явку, пояснення, показання або подання матеріалу. Воно повинно дозволяти адресатові зрозуміти, хто звертається, у якій справі, що саме треба зробити, коли, яким способом і з яким наслідком. Але правова підстава самого wezwania не завжди є підставою матеріальної вимоги документа.",
      "Розбирайте wezwanie як таблицю, а не як суцільний лист. Для кожного пункту встановіть тип вимоги, факт, який organ хоче довести, норму цієї умови, доступний документ і ризик невиконання. Якщо документа немає, до строку поясніть причину, запропонуйте альтернативний доказ і сформулюйте чітке клопотання; мовчання залишає organ лише з неповним матеріалом.",
    ],
    articles: [
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 50–53",
          parts: [
            {
              text: "art. 50",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-50",
              },
            },
            {
              text: "–",
            },
            {
              text: "53",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-53",
              },
            },
          ],
        },
        role: "Визначають мету wezwania, територіальні обмеження особистої явки та способи участі.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 54",
          parts: [
            {
              text: "art. 54",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-54",
              },
            },
          ],
        },
        role: "Містить карту обов’язкових елементів wezwania; це головна карта перевірки для першого читання.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 55–56",
          parts: [
            {
              text: "art. 55",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-55",
              },
            },
            {
              text: "–",
            },
            {
              text: "56",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-56",
              },
            },
          ],
        },
        role: "Регулюють невідкладні wezwania та витрати особи, яка виконала виклик.",
      },
    ],
    terms: [
      {
        term: "rygor",
        meaning:
          "Заздалегідь названий процесуальний наслідок невиконання вимоги; він має спиратися на закон.",
      },
      {
        term: "osobiste stawiennictwo",
        meaning:
          "Обов’язок особисто з’явитися, який не слід припускати, якщо мети можна досягти інакше або закон не вимагає особистої дії.",
      },
      {
        term: "wyjaśnienia",
        meaning:
          "Позиція або інформація учасника; її роль відрізняється від документа чи zeznania świadka.",
      },
    ],
    caseExample: {
      title: "Вимога 18 різних документів",
      facts:
        "Wezwanie містить довгий перелік без пояснення, які умови підтверджують окремі позиції.",
      analysis: {
        kind: "authored-legal-text",
        plainText:
          "Нумеруємо вимоги, знаходимо їх матеріальну мету, перевіряємо art. 54 і пропорційність. Відповідаємо індексом; для надмірно широких або неможливих пунктів даємо мотивовану позицію й альтернативу.",
        parts: [
          {
            text: "Нумеруємо вимоги, знаходимо їх матеріальну мету, перевіряємо ",
          },
          {
            text: "art. 54",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-54",
            },
          },
          {
            text: " і пропорційність. Відповідаємо індексом; для надмірно широких або неможливих пунктів даємо мотивовану позицію й альтернативу.",
          },
        ],
      },
      lesson:
        "Комплектна відповідь — це карта вимог і доказів, а не просто великий PDF.",
    },
    findInText: [
      {
        kind: "authored-legal-text",
        plainText: "Критерій необхідності в art. 50",
        parts: [
          {
            text: "Критерій необхідності в ",
          },
          {
            text: "art. 50",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-50",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Можливість письмової/електронної дії в art. 50 § 1",
        parts: [
          {
            text: "Можливість письмової/електронної дії в ",
          },
          {
            text: "art. 50 § 1",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-50",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Повний перелік art. 54",
        parts: [
          {
            text: "Повний перелік ",
          },
          {
            text: "art. 54",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-54",
            },
          },
        ],
      },
    ],
  },
}

export const kpaSummonsLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:summons",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "summons",
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

export default kpaSummonsLearningModuleTopic
