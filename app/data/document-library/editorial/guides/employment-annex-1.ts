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
      "Додаток роботодавця до заяви про pobyt czasowy. Містить дані про суб’єкта та запропоновану роботу, які орган зіставляє з умовами дозволу й іншими доказами.",
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
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-09-05",
    },
    body: {
      id: "employment-annex-1",
      title: "Załącznik nr 1 до заяви про pobyt czasowy",
      category: "work",
      aliases: [
        "załącznik formularza — nr 1",
        "załącznik do wniosku o pobyt i pracę",
      ],
      description:
        "Додаток, у якому роботодавець подає відомості про себе та запропоновану роботу. Орган зіставляє їх з умовами дозволу й іншими доказами. Цей додаток не є трудовим договором і не підтверджує фактичну виплату зарплати.",
      preparedBy:
        "Заповнює podmiot powierzający pracę, тобто особа або організація, яка доручає роботу. Від імені компанії підписує уповноважена особа або належний представник.",
      purpose: [
        "Фіксує роботодавця, посаду або вид роботи, вид договору, робочий час і винагороду.",
        foreignersLaw.text`Дає органу структуровані дані для перевірки умов ${foreignersLaw.article("114", "art. 114 ustawy o cudzoziemcach")}.`,
      ],
      doesNotProve: [
        "Не доводить, що робота фактично виконується саме так.",
        "Не показує сам по собі, хто щодня керує працівником і чи відповідає заявлена модель роботи фактичній.",
      ],
      explanation: [
        {
          id: "which-annex",
          title: "Чому додаток номер 1 відкривається як номер 2",
          paragraphs: [
            residenceLaw.text`У заяві роботодавець заповнює додаток номер 1. У розпорядженні Dz.U. 2026 poz. 553 його форму опубліковано як ${residenceLaw.annex("2")}. Це дві системи нумерації одного формуляра: номер у заяві та місце форми в правовому акті.`,
            "У частинах I–III зазначають іноземця, суб’єкта, який доручає роботу, та за відповідних обставин pracodawcę użytkownika. Останній термін означає роботодавця, на користь якого працює тимчасовий працівник, направлений агенцією. Його не слід автоматично замінювати адресою об’єкта чи назвою клієнта компанії.",
            "Частина IV описує роботу, вид договору, час і винагороду brutto, тобто до відрахувань. Подальші частини містять заяви суб’єкта, обов’язки й період роботи. Назва посади без цих відомостей не пояснює, що саме людині пропонують.",
          ],
          example: {
            title: "Місячна сума без зазначення періоду",
            facts: [
              "Умовний приклад. У погодженому договорі зазначено повний робочий час і місячну винагороду 6 200 zł brutto. У чернетці додатка роботодавець указав лише число 6 200. Саме поле допускає різні способи зазначення винагороди, тому одиницю потрібно зберегти.",
            ],
            sample: {
              kind: "letter",
              title: "Заповнений фрагмент відомостей про роботу",
              note: "Вигаданий приклад окремих полів. Це не скриншот MOS і не повний формуляр. Сума ілюструє запис, а не законний мінімум.",
              language: "pl",
              paragraphs: [
                "Stanowisko / rodzaj pracy: magazynier",
                "Podstawa prawna wykonywania pracy: umowa o pracę",
                "Wymiar czasu pracy: pełny etat",
                "Wynagrodzenie: 6 200 zł brutto miesięcznie",
              ],
            },
            reasoning: [
              "Роботодавець уточнив, що сума є місячною, і зіставив її з договором. Це дозволяє порівнювати однакові величини. Переказ на рахунок є окремим доказом і може показувати netto, суму після відрахувань, або виплату за неповний місяць.",
            ],
            conclusion:
              "Спосіб запису винагороди узгоджено. Інші умови дозволу, реальна робота й фактичні виплати цим фрагментом не встановлені.",
          },
        },
        {
          id: "electronic-annex",
          title: "Хто завершує додаток у MOS",
          paragraphs: [
            "За інструкцією UdSC, для подання через MOS заявник указує електронну адресу роботодавця. Роботодавець отримує посилання, заповнює онлайн-форму та підписує її електронно. Підпис заявника під основною заявою не замінює цю дію роботодавця.",
            "Доступні podpis zaufany, podpis osobisty або kwalifikowany podpis elektroniczny. Якщо діє представник компанії, потрібні відповідні повноваження. Отримане посилання або заповнена чернетка ще не означають, що додаток завершено: UdSC пов’язує можливість подати основну заяву із завершенням додатка роботодавцем.",
          ],
        },
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
      relatedDocuments: [
        "employment-contract",
        "job-description",
        "work-organisation-evidence",
        "business-register-information",
        "power-of-attorney",
      ],
      sources: [
        {
          label: "Ustawa o cudzoziemcach, ELI",
          url: "https://eli.gov.pl/eli/DU/2025/1079/ogl",
          note: "Умови дозволу та зміст рішення. Редакцію зіставляють із датою справи.",
        },
        {
          label: "Rozporządzenie MSWiA, Dz.U. 2026 poz. 553",
          url: "https://eli.gov.pl/eli/DU/2026/553/ogl",
          note: "Форми заяв і додатків, вимоги до фото та цифрових копій.",
        },
        {
          label: "UdSC: електронний додаток роботодавця",
          url: "https://www.gov.pl/web/udsc/informacja-dla-pracodawcow-na-temat-koniecznosci-elektronicznego-podpisywania-zalacznikow-do-wnioskow-o-udzielenie-zezwolenia-na-pobyt-czasowy-i-prace-w-polsce",
          note: "Офіційне пояснення ролі роботодавця та електронного підпису.",
        },
      ],
      verifiedAt: "2026-09-05",
    },
  })

export default employmentAnnex1Topic
