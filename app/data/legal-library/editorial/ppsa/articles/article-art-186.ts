import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-186",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Rozpoznając skargę kasacyjną, NSA uchyla wyrok także w części niezaskarżonej, jeżeli zachodzi nieważność postępowania.",
          sourceLocator: "Art. 186",
        },
      ],
      summary:
        "Nieważność postępowania może rozszerzyć uchylenie wyroku NSA na niezaskarżoną jego część.",
      rules: [
        {
          locator: "Art. 186",
          explanation:
            "Warunkiem odstępstwa od granic zaskarżenia jest nieważność postępowania; sama niezgoda z niezaskarżoną częścią nie wystarcza.",
        },
      ],
      legalEffect:
        "Przepis może zwiększyć zakres uchylenia, ale nie ustanawia ogólnego prawa NSA do ponownego badania każdej niezaskarżonej części.",
      foreignersCase:
        "Jeśli wyrok w sprawie pobytowej ma kilka części, sprawdź, czy ustalona nieważność rzeczywiście obejmuje część niezaskarżoną.",
    },
  ],
})
