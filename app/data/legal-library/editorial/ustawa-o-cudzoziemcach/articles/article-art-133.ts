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
      provisionId: "ustawa-o-cudzoziemcach-art-133",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("133", "Art. 133")}, poza випадками ${foreignersLaw.article("101", "art. 101")} pkt 1 або 2, встановлює cofnięcie zezwolenia за ${foreignersLaw.article("127", "art. 127")}, коли cudzoziemiec не виконує висококваліфіковану роботу, виникає обставина ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4, 5 або 8, ${foreignersLaw.article("132", "art. 132")} ust. 1 pkt 3 lit. c або d, чи не виконано повідомлення за ${foreignersLaw.article("134", "art. 134")}.`,
          sourceLocator: "Art. 133 ust. 1 pkt 1–4, ust. 1a, ust. 2",
        },
      ],
      summary:
        "Стаття регулює відкликання підстави Niebieskiej Karty UE та визначає допустимі періоди без роботи за тривалістю перебування.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation: foreignersLaw.text`Підставами є невиконання роботи у zawodzie wymagającym wysokich kwalifikacji (pkt 1), обставини ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4, 5 або 8 (pkt 2), несплата składek чи податкові обставини podmiot за ${foreignersLaw.article("132", "art. 132")} ust. 1 pkt 3 lit. c або d (pkt 3), а також невиконання zawiadomienie за ${foreignersLaw.article("134", "art. 134")} (pkt 4).`,
        },
        {
          locator: "ust. 1a pkt 1–2",
          explanation: foreignersLaw.text`Для підстави з ust. 1 pkt 4 виняток можливий, якщо cudzoziemiec доведе виконання zawiadomienia за ${foreignersLaw.article("134", "art. 134")} (pkt 1) або його недоставку wojewodzie з причин, незалежних від cudzoziemca (pkt 2).`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`${foreignersLaw.article("101", "Art. 101")} pkt 1 або 2 не застосовуються щодо безробіття до 3 місяців при перебуванні за ${foreignersLaw.article("127", "art. 127")} менше 2 років або до 6 місяців при перебуванні не менше 2 років.`,
        },
      ],
      legalEffect:
        "Стаття встановлює умови cofnięcie та межі для названих періодів без роботи, але не перетворює будь-який період без роботи на автоматично дозволений поза цими умовами.",
      foreignersCase: foreignersLaw.text`Зберігайте докази виду роботи, повідомлення за ${foreignersLaw.article("134", "art. 134")} і точні дати безробіття; окремо встановіть, чи перебування за ${foreignersLaw.article("127", "art. 127")} тривало менше чи не менше двох років.`,
    },
  ],
})
