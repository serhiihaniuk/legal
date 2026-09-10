import type { DocumentGuide } from "~/data/document-library/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import { defineKnowledgeUnit } from "~/data/legal-knowledge/contracts"

const law = createLegalTextAuthor("ppsa")
const documents = createEvidenceDocumentTextAuthor()
const guide: DocumentGuide = {
  id: "judicial-complaint",
  title: "Skarga do WSA: звернення про судову перевірку",
  category: "procedure",
  aliases: [
    "skarga do WSA",
    "судова скарга",
    "скарга до адміністративного суду",
  ],
  description:
    "Skarga do WSA є підписаним зверненням, у якому сторона визначає оскаржене рішення, дію або бездіяльність і пояснює порушення. У матеріалах справи потрібна саме передана версія з додатками та доказом подання. Чернетка не підтверджує звернення до суду, а прийняття листа ще не означає задоволення скарги.",
  preparedBy:
    "Сторона особисто або представник, який має право діяти перед адміністративним судом.",
  purpose: [
    "Показує предмет судового оскарження, вимогу, наведені заперечення й передані матеріали.",
  ],
  doesNotProve: [
    "Сам документ не доводить своєчасності, допустимості чи обґрунтованості скарги. Подання не є дозволом на перебування й не зупиняє виконання оскарженого акта автоматично.",
  ],
  keyChecks: [
    "Визначені оскаржений акт, орган і потрібний засіб; відомі дата належного вручення та спосіб подання.",
    "Передана версія підписана належною особою. Збережені додатки, підтвердження подання та наступні листи суду.",
  ],
  explanation: [
    {
      id: "subject-and-route",
      title: "Яке питання передано суду",
      paragraphs: [
        documents.text`Після звичайного адміністративного оскарження предметом skargi може бути рішення другої інстанції. Це наступне звернення після ${documents.document("administrative-appeal", "odwołania")}, а не друга назва того самого листа. Копія попереднього звернення корисна для історії справи, але не показує автоматично, чому саме остаточне адміністративне рішення оскаржують до суду.`,
        law.text`${law.article("52", "Art. 52 PPSA")} зазвичай вимагає вичерпати доступні адміністративні засоби. Для wniosku o ponowne rozpatrzenie, тобто повторного розгляду тим самим органом, закон допускає пряме звернення до суду, але містить виняток для консула та визначених справ міністра закордонних справ. Тому документ починають з установлення конкретного акта й доступного засобу.`,
        law.text`Скарга на відмову та скарга на затягування мають різні предмети. Для bezczynności або przewlekłości ${law.article("53", "art. 53 § 2b")} передбачає звернення після подання ponaglenia. Якщо друга інстанція повернула справу на новий розгляд у передбаченому KPA порядку, застосовують спеціальний sprzeciw за ${law.articleRange("64a", "64e", { start: "art. 64a", end: "64e PPSA" })}. Наведений нижче приклад стосується звичайної скарги на рішення про відмову.`,
      ],
    },
    {
      id: "letter-structure",
      title: "Що означають частини скарги",
      paragraphs: [
        law.text`${law.article("46", "Art. 46")} визначає реквізити судового листа: суд, сторони, вид звернення, вимогу, підпис і додатки. Для першого листа потрібні також адреси та належні ідентифікаційні дані. Sygnatura akt є номером судової справи; її зазначають у наступних листах, коли вона вже відома. Номер адміністративного рішення не стає номером судової справи.`,
        law.text`${law.article("57", "Art. 57")} вимагає визначити оскаржений акт, орган і порушення права або правового інтересу. Wniosek є проханням про результат, наприклад скасувати рішення. Zarzut називає помилку, а uzasadnienie пояснює її на фактах і матеріалах. Фраза «прошу надати карту» без опису помилки не пояснює предмет судової перевірки.`,
        law.text`За ${law.article("47", "art. 47")} для паперового звернення потрібні копії листа й додатків для вручення іншим сторонам. Представництво визначають ${law.articleRange("34", "37", { start: "art. 34", end: "37" })}. Сторона може діяти особисто, але довіреність працівнику для провадження перед воєводою сама по собі не робить його допустимим судовим представником.`,
      ],
      example: {
        title: "Подана скарга й підтверджений обсяг звернення",
        facts: [
          "Вигаданий приклад. Заявнику особисто вручено рішення другої інстанції про відмову 20.07.2026. У матеріалах уже був підписаний додаток роботодавця з актуальними умовами роботи. Рішення посилається на попередні умови, але не пояснює оцінки нового додатка. Заявник вирішив оскаржити цю невідповідність.",
        ],
        sample: {
          kind: "letter",
          language: "pl",
          title: "Фрагмент скарги, переданої 12.08.2026",
          note: "Вигаданий навчальний фрагмент, не готовий бланк. У повному листі були назва належного суду, особисті дані, адреса, точні реквізити рішення, підпис і необхідні копії. Тут їх опущено.",
          paragraphs: [
            "Do właściwego Wojewódzkiego Sądu Administracyjnego, za pośrednictwem Szefa Urzędu do Spraw Cudzoziemców",
            "SKARGA na decyzję Szefa Urzędu do Spraw Cudzoziemców utrzymującą w mocy odmowę udzielenia zezwolenia na pobyt czasowy i pracę, doręczoną mi 20 lipca 2026 r.",
            "Zaskarżam decyzję w całości i wnoszę o jej uchylenie. Zarzucam niewyjaśnienie znaczenia aktualnego załącznika pracodawcy, który złożyłem w postępowaniu odwoławczym przed wydaniem decyzji.",
            "Decyzja odwołuje się do wcześniejszych warunków zatrudnienia. Nie wyjaśnia, dlaczego dokument zawierający ich aktualizację nie zmienia tej oceny. Pominięcie mogło wpłynąć na wynik sprawy, ponieważ odmowę uzasadniono właśnie warunkami zatrudnienia.",
            "Załączniki: kopia wskazanego załącznika pracodawcy, kopia pisma przewodniego z potwierdzeniem jego przyjęcia w postępowaniu odwoławczym, wymagane odpisy skargi i załączników.",
          ],
        },
        rows: [
          {
            label: "Предмет",
            evidence: "Рішення другої інстанції оскаржено повністю.",
            meaning:
              "Видно, який акт має перевірити суд. Первісне рішення воєводи залишається частиною історії справи.",
          },
          {
            label: "Порушення",
            evidence:
              "Не пояснено значення документа, який був у матеріалах до рішення.",
            meaning:
              "Заявник указав конкретну прогалину та її зв'язок із причиною відмови. Чи було порушення й чи могло воно вплинути на результат, установлює суд.",
          },
          {
            label: "Подання",
            evidence:
              "Канцелярія органу прийняла підписаний лист із додатками 12 серпня.",
            meaning:
              "Копія з підтвердженням показує вчинену дію. Дата в тексті без такого підтвердження цього не доводить.",
          },
        ],
        reasoning: [
          law.text`За ${law.article("53", "art. 53 § 1")} і правилами ${law.article("83", "art. 83")} звичайний тридцятиденний строк завершився 19 серпня, у середу. Подання 12 серпня було своєчасним. Працівник зберіг передану версію й доказ прийняття разом із рішенням та доказом його вручення.`,
          "У вигаданому прикладі орган передав матеріали до WSA, а повідомлення суду дало змогу додати судову sygnaturę до журналу. Висновок про законність відмови ще не зроблено; він не випливає з реєстрації звернення.",
        ],
        conclusion:
          "Скаргу подано вчасно, її предмет і додатки можна відновити з матеріалів. Стан справи змінився на судовий розгляд, але відмову ще не скасовано.",
      },
    },
    {
      id: "filing-record",
      title: "Що зберегти після відправлення",
      paragraphs: [
        law.text`Звичайний шлях за ${law.article("54", "art. 54")} проходить через орган, чий акт оскаржують. Електронну скаргу за чинними правилами подають до його elektronicznej skrzynki podawczej; підпис листа й додатків регулює ${law.article("46", "art. 46 § 2a–2b")}. Надсилання звичайного email або завантаження до MOS не замінює цей канал. Водночас ${law.article("53", "art. 53 § 4")} зберігає строк, якщо скаргу вчасно подано безпосередньо до адміністративного суду; суд пересилає її органу.`,
        documents.text`${documents.document("delivery-proof", "Доказ вручення рішення")} встановлює подію початку строку, а ${documents.document("dispatch-proof", "доказ подання скарги")} підтверджує завершену дію. До них додають точний текст звернення й фактично передані додатки. Якщо суд вимагає усунути недолік, у матеріалах потрібні також вимога, доказ її вручення та виконана відповідь.`,
        law.text`Wpis є судовою платою, окремою від оплати заяви на дозвіл. ${law.article("219", "Art. 219")} визначає її сплату, а ${law.article("220", "art. 220")} наслідки несплати після вимоги. Prawo pomocy за ${law.articleRange("243", "246", { start: "art. 243", end: "246" })} дає можливість просити допомогу щодо витрат і представництва за встановлених фінансових умов. Оплату та судові вимоги не позначають виконаними лише на підставі готової скарги.`,
        documents.text`За ${law.article("61", "art. 61")} скарга не зупиняє виконання акта автоматично. Якщо сторона просить про зупинення, її прохання та судова ухвала про нього є різними документами. Наступний результат перевірки читають у ${documents.document("court-judgment", "судовому рішенні")}, а не в підтвердженні прийняття листа.`,
      ],
    },
  ],
  relatedDocuments: [
    "administrative-appeal",
    "administrative-decision",
    "delivery-proof",
    "dispatch-proof",
    "court-judgment",
  ],
  legalBasis: [
    law.text`${law.articleRange("46", "61", { start: "Art. 46", end: "61 PPSA" })}: зміст, доступ, подання і виконання; ${law.articleRange("34", "37", { start: "art. 34", end: "37" })}: представництво.`,
  ],
  sources: [
    {
      label: "PPSA, Dz.U. 2026 poz. 143",
      url: "https://eli.gov.pl/eli/DU/2026/143/ogl",
      note: "Перевірено 10.09.2026 у тексті зі зміною Dz.U. 2026 poz. 846: подання, форма, представництво, судові витрати та виконання. Майбутні зміни електронних вручень не застосовано.",
    },
  ],
  verifiedAt: "2026-09-10",
}
export const judicialComplaintTopic = defineKnowledgeUnit({
  id: "evidence-document:judicial-complaint",
  subject: {
    family: "evidence-document",
    reference: { kind: "evidence-document", documentId: "judicial-complaint" },
  },
  summary: guide.description,
  claims: [
    {
      id: "court-filing",
      kind: "statute-text",
      text: "PPSA визначає форму скарги, доступ до суду, представництво та шлях подання. Звичайна скарга на рішення має тридцятиденний строк; подання не зупиняє виконання автоматично.",
      basis: [
        {
          reference: { kind: "official-source", sourceId: "eli-ppsa" },
          locator: "Art. 34–37, 46–61, 64a–64e, 83, 219–220, 243–246",
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
export default judicialComplaintTopic
