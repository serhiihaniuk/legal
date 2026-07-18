import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "63",
      provisionId: "kpa-art-63",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює допустимі способи подання podań, їх мінімальний зміст і правила підпису. Звичайний e-mail не є належним каналом, якщо спеціальний закон прямо не передбачає інакше.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Podanie можна внести письмово, telefaksem, усно до protokołu, на adres do doręczeń elektronicznych або konto w systemie teleinformatycznym organu. Подання на звичайну електронну адресу pozostawia się bez rozpoznania, якщо окремі правила не встановлюють інше.",
        },
        {
          locator: "§ 2",
          explanation:
            "Podanie має щонайменше вказувати osobę, її адресу та żądanie, а також виконувати додаткові вимоги спеціальних норм.",
        },
        {
          locator: "§ 3–3a",
          explanation:
            "Письмове або усне podanie підписує заявник; за його нездатності — уповноважена особа з відповідною відміткою. Електронне podanie подається у встановленому форматі, якщо закон вимагає formularza.",
        },
        {
          locator: "§ 4",
          explanation:
            "На żądanie wnoszącego organ підтверджує факт внесення podania.",
        },
      ],
      legalEffect:
        "Належний канал і мінімальний зміст дають podaniu процесуальне значення; неналежний e-mail може залишитися без розгляду.",
      foreignersCase:
        "Заяву або процесуальне письмо іноземця не можна вважати поданим лише тому, що його надіслано на загальну e-mail адресу urzędu.",
    },
  ],
})
