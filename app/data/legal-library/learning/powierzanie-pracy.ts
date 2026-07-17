import { defineLegalLearningCurriculum } from "./types"
import { legalStayWorkModuleTopic } from "./modules/powierzanie-pracy/legalny-pobyt-a-rynek-pracy"
import { uczestnicyIDefinicjeLearningModuleTopic } from "./modules/powierzanie-pracy/uczestnicy-i-definicje"
import { instrumentyDostepuLearningModuleTopic } from "./modules/powierzanie-pracy/instrumenty-dostepu"
import { obowiazkiPodmiotuLearningModuleTopic } from "./modules/powierzanie-pracy/obowiazki-podmiotu"
import { zmianyICiagloscLearningModuleTopic } from "./modules/powierzanie-pracy/zmiany-i-ciaglosc"
import { kontrolaISankcjeLearningModuleTopic } from "./modules/powierzanie-pracy/kontrola-i-sankcje"
import { outsourcingAPracaTymczasowaLearningModuleTopic } from "./modules/powierzanie-pracy/outsourcing-a-praca-tymczasowa"

export const workActLearningCurriculum = defineLegalLearningCurriculum({
  documentId: "powierzanie-pracy",
  title: "Повірення роботи cudzoziemcowi",
  description:
    "Сім модулів для перевірки доступу cudzoziemca до роботи: від pobyt і ролей учасників до документів, змін, контролю та фактичної моделі роботи.",
  modules: [
    legalStayWorkModuleTopic.body,
    uczestnicyIDefinicjeLearningModuleTopic.body,
    instrumentyDostepuLearningModuleTopic.body,
    obowiazkiPodmiotuLearningModuleTopic.body,
    zmianyICiagloscLearningModuleTopic.body,
    kontrolaISankcjeLearningModuleTopic.body,
    outsourcingAPracaTymczasowaLearningModuleTopic.body,
  ],
})
