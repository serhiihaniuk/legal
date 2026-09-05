import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"

const guide: DocumentGuide = {
  id: "digital-photo",
  title: "Цифрове фото для заяви",
  category: "identity",
  kind: "document",
  aliases: [],
  description:
    "Фото має відповідати вимогам конкретної заяви та дозволяти ідентифікувати заявника. Для електронного подання важливі і зображення, і параметри файла.",
  preparedBy: "Фотограф або заявник готує файл відповідно до офіційних вимог.",
  purpose: ["Надає зображення особи для заяви та документа."],
  doesNotProve: [
    "Не підтверджує особу окремо від документа подорожі й не замінює особисту дію, якщо вона потрібна.",
  ],
  keyChecks: [
    "Обрано вимоги саме для потрібного виду заяви.",
    "Зображення актуальне, обличчя не змінено ретушшю.",
    "Файл відповідає формату й параметрам приймання; це не фото паперової фотографії зі стороннім фоном.",
  ],
  relatedDocuments: ["passport", "mos-application"],
  sources: [
    {
      label: "MSWiA: вимоги до заяви та фото",
      url: "https://eli.gov.pl/eli/DU/2026/553/ogl",
      note: "Вимоги до фотографії та форми для pobytu czasowego.",
    },
  ],
  verifiedAt: "2026-09-05",
  explanation: [],
  formAndValidity: [
    "Параметри фотографії звіряйте з чинною формою та офіційними вимогами порталу. Не переносіть автоматично вимоги паперового пакета до цифрового файла.",
  ],
  legalBasis: [
    "Вимоги визначає розпорядження про форму заяви; офіційний текст наведено в джерелах.",
  ],
}

export const digitalPhotoDocumentTopic = defineDocumentTopic(guide)
export default digitalPhotoDocumentTopic
