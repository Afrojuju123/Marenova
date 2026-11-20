export const runtime = 'edge';

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound, permanentRedirect } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { policies } from '@/lib/policies'
import { practice } from '@/lib/practice'

interface PolicyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PolicyPageProps): Promise<Metadata> {
  const { slug } = await params
  const policy = policies.find((item) => item.slug === slug)
  if (!policy) return { title: 'Page not found' }
  return { title: policy.title, description: policy.summary }
}

export default async function PolicyPage({ params }: PolicyPageProps) {
  const { slug } = await params
  if (slug === 'hipaa-notice') permanentRedirect('/policies/notice-of-privacy-practices')
  const policy = policies.find((item) => item.slug === slug)
  if (!policy) notFound()

  return (
    <article className="section-space">
      <div className="site-container">
        <div className="mx-auto max-w-[760px]">
          <PageBreadcrumb currentPage={policy.title} className="mb-8" />
          <header className="border-b pb-8">
            <p className="eyebrow mb-4">Patient resources</p>
            <h1 className="section-heading">{policy.title}</h1>
            <p className="mt-4 text-lg font-semibold text-primary">{practice.name}</p>
            <p className="body-copy mt-6">{policy.summary}</p>
          </header>
          <div className="flex flex-col gap-9 py-10">
            {policy.sections.map((section) => (
              <section key={section.title} className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl tracking-tight text-primary">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="body-copy">{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
          <nav aria-label="More patient resources" className="border-t pt-7">
            <p className="eyebrow mb-4">Related information</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {policies.filter((item) => item.slug !== slug).map((item) => (
                <Link key={item.slug} href={`/policies/${item.slug}`} className="text-link">
                  {item.title}<ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </article>
  )
}
