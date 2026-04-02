import { Link } from 'react-router-dom'
import ScrollAnimation from '../components/ScrollAnimation'
import DarkVeil from '../components/DarkVeil'

interface HeroSectionProps {
  stats: Array<{ number: string; label: string }>
}

export default function HeroSection({ stats }: HeroSectionProps) {
  // Hero siempre en modo oscuro - no usa el theme
  
  return (
    <section data-scroll-section className="h-screen scroll-section relative overflow-hidden bg-black" style={{ height: '120vh' }}>
      {/* DarkVeil Background - Ocupa toda la pantalla y se extiende más */}
      <div className="absolute inset-0 w-full h-full -z-0 overflow-hidden">
        <div className="absolute -inset-8 sm:-inset-12 md:-inset-16 lg:-inset-20 xl:-inset-24 w-[calc(100%+4rem)] sm:w-[calc(100%+6rem)] md:w-[calc(100%+8rem)] lg:w-[calc(100%+10rem)] xl:w-[calc(100%+12rem)] h-[calc(100%+4rem)] sm:h-[calc(100%+6rem)] md:h-[calc(100%+8rem)] lg:h-[calc(100%+10rem)] xl:h-[calc(100%+12rem)]">
          <DarkVeil 
            hueShift={0}
            noiseIntensity={0.03}
            scanlineIntensity={0.12}
            speed={1.2}
            scanlineFrequency={2.5}
            warpAmount={0.15}
            resolutionScale={1}
          />
        </div>
        {/* Overlay sutil para modo oscuro */}
        <div className="absolute inset-0 pointer-events-none bg-black/10"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 pt-20 sm:pt-24 md:pt-0 pb-8 md:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 xl:space-y-10">
            <ScrollAnimation direction="right" delay={0}>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/80 font-medium">
                • TOMÁS MARTORELLI
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation direction="right" delay={0.05}>
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1]">
                  <span className="text-white">Hey. I'm</span>{' '}
                  <span className="text-primary">Tomi,</span>
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1]">
                  <span className="text-white">A</span>{' '}
                  <span className="text-white/90 font-normal">Web Developer</span>{' '}
                  <span className="text-white">&</span>{' '}
                  <span className="text-white/90 font-normal">UX Designer</span>
                </h2>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.1}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl">
                Técnico Superior en Diseño y Desarrollo Web especializado en crear experiencias digitales modernas. Combino desarrollo frontend, diseño UX y conocimientos avanzados en IoT, APIs y análisis de datos para construir soluciones que impactan.
              </p>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.15}>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm hover:scale-105 hover:shadow-lg hover:shadow-white/20"
              >
                CONTACT ME
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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
            </ScrollAnimation>
          </div>

          {/* Right Side - Stats */}
          <ScrollAnimation direction="left" delay={0.1}>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 mt-4 sm:mt-6 md:mt-8 lg:mt-0">
              {stats.map((stat, index) => (
                <ScrollAnimation key={index} delay={0.15 + index * 0.05} direction="up">
                  <div className="space-y-1 p-3 sm:p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      {stat.number}
                    </p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-white/70 uppercase tracking-wider leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

