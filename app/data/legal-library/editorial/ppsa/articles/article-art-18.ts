import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-18",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 18 § 1 починається словами: «Sędzia jest wyłączony z mocy samej ustawy w sprawach».",
          sourceLocator: "Art. 18 § 1",
        },
      ],
      summary:
        "Стаття перелічує випадки, коли суддя виключений з мocy samej ustawy: особистий правовий зв’язок зі стороною, родинні, опікунські та представницькі зв’язки, надання правових чи інших пов’язаних зі справою послуг, участь в ухваленні оскарженого orzeczenie або розгляді справи в organ administracji publicznej, а також спеціальну підставу для надзвичайного адміністративного провадження.",
      rules: [
        {
          locator: "Art. 18 § 1 pkt 1–7",
          explanation:
            "Перевіряються всі названі статтею підстави: власний правовий зв’язок судді, перелічені родинні й опікунські зв’язки, umocowanie або надані послуги одній зі сторін, участь в ухваленні оскарженого orzeczenie чи як prokurator, участь у попередньому zwykłym postępowaniu sądowoadministracyjnym щодо рішення або postanowienie в надзвичайному адміністративному провадженні, а також участь у вирішенні справи в organ administracji publicznej.",
        },
        {
          locator: "Art. 18 § 2–3",
          explanation:
            "Причини wyłączenie зберігаються після припинення шлюбу, przysposobienie, opieka або kuratela; суддя, який брав участь в ухваленні orzeczenie, охопленого skarga o wznowienie postępowania, не може вирішувати цю skarga.",
        },
        {
          locator: "Art. 18 § 4",
          explanation:
            "Позначка «uchylony» означає, що цей параграф не містить чинного правила.",
        },
      ],
      legalEffect:
        "За наявності точної підстави з § 1 суддя є виключеним за законом, але факт такої підстави треба встановити за конкретними матеріалами справи.",
      foreignersCase:
        "У справі іноземця порівняйте участь судді в попередній адміністративній або судовій стадії з кожним пунктом Art. 18; не робіть висновок про wyłączenie лише через незгоду з рішенням.",
    },
  ]),
})
