import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")

const moduleContent: KpaGuideModule = {
  id: "files-evidence",
  order: 7,
  title: "Акти і докази",
  polish: "Akta sprawy i postępowanie dowodowe",
  articles: kpaLaw.text`${kpaLaw.articleRange("73", "81a", { start: "art. 73", end: "81a" })} KPA`,
  outcome:
    "Ви будуєте доказову матрицю і перевіряєте, чи орган розглянув матеріал як ціле.",
  layers: {
    beginner: {
      focus: kpaLaw.text`${kpaLaw.article("73", "Art. 73")} дає стороні доступ до akt sprawy. Доказом може бути все, що допомагає з’ясувати справу і не суперечить праву.`,
      law: kpaLaw.text`${kpaLaw.article("75", "Art. 75")} має відкритий каталог доказів; ${kpaLaw.article("77", "art. 77")} зобов’язує organ вичерпно зібрати і розглянути весь матеріал.`,
      practice:
        "Для кожної умови зробіть рядок: умова → факт → документ → період → можливе протиріччя.",
      pitfall:
        "Велика кількість документів не компенсує відсутності доказу саме потрібної умови.",
    },
    practical: {
      focus:
        "Подавайте докази з тезою: який факт підтверджує документ і за який період.",
      law: kpaLaw.text`${kpaLaw.article("78", "Art. 78")} регулює вимоги сторони щодо доказу; ${kpaLaw.article("80", "art. 80")} вимагає оцінки на основі всього матеріалу, а ${kpaLaw.article("81", "art. 81")} — можливості сторони висловитися щодо доказаної обставини.`,
      practice:
        "Перед рішенням замовте доступ до akt, перевірте службові нотатки, відповіді інших органів, пропущені сторінки і дати.",
      pitfall:
        "Не надсилайте документ без пояснення його зв’язку з przesłanką; орган може оцінити його в іншому контексті.",
    },
    advanced: {
      focus: kpaLaw.text`${kpaLaw.article("79a", "Art. 79a")} — процесуальний сигнал про незадоволені залежні від сторони умови в провадженні на її вимогу; він не замінює матеріальну норму.`,
      law: kpaLaw.text`При інформуванні про можливість висловитися organ має в умовах ${kpaLaw.article("79a", "art. 79a")} вказати залежні від сторони przesłanki, які на цей момент не виконані або не доведені і можуть призвести до негативного рішення.`,
      practice: kpaLaw.text`Порівняйте інформацію ${kpaLaw.article("79a", "art. 79a")} з майбутнім uzasadnieniem: чи негативне рішення не спирається на новий, раніше неозвучений дефіцит.`,
      pitfall: kpaLaw.text`${kpaLaw.article("81a", "Art. 81a")} про сумніви щодо фактів має законні винятки; не застосовуйте його автоматично до кожної справи на żądanie.`,
    },
  },
  method: [
    "Розкладіть матеріальну норму на умови",
    "Підберіть доказ до кожної умови",
    "Перевірте суперечності в актах",
    "Сформулюйте wnioski dowodowe",
  ],
  checklist: [
    "Є матриця умов",
    "Переглянуто акти",
    "Кожен доказ має опис факту",
  ],
  questions: [
    {
      prompt: "Чи organ може оцінити один документ ізольовано від решти?",
      answer: kpaLaw.text`${kpaLaw.article("80", "Art. 80")} вимагає оцінки на основі całokształtu materiału dowodowego, тому суттєві зв’язки й суперечності мають бути розглянуті разом.`,
    },
  ],
  lesson: {
    paragraphs: [
      "Postępowanie dowodowe перетворює твердження сторони на встановлені факти. Відкритий каталог доказів означає, що значення має не назва документа, а його здатність підтвердити конкретну обставину. Organ збирає й оцінює матеріал, але сторона повинна активно показувати зв’язок між przesłanką, фактом і доказом.",
      "Akta sprawy — це пам’ять провадження. У них можуть бути документи сторони, відповіді інших установ, службові нотатки, підтвердження doręczeń і невідомі вам суперечності. Перед завершенням справи перевірте акти, а не лише власну папку. Особливо важливо зіставити інформацію про невиконані умови з майбутнім uzasadnieniem негативної decyzji.",
    ],
    articles: [
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 73–74",
          parts: [
            {
              text: "art. 73",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-73",
              },
            },
            {
              text: "–",
            },
            {
              text: "74",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-74",
              },
            },
          ],
        },
        role: "Дають стороні доступ до akt і визначають межі відмови; доступ дозволяє реально контролювати матеріал справи.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 75–81",
          parts: [
            {
              text: "art. 75",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-75",
              },
            },
            {
              text: "–",
            },
            {
              text: "81",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-81",
              },
            },
          ],
        },
        role: "Створюють систему допустимості, збирання, заявлення й оцінки доказів та участі сторони.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 79a–81a",
          parts: [
            {
              text: "art. 79a",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-79a",
              },
            },
            {
              text: "–",
            },
            {
              text: "81a",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-81a",
              },
            },
          ],
        },
        role: "Додають інструменти інформування про недоведені залежні умови та спеціальне правило сумнівів щодо фактів із винятками.",
      },
    ],
    terms: [
      {
        term: "wniosek dowodowy",
        meaning:
          "Прохання провести або долучити конкретний доказ із поясненням факту, який він має встановити.",
      },
      {
        term: "całokształt materiału",
        meaning:
          "Усі релевантні докази та їх взаємні зв’язки, а не вибраний organem один документ.",
      },
      {
        term: "swobodna ocena dowodów",
        meaning:
          "Оцінка за логікою, досвідом і правом, яка не є довільною та повинна бути пояснена.",
      },
    ],
    caseExample: {
      title: "ZUS показує іншу дату праці",
      facts:
        "Umowa вказує початок роботи 1 березня, а дані ZUS — пізнішу дату. Organ бачить суперечність, заявник — ні.",
      analysis:
        "Отримуємо доступ до akt, встановлюємо джерело даних, пояснюємо хронологію і подаємо докази. Вимагаємо оцінки всього матеріалу, а не автоматичного вибору одного запису.",
      lesson:
        "Доступ до akt перетворює припущення про позицію organu на конкретне доказове завдання.",
    },
    findInText: [
      {
        kind: "authored-legal-text",
        plainText: "Обсяг права доступу в art. 73",
        parts: [
          {
            text: "Обсяг права доступу в ",
          },
          {
            text: "art. 73",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-73",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Відкриту формулу доказу в art. 75",
        parts: [
          {
            text: "Відкриту формулу доказу в ",
          },
          {
            text: "art. 75",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-75",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Умови інформації art. 79a",
        parts: [
          {
            text: "Умови інформації ",
          },
          {
            text: "art. 79a",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-79a",
            },
          },
        ],
      },
    ],
  },
}

export const kpaFilesEvidenceLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:files-evidence",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "files-evidence",
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

export default kpaFilesEvidenceLearningModuleTopic
