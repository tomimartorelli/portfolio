import ScrollAnimation from '../components/ScrollAnimation'
import SectionDecorations from '../components/SectionDecorations'

export default function AboutSection() {
  return (
    <section data-scroll-section className="h-screen scroll-section relative overflow-hidden bg-background" style={{ height: '120vh' }}>
      <SectionDecorations arrow="top-left" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="mx-auto w-full max-w-full md:max-w-7xl relative px-3 sm:px-4 md:px-6 pt-20 sm:pt-24 md:pt-0 pb-8 md:pb-0">
        {/* Top Section - Title and Text */}
        <div className="mb-0 md:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            <ScrollAnimation direction="right">
              <div>
                <h2 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-text-primary uppercase tracking-tight leading-tight">
                  CREANDO MARCAS SIGNIFICATIVAS & EXPERIENCIAS INTUITIVAS
                </h2>
              </div>
            </ScrollAnimation>
            <div className="space-y-6 sm:space-y-4 md:space-y-6">
              <ScrollAnimation direction="left" delay={0.1}>
                <p className="text-lg sm:text-sm md:text-base lg:text-lg text-text-secondary leading-relaxed">
                  Soy Tomás Martorelli, Técnico Superior en Diseño y Desarrollo Web con habilidades en diversas tecnologías para trabajar en el mundo digital. He aprendido técnicas para crear páginas web responsivas, componentes del lado del servidor y aplicaciones móviles progresivas.
                </p>
              </ScrollAnimation>
              <ScrollAnimation direction="left" delay={0.15}>
                <p className="text-lg sm:text-sm md:text-base lg:text-lg text-text-secondary leading-relaxed">
                  Tengo conocimientos avanzados en IoT, gestión de APIs, marketing digital, servidores, diseño UX y análisis de datos. Mi objetivo es crear soluciones digitales innovadoras que combinen funcionalidad, estética y rendimiento, aportando valor real a cada proyecto y colaborando con equipos que buscan transformar ideas en experiencias digitales exitosas.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Bottom Section - Title Right Aligned, Fixed to Bottom Right */}
      <div className="hidden md:block absolute bottom-6 sm:bottom-8 lg:bottom-12 xl:bottom-16 right-4 sm:right-6 lg:right-12 z-20">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] 3xl:text-[12rem] font-bold text-text-primary uppercase tracking-tight leading-[0.9]">
          SOBRE MÍ
        </h2>
      </div>
    </section>
  )
}

