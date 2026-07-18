import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")

const moduleContent: KpaGuideModule = {
  id: "initiation",
  order: 6,
  title: "Початок справи і podanie",
  polish: "Wszczęcie, podania i braki formalne",
  articles: kpaLaw.text`${kpaLaw.articleRange("61", "66", { start: "art. 61", end: "66" })} KPA`,
  outcome:
    "Ви розрізняєте brak formalny podania від недостатнього доказу матеріальної умови.",
  layers: {
    beginner: {
      focus:
        "Провадження починається na żądanie strony або z urzędu. Podanie — широка категорія: вимога, пояснення, odwołanie, zażalenie.",
      law: kpaLaw.text`${kpaLaw.article("63", "Art. 63")} визначає способи і мінімальні елементи podania. ${kpaLaw.article("64", "Art. 64")} регулює наслідки браку адреси та інших формальних недоліків.`,
      practice:
        "Завжди відділяйте: чи документ не відповідає формі подання, чи просто ще не доводить одну з умов дозволу.",
      pitfall:
        "Brak formalny і brak materialny мають різну логіку та не повинні автоматично мати однаковий наслідок.",
    },
    practical: {
      focus: kpaLaw.text`Для ${kpaLaw.article("64", "art. 64 § 2")} wezwanie має вказати недолік, строк не коротший ніж 7 днів і наслідок pozostawienia bez rozpoznania.`,
      law: kpaLaw.text`Якщо адреси немає і її не можна встановити, ${kpaLaw.article("64", "art. 64 § 1")} передбачає pozostawienie podania bez rozpoznania; інші вимоги — wezwanie до усунення.`,
      practice:
        "У відповіді вкажіть номер пункту wezwania, що саме виправлено, де доказ і чи потрібне пояснення щодо неможливості подання.",
      pitfall:
        "Не називайте кожну вимогу органу «brakiem formalnym». Докази умов часто належать до postępowania wyjaśniającego.",
    },
    advanced: {
      focus:
        "Дата wszczęcia впливає на строки, застосовну редакцію і перехідні правила; спеціальний закон може пов’язувати її з додатковими діями.",
      law: kpaLaw.text`${kpaLaw.article("61", "Art. 61 § 3")} за загальним правилом пов’язує дату wszczęcia na żądanie strony з днем doręczenia żądania organowi, але lex specialis може модифікувати картину.`,
      practice:
        "Будуйте окремо: дата фізичного/електронного внесення, дата отримання органом, дата усунення формального браку, спеціальна дата wszczęcia.",
      pitfall:
        "Не робіть висновок про легальність перебування лише з процесуальної дати KPA — це питання спеціального закону.",
    },
  },
  method: [
    "Встановіть спосіб wszczęcia",
    kpaLaw.text`Перевірте мінімум ${kpaLaw.article("63", "art. 63")}`,
    "Класифікуйте кожен недолік",
    "Звірте спеціальні вимоги й наслідки",
  ],
  checklist: [
    "Дата внесення доведена",
    "Недоліки класифіковані",
    "Наслідок wezwania прочитаний",
  ],
  questions: [
    {
      prompt: kpaLaw.text`Відсутній доказ стабільного доходу — це завжди brak formalny з ${kpaLaw.article("64", "art. 64")}?`,
      answer:
        "Ні. Часто це питання доведення матеріальної умови. Потрібно перевірити спеціальний закон і точну правову підставу wezwania.",
    },
  ],
  lesson: {
    paragraphs: [
      "Wszczęcie створює процесуальну рамку конкретної справи. Podanie має дозволяти зрозуміти, хто звертається, чого вимагає та як із ним контактувати, але спеціальний закон може додати форму, додатки й особисті дії. Не кожна відсутність документа означає, що справа формально не може рухатися.",
      {
        kind: "authored-legal-text",
        plainText:
          "Brak formalny стосується вимоги до самого podania; brak materialny або dowodowy — того, чи доведено умову бажаного результату. Для art. 64 важливі точне формулювання недоліку, строк і pouczenie про наслідок. Для доказової нестачі потрібна логіка postępowania wyjaśniającego. Перед відповіддю на wezwanie класифікуйте кожен пункт окремо.",
        parts: [
          {
            text: "Brak formalny стосується вимоги до самого podania; brak materialny або dowodowy — того, чи доведено умову бажаного результату. Для ",
          },
          {
            text: "art. 64",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-64",
            },
          },
          {
            text: " важливі точне формулювання недоліку, строк і pouczenie про наслідок. Для доказової нестачі потрібна логіка postępowania wyjaśniającego. Перед відповіддю на wezwanie класифікуйте кожен пункт окремо.",
          },
        ],
      },
    ],
    articles: [
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 61–63",
          parts: [
            {
              text: "art. 61",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-61",
              },
            },
            {
              text: "–",
            },
            {
              text: "63",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-63",
              },
            },
          ],
        },
        role: "Пояснюють способи wszczęcia, загальну дату початку на вимогу та поняття й мінімальну форму podania.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 64",
          parts: [
            {
              text: "art. 64",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-64",
              },
            },
          ],
        },
        role: "Розрізняє відсутність адреси та інші формальні недоліки і пов’язує їх з різними процесуальними діями.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 65–66",
          parts: [
            {
              text: "art. 65",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-65",
              },
            },
            {
              text: "–",
            },
            {
              text: "66",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-66",
              },
            },
          ],
        },
        role: "Регулюють неправильного адресата й ситуацію, коли одне podanie містить справи різної компетенції.",
      },
    ],
    terms: [
      {
        term: "wszczęcie",
        meaning:
          "Юридичний початок конкретного провадження, з яким закон пов’язує подальші обов’язки та строки.",
      },
      {
        term: "brak formalny",
        meaning:
          "Невиконана вимога до допустимої форми або мінімального змісту podania.",
      },
      {
        term: "pozostawienie bez rozpoznania",
        meaning:
          "Процесуальний наслідок, за якого organ не переходить до розгляду вимоги по суті; його підстава має бути законною.",
      },
    ],
    caseExample: {
      title: "Відсутня umowa o pracę",
      facts:
        "Organ назвав відсутність актуальної umowy «brakiem formalnym» і пригрозив pozostawieniem wniosku bez rozpoznania.",
      analysis: {
        kind: "authored-legal-text",
        plainText:
          "Зіставляємо вимогу до форми wniosku в lex specialis з матеріальною умовою та art. 64. Визначаємо, чи це справді дефект podania, чи доказова проблема, яку слід оцінювати по суті.",
        parts: [
          {
            text: "Зіставляємо вимогу до форми wniosku в lex specialis з матеріальною умовою та ",
          },
          {
            text: "art. 64",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-64",
            },
          },
          {
            text: ". Визначаємо, чи це справді дефект podania, чи доказова проблема, яку слід оцінювати по суті.",
          },
        ],
      },
      lesson:
        "Назва в wezwanie не вирішує класифікацію; вирішує правова природа вимоги.",
    },
    findInText: [
      {
        kind: "authored-legal-text",
        plainText: "Дату wszczęcia в art. 61 § 3",
        parts: [
          {
            text: "Дату wszczęcia в ",
          },
          {
            text: "art. 61 § 3",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-61",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Способи внесення і мінімум podania в art. 63",
        parts: [
          {
            text: "Способи внесення і мінімум podania в ",
          },
          {
            text: "art. 63",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-63",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Строк і pouczenie з art. 64 § 2",
        parts: [
          {
            text: "Строк і pouczenie з ",
          },
          {
            text: "art. 64 § 2",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-64",
            },
          },
        ],
      },
    ],
  },
}

export const kpaInitiationLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:initiation",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "initiation",
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

export default kpaInitiationLearningModuleTopic
