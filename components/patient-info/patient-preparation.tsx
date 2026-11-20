import Link from 'next/link'
import { ArrowRight, Download, FileText, Headphones, Laptop, LockKeyhole, MapPin, Video, Wifi } from 'lucide-react'
import { PracticeAction } from '@/components/practice-action'
import { CareTimeline } from '@/components/care-timeline'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { practice } from '@/lib/practice'

export function PatientForms() {
  return (
    <section id="forms-portal" aria-labelledby="forms-heading" className="section-space scroll-mt-28 border-y bg-muted/60">
      <div className="site-container flex flex-col gap-9">
        <div className="max-w-[750px]">
          <p className="eyebrow mb-4">04 / Forms &amp; portal</p>
          <h2 id="forms-heading" className="section-heading">The right information.<br />In the right place.</h2>
          <p className="body-copy mt-5">Prepare at your own pace. Complete clinical intake documents and share personal health information only through the secure process provided by the practice.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <FileText className="mb-4 size-7 text-secondary-foreground" strokeWidth={1.5} aria-hidden="true" />
              <CardTitle><h3>Before your first visit</h3></CardTitle>
            </CardHeader>
            <CardContent><p className="body-copy">A simple checklist of what to confirm and have ready. This is a preparation guide—not a medical intake or consent form.</p></CardContent>
            <CardFooter><a href="/forms/first-visit-checklist.txt" download className={buttonVariants({ variant: 'link', className: 'px-0' })}>Download checklist (.txt) <Download data-icon="inline-end" aria-hidden="true" /></a></CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <LockKeyhole className="mb-4 size-7 text-secondary-foreground" strokeWidth={1.5} aria-hidden="true" />
              <CardTitle><h3>Intake documents</h3></CardTitle>
            </CardHeader>
            <CardContent><p className="body-copy">Access your official health history, treatment consents, and privacy acknowledgments through the practice-issued portal. This website does not collect completed forms.</p></CardContent>
            {practice.portalUrl && <CardFooter><PracticeAction type="portal" variant="link" label="Access intake documents" className="px-0" /></CardFooter>}
          </Card>
          <Card>
            <CardHeader>
              <Laptop className="mb-4 size-7 text-secondary-foreground" strokeWidth={1.5} aria-hidden="true" />
              <CardTitle><h3>Secure patient portal</h3></CardTitle>
            </CardHeader>
            <CardContent><p className="body-copy">For established patients: follow your portal instructions for clinical messages, refill requests, paperwork, and appointment management.</p></CardContent>
            {practice.portalUrl && <CardFooter><PracticeAction type="portal" variant="link" label="Go to patient portal" className="px-0" /></CardFooter>}
          </Card>
        </div>
        <p className="text-base text-muted-foreground">Need the official privacy notice? <Link href="/policies/notice-of-privacy-practices" className="font-semibold text-primary underline underline-offset-4">View Notice of Privacy Practices information.</Link></p>
      </div>
    </section>
  )
}

const telehealthSteps = [
  { icon: Laptop, title: 'Choose a reliable device', description: 'Use a charged computer, tablet, or smartphone with a working camera and microphone. Follow your appointment instructions for the supported browser or app.' },
  { icon: Wifi, title: 'Check your connection', description: 'Use a stable, private internet connection. Close unused video or streaming apps, update your browser, and have your charger within reach.' },
  { icon: Headphones, title: 'Make room for privacy', description: 'Find a quiet, well-lit space where you can speak freely. Headphones can help. Do not join while driving, in transit, or in a public setting.' },
  { icon: Video, title: 'Join through your verified link', description: 'Open the appointment link a few minutes early. Allow camera and microphone access on the visit platform, and use its device check if one is available.' },
]

export function TelehealthInformation() {
  return (
    <section id="telehealth-information" aria-labelledby="telehealth-heading" className="section-space scroll-mt-28">
      <div className="site-container grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-4">05 / Telehealth information</p>
          <h2 id="telehealth-heading" className="section-heading">A comfortable space.<br />A meaningful conversation.</h2>
          <p className="body-copy mt-5 mb-7">A little preparation helps your video visit feel more natural. You do not join a clinical session through this public website; use the verified link in your appointment instructions.</p>
          <Alert role="note">
            <MapPin aria-hidden="true" />
            <AlertTitle>Your location matters</AlertTitle>
            <AlertDescription>Your provider will confirm your identity, exact physical location, and an emergency contact plan. You must be physically located in Florida during every appointment. Check with the practice before traveling.</AlertDescription>
          </Alert>
          <Link href="/contact#booking" className="text-link mt-5">View appointment information <ArrowRight className="size-4" aria-hidden="true" /></Link>
        </div>
        <CareTimeline steps={telehealthSteps} variant="list" />
      </div>
    </section>
  )
}
