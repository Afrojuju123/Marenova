'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface FaqAccordionProps {
  questions: readonly { id: string; question: string; answer: string }[]
  defaultOpen?: string
}

export function FaqAccordion({ questions, defaultOpen }: FaqAccordionProps) {
  return (
    <Accordion defaultValue={defaultOpen ? [defaultOpen] : []}>
      {questions.map(({ id, question, answer }) => (
        <AccordionItem key={id} value={id}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
