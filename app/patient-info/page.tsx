import type { Metadata } from 'next'
import { ArrowDown } from 'lucide-react'
import { PageIntro } from '@/components/page-intro'
import { CareSectionNavigation } from '@/components/care-page-hero'
import { PracticeAction } from '@/components/practice-action'
import { NewPatients } from '@/components/patient-info/new-patients'
import { InsuranceFees } from '@/components/patient-info/insurance-fees'
import { PatientFaqs } from '@/components/patient-info/patient-faqs'
import { PatientForms, TelehealthInformation } from '@/components/patient-info/patient-preparation'
import { ClosingInvitation } from '@/components/home/patient-info'
import { patientNavigation } from '@/lib/practice'

export const metadata: Metadata = {
  title: 'Patient Information',
  description: 'Prepare for care with Marenova Wellness. Explore the new patient process, insurance and self-pay information, Good Faith Estimate rights, patient forms, FAQs, and telehealth instructions.',
}

export default function PatientInformationPage() {
  return (
    <>
      <PageIntro
        eyebrow="A little clarity before you begin"
        currentPage="Patient Information"
        title={<>A clearer path to<br /><span className="text-heading-accent">your first appointment.</span></>}
        description="Starting care should feel a little less complicated. Find the practical information you need, with one provider and your wellbeing at the center."
      >
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
          <PracticeAction label="Contact the Practice" />
          <a href="#new-patients" className="text-link">Know what to expect <ArrowDown className="size-4" aria-hidden="true" /></a>
        </div>
      </PageIntro>
      <CareSectionNavigation links={patientNavigation} label="Patient information sections" />
      <NewPatients />
      <InsuranceFees />
      <PatientFaqs />
      <PatientForms />
      <TelehealthInformation />
      <ClosingInvitation />
    </>
  )
}
