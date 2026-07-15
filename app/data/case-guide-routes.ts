import type {
  CaseGuideCondition,
  CaseGuideDeadline,
  CaseGuideDocument,
  CaseGuideMaterial,
  CaseGuideRoute,
  CaseGuideRouteId,
  CaseGuideSource,
  CaseGuideStage,
  CaseGuideStageRisk,
} from "~/data/case-guide-types"
import {
  concatLegalText,
  createLegalTextAuthor,
  defineLegalTextContent,
  legalTextPlainText,
  legalTextSlice,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"
import { legalData } from "~/data/legal-data"
import { nodeById } from "~/data/legal-index"
import type { OfficialSource } from "~/data/legal-types"

const kpaLaw = createLegalTextAuthor("kpa")
const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const workLaw = createLegalTextAuthor("powierzanie-pracy")
const residenceFormLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
const UKRAINE_SPECIAL_ACT_URL =
  "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf"
const FOREIGNERS_2026_CHANGE_URL = "https://eli.gov.pl/eli/DU/2026/203/ogl"

type RouteSpec = Omit<
  CaseGuideRoute,
  "stages" | "documents" | "deadlines" | "negativeBranches" | "sources"
> & {
  primaryNode: string
  secondaryNode?: string
  stageFocus: readonly [string, string, string, string, string, string]
  documentItems: Array<{
    item: LegalTextValue
    proves: LegalTextValue
    law: LegalTextValue
    level?: "required" | "conditional" | "control"
  }>
  postDecisionMaterial?: CaseGuideMaterial
}

const kpaMaterials = {
  initiation: {
    label: "KPA: початок справи і podanie",
    description: kpaLaw.text`Пояснює wszczęcie, формальні вимоги та ${kpaLaw.articleRange("61", "66", { start: "art. 61", end: "66 KPA" })}.`,
    href: "/guide/kpa?module=initiation",
  },
  evidence: {
    label: "KPA: акти і докази",
    description: "Показує, як орган збирає й оцінює матеріал справи.",
    href: "/guide/kpa?module=files-evidence",
  },
  summons: {
    label: "KPA: як читати wezwanie",
    description:
      "Допомагає відрізнити вимогу, строк, правову підставу й наслідок.",
    href: "/guide/kpa?module=summons",
  },
  decision: {
    label: "KPA: decyzja і postanowienie",
    description: "Пояснює будову рішення, uzasadnienie і pouczenie.",
    href: "/guide/kpa?module=decisions",
  },
  appeal: {
    label: "KPA: оскарження в адміністрації",
    description: "Показує строк, адресата й структуру odwołania.",
    href: "/guide/kpa?module=appeal",
  },
} satisfies Record<string, CaseGuideMaterial>

function mapMaterial(
  nodeId: string,
  label: string,
  description: LegalTextValue
) {
  return { label, description, href: `/map/${nodeId}` }
}

function replaceLegalText(
  value: LegalTextValue,
  search: string,
  replacement: LegalTextValue
) {
  const plainText = legalTextPlainText(value)
  if (!plainText.includes(search)) return value

  const parts: LegalTextValue[] = []
  let cursor = 0
  let index = plainText.indexOf(search)
  while (index !== -1) {
    if (index > cursor) parts.push(legalTextSlice(value, cursor, index))
    parts.push(replacement)
    cursor = index + search.length
    index = plainText.indexOf(search, cursor)
  }
  if (cursor < plainText.length) {
    parts.push(legalTextSlice(value, cursor, plainText.length))
  }
  return concatLegalText(...parts)
}

function neutralizeLegacyCaseText(value: LegalTextValue) {
  return [
    ["Оленою", "заявником"],
    ["Олені", "заявнику"],
    ["Олени", "заявника"],
    ["Олена", "Заявник"],
  ].reduce(
    (result, [search, replacement]) =>
      replaceLegalText(result, search, replacement),
    value
  )
}

const specialActCitation = (label: string) =>
  foreignersLaw.external(label, UKRAINE_SPECIAL_ACT_URL)

const embeddedCaseCitations: readonly [string, LegalTextValue][] = [
  [
    "art. 114–126",
    foreignersLaw.text`${foreignersLaw.articleRange("114", "126", { start: "art. 114" })}`,
  ],
  [
    "art. 117–118",
    foreignersLaw.text`${foreignersLaw.articleRange("117", "118", { start: "art. 117" })}`,
  ],
  [
    "art. 127–138",
    foreignersLaw.text`${foreignersLaw.articleRange("127", "138", { start: "art. 127" })}`,
  ],
  [
    "art. 142–143",
    foreignersLaw.text`${foreignersLaw.articleRange("142", "143", { start: "art. 142" })}`,
  ],
  [
    "art. 144–157f",
    foreignersLaw.text`${foreignersLaw.articleRange("144", "157f", { start: "art. 144" })}`,
  ],
  [
    "art. 158–169",
    foreignersLaw.text`${foreignersLaw.articleRange("158", "169", { start: "art. 158" })}`,
  ],
  [
    "art. 170–194",
    foreignersLaw.text`${foreignersLaw.articleRange("170", "194", { start: "art. 170" })}`,
  ],
  [
    "art. 195–206",
    foreignersLaw.text`${foreignersLaw.articleRange("195", "206", { start: "art. 195" })}`,
  ],
  [
    "art. 211–222a",
    foreignersLaw.text`${foreignersLaw.article("211", "art. 211")}–${foreignersLaw.external("222a", FOREIGNERS_2026_CHANGE_URL)}`,
  ],
  [
    "art. 211–212",
    foreignersLaw.text`${foreignersLaw.articleRange("211", "212", { start: "art. 211" })}`,
  ],
  [
    "Art. 5a",
    foreignersLaw.text`${foreignersLaw.external("Art. 5a", UKRAINE_SPECIAL_ACT_URL)}`,
  ],
  ["Art. 64 § 2 KPA", kpaLaw.text`${kpaLaw.article("64", "Art. 64 § 2 KPA")}`],
  ["Art. 64 KPA", kpaLaw.text`${kpaLaw.article("64", "Art. 64 KPA")}`],
  [
    "Załącznik nr 1",
    residenceFormLaw.text`${residenceFormLaw.annex("1", "Załącznik nr 1")}`,
  ],
  [
    "Art. 106d",
    foreignersLaw.text`${foreignersLaw.external("Art. 106d", FOREIGNERS_2026_CHANGE_URL)}`,
  ],
  [
    "Art. 106e",
    foreignersLaw.text`${foreignersLaw.external("Art. 106e", FOREIGNERS_2026_CHANGE_URL)}`,
  ],
  [
    "art. 106e",
    foreignersLaw.text`${foreignersLaw.external("art. 106e", FOREIGNERS_2026_CHANGE_URL)}`,
  ],
  [
    "Art. 106f",
    foreignersLaw.text`${foreignersLaw.external("Art. 106f", FOREIGNERS_2026_CHANGE_URL)}`,
  ],
  [
    "art. 106f",
    foreignersLaw.text`${foreignersLaw.external("art. 106f", FOREIGNERS_2026_CHANGE_URL)}`,
  ],
  [
    "106i",
    foreignersLaw.text`${foreignersLaw.external("106i", FOREIGNERS_2026_CHANGE_URL)}`,
  ],
  [
    "art. 42c–42u",
    foreignersLaw.text`${specialActCitation("art. 42c")}–${specialActCitation("42u")}`,
  ],
  [
    "Art. 42c–42u",
    foreignersLaw.text`${specialActCitation("Art. 42c")}–${specialActCitation("42u")}`,
  ],
  ["art. 42g", foreignersLaw.text`${specialActCitation("art. 42g")}`],
  ["Art. 42g", foreignersLaw.text`${specialActCitation("Art. 42g")}`],
  ["art. 114", foreignersLaw.text`${foreignersLaw.article("114", "art. 114")}`],
  ["Art. 114", foreignersLaw.text`${foreignersLaw.article("114", "Art. 114")}`],
  ["Art. 121", foreignersLaw.text`${foreignersLaw.article("121", "Art. 121")}`],
  ["art. 127", foreignersLaw.text`${foreignersLaw.article("127", "art. 127")}`],
  ["Art. 127", foreignersLaw.text`${foreignersLaw.article("127", "Art. 127")}`],
  ["art. 142", foreignersLaw.text`${foreignersLaw.article("142", "art. 142")}`],
  ["art. 144", foreignersLaw.text`${foreignersLaw.article("144", "art. 144")}`],
  ["art. 195", foreignersLaw.text`${foreignersLaw.article("195", "art. 195")}`],
  ["art. 196", foreignersLaw.text`${foreignersLaw.article("196", "art. 196")}`],
  ["art. 211", foreignersLaw.text`${foreignersLaw.article("211", "art. 211")}`],
  ["art. 212", foreignersLaw.text`${foreignersLaw.article("212", "art. 212")}`],
  ["art. 61", foreignersLaw.text`${foreignersLaw.article("61", "art. 61")}`],
]

function authorLegacyCaseText(value: string): LegalTextValue {
  switch (value) {
    case "Załącznik nr 1":
      return residenceFormLaw.text`${residenceFormLaw.annex("1", "Załącznik nr 1")}`
    case "Art. 42c–42u specustawy":
      return foreignersLaw.text`${specialActCitation("Art. 42c")}–${specialActCitation("42u")} specustawy`
    case "art. 42c–42u specustawy":
      return foreignersLaw.text`${specialActCitation("art. 42c")}–${specialActCitation("42u")} specustawy`
    case "Art. 42g; вимоги UdSC":
      return foreignersLaw.text`${specialActCitation("Art. 42g")}; вимоги UdSC`
    case "art. 42g":
      return foreignersLaw.text`${specialActCitation("art. 42g")}`
    case "Art. 42c, 42g і 42r":
      return foreignersLaw.text`${specialActCitation("Art. 42c")}, ${specialActCitation("42g")} і ${specialActCitation("42r")}`
    case "Art. 42c":
      return foreignersLaw.text`${specialActCitation("Art. 42c")}`
    case "Art. 42g; процедура MOS":
      return foreignersLaw.text`${specialActCitation("Art. 42g")}; процедура MOS`
    case "Art. 42e і 42s":
      return foreignersLaw.text`${specialActCitation("Art. 42e")} і ${specialActCitation("42s")}`
    case "Art. 42s":
      return foreignersLaw.text`${specialActCitation("Art. 42s")}`
    case "Art. 42r":
      return foreignersLaw.text`${specialActCitation("Art. 42r")}`
    case "Art. 42l":
      return foreignersLaw.text`${specialActCitation("Art. 42l")}`
    case "Правила tymczasowej ochrony + art. 42c":
      return foreignersLaw.text`Правила tymczasowej ochrony + ${specialActCitation("art. 42c")}`
    case "Art. 127–129 KPA":
      return kpaLaw.text`${kpaLaw.articleRange("127", "129", { start: "Art. 127", end: "129 KPA" })}`
    case "Art. 42r ust. 2":
      return foreignersLaw.text`${specialActCitation("Art. 42r ust. 2")}`
    case "Art. 42u":
      return foreignersLaw.text`${specialActCitation("Art. 42u")}`
    case "Art. 42t":
      return foreignersLaw.text`${specialActCitation("Art. 42t")}`
    case "Art. 105–107, 106c–106l":
      return foreignersLaw.text`${foreignersLaw.articleRange("105", "107")}, ${foreignersLaw.external("106c", FOREIGNERS_2026_CHANGE_URL)}–${foreignersLaw.external("106l", FOREIGNERS_2026_CHANGE_URL)}`
    case "art. 106d / 114":
      return foreignersLaw.text`${foreignersLaw.external("art. 106d", FOREIGNERS_2026_CHANGE_URL)} / ${foreignersLaw.article("114", "114")}`
    case "Art. 106e; процедура MOS":
      return foreignersLaw.text`${foreignersLaw.external("Art. 106e", FOREIGNERS_2026_CHANGE_URL)}; процедура MOS`
    case "Art. 106d; art. 114 і 118":
      return foreignersLaw.text`${foreignersLaw.external("Art. 106d", FOREIGNERS_2026_CHANGE_URL)}; ${foreignersLaw.article("114", "art. 114")} і ${foreignersLaw.article("118", "118")}`
    case "Art. 114":
      return foreignersLaw.text`${foreignersLaw.article("114")}`
    case "Art. 114 ust. 1 pkt 1; ust. 4a":
      return foreignersLaw.text`${foreignersLaw.article("114", "Art. 114 ust. 1 pkt 1; ust. 4a")}`
    case "Art. 32–33 KPA + правила MOS":
      return kpaLaw.text`${kpaLaw.articleRange("32", "33", { start: "Art. 32", end: "33 KPA" })} + правила MOS`
    case "Art. 114 + правила доказів":
      return foreignersLaw.text`${foreignersLaw.article("114", "Art. 114")} + правила доказів`
    case "Art. 106e і 106i":
      return foreignersLaw.text`${foreignersLaw.external("Art. 106e", FOREIGNERS_2026_CHANGE_URL)} і ${foreignersLaw.external("106i", FOREIGNERS_2026_CHANGE_URL)}`
    case "Art. 106f":
      return foreignersLaw.text`${foreignersLaw.external("Art. 106f", FOREIGNERS_2026_CHANGE_URL)}`
    case "Art. 112a":
      return foreignersLaw.text`${foreignersLaw.article("112a")}`
    case "Art. 112a ust. 4":
      return foreignersLaw.text`${foreignersLaw.article("112a", "Art. 112a ust. 4")}`
    case "Art. 121 і 123":
      return foreignersLaw.text`${foreignersLaw.article("121", "Art. 121")} і ${foreignersLaw.article("123", "123")}`
    case "Art. 5a ustawy o zatrudnianiu cudzoziemców":
      return workLaw.text`${workLaw.external("Art. 5a ustawy o zatrudnianiu cudzoziemców", UKRAINE_SPECIAL_ACT_URL)}`
    case "Art. 64 §2 KPA":
      return kpaLaw.text`${kpaLaw.article("64", "Art. 64 § 2 KPA")}`
    default:
      return embeddedCaseCitations.reduce<LegalTextValue>(
        (result, [search, replacement]) =>
          replaceLegalText(result, search, replacement),
        value
      )
  }
}

function authorCaseContent<T>(value: T): T {
  if (typeof value === "string") {
    return neutralizeLegacyCaseText(authorLegacyCaseText(value)) as T
  }
  if (!value || typeof value !== "object") return value
  if ("kind" in value && value.kind === "authored-legal-text") return value
  if (Array.isArray(value)) return value.map(authorCaseContent) as T
  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, authorCaseContent(item)])
  ) as T
}

function sourceWithLegalNote(source: OfficialSource): CaseGuideSource {
  if (source.note === "Art. 42c–42u: умови, процедура та наслідки CUKR") {
    return {
      ...source,
      note: foreignersLaw.text`${specialActCitation("Art. 42c")}–${specialActCitation("42u")}: умови, процедура та наслідки CUKR`,
    }
  }
  return source
}

function sourcesFor(nodeIds: string[]) {
  const sources = nodeIds.flatMap(
    (nodeId) => nodeById.get(nodeId)?.sources ?? []
  )
  const unique = new Map<string, CaseGuideSource>()
  for (const source of sources) {
    unique.set(source.url, sourceWithLegalNote(source))
  }
  return [...unique.values()]
}

function stageRisk(
  title: string,
  explanation: LegalTextValue,
  check: LegalTextValue
): CaseGuideStageRisk {
  return { title, explanation, check }
}

function workDocument(
  item: LegalTextValue,
  owner: LegalTextValue,
  proves: LegalTextValue,
  law: LegalTextValue
): CaseGuideDocument {
  return {
    item,
    status: "робочий документ",
    level: "control",
    owner,
    proves,
    law,
  }
}

function uniqueDocuments(documents: CaseGuideDocument[]) {
  return [
    ...new Map(
      documents.map((document) => [legalTextPlainText(document.item), document])
    ).values(),
  ]
}

function documentsMatching(documents: CaseGuideDocument[], terms: string[]) {
  const normalizedTerms = terms.map((term) => term.toLocaleLowerCase("pl"))

  return documents.filter((document) => {
    const value = `${legalTextPlainText(document.item)} ${legalTextPlainText(
      document.owner
    )} ${legalTextPlainText(document.proves)}`.toLocaleLowerCase("pl")
    return normalizedTerms.some((term) => value.includes(term))
  })
}

function makeStages(
  spec: RouteSpec,
  documentRegister: CaseGuideDocument[]
): CaseGuideStage[] {
  const routeMaterial = mapMaterial(
    spec.primaryNode,
    `Карта права: ${spec.tab}`,
    "Відкриває матеріальну підставу, її межі та пов’язані норми."
  )
  const secondaryMaterial = spec.secondaryNode
    ? mapMaterial(
        spec.secondaryNode,
        "Найближчий пов’язаний інститут",
        "Допомагає не змішати цю підставу із сусіднім маршрутом."
      )
    : mapMaterial(
        "goal-of-stay",
        "Як визначити мету перебування",
        "Повертає до вибору правдивої головної мети справи."
      )

  const statusDocuments = uniqueDocuments([
    ...documentsMatching(documentRegister, [
      "паспорт",
      "pesel",
      "status",
      "істор",
      "виїзд",
      "pobyt",
      "рішен",
    ]),
    workDocument(
      "Хронологія перебування, виїздів і попередніх справ",
      "Працівник легалізації разом із заявником · до правової кваліфікації",
      "Критичні дати, безперервність статусу та події, які могли змінити правовий режим",
      "Фактична основа вибору матеріальної норми"
    ),
  ])
  const qualificationDocuments = uniqueDocuments([
    workDocument(
      "Матриця умов обраного маршруту",
      "Працівник легалізації · до заповнення заяви",
      "Кожну позитивну умову, виняток, негативну передумову та факт, якого ще бракує",
      "Ustawa o cudzoziemcach або інший lex specialis маршруту"
    ),
    workDocument(
      "Письмовий висновок про вибір підстави",
      "Працівник легалізації · після порівняння найближчих маршрутів",
      "Чому факти відповідають саме цій підставі та чому сусідня підстава не є точнішою",
      "Правова кваліфікація cel pobytu"
    ),
    ...documentsMatching(
      documentRegister,
      spec.documentItems.map((document) => legalTextPlainText(document.item))
    ),
  ])
  const filingDocuments = uniqueDocuments([
    ...documentsMatching(documentRegister, [
      "wniosek",
      "заяв",
      "mos",
      "upo",
      "фото",
      "паспорт",
      "opłata",
      "оплат",
      "підпис",
      "odcisk",
      "pełnomocnictwo",
      "профіль",
    ]),
    workDocument(
      "Індекс вкладень і контрольна копія подання",
      "Особа, яка комплектує пакет · безпосередньо перед wysłaniem",
      "Точний склад поданого пакета, назви файлів, версії документів і можливість відтворити заяву",
      "Контроль treści podania та майбутніх akt sprawy"
    ),
  ])
  const evidenceDocuments = uniqueDocuments([
    ...documentRegister,
    workDocument(
      "Доказова матриця: умова → факт → доказ",
      "Працівник легалізації · до подання та після кожного wezwania",
      "Який документ доводить кожну умову, за який період і де залишається прогалина або суперечність",
      "KPA — ustalenie stanu faktycznego та ocena dowodów"
    ),
  ])
  const procedureDocuments = uniqueDocuments([
    ...documentsMatching(documentRegister, [
      "upo",
      "pełnomocnictwo",
      "oryginał",
      "оригінал",
      "odcisk",
      "особист",
    ]),
    workDocument(
      "Журнал doręczeń, строків і процесуальних дій",
      "Працівник легалізації / представник · від першого doręczenia до завершення справи",
      "Дату й спосіб вручення, початок кожного строку, виконану дію та доказ її подання",
      "KPA + спеціальні строки процедури pobytowej"
    ),
    workDocument(
      "Wezwania та відповіді з індексом додатків",
      "Адресат wezwania · окремий комплект для кожної вимоги",
      "Який пункт вимоги виконано, яким доказом і в який строк",
      "KPA та спеціальна процедура dowodowa"
    ),
    workDocument(
      "Копія або нотатка з akt sprawy",
      "Сторона / представник · перед рішенням і після появи нового матеріалу",
      "Які докази має organ, які факти вважає спірними та чи є матеріал, на який треба відреагувати",
      "KPA — czynny udział strony та dostęp do akt"
    ),
  ])
  const decisionDocuments = uniqueDocuments([
    ...documentsMatching(documentRegister, [
      "odbiór",
      "карт",
      "powiadomienie",
      "повідом",
    ]),
    workDocument(
      "Decyzja або інший акт, що завершує маршрут",
      "Заявник / представник · одразу після doręczenia",
      "Точний результат, строк статусу, умови праці, uzasadnienie та доступний засіб захисту",
      "KPA + матеріальна норма обраного маршруту"
    ),
    workDocument(
      "Доказ doręczenia рішення та отримання карти",
      "Заявник / представник · у день кожної окремої події",
      "Початок строку оскарження та — якщо закон так визначає — момент виконання або виникнення статусу",
      "Pouczenie, KPA та спеціальні правила видачі документа"
    ),
    workDocument(
      "План обов’язків після рішення",
      "Працівник легалізації разом із заявником · до закриття внутрішнього контролю справи",
      "Строки повідомлень, допустимі зміни, обов’язки щодо праці, адреси, навчання або діяльності",
      "Post-decision duties конкретного маршруту"
    ),
  ])

  return [
    {
      id: "status",
      title: "Фіксуємо особу, статус і критичні дати",
      question: "Хто ця особа на дату кожної важливої події?",
      explanation: [
        "Справа починається не з форми MOS, а з хронології. Громадянство, документ, чинна підстава перебування, виїзди та попередні заяви визначають, чи маршрут узагалі доступний і які правила діятимуть під час розгляду.",
        spec.stageFocus[0],
      ],
      actor: "Працівник легалізації разом із заявником",
      actions: [
        "Зібрати всі документи pobytowe та дати їх чинності.",
        "Побудувати одну хронологію в’їздів, виїздів, заяв і рішень.",
        "Позначити факти, які підтверджені реєстром, і факти лише зі слів заявника.",
      ],
      outcome:
        "Картка особи й хронологія, на яких можна безпечно будувати правову кваліфікацію.",
      documents: statusDocuments,
      risks: [
        stageRisk(
          "Неправильна дата факту",
          "Одна й та сама особа може мати різний статус у день в’їзду, подання, рішення й отримання карти. Якщо поставити факт не на ту дату, можна вибрати неправильну редакцію закону або маршрут.",
          "Для кожної критичної дати знайдіть окремий документ або реєстрове підтвердження; не переносіть поточний статус назад у часі."
        ),
        stageRisk(
          "Непомічена паралельна справа",
          "Інша заява, рішення або незавершене провадження може змінювати допустимість маршруту чи наслідки нового подання.",
          "Звірте UPO, листування, MOS та akta попередніх справ і внесіть кожне провадження в одну хронологію."
        ),
        stageRisk(
          "Розрив у законності перебування",
          "Пізніший документ не завжди виправляє попередній період і не підтверджує безперервність автоматично.",
          "Перевірте підставу перебування день за днем у сумнівному проміжку та окремо зафіксуйте періоди, які потребують правового пояснення."
        ),
      ],
      materials: [
        mapMaterial(
          "person-status",
          "Особа і правовий статус",
          "Пояснює, які статуси й дати треба зафіксувати."
        ),
        mapMaterial(
          "entry-current-basis",
          "В’їзд і поточна підстава",
          "Допомагає відокремити документ від реальної підстави перебування."
        ),
      ],
    },
    {
      id: "qualification",
      title: "Перевіряємо доступність саме цього маршруту",
      question: "Яка норма найточніше описує реальну мету й факти?",
      explanation: [
        "Назва вкладки ще не означає, що підстава підходить. Тут ми зіставляємо факти з позитивними умовами, виключеннями, odmową wszczęcia та найближчою альтернативою. Якщо головна умова не виконується, змінюється маршрут, а не формулювання заяви.",
        spec.stageFocus[1],
      ],
      actor: "Працівник легалізації",
      actions: [
        "Назвати точний очікуваний статус і статті спеціального закону.",
        "Розкласти підставу на позитивні й негативні умови.",
        "Порівняти з найближчою альтернативою та письмово зафіксувати вибір.",
      ],
      outcome:
        "Письмовий висновок: маршрут доступний, умовно доступний або його треба змінити.",
      documents: qualificationDocuments,
      risks: [
        stageRisk(
          "Вибір за назвою документа",
          "Назва карти або форми не визначає матеріальну підставу. Вирішальними є реальна головна мета і факти, передбачені конкретною нормою.",
          "Запишіть одним реченням очікуваний статус і норму, яка його створює, а потім перевірте кожну її умову."
        ),
        stageRisk(
          "Ігнорування lex specialis",
          "Спеціальна норма може змінювати organ, спосіб подання, строк, перелік умов або наслідок порівняно із загальним правилом.",
          "Поруч із загальною нормою випишіть спеціальну та позначте, яке саме правило вона замінює."
        ),
        stageRisk(
          "Умови взято з іншої підстави",
          "Документи сусіднього маршруту створюють видимість повноти, але не доводять вирішальної умови обраного дозволу.",
          "Для кожного документа назвіть конкретну умову саме цього маршруту; якщо зв’язку немає, не вважайте його основним доказом."
        ),
      ],
      materials: [routeMaterial, secondaryMaterial],
    },
    {
      id: "filing",
      title: "Готуємо правильне подання через MOS",
      question: "Хто, куди, коли й у якій формі подає заяву?",
      explanation: [
        "Після вибору підстави визначаємо właściwego wojewodę, електронну форму, підпис, додатки, оплати та особисті дії. Формальна правильність не доводить матеріальні умови, але без неї справа може не отримати належного ходу.",
        spec.stageFocus[2],
      ],
      actor: "Заявник, представник і — коли потрібно — інша сторона додатка",
      actions: [
        "Визначити organ і перевірити, чи діє обов’язок MOS або виняток.",
        "Заповнити заяву однаковими даними в усіх полях і додатках.",
        "Зберегти UPO, PDF/XML заяви та точний перелік вкладень.",
      ],
      outcome:
        "Відтворюваний контрольний пакет подання з доказом дати й змісту.",
      documents: filingDocuments,
      risks: [
        stageRisk(
          "Різні дані у формі та доказах",
          "Розбіжність у даті, назві podmiotu, посаді, адресі або номері документа створює сумнів, який потім переходить у wezwanie або оцінку матеріальної умови.",
          "Перед wysłaniem порівняйте ключові поля MOS з паспортом, договорами, додатками й реєстрами за одним контрольним аркушем."
        ),
        stageRisk(
          "Немає підпису або обов’язкового додатка",
          "Електронно заповнена форма ще не означає належно подану заяву; спосіб підпису та роль автора додатка мають відповідати процедурі.",
          "Відкрийте фінальну версію заяви, перевірте статус підпису кожної зобов’язаної особи та звірте індекс вкладень з UPO."
        ),
        stageRisk(
          "Використано неправильний канал подання",
          "Паперове або електронне подання поза передбаченим каналом може не запустити очікуваної процедури.",
          "Зафіксуйте норму про форму подання і, якщо застосовується виняток, додайте його підставу до контрольного пакета."
        ),
      ],
      materials: [
        mapMaterial(
          "mos-procedure",
          "Подання через MOS",
          "Пояснює електронну процедуру та особисті дії після подання."
        ),
        kpaMaterials.initiation,
      ],
    },
    {
      id: "evidence",
      title: "Будуємо доказову матрицю, а не список файлів",
      question: "Який факт і який доказ виконують кожну умову?",
      explanation: [
        "Кожна матеріальна умова отримує окремий рядок: норма, факт, який треба встановити, доказ, період і можливе протиріччя. Документ, який не доводить жодної умови, не робить пакет сильнішим; натомість один слабкий ключовий факт може визначити всю справу.",
        spec.stageFocus[3],
      ],
      actor: "Працівник легалізації, заявник і автори зовнішніх документів",
      actions: [
        "Прив’язати кожен доказ до конкретної умови.",
        "Перевірити дати, суми, назви, підписантів і реєстрові дані.",
        "Позначити відсутні докази та підготувати коротке пояснення складних зв’язків.",
      ],
      outcome:
        "Матриця умова → факт → доказ із видимими прогалинами й суперечностями.",
      documents: evidenceDocuments,
      risks: [
        stageRisk(
          "Формальна повнота без матеріального доказу",
          "У пакеті можуть бути всі названі файли, але жоден із них не встановлює ключовий факт у потрібний період.",
          "Для кожної умови вкажіть один головний доказ, дату або період, джерело і те, чого він не підтверджує."
        ),
        stageRisk(
          "Застарілий або суперечливий документ",
          "Стара версія договору, інші суми чи різні підписанти послаблюють весь ланцюг доказів, навіть якщо кожен файл окремо виглядає правильним.",
          "Зіставте дати, суми, назви, підписи й реєстрові дані між усіма документами; суперечність поясніть до подання."
        ),
        stageRisk(
          "Документ доводить інший факт",
          "Наприклад, існування компанії не доводить реальність конкретної роботи, а umowa не завжди доводить фактичне виконання її умов.",
          "Сформулюйте факт, який organ має встановити, і перевірте, чи зміст документа прямо або разом з іншими доказами відповідає саме на нього."
        ),
      ],
      materials: [
        mapMaterial(
          "document-matrix",
          "Матриця документів",
          "Показує зв’язок між нормою, фактом і доказом."
        ),
        mapMaterial(
          "evidence-matrix",
          "Формальна й матеріальна повнота",
          "Допомагає правильно визначити наслідок нестачі."
        ),
        kpaMaterials.evidence,
      ],
    },
    {
      id: "procedure",
      title: "Контролюємо провадження і відповіді на wezwania",
      question: "Що орган перевіряє зараз і який процесуальний крок наступний?",
      explanation: [
        "Після подання справа переходить у процедуру: doręczenia, braki formalne, особиста явка, матеріальні докази, доступ до akt і можливість висловитися. Кожне wezwanie читаємо як окрему процесуальну дію з адресатом, строком, вимогою та наслідком.",
        spec.stageFocus[4],
      ],
      actor: "Wojewoda, заявник і представник",
      actions: [
        "Зафіксувати дату кожного doręczenia і спосіб вручення.",
        "Розкласти wezwanie пункт за пунктом і відповісти доказом на кожну вимогу.",
        "Перед рішенням перевірити akta й відреагувати на нові або суперечливі факти.",
      ],
      outcome:
        "Журнал справи з активними строками, відповідями й доказами doręczenia.",
      documents: procedureDocuments,
      risks: [
        stageRisk(
          "Змішані формальна і матеріальна вимоги",
          "Різні види wezwania мають різну правову підставу та різний наслідок невиконання. Універсальна відповідь приховує цю різницю.",
          "Для кожного пункту wezwania випишіть норму, строк, запитаний факт і наслідок; лише потім комплектуйте відповідь."
        ),
        stageRisk(
          "Відповідь без доказу подання",
          "Навіть повна відповідь не захищає сторону, якщо в актах немає підтвердження її змісту та дати надсилання.",
          "Збережіть UPO або інше підтвердження разом із фінальною версією відповіді та незмінним індексом додатків."
        ),
        stageRisk(
          "Пропущено строк або один пункт wezwania",
          "Орган оцінює виконання вимоги пункт за пунктом; відповідь на більшість питань не усуває нестачі щодо вирішального факту.",
          "Ведіть журнал строків і перед wysłaniem закрийте кожен пункт окремим доказом, поясненням або конкретним клопотанням."
        ),
      ],
      materials: [
        mapMaterial(
          "wezwanie-workflow",
          "Як працювати з wezwanie",
          "Дає порядок розбору вимоги й підготовки відповіді."
        ),
        mapMaterial(
          "case-file",
          "Akta sprawy",
          "Пояснює, навіщо читати матеріал органу перед рішенням."
        ),
        kpaMaterials.summons,
      ],
    },
    {
      id: "decision",
      title: "Читаємо рішення, карту й обов’язки після нього",
      question: "Коли виникає статус і що змінюється після рішення?",
      explanation: [
        "Decyzja, її остаточність і фізична karta pobytu — не завжди одна й та сама юридична подія. Потрібно окремо прочитати rozstrzygnięcie, строк дозволу, доступ до праці, обов’язки повідомлення та засіб оскарження.",
        spec.stageFocus[5],
      ],
      actor: "Заявник, wojewoda, а в негативній гілці — Szef UdSC",
      actions: [
        "Зіставити rozstrzygnięcie з заявленою підставою й установленими фактами.",
        "Зафіксувати момент виникнення статусу та окремо строк ważności карти.",
        "Виписати post-decision duties, тригери зміни та строк оскарження.",
      ],
      outcome:
        "Картка наслідків рішення: статус, praca, зміни, оскарження й наступний маршрут.",
      documents: decisionDocuments,
      risks: [
        stageRisk(
          "Карту ототожнено з моментом виникнення дозволу",
          "Фізичний документ, decyzja, її остаточність і момент виникнення статусу можуть бути різними юридичними подіями.",
          "Окремо випишіть дату акта, doręczenia, остаточності, odbioru карти та норму, яка визначає юридичний наслідок."
        ),
        stageRisk(
          "Не прочитано treści rozstrzygnięcia",
          "Позитивний заголовок не показує строку, умов роботи, обмежень або точного обсягу наданого права.",
          "Перепишіть результат рішення своїми словами і звірте його з заявленою підставою, uzasadnieniem та даними на карті."
        ),
        stageRisk(
          "Пропущено odwołanie або обов’язок повідомлення",
          "Строк захисту й post-decision duties запускаються різними подіями та не контролюються автоматично після закриття справи.",
          "Створіть картку строків із тригером, адресатом, дією, доказом виконання та відповідальною особою."
        ),
      ],
      materials: [
        mapMaterial(
          "decision-reading",
          "Як читати рішення",
          "Розкладає decyzję на факти, норму, результат і pouczenie."
        ),
        spec.postDecisionMaterial ?? kpaMaterials.decision,
        kpaMaterials.appeal,
      ],
    },
  ]
}

function makeDocuments(spec: RouteSpec): CaseGuideDocument[] {
  const existing = legalData.caseStudy.routes.find(
    (route) => route.id === spec.id
  )
  if (existing) {
    return existing.documentRegister.map((document) => ({
      ...document,
      item: neutralizeLegacyCaseText(authorLegacyCaseText(document.item)),
      owner: neutralizeLegacyCaseText(authorLegacyCaseText(document.owner)),
      proves: neutralizeLegacyCaseText(authorLegacyCaseText(document.proves)),
      law: neutralizeLegacyCaseText(authorLegacyCaseText(document.law)),
    }))
  }

  const common: CaseGuideDocument[] = [
    {
      item: "Wniosek MOS + UPO",
      status: "обов’язково",
      level: "required",
      owner: "Заявник / представник · у момент подання",
      proves: "Дату, зміст і спосіб початку справи",
      law: "Ustawa o cudzoziemcach + процедура MOS",
    },
    {
      item: "Дійсний паспорт, фото й особиста дія",
      status: "обов’язково",
      level: "required",
      owner: "Заявник · подання та wezwanie органу",
      proves: "Особу й виконання формальних вимог",
      law: "Спеціальна процедура pobytowa",
    },
  ]

  return [
    ...common,
    ...spec.documentItems.map<CaseGuideDocument>((document) => ({
      item: document.item,
      status:
        document.level === "conditional"
          ? "за обставинами"
          : document.level === "control"
            ? "контроль"
            : "основний доказ",
      level: document.level ?? "required",
      owner: "Заявник або автор документа · актуально на дату перевірки",
      proves: document.proves,
      law: document.law,
    })),
  ]
}

function makeDeadlines(spec: RouteSpec): CaseGuideDeadline[] {
  const existing = legalData.caseStudy.routes.find(
    (route) => route.id === spec.id
  )
  if (existing) {
    return existing.deadlines.map((deadline) => ({
      ...deadline,
      period: neutralizeLegacyCaseText(authorLegacyCaseText(deadline.period)),
      trigger: neutralizeLegacyCaseText(authorLegacyCaseText(deadline.trigger)),
      action: neutralizeLegacyCaseText(authorLegacyCaseText(deadline.action)),
      consequence: neutralizeLegacyCaseText(
        authorLegacyCaseText(deadline.consequence)
      ),
      law: neutralizeLegacyCaseText(authorLegacyCaseText(deadline.law)),
    }))
  }

  return [
    {
      period: "строк із wezwania",
      trigger: "належне doręczenie вимоги органу",
      action: "Виконати кожен пункт і зберегти доказ подання відповіді.",
      consequence:
        "Залежить від типу вимоги: формальний недолік, матеріальна нестача або невиконана особиста дія мають різні наслідки.",
      law: "Art. 64 KPA та спеціальні норми Ustawy o cudzoziemcach",
    },
    {
      period: "строк із pouczenia",
      trigger: "doręczenie decyzji або postanowienia",
      action: "Звірити засіб захисту, адресата й початок відліку з KPA.",
      consequence:
        "Пропуск може закрити звичайний шлях оскарження, якщо строк не буде поновлено.",
      law: "KPA — odwołanie / zażalenie залежно від виду акта",
    },
    {
      period: "після зміни факту",
      trigger: "зміна мети, сімейного зв’язку, навчання, роботи або діяльності",
      action:
        "Перевірити спеціальний обов’язок повідомлення, зміни дозволу або нової заяви.",
      consequence:
        "Неповідомлена зміна може вплинути на чинність дозволу або наступну справу.",
      law: `Спеціальні правила маршруту ${spec.tab}`,
    },
  ]
}

function makeNegativeBranches(
  spec: RouteSpec
): CaseGuideRoute["negativeBranches"] {
  return [
    {
      title: "Маршрут не відповідає фактам",
      trigger: `Не виконується вирішальний критерій: ${spec.choice.gate}`,
      consequence:
        "Документи не виправлять неправильну правову кваліфікацію; справа ризикує odmową wszczęcia або odmową по суті.",
      response:
        "Повернутися до карти цілей, вибрати точну підставу й перебудувати матрицю умов до подання.",
      material: mapMaterial(
        "goal-of-stay",
        "Перевірити мету перебування",
        "Порівняти сусідні маршрути до нового подання."
      ),
    },
    {
      title: "Wezwanie виконано неповністю",
      trigger:
        "Відповідь не охоплює один із пунктів, не має доказу або подана після строку.",
      consequence:
        "Наслідок залежить від виду вимоги: від pozostawienia bez rozpoznania до рішення на неповному матеріалі.",
      response:
        "Встановити правову підставу кожного пункту, строк і наслідок; за потреби пояснити перешкоду та подати відсутній доказ.",
      material: mapMaterial(
        "wezwanie-workflow",
        "Розібрати wezwanie",
        "Побудувати відповідь пункт за пунктом."
      ),
    },
    {
      title: "Негативне рішення",
      trigger:
        "Organ встановив невиконану умову, негативну передумову або процесуальну перешкоду.",
      consequence:
        "Потрібно відокремити помилку у фактах, доказах, тлумаченні норми й процедурі.",
      response:
        "Зафіксувати дату doręczenia, прочитати uzasadnienie й pouczenie, після чого сформувати żądanie та zarzuty odwołania.",
      material: kpaMaterials.appeal,
    },
  ]
}

const commonMetrics = [
  { label: "Орган першої інстанції", value: "Właściwy wojewoda" },
  { label: "Канал", value: "MOS, якщо закон не встановлює винятку" },
]

const routeSpecs: RouteSpec[] = [
  {
    id: "cukr",
    tab: "CUKR",
    eyebrow: "Спеціальний маршрут для особи зі status UKR",
    title: "Karta CUKR — повний гайд по справі",
    subtitle:
      "Від перевірки безперервності UKR до особистого отримання карти й обов’язків після нього",
    overview: [
      "CUKR не є звичайним zezwoleniem na pobyt czasowy i pracę. Це спеціальний трирічний статус, для якого вирішальними є факти про status UKR, повноту даних у реєстрі, спосіб подання та osobisty odbiór карти.",
      "Робота не доводить умови CUKR, але право працювати до й після переходу треба аналізувати окремо. Так само окремо перевіряється доля незавершеної звичайної справи pobytowej.",
    ],
    result:
      "За виконання спеціальних умов особа отримує трирічний статус CUKR у момент, визначений specustawą, а не просто після появи позитивної інформації в системі.",
    forWhom:
      "Для особи з належною історією status UKR, яка виконує спеціальні умови CUKR і свідомо обирає перехід із тимчасового захисту.",
    notFor:
      "Не обирається лише тому, що особа працює або хоче фізичну карту; спочатку порівнюємо UKR, CUKR і звичайний pobyt.",
    profile: {
      name: "Особа з активним PESEL UKR",
      description:
        "Для цього маршруту перевіряємо особу з активним PESEL UKR, яка працює за umową o pracę і планує довгостроково залишитися в Польщі. Робота є важливим фактом життя, але не матеріальною умовою CUKR.",
      facts: [
        { label: "Поточний статус", value: "PESEL UKR — активний" },
        {
          label: "Критична дата",
          value: "status UKR перевіряється також на 04.06.2025",
        },
        {
          label: "Робота",
          value: "umowa o pracę; powiadomienie перевіряється окремо",
        },
        {
          label: "Паралельні справи",
          value: "потрібно перевірити MOS та akta",
        },
      ],
      assumption:
        "Безперервність status UKR, тривалість виїздів, повнота даних паспорта/підпису/відбитків і відсутність перешкод ще мають бути підтверджені.",
    },
    choice: {
      why: "Факти особи можуть відповідати спеціальному CUKR, а метою маршруту є стабільний статус без доведення матеріальних умов роботи. Тому спочатку перевіряємо спеціальні умови, а не готуємо Załącznik nr 1 як для звичайного pobytu i pracy.",
      closestAlternative:
        "Залишитися на status UKR до кінця його дії або подати доступну звичайну заяву pobytową, якщо її матеріальні умови краще відповідають цілям особи.",
      gate: "Безперервна й належна історія status UKR та виконання всіх спеціальних умов CUKR.",
    },
    metrics: [
      ...commonMetrics,
      {
        label: "Що доводить робота",
        value: "Право працювати аналізується окремо; робота не є умовою CUKR",
      },
      {
        label: "Ключовий момент",
        value: "Особистий odbiór карти має окреме юридичне значення",
      },
    ],
    primaryNode: "cukr-route-2026",
    secondaryNode: "ukraine-routes-2026",
    stageFocus: [
      "Для CUKR особливо важлива безперервність UKR, статус на критичну дату, виїзди та повнота даних у PESEL.",
      "Порівняння з UKR і звичайним pobytem є частиною правового аналізу, бо кожен маршрут інакше змінює статус і незавершені справи.",
      "У поданні CUKR не підміняємо спеціальні вимоги пакетом працівника; перевіряємо саме дані, фото, оплати й процедуру, передбачену specustawą.",
      "Доказова матриця концентрується на історії UKR, реєстрових даних, паспорті, виїздах та виконанні технічних умов CUKR.",
      "Орган звіряє реєстри й умови спеціального режиму; паралельно контролюємо, що відбувається з іншими справами заявника.",
      "У CUKR не можна автоматично переносити звичайну модель: треба окремо встановити момент виникнення статусу, odbiór карти й подальші повідомлення.",
    ],
    conditions: [
      {
        condition: "Належний status UKR",
        modelFact: "PESEL UKR активний",
        evidence: "дані реєстру + документ особи",
        status: "verify",
        risk: "реєстр або історія виїздів не підтвердять безперервність",
        law: "art. 42c–42u specustawy",
      },
      {
        condition: "Status на критичну дату",
        modelFact: "status UKR заявника на 04.06.2025",
        evidence: "історичні дані реєстру",
        status: "verify",
        risk: "інший статус на критичну дату",
        law: "спеціальні умови CUKR",
      },
      {
        condition: "Повні дані особи",
        modelFact: "паспорт, фото, підпис і біометрія мають бути повні",
        evidence: "PESEL/MOS + паспорт",
        status: "verify",
        risk: "неповні або неузгоджені дані",
        law: "процедура CUKR",
      },
      {
        condition: "Правильне подання й odbiór",
        modelFact: "подання через MOS і особиста дія заявника",
        evidence: "UPO, повідомлення, підтвердження odbioru",
        status: "conditional",
        risk: "невиконана особиста дія або строк",
        law: "specustawa + процедура CUKR",
      },
    ],
    documentItems: [
      {
        item: "Паспорт і дані PESEL UKR",
        proves: "Особу та спеціальний статус",
        law: "specustawa",
      },
      {
        item: "Історія status UKR і виїздів",
        proves: "Безперервність і відсутність перешкоди",
        law: "умови CUKR",
      },
      {
        item: "Фото, підпис, біометричні дані",
        proves: "Повноту реєстрових і карткових даних",
        law: "процедура CUKR",
      },
      {
        item: "UPO, оплати й odbiór карти",
        proves: "Виконання процесуальної послідовності",
        law: "процедура CUKR",
        level: "control",
      },
    ],
    postDecisionMaterial: mapMaterial(
      "work-entry",
      "Доступ до праці після зміни статусу",
      "Окремо перевірити підставу працювати й обов’язки роботодавця."
    ),
  },
  {
    id: "work",
    tab: "Pobyt + praca",
    eyebrow: "Звичайний тимчасовий pobyt, де головною метою є робота",
    title: "Pobyt czasowy i praca — повний гайд по справі",
    subtitle:
      "Від двох ключів pobyt + praca до treści decyzji та зміни роботодавця",
    overview: [
      "Це єдиний дозвіл, у якому робота є матеріальною метою перебування. Справа не зводиться до umowy o pracę: organ перевіряє весь набір умов, реального роботодавця, узгодженість Załącznika nr 1 і фактичної організації праці.",
      "Право перебувати під час процедури та право працювати під час процедури — різні питання. Подання заяви не виправляє попередню нелегальну роботу й не створює автоматично нового права працювати.",
    ],
    result:
      "Дозвіл на тимчасове перебування з метою роботи в межах, визначених законом і treścią decyzji.",
    forWhom:
      "Для особи, чия реальна головна мета перебування — конкретна робота, і яка виконує матеріальні умови art. 114 та не має негативних передумов.",
    notFor:
      "Не для ситуації, де робота другорядна щодо навчання, сім’ї чи іншої підстави, або фактична модель праці не відповідає заявленій.",
    profile: {
      name: "Працівник польської spółki на umowie o pracę",
      description:
        "Для цього маршруту перевіряємо працю на pełny etat за umową o pracę. Дані договору, Załącznika nr 1 і фактичної роботи мають описувати ту саму посаду, винагороду, час і podmiot.",
      facts: [
        { label: "Мета", value: "праця понад 3 місяці" },
        { label: "Договір", value: "umowa o pracę, pełny etat" },
        {
          label: "Роботодавець",
          value: "польська spółka; reprezentacja перевіряється",
        },
        {
          label: "Поточна praca",
          value: "окрема перевірка підстави й powiadomienia",
        },
      ],
      assumption:
        "Страхування, актуальна винагорода, реальність діяльності podmiotu, підписант і фактична організація роботи мають бути доведені.",
    },
    choice: {
      why: "Головною й реальною метою перебування є робота, тому матеріальні умови шукаємо в art. 114–126, а KPA використовуємо для процедури й доказів.",
      closestAlternative:
        "Blue Card — якщо робота справді вимагає високих кваліфікацій і виконані її спеціальні умови; CUKR/інша підстава — якщо робота не є матеріальною основою pobytu.",
      gate: "Реальна робота, що обґрунтовує pobyt понад 3 місяці, та виконання всіх позитивних умов art. 114.",
    },
    metrics: [
      ...commonMetrics,
      {
        label: "Матеріальна база",
        value: "art. 114–126 Ustawy o cudzoziemcach",
      },
      {
        label: "Ключовий контроль",
        value: "umowa = Załącznik nr 1 = фактичні умови праці",
      },
    ],
    primaryNode: "stay-work",
    secondaryNode: "work-entry",
    stageFocus: [
      "Окремо фіксуємо підставу pobytu та підставу виконувати поточну роботу на кожну дату.",
      "Розкладаємо art. 114, а потім перевіряємо odmowę wszczęcia, odmowę по суті й фактичну модель праці.",
      "Załącznik nr 1 заповнює належний podmiot, а всі дані мають збігатися з договором і MOS.",
      "Крім договору перевіряємо страхування, винагороду, reprezentację та — коли орган обґрунтовано сумнівається — діяльність роботодавця.",
      "Не змішуємо braki formalne, osobiste stawiennictwo й wezwanie про матеріальні докази: строки та наслідки різні.",
      "Після рішення читаємо, які умови праці реально вписані, чи діє exemption, і які зміни вимагають повідомлення або нової дії.",
    ],
    conditions: [
      {
        condition: "Мета роботи понад 3 місяці",
        modelFact: "працівник має тривалий договір",
        evidence: "umowa + Załącznik nr 1",
        status: "confirmed",
        risk: "коротка або штучна зайнятість",
        law: "art. 114",
      },
      {
        condition: "Страхування",
        modelFact: "покриття через роботу або іншу належну підставу",
        evidence: "ZUS / інший доказ",
        status: "verify",
        risk: "розрив покриття",
        law: "art. 114",
      },
      {
        condition: "Належна винагорода",
        modelFact: "сума з договору й додатка",
        evidence: "umowa, załącznik, payroll",
        status: "verify",
        risk: "нижча фактична виплата",
        law: "art. 114 у чинній редакції",
      },
      {
        condition: "Реальна заявлена праця",
        modelFact:
          "spółka керує роботою працівника й не передає його як персонал третій особі",
        evidence: "організація праці, umowy, polecenia",
        status: "verify",
        risk: "outsourcing pracowniczy або невідповідність podmiotu",
        law: "art. 117–118 + закон про працю cudzoziemców",
      },
    ],
    documentItems: [
      {
        item: "Umowa o pracę",
        proves: "Реальну мету й умови роботи",
        law: "art. 114",
      },
      {
        item: "Załącznik nr 1",
        proves: "Заявлені органу умови праці",
        law: "art. 106d / 114",
      },
      {
        item: "ZUS / страхування",
        proves: "Виконання умови покриття",
        law: "art. 114",
        level: "conditional",
      },
      {
        item: "KRS/CEIDG і reprezentacja",
        proves: "Існування podmiotu й право підпису",
        law: "контроль podmiotu",
        level: "control",
      },
    ],
    postDecisionMaterial: mapMaterial(
      "employer-duties",
      "Обов’язки роботодавця",
      "Перевірити повідомлення, відповідність договору й зміни після рішення."
    ),
  },
  {
    id: "blue-card",
    tab: "Blue Card",
    eyebrow: "Висококваліфікована зайнятість",
    title: "Niebieska Karta UE — повний гайд по справі",
    subtitle: "Кваліфікована робота, спеціальні умови й мобільність у ЄС",
    overview: [
      "Blue Card — не «краща карта працівника», а окрема підстава для роботи, що вимагає високих кваліфікацій. Спочатку доводимо характер посади, кваліфікації, договір і актуальний поріг винагороди.",
      "Через змінні пороги й правила мобільності числові значення завжди перевіряються в актуальній редакції та офіційних повідомленнях на дату справи.",
    ],
    result:
      "Спеціальний дозвіл для висококваліфікованої зайнятості з окремими правилами зміни роботи та мобільності.",
    forWhom:
      "Для працівника, чия конкретна посада потребує високих кваліфікацій і виконує спеціальні умови Blue Card.",
    notFor:
      "Не для будь-якої посади з високою зарплатою; кваліфікаційний характер роботи й законні пороги мають бути доведені.",
    profile: {
      name: "Працівник високої кваліфікації",
      description:
        "Для цього маршруту перевіряємо довгострокову пропозицію роботи, релевантний диплом і досвід. Потрібно довести, що саме ця посада вимагає високих кваліфікацій.",
      facts: [
        { label: "Посада", value: "senior data engineer" },
        { label: "Кваліфікації", value: "диплом + підтверджений досвід" },
        { label: "Договір", value: "binding offer / umowa на належний період" },
        { label: "Винагорода", value: "перевірити актуальний поріг" },
      ],
      assumption:
        "Відповідність кваліфікацій посаді, регульованість професії та чинний поріг винагороди ще перевіряються.",
    },
    choice: {
      why: "Характер роботи й кваліфікації працівника можуть відповідати спеціальному режиму, тому не застосовуємо автоматично звичайний pobyt i pracę.",
      closestAlternative:
        "Звичайний pobyt czasowy i pracę, якщо спеціальні умови Blue Card не виконані.",
      gate: "Посада реально вимагає високих кваліфікацій, а договір, кваліфікації й винагорода виконують актуальні вимоги.",
    },
    metrics: [
      ...commonMetrics,
      { label: "Матеріальна база", value: "art. 127–138" },
      {
        label: "Перевіряти щоразу",
        value: "поріг винагороди, мобільність, treść decyzji",
      },
    ],
    primaryNode: "blue-card",
    secondaryNode: "stay-work",
    stageFocus: [
      "Фіксуємо освіту, досвід, посаду та попередні періоди Blue Card у ЄС.",
      "Порівнюємо спеціальні умови з art. 127–138 зі звичайною підставою роботи.",
      "MOS має узгоджувати binding offer, кваліфікації й заявлені умови.",
      "Центр доказів — характер посади, кваліфікації, регульована професія й актуальна винагорода.",
      "Під час процедури оновлюємо докази, якщо змінюються договір, посада або строк.",
      "Після рішення окремо читаємо правила зміни роботи, безробіття, мобільності та рахування до rezydenta UE.",
    ],
    conditions: [
      {
        condition: "Висококваліфікована робота",
        modelFact: "senior data engineer",
        evidence: "опис посади + організаційні документи",
        status: "verify",
        risk: "посада не потребує заявленого рівня",
        law: "art. 127–138",
      },
      {
        condition: "Високі кваліфікації",
        modelFact: "диплом і релевантний досвід працівника",
        evidence: "диплом, довідки, переклади",
        status: "verify",
        risk: "кваліфікація не відповідає посаді",
        law: "визначення Blue Card",
      },
      {
        condition: "Належний договір",
        modelFact: "binding offer / umowa",
        evidence: "підписаний документ",
        status: "confirmed",
        risk: "строк або зміст не виконує вимогу",
        law: "art. 127",
      },
      {
        condition: "Актуальна винагорода",
        modelFact: "узгоджена сума",
        evidence: "umowa + офіційний поріг на дату",
        status: "verify",
        risk: "використаний старий поріг",
        law: "чинна редакція art. 127 і акти виконання",
      },
    ],
    documentItems: [
      {
        item: "Umowa / binding offer",
        proves: "Посаду, строк і умови роботи",
        law: "art. 127",
      },
      {
        item: "Диплом і докази досвіду",
        proves: "Високі кваліфікації",
        law: "Blue Card",
      },
      {
        item: "Опис посади",
        proves: "Потребу у високих кваліфікаціях",
        law: "матеріальна умова",
      },
      {
        item: "Доказ актуальної винагороди",
        proves: "Виконання порогу",
        law: "чинні вимоги",
        level: "control",
      },
    ],
    postDecisionMaterial: mapMaterial(
      "long-term-eu",
      "Blue Card і rezydent UE",
      "Перевірити спеціальне рахування періодів і мобільність."
    ),
  },
  {
    id: "student",
    tab: "Student",
    eyebrow: "Pobyt czasowy з метою навчання",
    title: "Student — повний гайд по справі",
    subtitle:
      "Від типу навчання й статусу uczelni до праці та наступного pobytu",
    overview: [
      "Спершу відрізняємо studia stacjonarne, mobilność studenta, badania, staż та інші освітні режими. Одна довідка з навчального закладу не створює універсальної студентської підстави.",
      "Орган перевіряє реальну мету, статус установи, прийняття на навчання, оплату, кошти, страхування та інші умови конкретної норми.",
    ],
    result:
      "Тимчасовий pobyt для конкретної освітньої мети в межах спеціальної підстави.",
    forWhom:
      "Для особи, яка реально навчається в належній установі й виконує фінансові, страхові та інші умови свого режиму.",
    notFor:
      "Не для будь-якого курсу або заочної активності без перевірки точного виду програми й статті.",
    profile: {
      name: "Студент стаціонарної магістратури",
      description:
        "Для цього маршруту перевіряємо прийняття на стаціонарну магістратуру, статус uczelni, оплату навчання, кошти, страхування й житло на потрібний період.",
      facts: [
        { label: "Програма", value: "studia stacjonarne II stopnia" },
        {
          label: "Установа",
          value: "польська uczelnia — статус перевіряється",
        },
        { label: "Оплата", value: "частково оплачено" },
        { label: "Praca", value: "аналізується окремо від pobytu" },
      ],
      assumption:
        "Документи uczelni, кошти, страхування, проживання та реальне продовження навчання мають бути актуальними.",
    },
    choice: {
      why: "Головна мета перебування — стаціонарне навчання, а не робота. Отже, робота може бути наслідком статусу, але не підставою цього wniosku.",
      closestAlternative:
        "Інший освітній режим, дослідження, staż або pobyt i pracę — залежно від фактичної головної мети.",
      gate: "Точний вид навчання й статус установи відповідають спеціальній нормі, а студент реально виконує її умови.",
    },
    metrics: [
      ...commonMetrics,
      { label: "Матеріальна база", value: "art. 144–157f" },
      {
        label: "Окремий аналіз",
        value: "право працювати та рахування до rezydenta UE",
      },
    ],
    primaryNode: "study-research",
    secondaryNode: "long-term-eu",
    stageFocus: [
      "Фіксуємо тип програми, дати семестрів, попередні рішення й реальний перебіг навчання.",
      "Точно кваліфікуємо studia, mobilność, badania або staż; назва довідки не замінює норми.",
      "У MOS дані програми, uczelni, оплат і фінансування мають збігатися з документами.",
      "Доказова матриця охоплює прийняття, оплату, кошти, страхування, проживання й прогрес навчання.",
      "Wezwanie може стосуватися актуального статусу studenta або фінансування; відповідаємо даними на конкретний період.",
      "Після рішення окремо перевіряємо praca, зміну/припинення навчання та вплив періоду на наступний статус.",
    ],
    conditions: [
      {
        condition: "Належний вид навчання",
        modelFact: "staціонарна магістратура",
        evidence: "zaświadczenie uczelni",
        status: "confirmed",
        risk: "інший правовий режим програми",
        law: "art. 144–157f",
      },
      {
        condition: "Статус установи",
        modelFact: "польська uczelnia",
        evidence: "офіційні дані + документ uczelni",
        status: "verify",
        risk: "установа/програма не відповідає вимогам",
        law: "спеціальні норми studiów",
      },
      {
        condition: "Оплата й кошти",
        modelFact: "часткова оплата + фінансування",
        evidence: "платежі, bank, stypendium",
        status: "verify",
        risk: "недостатній або непідтверджений період",
        law: "умови студентського pobytu",
      },
      {
        condition: "Страхування",
        modelFact: "поліс або інше покриття",
        evidence: "чинний документ",
        status: "verify",
        risk: "поліс не покриває потрібний період",
        law: "art. 144 і наступні",
      },
    ],
    documentItems: [
      {
        item: "Zaświadczenie про прийняття/навчання",
        proves: "Статус і вид навчання",
        law: "art. 144–157f",
      },
      {
        item: "Доказ оплати навчання",
        proves: "Виконання фінансової умови",
        law: "спеціальна підстава",
      },
      {
        item: "Кошти й страхування",
        proves: "Забезпечення періоду pobytu",
        law: "спеціальна підстава",
      },
      {
        item: "Документи про прогрес навчання",
        proves: "Реальність мети",
        law: "контроль процедури",
        level: "control",
      },
    ],
    postDecisionMaterial: mapMaterial(
      "work-entry",
      "Чи може студент працювати",
      "Право до праці визначається окремо від мети pobytu."
    ),
  },
  {
    id: "business",
    tab: "Działalność",
    eyebrow: "Pobyt czasowy для підприємницької діяльності",
    title: "Działalność gospodarcza — повний гайд по справі",
    subtitle: "Реальна роль у бізнесі, економічні умови й докази діяльності",
    overview: [
      "Запис у CEIDG або KRS сам по собі не доводить підставу pobytu. Потрібно встановити фактичну роль особи й перевірити економічні умови або реальну здатність виконати їх у майбутньому.",
      "У цій справі особливо важливо відділити корпоративний статус, право працювати, представництво та матеріальну умову бізнесового pobytu.",
    ],
    result:
      "Тимчасовий pobyt для реального ведення визначеної підприємницької діяльності.",
    forWhom:
      "Для особи, чия реальна головна мета — діяльність у конкретній ролі й бізнес виконує або переконливо може виконати законні умови.",
    notFor:
      "Не лише для udziałowca, члена zarządu або власника запису в реєстрі без реальної діяльності й економічних доказів.",
    profile: {
      name: "Член zarządu і wspólnik польської spółki",
      description:
        "Для цього маршруту перевіряємо особу, яка управляє польською spółką з чинними клієнтськими контрактами. Фінансові результати й зайнятість треба оцінити за законним тестом.",
      facts: [
        { label: "Роль", value: "członek zarządu + wspólnik" },
        { label: "Spółka", value: "активна в KRS" },
        { label: "Контракти", value: "кілька чинних umów B2B" },
        {
          label: "Фінанси",
          value: "доходи/витрати й прогноз потребують перевірки",
        },
      ],
      assumption:
        "Реальність діяльності, економічні результати, податки, зайнятість і здатність виконати умови надалі ще аналізуються.",
    },
    choice: {
      why: "Особа реально управляє бізнесом, тому перевіряємо art. 142–143, а не підміняємо діяльність звичайною посадою лише через членство в zarządzie.",
      closestAlternative:
        "Pobyt i praca — якщо фактично головною метою є праця за договором; інша підстава — якщо бізнесова роль другорядна.",
      gate: "Реальна підприємницька мета плюс виконання економічної умови або належно доведена здатність її виконати.",
    },
    metrics: [
      ...commonMetrics,
      { label: "Матеріальна база", value: "art. 142–143" },
      {
        label: "Ключовий контроль",
        value: "роль особи + реальна діяльність + економічні докази",
      },
    ],
    primaryNode: "business-stay",
    secondaryNode: "document-types",
    stageFocus: [
      "Фіксуємо всі ролі заявника: udziałowiec, zarząd, praca, reprezentacja — вони мають різні наслідки.",
      "Перевіряємо точний тест art. 142–143, а не лише витяг KRS.",
      "У MOS опис діяльності має збігатися з PKD, контрактами, фінансами й реальною роллю заявника.",
      "Матриця охоплює KRS/CRBR, фінанси, податки, ZUS, зайнятість, контракти та бізнес-план лише в юридично релевантному обсязі.",
      "Organ може перевіряти реальність і перспективу діяльності; відповідаємо узгодженим масивом доказів за періодами.",
      "Після рішення контролюємо зміну ролі, бізнесу й фактичної мети, а право працювати аналізуємо окремо.",
    ],
    conditions: [
      {
        condition: "Реальна бізнесова мета",
        modelFact: "заявник фактично управляє spółką",
        evidence: "KRS + uchwały + фактичні дії",
        status: "verify",
        risk: "формальна роль без діяльності",
        law: "art. 142–143",
      },
      {
        condition: "Економічний тест",
        modelFact: "spółka має контракти й результати",
        evidence: "фінанси, podatki, zatrudnienie",
        status: "verify",
        risk: "показники не виконані й прогноз слабкий",
        law: "art. 142",
      },
      {
        condition: "Здатність виконати умови",
        modelFact: "план росту й фінансування",
        evidence: "контракти, інвестиції, бізнес-план",
        status: "conditional",
        risk: "декларативний прогноз без доказів",
        law: "альтернативна гілка art. 142",
      },
      {
        condition: "Належна роль і reprezentacja",
        modelFact: "członek zarządu + wspólnik",
        evidence: "KRS, uchwały, pełnomocnictwa",
        status: "confirmed",
        risk: "документ підписала неналежна особа",
        law: "KSH + процедура",
      },
    ],
    documentItems: [
      {
        item: "KRS/CEIDG, CRBR, uchwały",
        proves: "Роль і структуру бізнесу",
        law: "art. 142–143",
      },
      {
        item: "Фінансові й податкові документи",
        proves: "Результати діяльності",
        law: "економічний тест",
      },
      {
        item: "Контракти, invoices, bank",
        proves: "Реальну операційну діяльність",
        law: "докази KPA",
      },
      {
        item: "Бізнес-план і фінансування",
        proves: "Здатність виконати умови",
        law: "альтернативна умова",
        level: "conditional",
      },
    ],
    postDecisionMaterial: mapMaterial(
      "work-entry",
      "Бізнесова роль і право працювати",
      "Не ототожнювати корпоративний статус із доступом до праці."
    ),
  },
  {
    id: "family",
    tab: "Rodzina",
    eyebrow: "Pobyt через сімейний зв’язок",
    title: "Rodzina — повний гайд по справі",
    subtitle:
      "Статус sponsora, точний зв’язок, реальне сімейне життя й іноземні акти",
    overview: [
      "«Сімейна карта» не є одним маршрутом. Спочатку визначаємо статус sponsora й точний сімейний зв’язок, бо родина громадянина Польщі, cudzoziemca та obywatela UE регулюється різними нормами.",
      "Дохід, страхування й житло не можна вимагати універсально: їх застосування залежить від конкретної підстави.",
    ],
    result:
      "Pobyt на точно визначеній сімейній підставі з наслідками, що випливають зі статусу sponsora й виду зв’язку.",
    forWhom:
      "Для особи з належним, доведеним і реальним сімейним зв’язком, який охоплює конкретна норма.",
    notFor:
      "Не для будь-яких близьких стосунків без перевірки законної категорії, статусу sponsora й реальності сімейного життя.",
    profile: {
      name: "Член сім’ї cudzoziemca з чинним pobytem",
      description:
        "Для цього маршруту перевіряємо документований шлюб і спільне життя в Польщі. Потрібно точно визначити статус sponsora й норму połączenia z rodziną.",
      facts: [
        { label: "Зв’язок", value: "шлюб" },
        { label: "Sponsor", value: "cudzoziemiec із чинним дозволом" },
        { label: "Спільне життя", value: "спільна адреса й фінанси" },
        { label: "Акт", value: "іноземний akt małżeństwa" },
      ],
      assumption:
        "Статус sponsora, дійсність акту, apostille/legalizacja, переклад і спеціальні матеріальні умови ще перевіряються.",
    },
    choice: {
      why: "Реальна головна мета перебування — сімейне життя зі sponsorem, тому вихідною точкою є його статус і конкретна сімейна норма.",
      closestAlternative:
        "Режим родини obywatela UE/Polski або власна незалежна підстава заявника — залежно від sponsora й фактів.",
      gate: "Точний сімейний зв’язок охоплений нормою, sponsor має потрібний статус, а сімейне життя є реальним.",
    },
    metrics: [
      ...commonMetrics,
      {
        label: "Матеріальна база",
        value: "art. 158–169 або інший спеціальний режим",
      },
      { label: "Перша перевірка", value: "хто sponsor і який його статус" },
    ],
    primaryNode: "family-stay",
    secondaryNode: "foreign-documents",
    stageFocus: [
      "Фіксуємо статус кожного члена сім’ї та дати шлюбу, спільного життя, в’їздів і попередніх дозволів.",
      "Вибираємо точну сімейну категорію через sponsora; не змішуємо режими Polski, UE і cudzoziemca.",
      "У MOS послідовно описуємо sponsora, зв’язок, адресу та документи цивільного стану.",
      "Доказова матриця охоплює акт, його форму, переклад, реальне сімейне життя й лише ті додаткові умови, яких вимагає конкретна стаття.",
      "Organ може перевіряти реальність зв’язку; відповіді мають бути узгодженими й пропорційними конкретній вимозі.",
      "Після рішення окремо перевіряємо praca та наслідки розлучення, смерті sponsora або припинення спільного життя.",
    ],
    conditions: [
      {
        condition: "Належний sponsor",
        modelFact: "чоловік має чинний статус",
        evidence: "decyzja/karta sponsora",
        status: "verify",
        risk: "інший режим сімейної норми",
        law: "art. 158–169",
      },
      {
        condition: "Сімейний зв’язок",
        modelFact: "дійсний шлюб",
        evidence: "akt małżeństwa + переклад/форма",
        status: "verify",
        risk: "формальний дефект іноземного акту",
        law: "спеціальна сімейна норма",
      },
      {
        condition: "Реальне сімейне життя",
        modelFact: "спільне проживання й фінанси",
        evidence: "адреса, платежі, хронологія",
        status: "verify",
        risk: "суперечливі факти або pozorność",
        law: "контроль матеріальної умови",
      },
      {
        condition: "Додаткові умови",
        modelFact: "дохід/страхування/житло за потреби",
        evidence: "лише документи, яких вимагає точна стаття",
        status: "conditional",
        risk: "механічне застосування чужого checklistu",
        law: "lex specialis",
      },
    ],
    documentItems: [
      {
        item: "Документ statusu sponsora",
        proves: "Правильний сімейний режим",
        law: "art. 158–169",
      },
      {
        item: "Akt małżeństwa / urodzenia",
        proves: "Сімейний зв’язок",
        law: "спеціальна норма",
      },
      {
        item: "Tłumaczenie, apostille/legalizacja",
        proves: "Придатність іноземного акту",
        law: "правила іноземних документів",
        level: "conditional",
      },
      {
        item: "Докази реального сімейного життя",
        proves: "Непозірний характер зв’язку",
        law: "докази KPA",
        level: "control",
      },
    ],
    postDecisionMaterial: mapMaterial(
      "work-entry",
      "Доступ до праці після сімейного pobytu",
      "Перевірити наслідок конкретного статусу, а не припускати його."
    ),
  },
  {
    id: "permanent",
    tab: "Pobyt stały",
    eyebrow: "Безстроковий статус на конкретній категоріальній підставі",
    title: "Pobyt stały — повний гайд по справі",
    subtitle:
      "Одна точна категорія art. 195, історія pobytu та статусові документи",
    overview: [
      "Pobyt stały не надається просто після багатьох років у Польщі. Потрібна одна конкретна категорія з art. 195 — наприклад походження, Karta Polaka, шлюб у визначених законом обставинах або інша спеціальна підстава.",
      "Безстроковість дозволу не означає безстроковість фізичної карти: ці два строки читаються окремо.",
    ],
    result:
      "Безстрокове zezwolenie na pobyt stały на точно доведеній категоріальній підставі.",
    forWhom:
      "Для особи, яка входить у конкретну категорію art. 195 і доводить усі її спеціальні факти та періоди.",
    notFor:
      "Не як загальна нагорода за тривале перебування; для такого аналізу окремо існує rezydent długoterminowy UE.",
    profile: {
      name: "Власник чинної Karty Polaka",
      description:
        "Для цього маршруту перевіряємо намір постійно оселитися в Польщі та конкретну категорію art. 195. Ця підстава не змішується з п’ятирічним тестом rezydenta UE.",
      facts: [
        { label: "Підстава", value: "Karta Polaka" },
        { label: "Намір", value: "постійно оселитися в Польщі" },
        {
          label: "Поточний pobyt",
          value: "законність і хронологія перевіряються",
        },
        { label: "Документи", value: "оригінали й актуальність перевіряються" },
      ],
      assumption:
        "Дійсність підстави, відсутність odmowy wszczęcia, історія й необхідні statusowe документи ще підтверджуються.",
    },
    choice: {
      why: "Заявник має конкретну категоріальну підставу, тому art. 195 є прямішим маршрутом, ніж рахування rezydenta UE.",
      closestAlternative:
        "Rezydent długoterminowy UE — якщо особа не входить до art. 195, але виконує його окремий п’ятирічний тест.",
      gate: "Особа точно входить до однієї категорії art. 195 і доводить усі факти саме цієї категорії.",
    },
    metrics: [
      ...commonMetrics,
      { label: "Матеріальна база", value: "art. 195–206" },
      {
        label: "Не змішувати",
        value: "підстава дозволу ≠ строк ważności карти",
      },
    ],
    primaryNode: "permanent",
    secondaryNode: "permanent-resident",
    stageFocus: [
      "Фіксуємо документ підстави, намір оселитися, історію pobytu й усі попередні рішення.",
      "Вибираємо одну категорію art. 195 і не додаємо до неї умов іншої категорії.",
      "У MOS підстава й додатки мають точно відповідати обраній категорії.",
      "Матриця концентрується на statusowych документах, історії, іноземних актах і фактах конкретної категорії.",
      "Organ перевіряє справжність і повноту підстави; за потреби читаємо akta й відповідаємо на сумніви точними доказами.",
      "Після рішення відокремлюємо безстроковий статус від ważności карти, praca й обов’язків актуалізації документа.",
    ],
    conditions: [
      {
        condition: "Категорія art. 195",
        modelFact: "заявник має чинну Kartę Polaka",
        evidence: "оригінал + перевірка чинності",
        status: "verify",
        risk: "підстава нечинна або інша категорія",
        law: "art. 195",
      },
      {
        condition: "Намір постійно оселитися",
        modelFact: "центр життя переноситься до Польщі",
        evidence: "хронологія й життєві факти",
        status: "verify",
        risk: "факти не підтримують заявлений намір",
        law: "відповідна категорія art. 195",
      },
      {
        condition: "Правильна процедура",
        modelFact: "MOS + особисті дії",
        evidence: "UPO, паспорт, біометрія",
        status: "conditional",
        risk: "формальна перешкода",
        law: "art. 195–206",
      },
      {
        condition: "Відсутність негативної передумови",
        modelFact: "потребує перевірки",
        evidence: "akta, реєстри, пояснення",
        status: "verify",
        risk: "odmowa wszczęcia або odmowa",
        law: "art. 196 і наступні",
      },
    ],
    documentItems: [
      {
        item: "Документ конкретної підстави",
        proves: "Входження до art. 195",
        law: "art. 195",
      },
      {
        item: "Історія pobytu й рішень",
        proves: "Факти потрібної категорії",
        law: "art. 195–206",
      },
      {
        item: "Іноземні акти й переклади",
        proves: "Походження/зв’язок, якщо це підстава",
        law: "спеціальна категорія",
        level: "conditional",
      },
      {
        item: "Докази наміру оселитися",
        proves: "Реальний характер підстави",
        law: "конкретна норма",
        level: "control",
      },
    ],
    postDecisionMaterial: mapMaterial(
      "work-entry",
      "Pobyt stały і praca",
      "Перевірити наслідок безстрокового статусу для доступу до праці."
    ),
  },
  {
    id: "long-term-eu",
    tab: "Rezydent UE",
    eyebrow: "Rezydent długoterminowy Unii Europejskiej",
    title: "Rezydent długoterminowy UE — повний гайд по справі",
    subtitle:
      "П’ятирічна хронологія, перерви, дохід, страхування й польська мова",
    overview: [
      "Це ретроспективна справа: organ аналізує не лише стан на день подання, а повну історію належно зарахованого перебування й стабільності доходу за потрібні періоди.",
      "П’ять календарних років у Польщі не дорівнюють автоматично п’яти рокам для цієї норми. Окремі періоди не входять або рахуються частково, а виїзди треба перевіряти за правилами безперервності.",
    ],
    result:
      "Безстрокове zezwolenie rezydenta długoterminowego UE після підтвердження всього ретроспективного тесту.",
    forWhom:
      "Для особи з належно порахованим безперервним перебуванням, стабільним доходом, страхуванням і знанням польської мови з урахуванням винятків.",
    notFor:
      "Не лише через довгий фізичний pobyt; важливі юридична якість періодів, перерви та повний матеріальний тест.",
    profile: {
      name: "Кандидат на status rezydenta UE",
      description:
        "Для цього маршруту перевіряємо кілька типів pobytu, періоди навчання й роботи та виїзди за межі Польщі. Потрібно порахувати кожен період за законом, а не скласти календарні роки.",
      facts: [
        { label: "Період", value: "понад 5 календарних років" },
        { label: "Підстави", value: "studia + praca" },
        { label: "Виїзди", value: "кілька поїздок різної тривалості" },
        { label: "Дохід", value: "кілька джерел за роками" },
      ],
      assumption:
        "Зарахування навчання, безперервність, стабільність доходу, страхування й документ мови ще перевіряються по періодах.",
    },
    choice: {
      why: "Заявник не має категоріальної підстави pobytu stałego, але його історія може виконувати окремий тест rezydenta UE.",
      closestAlternative:
        "Pobyt stały — лише за конкретною категорією art. 195; черговий pobyt czasowy — якщо ретроспективні умови ще не виконані.",
      gate: "П’ять років пораховані за спеціальними правилами, а дохід, страхування й польська мова виконані в потрібному обсязі.",
    },
    metrics: [
      ...commonMetrics,
      { label: "Матеріальна база", value: "art. 211–222a" },
      {
        label: "Ключовий артефакт",
        value: "таблиця періодів і виїздів по днях",
      },
    ],
    primaryNode: "long-term-eu",
    secondaryNode: "permanent-resident",
    stageFocus: [
      "Будуємо повну таблицю pobytu, підстав, рішень, прогалин і виїздів — без округлення до років.",
      "Класифікуємо кожен період: входить, не входить або рахується частково; окремо перевіряємо Blue Card і studia.",
      "MOS заповнюється лише після готової ретроспективної таблиці, бо саме вона визначає пакет доказів.",
      "Доказова матриця охоплює pobyt, виїзди, дохід за потрібні періоди, страхування, мову й tytuł do lokalu, якщо вимагається.",
      "Organ може просити старі рішення, декларації й пояснення розривів; akta та власний архів мають відтворити кожен період.",
      "Після рішення статус безстроковий, але документ має строк ważności; окремо контролюємо втрату статусу й мобільність.",
    ],
    conditions: [
      {
        condition: "Належно пораховані 5 років",
        modelFact: "понад 5 календарних років",
        evidence: "таблиця підстав, рішень і meldunków",
        status: "verify",
        risk: "частина періодів не входить або рахується частково",
        law: "art. 211–212",
      },
      {
        condition: "Безперервність і виїзди",
        modelFact: "кілька поїздок",
        evidence: "паспорт, квитки, реєстри",
        status: "verify",
        risk: "перевищення допустимих перерв",
        law: "art. 212",
      },
      {
        condition: "Стабільний дохід",
        modelFact: "робота з кількох джерел",
        evidence: "PIT, umowy, bank, ZUS",
        status: "verify",
        risk: "дохід не виконує тест у потрібні роки",
        law: "art. 211",
      },
      {
        condition: "Страхування й мова",
        modelFact: "покриття та документ польської",
        evidence: "ZUS/polis + допустимий документ",
        status: "verify",
        risk: "неприйнятна форма або виняток не діє",
        law: "art. 211–212",
      },
    ],
    documentItems: [
      {
        item: "Таблиця всіх підстав pobytu",
        proves: "Належний п’ятирічний період",
        law: "art. 211–212",
      },
      {
        item: "Паспорт і історія виїздів",
        proves: "Безперервність",
        law: "art. 212",
      },
      {
        item: "PIT, umowy, bank, ZUS",
        proves: "Стабільність доходу й страхування",
        law: "art. 211",
      },
      {
        item: "Документ польської мови",
        proves: "Виконання мовної умови або винятку",
        law: "art. 211–212",
      },
    ],
    postDecisionMaterial: mapMaterial(
      "case-file",
      "Архів довгої справи",
      "Зберегти ретроспективні докази й рішення для майбутніх перевірок."
    ),
  },
  {
    id: "other",
    tab: "Inne",
    eyebrow: "Розвилка інших спеціальних підстав",
    title: "Інші підстави pobytu — як побудувати окрему справу",
    subtitle:
      "Сезонна робота, absolwent, короткотривалі обставини, захисні й інші спеціальні режими",
    overview: [
      "Ця вкладка свідомо не створює одного універсального кейсу. «Інші обставини» охоплюють різні правові режими з несумісними умовами, строками й наслідками.",
      "Її завдання — правильно розгалузити факти до конкретної статті, після чого створити mini-case за тим самим повним шаблоном.",
    ],
    result:
      "Точна кваліфікація до окремої спеціальної підстави або чесний висновок, що жоден із режимів не відповідає фактам.",
    forWhom:
      "Для справ, які не вкладаються в основні вкладки й мають конкретну спеціальну обставину, передбачену законом.",
    notFor:
      "Не як запасний універсальний маршрут, коли умови основної підстави не виконані.",
    profile: {
      name: "Справа, що потребує окремої кваліфікації",
      description:
        "Особа повідомляє особливу обставину, але її ще не прив’язано до конкретної статті. Спочатку будуємо дерево рішень, а не збираємо документи.",
      facts: [
        {
          label: "Можливі напрями",
          value: "sezonowa, absolwent, krótkotrwały, humanitarny та інші",
        },
        { label: "Головна мета", value: "ще не встановлена" },
        { label: "Тривалість", value: "потребує точної хронології" },
        { label: "Наслідок", value: "залежить від вибраної статті" },
      ],
      assumption:
        "Поки не вибрано одну точну норму, не існує коректного універсального пакета документів, строків або висновку.",
    },
    choice: {
      why: "Факти ще не дають змоги застосувати одну з основних підстав. Тому робочим результатом є розвилка, а не вигаданий спільний дозвіл.",
      closestAlternative:
        "Одна з основних вкладок, якщо після уточнення головна мета виявиться роботою, навчанням, сім’єю або бізнесом.",
      gate: "Знайдено конкретну статтю, яка охоплює особливу обставину та встановлює власні умови й наслідок.",
    },
    metrics: [
      ...commonMetrics,
      {
        label: "Матеріальна база",
        value: "art. 170–194 та інші спеціальні норми",
      },
      {
        label: "Результат першого етапу",
        value: "одна точна стаття, не універсальний checklist",
      },
    ],
    primaryNode: "other-stay",
    secondaryNode: "temporary-goals",
    stageFocus: [
      "Фіксуємо особливу обставину, її початок, тривалість і всі попередні підстави.",
      "Будуємо дерево можливих статей і відкидаємо ті, де хоча б одна визначальна умова не відповідає фактам.",
      "Форму MOS, organ і додатки визначаємо лише після вибору конкретної норми.",
      "Документи формуються від умов вибраної статті; спільного пакета для всіх «інших» підстав немає.",
      "У процедурі особливо важливо не відповідати на wezwanie матеріалами іншого режиму й перевіряти точний наслідок спеціальної норми.",
      "Рішення читаємо через конкретну підставу; praca, строк і наступний статус можуть радикально відрізнятися.",
    ],
    conditions: [],
    documentItems: [],
    postDecisionMaterial: mapMaterial(
      "seasonal",
      "Приклад окремої підстави: praca sezonowa",
      "Показує, чому спеціальний режим не можна змішувати із загальним."
    ),
  },
]

export const caseGuideRoutes = defineLegalTextContent(
  routeSpecs.map<CaseGuideRoute>((spec) => {
    const documents = makeDocuments(spec)

    return authorCaseContent({
      ...spec,
      stages: makeStages(spec, documents),
      documents,
      deadlines: makeDeadlines(spec),
      negativeBranches: makeNegativeBranches(spec),
      sources: sourcesFor([
        spec.primaryNode,
        spec.secondaryNode ?? "temporary-common",
        "mos-procedure",
      ]),
    })
  }),
  "case-guides"
)

export const defaultCaseGuideRouteId: CaseGuideRouteId = "cukr"

export const caseGuideRouteById = new Map(
  caseGuideRoutes.map((route) => [route.id, route])
)

export function getCaseGuideRoute(id?: string) {
  return (
    (id ? caseGuideRouteById.get(id as CaseGuideRouteId) : undefined) ??
    caseGuideRouteById.get(defaultCaseGuideRouteId)!
  )
}
