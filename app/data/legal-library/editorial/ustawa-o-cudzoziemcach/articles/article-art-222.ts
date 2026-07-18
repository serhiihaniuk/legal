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
      provisionId: "ustawa-o-cudzoziemcach-art-222",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("222", "Art. 222")} зобов’язує ministra właściwego do spraw wewnętrznych визначити в rozporządzenie: wzór formularza; технічні вимоги до фотографії; правила додавання фотографії до електронного wniosku з ${foreignersLaw.article("219c", "art. 219c")} ust. 1; вимоги до електронних документів і цифрових копій паперових доказів; спосіб pobierania odcisków, запису та передачі даних для персоналізації karty pobytu; wzór informacji про зняті або відсутні відбитки; і формуляр wzoru podpisu.`,
          sourceLocator: "Art. 222 ust. 1 pkt 1–8",
        },
        {
          kind: "statute-text",
          text: "У розпорядженні міністр має врахувати потребу sprawność postępowania та можливість skutecznej weryfikacji przesłanek udzielenia zezwolenia.",
          sourceLocator: "Art. 222 ust. 2",
        },
      ],
      summary:
        "Стаття делегує розпорядженню технічні правила для паперової та електронної заяви, фотографії, електронних доказів, відбитків, персоналізації karty pobytu, інформації про відбитки та wzoru podpisu.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation: foreignersLaw.text`Формуляр і технічні вимоги до фотографії, а для електронного wniosku також спосіб додавання фотографії та документів, треба звіряти з чинним rozporządzenie. ${foreignersLaw.article("222", "Art. 222")} не містить делегації щодо кількості фотографій або wzoru stempla.`,
        },
        {
          locator: "ust. 1 pkt 5–8; ust. 2",
          explanation:
            "Підзаконний акт визначає технічний спосіб відбитків і персоналізації, інформацію про відбитки та wzór podpisu, орієнтуючись на sprawność postępowania і skuteczna weryfikacja умов дозволу.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("222", "Art. 222")} створює підставу для технічного регулювання, але сам не встановлює конкретної кількості фотографій, форми чи способу дії.`,
      foreignersCase:
        "Перед поданням звірте формуляр, фотографію, електронні додатки, процедуру odciski та wzór podpisu з чинним rozporządzenie. Не шукайте в цій статті старих правил про stempel або кількість фотографій.",
    },
  ],
})
