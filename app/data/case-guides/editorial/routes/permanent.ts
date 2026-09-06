import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { CaseGuideRoute } from "../../types"
import { permanentDocumentRegister } from "../permanent/documents"
import { permanentStages } from "../permanent/stages"
import {
  permanentConditions,
  permanentDeadlines,
  permanentAlternatives,
  permanentSources,
} from "../permanent/reference"

const law = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const route: CaseGuideRoute = {
  id: "permanent",
  tab: "Pobyt stały",
  eyebrow: "Постійний дозвіл на конкретній підставі",
  title: "Pobyt stały. Гайд по справі",
  verifiedAt: "2026-09-06",
  subtitle: "Karta Polaka, намір оселитися та різниця між дозволом і картою",
  overview: [
    law.text`Zezwolenie na pobyt stały є дозволом на перебування без визначеного кінцевого строку. ${law.article("195")} містить окремі категорії заявників, кожна зі своїми фактами. Багато років життя в Польщі саме по собі не утворює універсальної підстави.`,
    "Гайд веде умовну справу власника Karty Polaka, який переїхав до Польщі. Річна оренда викликає запитання органу про тривалість його планів. На цьому прикладі розрізняємо документ, заявлений намір і докази реального облаштування життя.",
  ],
  result: law.text`За ${law.article("195")} ust. 1 pkt 9 дійсна Karta Polaka та намір оселитися в Польщі на постійно дають підставу для безстрокового дозволу. Перешкоди й підстави відмови перевіряють окремо. Видана на його підставі karta pobytu має десятирічний строк за ${law.article("243")} ust. 1 pkt 2.`,
  forWhom:
    "Для людини з конкретною категорією постійного перебування. Наскрізний приклад стосується повнолітнього власника дійсної Karty Polaka, який уже законно перебуває в Польщі.",
  notFor: law.text`Загальний шлях після п'яти років законного безперервного перебування з вимогами доходу, страхування та польської мови належить до rezydenta długoterminowego UE за ${law.article("211")}. Ці вимоги не переносять до кожної справи про pobyt stały.`,
  profile: {
    name: "Річна оренда й постійний план життя",
    description:
      "Обставини та дати вигадані. Повнолітній громадянин Білорусі має дійсну Kartę Polaka. Він переїхав до Вроцлава 01.08.2026, почав працювати та винайняв житло на рік. Приклад не стосується міжнародного захисту, дитини або старого паперового провадження.",
    facts: [
      {
        label: "Підстава перебування",
        value:
          "Дозволене національною візою перебування триває до 30.09.2026. Нову заяву MOS підписано й відправлено 17.08.2026; UPO збережено.",
        explanation:
          "Майбутня дата на Karcie Polaka не продовжує візу. Перебування під час справи оцінюють за правилами належного своєчасного подання.",
      },
      {
        label: "Документ і намір",
        value:
          "Чинність Karty Polaka та її належність заявнику перевірені. У заяві він пояснює намір постійно жити в Польщі.",
        explanation:
          "Договір оренди діє з 01.08.2026 до 31.07.2027. Він підтверджує житло зараз, але не встановлює кінцеву дату життєвого плану.",
      },
      {
        label: "Запит органу",
        value:
          "20.08.2026 представнику вручено вимогу пояснити, чи пов'язаний переїзд лише зі строком оренди. Надано 14 днів, до 03.09.2026.",
        explanation:
          "Це запит про зміст підстави. Він не перетворює придбання житла на обов'язкову умову.",
      },
      {
        label: "Відповідь",
        value:
          "31.08.2026 подано пояснення постійного плану, підписану оренду й договір роботи. Заявник прямо зазначив, що наступного договору житла ще немає.",
        explanation:
          "Прогалину в майбутньому договорі не приховали. Орган оцінює сукупність установлених обставин, а не лише фразу про намір.",
      },
    ],
    assumption:
      "Чинна карта не була анульована чи замінена; дані відповідають паспорту. Поточна робота має належну підставу. Перешкод для подання та відомих підстав відмови не встановлено. Наведений пакет і своєчасна відповідь не гарантують позитивного рішення.",
  },
  choice: {
    why: law.text`Підстава ${law.article("195")} ust. 1 pkt 9 відповідає дійсній Karcie Polaka та заявленому постійному оселенню. Не потрібно замінювати її підставою польського походження або накопичувати п'ять років для іншого дозволу.`,
    closestAlternative:
      "За відсутності чинної Karty Polaka польське походження потребує власного доказування. Для подружжя громадянина Польщі важливі окремі періоди шлюбу й належного перебування. Це інші категорії, а не запасні позначки в тій самій заяві.",
    gate: "Визначено категорію, дозволену дату подання і факти, які доводять саме її. Житлові й професійні матеріали пояснюють намір; їх не названо універсальним пакетом для кожного заявника.",
  },
  metrics: [
    {
      label: "Орган",
      value: law.text`Wojewoda за місцем перебування заявника за ${law.article("201")}.`,
    },
    {
      label: "Подання",
      value: law.text`Для нової заяви з прикладу MOS за ${law.article("203c")}; підпис та отримане UPO за ${law.article("203d")} ust. 5.`,
    },
    {
      label: "Платежі",
      value:
        "Звичайна opłata skarbowa за постійний дозвіл становить 640 zł. Власник Karty Polaka з наміром оселитися звільнений від неї; стандартна окрема плата за карту становить 100 zł.",
    },
    {
      label: "Після рішення",
      value:
        "Безстроковий дозвіл, десятирічна karta pobytu та обов'язок повернути Kartę Polaka. Дата остаточності рішення потрібна для обчислення строку повернення.",
    },
  ],
  stages: permanentStages,
  conditions: permanentConditions,
  documents: permanentDocumentRegister,
  deadlines: permanentDeadlines,
  negativeBranches: permanentAlternatives,
  sources: permanentSources,
}

export const permanentCaseGuide: KnowledgeUnit<CaseGuideRoute> =
  defineKnowledgeUnit({
    id: "case-guide:permanent",
    subject: {
      family: "case-guide",
      reference: { kind: "case-route", routeId: "permanent" },
    },
    summary: route.result,
    claims: [
      {
        id: "route-result",
        kind: "statute-text",
        text: route.result,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "Art. 195 ust. 1 pkt 9 i art. 243 ust. 1 pkt 2",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-09-06",
      verifiedAt: "2026-09-06",
    },
    body: route,
  })
export default permanentCaseGuide
