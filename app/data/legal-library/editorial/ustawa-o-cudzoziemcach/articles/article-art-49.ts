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
      provisionId: "ustawa-o-cudzoziemcach-art-49",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("49", "Art. 49")} ust. 1 дозволяє подати zaproszenie як документ, що підтверджує кошти на планований pobyt, zakwaterowanie, wyżywienie та повернення або przejazd tranzytowy. Ust. 2 визначає допустимі категорії zapraszający, а ust. 3 відсилає для безперервності pobytu cudzoziemca до ${foreignersLaw.article("195", "Art. 195")} ust. 4.`,
          sourceLocator: "Art. 49 ust. 1–3",
        },
        {
          kind: "practical-inference",
          text: "Zaproszenie підтверджує фінансове забезпечення в межах своєї функції, але не є візою, дозволом на pobyt або dokument uprawniający do pracy.",
          sourceLocator: "Art. 49 ust. 1",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("49", "Art. 49")} визначає доказову функцію zaproszenie і коло осіб, які можуть його оформити. До них належать, зокрема, польський або окремий громадянин ЄС/EFTA/Швейцарії чи особа, охоплена Umowa Wystąpienia, іноземець із щонайменше 5 роками безперервного legal pobyt або з pobyt stały чи pobyt rezydenta długoterminowego UE, а також юридична особа або jednostka organizacyjna з місцезнаходженням у Польщі.`,
      rules: [
        {
          locator: "Art. 49 ust. 1",
          explanation:
            "Запрошення охоплює витрати на перебування, житло, харчування і дорогу назад або транзит до третьої держави, яка дозволить в’їзд.",
        },
        {
          locator: "Art. 49 ust. 2 pkt 1–3",
          explanation:
            "Запрасити можуть названі законом громадяни та члени їх сімей із потрібним правом pobytu, іноземець з legal i nieprzerwany pobyt щонайменше 5 років або з відповідним дозволом, чи юридична особа або jednostka з польською siedziba.",
        },
        {
          locator: "Art. 49 ust. 3",
          explanation: foreignersLaw.text`Безперервність п’ятирічного pobyt для категорії з ust. 2 pkt 2 визначається за ${foreignersLaw.article("195", "Art. 195")} ust. 4, а не за довільним підрахунком днів.`,
        },
      ],
      legalEffect:
        "Належно оформлене zaproszenie є одним із документів для підтвердження коштів і зобов’язань zapraszający. Воно не гарантує видачу wiza або в’їзд і не надає права на wykonywanie pracy.",
      foreignersCase: foreignersLaw.text`Перевірте статус і адресу zapraszający, його підставу за ${foreignersLaw.article("49", "Art. 49")} ust. 2, період legal pobyt, заявлені витрати та відповідність запрошення фактичному cel pobytu cudzoziemca.`,
    },
  ],
})
