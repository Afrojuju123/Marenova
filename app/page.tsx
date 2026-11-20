import { Hero } from '@/components/home/hero'
import { Services } from '@/components/home/services'
import { Conditions } from '@/components/home/conditions'
import { Provider } from '@/components/home/provider'
import { CarePathways } from '@/components/home/care-pathways'
import { PatientInfo, ClosingInvitation } from '@/components/home/patient-info'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Provider />
      <Services />
      <Conditions />
      <CarePathways />
      <PatientInfo />
      <ClosingInvitation />
    </>
  )
}

