import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { defineLegalMapArticle } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"
import { foreignersLaw, mapTopicSources } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const documents = createEvidenceDocumentTextAuthor()
const visaCodeUrl =
  "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0810-20240628"
const bordersUrl =
  "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02016R0399-20251012"
const guidanceUrl =
  "https://www.gov.pl/web/mswia/warunki-wjazdu-i-pobytu-cudzoziemcow-w-polsce"
const visaCodeReference = { kind: "external", url: visaCodeUrl } as const
const aliensSourceReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const

export const visaTopic: KnowledgeUnit<LegalMapTopicBody> = defineKnowledgeUnit({
  id: "map-topic:visa",
  subject: {
    family: "map-topic",
    reference: { kind: "map-node", nodeId: "visa" },
  },
  summary:
    "Тип C або D визначає режим візи. Територія, строки, дозволені дні й кількість в'їздів визначають межі її використання. Чинність до певної дати ще не означає, що особа може залишатися весь цей час або знову в'їхати після виїзду.",
  claims: [
    {
      id: "visa-types",
      kind: "statute-text",
      text: "Віза Schengen для короткого перебування та польська національна віза мають різні часові режими. Календарна чинність візи, дозволена тривалість перебування й кількість в'їздів є окремими параметрами.",
      basis: [
        {
          reference: visaCodeReference,
          locator: "Article 2(2)–(5); Article 24(1)",
        },
        { reference: aliensSourceReference, locator: "Art. 59" },
      ],
    },
    {
      id: "visa-not-automatic-entry",
      kind: "statute-text",
      text: "Наявність єдиної візи або візи з обмеженою територіальною чинністю не надає автоматичного права в'їзду.",
      basis: [{ reference: visaCodeReference, locator: "Article 30" }],
    },
    {
      id: "visa-status-changes",
      kind: "statute-text",
      text: "Для візи Schengen анулювання через невиконання умов на момент видачі та скасування через їх подальше невиконання є різними підставами.",
      basis: [{ reference: visaCodeReference, locator: "Article 34(1)–(2)" }],
    },
  ],
  relationships: [],
  review: {
    reviewStatus: "reviewed",
    language: "uk",
    legalStateDate: "2026-09-10",
    verifiedAt: "2026-09-10",
  },
  body: {
    title: "Wiza C / D",
    polish: "wiza Schengen i wiza krajowa",
    sources: [
      {
        ...mapTopicSources.aliens,
        note: "Перевірено 10.09.2026: національна віза, мета видачі та окрема підстава перебування під час заяви.",
      },
      {
        label: "Ustawa o cudzoziemcach: текст зі змінами",
        url: "https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf",
        note: "Редакційний текст від 07.04.2026; перевірка стосується наведених на цій сторінці норм.",
      },
      {
        label: "Visa Code: розпорядження (EC) 810/2009",
        url: visaCodeUrl,
        note: "Перевірено 10.09.2026 редакцію від 28.06.2024: визначення, чинність, кількість в'їздів, право в'їзду та зміни стану візи.",
      },
      {
        label: "Schengen Borders Code: коротке перебування",
        url: bordersUrl,
        note: "Перевірено правило 90/180 та умови в'їзду за редакцією від 12.10.2025.",
      },
      {
        label: "MSWiA: віза D та поїздки до інших держав",
        url: guidanceUrl,
        note: "Перевірено пояснення про короткі поїздки за візою або дозволом іншої держави Schengen. Інші розділи цієї довідкової сторінки не є підставою для оновлення всього атласу.",
      },
    ],
    documents: [
      documents.text`${documents.document("visa", "Віза у паспорті")}`,
      documents.text`${documents.document("passport", "Паспорт")}`,
      documents.text`${documents.document("stay-history", "Хронологія перебування")}`,
    ],
    related: ["entry-current-basis", "visa-free", "pending-stay", "two-keys"],
    guide: defineLegalMapArticle({
      kind: "article",
      introduction: [
        "Віза є дозволом із визначеними межами. Тип C або D допомагає обрати правила, але для висновку про конкретну поїздку потрібен увесь документ та історія його використання. Одна дата закінчення не показує ні залишку днів, ні можливості наступного в'їзду.",
      ],
      sections: [
        {
          id: "type-and-territory",
          title: "C дозволяє коротке перебування, D має національну основу",
          paragraphs: [
            foreignersLaw.text`Wiza Schengen C призначена для короткого перебування, за загальним правилом до 90 днів у кожному 180-денному періоді. ${foreignersLaw.external("Art. 2 Visa Code", visaCodeUrl)} розрізняє єдину візу для всієї території відповідних держав і візу з обмеженою територіальною чинністю. Тому літера C не замінює перевірки поля VALID FOR. Віза A стосується міжнародної транзитної зони аеропорту, а не звичайного перебування в країні.`,
            foreignersLaw.text`Wiza krajowa D, видана Польщею, за ${foreignersLaw.article("59", "art. 59 ustawy o cudzoziemcach")} дозволяє перебування в Польщі понад 90 днів у межах наданого строку. Її чинність не перевищує року. Це не означає, що кожна віза D дозволяє повний рік: фактичний строк визначає видана віза.`,
            foreignersLaw.text`Для відвідування інших держав Schengen за чинною візою D діє окрема межа коротких поїздок 90/180. ${foreignersLaw.external("MSWiA пояснює це розмежування", guidanceUrl)} також для дозволу на перебування іншої держави. Наприклад, тривале проживання в Польщі за польською візою D та відвідування Німеччини не можна звести до одного необмеженого «перебування в Європі».`,
            foreignersLaw.text`Мета видачі також має значення. ${foreignersLaw.article("60", "Art. 60")} називає різні цілі, зокрема туризм, відвідування та працю. Літера D сама по собі не означає «робоча віза». Для конкретної роботи потрібен окремий висновок про доступ до праці.`,
          ],
        },
        {
          id: "three-limits",
          title: "Дати, дні та в'їзди обмежують різні речі",
          paragraphs: [
            foreignersLaw.text`${foreignersLaw.external("Art. 24 ust. 1 Visa Code", visaCodeUrl)} окремо визначає календарну чинність, дозволену тривалість і видачу на один, два або багато в'їздів. Дати FROM та UNTIL окреслюють проміжок використання. DURATION OF STAY показує дозволені дні. NUMBER OF ENTRIES показує, скільки разів можна використати візу для в'їзду.`,
            "Одноразова віза не дає другого в'їзду лише тому, що частину дозволених днів не використано. MULT дозволяє багато в'їздів, але не додає нового запасу днів після кожної поїздки. Для тривалої багаторазової візи C з дозволеними 90 днями діє рухоме обмеження 90/180, а не 90 днів на кожен в'їзд і не 90 днів за весь багаторічний строк візи.",
            documents.text`У ${documents.document("visa", "поясненні візової наліпки")} є заповнений приклад полів і підрахунок двох поїздок. Тут важливий інший наслідок: невикористані дні не відновлюють використаного в'їзду. ${documents.document("stay-history", "Історія поїздок")} потрібна поряд із зображенням візи, бо наліпка не показує, як нею вже скористалися.`,
          ],
          example: {
            title: "Після десяти днів залишилися дні, але не другий в'їзд",
            facts: [
              "Умовний приклад. Віза C чинна з 1 серпня до 15 вересня 2026 року, дозволяє 30 днів і один в'їзд. Особа в'їхала до Schengen 1 серпня та виїхала 10 серпня. 20 серпня вона хоче знову в'їхати за тією самою візою. Іншої підстави в'їзду в прикладі немає.",
            ],
            sample: {
              kind: "table",
              title: "Заповнене порівняння меж візи",
              note: "Вигадані дані візи та поїздки. Це робоче пояснення, не офіційний документ.",
              columns: ["Що перевірили", "Результат на 20 серпня", "Значення"],
              rows: [
                {
                  id: "validity",
                  cells: [
                    "Чинність до 15.09.2026",
                    "Календарний строк ще не закінчився",
                    "Цього недостатньо для висновку про другий в'їзд.",
                  ],
                },
                {
                  id: "days",
                  cells: [
                    "30 дозволених днів; поїздка 01–10.08",
                    "Використано 10 днів, включно з обома крайніми датами",
                    "Невикористані 20 днів не є новим дозволом на в'їзд.",
                  ],
                },
                {
                  id: "entries",
                  cells: [
                    "NUMBER OF ENTRIES: 1",
                    "Єдиний в'їзд використано 1 серпня",
                    "Повторний в'їзд за цією візою не передбачено.",
                  ],
                },
              ],
            },
            reasoning: [
              "Працівник, який прочитав лише дату UNTIL, отримав би неповний висновок. Обмеження кількості в'їздів спрацьовує незалежно від того, що календарний строк триває і дозволені дні не вичерпані. Перші десять днів не стають через це незаконними.",
            ],
            conclusion:
              "У наведених фактах ця одноразова віза не забезпечує повернення 20 серпня. Потрібна інша належна підстава в'їзду. Залишок днів не можна використати як доказ наявності другого в'їзду.",
          },
        },
        {
          id: "visa-and-current-status",
          title: "Стара наліпка не показує всіх подальших змін",
          paragraphs: [
            foreignersLaw.text`Для візи Schengen ${foreignersLaw.external("art. 34 Visa Code", visaCodeUrl)} розрізняє unieważnienie та cofnięcie. Перше стосується ситуації, коли умови не були виконані вже під час видачі, друге, коли вони перестали виконуватися згодом. Це інші події, ніж звичайне закінчення строку. Якщо орган ухвалив таке рішення, початкове фото наліпки не підтверджує її актуального стану.`,
            foreignersLaw.text`${foreignersLaw.external("Art. 30 Visa Code", visaCodeUrl)} прямо відокремлює видану візу від автоматичного права в'їзду. На кордоні залишаються інші умови. Навіть правильний підрахунок дат не доводить, наприклад, мети поїздки або наявності потрібних коштів.`,
            foreignersLaw.text`Заява на тимчасове перебування є ще одним окремим питанням. За умовами ${foreignersLaw.article("108", "art. 108")} вона може підтримувати законність перебування в Польщі. Вона не продовжує саму візу й не змінює її кількості в'їздів. Тому в записі про справу розрізняють стан візи та іншу підставу перебування, яка могла виникнути після її видачі.`,
          ],
        },
      ],
    }),
  },
})

export default visaTopic
export const visaMapNode: LegalNode = {
  id: "visa",
  title: visaTopic.body.title,
  polish: visaTopic.body.polish,
  summary: visaTopic.summary,
  sources: [...visaTopic.body.sources],
  documents: [...(visaTopic.body.documents ?? [])],
  related: [...(visaTopic.body.related ?? [])],
}
