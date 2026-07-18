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
      provisionId: "ustawa-o-cudzoziemcach-art-219i",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Якщо немає підстав залишити заяву без розгляду, повернути її або відмовити у wszczęciu postępowania, wojewoda umarza postępowanie, коли іноземець не з’явився після належного wezwania з ${foreignersLaw.article("219e", "Art. 219e")} ust. 1 або ${foreignersLaw.article("219g", "Art. 219g")}, не здав відбитків чи підпису або не пред’явив потрібного документа особи чи документа на житло.`,
          sourceLocator: "Art. 219i ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Підстава через неявку не діє у випадках із ${foreignersLaw.article("219h", "Art. 219h")} ust. 1; підстава через відсутність відбитків не діє за винятками з ${foreignersLaw.article("219b", "Art. 219b")} ust. 2; підстава через відсутність підпису — за винятками з ${foreignersLaw.article("219b", "Art. 219b")} ust. 3.`,
          sourceLocator: "Art. 219i ust. 2",
        },
      ],
      summary:
        "Стаття визначає, коли невиконання особистих і документальних дій після електронного подання призводить до umorzenia postępowania.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation: foreignersLaw.text`Окремими підставами є неявка, відсутність відбитків, відсутність підпису, непред’явлення документа особи та непред’явлення документа на житло. Для медичного випадку враховуються також засвідчені копії з ${foreignersLaw.article("219h", "Art. 219h")} ust. 4.`,
        },
        {
          locator: "ust. 1 zdanie wstępne",
          explanation:
            "Umorzenie застосовують лише після перевірки, що справа не повинна завершитися іншим попереднім процесуальним способом: pozostawieniem bez rozpoznania, zwrotem wniosku або odmową wszczęcia.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Перед висновком про невиконання обов’язку завжди перевіряйте віковий, фізичний або медичний виняток щодо явки, відбитків чи підпису.",
        },
      ],
      legalEffect:
        "Umorzenie закінчує провадження без вирішення матеріальної умови дозволу; воно не є тим самим, що odmowa udzielenia zezwolenia.",
      foreignersCase:
        "Зіставте wezwanie, доказ його doręczenia, протокол особистої явки та кожну невиконану дію. Потім перевірте медичні й вікові винятки, перш ніж оцінювати законність umorzenia.",
    },
  ],
})
