import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-131",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Postanowienie щодо zawieszenia, podjęcia або umorzenia postępowania може бути винесене на posiedzeniu niejawnym; zażalenie прямо передбачене на zawieszenie та odmowę podjęcia.",
          sourceLocator: "Art. 131",
        },
      ],
      summary:
        "Норма розрізняє спосіб винесення postanowienie і доступність зажаленія для двох названих рішень.",
      rules: [
        {
          locator: "Art. 131 zdanie pierwsze",
          explanation:
            "Сам факт розгляду на posiedzeniu niejawnym не означає, що справа вирішена по суті.",
        },
        {
          locator: "Art. 131 zdanie drugie",
          explanation:
            "Для zawieszenie та odmowa podjęcia перевірте pouczenie про зажаленія; стаття не поширює прямо це правило на кожне postanowienie про umorzenie.",
        },
      ],
      legalEffect:
        "Стаття визначає процесуальну форму і названий засіб оскарження, але не встановлює всіх вимог до його подання.",
      foreignersCase:
        "Якщо судова справа щодо decyzja про pobyt зупинена або відмовлено в її поновленні, прочитайте вид postanowienie і pouczenie: від цього залежить, чи йдеться про зажаленія.",
    },
  ],
})
