import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
} from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const kpaLaw = createLegalTextAuthor("kpa")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-15a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("15a", "Art. 15a")} ust. 1 стосується працівників Urząd do Spraw Cudzoziemców, urzędu wojewódzkiego, urzędu obsługującego ministra właściwego do spraw wewnętrznych, Komendy Głównej Straży Granicznej, komendy oddziału Straży Granicznej і placówki Straży Granicznej. Для них визначені в dział II Kodeksu postępowania administracyjnego обов’язки у справах за ustawa, зокрема підготовка проєктів załatwienia справи та przeprowadzanie dowodów, а також załatwianie справ на підставі ${kpaLaw.article("268a", "art. 268a Kodeksu postępowania administracyjnego")}; czynności kancelaryjne виключені.`,
          sourceLocator: "Art. 15a ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("15a", "Art. 15a")} ust. 2–3 вимагає перед zatrudnienie або дорученням нових обов’язків перевірити через Krajowy Rejestr Karny, чи працівник не був skazany prawomocnym wyrokiem за umyślne przestępstwo або umyślne przestępstwo skarbowe; після такого skazanie він не може займати відповідне stanowisko, а видане ${kpaLaw.article("268a", "upoważnienie за art. 268a KPA")} cofnięte.`,
          sourceLocator: "Art. 15a ust. 2–3",
        },
        {
          kind: "practical-inference",
          text: "Перевірка в Krajowy Rejestr Karny є кадровою умовою доручення визначених обов’язків. Вона не є рішенням у справі cudzoziemca і не доводить його legalny pobyt або право виконувати роботу.",
          sourceLocator: "Art. 15a ust. 1–3",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("15a", "Art. 15a")} встановлює кадрову перевірку для працівників органів, які виконують визначені обов’язки адміністративного провадження у справах cudzoziemców. Перевірка стосується умисних вироків і впливає на можливість займати відповідне stanowisko або користуватися upoważnienie.`,
      rules: [
        {
          locator: "Art. 15a ust. 1",
          explanation:
            "Норма охоплює лише названі установи та обов’язки провадження за ustawa; czynności kancelaryjne не входять до описаного переліку.",
        },
        {
          locator: "Art. 15a ust. 2",
          explanation:
            "Krajowy Rejestr Karny перевіряють до zatrudnienie на посаді з такими обов’язками і до доручення працівнику нових таких обов’язків.",
        },
        {
          locator: "Art. 15a ust. 3",
          explanation:
            "Остаточний вирок за умисне przestępstwo або przestępstwo skarbowe виключає зайняття відповідної посади; існуюче upoważnienie за KPA підлягає cofnięcie.",
        },
      ],
      legalEffect:
        "Стаття визначає внутрішній кадровий фільтр для виконання частини адміністративних дій. Вона не встановлює матеріальних умов в’їзду, pobyt чи wykonywania pracy іноземця і не замінює рішення компетентного органу.",
      foreignersCase:
        "Якщо питання стосується працівника органу, перевірте його установу, конкретний zakres обов’язків, момент перевірки та наявність upoważnienie. Не використовуйте сам факт кадрової перевірки як доказ результату справи іноземця.",
    },
  ]),
})
