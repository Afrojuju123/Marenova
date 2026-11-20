import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CareDialog } from '@/components/care-dialog'
import { photographs } from '@/lib/practice'
import { cn } from '@/lib/utils'

const conditions = [
  {
    title: 'Depression & mood',
    image: photographs.reflection,
    alt: 'A man taking a quiet, reflective moment at home',
    position: 'object-[50%_33%]',
    description: 'When everyday life feels heavier, there is space to talk — and support to help you move forward.',
    information: {
      title: 'Support for depression & mood',
      introduction: 'Persistent low mood, loss of interest, changes in sleep or appetite, and low energy can affect many parts of life. You do not have to navigate these changes alone.',
      points: [
        'Explore the timing, pattern, and impact of mood symptoms in a comprehensive assessment.',
        'Consider physical health, medications, sleep, and other factors that may contribute.',
        'Discuss personalized options, which may include medication, psychotherapy referrals, and supportive lifestyle changes.',
      ],
      note: 'Symptoms can have many causes. An assessment is needed to make a diagnosis and recommend treatment. If you are in immediate danger, call 911. In the U.S., call or text 988 for crisis support.',
    },
  },
  {
    title: 'Anxiety & stress',
    image: photographs.support,
    alt: 'A woman in a knitted sweater resting on a sofa',
    position: 'object-[50%_36%]',
    description: 'Find a steadier footing with care that helps you understand worry, overwhelm, and persistent unease.',
    information: {
      title: 'A steadier way through anxiety',
      introduction: 'Anxiety can show up as persistent worry, physical tension, panic, or difficulty switching off. Care starts with understanding how it affects you.',
      points: [
        'Talk about your symptoms, triggers, coping strategies, and the impact on daily activities.',
        'Assess whether medical conditions, substances, sleep difficulties, or other factors may be involved.',
        'Build a collaborative plan that may include medication, skills-based support, and referral for evidence-based psychotherapy.',
      ],
      note: 'A psychiatric assessment helps determine which approach may be appropriate. New or severe physical symptoms may require urgent medical evaluation rather than a telehealth appointment.',
    },
  },
  {
    title: 'Adult ADHD',
    image: photographs.movement,
    alt: 'A woman practicing mindful movement outdoors',
    position: 'object-[49%_42%]',
    description: 'Understand your attention, focus, and daily challenges with a careful assessment and an individualized plan.',
    information: {
      title: 'Clarity around adult ADHD',
      introduction: 'Challenges with attention, organization, impulsivity, or task completion deserve a careful look. ADHD is one possible explanation, but not the only one.',
      points: [
        'Review symptoms over time, including childhood history and how they affect different areas of life.',
        'Consider other contributors, such as anxiety, mood disorders, sleep problems, and medical conditions.',
        'Discuss practical strategies, therapy referrals, and medication options when clinically appropriate.',
      ],
      note: 'An evaluation does not guarantee an ADHD diagnosis or stimulant prescription. Prescribing decisions depend on the assessment, safety considerations, and applicable laws.',
    },
  },
]

export function Conditions() {
  return (
    <section id="conditions" aria-labelledby="conditions-heading" className="section-space bg-muted">
      <div className="site-container">
        <div className="mb-10 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <p className="eyebrow mb-4">Conditions treated</p>
            <h2 id="conditions-heading" className="section-heading">Whatever you&apos;re carrying,<br />you don&apos;t have to carry it alone.</h2>
          </div>
          <p className="body-copy max-w-[370px]">
            Your experience is unique. Your care should be, too.
            Find understanding and an evidence-based approach to what you&apos;re facing.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {conditions.map((condition) => (
            <Card key={condition.title} size="sm" className="gap-5 pt-0">
              <div className="relative aspect-[1.55/1] overflow-hidden">
                <Image
                  src={condition.image}
                  alt={condition.alt}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 767px) calc(100vw - 80px), (max-width: 1023px) calc((100vw - 128px) / 3), (max-width: 1359px) calc((100vw - 160px) / 3), 400px"
                  className={cn('object-cover', condition.position)}
                />
              </div>
              <CardHeader className="gap-3">
                <CardTitle><h3>{condition.title}</h3></CardTitle>
                <CardDescription>{condition.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <CareDialog information={condition.information} label={`About ${condition.title === 'Adult ADHD' ? 'adult ADHD' : condition.title.toLowerCase()}`} className="px-0" />
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-7 flex flex-col items-center gap-3 text-center">
          <Link href="/what-we-treat" className="text-link">
            Explore all conditions <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <p className="text-base leading-relaxed font-medium text-muted-foreground">
            Not sure where to start? You don&apos;t need a diagnosis to take the first step.
          </p>
        </div>
      </div>
    </section>
  )
}
