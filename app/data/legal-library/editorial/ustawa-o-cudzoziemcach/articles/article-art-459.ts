import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-459",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("459", "Art. 459")} ust. 1 зобов’язує przewoźnik, який повітряним або морським шляхом має привезти cudzoziemca до granica, вжити всіх необхідних заходів, щоб особа, яка має намір в’їхати до Польщі, мала належний document podróży, потрібну wizę або інший чинний документ для wjazd і pobyt, а за потреби — дозвіл на в’їзд до іншої держави або pobyt у ній. Ust. 2 поширює обов’язок на регулярний міжнародний road transport, крім ruch przygraniczny.`,
          sourceLocator: "Art. 459 ust. 1–2",
        },
      ],
      summary:
        "Стаття покладає на przewoźnik попередній обов’язок перевірити наявність документів, потрібних для перетину кордону та, за необхідності, подальшого в’їзду або pobyt в іншій державі.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Przewoźnik має вжити wszelkie niezbędne środki, щоб перед перевезенням до granica у cudzoziemca були чинний document podróży, потрібна wiza або інший документ для wjazd і pobyt, а також дозвіл на іншу державу, якщо він потрібен.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Той самий обов’язок діє для przewoźnik, який виконує регулярні перевезення осіб у міжнародному транспорті автомобільним шляхом, але не для ruch przygraniczny.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("459", "Art. 459")} встановлює обов’язок przewoźnik щодо необхідних документів, але сама стаття не визначає результат контролю конкретної особи й не замінює окремі правила про odmowa wjazdu або відповідальність.`,
      foreignersCase:
        "У справі з’ясуйте вид транспорту, чи було перевезення регулярним і міжнародним, які документи вимагалися на дату поїздки та які перевірочні дії реально вжив przewoźnik; не прирівнюйте відсутність документа до автоматичної вини без аналізу фактів.",
    },
  ],
})
