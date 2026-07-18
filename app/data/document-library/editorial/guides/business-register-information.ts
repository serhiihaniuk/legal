import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"

const KRS_INFORMATION_URL =
  "https://www.gov.pl/web/gov/uzyskaj-informacje-z-krajowego-rejestru-sadowego"
const CEIDG_INFORMATION_URL =
  "https://www.gov.pl/web/gov/centralna-ewidencja-dzialalnosci-gospodarczej---portal-informacyjny"

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
    "Офіційні сервіси KRS і CEIDG надають реєстрові відомості відповідно про суб’єктів у KRS та підприємців-фізичних осіб у CEIDG.",
    "Практичний висновок: у справі cudzoziemca реєстровий документ підтверджує окремі факти про суб’єкта та reprezentację, але не є самостійною матеріальною підставою дозволу.",
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
  sources: [
    {
      label: "gov.pl — інформація з KRS",
      url: KRS_INFORMATION_URL,
      note: "Офіційна послуга перевірки суб’єкта, статусу та способу reprezentacji в KRS.",
    },
    {
      label: "gov.pl — CEIDG",
      url: CEIDG_INFORMATION_URL,
      note: "Офіційна інформація про електронний реєстр підприємців і пошук wpisu.",
    },
  ],
  verifiedAt: "2026-07-18",
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
        id: "register-scope",
        kind: "official-guidance",
        text: "KRS і CEIDG є різними державними реєстрами: KRS охоплює внесені до нього суб’єкти та їх reprezentację, а CEIDG — підприємців-фізичних осіб.",
        basis: [
          {
            reference: { kind: "external", url: KRS_INFORMATION_URL },
            locator: "sekcje „Kto może uzyskać” i „Jakie informacje uzyskasz”",
          },
          {
            reference: { kind: "external", url: CEIDG_INFORMATION_URL },
            locator:
              "sekcje „Informacje”, „Do kogo skierowany jest portal” i „Co znajdziesz w portalu” (wyszukiwarka firm)",
          },
        ],
      },
      {
        id: "register-evidence-use",
        kind: "practical-inference",
        text: "У справі cudzoziemca актуальні дані KRS або CEIDG допомагають перевірити суб’єкта й повноваження підписанта, але не доводять фактичну діяльність, фінансову спроможність чи реальну організацію праці.",
        basis: [
          {
            reference: { kind: "external", url: KRS_INFORMATION_URL },
            locator: "sekcja „Jakie informacje uzyskasz”",
          },
          {
            reference: { kind: "external", url: CEIDG_INFORMATION_URL },
            locator: "sekcja „Co znajdziesz w portalu”",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default businessRegisterInformationTopic
