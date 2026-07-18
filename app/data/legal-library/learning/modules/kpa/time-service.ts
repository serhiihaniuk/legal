import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")

const moduleContent: KpaGuideModule = {
  id: "time-service",
  order: 8,
  title: "Строки і вручення",
  polish: "Terminy, doręczenia i przywrócenie terminu",
  articles: kpaLaw.text`${kpaLaw.articleRange("35", "49b", { start: "art. 35", end: "49b" })}, ${kpaLaw.articleRange("57", "60", { start: "art. 57", end: "60" })} KPA`,
  outcome:
    "Ви рахуєте строк від юридично значущого вручення і не змішуєте строк органу зі строком сторони.",
  layers: {
    beginner: {
      focus:
        "Строк органу на ведення справи і строк сторони на дію — різні годинники. Doręczenie часто запускає саме годинник сторони.",
      law: kpaLaw.text`${kpaLaw.article("35", "Art. 35")} вимагає дії без зайвої затримки й встановлює загальні строки; ${kpaLaw.article("36", "art. 36")} — повідомлення про затримку, причину, новий строк і право на ponaglenie.`,
      practice:
        "Ведіть реєстр: документ, спосіб вручення, дата фактичного/правового вручення, початок, кінець, виконана дія.",
      pitfall:
        "Дата на самому письмі зазвичай не дорівнює даті початку вашого строку.",
    },
    practical: {
      focus: kpaLaw.text`За ${kpaLaw.article("57", "art. 57")} день події не входить до строку в днях; субота або ustawowo wolny dzień переносить кінець на наступний робочий день.`,
      law: kpaLaw.text`${kpaLaw.article("40", "Art. 40")} визначає адресата при представництві, ${kpaLaw.article("41", "art. 41")} — обов’язок повідомляти про зміну адреси та можливий наслідок попереднього вручення.`,
      practice:
        "Зберігайте конверт, awizo, UPO та скриньку e-Doręczeń; без доказу вручення неможливо надійно порахувати строк.",
      pitfall:
        "Електронна доставка має власну юридичну механіку. Не переносіть інтуїтивно правила паперового awizo на електронне повідомлення.",
    },
    advanced: {
      focus:
        "Przywrócenie terminu не є продовженням строку: треба uprawdopodobnić brak winy, діяти протягом 7 днів від припинення перешкоди і одночасно виконати пропущену дію.",
      law: kpaLaw.text`Ці умови випливають з ${kpaLaw.article("58", "art. 58")}; ${kpaLaw.article("59", "art. 59")} визначає орган, який вирішує клопотання.`,
      practice:
        "До клопотання додайте хронологію перешкоди, докази, дату її припинення і сам документ, строк якого пропущено.",
      pitfall:
        "Завантаженість, незнання права або пізнє прочитання правильно врученого письма не автоматично доводять brak winy.",
    },
  },
  method: [
    "Встановіть подію, що запускає строк",
    "Підтвердьте doręczenie",
    kpaLaw.text`Застосуйте ${kpaLaw.article("57", "art. 57")} крок за кроком`,
    "Перевірте lex specialis і спосіб внесення",
  ],
  checklist: [
    "Є доказ вручення",
    "День події не пораховано",
    "Перевірено суботу/свято",
  ],
  questions: [
    {
      prompt:
        "Письмо датоване 2 липня, але вручено 8 липня. Від якої дати зазвичай рахуємо строк на odwołanie?",
      answer:
        "Від юридично значущого doręczenia/ogłoszenia, тобто не автоматично від дати створення письма. Точний початок перевіряємо за правилами вручення.",
    },
  ],
  lesson: {
    paragraphs: [
      "У процедурі працюють різні строки: орган має строк для вирішення справи (termin załatwienia sprawy), а сторона — строк на відповідь, odwołanie чи іншу дію. Обидва можуть залежати від подій, які не видно з дати на документі. Doręczenie — окремий юридичний інститут, тому спочатку встановлюють його адресата, спосіб і дату, а лише потім рахують.",
      {
        kind: "authored-legal-text",
        plainText:
          "Строк у днях рахуйте механічно за art. 57: не включайте день події, перевірте останній день і спосіб своєчасного внесення. Якщо строк уже пропущено, не називайте прохання «продовженням». Przywrócenie terminu потребує brak winy, короткого строку реакції після припинення перешкоди та одночасного виконання пропущеної дії.",
        parts: [
          {
            text: "Строк у днях рахуйте механічно за ",
          },
          {
            text: "art. 57",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-57",
            },
          },
          {
            text: ": не включайте день події, перевірте останній день і спосіб своєчасного внесення. Якщо строк уже пропущено, не називайте прохання «продовженням». Przywrócenie terminu потребує brak winy, короткого строку реакції після припинення перешкоди та одночасного виконання пропущеної дії.",
          },
        ],
      },
    ],
    articles: [
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 35–38",
          parts: [
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
              text: "38",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-38",
              },
            },
          ],
        },
        role: "Регулюють швидкість organu, строки, повідомлення про затримку та реакцію на bezczynność/przewlekłość.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 39–49b",
          parts: [
            {
              text: "art. 39",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-39",
              },
            },
            {
              text: "–",
            },
            {
              text: "49b",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-49b",
              },
            },
          ],
        },
        role: "Створюють систему паперових та електронних doręczeń і юридичних наслідків різних способів.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 57–60",
          parts: [
            {
              text: "art. 57",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-57",
              },
            },
            {
              text: "–",
            },
            {
              text: "60",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-60",
              },
            },
          ],
        },
        role: "Пояснюють обчислення, збереження і відновлення процесуальних строків.",
      },
    ],
    terms: [
      {
        term: "doręczenie",
        meaning:
          "Врегульоване законом доведення письма до адресата, з яким пов’язуються процесуальні наслідки.",
      },
      {
        term: "uchybienie terminu",
        meaning: "Виконання дії після спливу процесуального строку.",
      },
      {
        term: "przywrócenie terminu",
        meaning: {
          kind: "authored-legal-text",
          plainText:
            "Виняткове відновлення можливості дії за сукупності умов art. 58, а не звичайне продовження.",
          parts: [
            {
              text: "Виняткове відновлення можливості дії за сукупності умов ",
            },
            {
              text: "art. 58",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-58",
              },
            },
            {
              text: ", а не звичайне продовження.",
            },
          ],
        },
      },
    ],
    caseExample: {
      title: "Awizo під час госпіталізації",
      facts:
        "Письмо вважалося врученим після awizo, а заявник перебував у лікарні та пропустив строк odwołania.",
      analysis:
        "Перевіряємо правильність адреси й процедури doręczenia, точні дати перешкоди та її припинення. Разом із prośbą o przywrócenie подаємо odwołanie і докази brak winy.",
      lesson: {
        kind: "authored-legal-text",
        plainText:
          "Хронологія та одночасне виконання пропущеної дії критичні для art. 58.",
        parts: [
          {
            text: "Хронологія та одночасне виконання пропущеної дії критичні для ",
          },
          {
            text: "art. 58",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-58",
            },
          },
          {
            text: ".",
          },
        ],
      },
    },
    findInText: [
      {
        kind: "authored-legal-text",
        plainText: "Періоди, що не входять у строк organu в art. 35 § 5",
        parts: [
          {
            text: "Періоди, що не входять у строк organu в ",
          },
          {
            text: "art. 35 § 5",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-35",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Обов’язок зміни адреси в art. 41",
        parts: [
          {
            text: "Обов’язок зміни адреси в ",
          },
          {
            text: "art. 41",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-41",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Усі умови art. 58",
        parts: [
          {
            text: "Усі умови ",
          },
          {
            text: "art. 58",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-58",
            },
          },
        ],
      },
    ],
  },
}

export const kpaTimeServiceLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:time-service",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "time-service",
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

export default kpaTimeServiceLearningModuleTopic
