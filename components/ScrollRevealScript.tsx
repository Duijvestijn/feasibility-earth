'use client'
import { useEffect } from 'react'

export default function ScrollRevealScript() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const delay = parseInt(el.dataset.revealDelay ?? '0', 10)
          el.classList.add('fe-reveal-pending')
          setTimeout(() => el.classList.add('fe-revealed'), delay)
          observer.unobserve(el)
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -32px 0px' }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
