# Batch 121: KPA initiation module preparation

Prepared on 23 September 2026. Implementation and independent final review remain pending. This is preparation, not acceptance of the current explanation or an update of the atlas baseline.

## Target and reader need

Full-read target: `app/data/legal-library/learning/modules/kpa/initiation.ts`, stable ID `initiation`, order 6, SHA256 `9BA105CE446DAE3107E00E9576FED70E829AFF6266F620FE430E438ECC77D88D`.

The accepted map article `app/data/legal-map/editorial/topics/initiation.ts` was read, including its separate July paper-filing example and residence-specific boundary. Relevant demand/response roles were inspected in `authority-summons.ts` and `response-letter.ts`. The previously inspected receipt, service and procedural-order guides supply the document mapping below. This does not revalidate whole neighbouring articles or guides.

The module should explain how a request becomes a procedural matter, which conditions concern a valid submission, and why a curable formal defect, an obstacle to initiation and failure to prove the requested entitlement lead to different actions.

## Concrete gaps

- The module names `na żądanie strony` and `z urzędu` but does not explain who selects the route or the narrow article 61 § 2 exception. The relevant substantive law determines whether a request is required. The authority cannot casually replace the requested subject with another one.
- `Podanie` is broader than the initial application. A later explanation, appeal or complaint can also be a podanie without initiating a new first-instance merits case.
- The declared article range includes 61a and 62, but neither receives a real explanation. Add refusal to initiate and the cumulative conditions for one proceeding concerning several parties.
- Separate drafting, signing, dispatch, actual receipt, commencement and subsequent notice. A draft or document date is not proof of delivery to the authority. For an ordinary complete request, the general rule is article 61 § 3; electronic requests have the specific § 3a reference.
- Explain channel and signature separately. A signed attachment sent to an ordinary email address is not automatically a valid submission under article 63. Conversely, an allowed paper filing missing a signature presents a different question. Special procedures can displace the general channel choice.
- Replace the vague category `brak materialny` with a concrete distinction between a statutory formal requirement and an unresolved fact or substantive condition. An attachment can be formally required in a particular procedure; its name alone does not determine the classification.
- The current missing-employment-contract example is not completed. It does not identify the procedure, legal attachment requirement, document contents or result. Do not conclude universally that a missing umowa o pracę is either a formal defect or merely evidence.
- Article 64 § 1 requires both absence of the address and inability to establish it from available data. Article 64 § 2 concerns other requirements established by law, with a specified period of at least seven days and the required warning. Seven days is a minimum, not the duration of every request.
- Distinguish article 65 forwarding, article 66 separation of several matters, and article 66 § 3 return. They are not generic alternatives called “refusal”. Do not duplicate batch 119's entire competence explanation.

Recommended authored sections: request versus own initiative; filing, receipt and commencement; channel, content and signature; formal defect versus procedural bar versus merits; wrong addressee and multiple matters; a short special-procedure boundary if freshly verified. Integrate the completed example into the formal-defect section. Remove repeated orientation and exercises rather than restyling them.

## Fresh official source evidence

On 23 September 2026, [KPA base metadata](https://eli.gov.pl/api/acts/DU/1960/168) again reported `IN_FORCE`, status `akt posiada tekst jednolity`, changeDate `2025-12-12T14:35:06`. Its inspected `Akty zmieniające` list begins with DU/2025/769, effective 13 July 2025, followed by older amendments; no later KPA amendment was listed.

Relevant passages were read from the current fetched [official KPA compilation, DU/2025/1691](https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf), 46 pages, printed compilation date 4 December 2025. Physical PDF page locators:

| Provision | Page | Scope and writing limit |
| --- | --- | --- |
| 14 § 1a–1d | 4 | Paper and electronic writing, signatures and specified online-service context. `Na piśmie` is not synonymous with paper only. Do not turn the authority's electronic-seal rules into a blanket applicant-signature alternative. |
| 61 §§ 1–3a | 14 | Request or own initiative. The exceptional own-initiative opening of a request-only matter requires a particularly important party interest, consent during proceedings, and discontinuance if consent is not obtained. Request commencement is tied to delivery; electronic commencement refers to issuance of the statutory dowód otrzymania. |
| 61 §§ 4–5 | 15 | Notify all parties of initiation on own initiative or one party's request. The notice is not a merits decision. Information duties in § 5 are distinct from the commencement event. |
| 61a | 15 | A non-party's request or other justified reasons preventing initiation produces a postanowienie refusing initiation; zażalenie is provided. Do not use this to disguise an assessment that an otherwise admissible claim lacks substantive evidence. |
| 62 | 15 | Same facts, same legal basis and the same competent authority are cumulative conditions for conducting one proceeding for more than one party. Family connection or simultaneous filing alone is insufficient. |
| 63 §§ 1–4 | 15 | General channels; electronic delivery address or account in the authority's system; ordinary email is left unexamined unless a separate rule provides otherwise. Person, address, demand and special requirements; signatures and the stated alternative for someone unable to sign; prescribed data format where required; filing confirmation on request. |
| 64 | 15 | Unascertainable missing address versus other statutory formal defects. A demand to cure under § 2 needs the selected period, at least seven days, and warning of the specified consequence. |
| 65 | 15 | Prompt forwarding to the competent authority with reasoned notification. § 2 protects filing before the prescribed deadline; it does not make every competent-authority processing clock run from the first receipt or fix an invalid filing channel. |
| 66 §§ 1–2 | 15 | The authority handles its own matters and instructs separate applications for others. A separate application complying with the notification within 14 days of service retains the original filing date. This requires the later action, unlike automatic forwarding under article 65. |
| 66 §§ 3–4 | 16 | Return by appealable postanowienie if the competent authority cannot be identified from the application or an ordinary court is competent. Preserve the exception where that court has already declined jurisdiction. |
| 77 § 1 | 18 | Gathering and examining all evidence is a separate task from formal completeness. This does not establish any particular residence income requirement or make every requested document mandatory. |
| 57 §§ 1 and 4 | 14 | The selected day-count example omits the service day and accounts for a Saturday/statutory holiday endpoint. The proposed dates below end on a Thursday and need no extension. |

The full KPA-amending article 1 of [DU/2025/769](https://eli.gov.pl/api/acts/DU/2025/769/text/O/D20250769.pdf), pages 1–5, and articles 31(1), page 19, and 48, page 21, were read in the same fresh 23 September source session for batch 119. It does not change KPA 61–66 or the other core filing provisions above. Article 31(1) preserves previous KPA wording for cases initiated and unfinished before commencement. The general commencement date was 13 July 2025; the article 48 exceptions do not concern its KPA-amending article 1. The proposed example is a separate 2026 matter.

## Source gaps and boundaries to preserve

- Article 61 § 3 is expressly about proceedings on a party's request. Do not invent a universal own-initiative commencement date by copying that rule. If the rewrite gives an exact date test for own-initiative proceedings, verify the relevant procedural interpretation and source it separately.
- This check does not settle every effect of curing a defective initial request on commencement or each processing deadline. Do not call the date of cure a universal new commencement date or assert universal retroactivity. The recommended example concludes only that the identified defect was cured in time.
- KPA 61 § 3a points to article 41 of the electronic-delivery statute. Its actual receipt definition, current transition rules and the operation of a particular service require additional source work if the author develops an electronic example. Do not call any timestamp, UPO from any system, sent-email record or account draft the statutory dowód otrzymania.
- The accepted map's current residence explanation cites foreigners-law 99(1)(1), 106c/d/j/k/l and 108, [MP/2026/370](https://eli.gov.pl/api/acts/MP/2026/370/text.pdf), and [DU/2025/1794](https://eli.gov.pl/api/acts/DU/2025/1794/text/O/D20251794.pdf). Reuse its distinction, not its earlier review date as proof of today's law. Before republishing detailed special claims, the author must refresh the affected provisions, later amendments, activation and article 12 transition. The 27 April 2026 activation was separately verified in this source session, but that alone is not a complete current MOS audit.
- The general example must explicitly allow paper submission and identify a competent authority and a party with an admissible request. It must not look like a substitute paper route for an ordinary current MOS residence application.
- Do not infer legal stay or access to work from receipt, commencement, cure or UPO. Those depend on separate statutory conditions.

## Recommended completed example and specimen

Use a separate, expressly simplified ordinary KPA request in which paper submission is permitted. Party status, competence, an identifiable address and demand, and all other formal requirements are stipulated. The only formal defect is the missing handwritten signature on the initial paper application. No representative, ordinary email, special residence procedure or wrong-authority issue is involved.

The authority receives the unsigned application on 24 August 2026. A properly framed article 64 § 2 wezwanie is served on the applicant on 27 August. It identifies the missing signature and gives seven days from service with the required warning. The applicant follows the specified method: on 31 August they lodge a personally signed replacement counterpart reproducing the same demand, with a short cover response. The application is actually signed on 31 August; do not backdate the signature to 24 August. The authority's office confirms receipt that day. By 1 September, examination of the actual signed document establishes that the missing-signature defect has been cured. The selected deadline ends on 3 September. The requested substantive outcome remains undecided.

This is different from the accepted map's already complete July filing/notice example and the evidence-matrix article's combined signature/payroll inquiry. Do not silently reuse those fictional records or add their attachments.

Suggested Polish specimen consists of two separately labelled shortened excerpts, not one document:

**Excerpt from the fictional wezwanie:**

> Na podstawie art. 64 § 2 KPA wzywa się do usunięcia braku podpisu we wniosku wniesionym 24 sierpnia 2026 r., w terminie siedmiu dni od doręczenia niniejszego wezwania. Brak należy usunąć przez złożenie własnoręcznie podpisanego egzemplarza wniosku o niezmienionej treści. Nieusunięcie braku w tym terminie spowoduje pozostawienie podania bez rozpoznania.

**Excerpt from the fictional response dated 31 August:**

> W odpowiedzi na wezwanie doręczone 27 sierpnia 2026 r. przedkładam własnoręcznie podpisany egzemplarz wniosku wniesionego 24 sierpnia. Żądanie i pozostała treść wniosku nie uległy zmianie. Załącznik: podpisany egzemplarz wniosku.

The complete fictional documents contain the required case identification and signatures; personal data and signatures are not reproduced. The author must explain that the attached application actually bears the signature. A signed cover letter merely promising a signature is not the selected cure. The completed outcome is timely cure of this defect, not automatic success, a new permit, or proof of all substantive facts. The dates are illustrative, and the chosen seven-day period is not every authority's universal period.

A small chronology table can accompany these excerpts if useful, but avoid duplicating the same facts as both a long table and a long letter. No diagram or simulated portal is necessary.

## Exact document destinations

| Actual record or conditional mechanism | Existing guide ID | Correct role |
| --- | --- | --- |
| Selected article 64 § 2 demand | `authority-summons` | Names the exact defect, chosen way to cure, service-based period and warning. |
| Proof of service on 27 August | `delivery-proof` | Establishes service, distinct from the demand's issue date. |
| Cover response to that demand | `response-letter` | Fits an actual response to wezwanie; it does not replace the signed application attached to it. |
| Office confirmation on 31 August | `dispatch-proof` | Use its office-receipt role accurately, without labelling this as postal dispatch or electronic UPO. |
| Private comparison/chronology | `case-file-index` or `requirements-table` | Optional working record. No mandatory submission or independent proof is created by it. Choose the guide matching the actual authored record rather than adding both by default. |
| Refusal to initiate under 61a or return under 66 § 3 | `procedural-order` and `procedural-complaint` | Conditional explanation of postanowienie and its zażalenie. Neither occurs in the selected successful cure example. |
| Merits decision after substantive assessment | `administrative-decision` | Conditional contrast. No such decision is invented in the example. |
| Actual special MOS filing and technical receipt | `mos-application` and `upo` | Use only in a separately source-verified special-procedure boundary, absent from the paper example. |

No dedicated generic KPA application or zawiadomienie o wszczęciu guide was established in the inspected guide set. Name those records directly. Do not link an ordinary application to `mos-application` or a notice of commencement to `procedural-order`. No new document guide is necessary merely to complete this module.

## Integration and completion boundary

Preserve the module ID/order. Existing KPA panel mapping includes 61, 61a, 62, 63, 64, 65 and 66. If the final text substantively explains 14 or computes the selected deadline under 57, align that explicit panel mapping narrowly; inline references alone do not drive the KPA panel. Do not change source text or imply that adjacent provision commentary has been rewritten.

Use typed exact-act references and the existing authored section/specimen contracts. Independent final review must read every prose field, specimen and source qualification. Future verification must cover projection, the real loader/render path, and desktop/mobile content. This preparation changed only this note and ran no tests, build, browser or commit.
