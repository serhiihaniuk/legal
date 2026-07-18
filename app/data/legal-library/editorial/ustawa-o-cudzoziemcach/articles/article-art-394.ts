import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-394",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Іноземця можна zatrzymać не більш як на 48 годин, коли є обставини для рішення про powrót, він ухиляється від обов’язків такого рішення або не виконує обов’язків із postanowienie про заходи art. 398 ust. 2; Straż Graniczna також може zatrzymać його для przymusowego wykonania рішення, przekazania за rozporządzenie 604/2013, przekazania до іншої держави-члена ЄС або держави EFTA–ЄЕП чи Швейцарії за міжнародною угодою, або przekazania до państwo trzecie за такою угодою.",
          sourceLocator: "Art. 394 ust. 1–1a",
        },
        {
          kind: "statute-text",
          text: "Після zatrzymanie закон передбачає негайне зняття відбитків і передачу даних Komendant Główny Policji, дії Policja або Straż Graniczna, а також звільнення, якщо протягом визначених 48 або 24 годин не відбулися необхідні судові дії чи припинилася причина затримання.",
          sourceLocator: "Art. 394 ust. 2–5",
        },
      ],
      summary:
        "Стаття регулює короткострокове zatrzymanie іноземця, підстави такого заходу, первинні дії служб і строки, після яких особу треба звільнити за названих умов.",
      rules: [
        {
          locator: "ust. 1–1a",
          explanation:
            "Підстави охоплюють обставини для decyzja o zobowiązaniu do powrotu, ухилення від її обов’язків, невиконання obowiazki з art. 398 ust. 2, а також окремі цілі przekazanie або przymusowe wykonanie. За кожною з названих підстав максимальний строк zatrzymanie — 48 годин.",
        },
        {
          locator: "ust. 2–4",
          explanation:
            "Zatrzymanie здійснює Straż Graniczna або Policja, а для цілей ust. 1a — лише Straż Graniczna. Policja після цього передає особу до органу Straż Graniczna і подає wniosek про decyzja o zobowiązaniu do powrotu; Straż Graniczna обирає передбачену законом подальшу дію.",
        },
        {
          locator: "ust. 5",
          explanation:
            "Особа підлягає звільненню, якщо в межах 48 годин від zatrzymanie її не передано до dyspozycja sądu і одночасно не подано wniosek про strzeżony ośrodek або areszt; якщо протягом 24 годин від передачі суду не вручено відповідне postanowienie; за вказівкою sąd або після припинення причини zatrzymanie.",
        },
      ],
      legalEffect:
        "Zatrzymanie є коротким заходом для підготовки повернення або передачі і не дорівнює автоматичному розміщенню в strzeżony ośrodek. Часові межі треба рахувати від фактичного моменту zatrzymanie та передачі суду.",
      foreignersCase:
        "Негайно зафіксуйте час і орган zatrzymanie, підставу, відбитки, передачу до Straż Graniczna або суду та вручення postanowienie. Розділяйте 48 годин zatrzymanie і подальший судовий захід.",
    },
  ]),
})
