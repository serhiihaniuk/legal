import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "research-annex",
  title: "Додаток для науковця",
  category: "procedure",
  aliases: [],
  description:
    "Форма про наукову установу та програму або угоду, у межах якої дослідник користується мобільністю.",
  preparedBy: "Заповнює заявник і подає з електронною заявою через MOS.",
  purpose: [
    "Поєднує особу, установу та заявлену дослідницьку мету або мобільність.",
  ],
  doesNotProve: [
    "Не замінює документів прийняття для досліджень та доказів інших умов дозволу.",
  ],
  keyChecks: [
    "Звірте установу з документом про прийняття.",
    "Відокремте дослідження в Польщі від довгострокової мобільності.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Офіційний взірець: додаток 5 до розпорядження",
      parts: [
        {
          text: "Офіційний взірець: додаток 5 до розпорядження",
          target: {
            kind: "legal-provision",
            documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
            provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-5",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 106 ustawy o cudzoziemcach",
      parts: [
        {
          text: "Art. 106 ustawy o cudzoziemcach",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-106",
          },
        },
      ],
    },
  ],
  sources: [
    {
      label: "Форми pobytu czasowego, Dz.U. 2026 poz. 553",
      url: "https://eli.gov.pl/eli/DU/2026/553/ogl",
      note: "Офіційне джерело для перевірки форми й застосування.",
    },
  ],
  verifiedAt: "2026-09-05",
  relatedDocuments: ["mos-application"],
  explanation: [
    {
      id: "read-form",
      title: "Як працювати з формою",
      paragraphs: [
        "На формі це додаток 4 до заяви, у розпорядженні додаток 5. Він застосовується до prowadzenia badań naukowych та mobilności długoterminowej naukowca.",
        "Інформацію про програму або міжуніверситетську угоду беріть із відповідних документів. Не створюйте зв’язок із програмою лише тому, що установа бере участь у міжнародних проєктах.",
      ],
    },
  ],
}
export const researchAnnexDocumentTopic = defineDocumentTopic(guide)
export default researchAnnexDocumentTopic
