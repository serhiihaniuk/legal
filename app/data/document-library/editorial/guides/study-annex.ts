import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
import { documentSources, foreignersLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "study-annex",
  title: "Додаток навчального закладу в MOS",
  category: "procedure",
  kind: "document",
  aliases: ["załącznik jednostki prowadzącej studia"],
  description:
    "Навчальний заклад заповнює цей електронний додаток до заяви на pobyt czasowy w celu kształcenia się na studiach. Він повідомляє, кого прийнято, на яку програму, на який період і з якими умовами оплати. При продовженні навчання заклад також описує його перебіг.",
  preparedBy:
    "Особа, уповноважена представляти jednostkę prowadzącą studia, тобто заклад, у якому відбувається навчання.",
  purpose: [
    "Передає відомості закладу в обов'язковій формі для відповідної нової заяви через MOS.",
  ],
  doesNotProve: [
    "Підписаний додаток не є рішенням про дозвіл. Дані про платне навчання зіставляють з доказами оплати, а кошти та страхування підтверджують окремо.",
  ],
  explanation: [
    {
      id: "which-form",
      title: "Одна форма з двома номерами",
      paragraphs: [
        "На самому бланку це п'ятий додаток до заяви. У розпорядженні зі зразками форм він розміщений як шостий додаток. Це та сама форма, а не два документи, які потрібно отримати в університеті.",
        "Такий порядок діє для нових заяв через MOS з 27.04.2026. У провадженнях, розпочатих і не завершених до цієї дати, збережено попередні правила. Звичайна довідка про навчання не замінює електронну дію закладу в новій заяві.",
      ],
    },
    {
      id: "read-fields",
      title: "Що заклад повідомляє про студента",
      paragraphs: [
        "Початкові поля ідентифікують студента та заклад. Далі йдуть дати навчання, напрям, рівень, платність, мова викладання та потрібний рівень її знання. Відомості про програму міжнародної мобільності заповнюють за фактичним навчанням, а не тому, що студент є іноземцем.",
        "При продовженні навчання останній змістовий пункт описує вже виконану програму і зараховані заняття. Він має показати реальний перебіг навчання, включно з незавершеними предметами. Формулювання про відсутність заборгованості за оплатою не відповідає на питання про заліки.",
      ],
      example: {
        title: "У додатку залишили стару дату завершення",
        facts: [
          "Умовний приклад. Студент продовжує магістратуру. Заклад уже погодив нову дату завершення через незарахований предмет, але в підготовлених відомостях залишив попередню дату. Помилку виявлено до підписання додатка.",
        ],
        sample: {
          kind: "letter",
          language: "pl",
          title: "Уточнені відомості навчального закладу",
          note: "Вибрані поля з вигаданим заповненням. Це не знімок MOS і не повний бланк для подання. Дати та суми наведено лише для прикладу.",
          paragraphs: [
            "Data rozpoczęcia i data zakończenia kształcenia na studiach\n01.10.2024 – 30.09.2026",
            "Kierunek studiów\nInformatyka",
            "Określenie poziomu studiów i informacja o ich odpłatności\nStudia drugiego stopnia. Opłata za semestr letni 2025/2026: 4 000 zł; uiszczona w całości.",
            "Dotychczasowa realizacja toku studiów\nJeden przedmiot niezaliczony. Termin ponownego zaliczenia: wrzesień 2026. Student kontynuuje studia; przewidywany termin ukończenia zmieniono z 30.06.2026 na 30.09.2026.",
          ],
        },
        reasoning: [
          "Заклад узгодив кінцеву дату з описом прогресу та власним рішенням щодо подальшого навчання. Незарахований предмет залишився видимим. Працівник не переписував дані університету від його імені.",
        ],
        conclusion:
          "Додаток послідовно описує поточне навчання. Це усуває розбіжність між його полями, але не означає, що всі умови дозволу вже виконані.",
      },
    },
    {
      id: "signature-and-filing",
      title: "Підпис закладу ще не завершує подання заяви",
      paragraphs: [
        "Заявник вказує у MOS адресу електронної пошти закладу. На неї надходить посилання для заповнення додатка. Уповноважена особа закладу підписує його кваліфікованим, особистим або довіреним електронним підписом. Заявник не може замінити цю дію завантаженням скану.",
        "Після завершення додатка заявник підписує та подає власну заяву. Одержане UPO, urzędowe poświadczenie odbioru, підтверджує її подання. Відправлене університету посилання, готовий додаток і подана заява є різними станами.",
      ],
    },
  ],
  keyChecks: [
    "Дані студента і програма відповідають цій заяві.",
    "Кінцева дата навчання узгоджується з описом прогресу.",
    "Платність, період і фактична оплата не суперечать фінансовим документам.",
    "Додаток підписала уповноважена особа закладу; заявник окремо отримав UPO своєї заяви.",
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.article("106", "Art. 106 ust. 7: зміст додатка закладу")}`,
    foreignersLaw.text`${foreignersLaw.article("106c", "Art. 106c: електронна форма в MOS")}`,
    foreignersLaw.text`${foreignersLaw.article("106d", "Art. 106d: підписи, документи та підтвердження подання")}`,
    {
      kind: "authored-legal-text",
      plainText: "Офіційний взірець: додаток 6 до розпорядження",
      parts: [
        {
          text: "Офіційний взірець: додаток 6 до розпорядження",
          target: {
            kind: "legal-provision",
            documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
            provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-6",
          },
        },
      ],
    },
  ],
  relatedDocuments: [
    "study-confirmation",
    "study-progress",
    "tuition-payment",
    "upo",
  ],
  sources: [
    documentSources.aliens,
    documentSources.regulation553,
    {
      label: "UdSC: відповіді для навчальних закладів",
      url: "https://www.gov.pl/web/udsc/qa-dla-uczelni",
      note: "Робота закладу з додатком MOS і додатковими документами про навчання.",
    },
    {
      label: "Запуск MOS 27.04.2026",
      url: "https://eli.gov.pl/eli/MP/2026/370/ogl",
      note: "Дата запуску визначена офіційним повідомленням.",
    },
    {
      label: "Зміни та перехідні правила MOS",
      url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
      note: "Для проваджень, розпочатих і не завершених до запуску, збережено попередні правила.",
    },
  ],
  verifiedAt: "2026-09-06",
}
export const studyAnnexDocumentTopic = defineDocumentTopic(guide)
export default studyAnnexDocumentTopic
