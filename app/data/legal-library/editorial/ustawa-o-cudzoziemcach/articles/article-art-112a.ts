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
      provisionId: "ustawa-o-cudzoziemcach-art-112a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("112a", "Art. 112a")} встановлює 60 днів для decyzji в першій інстанції та 90 днів для postępowania odwoławczego, але початок відліку залежить від формальної повноти й завершення доказового етапу.`,
          sourceLocator: "Art. 112a ust. 1–5",
        },
      ],
      summary:
        "Строк не завжди починається в день роботи в MOS чи одержання UPO. Закон чекає на останню з названих подій, щоб organ мав формально придатну заяву та докази або щоб сплив строк на їх подання.",
      rules: [
        {
          locator: "Art. 112a ust. 1–2",
          explanation: foreignersLaw.text`У звичайній справі 60 днів рахують від пізнішої події: wniosek уже без braków formalnych або їх усунуто; документи за ${foreignersLaw.article("106f", "Art. 106f")} подано або строк wezwania за цією статтею сплив безрезультатно. Особиста явка більше не є окремою подією запуску цього строку.`,
        },
        {
          locator: "Art. 112a ust. 3–3a",
          explanation: foreignersLaw.text`Для ICT і mobilności długoterminowej ICT відлік пов’язаний із повною заявою jednostki przyjmującej та доказами з ${foreignersLaw.article("106k", "Art. 106k")}. Для названих сімейних дозволів особі за кордоном — із повною заявою członka rodziny rozdzielonej та доказами з ${foreignersLaw.article("106l", "Art. 106l")}.`,
        },
        {
          locator: "Art. 112a ust. 3b–5",
          explanation:
            "Wojewoda пріоритетно розглядає названі заяви докторантів і науковців. Апеляція має завершитися за 90 днів; якщо odwołanie має braki, цей строк починається після їх усунення.",
        },
      ],
      legalEffect:
        "Це строки для organu, а не milcząca zgoda. Їх сплив не створює автоматичного zezwolenia, права на роботу чи нової підстави pobytu.",
      foreignersCase:
        "Побудуйте хронологію UPO, усунення braków, wezwania до доказів, подання документів і спливу строків. Лише після визначення останньої релевантної події порівнюйте календар із 60 або 90 днями.",
    },
  ],
})
