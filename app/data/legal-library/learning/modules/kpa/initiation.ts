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
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: moduleContent,
  })

export default kpaInitiationLearningModuleTopic
