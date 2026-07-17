import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-285d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285d дозволяє обґрунтувати skarga o stwierdzenie niezgodności z prawem порушенням prawa materialnego або przepisów postępowania, яке спричинило таку невідповідність і szkoda стороні; zarzuty щодо ustalenia faktów або ocena dowodów не можуть бути підставою цієї skarga.",
          sourceLocator: "Art. 285d",
        },
      ],
      summary:
        "Норма обмежує підстави skarga юридичними порушеннями, пов’язаними зі szkoda, і виключає самостійне оскарження встановлення фактів чи оцінки доказів.",
      rules: [
        {
          locator: "Art. 285d",
          explanation:
            "Заявлена підстава має стосуватися права materialnego або przepisów postępowania, показувати їхній зв’язок із niezgodność orzeczenia та szkoda.",
        },
        {
          locator: "Art. 285d zdanie drugie",
          explanation:
            "Незгода з тим, які факти суд прийняв або як оцінив dowody, сама по собі не є дозволеним zarzut за цією статтею.",
        },
      ],
      legalEffect:
        "Art. 285d звужує предмет цього засобу до правової помилки, а не до повторної оцінки доказів; правильне формулювання не гарантує stwierdzenie niezgodności z prawem.",
      foreignersCase:
        "У справі про pobyt відокремте довід про порушення права від незгоди з оцінкою договору, довідки чи показань. Покажіть також конкретну szkoda, яку спричинило оскаржене orzeczenie.",
    },
  ]),
})
