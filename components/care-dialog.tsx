'use client'

import { useState, type ComponentProps } from 'react'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export interface CareInformation {
  title: string
  introduction: string
  points: string[]
  note: string
}

interface CareDialogProps {
  information: CareInformation
  label: string
  variant?: ComponentProps<typeof Button>['variant']
  size?: ComponentProps<typeof Button>['size']
  className?: string
}

export function CareDialog({
  information,
  label,
  variant = 'link',
  size = 'sm',
  className,
}: CareDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant={variant} size={size} className={className} />}>
        {label}
        <ArrowRight data-icon="inline-end" aria-hidden="true" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <p className="eyebrow mb-2">Thoughtful, personalized care</p>
          <DialogTitle>{information.title}</DialogTitle>
          <DialogDescription>
            {information.introduction}
          </DialogDescription>
        </DialogHeader>
        <ul className="flex flex-col gap-4">
          {information.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-lg leading-relaxed">
              <Check className="mt-0.5 size-4 shrink-0 text-secondary-foreground" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
        <p className="border-t pt-5 text-base leading-relaxed font-medium text-muted-foreground">{information.note}</p>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
          <Link
            href="/patient-info"
            className={buttonVariants()}
            onClick={() => setOpen(false)}
          >
            Plan your first visit <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
