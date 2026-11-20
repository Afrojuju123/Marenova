import { ArrowRight, Building2, House, Users } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const settings = [
  {
    id: 'nursing-homes',
    number: '01',
    icon: Building2,
    eyebrow: 'Alongside your nursing team',
    title: 'Nursing Homes',
    description: 'Complex medical needs deserve a connected psychiatric plan. We work with the director of nursing, floor nurses, attending clinicians, and pharmacy to understand baseline function, recent changes, and the resident’s goals.',
    detail: 'Our shared aim is to identify treatable contributors early and reduce avoidable crises and readmissions — never to delay a medically necessary transfer. Psychiatric support complements, rather than replaces, your facility’s medical and emergency responsibilities.',
    steps: [
      { title: 'A clearer picture at transitions', description: 'Review discharge information, reconcile psychiatric medications with the prescribing team, and identify follow-up needs after a hospital stay.' },
      { title: 'Nursing observations inform each visit', description: 'Use behavior logs, sleep patterns, intake, falls, and response to interventions to distinguish a persistent psychiatric concern from a new medical problem.' },
      { title: 'A practical, documented plan', description: 'Clarify target symptoms, monitoring, non-medication strategies, and follow-up. Coordinate psychotropic review and gradual dose reduction when clinically appropriate and consistent with applicable requirements.' },
    ],
  },
  {
    id: 'assisted-living-memory-care',
    number: '02',
    icon: House,
    eyebrow: 'Preserving the feeling of home',
    title: 'Assisted Living / Memory Care',
    description: 'Residents need support that fits their daily lives. We coordinate with wellness directors, nursing staff where available, direct-care teams, primary care, and authorized family members to address mood, sleep, adjustment, and dementia-related distress.',
    detail: 'Consistent routines and earlier recognition of changes may help prevent an avoidable escalation or hospital return. Recommendations account for the community’s staffing and clinical capabilities; some changes still require urgent in-person assessment or a higher level of care.',
    steps: [
      { title: 'Recognize changes before they escalate', description: 'Help care staff describe what is different from baseline, when it happens, and which comfort or environmental strategies have been tried.' },
      { title: 'Keep care person-centered', description: 'Build on familiar activities, relationships, and preferences. Medication decisions include the resident or authorized representative and a clear monitoring plan.' },
      { title: 'Make telehealth workable', description: 'Agree on a private space, a staff facilitator, sensory or communication accommodations, and secure coordination with outside medical and pharmacy services.' },
    ],
  },
]

export function FacilityCare() {
  return (
    <>
      {settings.map(({ id, number, icon: Icon, eyebrow, title, description, detail, steps }) => (
        <section key={id} id={id} aria-labelledby={`${id}-heading`} className="section-space border-b even:bg-muted/50">
          <div className="site-container grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <p className="eyebrow mb-4">{number} / {eyebrow}</p>
              <div className="mb-5 flex items-center gap-4">
                <Icon className="size-8 shrink-0 text-secondary-foreground" strokeWidth={1.4} aria-hidden="true" />
                <h2 id={`${id}-heading`} className="section-heading">{title}</h2>
              </div>
              <p className="body-copy">{description}</p>
              <a href="#refer-a-resident" className="text-link mt-5">{id === 'nursing-homes' ? 'Discuss nursing-home support' : 'Discuss memory-care support'} <ArrowRight className="size-4" aria-hidden="true" /></a>
            </div>
            <Accordion multiple className="self-start border-y lg:mt-8">
              <AccordionItem value={`${id}-goals`}>
                <AccordionTrigger>Care goals &amp; coordination</AccordionTrigger>
                <AccordionContent><p>{detail}</p></AccordionContent>
              </AccordionItem>
              {steps.map((step) => (
                <AccordionItem key={step.title} value={step.title}>
                  <AccordionTrigger>{step.title}</AccordionTrigger>
                  <AccordionContent><p>{step.description}</p></AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      ))}
      <div className="site-container pt-10">
        <Alert role="note">
          <Users aria-hidden="true" />
          <AlertTitle>One provider. A clearly defined partnership.</AlertTitle>
          <AlertDescription>Marenova is a solo-provider practice. Services depend on clinical fit, state licensure, provider capacity, consent, and a written facility agreement. Hospitalizations cannot always be prevented, and a reduction in readmissions is not guaranteed.</AlertDescription>
        </Alert>
      </div>
    </>
  )
}
