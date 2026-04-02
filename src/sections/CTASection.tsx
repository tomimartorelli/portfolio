import { Link } from 'react-router-dom'
import ScrollAnimation from '../components/ScrollAnimation'

export default function CTASection() {
  return (
    <section data-scroll-section className="h-screen scroll-section relative overflow-hidden bg-background" style={{ height: '120vh' }}>
      {/* Transition elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-40 bg-gradient-to-b from-[#6A0DAD]/30 to-transparent"></div>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="mx-auto w-full max-w-7xl relative px-4 sm:px-6 pt-20 sm:pt-24 md:pt-0 pb-8 md:pb-0">
        <div className="text-center space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-12">
          <ScrollAnimation direction="up" delay={0}>
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-text-secondary font-medium">
                • ¿LISTO PARA TRABAJAR JUNTOS?
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-text-primary uppercase tracking-tight leading-tight px-4">
                HABLEMOS DE TU PROYECTO
              </h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.1}>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto px-4">
              Estoy disponible para nuevos proyectos y colaboraciones. Si tienes una idea, un proyecto en mente o simplemente quieres charlar sobre diseño y desarrollo, estaré encantado de escucharte.
            </p>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8 px-4">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 sm:gap-3 bg-primary hover:bg-primary-soft text-text-primary px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 lg:py-5 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm md:text-base uppercase tracking-wide hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 w-full sm:w-auto justify-center"
              >
                CONTACTAR AHORA
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                to="/proyectos"
                className="inline-flex items-center gap-2 sm:gap-3 bg-background-cardHover hover:bg-background-cardLight border border-border text-text-primary px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 lg:py-5 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm md:text-base uppercase tracking-wide hover:border-primary/50 w-full sm:w-auto justify-center"
              >
                VER PORTFOLIO
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.3}>
            <div className="pt-6 sm:pt-8 md:pt-12 border-t border-border">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center px-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">24/7</p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-text-secondary uppercase tracking-wide">Disponibilidad</p>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">100%</p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-text-secondary uppercase tracking-wide">Comprometido</p>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">∞</p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-text-secondary uppercase tracking-wide">Creatividad</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        </div>
      </div>
    </section>
  )
}

