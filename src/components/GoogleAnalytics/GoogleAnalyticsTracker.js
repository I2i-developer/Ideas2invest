'use client'

import { useEffect } from 'react'

function getCurrentPath() {
  return `${window.location.pathname}${window.location.search}`
}

export default function GoogleAnalyticsTracker() {
  useEffect(() => {
    let lastPath = getCurrentPath()

    const trackPageView = () => {
      const nextPath = getCurrentPath()
      if (nextPath === lastPath) return
      lastPath = nextPath
      window.gtag?.('config', 'G-TTWMS72K7P', {
        page_path: nextPath,
      })
    }

    const originalPushState = window.history.pushState
    const originalReplaceState = window.history.replaceState

    window.history.pushState = function pushState(...args) {
      const result = originalPushState.apply(this, args)
      window.dispatchEvent(new Event('locationchange'))
      return result
    }

    window.history.replaceState = function replaceState(...args) {
      const result = originalReplaceState.apply(this, args)
      window.dispatchEvent(new Event('locationchange'))
      return result
    }

    window.addEventListener('popstate', trackPageView)
    window.addEventListener('locationchange', trackPageView)

    return () => {
      window.history.pushState = originalPushState
      window.history.replaceState = originalReplaceState
      window.removeEventListener('popstate', trackPageView)
      window.removeEventListener('locationchange', trackPageView)
    }
  }, [])

  return null
}
