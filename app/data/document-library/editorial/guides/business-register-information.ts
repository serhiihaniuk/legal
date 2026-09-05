import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { externalLegalText } from "~/data/legal-library/legal-text"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources } from "../authoring"

const CEIDG_INFORMATION_URL =
  "https://www.gov.pl/web/sprawiedliwosc/centralna-ewidencja-i-informacja-o-dzialalnosci-gospodarczej"
const KSH_URL = "https://eli.gov.pl/eli/DU/2024/18/ogl"

const guide: DocumentGuide = {
  id: "business-register-information",
  title: "Informacja z KRS albo CEIDG",
  category: "company",
  aliases: ["дані krs/ceidg роботодавця", "krs/ceidg, повноваження підписанта"],
  documentType: "Відомості державного реєстру про компанію або підприємця.",
  description:
    "За цим документом встановлюють, хто саме є роботодавцем або контрагентом і як він діє через своїх представників. KRS (Krajowy Rejestr Sądowy) містить, зокрема, відомості про компанії. CEIDG (Centralna Ewidencja i Informacja o Działalności Gospodarczej) охоплює підприємців, які є фізичними особами.",
  preparedBy:
    "Відомості походять із державного реєстру. Працівник завантажує результат перевірки та зберігає його разом із документом, підписанта якого перевіряє.",
  purpose: [
    "Дозволяє зіставити сторону договору, реєстрові дані та спосіб представництва на потрібну дату.",
  ],
  doesNotProve: [
    "Реєстрація не доводить виконаних замовлень, наявності коштів або фактичної організації роботи. Запис про посадову особу також не підтверджує справжність конкретного підпису.",
  ],
  explanation: [
    {
      id: "identify-business",
      title: "Спочатку встановіть сторону документа",
      paragraphs: [
        "Для spółki z ograniczoną odpowiedzialnością, тобто товариства з обмеженою відповідальністю, перевіряють запис у KRS. Для одноосібного підприємця перевіряють CEIDG. У другому випадку стороною є сама фізична особа, навіть якщо вона використовує окрему торгову назву.",
        "Збіг назви недостатній. Зіставте реєстровий номер KRS або податковий номер NIP із договором, додатком роботодавця і заявою. Зафіксуйте також статус та дату отримання відомостей. Так можна помітити, що договір укладено з однією компанією, а додаток подала інша зі схожою назвою.",
      ],
    },
    {
      id: "read-representation",
      title: "Чому підпису директора може бути недостатньо",
      paragraphs: [
        "Sposób reprezentacji означає спосіб, у який уповноважені особи діють від імені компанії. У KRS ці відомості читають у розділі 2 разом зі складом органу. Zarząd є виконавчим органом компанії; prezes zarządu є його головою. Посада голови сама по собі не означає права одноосібного підпису.",
        "Для spółki z o.o. з кількома членами zarządu спосіб представництва визначає umowa spółki, тобто установчий договір. Якщо відповідного положення немає, Kodeks spółek handlowych передбачає спільну дію двох членів zarządu або одного члена разом із prokurentem. Prokurent діє на підставі prokury, спеціального комерційного повноваження. Його обсяг і спосіб здійснення перевіряють окремо.",
        "Якщо підпис поставив представник за pełnomocnictwem, перевіряють саме повноваження, його обсяг і осіб, які його надали. Для окремих дій є спеціальні правила. Наприклад, договір spółki z o.o. з власним членом zarządu потребує перевірки спеціального представництва, а не лише звичайного запису KRS.",
      ],
      example: {
        title: "Два члени zarządu, один підпис",
        facts: [
          "Умовний приклад. Компанія надала лист про місце виконання послуг. Його підписала лише особа A, prezes zarządu. Окремого повноваження для одноосібної дії не надано. Лист не стосується договору компанії з власним членом zarządu.",
        ],
        sample: {
          kind: "letter",
          language: "pl",
          title: "Фрагмент відомостей KRS про представництво",
          note: "Вигаданий навчальний фрагмент розділу 2. Це не офіційний витяг; реальні назви, номери та персональні дані не використані.",
          paragraphs: [
            "Organ uprawniony do reprezentacji podmiotu: ZARZĄD",
            "Sposób reprezentacji: DO SKŁADANIA OŚWIADCZEŃ W IMIENIU SPÓŁKI WYMAGANE JEST WSPÓŁDZIAŁANIE DWÓCH CZŁONKÓW ZARZĄDU.",
            "Osoby wchodzące w skład organu:\nOsoba A: PREZES ZARZĄDU\nOsoba B: CZŁONEK ZARZĄDU",
            "Prokurenci: BRAK WPISÓW",
          ],
        },
        reasoning: [
          "Працівник зіставив лист із реєстровим способом представництва. Компанія підтвердила, що склад zarządu не змінювався і окремого повноваження не було. Вона надала новий лист із підписами A та B і фактичною датою його складання. Початковий лист збережено в матеріалах.",
        ],
        conclusion:
          "Повноваження підписантів нового листа підтверджено. Це не є автоматичним висновком про недійсність усіх попередніх договорів компанії: для кожної дії можуть мати значення її вид, дата та окреме повноваження.",
      },
    },
    {
      id: "current-and-history",
      title: "Актуальні дані і повноваження на минулу дату",
      paragraphs: [
        "Odpis aktualny відображає чинні записи. Odpis pełny містить також історію записів у межах відомостей, які розкриває реєстр. Свіжий витяг допомагає перевірити теперішній стан, але не дає автоматичної відповіді, хто мав повноваження підписати документ кілька місяців тому.",
        "Коли дата повноваження спірна, звіряють історію записів і документ про призначення, припинення повноваження або його надання. Не кожна зміна набуває юридичного значення саме в день появи запису. У робочій нотатці вкажіть дату перевірки, дату підпису і джерело висновку щодо цієї дати.",
      ],
    },
  ],
  howToObtain: [
    "Визначте правову форму сторони та знайдіть її у відповідному офіційному реєстрі за ідентифікатором.",
    "Збережіть відомості з датою отримання та даними, які дозволяють перевірити їх походження. Для спірної минулої дати додайте історію й документи про повноваження.",
    "Зіставте підписантів і потрібну кількість підписів із конкретною дією. За наявності представника долучіть повноваження.",
  ],
  formAndValidity: [
    "Самостійно отриманий роздрук актуальних відомостей KRS має силу документа Centralnej Informacji KRS за умови, що містить ознаки, які дозволяють перевірити його відповідність реєстру. Не обрізайте ці дані заради зручного скриншота.",
    "Дата отримання показує, коли перевірено реєстр. Потреба повторної перевірки залежить від дати та обставин дії; універсальний строк придатності витягу тут не встановлюється.",
  ],
  legalBasis: [
    externalLegalText(
      "Kodeks spółek handlowych, art. 205 § 1 і art. 210: звичайне представництво spółki z o.o. та спеціальні правила у відносинах із членом zarządu.",
      KSH_URL
    ),
    "Реєстрові відомості підтверджують окремі факти про сторону. Вони не є самостійною підставою дозволу на перебування.",
  ],
  keyChecks: [
    "Правова форма та ідентифікатор збігаються з документами справи.",
    "Встановлено спосіб представництва, підписантів і їхні повноваження на дату дії.",
    "Реєстровий статус відокремлено від доказів реальної діяльності та фінансів.",
  ],
  relatedDocuments: [
    "power-of-attorney",
    "employment-annex-1",
    "employment-contract",
    "crbr-information",
    "business-evidence",
  ],
  sources: [
    documentSources.krs,
    {
      label: "Ministerstwo Sprawiedliwości: CEIDG",
      url: CEIDG_INFORMATION_URL,
      note: "CEIDG охоплює підприємців, які є фізичними особами.",
    },
    {
      label: "Kodeks spółek handlowych: ELI",
      url: KSH_URL,
      note: "Звичайне і спеціальне представництво. Приклад стосується spółki z o.o., а не всіх правових форм.",
    },
  ],
  verifiedAt: "2026-09-05",
}

export const businessRegisterInformationTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:business-register-information",
    subject: {
      family: "evidence-document",
      reference: {
        kind: "evidence-document",
        documentId: "business-register-information",
      },
    },
    summary: guide.description,
    claims: [
      {
        id: "register-scope",
        kind: "official-guidance",
        text: "KRS містить відомості про внесені до нього суб’єкти; CEIDG охоплює підприємців, які є фізичними особами.",
        basis: [
          {
            reference: { kind: "external", url: documentSources.krs.url },
            locator: "Uzyskiwanie informacji z KRS: odpis aktualny i pełny",
          },
          {
            reference: { kind: "external", url: CEIDG_INFORMATION_URL },
            locator:
              "Zakres ewidencji: przedsiębiorcy będący osobami fizycznymi",
          },
        ],
      },
      {
        id: "register-evidence-use",
        kind: "practical-inference",
        text: "Повноваження підписанта перевіряють для конкретної дії та дати. Сама реєстрація не доводить фінансової спроможності або фактичної організації роботи.",
        basis: [
          {
            reference: { kind: "external", url: documentSources.krs.url },
            locator: "Odpis aktualny i pełny; zakres informacji rejestrowych",
          },
          {
            reference: { kind: "external", url: KSH_URL },
            locator: "art. 205 § 1 i art. 210",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default businessRegisterInformationTopic
