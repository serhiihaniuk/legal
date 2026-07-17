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
        sources: guide.sources.map((source) => source.note),
      },
      `document-guides[${index}]`
    )
  })
  return content
}

export const documentGuides: readonly DocumentGuide[] =
  defineDocumentGuideContent([
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
  ])
