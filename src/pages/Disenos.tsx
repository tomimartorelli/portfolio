import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ScrollAnimation from '../components/ScrollAnimation'
import { Link } from 'react-router-dom'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import Threads from '../components/Threads'
import { useTheme } from '../contexts/ThemeContext'
import DesignModal from '../components/DesignModal'
import { useState } from 'react'

const disenos = [
  {
    id: 1,
    category: 'Diseño Gráfico',
    title: 'Folleto para Campaña de Concientización sobre Dengue',
    description:
      'Folleto informativo para campaña de concientización sobre el dengue. Diseño claro y efectivo con información importante para la prevención.',
    images: ['/img/folleto-denguepng.png'],
    tools: ['Adobe Illustrator', 'Print Ready', 'High Quality'],
    downloadLink: '/pdf/folleto-dengue.pdf',
  },
  {
    id: 2,
    category: 'Diseño Gráfico',
    title: 'Catálogo de Colchones Deseo Premium',
    description:
      'Catálogo de productos para Deseo Premium. Diseño elegante y sofisticado mostrando la línea completa de colchones.',
    images: ['/img/deseo-premium2.png'],
    tools: ['Adobe Illustrator', 'Print Ready', 'High Quality'],
    downloadLink: '/pdf/catalogo-deseopremium.pdf',
  },
  {
    id: 3,
    category: 'Diseño Gráfico',
    title: 'Revista Deseo',
    description:
      'Revista corporativa para Deseo Premium. Diseño editorial profesional con contenido de marca y productos.',
    images: ['/img/revista-deseo.png'],
    tools: ['Adobe Illustrator', 'Print Ready', 'High Quality'],
    downloadLink: '/pdf/revista-deseo.pdf',
  },
  {
    id: 4,
    category: 'Diseño Gráfico',
    title: 'Folleto Pauny',
    description:
      'Folleto comercial para Pauny. Diseño profesional con atención al detalle y preparado para producción de alta calidad.',
    images: ['/img/pauny-folleto1.png'],
    tools: ['Adobe Illustrator', 'Print Ready', 'High Quality'],
    downloadLink: '/pdf/folleto-pauny.pdf',
  },
  {
    id: 5,
    category: 'Diseño Gráfico',
    title: 'Folleto Runacay Talampaya',
    description:
      'Folleto turístico para Runacay Talampaya. Diseño profesional con atención al detalle y preparado para producción de alta calidad.',
    images: ['/img/runacay-folleto.png'],
    tools: ['Adobe Illustrator', 'Print Ready', 'High Quality'],
    downloadLink: '/pdf/folleto-runacay.pdf',
  },
  {
    id: 6,
    category: 'Diseño Gráfico',
    title: 'Entrada Fiesta Fin de Año - Colegio de Arquitectos',
    description:
      'Diseño de entrada para la fiesta de fin de año del Colegio de Arquitectos. Diseño elegante y profesional para evento institucional.',
    images: ['/img/entrada-ca.png'],
    tools: ['Adobe Illustrator', 'Print Ready', 'High Quality'],
    downloadLink: '/pdf/entrada-CA.pdf',
  },
  {
    id: 7,
    category: 'Diseño Gráfico',
    title: 'Díptico Magnolias - Casa de Sepelios',
    description:
      'Diseño de díptico para Magnolias Casa de Sepelios. Diseño elegante y respetuoso con atención al detalle y preparado para producción de alta calidad.',
    images: ['/img/diptico-magnolia.png'],
    tools: ['Adobe Illustrator', 'Print Ready', 'High Quality'],
    downloadLink: '/pdf/diptico-magnolia.pdf',
  },
]

export default function Disenos() {
  const containerRef = useSmoothScroll()
  useTheme()
  const [selectedDesign, setSelectedDesign] = useState<typeof disenos[0] | null>(null)
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 })

  const openModal = (diseno: typeof disenos[0], event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect()
    setModalPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX
    })
    setSelectedDesign(diseno)
  }

  return (
    <Layout>
      <SEO 
        title="Diseños | Tomás Martorelli - Portfolio de Diseño Gráfico"
        description="Explora mi portfolio de diseño gráfico. Folletos, catálogos, revistas y material promocional diseñados para impresión offset con alta calidad profesional."
        url="/disenos"
      />
      <div ref={containerRef} className="min-h-screen bg-background text-text-primary">
        {/* Hero Section - Full Screen */}
        <section data-scroll-section className="h-screen scroll-section relative overflow-hidden bg-background" style={{ height: '120vh' }}>
          {/* Threads Background - Ocupa toda la pantalla y se extiende más */}
          <div className="absolute inset-0 w-full h-full -z-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+4rem)] sm:w-[calc(100%+6rem)] md:w-[calc(100%+8rem)] lg:w-[calc(100%+10rem)] xl:w-[calc(100%+12rem)] h-[calc(100%+8rem)] sm:h-[calc(100%+10rem)] md:h-[calc(100%+12rem)] lg:h-[calc(100%+14rem)] xl:h-[calc(100%+16rem)]">
              <div style={{ width: '100%', height: '100%', minHeight: '100vh', position: 'relative' }}>
                <Threads 
                  color={[0.416, 0.051, 0.678]}
                  amplitude={1}
                  distance={0}
                  enableMouseInteraction={true}
                />
              </div>
            </div>
            {/* Fade-out gradient al final para transición suave */}
            <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-48 lg:h-56 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-[1]"></div>
            {/* Overlay muy sutil para legibilidad del texto */}
            <div className="absolute inset-0 bg-background/20 pointer-events-none"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="mx-auto w-full max-w-7xl relative px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-12">
              {/* Category Tag */}
              <ScrollAnimation direction="up" delay={0}>
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background-cardHover/50 backdrop-blur-sm border border-border">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-xs uppercase tracking-[0.3em] text-text-secondary font-medium">
                    Portfolio de Proyectos
                  </span>
                </div>
              </ScrollAnimation>

              {/* Main Title */}
              <ScrollAnimation direction="up" delay={0.1}>
                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-[1.1]">
                    <span className="block font-thin text-text-primary">Mis Proyectos</span>
                    <span className="block text-primary font-bold mt-2">
                      de Diseño
                    </span>
                  </h1>
                </div>
              </ScrollAnimation>

              {/* Description */}
              <ScrollAnimation direction="up" delay={0.2}>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto px-4">
                  Una colección de trabajos que demuestran mi pasión por el diseño gráfico, la atención al detalle y la capacidad de crear soluciones visuales impactantes.
                </p>
              </ScrollAnimation>

              {/* Stats Grid */}
              <ScrollAnimation direction="up" delay={0.3}>
                <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 pt-6 sm:pt-8">
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">7+</p>
                    <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-text-secondary">Proyectos</p>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">100%</p>
                    <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-text-secondary">Print Ready</p>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">∞</p>
                    <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-text-secondary">Creatividad</p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Scroll Indicator */}
              <ScrollAnimation direction="up" delay={0.4}>
                <div className="flex flex-col items-center gap-4 pt-12 animate-bounce">
                  <span className="text-xs uppercase tracking-[0.3em] text-text-secondary font-medium">
                    Scroll para ver proyectos
                  </span>
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        </section>

        {/* Projects Section */}
        <div className="bg-background">
          {disenos.map((diseno, index) => {
            const isEven = index % 2 === 0
            const ContentSection = () => (
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {/* Category Tag */}
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-background-cardHover border border-border">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <span className="text-xs sm:text-sm uppercase tracking-wide text-text-primary font-medium">
                    {diseno.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary uppercase tracking-tight leading-tight">
                  {diseno.title}
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed">
                  {diseno.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-3 md:pt-4">
                  <button 
                    onClick={(e) => openModal(diseno, e)}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-soft text-text-primary px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm md:text-base uppercase tracking-wide hover:scale-105 hover:shadow-lg hover:shadow-[#6A0DAD]/20"
                  >
                    Ver Detalles
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <a
                    href={diseno.downloadLink}
                    className="inline-flex items-center gap-2 bg-background-cardHover hover:bg-background-cardLight border border-border text-text-primary px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm md:text-base uppercase tracking-wide"
                  >
                    Descargar
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>

                {/* Tools Tags */}
                <div className="flex flex-wrap gap-2 pt-2 sm:pt-3">
                  {diseno.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-background-cardHover border border-border text-xs sm:text-sm text-text-secondary font-medium uppercase tracking-wide"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )

            const ImagesSection = () => (
              <div className="relative">
                <div className={`grid gap-4 sm:gap-6 ${diseno.images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                  {diseno.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative overflow-visible rounded-lg group"
                    >
                      <img
                        src={image}
                        alt={`${diseno.title} - Imagen ${imgIndex + 1}`}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )

            return (
              <section key={diseno.id} data-scroll-section className="h-screen scroll-section relative overflow-hidden bg-background" style={{ height: '120vh' }}>
                {/* Background decorative elements for each design - Optimizado para rendimiento */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {/* Gradient orbs - Reducidos y optimizados */}
                  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/6 rounded-full blur-3xl transform-gpu" style={{ willChange: 'auto' }}></div>
                  <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/6 rounded-full blur-3xl transform-gpu" style={{ willChange: 'auto' }}></div>
                  
                  {/* Grid pattern - Estático y optimizado */}
                  <div className="absolute inset-0 opacity-[0.02] transform-gpu" style={{
                    backgroundImage: `linear-gradient(to right, #6A0DAD 1px, transparent 1px),
                                    linear-gradient(to bottom, #6A0DAD 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                    willChange: 'auto'
                  }}></div>
                  
                  {/* Lines estáticas */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6A0DAD]/25 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6A0DAD]/25 to-transparent"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="mx-auto w-full max-w-7xl relative px-4 sm:px-6">
                    <ScrollAnimation delay={index * 0.05} direction="up">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center w-full">
                        {isEven ? (
                          <>
                            <ContentSection />
                            <ImagesSection />
                          </>
                        ) : (
                          <>
                            <ImagesSection />
                            <ContentSection />
                          </>
                        )}
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </section>
            )
          })}

          {/* Transición después del último proyecto */}
          <div className="h-32 sm:h-40 md:h-48 lg:h-56"></div>

          {/* Design Skills Section */}
          <section data-scroll-section className="h-screen scroll-section relative overflow-hidden bg-background" style={{ height: '120vh' }}>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="mx-auto w-full max-w-7xl relative px-4 sm:px-6 pt-20 sm:pt-24 md:pt-0 pb-4 md:pb-0">
                <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
                  {/* Title Section */}
                  <ScrollAnimation direction="up" delay={0}>
                    <div className="text-center space-y-2 sm:space-y-3">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.1]">
                        <span className="text-primary">Descubre Mis</span>{' '}
                        <span className="text-text-primary">Habilidades de Diseño</span>
                      </h2>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-text-secondary max-w-2xl mx-auto">
                        Combinando creatividad, técnica y experiencia para crear diseños excepcionales
                      </p>
                    </div>
                  </ScrollAnimation>

                  {/* Main Content - Two Columns */}
                  <ScrollAnimation direction="up" delay={0.1}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
                      {/* Left Column - Text Sections */}
                      <div className="space-y-4 sm:space-y-5 md:space-y-6">
                        {/* Herramientas que Domino */}
                        <div className="flex gap-3 sm:gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-1 space-y-1.5 sm:space-y-2">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-text-primary">
                              Herramientas que Domino
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
                              Mi experiencia incluye Adobe Photoshop, Illustrator, InDesign, Acrobat y CorelDraw. Con estas herramientas, doy vida a los diseños con precisión y creatividad, ya sea para plataformas digitales o medios impresos.
                            </p>
                          </div>
                        </div>

                        {/* Enfoque en Diseño Industrial */}
                        <div className="flex gap-3 sm:gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-5 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-1 space-y-1.5 sm:space-y-2">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-text-primary">
                              Enfoque en Diseño Industrial
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
                              Mi enfoque principal está en el diseño industrial, aunque también tengo experiencia en diseño web y trabajo ilustrativo. Tengo una sólida base en la creación de diseños destinados a varios formatos de impresión, garantizando resultados de alta calidad.
                            </p>
                          </div>
                        </div>

                        {/* Experiencia Versátil */}
                        <div className="flex gap-3 sm:gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-1 space-y-1.5 sm:space-y-2">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-text-primary">
                              Experiencia Versátil
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
                              Con amplia experiencia en entornos que van desde la producción de impresión de alto ritmo hasta equipos creativos colaborativos, me adapto sin problemas a diferentes dinámicas de trabajo, entregando consistentemente resultados de calidad.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Image */}
                      <div className="relative hidden lg:block">
                        <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-background-cardHover to-background-dark border border-border p-6">
                          <div className="aspect-auto bg-background-dark rounded flex items-center justify-center">
                            <img 
                              src="/img/final.png" 
                              alt="Proyecto Final de Diseño Gráfico" 
                              loading="lazy"
                              className="w-full h-auto object-contain rounded"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Tools Section */}
                  <ScrollAnimation direction="up" delay={0.2}>
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary text-center">
                        Herramientas Principales
                      </h3>
                      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
                        {/* Photoshop */}
                        <div className="flex flex-col items-center space-y-2 sm:space-y-3 group cursor-pointer">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <img src="/img/photoshop.svg" alt="Adobe Photoshop - Herramienta de diseño" loading="lazy" width={80} height={80} className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <span className="text-xs sm:text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">Photoshop</span>
                        </div>

                        {/* Illustrator */}
                        <div className="flex flex-col items-center space-y-2 sm:space-y-3 group cursor-pointer">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <img src="/img/illustrator.svg" alt="Adobe Illustrator - Herramienta de diseño vectorial" loading="lazy" width={80} height={80} className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <span className="text-xs sm:text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">Illustrator</span>
                        </div>

                        {/* InDesign */}
                        <div className="flex flex-col items-center space-y-2 sm:space-y-3 group cursor-pointer">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <img src="/img/indesign.svg" alt="Adobe InDesign - Herramienta de diseño editorial" loading="lazy" width={80} height={80} className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <span className="text-xs sm:text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">InDesign</span>
                        </div>

                        {/* Acrobat */}
                        <div className="flex flex-col items-center space-y-2 sm:space-y-3 group cursor-pointer">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <img src="/img/acrobat.svg" alt="Adobe Acrobat - Herramienta de PDF" loading="lazy" width={80} height={80} className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <span className="text-xs sm:text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">Acrobat</span>
                        </div>

                        {/* CorelDRAW */}
                        <div className="flex flex-col items-center space-y-2 sm:space-y-3 group cursor-pointer">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <img src="/img/coreldraw.svg" alt="CorelDRAW - Herramienta de diseño gráfico" loading="lazy" width={80} height={80} className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <span className="text-xs sm:text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">CorelDRAW</span>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </section>

          {/* Footer CTA Section */}
          <section data-scroll-section className="h-screen scroll-section relative overflow-hidden bg-background flex items-center justify-center" style={{ height: '120vh' }}>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="mx-auto w-full max-w-7xl relative px-4 sm:px-6">
                <ScrollAnimation delay={0.3} direction="up">
                  <div className="p-6 sm:p-8 md:p-12 rounded-lg bg-background-cardHover border border-border">
                    <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary uppercase tracking-tight">
                        ¿Te gusta lo que ves?
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed px-4">
                        Estoy disponible para nuevos proyectos y colaboraciones. ¡Hablemos sobre cómo puedo ayudar a hacer realidad tu visión creativa!
                      </p>
                      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4">
                        <Link
                          to="/contacto"
                          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-soft text-text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm uppercase tracking-wide hover:scale-105 hover:shadow-lg hover:shadow-[#6A0DAD]/20"
                        >
                          Contactar
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
                          </svg>
                        </Link>
                        <button className="inline-flex items-center gap-2 bg-background-cardHover hover:bg-background-cardLight border border-border text-text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm uppercase tracking-wide">
                          Ver Más Proyectos
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Design Modal */}
      <DesignModal 
        isOpen={selectedDesign !== null}
        onClose={() => setSelectedDesign(null)}
        design={selectedDesign || disenos[0]}
        position={modalPosition}
      />
    </Layout>
  )
}
