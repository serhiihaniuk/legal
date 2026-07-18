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
      provisionId: "ustawa-o-cudzoziemcach-art-443",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("443", "Art. 443")} ust. 1: «Szef Urzędu przekazuje przechowywane w wykazie dane cudzoziemca ... do Systemu Informacyjnego Schengen do celów odmowy wjazdu i pobytu», якщо є визначена підстава.`,
          sourceLocator: "Art. 443 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Wpis у wykaz і запис у SIS пов’язані, але мають окремі правила внесення, zawieszenie та usunięcie; не слід ототожнювати їх без перевірки.",
          sourceLocator: "Art. 443 ust. 1–6",
        },
      ],
      summary:
        "За визначених підстав Szef Urzędu передає дані з wykaz до System Informacyjny Schengen для відмови у в’їзді та pobyt; під час zawieszenie дані видаляються із SIS і можуть бути внесені повторно після її завершення.",
      rules: [
        {
          locator: "ust. 1 pkt 1–7",
          explanation: foreignersLaw.text`Підставами є рішення про powrót із забороною, postanowienie ${foreignersLaw.article("303b", "Art. 303b")}, decyzja ${foreignersLaw.article("440a", "Art. 440a")}, окреме рішення щодо громадян ЄС, санкційний список або рішення Ради ЄС; pkt 2 і 4 позначені як «uchylony».`,
        },
        {
          locator: "ust. 1a–1b",
          explanation:
            "Для окремих підстав передача відбувається після виконання рішення або виїзду з Schengen, коли Szef Urzędu має відповідну інформацію.",
        },
        {
          locator: "ust. 2–6",
          explanation:
            "При zawieszenie wpis дані з SIS видаляються до припинення обставин, після чого вносяться повторно; записи також видаляються у випадках, передбачених регламентом SIS.",
        },
      ],
      legalEffect:
        "Стаття регулює передачу й життєвий цикл SIS alert, пов’язаного з підставами wykaz. Наявність такого запису може мати транскордонний ефект, але точний статус треба перевіряти в органі.",
      foreignersCase:
        "З’ясуйте окремо статус wykaz і SIS, правову підставу, строк та чи було zawieszenie; для візи або pobyt в іншій державі Schengen врахуйте консультаційні правила наступної статті.",
    },
  ],
})
