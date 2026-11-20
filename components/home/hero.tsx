import Image from 'next/image'
import { ArrowDown, BadgeCheck, Leaf, LockKeyhole, MapPin, ShieldCheck, UserCheck } from 'lucide-react'
import { PracticeAction } from '@/components/practice-action'
import { photographs } from '@/lib/practice'

const trustHighlights = [
  { icon: UserCheck, text: 'Adults 18+' },
  { icon: ShieldCheck, text: 'Secure Telehealth' },
  { icon: MapPin, text: 'Florida' },
  { icon: BadgeCheck, text: 'ANCC Board-Certified' },
]

export function Hero() {
  return (
    <>
      <section aria-labelledby="hero-heading" className="overflow-hidden">
        <div className="site-container grid items-center gap-10 pt-12 pb-14 sm:pt-16 sm:pb-18 lg:grid-cols-[1.08fr_1fr] lg:gap-8 lg:pt-14 lg:pb-16">
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-secondary" aria-hidden="true" />
              <p className="eyebrow">A space to feel like yourself</p>
            </div>
            <h1
              id="hero-heading"
              className="max-w-[650px] font-serif text-[clamp(2.35rem,10.5vw,4.15rem)] leading-[1.13] tracking-[-0.045em] text-primary lg:text-[clamp(3rem,4.5vw,4.15rem)]"
            >
              Compassionate<br />
              psychiatric care<br />
              for adults and<br />
              <span className="font-normal text-heading-accent italic">older adults.</span>
            </h1>
            <p className="mt-5 max-w-[600px] text-lg leading-relaxed font-semibold text-primary sm:text-xl">
              Adult Psychiatry | Older Adult &amp; Geriatric Psychiatry
            </p>
            <p className="body-copy mt-4 max-w-[540px] text-xl leading-relaxed sm:text-2xl">
              You deserve to feel heard, understood, and supported.
              Personalized care for depression, anxiety, ADHD, and later-life
              mental health — from the comfort of home.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PracticeAction size="lg" className="w-full sm:w-auto" />
              <PracticeAction type="portal" size="lg" className="w-full sm:w-auto" />
            </div>
            <div className="mt-5 flex items-center gap-2 text-base leading-relaxed font-medium text-muted-foreground">
              <LockKeyhole className="size-3.5 shrink-0 text-secondary-foreground" strokeWidth={1.7} aria-hidden="true" />
              Private, secure, and centered on you.
            </div>
          </div>

          <div className="hero-collage mx-auto w-full max-w-[565px]">
            <div className="hero-orbit" aria-hidden="true" />
            <div className="hero-main-photo relative min-h-0 overflow-hidden bg-muted">
              <Image
                src={photographs.meditation}
                alt="A woman enjoying a quiet moment of meditation in a green park"
                fill
                priority
                sizes="(max-width: 639px) 74vw, (max-width: 1023px) 400px, 420px"
                className="object-cover object-[50%_60%]"
              />
            </div>
            <div className="hero-portrait-top relative min-h-0 overflow-hidden bg-muted shadow-soft">
              <Image
                src={photographs.resilience}
                alt="A woman smiling beside flowering greenery"
                fill
                priority
                sizes="(max-width: 639px) 29vw, 165px"
                className="object-cover object-[51%_35%]"
              />
            </div>
            <div className="hero-portrait-bottom relative min-h-0 overflow-hidden bg-muted shadow-soft">
              <Image
                src={photographs.joy}
                alt="A man sharing a spontaneous moment of laughter"
                fill
                sizes="(max-width: 639px) 29vw, 165px"
                className="object-cover object-[52%_45%]"
              />
            </div>
            <div className="hero-note flex items-center gap-3 rounded-lg bg-background p-3.5 shadow-[0_6px_30px_rgb(26_85_90_/_0.1)] sm:gap-4 sm:p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted sm:size-12">
                <Leaf className="size-5 text-secondary-foreground sm:size-6" strokeWidth={1.4} aria-hidden="true" />
              </span>
              <div className="min-w-0 flex flex-col gap-1.5">
                <p className="font-sans text-lg leading-relaxed font-medium text-primary">A little care. A new beginning.</p>
                <p className="text-base leading-relaxed font-medium text-muted-foreground">Your story. Your pace. Your wellbeing.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="site-container hidden pb-7 lg:block">
          <a href="#your-provider" className="inline-flex items-center gap-2.5 text-base leading-relaxed font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary">
            <ArrowDown className="size-3.5" aria-hidden="true" />
            A more personal path to feeling better
          </a>
        </div>
      </section>
      <div className="border-y border-border/70 bg-muted/80" aria-label="Patient eligibility and credentials">
        <ul className="site-container grid grid-cols-2 gap-x-5 gap-y-6 py-7 sm:py-8 lg:grid-cols-4 lg:gap-0">
          {trustHighlights.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3 lg:justify-center lg:not-last:border-r lg:first:justify-start lg:last:justify-end">
              <Icon className="size-6 shrink-0 text-primary sm:size-7" strokeWidth={1.4} aria-hidden="true" />
              <span className="max-w-[180px] text-base leading-relaxed font-medium text-primary">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
