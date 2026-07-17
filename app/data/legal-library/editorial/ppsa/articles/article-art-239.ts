import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-239",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("239", "Art. 239 § 1")} звільняє від обов’язку сплати kosztów sądowych визначені категорії сторін, зокрема скаржника у справах про pomoc społeczną, трудові та соціальні питання, udzielanie cudzoziemcom ochrony, а також прокурора, RPO, RPD, Rzecznika Małych i Średnich Przedsiębiorców, kuratora та особу з przyznane prawo pomocy; ${ppsaLaw.article("239", "§ 2")} містить окреме звільнення для визначених організацій у власних справах.`,
          sourceLocator: "Art. 239 § 1–2",
        },
      ],
      summary:
        "Стаття перелічує випадки звільнення від kosztów sądowych за статусом сторони або предметом справи; це не є загальним звільненням для кожної справи іноземця.",
      rules: [
        {
          locator: "§ 1 pkt 1",
          explanation:
            "Зіставте предмет skarga з конкретним пунктом переліку, зокрема не плутайте udzielanie cudzoziemcom ochrony з будь-якою справою про pobyt.",
        },
        {
          locator: "§ 1 pkt 2–4",
          explanation:
            "Перевірте статус сторони: названий публічний орган, kurator або особа з prawomocne prawo pomocy — і межі вже наданого права.",
        },
        {
          locator: "§ 2",
          explanation:
            "Для організації перевірте, чи справа є її власною та чи не стосується prowadzonej działalności gospodarczej або умов zleconego zadania publicznego.",
        },
      ],
      legalEffect: ppsaLaw.text`Звільнення виникає лише за умов відповідного пункту ${ppsaLaw.article("239", "Art. 239")} і, для права допомоги, у межах prawomocne postanowienie; стаття не оцінює прийнятність skarga по суті.`,
      foreignersCase:
        "У справі іноземця встановіть, чи йдеться саме про udzielanie ochrony, чи про pobyt або інший предмет, і окремо перевірте підставу звільнення та її обсяг.",
    },
  ],
})
