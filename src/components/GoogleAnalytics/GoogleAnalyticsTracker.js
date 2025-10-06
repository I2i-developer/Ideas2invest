'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

function Tracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname) return
    const url = `${pathname}?${searchParams.toString()}`
    window.gtag?.('config', 'G-TTWMS72K7P', {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}

export default function GoogleAnalyticsTracker() {
  // ✅ Wrap inside Suspense boundary
  return (
    <Suspense fallback={null}>
      <Tracker />
    </Suspense>
  )
}
