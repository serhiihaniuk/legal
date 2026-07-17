import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-285e",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285e вимагає, щоб skarga o stwierdzenie niezgodności z prawem містила oznaczenie orzeczenie та обсяг оскарження, podstawy і їх uzasadnienie, przepis prawa, з яким orzeczenie не узгоджується, uprawdopodobnienie szkoda, доведення неможливості wzruszenie іншими засобами, а за Art. 285a § 2 — і винятковий випадок, та wniosek про stwierdzenie niezgodności z prawem; також діють вимоги до pismo strony і копій, включно з двома для akt NSA.",
          sourceLocator: "Art. 285e § 1–2",
        },
      ],
      summary:
        "Стаття встановлює спеціальний зміст skarga та перелік матеріалів і копій, які мають супроводжувати цей винятковий засіб.",
      rules: [
        {
          locator: "§ 1 pkt 1–6",
          explanation:
            "У скарзі послідовно покажіть оскаржене orzeczenie, podstawy, порушений przepis prawa, szkoda, відсутність іншого засобу та wniosek; для Art. 285a § 2 додайте обґрунтування винятковості.",
        },
        {
          locator: "§ 2",
          explanation:
            "Skarga має відповідати загальним вимогам pismo strony; крім копій для сторін і учасників, до неї додаються дві копії для akt Naczelny Sąd Administracyjny.",
        },
      ],
      legalEffect:
        "Формальні елементи дають суду змогу ідентифікувати засіб і його підстави, але подання повного комплекту не доводить незаконність orzeczenie чи факт szkoda.",
      foreignersCase:
        "Перед поданням скарги іноземця зробіть таблицю: orzeczenie, обсяг, przepis, szkoda, неможливість іншого засобу та wniosek. Окремо перевірте odpisy для doręczenia сторонам і учасникам та два odpisy для akt Naczelny Sąd Administracyjny.",
    },
  ]),
})
