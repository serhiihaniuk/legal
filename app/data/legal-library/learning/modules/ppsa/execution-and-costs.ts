import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const ppsaLaw = createLegalLearningTextAuthor("ppsa")

const moduleContent: LegalLearningModule = {
  id: "execution-and-costs",
  order: 7,
  title: "Виконання wyrok і koszty",
  polish: "wykonanie orzeczenia; niewykonanie wyroku; koszty postępowania",
  provisionScope: ppsaLaw.text`${ppsaLaw.articleRange("154", "161")}, ${ppsaLaw.articleRange("200", "205", { start: "200" })}`,
  outcome:
    "Ви перетворюєте остаточний wyrok на контрольований план виконання та окремо перевіряєте розподіл kosztów і можливий remedy при невиконанні.",
  caseQuestion:
    "Що саме має зробити organ після остаточного wyrok, яким доказом це підтверджується і яку дію обрати при niewykonanie?",
  placeInWork:
    "Завершальна фаза: контроль повторної адміністративної дії, оцінка невиконання та вимог про zwrot kosztów.",
  sections: [
    {
      id: "execute-judgment",
      title: "Wyrok → обов’язок organ → доказ",
      paragraphs: [
        ppsaLaw.text`Прочитайте обов’язок із sentencja разом із ${ppsaLaw.article("153")} та ${ppsaLaw.articleRange("154", "161")}: чи має organ повторно розглянути справу, прийняти акт або виконати іншу вказану дію. Факт невиконання треба відділити від незгоди з новим, але вже прийнятим рішенням.`,
        ppsaLaw.text`Якщо organ не виконує wyrok, перевірте спеціальний remedy за ${ppsaLaw.articleRange("154", "155")} і його умови. Дійте за строком або вимогою, яку прямо встановлює застосовна норма чи wezwanie; універсальний строк тут не вигадується.`,
      ],
      questions: [
        "Яку конкретну дію вимагає wyrok, коли її не виконано і що відповів organ?",
      ],
      steps: [
        "Зробіть чекліст вказівок wyrok і дат doręczenie.",
        "Надішліть organ чітке звернення, якщо це доречно, та збережіть підтвердження.",
        ppsaLaw.text`За факту niewykonanie зіставте докази з ${ppsaLaw.articleRange("154", "161")} і оберіть remedy.`,
      ],
      evidence: [
        "остаточний wyrok, підтвердження doręczenie, листування з organ і новий акт або його відсутність",
      ],
      warning:
        "Скасування акта не означає, що орган зобов’язаний видати саме бажаний дозвіл; межі випливають із wyrok і закону.",
    },
    {
      id: "costs",
      title: "Витрата → вимога → процесуальний ефект",
      paragraphs: [
        ppsaLaw.text`${ppsaLaw.articleRange("200", "205")} регулюють koszty postępowania та їх розподіл залежно від результату й процесуальної ситуації. Розділіть факт витрати, правову підставу вимоги та документ, який підтверджує оплату; суд не присуджує невизначені суми автоматично.`,
        "Перевірте в sentencja, чи є рішення про koszty, і чи доступна окрема процесуальна дія. Потім поєднайте фінансовий ефект із основним remedy: виграш у kosztach не змінює змісту рішення про pobyt.",
      ],
      questions: [
        "Які koszty реально понесені, хто їх заявив і який результат справи впливає на розподіл?",
      ],
      steps: [
        "Зберіть dowód opłaty та інші документи про фактичні koszty.",
        ppsaLaw.text`Зіставте вимогу з ${ppsaLaw.articleRange("200", "205")} і процесуальним результатом.`,
        "Перевірте sentencja, порядок і строк окремого оскарження або виконання вимоги.",
      ],
      evidence: [
        "dowód opłaty sądowej, рахунок або інший допустимий документ, sentencja щодо kosztów",
      ],
      warning:
        "Право на zwrot kosztów залежить від норми та результату конкретної процесуальної дії; не обіцяйте його наперед.",
    },
  ],
  exercise:
    "Складіть фінальний workflow: wyrok → обов’язок organ → доказ виконання → реакція на невиконання → koszty → наступний remedy.",
}

export const executionAndCostsLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ppsa:execution-and-costs",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ppsa",
        moduleId: "execution-and-costs",
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
            reference: { kind: "official-source", sourceId: "eli-ppsa" },
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

export default executionAndCostsLearningModuleTopic
