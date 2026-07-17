import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import {
  documentSources,
  foreignersLaw,
  regulationLaw,
  workLaw,
} from "../authoring"

const guide: DocumentGuide = {
  id: "employment-contract",
  title: "Umowa o pracę",
  category: "work",
  aliases: ["umowa o pracę"],
  description:
    "Договір між працівником і роботодавцем, який визначає вид праці, місце, винагороду, час та дату початку роботи.",
  preparedBy:
    "Підписують працівник і роботодавець через особу, уповноважену до представництва.",
  purpose: [
    "Підтверджує погоджені сторонами умови трудових відносин.",
    regulationLaw.text`Дозволяє зіставити фактичну роботу з ${regulationLaw.annex("1", "Załącznikiem nr 1")}, powiadomieniem або дозволом.`,
  ],
  doesNotProve: [
    "Не доводить фактичну виплату зарплати або виконання роботи.",
    "Не доводить, хто реально керує працівником і чи відсутній outsourcing pracowniczy.",
  ],
  legalBasis: [
    "Kodeks pracy — норми про зміст umowy o pracę та обов’язкові умови договору.",
    workLaw.text`${workLaw.article("5", "Art. 5 ustawy z 20.03.2025 o warunkach dopuszczalności powierzania pracy cudzoziemcom")}.`,
    foreignersLaw.text`У справі pobyt czasowy i pracę — ${foreignersLaw.article("114", "art. 114 ustawy o cudzoziemcach")}.`,
  ],
  keyChecks: [
    "Сторони, підписант, вид договору, посада, місце, час, винагорода і дата початку.",
    regulationLaw.text`Відповідність ${regulationLaw.annex("1", "Załącznikowi nr 1")} та фактичній організації праці.`,
    "Зрозуміла працівникові мовна версія та належне оформлення змін aneksem.",
  ],
  sources: [
    documentSources.work,
    documentSources.aliens,
    {
      label: "PIP — мовна версія умови з cudzoziemcem",
      url: "https://www.pip.gov.pl/dla-pracodawcow/pytania-i-odpowiedzi/w-jaki-sposob-podmiot-powierzajacy-prace-moze-potwierdzic-ze-cudzoziemiec-posluguje-sie-jezykiem-polskim-i-w-zwiazku-z-tym-nie-ma-obowiazku-przedstawiac-mu-umowy-w-innym-jezyku",
      note: "Офіційне пояснення обов’язку надати зрозумілу версію договору.",
    },
  ],
  verifiedAt: "2026-07-14",
}

export const employmentContractTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:employment-contract",
    subject: {
      family: "evidence-document",
      reference: {
        kind: "evidence-document",
        documentId: "employment-contract",
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
              sourceId: "eli-powierzanie-pracy",
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

export default employmentContractTopic
