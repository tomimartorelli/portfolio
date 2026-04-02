import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import SobreMiHeroSection from '../sections/SobreMiHeroSection'
import SobreMiIntroSection from '../sections/SobreMiIntroSection'
import TimelineSection from '../sections/TimelineSection'

const experiences = [
  {
    period: '2021',
    role: 'Community Manager',
    company: 'Coldwell Banker Livello',
    logo: '/img/coldwell.png',
    description:
      'Creación de piezas gráficas para redes sociales utilizando Photoshop, Illustrator y CorelDRAW. Gestión y estandarización de logotipos, así como desarrollo de la identidad visual y presencia digital de la marca en diferentes plataformas sociales.',
    technologies: ['Social Media', 'Copywriting', 'Illustrator', 'Planificación de Contenidos'],
  },
  {
    period: '2021 — 2023',
    role: 'Diseñador Gráfico',
    company: 'Tinta Papel Srl',
    logo: '/img/tintapapel.png',
    description:
      'Diseñador Gráfico y Técnico en Preprensa, con manejo de Photoshop, Illustrator y CorelDRAW. Responsable de la imposición de archivos para la creación de chapas de impresión, gestión de datos variables y elaboración de remitos y documentos legales con código de barras y numeración CAI. Encargado de la atención y asesoramiento a clientes, así como de la comercialización de productos y servicios gráficos.',
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Diseño Editorial', 'Branding'],
  },
  {
    period: '2023 — 2024',
    role: 'Website Maintenance',
    company: 'Hechos.ar',
    logo: '/img/hechoslogo_diariocolor-1.png',
    description:
      'Responsable del mantenimiento del sitio web del diario digital Hechos.ar, desarrollado en WordPress con soporte en PHP. Entre mis tareas se incluían la actualización de plugins, corrección de errores en el código, optimización del rendimiento y aplicación de medidas de seguridad para prevenir vulnerabilidades. Además, gestionaba la contratación de hosting y dominio, así como la organización de pagos relacionados con el servicio.',
    technologies: ['WordPress', 'PHP', 'MySQL', 'Cloud Hosting', 'SEO'],
  },
  {
    period: '2024 — Actualidad',
    role: 'Administrador de Sistemas',
    company: 'Estudio Marcelo L. Berti',
    logo: '/img/logo-espaýolwhite.png',
    description:
      'Armado del servidor y de la red de trabajo con sus respectivas impresoras asociadas, desarrollo de la página web del estudio desarrollada con React, Next y Tailwind, contratación de hosting y dominio, rebranding de la marca, desarrollo de una base contable para facturación de trabajos del exterior, diseño de circulares de temas relacionados al derecho, trabajos administrativos como la revisión de vencimientos de marca, avisos de concesión como de oposición, mailing y armado de actividades y la agenda del estudio para los congresos anuales de propiedad intelectual, entre otras tareas.',
    technologies: ['Linux', 'Windows Server', 'WordPress', 'TailwindCSS', 'PHP', 'MySQL'],
  },
]

export default function SobreMi() {
  const containerRef = useSmoothScroll()

  return (
    <Layout>
      <SEO 
        title="Sobre Mí | Tomás Martorelli"
        description="Conoce más sobre Tomás Martorelli - Desarrollador Full Stack con experiencia en diseño UX/UI, diseño gráfico y desarrollo web. Especializado en React, TypeScript, Node.js y más."
        url="/sobre-mi"
      />
      <div ref={containerRef} className="min-h-screen bg-background text-text-primary pb-24 sm:pb-32">
        <SobreMiHeroSection />
        <SobreMiIntroSection />
        <TimelineSection experiences={experiences} />
      </div>
    </Layout>
  )
}
