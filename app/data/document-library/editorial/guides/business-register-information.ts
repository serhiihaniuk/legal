import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import {
  FOREIGNERS_MOS_AMENDMENT_URL,
  documentSources,
  foreignersLaw,
  kpaLaw,
  regulationLaw,
  workLaw,
} from "../authoring"

const guide: DocumentGuide = {
  id: "business-register-information",
  title: "Informacja z KRS albo CEIDG",
  category: "company",
  aliases: [
    "інформація krs / ceidg",
    "дані krs/ceidg роботодавця",
    "krs/ceidg, повноваження підписанта",
  ],
  documentType:
    "Офіційна інформація з державного реєстру про юридичну особу або підприємця.",
  description:
    "KRS і CEIDG — різні реєстри. KRS використовують, зокрема, для spółek і інших зареєстрованих суб’єктів; CEIDG — для підприємців-фізичних осіб. Витяг допомагає встановити актуальні дані суб’єкта та спосіб його представництва.",
  preparedBy:
    "Відомості походять із державного реєстру; користувач завантажує або перевіряє їх в офіційному сервісі.",
  howToObtain: [
    "Спочатку визначити форму роботодавця або контрагента: KRS чи CEIDG.",
    "Знайти суб’єкта за KRS, NIP, REGON або іншими доступними реквізитами.",
    "Зберегти актуальну інформацію та дату перевірки; за потреби долучити документ про додаткове pełnomocnictwo.",
  ],
  formAndValidity: [
    "Електронна інформація відображає стан реєстру на час отримання.",
    "Право підпису оцінюють з урахуванням способу reprezentacji, кількості осіб і можливих повноважень prokurenta або pełnomocnika.",
  ],
  purpose: [
    "Ідентифікує суб’єкта, адресу, номери реєстру та осіб, уповноважених до представництва.",
    "Допомагає перевірити, чи могла конкретна особа підписати umowę, Załącznik nr 1 або pełnomocnictwo.",
  ],
  doesNotProve: [
    "Не доводить фактичне ведення діяльності, фінансову спроможність або реальну організацію праці.",
    "Запис про представництво не підтверджує автентичність конкретного підпису.",
  ],
  legalBasis: [
    "Відомості та спосіб представництва випливають із відповідного державного реєстру і правил для організаційної форми суб’єкта.",
    "У справі cudzoziemca реєстровий документ є доказом факту, а не самостійною матеріальною підставою дозволу.",
  ],
  keyChecks: [
    "Правильний реєстр, статус суб’єкта і дата актуальності.",
    "Назва, NIP/KRS/REGON, адреса та спосіб reprezentacji.",
    "Чи потрібен спільний підпис, prokura або окреме pełnomocnictwo.",
  ],
  relatedDocuments: [
    "power-of-attorney",
    "employment-annex-1",
    "employment-contract",
  ],
  sources: [documentSources.krs, documentSources.ceidg],
  verifiedAt: "2026-07-14",
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

export default businessRegisterInformationTopic
