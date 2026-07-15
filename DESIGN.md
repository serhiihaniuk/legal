# Design

## Source of truth

- Status: Active
- Last refreshed: 2026-07-14 — content-first audit
- Primary product surfaces: wielostronicowy, redakcyjny workspace prawny z indeksem nauki, mapą wiedzy, panelem szczegółów, planem nauki i pełnymi przewodnikami po typach spraw
- Evidence reviewed: wywiad w `.omx/interviews/`, spec w `.omx/specs/`, oficjalne źródła ELI/UdSC oraz zaakceptowany wzorzec dokumentacji shadcn w `.omx/artifacts/visual-ralph/docs-layout/reference.png`

## Brand

- Personality: spokojny, kompetentny przewodnik po złożonym systemie prawa
- Trust signals: oficjalne źródła, data aktualności, rozróżnienie przepisu od praktycznej interpretacji
- Avoid: stylistyka kancelarii premium, przeładowane dashboardy, jaskrawe kolory, udawanie porady prawnej

## Product goals

- Goals: pokazać pełny obraz; uczyć przejścia od faktu do przepisu i czynności; zmniejszyć lęk przed językiem prawnym
- Non-goals: automatyczne rozstrzyganie spraw; akademicki komentarz obejmujący całą doktrynę i orzecznictwo; zastąpienie oficjalnego tekstu ustawy
- Success signals: użytkownik odnajduje właściwą gałąź, rozumie mechanizm normy, potrafi połączyć warunek z dowodem i wie, jaką czynność wykonać dalej

## Personas and jobs

- Primary personas: osoba pracująca przy legalizacji cudzoziemców, znająca polski komunikacyjnie, ale ucząca się języka prawa
- User jobs: zorientować się w systemie; zrozumieć pismo; ustalić podstawę; przygotować listę pytań i dokumentów
- Key contexts of use: nauka własna, analiza wezwania, przygotowanie do rozmowy o sprawie

## Information architecture

- Primary navigation: kompaktowy header z globalnymi trasami; na stronach edukacyjnych lokalny indeks po lewej, dokument pośrodku i krótki spis treści po prawej
- Core routes/screens: `/`; `/law`; `/law/:documentId` (workspace redirect); `/law/:documentId/learn/:moduleId`; `/law/:documentId/provisions/:provisionId`; `/law/:documentId/practice/:practiceId`; `/guide/kpa` (compatibility); `/map`; `/map/:nodeId`; `/documents`; `/documents/:documentId`; `/cases/:routeId`; `/study`
- Content hierarchy: fakty osoby -> etap sprawy -> pytanie prawne -> instytucja/norma -> dokument/dowód -> działanie -> wynik lub środek ochrony
- Navigation model: bez wyszukiwarki. Użytkownik porusza się przez globalne menu, lokalny indeks, selektory mobilne oraz kontrolki poprzedni/następny.

## Design principles

- Najpierw orientacja, potem szczegół.
- Mapa domyślnie pokazuje poziom orientacyjny; pełna głębokość jest świadomą akcją użytkownika.
- Główną osią mapy jest jedna chronologia sprawy cudzoziemca: orientacja -> status -> wybór trasy -> praca -> złożenie -> dowody -> postępowanie -> decyzja -> ochrona. KPA, praca i dokumenty są warstwami przekrojowymi obecnymi na właściwych etapach, a nie równorzędnymi „gałęziami mapy”.
- Każdy etap mapy odpowiada na trzy pytania widoczne jeszcze przed rozwinięciem: co trzeba ustalić, jaki rezultat roboczy ma powstać i ile tematów prawnych tworzy ten etap.
- Każdy termin odpowiada na pytanie „co to zmienia w sprawie?”.
- Polskie terminy są zachowane, a objaśnienia podane prostym ukraińskim.
- Głębokie przewodniki działają jak dokumentacja: jeden aktywny temat, jeden naturalny scroll strony, lokalna nawigacja po lewej i spis bieżącej strony po prawej.
- Jedna strona ma jedną główną powierzchnię. Hierarchię budują nagłówki, kolumny, rytm i separatory, nie kolejne zagnieżdżone karty.
- Listy tematów, kroków, źródeł i dokumentów są wierszami z liniami podziału. Karta jest wyjątkiem: ostrzeżenie, decyzja, porównanie albo samodzielny callout.
- Czytelność tekstu ma pierwszeństwo przed symetrią dashboardu. Dłuższe objaśnienia mają ograniczoną długość wiersza, a dane porównawcze pozostają szerokie.
- Domyślny kierunek czytania treści edukacyjnej to jedna kolumna od góry do dołu. Boczne kolumny służą wyłącznie nawigacji i nie zawierają równoległej narracji.
- Duże katalogi, takie jak indeks 306 artykułów, otwierają się w `Sheet`; po wyborze pozycja czytana jest w centralnym dokumencie, a nie w drugim scrollowanym panelu.
- Nie rozdzielamy jednej sekwencji rozumowania na lewą i prawą połowę ekranu. Fakty → analiza → wniosek, warunki → ryzyka → źródła i podobne ciągi pozostają liniowe.
- Trzykolumnowy układ dokumentacyjny jest nawigacyjną ramą, nie trzema równoległymi narracjami. Indeks po lewej i spis treści po prawej nie mogą konkurować z pełnym materiałem w centrum.
- Indeks przepisów każdego aktu grupuje pozycje według oficjalnej struktury `Dział` / `Rozdział` albo relacji części normatywnej do załączników; nie dzieli aktu na równe paczki numerów. KPA i pozostałe akty używają tego samego standardowego komponentu nawigacji, pełnych wielowierszowych nazw oraz metadanych `zakres · liczba przepisów`.
- Mapa prawa używa tego samego standardu lewego indeksu: kontrolka powrotu jest pierwsza, a tematy aktywnego etapu są jego zagnieżdżonymi podrozdziałami, nie osobnym katalogiem na dole.
- Długość strony wynika z kompletnego wyjaśnienia, a nie z mnożenia nagłówków, kart, checklist i jednozdaniowych sekcji.
- Tradeoffs: szerokość mapy kosztem pełnej głębokości w pierwszej wersji.

## Content architecture

- Źródło jest dowodem dla twierdzenia, nie substytutem wyjaśnienia. Linki grupujemy w jeden zwarty rejestr na końcu, a przy konkretnych tezach podajemy dokładny locator: artykuł, paragraf lub punkt.
- Внутрішні правові посилання є частиною змісту. Автор навчального тексту вставляє типізоване посилання безпосередньо в речення через document-specific authoring Interface; renderer не вгадує акт із поточної сторінки або сусідніх слів. Для діапазону посиланнями є лише початковий і кінцевий locator (`Art. 30–39`), а для посилання на KPA чи інший акт автор використовує окремий author цього документа. Голий locator (`Art.`, `§`, `załącznik nr` із номером) у новому навчальному контенті є помилкою валідації. Офіційні зовнішні джерела показуємо компактним inline-посиланням: назва джерела, іконка зовнішнього переходу та примітка під ними, без окремої кнопки для кожного джерела.
- Внутрішні посилання на доказові документи (`паспорт`, `UPO`, `Załącznik nr 1`) підпорядковуються тому самому правилу: автор обирає стабільний `EvidenceDocumentId`, а renderer отримує явний `evidence-document` reference. Назва, alias або згадка в map/case не створює публічний ID і не визначає href.
- Kontrolka lokalizatora prawnego otwiera wersjonowany lokalny PDF bezpośrednio w dużym modalnym czytniku shadcn `Dialog`, bez pośredniej strony. Czytnik zaczyna od dokładnej strony artykułu, a obok kontrolki pozostaje oficjalna strona ELI do weryfikacji.
- Nie używamy jednego obowiązkowego szablonu sekcji dla wszystkich instytucji. Struktura zależy od rodzaju materiału: norma KPA, materialna podstawa pobytu, dokument, case, termin lub porównanie.
- Nie tworzymy osobnego nagłówka dla jednego ogólnego zdania. Powiązane warunki, wyjątki i skutki łączymy w jeden model decyzji, tabelę albo spójny rozdział.
- Jedna strona ma 3–6 głównych rozdziałów. Każdy rozdział ma własne zadanie poznawcze i zawiera wystarczające objaśnienie, aby użytkownik nie musiał domyślać się mechanizmu z listy pytań.
- Checklisty, pytania kontrolne i ćwiczenia pojawiają się po materiale wyjaśniającym. Nie zastępują definicji, analizy normy, wyjątków ani przykładów.
- Każde istotne twierdzenie prawne odróżnia: treść przepisu, oficjalne wyjaśnienie organu, wniosek praktyczny i element wymagający sprawdzenia w konkretnej sprawie.
- Wiedza ma jedno kanoniczne źródło danych. Mapa, case, katalog dokumentów i moduł KPA ponownie używają pełnej treści zamiast utrzymywać skrócone, rozbieżne wersje tej samej reguły.

### Page contracts

- **Główny cel nauki aktu:** użytkownik ma nauczyć się pracować z konkretnym dokumentem prawnym, a nie tylko poznać tematy, które w nim występują. Kurs pokazuje mapę aktu, jego własne słownictwo i logikę podziału, punkt wejścia dla faktu, łańcuch odesłań oraz sposób przejścia od reguły ogólnej przez warunki i wyjątki do skutku, dowodu, czynności i środka ochrony. Pytania i checklisty sprawdzają zrozumienie dopiero po pełnym wyjaśnieniu.
- **Pierwszy moduł każdego aktu:** wyjaśnia, do czego akt służy i czego nie rozstrzyga; pokazuje działy/rozdziały lub relację części normatywnej do załączników; uczy dokumentowo-specyficznej metody czytania; demonstruje jeden pełny łańcuch przepisów na faktach sprawy cudzoziemca. Nie jest katalogiem metadata korpusu.
- **Moduł nauki aktu:** zaczyna od odpowiedzi „co to jest, jakie pytanie rozwiązuje i gdzie znajduje się w przepływie sprawy”; następnie objaśnia mechanizm w trzech warstwach `reguła → praktyka → granica/wyjątek`, definiuje polskie pojęcia i pokazuje role grup przepisów. Sekcja `przepis po przepisie` korzysta wyłącznie z komentarza sprawdzonego z dokładnym tekstem lokalnego korpusu: streszczenie, struktura paragrafów/punktów, połączenie z innymi normami, skutek prawny, znaczenie w sprawie i granica regulacji. Moduł kończy pełny przykład, typowe błędy i powtarzalna metoda pracy. Checklist nie zastępuje materiału.
- **Przepis każdego utrzymywanego aktu:** najpierw konkretne objaśnienie tego, co norma reguluje i ustanawia; następnie objaśnienie każdego paragrafu/punktu, miejsce w łańcuchu przepisów, skutek prawny, znaczenie w sprawie cudzoziemca i to, czego przepis sam nie rozstrzyga; dopiero potem polski tekst źródłowy, miejsce w akcie i dokładny link do oficjalnego tekstu. Ogólna instrukcja „jak czytać” nie może zastąpić komentarza do tej normy.
- **Przegląd mapy:** jedna pionowa droga sprawy z widocznym pytaniem, rezultatem i liczbą tematów dla każdego etapu. Rozwinięcie pokazuje objaśnione węzły danego etapu; grupy `KPA`, `pobyt`, `praca`, `dokumenty` pozostają metadanymi i nie dzielą mapy na konkurencyjne katalogi.
- **Węzeł mapy:** definicja, miejsce na drodze sprawy i praktyczny rezultat; topic-specific model prawny rozdzielający zastosowanie, warunki, wyjątki i skutek; sekwencja pracy ze sprawą; dokumenty i punkty kontroli; powiązane normy i tematy; zwarte źródła zewnętrzne. Mapa nie wymusza ośmiu jednakowych sekcji i nie powtarza `summary` jako kilku pozornie różnych rozdziałów.
- **Dokument:** kanoniczna strona stabilnego `EvidenceDocumentId`; kto wydaje lub przygotowuje; kiedy jest potrzebny; co dowodzi i czego nie dowodzi; wymagane elementy, forma i ważność; sposób uzyskania i kontroli; typowe braki; reakcja na wezwanie; przykład; powiązane dokumenty przez typizowane referencje; zwarte źródła. Lewy indeks używa wspólnego komponentu dokumentacyjnego, pokazuje kategorie jako rozdziały, dokumenty aktywnej kategorii jako podrozdziały i kontrolkę powrotu do głównej strony.
- **Case:** pełny przewodnik po typie sprawy, a nie case study z fikcyjną osobą. Lewa nawigacja wybiera rodzinę sprawy (`Karta pobytu`, `Pobyt stały`, `Rezydent UE`), a górne zakładki pokazują wyłącznie podsprawy aktywnej rodziny (np. `CUKR`, pobyt czasowy i praca, Blue Card, studia, działalność, rodzina i inne podstawy). Każda podsprawa zmienia fakty kontrolne, wynik, warunki, dowody, terminy, ryzyka i przebieg. Nie używamy imion person jako substytutu profilu prawnego.
- **Case — dokumenty etapu:** dokumenty i ryzyka są dwoma osobnymi disclosure. Dokumenty powtarzają pełne pola rejestru (`status`, `kto i kiedy`, `co dowodzi`, `rola prawna`) dla kompletnego podzbioru danego etapu i dodają instrukcję kontroli przed odznaczeniem. Etap budowania dowodów pokazuje cały rejestr sprawy; pozostałe etapy pokazują pozycje potrzebne do wykonania konkretnej pracy. Ryzyka wyjaśniają mechanizm, skutek dla analizy i konkretny punkt kontroli, zamiast być listą haseł.
- **Case — kolejność treści:** orientacja i wynik → fakty do ustalenia i granice → wybór podstawy → 6–8 opisanych etapów od kwalifikacji do decyzji i obowiązków po decyzji → rejestr dokumentów → terminy i negatywne gałęzie → źródła. Każdy etap zaczyna się od prozowego wyjaśnienia mechanizmu, a dopiero potem pokazuje dowody, ryzyka i działania.
- **Case — powiązane materiały:** jeden górny separator, mały nagłówek i pionowa lista zwykłych tekstowych linków w kolorze `primary` z ikoną `ArrowUpRight`. Bez opisów, kart, przycisków, osobnych wierszy i dolnych separatorów. Linki prowadzą tylko do istniejących głębokich adresów mapy, modułów KPA, artykułów KPA albo katalogu dokumentów; nie wplatamy ich w środek akapitów.
- **Case — rytm etapów:** listy działań używają krótkich wierszy (`py-2`), metadane mają zwarte paddingi, a odstępy między listą, accordionem i linkami nie przekraczają 3–4 jednostek Tailwind. Accordion etapu wygląda jak kompaktowa kontrolka `secondary` (`bg-secondary`, mały padding, rounded przez bazowy trigger), bez poziomych linii wokół zamkniętego stanu.
- **Case — zakładki:** używamy jednego poziomego `TabsList` pod nagłówkiem strony. Na małym ekranie lista przewija się poziomo bez zawijania; nie powtarzamy tych samych tras w lewym panelu ani w drugim selekcie.
- **Plan nauki:** mierzalny wynik; wskazany pełny materiał; konkretne zadanie na dokumencie; wzorcowa odpowiedź lub kryteria oceny; powtórka. Sam link do węzła nie jest lekcją.

### Dense legal data

- Rejestry dokumentów, dowodów i terminów są tabelą lub macierzą na desktopie. Użytkownik powinien porównywać pozycje w wierszu: `dokument → status → kto/kiedy → co dowodzi → podstawa/rola`.
- Na telefonie ten sam rejestr przechodzi w zwarty wiersz lub disclosure z krótkim podsumowaniem; nie zamienia każdego pola w duży samodzielny akapit.
- Opisowe `dl` stosujemy do krótkiego profilu lub metadanych jednej rzeczy, nie do rejestru 8–14 powtarzalnych pozycji.
- Źródła, badge i etykiety mają mniejszą wagę wizualną niż właściwe wyjaśnienie.

## Visual language

- Color: ciemny granat i atrament dla prawa; bursztyn dla wskazówek; szałwia dla działań; ciepłe tło papieru
- Typography: czytelny bezszeryfowy tekst interfejsu, szeryfowe nagłówki dla charakteru atlasu
- Spacing/layout rhythm: 8px base; zwarte odstępy wewnątrz sekcji i wyraźne 32–48px między rozdziałami
- Shape/radius/elevation: prawie płaskie powierzchnie, cienkie linie i mały promień tylko dla kontrolek/calloutów; bez cieni dla treści
- Motion: krótkie rozwijanie i podświetlenie; respektowanie reduced motion
- Imagery/iconography: proste znaki typograficzne i geometryczne, bez stockowych zdjęć

## Components

- Existing components to reuse: shadcn `base-vega` primitives in `app/components/ui`
- New/changed components: app shell, global header/navigation menu, mobile selectors, multi-document law catalog, per-document learning/provisions/practice workspace, generic provision reader with exact PDF locator, KPA compatibility guide, article selector, map index, node detail, shared official-source entry/link, case profile, route tabs, legal summary, document register, deadline register, exclusions, timeline accordion, explicit typed legal link and compatibility inline-reference renderer
- Variants and states: selected, matched, dimmed, overview/full-depth, expanded/collapsed, foundational, procedural, practical, active case route, positive/negative procedural branch
- Token/component ownership: semantyczne CSS variables i Tailwind v4 theme tokens w `app/app.css`

## Accessibility

- Target standard: WCAG 2.2 AA w zakresie możliwym dla statycznej strony
- Keyboard/focus behavior: wszystkie kontrolki i węzły dostępne z klawiatury, wyraźny focus
- Contrast/readability: kontrastowe kolory, szerokość tekstu ograniczona, brak informacji wyłącznie kolorem
- Screen-reader semantics: hierarchiczne listy/drzewo, aria-expanded, aria-selected, opis panelu
- Reduced motion and sensory considerations: wyłączenie animacji przez prefers-reduced-motion

## Responsive behavior

- Supported breakpoints/devices: desktop, tablet, telefon od 360 px
- Layout adaptations: panel szczegółów obok mapy na desktopie, pod mapą na mniejszych ekranach; treść narracyjna pozostaje jednokolumnowa na każdym breakpointcie
- Global navigation: pełne etykiety w headerze na desktopie; na telefonie trasy otwierają się в `Sheet`. Lokalні індекси також переходять у компактні селектори або `Sheet`.
- Touch/hover differences: duże cele dotykowe; hover tylko jako dodatek

## Typed-reference previews

Authored typed references rendered by `LegalLink` and `LegalReferenceArrow` use the shared shadcn `HoverCard` as a compact orientation aid. The trigger remains the real internal `Link` or external HTTPS anchor: pointer hover and keyboard focus may open the card, while click, `_blank`, and touch navigation are never intercepted. Do not add previews to ordinary navigation links, source-reader controls, or quoted statutory text that was not authored as a typed reference.

Preview copy is deterministic and provenance-first. Reviewed provision summaries come only from a reviewed `LegalExplanation`. An existing non-reviewed editorial summary may appear only with the visible `Редакційний матеріал` status and its real source-edition metadata; when editorial content is absent, the card says `Лише джерело` and shows the exact locator plus a short generated source-text excerpt. Document metadata, evidence title/description/purpose, map title/summary, case title/subtitle, registered official-source label/note, exact-URL authored source metadata, and HTTPS hostname are the only other sources. Edition, legal-state, verification, and official source metadata are shown when canonical data provides them. A stale or historical edition never borrows editorial prose from another edition; only an exact source-edition match may appear as draft or reviewed. No runtime AI, article-number inference, or invented interpretation is allowed.

Editorial preview modules are lazy-loaded when a card opens and cached by stable reference identity. The card has a visible status label, clearly marks source-only fallback, and respects the existing shadcn reduced-motion CSS. The deterministic pipeline is `npm.cmd run test:previews` (coverage fixture), followed by `npm.cmd run typecheck`, `npm.cmd run build`, and the repository corpus/editorial checks.

## Interaction states

- Loading: nie dotyczy; treść edukacyjna i zbudowany korpus źródeł są statycznymi, typowanymi danymi lokalnymi
- Empty: komunikat przy braku wyników wyszukiwania
- Error: bezpieczny komunikat, gdy brak danych węzła
- Success: podświetlenie znalezionego/wybranego węzła
- Comparative: zmiana trasy CUKR / pobyt czasowy i pracę przebudowuje podsumowanie, źródła i pełny timeline
- Dense evidence: rejestry dokumentów i terminów przechodzą z tabel desktopowych do opisanych wierszy na telefonie
- Disabled: filtr bez wyników pozostaje widoczny z liczbą 0
- Offline/slow network: zbudowana aplikacja, indeks artykułów i lokalne PDF-y działają bez API; zewnętrzne strony ELI wymagają połączenia

## Content voice

- Tone: spokojny, konkretny, edukacyjny
- Terminology: polski termin + proste ukraińskie objaśnienie
- Microcopy rules: krótkie zdania; czasowniki działania; jawne odróżnianie „przepis mówi” od „w praktyce sprawdź”

## Implementation constraints

- Framework/styling system: Vite, React, TypeScript, React Router, Tailwind CSS v4, shadcn `base-vega`
- Design-token constraints: semantyczne klasy i centralne CSS custom properties; brak surowych kolorów w komponentach; wewnętrzne linki prawne korzystają z jednego resolvera rejestrów danych i jednego wzorca fokusu
- Performance constraints: dane lokalne, brak zapytań API, rozsądny podział stron i komponentów
- Compatibility constraints: współczesne Chrome, Safari, Firefox, Edge
- Test/screenshot expectations: typecheck, production build, sprawdzenie tras, deep linków, interakcji, konsoli, responsywności i klawiatury

## Open questions

- [ ] Które rzeczywiste, zanonimizowane wezwania dodać jako pierwsze case studies?
- [ ] Czy kolejne wydanie ma śledzić postęp nauki w localStorage?
- [ ] Czy potrzebna będzie wersja dwujęzyczna ukraiński/polski dla całych objaśnień?
