import { createLegalLearningTextAuthor } from "./legal-text"

const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")
const kpaLaw = createLegalLearningTextAuthor("kpa")

export const validSameActCitation = workLaw.text`${workLaw.article("6")} and ${workLaw.articleRange("30", "39")}`
export const validCrossActCitation = workLaw.text`${kpaLaw.article("64", "art. 64 KPA")}`

// @ts-expect-error article 9999 is not present in the maintained work-act corpus
workLaw.article("9999")

// @ts-expect-error paragraph locators cannot be used as work-act article locators
workLaw.article("par-1")
