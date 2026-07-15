import { createLegalTextAuthor, type LegalTextValue } from "../../legal-text"
import { defineEditorialPart } from "../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")

export const ppsaPart05 = defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-177",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skargę kasacyjną wnosi się do sądu, który wydał zaskarżony wyrok lub postanowienie, w terminie trzydziestu dni od doręczenia stronie odpisu orzeczenia z uzasadnieniem. Przepis określa też odrębny początek biegu terminu dla prokuratora, Rzecznika Praw Obywatelskich, Rzecznika Praw Dziecka oraz w kilku sytuacjach prawa pomocy.",
          sourceLocator: "Art. 177 § 1–6",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("177", "Art. 177")} wyznacza sąd właściwy do wniesienia skargi kasacyjnej i podstawowy trzydziestodniowy termin, z wyjątkami dotyczącymi określonych podmiotów i prawa pomocy.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Punktem wyjścia jest doręczenie odpisu orzeczenia z uzasadnieniem, a pismo wnosi się do sądu, który wydał zaskarżone orzeczenie.",
        },
        {
          locator: "§ 2–6",
          explanation:
            "Przy ustalaniu terminu trzeba sprawdzić, czy działa reguła dla organów ochrony prawnej, ustanowionego pełnomocnika z prawa pomocy, opinii o braku podstaw albo odmowy ustanowienia pełnomocnika.",
        },
      ],
      legalEffect:
        "Termin i jego początek wynikają z konkretnego sposobu doręczenia oraz sytuacji procesowej; sama data na orzeczeniu nie przesądza o jego rozpoczęciu.",
      foreignersCase:
        "W sprawie pobytowej ustal datę doręczenia odpisu z uzasadnieniem, status pełnomocnika i ewentualne postanowienie w sprawie prawa pomocy. Nie obliczaj terminu wyłącznie od daty wydania wyroku.",
    },
    {
      provisionId: "ppsa-art-177a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Jeżeli skarga kasacyjna nie spełnia wymagań ${ppsaLaw.article("176", "art. 176")} innych niż przytoczenie podstaw kasacyjnych i ich uzasadnienie, przewodniczący wzywa stronę do usunięcia braków w terminie siedmiu dni pod rygorem odrzucenia skargi.`,
          sourceLocator: "Art. 177a",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("177a", "Art. 177a")} pozwala uzupełnić wskazane wymagania formalne skargi kasacyjnej, ale wyłącza z tego wezwania same podstawy kasacyjne i ich uzasadnienie.`,
      rules: [
        {
          locator: "Art. 177a",
          explanation: ppsaLaw.text`Wezwanie dotyczy wymagań ${ppsaLaw.article("176", "art. 176")} innych niż podstawy kasacyjne i ich uzasadnienie; termin na reakcję wynosi siedem dni i ma określony rygor.`,
        },
      ],
      legalEffect:
        "Niewykonanie prawidłowego wezwania w terminie może doprowadzić do odrzucenia skargi kasacyjnej; przepis nie otwiera drogi do późniejszego uzupełniania podstaw kasacyjnych.",
      foreignersCase:
        "Po doręczeniu wezwania w sprawie pobytowej zapisz jego zakres i datę doręczenia. Uzupełniaj tylko wskazane braki, nie przedstawiając nowych podstaw kasacyjnych jako poprawy formy.",
    },
    {
      provisionId: "ppsa-art-178",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Wojewódzki sąd administracyjny na posiedzeniu niejawnym odrzuca skargę kasacyjną wniesioną po terminie lub z innych przyczyn niedopuszczalną, a także skargę, której braków strona nie uzupełniła w wyznaczonym terminie.",
          sourceLocator: "Art. 178",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("178", "Art. 178")} reguluje odrzucenie skargi kasacyjnej przez WSA z powodu spóźnienia, niedopuszczalności albo nieusunięcia braków.`,
      rules: [
        {
          locator: "Art. 178",
          explanation:
            "Sąd bada przesłanki formalne przed przekazaniem skargi kasacyjnej; przepis wskazuje trzy grupy przyczyn odrzucenia.",
        },
      ],
      legalEffect:
        "Odrzucenie kończy bieg tej skargi kasacyjnej bez rozpoznania jej podstaw; przed oceną skutku trzeba sprawdzić doręczenia, dopuszczalność i wykonanie wezwania.",
      foreignersCase:
        "W sprawie o pobyt odróżnij odrzucenie kasacji przez WSA od oddalenia jej przez NSA co do podstaw. Zabezpiecz dowody doręczenia i uzupełnienia braków.",
    },
    {
      provisionId: "ppsa-art-178a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "WSA na posiedzeniu niejawnym umarza postępowanie kasacyjne, jeżeli strona skutecznie cofnęła skargę kasacyjną przed przedstawieniem jej wraz z aktami sprawy NSA. Na postanowienie przysługuje zażalenie.",
          sourceLocator: "Art. 178a",
        },
      ],
      summary:
        "Skuteczne cofnięcie skargi kasacyjnej przed przekazaniem jej z aktami do NSA prowadzi do umorzenia postępowania kasacyjnego.",
      rules: [
        {
          locator: "Art. 178a",
          explanation:
            "Trzeba łącznie ustalić skuteczność cofnięcia i moment przed przedstawieniem skargi z aktami NSA; przepis przewiduje posiedzenie niejawne.",
        },
      ],
      legalEffect:
        "Umorzenie dotyczy tego postępowania kasacyjnego i nie jest merytorycznym rozstrzygnięciem prawa do pobytu; na postanowienie ustawa daje zażalenie.",
      foreignersCase:
        "Jeżeli w sprawie pobytowej rozważasz cofnięcie kasacji, ustal w aktach, czy WSA nie przedstawił jej już NSA. Przeczytaj także pouczenie o zażaleniu na postanowienie.",
    },
    {
      provisionId: "ppsa-art-179",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Strona, która nie wniosła skargi kasacyjnej, może wnieść do WSA odpowiedź na skargę w terminie czternastu dni od jej doręczenia. Po upływie tego terminu albo po zarządzeniu doręczenia odpowiedzi wnoszącemu skargę WSA niezwłocznie przedstawia skargę, odpowiedź i akta NSA.",
          sourceLocator: "Art. 179",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("179", "Art. 179")} daje stronie niekasującej czternaście dni na odpowiedź i określa moment przekazania materiałów do NSA.`,
      rules: [
        {
          locator: "Art. 179",
          explanation:
            "Termin odpowiedzi biegnie od jej doręczenia stronie, która nie wniosła skargi kasacyjnej; potem WSA przekazuje skargę wraz z odpowiedzią i aktami.",
        },
      ],
      legalEffect:
        "Odpowiedź jest możliwością przedstawienia stanowiska przed przekazaniem sprawy NSA, a nie odrębną skargą kasacyjną. Brak odpowiedzi nie zatrzymuje przewidzianego przekazania.",
      foreignersCase:
        "W sporze o decyzję pobytową ustal datę doręczenia kasacji każdej stronie i czternastodniowy termin na odpowiedź. Treść odpowiedzi powinna odnosić się do konkretnych podstaw kasacyjnych.",
    },
    {
      provisionId: "ppsa-art-179a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Jeżeli przed przedstawieniem skargi kasacyjnej NSA WSA stwierdzi nieważność postępowania albo oczywiste usprawiedliwienie podstaw kasacyjnych, uchyla zaskarżony wyrok lub postanowienie, na wniosek strony rozstrzyga także o zwrocie kosztów postępowania kasacyjnego i na tym samym posiedzeniu ponownie rozpoznaje sprawę. Od tego orzeczenia przysługuje skarga kasacyjna.",
          sourceLocator: "Art. 179a",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("179a", "Art. 179a")} pozwala WSA na samokontrolę przed przekazaniem kasacji NSA w razie nieważności albo oczywiście usprawiedliwionych podstaw kasacyjnych.`,
      rules: [
        {
          locator: "Art. 179a",
          explanation:
            "Warunkiem jest chwila przed przedstawieniem kasacji NSA oraz jedna z dwóch przesłanek. WSA uchyla orzeczenie i od razu ponownie rozpoznaje sprawę.",
        },
      ],
      legalEffect:
        "Mechanizm może zmienić zaskarżone orzeczenie jeszcze w WSA, ale nie oznacza automatycznego uwzględnienia skargi administracyjnej ani przyznania pobytu.",
      foreignersCase:
        "W kasacji dotyczącej pobytu sprawdź, czy akta nie zostały jeszcze przedstawione NSA. Jeżeli WSA wyda nowe orzeczenie, oceniaj je jako nowe rozstrzygnięcie z własnym środkiem zaskarżenia.",
    },
    {
      provisionId: "ppsa-art-180",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA na posiedzeniu niejawnym odrzuca skargę kasacyjną, jeżeli podlegała ona odrzuceniu przez WSA, albo zwraca ją temu sądowi w celu usunięcia dostrzeżonych braków.",
          sourceLocator: "Art. 180",
        },
      ],
      summary:
        "NSA może sam odrzucić kasację, która powinna zostać odrzucona w WSA, albo zwrócić ją WSA do usunięcia dostrzeżonych braków.",
      rules: [
        {
          locator: "Art. 180",
          explanation:
            "Przepis dotyczy kontroli formalnej i nie jest jeszcze rozpoznaniem podstaw kasacyjnych co do meritum.",
        },
      ],
      legalEffect:
        "Samo przedstawienie kasacji NSA nie gwarantuje jej merytorycznego rozpoznania; dalszy bieg zależy od wyniku tej kontroli.",
      foreignersCase:
        "W sprawie pobytowej ustal, czy NSA wydał postanowienie o odrzuceniu, czy zwrócił kasację WSA do usunięcia braków. To inna sytuacja niż ocena legalności decyzji pobytowej.",
    },
    {
      provisionId: "ppsa-art-181",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA rozpoznaje skargę kasacyjną na rozprawie w składzie trzech sędziów, chyba że przepis szczególny stanowi inaczej. Od wyroku wydaje wyrok, a od postanowienia — postanowienie.",
          sourceLocator: "Art. 181 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("181", "Art. 181")} określa zasadniczy skład NSA i formę orzeczenia zależną od rodzaju zaskarżonego orzeczenia.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Regułą jest rozprawa w składzie trzech sędziów, z zastrzeżeniem przepisu szczególnego.",
        },
        {
          locator: "§ 2",
          explanation:
            "Kasacja od wyroku kończy się wyrokiem NSA, a kasacja od postanowienia — postanowieniem NSA.",
        },
      ],
      legalEffect:
        "Przepis opisuje formę i skład rozpoznania, nie przesądza wyniku kasacji ani materialnego prawa strony.",
      foreignersCase:
        "W aktach sprawy o pobyt odróżnij wyrok NSA od postanowienia NSA i przeczytaj sentencję oraz uzasadnienie, zamiast wywodzić wynik z samej nazwy dokumentu.",
    },
    {
      provisionId: "ppsa-art-182",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`NSA może rozpoznać na posiedzeniu niejawnym kasację od kończącego postępowanie postanowienia WSA. Rozpoznaje ją tak także po zrzeczeniu się rozprawy przez wnoszącego, gdy pozostałe strony w czternastu dniach od doręczenia kasacji nie zażądały rozprawy, oraz w kasacji od wyroku WSA oddalającego sprzeciw od decyzji lub postanowienia. Na posiedzeniu niejawnym orzeka jeden sędzia, a w przypadku z ${ppsaLaw.article("182", "§ 2")} — trzech.`,
          sourceLocator: "Art. 182 § 1–3",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("182", "Art. 182")} wskazuje trzy sytuacje rozpoznania kasacji bez rozprawy i wiąże z nimi skład NSA.`,
      rules: [
        {
          locator: "§ 1–2a",
          explanation:
            "Sprawdź rodzaj kończącego postępowanie postanowienia, zrzeczenie się rozprawy i czternastodniowy brak żądania rozprawy albo sprawę sprzeciwu od decyzji lub postanowienia.",
        },
        {
          locator: "§ 3",
          explanation: ppsaLaw.text`Na posiedzeniu niejawnym skład jednego sędziego jest regułą, lecz przy ${ppsaLaw.article("182", "§ 2")} ustawa wymaga trzech sędziów.`,
        },
      ],
      legalEffect:
        "Posiedzenie niejawne jest ustawowym trybem rozpoznania w określonych sytuacjach i samo w sobie nie oznacza braku kontroli sądowej.",
      foreignersCase: ppsaLaw.text`W sprawie pobytowej ustal, czy kasacja dotyczy kończącego postępowanie postanowienia, sprawy sprzeciwu, czy zrzeczenia się rozprawy. Nie zakładaj rozprawy, gdy działa ${ppsaLaw.article("182", "§ 2")} albo ${ppsaLaw.article("182", "§ 2a")}.`,
    },
    {
      provisionId: "ppsa-art-182a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA rozpoznaje skargę kasacyjną od wyroku WSA oddalającego sprzeciw od decyzji lub sprzeciw od postanowienia w terminie trzydziestu dni od dnia wpływu.",
          sourceLocator: "Art. 182a",
        },
      ],
      summary:
        "Dla kasacji od wyroku WSA oddalającego sprzeciw ustawa wskazuje trzydziestodniowy termin rozpoznania liczony od wpływu do NSA.",
      rules: [
        {
          locator: "Art. 182a",
          explanation:
            "Termin dotyczy rozpoznania przez NSA i biegnie od wpływu kasacji do tego sądu, nie od jej sporządzenia ani wysłania.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("182a", "Art. 182a")} określa termin działania sądu w tej kategorii spraw; nie przedłuża ani nie zastępuje terminu wniesienia kasacji z ${ppsaLaw.article("177", "art. 177")}.`,
      foreignersCase:
        "Jeżeli sprawa pobytowa dotyczy sprzeciwu od decyzji lub postanowienia, odnotuj osobno datę wniesienia kasacji i datę jej wpływu do NSA.",
    },
    {
      provisionId: "ppsa-art-183",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`NSA rozpoznaje sprawę w granicach skargi kasacyjnej, lecz z urzędu bierze pod rozwagę nieważność postępowania; strony mogą przytaczać nowe uzasadnienie podstaw kasacyjnych. ${ppsaLaw.article("183", "§ 2")} wymienia sześć przypadków nieważności, w tym niedopuszczalność drogi sądowej, brak zdolności lub umocowania, wcześniejsze postępowanie albo prawomocne osądzenie, wadliwy skład, pozbawienie obrony praw oraz orzekanie przez WSA w sprawie właściwej dla NSA.`,
          sourceLocator: "Art. 183 § 1–2",
        },
      ],
      summary: ppsaLaw.text`Zakres kasacji wyznacza skarga, ale nieważność postępowania NSA bada z urzędu w zamkniętym katalogu ${ppsaLaw.article("183", "art. 183 § 2")}.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Nowe uzasadnienie może rozwijać już przytoczone podstawy kasacyjne; przepis nie pozwala przez samo uzasadnienie dowolnie dodać nowej podstawy.",
        },
        {
          locator: "§ 2 pkt 1–6",
          explanation:
            "Każdy zarzut nieważności trzeba porównać z konkretnym punktem katalogu, a nie z każdą niekorzystną czynnością procesową.",
        },
      ],
      legalEffect:
        "Nieważność może być uwzględniona bez osobnego zarzutu, lecz zwykłe uchybienie procesowe nie staje się przez to nieważnością.",
      foreignersCase:
        "W kasacji dotyczącej pobytu odróżnij nowe uzasadnienie istniejącej podstawy od nowej podstawy. Kwestie reprezentacji, składu i możliwości obrony oceniaj na podstawie akt, nie samego poczucia niesprawiedliwości.",
    },
    {
      provisionId: "ppsa-art-184",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA oddala skargę kasacyjną, jeżeli nie ma ona usprawiedliwionych podstaw albo jeżeli zaskarżone orzeczenie, mimo błędnego uzasadnienia, odpowiada prawu.",
          sourceLocator: "Art. 184",
        },
      ],
      summary:
        "Błędne uzasadnienie nie wystarcza do uchylenia orzeczenia, jeżeli sam wynik odpowiada prawu i kasacja nie ma usprawiedliwionych podstaw.",
      rules: [
        {
          locator: "Art. 184",
          explanation:
            "Analizuj oddzielnie zarzuty wobec wyniku orzeczenia i zarzuty wobec uzasadnienia; ustawowy skutek zależy od obu przesłanek wskazanych w przepisie.",
        },
      ],
      legalEffect:
        "Oddalenie pozostawia zaskarżone orzeczenie w mocy; nie oznacza, że każde uchybienie uzasadnienia jest prawnie obojętne w każdej sprawie.",
      foreignersCase:
        "W kasacji od wyroku WSA w sprawie pobytowej pokaż wpływ błędu na prawidłowość rozstrzygnięcia, a nie tylko niezadowolenie z języka uzasadnienia.",
    },
    {
      provisionId: "ppsa-art-185",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "W razie uwzględnienia skargi kasacyjnej NSA uchyla zaskarżone orzeczenie w całości lub części i przekazuje sprawę do ponownego rozpoznania sądowi, który je wydał, a gdy ten nie może rozpoznać sprawy w innym składzie — innemu sądowi. Sąd rozpoznaje sprawę ponownie w innym składzie.",
          sourceLocator: "Art. 185 § 1–2",
        },
      ],
      summary:
        "Typowym skutkiem uwzględnienia kasacji jest uchylenie i przekazanie sprawy do ponownego rozpoznania w innym składzie.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "NSA określa zakres uchylenia i sąd, do którego wraca sprawa; inny sąd jest przewidziany, gdy właściwy nie może orzekać w innym składzie.",
        },
        {
          locator: "§ 2",
          explanation:
            "Przy przekazaniu ponowne rozpoznanie musi nastąpić w innym składzie sądu.",
        },
      ],
      legalEffect:
        "Uchylenie i przekazanie otwiera ponowne rozpoznanie sądowe, ale samo nie zmienia automatycznie decyzji organu ani nie przyznaje pobytu.",
      foreignersCase:
        "Po wygranej kasacji w sprawie pobytowej przygotuj się na ponowne rozpoznanie przez WSA. Sprawdź zakres wskazany w sentencji, zamiast traktować ją jako końcową decyzję administracyjną.",
    },
    {
      provisionId: "ppsa-art-186",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Rozpoznając skargę kasacyjną, NSA uchyla wyrok także w części niezaskarżonej, jeżeli zachodzi nieważność postępowania.",
          sourceLocator: "Art. 186",
        },
      ],
      summary:
        "Nieważność postępowania może rozszerzyć uchylenie wyroku NSA na niezaskarżoną jego część.",
      rules: [
        {
          locator: "Art. 186",
          explanation:
            "Warunkiem odstępstwa od granic zaskarżenia jest nieważność postępowania; sama niezgoda z niezaskarżoną częścią nie wystarcza.",
        },
      ],
      legalEffect:
        "Przepis może zwiększyć zakres uchylenia, ale nie ustanawia ogólnego prawa NSA do ponownego badania każdej niezaskarżonej części.",
      foreignersCase:
        "Jeśli wyrok w sprawie pobytowej ma kilka części, sprawdź, czy ustalona nieważność rzeczywiście obejmuje część niezaskarżoną.",
    },
    {
      provisionId: "ppsa-art-187",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Gdy przy rozpoznawaniu kasacji powstanie zagadnienie prawne budzące poważne wątpliwości, NSA może odroczyć sprawę i przedstawić je składowi siedmiu sędziów. Uchwała tego składu wiąże w danej sprawie, a skład siedmiu sędziów może przejąć sprawę do rozpoznania.",
          sourceLocator: "Art. 187 § 1–3",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("187", "Art. 187")} ustanawia mechanizm przekazania poważnie wątpliwego zagadnienia prawnego składowi siedmiu sędziów NSA.`,
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "To NSA ocenia, czy zagadnienie budzi poważne wątpliwości; przyjęta uchwała wiąże sąd w tej konkretnej sprawie.",
        },
        {
          locator: "§ 3",
          explanation:
            "Skład siedmiu sędziów może przejąć całą sprawę do rozpoznania, co nie oznacza z góry określonego wyniku.",
        },
      ],
      legalEffect: ppsaLaw.text`Uchwała porządkuje rozstrzygnięcie zagadnienia w danej sprawie, ale ${ppsaLaw.article("187", "art. 187")} nie przesądza o prawie do pobytu ani o wyniku kasacji.`,
      foreignersCase:
        "W powtarzalnym sporze pobytowym sprawdź, czy NSA przekazał konkretne zagadnienie składowi siedmiu sędziów i jaki zakres ma uchwała w tej sprawie.",
    },
    {
      provisionId: "ppsa-art-188",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA, uwzględniając skargę kasacyjną i uchylając zaskarżone orzeczenie, rozpoznaje skargę, jeżeli uzna, że istota sprawy jest dostatecznie wyjaśniona.",
          sourceLocator: "Art. 188",
        },
      ],
      summary:
        "Jeżeli po uchyleniu orzeczenia istota sprawy jest dostatecznie wyjaśniona, NSA może sam rozpoznać skargę zamiast przekazywać ją do WSA.",
      rules: [
        {
          locator: "Art. 188",
          explanation:
            "Najpierw musi dojść do uwzględnienia kasacji i uchylenia orzeczenia; dopiero potem NSA ocenia dostateczne wyjaśnienie istoty sprawy.",
        },
      ],
      legalEffect:
        "Przepis daje NSA możliwość bezpośredniego rozpoznania skargi, lecz nie nakazuje tego w każdej sprawie i nie gwarantuje korzystnego rozstrzygnięcia administracyjnego.",
      foreignersCase:
        "W kasacji dotyczącej odmowy pobytu nie zakładaj automatycznego przyznania statusu. Sprawdź, czy z akt wynika dostatecznie wyjaśniona istota sprawy.",
    },
    {
      provisionId: "ppsa-art-189",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Jeżeli skarga podlegała odrzuceniu albo przed WSA istniały podstawy do umorzenia postępowania, NSA postanowieniem uchyla wydane orzeczenie oraz odrzuca skargę albo umarza postępowanie.",
          sourceLocator: "Art. 189",
        },
      ],
      summary:
        "NSA może usunąć orzeczenie WSA wydane w sprawie, która już na etapie WSA powinna zostać odrzucona albo umorzona.",
      rules: [
        {
          locator: "Art. 189",
          explanation:
            "Badaj istnienie przesłanki odrzucenia lub umorzenia przed WSA, nie tylko poprawność merytorycznego uzasadnienia jego orzeczenia.",
        },
      ],
      legalEffect:
        "Skutek ma formę postanowienia i kończy sprawę przez odrzucenie skargi albo umorzenie; nie jest rozstrzygnięciem materialnego prawa do pobytu.",
      foreignersCase:
        "W sprawie pobytowej sprawdź, czy skarga nie była bezprzedmiotowa lub niedopuszczalna już przed WSA, nawet jeśli WSA przeszedł do argumentacji merytorycznej.",
    },
    {
      provisionId: "ppsa-art-190",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd, któremu przekazano sprawę, jest związany wykładnią prawa dokonaną w tej sprawie przez NSA. Nie można oprzeć kolejnej skargi kasacyjnej od orzeczenia po ponownym rozpoznaniu na podstawach sprzecznych z tą wykładnią.",
          sourceLocator: "Art. 190",
        },
      ],
      summary:
        "Po przekazaniu sprawy wykładnia prawa NSA wiąże sąd ponownie rozpoznający i ogranicza sprzeczne podstawy kolejnej kasacji.",
      rules: [
        {
          locator: "Art. 190",
          explanation:
            "Związanie dotyczy sprawy przekazanej i wykładni ustalonej w tej sprawie; nie zastępuje sądu w ocenie faktów w granicach ponownego rozpoznania.",
        },
      ],
      legalEffect:
        "Przepis wyznacza prawne ramy ponownego rozpoznania, ale nie rozstrzyga samodzielnie wszystkich dowodów ani końcowego wyniku sprawy.",
      foreignersCase:
        "Po uchyleniu wyroku w sprawie pobytowej porównaj nowe orzeczenie WSA z wykładnią NSA. Kolejną kasację buduj bez tezy sprzecznej z tą wykładnią.",
    },
    {
      provisionId: "ppsa-art-191",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Na wniosek strony NSA rozpoznaje także te postanowienia WSA, które nie podlegały zaskarżeniu zażaleniem, ale miały wpływ na rozstrzygnięcie sprawy.",
          sourceLocator: "Art. 191",
        },
      ],
      summary:
        "Niektóre niezaskarżalne odrębnie postanowienia WSA mogą zostać zbadane w kasacji, jeżeli wpłynęły na rozstrzygnięcie sprawy.",
      rules: [
        {
          locator: "Art. 191",
          explanation:
            "Potrzebne są zarówno wniosek strony, jak i wykazanie wpływu postanowienia na wynik; przepis nie tworzy odrębnego zażalenia.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("191", "Art. 191")} rozszerza przedmiot kontroli w konkretnej kasacji, ale nie czyni każdego postanowienia samodzielnie zaskarżalnym.`,
      foreignersCase:
        "Jeśli postanowienie w sprawie pobytowej nie miało własnego zażalenia, wskaż w kasacji jego konkretny wpływ na wyrok, zamiast poprzestać na samej krytyce czynności.",
    },
    {
      provisionId: "ppsa-art-192",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Z wyjątkiem przypadków określonych w ${ppsaLaw.article("123", "art. 123")}–${ppsaLaw.article("125", "125")} postępowanie przed NSA ulega zawieszeniu jedynie na zgodny wniosek stron.`,
          sourceLocator: "Art. 192",
        },
      ],
      summary: ppsaLaw.text`Na etapie NSA dobrowolne zawieszenie postępowania wymaga zgodnego wniosku wszystkich stron, z wyjątkiem ${ppsaLaw.article("123", "art. 123")}–${ppsaLaw.article("125", "125")}.`,
      rules: [
        {
          locator: "Art. 192",
          explanation:
            "Jednostronny wniosek nie spełnia tej ogólnej przesłanki; najpierw sprawdź, czy zachodzi jeden z ustawowych wyjątków.",
        },
      ],
      legalEffect: ppsaLaw.text`Przepis ogranicza zawieszenie na zgodny wniosek w NSA, ale nie zastępuje analizy szczególnych podstaw zawieszenia z ${ppsaLaw.article("123", "art. 123")}–${ppsaLaw.article("125", "125")}.`,
      foreignersCase:
        "Jeżeli chcesz odroczyć kasację do czasu innej sprawy pobytowej, ustal, czy wszystkie strony złożą zgodny wniosek albo czy działa wyjątek ustawowy.",
    },
    {
      provisionId: "ppsa-art-193",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Jeżeli brak szczególnych przepisów postępowania przed NSA, odpowiednio stosuje się przepisy postępowania przed WSA. NSA z urzędu uzasadnia wyroki i postanowienia w terminie trzydziestu dni, a uzasadnienie wyroku oddalającego skargę kasacyjną zawiera ocenę jej zarzutów.",
          sourceLocator: "Art. 193",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("193", "Art. 193")} jest regułą odpowiedniego stosowania przepisów WSA i nakłada na NSA szczególny obowiązek uzasadnienia orzeczeń.`,
      rules: [
        {
          locator: "Art. 193",
          explanation:
            "Najpierw szukaj przepisu szczególnego dla NSA; dopiero przy jego braku stosuj regulację WSA odpowiednio, a nie mechanicznie.",
        },
        {
          locator: "Art. 193 zdanie drugie",
          explanation:
            "NSA uzasadnia z urzędu wyroki i postanowienia w trzydzieści dni, a przy oddaleniu kasacji uzasadnienie ma oceniać jej zarzuty.",
        },
      ],
      legalEffect:
        "Przepis pomaga określić tryb NSA, lecz nie tworzy samodzielnie podstawy do uwzględnienia kasacji ani nie zastępuje oceny konkretnego uzasadnienia.",
      foreignersCase:
        "Po otrzymaniu orzeczenia NSA w sprawie pobytowej sprawdź, czy uzasadnienie oddalenia odnosi się do zarzutów faktycznie sformułowanych w kasacji.",
    },
    {
      provisionId: "ppsa-art-194",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Zażalenie do NSA przysługuje na postanowienia WSA w przypadkach przewidzianych w ustawie oraz na wskazane w ${ppsaLaw.article("194", "art. 194")} przedmioty, m.in. przekazanie sprawy, odrzucenie skargi w ${ppsaLaw.article("58", "art. 58 § 1")} pkt 2–4 i ${ppsaLaw.article("220", "art. 220 § 3")}, umorzenie, wstrzymanie wykonania, odmowę uzasadnienia, sprostowanie lub wykładnię, uzupełnienie wyroku, wyłączenie sędziego, odrzucenie skargi kasacyjnej lub zażalenia, zwrot kosztów i ukaranie grzywną. ${ppsaLaw.article("194", "§ 1")} pkt 3 jest uchylony.`,
          sourceLocator: "Art. 194 § 1 pkt 1, 1a–10, § 2–4",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("194", "Art. 194")} zawiera zamknięty katalog wskazanych postanowień WSA, na które przysługuje zażalenie do NSA, oraz określa termin i wymagania pisma.`,
      rules: [
        {
          locator: "§ 1 pkt 1, 1a–2, 3 (uchylony), 4–10",
          explanation:
            "Porównaj przedmiot postanowienia z konkretną pozycją katalogu; uchylony pkt 3 nie jest czynną podstawą zażalenia.",
        },
        {
          locator: "§ 2–4",
          explanation:
            "Zażalenie wnosi się w siedem dni od doręczenia, wskazuje postanowienie, żądanie i zwięzłe uzasadnienie; odrzucenie skargi kasacyjnej wymaga adwokata lub radcy prawnego.",
        },
      ],
      legalEffect:
        "Samo nazwanie dokumentu postanowieniem nie tworzy prawa do zażalenia; trzeba znaleźć ustawową kategorię, zachować termin i spełnić wymagania formy.",
      foreignersCase: ppsaLaw.text`W sprawie pobytowej odczytaj przedmiot postanowienia i pouczenie, a następnie porównaj je z czynnym katalogiem ${ppsaLaw.article("194", "art. 194")}. Przy odrzuceniu kasacji uwzględnij wymóg profesjonalnego sporządzenia.`,
    },
    {
      provisionId: "ppsa-art-195",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "WSA przedstawia NSA akta wraz z zażaleniem po doręczeniu go pozostałym stronom; odpowiedź można wnieść bezpośrednio do NSA w siedem dni od doręczenia zażalenia. Przed przekazaniem akt WSA może na posiedzeniu niejawnym uchylić postanowienie przy nieważności lub oczywistym uzasadnieniu zażalenia, a gdy postępowanie zażaleniowe stało się bezprzedmiotowe — umorzyć je; na wskazane postanowienia przysługuje zażalenie.",
          sourceLocator: "Art. 195 § 1–3",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("195", "Art. 195")} reguluje doręczenie i przekazanie zażalenia, samokontrolę WSA oraz umorzenie bezprzedmiotowego postępowania zażaleniowego przed przekazaniem akt.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Akta idą do NSA po doręczeniu zażalenia pozostałym stronom, a odpowiedź ma siedmiodniowy termin i może trafić wprost do NSA.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Sprawdź, czy przed przedstawieniem akt zachodzi nieważność, oczywiste uzasadnienie albo bezprzedmiotowość postępowania zażaleniowego.",
        },
      ],
      legalEffect: ppsaLaw.text`Zażalenie może zostać rozstrzygnięte jeszcze przez WSA, lecz tylko przy przesłankach z ${ppsaLaw.article("195", "§ 2–3")}; sama odpowiedź strony nie przesądza dalszego wyniku.`,
      foreignersCase:
        "W sprawie pobytowej pilnuj doręczenia zażalenia wszystkim stronom i siedmiodniowego terminu odpowiedzi. Sprawdź także, czy WSA nie skorzystał z samokontroli przed przekazaniem akt.",
    },
    {
      provisionId: "ppsa-art-196",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "WSA może wstrzymać wykonanie zaskarżonego postanowienia do czasu rozstrzygnięcia zażalenia; takie postanowienie może zapaść na posiedzeniu niejawnym.",
          sourceLocator: "Art. 196",
        },
      ],
      summary:
        "Złożenie zażalenia nie wstrzymuje samo przez się wykonania postanowienia; WSA może zrobić to osobnym postanowieniem.",
      rules: [
        {
          locator: "Art. 196",
          explanation:
            "Wstrzymanie jest kompetencją WSA do czasu rozpoznania zażalenia i może być rozstrzygnięte bez rozprawy.",
        },
      ],
      legalEffect:
        "Dopóki WSA nie wstrzyma wykonania, zaskarżone postanowienie nie jest automatycznie zawieszone przez samo wniesienie zażalenia.",
      foreignersCase:
        "Jeżeli wykonanie postanowienia może wpłynąć na dokumenty lub status cudzoziemca, rozważ osobny wniosek o wstrzymanie i nie zakładaj skutku automatycznego.",
    },
    {
      provisionId: "ppsa-art-197",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`NSA rozpoznaje zażalenie na posiedzeniu niejawnym. Do postępowania wywołanego zażaleniem odpowiednio stosuje się przepisy o skardze kasacyjnej, z wyłączeniem ${ppsaLaw.article("185", "art. 185 § 2")}.`,
          sourceLocator: "Art. 197 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("197", "Art. 197")} ustanawia niejawny tryb rozpoznania zażalenia i odpowiednie odesłanie do reguł skargi kasacyjnej z jednym wyłączeniem.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Trybem rozpoznania zażalenia przez NSA jest posiedzenie niejawne.",
        },
        {
          locator: "§ 2",
          explanation: ppsaLaw.text`Przepisy kasacyjne stosuje się odpowiednio, a ${ppsaLaw.article("185", "art. 185 § 2")} o innym składzie przy ponownym rozpoznaniu jest wyłączony.`,
        },
      ],
      legalEffect:
        "Odesłanie wymaga dopasowania reguły kasacyjnej do charakteru zażalenia; nie oznacza automatycznego przeniesienia każdego skutku kasacji.",
      foreignersCase:
        "W zażaleniu dotyczącym postanowienia WSA w sprawie pobytowej przedstaw pisemne, konkretne argumenty, bo ustawa nie przewiduje tu obowiązkowej rozprawy.",
    },
    {
      provisionId: "ppsa-art-198",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Przepisy działu o zażaleniu stosuje się odpowiednio do zażaleń na zarządzenia przewodniczącego, jeżeli ustawa przewiduje wniesienie zażalenia.",
          sourceLocator: "Art. 198",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("198", "Art. 198")} nie tworzy ogólnego zażalenia na każde zarządzenie przewodniczącego; odsyła do tego działu tylko wtedy, gdy ustawa przewiduje taki środek.`,
      rules: [
        {
          locator: "Art. 198",
          explanation:
            "Najpierw znajdź szczególny przepis otwierający zażalenie na dane zarządzenie, a dopiero potem stosuj reguły działu odpowiednio.",
        },
      ],
      legalEffect:
        "Przepis jest odesłaniem proceduralnym i samodzielnie nie przesądza dopuszczalności zażalenia na konkretne zarządzenie.",
      foreignersCase:
        "Jeśli w sprawie pobytowej kwestionujesz zarządzenie przewodniczącego, wskaż konkretną podstawę ustawową zażalenia przed obliczaniem terminu.",
    },
    {
      provisionId: "ppsa-art-199",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Strony ponoszą koszty postępowania związane ze swoim udziałem w sprawie, chyba że przepis szczególny stanowi inaczej.",
          sourceLocator: "Art. 199",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("199", "Art. 199")} ustanawia zasadę ponoszenia własnych kosztów udziału, z zastrzeżeniem szczególnych reguł o ich zwrocie lub rozdziale.`,
      rules: [
        {
          locator: "Art. 199",
          explanation:
            "Oddziel koszty poniesione przez stronę od ewentualnego zwrotu zasądzonego na podstawie dalszych przepisów działu V.",
        },
      ],
      legalEffect:
        "Przepis nie ustala samodzielnie, kto ostatecznie otrzyma zwrot ani jaka będzie jego kwota; trzeba sprawdzić wynik sprawy i przepisy szczególne.",
      foreignersCase:
        "Planując skargę na decyzję pobytową, uwzględnij własne opłaty, tłumaczenia i pełnomocnika niezależnie od późniejszego rozstrzygnięcia o zwrocie.",
    },
    {
      provisionId: "ppsa-art-200",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "W razie uwzględnienia skargi przez sąd pierwszej instancji skarżącemu przysługuje od organu, który wydał zaskarżony akt, podjął czynność, dopuścił się bezczynności lub przewlekłego prowadzenia postępowania, zwrot niezbędnych kosztów do celowego dochodzenia praw.",
          sourceLocator: "Art. 200",
        },
      ],
      summary:
        "Uwzględnienie skargi przez sąd pierwszej instancji może dać skarżącemu prawo do zwrotu niezbędnych kosztów od właściwego organu.",
      rules: [
        {
          locator: "Art. 200",
          explanation:
            "Przepis obejmuje zaskarżony akt, czynność, bezczynność i przewlekłe prowadzenie postępowania; zakres zwrotu dotyczy kosztów niezbędnych do celowego dochodzenia praw.",
        },
      ],
      legalEffect:
        "Uwzględnienie skargi tworzy ustawową podstawę zwrotu, ale nie oznacza automatycznej refundacji każdej faktycznie poniesionej kwoty.",
      foreignersCase:
        "Po wygraniu skargi dotyczącej pobytu zachowaj dowody niezbędnych kosztów i sprawdź, czy wniosek o ich zwrot został zgłoszony w wymaganym czasie.",
    },
    {
      provisionId: "ppsa-art-201",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Zwrot kosztów przysługuje skarżącemu od organu także przy umorzeniu postępowania z przyczyny określonej w ${ppsaLaw.article("54", "art. 54 § 3")}. Przy umorzeniu w przypadku ${ppsaLaw.article("118", "art. 118 § 2")} ${ppsaLaw.article("206", "art. 206")} stosuje się odpowiednio.`,
          sourceLocator: "Art. 201 § 1–2",
        },
      ],
      summary: ppsaLaw.text`Nie każde umorzenie ma taki sam skutek kosztowy: ${ppsaLaw.article("201", "art. 201")} wskazuje dwa szczególne odesłania i ich różne konsekwencje.`,
      rules: [
        {
          locator: "§ 1",
          explanation: ppsaLaw.text`Najpierw ustal, czy umorzenie nastąpiło z przyczyny ${ppsaLaw.article("54", "art. 54 § 3")}, bo wtedy przepis przyznaje skarżącemu zwrot od organu.`,
        },
        {
          locator: "§ 2",
          explanation: ppsaLaw.text`Przy ${ppsaLaw.article("118", "art. 118 § 2")} wynik kosztowy ocenia się przez odpowiednie zastosowanie ${ppsaLaw.article("206", "art. 206")}, a nie przez automatyczny zwrot.`,
        },
      ],
      legalEffect:
        "Słowo umorzenie samo nie rozstrzyga o kosztach; potrzebna jest dokładna podstawa prawna wskazana w postanowieniu.",
      foreignersCase:
        "Jeśli organ zmienił swoje rozstrzygnięcie w sprawie pobytowej i sąd umorzył sprawę, odczytaj podstawę umorzenia przed żądaniem zwrotu kosztów.",
    },
    {
      provisionId: "ppsa-art-202",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Jeżeli po stronie skarżącej występuje kilku uprawnionych, zwrot kosztów przysługuje każdemu odpowiednio do udziału w sprawie. Jeżeli ich uprawnienia lub obowiązki związane z przedmiotem zaskarżenia są wspólne, zwrot następuje na ich rzecz solidarnie.",
          sourceLocator: "Art. 202 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("202", "Art. 202")} rozróżnia podział zwrotu według udziału od solidarnego zwrotu przy wspólnych uprawnieniach lub obowiązkach skarżących.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Przy kilku niezależnych uprawnionych ustal udział każdego w sprawie przed określeniem zwrotu.",
        },
        {
          locator: "§ 2",
          explanation:
            "Wspólny związek uprawnień lub obowiązków z przedmiotem zaskarżenia prowadzi do zwrotu na rzecz skarżących solidarnie.",
        },
      ],
      legalEffect:
        "Sposób rozdzielenia kosztów zależy od charakteru uprawnień procesowych, a nie od samej liczby osób podpisanych pod skargą.",
      foreignersCase:
        "Gdy członkowie rodziny wspólnie skarżą decyzje pobytowe, porównaj ich uprawnienia i obowiązki z przedmiotem zaskarżenia przed przyjęciem solidarnego zwrotu.",
    },
    {
      provisionId: "ppsa-art-203",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Stronie, która wniosła skargę kasacyjną, należy się zwrot poniesionych niezbędnych kosztów postępowania kasacyjnego: od organu, gdy po uwzględnieniu kasacji uchylono wyrok sądu pierwszej instancji oddalający skargę, albo od skarżącego, gdy uchylono wyrok sądu pierwszej instancji uwzględniający skargę.",
          sourceLocator: "Art. 203 pkt 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("203", "Art. 203")} wiąże zwrot niezbędnych kosztów kasacji z tym, jaki wyrok pierwszej instancji został uchylony i kto powinien ponieść koszt.`,
      rules: [
        {
          locator: "Art. 203 pkt 1–2",
          explanation:
            "Przy uchyleniu wyroku oddalającego skargę zwrot jest od organu, a przy uchyleniu wyroku uwzględniającego skargę — od skarżącego; w obu wariantach kasacja musi zostać uwzględniona.",
        },
      ],
      legalEffect:
        "Samo wniesienie kasacji nie daje prawa do zwrotu; znaczenie ma wynik NSA, rodzaj uchylonego wyroku i wykazanie niezbędnych kosztów.",
      foreignersCase: ppsaLaw.text`Po korzystnym wyroku NSA w sprawie pobytowej sprawdź, czy uchylony wyrok WSA oddalał czy uwzględniał skargę, bo od tego zależy wskazany w ${ppsaLaw.article("203", "art. 203")} płatnik.`,
    },
    {
      provisionId: "ppsa-art-204",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Jeżeli skarga kasacyjna zostaje oddalona, strona, która ją wniosła, zwraca niezbędne koszty postępowania kasacyjnego poniesione przez organ, gdy zaskarżono wyrok pierwszej instancji oddalający skargę, albo przez skarżącego, gdy zaskarżono wyrok uwzględniający skargę.",
          sourceLocator: "Art. 204 pkt 1–2",
        },
      ],
      summary:
        "Przy oddaleniu kasacji jej wnoszący może zostać obciążony niezbędnymi kosztami drugiej strony, zależnie od rodzaju zaskarżonego wyroku WSA.",
      rules: [
        {
          locator: "Art. 204 pkt 1–2",
          explanation:
            "Kasacja od wyroku oddalającego skargę oznacza zwrot kosztów organu, a kasacja od wyroku uwzględniającego skargę — zwrot kosztów skarżącego.",
        },
      ],
      legalEffect:
        "Oddalenie kasacji może powodować obowiązek zwrotu kosztów, ale wysokość obejmuje tylko koszty niezbędne ustalone według dalszych przepisów.",
      foreignersCase:
        "Przed kasacją w sprawie odmowy pobytu uwzględnij ryzyko kosztowe i ustal, czy zaskarżany wyrok WSA oddalił, czy uwzględnił skargę.",
    },
    {
      provisionId: "ppsa-art-205",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Do niezbędnych kosztów strony działającej osobiście lub przez pełnomocnika innego niż adwokat lub radca prawny zalicza się koszty sądowe, przejazdy do sądu oraz równowartość utraconego zarobku lub dochodu. Przy adwokacie lub radcy prawnym dochodzą ich wynagrodzenie w ustawowych granicach, wydatki jednego pełnomocnika, koszty sądowe i nakazane osobiste stawiennictwo; ${ppsaLaw.article("205", "§ 3–4")} określają dalsze zasady i odpowiednie zastosowanie dla doradcy podatkowego, rzecznika patentowego i Prokuratorii Generalnej.`,
          sourceLocator: "Art. 205 § 1–4",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("205", "Art. 205")} wylicza kategorie niezbędnych kosztów i odrębnie traktuje osobisty udział, adwokata lub radcę prawnego oraz pozostałych profesjonalnych pełnomocników.`,
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Rodzaj reprezentacji wpływa na katalog kosztów i limit wynagrodzenia; przy pełnomocniku zawodowym przepis wymienia także wydatki jednego adwokata lub radcy.",
        },
        {
          locator: "§ 3–4",
          explanation: ppsaLaw.text`Przejazdy i utracony zarobek rozlicza się według wskazanych przepisów o kosztach cywilnych, a ${ppsaLaw.article("205", "§ 2–3")} stosuje się odpowiednio do trzech wymienionych podmiotów.`,
        },
      ],
      legalEffect:
        "Zwrot obejmuje tylko kategorie niezbędnych kosztów i granice ustawy; nie każda faktura, konsultacja lub tłumaczenie staje się automatycznie kosztem podlegającym zwrotowi.",
      foreignersCase: ppsaLaw.text`W sprawie pobytowej zbieraj osobno opłaty sądowe, przejazdy, utracony dochód i wynagrodzenie pełnomocnika. Oceń możliwość zwrotu według kategorii ${ppsaLaw.article("205", "art. 205")}, nie według samej sumy wydatków.`,
    },
    {
      provisionId: "ppsa-art-206",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd może w uzasadnionych przypadkach odstąpić od zasądzenia zwrotu kosztów postępowania w całości lub części, w szczególności gdy skarga została uwzględniona w części niewspółmiernej do wartości przedmiotu sporu ustalonej dla pobrania wpisu.",
          sourceLocator: "Art. 206",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("206", "Art. 206")} daje sądowi możliwość ograniczenia albo pominięcia zwrotu kosztów w uzasadnionej sytuacji, zwłaszcza przy niewspółmiernym częściowym uwzględnieniu skargi.`,
      rules: [
        {
          locator: "Art. 206",
          explanation:
            "To kompetencja sądu zależna od okoliczności; przepis podaje przykład relacji między zakresem uwzględnienia a wartością przedmiotu sporu dla wpisu.",
        },
      ],
      legalEffect:
        "Nawet istnienie ogólnej podstawy zwrotu nie gwarantuje pełnej kwoty, lecz nie przesądza też z góry o odmowie.",
      foreignersCase:
        "Po częściowym wygraniu skargi pobytowej nie obiecuj pełnego zwrotu. Sprawdź uzasadnienie WSA i relację zakresu uwzględnienia do wartości przyjętej dla wpisu.",
    },
    {
      provisionId: "ppsa-art-207",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Przepisy ${ppsaLaw.article("202", "art. 202")}, ${ppsaLaw.article("205", "205")} i ${ppsaLaw.article("206", "206")} stosuje się odpowiednio w przypadkach z ${ppsaLaw.article("203", "art. 203")} i ${ppsaLaw.article("204", "204")}. W przypadkach szczególnie uzasadnionych sąd może odstąpić od zasądzenia zwrotu kosztów postępowania kasacyjnego w całości lub części.`,
          sourceLocator: "Art. 207 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("207", "Art. 207")} uzupełnia reguły kosztów kasacyjnych o odesłanie do zasad rozdziału i szczególną możliwość odstąpienia od zwrotu.`,
      rules: [
        {
          locator: "§ 1",
          explanation: ppsaLaw.text`Przy kosztach z ${ppsaLaw.article("203", "art. 203")}–${ppsaLaw.article("204", "204")} odpowiednio uwzględnia się reguły o kilku uprawnionych, niezbędnych kosztach i odstąpieniu z ${ppsaLaw.article("202", "art. 202")}, ${ppsaLaw.article("205", "205")}–${ppsaLaw.article("206", "206")}.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Odstąpienie od zwrotu kasacyjnego wymaga przypadku szczególnie uzasadnionego i może być całkowite albo częściowe.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("207", "Art. 207")} nie ustanawia automatycznej proporcji kosztów; modyfikuje ich rozliczenie w konkretnym wyniku kasacji i pozostawia sądowi ocenę szczególnej sytuacji.`,
      foreignersCase: ppsaLaw.text`Przy kasacji w sprawie pobytowej sprawdź najpierw ${ppsaLaw.article("203", "art. 203")} lub ${ppsaLaw.article("204", "204")}, a potem odpowiednie odesłania ${ppsaLaw.article("207", "art. 207")}. Nie przedstawiaj częściowego wyniku jako gwarancji określonego zwrotu.`,
    },
    {
      provisionId: "ppsa-art-208",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Niezależnie od wyników spraw wskazanych w ${ppsaLaw.article("200", "art. 200")}, ${ppsaLaw.article("203", "203")}, ${ppsaLaw.article("204", "204")} i ${ppsaLaw.article("207", "207")} sąd może nałożyć na stronę obowiązek zwrotu w całości lub części kosztów wywołanych jej niesumiennym lub oczywiście niewłaściwym postępowaniem.`,
          sourceLocator: "Art. 208",
        },
      ],
      summary:
        "Niesumienne albo oczywiście niewłaściwe zachowanie strony może uzasadnić osobne obciążenie wywołanymi przez nie kosztami, niezależnie od wyniku sprawy.",
      rules: [
        {
          locator: "Art. 208",
          explanation:
            "Trzeba wskazać konkretne zachowanie strony i koszty przez nie wywołane; sam przegrany lub wygrany wynik nie wystarcza.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("208", "Art. 208")} może zmienić rozliczenie kosztów w całości lub części, ale wymaga oceny zachowania jako niesumiennego albo oczywiście niewłaściwego.`,
      foreignersCase:
        "W sprawie pobytowej dokumentuj terminowe i rzetelne działania. Nie zakładaj, że wynik skargi sam rozstrzyga o kosztach wywołanych konkretnym zachowaniem strony.",
    },
    {
      provisionId: "ppsa-art-209",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Wniosek strony o zwrot kosztów sąd rozstrzyga w każdym orzeczeniu uwzględniającym skargę oraz w orzeczeniu, o którym mowa w ${ppsaLaw.article("201", "art. 201")}, ${ppsaLaw.article("203", "203")} i ${ppsaLaw.article("204", "204")}.`,
          sourceLocator: "Art. 209",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("209", "Art. 209")} wskazuje orzeczenia, w których sąd rozstrzyga zgłoszony wniosek o zwrot kosztów.`,
      rules: [
        {
          locator: "Art. 209",
          explanation: ppsaLaw.text`Sprawdź sentencję orzeczenia uwzględniającego skargę oraz orzeczenia objęte ${ppsaLaw.article("201", "art. 201")}, ${ppsaLaw.article("203", "203")} lub ${ppsaLaw.article("204", "204")}; sam wniosek nie zastępuje wykazania należnych kosztów.`,
        },
      ],
      legalEffect:
        "Przepis określa moment rozstrzygnięcia wniosku i nie tworzy samodzielnie prawa do zwrotu bez spełnienia warunków właściwej podstawy.",
      foreignersCase: ppsaLaw.text`Po wyroku w sprawie pobytowej sprawdź rozstrzygnięcie o kosztach w sentencji, zwłaszcza gdy sprawa zakończyła się na podstawie ${ppsaLaw.article("201", "art. 201")}, ${ppsaLaw.article("203", "203")} albo 204.`,
    },
    {
      provisionId: "ppsa-art-210",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Strona traci uprawnienie do żądania zwrotu kosztów, jeżeli najpóźniej przed zamknięciem rozprawy bezpośrednio poprzedzającej orzeczenie nie zgłosi wniosku; sąd powinien pouczyć stronę bez profesjonalnego pełnomocnika o skutkach zaniechania. Reguła ta nie działa przy orzekaniu na posiedzeniu niejawnym, gdy strona nie jest reprezentowana przez adwokata, radcę prawnego, doradcę podatkowego lub rzecznika patentowego — wtedy sąd orzeka o należnych kosztach z urzędu.",
          sourceLocator: "Art. 210 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("210", "Art. 210")} określa termin zgłoszenia wniosku o zwrot kosztów i wyjątek, w którym na posiedzeniu niejawnym sąd rozstrzyga koszty z urzędu.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Zwykły termin kończy się przed zamknięciem rozprawy bezpośrednio poprzedzającej orzeczenie; osoba bez profesjonalnego pełnomocnika powinna otrzymać pouczenie.",
        },
        {
          locator: "§ 2",
          explanation: ppsaLaw.text`Przy posiedzeniu niejawnym i braku wskazanego pełnomocnika wniosek nie jest wymagany na zasadzie ${ppsaLaw.article("210", "§ 1")}, bo sąd orzeka z urzędu.`,
        },
      ],
      legalEffect: ppsaLaw.text`Późny wniosek może oznaczać utratę uprawnienia, lecz przed zastosowaniem ${ppsaLaw.article("210", "§ 1")} trzeba sprawdzić tryb orzekania i reprezentację strony.`,
      foreignersCase: ppsaLaw.text`W sprawie pobytowej pełnomocnik powinien zgłosić wniosek przed zamknięciem rozprawy. Jeżeli nie ma profesjonalnego pełnomocnika i sprawa jest na posiedzeniu niejawnym, sprawdź zastosowanie ${ppsaLaw.article("210", "§ 2")}.`,
    },
    {
      provisionId: "ppsa-art-211",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Koszty sądowe obejmują opłaty sądowe i zwrot wydatków.",
          sourceLocator: "Art. 211",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("211", "Art. 211")} dzieli koszty sądowe na opłaty sądowe i zwrot wydatków.`,
      rules: [
        {
          locator: "Art. 211",
          explanation:
            "Przy analizie płatności rozdziel opłatę sądową od wydatku, bo dalsze przepisy mogą traktować je odmiennie.",
        },
      ],
      legalEffect:
        "Klasyfikacja nie podaje stawki ani zwolnienia dla konkretnego pisma; te kwestie wymagają dalszych przepisów.",
      foreignersCase:
        "W sprawie pobytowej prowadź osobno listę wpisu lub opłaty kancelaryjnej i wydatków, np. należności tłumacza ustanowionego przez sąd.",
    },
    {
      provisionId: "ppsa-art-212",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Opłatami sądowymi są wpis i opłata kancelaryjna; opłaty sądowe są dochodami budżetu państwa.",
          sourceLocator: "Art. 212 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("212", "Art. 212")} rozróżnia wpis i opłatę kancelaryjną oraz określa ich publicznoprawny charakter jako dochodów budżetu państwa.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Najpierw ustal, czy konkretna należność jest wpisem, czy opłatą kancelaryjną; są to dwie kategorie opłat sądowych.",
        },
        {
          locator: "§ 2",
          explanation:
            "Przepis wskazuje odbiorcę dochodu, ale nie ustala stawki konkretnego pisma.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("212", "Art. 212")} nie przesądza wysokości opłaty ani prawa do zwolnienia; służy klasyfikacji należności.`,
      foreignersCase:
        "Przy składaniu skargi na decyzję pobytową nazwij żądany i uiszczony rodzaj opłaty zgodnie z ustawą, nie utożsamiając każdego płatnego pisma z wpisem.",
    },
    {
      provisionId: "ppsa-art-213",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Do wydatków zalicza się w szczególności należności tłumaczy i kuratorów ustanowionych w sprawie oraz koszty ogłoszeń, a także diety i koszty podróży sędziów i pracowników sądowych związane z czynnościami poza budynkiem sądu, określone w odrębnych przepisach.",
          sourceLocator: "Art. 213 pkt 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("213", "Art. 213")} podaje przykładowe wydatki sądowe, w tym należności sądowego tłumacza lub kuratora i koszty czynności poza sądem.`,
      rules: [
        {
          locator: "Art. 213 pkt 1–2",
          explanation:
            "Należność tłumacza lub kuratora musi dotyczyć osoby ustanowionej w danej sprawie; pozostałe wskazane wydatki podlegają odrębnym zasadom.",
        },
      ],
      legalEffect:
        "Przepis klasyfikuje przykładowe wydatki, nie ustanawia automatycznego zwrotu prywatnych kosztów tłumaczenia ani nie określa ich stawek.",
      foreignersCase:
        "Jeżeli sąd ustanowił tłumacza w sprawie pobytowej, odróżnij jego należność jako wydatek sądowy od prywatnego tłumaczenia dokumentów przez stronę.",
    },
    {
      provisionId: "ppsa-art-214",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Jeżeli ustawa nie stanowi inaczej, koszty sądowe uiszcza ten, kto wnosi do sądu pismo podlegające opłacie lub powodujące wydatki. Pismo kilku osób o wspólnych uprawnieniach lub obowiązkach podlega jednej opłacie; w przeciwnym razie każda osoba uiszcza opłatę oddzielnie stosownie do swojego uprawnienia lub obowiązku.",
          sourceLocator: "Art. 214 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("214", "Art. 214")} wskazuje podstawowego płatnika i rozdziela jedną albo odrębne opłaty przy piśmie wniesionym przez kilka osób.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Co do zasady płaci wnoszący pismo, chyba że inna ustawa przewiduje wyjątek; dotyczy to opłaty albo pisma powodującego wydatek.",
        },
        {
          locator: "§ 2",
          explanation:
            "Wspólne uprawnienia lub obowiązki oznaczają jedną opłatę, a brak wspólności — opłatę każdej osoby według jej zakresu.",
        },
      ],
      legalEffect:
        "Przepis ustala obowiązek uiszczenia, lecz nie rozstrzyga zwolnienia ani ostatecznego zwrotu kosztów; te kwestie wymagają osobnej podstawy.",
      foreignersCase:
        "Przy wspólnej skardze członków rodziny ustal, czy ich uprawnienia lub obowiązki wobec zaskarżenia są wspólne. Od tego zależy jedna albo odrębne opłaty.",
    },
    {
      provisionId: "ppsa-art-215",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "W każdym piśmie wszczynającym postępowanie sądowe w danej instancji należy podać wartość przedmiotu zaskarżenia, jeżeli od tej wartości zależy wysokość opłaty; wartość zaokrągla się w górę do pełnych złotych.",
          sourceLocator: "Art. 215 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("215", "Art. 215")} wymaga podania wartości przedmiotu zaskarżenia tylko wtedy, gdy od niej zależy wysokość opłaty, i nakazuje zaokrąglenie w górę.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Obowiązek dotyczy pisma wszczynającego postępowanie w konkretnej instancji i zależy od sposobu wyliczenia opłaty.",
        },
        {
          locator: "§ 2",
          explanation:
            "Podaną wartość zaokrągla się w górę do pełnych złotych, a nie do najbliższej kwoty według zwykłego zaokrąglenia.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("215", "Art. 215")} nie ustala sam stawki; błędne pominięcie lub oznaczenie wartości może wymagać reakcji według przepisów o brakach i opłacie.`,
      foreignersCase:
        "Przed wniesieniem pisma w sprawie pobytowej ustal, czy opłata zależy od wartości przedmiotu zaskarżenia. Nie wyliczaj jej z osobistej wagi decyzji bez podstawy ustawowej.",
    },
    {
      provisionId: "ppsa-art-216",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Jeżeli przedmiotem zaskarżenia jest należność pieniężna, stanowi ona wartość przedmiotu zaskarżenia.",
          sourceLocator: "Art. 216",
        },
      ],
      summary:
        "Przy zaskarżeniu należności pieniężnej wartość przedmiotu zaskarżenia odpowiada tej należności.",
      rules: [
        {
          locator: "Art. 216",
          explanation:
            "Najpierw ustal, czy przedmiot zaskarżenia rzeczywiście jest należnością pieniężną; wtedy jej wartość jest wartością przedmiotu zaskarżenia.",
        },
      ],
      legalEffect:
        "Przepis dotyczy wyłącznie sposobu oznaczenia wartości i nie przesądza wysokości wpisu bez zastosowania właściwej taryfy.",
      foreignersCase: ppsaLaw.text`W sporze pobytowym nie przypisuj decyzji niemajątkowej wartości pieniężnej tylko dlatego, że ma skutki finansowe; ${ppsaLaw.article("216", "art. 216")} działa przy należności pieniężnej jako przedmiocie zaskarżenia.`,
    },
    {
      provisionId: "ppsa-art-217",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Do wartości przedmiotu zaskarżenia nie wlicza się odsetek i kosztów związanych z należnością główną.",
          sourceLocator: "Art. 217",
        },
      ],
      summary:
        "Przy obliczaniu wartości przedmiotu zaskarżenia pomija się odsetki i koszty związane z należnością główną.",
      rules: [
        {
          locator: "Art. 217",
          explanation:
            "Oddziel należność główną od odsetek i kosztów ubocznych; tylko ta pierwsza wchodzi do wartości według tego przepisu.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("217", "Art. 217")} ogranicza składniki wartości, ale nie podaje stawki wpisu ani nie rozstrzyga dopuszczalności samej skargi.`,
      foreignersCase:
        "Jeśli sprawa cudzoziemca dotyczy należności pieniężnej, przy oznaczaniu wartości nie dodawaj odsetek ani kosztów związanych z należnością główną.",
    },
    {
      provisionId: "ppsa-art-218",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Przewodniczący może sprawdzić wartość przedmiotu zaskarżenia oznaczoną w piśmie i zarządzić w tym celu dochodzenie.",
          sourceLocator: "Art. 218",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("218", "Art. 218")} pozwala przewodniczącemu zweryfikować oznaczoną w piśmie wartość przedmiotu zaskarżenia.`,
      rules: [
        {
          locator: "Art. 218",
          explanation:
            "Podana przez stronę wartość nie wiąże sądu bez kontroli; przewodniczący może zarządzić dochodzenie dla jej sprawdzenia.",
        },
      ],
      legalEffect:
        "Przepis daje narzędzie weryfikacji wartości, ale sam nie ustala jej prawidłowej kwoty ani automatycznego skutku błędnego oznaczenia.",
      foreignersCase:
        "Jeżeli w piśmie dotyczącym pobytu podano wartość przedmiotu zaskarżenia, zachowaj dokumenty uzasadniające wyliczenie i reaguj na zarządzenie przewodniczącego.",
    },
    {
      provisionId: "ppsa-art-219",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Opłatę sądową uiszcza się przy wniesieniu do sądu pisma podlegającego opłacie. Opłatę można uiścić gotówką w kasie właściwego sądu administracyjnego albo na jego rachunek bankowy, a końcówki opłat zaokrągla się w górę do pełnych złotych.",
          sourceLocator: "Art. 219 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("219", "Art. 219")} określa moment, podstawowe sposoby i sposób zaokrąglenia opłaty sądowej.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Opłatę trzeba uiścić przy wniesieniu pisma podlegającego opłacie, a nie dopiero po merytorycznym rozpoznaniu.",
        },
        {
          locator: "§ 2",
          explanation:
            "Sprawdź kasę albo rachunek właściwego sądu i zaokrąglij końcówkę w górę do pełnych złotych.",
        },
      ],
      legalEffect: ppsaLaw.text`Prawidłowe wniesienie pisma nie zastępuje prawidłowej opłaty; brak lub niedopłata mogą uruchomić ${ppsaLaw.article("220", "art. 220")}, z uwzględnieniem zwolnienia i innych wyjątków.`,
      foreignersCase:
        "Przy skardze na decyzję pobytową ustal właściwy sąd, rachunek i kwotę wpisu, zachowaj potwierdzenie oraz sprawdź, czy nie działa zwolnienie.",
    },
    {
      provisionId: "ppsa-art-220",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Sąd nie podejmuje czynności na skutek nieopłaconego pisma; co do zasady przewodniczący wzywa do uiszczenia opłaty w siedem dni pod rygorem pozostawienia pisma bez rozpoznania, a przy piśmie osoby mieszkającej lub mającej siedzibę za granicą bez krajowego przedstawiciela termin nie może być krótszy niż dwa miesiące. Nieuiszczenie wpisu po wezwaniu powoduje odrzucenie skargi, skargi kasacyjnej, zażalenia lub skargi o wznowienie; ${ppsaLaw.article("220", "§ 3a")} dotyczy elektronicznej opłaty z ${ppsaLaw.article("235a", "art. 235a")}, a ${ppsaLaw.article("220", "§ 4")} zwalnia z wpisu określone zażalenia.`,
          sourceLocator: "Art. 220 § 1–4",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("220", "Art. 220")} rozróżnia pozostawienie pisma bez rozpoznania od odrzucenia środków z ${ppsaLaw.article("220", "§ 3–3a")}, określa wezwanie i szczególny termin dla osoby bez przedstawiciela w kraju.`,
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Zapisz doręczenie wezwania i siedem dni, a przy osobie z zagranicy bez krajowego przedstawiciela sprawdź termin niekrótszy niż dwa miesiące.",
        },
        {
          locator: "§ 3–4",
          explanation: ppsaLaw.text`Po bezskutecznym wezwaniu wskazane środki podlegają odrzuceniu; osobno sprawdź elektroniczną opłatę z ${ppsaLaw.article("235a", "art. 235a")} i brak wpisu od zażaleń wymienionych w ${ppsaLaw.article("220", "§ 4")}.`,
        },
      ],
      legalEffect: ppsaLaw.text`Skutek zależy od rodzaju pisma, opłaty i wezwania; samo wysłanie pisma nie zapewnia jego rozpoznania, ale nie wolno też pomijać szczególnego terminu z ${ppsaLaw.article("220", "§ 2")}.`,
      foreignersCase:
        "Cudzoziemiec mieszkający za granicą bez przedstawiciela w Polsce powinien sprawdzić, czy wezwanie daje co najmniej dwa miesiące. Przy skardze lub kasacji odrzucony wpis po wezwaniu może zakończyć środek procesowy.",
    },
    {
      provisionId: "ppsa-art-221",
      reviewStatus: "blocked",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("221", "Art. 221")} ma w lokalnym tekście jednolitym status uchylony i zawiera wyłącznie oznaczenie „(uchylony)”. Nie ustanawia aktualnej reguły procesowej.`,
          sourceLocator: "Art. 221",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("221", "Art. 221")} jest uchylony; w aktualnym lokalnym korpusie brak operatywnej treści do objaśnienia jako obowiązującej normy.`,
      rules: [
        {
          locator: "Art. 221",
          explanation: ppsaLaw.text`Nie stosuj tego artykułu jako podstawy wezwania, terminu ani odrzucenia pisma; dla opłaty trzeba czytać obowiązujące ${ppsaLaw.article("219", "art. 219")}–${ppsaLaw.article("220", "220")} i przepisy szczególne.`,
        },
      ],
      legalEffect:
        "Status przepisu w korpusie to repealed; jego dawne brzmienie nie może być przedstawiane jako aktualny skutek proceduralny.",
      foreignersCase: ppsaLaw.text`W sprawie pobytowej pomiń ${ppsaLaw.article("221", "art. 221")} jako podstawę prawną. Jeśli dokument powołuje ten uchylony przepis, porównaj podstawę z aktualnym tekstem PPSA i pouczeniem sądu.`,
    },
    {
      provisionId: "ppsa-art-222",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Nie żąda się opłat od pisma, jeżeli już z jego treści wynika, że podlega ono odrzuceniu.",
          sourceLocator: "Art. 222",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("222", "Art. 222")} wyłącza żądanie opłaty od pisma, którego odrzucenie wynika już z samej jego treści.`,
      rules: [
        {
          locator: "Art. 222",
          explanation:
            "Przed wezwaniem do opłaty trzeba ocenić, czy z pisma od razu wynika przeszkoda prowadząca do odrzucenia; przepis dotyczy takiej oczywistej sytuacji.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("222", "Art. 222")} dotyczy pobierania opłaty, nie tworzy samodzielnej podstawy odrzucenia i nie rozstrzyga sprawy merytorycznie.`,
      foreignersCase:
        "W sprawie pobytowej nie zakładaj automatycznie, że brak wezwania do wpisu oznacza brak opłaty. Sprawdź, czy sąd uznał odrzucenie za wynikające już z treści pisma.",
    },
  ],
})
