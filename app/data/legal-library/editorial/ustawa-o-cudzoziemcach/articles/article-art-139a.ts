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
      provisionId: "ustawa-o-cudzoziemcach-art-139a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139a", "Art. 139a")} встановлює сукупні умови zezwolenia na pobyt czasowy для роботи в jednostka przyjmująca у рамках przeniesienia wewnątrz przedsiębiorstwa: для kadra kierownicza, specjalista або stażysta, з правилами щодо договору в ust. 1 pkt 2, стажу та доказу в ust. 4.`,
          sourceLocator:
            "Art. 139a ust. 1 pkt 1 lit. a–f, pkt 2 lit. a–d, ust. 2–4",
        },
      ],
      summary:
        "ICT-zezwolenie охоплює працівника kadry kierowniczej, спеціаліста або стажера та вимагає кваліфікацій, попередньої роботи, страхування, житла й документованих умов przeniesienia.",
      rules: [
        {
          locator: "ust. 1 pkt 1 lit. a–f",
          explanation:
            "Для kadra kierownicza або specjalista потрібні adekwatne kwalifikacje та досвід, для stażysta — диплом wyższe; для zawód regulowany — formalne kwalifikacje та інші умови (lit. a–b), безперервне zatrudnienie у підприємстві/групі 12 місяців або 6 місяців (lit. c), ubezpieczenie (lit. d), житло (lit. e) та можливість повернення до pracodawca macierzysty або групи поза ЄС (lit. f).",
        },
        {
          locator: "ust. 1 pkt 2 lit. a–d, ust. 2 pkt 1–3",
          explanation:
            "Письмовий договір або документ pracodawca macierzysty має містити строк przeniesienia (lit. a), siedziba jednostka przyjmująca (lit. b), stanowisko (lit. c), wynagrodzenie та інші умови роботи (lit. d); для стажера додатково потрібні програма, тривалість і нагляд (ust. 2 pkt 1–3).",
        },
        {
          locator: "ust. 3 pkt 1–3",
          explanation:
            "Wynagrodzenie має перевищувати поріг допомоги для cudzoziemca та утриманих членів сім’ї (pkt 1), бути не нижчим за wynagrodzenie порівнянної польської роботи (pkt 2) і не нижчим за 70% середньої місячної brutto-винагороди у województwo (pkt 3).",
        },
        {
          locator: "ust. 4",
          explanation: foreignersLaw.text`До документа, який підтверджує умову попередньої безперервної роботи з ust. 1 pkt 1 lit. c, не застосовується ${foreignersLaw.article("8", "art. 8")} ust. 2.`,
        },
      ],
      legalEffect:
        "Стаття вимагає сукупності умов; наявність przeniesienie між компаніями сама по собі не підтверджує право на zezwolenie.",
      foreignersCase:
        "Складіть матрицю доказів для ролі, попереднього стажу, договору, страховки, житла, повернення та кожного з трьох порогів wynagrodzenie.",
    },
  ],
})
