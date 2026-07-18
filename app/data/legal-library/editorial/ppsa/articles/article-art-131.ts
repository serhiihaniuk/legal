import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
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
        "Норма розрізняє спосіб винесення postanowienie і можливість його оскарження через zażalenie для двох названих рішень.",
      rules: [
        {
          locator: "Art. 131 zdanie pierwsze",
          explanation:
            "Сам факт розгляду на posiedzeniu niejawnym не означає, що справа вирішена по суті.",
        },
        {
          locator: "Art. 131 zdanie drugie",
          explanation:
            "Для zawieszenie та odmowa podjęcia перевірте pouczenie про можливість подати zażalenie; стаття прямо не поширює цей засіб оскарження на кожне postanowienie про umorzenie.",
        },
      ],
      legalEffect:
        "Стаття визначає процесуальну форму і названий засіб оскарження, але не встановлює всіх вимог до його подання.",
      foreignersCase:
        "Якщо судову справу щодо decyzja про pobyt зупинено або відмовлено в її поновленні, прочитайте вид postanowienie і pouczenie: від цього залежить, чи можна подати zażalenie.",
    },
  ],
})
