import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'

const proyectos = [
  {
    id: 1,
    title: 'E-commerce Moderno',
    description:
      'Plataforma de comercio electrónico construida con React y TypeScript. Incluye carrito de compras, sistema de pagos y panel de administración.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Stripe'],
    type: 'development' as const,
    link: '#',
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description:
      'Dashboard interactivo para visualización de datos con gráficos en tiempo real. Optimizado para rendimiento y experiencia de usuario.',
    tags: ['React', 'Chart.js', 'TypeScript', 'API'],
    type: 'development' as const,
    link: '#',
  },
  {
    id: 3,
    title: 'Landing Page SaaS',
    description:
      'Landing page moderna y responsive para una startup SaaS. Diseño limpio con animaciones sutiles y optimización SEO.',
    tags: ['React', 'TailwindCSS', 'Framer Motion', 'SEO'],
    type: 'development' as const,
    link: '#',
  },
  {
    id: 4,
    title: 'App de Productividad',
    description:
      'Aplicación web para gestión de tareas con sincronización en tiempo real. Interfaz intuitiva y funcionalidades avanzadas.',
    tags: ['React', 'Firebase', 'TypeScript', 'PWA'],
    type: 'development' as const,
    link: '#',
  },
  {
    id: 5,
    title: 'Portfolio Personal',
    description:
      'Sitio web personal responsive con diseño moderno. Construido con React y TailwindCSS, optimizado para rendimiento.',
    tags: ['React', 'TailwindCSS', 'TypeScript', 'Vite'],
    type: 'development' as const,
    link: '#',
  },
  {
    id: 6,
    title: 'Sistema de Reservas',
    description:
      'Sistema completo de reservas online con calendario interactivo y gestión de disponibilidad. Backend y frontend integrados.',
    tags: ['React', 'Node.js', 'MongoDB', 'Full Stack'],
    type: 'development' as const,
    link: '#',
  },
]

export default function Proyectos() {
  return (
    <Section
      id="proyectos"
      subtitle="Mi trabajo"
      title="Proyectos de Desarrollo"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((proyecto) => (
          <ProjectCard
            key={proyecto.id}
            title={proyecto.title}
            description={proyecto.description}
            tags={proyecto.tags}
            type={proyecto.type}
            link={proyecto.link}
          />
        ))}
      </div>
    </Section>
  )
}

