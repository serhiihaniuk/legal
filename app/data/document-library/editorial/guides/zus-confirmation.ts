import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources, foreignersLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "zus-confirmation",
  title: "Zaświadczenie / potwierdzenie danych z ZUS",
  category: "work",
  aliases: [
    "підтвердження zus",
    "страхування/zus за потреби",
    "доказ виплат і zus",
  ],
  documentType:
    "Електронне підтвердження даних із системи ZUS; конкретний вид документа залежить від факту, який треба довести.",
  description:
    "Документ із ZUS може підтверджувати zgłoszenie do ubezpieczeń, періоди страхування або інші дані, наявні в обліковому записі. Спочатку визначте факт, а потім оберіть відповідне підтвердження — загальна назва «ZUS» недостатня.",
  preparedBy:
    "Дані веде ZUS; застрахована особа або płatnik може сформувати доступне підтвердження у своєму електронному профілі.",
  howToObtain: [
    "Увійти до електронного профілю ZUS і вибрати підтвердження, яке відповідає потрібному факту.",
    "Зберегти повний електронний файл із даними перевірки, а не лише скриншот екрана.",
    "Якщо потрібних даних немає або вони помилкові — звернутися до ZUS чи płatnika перед поданням до organu.",
  ],
  formAndValidity: [
    "Електронний документ перевіряють за реквізитами або механізмом, указаним у самому файлі.",
    "Документ показує стан даних на момент формування; для триваючої умови орган може вимагати актуальніший період.",
  ],
  purpose: [
    "Підтверджує конкретні відомості, які ZUS має щодо страхування або обліку особи.",
    "Допомагає зіставити період роботи, zgłoszenie та інші докази виконання заявлених умов.",
  ],
  doesNotProve: [
    "Не замінює umowy, доказів фактичної виплати винагороди або права перебування.",
    "Сам факт наявності профілю чи одного запису не доводить безперервність страхування за весь потрібний період.",
  ],
  legalBasis: [
    foreignersLaw.text`Вимога залежить від матеріальної умови конкретної процедури; у pobyt czasowy i pracę перевіряйте ${foreignersLaw.article("114", "art. 114 ust. 1 pkt 1 ustawy o cudzoziemcach")}.`,
    "Спосіб отримання підтвердження визначається електронною послугою ZUS.",
  ],
  keyChecks: [
    "Який саме факт і період підтверджує документ.",
    "Особа, płatnik, код zgłoszenia, дати та відсутність розбіжностей з umową і фактичною роботою.",
    "Можливість перевірити походження електронного файла.",
  ],
  relatedDocuments: ["employment-contract", "employment-annex-1"],
  sources: [documentSources.zus, documentSources.aliens],
  verifiedAt: "2026-07-14",
}

export const zusConfirmationTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:zus-confirmation",
    subject: {
      family: "evidence-document",
      reference: { kind: "evidence-document", documentId: "zus-confirmation" },
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
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default zusConfirmationTopic
