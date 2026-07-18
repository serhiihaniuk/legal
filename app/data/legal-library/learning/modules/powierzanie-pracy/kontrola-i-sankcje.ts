import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")

const moduleContent: LegalLearningModule = {
  id: "kontrola-i-sankcje",
  order: 6,
  title: "Контроль і санкції",
  polish: "kontrola; nielegalne powierzenie pracy; odpowiedzialność; sankcje",
  provisionScope: workLaw.text`${workLaw.article("2")}, ${workLaw.articleRange("4", "5")}, ${workLaw.article("5a")}, ${workLaw.articleRange("17", "20", { start: "17" })}, ${workLaw.article("59")}, ${workLaw.articleRange("68", "70", { start: "68" })}, ${workLaw.articleRange("73", "77", { start: "73" })}, ${workLaw.articleRange("84", "86", { start: "84" })}`,
  outcome:
    "Відрізняє незаконне доручення роботи від незаконного виконання роботи, пов’язує факт із конкретним складом проступку й не визначає санкцію до завершення правової кваліфікації.",
  caseQuestion:
    "Які факти можуть показати порушення і які наслідки треба перевіряти за актом та іншими законами?",
  placeInWork:
    "Фінальний контроль якості: перевірка всього правового ланцюга та підготовка доказів на випадок контролю.",
  sections: [
    {
      id: "two-violations",
      title: "Розділити дії суб’єкта та іноземця",
      paragraphs: [
        workLaw.text`${workLaw.article("2")} окремо визначає незаконне доручення роботи іноземцеві («nielegalne powierzenie pracy cudzoziemcowi») та незаконне виконання роботи іноземцем («nielegalne wykonywanie pracy przez cudzoziemca»). Для суб’єкта значення можуть мати незаконне перебування, підстава перебування без права працювати, відсутність потрібного документа, робота всупереч його умовам або, за передбачених законом обставин, відсутність письмового договору. Дії іноземця оцінюють за окремим визначенням.`,
        "В одній ситуації можуть поєднуватися різні порушення. Наприклад, належний документ про право на роботу не усуває окремого обов’язку передати договір органу, подати повідомлення або виплатити належну винагороду. Тому кожну дію пов’язують із конкретною особою, датою та нормою.",
      ],
      questions: [
        "Хто допустив роботу і хто її фактично виконував?",
        "Яка саме ланка не підтверджена документами або фактами?",
      ],
      steps: [
        "Зафіксувати факт роботи та її період.",
        "Порівняти підставу перебування, право на роботу та фактичні умови.",
        "Розділити можливі порушення за особами та ролями.",
      ],
      evidence: [
        "Документи про перебування і право на роботу",
        "Договір, графіки та підтвердження виплат",
        "Пояснення учасників і фактичні інструкції",
      ],
      warning:
        "Наявність одного правильного документа не доводить відсутність усіх інших порушень.",
    },
    {
      id: "consequences",
      title: "Наслідок залежить від факту",
      paragraphs: [
        workLaw.text`${workLaw.article("84")} містить окремі склади проступків («wykroczenia») і різні межі штрафу («grzywna»): від незаконного доручення роботи та вимагання майнової вигоди до невиконання конкретного обов’язку подати повідомлення або передати договір. ${workLaw.article("85")} не визначає орган контролю. Вона встановлює вузький виняток із відповідальності за частиною 1 статті 84, якщо роботодавець виконав названі там обов’язки щодо документа перебування та соціального страхування і не знав про підроблення документа.`,
        workLaw.text`${workLaw.article("86")} визначає призначення стягнутих штрафів і відсилає провадження до польського «Kodeks postępowania w sprawach o wykroczenia». Компетенцію контрольного органу треба встановлювати за окремими приписами; її не можна виводити зі статей 85–86. Дані з реєстрів, про які йдеться у ${workLaw.articleRange("73", "77")}, можуть допомагати перевірці, але сам запис у системі ще не доводить усіх елементів проступку.`,
      ],
      questions: [
        "Який орган і який вид провадження може бути компетентним?",
        "Які факти та документи підтверджують склад можливого порушення?",
      ],
      steps: [
        "Описати факт, період, особу й джерело доказу без передчасної оцінки.",
        "Зіставити факт із конкретною частиною статті 84 та перевірити всі її елементи.",
        "Відокремити штраф за цим законом від можливих наслідків за іншими актами.",
      ],
      evidence: [
        "Акт контролю або запит",
        "Повний комплект кадрових документів",
        "Хронологія подій і пояснення",
      ],
      warning:
        "Не переносіть одну помилку на всі санкції зі статті 84. Кожна частина має власну заборонену дію, суб’єкта та межу штрафу, а частина наслідків незаконного перебування передбачена іншими актами.",
    },
  ],
  exercise:
    "Розбери анонімний протокол контролю у двох колонках: факт, який доведено, і правовий наслідок, який ще потребує перевірки.",
}

export const kontrolaISankcjeLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:powierzanie-pracy:kontrola-i-sankcje",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "powierzanie-pracy",
        moduleId: "kontrola-i-sankcje",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: moduleContent.provisionScope,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-powierzanie-pracy",
            },
            locator: "module provision scope",
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

export default kontrolaISankcjeLearningModuleTopic
