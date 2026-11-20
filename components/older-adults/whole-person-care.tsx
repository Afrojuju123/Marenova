import Link from 'next/link'
import { ArrowRight, HeartHandshake, Leaf, MessageCircle, ShieldCheck, Users, Waypoints } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { buttonVariants } from '@/components/ui/button'

const areasOfCare = [
  {
    icon: HeartHandshake,
    title: 'Mood & emotional wellbeing',
    description: 'Depression is not an inevitable part of aging. Persistent sadness, worry, irritability, withdrawal, or changes in sleep and appetite deserve a careful evaluation — alongside pain, medical conditions, and medication effects.',
  },
  {
    icon: Leaf,
    title: 'Grief & life transitions',
    description: 'Bereavement, retirement, a move, or a changing role in the family can bring complex emotions. We make space for grief without automatically labeling it an illness, while looking for distress that needs additional support.',
  },
  {
    icon: MessageCircle,
    title: 'Independence & identity',
    description: 'What matters to you guides the plan. We discuss isolation, confidence, meaningful routines, and changing abilities, with practical goals that preserve choice and connection rather than defining you by your age.',
  },
]

export function GeriatricMentalHealth() {
  return (
    <section id="geriatric-mental-health" aria-labelledby="geriatric-heading" className="section-space">
      <div className="site-container">
        <div className="max-w-[820px]">
          <p className="eyebrow mb-4">01 / The person comes first</p>
          <h2 id="geriatric-heading" className="section-heading">Geriatric Mental Health</h2>
          <p className="body-copy mt-5">Growing older should never mean feeling overlooked. At Marenova, we consider emotional health, physical health, relationships, and everyday function together — with time to listen and a plan made with you.</p>
        </div>
        <Accordion multiple className="mt-8 max-w-[940px] border-y">
          {areasOfCare.map(({ icon: Icon, title, description }) => (
            <AccordionItem key={title} value={title}>
              <AccordionTrigger>
                <span className="flex items-center gap-4"><Icon className="size-6 shrink-0 text-secondary-foreground" strokeWidth={1.4} aria-hidden="true" />{title}</span>
              </AccordionTrigger>
              <AccordionContent><p>{description}</p></AccordionContent>
            </AccordionItem>
          ))}
          <AccordionItem value="medication-safety">
            <AccordionTrigger>
              <span className="flex items-center gap-4"><ShieldCheck className="size-6 shrink-0 text-secondary-foreground" strokeWidth={1.4} aria-hidden="true" />Medication safety &amp; whole-person review</span>
            </AccordionTrigger>
            <AccordionContent><p>A medication review includes prescriptions, over-the-counter products, supplements, falls, and side effects. When memory or thinking changes need further investigation, we coordinate with primary care and other specialists rather than assume a psychiatric cause.</p></AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export function ResidentialCare() {
  return (
    <section id="nursing-home-assisted-living" aria-labelledby="residential-care-heading" className="section-space">
      <div className="site-container grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-4">04 / Continuity, wherever home is</p>
          <h2 id="residential-care-heading" className="section-heading">Nursing Home /<br className="hidden sm:block" /> Assisted-Living Services</h2>
          <p className="body-copy mt-5">A change in care setting should not mean starting your story over. Facility-supported telepsychiatry connects the resident, nursing staff, and authorized care partners around a consistent psychiatric plan.</p>
          <p className="body-copy mt-5">We plan scheduled follow-ups, review changes over time, and coordinate medication decisions with the medical team. Ongoing care means continuity and shared understanding — not continuous monitoring or 24-hour emergency coverage.</p>
          <Link href="/facilities" className={buttonVariants({ variant: 'outline', className: 'mt-8' })}>
            Explore facility partnerships <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </Link>
        </div>
        <Accordion multiple className="self-start border-y">
          {[
            { icon: Users, title: 'The resident remains at the center', description: 'We adapt visits to hearing, vision, attention, and communication needs. Residents participate in decisions to the extent they can, and staff can assist with a private telehealth setting.' },
            { icon: ShieldCheck, title: 'Care partners, with the right authorization', description: 'Family involvement follows the resident’s consent or lawful authorization. A healthcare proxy or other representative’s identity, authority, and scope are verified; dementia does not automatically remove a person’s ability to make every decision.' },
            { icon: Waypoints, title: 'A clearer handoff at each transition', description: 'With permission, we coordinate with primary care, nursing, pharmacy, and relevant specialists. Medication lists, observed changes, and follow-up responsibilities are clarified after hospital stays or a move between settings.' },
          ].map(({ icon: Icon, title, description }) => (
            <AccordionItem key={title} value={title}>
              <AccordionTrigger>
                <span className="flex items-start gap-4"><Icon className="mt-1 size-6 shrink-0 text-secondary-foreground" strokeWidth={1.4} aria-hidden="true" />{title}</span>
              </AccordionTrigger>
              <AccordionContent><p>{description}</p></AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
