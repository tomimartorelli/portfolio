import { useEffect } from 'react'

interface AnalyticsProps {
  gaId?: string
  enabled?: boolean
}

/**
 * Componente de Google Analytics opcional
 * Solo se carga si se proporciona un GA_ID en las variables de entorno
 * 
 * Para usar:
 * 1. Agrega VITE_GA_ID=tu-google-analytics-id en tu .env
 * 2. El componente se cargará automáticamente
 */
export default function Analytics({ gaId, enabled = true }: AnalyticsProps) {
  useEffect(() => {
    if (!enabled || !gaId) return

    // Cargar Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(script1)

    // Inicializar gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', gaId, {
      page_path: window.location.pathname,
    })

    // Guardar gtag en window para uso global
    ;(window as any).gtag = gtag

    return () => {
      // Cleanup: remover scripts al desmontar
      const scripts = document.querySelectorAll(`script[src*="googletagmanager"]`)
      scripts.forEach((script) => script.remove())
    }
  }, [gaId, enabled])

  return null
}

// Declaración de tipos para TypeScript
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

