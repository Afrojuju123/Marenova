import Image from 'next/image'
import { ArrowUpRight, Check, ShieldAlert, TriangleAlert } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { photographs } from '@/lib/practice'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function DementiaBehavioralCare() {
  return (
    <section id="dementia-alzheimers-care" aria-labelledby="dementia-heading" className="section-space border-y bg-muted/50">
      <div className="site-container">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-accent">
              <Image
                src={photographs.olderCoupleAtHome}
                alt="An older man smiling on a sofa while a woman in a pink shirt leans beside him"
                fill
                sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) calc(100vw - 80px), (max-width: 1359px) calc((100vw - 176px) * 0.425), 504px"
                className="object-cover object-[45%_center]"
              />
            </div>
            <figcaption className="mt-4 text-base leading-relaxed text-muted-foreground">Familiar faces. A reassuring presence. Care that sees the person.</figcaption>
          </figure>
          <div>
            <p className="eyebrow mb-4">02 / Understanding changes together</p>
            <h2 id="dementia-heading" className="section-heading">Dementia / Alzheimer&apos;s Behavioral Care</h2>
            <p className="body-copy mt-5">Agitation, anxiety, disrupted sleep, apathy, or distressing beliefs can occur with dementia. Often called behavioral and psychological symptoms of dementia (BPSD), these changes may also communicate discomfort, fear, or an unmet need.</p>
            <Accordion multiple className="mt-7 border-y">
              {[
                { title: 'Look for what changed.', description: 'We review the timing and context with caregivers, including pain, constipation, infection, dehydration, sleep, medication changes, and the environment. New symptoms may need an in-person medical assessment first.' },
                { title: 'Begin with comfort and familiarity.', description: 'Predictable routines, a calm approach, meaningful activities, and attention to hearing, vision, hunger, and personal space can help reduce distress. Strategies are individualized, not one-size-fits-all.' },
                { title: 'Make careful treatment decisions.', description: 'When symptoms cause significant distress or risk, we discuss potential benefits, risks, alternatives, and monitoring with the resident or authorized representative. Medication is not a substitute for person-centered care.' },
              ].map((item, index) => (
                <AccordionItem key={item.title} value={item.title}>
                  <AccordionTrigger>
                    <span className="flex items-start gap-4">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-primary" aria-hidden="true">{index + 1}</span>
                      {item.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent><p>{item.description}</p></AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <Alert variant="destructive" role="note" className="mt-10">
          <TriangleAlert aria-hidden="true" />
          <AlertTitle><h3>Sudden changes are not simply “the dementia.”</h3></AlertTitle>
          <AlertDescription>
            <p>New confusion over hours or days, fever, a sudden change in alertness, or a sharp decline in eating, drinking, or mobility needs prompt medical assessment for causes such as delirium. If someone is difficult to wake, has trouble breathing, shows signs of stroke, or is in immediate danger, call <a href="tel:911">911</a>. Do not wait for a routine psychiatric visit or referral response.</p>
          </AlertDescription>
        </Alert>
        <a href="https://www.alz.org/help-support/caregiving/stages-behaviors/anxiety-agitation" target="_blank" rel="noopener noreferrer" className="text-link mt-5">
          Behavioral care guidance from the Alzheimer&apos;s Association
          <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  )
}

export function LewyBodySupport() {
  return (
    <section id="lewy-body-dementia" aria-labelledby="lewy-body-heading" className="section-space border-b">
      <div className="site-container grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow mb-4">03 / A different condition. A careful approach.</p>
          <h2 id="lewy-body-heading" className="section-heading">Lewy Body Dementia Support</h2>
          <p className="body-copy mt-5">Lewy body dementia can involve changes in attention and alertness, visual hallucinations, disrupted sleep, and movement symptoms. These fluctuations can be unsettling for the person and their care partners; they deserve a coordinated, condition-aware response.</p>
          <Accordion className="mt-6 border-y">
            <AccordionItem value="lewy-body-coordination">
              <AccordionTrigger>How we coordinate care</AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-4">
                  {[
                    'Review symptoms, daily patterns, falls, sleep, and all medications alongside the primary care or neurology team.',
                    'Distinguish distressing or unsafe experiences from hallucinations that may not require medication.',
                    'Support familiar routines and caregiver communication while watching for new medical causes of a change.',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-1.5 size-4 shrink-0 text-secondary-foreground" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <a href="https://www.lbda.org/treatment/" target="_blank" rel="noopener noreferrer" className="text-link mt-6">
            Lewy Body Dementia Association guidance
            <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <Alert variant="destructive" role="note">
          <ShieldAlert aria-hidden="true" />
          <AlertTitle><h3>Important: severe antipsychotic sensitivity</h3></AlertTitle>
          <AlertDescription>
            <p>People with Lewy body dementia may have severe reactions to antipsychotics, even at low doses. Reactions can include profound sedation, worsened confusion or movement, marked rigidity, and potentially life-threatening neuroleptic malignant syndrome.</p>
            <p>Typical antipsychotics such as haloperidol should generally be avoided in Lewy body dementia. Any antipsychotic consideration requires careful specialist review, shared decision-making, and close monitoring. Antipsychotics also carry a boxed warning for increased risk of death in older adults with dementia-related psychosis.</p>
            <p>Make every treating clinician aware of known or suspected Lewy body dementia. Fever with severe rigidity or reduced responsiveness after medication is an emergency: call <a href="tel:911">911</a>. Do not start, stop, or change medicines without the treating clinician&apos;s guidance.</p>
          </AlertDescription>
        </Alert>
      </div>
    </section>
  )
}
