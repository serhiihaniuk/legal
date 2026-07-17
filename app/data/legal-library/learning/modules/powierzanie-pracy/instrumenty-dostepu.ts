import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")

const moduleContent: LegalLearningModule = {
  id: "instrumenty-dostepu",
  order: 3,
  title: "Zezwolenie, oświadczenie та звільнення",
  polish:
    "zezwolenie na pracę; oświadczenie o powierzeniu pracy; zwolnienie z obowiązku",
  provisionScope: workLaw.text`${workLaw.article("3")}, ${workLaw.article("6", "6")}, ${workLaw.articleRange("13", "25", { start: "13" })}, ${workLaw.articleRange("45", "50", { start: "45" })}, ${workLaw.articleRange("62", "73", { start: "62" })}`,
  outcome:
    "Класифікує основні інструменти доступу до роботи й перевіряє передумови кожного, не підміняючи їх один одним.",
  caseQuestion:
    "Який режим відповідає громадянству, моделі роботи, pobyt і фактичному місцю виконання?",
  placeInWork:
    "Центральний етап: після фактів і ролей, але до оцінки документів та строків.",
  sections: [
    {
      id: "choose-instrument",
      title: "Обрати правильний інструмент",
      paragraphs: [
        workLaw.text`${workLaw.article("6")} називає основні моделі для zezwolenie na pracę: робота з polski podmiot або agencja, окремі функції в spółka, delegowanie та sezonowa praca. Oświadczenie має власні вимоги щодо громадянства й моделі роботи.`,
        "Вибір роблять за фактами, а не за побажанням роботодавця або назвою посади.",
      ],
      questions: [
        "Хто powierzає роботу і де вона фактично виконується?",
        "Чи є це звичайна, сезонна, делегована або тимчасова робота?",
      ],
      steps: [
        workLaw.text`Встановити модель за ${workLaw.article("6")}.`,
        "Перевірити громадянство та чинні виконавчі переліки для oświadczenie.",
        "Зіставити обраний інструмент із pobyt.",
      ],
      evidence: [
        "Громадянство і документ pobyt",
        "Umowa з podmiot",
        "Опис роботи та місця її виконання",
      ],
      warning:
        "Oświadczenie не є спрощеною універсальною заміною zezwolenie і не легалізує pobyt.",
    },
    {
      id: "exemptions",
      title: "Перевірити zwolnienie",
      paragraphs: [
        workLaw.text`${workLaw.article("3")} передбачає swobodny dostęp до rynku pracy для перелічених категорій та окремі випадки роботи без zezwolenie або oświadczenie, зокрема за Kartą Polaka, окремими освітніми статусами, міжнародними договорами й виконавчими приписами.`,
        workLaw.text`${workLaw.article("1")} також містить випадки, до яких ustawa не застосовується. Кожен виняток треба прив'язати до конкретної особи й фактів.`,
      ],
      questions: [
        "Який точний пункт дає swobodny доступ або zwolnienie?",
        "Чи підтверджені всі факти, від яких залежить цей виняток?",
      ],
      steps: [
        "Знайти точну правову підставу звільнення.",
        "Перевірити документи та їхню чинність.",
        "Зафіксувати межі винятку для конкретної роботи.",
      ],
      evidence: [
        "Dokument підтвердження статусу",
        "Підстава pobyt",
        "Підтвердження громадянства або освіти",
      ],
      warning:
        "Посилання на загальний статус без перевірки конкретного пункту не доводить звільнення від документа роботи.",
    },
  ],
  exercise:
    "Для трьох анонімних профілів визнач: swobodny доступ, zezwolenie, oświadczenie чи потреба в додатковій перевірці винятку; поясни, яких фактів бракує.",
}

export const instrumentyDostepuLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:powierzanie-pracy:instrumenty-dostepu",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "powierzanie-pracy",
        moduleId: "instrumenty-dostepu",
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
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: moduleContent,
  })

export default instrumentyDostepuLearningModuleTopic
