import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

/**
 * Hook para detectar cuando un elemento entra en el viewport
 * Útil para animaciones al hacer scroll
 * 
 * Uso:
 * const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true })
 * 
 * <div ref={ref} className={isIntersecting ? 'animate-fade-in' : 'opacity-0'}>
 *   Contenido
 * </div>
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Si ya intersectó y triggerOnce es true, no hacer nada más
    if (hasIntersected && triggerOnce) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true)
            if (triggerOnce) {
              setHasIntersected(true)
              observer.disconnect()
            }
          } else if (!triggerOnce) {
            setIsIntersecting(false)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce, hasIntersected])

  return { ref: elementRef, isIntersecting, hasIntersected }
}

