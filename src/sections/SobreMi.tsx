import Card from '../components/Card'

export default function SobreMi() {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'TailwindCSS', 'Next.js'] },
    { category: 'Diseño', items: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'UI/UX'] },
    { category: 'Herramientas', items: ['Git', 'Vite', 'Node.js', 'Firebase'] },
  ]

  return (
    <section id="sobre-mi" className="min-h-screen px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
            Conóceme
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            Sobre mí
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Texto principal */}
          <div className="space-y-6">
            <Card>
              <h3 className="mb-4 text-xl font-semibold text-slate-50">
                Mi historia
              </h3>
              <p className="mb-4 leading-relaxed text-slate-300">
                Soy un desarrollador frontend apasionado por crear experiencias
                digitales excepcionales. Con más de 3 años de experiencia,
                combino habilidades técnicas sólidas con un ojo para el diseño,
                lo que me permite construir interfaces que no solo funcionan bien,
                sino que también se ven increíbles.
              </p>
              <p className="leading-relaxed text-slate-300">
                Mi enfoque se centra en escribir código limpio, mantenible y
                escalable, siempre priorizando la experiencia del usuario y el
                rendimiento de las aplicaciones.
              </p>
            </Card>

            <Card>
              <h3 className="mb-4 text-xl font-semibold text-slate-50">
                Mi enfoque
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    <strong className="text-slate-100">Diseño centrado en el usuario:</strong>{' '}
                    Cada decisión de diseño se toma pensando en quién usará la
                    aplicación.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    <strong className="text-slate-100">Código limpio:</strong>{' '}
                    Mantengo estándares altos de calidad y buenas prácticas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    <strong className="text-slate-100">Rendimiento:</strong>{' '}
                    Optimizo cada aplicación para velocidad y eficiencia.
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} hover>
                <h3 className="mb-4 text-lg font-semibold text-slate-50">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}

            <Card>
              <h3 className="mb-4 text-lg font-semibold text-slate-50">
                Disponibilidad
              </h3>
              <p className="mb-4 text-slate-300">
                Actualmente disponible para proyectos freelance y oportunidades
                de trabajo remoto. Me encanta colaborar en proyectos desafiantes
                y trabajar con equipos que valoran la calidad y la innovación.
              </p>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-sm text-emerald-400">
                  Disponible para nuevos proyectos
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

