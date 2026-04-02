import { useState } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ScrollAnimation from '../components/ScrollAnimation'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import { Link } from 'react-router-dom'
import Orb from '../components/Orb'
import { useTheme } from '../contexts/ThemeContext'

export default function Pricing() {
  const containerRef = useSmoothScroll()
  const { theme } = useTheme()
  const [selectedPlan, setSelectedPlan] = useState<string | null>('Profesional')

  const plans = [
    {
      name: 'Básico',
      price: '$500',
      period: 'por proyecto',
      description: 'Ideal para proyectos pequeños y sitios web simples',
      features: [
        'Diseño de sitio web responsivo',
        'Hasta 5 páginas',
        'Optimización SEO básica',
        'Soporte por email (1 mes)',
        'Entrega en 2-3 semanas',
      ],
    },
    {
      name: 'Profesional',
      price: '$1,200',
      period: 'por proyecto',
      description: 'Perfecto para empresas en crecimiento',
      features: [
        'Diseño personalizado completo',
        'Hasta 10 páginas',
        'Integración con CMS',
        'Optimización SEO avanzada',
        'Soporte por email (3 meses)',
        'Entrega en 4-5 semanas',
        'Revisiones ilimitadas',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Personalizado',
      period: 'consulta',
      description: 'Soluciones completas para grandes proyectos',
      features: [
        'Desarrollo full stack completo',
        'Páginas ilimitadas',
        'Sistema de gestión personalizado',
        'Integración de APIs',
        'Soporte prioritario 24/7',
        'Mantenimiento continuo',
        'Consultoría técnica incluida',
      ],
    },
  ]

  return (
    <Layout>
      <SEO 
        title="Precios y Planes | Tomás Martorelli"
        description="Planes y precios para tus proyectos web. Desde sitios básicos hasta soluciones enterprise completas. Desarrollo full stack, diseño UX/UI y más servicios."
        url="/pricing"
      />
      <div ref={containerRef} className="min-h-screen bg-background">
        {/* Hero Section */}
        <section
          data-scroll-section
          className="h-screen scroll-section relative overflow-hidden bg-background"
          style={{ height: '120vh' }}
        >
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
            {/* Fade-out gradient al final para transición suave */}
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-[1]"></div>
          </div>

          {/* Overlay para legibilidad del texto - con pointer-events-none para no bloquear el hover */}
          <div className="absolute inset-0 bg-background/20 z-[1] pointer-events-none" />

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="mx-auto w-full max-w-7xl relative px-4 sm:px-6 pt-20 sm:pt-24 md:pt-0 pb-8 md:pb-0">
              <div className="text-center space-y-6 sm:space-y-8 md:space-y-10">
                <ScrollAnimation direction="up" delay={0}>
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-text-secondary font-medium">
                      • PRICING
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1] text-text-primary uppercase tracking-tight">
                      Planes y Precios
                    </h1>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={0.1}>
                  <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed">
                    Elige el plan que mejor se adapte a tus necesidades. Todos los planes incluyen diseño moderno, código limpio y soporte continuo.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section
          data-scroll-section
          className="h-screen scroll-section relative overflow-hidden bg-background"
          style={{ height: '120vh' }}
        >
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="mx-auto w-full max-w-7xl relative px-3 sm:px-6 pt-16 sm:pt-24 md:pt-0 pb-4 md:pb-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 items-stretch">
                {plans.map((plan, index) => {
                  const isSelected = selectedPlan === plan.name
                  const isPopular = plan.name === 'Profesional'
                  
                  return (
                    <ScrollAnimation key={plan.name} direction="up" delay={0.1 + index * 0.05}>
                      <div
                        onClick={() => setSelectedPlan(plan.name)}
                        className={`relative rounded-2xl border transition-all duration-500 ease-in-out cursor-pointer h-full ${
                          isSelected
                            ? 'border-primary bg-background-card scale-105 md:scale-110 shadow-lg shadow-primary/20 z-10'
                            : 'border-border bg-background-card hover:border-primary/50 hover:bg-background-cardHover'
                        } p-3 sm:p-6 md:p-8 flex flex-col`}
                      >
                        <div
                          className={`absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out ${
                            isSelected
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 -translate-y-2 pointer-events-none'
                          }`}
                        >
                          <span className="bg-primary text-text-primary px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wide shadow-lg whitespace-nowrap">
                            {isPopular ? 'Más Popular' : 'Seleccionado'}
                          </span>
                        </div>

                      <div className="flex-1">
                        <h3 className="text-base sm:text-xl md:text-2xl font-bold text-text-primary mb-1 sm:mb-2">
                          {plan.name}
                        </h3>
                        <p className="text-[11px] sm:text-sm text-text-secondary mb-3 sm:mb-6">
                          {plan.description}
                        </p>

                        <div className="mb-3 sm:mb-6">
                          <div className="flex items-baseline gap-1.5 sm:gap-2">
                            <span className="text-xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                              {plan.price}
                            </span>
                            <span className="text-[10px] sm:text-sm text-text-secondary">
                              {plan.period}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-1.5 sm:space-y-3 mb-3 sm:mb-8">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-1.5 sm:gap-3">
                              <svg
                                className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-[11px] sm:text-sm text-text-secondary leading-tight">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to="/contacto"
                        onClick={(e) => e.stopPropagation()}
                        className={`w-full rounded-full px-3 sm:px-6 py-1.5 sm:py-3 text-[11px] sm:text-sm font-medium transition-all duration-300 text-center ${
                          isSelected
                            ? 'bg-primary hover:bg-primary-soft text-text-primary hover:scale-105'
                            : 'bg-background-cardHover hover:bg-background-cardLight border border-border text-text-primary'
                        }`}
                      >
                        {plan.price === 'Personalizado' ? 'Contactar' : 'Contratar Plan'}
                      </Link>
                    </div>
                  </ScrollAnimation>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          data-scroll-section
          className="h-screen scroll-section relative overflow-hidden bg-background"
          style={{ height: '120vh' }}
        >
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="mx-auto w-full max-w-4xl relative px-4 sm:px-6 pt-20 sm:pt-24 md:pt-0 pb-8 md:pb-0">
              <div className="text-center space-y-6 sm:space-y-8">
                <ScrollAnimation direction="up" delay={0}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary uppercase tracking-tight">
                    ¿Necesitas algo personalizado?
                  </h2>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={0.1}>
                  <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
                    Cada proyecto es único. Si necesitas un plan personalizado o tienes requisitos específicos, estoy aquí para ayudarte a encontrar la solución perfecta.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={0.2}>
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <Link
                      to="/contacto"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-soft text-text-primary px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                    >
                      Hablemos de tu proyecto
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
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

