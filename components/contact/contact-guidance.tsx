import Link from 'next/link'
import { ArrowRight, LockKeyhole } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function ContactGuidance() {
  return (
    <div className="flex flex-col gap-7">
      <Alert role="note">
        <LockKeyhole aria-hidden="true" />
        <AlertTitle>Keep health information private</AlertTitle>
        <AlertDescription>This public website provides information only. Share medical records, symptoms, medication details, and other health information only through the secure communication process provided directly by the practice.</AlertDescription>
      </Alert>
      <dl className="flex flex-col gap-6">
        <div>
          <dt className="text-lg font-semibold text-primary">General practice questions</dt>
          <dd className="body-copy mt-2">Keep your first inquiry focused on eligibility, availability, fees, and telehealth arrangements. Use the practice contact details in your referral or welcome materials.</dd>
        </div>
        <div>
          <dt className="text-lg font-semibold text-primary">Insurance &amp; self-pay</dt>
          <dd className="body-copy mt-2">Confirm network participation and your expected costs before arranging a visit. Ask for a written fee quote or Good Faith Estimate, as applicable.</dd>
        </div>
        <div>
          <dt className="text-lg font-semibold text-primary">Established patients</dt>
          <dd className="body-copy mt-2">Follow the secure communication instructions supplied with your care for refills, clinical questions, or appointment changes. Do not use ordinary email for detailed health information.</dd>
        </div>
      </dl>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        <Link href="/patient-info#faqs" className="text-link">Common patient questions <ArrowRight className="size-4" aria-hidden="true" /></Link>
        <Link href="/patient-info#insurance-fees" className="text-link">Insurance &amp; fees <ArrowRight className="size-4" aria-hidden="true" /></Link>
      </div>
      <section id="facility-inquiries" aria-labelledby="facility-inquiries-heading" className="scroll-mt-32 border-t pt-7">
        <h3 id="facility-inquiries-heading" className="font-serif text-2xl text-primary">For facility teams</h3>
        <p className="body-copy mt-3">Start with your facility&apos;s name, Florida location, care setting, and a professional point of contact. Discuss service scope and coordination needs without identifying a resident.</p>
        <p className="body-copy mt-3">Do not send resident names, dates of birth, diagnoses, medication lists, or records with a general inquiry. Request the practice&apos;s designated secure referral instructions before sharing any clinical information.</p>
        <Link href="/facilities#what-we-provide" className="text-link mt-4">Review facility services <ArrowRight className="size-4" aria-hidden="true" /></Link>
      </section>
      <p className="text-base leading-relaxed text-muted-foreground">This page does not submit an inquiry, reserve an appointment, or establish a patient–provider relationship.</p>
      <Link href="/policies/privacy-policy" className="text-link self-start">Privacy Policy <ArrowRight className="size-4" aria-hidden="true" /></Link>
    </div>
  )
}
