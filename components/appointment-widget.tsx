'use client'

import Script from 'next/script'
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { practice } from '@/lib/practice'

const scopeId = '9b421407-6a3a-4f84-b749-fbc1f1e7bc38'
const applicationId = '7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b'
const widgetParams = new URLSearchParams({ scopeId, applicationId, scopeGlobal: 'true', appearance: JSON.stringify({ fullScreen: true }) })
const widgetUrl = `${practice.bookingUrl}/widget-redirect?${widgetParams}`
const FallbackContext = createContext<() => void>(() => {})

declare global {
  interface Window { spWidgetAutoBind?: () => void }
}

export function AppointmentWidget({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <FallbackContext.Provider value={() => setOpen(true)}>
      {children}
      <Script src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js" strategy="afterInteractive" />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Request an appointment</DialogTitle>
            <DialogDescription>If the scheduler does not appear, <a href={practice.bookingUrl} target="_blank" rel="noopener noreferrer">open the secure portal in a new tab</a>.</DialogDescription>
          </DialogHeader>
          {open && <iframe src={widgetUrl} title="SimplePractice appointment scheduler" className="h-[min(60dvh,640px)] w-full rounded-lg border" referrerPolicy="no-referrer" />}
        </DialogContent>
      </Dialog>
    </FallbackContext.Provider>
  )
}

export function AppointmentLink({ children, className, onNavigate }: { children: ReactNode; className: string; onNavigate?: () => void }) {
  const showFallback = useContext(FallbackContext)
  const link = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    // The vendor scans the DOM at load time; client navigation and sheets mount new links later.
    window.spWidgetAutoBind?.()
  }, [])
  return (
    <a ref={link} href={practice.bookingUrl} className={className} aria-haspopup="dialog"
      data-spwidget-scope-id={scopeId} data-spwidget-scope-uri="marenovawellness"
      data-spwidget-application-id={applicationId} data-spwidget-type="OAR"
      data-spwidget-scope-global="" data-spwidget-autobind=""
      onClickCapture={onNavigate}
      onClick={(event) => {
        // A bound native handler stops propagation. Only unhandled clicks reach React here.
        event.preventDefault()
        showFallback()
      }}
    >{children}</a>
  )
}
