import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-464",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("464", "Art. 464")} передбачає grzywna, kara ograniczenia wolności або pozbawienie wolności до 2 років за zabierać w celu przywłaszczenia чи przywłaszczać sobie document podróży, kartę pobytu, polski dokument podróży dla cudzoziemca, tymczasowy polski dokument podróży dla cudzoziemca, polski dokument tożsamości cudzoziemca або документ «zgoda na pobyt tolerowany», а також за використання такого документа.`,
          sourceLocator: "Art. 464",
        },
      ],
      summary:
        "Стаття встановлює кримінальну відповідальність за заволодіння з метою привласнення, привласнення або використання визначених документів cudzoziemca: document podróży, karta pobytu, polski dokument podróży dla cudzoziemca, tymczasowy polski dokument podróży dla cudzoziemca, polski dokument tożsamości cudzoziemca та документ «zgoda na pobyt tolerowany».",
      rules: [
        {
          locator: "Art. 464",
          explanation:
            "Потрібно зіставити фактичну дію з названими у статті формами: zabierać w celu przywłaszczenia, przywłaszczać sobie або використовувати відповідний документ.",
        },
        {
          locator: "Art. 464",
          explanation:
            "Текст передбачає альтернативні види покарання: grzywna, kara ograniczenia wolności або pozbawienie wolności до 2 років.",
        },
      ],
      legalEffect: foreignersLaw.text`Це кримінально-правова норма про конкретні дії з документами. Кваліфікація залежить від точного виду документа, способу дії та доведених обставин кримінального провадження; сама втрата документа не доводить склад ${foreignersLaw.article("464", "Art. 464")}.`,
      foreignersCase:
        "У справі зафіксуйте точний вид документа, спосіб його отримання чи використання, докази умислу та процесуальний статус особи; не ототожнюйте загублений документ із діянням, описаним у статті.",
    },
  ],
})
