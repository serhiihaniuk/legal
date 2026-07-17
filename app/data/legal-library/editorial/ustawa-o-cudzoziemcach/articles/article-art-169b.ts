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
      provisionId: "ustawa-o-cudzoziemcach-art-169b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("169b", "Art. 169b")} встановлює обмін інформацією про мобільність члена сім'ї naukowiec: Szef Urzędu передає wojewoda дані та повідомлення, wojewoda передає копію decyzja o cofnięciu, а Szef Urzędu інформує органи інших держав UE про таке cofnięcie.`,
          sourceLocator: "Art. 169b ust. 1–3",
        },
      ],
      summary:
        "Стаття забезпечує зв'язок між польським wojewoda, Szef Urzędu та іншими державами, коли сімейний дозвіл дослідника використовується для мобільності.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Szef Urzędu передає wojewoda, який надав дозвіл з ${foreignersLaw.article("159", "art. 159")} ust. 1 pkt 1 lit. f, передбачені законом дані про cudzoziemiec, відповідне zawiadomienie та отриману від інших держав інформацію про sprzeciw щодо мобільності.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Wojewoda передає Szef Urzędu копію рішення про cofnięcie дозволу з ${foreignersLaw.article("159", "art. 159")} ust. 1 pkt 1 lit. f, якщо його власник користується short-term або long-term mobility члена сім'ї в іншій державі UE.`,
        },
        {
          locator: "ust. 3",
          explanation:
            "Szef Urzędu неzwłocznie передає органам держав UE, де cudzoziemiec користується мобільністю, інформацію про cofnięcie цього дозволу.",
        },
      ],
      legalEffect:
        "Обмін даними не є новим udzielenie чи cofnięcie permit; він повідомляє компетентні органи про вже надану або відкликану правову підставу.",
      foreignersCase:
        "У разі різних повідомлень звірте копію decyzja wojewoda, дані Szef Urzędu та державу фактичної мобільності; не вважайте передачу інформації самостійною підставою для відмови.",
    },
  ],
})
