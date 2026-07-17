import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const VISA_CODE_URL = "https://eur-lex.europa.eu/eli/reg/2009/810/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-68",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("68", "Art. 68")} ust. 1–4 регулює відповідь Польщі іншій державі Schengen у процедурі ${foreignersLaw.external("Art. 22", VISA_CODE_URL)} ust. 1 або ${foreignersLaw.external("Art. 25", VISA_CODE_URL)} ust. 2 Wspólnotowy Kodeks Wizowy: Szef Urzędu відповідає за 7 днів після консультацій з визначеними органами, які передають дані за 5 днів; їхнє мовчання вважається згодою.`,
          sourceLocator: "Art. 68 ust. 1–4",
        },
        {
          kind: "practical-inference",
          text: "Мовчазна згода в ust. 3 стосується органів, які мали передати інформацію, і не є автоматичним рішенням про видачу візи заявнику.",
          sourceLocator: "Art. 68 ust. 3",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("68", "Art. 68")} встановлює польський механізм консультацій, коли інша держава Schengen просить думку польського centralny organ щодо wiza Schengen. Szef Urzędu перевіряє безпекові обставини разом із SG, Policja, ABW, AW і MFA та повідомляє про sprzeciw.`,
      rules: [
        {
          locator: "Art. 68 ust. 1",
          explanation:
            "Szef Urzędu має 7 днів від отримання запиту, щоб повідомити centralny organ іншої держави, чи Польща sprzeciwia się видачі.",
        },
        {
          locator: "Art. 68 ust. 2",
          explanation: foreignersLaw.text`Для оцінки обставин ${foreignersLaw.external("Art. 32", VISA_CODE_URL)} ust. 1 lit. a tiret vi Visa Code Szef Urzędu консультується з п’ятьма названими органами.`,
        },
        {
          locator: "Art. 68 ust. 3",
          explanation:
            "SG, Policja, ABW, AW і MFA мають передати потрібні відомості за 5 днів; їх непередання вважається згодою саме цих органів на видачу візи.",
        },
        {
          locator: "Art. 68 ust. 4",
          explanation: foreignersLaw.text`Ust. 2–3 також застосовуються при запиті на zgoda для wiza Schengen з обмеженою територіальною чинністю лише в Польщі за ${foreignersLaw.external("Art. 25", VISA_CODE_URL)} ust. 2 Visa Code.`,
        },
      ],
      legalEffect:
        "Норма визначає обмін інформацією і строки між державами та органами. Вона не видає wiza і не звільняє іноземця від інших підстав відмови.",
      foreignersCase:
        "Зафіксуйте дату запиту іншої держави, консультації, п’ятиденні відповіді органів і остаточне повідомлення Szef Urzędu; окремо оцініть, чи йдеться про обмежену територіальну чинність.",
    },
  ],
})
