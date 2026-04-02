import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

/**
 * Hook para tracking de eventos con Google Analytics
 * 
 * Uso:
 * const { trackEvent, trackPageView } = useAnalytics()
 * 
 * trackEvent('button_click', { button_name: 'Contact' })
 * trackPageView('/contacto')
 */
export function useAnalytics() {
  const location = useLocation()

  // Track page views automáticamente cuando cambia la ruta
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', import.meta.env.VITE_GA_ID, {
        page_path: location.pathname + location.search,
      })
    }
  }, [location])

  const trackEvent = useCallback(
    (eventName: string, eventParams?: Record<string, unknown>) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, eventParams)
      }
    },
    []
  )

  const trackPageView = useCallback((path: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', import.meta.env.VITE_GA_ID, {
        page_path: path,
      })
    }
  }, [])

  return { trackEvent, trackPageView }
}

