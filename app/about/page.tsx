import type { Metadata } from 'next'
import { PracticeOverview } from '@/components/about/practice-overview'
import { ProviderProfile } from '@/components/about/provider-profile'
import { ClosingInvitation } from '@/components/home/patient-info'

export const metadata: Metadata = {
  title: 'Our Practice & Your Provider',
  description:
    'Meet Kizito L. Mbaekwe, MSN, APRN, PMHNP-BC, and discover Marenova’s whole-person, collaborative approach to adult and older-adult psychiatric care.',
  openGraph: {
    title: 'Meet Your Provider | Marenova Wellness',
    description:
      'One provider. Your whole story. Get to know Kizito L. Mbaekwe, an ANCC board-certified psychiatric–mental health nurse practitioner.',
  },
}

export default function AboutPage() {
  return (
    <>
      <PracticeOverview />
      <ProviderProfile />
      <ClosingInvitation />
    </>
  )
}
