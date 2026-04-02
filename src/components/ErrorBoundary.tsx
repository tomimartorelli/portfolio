import { Component, type ReactNode, type ErrorInfo } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error capturado por ErrorBoundary:', error, errorInfo)
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    if (this.state.hasError) {
      // Renderizar sin Layout para evitar errores anidados
      return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4" style={{ background: 'var(--color-background)', color: 'var(--color-text-primary)' }}>
          <div className="max-w-2xl w-full text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold opacity-20" style={{ color: 'var(--color-text-primary)' }}>
                Error
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                Algo salió mal
              </h2>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta recargar la página o vuelve al inicio.
              </p>
            </div>

            {(import.meta.env.DEV || process.env.NODE_ENV === 'development') && this.state.error && (
              <div className="mt-8 p-4 rounded-lg text-left border" style={{ background: 'var(--color-background-card)', borderColor: 'var(--color-border)' }}>
                <details className="text-sm" open>
                  <summary className="cursor-pointer font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    Detalles del error (solo en desarrollo)
                  </summary>
                  <pre className="mt-2 text-xs overflow-auto whitespace-pre-wrap" style={{ color: '#ef4444' }}>
                    {this.state.error?.toString() || 'Error desconocido'}
                    {'\n\n'}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm uppercase tracking-wide"
                style={{ 
                  background: '#6A0DAD',
                  color: 'var(--color-text-primary)'
                }}
              >
                Volver al inicio
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </Link>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 border px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm uppercase tracking-wide"
                style={{ 
                  background: 'var(--color-background-cardHover)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-primary)'
                }}
              >
                Recargar página
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

