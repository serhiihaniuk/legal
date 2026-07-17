import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-139",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Ogłoszenie wyroku зазвичай відбувається на засіданні, де закрито rozprawa; у складній справі оголошення можна відкласти до чотирнадцяти днів і лише один раз продовжити не більш як на сім. Воно є публічним, відсутність сторін не перешкоджає, а для wyrok з posiedzenie niejawnym odpis sentencji вручають сторонам, якщо uzasadnienie не складається з urzędu; такий wyrok публічно доступний у sekretariat протягом чотирнадцяти днів.",
          sourceLocator: "Art. 139 § 1–5",
        },
      ],
      summary:
        "Стаття визначає час, публічність і спосіб ogłoszenie wyroku та окремі правила для posiedzenie niejawne.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Дата оголошення зазвичай збігається із закриттям rozprawa; відкладення потребує postanowienie і має межі, вказані в нормі.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Неявка сторони не зупиняє ogłoszenie; оголошується sentencja, а zasadnicze powody можуть бути сказані усно.",
        },
        {
          locator: "§ 4–5",
          explanation:
            "Для wyrok на posiedzenie niejawnym перевірте, чи uzasadnienie складається з urzędu: якщо ні, odpis sentencji doręczaється сторонам; сам wyrok має бути публічно доступний у sekretariat протягом чотирнадцяти днів.",
        },
      ],
      legalEffect:
        "Правило про ogłoszenie не встановлює саме по собі строку оскарження: для дій сторони треба перевірити відповідне pouczenie і спеціальні норми.",
      foreignersCase:
        "У спорі про pobyt зафіксуйте дату ogłoszenie або doręczenia sentencja. Неявка не означає, що оголошення не відбулося; перевірте також pouczenie про засіб оскарження.",
    },
  ],
})
