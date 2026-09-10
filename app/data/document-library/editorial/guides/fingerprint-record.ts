import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
import {
  documentSources,
  foreignersLaw as law,
  regulationLaw,
} from "../authoring"

const guide: DocumentGuide = {
  id: "fingerprint-record",
  title: "Інформація про відбитки пальців",
  category: "procedure",
  aliases: [],
  description:
    "Informacja o pobranych odciskach linii papilarnych cudzoziemca lub ich braku є службовим записом про взяття відбитків або причину їх відсутності. Його складає працівник, який виконує цю дію. Заявник не готує цей документ як звичайне вкладення до заяви.",
  preparedBy: "Особа, яка бере відбитки в межах процедури органу.",
  purpose: [
    "Фіксує особу, дату, результат біометричної дії та відомості про працівника, який її виконав.",
  ],
  doesNotProve: [
    "Паперовий запис не є самими електронними відбитками. Його не можна замінити домашнім відбитком фарбою або фотографією пальця.",
  ],
  explanation: [
    {
      id: "read-form",
      title: "Що означають поля та малюнки рук",
      paragraphs: [
        regulationLaw.text`У ${regulationLaw.annex("10", "офіційній формі для pobytu czasowego")} спочатку зазначають ім'я, прізвище, дату народження і громадянство. Далі є дата дії, варіанти pobrano odciski palców та nie pobrano odcisków palców, тобто відбитки взято або не взято. Малюнки рук L і P допомагають позначити ліву та праву руку, конкретні пальці або причину неможливості взяття. Унизу містяться дані й підпис працівника.`,
        regulationLaw.text`За ${regulationLaw.paragraph("7", "§ 7 розпорядження")} спочатку використовують вказівні пальці обох рук. Якщо це неможливо через відсутність пальця або нечитабельність ліній, передбачено послідовний перехід до середніх, безіменних пальців або великих пальців. Запис про проблему з одним пальцем не дорівнює звільненню від усієї дії.`,
      ],
      example: {
        title: "Вказівні пальці не дали читабельного зображення",
        facts: [
          "Умовний приклад. Працівник органу не отримав читабельних відбитків вказівних пальців, але успішно взяв відбитки середніх пальців обох рук.",
        ],
        sample: {
          kind: "table",
          title: "Вибрані заповнені поля службового запису",
          note: "Вигаданий фрагмент для читання форми. Особисті дані й реквізити працівника опущено; це не документ для подання.",
          columns: ["Поле", "Приклад запису"],
          rows: [
            { id: "date", cells: ["Data złożenia odcisków", "03.09.2026"] },
            { id: "result", cells: ["Результат", "Pobrano odciski palców."] },
            {
              id: "fingers",
              cells: [
                "Informacja o palcach…",
                "Pobrano odciski palców środkowych obu dłoni. Linie papilarne palców wskazujących były nieczytelne.",
              ],
            },
          ],
        },
        reasoning: [
          "Позначка говорить про виконану дію, а пояснення уточнює, які пальці використано. Помилкове прочитання лише фрази про нечитабельність створило б враження, що відбитків немає взагалі.",
        ],
        conclusion:
          "За записом відбитки взято. Він не дозволяє працівнику, який читає справу, самостійно оцінити якість електронних зображень.",
      },
    },
    {
      id: "exceptions-and-cukr",
      title: "Виняток треба відрізняти від невиконаної дії",
      paragraphs: [
        law.text`За ${law.article("106b", "art. 106b")} відбитків не беруть у дитини, якій на день заяви ще немає шести років, при фізичній неможливості взяття або коли хвороба чи інвалідність не дозволяють особисто з'явитися. Для останнього випадку потрібна довідка належного лікаря-спеціаліста, видана не раніше ніж за три місяці до заяви. Відповідні правила для pobytu stałego і резидента ЄС містять ${law.article("203b", "art. 203b")} та ${law.article("219b", "art. 219b")}.`,
        law.text`Для цих двох дозволів використовують власні ${law.external("форми відбитків pobytu stałego, PDF, сторінка 15", "https://eli.gov.pl/api/acts/DU/2026/488/text/O/D20260488.pdf#page=15")} і ${law.external("резидента ЄС, PDF, сторінка 16", "https://eli.gov.pl/api/acts/DU/2026/487/text/O/D20260487.pdf#page=16")}. Їхня роль однакова, але назва процедури має відповідати справі.`,
        law.text`Окремий порядок має людина з тимчасовим захистом і UKR, яка просить один із дозволів за ${law.external("art. 45 ust. 1 закону Dz.U. 2026 poz. 203", "https://eli.gov.pl/api/acts/DU/2026/203/text/O/D20260203.pdf#page=40")}, зокрема pobyt czasowy i pracę. За ust. 3–6 wojewoda отримує відбитки з реєстру для виготовлення карти. Якщо їх немає або передання неможливе, орган бере відбитки після надання дозволу. Тому відсутність нового запису про взяття відбитків під час розгляду такої заяви сама по собі не означає невиконаної дії. Цей порядок стосується названих звичайних дозволів і не є процедурою CUKR.`,
        law.text`CUKR використовує відбитки або належний запис про неможливість їх взяття з реєстру за ${law.external("art. 42g–42h спеціального закону", "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf#page=26")}. Для тимчасової неможливості потрібні щонайменше дві спроби; UdSC уточнює, що принаймні одна має бути від 01.07.2024. Відсутні дані доповнюють у гміні. Звичайний бланк відбитків із іншої справи не є автоматичною заміною реєстрової перевірки CUKR.`,
      ],
    },
  ],
  keyChecks: [
    "Документ стосується потрібної особи і процедури.",
    "Прочитано результат, пальці й причину відсутності, а не лише назву форми.",
    "Виняток підтверджений належним записом або документом; для CUKR перевірено реєстр.",
  ],
  legalBasis: [
    regulationLaw.text`${regulationLaw.annex("10", "Załącznik nr 10: форма запису")}; ${regulationLaw.paragraph("7", "§ 7: порядок взяття")}`,
    law.text`${law.article("106b", "Art. 106b")}; ${law.article("203b", "art. 203b")}; ${law.article("219b", "art. 219b: звільнення від біометричних дій")}`,
  ],
  sources: [
    documentSources.aliens,
    documentSources.regulation553,
    documentSources.cukrQa,
    {
      label: "Відбитки при звичайній заяві з UKR. Dz.U. 2026 poz. 203",
      url: "https://eli.gov.pl/api/acts/DU/2026/203/text/O/D20260203.pdf#page=40",
      note: law.text`Перевірено 10.09.2026 лише ${law.external("art. 45 ust. 1 і 3–6", "https://eli.gov.pl/api/acts/DU/2026/203/text/O/D20260203.pdf#page=40")}: використання реєстрових відбитків і взяття після надання дозволу, якщо передання неможливе.`,
    },
    {
      label: "Форми pobytu stałego, Dz.U. 2026 poz. 488",
      url: "https://eli.gov.pl/eli/DU/2026/488/ogl",
      note: "Службовий запис про відбитки та винятки.",
    },
    {
      label: "Форми резидента ЄС, Dz.U. 2026 poz. 487",
      url: "https://eli.gov.pl/eli/DU/2026/487/ogl",
      note: "Службовий запис про відбитки та винятки.",
    },
  ],
  verifiedAt: "2026-09-06",
  relatedDocuments: [
    "passport",
    "signature-specimen",
    "mos-application",
    "permanent-application",
    "resident-application",
    "cukr-application",
  ],
}
export const fingerprintRecordDocumentTopic = defineDocumentTopic(guide)
export default fingerprintRecordDocumentTopic
