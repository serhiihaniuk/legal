import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-303b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 303b передбачає, що у випадку Art. 303 ust. 1 pkt 9a komendant placówki Straży Granicznej, właściwy ze względu na miejsce przekroczenia granicy, складає protokół przekroczenia granicy та видає postanowienie o opuszczeniu terytorium; на нього подається zażalenie до Komendanta Głównego Straży Granicznej, але zażalenie не зупиняє виконання, а postanowienie містить nakaz виїзду і zakaz ponownego wjazdu на 6 місяців–3 роки.",
          sourceLocator: "Art. 303b ust. 1–5",
        },
      ],
      summary:
        "Стаття встановлює спрощену процедуру для особи, яку затримали одразу після незаконного перетинання зовнішнього кордону.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Komendant placówki właściwy за місцем перетину кордону складає протокол і видає postanowienie; zażalenie подається Komendantowi Głównemu Straży Granicznej, але не має zawieszającego ефекту.",
        },
        {
          locator: "ust. 2–4",
          explanation:
            "Postanowienie містить nakaz opuszczenia території та zakaz ponownego wjazdu до Польщі й інших держав Schengen на 6 місяців–3 роки; до цього zakaz відповідно застосовується Art. 320.",
        },
        {
          locator: "ust. 5",
          explanation:
            "У справах cofnięcia цього zakaz органом wyższego stopnia щодо komendant placówki є Komendant Główny Straży Granicznej.",
        },
      ],
      legalEffect:
        "Форма postanowienie і відсутність автоматичного зупинення виконання відрізняють цей шлях від звичайної decyzja; строк оскарження треба перевірити в самому pouczenie та застосовних правилах.",
      foreignersCase:
        "Негайно зафіксуйте дату вручення postanowienie, зміст протоколу і факт подання zażalenie; саме подання не означає, що виконання зупинено.",
    },
  ]),
})
