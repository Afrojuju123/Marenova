import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Heart, Users, ClipboardCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { photographs } from '@/lib/practice'

export function CarePathways() {
  return (
    <>
      <section id="older-adults" aria-labelledby="older-adults-heading" className="section-space bg-muted">
        <div className="site-container grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
          <div>
            <p className="eyebrow mb-4">Older adults & those who care for them</p>
            <h2 id="older-adults-heading" className="section-heading">Every chapter deserves<br />compassionate care.</h2>
            <p className="body-copy mt-6 max-w-[490px]">
              Life changes, loss, and evolving health needs can affect emotional
              wellbeing at any age. Later-life mental health deserves thoughtful
              attention — never the assumption that it is simply part of aging.
            </p>
            <ul className="mt-7 flex flex-col gap-5">
              {[
                { icon: Heart, title: 'Your experience comes first', detail: 'Support for mood, anxiety, grief, and life transitions.' },
                { icon: ClipboardCheck, title: 'A careful look at the whole picture', detail: 'Attention to physical health and medication interactions.' },
                { icon: Users, title: 'Connection with the people who matter', detail: 'Family and caregiver involvement, with your permission.' },
              ].map(({ icon: Icon, title, detail }) => (
                <li key={title} className="flex gap-4">
                  <Icon className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <h3 className="text-lg leading-relaxed font-semibold">{title}</h3>
                    <p className="mt-1.5 text-lg leading-relaxed text-muted-foreground">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Link href="/older-adults" className={buttonVariants({ variant: 'outline' })}>
                Explore older adult care <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <figure data-reveal className="mx-auto w-full max-w-[440px]">
            <div className="relative aspect-[0.94/1] overflow-hidden rounded-t-[46%] rounded-b-lg bg-accent">
              <Image
                src={photographs.family}
                alt="A parent lifting a laughing child by the water, sharing a moment of family connection"
                fill
                sizes="(max-width: 487px) calc(100vw - 48px), 440px"
                className="object-cover object-[50%_52%]"
              />
            </div>
            <figcaption className="mt-4 text-center font-sans text-lg leading-relaxed font-medium text-secondary-foreground italic">More room for the moments that matter.</figcaption>
          </figure>
        </div>
      </section>
      <section id="partnerships" aria-labelledby="partnerships-heading" className="bg-primary py-12 sm:py-14">
        <div className="site-container flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:gap-7">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-full border border-primary-foreground/25">
            <Building2 className="size-7 text-primary-foreground" strokeWidth={1.3} aria-hidden="true" />
          </div>
          <div className="max-w-[630px] lg:mr-auto">
            <p className="mb-3 text-base leading-relaxed font-medium tracking-[0.18em] text-primary-foreground/80 uppercase">Facility partnerships</p>
            <h2 id="partnerships-heading" className="font-serif text-[29px] leading-tight tracking-tight text-primary-foreground sm:text-[32px]">Better-connected care for your community.</h2>
            <p className="mt-3 max-w-[560px] text-lg leading-relaxed text-primary-foreground/80">
              A collaborative psychiatric care approach for senior living and care
              facilities, with attention to residents, caregivers, and continuity.
            </p>
          </div>
          <Link href="/facilities" className={buttonVariants({ variant: 'light', size: 'lg' })}>
            Let&apos;s work together <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
