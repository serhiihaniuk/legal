import registeredWorkDeclarationTopic from "./editorial/guides/registered-work-declaration"
import privateHealthInsurancePolicyTopic from "./editorial/guides/private-health-insurance-policy"
import residentialLeaseTopic from "./editorial/guides/residential-lease"
import polishGraduationDiplomaTopic from "./editorial/guides/polish-graduation-diploma"
import workLocationConfirmationTopic from "./editorial/guides/work-location-confirmation"
import payrollStatementTopic from "./editorial/guides/payroll-statement"
import boardAppointmentResolutionTopic from "./editorial/guides/board-appointment-resolution"
import shareholderListTopic from "./editorial/guides/shareholder-list"
import boardRemunerationResolutionTopic from "./editorial/guides/board-remuneration-resolution"
import professionalExperienceConfirmationTopic from "./editorial/guides/professional-experience-confirmation"
import zusInsuranceHistoryTopic from "./editorial/guides/zus-insurance-history"
import employmentIncomeCertificateTopic from "./editorial/guides/employment-income-certificate"
import taxIncomeCertificateTopic from "./editorial/guides/tax-income-certificate"
import bankStatementTopic from "./editorial/guides/bank-statement"
import bankFundsCertificateTopic from "./editorial/guides/bank-funds-certificate"
import zusNoArrearsDocumentTopic from "./editorial/guides/zus-no-arrears"
import zusHealthRegistrationDocumentTopic from "./editorial/guides/zus-health-registration"
import zusRcaDocumentTopic from "./editorial/guides/zus-rca"
import judicialComplaintTopic from "./editorial/guides/judicial-complaint"
import courtJudgmentTopic from "./editorial/guides/court-judgment"
import deadlineObstacleDocumentTopic from "./editorial/guides/deadline-obstacle"
import proceduralOrderTopic from "./editorial/guides/procedural-order"
import administrativeAppealTopic from "./editorial/guides/administrative-appeal"
import proceduralComplaintTopic from "./editorial/guides/procedural-complaint"
import kartaPolakaDocumentTopic from "./editorial/guides/karta-polaka"
import corporateWorkPermitDocumentTopic from "./editorial/guides/corporate-work-permit"
import proceedingCertificateDocumentTopic from "./editorial/guides/proceeding-certificate"
import workOrganisationEvidenceDocumentTopic from "./editorial/guides/work-organisation-evidence"
import statusDocumentsDocumentTopic from "./editorial/guides/status-documents"
import blueCardAnnexDocumentTopic from "./editorial/guides/blue-card-annex"
import blueCardNotificationDocumentTopic from "./editorial/guides/blue-card-notification"
import temporaryResidenceNotificationDocumentTopic from "./editorial/guides/temporary-residence-notification"
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
import jobSearchEvidenceDocumentTopic from "./editorial/guides/job-search-evidence"
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
    registeredWorkDeclarationTopic.body,
    privateHealthInsurancePolicyTopic.body,
    residentialLeaseTopic.body,
    polishGraduationDiplomaTopic.body,
    workLocationConfirmationTopic.body,
    boardAppointmentResolutionTopic.body,
    shareholderListTopic.body,
    boardRemunerationResolutionTopic.body,
    professionalExperienceConfirmationTopic.body,
    judicialComplaintTopic.body,
    courtJudgmentTopic.body,
    blueCardNotificationDocumentTopic.body,
    temporaryResidenceNotificationDocumentTopic.body,
    corporateWorkPermitDocumentTopic.body,
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
    proceduralOrderTopic.body,
    administrativeAppealTopic.body,
    proceduralComplaintTopic.body,
    zusConfirmationTopic.body,
    zusInsuranceHistoryTopic.body,
    employmentIncomeCertificateTopic.body,
    taxIncomeCertificateTopic.body,
    bankStatementTopic.body,
    bankFundsCertificateTopic.body,
    payrollStatementTopic.body,
    zusNoArrearsDocumentTopic.body,
    zusHealthRegistrationDocumentTopic.body,
    zusRcaDocumentTopic.body,
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
    jobSearchEvidenceDocumentTopic.body,
    polishLanguageProofDocumentTopic.body,
    businessEvidenceDocumentTopic.body,
    settlementIntentionDocumentTopic.body,
    kartaPolakaDocumentTopic.body,
    digitalPhotoDocumentTopic.body,
    apostilleLegalisationDocumentTopic.body,
  ])
