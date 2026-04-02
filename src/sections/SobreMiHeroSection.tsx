import { useTheme } from '../contexts/ThemeContext'
import Plasma from '../components/Plasma'

export default function SobreMiHeroSection() {
  const { theme } = useTheme()

  return (
    <section data-scroll-section className="h-screen scroll-section relative overflow-hidden bg-background" style={{ height: '120vh' }}>
      {/* Plasma Background */}
      <div className="absolute inset-0 w-full h-full -z-0" style={{ overflow: 'hidden' }}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]" style={{ minWidth: '100%', minHeight: '100%' }}>
          <Plasma 
            color="#6A0DAD"
            speed={0.6}
            direction="forward"
            scale={1.0}
            opacity={0.8}
            mouseInteractive={false}
          />
        </div>
        {/* Fade-out gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-[1]"></div>
        {/* Subtle overlay for text legibility */}
        <div className="absolute inset-0 bg-background/20 pointer-events-none"></div>
      </div>

      {/* Mobile - Professional clean design */}
      <div className="sm:hidden absolute inset-0 flex flex-col items-center justify-center z-20 px-6">
        {/* All content grouped together */}
        <div className="text-center -mt-12">
          {/* Top section - Name */}
          <p className="text-[10px] uppercase tracking-[0.4em] mb-1" style={{ color: theme === 'dark' ? '#ffffff' : '#1a1a1a' }}>
            Portfolio 2024
          </p>
          <h1 className="text-2xl font-bold text-text-primary tracking-tight mb-2">
            Tomás Martorelli
          </h1>
          
          {/* Tech tags */}
          <div className="flex justify-center gap-2 mb-16 flex-wrap">
            <span className="text-[10px] px-2 py-1 bg-primary/10 rounded" style={{ color: theme === 'dark' ? '#ffffff' : '#1a1a1a' }}>React</span>
            <span className="text-[10px] px-2 py-1 bg-primary/10 rounded" style={{ color: theme === 'dark' ? '#ffffff' : '#1a1a1a' }}>Node.js</span>
            <span className="text-[10px] px-2 py-1 bg-primary/10 rounded" style={{ color: theme === 'dark' ? '#ffffff' : '#1a1a1a' }}>TypeScript</span>
          </div>
          
          {/* Center - Image with purple square */}
          <div className="flex items-center justify-center overflow-visible my-2">
            <div className="relative w-[240px] h-[240px] bg-primary rounded-2xl overflow-visible">
              <img 
                src="/img/sobremi-mobile.png"
                alt="Tomás Martorelli"
                className="absolute bottom-0 left-0 w-full h-full object-contain"
                style={{ 
                  transform: 'scale(1.5)',
                  transformOrigin: 'center bottom'
                }}
              />
            </div>
          </div>
          
          {/* Role and CTA */}
          <div className="mt-4">
            <p className="text-base font-light text-text-primary">
              Full Stack Developer
            </p>
            <p className="text-xs text-text-secondary mb-3">
              & UX/UI Designer
            </p>
            
            <a 
              href="/contacto"
              className="inline-block px-6 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/80 transition-colors"
            >
              Hablemos
            </a>
          </div>
        </div>
      </div>

      {/* Desktop design - unchanged */}
      {/* Martorelli text behind */}
      <div className="hidden sm:flex absolute inset-0 items-center justify-center pointer-events-none z-10">
        <h1 
          className="w-full text-center text-6xl md:text-8xl lg:text-[14rem] xl:text-[22rem] 2xl:text-[30rem] font-bold leading-none"
          style={{ 
            color: '#6A0DAD',
            fontFamily: 'inherit',
            letterSpacing: '-0.05em',
            margin: 0,
            padding: 0
          }}
        >
          Martorelli
        </h1>
      </div>
      
      {/* Hand image - desktop only */}
      <img 
        src="/img/prueba1.png"
        alt="Hand drawing"
        className="hidden sm:block absolute left-1/2 -translate-x-1/2 z-30 bottom-0 h-full object-contain translate-y-[15%]"
        style={{ maxHeight: '100%' }}
      />
      
      {/* Top left text - desktop only */}
      <div className="hidden sm:block absolute top-24 sm:top-32 left-4 sm:left-8 z-20">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold" style={{ 
          color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
          fontFamily: 'inherit'
        }}>
          I'm not just a designer
        </h2>
      </div>
      
      {/* Bottom right text - desktop only */}
      <div className="hidden sm:block absolute bottom-16 right-4 sm:bottom-24 sm:right-8 z-20">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold" style={{ 
          color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
          fontFamily: 'inherit'
        }}>
          Full Stack Developer
        </h2>
      </div>
      
    </section>
  )
}
