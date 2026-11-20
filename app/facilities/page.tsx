import type { Metadata } from 'next'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { CarePageHero, CareSectionNavigation } from '@/components/care-page-hero'
import { FacilityCare } from '@/components/facilities/facility-care'
import { ServiceScope } from '@/components/facilities/service-scope'
import { ResidentReferral } from '@/components/facilities/resident-referral'
import { buttonVariants } from '@/components/ui/button'
import { facilityNavigation, photographs } from '@/lib/practice'

export const metadata: Metadata = {
  title: 'Facility Partnerships',
  description: 'Discuss telepsychiatry partnerships for Florida nursing homes, assisted living, and memory care. Explore service scope, care coordination, and a non-clinical contact process.',
  openGraph: {
    title: 'Facility Partnerships | Marenova Wellness',
    description: 'A thoughtful psychiatric care partner for your residents, nursing staff, and care community.',
  },
}

export default function FacilitiesPage() {
  return (
    <>
      <CarePageHero
        eyebrow="Facility partnerships"
        title={<>Your residents.<br />Your team.<br /><span className="text-heading-accent">Our shared purpose.</span></>}
        description="Thoughtful psychiatric support that works alongside your nursing and care teams. Together, we build clearer care plans, support continuity, and help residents feel understood — wherever they call home."
        currentPage="Facility Partnerships"
        image={{ src: photographs.olderAdultCommunity, alt: 'Older adults taking part in a seated group exercise class with their arms raised', caption: 'Connected teams. Supported residents. Stronger communities.' }}
      >
        <a href="#refer-a-resident" className={buttonVariants({ size: 'lg' })}>Discuss a facility partnership <ArrowDown data-icon="inline-end" aria-hidden="true" /></a>
        <a href="#what-we-provide" className="text-link">Explore our approach <ArrowRight className="size-4" aria-hidden="true" /></a>
      </CarePageHero>
      <CareSectionNavigation links={facilityNavigation} label="Facility partnership sections" />
      <FacilityCare />
      <ServiceScope />
      <ResidentReferral />
    </>
  )
}
