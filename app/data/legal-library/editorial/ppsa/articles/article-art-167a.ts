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
      provisionId: "ppsa-art-167a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`До zarządzenia та postanowienia referendarza sądowego відповідно застосовуються правила про zarządzenia przewodniczącego та postanowienia суду. На zarządzenia і postanowienia referendarza, названі в ${ppsaLaw.article("30", "art. 30 § 1")}, ${ppsaLaw.article("49", "art. 49 § 2")} та ${ppsaLaw.article("234", "art. 234 § 2")}, можна подати sprzeciw до того самого суду; після sprzeciw вони втрачають чинність, строк sprzeciw — сім днів від doręczenie, а прострочений sprzeciw суд odrzuca.`,
          sourceLocator: "Art. 167a § 1–6",
        },
      ],
      summary:
        "Стаття регулює sprzeciw від визначених zarządzenia або postanowienia referendarza sądowego, його строк і наслідок для оскарженого документа.",
      rules: [
        {
          locator: "§ 1–2",
          explanation: ppsaLaw.text`Встановіть, що документ видав referendarz sądowy, і перевірте, чи він належить до справ, названих у ${ppsaLaw.article("30", "art. 30 § 1")}, ${ppsaLaw.article("49", "art. 49 § 2")} або ${ppsaLaw.article("234", "art. 234 § 2")}.`,
        },
        {
          locator: "§ 3–5",
          explanation:
            "Подання sprzeciw позбавляє оскаржений документ чинності; сім днів рахуються від doręczenie, а прострочення веде до odrzucenie.",
        },
        {
          locator: "§ 6",
          explanation:
            "Sąd розглядає справу як суд першої інстанції, якщо спеціальний припис не встановлює інакше.",
        },
      ],
      legalEffect:
        "Наслідки sprzeciw залежать від предметної прив’язки до трьох названих норм і спеціальних приписів; сама назва документа referendarza не достатня.",
      foreignersCase:
        "Якщо у судовій справі іноземця документ видав referendarz sądowy, перевірте його вид, одну з названих підстав і дату doręczenie. Сім днів — окремий строк для sprzeciw, а не загальний строк для кожного судового оскарження.",
    },
  ],
})
