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
      provisionId: "ustawa-o-cudzoziemcach-art-219",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("219", "Art. 219")} вимагає подати wniosek на формулярі з даними cudzoziemca, утримуваних членів сім’ї в Польщі, документа подорожі, закордонних подорожей і попереднього та актуального pobytu, доходу й утриманців, ubezpieczenia zdrowotnego, дозволу rezydenta długoterminowego UE в іншій державі-члені, визначених pobytів в інших державах UE та окремих обставин затримання, ośrodek strzeżony, areszt або karę.`,
          sourceLocator: "Art. 219 ust. 1 pkt 1–9",
        },
        {
          kind: "statute-text",
          text: "Разом із wnioskiem cudzoziemiec обґрунтовує його, подає письмове oświadczenie під rygor відповідальності за складання неправдивих заяв, важливий dokument podróży і tytuł prawny до житла, додає актуальну фотографію та документи для підтвердження даних і обставин. Umowa użyczenia не визнається таким титулом, крім випадку, коли użyczającym є прямо названий близький родич: zstępny, wstępny, małżonek, rodzice małżonka або rodzeństwo cudzoziemca.",
          sourceLocator: "Art. 219 ust. 2–4",
        },
        {
          kind: "statute-text",
          text: "Від cudzoziemiec, який просить zezwolenie, беруть odciski linii papilarnych; якщо з причин, залежних від wojewoda, це неможливо в день особистої явки, wojewoda призначає строк для їх подання не коротший за 7 днів.",
          sourceLocator: "Art. 219 ust. 5–6",
        },
      ],
      summary:
        "Стаття визначає зміст wniosek про pobyt rezydenta długoterminowego UE, основні додатки, правила щодо tytuł prawny до житла та подання відбитків.",
      rules: [
        {
          locator: "ust. 1 pkt 1–10",
          explanation: foreignersLaw.text`Формуляр має охопити всі дані, прямо перелічені статтею, зокрема періоди pobytu і виїздів, доходи за останні 3 роки або за останні 2 роки у випадку ${foreignersLaw.article("212", "Art. 212")} ust. 1 pkt 1.`,
        },
        {
          locator: "ust. 2–4",
          explanation:
            "Підтверджуйте дані та обставини документами; відсутність ważny dokument podróży допускає інший документ особи лише у szczególnie uzasadnionym przypadku, коли його неможливо отримати.",
        },
        {
          locator: "ust. 5–6",
          explanation:
            "Відбитки є частиною процедури. Якщо перешкода виникла з боку wojewoda, новий строк має бути щонайменше 7 днів.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("219", "Art. 219")} формує документальний і процедурний каркас заяви, але сам по собі не підтверджує виконання матеріальних умов для zezwolenia.`,
      foreignersCase:
        "Складіть таблицю даних із формуляра, періодів pobytu, доходів та страхування, додайте tytuł prawny до житла й підтвердні документи. Збережіть доказ особистої явки та строку для odcisków, якщо його призначено.",
    },
  ],
})
