import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-95",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 95 змінює ustawa про skutki powierzenia pracy osobie без законного pobyt: додає завдання minister щодо моніторингу, uchyla art. 2 і 3, узгоджує art. 13 з art. 4 нової ustawa та додає art. 14a про сектори й звіти.",
          sourceLocator: "Art. 95 pkt 1–4",
        },
      ],
      summary:
        "Це пакет змін до іншого акту. Важливо чесно відрізняти: art. 2 і art. 3 старої ustawa прямо скасовуються, тоді як новий art. 14a доручає визначати сектори ризику PKD і подавати Комісії ЄС статистику контролю та періодичні sprawozdania.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "До art. 1 додається завдання właściwy ministr щодо моніторингу, а art. 2 і art. 3 цієї окремої ustawa uchylaються.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Art. 13 pkt 1 тепер відсилає до виконання обов'язків art. 4 ust. 2 і 4 нової ustawa, з винятком знання про підроблений документ.",
        },
        {
          locator: "pkt 4; art. 14a",
          explanation:
            "Minister праці за узгодженням із minister внутрішніх справ визначає сектори PKD підвищеного ризику та готує щорічні й трирічні звіти на основі даних Straż Graniczna і PIP.",
        },
      ],
      legalEffect:
        "Art. 95 не створює нового індивідуального дозволу; він змінює інший акт і прямо скасовує його art. 2–3, тому для конкретної відповідальності треба читати чинну редакцію того акту.",
      foreignersCase:
        "У справі про illegalny pobyt перевірте дату факту і чинну редакцію окремої ustawa після uchylenie art. 2–3. Сектор PKD зі звітного механізму сам не доводить порушення конкретного роботодавця.",
    },
  ]),
})
