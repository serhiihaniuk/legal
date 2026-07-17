import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources } from "../authoring"

const guide: DocumentGuide = {
  id: "pesel-ukr-confirmation",
  title: "Potwierdzenie danych PESEL i statusu UKR",
  category: "identity",
  aliases: [
    "підтвердження pesel ukr",
    "активний pesel ukr та історія status ukr",
    "паспорт і pesel ukr",
  ],
  documentType:
    "Електронний або урядовий документ із даними, внесеними до rejestru PESEL; статус UKR є окремою реєстровою ознакою.",
  description:
    "Документ допомагає перевірити дані особи та те, який статус записаний у PESEL на момент отримання. Для CUKR або іншої процедури важлива не лише наявність номера, а конкретний статус, його історія та події, що могли на нього вплинути.",
  preparedBy:
    "Дані веде rejestr PESEL; особа може перевірити власні дані через офіційну електронну послугу або звернутися до urzędu gminy.",
  howToObtain: [
    "Перевірити власні дані через gov.pl / mObywatel або отримати документ у належному urzędzie.",
    "Якщо потрібна історія статусу, окремо встановити періоди, зміни й причини записів.",
    "При розбіжності з паспортом спочатку виправити дані в реєстрі.",
  ],
  formAndValidity: [
    "Документ відображає реєстровий стан на момент формування.",
    "Номер PESEL сам по собі не означає активний status UKR.",
  ],
  purpose: [
    "Підтверджує внесені до PESEL ідентифікаційні дані та, якщо показано, ознаку status UKR.",
    "Допомагає виявити розбіжності між паспортом, заявою та державним реєстром.",
  ],
  doesNotProve: [
    "Не замінює паспорта як dokumentu podróży.",
    "Не доводить автоматично безперервність status UKR або виконання всіх умов CUKR.",
  ],
  legalBasis: [
    "Реєстрові дані PESEL та спеціальні норми щодо obywateli Ukrainy; для CUKR перевіряйте чинну спеціальну процедуру й офіційні пояснення UdSC.",
  ],
  keyChecks: [
    "Ім’я, дата народження, громадянство, номер документа, status UKR, дата перевірки та історія змін.",
  ],
  relatedDocuments: ["passport"],
  sources: [documentSources.pesel, documentSources.cukrQa],
  verifiedAt: "2026-07-14",
}

export const peselUkrConfirmationTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:pesel-ukr-confirmation",
    subject: {
      family: "evidence-document",
      reference: {
        kind: "evidence-document",
        documentId: "pesel-ukr-confirmation",
      },
    },
    summary: guide.description,
    claims: [
      {
        id: "document-purpose",
        kind: "requires-verification",
        text: guide.description,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "document-specific requirements",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default peselUkrConfirmationTopic
