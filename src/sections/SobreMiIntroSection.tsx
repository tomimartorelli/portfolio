import ScrollAnimation from '../components/ScrollAnimation'

export default function SobreMiIntroSection() {
  return (
    <section data-scroll-section className="h-screen scroll-section relative overflow-hidden bg-background" style={{ height: '120vh' }}>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="mx-auto w-full max-w-7xl relative px-4 sm:px-6 pt-12 sm:pt-24 md:pt-0 pb-8 md:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Title */}
            <div>
              <ScrollAnimation direction="up" delay={0}>
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
                  • HOLA, SOY TOMÁS
                </p>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.05}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary uppercase tracking-tight leading-[1.1] mb-6">
                  CONECTANDO
                  <br />
                  <span style={{ color: '#6A0DAD' }}>DISEÑO</span> Y
                  <br />
                  TECNOLOGÍA
                </h2>
              </ScrollAnimation>
            </div>

            {/* Right side - Description */}
            <div className="space-y-6">
              <ScrollAnimation direction="up" delay={0.1}>
                <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed">
                  Soy un desarrollador full stack con raíces en el diseño gráfico. 
                  Mi trayectoria comenzó creando piezas visuales para redes sociales 
                  y marcas, hasta evolucionar hacia el desarrollo web y la administración 
                  de sistemas.
                </p>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.15}>
                <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed">
                  Me apasiona transformar ideas complejas en experiencias digitales 
                  intuitivas. Disfruto cada etapa del proceso: desde entender las 
                  necesidades del negocio hasta escribir código limpio y desplegar 
                  soluciones escalables.
                </p>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.2}>
                <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed">
                  Cuando no estoy codeando, probablemente esté aprendiendo una 
                  nueva tecnología, experimentando con diseño UI, o optimizando 
                  algún sistema que acaba de cruzar por mi camino.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none"
      />
    </section>
  )
}
