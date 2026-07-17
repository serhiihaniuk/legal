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
      provisionId: "ustawa-o-cudzoziemcach-art-463",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("463", "Art. 463")} передбачає doprowadzenie cudzoziemca, якому odmówiono wjazdu, до кордону або до аеропортового чи морського порту держави, до якої його доставляють, якщо його поведінка обґрунтовує припущення про загрозу безпеці міжнародного наземного, повітряного чи морського сполучення; забезпечує це właściwy komendant placówki Straży Granicznej з urzędu або на wniosek уповноваженого представника przewoźnik.`,
          sourceLocator: "Art. 463 ust. 1 pkt 1–2",
        },
        {
          kind: "statute-text",
          text: "Витрати doprowadzenie покриває Straż Graniczna, якщо дія здійснюється з urzędu, або przewoźnik, якщо на його wniosek; до витрат входять безпосереднє перевезення та належні супроводжуючим службові дорожні витрати.",
          sourceLocator: "Art. 463 ust. 2–3",
        },
      ],
      summary:
        "Стаття визначає супровід до кордону або порту для cudzoziemca, якому odmówiono wjazdu, коли його поведінка може створювати загрозу безпеці міжнародного сполучення, і розподіляє витрати залежно від ініціатора.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Умова — поведінка особи має обґрунтовувати припущення про можливу загрозу безпеці міжнародної комунікації; doprowadzenie забезпечує właściwy komendant placówki SG з urzędu або на wniosek upoważniony przedstawiciel przewoźnik.",
        },
        {
          locator: "ust. 2",
          explanation:
            "При дії з urzędu витрати покриває Straż Graniczna, а при дії на wniosek уповноваженого представника — przewoźnik.",
        },
        {
          locator: "ust. 3",
          explanation:
            "До витрат належать безпосередньо пов’язані з перевезенням витрати та świadczenia, належні особам, які супроводжують cudzoziemca у службовій поїздці за межами держави.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("463", "Art. 463")} регулює організацію і фінансування супроводу після odmowa wjazdu за наявності описаної оцінки поведінки. Сам факт doprowadzenie не замінює перевірку рішення про відмову та фактичних підстав припущення про загрозу.`,
      foreignersCase:
        "Попросіть зафіксувати, яка поведінка стала підставою, хто ініціював doprowadzenie, до якої держави й пункту призначено доставлення та як розраховано витрати; не робіть висновок про небезпеку лише з факту супроводу.",
    },
  ],
})
