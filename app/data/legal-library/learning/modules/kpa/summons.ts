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
    "Wezwanie повідомляє, якої дії орган очікує у справі. Назва листа ще не пояснює, чи йдеться про формальний недолік заяви, докази або особисту участь.",
  layers: {
    beginner: {
      focus:
        "Wezwanie є процесуальним документом із конкретною вимогою. Воно може стосуватися пояснень, документів або участі в певній дії та саме по собі не є рішенням про відмову.",
      law: kpaLaw.text`${kpaLaw.article("50", "Art. 50")} дозволяє викликати до участі, пояснень або показань; ${kpaLaw.article("54", "art. 54")} перелічує елементи wezwania.`,
      practice:
        "Однакова назва wezwanie трапляється в різних ситуаціях. Їх розрізняє зміст: що саме треба зробити, навіщо, у який строк і який наслідок орган пов'язує з невиконанням.",
      pitfall:
        "Не відповідайте одним пакетом без нумерації — легко пропустити один пункт або не пояснити відсутній документ.",
    },
    practical: {
      focus:
        "Класифікуйте кожен пункт як: formalny, dowodowy, osobista czynność, informacyjny або сумнівний за підставою.",
      law: kpaLaw.text`${kpaLaw.article("54", "Art. 54")} вимагає, зокрема, назву й адресу органу, дані викликаного, справу, мету, форму/строк і pouczenie про наслідки невиконання.`,
      practice:
        "Це пояснення допомагає прочитати вимогу органу до того, як збирати документи або готувати відповідь. Особливо важливо відрізнити вимогу виправити заяву від вимоги довести певний факт.",
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
      kpaLaw.text`Brak formalny означає, що заява не відповідає вимозі, установленій для неї законом. За загальним правилом ${kpaLaw.article("64", "art. 64 § 2")} KPA орган вимагає усунути такий недолік і попереджає про pozostawienie podania bez rozpoznania, тобто залишення заяви без розгляду. Тут питання стосується належного оформлення заяви, а не оцінки права на дозвіл по суті. Для конкретної процедури потрібно також врахувати її спеціальні правила.`,
      kpaLaw.text`Вимога надати доказ стосується іншого питання: чи підтверджено факт, від якого залежить рішення. За ${kpaLaw.article("77", "art. 77 § 1")} та ${kpaLaw.article("80", "art. 80")} KPA орган збирає й оцінює весь доказовий матеріал. Відсутність одного документа не можна автоматично назвати формальним недоліком. Значення має вимога закону, факт, який треба встановити, та інші наявні докази.`,
      kpaLaw.text`${kpaLaw.article("54", "Art. 54")} KPA пояснює, що має бути в самому wezwanie: орган, адресат, справа, роль особи й мета виклику, спосіб виконання, строк або дата явки, наслідки невиконання та належний підпис. Посилання на цю статтю допомагає перевірити зміст листа. Воно не замінює норми, з якої випливає конкретна вимога до заяви або умова дозволу.`,
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
          "Наслідок, про який орган попереджає в разі невиконання вимоги. Його зміст має спиратися на закон; саме слово rygor не пояснює, чи йдеться про залишення заяви без розгляду, штраф або інший наслідок.",
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
      title: "Підпис заяви та пояснення різних дат",
      facts:
        "Два умовні приклади для загальної процедури KPA. У першому листі орган просить підписати паперову заяву та попереджає про залишення її без розгляду. У другому він просить пояснити, чому два подані документи містять різні дати початку роботи. Це переказ вигаданих ситуацій, а не зразок офіційного листа.",
      analysis: kpaLaw.text`У першій ситуації підпис є вимогою до паперової заяви за ${kpaLaw.article("63", "art. 63 § 3")}, а ${kpaLaw.article("64", "art. 64 § 2")} KPA пояснює спосіб усунення недоліку та наслідок його неусунення. У другій ситуації заява може бути належно оформлена, але дата залишається нез’ясованою. Тут пояснення потрібне для оцінки доказів. Однакова назва листа не робить ці вимоги однаковими за правовою природою.`,
      lesson:
        "Різницю визначає те, що орган перевіряє: вимогу до самої заяви чи факт, важливий для рішення. Із цієї різниці випливає значення відповіді та наслідок невиконання; одна назва wezwanie їх не встановлює.",
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
      verifiedAt: "2026-09-05",
    },
    body: moduleContent,
  })

export default kpaSummonsLearningModuleTopic
