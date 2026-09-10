import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { documentSources, foreignersLaw } from "../authoring"

const documents = createEvidenceDocumentTextAuthor()
const SERVICE_URL = "https://www.podatki.gov.pl/zaswiadczenia-podatkowe"
const ACCOUNT_URL =
  "https://www.podatki.gov.pl/e-urzad-skarbowy/konto-osoby-fizycznej"
const REQUEST_URL =
  "https://www.podatki.gov.pl/media/4cybj0l5/za%C5%9Bwiadzczenie-o-dochodach-i-sk%C5%82adkach.pdf"
const ELECTRONIC_URL =
  "https://www.gov.pl/web/kas/zaswiadczenie-wydane-w-e-urzedzie-skarbowym-to-dokument-elektroniczny"
const FORM_URL = "https://eli.gov.pl/eli/DU/2024/5/ogl"

const guide: DocumentGuide = {
  id: "tax-income-certificate",
  title: "Zaświadczenie o dochodach z Urzędu Skarbowego",
  category: "financial",
  kind: "document",
  aliases: ["ZAS-DF", "ZAS-DFU", "довідка податкового органу про дохід"],
  description:
    "Довідка податкового органу про дані доходу конкретного платника податків за зазначений рік. Вона підтверджує відомості, якими володіє орган, і допомагає перевіряти попередній дохід у справі про перебування. Поданий PIT, запит про довідку та вже видана довідка є різними документами.",
  preparedBy:
    "Компетентний податковий орган видає довідку на запит платника податків або його представника. Електронний запит і отримання доступні через eUrząd Skarbowy.",
  purpose: [
    "Підтверджує зазначені в довідці податкові відомості за визначений рік щодо конкретної особи.",
  ],
  doesNotProve: [
    "Річна сума не показує помісячну регулярність виплат, зарплату netto або збереження роботи сьогодні. Довідка про дохід також не є довідкою про відсутність податкового боргу.",
  ],
  explanation: [
    {
      id: "certificate-scope",
      title: "ZAS-DF і ZAS-DFU: що саме підтверджує орган",
      paragraphs: [
        "ZAS-DF стосується wysokości dochodu podatnika w PIT, величини доходу фізичної особи в податкових даних. ZAS-DFU має ширший зміст: przychód, dochód, podatek należny та відомості про внески, відображені в PIT. Потрібний вид визначають за питанням до доказу, а не за тим, який файл легше отримати.",
        "Przychód і dochód не є взаємозамінними колонками. Przychód означає надходження в податковому обліку, а dochód враховує відповідні податкові витрати. Жодну з цих сум не слід автоматично називати зарплатою netto, що надійшла на банківський рахунок. Внески, вказані в податкових даних, також не є повною історією страхування ZUS.",
        "PIT є податковою декларацією, а довідку видає орган на основі наявних у нього відомостей. Подання декларації чи запиту не доводить, що орган уже видав довідку бажаного змісту. Якщо декларацію виправлено, стару довідку зіставляють із коригуванням і новими даними органу.",
      ],
    },
    {
      id: "obtain-certificate",
      title: "Запит із визначеним роком і змістом",
      paragraphs: [
        "Увійдіть в eUrząd Skarbowy через офіційний сайт podatki.gov.pl та оберіть підготовлений запит про дохід ZAS-DF або дохід і внески ZAS-DFU. Укажіть податковий рік, потрібні відомості та мету видачі. Коли потрібного запиту немає серед підготовлених форм, офіційна інструкція дозволяє pismo ogólne з точним описом потрібної довідки.",
        "Офіційний зразок запиту пояснює, що за попередній рік звертаються після 15 лютого та після подання декларації. У запиті зазначають саме рік PIT. Дата видачі довідки у вересні не робить її підтвердженням доходу за поточний вересень.",
        "Через eUrząd Skarbowy або застосунок eUS довідку видають без оплати skarbowa. Паперовий запит можна подати до податкового органу особисто чи поштою; доступні також e-Doręczenia. Для цих способів офіційна інструкція передбачає оплату за відповідний вид довідки з урахуванням застосовного звільнення. Отриманий документ зберігають окремо від запиту та підтвердження його надсилання.",
      ],
    },
    {
      id: "read-one-year",
      title: "Як прочитати рік і суму в отриманій довідці",
      paragraphs: [
        "Спочатку визначають особу, орган, рік і вид засвідчених відомостей. Лише потім читають суму. Велике число без назви колонки може виявитися przychodem, а довідка щодо іншого року не закриває прогалину в потрібному періоді.",
      ],
      example: {
        title: "Довідка за 2025 рік, видана у вересні 2026 року",
        facts: [
          "Умовний приклад. Для аналізу доходу заявник отримав ZAS-DFU. Особу й походження документа перевірено. В матеріалах є дані про роботу у 2025 році, але помісячні виплати ще не зіставлено.",
        ],
        sample: {
          kind: "letter",
          title: "Вибрані дані одного ZAS-DFU",
          note: "Вигаданий скорочений фрагмент, не офіційний зразок заповнення. Ідентифікатори, реквізити органу, інші поля й підпис не наведено. Це читання податкових сум, а не розрахунок зарплати.",
          language: "pl",
          paragraphs: [
            "Data wydania: 10.09.2026 r. Rok podatkowy: 2025.",
            "Przychód: 72 000,00 zł. Dochód: 69 000,00 zł.",
          ],
        },
        reasoning: [
          "Довідка підтвердила різні податкові величини за один завершений рік. Для доходу прочитано 69 000 zł, а не 72 000 zł. Ділення річної суми на дванадцять дає лише арифметичне середнє; воно не встановлює, що заявник отримував однакову виплату кожного місяця.",
        ],
        conclusion:
          "Податкові дані за 2025 рік підтверджено в межах наведеного фрагмента. Регулярність виплат, дохід у 2026 році й виконання всієї умови дозволу залишаються окремими питаннями.",
      },
    },
    {
      id: "resident-and-electronic-file",
      title: "Роль у справі резидента та перевірка файла",
      paragraphs: [
        foreignersLaw.text`Для rezydenta UE ${foreignersLaw.article("211", "Art. 211 ust. 1 pkt 1 і ust. 2")} вимагає стабільного й регулярного доходу достатньої величини. Звичайний період перевірки становить три роки перед заявою, а два роки стосуються спеціального випадку ${foreignersLaw.article("212", "Art. 212 ust. 1 pkt 1")}. Одна довідка за один податковий рік не покриває автоматично цей період і не є єдиним допустимим доказом доходу.`,
        documents.text`Податковий рік і період перед поданням заяви можуть мати різні межі. Тому довідку зіставляють з ${documents.document("zus-insurance-history", "історією страхування ZUS")} та матеріалами про конкретні виплати. Довідка за 2025 рік не встановлює, що сталося з джерелом доходу у 2026 році.`,
        "Електронний документ з eUrząd Skarbowy має кваліфіковану печатку Szefa KAS або підпис уповноваженого працівника. Зберігають і передають повний файл; підпис можна перевірити в офіційній послузі PUESC. Така перевірка встановлює походження й цілісність, але не розширює податковий рік або зміст довідки.",
      ],
    },
  ],
  howToObtain: [
    "Подайте запит про потрібний вид доходної довідки через eUrząd Skarbowy, указавши рік, зміст і мету. Для іншого обсягу скористайтеся pismo ogólne або письмовим запитом до податкового органу.",
    "Отримайте видану довідку та звірте її зміст із запитом. Сам запит, повідомлення про відправлення або поданий PIT не є відповіддю органу.",
  ],
  formAndValidity: [
    "Дата видачі визначає момент засвідчення, а податковий рік визначає період доходу. Новіша дата не продовжує цей період.",
    "Зберігайте електронний файл із підписом або печаткою. Якщо податкові дані виправлено, з’ясуйте, чи враховано виправлення у довідці.",
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.external("Розпорядження про довідки податкових органів, додатки 10 і 10a", FORM_URL)}: зразки ZAS-DF та ZAS-DFU.`,
    foreignersLaw.text`${foreignersLaw.article("211", "Art. 211 ust. 1 pkt 1 і ust. 2")}, ${foreignersLaw.article("212", "Art. 212 ust. 1 pkt 1")}: умова доходу та її часовий обсяг для rezydenta UE.`,
  ],
  keyChecks: [
    "Особа, податковий рік і вид засвідчених даних відповідають питанню в справі?",
    "Przychód, dochód, податок і внески не змішані із зарплатою netto чи помісячними виплатами?",
    "Отримано саме довідку органу; виправлення декларацій та прогалини в періоді пояснено?",
  ],
  relatedDocuments: [
    "income-evidence",
    "zus-insurance-history",
    "employment-contract",
  ],
  sources: [
    {
      label: "Podatki.gov.pl: податкові довідки",
      url: SERVICE_URL,
      note: "Офіційна інструкція, оновлена 07.08.2026: способи подання, оплати, отримання та перевірка підпису.",
    },
    {
      label: "Podatki.gov.pl: послуги особистого кабінету",
      url: ACCOUNT_URL,
      note: "Окремі запити ZAS-DF і ZAS-DFU та pismo ogólne.",
    },
    {
      label: "Podatki.gov.pl: запит про дохід і внески",
      url: REQUEST_URL,
      note: "Розділ Treść wniosku визначає потрібні дані та рік PIT. Зразок є запитом, а не виданою довідкою.",
    },
    {
      label: "ELI: зразки довідок податкових органів",
      url: FORM_URL,
      note: "Додатки 10 і 10a містять зразки ZAS-DF та ZAS-DFU.",
    },
    {
      label: "KAS: електронна довідка та її перевірка",
      url: ELECTRONIC_URL,
      note: "Електронний оригінал, кваліфікована печатка або підпис та перевірка через PUESC. Використано для форми документа, не для старих показників швидкості видачі.",
    },
    documentSources.aliens,
  ],
  verifiedAt: "2026-09-10",
}

export const taxIncomeCertificateTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:tax-income-certificate",
    subject: {
      family: "evidence-document",
      reference: {
        kind: "evidence-document",
        documentId: "tax-income-certificate",
      },
    },
    summary: guide.description,
    claims: [
      {
        id: "request-scope",
        kind: "official-guidance",
        text: "ZAS-DF і ZAS-DFU мають різний обсяг. Запит визначає рік та потрібні податкові дані, а доказом є видана відповідь органу.",
        basis: [
          {
            reference: { kind: "external", url: ACCOUNT_URL },
            locator: "Uzyskiwanie zaświadczeń: ZAS-DF, ZAS-DFU",
          },
          {
            reference: { kind: "external", url: REQUEST_URL },
            locator: "Стор. 2, Treść wniosku",
          },
        ],
      },
      {
        id: "electronic-issue",
        kind: "official-guidance",
        text: "Через eUrząd Skarbowy довідку можна отримати без оплати skarbowa. Електронний оригінал має перевірюваний підпис або печатку.",
        basis: [
          {
            reference: { kind: "external", url: SERVICE_URL },
            locator:
              "Jak złożyć wniosek; Ile zapłacisz; W jakiej formie otrzymasz dokument",
          },
          {
            reference: { kind: "external", url: ELECTRONIC_URL },
            locator: "Zaświadczenie elektroniczne a papierowe",
          },
        ],
      },
      {
        id: "resident-evidence-limit",
        kind: "practical-inference",
        text: "Річна довідка є доказом певних податкових даних. Сама сума за один рік не встановлює регулярність доходу за весь необхідний період резидентської справи.",
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "Art. 211 ust. 1 pkt 1 і ust. 2; art. 212 ust. 1 pkt 1",
          },
          {
            reference: { kind: "external", url: REQUEST_URL },
            locator: "Рік PIT і запитаний обсяг",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-09-10",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default taxIncomeCertificateTopic
