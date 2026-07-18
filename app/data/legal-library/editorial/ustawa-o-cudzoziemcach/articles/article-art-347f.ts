import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1860_URL = "https://eur-lex.europa.eu/eli/reg/2018/1860/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-347f",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("347f", "Art. 347f")} регулює консультації, коли інша держава Schengen планує видати або продовжити dokument pobytowy чи wizę długoterminową, а також дії після виявлення такого документа.`,
          sourceLocator: "Art. 347f ust. 1–3",
        },
      ],
      summary:
        "Komendant Główny Straży Granicznej обмінюється інформацією з іншою державою Schengen, коли запис SIS перетинається з її документом побиту або довгостроковою візою.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Під час консультацій за ${foreignersLaw.external("Art. 9", SIS_2018_1860_URL)} орган передає іншій державі через Komendant Główny Policji інформацію про підстави та обставини decyzja о поверненні протягом 10 днів.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Якщо після wpis виявлено чинний документ іншої держави, польський орган звертається про консультації за ${foreignersLaw.external("Art. 11 rozporządzenia nr 2018/1860", SIS_2018_1860_URL)} і повідомляє орган państwa wykonującego про результат консультацій, передбачених ${foreignersLaw.external("Art. 12 цього ж розпорядження", SIS_2018_1860_URL)}. Це відсилання до права UE, а не до однойменного numeru artykułu ustawy o cudzoziemcach.`,
        },
        {
          locator: "ust. 3",
          explanation: foreignersLaw.text`Дані видаляються у визначених випадках: коли інша держава видає, має намір видати або продовжити документ чи візу, коли після консультацій за ${foreignersLaw.external("Art. 11 rozporządzenia nr 2018/1860", SIS_2018_1860_URL)} повідомлено, що документ або віза не будуть відкликані, або коли особа набула громадянство держави ЄС, EFTA–ЄЕП чи Швейцарії.`,
        },
      ],
      legalEffect:
        "Міждержавні консультації можуть вплинути на запис SIS, але не замінюють окремої оцінки чинності документа та польського рішення.",
      foreignersCase:
        "Надайте докази чинності іноземного документа і перевірте, чи орган провів потрібні консультації; очікування консультацій саме по собі не є дозволом залишатися.",
    },
  ],
})
