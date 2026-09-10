import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { defineLegalMapArticle } from "~/data/legal-map/node-guide-types"
import { foreignersLaw as law, workLaw } from "../authoring"
import type { LegalNode } from "~/data/shared/legal-types"
import type { LegalMapTopicBody } from "./principle-legality"

const documents = createEvidenceDocumentTextAuthor()
const aliensUrl =
  "https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf"
const workUrl = "https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf"
const mosUrl = "https://www.gov.pl/web/udsc/info-mos"
const cukrUrl = "https://www.gov.pl/web/udsc/cukr-QA"
const mobilityUrl =
  "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/already-eu_en"
const aliensReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const

export const permanentResidentTopic: KnowledgeUnit<LegalMapTopicBody> =
  defineKnowledgeUnit({
    id: "map-topic:permanent-resident",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "permanent-resident" },
    },
    summary:
      "Pobyt stały і rezydent długoterminowy UE є різними безстроковими дозволами. Перший залежить від конкретної категорії особи, другий від належно зарахованого перебування та додаткових умов. П'ять років у Польщі, чинна Karta Polaka і строк пластикової карти відповідають на різні питання.",
    claims: [
      {
        id: "different-bases",
        kind: "statute-text",
        text: "Pobyt stały потребує конкретної законної підстави. Для rezydenta UE діють належний п'ятирічний період, дохід, страхування й підтвердження мови з передбаченими винятками. Один набір умов не замінює другого.",
        basis: [
          { reference: aliensReference, locator: "Art. 195; art. 211–213" },
        ],
      },
      {
        id: "permit-and-card",
        kind: "statute-text",
        text: "Обидва дозволи надають без визначеної кінцевої дати. Карта для pobytu stałego має десятирічну чинність, для rezydenta UE п'ятирічну. Це строки документів, а не дозволів.",
        basis: [
          {
            reference: aliensReference,
            locator: "Art. 195 ust. 1; art. 211 ust. 1; art. 243 ust. 1–2",
          },
        ],
      },
      {
        id: "cukr-counting-guidance",
        kind: "official-guidance",
        text: "UdSC пояснює, що період CUKR для rezydenta UE рахується від отримання карти, а попередній час UKR не зараховується.",
        basis: [
          {
            reference: { kind: "external", url: cukrUrl },
            locator: "Pytanie 57",
          },
        ],
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
      title: "Pobyt stały та rezydent UE",
      polish: law.text`${law.article("195", "art. 195")} i ${law.article("211", "art. 211")} ustawy o cudzoziemcach`,
      sources: [
        {
          label: "Європейська комісія: переїзд довгострокового резидента",
          url: mobilityUrl,
          note: "Можливість проживання в другій державі залежить від окремого дозволу та її умов. Огляд не перевіряє національні правила конкретної держави призначення.",
        },
        {
          label: "Ustawa o cudzoziemcach: два безстрокові дозволи",
          url: aliensUrl,
          note: "Перевірено 10.09.2026: підстави, зарахування перебування, строки карт, припинення дозволів і електронне подання. Детальні умови кожної підстави пояснені в окремих темах.",
        },
        {
          label: "Закон про працю іноземців: доступ власників дозволів",
          url: workUrl,
          note: workLaw.text`${workLaw.article("3", "Art. 3 ust. 1 pkt 6–7")}: право працювати в Польщі. Воно не визначає умов роботи в іншій державі.`,
        },
        {
          label: "UdSC: подання через MOS від 27.04.2026",
          url: mosUrl,
          note: "Спільний електронний канал для нових заяв про обидва види дозволу.",
        },
        {
          label: "UdSC: CUKR і строк для rezydenta UE",
          url: cukrUrl,
          note: "Питання 57 пояснює початок зарахування від отримання карти й незарахування попереднього періоду UKR. Це офіційне адміністративне пояснення.",
        },
      ],
      guide: defineLegalMapArticle({
        kind: "article",
        introduction: [
          "Zezwolenie na pobyt stały та zezwolenie na pobyt rezydenta długoterminowego UE дають право перебувати в Польщі без наперед визначеної кінцевої дати. Вибір між ними починається з фактів особи, а не з бажання отримати карту на довший строк.",
          "Pobyt stały не є звичайним наступним кроком після п'яти років роботи. Rezydent UE не виникає автоматично в день п'ятої річниці приїзду. Ця сторінка пояснює різницю; дві теми нижче розбирають умови й докази кожного дозволу.",
        ],
        sections: [
          {
            id: "category-or-residence-history",
            title: "Спеціальна підстава чи історія перебування",
            paragraphs: [
              law.text`Для pobytu stałego ${law.article("195")} називає конкретні категорії. Серед них дитина з визначеним зв'язком і статусом батьків, чоловік або дружина громадянина Польщі після належних строків, особа польського походження та власник чинної Karty Polaka з наміром постійного оселення. Кожна підстава має власні елементи. Сам факт, що особа давно працює в Польщі, не створює відсутньої категорії.`,
              law.text`Для rezydenta UE ${law.article("211")} загалом вимагає п'яти років законного й безперервного перебування безпосередньо перед заявою, належного доходу, страхування та підтвердження польської мови. ${law.article("212")} визначає, які періоди зараховуються і як оцінюють відсутність. Це дозвіл, для якого сама історія перебування є центральною умовою, але не єдиною.`,
              law.text`Не можна переносити весь пакет умов rezydenta UE на власника Karty Polaka, який звертається за ${law.article("195", "art. 195 ust. 1 pkt 9")}. І навпаки, сімейні акти або польське походження не замінюють потрібного періоду, доходу чи мови в іншій процедурі. Навіть якщо факти дозволяють розглядати обидва маршрути, кожний потребує власного обґрунтування.`,
            ],
            example: {
              title: "Двоє заявників просять «постійну карту»",
              facts: [
                "Умовне порівняння станом на 10.09.2026. Двоє повнолітніх іноземців законно перебувають у Польщі. У цьому записі визначаємо, яку заяву обґрунтовують надані матеріали; повну перевірку всіх підстав відмови ще не завершено.",
                "Особа A не має жодної встановленої спеціальної підстави для pobytu stałego. Рішення та хронологія підтверджують понад п'ять років перебування на звичайних дозволах через працю без перерв. Особа B переїхала недавно, має чинну Kartę Polaka, винайняла житло на рік і документально пояснила припинення попередньої роботи за кордоном та план постійного життя в Польщі.",
              ],
              sample: {
                kind: "table",
                title: "Заповнений запис про вибір підстави",
                note: "Вигадані обставини. Запис порівнює маршрути, а не замінює рішення органу.",
                columns: [
                  "Особа й матеріал",
                  "Що вже встановлено",
                  "Висновок для заяви",
                ],
                rows: [
                  {
                    id: "work-history",
                    cells: [
                      "A: рішення про перебування та хронологія",
                      "Належний період є; категорії pobytu stałego немає",
                      law.text`Розглядається ${law.article("211", "rezydent UE")}. Додатково потрібні докази доходу, страхування й мови. Самі п'ять років не обґрунтовують pobyt stały.`,
                    ],
                  },
                  {
                    id: "polish-card",
                    cells: [
                      "B: чинна Karta Polaka і матеріали про постійний переїзд",
                      "Підтверджено факти для спеціальної категорії; п'яти років немає",
                      law.text`Розглядається ${law.article("195", "pobyt stały за art. 195 ust. 1 pkt 9")}. Брак п'ятирічного перебування не є прогалиною саме цієї підстави.`,
                    ],
                  },
                ],
              },
              reasoning: [
                documents.text`У A ${documents.document("stay-history", "хронологія перебування")} дає відповідь про час, але не про всі умови rezydenta UE. У B ${documents.document("karta-polaka", "Karta Polaka")} і ${documents.document("settlement-intention", "пояснення наміру оселитися")} відповідають на інше законне питання. Річний строк оренди сам по собі не означає річного наміру проживання; його оцінено разом із фактичним переїздом і припиненням попередньої роботи.`,
                "Результат порівняння вже визначений: для A комплект готують під умови rezydenta UE, для B під конкретну категорію pobytu stałego. Це не висновок, що обом дозволи вже мають бути надані. У A ще відсутні матеріали щодо додаткових умов, а в обох справах залишаються перевірки доступності процедури й підстав відмови.",
              ],
              conclusion:
                "Одна побутова назва «постійна карта» приховувала різні заяви. Для A вирішальною стала історія перебування; для B чинна Karta Polaka та намір оселитися. Перелік доказів випливає з обраної норми.",
            },
          },
          {
            id: "what-five-years-means",
            title: "П'ять календарних років ще не є п'ятьма зарахованими",
            paragraphs: [
              law.text`${law.article("212")} розділяє зарахування періодів і безперервність. Визначені періоди навчання враховуються наполовину, інші періоди можуть не враховуватися, а для спеціальних історій Blue Card існують правила об'єднання перебування в державах ЄС. Тому дати першого в'їзду й подання не дають готового розрахунку. У кожному відрізку важливі чинна правова підстава, фактична мета та виїзди.`,
              law.text`UKR і CUKR також не становлять одного безперервного виду дозволу. ${law.article("213", "Art. 213 ust. 1 pkt 1 lit. e")} прямо передбачає перешкоду для початку справи rezydenta UE під час тимчасового захисту. Окремо ${law.external("UdSC у відповіді 57 про CUKR", cukrUrl)} пояснює: строк CUKR зараховується від фактичного отримання карти (odbiór), а не від подання чи виготовлення. Попередній період UKR не зараховується. Отримання CUKR не перетворює минулі роки захисту на роки цього дозволу.`,
              documents.text`${documents.document("stay-history", "Робоча хронологія")} має зберігати не тільки дати на картах, а й правову підставу кожного проміжку. ${documents.document("administrative-decision", "Рішення")}, ${documents.document("passport", "паспорт")} та відомості про виїзди пояснюють різні частини історії. Для pobytu stałego такий розрахунок виконують саме тоді і в тому обсязі, яких вимагає обрана категорія.`,
            ],
          },
          {
            id: "permit-card-and-work",
            title: "Безстроковий дозвіл і строк пластикової карти",
            paragraphs: [
              law.text`За ${law.article("243")} карта після pobytu stałego діє десять років, після дозволу rezydenta UE п'ять років від видачі. Закінчення цього строку означає потребу оформити наступний документ, а не повторно набувати той самий безстроковий статус. ${law.article("242")} пояснює роль карти: вона підтверджує особу в Польщі та разом із проїзним документом дозволяє перетинати кордон без візи.`,
              workLaw.text`${workLaw.article("3", "Art. 3 ust. 1 pkt 6–7 закону про powierzanie pracy")} дає власникам обох польських дозволів право працювати в Польщі без окремого дозволу на працю. Це відрізняється від звичайного дозволу, прив'язаного до роботодавця. Для регульованої професії професійні вимоги залишаються.`,
              law.text`Жоден із цих статусів не є польським громадянством. Для rezydenta UE існує окремий умовний шлях проживання в іншій державі ЄС, яка бере участь у цьому режимі. ${law.external("Європейська комісія пояснює", mobilityUrl)}, що потрібен дозвіл другої держави та виконання її умов. Напис UE не надає необмеженого права оселитися й працювати будь-де. Можливість короткої поїздки також не дорівнює дозволу на місцеву роботу.`,
              law.text`Безстроковість також не означає неможливості втрати дозволу. ${law.article("199")} і ${law.article("215")} містять різні підстави відкликання, зокрема щодо тривалого виїзду. За ${law.article("200")} надання rezydenta UE припиняє попередній pobyt stały за законом. Не слід планувати ці два дозволи як два одночасні незалежні запаси статусу.`,
            ],
          },
          {
            id: "application-follows-ground",
            title: "Заява оформлює обрану підставу, а не створює її",
            paragraphs: [
              documents.text`Від 27.04.2026 нові заяви про обидва дозволи подають через ${law.external("MOS", mosUrl)}. Проте ${documents.document("permanent-application", "заява про pobyt stały")} і ${documents.document("resident-application", "заява про rezydenta UE")} залишаються різними видами справ. Схожі особисті поля не роблять взаємозамінними відомості про категорію, минуле перебування чи джерела утримання.`,
              documents.text`У справі rezydenta UE ${documents.document("income-evidence", "матеріали про дохід")}, ${documents.document("health-insurance", "страхування")} і ${documents.document("polish-language-proof", "допустиме підтвердження польської мови")} мають власне значення. Для конкретної категорії pobytu stałego склад доказів інший. ${documents.document("upo", "UPO")} підтверджує отримання електронної заяви, а не достатність цього пакета.`,
              "Якщо особа вже має безстроковий дозвіл і потребує лише нової карти через закінчення строку документа, це інше питання. Перед вибором форми має бути зрозуміло, чи набувається новий статус, чи оформлюється документ на вже наявний.",
            ],
          },
        ],
      }),
    },
  })

export default permanentResidentTopic

export const permanentResidentMapNode: LegalNode = {
  id: "permanent-resident",
  title: permanentResidentTopic.body.title,
  polish: permanentResidentTopic.body.polish,
  summary: permanentResidentTopic.summary,
  sources: [...permanentResidentTopic.body.sources],
}
