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
      provisionId: "ustawa-o-cudzoziemcach-art-168",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("168", "Art. 168")} визначає, хто подає заяву за cudzoziemiec за межами Польщі, вимогу письмової згоди та повноваження, а також особливу właściwość wojewoda, коли сімейну заяву подано одночасно або протягом 3 днів із заявою sponsor.`,
          sourceLocator: "Art. 168 ust. 1–5",
        },
      ],
      summary:
        "Зазвичай заяву за члена сім'ї з-за кордону подає cudzoziemiec у Польщі; письмова згода визначає представництво, а дата двох заяв — компетентного wojewoda.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Заявник у Польщі — cudzoziemiec, до якого член сім'ї приїжджає. Для подання від імені особи за кордоном потрібна її письмова згода або згода przedstawiciel ustawowy, крім випадку, коли заявник сам є таким представником; згода одночасно є pełnomocnictwo у цьому провадженні.",
        },
        {
          locator: "ust. 4",
          explanation: foreignersLaw.text`Якщо сімейну заяву для члена сім'ї особи з ${foreignersLaw.article("139a", "art. 139a")} ust. 1 або ${foreignersLaw.article("139o", "art. 139o")} ust. 1 подано того самого дня або протягом 3 днів після заяви sponsor, рішення приймає wojewoda за siedziba jednostka przyjmująca.`,
        },
        {
          locator: "ust. 4a",
          explanation: foreignersLaw.text`Для члена сім'ї osoby, яка подає на permit з ${foreignersLaw.article("127", "art. 127")}, ${foreignersLaw.article("137a", "art. 137a")}, ${foreignersLaw.article("151", "art. 151")} ust. 1 або ${foreignersLaw.article("151b", "art. 151b")} ust. 1, за тієї самої умови 0–3 днів компетентним є wojewoda, який має видати permit sponsor.`,
        },
        {
          locator: "ust. 5",
          explanation: foreignersLaw.text`У випадках ust. 4 або 4a wojewoda вирішує сімейну заяву неzwłocznie після udzielenie або odmowa дозволу sponsor, названого у відповідній відсилці.`,
        },
      ],
      legalEffect:
        "Стаття регулює представництво, момент подання і właściwość органу; вона не доводить виконання матеріальних умов family reunification.",
      foreignersCase:
        "Зафіксуйте місце перебування кожного, письмову згоду, дату обох заяв і підставу permit sponsor; ці дані можуть визначити właściwość wojewoda та момент рішення.",
    },
  ],
})
