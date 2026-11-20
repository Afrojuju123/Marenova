import { DeferredFaqAccordion } from '@/components/deferred-content'
import { patientQuestions } from '@/lib/patient-info'

export function PatientFaqs() {
  return (
    <section id="faqs" aria-labelledby="patient-faqs-heading" className="section-space scroll-mt-28">
      <div className="site-container grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-4">03 / FAQs</p>
          <h2 id="patient-faqs-heading" className="section-heading">A few answers.<br />A little reassurance.</h2>
          <p className="body-copy mt-5">Practical information about video visits, prescriptions, and staying in touch. Your provider will explain the policies that apply to your individual care.</p>
        </div>
        <DeferredFaqAccordion questions={patientQuestions} defaultOpen="telehealth" />
      </div>
    </section>
  )
}
