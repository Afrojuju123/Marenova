export const runtime = 'edge';

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ConditionDetail } from '@/components/conditions/condition-detail'
import { getCondition } from '@/lib/conditions'

interface ConditionPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ConditionPageProps): Promise<Metadata> {
  const { slug } = await params
  const condition = getCondition(slug)

  if (!condition) {
    return { title: 'Condition Not Found', robots: { index: false, follow: false } }
  }

  return {
    title: `${condition.title}: Symptoms, Evaluation & Support`,
    description: condition.summary,
    openGraph: {
      title: `${condition.title} | Marenova Wellness`,
      description: condition.summary,
      type: 'article',
    },
  }
}

export default async function ConditionPage({ params }: ConditionPageProps) {
  const { slug } = await params
  const condition = getCondition(slug)

  if (!condition) notFound()

  return <ConditionDetail condition={condition} />
}
