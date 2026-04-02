import { useEffect, useRef } from 'react'

export function useSmoothScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isScrollingRef = useRef(false)
  const currentSectionIndexRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Detectar si es un dispositivo táctil (móvil/tablet)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    
    // Si es dispositivo táctil, no activar smooth scroll
    if (isTouchDevice) {
      return
    }

    const sections = Array.from(
      container.querySelectorAll('section[data-scroll-section]')
    ) as HTMLElement[]
    
    if (sections.length === 0) return

    // Calcular el índice de la sección actual basado en la posición del scroll
    const getCurrentSectionIndex = (): number => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Cada sección tiene 120vh de altura (1.2 veces el viewport)
      // Calcular qué sección está más centrada en el viewport
      let activeIndex = 0
      let minDistance = Infinity
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        // Calcular la distancia del centro de la sección al centro del viewport
        const sectionCenter = rect.top + rect.height / 2
        const viewportCenter = windowHeight / 2
        const distance = Math.abs(sectionCenter - viewportCenter)
        
        if (distance < minDistance) {
          minDistance = distance
          activeIndex = index
        }
      })
      
      return activeIndex
    }

    // Scroll a una sección específica
    const scrollToSection = (index: number, smooth: boolean = true) => {
      if (index < 0 || index >= sections.length) return
      
      const section = sections[index]
      // Usar getBoundingClientRect para obtener la posición real
      // y luego calcular la posición de scroll necesaria
      const rect = section.getBoundingClientRect()
      const currentScrollY = window.scrollY
      const targetScroll = currentScrollY + rect.top
      
      isScrollingRef.current = true
      currentSectionIndexRef.current = index
      
      window.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: smooth ? 'smooth' : 'auto',
      })
      
      // Resetear flag después de la animación
      setTimeout(() => {
        isScrollingRef.current = false
      }, 800)
    }

    // Inicializar la sección actual
    currentSectionIndexRef.current = getCurrentSectionIndex()

    let wheelTimeout: ReturnType<typeof setTimeout> | null = null
    let accumulatedDelta = 0
    const SCROLL_THRESHOLD = 50 // Delta mínimo para activar scroll
    const DEBOUNCE_TIME = 100 // Tiempo de debounce

    const handleWheel = (e: WheelEvent) => {
      // Si ya estamos scrolleando, prevenir el scroll nativo
      if (isScrollingRef.current) {
        e.preventDefault()
        return
      }

      // Acumular el delta del scroll
      accumulatedDelta += e.deltaY

      // Limpiar timeout anterior
      if (wheelTimeout) {
        clearTimeout(wheelTimeout)
      }

      // Esperar un momento para acumular más eventos de scroll
      wheelTimeout = setTimeout(() => {
        // Solo procesar si el delta acumulado es significativo
        if (Math.abs(accumulatedDelta) < SCROLL_THRESHOLD) {
          accumulatedDelta = 0
          return
        }

        e.preventDefault()

        const currentIndex = getCurrentSectionIndex()
        const direction = accumulatedDelta > 0 ? 'down' : 'up'

        let nextIndex = currentIndex

        if (direction === 'down' && currentIndex < sections.length - 1) {
          nextIndex = currentIndex + 1
        } else if (direction === 'up' && currentIndex > 0) {
          nextIndex = currentIndex - 1
        }

        // Solo hacer scroll si cambiamos de sección
        if (nextIndex !== currentIndex) {
          scrollToSection(nextIndex)
        }

        accumulatedDelta = 0
      }, DEBOUNCE_TIME)
    }

    // Agregar listener con passive: false para permitir preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false })

    // Manejar teclas de flecha
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrollingRef.current) return

      const currentIndex = getCurrentSectionIndex()

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        if (currentIndex < sections.length - 1) {
          scrollToSection(currentIndex + 1)
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        if (currentIndex > 0) {
          scrollToSection(currentIndex - 1)
        }
      } else if (e.key === 'Home') {
        e.preventDefault()
        scrollToSection(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        scrollToSection(sections.length - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      if (wheelTimeout) {
        clearTimeout(wheelTimeout)
      }
    }
  }, [])

  return containerRef
}
