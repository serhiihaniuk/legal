import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources, kpaLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "delivery-proof",
  title: "Dowód doręczenia",
  category: "procedure",
  kind: "evidence-set",
  aliases: [
    "підтвердження doręczenia",
    "конверт і awizo",
    "підтвердження e-doręczenia",
  ],
  description:
    "Dowód doręczenia є підтвердженням вручення конкретного листа. Він допомагає встановити одержувача, спосіб і дату вручення. Коли від цієї події починається строк на відповідь або оскарження, дата самого листа не може замінити дату вручення.",
  preparedBy:
    "Відомості фіксує особа, яка вручає лист, або сервіс електронного вручення. Паперове підтвердження може містити підпис одержувача й дату отримання.",
  purpose: [
    "Пов’язує лист із подією вручення, потрібною для обчислення строку.",
  ],
  doesNotProve: [
    "Не підтверджує правильність вимог органу або виконання цих вимог заявником.",
  ],
  explanation: [
    {
      id: "letter-and-receipt",
      title: "Дата листа і дата вручення",
      paragraphs: [
        kpaLaw.text`Zwrotne potwierdzenie odbioru є паперовим зворотним підтвердженням отримання. За ${kpaLaw.article("46", "Art. 46 KPA")} одержувач підтверджує вручення підписом і датою; якщо він не може або ухиляється від такого підтвердження, відомості та причину фіксує особа, яка вручає лист. Підтвердження потрібно пов’язати саме з листом, строк якого обчислюють.`,
        kpaLaw.text`Коли строк визначено в днях від певної події, ${kpaLaw.article("57", "Art. 57 § 1 KPA")} не включає день цієї події до відліку. Якщо останній день припадає на суботу чи встановлений законом неробочий день, застосовується перенесення за ${kpaLaw.article("57", "§ 4 цієї статті")}. Це правило не перетворює всі дні всередині строку на робочі.`,
      ],
      example: {
        title: "Лист від понеділка, вручення в середу",
        facts: [
          kpaLaw.text`Умовний приклад. Орган дав сім днів від вручення на усунення формального недоліку за ${kpaLaw.article("64", "Art. 64 § 2 KPA")}. Лист належно вручено заявнику 12 серпня 2026 року. Представника немає, спосіб вручення не оспорюється.`,
        ],
        sample: {
          kind: "letter",
          title: "Дві дати в різних документах",
          note: "Вигадані фрагменти для обчислення строку. Реквізити відправлення та підпис не відтворено. Це не бланк поштового оператора.",
          language: "pl",
          paragraphs: [
            "WEZWANIE\nData pisma: 10.08.2026 r.\nTermin: 7 dni od dnia doręczenia wezwania.",
            "POTWIERDZENIE ODBIORU\nData odbioru: 12.08.2026 r.\nOdebrał: adresat.",
          ],
        },
        reasoning: [
          "12 серпня є подією, від якої починається відлік, тому першим днем є 13 серпня. Сьомий день припадає на середу, 19 серпня. Неробочий день усередині цього періоду не зупиняє відлік. Дату 10 серпня до розрахунку не підставляють.",
        ],
        conclusion:
          "За встановлених у прикладі обставин останнім днем є 19 серпня. Окремо потрібно підтвердити своєчасність виконаної дії за правилами її подання.",
      },
    },
    {
      id: "recipient-and-channel",
      title: "Одержувач і спосіб вручення змінюють висновок",
      paragraphs: [
        kpaLaw.text`Якщо у справі встановлено pełnomocnika, представника сторони, ${kpaLaw.article("40", "Art. 40 § 2 KPA")} передбачає вручення йому. Дата, коли заявник пізніше переслав працівникові скриншот листа, не підміняє подію вручення представнику.`,
        kpaLaw.text`Awizo є повідомленням про можливість отримати поштове відправлення. Воно не є підписом про його фактичне отримання. За умов ${kpaLaw.article("44", "Art. 44 KPA")} лист може вважатися врученим і без фактичного отримання. Для такого висновку потрібні відомості про спробу вручення, зберігання та повідомлення; однієї довільної дати на конверті недостатньо.`,
        "В e-Doręczeniach існують окремі dowód wysłania та dowód otrzymania, докази відправлення й отримання. Дані електронного підтвердження стосуються визначеної події та адресата. Повідомлення на звичайну електронну пошту про новий лист у скриньці не є цим підтвердженням. Поштовий порядок не переносять на електронний лише через подібні назви.",
      ],
    },
    {
      id: "missed-deadline",
      title: "Якщо строк уже пропущено",
      paragraphs: [
        kpaLaw.text`Для поновлення процесуального строку за ${kpaLaw.article("58", "Art. 58 KPA")} потрібно обґрунтувати правдоподібність того, що пропуск стався без вини зацікавленої особи. Prośba o przywrócenie terminu є проханням поновити строк: його подають протягом семи днів від припинення причини пропуску та одночасно виконують пропущену дію. Саме додавання конверта не пояснює причину пропуску.`,
        kpaLaw.text`Порядок вирішення прохання й можливість оскарження відмови залежать від виду строку за ${kpaLaw.article("59", "Art. 59 KPA")}. Тому в матеріалах мають бути окремо встановлені дата вручення, причина пропуску, час її припинення та виконана дія.`,
      ],
    },
  ],
  legalBasis: [
    kpaLaw.text`${kpaLaw.articleRange("39", "49b", { start: "Art. 39", end: "49b" })} KPA.`,
    kpaLaw.text`${kpaLaw.articleRange("57", "59", { start: "Art. 57", end: "59" })} KPA: обчислення і поновлення строку.`,
  ],
  keyChecks: [
    "Чи стосуються лист і підтвердження одного відправлення та належного одержувача.",
    "Яку подію підтверджує кожна дата: створення, відправлення, фактичне чи передбачене законом вручення.",
    "Який строк починається від установленої події та чи потрібне перенесення останнього дня.",
  ],
  relatedDocuments: [
    "authority-summons",
    "administrative-decision",
    "power-of-attorney",
    "dispatch-proof",
    "deadline-obstacle",
  ],
  sources: [
    documentSources.kpa,
    {
      label: "e-Doręczenia: питання й відповіді",
      url: "https://www.gov.pl/web/e-doreczenia/pytania-i-odpowiedzi",
      note: "Події, які підтверджують електронні докази, та збереження повідомлення з додатками.",
    },
  ],
  verifiedAt: "2026-09-05",
}

export const deliveryProofTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:delivery-proof",
    subject: {
      family: "evidence-document",
      reference: { kind: "evidence-document", documentId: "delivery-proof" },
    },
    summary: guide.description,
    claims: [
      {
        id: "delivery-and-deadline",
        kind: "statute-text",
        text: "Правила KPA визначають допустимі канали doręczenia, а процесуальний строк обчислюють від установленої законом події; своєчасність можна підтвердити передбаченим способом подання.",
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 39–49b i art. 57",
          },
        ],
      },
      {
        id: "deadline-restoration",
        kind: "statute-text",
        text: "При пропуску строку без вини prośbę o przywrócenie terminu подають протягом 7 днів після припинення перешкоди, обґрунтовують відсутність вини й одночасно виконують пропущену дію.",
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 58 § 1–3",
          },
        ],
      },
      {
        id: "delivery-file-practice",
        kind: "practical-inference",
        text: "Для контролю строку зберігають разом лист, підтвердження вручення, розрахунок строку, відповідь і доказ її подання.",
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 39–49b i art. 57–59",
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

export default deliveryProofTopic
