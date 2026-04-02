import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'

const disenos = [
  {
    id: 1,
    title: 'Branding Corporativo',
    description:
      'Identidad visual completa para empresa tecnológica. Incluye logo, paleta de colores, tipografía y guía de estilo.',
    tags: ['Branding', 'Logo Design', 'Figma', 'Illustrator'],
    type: 'design' as const,
    link: '#',
  },
  {
    id: 2,
    title: 'Diseño de App Mobile',
    description:
      'Interfaz de usuario para aplicación móvil de fitness. Diseño moderno con enfoque en usabilidad y estética visual.',
    tags: ['UI/UX', 'Mobile Design', 'Figma', 'Prototyping'],
    type: 'design' as const,
    link: '#',
  },
  {
    id: 3,
    title: 'Packaging Design',
    description:
      'Diseño de empaque para línea de productos orgánicos. Concepto sostenible con materiales eco-friendly en mente.',
    tags: ['Packaging', 'Print Design', 'Illustrator', 'Photoshop'],
    type: 'design' as const,
    link: '#',
  },
  {
    id: 4,
    title: 'Rediseño de Website',
    description:
      'Rediseño completo de sitio web corporativo. Mejora de UX/UI con enfoque en conversión y experiencia del usuario.',
    tags: ['Web Design', 'UI/UX', 'Figma', 'Wireframing'],
    type: 'design' as const,
    link: '#',
  },
  {
    id: 5,
    title: 'Ilustraciones Digitales',
    description:
      'Serie de ilustraciones vectoriales para campaña publicitaria. Estilo moderno y versátil para múltiples aplicaciones.',
    tags: ['Illustration', 'Vector Art', 'Illustrator', 'Digital Art'],
    type: 'design' as const,
    link: '#',
  },
  {
    id: 6,
    title: 'Social Media Graphics',
    description:
      'Templates y gráficos para redes sociales. Diseños consistentes y atractivos para mejorar engagement en plataformas digitales.',
    tags: ['Social Media', 'Graphics', 'Photoshop', 'Templates'],
    type: 'design' as const,
    link: '#',
  },
  {
    id: 7,
    title: 'Diseño Editorial',
    description:
      'Diseño de revista digital con layout moderno y tipografía cuidada. Balance perfecto entre contenido y diseño visual.',
    tags: ['Editorial', 'Typography', 'InDesign', 'Layout'],
    type: 'design' as const,
    link: '#',
  },
  {
    id: 8,
    title: 'Iconografía Personalizada',
    description:
      'Set completo de iconos personalizados para aplicación web. Estilo consistente y escalable para diferentes tamaños.',
    tags: ['Icons', 'Vector', 'Illustrator', 'UI Design'],
    type: 'design' as const,
    link: '#',
  },
  {
    id: 9,
    title: 'Presentación Corporativa',
    description:
      'Diseño de presentación ejecutiva con animaciones sutiles. Slides profesionales y modernos para pitch de negocio.',
    tags: ['Presentation', 'PowerPoint', 'Keynote', 'Design'],
    type: 'design' as const,
    link: '#',
  },
]

export default function Disenos() {
  return (
    <Section
      id="disenos"
      subtitle="Diseño gráfico"
      title="Mis Diseños"
    >
      <p className="mb-12 text-center text-slate-300">
        Una selección de mis trabajos de diseño gráfico, desde branding hasta
        diseño de interfaces y gráficos para redes sociales.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {disenos.map((diseno) => (
          <ProjectCard
            key={diseno.id}
            title={diseno.title}
            description={diseno.description}
            tags={diseno.tags}
            type={diseno.type}
            link={diseno.link}
          />
        ))}
      </div>
    </Section>
  )
}

