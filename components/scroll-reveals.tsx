'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const revealSelector = '[data-reveal], .section-heading, .body-copy, figure'

export function ScrollReveals() {
  const pathname = usePathname()

  useEffect(() => {
    const main = document.getElementById('main-content')
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!main || preference.matches || !('IntersectionObserver' in window)) return

    const registered = new WeakSet<HTMLElement>()
    const pending = new Set<HTMLElement>()

    function reveal(element: HTMLElement, animate = true) {
      element.dataset.revealState = animate ? 'revealed' : 'visible'
      pending.delete(element)
      observer.unobserve(element)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement)
        }
      },
      { rootMargin: '0px 0px 48px 0px', threshold: 0 },
    )

    function register() {
      if (!main || preference.matches) return

      const candidates = Array.from(main.querySelectorAll<HTMLElement>(revealSelector))
        .filter((element) => {
          if (registered.has(element)) return false
          registered.add(element)
          return !element.dataset.revealState &&
            !element.parentElement?.closest(revealSelector) &&
            !element.closest('[data-no-reveal], [hidden], [aria-hidden="true"], [role="alert"], [role="note"], [role="status"], #warning-signs') &&
            !element.querySelector('form')
        })
        .filter((element) => element.getBoundingClientRect().top >= window.innerHeight + 48)

      // Only off-screen content is hidden after hydration; the hero and no-JS page stay visible.
      for (const element of candidates) {
        element.dataset.revealState = 'pending'
        pending.add(element)
        observer.observe(element)
      }
    }

    function revealFocus(event: FocusEvent) {
      if (!(event.target instanceof HTMLElement)) return
      const selector = '[data-reveal-state="pending"], [data-reveal-state="revealed"]'
      const element = event.target.closest<HTMLElement>(selector)
      if (element) reveal(element, false)
      event.target.querySelectorAll<HTMLElement>(selector).forEach((child) => reveal(child, false))
    }

    function revealHashTarget() {
      let id: string
      try {
        id = decodeURIComponent(window.location.hash.slice(1))
      } catch {
        return
      }
      const target = document.getElementById(id)
      if (!target) return
      for (const element of pending) {
        if (element.contains(target) || target.contains(element)) reveal(element, false)
      }
    }

    function revealWithoutMotion() {
      if (!preference.matches) return
      for (const element of pending) reveal(element, false)
      observer.disconnect()
    }

    register()
    revealHashTarget()
    const mutations = new MutationObserver(() => {
      register()
      revealHashTarget()
    })
    mutations.observe(main, { childList: true, subtree: true })
    main.addEventListener('focusin', revealFocus)
    window.addEventListener('hashchange', revealHashTarget)
    preference.addEventListener('change', revealWithoutMotion)

    return () => {
      observer.disconnect()
      mutations.disconnect()
      main.removeEventListener('focusin', revealFocus)
      window.removeEventListener('hashchange', revealHashTarget)
      preference.removeEventListener('change', revealWithoutMotion)
      for (const element of pending) delete element.dataset.revealState
    }
  }, [pathname])

  return null
}
