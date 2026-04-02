import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ScrollAnimation from '../components/ScrollAnimation'
import Orb from '../components/Orb'
import { useTheme } from '../contexts/ThemeContext'

export default function NotFound() {
  const { theme } = useTheme()

  return (
    <Layout>
      <SEO 
        title="404 - Página no encontrada | Tomás Martorelli"
        description="La página que buscas no existe o ha sido movida."
        url="/404"
      />
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Orb Background */}
        <div className="absolute inset-0 w-full h-full -z-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] sm:w-[110vw] md:w-[100vw] lg:w-[90vw] xl:w-[80vw] h-[120vh] sm:h-[110vh] md:h-[100vh] lg:h-[90vh] xl:h-[80vh] max-w-[1400px] max-h-[1400px] pointer-events-auto">
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
                backgroundColor={theme === 'light' ? '#ffffff' : '#000000'}
              />
            </div>
          </div>
          {/* Fade-out gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-[1]"></div>
        </div>

        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-background/20 z-[1] pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="mx-auto w-full max-w-7xl relative px-4 sm:px-6 pt-20 sm:pt-24 md:pt-0 pb-8 md:pb-0 text-center">
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <ScrollAnimation direction="up" delay={0}>
                <div className="space-y-4">
                  <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold leading-[1.1] text-text-primary opacity-20">
                    404
                  </h1>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary uppercase tracking-tight">
                    Página no encontrada
                  </h2>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="up" delay={0.1}>
                <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed">
                  Lo sentimos, la página que buscas no existe o ha sido movida.
                </p>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.2}>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-soft text-text-primary px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  >
                    Volver al inicio
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

