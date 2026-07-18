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
      provisionId: "ustawa-o-cudzoziemcach-art-218a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Заяву про zezwolenie na pobyt rezydenta długoterminowego UE іноземець подає не пізніше останнього дня свого легального перебування в Польщі.",
          sourceLocator: "Art. 218a ust. 1",
        },
        {
          kind: "statute-text",
          text: "За неповнолітнього заяву подають батьки, опікуни або один із них; за повністю недієздатну особу — opiekun; за неповнолітнього без опіки — kurator.",
          sourceLocator: "Art. 218a ust. 2",
        },
      ],
      summary:
        "Стаття визначає крайній строк подання заяви та особу, уповноважену подати її за заявника, який не діє самостійно.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Для своєчасності вирішальним є останній день легального pobytu. Тому перед поданням треба встановити точну підставу перебування та дату її закінчення.",
        },
        {
          locator: "ust. 2 pkt 1–3",
          explanation:
            "Повноваження представника залежать від становища заявника. Для дитини без опіки стаття прямо називає kurator, а для повністю недієздатної особи — opiekun.",
        },
      ],
      legalEffect:
        "Норма встановлює, хто і до якої дати може належно подати заяву; технічний спосіб подання та момент, коли заяву вважають поданою, визначають наступні статті.",
      foreignersCase:
        "Зафіксуйте останній день легального pobytu і перевірте документ, що підтверджує статус батька, opiekuna або kuratora. Не обмежуйтеся лише датою заповнення формуляра в MOS.",
    },
  ],
})
