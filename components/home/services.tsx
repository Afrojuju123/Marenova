import Link from 'next/link'
import { ArrowRight, Brain, Check, HeartHandshake, Pill } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CareDialog } from '@/components/care-dialog'

const services = [
  {
    icon: Brain,
    title: 'Psychiatric evaluations',
    linkLabel: 'About evaluations',
    description: 'A thoughtful conversation about your history, your experiences, and what you hope to change.',
    benefits: ['A whole-person perspective', 'Clarity on your next steps'],
    information: {
      title: 'Understanding the whole you',
      introduction: 'A psychiatric evaluation brings your story, health history, and current concerns together. It is a collaborative conversation, not a label.',
      points: [
        'Discuss mood, anxiety, attention, sleep, daily functioning, and your goals for care.',
        'Review medical conditions, medications, past treatment, and relevant personal or family history.',
        'Consider possible diagnoses and whether additional testing, records, or in-person evaluation may be helpful.',
        'Explore suitable treatment options, their benefits and risks, and a plan for follow-up.',
      ],
      note: 'An initial evaluation does not guarantee a particular diagnosis or prescription. Recommendations depend on your individual needs and clinical findings.',
    },
  },
  {
    icon: Pill,
    title: 'Medication management',
    linkLabel: 'About medication care',
    description: 'Evidence-based guidance to help you make informed, confident decisions about your treatment.',
    benefits: ['Careful, collaborative decisions', 'Regular monitoring and adjustments'],
    information: {
      title: 'Medication, with intention',
      introduction: 'When medication is appropriate, treatment is tailored to your symptoms, medical history, preferences, and everyday life.',
      points: [
        'Review potential benefits, side effects, alternatives, and medication interactions before making a decision.',
        'Monitor how you are feeling and adjust your plan thoughtfully over time.',
        'Coordinate with your other healthcare professionals when appropriate and with your permission.',
        'Consider age-related factors and overall medication burden, particularly for older adults.',
      ],
      note: 'Prescribing is based on clinical judgment, safety, and applicable telehealth laws. A specific medication, including a controlled substance, is never guaranteed. Do not change medication without speaking to your prescriber.',
    },
  },
  {
    icon: HeartHandshake,
    title: 'Ongoing, personal support',
    linkLabel: 'About ongoing care',
    description: 'A consistent relationship with one provider who gets to know you, not just your symptoms.',
    benefits: ['Care that evolves with you', 'Practical, achievable goals'],
    information: {
      title: 'A steady partner in your care',
      introduction: 'Mental health needs can change. Follow-up appointments create space to reflect on progress, navigate challenges, and refine your plan.',
      points: [
        'Revisit your goals and track changes in symptoms, daily activities, sleep, and wellbeing.',
        'Discuss treatment response, concerns, and next steps in a supportive setting.',
        'Explore routines, coping strategies, and referrals for psychotherapy or other services when appropriate.',
        'Build continuity with the same psychiatric provider across your care.',
      ],
      note: 'Follow-up frequency depends on your individual situation. Routine outpatient follow-up is not a substitute for emergency or crisis care.',
    },
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-space">
      <div className="site-container">
        <div className="mb-10 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-[630px]">
            <p className="eyebrow mb-4">Services overview</p>
            <h2 id="services-heading" className="section-heading">Thoughtful care.<br />Built around you.</h2>
          </div>
          <p className="body-copy max-w-[420px]">
            Mental health care should feel personal. Together, we look beyond
            symptoms to understand your life and create a path forward that fits.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, linkLabel, description, benefits, information }) => (
            <Card key={title} className="h-full">
              <CardHeader className="gap-4">
                <div className="mb-2 flex size-12 items-center justify-center rounded-xl bg-muted">
                  <Icon className="size-6 text-primary" strokeWidth={1.4} aria-hidden="true" />
                </div>
                <CardTitle><h3>{title}</h3></CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2.5 text-base leading-relaxed font-medium text-muted-foreground">
                      <Check className="size-3.5 shrink-0 text-secondary-foreground" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <CareDialog information={information} label={linkLabel} className="px-0" />
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/services" className="text-link">
            Explore all six services <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
