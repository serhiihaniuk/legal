import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import {
  foreignersLaw,
  residenceLaw,
} from "~/data/legal-map/editorial/authoring"
import type { DocumentGuide } from "~/data/document-library/contracts"

const aliensReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const
const residenceFormReference = {
  kind: "official-source",
  sourceId: "eli-rozporzadzenie-wniosek-pobyt-czasowy",
} as const

export const employmentAnnex1Topic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:employment-annex-1",
    subject: {
      family: "evidence-document",
      reference: {
        kind: "evidence-document",
        documentId: "employment-annex-1",
      },
    },
    summary:
      "Структурована частина заяви про pobyt czasowy i pracę, у якій роботодавець офіційно подає дані про суб’єкта та заявлені умови праці.",
    claims: [
      {
        id: "annex-is-structured-declaration",
        kind: "requires-verification",
        text: foreignersLaw.text`Załącznik nr 1 дає органу структуровані дані для перевірки умов ${foreignersLaw.article("114", "art. 114 ustawy o cudzoziemcach")}, але сам не доводить фактичне виконання роботи або реальність діяльності роботодавця.`,
        basis: [
          { reference: aliensReference, locator: "Art. 106, 114, 118" },
          {
            reference: residenceFormReference,
            locator: "§ 2 ust. 2, załącznik nr 2",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: {
      id: "employment-annex-1",
      title: "Załącznik formularza — nr 1",
      category: "work",
      aliases: [
        "załącznik formularza — nr 1",
        "załącznik do wniosku o pobyt i pracę",
      ],
      description:
        "Структурована частина заяви про pobyt czasowy i pracę, у якій роботодавець офіційно подає дані про суб’єкта та заявлені умови праці.",
      preparedBy:
        "Заповнює podmiot powierzający pracę; підписує особа, яка має право представляти роботодавця, або належний представник.",
      purpose: [
        "Фіксує роботодавця, посаду або вид роботи, вид договору, робочий час і винагороду.",
        foreignersLaw.text`Дає органу структуровані дані для перевірки умов ${foreignersLaw.article("114", "art. 114 ustawy o cudzoziemcach")}.`,
      ],
      doesNotProve: [
        "Не доводить, що робота фактично виконується саме так.",
        "Не доводить реальність діяльності роботодавця або відсутність outsourcingu pracowniczego.",
      ],
      legalBasis: [
        foreignersLaw.text`${foreignersLaw.article("106", "Art. 106 ust. 2 ustawy o cudzoziemcach")}, ${foreignersLaw.external("art. 106d ustawy o cudzoziemcach", "https://eli.gov.pl/eli/DU/2025/1794/ogl")}, ${foreignersLaw.article("114", "art. 114 ustawy o cudzoziemcach")} і ${foreignersLaw.article("118", "art. 118 ustawy o cudzoziemcach")}.`,
        residenceLaw.text`${residenceLaw.paragraph("2", "§ 2 ust. 2")} і ${residenceLaw.annex("2")} do rozporządzenia Dz.U. 2026 poz. 553.`,
      ],
      keyChecks: [
        "Хто підписав документ і чи відповідає спосіб представництва KRS/CEIDG.",
        "Чи збігаються роботодавець, посада, час праці, винагорода та дата з umową o pracę.",
        "Чи використана актуальна форма для правильної процедури.",
      ],
      sources: [
        {
          label: "Ustawa o cudzoziemcach — ELI",
          url: "https://eli.gov.pl/eli/DU/2025/1079/ogl",
          note: "Офіційний текст закону; перед використанням перевір редакцію на дату факту.",
        },
        {
          label: "Rozporządzenie MSWiA — Dz.U. 2026 poz. 553",
          url: "https://eli.gov.pl/eli/DU/2026/553/ogl",
          note: "Форми заяв і додатків, вимоги до фото та цифрових копій.",
        },
        {
          label: "UdSC — електронний Załącznik nr 1",
          url: "https://www.gov.pl/web/udsc/informacja-dla-pracodawcow-na-temat-koniecznosci-elektronicznego-podpisywania-zalacznikow-do-wnioskow-o-udzielenie-zezwolenia-na-pobyt-czasowy-i-prace-w-polsce",
          note: "Офіційне пояснення ролі роботодавця та електронного підпису.",
        },
      ],
      verifiedAt: "2026-07-14",
    },
  })

export default employmentAnnex1Topic
