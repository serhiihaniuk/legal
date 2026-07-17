import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-190",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd, któremu przekazano sprawę, jest związany wykładnią prawa dokonaną w tej sprawie przez NSA. Nie można oprzeć kolejnej skargi kasacyjnej od orzeczenia po ponownym rozpoznaniu na podstawach sprzecznych z tą wykładnią.",
          sourceLocator: "Art. 190",
        },
      ],
      summary:
        "Po przekazaniu sprawy wykładnia prawa NSA wiąże sąd ponownie rozpoznający i ogranicza sprzeczne podstawy kolejnej kasacji.",
      rules: [
        {
          locator: "Art. 190",
          explanation:
            "Związanie dotyczy sprawy przekazanej i wykładni ustalonej w tej sprawie; nie zastępuje sądu w ocenie faktów w granicach ponownego rozpoznania.",
        },
      ],
      legalEffect:
        "Przepis wyznacza prawne ramy ponownego rozpoznania, ale nie rozstrzyga samodzielnie wszystkich dowodów ani końcowego wyniku sprawy.",
      foreignersCase:
        "Po uchyleniu wyroku w sprawie pobytowej porównaj nowe orzeczenie WSA z wykładnią NSA. Kolejną kasację buduj bez tezy sprzecznej z tą wykładnią.",
    },
  ],
})
