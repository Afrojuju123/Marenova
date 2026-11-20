import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { ConditionDirectory } from '@/components/conditions/condition-directory'
import { ClosingInvitation } from '@/components/home/patient-info'

export const metadata: Metadata = {
  title: 'What We Treat',
  description:
    'Explore compassionate psychiatric support for depression, anxiety, ADHD, bipolar disorder, insomnia, grief, and cognitive or behavioral concerns in adults and older adults.',
  openGraph: {
    title: 'Understanding Is the First Step | Marenova Wellness',
    description:
      'Learn about the symptoms, everyday impact, and evaluation of eight common mental health concerns.',
  },
}

export default function WhatWeTreatPage() {
  return (
    <>
      <PageIntro
        eyebrow="What we treat"
        currentPage="What We Treat"
        title={<>Understanding is<br /><span className="text-heading-accent">the first step.</span></>}
        description="Whatever brings you here, you deserve to feel heard. Explore common concerns we assess in adults and older adults — not to diagnose yourself, but to find a starting point for a thoughtful conversation."
      />
      <ConditionDirectory />
      <ClosingInvitation />
    </>
  )
}
