import Link from 'next/link'
import { ArrowRight, Check, LockKeyhole } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'

export function ResidentReferral() {
  return (
    <section id="refer-a-resident" aria-labelledby="referral-heading" className="section-space border-t bg-muted/60">
      <div className="site-container">
        <div className="mb-10 max-w-[790px]">
          <p className="eyebrow mb-4">04 / The next step, thoughtfully</p>
          <h2 id="referral-heading" className="section-heading">Discuss a facility partnership</h2>
          <p className="body-copy mt-5">Begin with a non-clinical conversation about your Florida facility, care setting, and coordination needs. Keep individual resident information out of this first inquiry.</p>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <Card>
            <CardHeader className="gap-2">
              <CardTitle><h3>What to discuss first</h3></CardTitle>
              <CardDescription>For facility administrators, nursing leaders, and professional referral contacts.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-4">
                {[
                  'Your facility’s name and Florida location.',
                  'Your care setting: nursing home, assisted living, or memory care.',
                  'Your professional name, role, and business contact details.',
                  'General service and coordination needs, without resident-specific details.',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-lg leading-relaxed text-muted-foreground"><Check className="mt-1.5 size-4 shrink-0 text-secondary-foreground" aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact#facility-inquiries" className={buttonVariants({ size: 'lg' })}>Contact the Practice <ArrowRight data-icon="inline-end" aria-hidden="true" /></Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="gap-3">
              <LockKeyhole className="size-7 text-secondary-foreground" strokeWidth={1.4} aria-hidden="true" />
              <CardTitle><h3>Resident privacy comes first</h3></CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="body-copy">This website does not collect resident information or accept records. Do not send names, dates of birth, diagnoses, medication lists, insurance identifiers, or documents through a general inquiry or ordinary email.</p>
              <p className="body-copy">Before any resident referral, request the practice&apos;s designated secure communication instructions. Consent, authorization, clinical fit, and capacity are reviewed separately before care is established.</p>
            </CardContent>
            <CardFooter><Link href="/policies/notice-of-privacy-practices" className="text-link">Notice of Privacy Practices <ArrowRight className="size-4 shrink-0" aria-hidden="true" /></Link></CardFooter>
          </Card>
        </div>
        <p className="mt-7 max-w-[940px] text-base leading-relaxed text-muted-foreground">A partnership inquiry does not submit a resident referral or confirm acceptance for care. For urgent concerns, follow your facility&apos;s medical or emergency response procedures.</p>
      </div>
    </section>
  )
}
