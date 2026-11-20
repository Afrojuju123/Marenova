import Link from 'next/link'
import { ArrowRight, ArrowUpRight, FileCheck2, Info } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { selfPayServices } from '@/lib/patient-info'

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

export function InsuranceFees() {
  return (
    <section id="insurance-fees" aria-labelledby="fees-heading" className="section-space scroll-mt-28 border-y bg-muted/60">
      <div className="site-container flex flex-col gap-10">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow mb-4">02 / Insurance &amp; fees</p>
            <h2 id="fees-heading" className="section-heading">Clarity about care.<br />Clarity about cost.</h2>
          </div>
          <p className="body-copy self-end">Before you commit to an appointment, you deserve to understand your expected costs. Insurance participation and self-pay rates must be confirmed with the practice; no plan is presumed to be in-network.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {selfPayServices.map((service) => (
            <Card key={service.name}>
              <CardHeader><CardTitle><h3>{service.name}</h3></CardTitle></CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="font-serif text-3xl leading-snug text-primary">{service.amount === null ? 'Request a written quote' : currency.format(service.amount)}</p>
                <p className="text-base text-muted-foreground">{service.amount === null ? 'Discuss your expected costs before arranging care.' : 'Self-pay fee per appointment'}</p>
                <p className="body-copy">{service.description}</p>
              </CardContent>
              <CardFooter><Link href="/contact#general-inquiries" className="text-link">Ask about fees <ArrowRight className="size-4" aria-hidden="true" /></Link></CardFooter>
            </Card>
          ))}
        </div>
        <Alert role="note">
          <Info aria-hidden="true" />
          <AlertTitle>Confirm the full picture before booking</AlertTitle>
          <AlertDescription>Ask about the visit fee, payment timing, cancellation policy, and any separate laboratory, pharmacy, or outside-provider charges. If using insurance, confirm network status, deductibles, copays, coinsurance, and telehealth benefits with the practice and your plan. Reimbursement is not guaranteed.</AlertDescription>
        </Alert>
        <div id="good-faith-estimate" className="scroll-mt-28 rounded-lg border bg-background p-6 sm:p-9">
          <div className="flex items-start gap-4">
            <FileCheck2 className="mt-1 size-7 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
            <div className="flex flex-col gap-5">
              <div>
                <p className="eyebrow mb-3">No Surprises Act notice</p>
                <h3 className="font-serif text-2xl leading-snug tracking-tight text-primary sm:text-3xl">You have the right to receive a Good Faith Estimate.</h3>
              </div>
              <p className="body-copy">Under federal law, if you do not have health insurance or are not using it to pay for care, you generally have the right to a written estimate of expected charges for non-emergency health care. You can request an estimate before scheduling.</p>
              <ul className="flex list-disc flex-col gap-3 pl-5 text-lg leading-relaxed text-muted-foreground marker:text-primary">
                <li>Providers generally must give an estimate when care is scheduled at least 3 business days in advance, or when you ask for one. The delivery deadline depends on when you schedule or request it.</li>
                <li>Ask each involved provider or facility for an estimate of their expected charges. An estimate is not a bill, and unanticipated care may not be included.</li>
                <li>If a provider bills you at least <strong className="font-semibold text-primary">$400 more</strong> than their estimate, you may be eligible for the federal patient–provider dispute resolution process. Start a dispute within <strong className="font-semibold text-primary">120 calendar days</strong> of the initial bill.</li>
                <li>Keep a copy or photograph of your written estimate and compare it with your bill.</li>
              </ul>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a href="https://www.cms.gov/medical-bill-rights/know-your-rights/no-insurance" target="_blank" rel="noopener noreferrer" className="text-link">Your rights at CMS.gov <ArrowUpRight className="size-4" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
                <a href="https://www.cms.gov/medical-bill-rights/help/dispute-a-bill" target="_blank" rel="noopener noreferrer" className="text-link">About the dispute process <ArrowUpRight className="size-4" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
              </div>
              <p className="text-base text-muted-foreground">Questions about federal protections? Call the No Surprises Help Desk at <a href="tel:18009853059" className="font-semibold text-primary underline underline-offset-4">1-800-985-3059</a>. This notice does not replace your individual written estimate.</p>
            </div>
          </div>
        </div>
        <Link href="/policies/financial-policies" className="text-link self-start">Read financial policies <ArrowRight className="size-4" aria-hidden="true" /></Link>
      </div>
    </section>
  )
}
