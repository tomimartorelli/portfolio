import { useState } from 'react'
import Card from '../components/Card'
import ScrollAnimation from '../components/ScrollAnimation'
import { useTheme } from '../contexts/ThemeContext'

interface Experience {
  period: string
  role: string
  company: string
  logo: string | null
  description: string
  technologies: string[]
}

interface TimelineSectionProps {
  experiences: Experience[]
}

export default function TimelineSection({ experiences }: TimelineSectionProps) {
  // Índice de la experiencia cuya descripción está abierta (o null si ninguna)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { theme } = useTheme()

  const toggleDescription = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section data-scroll-section className="scroll-section !h-auto sm:!h-screen relative overflow-visible sm:overflow-hidden bg-background sm:min-h-[120vh]">
      <div className="sm:absolute sm:inset-0 flex items-start md:items-center justify-center z-10 py-8 sm:py-0 relative">
        <div className="mx-auto w-full max-w-[95vw] relative px-4 sm:px-6 pt-4 sm:pt-24 md:pt-0 pb-24 sm:pb-8 md:pb-0">
        {/* Título y descripción */}
        <div className="mb-6 sm:mb-8 md:mb-12 pt-16 sm:pt-0">
          <ScrollAnimation direction="up">
            <div className="mb-4">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-text-secondary font-medium">
                • TIMELINE
              </p>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary uppercase tracking-tight leading-tight">
                Experiencia en una línea
              </h2>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.05}>
            <p className="max-w-2xl text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
              Un recorrido horizontal por mis principales etapas profesionales, desde el diseño gráfico
              hasta el desarrollo full stack.
            </p>
          </ScrollAnimation>
        </div>

        {/* Timeline vertical para mobile */}
        <div className="sm:hidden space-y-4">
          {experiences.map((exp, index) => {
            const isOpen = openIndex === index

            return (
              <ScrollAnimation key={exp.period} direction="up" delay={0.1 + index * 0.05}>
                <div className={`relative pl-6 border-l-2 ${theme === 'light' ? 'border-black/40' : 'border-white/40'}`}>
                  <div className={`absolute -left-[7px] top-0 w-3 h-3 rounded-full border-2 border-background ${theme === 'light' ? 'bg-black' : 'bg-white'} shadow-[0_0_0_4px_rgba(var(--color-background),1)]`} />
                  <div className="transition-all duration-500 ease-in-out" style={{ transition: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)' }}>
                    <Card className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'aspect-auto' : 'aspect-square'} flex flex-col ${isOpen ? 'gap-3' : 'gap-4'} justify-between`}>
                    {/* Logo de la empresa - siempre visible */}
                    {exp.logo && (
                      <div className={`transition-all duration-500 ease-in-out ${isOpen ? "mb-1" : "mb-2"}`}>
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          loading="lazy"
                          width={120}
                          height={40}
                          className={`transition-all duration-500 ease-in-out ${isOpen ? "h-6" : "h-8"} object-contain object-left`}
                        />
                      </div>
                    )}

                    {!isOpen ? (
                      <div className="flex flex-col flex-1">
                        <div className="flex flex-col gap-4 flex-1 transition-all duration-500 ease-in-out">
                          {/* Periodo - solo visible cuando está cerrado */}
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-primary">
                            {exp.period}
                          </p>

                          {/* Puesto y empresa - solo visible cuando está cerrado */}
                          <div>
                            <h3 className="text-base font-semibold text-text-primary">
                              {exp.role}
                            </h3>
                            <p className="text-xs text-text-secondary mt-1">
                              {exp.company}
                            </p>
                          </div>

                          {/* Tecnologías - solo visible cuando está cerrado */}
                          {exp.technologies && (
                            <div className="flex flex-wrap gap-1.5 pt-2">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full border border-border bg-background-dark px-2.5 py-1 text-xs text-text-secondary"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Botón para abrir descripción */}
                        <button
                          type="button"
                          onClick={() => toggleDescription(index)}
                          aria-label={`Abrir descripción de ${exp.role} en ${exp.company}`}
                          aria-expanded={isOpen}
                          className="mt-auto inline-flex items-center justify-center rounded-full border border-border bg-background-cardHover px-4 py-2 text-xs font-medium text-text-primary hover:bg-background-cardLight transition-all duration-500 ease-in-out"
                        >
                          Descripción de tareas
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col flex-1">
                        {/* Puesto - solo visible cuando está abierto */}
                        <div
                          className="overflow-hidden"
                          style={{
                            transition: 'max-height 1000ms cubic-bezier(0.4,0,0.2,1), opacity 1000ms cubic-bezier(0.4,0,0.2,1), transform 1000ms cubic-bezier(0.4,0,0.2,1)',
                            maxHeight: isOpen ? '96px' : '0px',
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? 'translateY(0)' : 'translateY(-12px)',
                          }}
                        >
                          <h3 className="text-sm font-semibold text-text-primary">
                            {exp.role}
                          </h3>
                        </div>

                        {/* Descripción - solo visible cuando está abierto */}
                        <p
                          className="text-xs text-text-secondary leading-relaxed flex-1 overflow-hidden"
                          style={{
                            transition: 'max-height 1000ms cubic-bezier(0.4,0,0.2,1), opacity 1000ms cubic-bezier(0.4,0,0.2,1), transform 1000ms cubic-bezier(0.4,0,0.2,1)',
                            transitionDelay: isOpen ? '120ms' : '0ms',
                            maxHeight: isOpen ? '600px' : '0px',
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? 'translateY(0)' : 'translateY(-12px)',
                          }}
                        >
                          {exp.description}
                        </p>

                        {/* Botón para cerrar descripción */}
                        <button
                          type="button"
                          onClick={() => toggleDescription(index)}
                          aria-label={`Cerrar descripción de ${exp.role} en ${exp.company}`}
                          aria-expanded={isOpen}
                          className="mt-auto inline-flex items-center justify-center rounded-full border border-border bg-background-cardHover px-3 py-1.5 text-[11px] font-medium text-text-primary hover:bg-background-cardLight"
                          style={{
                            transition: 'max-height 1000ms cubic-bezier(0.4,0,0.2,1), opacity 1000ms cubic-bezier(0.4,0,0.2,1), transform 1000ms cubic-bezier(0.4,0,0.2,1)',
                            transitionDelay: isOpen ? '180ms' : '0ms',
                            maxHeight: isOpen ? '64px' : '0px',
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? 'translateY(0)' : 'translateY(-12px)',
                            overflow: 'hidden',
                          }}
                        >
                          Ocultar descripción
                        </button>
                      </div>
                    )}
                    </Card>
                  </div>
                </div>
              </ScrollAnimation>
            )
          })}
        </div>

        {/* Timeline horizontal para desktop */}
        <div className="hidden sm:block relative">
          {/* Línea horizontal a ancho completo de la pantalla */}
          <div className={`absolute left-1/2 -translate-x-1/2 top-12 w-[calc(100vw+12rem)] h-0.5 ${theme === 'light' ? 'bg-black/40' : 'bg-white/40'}`} />
          
          {/* Contenedor de cards con mucho más espacio y sin scroll horizontal */}
          <div className="relative flex flex-row items-end justify-center pt-8" style={{ gap: 'clamp(2rem, 8vw, 6rem)' }}>
            {experiences.map((exp, index) => {
              const isOpen = openIndex === index
              
              return (
                <ScrollAnimation key={exp.period} direction="up" delay={0.1 + index * 0.05}>
                  <div className="relative" style={{ width: 'clamp(280px, 22vw, 450px)' }}>
                    {/* Punto centrado sobre la línea */}
                    <div className={`absolute top-[11px] left-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-background ${theme === 'light' ? 'bg-black' : 'bg-white'} shadow-[0_0_0_8px_rgba(var(--color-background),1)] z-10`} />
                    
                    {/* Espaciador para el punto */}
                    <div className="h-12 mb-4"></div>

                    {/* Card - misma altura inicial, se expande cuando está abierta */}
                    <div className="transition-all duration-500 ease-in-out" style={{ transition: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)' }}>
                      <Card className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'min-h-[400px]' : 'aspect-square'} flex flex-col ${isOpen ? 'gap-3' : 'gap-4'} justify-between`}>
                        {/* Logo de la empresa - siempre visible */}
                        {exp.logo && (
                          <div className={`transition-all duration-500 ease-in-out ${isOpen ? "mb-2" : "mb-3"}`}>
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              loading="lazy"
                              width={180}
                              height={64}
                              className={`transition-all duration-500 ease-in-out ${isOpen ? "h-8 md:h-10" : "h-12 md:h-14 lg:h-16"} object-contain object-left`}
                            />
                          </div>
                        )}

                        {!isOpen ? (
                          <div className="flex flex-col flex-1">
                            <div className={`flex flex-col ${isOpen ? 'gap-3' : 'gap-4'} flex-1 transition-all duration-500 ease-in-out`}>
                              {/* Periodo - solo visible cuando está cerrado */}
                              <p className={`text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-text-primary transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-20'}`}>
                                {exp.period}
                              </p>

                              {/* Puesto y empresa - solo visible cuando está cerrado */}
                              <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-32'}`}>
                                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-text-primary">
                                  {exp.role}
                                </h3>
                                <p className="text-sm md:text-base text-text-secondary mt-1">
                                  {exp.company}
                                </p>
                              </div>

                              {/* Tecnologías - solo visible cuando está cerrado */}
                              {exp.technologies && (
                                <div className={`flex flex-wrap gap-2 pt-2 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-40'}`}>
                                  {exp.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="rounded-full border border-border bg-background-dark px-3 py-1.5 text-sm text-text-secondary"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Botón para abrir descripción */}
                            <button
                              type="button"
                              onClick={() => toggleDescription(index)}
                              aria-label={`Abrir descripción de ${exp.role} en ${exp.company}`}
                              aria-expanded={isOpen}
                              className={`mt-auto inline-flex items-center justify-center rounded-full border border-border bg-background-cardHover px-5 py-2 text-sm font-medium text-text-primary hover:bg-background-cardLight transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-20'}`}
                            >
                              Descripción de tareas
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col flex-1">
                            <div className="flex flex-col gap-3 flex-1">
                              {/* Puesto - solo visible cuando está abierto */}
                              <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 max-h-32 translate-y-0 animate-fade-in' : 'opacity-0 max-h-0 -translate-y-2 overflow-hidden'}`}>
                                <h3 className="text-base lg:text-lg font-semibold text-text-primary">
                                  {exp.role}
                                </h3>
                              </div>

                              {/* Descripción - solo visible cuando está abierto */}
                              <p className={`text-sm text-text-secondary leading-relaxed flex-1 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 max-h-[800px] translate-y-0 animate-fade-in' : 'opacity-0 max-h-0 -translate-y-2 overflow-hidden'}`} style={{ transitionDelay: isOpen ? '100ms' : '0ms' }}>
                                {exp.description}
                              </p>
                            </div>

                            {/* Botón para cerrar descripción */}
                            <button
                              type="button"
                              onClick={() => toggleDescription(index)}
                              aria-label={`Cerrar descripción de ${exp.role} en ${exp.company}`}
                              aria-expanded={isOpen}
                              className={`mt-auto inline-flex items-center justify-center rounded-full border border-border bg-background-cardHover px-4 py-1.5 text-xs font-medium text-text-primary hover:bg-background-cardLight transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 max-h-20 translate-y-0 animate-fade-in' : 'opacity-0 max-h-0 -translate-y-2 overflow-hidden'}`}
                              style={{ transitionDelay: isOpen ? '150ms' : '0ms' }}
                            >
                              Ocultar descripción
                            </button>
                          </div>
                        )}
                      </Card>
                    </div>
                  </div>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

