import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Info } from 'lucide-react'
import { CarePageHero, CareSectionNavigation } from '@/components/care-page-hero'
import { GeriatricMentalHealth, ResidentialCare } from '@/components/older-adults/whole-person-care'
import { DementiaBehavioralCare, LewyBodySupport } from '@/components/older-adults/dementia-care'
import { PracticeAction } from '@/components/practice-action'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { educationalDisclaimer } from '@/lib/conditions'
import { olderAdultNavigation, photographs } from '@/lib/practice'

export const metadata: Metadata = {
  title: 'Older Adult Care & Geriatric Mental Health',
  description: 'Compassionate support for late-life depression, grief, dementia-related behavioral changes, and Lewy body dementia, with coordinated nursing home and assisted-living care.',
  openGraph: {
    title: 'Older Adult Care | Marenova Wellness',
    description: 'Thoughtful psychiatric care that honors the person, supports independence, and includes authorized care partners.',
  },
}

export default function OlderAdultsPage() {
  return (
    <>
      <CarePageHero
        eyebrow="Older adults & those who care for them"
        title={<>A lifetime of stories.<br /><span className="text-heading-accent">A person, always.</span></>}
        description="Thoughtful psychiatric care that honors experience, supports independence, and makes room for the people who care for you. At home or in a care community, your story still comes first."
        currentPage="Older Adult Care"
        portrait
        image={{ src: photographs.olderCouplePortrait, alt: 'Black-and-white portrait of an older woman embracing an older man seated in front of her', caption: 'Dignity, connection, and care — at every age.' }}
      >
        <PracticeAction label="Talk with us about older-adult care" size="lg" />
        <Link href="/facilities" className="text-link">For facility teams <ArrowRight className="size-4" aria-hidden="true" /></Link>
      </CarePageHero>
      <CareSectionNavigation links={olderAdultNavigation} label="Older adult care sections" />
      <GeriatricMentalHealth />
      <DementiaBehavioralCare />
      <LewyBodySupport />
      <ResidentialCare />
      <div className="site-container pb-16">
        <Alert role="note" aria-label="Educational disclaimer">
          <Info aria-hidden="true" />
          <AlertTitle>Information to support a conversation</AlertTitle>
          <AlertDescription>{educationalDisclaimer}</AlertDescription>
        </Alert>
      </div>
    </>
  )
}
