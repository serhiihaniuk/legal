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
      provisionId: "ustawa-o-cudzoziemcach-art-225g",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Дані облікового запису з ${foreignersLaw.article("225d", "Art. 225d")} pkt 1 зберігаються в MOS 12 років від останньої teleinformatycznej operacji власника, після чого konto автоматично видаляється.`,
          sourceLocator: "Art. 225g ust. 1",
        },
        {
          kind: "statute-text",
          text: "Дані електронної заяви зберігаються в MOS і Bazie Wstępnej до видачі zaświadczenia про подання, залишення заяви без розгляду, видання postanowienia про odmowę wszczęcia або про zwrot wniosku.",
          sourceLocator: "Art. 225g ust. 2 pkt 1–4",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Після відповідної події ці дані передаються до належного реєстру з ${foreignersLaw.article("428", "Art. 428")} ust. 1 pkt 2 lit. d, e або f.`,
          sourceLocator: "Art. 225g ust. 2 zdanie końcowe",
        },
      ],
      summary:
        "Стаття встановлює різні строки й події завершення зберігання для даних konto та даних конкретної заяви.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Дванадцятирічний строк рахується не від створення konto, а від останньої операції його власника в MOS; видалення відбувається автоматично.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для даних заяви вирішальною є одна з чотирьох процесуальних подій. Після неї дані не просто зникають, а переходять до відповідного реєстру.",
        },
      ],
      legalEffect:
        "Норма розмежовує життєвий цикл профілю MOS і матеріалів заяви та визначає момент їх перенесення до реєстру.",
      foreignersCase:
        "Щоб встановити місце даних, перевірте дату останньої операції konto та процесуальну долю заяви: zaświadczenie, pozostawienie bez rozpoznania, odmowa wszczęcia або zwrot.",
    },
  ],
})
