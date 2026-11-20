'use client'

import type { ComponentProps } from 'react'
import { AppointmentLink } from '@/components/appointment-widget'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { buttonVariants, type Button } from '@/components/ui/button'
import { practice } from '@/lib/practice'
import { cn } from '@/lib/utils'

interface PracticeActionProps {
  type?: 'booking' | 'portal'
  variant?: ComponentProps<typeof Button>['variant']
  size?: ComponentProps<typeof Button>['size']
  className?: string
  label?: string
  showArrow?: boolean
  onNavigate?: () => void
}

export function PracticeAction({
  type = 'booking',
  variant,
  size = 'default',
  className,
  label,
  showArrow = true,
  onNavigate,
}: PracticeActionProps) {
  const isBooking = type === 'booking'
  const destination = isBooking ? practice.bookingUrl : practice.portalUrl
  if (!isBooking && !destination) return null

  const actionLabel = label ?? (isBooking ? 'Get Started' : 'Patient Portal')
  const actionVariant = variant ?? (isBooking ? 'default' : 'outline')
  const ActionIcon = isBooking ? ArrowRight : ArrowUpRight
  const content = (
    <>
      {actionLabel}
      {showArrow && <ActionIcon data-icon="inline-end" aria-hidden="true" />}
    </>
  )

  if (isBooking) {
    return <AppointmentLink onNavigate={onNavigate} className={cn(buttonVariants({ variant: actionVariant, size }), className)}>{content}</AppointmentLink>
  }

  if (destination) {
    return (
      <a
        href={destination}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={cn(buttonVariants({ variant: actionVariant, size }), className)}
      >
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  }

  return null
}
