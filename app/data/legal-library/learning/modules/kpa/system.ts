import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")

const moduleContent: KpaGuideModule = {
  id: "system",
  order: 1,
  title: "Що регулює KPA",
  polish: "Zakres KPA i relacja z ustawą szczególną",
  articles: kpaLaw.text`${kpaLaw.articleRange("1", "5", { start: "art. 1", end: "5" })} KPA`,
  outcome:
    "Ви відрізняєте матеріальну умову дозволу від процесуального правила ведення справи.",
  layers: {
    beginner: {
      focus:
        "KPA — це передусім процедура: хто веде справу, як збираються докази, як вручаються письма і як оскаржується рішення.",
      law: kpaLaw.text`${kpaLaw.article("1", "Art. 1")} KPA охоплює індивідуальні справи, які орган вирішує decyzją administracyjną або, якщо спеціальний закон це дозволяє, milcząco.`,
      practice:
        "У справі про pobyt спочатку знайдіть матеріальні умови в ustawie o cudzoziemcach, а потім накладіть на них процесуальну рамку KPA.",
      pitfall:
        "Не шукайте в KPA відповіді, який саме cel pobytu підходить клієнту. KPA пояснює, як орган має цю справу провести.",
    },
    practical: {
      focus:
        "Працюйте двома колонками: lex specialis — умови й спеціальні правила; KPA — загальна процедура там, де спеціальний закон не встановлює іншого.",
      law: kpaLaw.text`KPA має широкий, але не універсальний обсяг. ${kpaLaw.article("3", "Art. 3")} містить виключення, а спеціальні закони можуть змінювати строки, компетенцію, форму або наслідки дій.`,
      practice:
        "На першій сторінці нотатки запишіть: предмет справи, спеціальний закон, орган, дата wszczęcia, спеціальні відступи від KPA.",
      pitfall:
        "Фраза «zgodnie z KPA» без перевірки ustawy szczególnej часто веде до неправильного строку або неправильного органу.",
    },
    advanced: {
      focus:
        "Читайте KPA системно: zakres → zasady ogólne → конкретний інститут → przepisy szczególne → przepisy przejściowe.",
      law: kpaLaw.text`${kpaLaw.article("5", "Art. 5")} містить легальні визначення, які діють усередині кодексу. Одне слово може мати в KPA вужчий сенс, ніж у звичайній мові.`,
      practice:
        "Для кожного висновку позначайте тип джерела: [USTAWA], [KPA], [WYTYCZNA URZĘDU], [ORZECZNICTWO], [WNIOSEK PRAKTYCZNY].",
      pitfall:
        "Офіційна інструкція на сайті допомагає, але не замінює норми закону і не може створити нової негативної передумови.",
    },
  },
  method: [
    "Назвіть індивідуальну справу і очікувану форму завершення.",
    "Знайдіть закон, який створює право, обов’язок або дозвіл.",
    "Перевірте, які елементи процедури спеціальний закон регулює інакше.",
    "До решти процесуальних питань застосуйте відповідний інститут KPA.",
  ],
  checklist: [
    "Визначено lex specialis",
    "Перевірено відступи від KPA",
    "Відділено матеріальну умову від процедури",
  ],
  questions: [
    {
      prompt:
        "Де шукати умову доходу для конкретного виду pobytu — у KPA чи в ustawie o cudzoziemcach?",
      answer:
        "У спеціальному законі. KPA допоможе встановити, як орган має зібрати, оцінити й обговорити докази цієї умови.",
    },
  ],
  lesson: {
    paragraphs: [
      "KPA не відповідає на питання, чи іноземець виконує матеріальні умови конкретного дозволу. Кодекс організовує шлях до відповіді: визначає процесуальні ролі, спосіб подання, участь сторони, збір доказів, форму завершення та засоби захисту. Тому в одній справі одночасно працюють щонайменше два шари: ustawa o cudzoziemcach описує право на статус, а KPA — стандарт роботи organu над індивідуальною справою.",
      "Починайте не з випадкової статті KPA, а з предмета справи. Далі знайдіть lex specialis і відмітьте, що він регулює сам: właściwość, спеціальний строк, особисту явку, перелік умов або особливий наслідок. Лише після цього заповнюйте прогалини KPA. Така послідовність захищає від помилки, коли правильне загальне правило застосовують там, де спеціальний закон встановив інше.",
    ],
    articles: [
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 1–2",
          parts: [
            {
              text: "art. 1",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-1",
              },
            },
            {
              text: "–",
            },
            {
              text: "2",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-2",
              },
            },
          ],
        },
        role: "Окреслюють види справ і процедур, які кодекс регулює; це вхідна перевірка, чи ми взагалі перебуваємо в полі KPA.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 3–4",
          parts: [
            {
              text: "art. 3",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-3",
              },
            },
            {
              text: "–",
            },
            {
              text: "4",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-4",
              },
            },
          ],
        },
        role: "Показують виключення та межі застосування. Вчать не вважати KPA універсальним для будь-якого контакту з адміністрацією.",
      },
      {
        reference: {
          kind: "authored-legal-text",
          plainText: "art. 5",
          parts: [
            {
              text: "art. 5",
              target: {
                kind: "legal-provision",
                documentId: "kpa",
                provisionId: "kpa-art-5",
              },
            },
          ],
        },
        role: "Містить дефініції для читання кодексу. Перед складним висновком перевірте, чи термін має спеціальне кодексне значення.",
      },
    ],
    terms: [
      {
        term: "lex specialis",
        meaning:
          "Спеціальний закон, який для конкретної справи може доповнювати або змінювати загальну модель KPA.",
      },
      {
        term: "sprawa indywidualna",
        meaning:
          "Справа про права чи обов’язки конкретно визначеної особи, а не абстрактне роз’яснення права.",
      },
      {
        term: "decyzja administracyjna",
        meaning:
          "Владний акт, яким organ у передбаченій законом формі вирішує індивідуальну справу.",
      },
    ],
    caseExample: {
      title: "Wniosek o pobyt czasowy i pracę",
      facts:
        "Заявник подав wniosek і хоче знати, які документи підтверджують умови та як organ має реагувати на їх нестачу.",
      analysis:
        "Умови дозволу шукаємо в ustawie o cudzoziemcach. У KPA перевіряємо podanie, wezwanie, dowody, czynny udział, decyzję та odwołanie; окремо відмічаємо спеціальні відступи.",
      lesson:
        "Одна справа потребує паралельного читання двох законів, а не вибору лише одного з них.",
    },
    findInText: [
      {
        kind: "authored-legal-text",
        plainText: "Повний перелік процедур в art. 1",
        parts: [
          {
            text: "Повний перелік процедур в ",
          },
          {
            text: "art. 1",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-1",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Виключення з art. 3",
        parts: [
          {
            text: "Виключення з ",
          },
          {
            text: "art. 3",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-3",
            },
          },
        ],
      },
      {
        kind: "authored-legal-text",
        plainText: "Визначення organu administracji publicznej в art. 5",
        parts: [
          {
            text: "Визначення organu administracji publicznej в ",
          },
          {
            text: "art. 5",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-5",
            },
          },
        ],
      },
    ],
  },
}

export const kpaSystemLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:system",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "system",
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

export default kpaSystemLearningModuleTopic
