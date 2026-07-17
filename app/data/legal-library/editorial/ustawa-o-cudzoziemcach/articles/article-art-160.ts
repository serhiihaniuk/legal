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
      provisionId: "ustawa-o-cudzoziemcach-art-160",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("160", "Art. 160")} дозволяє udzielić zezwolenia na pobyt czasowy у шести спеціальних сімейних ситуаціях: залежний родич громадянина Польщі або визначеного громадянина UE/EFTA/Швейцарії, народжена під час чинного документа дитина, життя rodzinne та окремі випадки громадянина UK за Umowa Wystąpienia.`,
          sourceLocator: "Art. 160 pkt 1–6",
        },
      ],
      summary:
        "Стаття містить дискреційні сімейні підстави для обмежених категорій, а не загальне право кожного родича громадянина Польщі або UK.",
      rules: [
        {
          locator: "pkt 1",
          explanation: foreignersLaw.text`Для родича громадянина Польщі, іншої держави UE, EFTA або Швейцарії потрібне спільне перебування в Польщі та залежність або спільне gospodarstwo domowe у державі прибуття, або серйозні причини здоров'я, що вимагають особистої опіки; додатково виконуються вимоги ${foreignersLaw.article("159", "art. 159")} ust. 1 pkt 2.`,
        },
        {
          locator: "pkt 2",
          explanation:
            "Małoletnie dziecko іноземця має народитися під час чинності його national visa або pobyt czasowy; іноземець повинен виконати вимоги щодо ubezpieczenie, dochód і житло, перелічені у відповідній відсилці.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Потрібне prowadzenie życia rodzinnego у розумінні ECHR з громадянином Польщі, UE, EFTA або Швейцарії, який мешкає в Польщі, спільне перебування та вимоги доходу й страхування з відповідної відсилки.",
        },
        {
          locator: "pkt 4–6",
          explanation: foreignersLaw.text`Пункти 4–6 стосуються визначеного громадянина UK з Umowa Wystąpienia: залежності або життя rodzinne, спільного перебування та, залежно від пункту, попереднього дозволу чи заяви до завершення okres przejściowy або умов ${foreignersLaw.article("159", "art. 159")} ust. 1 pkt 2; pkt 6 додатково вимагає умов, названих у Umowa Wystąpienia.`,
        },
      ],
      legalEffect:
        "Формула «można udzielić» означає можливість після перевірки конкретного складу; статус родича та спільне проживання без інших умов не створюють автоматичного permit.",
      foreignersCase: foreignersLaw.text`Для ${foreignersLaw.article("160", "art. 160")} визначте точний pkt, статус і місце проживання osoby referencyjnej, залежність або реальне життя rodzinne, дати документів та умови Umowa Wystąpienia; не змішуйте pkt 4–6.`,
    },
  ],
})
