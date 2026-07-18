import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-461",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("461", "Art. 461")} дозволяє рішенням щодо cudzoziemca, про якого йдеться в ${foreignersLaw.article("460", "Art. 460")} ust. 1, наказати перебування у спеціальному pomieszczenie, заборонити залишати морське судно або наказати залишити Польщу на тому самому чи іншому повітряному або морському судні; для перебування строк зазначається в рішенні, може бути продовжений за причин, незалежних від przewoźnik, але загалом не перевищує 7 днів.`,
          sourceLocator: "Art. 461 ust. 1 pkt 1–4, ust. 1a–1c",
        },
        {
          kind: "statute-text",
          text: "Рішення у справах за ust. 1 і 1b видає komendant placówki Straży Granicznej, воно підлягає негайному виконанню, а від нього можна подати odwołanie до Komendant Główny Straży Granicznej.",
          sourceLocator: "Art. 461 ust. 2–3",
        },
      ],
      summary: foreignersLaw.text`Стаття визначає заходи щодо cudzoziemca, якому odmówiono wjazdu і якого przewoźnik має повернути за ${foreignersLaw.article("460", "Art. 460")}: тимчасове перебування у спеціальному приміщенні, заборону залишати судно або організацію виїзду конкретним транспортом.`,
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation: foreignersLaw.text`Для особи з ${foreignersLaw.article("460", "Art. 460")} ust. 1 рішення може передбачати одне з чотирьох названих заходів: перебування у pomieszczenie для осіб, яким відмовлено у в’їзді; заборону залишати statku morskiego; виїзд тим самим statkiem powietrznym; або виїзд іншим statkiem powietrznym чи morskim.`,
        },
        {
          locator: "ust. 1a–1c",
          explanation: foreignersLaw.text`У рішенні про поміщення визначається okres pobytu. Цей період продовжується рішенням на визначений час, якщо з причин, незалежних від przewoźnik, неможливо виконати обов’язок з ${foreignersLaw.article("460", "Art. 460")} ust. 1; перебування не може перевищити 7 днів.`,
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Рішення приймає komendant placówki Straży Granicznej і воно є natychmiast wykonalna. Оскарження подається до Komendant Główny Straży Granicznej.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("461", "Art. 461")} створює конкретні організаційні та тимчасові заходи після ситуації з ${foreignersLaw.article("460", "Art. 460")}, але не є самостійним правилом про odmowa wjazdu. Негайне виконання не скасовує прямо передбаченого odwołanie, а продовження і строк перебування залежать від умов тексту та встановлених фактів.`,
      foreignersCase: foreignersLaw.text`Перевірте рішення komendant placówki: його пункт, строк перебування, фактичну причину неможливості повернення, документи щодо ${foreignersLaw.article("460", "Art. 460")} та pouczenie про odwołanie; окремо порахуйте, чи не перевищено 7-денний максимум.`,
    },
  ],
})
