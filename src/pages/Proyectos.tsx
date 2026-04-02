import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ScrollAnimation from '../components/ScrollAnimation'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import Plasma from '../components/Plasma'
import { useTheme } from '../contexts/ThemeContext'

const proyectos = [
  {
    id: 1,
    title: 'Córdoba Imports E-commerce',
    description:
      'E-commerce minimalista y moderno especializado en venta de Smartphones. Incluye panel de administración completo, creador de cupones de descuento, dashboard de métricas en tiempo real, integración con Mercado Pago, sistema de moderación de reviews, y gestor integral de productos y usuarios. Diseño totalmente responsive para desktop y mobile.',
    tags: ['PHP', 'JavaScript', 'TailwindCSS', 'CSS', 'MySQL'],
    type: 'development' as const,
    link: 'https://cordobaimports.infinityfreeapp.com/ecommerce/',
    images: ['/img/cordobaimports1.png'],
  },
  {
    id: 2,
    title: 'Estudio Jurídico Berti',
    description:
      'Landing page profesional para estudio jurídico especializado en Propiedad Industrial y Derecho Corporativo. Diseño serio y elegante desarrollado a medida del cliente, con múltiples vistas y secciones informativas. Incluye servicio de hosteo y gestión de dominio. Diseño totalmente responsive para desktop y mobile.',
    tags: ['React', 'TailwindCSS', 'JavaScript', 'Hosteo', 'Dominio'],
    type: 'development' as const,
    link: 'https://www.berti.com.ar/',
    images: ['/img/berti1.jpg'],
  },
  {
    id: 3,
    title: 'Contasuite SaaS',
    description:
      'Plataforma SaaS integral para gestión y administración contable. Permite gestionar facturas, clientes, facturas impagas, envío automático de recordatorios por email, registro de egresos, reportes por períodos con exportación a Excel para contadores, y dashboard de métricas con gráficos interactivos. Diseño totalmente responsive para desktop y mobile.',
    tags: ['React', 'JavaScript', 'TailwindCSS', 'CSS', 'MongoDB'],
    type: 'development' as const,
    link: '#',
    images: ['/img/contasuite.jpg'],
  },
  {
    id: 4,
    title: 'Torrentio Gaming Platform',
    description:
      'Plataforma de videojuegos minimalista y elegante con catálogo interactivo. Permite explorar juegos por géneros y desarrolladoras, con información detallada de cada título. Diseño moderno optimizado para la mejor experiencia de usuario gamer. Diseño totalmente responsive para desktop y mobile.',
    tags: ['React', 'Vite', 'CSS', 'API Externa', 'MongoDB'],
    type: 'development' as const,
    link: '#',
    images: ['/images/projects/torrentio-1.jpg', '/images/projects/torrentio-2.jpg'],
  },
  {
    id: 5,
    title: 'Diario Hechos',
    description:
      'Forme parte del desarrollo del portal de noticias y diario digital Hechos.ar. Desarrollo con WordPress y PHP, implementando sistema completo de gestión de contenido, publicación de artículos, categorías temáticas, y optimización SEO. Plataforma robusta y escalable para manejar alto tráfico de usuarios y contenido dinámico.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'SEO'],
    type: 'development' as const,
    link: 'https://hechos.ar',
    images: ['/img/hechos.ar.jpg'],
  },
  {
    id: 6,
    title: 'Parador Tierrasur',
    description:
      'Landing page para parador turístico "Escapadas Naturales en Mar Azul". Diseño explícitamente creado por el cliente y desarrollado fielmente siguiendo sus especificaciones exactas, con enfoque en la experiencia de usuario y conversión. Incluye servicio de contratación de hosteo y dominio. Diseño totalmente responsive para desktop y mobile.',
    tags: ['React', 'TailwindCSS', 'Hosteo', 'Dominio'],
    type: 'development' as const,
    link: 'https://www.paradatierrasur.com.ar/',
    images: ['/img/paradatierrasur.jpg'],
  }]

export default function Proyectos() {
  const containerRef = useSmoothScroll()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { theme } = useTheme()

  return (
    <Layout>
      <SEO 
        title="Proyectos | Tomás Martorelli - Desarrollo Full Stack"
        description="Explora mi portfolio de proyectos de desarrollo full stack. Soluciones web completas con React, TypeScript, Node.js, MongoDB y más tecnologías modernas."
        url="/proyectos"
      />
      <div ref={containerRef} className="min-h-screen text-text-primary">
        {/* Hero Section - Full Screen */}
        <section data-scroll-section className="h-screen scroll-section relative overflow-hidden bg-background" style={{ height: '120vh' }}>
          {/* Plasma Background - Ocupa toda la pantalla */}
          <div className="absolute inset-0 w-full h-full -z-0" style={{ overflow: 'hidden' }}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]" style={{ minWidth: '100%', minHeight: '100%' }}>
              <Plasma 
                color="#6A0DAD"
                speed={0.6}
                direction="forward"
                scale={1.0}
                opacity={0.8}
                mouseInteractive={true}
              />
            </div>
            {/* Fade-out gradient al final para transición suave */}
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-[1]"></div>
            {/* Overlay muy sutil para legibilidad del texto */}
            <div className="absolute inset-0 bg-background/20 pointer-events-none"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="mx-auto w-full max-w-7xl relative px-4 sm:px-6 pt-20 sm:pt-24 md:pt-0 pb-4 md:pb-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left Side - Content (8 columns) */}
              <div className="lg:col-span-8 space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-12">
                <ScrollAnimation direction="right" delay={0}>
                  <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 xl:space-y-10">
                    {/* Category Tag */}
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg bg-background-cardHover/50 backdrop-blur-sm border border-border">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary"></div>
                      <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-text-secondary font-medium">
                        Desarrollo Full Stack
                      </span>
                    </div>

                    {/* Main Title - Horizontal Layout */}
                    <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-text-primary leading-[1.1]">
                        Mis Proyectos
                      </h1>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-primary leading-[1.1]">
                        Full Stack Development
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-text-secondary leading-relaxed max-w-3xl">
                      Soluciones web completas desde el frontend hasta el backend. Proyectos que demuestran mi experiencia en desarrollo full stack, APIs, bases de datos y arquitectura de software.
                    </p>

                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 pt-1.5 sm:pt-2 md:pt-3 lg:pt-4 xl:pt-6">
                      <span className="px-2 sm:px-2.5 md:px-3 lg:px-4 xl:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2.5 rounded-full bg-background-cardHover border border-border text-[10px] sm:text-xs md:text-sm lg:text-base text-text-secondary font-medium">
                        React
                      </span>
                      <span className="px-2 sm:px-2.5 md:px-3 lg:px-4 xl:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2.5 rounded-full bg-background-cardHover border border-border text-[10px] sm:text-xs md:text-sm lg:text-base text-text-secondary font-medium">
                        Node.js
                      </span>
                      <span className="px-2 sm:px-2.5 md:px-3 lg:px-4 xl:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2.5 rounded-full bg-background-cardHover border border-border text-[10px] sm:text-xs md:text-sm lg:text-base text-text-secondary font-medium">
                        TypeScript
                      </span>
                      <span className="px-2 sm:px-2.5 md:px-3 lg:px-4 xl:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2.5 rounded-full bg-background-cardHover border border-border text-[10px] sm:text-xs md:text-sm lg:text-base text-text-secondary font-medium">
                        MongoDB
                      </span>
                      <span className="px-2 sm:px-2.5 md:px-3 lg:px-4 xl:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2.5 rounded-full bg-background-cardHover border border-border text-[10px] sm:text-xs md:text-sm lg:text-base text-text-secondary font-medium">
                        +{proyectos.length} más
                      </span>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Right Side - Stats & Info (4 columns) */}
              <div className="lg:col-span-4 space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 mt-4 sm:mt-5 md:mt-6 lg:mt-0">
                <ScrollAnimation direction="left" delay={0.2}>
                  <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
                    {/* Stats Cards */}
                    <div className="p-3 sm:p-4 md:p-6 lg:p-8 bg-background-cardHover/50 backdrop-blur-sm rounded-lg border border-border">
                      <div className="space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-6">
                        <div className="flex items-baseline justify-between">
                          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primary">{proyectos.length}+</span>
                          <span className="text-[10px] sm:text-xs md:text-sm text-text-secondary uppercase tracking-wide">Proyectos</span>
                        </div>
                        <div className="h-px bg-border"></div>
                        <div className="flex items-baseline justify-between">
                          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primary">100%</span>
                          <span className="text-[10px] sm:text-xs md:text-sm text-text-secondary uppercase tracking-wide">Funcional</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Info */}
                    <div className="p-3 sm:p-4 md:p-6 lg:p-8 bg-background-cardHover/50 backdrop-blur-sm rounded-lg border border-border">
                      <h3 className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-text-secondary font-medium mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                        Stack Principal
                      </h3>
                      <div className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-text-primary">Frontend</span>
                          <span className="text-[10px] sm:text-xs md:text-sm text-primary">React, Next.js</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-text-primary">Backend</span>
                          <span className="text-[10px] sm:text-xs md:text-sm text-primary">Node.js, PHP</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-text-primary">Database</span>
                          <span className="text-[10px] sm:text-xs md:text-sm text-primary">MongoDB, MySQL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* Projects Section */}
        <div className="bg-background-card">
          {proyectos.map((proyecto, index) => {
            const isEven = index % 2 === 0
            
                const ContentSection = () => (
                  <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-8">
                    {/* Category Tag */}
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2.5 rounded-full bg-background-cardHover border border-border">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wide text-text-primary font-medium">
                        Desarrollo Full Stack
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold text-text-primary uppercase tracking-tight leading-tight">
                      {proyecto.title}
                    </h2>

                    {/* Description */}
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-text-secondary leading-relaxed">
                      {proyecto.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 pt-1.5 sm:pt-2 md:pt-3 lg:pt-4">
                      {proyecto.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 sm:px-2.5 md:px-3 lg:px-4 xl:px-5 py-0.5 sm:py-1 md:py-1.5 lg:py-2 xl:py-2.5 rounded-full bg-background-cardHover border border-border text-[10px] sm:text-xs md:text-sm lg:text-base text-text-secondary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Button */}
                    <div className="pt-2 sm:pt-2.5 md:pt-3 lg:pt-4 xl:pt-6">
                      <a
                        href={proyecto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-primary hover:bg-primary-soft text-text-primary px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-full transition-all duration-300 font-medium text-[10px] sm:text-xs md:text-sm lg:text-base uppercase tracking-wide hover:scale-105 hover:shadow-lg hover:shadow-[#6A0DAD]/20"
                      >
                        Ver Proyecto
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )

                const ImagesSection = () => (
                  <div className="relative">
                    <div className={`grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 ${proyecto.images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                      {proyecto.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative overflow-hidden rounded-lg group"
                        >
                          {/* Imagen del proyecto */}
                          <img
                            src={image}
                            alt={`${proyecto.title} - Imagen ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Si la imagen no existe, mostrar placeholder
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const placeholder = target.nextElementSibling as HTMLElement;
                              if (placeholder) {
                                placeholder.classList.remove('hidden');
                              }
                            }}
                          />
                          {/* Placeholder si la imagen no existe */}
                          <div className="w-full aspect-video bg-gradient-to-br from-primary/20 via-background-card to-background-dark flex items-center justify-center border border-border hidden">
                            <div className="w-24 h-24 border-2 border-primary/30 rounded-lg flex items-center justify-center">
                              <svg className="w-12 h-12 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )

            return (
              <section key={proyecto.id} data-scroll-section className="h-screen scroll-section relative overflow-hidden bg-background" style={{ height: '120vh' }}>
                {/* Background decorative elements for each project - Optimizado para rendimiento */}
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
                  <div className="mx-auto w-full max-w-7xl relative px-4 sm:px-6 pt-20 sm:pt-24 md:pt-0 pb-4 md:pb-0">
                    <ScrollAnimation delay={index * 0.05} direction="up">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16 items-center w-full">
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
        </div>
      </div>
    </Layout>
  )
}
