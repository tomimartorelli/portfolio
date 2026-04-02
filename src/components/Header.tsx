import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../contexts/ThemeContext'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/sobre-mi', label: 'Sobre mí' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/disenos', label: 'Diseños' },
    { path: '/contacto', label: 'Contacto' },
  ]

  // Prefetch de rutas principales después de un delay (solo en desktop)
  useEffect(() => {
    // Solo prefetch en desktop y después de que la página haya cargado
    if (window.innerWidth >= 768) {
      const timer = setTimeout(() => {
        // Prefetch de rutas más visitadas
        const routesToPrefetch: (() => Promise<any>)[] = [
          () => import('../pages/SobreMi'),
          () => import('../pages/Proyectos'),
        ]

        routesToPrefetch.forEach((prefetchFn) => {
          prefetchFn().catch(() => {
            // Ignorar errores de prefetch silenciosamente
          })
        })
      }, 2000) // Prefetch después de 2 segundos

      return () => clearTimeout(timer)
    }
  }, [])

  const isHomePage = location.pathname === '/'
  const isDarkMode = isHomePage || theme === 'dark'

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const isPricingPage = location.pathname === '/pricing'

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background-card/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto w-full max-w-7xl flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group z-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img 
            src={isDarkMode ? "/img/logo.png" : "/img/logonegro.png"}
            alt="Logo de Tomás Martorelli - Volver al inicio" 
            className="h-10 w-10 sm:h-11 sm:w-11 object-contain transition-opacity opacity-90 group-hover:opacity-100"
            width="44"
            height="44"
          />
          
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-sm">
          {navItems.map((item) => {
            // Prefetch al hacer hover sobre el link
            const handleMouseEnter = () => {
              const routes: Record<string, () => Promise<any>> = {
                '/sobre-mi': () => import('../pages/SobreMi'),
                '/proyectos': () => import('../pages/Proyectos'),
                '/disenos': () => import('../pages/Disenos'),
                '/contacto': () => import('../pages/Contacto'),
                '/pricing': () => import('../pages/Pricing'),
              }

              if (routes[item.path]) {
                routes[item.path]().catch(() => {
                  // Ignorar errores de prefetch
                })
              }
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                onMouseEnter={handleMouseEnter}
                className={`transition-colors uppercase tracking-wider text-xs font-medium ${
                  isDarkMode
                    ? isActive(item.path)
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                    : isActive(item.path)
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Theme Toggle and CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            to={isPricingPage ? "/contacto" : "/pricing"}
            className={`inline-flex rounded-full px-4 py-1.5 text-xs font-medium shadow-sm backdrop-blur-sm transition-colors ${
              isDarkMode
                ? 'border border-white/20 bg-white/10 text-white hover:bg-white/20'
                : 'border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20'
            }`}
          >
            DISPONIBLE PARA TRABAJAR
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={`md:hidden relative z-50 w-10 h-10 flex items-center justify-center transition-colors ${
            isDarkMode ? 'text-white' : 'text-text-primary'
          }`}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'
              }`}
            />
          </div>
        </button>
      </div>

    </header>
    
    {/* Mobile Menu Overlay - Fuera del header para mejor control de z-index */}
    <div
      className={`fixed inset-0 bg-background md:hidden transition-opacity duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{ 
        zIndex: 9999,
      }}
      onClick={() => setIsMobileMenuOpen(false)}
    >
        <div className="flex flex-col h-screen pt-20 px-6 relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className={`absolute top-6 right-6 w-10 h-10 flex items-center justify-center transition-colors z-10 ${
              isDarkMode ? 'text-white/80 hover:text-white' : 'text-text-primary/80 hover:text-text-primary'
            }`}
            aria-label="Cerrar menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-6 mb-8">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  // Pequeño delay para permitir que la animación del menú se vea
                  setTimeout(() => {
                    setIsMobileMenuOpen(false)
                  }, 100)
                }}
                className={`text-2xl font-thin uppercase tracking-wider transition-all duration-300 transform ${
                  isDarkMode
                    ? isActive(item.path)
                      ? 'text-white'
                      : 'text-white/60 hover:text-white hover:translate-x-2'
                    : isActive(item.path)
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary hover:translate-x-2'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Bottom Section - Pushed to bottom */}
          <div className="mt-auto pb-6 space-y-6">
            {/* Mobile Theme Toggle */}
            <div className="flex items-center justify-between gap-4">
              <span className={`text-sm uppercase tracking-wider ${
                isDarkMode ? 'text-white/60' : 'text-text-secondary'
              }`}>
                Modo
              </span>
              <ThemeToggle />
            </div>

            {/* Mobile CTA Button */}
            <Link
              to={isPricingPage ? "/contacto" : "/pricing"}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`inline-flex items-center justify-center w-full rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                isDarkMode
                  ? 'border border-white/20 bg-white/10 text-white hover:bg-white/20'
                  : 'border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              DISPONIBLE PARA TRABAJAR
            </Link>

            {/* Mobile Footer Info */}
            <div className={`pt-6 border-t ${isDarkMode ? 'border-white/10' : 'border-border'}`}>
              <p className={`text-xs uppercase tracking-wider ${
                isDarkMode ? 'text-white/40' : 'text-text-secondary'
              }`}>
                Tomás Martorelli
              </p>
              <p className={`text-xs mt-1 ${
                isDarkMode ? 'text-white/40' : 'text-text-secondary'
              }`}>
                Desarrollador Full Stack
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
