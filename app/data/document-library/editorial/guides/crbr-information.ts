import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources } from "../authoring"

const CRBR_INFORMATION_URL =
  "https://www.gov.pl/web/finanse/centralny-rejestr-beneficjentow-rzeczywistych"

const guide: DocumentGuide = {
  id: "crbr-information",
  title: "Informacja z CRBR i схема powiązań",
  category: "company",
  aliases: ["інформація з crbr", "krs/crbr і схема powiązań"],
  documentType:
    "Реєстрова інформація про beneficjenta rzeczywistego та окремо підготовлена схема корпоративних зв’язків.",
  description:
    "CRBR показує заявлені дані про beneficjentów rzeczywistych. Схема powiązań — це аналітичний документ, який пояснює зв’язок між компаніями, власниками та особами контролю; її треба будувати на перевірюваних реєстрових даних.",
  preparedBy:
    "Відомості CRBR походять із державного реєстру; схему готує сторона або представник із посиланнями на реєстрові документи.",
  howToObtain: [
    "Знайти суб’єкта в CRBR та зберегти актуальний результат пошуку.",
    "Окремо отримати KRS/CEIDG для кожного релевантного суб’єкта.",
    "На схемі вказати джерело, дату, вид зв’язку та частку або інший механізм контролю.",
  ],
  formAndValidity: [
    "CRBR відображає дані, заявлені до реєстру, на момент перевірки.",
    "Схема не є офіційним витягом: кожен її зв’язок повинен вести до джерела.",
  ],
  purpose: [
    "Допомагає показати власників, контролюючих осіб і зв’язки між суб’єктами.",
    "У спірній моделі співпраці полегшує аналіз, чи пов’язані замовник, виконавець та роботодавець.",
  ],
  doesNotProve: [
    "Не доводить сам по собі outsourcing procesowy або kierownictwo над працівниками.",
    "Не замінює umowy між компаніями, протоколів, рахунків і доказів фактичної організації роботи.",
  ],
  legalBasis: [
    "CRBR є публічним реєстром даних про beneficjentów rzeczywistych, створеним на підставі ustawy o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu.",
    "Практичний висновок: у справі cudzoziemca дані CRBR і KRS можуть бути джерелом фактів для схеми powiązań, але юридичне значення зв’язків оцінюють за матеріальною нормою конкретної справи.",
  ],
  keyChecks: [
    "NIP/KRS суб’єкта, дата перевірки та особи, показані в CRBR.",
    "Чи кожен елемент схеми має документальне джерело.",
    "Чи відділено власність від фактичного kierownictwa і відповідальності за процес.",
  ],
  relatedDocuments: ["business-register-information"],
  sources: [
    {
      label: "Ministerstwo Finansów — CRBR",
      url: CRBR_INFORMATION_URL,
      note: "Офіційна інформація про призначення, правову підставу, публічність і зміст CRBR.",
    },
    documentSources.krs,
  ],
  verifiedAt: "2026-07-18",
}

export const crbrInformationTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:crbr-information",
    subject: {
      family: "evidence-document",
      reference: { kind: "evidence-document", documentId: "crbr-information" },
    },
    summary: guide.description,
    claims: [
      {
        id: "crbr-scope",
        kind: "official-guidance",
        text: "CRBR є публічним реєстром заявлених даних про beneficjentów rzeczywistych визначених суб’єктів.",
        basis: [
          {
            reference: { kind: "external", url: CRBR_INFORMATION_URL },
            locator:
              "sekcje „Czym jest CRBR” i „Dane czyich beneficjentów rzeczywistych są gromadzone w CRBR”",
          },
        ],
      },
      {
        id: "relationship-diagram-use",
        kind: "practical-inference",
        text: "Схема powiązań є аналітичним, а не реєстровим документом: кожен показаний зв’язок треба підтвердити актуальними даними CRBR, KRS або CEIDG, а фактичне kierownictwo та організацію праці — окремими доказами.",
        basis: [
          {
            reference: { kind: "external", url: CRBR_INFORMATION_URL },
            locator:
              "sekcje „Organ właściwy w sprawach CRBR” i „Dane czyich beneficjentów rzeczywistych zawiera CRBR”",
          },
          {
            reference: {
              kind: "external",
              url: documentSources.krs.url,
            },
            locator: "sekcja „Jakie informacje uzyskasz”",
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

export default crbrInformationTopic
