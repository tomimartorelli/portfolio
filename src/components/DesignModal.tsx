import { useEffect, useState } from 'react'
import { X, Download, ExternalLink } from 'lucide-react'

interface DesignModalProps {
  isOpen: boolean
  onClose: () => void
  design: {
    id: number
    category: string
    title: string
    description: string
    images: string[]
    tools: string[]
    downloadLink: string
  }
  position?: {
    top: number
    left: number
  }
}

export default function DesignModal({ isOpen, onClose, design, position }: DesignModalProps) {
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    if (isOpen) {
      // Guardar la posición actual del scroll
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      // Restaurar la posición del scroll solo si no está cerrando
      if (!isClosing) {
        const scrollY = document.body.style.top
        document.body.style.position = 'static'
        document.body.style.top = 'auto'
        document.body.style.width = 'auto'
        document.body.style.overflow = 'unset'
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }
      }
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose, isClosing])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 300)
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-start justify-center p-4 transition-opacity duration-300"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.9)', 
        backdropFilter: 'blur(8px)',
        paddingTop: position ? `${Math.max(20, position.top - 350)}px` : '20px',
        opacity: isOpen ? 1 : 0
      }}
      onClick={handleClose}
    >
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-4xl max-h-[80vh] rounded-lg overflow-hidden shadow-2xl transition-all duration-300"
        style={{ 
          backgroundColor: '#1a1a1a',
          border: '2px solid #6A0DAD',
          overflowY: 'auto',
          maxHeight: '80vh',
          transform: isOpen ? 'scale(1)' : 'scale(0.95)',
          opacity: isOpen ? 1 : 0
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b" style={{ backgroundColor: '#2a2a2a', borderBottom: '1px solid #333' }}>
          <div className="space-y-1">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium" style={{ color: '#999' }}>
              {design.category}
            </p>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold" style={{ color: '#fff' }}>
              {design.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg border transition-colors duration-200"
            style={{ 
              backgroundColor: '#333', 
              borderColor: '#555',
              color: '#999'
            }}
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row" style={{ maxHeight: 'calc(80vh - 80px)', overflowY: 'auto' }}>
          {/* Images Section */}
          <div className="lg:w-3/5 p-4 sm:p-6" style={{ overflowY: 'auto', maxHeight: 'calc(80vh - 140px)' }}>
            <div className="space-y-4">
              {design.images.map((image, index) => (
                <div key={index} className="relative group">
                  {design.downloadLink && design.downloadLink.endsWith('.pdf') ? (
                    // Si el downloadLink es PDF, mostrar el PDF
                    <iframe
                      src={design.downloadLink}
                      title={`${design.title} - PDF`}
                      className="w-full rounded-lg border border-border"
                      style={{ 
                        backgroundColor: 'white',
                        height: '400px',
                        border: '1px solid #333'
                      }}
                    />
                  ) : (
                    // Si es imagen, mostrar la imagen
                    <img
                      src={image}
                      alt={`${design.title} - Imagen ${index + 1}`}
                      className="w-full h-auto rounded-lg object-contain"
                      style={{ 
                        backgroundColor: '#2a2a2a',
                        border: '1px solid #333',
                        maxHeight: '250px'
                      }}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) {
                          placeholder.classList.remove('hidden');
                        }
                      }}
                    />
                  )}
                  {/* Placeholder si la imagen no existe */}
                  {(!design.downloadLink || !design.downloadLink.endsWith('.pdf')) && (
                    <div className="w-full aspect-video rounded-lg border border-border hidden flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #6A0DAD33, #2a2a2a, #1a1a1a)', border: '1px solid #333' }}>
                      <div className="text-center space-y-3">
                        <svg className="w-12 h-12 mx-auto" style={{ color: '#6A0DAD4D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-xs" style={{ color: '#999' }}>Imagen no disponible</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={() => window.open(design.downloadLink || image, '_blank')}
                      className="p-2 rounded-lg border transition-colors duration-200"
                      style={{ 
                        backgroundColor: '#33399', 
                        backdropFilter: 'blur(4px)',
                        borderColor: '#555'
                      }}
                      aria-label="Ver en tamaño completo"
                    >
                      <ExternalLink className="w-4 h-4" style={{ color: '#fff' }} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:w-2/5 p-4 sm:p-6 border-t lg:border-t-0 lg:border-l" style={{ backgroundColor: '#2a2a2a', borderTop: '1px solid #333', borderLeft: '1px solid #333' }}>
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide" style={{ color: '#fff' }}>
                  Descripción
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#ccc' }}>
                  {design.description}
                </p>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: '#fff' }}>
                  Herramientas Utilizadas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {design.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full border text-xs font-medium"
                      style={{ 
                        backgroundColor: '#333', 
                        borderColor: '#555',
                        color: '#ccc'
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4">
                <button
                  onClick={() => window.open(design.downloadLink, '_blank')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full transition-all duration-300 font-medium text-sm uppercase tracking-wide hover:scale-105"
                  style={{ 
                    backgroundColor: '#6A0DAD', 
                    color: '#fff'
                  }}
                >
                  <Download className="w-4 h-4" />
                  Descargar Proyecto
                </button>
                
                <button
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full transition-all duration-300 font-medium text-sm uppercase tracking-wide border"
                  style={{ 
                    backgroundColor: '#333', 
                    borderColor: '#555',
                    color: '#fff'
                  }}
                >
                  Cerrar
                </button>
              </div>

              {/* Additional Info */}
              <div className="pt-4 border-t" style={{ borderTop: '1px solid #333' }}>
                <div className="space-y-2 text-xs" style={{ color: '#999' }}>
                  <p>ID del Proyecto: #{design.id.toString().padStart(3, '0')}</p>
                  <p>Categoría: {design.category}</p>
                  <p>Formato: Diseño para impresión offset</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
