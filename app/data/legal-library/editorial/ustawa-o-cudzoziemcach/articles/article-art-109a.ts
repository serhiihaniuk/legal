import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
} from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-109a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("109a", "Art. 109a")} pkt 1–3 регулює дії wojewoda або Szef Urzędu w drugiej instancji через Komendant Główny Policji, коли дані cudzoziemca внесені до SIS для цілей повернення: konsultacje з державою, яка внесла дані, якщо її рішення містить zakaz ponownego wjazdu, та інформування цієї держави про decyzja або zamiar/udzielenie zezwolenia на pobyt czasowy.`,
          sourceLocator: "Art. 109a pkt 1–3",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("109a", "Art. 109a")} pkt 1 вимагає звернутися по konsultacje, передбачені ${foreignersLaw.external("art. 9 ust. 1 rozporządzenia nr 2018/1860", "https://eur-lex.europa.eu/eli/reg/2018/1860/oj")}, якщо SIS-дані пов’язані з рішенням іншої держави Schengen із zakaz ponownego wjazdu.`,
          sourceLocator: "Art. 109a pkt 1",
        },
        {
          kind: "practical-inference",
          text: "Konsultacje та інформування координаційно пов’язують польське провадження з SIS-рішенням іншої держави. Вони самі не надають і не скасовують zezwolenia, legalnego pobytu чи права на працю.",
          sourceLocator: "Art. 109a pkt 1–3",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("109a", "Art. 109a")} визначає, як польський орган через Komendant Główny Policji консультується або повідомляє іншу державу Schengen, коли SIS-запис для повернення перетинається із заявою чи рішенням про zezwolenie na pobyt czasowy.`,
      rules: [
        {
          locator: "Art. 109a pkt 1",
          explanation:
            "За SIS-запису, пов’язаного з рішенням іншої держави та zakaz ponownego wjazdu, польський орган звертається по передбачені konsultacje.",
        },
        {
          locator: "Art. 109a pkt 2",
          explanation:
            "За тієї самої обставини орган інформує державу, яка внесла дані, про видану decyzja у справі про zezwolenie na pobyt czasowy.",
        },
        {
          locator: "Art. 109a pkt 3",
          explanation:
            "Якщо SIS-запис пов’язаний із рішенням без zakaz ponownego wjazdu, повідомляється zamiar udzielenia або udzielenie zezwolenia na pobyt czasowy.",
        },
      ],
      legalEffect:
        "Норма запускає міждержавну konsultacja та обмін інформацією навколо заяви або рішення про pobyt czasowy. Вона не є самостійною підставою для pozytywna або negatywna decyzja і не перетворює SIS-запис на доказ дозволу чи заборони поза його правовою підставою.",
      foreignersCase:
        "З’ясуйте, яка держава і яке рішення створили SIS-запис, чи є zakaz ponownego wjazdu, хто саме діє в польській справі та чи йдеться про zamiar, udzielenie або вже видану decyzja. Не робіть висновок про legalny pobyt або prawo do pracy лише з SIS-запису чи факту konsultacje.",
    },
  ]),
})
