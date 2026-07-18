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
      provisionId: "ustawa-o-cudzoziemcach-art-236",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Opłaty за ${foreignersLaw.article("235", "Art. 235")} ust. 1 не стягують за: видачу першої karty pobytu особі, яка в Польщі отримала status uchodźcy, ochronę uzupełniającą або zgodę na pobyt ze względów humanitarnych; першу kartę pobytu члену najbliższej rodziny repatrianta з zezwolenie na pobyt stały; kartę pobytu при zezwolenie na pobyt czasowy за ${foreignersLaw.article("186", "Art. 186")} ust. 1 pkt 8 або 9; першу kartę pobytu за ${foreignersLaw.article("195", "Art. 195")} ust. 1 pkt 10; документ із технічними вадами; urzędu виданий polski dokument tożsamości cudzoziemca неповнолітньому; tymczasowy polski dokument podróży для cudzoziemca relokowanego або przesiedlanego чи для przymusowe wykonanie decyzji про zobowiązanie do powrotu; wymianę karty pobytu за ${foreignersLaw.article("241", "Art. 241")} pkt 5 або 6; а також polski dokument podróży для cudzoziemca з громадянством, визначеним у rozporządzenie.`,
          sourceLocator: "Art. 236 ust. 1 pkt 1, 1a–1c, 3–7",
        },
        {
          kind: "statute-text",
          text: "Minister właściwy do spraw wewnętrznych може в drodze rozporządzenia визначити громадянства, за наявності яких не стягують opłata за видачу polski dokument podróży dla cudzoziemca, з урахуванням потреб польської міграційної політики, правової та фактичної ситуації таких cudzoziemców і інтересу Rzeczypospolitej Polskiej.",
          sourceLocator: "Art. 236 ust. 2",
        },
      ],
      summary: foreignersLaw.text`Стаття містить перелік випадків звільнення від opłata за документи з ${foreignersLaw.article("226", "Art. 226")} і делегує визначення окремих громадянств підзаконному акту.`,
      rules: [
        {
          locator: "ust. 1 pkt 1, 1a–1c",
          explanation:
            "Для звільнення щодо першої karty pobytu треба зіставити конкретний статус, вид zezwolenie та названу в статті підставу; pkt 2 позначений як uchylony.",
        },
        {
          locator: "ust. 1 pkt 3–7",
          explanation: foreignersLaw.text`Звільнення охоплюють технічні вади, urzędu виданий документ неповнолітньому, окремі випадки тимчасового документа, wymianę за ${foreignersLaw.article("241", "Art. 241")} pkt 5 або 6 та визначені rozporządzeniem громадянства.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Сам ${foreignersLaw.article("236", "Art. 236")} не називає громадянства для bezpłatny polski dokument podróży; їх може визначити minister у rozporządzenie з урахуванням названих критеріїв.`,
        },
      ],
      legalEffect: foreignersLaw.text`За наявності точної обставини з ${foreignersLaw.article("236", "Art. 236")} opłata за відповідну видачу або wymianę не стягується. Для громадянств у ust. 1 pkt 7 потрібна перевірка чинного rozporządzenie, бо стаття сама їх не перелічує.`,
      foreignersCase: foreignersLaw.text`Для кожної заяви позначте конкретний pkt ${foreignersLaw.article("236", "Art. 236")}, підтвердьте статус, вид документа, технічну ваду або підставу wymianę, а для pkt 7 перевірте застосовне rozporządzenie. Не поширюйте звільнення на випадки, яких у переліку немає.`,
    },
  ],
})
