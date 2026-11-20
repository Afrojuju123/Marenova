import { CalendarDays, Check, ClipboardCheck, Clock3, Minus, ShieldAlert } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const scope = [
  {
    icon: ClipboardCheck,
    title: 'Referrals we consider',
    description: 'For residents appropriate for scheduled outpatient psychiatric care.',
    points: [
      'Late-life depression, anxiety, grief, and adjustment-related distress.',
      'Sleep concerns assessed in the context of physical and mental health.',
      'Dementia-related behavioral and psychological symptoms, including Lewy body dementia support.',
      'Stable bipolar disorder and ongoing psychiatric medication management, subject to individual review.',
    ],
  },
  {
    icon: Check,
    title: 'What we provide',
    description: 'Clear recommendations, shared goals, and continuity of follow-up.',
    points: [
      'Psychiatric evaluation and an individualized treatment plan.',
      'Medication review, risk–benefit discussions, and monitoring recommendations.',
      'Non-medication behavioral strategies and authorized care-team coordination.',
      'Scheduled telepsychiatry rounds with staff facilitation and documented follow-up.',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'What we do not provide',
    description: 'Defined boundaries help teams escalate to the right level of care.',
    points: [
      'Emergency on-call sedation, rapid tranquilization, or chemical restraint services.',
      '24/7 on-call coverage, continuous monitoring, or guaranteed same-day assessments.',
      'Emergency treatment of delirium, intoxication, withdrawal, or medical instability.',
      'A replacement for on-site nursing, primary care, neurology, or emergency services.',
    ],
  },
]

export function ServiceScope() {
  return (
    <section id="what-we-provide" aria-labelledby="scope-heading" className="section-space">
      <div className="site-container">
        <div className="max-w-[800px]">
          <p className="eyebrow mb-4">03 / A clear scope of care</p>
          <h2 id="scope-heading" className="section-heading">What We Provide</h2>
          <p className="body-copy mt-5">Dependable collaboration starts with shared expectations. We confirm service scope, referral eligibility, documentation, and escalation responsibilities before care begins.</p>
        </div>
        <Accordion multiple defaultValue={['What we do not provide']} className="mt-8 border-y">
          {scope.map(({ icon: Icon, title, description, points }, index) => (
            <AccordionItem key={title} value={title}>
              <AccordionTrigger>
                <span className="flex items-center gap-4"><Icon className="size-6 shrink-0 text-secondary-foreground" strokeWidth={1.4} aria-hidden="true" />{title}</span>
              </AccordionTrigger>
              <AccordionContent>
                <p>{description}</p>
                <ul className="flex flex-col gap-3">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3">
                      {index === 2 ? <Minus className="mt-1.5 size-4 shrink-0 text-destructive" aria-hidden="true" /> : <Check className="mt-1.5 size-4 shrink-0 text-secondary-foreground" aria-hidden="true" />}
                      {point}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion className="mt-8 border-y">
          <AccordionItem value="rounding-schedule">
            <AccordionTrigger>
              <span className="flex items-center gap-4"><CalendarDays className="size-6 shrink-0 text-secondary-foreground" strokeWidth={1.4} aria-hidden="true" />A rounding schedule built together.</span>
            </AccordionTrigger>
            <AccordionContent>
              <p>There is no universal rounding frequency. The facility agreement specifies recurring visit days, resident review intervals, communication channels, coverage limitations, and how requests between visits are handled. On-site rounding is not implied by a telepsychiatry partnership.</p>
              <dl className="mt-6 grid gap-7 md:grid-cols-3">
                {[
                  { term: 'Before the first round', detail: 'Confirm consent or representative authority, records access, medication lists, referral priorities, and a staff point of contact.' },
                  { term: 'At scheduled rounds', detail: 'Review target symptoms and staff observations, reassess treatment response and side effects, and document next steps and the next review interval.' },
                  { term: 'Between visits', detail: 'Use the agreed secure channel for routine updates. Follow facility medical escalation procedures for new or urgent changes; do not wait for the next round.' },
                ].map(({ term, detail }) => (
                  <div key={term} className="border-t pt-5">
                    <dt className="font-semibold text-primary">{term}</dt>
                    <dd className="mt-3">{detail}</dd>
                  </div>
                ))}
              </dl>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Alert role="note" className="mt-10">
          <Clock3 aria-hidden="true" />
          <AlertTitle>For acute deterioration, follow your emergency pathway.</AlertTitle>
          <AlertDescription>Sudden confusion, severe medication reactions, threats of imminent harm, or medical instability need immediate clinical triage. Activate the facility&apos;s medical or emergency response; call <a href="tel:911">911</a> for immediate danger. Referral messages are not an emergency service.</AlertDescription>
        </Alert>
      </div>
    </section>
  )
}
