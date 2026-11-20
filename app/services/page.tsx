import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { PageIntro } from '@/components/page-intro'
import { ServiceDirectory } from '@/components/services/service-directory'
import { ClosingInvitation } from '@/components/home/patient-info'

export const metadata: Metadata = {
  title: 'Psychiatric Services for Adults & Older Adults',
  description:
    'Explore psychiatric evaluations, medication management, adult ADHD care, depression and anxiety treatment, geriatric psychiatry, and telepsychiatry at Marenova Wellness.',
  openGraph: {
    title: 'Thoughtful Psychiatric Care | Marenova Wellness',
    description:
      'Six service lines, one dedicated provider. Explore personalized psychiatric care for adults and older adults.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our services"
        currentPage="Services"
        title={<>Thoughtful care.<br /><span className="text-heading-accent">Built around you.</span></>}
        description="Your needs, your experiences, your goals. From a first conversation to ongoing support, we bring a whole-person perspective to adult and older-adult psychiatric care."
      >
        <Link href="#psychiatric-evaluation" className="text-link">
          Explore our approach to care <ArrowDown className="size-4" aria-hidden="true" />
        </Link>
      </PageIntro>
      <ServiceDirectory />
      <ClosingInvitation />
    </>
  )
}
