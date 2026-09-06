import type { DocumentGuide } from "~/data/document-library/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { defineKnowledgeUnit } from "~/data/legal-knowledge/contracts"
import { documentSources, kpaLaw } from "../authoring"

const documents = createEvidenceDocumentTextAuthor()
const guide: DocumentGuide = {
  id: "procedural-complaint",
  title: "Zażalenie: скарга на процесуальну ухвалу",
  category: "procedure",
  aliases: ["zażalenie", "скарга на postanowienie"],
  description:
    "Zażalenie є зверненням сторони проти визначеної процесуальної ухвали, для якої передбачено окреме оскарження. Документ має показати предмет незгоди й бажаний результат. Його подання та можливе зупинення виконання ухвали є різними подіями.",
  preparedBy: "Готує й підписує сторона або її належний представник.",
  keyChecks: [
    "Звернення визначає ухвалу й обсяг незгоди; встановлено норму про окреме zażalenie.",
    "Є підписана передана версія, додатки, доказ вручення ухвали й подання скарги. Зупинення виконання не позначене як факт без окремої підстави.",
  ],
  purpose: [
    "Фіксує, яке postanowienie оскаржено, у якому обсязі та з якими запереченнями.",
  ],
  doesNotProve: [
    "Назва zażalenie не створює права окремо оскаржити будь-яку ухвалу. Копія без доказу подання не підтверджує дотримання строку; подання саме не зупиняє виконання.",
  ],
  explanation: [
    {
      id: "identify-the-order",
      title: "Яка ухвала дає підставу для цього листа",
      paragraphs: [
        documents.text`Звернення пов'язують із повним ${documents.document("procedural-order", "postanowieniem")}. Це акт про окреме процесуальне питання: наприклад, доступ до матеріалів. Його результат і правова підстава визначають предмет захисту. Незгода з кінцевим рішенням щодо дозволу потребує іншого документа, ${documents.document("administrative-appeal", "odwołania")}, якщо цей засіб доступний.`,
        kpaLaw.text`${kpaLaw.article("141", "Art. 141 § 1 KPA")} передбачає окреме zażalenie лише у встановлених випадках. Для відмови в доступі до матеріалів таке право дає ${kpaLaw.article("74", "art. 74 § 2")}. Натомість відмова провести запропонований доказ сама по собі не отримує такого самого способу захисту. ${kpaLaw.article("142", "Art. 142")} визначає загальне оскарження ухвали без окремого zażalenia разом із рішенням; для остаточних актів і спеціальних процедур потрібна окрема перевірка.`,
        "Pouczenie є інформацією про засіб захисту й порядок подання. Працівник зіставляє її з нормою про конкретну ухвалу. Це дозволяє виявити неправильний строк або невідповідний засіб до того, як готовий текст буде надіслано.",
      ],
    },
    {
      id: "complaint-specimen",
      title: "Приклад: скарга щодо обсягу обмеженого доступу",
      paragraphs: [
        "Корисне заперечення пояснює, яка частина відмови потребує перевірки. Воно не підміняє невідомі стороні матеріали припущенням, що жодної законної підстави для обмеження немає.",
      ],
      example: {
        title: "Заявник відокремив власний додаток від закритого матеріалу",
        facts: [
          "Вигаданий приклад звичайного провадження KPA. Орган відмовив заявнику без представника в доступі до документа разом із додатками через важливий державний інтерес. У переліку додатків указано копію договору, яку раніше подав сам заявник. Повні мотиви не пояснюють окремо обмеження щодо цієї копії. Ухвалу належно вручено 03.08.2026; заявник оскаржує відмову лише в цій частині.",
        ],
        sample: {
          kind: "letter",
          language: "pl",
          title: "Фрагмент zażalenia, поданого 07.08.2026",
          note: "Вигаданий текст. У повному підписаному листі були дані й адреса сторони, належні органи та точні реквізити ухвали. Тут ці відомості не відтворено; фрагмент не є універсальним бланком.",
          paragraphs: [
            "ZAŻALENIE",
            "Do właściwego organu wyższego stopnia, za pośrednictwem organu, który wydał postanowienie.",
            "Zaskarżam postanowienie doręczone mi 03.08.2026 r. w części dotyczącej odmowy dostępu do kopii umowy złożonej przeze mnie i wymienionej w wykazie załączników. Wnoszę o uchylenie odmowy w tej części.",
            "Uzasadnienie odnosi się łącznie do dokumentu i załączników. Nie wyjaśnia, dlaczego ograniczenie obejmuje również wskazaną kopię mojej umowy. Proszę o ocenę podstawy i zakresu wyłączenia w odniesieniu do tego załącznika. Nie znam treści pozostałego wyłączonego materiału.",
            "Załączniki: kopia mojego wcześniejszego pisma z wykazem załączników i potwierdzeniem przyjęcia oraz kopia wskazanej umowy.",
          ],
        },
        rows: [
          {
            label: "Обсяг",
            evidence: "Оскаржено відмову щодо названої копії договору.",
            meaning:
              "Предмет скарги можна відрізнити від решти закритих матеріалів і від рішення щодо дозволу.",
          },
          {
            label: "Аргумент",
            evidence:
              "Мотиви не пояснюють окремо обмеження щодо власного додатка заявника.",
            meaning:
              "Звернення просить перевірити конкретну прогалину. Походження додатка саме не доводить відсутності законної підстави обмеження.",
          },
          {
            label: "Додатки",
            evidence: "Копія попереднього листа з підтвердженням і договору.",
            meaning:
              "Матеріали дозволяють визначити документ, про який ідеться. Вони не відтворюють невідомий заявнику закритий матеріал.",
          },
        ],
        reasoning: [
          kpaLaw.text`Право на окрему скаргу випливає з ${kpaLaw.article("74", "art. 74 § 2 KPA")}. За ${kpaLaw.article("141", "art. 141 § 2")} та ${kpaLaw.article("57", "art. 57 § 1 і 4")} відлік почався 04.08 і завершився в понеділок 10.08. Канцелярія органу, який видав ухвалу, прийняла підписаний лист із додатками 07.08. Заявник зберіг копію з підтвердженням.`,
          "Працівник записав, який обсяг оскаржено і на якому документі ґрунтується заперечення. Він не позначив доступ як відновлений. Чи обґрунтоване обмеження щодо додатка, має встановити орган під час перегляду.",
        ],
        conclusion:
          "Своєчасно подано скаргу на визначену частину відмови й збережено доказ подання. Рішення про доступ залишається окремим результатом, якого цей лист не замінює.",
      },
    },
    {
      id: "form-deadline-execution",
      title: "Форма, строк та стан після подання",
      paragraphs: [
        kpaLaw.text`${kpaLaw.article("144", "Art. 144 KPA")} передбачає відповідне застосування правил про odwołania. За ${kpaLaw.article("129", "art. 129 § 1")} скаргу подають до належного органу через орган, який видав ухвалу. ${kpaLaw.article("63", "Art. 63")} вимагає визначення особи, адреси й вимоги; паперовий лист підписують. Електронне звернення потребує передбаченого каналу, а не довільного email.`,
        kpaLaw.text`Власний строк zażalenia за ${kpaLaw.article("141", "art. 141 § 2")} становить сім днів від вручення або допустимого усного оголошення стороні. Його не замінюють чотирнадцятьма днями з правил про odwołanie. Обґрунтування конкретної помилки корисне для перегляду; застосування ${kpaLaw.article("128", "art. 128")} не перетворює професійний перелік статей на загальний обов'язковий реквізит. Спеціальні правила можуть вимагати іншого.`,
        documents.text`Разом зберігають ухвалу, ${documents.document("delivery-proof", "доказ вручення")}, передану версію скарги, додатки й ${documents.document("dispatch-proof", "доказ подання")}. Якщо діє представник, потрібно врахувати належного адресата вручення; дата, коли клієнт переслав скан працівнику, не замінює його автоматично.`,
        kpaLaw.text`За ${kpaLaw.article("143", "art. 143 KPA")} zażalenie не зупиняє виконання автоматично. Орган, який видав ухвалу, може зупинити його, якщо визнає це обґрунтованим. Навіть включене до листа прохання про зупинення ще не є ухвалою про зупинення.`,
      ],
    },
  ],
  legalBasis: [
    kpaLaw.text`${kpaLaw.article("74", "Art. 74 § 2 KPA")}: відмова в доступі; ${kpaLaw.articleRange("141", "144", { start: "art. 141", end: "144 KPA" })}: окрема скарга, строк і виконання.`,
  ],
  sources: [
    {
      ...documentSources.kpa,
      note: "Перевірено 06.09.2026: окреме zażalenie за KPA, письмова форма, обмежений доступ до матеріалів і виконання ухвали.",
    },
  ],
  verifiedAt: "2026-09-06",
}

export const proceduralComplaintTopic = defineKnowledgeUnit({
  id: "evidence-document:procedural-complaint",
  subject: {
    family: "evidence-document",
    reference: {
      kind: "evidence-document",
      documentId: "procedural-complaint",
    },
  },
  summary: guide.description,
  claims: [
    {
      id: "complaint-form",
      kind: "statute-text",
      text: "Окреме zażalenie потребує передбаченої підстави. Загальний строк становить сім днів, а подання саме не зупиняє виконання ухвали.",
      basis: [
        {
          reference: { kind: "official-source", sourceId: "eli-kpa" },
          locator: "Art. 57, 63, 74, 128–129, 141–144 KPA",
        },
      ],
    },
  ],
  relationships: [],
  review: {
    reviewStatus: "reviewed",
    language: "uk",
    legalStateDate: "2026-09-06",
    verifiedAt: guide.verifiedAt,
  },
  body: guide,
})
export default proceduralComplaintTopic
