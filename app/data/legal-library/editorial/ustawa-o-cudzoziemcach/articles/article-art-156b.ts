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
      provisionId: "ustawa-o-cudzoziemcach-art-156b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("156b", "Art. 156b")} визначає умови mobilność krótkoterminowa naukowca в Польщі: затверджена jednostka, іноземний документ/віза з adnotacja «naukowiec» і повне zawiadomienie, після якого Szef Urzędu не видав sprzeciw протягом 30 днів.`,
          sourceLocator: "Art. 156b ust. 1–5",
        },
        {
          kind: "statute-text",
          text: "Стаття визначає дані та додатки до повідомлення, підстави sprzeciw, остаточність рішення, повідомлення держави-видавця та продовження діяльності особою, яка почала мобільність до рішення щодо jednostka.",
          sourceLocator: "Art. 156b ust. 2–14",
        },
      ],
      summary:
        "Короткострокова мобільність дослідника допускається за спеціальною процедурою повідомлення й без sprzeciw у встановлений строк.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Потрібні частина досліджень у затвердженій польській jednostka, документ або віза іншої держави UE з adnotacja «naukowiec» та zawiadomienie, без рішення sprzeciw протягом 30 днів.",
        },
        {
          locator: "ust. 2–5",
          explanation: foreignersLaw.text`Повідомлення польською мовою містить дані особи, документа, строків та обох установ; додаються докази документа, страхування, коштів за ${foreignersLaw.article("151", "art. 151")} ust. 1a/${foreignersLaw.article("157", "art. 157")} і umowa o przyjęciu з перекладом, якщо документи іноземною мовою. Строк рахується від повного вручення.`,
        },
        {
          locator: "ust. 6",
          explanation:
            "Sprzeciw видається, зокрема, за недостатнього строку документа, відсутності страхування/коштів, незаконної або нереальної діяльності jednostka, неправдивих даних, запису в wykaz/SIS чи безпекових підстав.",
        },
        {
          locator: "ust. 7–14",
          explanation:
            "Органи передають інформацію протягом 20 днів; рішення Szef Urzędu про sprzeciw є ostateczna, про нього повідомляють державу-видавця, а без sprzeciw дані видаляються з EES протягом 5 dni roboczych.",
        },
      ],
      legalEffect:
        "Без sprzeciw після повного повідомлення діє спеціальний режим короткої мобільності; відсутність однієї умови може перешкодити йому, але не автоматично оцінює всі інші підстави pobyt.",
      foreignersCase:
        "Перевірте повноту повідомлення, дату вручення, 30-денний строк, страховку, кошти, угоду, переклади та наявність sprzeciw. Не вважайте мовчання органу доказом виконання інших умов поза статтею.",
    },
  ],
})
