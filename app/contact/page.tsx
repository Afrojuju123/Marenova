import type { Metadata } from 'next'
import { ArrowDown } from 'lucide-react'
import { PageIntro } from '@/components/page-intro'
import { ContactGuidance } from '@/components/contact/contact-guidance'
import { practice } from '@/lib/practice'
import { BookingOptions } from '@/components/contact/booking-options'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Contact the Practice',
  description: `Get started with ${practice.name}. Psychiatric care for adults 18+ located in Florida, including older adult care, appointment guidance, and facility partnership information.`,
}

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="One provider. A personal connection."
        currentPage="Contact"
        title={<>A conversation is<br /><span className="text-heading-accent">a good place to start.</span></>}
        description="Whether you are considering your first appointment or have a practical question about the practice, let’s help you find the right next step."
      >
        <p className="mb-5 text-lg leading-relaxed font-semibold text-primary">{practice.eligibility}</p>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
          <a href="#booking" className={buttonVariants({ size: 'lg' })}>Appointment information <ArrowDown data-icon="inline-end" aria-hidden="true" /></a>
          <a href="#general-inquiries" className="text-link">General inquiries <ArrowDown className="size-4" aria-hidden="true" /></a>
        </div>
      </PageIntro>
      <div className="site-container grid items-start gap-12 py-14 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <BookingOptions />
        <section id="general-inquiries" aria-labelledby="contact-guidance-heading" className="flex scroll-mt-32 flex-col gap-6">
          <div>
            <p className="eyebrow mb-4">Practical questions, thoughtfully answered</p>
            <h2 id="contact-guidance-heading" className="section-heading">Get in touch.</h2>
            <p className="body-copy mt-4">Start with general, non-clinical questions about the practice. For anything related to your care, follow the secure instructions supplied directly by the practice.</p>
          </div>
          <ContactGuidance />
        </section>
      </div>
    </>
  )
}
