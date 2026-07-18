import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "97",
      provisionId: "kpa-art-97",
      reviewStatus: "reviewed",
      summary:
        "Стаття перелічує обов’язкові підстави zawieszenia, правила поновлення провадження та особливий механізм umorzenia після тривалої перешкоди.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Орган зупиняє справу, зокрема через смерть, втрату дієздатності, закінчення zarządu sukcesyjnego або залежність від zagadnienia wstępnego.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Після зникнення підстав орган поновлює провадження з urzędu, на вимогу сторони або на заяву BFG залежно від підстави.",
        },
        {
          locator: "§ 4–7",
          explanation:
            "Після трьох років окремі справи на вимогу сторони можуть бути umorzone за додаткових умов і без своєчасного sprzeciwu інших сторін.",
        },
      ],
      legalEffect:
        "За наявності законної перешкоди орган тимчасово припиняє звичайний рух справи, а інколи після тривалого zawieszenia може її закінчити umorzeniem.",
      foreignersCase:
        "У справі іноземця треба точно назвати пункт zawieszenia і подію, після якої орган повинен відновити розгляд.",
    },
  ],
})
