import Image from 'next/image'
import { BadgeCheck, GraduationCap, Languages, ShieldCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { PracticeAction } from '@/components/practice-action'
import { provider } from '@/lib/practice'

const credentials = [
  {
    icon: BadgeCheck,
    title: 'Board certification',
    detail: 'ANCC · Psychiatric–Mental Health Nurse Practitioner (PMHNP-BC)',
  },
  {
    icon: GraduationCap,
    title: 'Graduate education',
    detail: 'MSN, Psychiatric–Mental Health Nurse Practitioner · Chamberlain University, 2026',
  },
  {
    icon: ShieldCheck,
    title: 'Advanced practice licensure',
    detail: 'Active, unrestricted Florida APRN license.',
  },
  {
    icon: Languages,
    title: 'Languages',
    detail: 'English and Igbo · Fluent. French · Basic.',
  },
]

export function ProviderProfile() {
  return (
    <section id="meet-your-provider" aria-labelledby="provider-profile-heading" className="section-space bg-muted/65">
      <div className="site-container">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="mx-auto flex w-full max-w-[400px] flex-col gap-5">
            <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-soft">
              <Image
                src={provider.portrait}
                alt={`${provider.name}, board-certified psychiatric–mental health nurse practitioner, wearing a white clinical coat`}
                width={400}
                height={500}
                sizes="(max-width: 447px) calc(100vw - 48px), 400px"
                className="h-auto w-full"
              />
              <figcaption className="flex flex-col items-start gap-3 px-6 py-6">
                <Badge variant="secondary" className="h-auto px-3 py-1.5">
                  <BadgeCheck data-icon="inline-start" aria-hidden="true" />
                  ANCC Board-Certified
                </Badge>
                <p className="text-base leading-relaxed text-muted-foreground">One dedicated provider. A consistent partner in your care.</p>
              </figcaption>
            </figure>
            <p className="text-base leading-relaxed text-muted-foreground">
              Appointment availability and eligibility depend on your physical location, clinical needs, and applicable licensing requirements.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">Meet your provider</p>
            <h2 id="provider-profile-heading" className="section-heading">{provider.name}</h2>
            <p className="mt-3 text-lg font-semibold tracking-wide text-primary">{provider.credentials}</p>
            <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{provider.role}<br />Clinical Director · Marenova Wellness</p>
            <div className="mt-7 flex flex-col gap-5">
              <p className="body-copy">
                Kizito is an ANCC board-certified psychiatric–mental health nurse practitioner who brings a calm, whole-person perspective to care. His work is grounded in evidence, respect for your lived experience, and the belief that a strong therapeutic relationship starts with feeling heard.
              </p>
              <p className="body-copy">
                He brings more than 10 years of clinical experience across critical care nursing, cardiovascular services, interventional radiology, and diagnostic imaging. Caring for medically complex adults and older adults has shaped his attention to physical health, medication safety, and the ways emotional and medical needs overlap.
              </p>
              <p className="body-copy">
                Kizito earned his Master of Science in Nursing from Chamberlain University, completing 620 supervised psychiatric clinical hours in assessment, diagnostic reasoning, treatment planning, and safety assessment.
              </p>
              <p className="body-copy">
                At Marenova, his approach to adult and older-adult care is trauma-informed, culturally responsive, and collaborative. Together, you consider symptoms, sleep, medical conditions, existing medications, and practical goals. Loved ones and other healthcare professionals can be included when appropriate and with your permission.
              </p>
            </div>
            <div className="mt-8">
              <PracticeAction size="lg" label="Start your first conversation" />
            </div>
          </div>
        </div>
        <div className="mt-14 border-t pt-10 lg:mt-16">
          <h3 className="mb-7 font-serif text-2xl tracking-tight text-primary">Qualifications behind the care.</h3>
          <dl className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {credentials.map(({ icon: Icon, title, detail }) => (
              <div key={title} className="flex items-start gap-4">
                <Icon className="mt-1 size-6 shrink-0 text-secondary-foreground" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <dt className="text-lg font-semibold text-primary">{title}</dt>
                  <dd className="mt-2 text-lg leading-relaxed text-muted-foreground">{detail}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
