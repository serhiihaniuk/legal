import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const TUE_ART_50_URL =
  "https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:12016M050"

const WITHDRAWAL_AGREEMENT_URL =
  "https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:12020W/TXT"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-244",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`У karcie pobytu розміщують дані особи, народження, meldunku, громадянства, статі, зросту, кольору очей і PESEL (якщо його надано), інформацію про вид zezwolenia, odciski, орган, дати та фотографію. Залежно від підстави додають adnotacje «naukowiec», «naukowiec – mobilność», «student», «stażysta», «wolontariusz», «Niebieska Karta UE», «dostęp do rynku pracy», «ICT», «mobile ICT», «Były posiadacz Niebieskiej Karty UE», «praca sezonowa», а також спеціальні adnotacje про ochronę międzynarodową і ${foreignersLaw.external("Art. 50", TUE_ART_50_URL)} TUE / ${foreignersLaw.external("Art. 18", WITHDRAWAL_AGREEMENT_URL)} ust. 4 Umowy Wystąpienia.`,
          sourceLocator: "Art. 244 ust. 1 pkt 1–19",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Картка може містити підпис іноземця і закодований запис даних з ust. 1 pkt 1, 2, 4, 5 або 16. Odcisków linii papilarnych не вміщують, якщо їх фізично неможливо зняти, особа не досягла 6 років на визначену законом дату або орган odstąpił від wezwania do osobistego stawiennictwa за ${foreignersLaw.article("106h", "art. 106h")} ust. 1, ${foreignersLaw.article("203h", "art. 203h")} ust. 1 чи ${foreignersLaw.article("219h", "art. 219h")} ust. 1. Адресу не вміщують, якщо немає meldunek на pobyt czasowy понад 2 місяці.`,
          sourceLocator: "Art. 244 ust. 2–4",
        },
      ],
      summary:
        "Стаття визначає обов’язкові дані й adnotacje karty pobytu та окремі правила про підпис, закодовані дані, відбитки й адресу meldunku.",
      rules: [
        {
          locator: "ust. 1 pkt 8–12a",
          explanation:
            "Вид zezwolenia визначає adnotacje: для Blue Card і мобільності, naukowiec, student, stażysta, wolontariusz, ICT, mobile ICT, колишнього Blue Card та praca sezonowa діють саме умови, названі у відповідних пунктах; «dostęp do rynku pracy» ставлять лише за наявності права на роботу або звільнення від zezwolenia na pracę.",
        },
        {
          locator: "ust. 1 pkt 13–19",
          explanation: foreignersLaw.text`Odciski, organ wydający, дати, fotografia та adnotacje про ochronę międzynarodową або ${foreignersLaw.external("Art. 50", TUE_ART_50_URL)} TUE / ${foreignersLaw.external("Art. 18", WITHDRAWAL_AGREEMENT_URL)} ust. 4 Umowy Wystąpienia допомагають звірити зміст картки з підставою видачі.`,
        },
        {
          locator: "ust. 2–4",
          explanation:
            "Для відсутності відбитків перевірте одну з трьох підстав: фізичну неможливість, вік до 6 років на дату wniosku про картку або zezwolenie для першої картки z urzędu, чи законне odstąpienie від особистої явки. Для відсутності адреси діє окреме правило про meldunek.",
        },
      ],
      legalEffect:
        "Зміст karty pobytu стандартизований і відображає визначені законом дані та adnotacje. Сам напис, зокрема «dostęp do rynku pracy», не замінює перевірки рішення і фактичних умов відповідного права.",
      foreignersCase:
        "Після отримання картки звірте imię i nazwisko, дані народження, PESEL за наявності, meldunek, вид zezwolenia, adnotacje, odciski, фотографію та дати. Помилку не виправляйте самостійно — повідомте орган і з’ясуйте порядок wymiany.",
    },
  ],
})
