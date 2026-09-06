import deadlineObstacleDocumentTopic from "./editorial/guides/deadline-obstacle"
import proceedingCertificateDocumentTopic from "./editorial/guides/proceeding-certificate"
import workOrganisationEvidenceDocumentTopic from "./editorial/guides/work-organisation-evidence"
import statusDocumentsDocumentTopic from "./editorial/guides/status-documents"
import blueCardAnnexDocumentTopic from "./editorial/guides/blue-card-annex"
import blueCardNotificationDocumentTopic from "./editorial/guides/blue-card-notification"
import traineeVolunteerAnnexDocumentTopic from "./editorial/guides/trainee-volunteer-annex"
import researchAnnexDocumentTopic from "./editorial/guides/research-annex"
import studyAnnexDocumentTopic from "./editorial/guides/study-annex"
import ictApplicationDocumentTopic from "./editorial/guides/ict-application"
import familyAbroadApplicationDocumentTopic from "./editorial/guides/family-abroad-application"
import familyApplicationConsentDocumentTopic from "./editorial/guides/family-application-consent"
import fingerprintRecordDocumentTopic from "./editorial/guides/fingerprint-record"
import signatureSpecimenDocumentTopic from "./editorial/guides/signature-specimen"
import cukrApplicationDocumentTopic from "./editorial/guides/cukr-application"
import permanentApplicationDocumentTopic from "./editorial/guides/permanent-application"
import residentApplicationDocumentTopic from "./editorial/guides/resident-application"
import responseLetterDocumentTopic from "./editorial/guides/response-letter"
import dispatchProofDocumentTopic from "./editorial/guides/dispatch-proof"
import requirementsTableDocumentTopic from "./editorial/guides/requirements-table"
import caseAssessmentDocumentTopic from "./editorial/guides/case-assessment"
import jobDescriptionDocumentTopic from "./editorial/guides/job-description"
import familyEvidenceDocumentTopic from "./editorial/guides/family-evidence"
import visaDocumentTopic from "./editorial/guides/visa"
import { stayHistoryDocumentTopic } from "./editorial/guides/stay-history"
import { evidenceMatrixDocumentTopic } from "./editorial/guides/evidence-matrix"
import { caseFileIndexDocumentTopic } from "./editorial/guides/case-file-index"
import { civilStatusRecordDocumentTopic } from "./editorial/guides/civil-status-record"
import { healthInsuranceDocumentTopic } from "./editorial/guides/health-insurance"
import { incomeEvidenceDocumentTopic } from "./editorial/guides/income-evidence"
import { housingEvidenceDocumentTopic } from "./editorial/guides/housing-evidence"
import { studyConfirmationDocumentTopic } from "./editorial/guides/study-confirmation"
import { tuitionPaymentDocumentTopic } from "./editorial/guides/tuition-payment"
import { studyProgressDocumentTopic } from "./editorial/guides/study-progress"
import { qualificationEvidenceDocumentTopic } from "./editorial/guides/qualification-evidence"
import { polishLanguageProofDocumentTopic } from "./editorial/guides/polish-language-proof"
import { businessEvidenceDocumentTopic } from "./editorial/guides/business-evidence"
import { settlementIntentionDocumentTopic } from "./editorial/guides/settlement-intention"
import { digitalPhotoDocumentTopic } from "./editorial/guides/digital-photo"
import { apostilleLegalisationDocumentTopic } from "./editorial/guides/apostille-legalisation"
import { defineLegalTextContent } from "~/data/legal-library/legal-text"
import type { DocumentGuide } from "./contracts"
import { employmentAnnex1Topic } from "./editorial/guides/employment-annex-1"
import { employmentContractTopic } from "./editorial/guides/employment-contract"
import { mosApplicationTopic } from "./editorial/guides/mos-application"
import { passportTopic } from "./editorial/guides/passport"
import { upoTopic } from "./editorial/guides/upo"
import { ukraineWorkNotificationTopic } from "./editorial/guides/ukraine-work-notification"
import { authoritySummonsTopic } from "./editorial/guides/authority-summons"
import { deliveryProofTopic } from "./editorial/guides/delivery-proof"
import { powerOfAttorneyTopic } from "./editorial/guides/power-of-attorney"
import { administrativeDecisionTopic } from "./editorial/guides/administrative-decision"
import { zusConfirmationTopic } from "./editorial/guides/zus-confirmation"
import { businessRegisterInformationTopic } from "./editorial/guides/business-register-information"
import { crbrInformationTopic } from "./editorial/guides/crbr-information"
import { stampDutyProofTopic } from "./editorial/guides/stamp-duty-proof"
import { residenceCardFeeProofTopic } from "./editorial/guides/residence-card-fee-proof"
import { peselUkrConfirmationTopic } from "./editorial/guides/pesel-ukr-confirmation"
import { residenceCardTopic } from "./editorial/guides/residence-card"
import { swornTranslationTopic } from "./editorial/guides/sworn-translation"

function defineDocumentGuideContent<const T extends readonly DocumentGuide[]>(
  content: T
): T {
  content.forEach((guide, index) => {
    defineLegalTextContent(
      {
        documentType: guide.documentType,
        description: guide.description,
        preparedBy: guide.preparedBy,
        howToObtain: guide.howToObtain,
        formAndValidity: guide.formAndValidity,
        purpose: guide.purpose,
        doesNotProve: guide.doesNotProve,
        legalBasis: guide.legalBasis,
        keyChecks: guide.keyChecks,
        explanation: guide.explanation,
        sources: guide.sources.map((source) => source.note),
      },
      `document-guides[${index}]`
    )
  })
  return content
}

export const documentGuides: readonly DocumentGuide[] =
  defineDocumentGuideContent([
    blueCardNotificationDocumentTopic.body,
    deadlineObstacleDocumentTopic.body,
    proceedingCertificateDocumentTopic.body,
    workOrganisationEvidenceDocumentTopic.body,
    statusDocumentsDocumentTopic.body,
    blueCardAnnexDocumentTopic.body,
    traineeVolunteerAnnexDocumentTopic.body,
    researchAnnexDocumentTopic.body,
    studyAnnexDocumentTopic.body,
    ictApplicationDocumentTopic.body,
    familyAbroadApplicationDocumentTopic.body,
    familyApplicationConsentDocumentTopic.body,
    fingerprintRecordDocumentTopic.body,
    signatureSpecimenDocumentTopic.body,
    cukrApplicationDocumentTopic.body,
    permanentApplicationDocumentTopic.body,
    residentApplicationDocumentTopic.body,
    responseLetterDocumentTopic.body,
    dispatchProofDocumentTopic.body,
    requirementsTableDocumentTopic.body,
    caseAssessmentDocumentTopic.body,
    jobDescriptionDocumentTopic.body,
    familyEvidenceDocumentTopic.body,
    visaDocumentTopic.body,
    employmentAnnex1Topic.body,
    employmentContractTopic.body,
    mosApplicationTopic.body,
    passportTopic.body,
    upoTopic.body,
    ukraineWorkNotificationTopic.body,
    authoritySummonsTopic.body,
    deliveryProofTopic.body,
    powerOfAttorneyTopic.body,
    administrativeDecisionTopic.body,
    zusConfirmationTopic.body,
    businessRegisterInformationTopic.body,
    crbrInformationTopic.body,
    stampDutyProofTopic.body,
    residenceCardFeeProofTopic.body,
    peselUkrConfirmationTopic.body,
    residenceCardTopic.body,
    swornTranslationTopic.body,
    stayHistoryDocumentTopic.body,
    evidenceMatrixDocumentTopic.body,
    caseFileIndexDocumentTopic.body,
    civilStatusRecordDocumentTopic.body,
    healthInsuranceDocumentTopic.body,
    incomeEvidenceDocumentTopic.body,
    housingEvidenceDocumentTopic.body,
    studyConfirmationDocumentTopic.body,
    tuitionPaymentDocumentTopic.body,
    studyProgressDocumentTopic.body,
    qualificationEvidenceDocumentTopic.body,
    polishLanguageProofDocumentTopic.body,
    businessEvidenceDocumentTopic.body,
    settlementIntentionDocumentTopic.body,
    digitalPhotoDocumentTopic.body,
    apostilleLegalisationDocumentTopic.body,
  ])
