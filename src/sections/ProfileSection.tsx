import Card from '../components/Card'
import ScrollAnimation from '../components/ScrollAnimation'

interface ProfileSectionProps {
  highlightSkills: string[]
}

export default function ProfileSection({ highlightSkills }: ProfileSectionProps) {
  return (
    <section className="min-h-screen px-4 sm:px-6 pt-28 sm:pt-32 pb-20 border-b border-[#333333]">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
          {/* Columna izquierda: imagen + resumen */}
          <div className="space-y-8">
            <ScrollAnimation direction="up" delay={0.05}>
              <Card>
                <div className="grid gap-6 sm:gap-8 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-center">
                  {/* Imagen / avatar */}
                  <div className="relative">
                    <div className="aspect-[4/5] w-full max-w-xs mx-auto rounded-3xl bg-gradient-to-br from-[#6A0DAD]/40 via-black to-[#020617] overflow-hidden border border-[#333333] flex items-center justify-center">
                      {/* Placeholder de imagen */}
                      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_top,_#6A0DAD_0,_transparent_55%),radial-gradient(circle_at_bottom,_#8B2DD9_0,_transparent_55%)]" />
                      <div className="relative z-10 text-center px-4">
                        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#a0a0a0] mb-2">
                          Perfil
                        </p>
                        <p className="text-xl sm:text-2xl font-semibold text-[#e0e0e0]">
                          Tomás Martorelli
                        </p>
                        <p className="mt-2 text-[0.7rem] sm:text-xs text-[#cbd5f5] uppercase tracking-[0.25em]">
                          Full Stack Developer · UX/UI · Diseño Gráfico
                        </p>
                      </div>
                      {/* Reemplazar por imagen real si la tienes:
                      <img
                        src="/img/tu-foto.png"
                        alt="Foto de Tomás Martorelli"
                        className="w-full h-full object-cover"
                      />
                      */}
                    </div>
                  </div>

                  {/* Texto corto */}
                  <div className="space-y-4 sm:space-y-5">
                    <p className="text-sm sm:text-base text-[#a0a0a0] leading-relaxed">
                      Técnico Superior en Diseño y Desarrollo Web con base sólida en frontend, backend y
                      diseño. Me gusta unir lógica y estética para crear experiencias digitales claras,
                      rápidas y memorables.
                    </p>
                    <p className="text-sm sm:text-base text-[#a0a0a0] leading-relaxed">
                      Disfruto trabajar en todo el flujo: research, diseño en Figma, implementación en
                      React/TypeScript, APIs, bases de datos y despliegue en la nube.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {highlightSkills.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#333333] bg-[#020617] px-3 py-1 text-xs text-[#a0a0a0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>

            {/* Disponibilidad */}
            <ScrollAnimation direction="up" delay={0.12}>
              <Card>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="mb-2 text-sm sm:text-base font-bold text-[#e0e0e0] uppercase tracking-wide">
                      Disponibilidad
                    </h3>
                    <p className="text-sm text-[#a0a0a0]">
                      Abierto a proyectos freelance, colaboraciones y oportunidades remotas.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 sm:justify-end">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#6A0DAD]" />
                    <span className="text-xs sm:text-sm text-[#6A0DAD] uppercase tracking-wide">
                      Disponible para nuevos proyectos
                    </span>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Columna derecha: forma de trabajo */}
          <div className="space-y-6 sm:space-y-8">
            <ScrollAnimation direction="up" delay={0.06}>
              <Card>
                <h3 className="mb-4 text-sm sm:text-base font-bold text-[#e0e0e0] uppercase tracking-[0.2em]">
                  CÓMO ENCARO LOS PROYECTOS
                </h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#a0a0a0]">
                      01 · Descubrimiento
                    </p>
                    <p className="text-sm text-[#e0e0e0] leading-relaxed">
                      Entender el contexto, los objetivos del negocio y las necesidades reales del usuario.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#a0a0a0]">
                      02 · Diseño
                    </p>
                    <p className="text-sm text-[#e0e0e0] leading-relaxed">
                      Wireframes, prototipos y diseño visual coherente con la marca y el producto.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#a0a0a0]">
                      03 · Desarrollo
                    </p>
                    <p className="text-sm text-[#e0e0e0] leading-relaxed">
                      Implementación full stack, performance, accesibilidad y despliegue estable.
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

