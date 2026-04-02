import { Link } from 'react-router-dom'
import ScrollAnimation from '../components/ScrollAnimation'
import SectionDecorations from '../components/SectionDecorations'

// Importar los proyectos desde la página de Proyectos
const proyectos = [
  {
    id: 1,
    title: 'Córdoba Imports E-commerce',
    description:
      'E-commerce minimalista y moderno especializado en venta de Smartphones con panel de administración completo.',
    tags: ['PHP', 'JavaScript', 'TailwindCSS', 'CSS', 'MySQL'],
    type: 'development' as const,
    link: 'https://cordobaimports.infinityfreeapp.com/ecommerce/',
    images: ['/img/cordobaimpbanner-cordobaimports.png'],
  },
  {
    id: 3,
    title: 'Contasuite SaaS',
    description:
      'Plataforma SaaS integral para gestión y administración contable con dashboard de métricas.',
    tags: ['React', 'JavaScript', 'TailwindCSS', 'CSS', 'MongoDB'],
    type: 'development' as const,
    link: '#',
    images: ['/img/contasuite.jpg'],
  },
]

export default function PortfolioPreviewSection() {
  return (
    <section data-scroll-section className="h-screen scroll-section relative overflow-hidden bg-background" style={{ height: '120vh' }}>
      {/* Transition elements */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="mx-auto w-full max-w-7xl relative px-4 sm:px-6 pt-20 sm:pt-24 md:pt-0 pb-4 md:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-4 sm:mb-6 md:mb-12">
          <div>
            <ScrollAnimation direction="right" delay={0}>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-text-secondary font-medium mb-2 sm:mb-3 md:mb-4">
                • PORTFOLIO
              </p>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.05}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary uppercase tracking-tight leading-tight mb-3 sm:mb-4">
                TRABAJOS RECIENTES
              </h2>
            </ScrollAnimation>
          </div>
          <ScrollAnimation direction="left" delay={0.1}>
            <div className="flex items-center">
              <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed">
                Explora mis creaciones recientes de desarrollo web y diseño, y descubre cómo podemos transformar tu visión en realidad.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        {/* Featured Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Proyecto 1: Córdoba Imports E-commerce */}
          <ScrollAnimation delay={0.15} direction="up">
            <Link
              to="/proyectos"
              className="block group"
            >
              <div className="bg-background-cardHover rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-border to-background-card flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/img/banner-cordobaimports.png" 
                    alt="Córdoba Imports E-commerce" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
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
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-background-card/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <div className="text-center space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm text-primary font-medium uppercase tracking-wide">Ver Detalles</p>
                      <svg className="w-6 h-6 text-primary mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-3 md:gap-4 bg-background-cardHover group-hover:bg-background-card transition-colors duration-500">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-text-primary mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 group-hover:text-primary transition-colors duration-500">
                      CÓRDOBA IMPORTS E-COMMERCE
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-text-secondary mb-0.5 sm:mb-1 md:mb-2 group-hover:text-text-primary transition-colors duration-500">
                      E-commerce de Smartphones con panel de administración completo
                    </p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-text-secondary">2025</p>
                  </div>
                  <span className="bg-border text-text-primary px-2 sm:px-2.5 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full text-[10px] sm:text-xs font-medium group-hover:bg-primary group-hover:text-text-primary transition-all duration-500 self-start sm:self-auto">
                    Desarrollo
                  </span>
                </div>
              </div>
            </Link>
          </ScrollAnimation>

          {/* Proyecto 2: Contasuite SaaS */}
          <ScrollAnimation delay={0.2} direction="up">
            <Link
              to="/proyectos"
              className="block group"
            >
              <div className="bg-background-cardHover rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-border to-background-card flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/img/contasuite.jpg" 
                    alt="Contasuite SaaS" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
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
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-background-card/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <div className="text-center space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm text-primary font-medium uppercase tracking-wide">Ver Detalles</p>
                      <svg className="w-6 h-6 text-primary mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-3 md:gap-4 bg-background-cardHover group-hover:bg-background-card transition-colors duration-500">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-text-primary mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 group-hover:text-primary transition-colors duration-500">
                      CONTASUITE SAAS
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-text-secondary mb-0.5 sm:mb-1 md:mb-2 group-hover:text-text-primary transition-colors duration-500">
                      Plataforma SaaS para gestión contable con dashboard de métricas
                    </p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-text-secondary">2025</p>
                  </div>
                  <span className="bg-border text-text-primary px-2 sm:px-2.5 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full text-[10px] sm:text-xs font-medium group-hover:bg-primary group-hover:text-text-primary transition-all duration-500 self-start sm:self-auto">
                    Desarrollo
                  </span>
                </div>
              </div>
            </Link>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={0.25} direction="up">
          <div className="mt-4 sm:mt-6 md:mt-8 text-center">
            <Link
              to="/proyectos"
              className="inline-flex items-center gap-2 sm:gap-3 text-text-secondary hover:text-text-primary font-medium text-xs sm:text-sm uppercase tracking-wide transition-colors"
            >
              Ver todos los proyectos
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
          </div>
        </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

