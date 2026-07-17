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
  id: "sworn-translation",
  title: "Tłumaczenie przysięgłe і документи іноземною мовою",
  category: "evidence",
  aliases: [
    "tłumaczenie przysięgłe",
    "зрозумілий переклад/версія",
    "tłumaczenie, apostille, legalizacja",
  ],
  documentType:
    "Переклад, виконаний особою, уповноваженою відповідно до польських правил, або інша допустима мовна версія — залежно від вимоги.",
  description:
    "Не кожна ситуація вимагає tego samego виду перекладу. Для доказу іноземною мовою organ може вимагати tłumaczenie na język polski; для договору з cudzoziemcem окремо діє обов’язок надати зрозумілу мовну версію. Apostille або legalizacja підтверджують походження документа, а не правильність перекладу.",
  preparedBy:
    "Tłumaczenie przysięgłe виконує tłumacz przysięgły; зрозумілу версію договору забезпечує podmiot powierzający pracę.",
  howToObtain: [
    "Встановити, чи потрібний переклад звичайний, przysięgły, чи лише зрозуміла версія договору.",
    "Перевірити перекладача в офіційному списку Ministerstwa Sprawiedliwości.",
    "Передати повний документ із печатками, додатками й зворотними сторонами; зберегти зв’язок перекладу з оригіналом.",
  ],
  formAndValidity: [
    "Переклад повинен охоплювати саме той документ і всі елементи, які мають доказове значення.",
    "Apostille або legalizacja застосовуються лише тоді, коли цього вимагають правила щодо походження документа.",
  ],
  purpose: [
    "Дозволяє organowi прочитати зміст іноземного документа та пов’язати його з оригіналом.",
  ],
  doesNotProve: [
    "Не робить недостовірний або нечинний оригінал правильним.",
    "Не замінює apostille/legalizacji, якщо вони окремо потрібні.",
  ],
  legalBasis: [
    "Мовна форма доказу залежить від процедури та вимог organu.",
    workLaw.text`Для договору з cudzoziemcem — ${workLaw.article("5", "art. 5 ustawy z 20.03.2025 o warunkach dopuszczalności powierzania pracy cudzoziemcom")}.`,
  ],
  keyChecks: [
    "Повнота оригіналу, особа перекладача, мова, номери сторінок, печатки, додатки та потреба apostille/legalizacji.",
  ],
  relatedDocuments: ["employment-contract"],
  sources: [
    documentSources.translatorList,
    documentSources.work,
    {
      label: "PIP — мовна версія umowy z cudzoziemcem",
      url: "https://www.pip.gov.pl/dla-pracodawcow/pytania-i-odpowiedzi/w-jaki-sposob-podmiot-powierzajacy-prace-moze-potwierdzic-ze-cudzoziemiec-posluguje-sie-jezykiem-polskim-i-w-zwiazku-z-tym-nie-ma-obowiazku-przedstawiac-mu-umowy-w-innym-jezyku",
      note: "Офіційне пояснення обов’язку надати зрозумілий текст договору.",
    },
  ],
  verifiedAt: "2026-07-14",
}

export const swornTranslationTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:sworn-translation",
    subject: {
      family: "evidence-document",
      reference: { kind: "evidence-document", documentId: "sworn-translation" },
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

export default swornTranslationTopic
