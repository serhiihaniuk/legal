import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
import { documentSources, foreignersLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "job-description",
  title: "Опис посади і фактичних обов'язків",
  category: "work",
  kind: "document",
  aliases: ["opis stanowiska", "zakres obowiązków"],
  description:
    "Опис посади пояснює, що працівник робитиме, за які рішення відповідатиме і які знання для цього потрібні. У справі Blue Card він допомагає зіставити вимоги роботи з освітою або досвідом заявника.",
  preparedBy:
    "Роботодавець або керівник, який знає зміст роботи та уповноважений його підтвердити.",
  purpose: [
    "Розкриває зміст роботи, коли назва посади в договорі чи додатку роботодавця не дає достатньої відповіді.",
  ],
  doesNotProve: [
    "Опис вимог до посади не доводить, що заявник має ці кваліфікації. Для цього потрібні документи про освіту, досвід або професійний допуск.",
  ],
  explanation: [
    {
      id: "read-the-role",
      title: "Завдання важливіші за назву посади",
      paragraphs: [
        "Opis stanowiska описує робоче місце, а zakres obowiązków зазвичай перелічує обов'язки конкретного працівника. Вони можуть бути окремими документами або частиною договору. Окремий файл із такою назвою не є універсальним обов'язковим формуляром для кожної справи.",
        "Для Blue Card пояснення має показати, чому робота потребує високих кваліфікацій. Порівняйте розробку архітектури застосунку та реєстрацію звернень користувачів за готовою інструкцією. Обидві посади можуть називатися IT specialist, але завдання та потрібні знання різні.",
        "Вимоги, без яких роботу неможливо виконувати, слід відрізняти від побажань у вакансії. Бажаний досвід керування командою не означає, що посада фактично передбачає управління. Сам прикметник senior також не встановлює правової категорії роботи.",
      ],
      example: {
        title: "Що стоїть за назвою IT specialist",
        facts: [
          "Умовний приклад. У договорі зазначено IT specialist. Роботодавець підтвердив, що людина розроблятиме серверні застосунки, і надав опис обов'язків. У документах заявника є досвід розробки на Java.",
        ],
        sample: {
          kind: "letter",
          language: "pl",
          title: "Opis stanowiska: IT specialist",
          note: "Вигаданий фрагмент опису роботодавця. Це приклад змісту, а не готовий бланк чи висновок про право на Blue Card.",
          paragraphs: [
            "Cel stanowiska\nProjektowanie i rozwój aplikacji serwerowych obsługujących zamówienia klientów.",
            "Zakres obowiązków\nAnaliza wymagań, projektowanie interfejsów API i modelu danych, implementacja w języku Java, testy automatyczne oraz przeglądy kodu. Pracownik odpowiada za dobór rozwiązań technicznych w powierzonym module.",
            "Kwalifikacje niezbędne do pracy\nWiedza z zakresu programowania, baz danych i projektowania systemów, pozwalająca samodzielnie realizować powyższe zadania.",
            "Organizacja pracy\nZadania ustala kierownik zespołu rozwoju oprogramowania. Stanowisko nie obejmuje rutynowej obsługi infolinii ani instalacji sprzętu u klientów.",
          ],
        },
        reasoning: [
          "Опис називає завдання та технічну відповідальність, які можна порівняти з попереднім досвідом заявника. Він пояснює загальну назву IT specialist. Працівник справи зіставив ці дані з договором і відомостями роботодавця у заяві, а не замінив їх новою назвою посади.",
        ],
        conclusion:
          "Зміст майбутньої роботи став зрозумілим і придатним для порівняння з доказами кваліфікації. Сам опис ще не підтверджує досвід заявника або виконання решти умов дозволу.",
      },
    },
    {
      id: "conflicting-records",
      title: "Коли опис суперечить договору",
      paragraphs: [
        "Різні внутрішні назви можуть описувати одну роботу, якщо завдання збігаються. Але коли один документ передбачає розробку програм, а інший тільки продаж обладнання, це вже розбіжність у змісті. Її пояснює роботодавець і, за потреби, виправляє відповідний документ.",
        "Новий опис не слід заднім числом видавати за старі обов'язки або підганяти під потрібну категорію дозволу. Якщо сама робота змінилася, у матеріалах має бути видно дату зміни та нові умови. Інакше диплом порівнюватимуть із роботою, якої людина фактично не виконує.",
      ],
    },
  ],
  keyChecks: [
    "Опис містить конкретні завдання, потрібні знання і відповідальність.",
    "Обов'язки узгоджуються з договором та додатком роботодавця.",
    "Кваліфікації заявника підтверджені окремими матеріалами.",
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.article("127", "Art. 127: кваліфікації, потрібні для заявленої роботи")}`,
  ],
  sources: [documentSources.aliens],
  verifiedAt: "2026-09-06",
  relatedDocuments: [
    "employment-contract",
    "employment-annex-1",
    "qualification-evidence",
    "blue-card-annex",
  ],
}
export const jobDescriptionDocumentTopic = defineDocumentTopic(guide)
export default jobDescriptionDocumentTopic
