import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import PortfolioPreviewSection from '../sections/PortfolioPreviewSection'
import MethodSection from '../sections/MethodSection'
import SkillsSection from '../sections/SkillsSection'
import CTASection from '../sections/CTASection'

export default function Home() {
  const containerRef = useSmoothScroll()

  const stats = [
    { number: '3+', label: 'Años de Experiencia' },
    { number: '10+', label: 'Proyectos Entregados' },
    { number: '99%', label: 'Satisfacción del Cliente' },
    { number: '20+', label: 'Diseños Completados' },
  ]

  const methodItems = [
    {
      title: 'Desarrollo Full Stack',
      description: 'Soluciones completas desde el frontend hasta el backend. Desarrollo de aplicaciones web modernas con React, TypeScript, Node.js, PHP y Laravel. Gestión de bases de datos MySQL y MongoDB para proyectos escalables y robustos.'
    },
    {
      title: 'Diseño UX/UI',
      description: 'Creación de interfaces intuitivas y centradas en el usuario. Diseño de experiencias digitales con Figma, desde wireframes hasta prototipos interactivos. Enfoque en usabilidad, accesibilidad y estética moderna.'
    },
    {
      title: 'Diseño Gráfico',
      description: 'Branding, identidad visual y material impreso. Diseño de folletos, catálogos, revistas y material promocional preparado para impresión offset. Atención al detalle y calidad profesional en cada proyecto.'
    },
    {
      title: 'Hosting y Dominios',
      description: 'Asesoramiento y contratación de hosting, dominios y servicios relacionados. Configuración de servidores, gestión de DNS, certificados SSL y migración de sitios. Soluciones de hosting compartido, VPS y cloud hosting según las necesidades del proyecto.'
    },
    {
      title: 'Optimización y Performance',
      description: 'Optimización de rendimiento, SEO y análisis de datos. Implementación de mejores prácticas para mejorar la velocidad, indexación y experiencia del usuario. Análisis de métricas para toma de decisiones basada en datos.'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Despliegue y gestión en la nube con Firebase y Vercel. Configuración de servidores, CI/CD y gestión de infraestructura. Soluciones escalables y confiables para proyectos de cualquier tamaño.'
    }
  ]

  const skills = [
    {
      category: 'Frontend',
      description: 'Tecnologías para crear interfaces modernas y responsivas',
      items: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 80 },
        { name: 'React', level: 85 },
        { name: 'Next.js', level: 75 },
        { name: 'Vue.js', level: 70 },
      ],
    },
    {
      category: 'Backend',
      description: 'Desarrollo de APIs y lógica del servidor',
      items: [
        { name: 'Node.js', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'Laravel', level: 70 },
      ],
    },
    {
      category: 'Bases de Datos',
      description: 'Gestión y almacenamiento de datos',
      items: [
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 70 },
      ],
    },
    {
      category: 'Herramientas',
      description: 'Herramientas de desarrollo y colaboración',
      items: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 90 },
        { name: 'Figma', level: 75 },
        { name: 'WordPress', level: 75 },
        { name: 'Vercel', level: 80 },
      ],
    },
    {
      category: 'Cloud & DevOps',
      description: 'Despliegue y servicios en la nube',
      items: [
        { name: 'Firebase', level: 70 },
      ],
    },
    {
      category: 'Testing',
      description: 'Testing automatizado y control de calidad',
      items: [
        { name: 'Jest', level: 70 },
      ],
    },
  ]

  return (
    <Layout>
      <SEO 
        title="Tomás Martorelli | Portfolio - Desarrollador Full Stack"
        description="Portfolio de Tomás Martorelli - Desarrollador Full Stack, Diseñador UX/UI y Diseñador Gráfico. Especializado en React, TypeScript, Node.js, PHP y Laravel."
      />
      <div ref={containerRef} className="bg-background text-text-primary w-full">
        <HeroSection stats={stats} />
        <AboutSection />
        <PortfolioPreviewSection />
        <MethodSection items={methodItems} />
        <SkillsSection skills={skills} />
        <CTASection />
      </div>
    </Layout>
  )
}
