import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "response-letter",
  title: "Відповідь на wezwanie",
  category: "evidence",
  aliases: [],
  description:
    "Wezwanie є листом органу з вимогою надати матеріал або виконати дію. Відповідь пояснює, як сторона виконала кожний пункт, і пов’язує його з конкретним додатком або поясненням відсутнього матеріалу. Це супровід до доказів, а не їх заміна.",
  preparedBy: "Готує і підписує заявник або належний представник.",
  purpose: ["Формулює позицію сторони та вказує подані докази."],
  doesNotProve: [
    "Перелік додатків не доводить їх фактичного подання, а обіцянка надати документ не усуває прогалину.",
  ],
  keyChecks: [
    "Збережіть нумерацію пунктів wezwania.",
    "Назвіть факт, період і додаток для кожної відповіді.",
    "Перевірте підпис, канал подання і підтвердження відправлення.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Art. 63 KPA",
      parts: [
        {
          text: "Art. 63 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-63",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 64 KPA",
      parts: [
        {
          text: "Art. 64 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-64",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 77 KPA",
      parts: [
        {
          text: "Art. 77 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-77",
          },
        },
      ],
    },
  ],
  sources: [
    {
      label: "Kodeks postępowania administracyjnego",
      url: "https://eli.gov.pl/eli/DU/2025/1691/ogl",
      note: "Офіційне джерело для перевірки форми й застосування.",
    },
  ],
  verifiedAt: "2026-09-05",
  relatedDocuments: [
    "authority-summons",
    "requirements-table",
    "case-file-index",
    "dispatch-proof",
  ],
  explanation: [
    {
      id: "point-by-point",
      title: "Вимога, відповідь і додаток",
      paragraphs: [
        "На початку відповіді зазначають справу й лист, якого вона стосується. Далі зберігають нумерацію вимог органу. Така побудова дозволяє прочитати пункт листа, відразу знайти відповідь і відкрити названий додаток.",
        "Якщо документа поки немає, опишіть причину й наявні підтвердження. Прохання дати більше часу не означає, що строк уже продовжено.",
      ],
      example: {
        title: "Договір є, даних про страхування ще немає",
        facts: [
          "Умовний приклад. Орган просить актуальні умови роботи й підтвердження страхування. У працівника є основний договір, підписаний aneks, тобто додаток зі змінами до договору, та підтвердження запиту до ZUS, установи соціального страхування. Самого підтвердження страхування ще немає.",
        ],
        sample: {
          kind: "letter",
          title: "Фрагмент відповіді польською",
          note: "Вигаданий уривок без персональних даних. Показано зміст відповіді; реквізити, підпис і належний спосіб подання оформлюють окремо.",
          language: "pl",
          paragraphs: [
            "Dotyczy: odpowiedzi na wezwanie w sprawie zezwolenia na pobyt czasowy i pracę",
            "Ad pkt 1. Przedkładam umowę o pracę wraz z podpisanym aneksem. Aneks zmienia warunki wynagrodzenia od wskazanej w nim daty. Umowę i aneks załączam łącznie, aby przedstawić warunki zatrudnienia przed zmianą i po zmianie.",
            "Ad pkt 2. Nie dysponuję jeszcze potwierdzeniem aktualnego ubezpieczenia zdrowotnego. Wystąpiłem do ZUS o dokument. Załączam potwierdzenie złożenia tego wniosku; potwierdza ono jedynie wystąpienie o dokument, a nie samo ubezpieczenie.",
            "Załączniki:\n1. Umowa o pracę.\n2. Aneks do umowy.\n3. Potwierdzenie złożenia wniosku do ZUS.",
          ],
        },
        reasoning: [
          "Перший абзац показує, чому договір і aneks читають разом. Другий точно називає прогалину: є доказ звернення до ZUS, але ще немає даних про страхування. Така відповідь не стверджує, що друга вимога виконана, і не змінює її строку.",
        ],
        conclusion:
          "Пакет містить часткову відповідь. Невирішена вимога залишається видимою для подальшої роботи.",
      },
    },
  ],
}
export const responseLetterDocumentTopic = defineDocumentTopic(guide)
export default responseLetterDocumentTopic
