import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { defineLegalMapArticle } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"
import { foreignersLaw, kpaLaw, mapTopicSources } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const documents = createEvidenceDocumentTextAuthor()

export const wezwanieWorkflowTopic: KnowledgeUnit<LegalMapTopicBody> =
  defineKnowledgeUnit({
    id: "map-topic:wezwanie-workflow",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "wezwanie-workflow" },
    },
    summary:
      "Завершений умовний приклад показує відповідь на три вимоги: подати актуальні умови роботи, підтвердити страхування і з'явитися особисто. Видно початкову прогалину, два подання та окремий результат явки.",
    claims: [
      {
        id: "wezwanie-matrix",
        kind: "practical-inference",
        text: "Відповідь за пунктами і реєстр фактичних подань показують, яка вимога отримала матеріал, а яка ще потребує дії. Це спосіб організації роботи, а не обов'язковий державний формуляр або гарантія дозволу.",
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 54, 57, 63, 77 і 80 KPA",
          },
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "Art. 106e, 106f і 114",
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
    body: {
      title: "Відповідь на wezwanie: розібраний приклад",
      polish: "Odpowiedź, załączniki, uzupełnienie, potwierdzenie złożenia",
      sources: [
        {
          ...mapTopicSources.kpa,
          note: "Перевірено 06.09.2026: зміст вимоги, обчислення строку, подання та оцінка доказів.",
        },
        {
          label: "Ustawa o cudzoziemcach: текст зі змінами",
          url: "https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf",
          note: "Перевірено 06.09.2026: документи й особисті дії у звичайній справі про тимчасове перебування та працю за новою процедурою.",
        },
        mapTopicSources.mosQa,
      ],
      guide: defineLegalMapArticle({
        kind: "article",
        introduction: [
          "Відповідь на wezwanie має дозволити органу знайти результат кожного пункту. У цьому умовному прикладі працівник справи спочатку має договір і aneks, але ще не має актуального підтвердження страхування. Він готує часткову відповідь, пізніше доповнює її та окремо фіксує виконання особистих дій.",
          "Усі дати, уривки й робочі записи нижче вигадані. Вони показують один завершений порядок роботи з листом. Це не універсальний пакет для дозволу, і наведені фрагменти не містять персональних реквізитів, підписів чи повного переліку матеріалів реальної справи.",
        ],
        sections: [
          {
            id: "received-demands",
            title: "Отриманий лист і початковий стан матеріалів",
            paragraphs: [
              "Умовна справа стосується повнолітньої особи, яка подала звичайну заяву на pobyt czasowy i pracę через новий MOS. Представника немає. Лист належно вручено 03.08.2026. У пунктах 1 і 2 орган просить актуальний договір з aneksami та документ про медичне страхування протягом 14 днів. У пункті 3 призначено особисту явку 17.08.2026 о 10:00 для паспорта, відбитків і зразка підпису.",
              kpaLaw.text`За ${kpaLaw.article("57", "art. 57 § 1 KPA")} день вручення не включили до строку, визначеного в днях. Перший день є 04.08, чотирнадцятий є понеділок 17.08.2026. Цей розрахунок стосується двох вимог документів; особиста явка має конкретну годину, зазначену в листі.`,
              foreignersLaw.text`У цьому прикладі подання документів відповідає ${foreignersLaw.article("106f", "art. 106f")}, а особисті дії ${foreignersLaw.article("106e", "art. 106e")}. Умови роботи і страхування пов'язані з ${foreignersLaw.article("114", "art. 114")}. Це задана процедура прикладу; перенесення його строків до іншого дозволу без перевірки підстави було б помилкою.`,
            ],
            example: {
              title: "Робочий запис на 05.08.2026",
              facts: [
                documents.text`Із ${documents.document("authority-summons", "wezwania")} перенесли кожну вимогу окремо. ${documents.document("requirements-table", "Таблиця вимог")} містить стан на конкретну дату, а не позначку готовності всього пакета.`,
              ],
              sample: {
                kind: "table",
                title: "Три вимоги та їхній стан",
                note: "Вигаданий внутрішній запис. Формулювання вимог скорочені; оригінал листа зберігається окремо.",
                columns: [
                  "Вимога й строк",
                  "Наявний матеріал",
                  "Що ще не виконано",
                ],
                rows: [
                  {
                    id: "employment",
                    cells: [
                      "1. Договір з aneksami до 17.08",
                      "Договір і підписаний aneks зі зміною винагороди від 01.08",
                      "Матеріал отримано від роботодавця, але ще не подано органу.",
                    ],
                  },
                  {
                    id: "insurance",
                    cells: [
                      "2. Поточне страхування до 17.08",
                      "Підтвердження звернення до ZUS від 05.08",
                      "Документ про саме страхування ще не отримано.",
                    ],
                  },
                  {
                    id: "attendance",
                    cells: [
                      "3. Явка 17.08 о 10:00",
                      "Паспорт підготовлено; час і місце звірено з листом",
                      "Явка, відбитки й підпис ще не відбулися.",
                    ],
                  },
                ],
              },
              reasoning: [
                "Готовий договір не усуває прогалину щодо страхування. Запис про майбутню явку також не є підтвердженням виконаної дії.",
              ],
              conclusion:
                "Пакет можна готувати частинами, але кожний невиконаний пункт залишається видимим.",
            },
          },
          {
            id: "first-response",
            title: "Перша відповідь 10.08: подане і ще відсутнє",
            paragraphs: [
              documents.text`Працівник зіставив ${documents.document("employment-contract", "договір і aneks")}. Aneks змінює винагороду від 01.08, а решта умов залишається в основному договорі. Тому до відповіді включили обидва документи й пояснили дату зміни. Актуальне ${documents.document("health-insurance", "підтвердження страхування")} ще очікують.`,
              "Першу відповідь подали 10.08. Вона містить три додатки і прямо називає другу вимогу невиконаною. У прикладі строк не змінювали: заявник продовжує збирати матеріал до 17.08. Обіцянка донести документ не прирівнюється до його подання.",
            ],
            example: {
              title: "Як виглядає часткова відповідь",
              facts: [
                "Заявник підписав відповідь. Тут відтворено лише її зміст; у повному листі також зазначено орган, заявника, справу та wezwanie, на яке він відповідає.",
              ],
              sample: {
                kind: "letter",
                title: "Фрагмент першої відповіді польською",
                language: "pl",
                note: "Вигаданий навчальний уривок. Не є підтвердженням фактичного страхування або готовою відповіддю для будь-якої справи.",
                paragraphs: [
                  "Ad pkt 1. Przedkładam umowę o pracę oraz podpisany aneks. Aneks zmienia wynagrodzenie od 01.08.2026. Pozostałe warunki zatrudnienia wynikają z umowy. Dokumenty stanowią załączniki nr 1 i 2.",
                  "Ad pkt 2. Nie dysponuję jeszcze dokumentem potwierdzającym aktualne ubezpieczenie zdrowotne. W dniu 05.08.2026 wystąpiłem do ZUS o jego wydanie. Potwierdzenie złożenia wniosku stanowi załącznik nr 3. Dokument ten potwierdza wystąpienie o zaświadczenie, a nie samo ubezpieczenie.",
                  "Ad pkt 3. Przyjąłem do wiadomości termin osobistego stawiennictwa wyznaczony na 17.08.2026, godz. 10:00. Niniejsze pismo nie zastępuje osobistego stawiennictwa.",
                  "Załączniki:\n1. Umowa o pracę.\n2. Aneks do umowy.\n3. Potwierdzenie złożenia wniosku do ZUS z 05.08.2026.",
                ],
              },
              reasoning: [
                "Нумерація зберігає зв'язок з листом органу. Перший пункт називає подані матеріали й значення aneksu. Другий відділяє доказ звернення до ZUS від доказу страхування. Третій не стверджує, що майбутню явку вже виконано.",
              ],
              conclusion:
                "Перша відповідь подана частково. У справі залишаються непідтверджене страхування й майбутні особисті дії.",
            },
          },
          {
            id: "supplement",
            title: "Доповнення 14.08: що саме змінив новий документ",
            paragraphs: [
              "13.08 заявник отримав підтвердження ZUS. У цьому прикладі воно стосується тієї самої особи й підтверджує поточне охоплення медичним страхуванням від зазначеної в документі дати. Працівник прочитав зміст, а не лише назву файла, і зіставив ці відомості з другою вимогою. Повторно надсилати весь перший пакет лише через появу нового документа не було потрібно.",
            ],
            example: {
              title: "Друге подання до того самого wezwania",
              facts: [
                "Доповнення підписано й подано 14.08.2026. Воно посилається на першу відповідь і точно називає пункт, до якого долучають новий матеріал.",
              ],
              sample: {
                kind: "letter",
                title: "Фрагмент доповнення польською",
                language: "pl",
                note: "Вигаданий уривок без персональних реквізитів. Зміст підтвердження ZUS є заданим фактом цього прикладу.",
                paragraphs: [
                  "W uzupełnieniu odpowiedzi z 10.08.2026, w zakresie pkt 2 wezwania, przedkładam otrzymane 13.08.2026 potwierdzenie ZUS dotyczące mojego aktualnego ubezpieczenia zdrowotnego. Dokument załączam do niniejszego pisma.",
                  "Załącznik:\n1. Potwierdzenie ZUS otrzymane 13.08.2026.",
                ],
              },
              reasoning: [
                documents.text`Новий документ є додатком 1 до другого подання, тому в ${documents.document("case-file-index", "переліку матеріалів справи")} його записали разом із датою 14.08. Позначення лише «додаток 1» було б неоднозначним: у першому пакеті цей номер має договір.`,
              ],
              conclusion:
                "Прогалину в матеріалах щодо пункту 2 усунули до встановленої дати. Чи достатній доказ для правового висновку, орган оцінює разом з іншими матеріалами.",
            },
          },
          {
            id: "filing-and-attendance",
            title: "Докази двох подань і окремої явки",
            paragraphs: [
              kpaLaw.text`${kpaLaw.article("63", "Art. 63 KPA")} визначає форму подання, а ${kpaLaw.article("57", "art. 57 § 5 KPA")} містить правила збереження строку для названих способів відправлення. У прикладі підписані відповіді подали допустимим для цього листування способом і отримали підтвердження прийняття органом 10.08 та 14.08. Це не твердження, що будь-який файл, надісланий на email, є поданою відповіддю.`,
              documents.text`До кожного ${documents.document("dispatch-proof", "доказу подання або відправлення")} прив'язали збережену версію листа та його додатків. Сам доказ пересилання конверта чи повідомлення не описує весь його вміст. Повний запис дозволяє встановити, який пакет був переданий саме цією подією.`,
            ],
            example: {
              title: "Запис після 17.08.2026",
              facts: [
                "17.08 заявник з'явився у визначене місце о 10:00, показав паспорт, здав відбитки та зразок підпису. Ці дії зафіксовано в матеріалах органу. Після цього працівник оновив робочий запис.",
              ],
              sample: {
                kind: "table",
                title: "Підсумок виконання трьох вимог",
                note: "Вигаданий підсумок роботи з одним листом. Запис про подання не є рішенням органу щодо достатності доказів.",
                columns: ["Пункт", "Виконана дія", "Чим підтверджено"],
                rows: [
                  {
                    id: "work-submitted",
                    cells: [
                      "1. Умови роботи",
                      "10.08 подано договір і aneks",
                      "Збережений пакет із підтвердженням прийняття першої відповіді.",
                    ],
                  },
                  {
                    id: "insurance-submitted",
                    cells: [
                      "2. Страхування",
                      "14.08 подано нове підтвердження ZUS",
                      "Доповнення, його додаток і підтвердження прийняття другого подання.",
                    ],
                  },
                  {
                    id: "attendance-complete",
                    cells: [
                      "3. Особисті дії",
                      "17.08 виконано призначені дії",
                      "Відомості про фактичну явку, показ паспорта, відбитки та підпис у матеріалах органу.",
                    ],
                  },
                ],
              },
              reasoning: [
                "Обидва подання відбулися до 17.08, а особисті дії у призначений час. Позначку про третій пункт внесли після фактичної явки, а не після відправлення листа 10.08.",
              ],
              conclusion:
                "Кожний пункт отримав окремий результат і джерело його підтвердження. Це завершення роботи з цим листом, а не гарантія позитивного рішення у всій справі.",
            },
          },
          {
            id: "remaining-assessment",
            title: "Чого цей результат ще не доводить",
            paragraphs: [
              kpaLaw.text`За ${kpaLaw.article("80", "art. 80 KPA")} орган оцінює доведеність обставини на підставі всіх матеріалів. Тому таблиця виконаних дій не підтверджує автоматично відповідність винагороди закону, реальність роботи, відсутність інших підстав відмови або належність кожного документа. Вона показує, де шукати відповідь на конкретні вимоги листа.`,
              "Якби підтвердження ZUS до строку не надійшло, друга вимога залишилася б невиконаною в частині потрібного доказу. Працівник міг би описати перешкоду, подані запити й наявні альтернативні матеріали та звернутися щодо строку. Саме звернення не означало б його продовження. Цей інший результат не можна приховати загальною позначкою «пакет відправлено».",
            ],
          },
        ],
      }),
      related: [
        "wezwanie",
        "deadlines-delivery",
        "evidence-matrix",
        "decision-reading",
      ],
    },
  })
export default wezwanieWorkflowTopic
export const wezwanieWorkflowMapNode: LegalNode = {
  id: "wezwanie-workflow",
  title: wezwanieWorkflowTopic.body.title,
  polish: wezwanieWorkflowTopic.body.polish,
  summary: wezwanieWorkflowTopic.summary,
  sources: [...wezwanieWorkflowTopic.body.sources],
  related: [...(wezwanieWorkflowTopic.body.related ?? [])],
}
