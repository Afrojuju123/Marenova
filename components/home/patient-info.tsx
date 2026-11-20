import Link from 'next/link'
import { ArrowUpRight, Laptop, Leaf } from 'lucide-react'
import { DeferredFaqAccordion } from '@/components/deferred-content'
import { PracticeAction } from '@/components/practice-action'

const questions = [
  {
    question: 'What can I expect at my first appointment?',
    answer: 'Your first visit is a conversation about what brings you to care, your health history, current medications, and your goals. Your provider will listen, ask questions, discuss clinical impressions, and recommend next steps. You are welcome to ask questions at any point. An evaluation does not guarantee a diagnosis or prescription.',
  },
  {
    question: 'How do telehealth appointments work?',
    answer: 'Once your visit is confirmed, the practice provides a secure video link and instructions. You will need a private space, a reliable internet connection, and a phone, tablet, or computer with a camera and microphone. Your physical location must be in a state where the provider is authorized to practice. Some concerns may require in-person evaluation.',
  },
  {
    question: 'Can a family member or caregiver join?',
    answer: 'A trusted family member or caregiver may be involved when appropriate and with your permission or lawful authorization. This can be especially helpful when discussing medication history, changes in daily functioning, or support needs. Your preferences and privacy remain central to the visit.',
  },
  {
    question: 'Do you accept insurance?',
    answer: 'Insurance participation, self-pay fees, and payment policies should be confirmed directly with the practice before booking. No specific insurance networks or prices are listed on this website yet. Ask about your expected costs, any applicable cancellation fees, and whether you are eligible for a Good Faith Estimate.',
  },
  {
    question: 'Is medication always part of treatment?',
    answer: 'No. Recommendations are based on your assessment, preferences, medical history, and clinical needs. Your plan may include medication, psychotherapy referrals, practical strategies, or coordination with other healthcare professionals. Prescribing follows clinical safety standards and applicable laws; no particular medication is guaranteed.',
  },
]

export function PatientInfo() {
  return (
    <section id="patient-info" aria-labelledby="patient-info-heading" className="section-space">
      <div className="site-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <p className="eyebrow mb-4">A little clarity before you begin</p>
          <h2 id="patient-info-heading" className="section-heading">Your questions,<br />thoughtfully answered.</h2>
          <p className="body-copy mt-5 max-w-[380px]">
            Starting care can feel like a big step. Knowing what to expect can make it a little easier.
          </p>
          <div className="mt-7 flex items-start gap-3 border-t pt-6">
            <Laptop className="mt-0.5 size-5 shrink-0 text-secondary-foreground" strokeWidth={1.5} aria-hidden="true" />
            <p className="max-w-[300px] text-base leading-relaxed font-medium text-muted-foreground">Care from a comfortable, private space — without the commute.</p>
          </div>
          <div className="mt-4 flex flex-col items-start gap-2">
            <Link href="/patient-info" className="text-link">Explore all patient information <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
            <PracticeAction type="portal" variant="link" className="px-0" label="Already a patient? Visit your portal" />
          </div>
        </div>
        <DeferredFaqAccordion questions={questions.map((item) => ({ ...item, id: item.question }))} defaultOpen={questions[0].question} />
      </div>
    </section>
  )
}

export function ClosingInvitation() {
  return (
    <section aria-labelledby="invitation-heading" className="border-t bg-muted/60 py-16 sm:py-20">
      <div className="site-container flex flex-col items-center text-center">
        <Leaf className="mb-6 size-8 text-secondary-foreground" strokeWidth={1.2} aria-hidden="true" />
        <p className="eyebrow mb-4">At your pace. On your terms.</p>
        <h2 id="invitation-heading" className="section-heading max-w-[760px]">Your next chapter can start<br className="hidden sm:block" /> with a conversation.</h2>
        <p className="body-copy mt-5 max-w-[520px]">
          You don&apos;t need to have it all figured out. Just a willingness to take
          the first step. We&apos;ll meet you there.
        </p>
        <div className="mt-7">
          <PracticeAction size="lg" label="Start your first conversation" />
        </div>
        <Link href="/about#meet-your-provider" className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-base leading-relaxed font-medium text-muted-foreground underline-offset-4 hover:underline">
          A solo practice. A more personal kind of care.
          <ArrowUpRight className="size-3" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
