import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources } from "../authoring"

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
    "CRBR регулюється законодавством про przeciwdziałanie praniu pieniędzy; у справі cudzoziemca використовується як джерело фактичних даних.",
    "Юридичне значення powiązań завжди оцінюють разом із матеріальною нормою конкретної справи.",
  ],
  keyChecks: [
    "NIP/KRS суб’єкта, дата перевірки та особи, показані в CRBR.",
    "Чи кожен елемент схеми має документальне джерело.",
    "Чи відділено власність від фактичного kierownictwa і відповідальності за процес.",
  ],
  relatedDocuments: ["business-register-information"],
  sources: [documentSources.crbr, documentSources.krs],
  verifiedAt: "2026-07-14",
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

export default crbrInformationTopic
