/**
 * Componente SkipToContent para mejorar accesibilidad
 * Permite a usuarios de teclado saltar directamente al contenido principal
 */
export default function SkipToContent() {
  const handleSkip = () => {
    const main = document.querySelector('main')
    if (main) {
      main.focus()
      main.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <a
      href="#main-content"
      onClick={(e) => {
        e.preventDefault()
        handleSkip()
      }}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-primary focus:text-text-primary focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
    >
      Saltar al contenido principal
    </a>
  )
}

