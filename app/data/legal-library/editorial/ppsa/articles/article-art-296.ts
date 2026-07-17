import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-296",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 296 вимагає, щоб незалежно від заяв і wnioski суд z urzędu провів dochodzenia, не оминаючи жодної обставини, важливої для встановлення змісту втрачених або знищених akt. Суд враховує записи в repertoriach та інших службових книгах, може допитати sędziów, prokuratorów, protokolantów, pełnomocników сторін та інших учасників, а також сторони; до доказів застосовуються відповідно положення Kodeks postępowania cywilnego.",
          sourceLocator: "Art. 296 § 1–2",
        },
      ],
      summary:
        "Суд самостійно розшукує відомості про зміст утрачених akt, використовуючи службові записи та показання осіб, які могли знати перебіг справи.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Розслідування z urzędu не обмежене заявами сторін; важливими можуть бути repertoria, інші службові книги та показання визначених осіб.",
        },
        {
          locator: "§ 2",
          explanation:
            "Під час таких доказових дій відповідно застосовуються правила Kodeks postępowania cywilnego.",
        },
      ],
      legalEffect:
        "Обов’язок суду досліджувати обставини не гарантує, що зміст акт буде встановлено повністю або без невизначеності.",
      foreignersCase:
        "У справі іноземця про pobyt назвіть суду осіб і службові записи, які можуть підтвердити зміст akt; не припускайте, що відсутність оригіналу автоматично знецінює всі інші докази.",
    },
  ]),
})
