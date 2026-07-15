import { kpaArticleIndex } from "./kpa-article-index"

export type KpaGuideModuleId =
  | "system"
  | "anatomy"
  | "principles"
  | "authority"
  | "party"
  | "initiation"
  | "files-evidence"
  | "time-service"
  | "summons"
  | "silence"
  | "decisions"
  | "appeal"
  | "delay"
  | "extraordinary"
  | "court"

export type KpaGuideModuleArticleMapping = {
  stage: string
  articles: readonly string[]
}

export const kpaGuideModuleArticles = {
  system: {
    stage: "Сфера застосування KPA",
    articles: ["1", "2", "2a", "3", "4", "5"],
  },
  anatomy: {
    stage: "Будова й логіка норми",
    articles: ["5", "7", "54", "107"],
  },
  principles: {
    stage: "Загальні процесуальні стандарти",
    articles: [
      "6",
      "7",
      "7a",
      "7b",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "14a",
      "15",
      "16",
    ],
  },
  authority: {
    stage: "Компетенція та передання справи",
    articles: ["19", "20", "21", "22", "23", "65", "66"],
  },
  party: {
    stage: "Сторона, представництво і doręczenie",
    articles: ["28", "29", "30", "31", "32", "33", "34", "40"],
  },
  initiation: {
    stage: "Wszczęcie та перевірка podania",
    articles: ["61", "61a", "62", "63", "64", "65", "66"],
  },
  "files-evidence": {
    stage: "Доступ до akt і доказове провадження",
    articles: [
      "73",
      "74",
      "74a",
      "75",
      "76",
      "76a",
      "77",
      "78",
      "79",
      "79a",
      "80",
      "81",
      "81a",
    ],
  },
  "time-service": {
    stage: "Строк розгляду, doręczenie і строки сторони",
    articles: [
      "35",
      "36",
      "37",
      "38",
      "39",
      "39¹",
      "39²",
      "39³",
      "39⁴",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "45a",
      "46",
      "47",
      "48",
      "49",
      "49a",
      "49b",
      "57",
      "58",
      "59",
      "60",
    ],
  },
  summons: {
    stage: "Wezwanie та виконання викликаної дії",
    articles: ["50", "51", "52", "53", "54", "55", "56"],
  },
  silence: {
    stage: "Milczące załatwienie sprawy",
    articles: ["122a", "122b", "122c", "122d", "122e", "122f", "122g", "122h"],
  },
  decisions: {
    stage: "Decyzja, її виправлення та postanowienie",
    articles: [
      "104",
      "105",
      "106",
      "106a",
      "107",
      "108",
      "109",
      "110",
      "111",
      "112",
      "113",
      "123",
      "124",
      "125",
      "126",
    ],
  },
  appeal: {
    stage: "Адміністративний контроль decyzji й postanowienia",
    articles: [
      "127",
      "127a",
      "128",
      "129",
      "130",
      "131",
      "132",
      "133",
      "134",
      "135",
      "136",
      "137",
      "138",
      "139",
      "139a",
      "140",
      "141",
      "142",
      "143",
      "144",
    ],
  },
  delay: {
    stage: "Bezczynność, przewlekłość і ponaglenie",
    articles: ["35", "36", "37", "38"],
  },
  extraordinary: {
    stage: "Перегляд остаточної decyzji",
    articles: [
      "145",
      "145a",
      "145aa",
      "145b",
      "146",
      "147",
      "148",
      "149",
      "150",
      "151",
      "152",
      "153",
      "154",
      "155",
      "155a",
      "156",
      "157",
      "158",
      "159",
      "160",
      "161",
      "162",
      "163",
      "163a",
    ],
  },
  court: {
    stage: "Перехід від адміністративного до судового контролю",
    articles: ["16", "127", "127a"],
  },
} satisfies Record<KpaGuideModuleId, KpaGuideModuleArticleMapping>

const knownKpaArticleIds = new Set(
  kpaArticleIndex.map((entry) => entry.article)
)

export const unknownKpaGuideModuleArticleIds = Object.entries(
  kpaGuideModuleArticles
).flatMap(([moduleId, mapping]) =>
  mapping.articles
    .filter((article) => !knownKpaArticleIds.has(article))
    .map((article) => ({ moduleId: moduleId as KpaGuideModuleId, article }))
)
