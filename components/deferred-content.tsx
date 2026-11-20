'use client'

import dynamic from 'next/dynamic'

// Keep SSR enabled so useful content and its layout survive while each client chunk loads.
export const DeferredFaqAccordion = dynamic(() =>
  import('@/components/faq-accordion').then((module) => module.FaqAccordion),
)
