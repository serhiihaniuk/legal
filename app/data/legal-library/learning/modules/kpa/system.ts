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
    "KPA пояснює порядок розгляду справи. Умови конкретного дозволу встановлює спеціальний закон; його окремі правила можуть також змінювати загальну процедуру.",
  layers: {
    beginner: {
      focus:
        "KPA — це передусім процедура: хто веде справу, як збираються докази, як вручаються письма і як оскаржується рішення.",
      law: kpaLaw.text`${kpaLaw.article("1", "Art. 1")} KPA охоплює індивідуальні справи, які орган вирішує decyzją administracyjną або, якщо спеціальний закон це дозволяє, milcząco.`,
      practice:
        "Коли орган просить документ, виникають два питання: яку умову цей документ має підтвердити та за якими правилами орган його витребує й оцінює. Перше стосується підстави дозволу, друге стосується процедури.",
      pitfall:
        "Не шукайте в KPA відповіді, який саме cel pobytu підходить клієнту. KPA пояснює, як орган має цю справу провести.",
    },
    practical: {
      focus:
        "Працюйте двома колонками: lex specialis — умови й спеціальні правила; KPA — загальна процедура там, де спеціальний закон не встановлює іншого.",
      law: kpaLaw.text`KPA має широкий, але не універсальний обсяг. ${kpaLaw.article("3", "Art. 3")} містить виключення, а спеціальні закони можуть змінювати строки, компетенцію, форму або наслідки дій.`,
      practice:
        "Це розрізнення потрібне під час читання заяви, wezwanie або decyzja: посилання на KPA пояснює процесуальну дію, але саме по собі не встановлює умову дозволу на перебування.",
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
      "Матеріальна умова визначає, що має бути правдою, щоб особа могла отримати конкретний дозвіл. Процесуальне правило визначає, як орган встановлює ці факти та вирішує справу. Тому наявність потрібного документа і виконання умови дозволу не є одним питанням: документ ще треба оцінити як доказ відповідного факту.",
      "У справах про перебування спеціальним законом є ustawa o cudzoziemcach. Він установлює умови окремих дозволів і містить власні процесуальні правила. Якщо спеціальна норма регулює певне питання інакше, загальне правило KPA не можна застосувати без урахування цього відступу. Для інших процесуальних питань значення зберігають відповідні правила KPA.",
      "У самій назві листа зазвичай немає відповіді, яке з цих питань вирішує орган. Це видно зі змісту вимоги та її правової підстави. Наприклад, вимога пояснити суперечність між документами стосується встановлення фактів; умову, для якої ці факти важливі, потрібно шукати в законі про відповідний дозвіл.",
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
          "Спеціальна норма щодо певної справи або питання. У межах свого застосування вона має перевагу перед загальною нормою, якщо регулює те саме питання інакше. Спеціальний закон не скасовує застосування всього KPA.",
      },
      {
        term: "sprawa indywidualna",
        meaning:
          "Справа про права чи обов’язки конкретно визначеної особи, а не абстрактне роз’яснення права.",
      },
      {
        term: "decyzja administracyjna",
        meaning:
          "Рішення, яким адміністративний орган вирішує справу по суті повністю або частково чи іншим чином завершує її в певній інстанції. Воно відрізняється від листа з проханням подати документи.",
      },
    ],
    caseExample: {
      title: "Чому посилання на KPA не пояснює умову дозволу",
      facts:
        "Умовний приклад: у договорі та в іншому поданому документі зазначено різні дати початку роботи. Орган просить пояснити розбіжність. Працівник легалізації бачить у листі посилання на KPA і шукає, який документ вирішує питання.",
      analysis: kpaLaw.text`За ${kpaLaw.article("77", "art. 77 § 1")} KPA орган має зібрати й розглянути доказовий матеріал, а за ${kpaLaw.article("80", "art. 80")} оцінює доведеність обставини на підставі всього матеріалу. Ці правила пояснюють, чому суперечність потребує з'ясування. Вони не визначають, які умови конкретного дозволу пов'язані з початком роботи: це окреме питання до ustawy o cudzoziemcach.`,
      lesson:
        "У цьому прикладі KPA пояснює спосіб установлення факту. Спеціальний закон визначає його значення для дозволу. Сам факт подання пояснення ще не означає, що всі умови дозволу виконано.",
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
      verifiedAt: "2026-09-05",
    },
    body: moduleContent,
  })

export default kpaSystemLearningModuleTopic
