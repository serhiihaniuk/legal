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
      provisionId: "ustawa-o-cudzoziemcach-art-149b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("149b", "Art. 149b")} допускає mobilność studenta в Польщі, якщо cudzoziemiec продовжує або доповнює studia з іншої держави UE, охоплений програмою/угодою мобільності, має документ з adnotacja «student», перебуває не довше 360 днів, а Szef Urzędu отримав повне повідомлення і не видав sprzeciw протягом 30 днів.`,
          sourceLocator: "Art. 149b ust. 1",
        },
        {
          kind: "statute-text",
          text: "Стаття визначає зміст zawiadomienie, додані документи, підстави sprzeciw, остаточність рішення, повідомлення інших органів і захист особи, яка почала mobilność до рішення щодо jednostka.",
          sourceLocator: "Art. 149b ust. 2–16",
        },
      ],
      summary:
        "Mobilność studenta є спеціальним режимом із лімітом 360 днів, повним повідомленням і контролем через рішення Szef Urzędu.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation:
            "Потрібні мета продовжити/доповнити studia, програма або угода внутрішньої мобільності, іноземний документ з adnotacja «student», строк до 360 днів і zawiadomienie затвердженої або звільненої від zatwierdzenie польської jednostka без sprzeciw.",
        },
        {
          locator: "ust. 2–5",
          explanation: foreignersLaw.text`Zawiadomienie польською мовою містить дані особи, документа, програми, періоду й обох закладів; до нього додаються доказ документа, страхування, коштів за ${foreignersLaw.article("144", "art. 144")} ust. 1a і ${foreignersLaw.article("150", "art. 150")} та оплати платного навчання, а іноземні документи — з присяжним перекладом.`,
        },
        {
          locator: "ust. 6–10",
          explanation:
            "Szef Urzędu видає sprzeciw, зокрема за недостатнього строку документа, відсутності страхування/коштів/оплати, проблем jednostka, неправдивих документів, запису в wykaz/SIS або безпекових підстав; строк інформації органів становить 20 днів.",
        },
        {
          locator: "ust. 11–16",
          explanation: foreignersLaw.text`Рішення про sprzeciw є ostateczna, про нього повідомляють державу, що видала документ; jednostka повідомляє про skreślenie, розпочата до ${foreignersLaw.article("144b", "art. 144b")} mobilność може продовжуватися, а без sprzeciw дані вилучаються з EES протягом 5 dni roboczych.`,
        },
      ],
      legalEffect:
        "За відсутності sprzeciw після повного повідомлення mobilność допускається в межах названих умов; це не тотожне польському zezwolenie на звичайний pobyt для studia.",
      foreignersCase:
        "Перевірте кожну з п’яти умов, дату вручення повного повідомлення, 30-денний строк, переклади, оплату, страхування та кошти. Окремо встановіть, чи є decyzja o sprzeciw і чи вона ostateczna.",
    },
  ],
})
