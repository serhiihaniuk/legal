import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-1",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.annex("1", "Załącznik nr 1")} є WZÓR FORMULARZA WNIOSKU O UDZIELENIE CUDZOZIEMCOWI ZEZWOLENIA NA POBYT CZASOWY; pouczenie вказує на подання через MOS, польську мову, обов’язкові rubryki, вибір одного cel pobytu, дані про особу, адресу, документ подорожі, перебування, фінанси, ubezpieczenie та інші зазначені в формі обставини.`,
          sourceLocator: "Załącznik nr 1, pouczenie pkt 1–18, części A–X",
        },
      ],
      summary:
        "Це wzór основної заяви на zezwolenie на pobyt czasowy. Він показує, які ідентифікаційні, адресні, процедурні та пов’язані з метою pobytu дані запитує formularz.",
      rules: [
        {
          locator: "pouczenie pkt 1–7",
          explanation:
            "Formularz передбачає електронне подання через Moduł Obsługi Spraw (MOS), заповнення польською, заповнення всіх потрібних rubryki та позначення «brak», коли даних або інформації немає; окремо пояснено дату народження, стан цивільний і документ подорожі.",
        },
        {
          locator: "pouczenie pkt 8–13",
          explanation:
            "Текст називає додатки для роботи, високих кваліфікацій, stażysty, wolontariusza, badań naukowych і studiów та передбачає їх електронне заповнення через MOS у відповідних випадках.",
        },
        {
          locator: "pouczenie pkt 14–18; części A–X",
          explanation:
            "Вказано вимоги до JPG-фото, цифрової копії документа подорожі, підпису та отримання urzędowe poświadczenie odbioru; поля форми охоплюють dane osobowe, адреси, cel pobytu, поточне перебування, закордонні поїздки, кошти, ubezpieczenie та запитання про окремі обставини.",
        },
      ],
      legalEffect: regulationLaw.text`${regulationLaw.annex("1", "Załącznik nr 1")} структурує подання та попереджає про процедурні наслідки brak formalny, але заповнений formularz сам по собі не доводить матеріальні умови zezwolenia і не гарантує позитивного рішення.`,
      foreignersCase:
        "Перед відправленням визначте один фактичний cel pobytu, заповніть польською всі потрібні поля, за відсутності даних використайте передбачене formularzem «brak» і додайте потрібний załącznik. Перевіряйте кожну заявлену обставину окремими доказами.",
    },
  ],
})
