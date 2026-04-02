import { type ReactNode, useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface ScrollAnimationProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
  ignoreScrollDirection?: boolean
}

export default function ScrollAnimation({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  ignoreScrollDirection = false,
}: ScrollAnimationProps) {
  // Detectar si es un dispositivo móvil/táctil
  const isMobile = typeof window !== 'undefined' && (
    'ontouchstart' in window || 
    navigator.maxTouchPoints > 0 ||
    window.innerWidth < 768
  )

  const [isScrollingDown, setIsScrollingDown] = useState(true)
  const [hasEntered, setHasEntered] = useState(false)
  const lastScrollY = useRef(window.scrollY)
  const elementRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(elementRef, { margin: '-100px', amount: 0.2 })

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Detectar dirección del scroll cuando el elemento entra en el viewport
      if (isInView && !hasEntered) {
        if (!ignoreScrollDirection) {
          if (currentScrollY > lastScrollY.current) {
            setIsScrollingDown(true) // Scroll hacia abajo
          } else if (currentScrollY < lastScrollY.current) {
            setIsScrollingDown(false) // Scroll hacia arriba
          }
        }
        setHasEntered(true)
      }
      
      // Resetear cuando sale completamente del viewport para permitir re-animación
      if (!isInView) {
        // Solo resetear si está completamente fuera
        const rect = elementRef.current?.getBoundingClientRect()
        if (rect && (rect.bottom < 0 || rect.top > window.innerHeight)) {
          setHasEntered(false)
        }
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isInView, hasEntered, ignoreScrollDirection])

  // Calcular la dirección de animación basada en la dirección del scroll
  const getAnimationOffset = (scrollDown: boolean) => {
    // Si ignoreScrollDirection es true, siempre usar la dirección normal
    const useNormalDirection = ignoreScrollDirection || scrollDown
    
    if (useNormalDirection) {
      // Animación normal
      return {
        y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
        x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      }
    } else {
      // Animación inversa
      return {
        y: direction === 'up' ? -30 : direction === 'down' ? 30 : 0,
        x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
      }
    }
  }

  const variants = {
    hidden: (scrollDown: boolean) => {
      const offset = getAnimationOffset(scrollDown)
      return {
        opacity: 0,
        y: offset.y,
        x: offset.x,
        scale: 0.97,
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  // El contenido debe estar visible si está en el viewport o si ya ha entrado antes
  const shouldBeVisible = isInView || hasEntered

  // En móviles, mostrar el contenido directamente sin animaciones
  if (isMobile) {
    return (
      <div ref={elementRef} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={elementRef}
      initial="hidden"
      animate={shouldBeVisible ? 'visible' : 'hidden'}
      variants={variants}
      custom={isScrollingDown}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

