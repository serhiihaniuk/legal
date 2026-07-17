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
      provisionId: "ustawa-o-cudzoziemcach-art-424",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("424", "Art. 424")} ust. 1: «Jeżeli życiu cudzoziemca zagraża poważne niebezpieczeństwo, będące następstwem odmawiania przez niego przyjmowania posiłków, co zostanie stwierdzone przez co najmniej 2 lekarzy, cudzoziemca można poddać koniecznemu zabiegowi lekarskiemu, nawet bez jego zgody».`,
          sourceLocator: "Art. 424 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Втручання без згоди залежить від сукупності медичних і процесуальних умов; сама відмова від їжі ще не доводить їх виконання.",
          sourceLocator: "Art. 424 ust. 1–4",
        },
      ],
      summary:
        "За серйозної небезпеки для життя через відмову від їжі та підтвердження щонайменше двома лікарями необхідне лікування, включно з операцією, може бути проведене без згоди; для відсутності згоди рішення приймає sąd, крім безпосередньої небезпеки.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Потрібні серйозна небезпека для життя, причинний зв’язок із відмовою від їжі та підтвердження щонайменше двома лікарями.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "За відсутності згоди про zabieg postanawia sąd rejonowy за місцем перебування на wniosek компетентного органу Straży Granicznej; суд визначає спосіб і місце.",
        },
        {
          locator: "ust. 4",
          explanation:
            "При безпосередній загрозі життю про необхідність zabieg вирішує lekarz.",
        },
      ],
      legalEffect:
        "Норма допускає необхідний zabieg без згоди лише за сукупності описаних умов; за відсутності безпосередньої загрози потрібне postanowienie sądu, а при безпосередній загрозі життю рішення приймає lekarz.",
      foreignersCase:
        "Зберігайте медичні висновки, інформацію про wniosek до sąd і postanowienie або рішення lekarz; не робіть висновок про законність втручання без перевірки всіх умов.",
    },
  ],
})
