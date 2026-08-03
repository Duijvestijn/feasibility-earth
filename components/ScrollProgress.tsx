'use client'
import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handler = () => {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? (el.scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 51, height: 2, pointerEvents: 'none' }}
    >
      <div style={{ height: '100%', background: '#40916C', width: '100%', transformOrigin: 'left center', transform: `scaleX(${progress / 100})`, transition: 'transform 80ms linear' }} />
    </div>
  )
}
