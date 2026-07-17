import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-74a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "На legalStateDate 14.07.2026 Art. 74a є чинною нормою електронного doręczenie: вона охоплює умови згоди або подання електронного pismo, zawiadomienie, UPO, повторне повідомлення, fikcja doręczenia після чотирнадцяти днів, доступ до документа та підпис судових документів. Позначка про uchylenie в примітці 43 є майбутньою зміною з 1.10.2029, а не поточним статусом.",
          sourceLocator: "Art. 74a § 1–12, przypisy 42–43",
        },
      ],
      summary:
        "На 14.07.2026 Art. 74a — чинна окрема підстава електронного doręczenie; її майбутнє uchylenie заплановане на 1.10.2029.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Електронне doręczenie можливе, якщо strona подала pismo як dokument elektroniczny через elektroniczna skrzynka podawcza sądu або органу, попросила про такий спосіб і вказала адресу чи дала згоду та вказала адресу. Відмова подається як dokument elektroniczny й переводить вручення на неелектронний спосіб.",
        },
        {
          locator: "§ 3–5",
          explanation:
            "Sąd надсилає zawiadomienie з адресою отримання та pouczenie; дата doręczenie — дата підписання urzędowe poświadczenie odbioru kwalifikowany podpis, podpis zaufany або podpis osobisty.",
        },
        {
          locator: "§ 6–9",
          explanation:
            "Якщо pismo не отримано, після семи днів надсилається повторне zawiadomienie, а doręczenie вважається здійсненим після чотирнадцяти днів від першого повідомлення. Доступ до документа та даних про повідомлення має бути забезпечений щонайменше три місяці.",
        },
        {
          locator: "§ 10–12",
          explanation:
            "Для prokurator, RPO, RPD та оскарженого organu pismo надсилається безпосередньо до elektroniczna skrzynka podawcza, а дата береться з UPO; електронні pismo, odpisy, załączniki та orzeczenia мають kwalifikowany podpis або kwalifikowana pieczęć.",
        },
        {
          locator: "Przypisy 42–43",
          explanation:
            "Corpus позначає майбутнє uchylenie Art. 74a за зміною, що wejście w życie 1.10.2029; до цієї дати застосовується наведений чинний режим.",
        },
      ],
      legalEffect:
        "Art. 74a може визначити skuteczność електронного doręczenie та запустити строк, але потрібні конкретна підстава електронної доставки, належні повідомлення й UPO; майбутнє uchylenie не слід описувати як поточне.",
      foreignersCase:
        "Якщо cudzoziemiec подає електронну skarga або отримує pismo у справі pobyt, перевірте умову Art. 74a § 1, zawiadomienia, дату UPO чи 14-денну fikcja та збережіть оригінали системних підтверджень.",
    },
  ]),
})
