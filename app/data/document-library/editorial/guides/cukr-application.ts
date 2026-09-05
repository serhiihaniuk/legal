import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "cukr-application",
  title: "Заява на карту CUKR",
  category: "procedure",
  aliases: [],
  description:
    "Окрема електронна заява на карту з позначкою «Poprzednio posiadacz ochrony czasowej». Її умови та перевірки реєстрів відрізняються від звичайної заяви на pobyt czasowy.",
  preparedBy: "Заявник входить у власний обліковий запис MOS і підписує заяву.",
  purpose: ["Фіксує звернення саме за CUKR."],
  doesNotProve: [
    "Обліковий запис і успішна перевірка реєстрів ще не означають подання заяви.",
  ],
  keyChecks: [
    "Перевірте PESEL UKR, дані паспорта, відбитки та взірець підпису в реєстрах.",
    "Збережіть підписану подану версію та підтвердження.",
    "Не додавайте пакет роботодавця як універсальну умову CUKR.",
  ],
  legalBasis: [],
  sources: [
    {
      label: "UdSC: CUKR, питання й відповіді",
      url: "https://www.gov.pl/web/udsc/cukr-QA",
      note: "Офіційне джерело для перевірки форми й застосування.",
    },
  ],
  verifiedAt: "2026-09-05",
  relatedDocuments: [
    "pesel-ukr-confirmation",
    "passport",
    "digital-photo",
    "upo",
  ],
  explanation: [
    {
      id: "before-filing",
      title: "Обліковий запис, реєстр і подана заява",
      paragraphs: [
        "Вхід через login.gov.pl дає доступ до сервісу. Це підготовча дія. Якщо MOS повідомляє про неповні дані, заявник звертається до urząd gminy, щоб перевірити й доповнити запис.",
        "Відсутні відбитки або взірець підпису доповнюють у реєстрі. Завантаження довільної сканованої довідки не замінює такого оновлення. Після перевірки окремо завершують підписання й відправлення заяви.",
      ],
    },
  ],
}
export const cukrApplicationDocumentTopic = defineDocumentTopic(guide)
export default cukrApplicationDocumentTopic
