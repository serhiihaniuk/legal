import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-464",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("464", "Art. 464")} передбачає grzywna, kara ograniczenia wolności або pozbawienie wolności до 2 років за zabieranie w celu przywłaszczenia, przywłaszczenie або використання: document podróży, karty pobytu, polskiego dokumentu podróży dla cudzoziemca, tymczasowego polskiego dokumentu podróży dla cudzoziemca, europejskiego dokumentu podróży do celów powrotu, polskiego dokumentu tożsamości cudzoziemca чи документа «zgoda na pobyt tolerowany».`,
          sourceLocator: "Art. 464",
        },
      ],
      summary:
        "Стаття встановлює кримінальну відповідальність за заволодіння з метою привласнення, привласнення або використання визначених документів cudzoziemca, включно з europejski dokument podróży do celów powrotu.",
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
