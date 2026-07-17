import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-246",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 246 визначає умови przyznanie prawa pomocy: для osoby fizycznej prawo pomocy całkowite вимагає довести неможливість понести будь-які koszty postępowania, а częściowe — неможливість понести повні koszty без шкоди для необхідного утримання себе і сім’ї. Для osoby prawnej та іншої jednostka organizacyjna без osobowość prawna діє відповідний тест відсутності будь-яких або достатніх коштів. Використання безоплатної правової допомоги чи poradnictwo obywatelskie не може саме по собі бути підставою відмови у встановленні професійного представника; такого представника можна ustanowić, якщо сторона не zatrudnia і не має іншого stosunek prawny з відповідним професіоналом, крім представника, встановленого за правилами prawa pomocy.",
          sourceLocator: "Art. 246 § 1–3",
        },
      ],
      summary:
        "Art. 246 встановлює фінансовий поріг для права допомоги і розрізняє prawo pomocy całkowite та częściowe. Це не автоматичне звільнення: сторона має показати власну ситуацію, а обсяг допомоги визначається окремо.",
      rules: [
        {
          locator: "§ 1 pkt 1–2",
          explanation:
            "Для osoby fizycznej розмежуйте два питання: чи особа не може понести жодних koszty, або чи не може понести повних koszty без шкоди для необхідного utrzymanie себе і сім’ї.",
        },
        {
          locator: "§ 1a",
          explanation:
            "Попереднє використання nieodpłatna pomoc prawna або nieodpłatne poradnictwo obywatelskie не може саме по собі виправдати відмову в ustanowienie adwokat, radca prawny, doradca podatkowy чи rzecznik patentowy.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Для організації перевіряйте відсутність будь-яких або достатніх коштів. Для ustanowienie професійного представника перевірте також, чи сторона вже не zatrudnia і не має іншого правового зв’язку з таким професіоналом; виняток стосується представника, ustanowiony у межах prawa pomocy.",
        },
      ],
      legalEffect:
        "Стаття є підставою для оцінки, чи може бути надано prawo pomocy і в якому обсязі, але сама заява не створює права на zwolnienie від усіх koszty або на конкретного представника.",
      foreignersCase:
        "У справі іноземця про pobyt відокремте право на legal aid від права не сплачувати судові витрати: зберіть дані про майно, доходи та необхідне utrzymanie сім’ї, а в postanowienie перевірте, чи йдеться про zakres całkowity чи częściowy. Не робіть висновку про відмову лише тому, що особа вже отримувала безоплатну консультацію.",
    },
  ]),
})
