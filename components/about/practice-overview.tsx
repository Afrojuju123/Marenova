import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowRight, HeartHandshake, Moon, Waypoints } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { PageBreadcrumb } from '@/components/page-breadcrumb'

const principles = [
  {
    icon: HeartHandshake,
    title: 'Your story comes first',
    description: 'A calm, judgment-free space to discuss what you are experiencing. Your values, culture, strengths, and goals belong in every care decision.',
  },
  {
    icon: Moon,
    title: 'Body and mind, together',
    description: 'Mood and focus do not exist in isolation. We consider sleep, physical health, pain, daily routines, and medications alongside your emotional wellbeing.',
  },
  {
    icon: Waypoints,
    title: 'Care that stays connected',
    description: 'With your permission, we coordinate with your primary care clinician, therapists, and other specialists to support a clear, consistent treatment plan.',
  },
]

export function PracticeOverview() {
  return (
    <>
      <section id="our-practice" aria-labelledby="practice-heading" className="bg-muted/60">
        <div className="site-container pt-7 pb-14 sm:pt-9 sm:pb-20">
          <PageBreadcrumb currentPage="About" className="mb-9 sm:mb-12" />
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="eyebrow mb-5">Our practice</p>
              <h1 id="practice-heading" className="font-serif text-[2.6rem] leading-[1.13] tracking-[-0.04em] text-primary sm:text-6xl lg:text-[4.15rem]">
                Care begins<br />with <span className="text-heading-accent">connection.</span>
              </h1>
              <p className="body-copy mt-6">
                You are more than a set of symptoms. At Marenova Wellness, we make room for your whole story — and build a plan around the person you are, not just a diagnosis.
              </p>
              <p className="body-copy mt-5">
                As a solo-provider practice focused on adults and older adults, we offer continuity, thoughtful listening, and evidence-based psychiatric care. You work directly with one provider who gets to know what matters to you.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href="#meet-your-provider" className={buttonVariants({ size: 'lg' })}>
                  Meet your provider <ArrowDown data-icon="inline-end" aria-hidden="true" />
                </Link>
                <Link href="/services" className="text-link">
                  Explore our services <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <figure className="mx-auto w-full max-w-[480px]">
              <div className="relative aspect-[1/1.08] overflow-hidden rounded-t-[45%] rounded-b-lg bg-accent">
                <Image
                  src="/images/whole-person-care.jpg"
                  alt="A woman enjoying a quiet moment beside flowering greenery"
                  fill
                  priority
                  sizes="(max-width: 527px) calc(100vw - 48px), 480px"
                  className="object-cover object-[57%_50%]"
                />
              </div>
              <figcaption className="mt-4 text-center text-base leading-relaxed text-muted-foreground">
                The whole person. Every chapter of life.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section aria-labelledby="philosophy-heading" className="section-space">
        <div className="site-container">
          <div className="mb-10 max-w-[730px]">
            <p className="eyebrow mb-4">Our philosophy</p>
            <h2 id="philosophy-heading" className="section-heading">Looking beyond the symptoms.</h2>
            <p className="body-copy mt-5">
              Thoughtful care connects the dots. We bring together your mental health, physical health, and everyday experiences to understand what may be contributing — and what could help.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {principles.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col items-start gap-4 border-t pt-7">
                <Icon className="size-7 text-secondary-foreground" strokeWidth={1.4} aria-hidden="true" />
                <h3 className="font-serif text-2xl leading-snug tracking-tight text-primary">{title}</h3>
                <p className="body-copy">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
