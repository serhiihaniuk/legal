import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-225a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Szef Urzędu веде MOS — систему, яка через онлайн-послугу дає змогу електронно подати заяву про pobyt czasowy разом із додатками, заяву про pobyt stały або заяву про pobyt rezydenta długoterminowego UE.",
          sourceLocator: "Art. 225a ust. 1",
        },
        {
          kind: "statute-text",
          text: "Szef Urzędu є адміністратором даних у MOS, зокрема адміністратором персональних даних у розумінні RODO.",
          sourceLocator: "Art. 225a ust. 2",
        },
        {
          kind: "statute-text",
          text: "Як адміністратор він відповідає за функціонування, утримання й розвиток MOS, захист від несанкціонованого доступу, цілісність даних, запобігання пошкодженню системи, правила безпеки обробки та розрахунковість дій, а також видає персональні уповноваження на обробку даних.",
          sourceLocator: "Art. 225a ust. 3–4",
        },
      ],
      summary:
        "Стаття створює правову основу MOS як каналу електронних заяв і визначає Szefa Urzędu відповідальним адміністратором системи та даних.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "MOS охоплює три названі види заяв; лише для pobytu czasowego стаття окремо згадує також додатки до заяви.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Роль адміністратора включає не лише формальну відповідальність за персональні дані, а й технічну доступність, цілісність, захист і розрахунковість операцій у системі.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Особи, які виконують завдання від імені Szefa Urzędu, можуть обробляти дані лише в межах виданого їм уповноваження.",
        },
      ],
      legalEffect:
        "Норма розподіляє системну й інформаційну відповідальність, але сама не визначає, чи конкретна заява відповідає формальним або матеріальним умовам дозволу.",
      foreignersCase:
        "У разі проблеми розрізняйте помилку користувача, недолік заяви та збій MOS. Для запиту про дані або безпеку фіксуйте, яка операція відбулася в системі та хто діяв за уповноваженням адміністратора.",
    },
  ],
})
